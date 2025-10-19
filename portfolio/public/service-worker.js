const CACHE_NAME = "aiplats-cache-v1";
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/aiplatslogo-192.png',
  '/aiplatslogo-512.png'
];

// Install service worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
