/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "components/tp-button.js",
    "revision": "73e02a964477f009ebde4de09c864c69"
  },
  {
    "url": "components/tp-slide.js",
    "revision": "ac8549a1bb40f3059040e6016e55dc79"
  },
  {
    "url": "components/tp-slides.js",
    "revision": "af5ca81a0bd646726ee3a484a8958714"
  },
  {
    "url": "content/01-title-card.html",
    "revision": "ef74fa408d0c141714e8fa5fd18f9935"
  },
  {
    "url": "content/02-this-is-it.html",
    "revision": "8bc447e0df2aea98be77c13148d29dd5"
  },
  {
    "url": "content/03-who-am-i.html",
    "revision": "5537fa840384baa557cb08bb2ec34270"
  },
  {
    "url": "content/04-shrug.html",
    "revision": "aad09c302e884b618119b5a3d254564a"
  },
  {
    "url": "content/05-bio.html",
    "revision": "aa87497f8cf2bfe4fc88f8e8795fb72e"
  },
  {
    "url": "content/06-web-components-title.html",
    "revision": "e7f3ead5ab25f810f0146ea9ab3845cf"
  },
  {
    "url": "content/07-history-title.html",
    "revision": "fdfe9dba1b10aee9052d423529dd925c"
  },
  {
    "url": "content/08-dhtml.html",
    "revision": "c84cc4efcd3806a5b7753d94e19d3679"
  },
  {
    "url": "content/09-jquery.html",
    "revision": "22604d71f10fbd7bc18682ca8e46e2c2"
  },
  {
    "url": "content/10-2010-frameworks.html",
    "revision": "2acadbcd3cd63928c3f60b7ee7cb456e"
  },
  {
    "url": "content/11-angular-js.html",
    "revision": "a740f5c8a890e377810581556d1235e8"
  },
  {
    "url": "content/12-react.html",
    "revision": "a3782b26c0d294b492b6150865ad498b"
  },
  {
    "url": "content/13-vue.html",
    "revision": "e425028593a7bd2b7e3ebdead0d49345"
  },
  {
    "url": "content/14-the-others.html",
    "revision": "04ddbea74f6cbd179d9d10951d872407"
  },
  {
    "url": "content/15-web-components.html",
    "revision": "6f688d1e2daa2f722c48a29b1f93fd98"
  },
  {
    "url": "content/16-web-components-history.html",
    "revision": "d85651de78ff25e7b739b214a758b323"
  },
  {
    "url": "content/17-shadow-dom.html",
    "revision": "ff08fb4385cd511d47914adebe16edec"
  },
  {
    "url": "content/18-shadow-dom-example.html",
    "revision": "68bc07647698a5619147e3f9ef7baad6"
  },
  {
    "url": "content/19-shadow-dom-encapsulation.html",
    "revision": "c3179ce910f1e16380a488c1bf06003f"
  },
  {
    "url": "content/20-shadow-dom-example-2.html",
    "revision": "467fd125dbd27ce17f8a7b35851495f2"
  },
  {
    "url": "content/21-slot.html",
    "revision": "09a8b9d59d57dfa654f89c0e561a4232"
  },
  {
    "url": "content/22-slot-example.html",
    "revision": "8739754e549f582a9bb92b4dc0ee4dbb"
  },
  {
    "url": "content/23-custom-elements.html",
    "revision": "54edd933c7d8fa3de73d31f4c92192f2"
  },
  {
    "url": "content/24-custom-elements-api.html",
    "revision": "76960c101689f3180a8780b41a40bf29"
  },
  {
    "url": "content/25-custom-elements-example.html",
    "revision": "872ca790a237ab79651d328570911bda"
  },
  {
    "url": "content/26-the-most-useless-demo.html",
    "revision": "15e96857f4fc6e172037bcdfd42bb220"
  },
  {
    "url": "content/27-custom-elements-demo.html",
    "revision": "2f9ea2f557b38cb56602d1fb1ea73cd6"
  },
  {
    "url": "content/28-custom-elements-gotchas.html",
    "revision": "130e3515967fb7202b4cba91b0bd5018"
  },
  {
    "url": "content/29-styling-custom-elements.html",
    "revision": "3ed7276f48420c5344213539a8934f58"
  },
  {
    "url": "content/30-when-to-use.html",
    "revision": "0fa1a6c7653aa09e120ce4b2e556e8f6"
  },
  {
    "url": "content/30b-when-to-use.html",
    "revision": "201cc2cd141de938a351a4ec25fa451d"
  },
  {
    "url": "content/31-template.html",
    "revision": "288e2eb86ca4c39f83be8bf0c0cca083"
  },
  {
    "url": "content/32-template-when-to-use.html",
    "revision": "95e3497a6fdc04746d41498c204ca3d5"
  },
  {
    "url": "content/33-browser-support.html",
    "revision": "1a6861ba8bd2e903220f654771e936ec"
  },
  {
    "url": "demos/custom-elements.js",
    "revision": "c3ad0f46fdc4b8bbd107fce55a056cb9"
  },
  {
    "url": "index.html",
    "revision": "efa6977041b0a3e6e2f8b1f64f78d6b8"
  },
  {
    "url": "manifest.json",
    "revision": "d3d31cc6c083339ea1839b1a40bab08e"
  },
  {
    "url": "presentation.js",
    "revision": "a62d28c0601a4c29fb7894a8f0358872"
  },
  {
    "url": "resources/angular.svg",
    "revision": "5c69e565f1ae6d7717fb3ecd2be004ad"
  },
  {
    "url": "resources/family.jpg",
    "revision": "33adfde1eddfdaca04ec71620acb78f9"
  },
  {
    "url": "resources/highlight/CHANGES.md",
    "revision": "11ed27068d438955be488dc0a9790c10"
  },
  {
    "url": "resources/highlight/highlight.pack.js",
    "revision": "2af27be8dc0e63ef3867a193a2949b98"
  },
  {
    "url": "resources/highlight/README.md",
    "revision": "76d4522da594de34d6ec69f86f83aa4a"
  },
  {
    "url": "resources/highlight/README.ru.md",
    "revision": "f8b4c1826598694c77d4618f1d609b12"
  },
  {
    "url": "resources/icons/favicon-128.png",
    "revision": "c876b42e0146e85037e7b7ac981563a0"
  },
  {
    "url": "resources/icons/favicon-16.png",
    "revision": "b66ae3fd47d6c97eeea3136d4290ff4e"
  },
  {
    "url": "resources/icons/favicon-196.png",
    "revision": "6bedbcb626082c1fbc23860f12bd6079"
  },
  {
    "url": "resources/icons/favicon-32.png",
    "revision": "9bea1284a12ed8726b7c30c06e532c0e"
  },
  {
    "url": "resources/icons/favicon-512.png",
    "revision": "22264630f9fcad3b29c1ddd22fd85abe"
  },
  {
    "url": "resources/icons/favicon-96.png",
    "revision": "a377c9735cc44547321d7daa52b694e0"
  },
  {
    "url": "resources/jquery.png",
    "revision": "b34e848e1f0c59afa5efaa7862cddd5b"
  },
  {
    "url": "resources/react.svg",
    "revision": "05a3e30fdf60ebe9d00cf4725d44bd42"
  },
  {
    "url": "resources/templiteral.es.js",
    "revision": "b463b65e3c4ebe2caadb7e28c5dea56d"
  },
  {
    "url": "resources/vue.svg",
    "revision": "938241fe1d52cf5b525889e1078bc737"
  },
  {
    "url": "resources/web-components.svg",
    "revision": "5359186bd502e0273eaf606b6934bc35"
  },
  {
    "url": "resources/workbox-sw.js",
    "revision": "cae412aa97f022170abe6d6a6dbff090"
  },
  {
    "url": "styles/global.css",
    "revision": "c7bb262838649ce6ca272e6e857777b3"
  },
  {
    "url": "styles/highlight.css",
    "revision": "b78723ec097ec3fedfba06efbc5c8cfc"
  },
  {
    "url": "styles/monokai-sublime.css",
    "revision": "0c8b4c0e8a584e7142b08d914644cd9d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/ThunderPlainsJS/");
