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
        // Cache miss - fetch from network and cache it
        return fetch(event.request)
          .then(networkResponse => {
      // If both fail, show offline page only for navigation requests
      if (event.request.mode === 'navigate') {
        return caches.match('/offline.html');
      }
      // For non-navigation requests, just fail silently
      return Promise.reject('Network error');
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic'
            ) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          });
      })
      .catch(() => {
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