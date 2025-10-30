// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_nuxt/*",
    "/",
    "/favicon.ico",
    "/robots.txt",
    "/site.xml",
    "/sitemap.xml",
    "/test-sitemap.xml",
    "/images/4-axis-bridge-saw.svg",
    "/images/5-axis-bridge-saw.svg",
    "/images/background.svg",
    "/images/bridge-cutting-machine.svg",
    "/images/cement-icon.svg",
    "/images/ceramic-icon.svg",
    "/images/cnc-stone-bridge-saw.svg",
    "/images/granite-icon.svg",
    "/images/marble-icon.svg",
    "/images/monoblock-bridge-saw.svg",
    "/images/stone-block-cutter.svg",
    "/images/stone-cutting-guide.svg",
    "/ru/sitemap.xml",
    "/zh/sitemap.xml",
    "/_i18n/6Y3EusTf/en/messages.json"
  ]
};

// D:/nvm/node_cache/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "E:\\dsy_code\\dinosawwebsite\\.wrangler\\tmp\\pages-cjMCpC\\bundledWorker-0.7794000528864011.mjs";
import { isRoutingRuleMatch } from "D:\\nvm\\node_cache\\_npx\\32026684e21afda6\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "E:\\dsy_code\\dinosawwebsite\\.wrangler\\tmp\\pages-cjMCpC\\bundledWorker-0.7794000528864011.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=c8ekh8xrwvk.js.map
