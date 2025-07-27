// public/sw.js

// При установке сразу активировать новый воркер
self.addEventListener('install', event => {
  self.skipWaiting();
});

// При активации взять под контроль все страницы
self.addEventListener('activate', event => {
  clients.claim();
});

// (Опционально) простой «перепросылщик» запросов:
self.addEventListener('fetch', event => {
  // просто пропускаем все запросы дальше
  event.respondWith(fetch(event.request));
});