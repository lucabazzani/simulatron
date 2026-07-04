const CACHE_NAME = "byluca-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/common/global.css",
  "/common/js/engine.js",
  "/icono.png",
];

// Instalar y cachear recursos base
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Cache first, falling back to network
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
