const CACHE_NAME = "aiplats-cache-v2"; // change version to update SW
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',

  // Icons required by manifest
  '/aiplatslogo-192.png',
  '/aiplatslogo-512.png',

  // Add your other images
  '/aiplatslogo-removebg-preview.png',

  // React build files (if using Create-React-App)
  '/static/js/bundle.js',
  '/static/js/main.js',
  '/static/js/0.chunk.js',
  '/static/js/1.chunk.js',
  '/static/css/main.css'
];

// Install & pre-cache assets
self.addEventListener("install", (event) => {
  self.skipWainting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching files");
      return cache.addAll(urlsToCache).catch(err => console.error(err));
    })
  );
});

// Fetch: serve from cache or fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Optional: fallback for HTML pages
        if (event.request.mode === "navigate") {
          return caches.match('/index.html');
        }
      });
    })
  );
});

// Activate & clear old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(clientsClaim.claim());
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter(name => !cacheWhitelist.includes(name))
          .map(name => caches.delete(name))
      )
    )
  );
});
