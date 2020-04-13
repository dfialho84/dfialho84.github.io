importScripts("/precache-manifest.19df265b47b66af49678c6571b356b01.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// v1

workbox.core.setCacheNameDetails({ prefix: "gwt-brisco" });

/*self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});*/

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == "skipWaiting") {
    self.skipWaiting();
  }
});

