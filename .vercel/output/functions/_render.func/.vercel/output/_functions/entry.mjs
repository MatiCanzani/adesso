import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BxcD7DNc.mjs';
import { manifest } from './manifest_9pJgvzPK.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/book.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/rss.xml.astro.mjs');
const _page6 = () => import('./pages/services.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.15_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/book.astro", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/services.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "753e0386-3316-473c-b1e9-b8501f4162bc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
