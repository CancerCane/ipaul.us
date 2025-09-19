// Service Worker for iPaul Media PWA
const CACHE_NAME = 'ipaul-media-v1';
const urlsToCache = [
  '/',
  '/assets/css/mobile-first.css',
  '/assets/css/styles.css',
  '/assets/css/mdb.dark.min.css',
  '/assets/js/mdb.umd.min.js',
  '/assets/img/logo_header.png',
  '/offline.html'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    ).catch(() => {
      // If both fail, show offline page
      return caches.match('/offline.html');
    })
  );
});

// Update Service Worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});