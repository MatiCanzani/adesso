import 'cookie';
import { g as decodeKey } from './chunks/astro/server_CqGFnifT.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_cgn4schV.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/maticanzani/Documents/Personal/repos/vale/adesso/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"book/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/book","isIndex":false,"type":"page","pattern":"^\\/book\\/?$","segments":[[{"content":"book","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/book.astro","pathname":"/book","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.15_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://adesso-coaching.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/book.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/book@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/components/BlogHeader.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/components/BlogCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/components/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.15_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/book@_@astro":"pages/book.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/maticanzani/Documents/Personal/repos/vale/adesso/node_modules/.pnpm/astro@4.16.15_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/maticanzani/Documents/Personal/repos/vale/adesso/node_modules/.pnpm/@astrojs+react@3.6.3_@types+react-dom@18.3.1_@types+react@18.3.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","/Users/maticanzani/Documents/Personal/repos/vale/adesso/node_modules/.pnpm/@astrojs+vercel@7.8.2_astro@4.16.15_rollup@4.24.0_typescript@5.6.3__react@18.3.1/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_C4a5pkOj.mjs","\u0000@astrojs-manifest":"manifest_9pJgvzPK.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Dus0kfmV.js","/astro/hoisted.js?q=1":"_astro/hoisted.CTS8J01n.js","/astro/hoisted.js?q=2":"_astro/hoisted.CKuJhRaA.js","/Users/maticanzani/Documents/Personal/repos/vale/adesso/src/components/Calendar":"_astro/Calendar.DfFP2fRA.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=3":"_astro/hoisted.BoSUTZ2r.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/coaching-2.D09rO3gR.avif","/_astro/kumbh-sans-math-wght-normal.F8t5Oz2u.woff2","/_astro/kumbh-sans-latin-wght-normal.9_PmqMxx.woff2","/_astro/kumbh-sans-latin-ext-wght-normal.tMZHC8RE.woff2","/_astro/kumbh-sans-symbols-wght-normal.CysWjyVr.woff2","/_astro/vale-2.CKWAhK2O.png","/_astro/about.BIf6n-Xc.css","/favicon.svg","/_astro/Book.astro_astro_type_script_index_0_lang.DTxo-b5K.js","/_astro/Calendar.DfFP2fRA.js","/_astro/client.BIGLHmRd.js","/_astro/hoisted.BoSUTZ2r.js","/_astro/hoisted.CKuJhRaA.js","/_astro/hoisted.CTS8J01n.js","/_astro/hoisted.Dus0kfmV.js","/_astro/index.DhYZZe0J.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/about/index.html","/blog/index.html","/book/index.html","/rss.xml","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"3tHCTUVVbp+MkFN++X93mZ1uak2UFZe9ENMMMBUuCV8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
