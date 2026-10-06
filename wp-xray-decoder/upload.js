await (async () => {
  const RAW = "https://raw.githubusercontent.com/parisnicolebay-hue/911dentist-pwa/wp-xray-decoder/wp-xray-decoder/";
  const API = "/wp-json/wp/v2/";
  const qs = (o) => String.fromCharCode(63) + new URLSearchParams(o).toString();
  const get = (u) => fetch(u, { credentials: "same-origin", headers: H }).then((r) => r.json());
  let nonce = window.wpApiSettings && window.wpApiSettings.nonce;
  if (!nonce) nonce = (await fetch("/wp-admin/admin-ajax.php" + qs({ action: "rest-nonce" }), { credentials: "same-origin" }).then((r) => r.text())).trim();
  const H = { "X-WP-Nonce": nonce };
  const me = await fetch("/wp-json/wp/v2/users/me", { credentials: "same-origin", headers: H });
  if (!me.ok) return "STOP: not logged in to wp-admin (" + me.status + ")";
  const M = await fetch(RAW + "upload-manifest.json", { cache: "no-store" }).then((r) => r.json());
  const P = M.page;
  const existing = await get(API + "pages" + qs({ slug: P.slug, status: "publish,draft,pending,private,future", context: "edit" }));
  if (Array.isArray(existing) && existing.length) return "STOP: a page with this slug already exists, ID " + existing[0].id + " status " + existing[0].status;
  let html = await fetch(RAW + M.block, { cache: "no-store" }).then((r) => r.text());
  if (!html.startsWith(M.blockStartsWith) || !html.includes("</script>")) return "STOP: block file did not download cleanly";
  const done = [];
  for (const im of M.images) {
    const stem = im.file.replace(/\.jpg$/, "");
    const found = await get(API + "media" + qs({ slug: stem, context: "edit" }));
    let m = Array.isArray(found) && found.length ? found[0] : null;
    if (!m) {
      const blob = await fetch(RAW + im.file, { cache: "no-store" }).then((r) => { if (!r.ok) throw new Error("download " + im.file + " " + r.status); return r.blob(); });
      const res = await fetch(API + "media", { method: "POST", credentials: "same-origin", headers: Object.assign({}, H, { "Content-Type": "image/jpeg", "Content-Disposition": 'attachment; filename="' + im.file + '"' }), body: blob });
      m = await res.json();
      if (!m.id) return "STOP: upload failed for " + im.file + " (" + res.status + " " + (m.code || "") + "). Uploaded so far: " + done.join(", ");
    }
    const upd = await fetch(API + "media/" + m.id, { method: "POST", credentials: "same-origin", headers: Object.assign({}, H, { "Content-Type": "application/json" }), body: JSON.stringify({ title: im.title, alt_text: im.alt, caption: im.caption, description: im.description }) });
    if (!upd.ok) return "STOP: could not save alt text and credit on media " + m.id;
    html = html.split("{{XRD_IMG_" + im.key + "}}").join(m.source_url);
    done.push(im.key + " " + m.id);
  }
  if (html.includes("{{XRD_IMG_")) return "STOP: an image placeholder was left in the page. Media: " + done.join(", ");
  const ref = await get(API + "pages/" + P.copyLayoutFrom + qs({ context: "edit" }));
  const meta = {};
  Object.entries((ref && ref.meta) || {}).forEach(([k, v]) => { if (/^(site-|ast-|theme-|stick-|header-|footer-|astra-)/.test(k)) meta[k] = v; });
  const create = (withLayout) => fetch(API + "pages", { method: "POST", credentials: "same-origin", headers: Object.assign({}, H, { "Content-Type": "application/json" }),
    body: JSON.stringify(Object.assign({ title: P.title, slug: P.slug, status: "draft", excerpt: P.seoDescription, content: "<!-- wp:html -->\n" + html + "\n<!-- /wp:html -->" }, withLayout ? { template: (ref && ref.template) || "", meta } : {})) });
  let res = await create(true);
  let layout = "copied " + Object.keys(meta).length + " settings";
  if (res.status === 400) { res = await create(false); layout = "NOT copied (WordPress rejected the layout settings)"; }
  const page = await res.json();
  if (!page.id) return "STOP: page was not created (" + res.status + " " + (page.code || "") + "). Media: " + done.join(", ");
  const rm = await fetch("/wp-json/rankmath/v1/updateMeta", { method: "POST", credentials: "same-origin", headers: Object.assign({}, H, { "Content-Type": "application/json" }),
    body: JSON.stringify({ objectType: "post", objectID: page.id, meta: { rank_math_title: P.seoTitle, rank_math_description: P.seoDescription, rank_math_focus_keyword: P.focusKeyword } }) });
  const saved = await get(API + "pages/" + page.id + qs({ context: "edit" }));
  const c = (saved.content && saved.content.raw) || "";
  const checks = ["<script", "xrd-viewbtn", "Image credits"].every((s) => c.includes(s)) && (c.match(/xrd-stage/g) || []).length >= 4;
  return "DONE: draft page " + page.id + " | media " + done.join(", ") + " | layout " + layout + " | Rank Math " + rm.status + " | content check " + (checks ? "OK" : "FAILED");
})();
