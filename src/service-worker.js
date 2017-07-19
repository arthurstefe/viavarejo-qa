var dataCacheName = 'weatherData-v1';
var cacheName = 'weatherPWA-final-1';
var filesToCache = [
  '/',
  '/index.html',
  '/vendor.61898257e6a93b424f36.bundle.js',
  '/styles.9c68860eca60c121c002.bundle.css',
  '/polyfills.3ae08eaf6129a55130cb.bundle.js',
  '/main.211bb248a1f288b8e1f6.bundle.js',
  '/inline.9f1e3cec51d49deed9d7.bundle.js',
  '/favicon.png',
  '/favicon.ico',
  '/assets/images/bg.png',
  '/assets/images/login-transportadora.png',
  '/assets/images/login-viavarejo.png',
  '/assets/images/viavarejo.svg'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});