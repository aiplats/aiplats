module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,jpeg,svg,ico,json}'
  ],
  swDest: 'build/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: ({ url }) => url.origin.includes('github.com'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'external-api-cache',
      },
    },
  ],
};
