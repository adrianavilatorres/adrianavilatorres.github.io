if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const o=e=>d(e,n),c={module:{uri:n},exports:f,require:o};i[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"01b2f337.js",revision:"cdae10c06823f7ee4d71f7d832a94b80"},{url:"3f461019.js",revision:"1990c7636963bf109a6b9f023da1a071"},{url:"4d8d4512.js",revision:"ab6bfce25e97a7732581edb3d4752c09"},{url:"6e5d9c4c.js",revision:"8b0fc1a1ead1d9bdfa7f5eadc13ec4b5"},{url:"be799bd3.js",revision:"bff5a4ba0ec146f7eca019b3627a8035"},{url:"fb09a58c.js",revision:"26550664fa31a52f7d1ebf78ec1d98dd"},{url:"index.html",revision:"32abe9a2e59b3d3d4bec95af85b7db25"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map