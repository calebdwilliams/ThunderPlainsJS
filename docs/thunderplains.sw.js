const cacheName = 'thunderplains-web-components';

const filesToCache = [
  '/',
  '/ThunderPlainsJS/index.html',
  '/ThunderPlainsJS/styles/global.css',
  '/ThunderPlainsJS/presentation.js',
  '/ThunderPlainsJS/styles/global.css',
  '/ThunderPlainsJS/styles/global.css'
];

self.addEventListener('install', event => {
  console.debut('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.debut('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});