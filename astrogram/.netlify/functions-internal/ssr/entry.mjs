import { renderers } from './renderers.mjs';
import { manifest } from './manifest_IRaekGNs.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CofR-wzJ.mjs');
const _page1 = () => import('./chunks/_hashtag__Bmr39Srh.mjs');
const _page2 = () => import('./chunks/Login_BVsDSOb2.mjs');
const _page3 = () => import('./chunks/Logout_BnCaWxUn.mjs');
const _page4 = () => import('./chunks/Register_VUvBm5NP.mjs');
const _page5 = () => import('./chunks/_user__DN2g9wOY.mjs');
const _page6 = () => import('./chunks/index_DFhPby2d.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/hashtags/[hashtag].astro", _page1],
    ["src/pages/Login.astro", _page2],
    ["src/pages/Logout.astro", _page3],
    ["src/pages/Register.astro", _page4],
    ["src/pages/user/[user].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f53d0947-dade-4d38-b438-ba4387819363"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
