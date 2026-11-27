const CACHE = '911dentist-shell-v7';
const SHELL = ['./','./index.html','./styles.css?v=6','./app.js?v=6','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('911dentist-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if(event.request.method !== 'GET') return;

  if(url.hostname === '911dentist.org'){
    if(url.pathname.includes('/wp-json/wp/v2/posts')){
      event.respondWith(fetch(event.request).then(async response => {
        if (!response.ok) throw new Error('Guide feed unavailable');
        const cache = await caches.open(CACHE);
        await cache.put(event.request, response.clone()).catch(() => {});
        return response;
      }).catch(async () => (await caches.match(event.request)) || Response.error()));
    }
    return;
  }

  if(url.origin !== self.location.origin) return;

  if(event.request.mode === 'navigate'){
    event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  })));
});
