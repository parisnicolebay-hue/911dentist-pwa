# 911Dentist PWA

A zero-database, mobile-first patient gateway for 911Dentist.org.

## Included

- English and Swedish interface with saved language preference
- Emergency red-flag information with 911 (US) and 112 (Sweden/EU) actions
- Clear pathways to emergency guidance, $49/$149 virtual consult options, and the current $29 second-opinion option
- Recent public guides from the 911Dentist WordPress REST API
- Patient registration, login, dentist-network, privacy, terms, and disclaimer links
- Installable PWA manifest, branded icons, and offline app shell
- Responsive mobile, tablet, and desktop layouts
- No analytics, database, form submission, payment processing, patient intake, uploads, or PHI storage

## Safety boundary

The PWA is an informational gateway. It does not diagnose, prescribe, collect symptoms, process payments, or accept photos/X-rays. Sensitive actions continue on the existing 911Dentist.org website.

Do not add patient intake or medical uploads to this static GitHub Pages app.

## Test locally

Service workers require HTTP rather than a `file://` URL:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages deployment

1. Create a public repository named `911dentist-pwa`.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/root`.
4. The included `CNAME` file requests `app.911dentist.org`.
5. In the DNS zone for `911dentist.org`, add only this record:
   - Type: `CNAME`
   - Name: `app`
   - Points to: `parisnicolebay-hue.github.io`
6. Leave the root domain, `www`, email, and all existing WordPress records unchanged.
7. After GitHub reports **DNS check successful**, enable **Enforce HTTPS**.

## Search visibility

The app includes `noindex,follow` and a canonical link to `https://911dentist.org/` so it does not compete with the main website in search results.

## Future store packaging

After the PWA is live and verified, it can be wrapped for Google Play in a separate Android branch without changing the PWA or the WordPress site.
