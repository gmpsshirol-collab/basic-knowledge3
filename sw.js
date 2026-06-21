// ಕನಿಷ್ಠ Service Worker — PWA "installable" ಆಗಲು ಬೇಕು
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // ಸರಳ ಪಾಸ್‌ಥ್ರೂ — ಜಾಲ ಇದ್ದಂತೆ ಫೈಲ್‌ಗಳನ್ನು ತರುತ್ತದೆ
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
