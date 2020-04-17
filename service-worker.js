importScripts("/precache-manifest.cb337b134f722397d509e4fec7cee0e0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// v2

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

