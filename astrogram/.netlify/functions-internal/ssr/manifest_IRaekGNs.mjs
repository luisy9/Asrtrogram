import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_C3m9rwyv.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"}],"routeData":{"route":"/hashtags/[hashtag]","isIndex":false,"type":"page","pattern":"^\\/hashtags\\/([^/]+?)\\/?$","segments":[[{"content":"hashtags","dynamic":false,"spread":false}],[{"content":"hashtag","dynamic":true,"spread":false}]],"params":["hashtag"],"component":"src/pages/hashtags/[hashtag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"},{"type":"inline","content":".gradient[data-astro-cid-wpdkkdke]{background:linear-gradient(135deg,#f6ad55,#fc8181)}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/Login\\/?$","segments":[[{"content":"Login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Login.astro","pathname":"/Login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"}],"routeData":{"route":"/logout","isIndex":false,"type":"page","pattern":"^\\/Logout\\/?$","segments":[[{"content":"Logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Logout.astro","pathname":"/Logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/Register\\/?$","segments":[[{"content":"Register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Register.astro","pathname":"/Register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"}],"routeData":{"route":"/user/[user]","isIndex":false,"type":"page","pattern":"^\\/user\\/([^/]+?)\\/?$","segments":[[{"content":"user","dynamic":false,"spread":false}],[{"content":"user","dynamic":true,"spread":false}]],"params":["user"],"component":"src/pages/user/[user].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Login.DiqCpdbZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/Login.astro",{"propagation":"none","containsHead":true}],["/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/hashtags/[hashtag].astro",{"propagation":"none","containsHead":true}],["/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/pages/user/[user].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/Logout.astro":"chunks/pages/Logout_CjnMJRCv.mjs","/src/pages/Register.astro":"chunks/pages/Register_DzF4jhPD.mjs","/src/pages/user/[user].astro":"chunks/pages/_user__BHMSgqGB.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_eIwykQGF.mjs","/src/pages/index.astro":"chunks/pages/index_DOQcnZx9.mjs","\u0000@astrojs-manifest":"manifest_IRaekGNs.mjs","/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CofR-wzJ.mjs","\u0000@astro-page:src/pages/hashtags/[hashtag]@_@astro":"chunks/_hashtag__Bmr39Srh.mjs","\u0000@astro-page:src/pages/Login@_@astro":"chunks/Login_BVsDSOb2.mjs","\u0000@astro-page:src/pages/Logout@_@astro":"chunks/Logout_BnCaWxUn.mjs","\u0000@astro-page:src/pages/Register@_@astro":"chunks/Register_VUvBm5NP.mjs","\u0000@astro-page:src/pages/user/[user]@_@astro":"chunks/_user__DN2g9wOY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DFhPby2d.mjs","/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/OptionsImg":"_astro/OptionsImg.CD89-Jns.js","/Users/luisdeharo/Desktop/enfocaT/Asrtrogram/astrogram/src/components/FooterComponent":"_astro/FooterComponent.BXXy8wL7.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Login.DiqCpdbZ.css","/favicon.svg","/options.png","/_astro/FooterComponent.BXXy8wL7.js","/_astro/OptionsImg.CD89-Jns.js","/_astro/client.DbokQZWz.js","/_astro/index.NEDEFKed.js","/_astro/jsx-runtime.K1e75nIr.js"],"buildFormat":"directory"});

export { manifest };
