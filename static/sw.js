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
    "url": "/_nuxt/0.nuxt.bundle.dd545a4ab0d3b3c69726.js",
    "revision": "8b08c72468f124bd5c80ddaf3b3e5f51"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.d62e66fc88870b26746f.js",
    "revision": "8c69e43a47c9b5d8044b160e6573e0da"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.bab0b96a6289603acc15.js",
    "revision": "98ecd89034fd4854066a64b0e92e14a1"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.ef4195534d6476e541bc.js",
    "revision": "0b2682847ee7c34aae2c8a57df64292a"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.921d8b63f74ddb477a57.js",
    "revision": "6d2b5d1b0344da483889ccd01e5868e9"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "c6c823bb37e89996a8c2e7bdb08c1546"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.2474aec8807f9581e62b.js",
    "revision": "d2baa1493364655044284ac2039dc855"
  },
  {
    "url": "/_nuxt/manifest.c051a06e.json",
    "revision": "33e9f94b98b69a7fd9bb99dba25cc9e9"
  },
  {
    "url": "/_nuxt/nuxt.bundle.75c569f023633858c1b1.js",
    "revision": "3218cffaf62d6f9fdc290f5f42df3221"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "29f0c3bc8b7b23da1263256321210c4b"
  },
  {
    "url": "/_nuxt/vendor.bundle.d4cb45055441bdf1ba31.js",
    "revision": "c2f29d6c9fb70279ad16badd40b7ec4f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
