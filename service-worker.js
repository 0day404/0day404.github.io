if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const l=e=>d(e,c),f={module:{uri:c},exports:r,require:l};i[c]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(s(...e),r)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/16/python文件删除系统/index.html",revision:"0560ee61cfad126f47d1a792da54e837"},{url:"2023/08/03/VS2022/index.html",revision:"b14adae850e6bfda0ea73612b5f1b44c"},{url:"2023/08/03/window设置开机启动/index.html",revision:"cfed21f2aa90c53ef2115b7e604f329a"},{url:"2023/09/16/中文乱码/index.html",revision:"f58285e92640d4dc52af2de7f3834e5a"},{url:"2023/10/10/Comodo防护软件的正确使用/index.html",revision:"ef32598a0222df0e70bb101e017a9cef"},{url:"2023/10/11/Comodo Internet Security 5.0 免費防毒防火牆軟體新手上手教學/index.html",revision:"617d20dbb504b046853717927564071d"},{url:"2023/10/17/新建 Markdown/index.html",revision:"197afb42f4f7a318fbfc8552f4236e27"},{url:"2025/03/22/hello-world/index.html",revision:"447036f1e1ce5b91b0b9fd95fb9a40a2"},{url:"archives/2023/07/index.html",revision:"d803f6c050c8c122dcbff4f55d7f8c54"},{url:"archives/2023/08/index.html",revision:"f5cba630423608d575353482094fa37f"},{url:"archives/2023/09/index.html",revision:"a4c0a132b5e30e3dc7fce58cbb2d4f0f"},{url:"archives/2023/10/index.html",revision:"1bf20efb23c0ad9844d2ef7393a0b71f"},{url:"archives/2023/index.html",revision:"2a976a304bf583e62faf7f2eb6eb7cb0"},{url:"archives/2025/03/index.html",revision:"d90e793dde2564197a44944c7a82b866"},{url:"archives/2025/index.html",revision:"66a8c1c3ba5d057306f0de03ae1b7a6f"},{url:"archives/index.html",revision:"e6c598ff45a2dfc1b5a153c6e6c62115"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"f33d27b9673712a6b7345a63245d2c36"},{url:"categories/娱乐/index.html",revision:"9a9672c4d174fabec48f35dd85bdfbb3"},{url:"categories/工具/index.html",revision:"b1b07a6d676f94cc62abdd450c1ded1b"},{url:"categories/教程/index.html",revision:"9fa259c9a7d44a35720c4b54d1d53e80"},{url:"categories/编程/index.html",revision:"2e703ce079ab3dd691af6d5647b54141"},{url:"comments/index.html",revision:"65f6b4990ee3fb166e9ebe11f6624d2e"},{url:"css/custom.css",revision:"1f74bd61af061c596b1ccf8b3293737e"},{url:"css/index.css",revision:"0d93e6595e64aeda90ce207cde29a6cd"},{url:"css/loading.css",revision:"730c3c2b94b9a819f5cd5386551113a1"},{url:"css/mooc.css",revision:"39072013a083887101d4b5004056bf97"},{url:"css/progress_bar.css",revision:"835e6017d8958b40a35eadc2c1510896"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"e18f1ae7384c1e90188edb7a191502cf"},{url:"img/1.png",revision:"2e3c2b3f3a964c83665bf53cb1fda0bf"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/favicon.png",revision:"a530b0a48e93dee6496e25ec98918584"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"366698bea31b2cb503ddccc8d8bc5dc5"},{url:"js/main.js",revision:"ab1dddd2229511c7cb6f2275f2f63e99"},{url:"js/mooc.js",revision:"f0821240ac3951a5a335fe155c6c3ccb"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/title.js",revision:"1f81adc88e43c478cdefabd1f8d50d53"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"21975dbad5b2bb8b2040ad0a1473b64b"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"4b26bfa90839695f7649777a52d398d7"},{url:"live2d-widget/README.html",revision:"9001b3b373608ba45a15bac2520669eb"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"dffb700cffcbc97f88aa87920f4dee96"},{url:"tags/index.html",revision:"ec0ac70c98879ead8ad9a818b389745d"},{url:"tags/python/index.html",revision:"89f82dea99899f3ae257b0a6578c4db1"},{url:"tags/win11/index.html",revision:"8f8896115065a5eb57185e8e98fd4110"},{url:"tags/教程/index.html",revision:"7517bdd1a8d404f52ad1f9b999f45d6b"},{url:"tags/资源/index.html",revision:"7f19548ae4d2bb436ff5c02e5e0c3c89"},{url:"tags/防火墙/index.html",revision:"61ba298cdc8eeaa80ebcb8c413af88a3"}],{})}));
//# sourceMappingURL=service-worker.js.map
