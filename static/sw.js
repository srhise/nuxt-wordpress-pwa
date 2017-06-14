importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.b0c0fbbe1158091d06a5.js",
    "revision": "2709951b7371cc6075cf73d4a8e075d9"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.ef6ce0a9a51e31757a49.js",
    "revision": "36830f8f96614fb2f31f377bc8cfd8d6"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c3d0d20e660205946e44.js",
    "revision": "b7b33866653626b829bb70fc149d6797"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.3d0efdaba98188a0f624.js",
    "revision": "2e93d07ad562aa52f408a7f7854f39fe"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.63bd4bdd2562913e6ce9.js",
    "revision": "2f4ea4651b76dd3cd448a4f4298177b0"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "ce2bafa9d64e911656e21a9c787e7a1e"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.3db2a61b5027878b168c.js",
    "revision": "e86be3a717f4ea92567953ba89a572c4"
  },
  {
    "url": "/_nuxt/manifest.c051a06e.json",
    "revision": "33e9f94b98b69a7fd9bb99dba25cc9e9"
  },
  {
    "url": "/_nuxt/nuxt.bundle.038a2143eb0f52565c43.js",
    "revision": "e659246970593f188ac97663c7b57b0d"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "35ae0eb25cb34d6bf69484e168e2e3b8"
  },
  {
    "url": "/_nuxt/vendor.bundle.d2cb350096299a177a1e.js",
    "revision": "903ce38e8e9939a375564c51b3804651"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
