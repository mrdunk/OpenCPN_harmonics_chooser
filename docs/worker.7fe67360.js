// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9JsF8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "712542d77fe67360";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"huufM":[function(require,module,exports,__globalThis) {
var _parseData = require("./parse_data");
onmessage = (e)=>{
    const stations = new (0, _parseData.ParseStations)(e.data[0]);
    postMessage(stations);
};

},{"./parse_data":"e2gjv"}],"e2gjv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse_station_metadata", ()=>parse_station_metadata);
parcelHelpers.export(exports, "ParseStations", ()=>ParseStations);
/* Return an object of non tidal country information
 * for all countries we have tidal data for.
 */ parcelHelpers.export(exports, "country_attributes", ()=>country_attributes);
var _papaparse = require("papaparse");
var _papaparseDefault = parcelHelpers.interopDefault(_papaparse);
var _worldCountries = require("world-countries");
var _worldCountriesDefault = parcelHelpers.interopDefault(_worldCountries);
var _countriesAndTimezones = require("countries-and-timezones");
function parse_station_metadata(csvs) {
    const metadata = new Map();
    const warnings = [];
    for (const [key, csv] of csvs){
        let entries_count = 0;
        let new_entries_count = 0;
        const [filename, data_type, file_type, data] = csv;
        if (data_type != "metadata") continue;
        const parsed = (0, _papaparseDefault.default).parse(data, {
            header: true,
            skipEmptyLines: true
        });
        if (parsed.errors.length > 0) {
            console.warn(`Errors parsing the metadata file: ${parsed.errors}`);
            warnings.push(`Metadata file: ${filename} has incorrect format.<br/>This may result in poor station names.`);
            continue;
        }
        const required_keys = [
            "SITE NAME",
            "FILE NAME"
        ];
        const missing_keys = [];
        for (const required_key of required_keys)if (parsed.meta.fields === undefined || !parsed.meta.fields.includes(required_key)) missing_keys.push(required_key);
        if (missing_keys.length > 0) {
            console.warn(`Did not find keys: ${missing_keys} in metadata file: ${filename}`);
            console.warn(`Expected at least these fields: ${required_keys}`);
            console.warn(`Found these fields: ${parsed.meta.fields}`);
            warnings.push(`Metadata file: ${filename} has incorrect format.<br/>This may result in poor station names.`);
            continue;
        }
        for (const entry of parsed.data){
            const tide_gauge_name = entry["FILE NAME"];
            if (metadata.has(tide_gauge_name)) {
                const old_filename = metadata.get(tide_gauge_name).get("metadata_filename");
                console.warn(`Replacing ${tide_gauge_name}. Originally from ${old_filename}. Replaced by ${filename}`);
            } else new_entries_count += 1;
            entries_count += 1;
            const map = new Map();
            metadata.set(tide_gauge_name, map);
            for (const [key, value] of Object.entries(entry))map.set(key, value);
            map.set("metadata_filename", filename);
            const site_name = entry["SITE NAME"];
            const human_name = site_name.replace(/([A-Z,0-9]+)/g, " $1").replace(/_/g, "").trim();
            map.set("human_name", human_name);
        }
        if (new_entries_count === entries_count) console.info(`Found ${new_entries_count} new metadata entries in ${filename}`);
        else console.info(`Found ${new_entries_count} new metadata entries out of ${entries_count} metadata entries total in ${filename}`);
        if (entries_count === 0) {
            console.warn(`No metadata entries found in ${filename}`);
            warnings.push(`No metadata entries found in ${filename}`);
        } else if (new_entries_count === 0) {
            console.warn(`All metadata entries found in ${filename} were already present in another file.`);
            warnings.push(`All metadata entries found in ${filename} were already present in another file.`);
        }
    }
    return [
        metadata,
        warnings
    ];
}
class ParseStations {
    constructor(raw_data){
        this.csv = "";
        this.warnings = [];
        this.raw_data = raw_data;
        this.length = 0;
        this.harmonics_data = [];
        this.stations = new Map();
        this.raw_data.forEach((element)=>{
            const [filename, data_type, file_type, csv] = element;
            if (data_type === "harmonic") {
                if (csv.length > 0) this.parse_data(filename, csv);
            }
        });
        console.info(`Found: ${this.harmonics_data.length} Harmonic Constituents in all files.`);
        this.consolidate_stations();
        console.info(`Consolidated to: ${this.length} individual stations;`);
        if (this.length === 0) this.warnings.push('No Tidal Stations found. Return to the "Import" page.');
    }
    // Turn csv data into a JS list of harmonic constituents.
    parse_data(filename, csv) {
        const parsed = (0, _papaparseDefault.default).parse(csv, {
            header: true,
            skipEmptyLines: true
        });
        if (parsed.errors.length > 0) console.warn(`Errors parsing file: ${filename}, errors: ${parsed.errors}`);
        const required_keys = [
            "lat",
            "lon",
            "con",
            "amp",
            "pha",
            "tide_gauge_name",
            "country"
        ];
        const missing_keys = [];
        for (const required_key of required_keys)if (parsed.meta.fields === undefined || !parsed.meta.fields.includes(required_key)) missing_keys.push(required_key);
        if (missing_keys.length > 0) {
            console.warn(`Did not find keys: ${missing_keys} in metadata file: ${filename}`);
            console.warn(`Expected at least these fields: ${required_keys}`);
            console.warn(`Found these fields: ${parsed.meta.fields}`);
            this.warnings.push(`Tidal Harmonics Constituent file: ${filename} has incorrect format.<br/>No stations in this file. Return to "Import" page.`);
            return;
        }
        const harmonics_data = parsed.data;
        this.harmonics_data = this.harmonics_data.concat(harmonics_data);
        if (harmonics_data.length === 0) {
            console.warn(`No metadata entries found in ${filename}`);
            this.warnings.push(`No metadata entries found in ${filename}`);
        }
        console.info(`Found ${harmonics_data.length} Harmonics Contituents in file: ${filename}`);
    }
    // Outputs recursive Map() objects of consolidated station information.
    // Top level Map() uses 3 letter codes for countries, indexing a collection
    // of stations for that country.
    // Next level is indexed by the data set's tide_gauge_name property.
    consolidate_stations() {
        let error_count = 0;
        for (const data_line of this.harmonics_data){
            if (!("country" in data_line)) {
                error_count += 1;
                console.error(`Missing "country" property for ${data_line}`);
                continue;
            }
            let country = this.stations.get(data_line.country);
            if (!country) {
                country = new Map();
                this.stations.set(data_line.country, country);
            }
            if (!country.has(data_line.tide_gauge_name)) this.length += 1;
            let station = country.get(data_line.tide_gauge_name);
            if (!station) {
                station = new Map();
                country.set(data_line.tide_gauge_name, station);
            }
            let constituents = station.get("constituents");
            if (!constituents) {
                constituents = new Map();
                station.set("constituents", constituents);
            }
            if (constituents.has(data_line.con)) {
                console.error(`Duplicate constituent "${data_line.con}" for ${data_line.tide_gauge_name}`);
                error_count += 1;
                continue;
            }
            constituents.set(data_line.con, this.make_constituent(data_line));
            error_count += this.update_station(data_line, station);
        }
        if (error_count > 0) this.warnings.push(`${error_count} errors while formatting tidal stations. Look at browser's Web Developer's console for deatils on which station(s).`);
    }
    make_constituent(data_line) {
        return {
            con: data_line.con,
            amp: data_line.amp,
            pha: data_line.pha,
            amp_std: data_line.amp_std,
            pha_std: data_line.pha_std
        };
    }
    update_station(data_line, existing_station) {
        const station_properties = [
            "lat",
            "lon",
            "missing_obs",
            "no_of_obs",
            "years_of_obs",
            "start_date",
            "end_date",
            "gesla_source",
            "tide_gauge_name",
            "type",
            "country",
            "record_quality",
            "datum_information"
        ];
        for (const property of station_properties){
            if (existing_station.has(property) && data_line[property] !== existing_station.get(property)) {
                const message = `Station: "${data_line.tide_gauge_name}" property: "${property}" is being updated.
      Existing: ${existing_station.get(property)}
      New: ${data_line[property]}`;
                console.warn(message);
                return 1;
            }
            existing_station.set(property, data_line[property]);
        }
        return 0;
    }
}
function country_attributes(stations) {
    const countries_with_stations = new Set(stations.keys());
    const regions = new Map();
    for (const country_data of (0, _worldCountriesDefault.default)){
        const country_code = country_data.cca3;
        if (!countries_with_stations.has(country_code)) continue;
        const region_label = country_data.region;
        const subregion_label = country_data.subregion;
        const common_name = country_data.name.common;
        let region = regions.get(region_label);
        if (!region) {
            region = new Map();
            regions.set(region_label, region);
        }
        if (!region.has(subregion_label)) region.set(subregion_label, new Map());
        const subregion = region.get(subregion_label);
        const timezone = _countriesAndTimezones.getTimezonesForCountry(country_data.cca2);
        if (subregion) subregion.set(common_name, {
            country: country_data,
            timezone: timezone
        });
        else console.error(`Missing subregion: ${subregion_label}`);
    }
    return regions;
}

},{"papaparse":"gCVwR","world-countries":"erMv0","countries-and-timezones":"aS6X9","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"gCVwR":[function(require,module,exports,__globalThis) {
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ ((e, t)=>{
    "function" == typeof define && define.amd ? define([], t) : module.exports = t();
})(this, function r() {
    var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {};
    var d, s = !n.document && !!n.postMessage, a = n.IS_PAPA_WORKER || !1, o = {}, h = 0, v = {};
    function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = b(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(t, e) {
            var i = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < i) {
                let e = this._config.newline;
                e || (r = this._config.quoteChar || '"', e = this._handle.guessLineEndings(t, r)), t = [
                    ...t.split(e).slice(i)
                ].join(e);
            }
            this.isFirstChunk && U(this._config.beforeFirstChunk) && void 0 !== (r = this._config.beforeFirstChunk(t)) && (t = r), this.isFirstChunk = !1, this._halted = !1;
            var i = this._partialLine + t, r = (this._partialLine = "", this._handle.parse(i, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
                t = r.meta.cursor, i = (this._finished || (this._partialLine = i.substring(t - this._baseIndex), this._baseIndex = t), r && r.data && (this._rowCount += r.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
                if (a) n.postMessage({
                    results: r,
                    workerId: v.WORKER_ID,
                    finished: i
                });
                else if (U(this._config.chunk) && !e) {
                    if (this._config.chunk(r, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    this._completeResults = r = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data), this._completeResults.errors = this._completeResults.errors.concat(r.errors), this._completeResults.meta = r.meta), this._completed || !i || !U(this._config.complete) || r && r.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), i || r && r.meta.paused || this._nextChunk(), r;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            U(this._config.error) ? this._config.error(e) : a && this._config.error && n.postMessage({
                workerId: v.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function f(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = v.RemoteChunkSize), u.call(this, e), this._nextChunk = s ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), s || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
                    var e, t = this._config.downloadRequestHeaders;
                    for(e in t)r.setRequestHeader(e, t[e]);
                }
                var i;
                this._config.chunkSize && (i = this._start + this._config.chunkSize - 1, r.setRequestHeader("Range", "bytes=" + this._start + "-" + i));
                try {
                    r.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                s && 0 === r.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize || r.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((e)=>null !== (e = e.getResponseHeader("Content-Range")) ? parseInt(e.substring(e.lastIndexOf("/") + 1)) : -1)(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e) {
            e = r.statusText || e;
            this._sendError(new Error(e));
        };
    }
    function l(e) {
        (e = e || {}).chunkSize || (e.chunkSize = v.LocalChunkSize), u.call(this, e);
        var i, r, n = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, n ? ((i = new FileReader).onload = y(this._chunkLoaded, this), i.onerror = y(this._chunkError, this)) : i = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input, t = (this._config.chunkSize && (t = Math.min(this._start + this._config.chunkSize, this._input.size), e = r.call(e, this._start, t)), i.readAsText(e, this._config.encoding));
            n || this._chunkLoaded({
                target: {
                    result: t
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(i.error);
        };
    }
    function c(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function(e) {
            return i = e, this._nextChunk();
        }, this._nextChunk = function() {
            var e, t;
            if (!this._finished) return e = this._config.chunkSize, i = e ? (t = i.substring(0, e), i.substring(e)) : (t = i, ""), this._finished = !i, this.parseChunk(t);
        };
    }
    function p(e) {
        u.call(this, e = e || {});
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = y(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = y(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = y(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = y(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function i(m) {
        var n, s, a, t, o = Math.pow(2, 53), h = -o, u = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, d = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i = this, r = 0, f = 0, l = !1, e = !1, c = [], p = {
            data: [],
            errors: [],
            meta: {}
        };
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            if (p && a && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v.DefaultDelimiter + "'"), a = !1), m.skipEmptyLines && (p.data = p.data.filter(function(e) {
                return !y(e);
            })), _()) {
                if (p) {
                    if (Array.isArray(p.data[0])) {
                        for(var e = 0; _() && e < p.data.length; e++)p.data[e].forEach(t);
                        p.data.splice(0, 1);
                    } else p.data.forEach(t);
                }
                function t(e, t) {
                    U(m.transformHeader) && (e = m.transformHeader(e, t)), c.push(e);
                }
            }
            function i(e, t) {
                for(var i = m.header ? {} : [], r = 0; r < e.length; r++){
                    var n = r, s = e[r], s = ((e, t)=>((e)=>(m.dynamicTypingFunction && void 0 === m.dynamicTyping[e] && (m.dynamicTyping[e] = m.dynamicTypingFunction(e)), !0 === (m.dynamicTyping[e] || m.dynamicTyping)))(e) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (((e)=>{
                            if (u.test(e)) {
                                e = parseFloat(e);
                                if (h < e && e < o) return 1;
                            }
                        })(t) ? parseFloat(t) : d.test(t) ? new Date(t) : "" === t ? null : t) : t)(n = m.header ? r >= c.length ? "__parsed_extra" : c[r] : n, s = m.transform ? m.transform(s, n) : s);
                    "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
                }
                return m.header && (r > c.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + c.length + " fields but parsed " + r, f + t) : r < c.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + c.length + " fields but parsed " + r, f + t)), i;
            }
            var r;
            p && (m.header || m.dynamicTyping || m.transform) && (r = 1, !p.data.length || Array.isArray(p.data[0]) ? (p.data = p.data.map(i), r = p.data.length) : p.data = i(p.data, 0), m.header && p.meta && (p.meta.fields = c), f += r);
        }
        function _() {
            return m.header && 0 === c.length;
        }
        function k(e, t, i, r) {
            e = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (e.row = r), p.errors.push(e);
        }
        U(m.step) && (t = m.step, m.step = function(e) {
            p = e, _() ? g() : (g(), 0 !== p.data.length && (r += e.data.length, m.preview && r > m.preview ? s.abort() : (p.data = p.data[0], t(p, i))));
        }), this.parse = function(e, t, i) {
            var r = m.quoteChar || '"', r = (m.newline || (m.newline = this.guessLineEndings(e, r)), a = !1, m.delimiter ? U(m.delimiter) && (m.delimiter = m.delimiter(e), p.meta.delimiter = m.delimiter) : ((r = ((e, t, i, r, n)=>{
                var s, a, o, h;
                n = n || [
                    ",",
                    "\t",
                    "|",
                    ";",
                    v.RECORD_SEP,
                    v.UNIT_SEP
                ];
                for(var u = 0; u < n.length; u++){
                    for(var d, f = n[u], l = 0, c = 0, p = 0, g = (o = void 0, new E({
                        comments: r,
                        delimiter: f,
                        newline: t,
                        preview: 10
                    }).parse(e)), _ = 0; _ < g.data.length; _++)i && y(g.data[_]) ? p++ : (d = g.data[_].length, c += d, void 0 === o ? o = d : 0 < d && (l += Math.abs(d - o), o = d));
                    0 < g.data.length && (c /= g.data.length - p), (void 0 === a || l <= a) && (void 0 === h || h < c) && 1.99 < c && (a = l, s = f, h = c);
                }
                return {
                    successful: !!(m.delimiter = s),
                    bestDelimiter: s
                };
            })(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = r.bestDelimiter : (a = !0, m.delimiter = v.DefaultDelimiter), p.meta.delimiter = m.delimiter), b(m));
            return m.preview && m.header && r.preview++, n = e, s = new E(r), p = s.parse(n, t, i), g(), l ? {
                meta: {
                    paused: !0
                }
            } : p || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return l;
        }, this.pause = function() {
            l = !0, s.abort(), n = U(m.chunk) ? "" : n.substring(s.getCharIndex());
        }, this.resume = function() {
            i.streamer._halted ? (l = !1, i.streamer.parseChunk(n, !0)) : setTimeout(i.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, s.abort(), p.meta.aborted = !0, U(m.complete) && m.complete(p), n = "";
        }, this.guessLineEndings = function(e, t) {
            e = e.substring(0, 1048576);
            var t = new RegExp(P(t) + "([^]*?)" + P(t), "gm"), i = (e = e.replace(t, "")).split("\r"), t = e.split("\n"), e = 1 < t.length && t[0].length < i[0].length;
            if (1 === i.length || e) return "\n";
            for(var r = 0, n = 0; n < i.length; n++)"\n" === i[n][0] && r++;
            return r >= i.length / 2 ? "\r\n" : "\r";
        };
    }
    function P(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(C) {
        var S = (C = C || {}).delimiter, O = C.newline, x = C.comments, I = C.step, A = C.preview, T = C.fastMode, D = null, L = !1, F = null == C.quoteChar ? '"' : C.quoteChar, j = F;
        if (void 0 !== C.escapeChar && (j = C.escapeChar), ("string" != typeof S || -1 < v.BAD_DELIMITERS.indexOf(S)) && (S = ","), x === S) throw new Error("Comment character same as delimiter");
        !0 === x ? x = "#" : ("string" != typeof x || -1 < v.BAD_DELIMITERS.indexOf(x)) && (x = !1), "\n" !== O && "\r" !== O && "\r\n" !== O && (O = "\n");
        var z = 0, M = !1;
        this.parse = function(i, t, r) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n = i.length, e = S.length, s = O.length, a = x.length, o = U(I), h = [], u = [], d = [], f = z = 0;
            if (!i) return w();
            if (T || !1 !== T && -1 === i.indexOf(F)) {
                for(var l = i.split(O), c = 0; c < l.length; c++){
                    if (d = l[c], z += d.length, c !== l.length - 1) z += O.length;
                    else if (r) return w();
                    if (!x || d.substring(0, a) !== x) {
                        if (o) {
                            if (h = [], k(d.split(S)), R(), M) return w();
                        } else k(d.split(S));
                        if (A && A <= c) return h = h.slice(0, A), w(!0);
                    }
                }
                return w();
            }
            for(var p = i.indexOf(S, z), g = i.indexOf(O, z), _ = new RegExp(P(j) + P(F), "g"), m = i.indexOf(F, z);;)if (i[z] === F) for(m = z, z++;;){
                if (-1 === (m = i.indexOf(F, m + 1))) return r || u.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: h.length,
                    index: z
                }), E();
                if (m === n - 1) return E(i.substring(z, m).replace(_, F));
                if (F === j && i[m + 1] === j) m++;
                else if (F === j || 0 === m || i[m - 1] !== j) {
                    -1 !== p && p < m + 1 && (p = i.indexOf(S, m + 1));
                    var y = v(-1 === (g = -1 !== g && g < m + 1 ? i.indexOf(O, m + 1) : g) ? p : Math.min(p, g));
                    if (i.substr(m + 1 + y, e) === S) {
                        d.push(i.substring(z, m).replace(_, F)), i[z = m + 1 + y + e] !== F && (m = i.indexOf(F, z)), p = i.indexOf(S, z), g = i.indexOf(O, z);
                        break;
                    }
                    y = v(g);
                    if (i.substring(m + 1 + y, m + 1 + y + s) === O) {
                        if (d.push(i.substring(z, m).replace(_, F)), b(m + 1 + y + s), p = i.indexOf(S, z), m = i.indexOf(F, z), o && (R(), M)) return w();
                        if (A && h.length >= A) return w(!0);
                        break;
                    }
                    u.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: h.length,
                        index: z
                    }), m++;
                }
            }
            else if (x && 0 === d.length && i.substring(z, z + a) === x) {
                if (-1 === g) return w();
                z = g + s, g = i.indexOf(O, z), p = i.indexOf(S, z);
            } else if (-1 !== p && (p < g || -1 === g)) d.push(i.substring(z, p)), z = p + e, p = i.indexOf(S, z);
            else {
                if (-1 === g) break;
                if (d.push(i.substring(z, g)), b(g + s), o && (R(), M)) return w();
                if (A && h.length >= A) return w(!0);
            }
            return E();
            function k(e) {
                h.push(e), f = z;
            }
            function v(e) {
                var t = 0;
                return t = -1 !== e && (e = i.substring(m + 1, e)) && "" === e.trim() ? e.length : t;
            }
            function E(e) {
                return r || (void 0 === e && (e = i.substring(z)), d.push(e), z = n, k(d), o && R()), w();
            }
            function b(e) {
                z = e, k(d), d = [], g = i.indexOf(O, z);
            }
            function w(e) {
                if (C.header && !t && h.length && !L) {
                    var s = h[0], a = Object.create(null), o = new Set(s);
                    let n = !1;
                    for(let r = 0; r < s.length; r++){
                        let i = s[r];
                        if (a[i = U(C.transformHeader) ? C.transformHeader(i, r) : i]) {
                            let e, t = a[i];
                            for(; e = i + "_" + t, t++, o.has(e););
                            o.add(e), s[r] = e, a[i]++, n = !0, (D = null === D ? {} : D)[e] = i;
                        } else a[i] = 1, s[r] = i;
                        o.add(i);
                    }
                    n && console.warn("Duplicate headers found and renamed."), L = !0;
                }
                return {
                    data: h,
                    errors: u,
                    meta: {
                        delimiter: S,
                        linebreak: O,
                        aborted: M,
                        truncated: !!e,
                        cursor: f + (t || 0),
                        renamedHeaders: D
                    }
                };
            }
            function R() {
                I(w()), h = [], u = [];
            }
        }, this.abort = function() {
            M = !0;
        }, this.getCharIndex = function() {
            return z;
        };
    }
    function g(e) {
        var t = e.data, i = o[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, _(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: m,
                resume: m
            };
            if (U(i.userStep)) {
                for(var s = 0; s < t.results.data.length && (i.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); s++);
                delete t.results;
            } else U(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && _(t.workerId, t.results);
    }
    function _(e, t) {
        var i = o[e];
        U(i.userComplete) && i.userComplete(t), i.terminate(), delete o[e];
    }
    function m() {
        throw new Error("Not implemented.");
    }
    function b(e) {
        if ("object" != typeof e || null === e) return e;
        var t, i = Array.isArray(e) ? [] : {};
        for(t in e)i[t] = b(e[t]);
        return i;
    }
    function y(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function U(e) {
        return "function" == typeof e;
    }
    return v.parse = function(e, t) {
        var i = (t = t || {}).dynamicTyping || !1;
        U(i) && (t.dynamicTypingFunction = i, i = {});
        if (t.dynamicTyping = i, t.transform = !!U(t.transform) && t.transform, !t.worker || !v.WORKERS_SUPPORTED) return i = null, v.NODE_STREAM_INPUT, "string" == typeof e ? (e = ((e)=>65279 !== e.charCodeAt(0) ? e : e.slice(1))(e), i = new (t.download ? f : c)(t)) : !0 === e.readable && U(e.read) && U(e.on) ? i = new p(t) : (n.File && e instanceof File || e instanceof Object) && (i = new l(t)), i.stream(e);
        (i = (()=>{
            var e;
            return !!v.WORKERS_SUPPORTED && (e = (()=>{
                var e = n.URL || n.webkitURL || null, t = r.toString();
                return v.BLOB_URL || (v.BLOB_URL = e.createObjectURL(new Blob([
                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                    "(",
                    t,
                    ")();"
                ], {
                    type: "text/javascript"
                })));
            })(), (e = new n.Worker(e)).onmessage = g, e.id = h++, o[e.id] = e);
        })()).userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = U(t.step), t.chunk = U(t.chunk), t.complete = U(t.complete), t.error = U(t.error), delete t.worker, i.postMessage({
            input: e,
            config: t,
            workerId: i.id
        });
    }, v.unparse = function(e, t) {
        var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, i = !1, r = null, o = !1, h = ((()=>{
            if ("object" == typeof t) {
                if ("string" != typeof t.delimiter || v.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter), "boolean" != typeof t.quotes && "function" != typeof t.quotes && !Array.isArray(t.quotes) || (n = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines), "string" == typeof t.newline && (y = t.newline), "string" == typeof t.quoteChar && (s = t.quoteChar), "boolean" == typeof t.header && (_ = t.header), Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    r = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s), t.escapeFormulae instanceof RegExp ? o = t.escapeFormulae : "boolean" == typeof t.escapeFormulae && t.escapeFormulae && (o = /^[=+\-@\t\r].*$/);
            }
        })(), new RegExp(P(s), "g"));
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
        } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
            e.data
        ])), u(e.fields || [], e.data || [], i);
        throw new Error("Unable to serialize unrecognized input");
        function u(e, t, i) {
            var r = "", n = ("string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e) && 0 < e.length), s = !Array.isArray(t[0]);
            if (n && _) {
                for(var a = 0; a < e.length; a++)0 < a && (r += m), r += k(e[a], a);
                0 < t.length && (r += y);
            }
            for(var o = 0; o < t.length; o++){
                var h = (n ? e : t[o]).length, u = !1, d = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                    for(var f = [], l = 0; l < h; l++){
                        var c = s ? e[l] : l;
                        f.push(t[o][c]);
                    }
                    u = "" === f.join("").trim();
                }
                if (!u) {
                    for(var p = 0; p < h; p++){
                        0 < p && !d && (r += m);
                        var g = n && s ? e[p] : p;
                        r += k(t[o][g], p);
                    }
                    o < t.length - 1 && (!i || 0 < h && !d) && (r += y);
                }
            }
            return r;
        }
        function k(e, t) {
            var i, r;
            return null == e ? "" : e.constructor === Date ? JSON.stringify(e).slice(1, 25) : (r = !1, o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0), i = e.toString().replace(h, a), (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || ((e, t)=>{
                for(var i = 0; i < t.length; i++)if (-1 < e.indexOf(t[i])) return !0;
                return !1;
            })(i, v.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i);
        }
    }, v.RECORD_SEP = String.fromCharCode(30), v.UNIT_SEP = String.fromCharCode(31), v.BYTE_ORDER_MARK = "\ufeff", v.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        v.BYTE_ORDER_MARK
    ], v.WORKERS_SUPPORTED = !s && !!n.Worker, v.NODE_STREAM_INPUT = 1, v.LocalChunkSize = 10485760, v.RemoteChunkSize = 5242880, v.DefaultDelimiter = ",", v.Parser = E, v.ParserHandle = i, v.NetworkStreamer = f, v.FileStreamer = l, v.StringStreamer = c, v.ReadableStreamStreamer = p, n.jQuery && ((d = n.jQuery).fn.parse = function(o) {
        var i = o.config || {}, h = [];
        return this.each(function(e) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && n.FileReader) || !this.files || 0 === this.files.length) return !0;
            for(var t = 0; t < this.files.length; t++)h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i)
            });
        }), e(), this;
        function e() {
            if (0 === h.length) U(o.complete) && o.complete();
            else {
                var e, t, i, r, n = h[0];
                if (U(o.before)) {
                    var s = o.before(n.file, n.inputElem);
                    if ("object" == typeof s) {
                        if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (U(o.error) && o.error({
                            name: e
                        }, t, i, r));
                        if ("skip" === s.action) return void u();
                        "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                    } else if ("skip" === s) return void u();
                }
                var a = n.instanceConfig.complete;
                n.instanceConfig.complete = function(e) {
                    U(a) && a(e, n.file, n.inputElem), u();
                }, v.parse(n.file, n.instanceConfig);
            }
        }
        function u() {
            h.splice(0, 1), e();
        }
    }), a && (n.onmessage = function(e) {
        e = e.data;
        void 0 === v.WORKER_ID && e && (v.WORKER_ID = e.workerId);
        "string" == typeof e.input ? n.postMessage({
            workerId: v.WORKER_ID,
            results: v.parse(e.input, e.config),
            finished: !0
        }) : (n.File && e.input instanceof File || e.input instanceof Object) && (e = v.parse(e.input, e.config)) && n.postMessage({
            workerId: v.WORKER_ID,
            results: e,
            finished: !0
        });
    }), (f.prototype = Object.create(u.prototype)).constructor = f, (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(c.prototype)).constructor = c, (p.prototype = Object.create(u.prototype)).constructor = p, v;
});

},{}],"erMv0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _countriesJsonDefault.default));
var _countriesJson = require("./countries.json");
var _countriesJsonDefault = parcelHelpers.interopDefault(_countriesJson);

},{"./countries.json":"j6p9A","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"j6p9A":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"name":{"common":"Aruba","official":"Aruba","native":{"nld":{"official":"Aruba","common":"Aruba"},"pap":{"official":"Aruba","common":"Aruba"}}},"tld":[".aw"],"cca2":"AW","ccn3":"533","cca3":"ABW","cioc":"ARU","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"AWG":{"name":"Aruban florin","symbol":"\u0192"}},"idd":{"root":"+2","suffixes":["97"]},"capital":["Oranjestad"],"altSpellings":["AW"],"region":"Americas","subregion":"Caribbean","languages":{"nld":"Dutch","pap":"Papiamento"},"translations":{"ara":{"official":"\u0623\u0631\u0648\u0628\u0627","common":"\u0623\u0631\u0648\u0628\u0627"},"ces":{"official":"Aruba","common":"Aruba"},"deu":{"official":"Aruba","common":"Aruba"},"est":{"official":"Aruba","common":"Aruba"},"fin":{"official":"Aruba","common":"Aruba"},"fra":{"official":"Aruba","common":"Aruba"},"hrv":{"official":"Aruba","common":"Aruba"},"hun":{"official":"Aruba","common":"Aruba"},"ita":{"official":"Aruba","common":"Aruba"},"jpn":{"official":"\u30A2\u30EB\u30D0","common":"\u30A2\u30EB\u30D0"},"kor":{"official":"\uC544\uB8E8\uBC14","common":"\uC544\uB8E8\uBC14"},"nld":{"official":"Aruba","common":"Aruba"},"per":{"official":"\u0622\u0631\u0648\u0628\u0627","common":"\u0622\u0631\u0648\u0628\u0627"},"pol":{"official":"Aruba","common":"Aruba"},"por":{"official":"Aruba","common":"Aruba"},"rus":{"official":"\u0410\u0440\u0443\u0431\u0430","common":"\u0410\u0440\u0443\u0431\u0430"},"slk":{"official":"Aruba","common":"Aruba"},"spa":{"official":"Aruba","common":"Aruba"},"srp":{"official":"Aruba","common":"Aruba"},"swe":{"official":"Aruba","common":"Aruba"},"tur":{"official":"Aruba","common":"Aruba"},"urd":{"official":"\u0627\u0631\u0648\u0628\u0627","common":"\u0627\u0631\u0648\u0628\u0627"},"zho":{"official":"\u963F\u9C81\u5DF4","common":"\u963F\u9C81\u5DF4"}},"latlng":[12.5,-69.96666666],"landlocked":false,"borders":[],"area":180,"flag":"\uD83C\uDDE6\uD83C\uDDFC","demonyms":{"eng":{"f":"Aruban","m":"Aruban"},"fra":{"f":"Arubaise","m":"Arubais"}}},{"name":{"common":"Afghanistan","official":"Islamic Republic of Afghanistan","native":{"prs":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646","common":"\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"},"pus":{"official":"\u062F \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646 \u0627\u0633\u0644\u0627\u0645\u064A \u062C\u0645\u0647\u0648\u0631\u06CC\u062A","common":"\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"},"tuk":{"official":"Owganystan Yslam Respublikasy","common":"Owganystan"}}},"tld":[".af"],"cca2":"AF","ccn3":"004","cca3":"AFG","cioc":"AFG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"AFN":{"name":"Afghan afghani","symbol":"\u060B"}},"idd":{"root":"+9","suffixes":["3"]},"capital":["Kabul"],"altSpellings":["AF","Af\u0121\u0101nist\u0101n"],"region":"Asia","subregion":"Southern Asia","languages":{"prs":"Dari","pus":"Pashto","tuk":"Turkmen"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0641\u0641\u0627\u0646\u0633\u062A\u0627\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629","common":"\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"},"ces":{"official":"Afgh\xe1nsk\xe1 isl\xe1msk\xe1 republika","common":"Afgh\xe1nist\xe1n"},"deu":{"official":"Islamische Republik Afghanistan","common":"Afghanistan"},"est":{"official":"Afganistani Islamivabariik","common":"Afganistan"},"fin":{"official":"Afganistanin islamilainen tasavalta","common":"Afganistan"},"fra":{"official":"R\xe9publique islamique d\'Afghanistan","common":"Afghanistan"},"hrv":{"official":"Islamska Republika Afganistan","common":"Afganistan"},"hun":{"official":"Afganiszt\xe1ni Iszl\xe1m K\xf6zt\xe1rsas\xe1g","common":"Afganiszt\xe1n"},"ita":{"official":"Repubblica islamica dell\'Afghanistan","common":"Afghanistan"},"jpn":{"official":"\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3\u30FB\u30A4\u30B9\u30E9\u30E0\u5171\u548C\u56FD","common":"\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3"},"kor":{"official":"\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4 \uC774\uC2AC\uB78C \uACF5\uD654\uAD6D","common":"\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4"},"nld":{"official":"Islamitische Republiek Afghanistan","common":"Afghanistan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646","common":"\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"},"pol":{"official":"Islamska Republika Afganistanu","common":"Afganistan"},"por":{"official":"Rep\xfablica Isl\xe2mica do Afeganist\xe3o","common":"Afeganist\xe3o"},"rus":{"official":"\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D","common":"\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D"},"slk":{"official":"Afg\xe1nsky islamsk\xfd \u0161t\xe1t","common":"Afganistan"},"spa":{"official":"Rep\xfablica Isl\xe1mica de Afganist\xe1n","common":"Afganist\xe1n"},"srp":{"official":"Islamska Republika Avganistan","common":"Avganistan"},"swe":{"official":"Islamiska republiken Afghanistan","common":"Afghanistan"},"tur":{"official":"Afganistan \u0130slam Cumhuriyeti","common":"Afganistan"},"urd":{"official":"\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646","common":"\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"},"zho":{"official":"\u963F\u5BCC\u6C57\u4F0A\u65AF\u5170\u5171\u548C\u56FD","common":"\u963F\u5BCC\u6C57"}},"latlng":[33,65],"landlocked":true,"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"area":652230,"flag":"\uD83C\uDDE6\uD83C\uDDEB","demonyms":{"eng":{"f":"Afghan","m":"Afghan"},"fra":{"f":"Afghane","m":"Afghan"}}},{"name":{"common":"Angola","official":"Republic of Angola","native":{"por":{"official":"Rep\xfablica de Angola","common":"Angola"}}},"tld":[".ao"],"cca2":"AO","ccn3":"024","cca3":"AGO","cioc":"ANG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"AOA":{"name":"Angolan kwanza","symbol":"Kz"}},"idd":{"root":"+2","suffixes":["44"]},"capital":["Luanda"],"altSpellings":["AO","Rep\xfablica de Angola","\u0281\u025Bpublika de an\'\u0261\u0254la"],"region":"Africa","subregion":"Middle Africa","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u0623\u0646\u063A\u0648\u0644\u0627","common":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0646\u063A\u0648\u0644\u0627"},"ces":{"official":"Angolsk\xe1 republika","common":"Angola"},"deu":{"official":"Republik Angola","common":"Angola"},"est":{"official":"Angola Vabariik","common":"Angola"},"fin":{"official":"Angolan tasavalta","common":"Angola"},"fra":{"official":"R\xe9publique d\'Angola","common":"Angola"},"hrv":{"official":"Republika Angola","common":"Angola"},"hun":{"official":"Angola","common":"Angola"},"ita":{"official":"Repubblica dell\'Angola","common":"Angola"},"jpn":{"official":"\u30A2\u30F3\u30B4\u30E9\u5171\u548C\u56FD","common":"\u30A2\u30F3\u30B4\u30E9"},"kor":{"official":"\uC559\uACE8\uB77C \uACF5\uD654\uAD6D","common":"\uC559\uACE8\uB77C"},"nld":{"official":"Republiek Angola","common":"Angola"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0646\u06AF\u0648\u0644\u0627","common":"\u0622\u0646\u06AF\u0648\u0644\u0627"},"pol":{"official":"Republika Angoli","common":"Angola"},"por":{"official":"Rep\xfablica de Angola","common":"Angola"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u043D\u0433\u043E\u043B\u0430","common":"\u0410\u043D\u0433\u043E\u043B\u0430"},"slk":{"official":"Angolsk\xe1 republika","common":"Angola"},"spa":{"official":"Rep\xfablica de Angola","common":"Angola"},"srp":{"official":"Republika Angola","common":"Angola"},"swe":{"official":"Republiken Angola","common":"Angola"},"tur":{"official":"Angola Cumhuriyeti","common":"Angola"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0646\u06AF\u0648\u0644\u06C1","common":"\u0627\u0646\u06AF\u0648\u0644\u06C1"},"zho":{"official":"\u5B89\u54E5\u62C9\u5171\u548C\u56FD","common":"\u5B89\u54E5\u62C9"}},"latlng":[-12.5,18.5],"landlocked":false,"borders":["COG","COD","ZMB","NAM"],"area":1246700,"flag":"\uD83C\uDDE6\uD83C\uDDF4","demonyms":{"eng":{"f":"Angolan","m":"Angolan"},"fra":{"f":"Angolaise","m":"Angolais"}}},{"name":{"common":"Anguilla","official":"Anguilla","native":{"eng":{"official":"Anguilla","common":"Anguilla"}}},"tld":[".ai"],"cca2":"AI","ccn3":"660","cca3":"AIA","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["264"]},"capital":["The Valley"],"altSpellings":["AI"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0623\u0646\u063A\u0648\u064A\u0644\u0627","common":"\u0623\u0646\u063A\u0648\u064A\u0644\u0627"},"ces":{"official":"Anguilla","common":"Anguilla"},"deu":{"official":"Anguilla","common":"Anguilla"},"est":{"official":"Anguilla","common":"Anguilla"},"fin":{"official":"Anguilla","common":"Anguilla"},"fra":{"official":"Anguilla","common":"Anguilla"},"hrv":{"official":"Anguilla","common":"Angvila"},"hun":{"official":"Anguilla","common":"Anguilla"},"ita":{"official":"Anguilla","common":"Anguilla"},"jpn":{"official":"\u30A2\u30F3\u30AE\u30E9","common":"\u30A2\u30F3\u30AE\u30E9"},"kor":{"official":"\uC575\uADC8\uB77C","common":"\uC575\uADC8\uB77C"},"nld":{"official":"Anguilla","common":"Anguilla"},"per":{"official":"\u0622\u0646\u06AF\u0648\u06CC\u0644\u0627","common":"\u0622\u0646\u06AF\u0648\u06CC\u0644\u0627"},"pol":{"official":"Anguilla","common":"Anguilla"},"por":{"official":"Anguilla","common":"Anguilla"},"rus":{"official":"\u0410\u043D\u0433\u0438\u043B\u044C\u044F","common":"\u0410\u043D\u0433\u0438\u043B\u044C\u044F"},"slk":{"official":"Anguilla","common":"Anguilla"},"spa":{"official":"Anguila","common":"Anguilla"},"srp":{"official":"Angvila","common":"Angvila"},"swe":{"official":"Anguilla","common":"Anguilla"},"tur":{"official":"Anguilla","common":"Anguilla"},"urd":{"official":"\u0627\u06CC\u0646\u06AF\u0648\u06CC\u0644\u0627","common":"\u0627\u06CC\u0646\u06AF\u0648\u06CC\u0644\u0627"},"zho":{"official":"\u5B89\u572D\u62C9","common":"\u5B89\u572D\u62C9"}},"latlng":[18.25,-63.16666666],"landlocked":false,"borders":[],"area":91,"flag":"\uD83C\uDDE6\uD83C\uDDEE","demonyms":{"eng":{"f":"Anguillian","m":"Anguillian"},"fra":{"f":"Anguillane","m":"Anguillan"}}},{"name":{"common":"\xc5land Islands","official":"\xc5land Islands","native":{"swe":{"official":"Landskapet \xc5land","common":"\xc5land"}}},"tld":[".ax"],"cca2":"AX","ccn3":"248","cca3":"ALA","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["5818"]},"capital":["Mariehamn"],"altSpellings":["AX","Aaland","Aland","Ahvenanmaa"],"region":"Europe","subregion":"Northern Europe","languages":{"swe":"Swedish"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0623\u0648\u0644\u0627\u0646\u062F","common":"\u062C\u0632\u0631 \u0623\u0648\u0644\u0627\u0646\u062F"},"ces":{"official":"\xc5landsk\xe9 ostrovy","common":"\xc5landy"},"deu":{"official":"\xc5land-Inseln","common":"\xc5land"},"est":{"official":"Ahvenamaa maakond","common":"Ahvenamaa"},"fin":{"official":"Ahvenanmaan maakunta","common":"Ahvenanmaa"},"fra":{"official":"Ahvenanmaa","common":"Ahvenanmaa"},"hrv":{"official":"Aland Islands","common":"\xc5landski otoci"},"hun":{"official":"\xc5land-szigetek","common":"\xc5land-szigetek"},"ita":{"official":"Isole \xc5land","common":"Isole Aland"},"jpn":{"official":"\u30AA\u30FC\u30E9\u30F3\u30C9\u8AF8\u5CF6","common":"\u30AA\u30FC\u30E9\u30F3\u30C9"},"kor":{"official":"\uC62C\uB780\uB4DC \uC81C\uB3C4","common":"\uC62C\uB780\uB4DC \uC81C\uB3C4"},"nld":{"official":"\xc5land eilanden","common":"\xc5landeilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0646\u062F","common":"\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0646\u062F"},"pol":{"official":"Wyspy Alandzkie","common":"Wyspy Alandzkie"},"por":{"official":"Ilhas \xc5land","common":"Al\xe2ndia"},"rus":{"official":"\u0410\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0410\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Alandsk\xe9 ostrovy","common":"Alandy"},"spa":{"official":"Islas \xc5land","common":"Alandia"},"srp":{"official":"Olandska Ostrva","common":"Olandska Ostrva"},"swe":{"official":"\xc5land","common":"\xc5land"},"tur":{"official":"\xc5land Adalar\u0131","common":"\xc5land"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u0627\u0648\u0644\u0646\u062F","common":"\u062C\u0632\u0627\u0626\u0631 \u0627\u0648\u0644\u0646\u062F"},"zho":{"official":"\u5965\u5170\u7FA4\u5C9B","common":"\u5965\u5170\u7FA4\u5C9B"}},"latlng":[60.116667,19.9],"landlocked":false,"borders":[],"area":1580,"flag":"\uD83C\uDDE6\uD83C\uDDFD","demonyms":{"eng":{"f":"\xc5landish","m":"\xc5landish"},"fra":{"f":"\xc5landaise","m":"\xc5landais"}}},{"name":{"common":"Albania","official":"Republic of Albania","native":{"sqi":{"official":"Republika e Shqip\xebris\xeb","common":"Shqip\xebria"}}},"tld":[".al"],"cca2":"AL","ccn3":"008","cca3":"ALB","cioc":"ALB","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"ALL":{"name":"Albanian lek","symbol":"L"}},"idd":{"root":"+3","suffixes":["55"]},"capital":["Tirana"],"altSpellings":["AL","Shqip\xebri","Shqip\xebria","Shqipnia"],"region":"Europe","subregion":"Southeast Europe","languages":{"sqi":"Albanian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0644\u0628\u0627\u0646\u064A\u0627","common":"\u0623\u0644\u0628\u0627\u0646\u064A\u0627"},"ces":{"official":"Alb\xe1nsk\xe1 republika","common":"Alb\xe1nie"},"deu":{"official":"Republik Albanien","common":"Albanien"},"est":{"official":"Albaania Vabariik","common":"Albaania"},"fin":{"official":"Albanian tasavalta","common":"Albania"},"fra":{"official":"R\xe9publique d\'Albanie","common":"Albanie"},"hrv":{"official":"Republika Albanija","common":"Albanija"},"hun":{"official":"Alb\xe1n K\xf6zt\xe1rsas\xe1g","common":"Alb\xe1nia"},"ita":{"official":"Repubblica d\'Albania","common":"Albania"},"jpn":{"official":"\u30A2\u30EB\u30D0\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30A2\u30EB\u30D0\u30CB\u30A2"},"kor":{"official":"\uC54C\uBC14\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uC54C\uBC14\uB2C8\uC544"},"nld":{"official":"Republiek Albani\xeb","common":"Albani\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0644\u0628\u0627\u0646\u06CC","common":"\u0622\u0644\u0628\u0627\u0646\u06CC"},"pol":{"official":"Republika Albanii","common":"Albania"},"por":{"official":"Rep\xfablica da Alb\xe2nia","common":"Alb\xe2nia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u043B\u0431\u0430\u043D\u0438\u044F","common":"\u0410\u043B\u0431\u0430\u043D\u0438\u044F"},"slk":{"official":"Alb\xe1nska republika","common":"Alb\xe1nsko"},"spa":{"official":"Rep\xfablica de Albania","common":"Albania"},"srp":{"official":"Republika Albanija","common":"Albanija"},"swe":{"official":"Republiken Albanien","common":"Albanien"},"tur":{"official":"Arnavutluk Cumhuriyeti","common":"Arnavutluk"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0644\u0628\u0627\u0646\u06CC\u0627","common":"\u0627\u0644\u0628\u0627\u0646\u06CC\u0627"},"zho":{"official":"\u963F\u5C14\u5DF4\u5C3C\u4E9A\u5171\u548C\u56FD","common":"\u963F\u5C14\u5DF4\u5C3C\u4E9A"}},"latlng":[41,20],"landlocked":false,"borders":["MNE","GRC","MKD","UNK"],"area":28748,"flag":"\uD83C\uDDE6\uD83C\uDDF1","demonyms":{"eng":{"f":"Albanian","m":"Albanian"},"fra":{"f":"Albanaise","m":"Albanais"}}},{"name":{"common":"Andorra","official":"Principality of Andorra","native":{"cat":{"official":"Principat d\'Andorra","common":"Andorra"}}},"tld":[".ad"],"cca2":"AD","ccn3":"020","cca3":"AND","cioc":"AND","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["76"]},"capital":["Andorra la Vella"],"altSpellings":["AD","Principality of Andorra","Principat d\'Andorra"],"region":"Europe","subregion":"Southern Europe","languages":{"cat":"Catalan"},"translations":{"ara":{"official":"\u0625\u0645\u0627\u0631\u0629 \u0623\u0646\u062F\u0648\u0631\u0627","common":"\u0623\u0646\u062F\u0648\u0631\u0627"},"ces":{"official":"Andorrsk\xe9 kn\xed\u017Eectv\xed","common":"Andorra"},"deu":{"official":"F\xfcrstentum Andorra","common":"Andorra"},"est":{"official":"Andorra V\xfcrstiriik","common":"Andorra"},"fin":{"official":"Andorran ruhtinaskunta","common":"Andorra"},"fra":{"official":"Principaut\xe9 d\'Andorre","common":"Andorre"},"hrv":{"official":"Kne\u017Eevina Andora","common":"Andora"},"hun":{"official":"Andorra","common":"Andorra"},"ita":{"official":"Principato di Andorra","common":"Andorra"},"jpn":{"official":"\u30A2\u30F3\u30C9\u30E9\u516C\u56FD","common":"\u30A2\u30F3\u30C9\u30E9"},"kor":{"official":"\uC548\uB3C4\uB77C \uACF5\uAD6D","common":"\uC548\uB3C4\uB77C"},"nld":{"official":"Prinsdom Andorra","common":"Andorra"},"per":{"official":"\u0634\u0627\u0647\u0632\u0627\u062F\u0647\u200C\u0646\u0634\u06CC\u0646 \u0622\u0646\u062F\u0648\u0631\u0627","common":"\u0622\u0646\u062F\u0648\u0631\u0627"},"pol":{"official":"Ksi\u0119stwo Andory","common":"Andora"},"por":{"official":"Principado de Andorra","common":"Andorra"},"rus":{"official":"\u041A\u043D\u044F\u0436\u0435\u0441\u0442\u0432\u043E \u0410\u043D\u0434\u043E\u0440\u0440\u0430","common":"\u0410\u043D\u0434\u043E\u0440\u0440\u0430"},"slk":{"official":"Andorrsk\xe9 knie\u017Eatstvo","common":"Andorra"},"spa":{"official":"Principado de Andorra","common":"Andorra"},"srp":{"official":"Kne\u017Eevina Andora","common":"Andora"},"swe":{"official":"Furstend\xf6met Andorra","common":"Andorra"},"tur":{"official":"Andorra Prensli\u011Fi","common":"Andorra"},"urd":{"official":"\u0627\u0645\u0627\u0631\u0627\u062A\u0650 \u0627\u0646\u0688\u0648\u0631\u0627","common":"\u0627\u0646\u0688\u0648\u0631\u0627"},"zho":{"official":"\u5B89\u9053\u5C14\u516C\u56FD","common":"\u5B89\u9053\u5C14"}},"latlng":[42.5,1.5],"landlocked":true,"borders":["FRA","ESP"],"area":468,"flag":"\uD83C\uDDE6\uD83C\uDDE9","demonyms":{"eng":{"f":"Andorran","m":"Andorran"},"fra":{"f":"Andorrane","m":"Andorran"}}},{"name":{"common":"United Arab Emirates","official":"United Arab Emirates","native":{"ara":{"official":"\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629","common":"\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A"}}},"tld":[".ae","\u0627\u0645\u0627\u0631\u0627\u062A."],"cca2":"AE","ccn3":"784","cca3":"ARE","cioc":"UAE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"AED":{"name":"United Arab Emirates dirham","symbol":"\u062F.\u0625"}},"idd":{"root":"+9","suffixes":["71"]},"capital":["Abu Dhabi"],"altSpellings":["AE","UAE","Emirates"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629","common":"\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A"},"ces":{"official":"Spojen\xe9 arabsk\xe9 emir\xe1ty","common":"Spojen\xe9 arabsk\xe9 emir\xe1ty"},"deu":{"official":"Vereinigte Arabische Emirate","common":"Vereinigte Arabische Emirate"},"est":{"official":"Araabia \xdchendemiraadid","common":"Araabia \xdchendemiraadid"},"fin":{"official":"Yhdistyneet arabiemiirikunnat","common":"Arabiemiraatit"},"fra":{"official":"\xc9mirats arabes unis","common":"\xc9mirats arabes unis"},"hrv":{"official":"Ujedinjeni Arapski Emirati","common":"Ujedinjeni Arapski Emirati"},"hun":{"official":"Egyes\xfclt Arab Em\xedrs\xe9gek","common":"Egyes\xfclt Arab Em\xedrs\xe9gek"},"ita":{"official":"Emirati Arabi Uniti","common":"Emirati Arabi Uniti"},"jpn":{"official":"\u30A2\u30E9\u30D6\u9996\u9577\u56FD\u9023\u90A6","common":"UAE"},"kor":{"official":"\uC544\uB78D \uD1A0\uD6C4\uAD6D \uC5F0\uBC29","common":"\uC544\uB78D\uC5D0\uBBF8\uB9AC\uD2B8"},"nld":{"official":"Verenigde Arabische Emiraten","common":"Verenigde Arabische Emiraten"},"per":{"official":"\u0627\u0645\u0627\u0631\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0639\u0631\u0628\u06CC","common":"\u0627\u0645\u0627\u0631\u0627\u062A"},"pol":{"official":"Zjednoczone Emiraty Arabskie","common":"Zjednoczone Emiraty Arabskie"},"por":{"official":"Emirados \xc1rabes Unidos","common":"Emirados \xc1rabes Unidos"},"rus":{"official":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u0410\u0440\u0430\u0431\u0441\u043A\u0438\u0435 \u042D\u043C\u0438\u0440\u0430\u0442\u044B","common":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0435 \u0410\u0440\u0430\u0431\u0441\u043A\u0438\u0435 \u042D\u043C\u0438\u0440\u0430\u0442\u044B"},"slk":{"official":"Spojen\xe9 arabsk\xe9 emir\xe1ty","common":"Spojen\xe9 arabsk\xe9 emir\xe1ty"},"spa":{"official":"Emiratos \xc1rabes Unidos","common":"Emiratos \xc1rabes Unidos"},"srp":{"official":"Ujedinjeni Arapski Emirati","common":"Ujedinjeni Arapski Emirati"},"swe":{"official":"F\xf6renade Arabemiraten","common":"F\xf6renade Arabemiraten"},"tur":{"official":"Birle\u015Fik Arap Emirlikleri","common":"Birle\u015Fik Arap Emirlikleri"},"urd":{"official":"\u0645\u062A\u062D\u062F\u06C1 \u0639\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A","common":"\u0645\u062A\u062D\u062F\u06C1 \u0639\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A"},"zho":{"official":"\u963F\u62C9\u4F2F\u8054\u5408\u914B\u957F\u56FD","common":"\u963F\u62C9\u4F2F\u8054\u5408\u914B\u957F\u56FD"}},"latlng":[24,54],"landlocked":false,"borders":["OMN","SAU"],"area":83600,"flag":"\uD83C\uDDE6\uD83C\uDDEA","demonyms":{"eng":{"f":"Emirati","m":"Emirati"},"fra":{"f":"Emirienne","m":"Emirien"}}},{"name":{"common":"Argentina","official":"Argentine Republic","native":{"grn":{"official":"Argentine Republic","common":"Argentina"},"spa":{"official":"Rep\xfablica Argentina","common":"Argentina"}}},"tld":[".ar"],"cca2":"AR","ccn3":"032","cca3":"ARG","cioc":"ARG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"ARS":{"name":"Argentine peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["4"]},"capital":["Buenos Aires"],"altSpellings":["AR","Argentine Republic","Rep\xfablica Argentina"],"region":"Americas","subregion":"South America","languages":{"grn":"Guaran\xed","spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646","common":"\u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646"},"ces":{"official":"Argentinsk\xe1 republika","common":"Argentina"},"deu":{"official":"Argentinische Republik","common":"Argentinien"},"est":{"official":"Argentina Vabariik","common":"Argentina"},"fin":{"official":"Argentiinan tasavalta","common":"Argentiina"},"fra":{"official":"R\xe9publique argentine","common":"Argentine"},"hrv":{"official":"Argentinski Republika","common":"Argentina"},"hun":{"official":"Argentin K\xf6zt\xe1rsas\xe1g","common":"Argent\xedna"},"ita":{"official":"Repubblica Argentina","common":"Argentina"},"jpn":{"official":"\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u5171\u548C\u56FD","common":"\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3"},"kor":{"official":"\uC544\uB974\uD5E8\uD2F0\uB098 \uACF5\uD654\uAD6D","common":"\uC544\uB974\uD5E8\uD2F0\uB098"},"nld":{"official":"Argentijnse Republiek","common":"Argentini\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646","common":"\u0622\u0631\u0698\u0627\u0646\u062A\u06CC\u0646"},"pol":{"official":"Republika Argenty\u0144ska","common":"Argentyna"},"por":{"official":"Rep\xfablica Argentina","common":"Argentina"},"rus":{"official":"\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430"},"slk":{"official":"Argent\xednska republika","common":"Argent\xedna"},"spa":{"official":"Rep\xfablica Argentina","common":"Argentina"},"srp":{"official":"Republika Argentina","common":"Argentina"},"swe":{"official":"Republiken Argentina","common":"Argentina"},"tur":{"official":"Arjantin Cumhuriyeti","common":"Arjantin"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0631\u062C\u0646\u0679\u0627\u0626\u0646","common":"\u0627\u0631\u062C\u0646\u0679\u0627\u0626\u0646"},"zho":{"official":"\u963F\u6839\u5EF7\u5171\u548C\u56FD","common":"\u963F\u6839\u5EF7"}},"latlng":[-34,-64],"landlocked":false,"borders":["BOL","BRA","CHL","PRY","URY"],"area":2780400,"flag":"\uD83C\uDDE6\uD83C\uDDF7","demonyms":{"eng":{"f":"Argentine","m":"Argentine"},"fra":{"f":"Argentine","m":"Argentin"}}},{"name":{"common":"Armenia","official":"Republic of Armenia","native":{"hye":{"official":"\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576\u056B \u0540\u0561\u0576\u0580\u0561\u057A\u0565\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576","common":"\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"}}},"tld":[".am"],"cca2":"AM","ccn3":"051","cca3":"ARM","cioc":"ARM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"AMD":{"name":"Armenian dram","symbol":"\u058F"}},"idd":{"root":"+3","suffixes":["74"]},"capital":["Yerevan"],"altSpellings":["AM","Hayastan","Republic of Armenia","\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576\u056B \u0540\u0561\u0576\u0580\u0561\u057A\u0565\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576"],"region":"Asia","subregion":"Western Asia","languages":{"hye":"Armenian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0631\u0645\u064A\u0646\u064A\u0627","common":"\u0623\u0631\u0645\u064A\u0646\u064A\u0627"},"ces":{"official":"Arm\xe9nsk\xe1 republika","common":"Arm\xe9nie"},"deu":{"official":"Republik Armenien","common":"Armenien"},"est":{"official":"Armeenia Vabariik","common":"Armeenia"},"fin":{"official":"Armenian tasavalta","common":"Armenia"},"fra":{"official":"R\xe9publique d\'Arm\xe9nie","common":"Arm\xe9nie"},"hrv":{"official":"Republika Armenija","common":"Armenija"},"hun":{"official":"\xd6rm\xe9nyorsz\xe1g","common":"\xd6rm\xe9nyorsz\xe1g"},"ita":{"official":"Repubblica di Armenia","common":"Armenia"},"jpn":{"official":"\u30A2\u30EB\u30E1\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30A2\u30EB\u30E1\u30CB\u30A2"},"kor":{"official":"\uC544\uB974\uBA54\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uC544\uB974\uBA54\uB2C8\uC544"},"nld":{"official":"Republiek Armeni\xeb","common":"Armeni\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646","common":"\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Armenii","common":"Armenia"},"por":{"official":"Rep\xfablica da Arm\xe9nia","common":"Arm\xe9nia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u0440\u043C\u0435\u043D\u0438\u044F","common":"\u0410\u0440\u043C\u0435\u043D\u0438\u044F"},"slk":{"official":"Arm\xe9nska republika","common":"Arm\xe9nsko"},"spa":{"official":"Rep\xfablica de Armenia","common":"Armenia"},"srp":{"official":"Republika Jermenija","common":"Jermenija"},"swe":{"official":"Republiken Armenien","common":"Armenien"},"tur":{"official":"Ermenistan Cumhuriyeti","common":"Ermenistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0622\u0631\u0645\u06CC\u0646\u06CC\u0627","common":"\u0622\u0631\u0645\u06CC\u0646\u06CC\u0627"},"zho":{"official":"\u4E9A\u7F8E\u5C3C\u4E9A\u5171\u548C\u56FD","common":"\u4E9A\u7F8E\u5C3C\u4E9A"}},"latlng":[40,45],"landlocked":true,"borders":["AZE","GEO","IRN","TUR"],"area":29743,"flag":"\uD83C\uDDE6\uD83C\uDDF2","demonyms":{"eng":{"f":"Armenian","m":"Armenian"},"fra":{"f":"Arm\xe9nienne","m":"Arm\xe9nien"}}},{"name":{"common":"American Samoa","official":"American Samoa","native":{"eng":{"official":"American Samoa","common":"American Samoa"},"smo":{"official":"S\u0101moa Amelika","common":"S\u0101moa Amelika"}}},"tld":[".as"],"cca2":"AS","ccn3":"016","cca3":"ASM","cioc":"ASA","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["684"]},"capital":["Pago Pago"],"altSpellings":["AS","Amerika S\u0101moa","Amelika S\u0101moa","S\u0101moa Amelika"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","smo":"Samoan"},"translations":{"ara":{"official":"\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629","common":"\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629"},"ces":{"official":"Americk\xe1 Samoa","common":"Americk\xe1 Samoa"},"deu":{"official":"Amerikanisch-Samoa","common":"Amerikanisch-Samoa"},"est":{"official":"Ameerika Samoa","common":"Ameerika Samoa"},"fin":{"official":"Amerikan Samoa","common":"Amerikan Samoa"},"fra":{"official":"Samoa am\xe9ricaines","common":"Samoa am\xe9ricaines"},"hrv":{"official":"ameri\u010Dka Samoa","common":"Ameri\u010Dka Samoa"},"hun":{"official":"Szamoa","common":"Szamoa"},"ita":{"official":"Samoa americane","common":"Samoa Americane"},"jpn":{"official":"\u7C73\u9818\u30B5\u30E2\u30A2","common":"\u30A2\u30E1\u30EA\u30AB\u9818\u30B5\u30E2\u30A2"},"kor":{"official":"\uC544\uBA54\uB9AC\uCE78\uC0AC\uBAA8\uC544","common":"\uC544\uBA54\uB9AC\uCE78\uC0AC\uBAA8\uC544"},"nld":{"official":"Amerikaans Samoa","common":"Amerikaans Samoa"},"per":{"official":"\u0633\u0627\u0645\u0648\u0622\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627","common":"\u0633\u0627\u0645\u0648\u0622\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627"},"pol":{"official":"Samoa Ameryka\u0144skie","common":"Samoa Ameryka\u0144skie"},"por":{"official":"Samoa americana","common":"Samoa Americana"},"rus":{"official":"\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u0421\u0430\u043C\u043E\u0430","common":"\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u0421\u0430\u043C\u043E\u0430"},"slk":{"official":"Americk\xe1 Samoa","common":"Americk\xe1 Samoa"},"spa":{"official":"Samoa Americana","common":"Samoa Americana"},"srp":{"official":"Ameri\u010Dka Samoa","common":"Ameri\u010Dka Samoa"},"swe":{"official":"Amerikanska Samoa","common":"Amerikanska Samoa"},"tur":{"official":"Amerikan Samoas\u0131","common":"Amerikan Samoas\u0131"},"urd":{"official":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0648\u0627","common":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0648\u0627"},"zho":{"official":"\u7F8E\u5C5E\u8428\u6469\u4E9A","common":"\u7F8E\u5C5E\u8428\u6469\u4E9A"}},"latlng":[-14.33333333,-170],"landlocked":false,"borders":[],"area":199,"flag":"\uD83C\uDDE6\uD83C\uDDF8","demonyms":{"eng":{"f":"American Samoan","m":"American Samoan"},"fra":{"f":"Samoane","m":"Samoan"}}},{"name":{"common":"Antarctica","official":"Antarctica","native":{}},"tld":[".aq"],"cca2":"AQ","ccn3":"010","cca3":"ATA","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{},"idd":{"root":"","suffixes":[]},"capital":[],"altSpellings":["AQ"],"region":"Antarctic","subregion":"","languages":{},"translations":{"ara":{"official":"\u0623\u0646\u062A\u0627\u0631\u062A\u064A\u0643\u0627","common":"\u0623\u0646\u062A\u0627\u0631\u062A\u064A\u0643\u0627"},"ces":{"official":"Antarktida","common":"Antarktida"},"deu":{"official":"Antarktika","common":"Antarktis"},"est":{"official":"Antarktika","common":"Antarktika"},"fin":{"official":"Etel\xe4manner","common":"Etel\xe4manner"},"fra":{"official":"Antarctique","common":"Antarctique"},"hrv":{"official":"Antarktika","common":"Antarktika"},"hun":{"official":"Antarktisz","common":"Antarktisz"},"ita":{"official":"Antartide","common":"Antartide"},"jpn":{"official":"\u5357\u6975","common":"\u5357\u6975\u5927\u9678"},"kor":{"official":"\uB0A8\uADF9","common":"\uB0A8\uADF9"},"nld":{"official":"Antarctica","common":"Antarctica"},"per":{"official":"\u062C\u0646\u0648\u0628\u06AF\u0627\u0646","common":"\u062C\u0646\u0648\u0628\u06AF\u0627\u0646"},"pol":{"official":"Antarktyka","common":"Antarktyka"},"por":{"official":"Ant\xe1rtica","common":"Ant\xe1rtida"},"rus":{"official":"\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0434\u0430","common":"\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0434\u0430"},"slk":{"official":"Antarkt\xedda","common":"Antarkt\xedda"},"spa":{"official":"Ant\xe1rtida","common":"Ant\xe1rtida"},"srp":{"official":"Antarktik","common":"Antarktik"},"swe":{"official":"Antarktis","common":"Antarktis"},"tur":{"official":"Antarktika","common":"Antarktika"},"urd":{"official":"\u0627\u0646\u0679\u0627\u0631\u06A9\u0679\u06A9\u0627","common":"\u0627\u0646\u0679\u0627\u0631\u06A9\u0679\u06A9\u0627"},"zho":{"official":"\u5357\u6781\u6D32","common":"\u5357\u6781\u6D32"}},"latlng":[-90,0],"landlocked":false,"borders":[],"area":14000000,"flag":"\uD83C\uDDE6\uD83C\uDDF6","demonyms":{"eng":{"f":"Antarctican","m":"Antarctican"},"fra":{"f":"Antarcticaine","m":"Antarcticain"}}},{"name":{"common":"French Southern and Antarctic Lands","official":"Territory of the French Southern and Antarctic Lands","native":{"fra":{"official":"Territoire des Terres australes et antarctiques fran\xe7aises","common":"Terres australes et antarctiques fran\xe7aises"}}},"tld":[".tf"],"cca2":"TF","ccn3":"260","cca3":"ATF","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+2","suffixes":["62"]},"capital":["Port-aux-Fran\xe7ais"],"altSpellings":["TF","French Southern Territories"],"region":"Antarctic","subregion":"","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0645\u0642\u0627\u0637\u0639\u0627\u062A \u0648\u0623\u0642\u0627\u0644\u064A\u0645 \u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u0628\u062D\u0627\u0631 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629","common":"\u0623\u0631\u0627\u0636 \u0641\u0631\u0646\u0633\u064A\u0629 \u062C\u0646\u0648\u0628\u064A\u0629 \u0648\u0623\u0646\u062A\u0627\u0631\u062A\u064A\u0643\u064A\u0629"},"ces":{"official":"Teritorium Francouzsk\xe1 ji\u017En\xed a antarktick\xe1 \xfazem\xed","common":"Francouzsk\xe1 ji\u017En\xed a antarktick\xe1 \xfazem\xed"},"deu":{"official":"Gebiet der Franz\xf6sisch S\xfcd- und Antarktisgebiete","common":"Franz\xf6sische S\xfcd- und Antarktisgebiete"},"est":{"official":"Prantsuse L\xf5unaalad","common":"Prantsuse L\xf5unaalad"},"fin":{"official":"Ranskan etel\xe4iset ja antarktiset alueet","common":"Ranskan etel\xe4iset ja antarktiset alueet"},"fra":{"official":"Territoire des Terres australes et antarctiques fran\xe7aises","common":"Terres australes et antarctiques fran\xe7aises"},"hrv":{"official":"Teritoriju Francuski ju\u017Eni i antarkti\u010Dki teritoriji","common":"Francuski ju\u017Eni i antarkti\u010Dki teritoriji"},"hun":{"official":"Francia d\xe9li \xe9s antarktiszi ter\xfcletek","common":"Francia d\xe9li \xe9s antarktiszi ter\xfcletek"},"ita":{"official":"Territorio della australi e antartiche francesi Terre","common":"Territori Francesi del Sud"},"jpn":{"official":"\u30D5\u30E9\u30F3\u30B9\u9818\u6975\u5357\u8AF8\u5CF6","common":"\u30D5\u30E9\u30F3\u30B9\u9818\u5357\u65B9\u30FB\u5357\u6975\u5730\u57DF"},"kor":{"official":"\uD504\uB791\uC2A4\uB839 \uB0A8\uBD80\uC640 \uB0A8\uADF9 \uC9C0\uC5ED","common":"\uD504\uB791\uC2A4\uB839 \uB0A8\uBD80\uC640 \uB0A8\uADF9 \uC9C0\uC5ED"},"nld":{"official":"Grondgebied van de Franse Zuidelijke en Antarctische gebieden","common":"Franse Gebieden in de zuidelijke Indische Oceaan"},"per":{"official":"\u0633\u0631\u0632\u0645\u06CC\u0646\u200C\u0647\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC \u0648 \u062C\u0646\u0648\u0628\u06AF\u0627\u0646\u06CC \u0641\u0631\u0627\u0646\u0633\u0647","common":"\u0633\u0631\u0632\u0645\u06CC\u0646\u200C\u0647\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC \u0648 \u062C\u0646\u0648\u0628\u06AF\u0627\u0646\u06CC \u0641\u0631\u0627\u0646\u0633\u0647"},"pol":{"official":"Francuskie Terytoria Po\u0142udniowe i Antarktyczne","common":"Francuskie Terytoria Po\u0142udniowe i Antarktyczne"},"por":{"official":"Territ\xf3rio do Sul e Ant\xe1rtica Francesa","common":"Terras Austrais e Ant\xe1rticas Francesas"},"rus":{"official":"\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0435 \u042E\u0436\u043D\u044B\u0435 \u0438 \u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0435\u043C\u043B\u0438","common":"\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0435 \u042E\u0436\u043D\u044B\u0435 \u0438 \u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438"},"slk":{"official":"Franc\xfazske ju\u017En\xe9 a antarktick\xe9 \xfazemia","common":"Franc\xfazske ju\u017Dn\xe9 a antarktick\xe9 \xfazemia"},"spa":{"official":"Territorio del Franc\xe9s Tierras australes y ant\xe1rticas","common":"Tierras Australes y Ant\xe1rticas Francesas"},"srp":{"official":"Francuske ju\u017Ene i antarkti\u010Dke zemlje","common":"Francuske ju\u017Ene i antarkti\u010Dke zemlje"},"swe":{"official":"Franska syd- och Antarktisterritorierna","common":"Franska s\xf6dra territorierna"},"tur":{"official":"Frans\u0131z G\xfcney ve Antarktika Topraklar\u0131","common":"Frans\u0131z G\xfcney ve Antarktika Topraklar\u0131"},"urd":{"official":"\u0633\u0631\u0632\u0645\u06CC\u0646\u0650 \u062C\u0646\u0648\u0628\u06CC \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC\u06C1 \u0648 \u0627\u0646\u0679\u0627\u0631\u06A9\u0679\u06CC\u06A9\u06C1","common":"\u0633\u0631\u0632\u0645\u06CC\u0646 \u062C\u0646\u0648\u0628\u06CC \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC\u06C1 \u0648 \u0627\u0646\u0679\u0627\u0631\u06A9\u0679\u06CC\u06A9\u0627"},"zho":{"official":"\u6CD5\u56FD\u5357\u90E8\u548C\u5357\u6781\u571F\u5730","common":"\u6CD5\u56FD\u5357\u90E8\u548C\u5357\u6781\u571F\u5730"}},"latlng":[-49.25,69.167],"landlocked":false,"borders":[],"area":7747,"flag":"\uD83C\uDDF9\uD83C\uDDEB","demonyms":{"eng":{"f":"French","m":"French"},"fra":{"f":"Fran\xe7aise","m":"Fran\xe7ais"}}},{"name":{"common":"Antigua and Barbuda","official":"Antigua and Barbuda","native":{"eng":{"official":"Antigua and Barbuda","common":"Antigua and Barbuda"}}},"tld":[".ag"],"cca2":"AG","ccn3":"028","cca3":"ATG","cioc":"ANT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["268"]},"capital":["Saint John\'s"],"altSpellings":["AG"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0623\u0646\u062A\u064A\u063A\u0648\u0627 \u0648\u0628\u0627\u0631\u0628\u0648\u062F\u0627","common":"\u0623\u0646\u062A\u064A\u063A\u0648\u0627 \u0648\u0628\u0627\u0631\u0628\u0648\u062F\u0627"},"ces":{"official":"Antigua a Barbuda","common":"Antigua a Barbuda"},"deu":{"official":"Antigua und Barbuda","common":"Antigua und Barbuda"},"est":{"official":"Antigua ja Barbuda","common":"Antigua ja Barbuda"},"fin":{"official":"Antigua ja Barbuda","common":"Antigua ja Barbuda"},"fra":{"official":"Antigua -et-Barbuda","common":"Antigua-et-Barbuda"},"hrv":{"official":"Antigva i Barbuda","common":"Antigva i Barbuda"},"hun":{"official":"Antigua \xe9s Barbuda","common":"Antigua \xe9s Barbuda"},"ita":{"official":"Antigua e Barbuda","common":"Antigua e Barbuda"},"jpn":{"official":"\u30A2\u30F3\u30C6\u30A3\u30B0\u30A2\u30FB\u30D0\u30FC\u30D6\u30FC\u30C0","common":"\u30A2\u30F3\u30C6\u30A3\u30B0\u30A2\u30FB\u30D0\u30FC\u30D6\u30FC\u30C0"},"kor":{"official":"\uC564\uD2F0\uAC00 \uBC14\uBD80\uB2E4","common":"\uC564\uD2F0\uAC00 \uBC14\uBD80\uB2E4"},"nld":{"official":"Antigua en Barbuda","common":"Antigua en Barbuda"},"per":{"official":"\u0622\u0646\u062A\u06CC\u06AF\u0648\u0627 \u0648 \u0628\u0627\u0631\u0628\u0648\u062F\u0627","common":"\u0622\u0646\u062A\u06CC\u06AF\u0648\u0627 \u0648 \u0628\u0627\u0631\u0628\u0648\u062F\u0627"},"pol":{"official":"Antigua i Barbuda","common":"Antigua i Barbuda"},"por":{"official":"Antigua e Barbuda","common":"Ant\xedgua e Barbuda"},"rus":{"official":"\u0410\u043D\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430","common":"\u0410\u043D\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430"},"slk":{"official":"Antigua a Barbuda","common":"Antigua a Barbuda"},"spa":{"official":"Antigua y Barbuda","common":"Antigua y Barbuda"},"srp":{"official":"Antigva i Barbuda","common":"Antigva i Barbuda"},"swe":{"official":"Antigua och Barbuda","common":"Antigua och Barbuda"},"tur":{"official":"Antigua ve Barbuda","common":"Antigua ve Barbuda"},"urd":{"official":"\u0627\u06CC\u0646\u0679\u06CC\u06AF\u0648\u0627 \u0648 \u0628\u0627\u0631\u0628\u0648\u0688\u0627","common":"\u0627\u06CC\u0646\u0679\u06CC\u06AF\u0648\u0627 \u0648 \u0628\u0627\u0631\u0628\u0648\u0688\u0627"},"zho":{"official":"\u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE","common":"\u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE"}},"latlng":[17.05,-61.8],"landlocked":false,"borders":[],"area":442,"flag":"\uD83C\uDDE6\uD83C\uDDEC","demonyms":{"eng":{"f":"Antiguan, Barbudan","m":"Antiguan, Barbudan"},"fra":{"f":"Antiguaise et barbudienne","m":"Antiguaise et barbudien"}}},{"name":{"common":"Australia","official":"Commonwealth of Australia","native":{"eng":{"official":"Commonwealth of Australia","common":"Australia"}}},"tld":[".au"],"cca2":"AU","ccn3":"036","cca3":"AUS","cioc":"AUS","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["1"]},"capital":["Canberra"],"altSpellings":["AU"],"region":"Oceania","subregion":"Australia and New Zealand","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0643\u0648\u0645\u0648\u0646\u0648\u0644\u062B \u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627","common":"\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627"},"ces":{"official":"Australsk\xe9 spole\u010Denstv\xed","common":"Austr\xe1lie"},"deu":{"official":"Commonwealth Australien","common":"Australien"},"est":{"official":"Austraalia \xdchendus","common":"Austraalia"},"fin":{"official":"Australian liittovaltio","common":"Australia"},"fra":{"official":"Australie","common":"Australie"},"hrv":{"official":"Commonwealth of Australia","common":"Australija"},"hun":{"official":"Ausztr\xe1l \xc1llamsz\xf6vets\xe9g","common":"Ausztr\xe1lia"},"ita":{"official":"Commonwealth dell\'Australia","common":"Australia"},"jpn":{"official":"\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u9023\u90A6","common":"\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2"},"kor":{"official":"\uC624\uC2A4\uD2B8\uB808\uC77C\uB9AC\uC544 \uC5F0\uBC29","common":"\uD638\uC8FC"},"nld":{"official":"Gemenebest van Australi\xeb","common":"Australi\xeb"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u0647\u0645\u0633\u0648\u062F \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627","common":"\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627"},"pol":{"official":"Zwi\u0105zek Australijski","common":"Australia"},"por":{"official":"Comunidade da Austr\xe1lia","common":"Austr\xe1lia"},"rus":{"official":"\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u0438","common":"\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F"},"slk":{"official":"Austr\xe1lsky zv\xe4z","common":"Austr\xe1lia"},"spa":{"official":"Mancomunidad de Australia","common":"Australia"},"srp":{"official":"Komonvelt Australija","common":"Australija"},"swe":{"official":"Australiska statsf\xf6rbundet","common":"Australien"},"tur":{"official":"Avustralya Federal Devleti","common":"Avustralya"},"urd":{"official":"\u062F\u0648\u0644\u062A\u0650 \u0645\u0634\u062A\u0631\u06A9\u06C1 \u0622\u0633\u0679\u0631\u06CC\u0644\u06CC\u0627","common":"\u0622\u0633\u0679\u0631\u06CC\u0644\u06CC\u0627"},"zho":{"official":"\u6FB3\u5927\u5229\u4E9A\u8054\u90A6","common":"\u6FB3\u5927\u5229\u4E9A"}},"latlng":[-27,133],"landlocked":false,"borders":[],"area":7692024,"flag":"\uD83C\uDDE6\uD83C\uDDFA","demonyms":{"eng":{"f":"Australian","m":"Australian"},"fra":{"f":"Australienne","m":"Australien"}}},{"name":{"common":"Austria","official":"Republic of Austria","native":{"bar":{"official":"Republik \xd6sterreich","common":"\xd6sterreich"}}},"tld":[".at"],"cca2":"AT","ccn3":"040","cca3":"AUT","cioc":"AUT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+4","suffixes":["3"]},"capital":["Vienna"],"altSpellings":["AT","Osterreich","Oesterreich"],"region":"Europe","subregion":"Central Europe","languages":{"bar":"Austro-Bavarian German"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0646\u0645\u0633\u0627","common":"\u0627\u0644\u0646\u0645\u0633\u0627"},"ces":{"official":"Rakousk\xe1 republika","common":"Rakousko"},"deu":{"official":"Republik \xd6sterreich","common":"\xd6sterreich"},"est":{"official":"Austria Vabariik","common":"Austria"},"fin":{"official":"It\xe4vallan tasavalta","common":"It\xe4valta"},"fra":{"official":"R\xe9publique d\'Autriche","common":"Autriche"},"hrv":{"official":"Republika Austrija","common":"Austrija"},"hun":{"official":"Ausztria","common":"Ausztria"},"ita":{"official":"Repubblica d\'Austria","common":"Austria"},"jpn":{"official":"\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2\u5171\u548C\u56FD","common":"\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2"},"kor":{"official":"\uC624\uC2A4\uD2B8\uB9AC\uC544 \uACF5\uD654\uAD6D","common":"\uC624\uC2A4\uD2B8\uB9AC\uC544"},"nld":{"official":"Republiek Oostenrijk","common":"Oostenrijk"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u062A\u0631\u06CC\u0634","common":"\u0627\u062A\u0631\u06CC\u0634"},"pol":{"official":"Republika Austrii","common":"Austria"},"por":{"official":"Rep\xfablica da \xc1ustria","common":"\xc1ustria"},"rus":{"official":"\u0410\u0432\u0441\u0442\u0440\u0438\u0439\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0410\u0432\u0441\u0442\u0440\u0438\u044F"},"slk":{"official":"Rak\xfaska republika","common":"Rak\xfasko"},"spa":{"official":"Rep\xfablica de Austria","common":"Austria"},"srp":{"official":"Republika Austrija","common":"Austrija"},"swe":{"official":"Republiken \xd6sterrike","common":"\xd6sterrike"},"tur":{"official":"Avusturya Cumhuriyeti","common":"Avusturya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0622\u0633\u0679\u0631\u06CC\u0627","common":"\u0622\u0633\u0679\u0631\u06CC\u0627"},"zho":{"official":"\u5965\u5730\u5229\u5171\u548C\u56FD","common":"\u5965\u5730\u5229"}},"latlng":[47.33333333,13.33333333],"landlocked":true,"borders":["CZE","DEU","HUN","ITA","LIE","SVK","SVN","CHE"],"area":83871,"flag":"\uD83C\uDDE6\uD83C\uDDF9","demonyms":{"eng":{"f":"Austrian","m":"Austrian"},"fra":{"f":"Autrichienne","m":"Autrichien"}}},{"name":{"common":"Azerbaijan","official":"Republic of Azerbaijan","native":{"aze":{"official":"Az\u0259rbaycan Respublikas\u0131","common":"Az\u0259rbaycan"},"rus":{"official":"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D"}}},"tld":[".az"],"cca2":"AZ","ccn3":"031","cca3":"AZE","cioc":"AZE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"AZN":{"name":"Azerbaijani manat","symbol":"\u20BC"}},"idd":{"root":"+9","suffixes":["94"]},"capital":["Baku"],"altSpellings":["AZ","Republic of Azerbaijan","Az\u0259rbaycan Respublikas\u0131"],"region":"Asia","subregion":"Western Asia","languages":{"aze":"Azerbaijani","rus":"Russian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0630\u0631\u0628\u064A\u062C\u0627\u0646","common":"\u0623\u0630\u0631\u0628\u064A\u062C\u0627\u0646"},"ces":{"official":"\xc1zerb\xe1jd\u017E\xe1nsk\xe1 republika","common":"\xc1zerb\xe1jd\u017E\xe1n"},"deu":{"official":"Republik Aserbaidschan","common":"Aserbaidschan"},"est":{"official":"Aserbaid\u017Eaani Vabariik","common":"Aserbaid\u017Eaan"},"fin":{"official":"Azerbaidzanin tasavalta","common":"Azerbaidzan"},"fra":{"official":"R\xe9publique d\'Azerba\xefdjan","common":"Azerba\xefdjan"},"hrv":{"official":"Republika Azerbajd\u017Ean","common":"Azerbajd\u017Ean"},"hun":{"official":"Azerbajdzs\xe1n","common":"Azerbajdzs\xe1n"},"ita":{"official":"Repubblica dell\'Azerbaigian","common":"Azerbaijan"},"jpn":{"official":"\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3\u5171\u548C\u56FD","common":"\u30A2\u30BC\u30EB\u30D0\u30A4\u30B8\u30E3\u30F3"},"kor":{"official":"\uC544\uC81C\uB974\uBC14\uC774\uC794 \uACF5\uD654\uAD6D","common":"\uC544\uC81C\uB974\uBC14\uC774\uC794"},"nld":{"official":"Republiek Azerbeidzjan","common":"Azerbeidzjan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646","common":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646"},"pol":{"official":"Republika Azerbejd\u017Canu","common":"Azerbejd\u017Can"},"por":{"official":"Rep\xfablica do Azerbaij\xe3o","common":"Azerbeij\xe3o"},"rus":{"official":"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D"},"slk":{"official":"Azerbaj\u01C6ansk\xe1 republika","common":"Azerbaj\u01C7an"},"spa":{"official":"Rep\xfablica de Azerbaiy\xe1n","common":"Azerbaiy\xe1n"},"srp":{"official":"Republika Azerbejd\u017Ean","common":"Azerbejd\u017Ean"},"swe":{"official":"Republiken Azerbajdzjan","common":"Azerbajdzjan"},"tur":{"official":"Azerbaycan Cumhuriyeti","common":"Azerbaycan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0622\u0630\u0631\u0628\u0627\u0626\u06CC\u062C\u0627\u0646","common":"\u0622\u0630\u0631\u0628\u0627\u0626\u06CC\u062C\u0627\u0646"},"zho":{"official":"\u963F\u585E\u62DC\u7586\u5171\u548C\u56FD","common":"\u963F\u585E\u62DC\u7586"}},"latlng":[40.5,47.5],"landlocked":true,"borders":["ARM","GEO","IRN","RUS","TUR"],"area":86600,"flag":"\uD83C\uDDE6\uD83C\uDDFF","demonyms":{"eng":{"f":"Azerbaijani","m":"Azerbaijani"},"fra":{"f":"Azerba\xefdjanaise","m":"Azerba\xefdjanais"}}},{"name":{"common":"Burundi","official":"Republic of Burundi","native":{"fra":{"official":"R\xe9publique du Burundi","common":"Burundi"},"run":{"official":"Republika y\'Uburundi ","common":"Uburundi"}}},"tld":[".bi"],"cca2":"BI","ccn3":"108","cca3":"BDI","cioc":"BDI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"BIF":{"name":"Burundian franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["57"]},"capital":["Gitega"],"altSpellings":["BI","Republic of Burundi","Republika y\'Uburundi","R\xe9publique du Burundi"],"region":"Africa","subregion":"Eastern Africa","languages":{"fra":"French","run":"Kirundi"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0648\u0631\u0648\u0646\u062F\u064A","common":"\u0628\u0648\u0631\u0648\u0646\u062F\u064A"},"ces":{"official":"Burundsk\xe1 republika","common":"Burundi"},"deu":{"official":"Republik Burundi","common":"Burundi"},"est":{"official":"Burundi Vabariik","common":"Burundi"},"fin":{"official":"Burundin tasavalta","common":"Burundi"},"fra":{"official":"R\xe9publique du Burundi","common":"Burundi"},"hrv":{"official":"Burundi","common":"Burundi"},"hun":{"official":"Burundi","common":"Burundi"},"ita":{"official":"Repubblica del Burundi","common":"Burundi"},"jpn":{"official":"\u30D6\u30EB\u30F3\u30B8\u5171\u548C\u56FD","common":"\u30D6\u30EB\u30F3\u30B8"},"kor":{"official":"\uBD80\uB8EC\uB514","common":"\uBD80\uB8EC\uB514"},"nld":{"official":"Republiek Burundi","common":"Burundi"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0648\u0631\u0648\u0646\u062F\u06CC","common":"\u0628\u0648\u0631\u0648\u0646\u062F\u06CC"},"pol":{"official":"Republika Burundi","common":"Burundi"},"por":{"official":"Rep\xfablica do Burundi","common":"Burundi"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0443\u0440\u0443\u043D\u0434\u0438","common":"\u0411\u0443\u0440\u0443\u043D\u0434\u0438"},"slk":{"official":"Burundsk\xe1 republika","common":"Burundi"},"spa":{"official":"Rep\xfablica de Burundi","common":"Burundi"},"srp":{"official":"Republika Burundi","common":"Burundi"},"swe":{"official":"Republiken Burundi","common":"Burundi"},"tur":{"official":"Burundi Cumhuriyeti","common":"Burundi"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0631\u0648\u0646\u0688\u06CC","common":"\u0628\u0631\u0648\u0646\u0688\u06CC"},"zho":{"official":"\u5E03\u9686\u8FEA\u5171\u548C\u56FD","common":"\u5E03\u9686\u8FEA"}},"latlng":[-3.5,30],"landlocked":true,"borders":["COD","RWA","TZA"],"area":27834,"flag":"\uD83C\uDDE7\uD83C\uDDEE","demonyms":{"eng":{"f":"Burundian","m":"Burundian"},"fra":{"f":"Burundaise","m":"Burundais"}}},{"name":{"common":"Belgium","official":"Kingdom of Belgium","native":{"deu":{"official":"K\xf6nigreich Belgien","common":"Belgien"},"fra":{"official":"Royaume de Belgique","common":"Belgique"},"nld":{"official":"Koninkrijk Belgi\xeb","common":"Belgi\xeb"}}},"tld":[".be"],"cca2":"BE","ccn3":"056","cca3":"BEL","cioc":"BEL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["2"]},"capital":["Brussels"],"altSpellings":["BE","Belgi\xeb","Belgie","Belgien","Belgique","Kingdom of Belgium","Koninkrijk Belgi\xeb","Royaume de Belgique","K\xf6nigreich Belgien"],"region":"Europe","subregion":"Western Europe","languages":{"deu":"German","fra":"French","nld":"Dutch"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0628\u0644\u062C\u064A\u0643\u0627","common":"\u0628\u0644\u062C\u064A\u0643\u0627"},"ces":{"official":"Belgick\xe9 kr\xe1lovstv\xed","common":"Belgie"},"deu":{"official":"K\xf6nigreich Belgien","common":"Belgien"},"est":{"official":"Belgia Kuningriik","common":"Belgia"},"fin":{"official":"Belgian kuningaskunta","common":"Belgia"},"fra":{"official":"Royaume de Belgique","common":"Belgique"},"hrv":{"official":"Kraljevina Belgija","common":"Belgija"},"hun":{"official":"Belga Kir\xe1lys\xe1g","common":"Belgium"},"ita":{"official":"Regno del Belgio","common":"Belgio"},"jpn":{"official":"\u30D9\u30EB\u30AE\u30FC\u738B\u56FD","common":"\u30D9\u30EB\u30AE\u30FC"},"kor":{"official":"\uBCA8\uAE30\uC5D0 \uC655\uAD6D","common":"\uBCA8\uAE30\uC5D0"},"nld":{"official":"Koninkrijk Belgi\xeb","common":"Belgi\xeb"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0628\u0644\u0698\u06CC\u06A9","common":"\u0628\u0644\u0698\u06CC\u06A9"},"pol":{"official":"Kr\xf3lestwo Belgii","common":"Belgia"},"por":{"official":"Reino da B\xe9lgica","common":"B\xe9lgica"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0411\u0435\u043B\u044C\u0433\u0438\u044F","common":"\u0411\u0435\u043B\u044C\u0433\u0438\u044F"},"slk":{"official":"Belgick\xe9 kr\xe1\u013Eovstvo","common":"Belgicko"},"spa":{"official":"Reino de B\xe9lgica","common":"B\xe9lgica"},"srp":{"official":"Kraljevina Belgija","common":"Belgija"},"swe":{"official":"Konungariket Belgien","common":"Belgien"},"tur":{"official":"Bel\xe7ika Krall\u0131\u011F\u0131","common":"Bel\xe7ika"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0628\u0644\u062C\u0626\u06CC\u0645","common":"\u0628\u0644\u062C\u0626\u06CC\u0645"},"zho":{"official":"\u6BD4\u5229\u65F6\u738B\u56FD","common":"\u6BD4\u5229\u65F6"}},"latlng":[50.83333333,4],"landlocked":false,"borders":["FRA","DEU","LUX","NLD"],"area":30528,"flag":"\uD83C\uDDE7\uD83C\uDDEA","demonyms":{"eng":{"f":"Belgian","m":"Belgian"},"fra":{"f":"Belge","m":"Belge"}}},{"name":{"common":"Benin","official":"Republic of Benin","native":{"fra":{"official":"R\xe9publique du B\xe9nin","common":"B\xe9nin"}}},"tld":[".bj"],"cca2":"BJ","ccn3":"204","cca3":"BEN","cioc":"BEN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["29"]},"capital":["Porto-Novo"],"altSpellings":["BJ","Republic of Benin","R\xe9publique du B\xe9nin"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0646\u064A\u0646","common":"\u0628\u0646\u064A\u0646"},"ces":{"official":"Beninsk\xe1 republika","common":"Benin"},"deu":{"official":"Republik Benin","common":"Benin"},"est":{"official":"Benini Vabariik","common":"Benin"},"fin":{"official":"Beninin tasavalta","common":"Benin"},"fra":{"official":"R\xe9publique du B\xe9nin","common":"B\xe9nin"},"hrv":{"official":"Republika Benin","common":"Benin"},"hun":{"official":"Benini K\xf6zt\xe1rsas\xe1g","common":"Benin"},"ita":{"official":"Repubblica del Benin","common":"Benin"},"jpn":{"official":"\u30D9\u30CA\u30F3\u5171\u548C\u56FD","common":"\u30D9\u30CA\u30F3"},"kor":{"official":"\uBCA0\uB0C9 \uACF5\uD654\uAD6D","common":"\uBCA0\uB0C9"},"nld":{"official":"Republiek Benin","common":"Benin"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0646\u06CC\u0646","common":"\u0628\u0646\u06CC\u0646"},"pol":{"official":"Benin","common":"Benin"},"por":{"official":"Rep\xfablica do Benin","common":"Benin"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043D\u0438\u043D","common":"\u0411\u0435\u043D\u0438\u043D"},"slk":{"official":"Beninsk\xe1 republika","common":"Benin"},"spa":{"official":"Rep\xfablica de Benin","common":"Ben\xedn"},"srp":{"official":"Republika Benin","common":"Benin"},"swe":{"official":"Republiken Benin","common":"Benin"},"tur":{"official":"Benin Cumhuriyeti","common":"Benin"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u06CC\u0646\u0646","common":"\u0628\u06CC\u0646\u0646"},"zho":{"official":"\u8D1D\u5B81\u5171\u548C\u56FD","common":"\u8D1D\u5B81"}},"latlng":[9.5,2.25],"landlocked":false,"borders":["BFA","NER","NGA","TGO"],"area":112622,"flag":"\uD83C\uDDE7\uD83C\uDDEF","demonyms":{"eng":{"f":"Beninese","m":"Beninese"},"fra":{"f":"B\xe9ninoise","m":"B\xe9ninois"}}},{"name":{"common":"Burkina Faso","official":"Burkina Faso","native":{"fra":{"official":"R\xe9publique du Burkina","common":"Burkina Faso"}}},"tld":[".bf"],"cca2":"BF","ccn3":"854","cca3":"BFA","cioc":"BUR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["26"]},"capital":["Ouagadougou"],"altSpellings":["BF"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0628\u0648\u0631\u0643\u064A\u0646\u0627 \u0641\u0627\u0633\u0648","common":"\u0628\u0648\u0631\u0643\u064A\u0646\u0627 \u0641\u0627\u0633\u0648"},"ces":{"official":"Burkina Faso","common":"Burkina Faso"},"deu":{"official":"Burkina Faso","common":"Burkina Faso"},"est":{"official":"Burkina Faso","common":"Burkina Faso"},"fin":{"official":"Burkina Faso","common":"Burkina Faso"},"fra":{"official":"R\xe9publique du Burkina","common":"Burkina Faso"},"hrv":{"official":"Burkina Faso","common":"Burkina Faso"},"hun":{"official":"Burkina Faso","common":"Burkina"},"ita":{"official":"Burkina Faso","common":"Burkina Faso"},"jpn":{"official":"\u30D6\u30EB\u30AD\u30CA\u30D5\u30A1\u30BD","common":"\u30D6\u30EB\u30AD\u30CA\u30D5\u30A1\u30BD"},"kor":{"official":"\uBD80\uB974\uD0A4\uB098\uD30C\uC18C","common":"\uBD80\uB974\uD0A4\uB098\uD30C\uC18C"},"nld":{"official":"Burkina Faso","common":"Burkina Faso"},"per":{"official":"\u0628\u0648\u0631\u06A9\u06CC\u0646\u0627\u0641\u0627\u0633\u0648","common":"\u0628\u0648\u0631\u06A9\u06CC\u0646\u0627\u0641\u0627\u0633\u0648"},"pol":{"official":"Burkina Faso","common":"Burkina Faso"},"por":{"official":"Burkina Faso","common":"Burkina Faso"},"rus":{"official":"\u0411\u0443\u0440\u043A\u0438\u043D\u0430 -\u0424\u0430\u0441\u043E","common":"\u0411\u0443\u0440\u043A\u0438\u043D\u0430-\u0424\u0430\u0441\u043E"},"slk":{"official":"Burkina Faso","common":"Burkina Faso"},"spa":{"official":"Burkina Faso","common":"Burkina Faso"},"srp":{"official":"Burkina Faso","common":"Burkina Faso"},"swe":{"official":"Burkina Faso","common":"Burkina Faso"},"tur":{"official":"Burkina Faso","common":"Burkina Faso"},"urd":{"official":"\u0628\u0631\u06A9\u06CC\u0646\u0627 \u0641\u0627\u0633\u0648","common":"\u0628\u0631\u06A9\u06CC\u0646\u0627 \u0641\u0627\u0633\u0648"},"zho":{"official":"\u5E03\u57FA\u7EB3\u6CD5\u7D22","common":"\u5E03\u57FA\u7EB3\u6CD5\u7D22"}},"latlng":[13,-2],"landlocked":true,"borders":["BEN","CIV","GHA","MLI","NER","TGO"],"area":272967,"flag":"\uD83C\uDDE7\uD83C\uDDEB","demonyms":{"eng":{"f":"Burkinabe","m":"Burkinabe"},"fra":{"f":"Burkinab\xe9e","m":"Burkinab\xe9"}}},{"name":{"common":"Bangladesh","official":"People\'s Republic of Bangladesh","native":{"ben":{"official":"\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0997\u09A3\u09AA\u09CD\u09B0\u099C\u09BE\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0\u09C0","common":"\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6"}}},"tld":[".bd"],"cca2":"BD","ccn3":"050","cca3":"BGD","cioc":"BAN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"BDT":{"name":"Bangladeshi taka","symbol":"\u09F3"}},"idd":{"root":"+8","suffixes":["80"]},"capital":["Dhaka"],"altSpellings":["BD","People\'s Republic of Bangladesh","G\xf4n\xf4pr\xf4jat\xf4ntri Bangladesh"],"region":"Asia","subregion":"Southern Asia","languages":{"ben":"Bengali"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634"},"ces":{"official":"Banglad\xe9\u0161sk\xe1 lidov\xe1 republika","common":"Banglad\xe9\u0161"},"deu":{"official":"Volksrepublik Bangladesch","common":"Bangladesch"},"est":{"official":"Bangladeshi Rahvavabariik","common":"Bangladesh"},"fin":{"official":"Bangladeshin kansantasavalta","common":"Bangladesh"},"fra":{"official":"La R\xe9publique populaire du Bangladesh","common":"Bangladesh"},"hrv":{"official":"Narodna Republika Banglade\u0161","common":"Banglade\u0161"},"hun":{"official":"Banglades","common":"Banglades"},"ita":{"official":"Repubblica popolare del Bangladesh","common":"Bangladesh"},"jpn":{"official":"\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5\u4EBA\u6C11\u5171\u548C\u56FD","common":"\u30D0\u30F3\u30B0\u30E9\u30C7\u30B7\u30E5"},"kor":{"official":"\uBC29\uAE00\uB77C\uB370\uC2DC \uC778\uBBFC \uACF5\uD654\uAD6D","common":"\uBC29\uAE00\uB77C\uB370\uC2DC"},"nld":{"official":"Volksrepubliek Bangladesh","common":"Bangladesh"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062E\u0644\u0642 \u0628\u0646\u06AF\u0644\u0627\u062F\u0634","common":"\u0628\u0646\u06AF\u0644\u0627\u062F\u0634"},"pol":{"official":"Ludowa Republika Bangladeszu","common":"Bangladesz"},"por":{"official":"Rep\xfablica Popular do Bangladesh","common":"Bangladesh"},"rus":{"official":"\u041D\u0430\u0440\u043E\u0434\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448","common":"\u0411\u0430\u043D\u0433\u043B\u0430\u0434\u0435\u0448"},"slk":{"official":"Banglad\xe9\u0161ska \u013Eudov\xe1 republika","common":"Banglad\xe9\u0161"},"spa":{"official":"Rep\xfablica Popular de Bangladesh","common":"Bangladesh"},"srp":{"official":"Narodna Republika Banglade\u0161","common":"Banglade\u0161"},"swe":{"official":"Folkrepubliken Bangladesh","common":"Bangladesh"},"tur":{"official":"Banglade\u015F Halk Cumhuriyeti","common":"Banglade\u015F"},"urd":{"official":"\u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0646\u06AF\u0644\u06C1 \u062F\u06CC\u0634","common":"\u0628\u0646\u06AF\u0644\u06C1 \u062F\u06CC\u0634"},"zho":{"official":"\u5B5F\u52A0\u62C9\u4EBA\u6C11\u5171\u548C\u56FD","common":"\u5B5F\u52A0\u62C9\u56FD"}},"latlng":[24,90],"landlocked":false,"borders":["MMR","IND"],"area":147570,"flag":"\uD83C\uDDE7\uD83C\uDDE9","demonyms":{"eng":{"f":"Bangladeshi","m":"Bangladeshi"},"fra":{"f":"Bangladaise","m":"Bangladais"}}},{"name":{"common":"Bulgaria","official":"Republic of Bulgaria","native":{"bul":{"official":"\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F","common":"\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F"}}},"tld":[".bg"],"cca2":"BG","ccn3":"100","cca3":"BGR","cioc":"BUL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"BGN":{"name":"Bulgarian lev","symbol":"\u043B\u0432"}},"idd":{"root":"+3","suffixes":["59"]},"capital":["Sofia"],"altSpellings":["BG","Republic of Bulgaria","\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F"],"region":"Europe","subregion":"Southeast Europe","languages":{"bul":"Bulgarian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0644\u063A\u0627\u0631\u064A\u0627","common":"\u0628\u0644\u063A\u0627\u0631\u064A\u0627"},"ces":{"official":"Bulharsk\xe1 republika","common":"Bulharsko"},"deu":{"official":"Republik Bulgarien","common":"Bulgarien"},"est":{"official":"Bulgaaria Vabariik","common":"Bulgaaria"},"fin":{"official":"Bulgarian tasavalta","common":"Bulgaria"},"fra":{"official":"R\xe9publique de Bulgarie","common":"Bulgarie"},"hrv":{"official":"Republika Bugarska","common":"Bugarska"},"hun":{"official":"Bolg\xe1r K\xf6zt\xe1rsas\xe1g","common":"Bulg\xe1ria"},"ita":{"official":"Repubblica di Bulgaria","common":"Bulgaria"},"jpn":{"official":"\u30D6\u30EB\u30AC\u30EA\u30A2\u5171\u548C\u56FD","common":"\u30D6\u30EB\u30AC\u30EA\u30A2"},"kor":{"official":"\uBD88\uAC00\uB9AC\uC544 \uACF5\uD654\uAD6D","common":"\uBD88\uAC00\uB9AC\uC544"},"nld":{"official":"Republiek Bulgarije","common":"Bulgarije"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0644\u063A\u0627\u0631\u0633\u062A\u0627\u0646","common":"\u0628\u0644\u063A\u0627\u0631\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Bu\u0142garii","common":"Bu\u0142garia"},"por":{"official":"Rep\xfablica da Bulg\xe1ria","common":"Bulg\xe1ria"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F","common":"\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F"},"slk":{"official":"Bulharsk\xe1 republika","common":"Bulharsko"},"spa":{"official":"Rep\xfablica de Bulgaria","common":"Bulgaria"},"srp":{"official":"Republika Bugarska","common":"Bugarska"},"swe":{"official":"Republiken Bulgarien","common":"Bulgarien"},"tur":{"official":"Bulgaristan Cumhuriyeti","common":"Bulgaristan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0644\u063A\u0627\u0631\u06CC\u06C1","common":"\u0628\u0644\u063A\u0627\u0631\u06CC\u06C1"},"zho":{"official":"\u4FDD\u52A0\u5229\u4E9A\u5171\u548C\u56FD","common":"\u4FDD\u52A0\u5229\u4E9A"}},"latlng":[43,25],"landlocked":false,"borders":["GRC","MKD","ROU","SRB","TUR"],"area":110879,"flag":"\uD83C\uDDE7\uD83C\uDDEC","demonyms":{"eng":{"f":"Bulgarian","m":"Bulgarian"},"fra":{"f":"Bulgare","m":"Bulgare"}}},{"name":{"common":"Bahrain","official":"Kingdom of Bahrain","native":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0628\u062D\u0631\u064A\u0646","common":"\u0627\u0644\u0628\u062D\u0631\u064A\u0646"}}},"tld":[".bh"],"cca2":"BH","ccn3":"048","cca3":"BHR","cioc":"BRN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"BHD":{"name":"Bahraini dinar","symbol":".\u062F.\u0628"}},"idd":{"root":"+9","suffixes":["73"]},"capital":["Manama"],"altSpellings":["BH","Kingdom of Bahrain","Mamlakat al-Ba\u1E25rayn"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0628\u062D\u0631\u064A\u0646","common":"\u0627\u0644\u0628\u062D\u0631\u064A\u0646"},"ces":{"official":"Kr\xe1lovstv\xed Bahrajn","common":"Bahrajn"},"deu":{"official":"K\xf6nigreich Bahrain","common":"Bahrain"},"est":{"official":"Bahreini Kuningriik","common":"Bahrein"},"fin":{"official":"Bahrainin kuningaskunta","common":"Bahrain"},"fra":{"official":"Royaume de Bahre\xefn","common":"Bahre\xefn"},"hrv":{"official":"Kraljevina Bahrein","common":"Bahrein"},"hun":{"official":"Bahreini Kir\xe1lys\xe1g","common":"Bahrein"},"ita":{"official":"Regno del Bahrain","common":"Bahrein"},"jpn":{"official":"\u30D0\u30FC\u30EC\u30FC\u30F3\u738B\u56FD","common":"\u30D0\u30FC\u30EC\u30FC\u30F3"},"kor":{"official":"\uBC14\uB808\uC778 \uC655\uAD6D","common":"\uBC14\uB808\uC778"},"nld":{"official":"Koninkrijk Bahrein","common":"Bahrein"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0628\u062D\u0631\u06CC\u0646","common":"\u0628\u062D\u0631\u06CC\u0646"},"pol":{"official":"Kr\xf3lestwo Bahrajnu","common":"Bahrajn"},"por":{"official":"Reino do Bahrein","common":"Bahrein"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0411\u0430\u0445\u0440\u0435\u0439\u043D","common":"\u0411\u0430\u0445\u0440\u0435\u0439\u043D"},"slk":{"official":"Bahrajnsk\xe9 kr\xe1\u013Eovstvo","common":"Bahrajn"},"spa":{"official":"Reino de Bahrein","common":"Bahrein"},"srp":{"official":"Kraljevina Bahrein","common":"Bahrein"},"swe":{"official":"Konungariket Bahrain","common":"Bahrain"},"tur":{"official":"Bahreyn Krall\u0131\u011F\u0131","common":"Bahreyn"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0628\u062D\u0631\u06CC\u0646","common":"\u0628\u062D\u0631\u06CC\u0646"},"zho":{"official":"\u5DF4\u6797\u738B\u56FD","common":"\u5DF4\u6797"}},"latlng":[26,50.55],"landlocked":false,"borders":[],"area":765,"flag":"\uD83C\uDDE7\uD83C\uDDED","demonyms":{"eng":{"f":"Bahraini","m":"Bahraini"},"fra":{"f":"Bahre\xefnienne","m":"Bahre\xefnien"}}},{"name":{"common":"Bahamas","official":"Commonwealth of the Bahamas","native":{"eng":{"official":"Commonwealth of the Bahamas","common":"Bahamas"}}},"tld":[".bs"],"cca2":"BS","ccn3":"044","cca3":"BHS","cioc":"BAH","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"BSD":{"name":"Bahamian dollar","symbol":"$"},"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["242"]},"capital":["Nassau"],"altSpellings":["BS","Commonwealth of the Bahamas"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0643\u0648\u0645\u0646\u0648\u0644\u062B \u062C\u0632\u0631 \u0627\u0644\u0628\u0647\u0627\u0645\u0627","common":"\u0627\u0644\u0628\u0647\u0627\u0645\u0627"},"ces":{"official":"Bahamsk\xe9 spole\u010Denstv\xed","common":"Bahamy"},"deu":{"official":"Commonwealth der Bahamas","common":"Bahamas"},"est":{"official":"Bahama \xdchendus","common":"Bahama"},"fin":{"official":"Bahaman liittovaltio","common":"Bahamasaaret"},"fra":{"official":"Commonwealth des Bahamas","common":"Bahamas"},"hrv":{"official":"Zajednica Bahama","common":"Bahami"},"hun":{"official":"Bahamai K\xf6z\xf6ss\xe9g","common":"Bahama-szigetek"},"ita":{"official":"Commonwealth delle Bahamas","common":"Bahamas"},"jpn":{"official":"\u30D0\u30CF\u30DE\u56FD","common":"\u30D0\u30CF\u30DE"},"kor":{"official":"\uBC14\uD558\uB9C8 \uC5F0\uBC29","common":"\uBC14\uD558\uB9C8"},"nld":{"official":"Gemenebest van de Bahama\'s","common":"Bahama\u2019s"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u0647\u0645\u0633\u0648\u062F \u0628\u0627\u0647\u0627\u0645\u0627","common":"\u0628\u0627\u0647\u0627\u0645\u0627"},"pol":{"official":"Bahamy","common":"Bahamy"},"por":{"official":"Comunidade das Bahamas","common":"Bahamas"},"rus":{"official":"\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u0411\u0430\u0433\u0430\u043C\u0441\u043A\u0438\u0445 \u041E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","common":"\u0411\u0430\u0433\u0430\u043C\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Bahamsk\xe9 spolo\u010Denstvo","common":"Bahamy"},"spa":{"official":"Commonwealth de las Bahamas","common":"Bahamas"},"srp":{"official":"Komonvelt Bahama","common":"Bahami"},"swe":{"official":"Samv\xe4ldet Bahamas","common":"Bahamas"},"tur":{"official":"Bahama Milletler Toplulu\u011Fu","common":"Bahamalar"},"urd":{"official":"\u062F\u0648\u0644\u062A\u0650 \u0645\u0634\u062A\u0631\u06A9\u06C1 \u0628\u06C1\u0627\u0645\u0627\u0633","common":"\u0628\u06C1\u0627\u0645\u0627\u0633"},"zho":{"official":"\u5DF4\u54C8\u9A6C\u8054\u90A6","common":"\u5DF4\u54C8\u9A6C"}},"latlng":[24.25,-76],"landlocked":false,"borders":[],"area":13943,"flag":"\uD83C\uDDE7\uD83C\uDDF8","demonyms":{"eng":{"f":"Bahamian","m":"Bahamian"},"fra":{"f":"Bahamienne","m":"Bahamien"}}},{"name":{"common":"Bosnia and Herzegovina","official":"Bosnia and Herzegovina","native":{"bos":{"official":"Bosna i Hercegovina","common":"Bosna i Hercegovina"},"hrv":{"official":"Bosna i Hercegovina","common":"Bosna i Hercegovina"},"srp":{"official":"\u0411\u043E\u0441\u043Da \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430","common":"\u0411\u043E\u0441\u043Da \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430"}}},"tld":[".ba"],"cca2":"BA","ccn3":"070","cca3":"BIH","cioc":"BIH","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"BAM":{"name":"Bosnia and Herzegovina convertible mark","symbol":"KM"}},"idd":{"root":"+3","suffixes":["87"]},"capital":["Sarajevo"],"altSpellings":["BA","Bosnia-Herzegovina","\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430"],"region":"Europe","subregion":"Southeast Europe","languages":{"bos":"Bosnian","hrv":"Croatian","srp":"Serbian"},"translations":{"ara":{"official":"\u0627\u0644\u0628\u0648\u0633\u0646\u0629 \u0648\u0627\u0644\u0647\u0631\u0633\u0643","common":"\u0627\u0644\u0628\u0648\u0633\u0646\u0629 \u0648\u0627\u0644\u0647\u0631\u0633\u0643"},"ces":{"official":"Bosna a Hercegovina","common":"Bosna a Hercegovina"},"deu":{"official":"Bosnien und Herzegowina","common":"Bosnien und Herzegowina"},"est":{"official":"Bosnia ja Hertsegoviina","common":"Bosnia ja Hertsegoviina"},"fin":{"official":"Bosnia ja Hertsegovina","common":"Bosnia ja Hertsegovina"},"fra":{"official":"Bosnie-et-Herz\xe9govine","common":"Bosnie-Herz\xe9govine"},"hrv":{"official":"Bosna i Hercegovina","common":"Bosna i Hercegovina"},"hun":{"official":"Bosznia-Hercegovina","common":"Bosznia-Hercegovina"},"ita":{"official":"Bosnia-Erzegovina","common":"Bosnia ed Erzegovina"},"jpn":{"official":"\u30DC\u30B9\u30CB\u30A2\u30FB\u30D8\u30EB\u30C4\u30A7\u30B4\u30D3\u30CA","common":"\u30DC\u30B9\u30CB\u30A2\u30FB\u30D8\u30EB\u30C4\u30A7\u30B4\u30D3\u30CA"},"kor":{"official":"\uBCF4\uC2A4\uB2C8\uC544 \uD5E4\uB974\uCCB4\uACE0\uBE44\uB098","common":"\uBCF4\uC2A4\uB2C8\uC544 \uD5E4\uB974\uCCB4\uACE0\uBE44\uB098"},"nld":{"official":"Bosni\xeb-Herzegovina","common":"Bosni\xeb en Herzegovina"},"per":{"official":"\u0628\u0648\u0633\u0646\u06CC \u0648 \u0647\u0631\u0632\u06AF\u0648\u06CC\u0646","common":"\u0628\u0648\u0633\u0646\u06CC \u0648 \u0647\u0631\u0632\u06AF\u0648\u06CC\u0646"},"pol":{"official":"Bo\u015Bnia i Hercegowina","common":"Bo\u015Bnia i Hercegowina"},"por":{"official":"B\xf3snia e Herzegovina","common":"B\xf3snia e Herzegovina"},"rus":{"official":"\u0411\u043E\u0441\u043D\u0438\u044F \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430","common":"\u0411\u043E\u0441\u043D\u0438\u044F \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430"},"slk":{"official":"Republika Bosny a Hercegoviny","common":"Bosna a Hercegovina"},"spa":{"official":"Bosnia y Herzegovina","common":"Bosnia y Herzegovina"},"srp":{"official":"Bosna i Hercegovina","common":"Bosna i Hercegovina"},"swe":{"official":"Bosnien och Hercegovina","common":"Bosnien och Hercegovina"},"tur":{"official":"Bosna ve Hersek","common":"Bosna-Hersek"},"urd":{"official":"\u0628\u0648\u0633\u0646\u06CC\u0627 \u0648 \u06C1\u0631\u0632\u06CC\u06AF\u0648\u0648\u06CC\u0646\u0627","common":"\u0628\u0648\u0633\u0646\u06CC\u0627 \u0648 \u06C1\u0631\u0632\u06CC\u06AF\u0648\u0648\u06CC\u0646\u0627"},"zho":{"official":"\u6CE2\u65AF\u5C3C\u4E9A\u548C\u9ED1\u585E\u54E5\u7EF4\u90A3","common":"\u6CE2\u65AF\u5C3C\u4E9A\u548C\u9ED1\u585E\u54E5\u7EF4\u90A3"}},"latlng":[44,18],"landlocked":false,"borders":["HRV","MNE","SRB"],"area":51209,"flag":"\uD83C\uDDE7\uD83C\uDDE6","demonyms":{"eng":{"f":"Bosnian, Herzegovinian","m":"Bosnian, Herzegovinian"},"fra":{"f":"Bosnienne","m":"Bosnien"}}},{"name":{"common":"Saint Barth\xe9lemy","official":"Collectivity of Saint Barth\xe9lemy","native":{"fra":{"official":"Collectivit\xe9 de Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"}}},"tld":[".bl"],"cca2":"BL","ccn3":"652","cca3":"BLM","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["90"]},"capital":["Gustavia"],"altSpellings":["BL","St. Barthelemy","Collectivity of Saint Barth\xe9lemy","Collectivit\xe9 de Saint-Barth\xe9lemy"],"region":"Americas","subregion":"Caribbean","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0627\u0644\u062A\u062C\u0645\u0639 \u0627\u0644\u0625\u0642\u0644\u064A\u0645\u064A \u0644\u0633\u0627\u0646\u062A \u0628\u0627\u0631\u062A\u064A\u0644\u064A\u0645\u064A","common":"\u0633\u0627\u0646 \u0628\u0627\u0631\u062A\u0644\u064A\u0645\u064A"},"ces":{"official":"Svat\xfd Bartolom\u011Bj","common":"Svat\xfd Bartolom\u011Bj"},"deu":{"official":"Gebietsk\xf6rperschaft Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"},"est":{"official":"Saint-Barth\xe9lemy territoriaal\xfchendus","common":"Saint-Barth\xe9lemy"},"fin":{"official":"Saint-Barth\xe9lemyn yhteis\xf6","common":"Saint-Barth\xe9lemy"},"fra":{"official":"Collectivit\xe9 de Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"},"hrv":{"official":"Kolektivnost sv Barth\xe9lemy","common":"Saint Barth\xe9lemy"},"hun":{"official":"Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"},"ita":{"official":"Collettivit\xe0 di Saint Barth\xe9lemy","common":"Antille Francesi"},"jpn":{"official":"\u30B5\u30F3\u30D0\u30EB\u30C6\u30EB\u30DF\u30FC","common":"\u30B5\u30F3\u30FB\u30D0\u30EB\u30C6\u30EB\u30DF\u30FC\u5CF6"},"kor":{"official":"\uC0DD\uBC14\uB974\uD154\uB808\uBBF8","common":"\uC0DD\uBC14\uB974\uD154\uB808\uBBF8"},"nld":{"official":"Gemeenschap Saint Barth\xe9lemy","common":"Saint Barth\xe9lemy"},"per":{"official":"\u0633\u0646 \u0628\u0627\u0631\u062A\u0644\u0645\u06CC","common":"\u0633\u0646 \u0628\u0627\u0631\u062A\u0644\u0645\u06CC"},"pol":{"official":"Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"},"por":{"official":"Coletividade de Saint Barth\xe9lemy","common":"S\xe3o Bartolomeu"},"rus":{"official":"\u041A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0421\u0430\u043D\u043A\u0442 -\u0411\u0430\u0440\u0442\u0435\u043B\u044C\u043C\u0438","common":"\u0421\u0435\u043D-\u0411\u0430\u0440\u0442\u0435\u043B\u0435\u043C\u0438"},"slk":{"official":"Sv\xe4t\xfd Bartolomej","common":"Sv\xe4t\xfd Bartolomej"},"spa":{"official":"Colectividad de San Barth\xe9lemy","common":"San Bartolom\xe9"},"srp":{"official":"Sveti Bartolomej","common":"kolektivitet Sveti Bartolomej"},"swe":{"official":"Saint-Barth\xe9lemy","common":"Saint-Barth\xe9lemy"},"tur":{"official":"Saint Barth\xe9lemy","common":"Saint Barth\xe9lemy"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u0628\u0627\u0631\u062A\u06BE\u06CC\u0645\u0644\u06D2","common":"\u0633\u06CC\u0646\u0679 \u0628\u0627\u0631\u062A\u06BE\u06CC\u0645\u0644\u06D2"},"zho":{"official":"\u5723\u5DF4\u6CF0\u52D2\u7C73\u96C6\u4F53","common":"\u5723\u5DF4\u6CF0\u52D2\u7C73"}},"latlng":[18.5,-63.41666666],"landlocked":false,"borders":[],"area":21,"flag":"\uD83C\uDDE7\uD83C\uDDF1","demonyms":{"eng":{"f":"Saint Barth\xe9lemy Islander","m":"Saint Barth\xe9lemy Islander"},"fra":{"f":"Barth\xe9lom\xe9enne","m":"Barth\xe9lom\xe9en"}}},{"name":{"common":"Saint Helena, Ascension and Tristan da Cunha","official":"Saint Helena, Ascension and Tristan da Cunha","native":{"eng":{"official":"Saint Helena, Ascension and Tristan da Cunha","common":"Saint Helena, Ascension and Tristan da Cunha"}}},"tld":[".sh",".ac"],"cca2":"SH","ccn3":"654","cca3":"SHN","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"GBP":{"name":"Pound sterling","symbol":"\xa3"},"SHP":{"name":"Saint Helena pound","symbol":"\xa3"}},"idd":{"root":"+2","suffixes":["90","47"]},"capital":["Jamestown"],"altSpellings":["Saint Helena","St. Helena, Ascension and Tristan da Cunha"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0633\u0627\u0646\u062A \u0647\u064A\u0644\u064A\u0646\u0627 \u0648\u0623\u0633\u064A\u0646\u0634\u064A\u0646 \u0648\u062A\u0631\u064A\u0633\u062A\u0627\u0646 \u062F\u0627 \u0643\u0648\u0646\u0627","common":"\u0633\u0627\u0646\u062A \u0647\u064A\u0644\u064A\u0646\u0627 \u0648\u0623\u0633\u064A\u0646\u0634\u064A\u0646 \u0648\u062A\u0631\u064A\u0633\u062A\u0627\u0646 \u062F\u0627 \u0643\u0648\u0646\u0627"},"ces":{"official":"Svat\xe1 Helena, Ascension a Tristan da Cunha","common":"Svat\xe1 Helena, Ascension a Tristan da Cunha"},"deu":{"official":"Sankt Helena, Ascension und Tristan da Cunha","common":"St. Helena, Ascension und Tristan da Cunha"},"est":{"official":"Saint Helena, Ascension ja Tristan da Cunha","common":"Saint Helena, Ascension ja Tristan da Cunha"},"fin":{"official":"Saint Helena, Ascension ja Tristan da Cunha","common":"Saint Helena, Ascension ja Tristan da Cunha"},"fra":{"official":"Sainte-H\xe9l\xe8ne, Ascension et Tristan da Cunha","common":"Sainte-H\xe9l\xe8ne, Ascension et Tristan da Cunha"},"hrv":{"official":"Sveta Helena","common":"Sveta Helena"},"hun":{"official":"Szent Ilona","common":"Szent Ilona-sziget"},"ita":{"official":"Sant\'Elena, Ascensione e Tristan da Cunha","common":"Sant\'Elena, Ascensione e Tristan da Cunha"},"jpn":{"official":"\u30BB\u30F3\u30C8\u30D8\u30EC\u30CA\u30FB\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u30FB\u30C8\u30EA\u30B9\u30BF\u30F3\u30C0\u30AF\u30FC\u30CB\u30E3","common":"\u30BB\u30F3\u30C8\u30D8\u30EC\u30CA"},"kor":{"official":"\uC138\uC778\uD2B8\uD5EC\uB808\uB098","common":"\uC138\uC778\uD2B8\uD5EC\uB808\uB098"},"nld":{"official":"Sint-Helena, Ascension en Tristan da Cunha","common":"Sint-Helena, Ascension en Tristan da Cunha"},"per":{"official":"\u0633\u0646\u062A \u0647\u0644\u0646","common":"\u0633\u0646\u062A \u0647\u0644\u0646"},"pol":{"official":"Wyspa \u015Awi\u0119tej Heleny, Wyspa Wniebowst\u0105pienia i Tristan da Cunha","common":"Wyspa \u015Awi\u0119tej Heleny, Wyspa Wniebowst\u0105pienia i Tristan da Cunha"},"por":{"official":"Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha","common":"Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha"},"rus":{"official":"\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u0432\u044F\u0442\u043E\u0439 \u0415\u043B\u0435\u043D\u044B, \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0438 \u0422\u0440\u0438\u0441\u0442\u0430\u043D-\u0434\u0430-\u041A\u0443\u043D\u044C\u044F","common":"\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u0432\u044F\u0442\u043E\u0439 \u0415\u043B\u0435\u043D\u044B, \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0438 \u0422\u0440\u0438\u0441\u0442\u0430\u043D-\u0434\u0430-\u041A\u0443\u043D\u044C\u044F"},"slk":{"official":"Sv\xe4t\xe1 Helena (z\xe1morsk\xe9 \xfazemie)","common":"Sv\xe4t\xe1 Helena (z\xe1morsk\xe9 \xfazemie)"},"spa":{"official":"Santa Elena, Ascensi\xf3n y Trist\xe1n de Acu\xf1a","common":"Santa Elena, Ascensi\xf3n y Trist\xe1n de Acu\xf1a"},"srp":{"official":"Sveta Jelena","common":"Sveta Jelena"},"swe":{"official":"Sankta Helena","common":"Sankta Helena"},"tur":{"official":"Saint Helena","common":"Saint Helena"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u06C1\u0644\u06CC\u0646\u0627\u060C \u0627\u0633\u06CC\u0646\u0634\u0646 \u0648 \u062A\u0631\u0633\u0679\u0627\u0646 \u062F\u0627 \u06A9\u0648\u0646\u06CC\u0627","common":"\u0633\u06CC\u0646\u0679 \u06C1\u0644\u06CC\u0646\u0627\u060C \u0627\u0633\u06CC\u0646\u0634\u0646 \u0648 \u062A\u0631\u0633\u0679\u0627\u0646 \u062F\u0627 \u06A9\u0648\u0646\u06CC\u0627"},"zho":{"official":"\u5723\u8D6B\u52D2\u62FF\u3001\u963F\u68EE\u677E\u548C\u7279\u91CC\u65AF\u5766-\u8FBE\u5E93\u5C3C\u4E9A","common":"\u5723\u8D6B\u52D2\u62FF\u3001\u963F\u68EE\u677E\u548C\u7279\u91CC\u65AF\u5766-\u8FBE\u5E93\u5C3C\u4E9A"}},"latlng":[-15.95,-5.72],"landlocked":false,"borders":[],"area":394,"flag":"\uD83C\uDDF8\uD83C\uDDED","demonyms":{"eng":{"f":"Saint Helenian","m":"Saint Helenian"},"fra":{"f":"Sainte-H\xe9l\xe9noise","m":"Sainte-H\xe9l\xe8nois"}}},{"name":{"common":"Belarus","official":"Republic of Belarus","native":{"bel":{"official":"\u0420\u044D\u0441\u043F\u0443\u0431\u043B\u0456\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C","common":"\u0411\u0435\u043B\u0430\u0440\u0443\u0301\u0441\u044C"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C","common":"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"}}},"tld":[".by"],"cca2":"BY","ccn3":"112","cca3":"BLR","cioc":"BLR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"BYN":{"name":"Belarusian ruble","symbol":"Br"}},"idd":{"root":"+3","suffixes":["75"]},"capital":["Minsk"],"altSpellings":["BY","Bielaru\u015B","Republic of Belarus","\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u0438\u044F","\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u0438\u044F"],"region":"Europe","subregion":"Eastern Europe","languages":{"bel":"Belarusian","rus":"Russian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u064A\u0644\u0627\u0631\u0648\u0633\u064A\u0627","common":"\u0628\u064A\u0644\u0627\u0631\u0648\u0633\u064A\u0627"},"ces":{"official":"B\u011Blorusk\xe1 republika","common":"B\u011Blorusko"},"deu":{"official":"Republik Belarus","common":"Belarus"},"est":{"official":"Valgevene Vabariik","common":"Valgevene"},"fin":{"official":"Valko-Ven\xe4j\xe4n tasavalta","common":"Valko-Ven\xe4j\xe4"},"fra":{"official":"R\xe9publique de Bi\xe9lorussie","common":"Bi\xe9lorussie"},"hrv":{"official":"Republika Bjelorusija","common":"Bjelorusija"},"hun":{"official":"Feh\xe9rorosz K\xf6zt\xe1rsas\xe1g","common":"Feh\xe9roroszorsz\xe1g"},"ita":{"official":"Repubblica di Belarus","common":"Bielorussia"},"jpn":{"official":"\u30D9\u30E9\u30EB\u30FC\u30B7\u5171\u548C\u56FD","common":"\u30D9\u30E9\u30EB\u30FC\u30B7"},"kor":{"official":"\uBCA8\uB77C\uB8E8\uC2A4 \uACF5\uD654\uAD6D","common":"\uBCA8\uB77C\uB8E8\uC2A4"},"nld":{"official":"Republiek Belarus","common":"Wit-Rusland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0644\u0627\u0631\u0648\u0633","common":"\u0628\u0644\u0627\u0631\u0648\u0633"},"pol":{"official":"Republika Bia\u0142orusi","common":"Bia\u0142oru\u015B"},"por":{"official":"Rep\xfablica da Bielorr\xfassia","common":"Bielor\xfassia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C","common":"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"},"slk":{"official":"Bielorusk\xe1 republika","common":"Bielorusko"},"spa":{"official":"Rep\xfablica de Belar\xfas","common":"Bielorrusia"},"srp":{"official":"Republika Belorusija","common":"Belorusija"},"swe":{"official":"Republiken Vitryssland","common":"Belarus"},"tur":{"official":"Belarus Cumhuriyeti","common":"Belarus"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u06CC\u0644\u0627\u0631\u0648\u0633","common":"\u0628\u06CC\u0644\u0627\u0631\u0648\u0633"},"zho":{"official":"\u767D\u4FC4\u7F57\u65AF\u5171\u548C\u56FD","common":"\u767D\u4FC4\u7F57\u65AF"}},"latlng":[53,28],"landlocked":true,"borders":["LVA","LTU","POL","RUS","UKR"],"area":207600,"flag":"\uD83C\uDDE7\uD83C\uDDFE","demonyms":{"eng":{"f":"Belarusian","m":"Belarusian"},"fra":{"f":"Bi\xe9lorusse","m":"Bi\xe9lorusse"}}},{"name":{"common":"Belize","official":"Belize","native":{"bjz":{"official":"Belize","common":"Belize"},"eng":{"official":"Belize","common":"Belize"},"spa":{"official":"Belice","common":"Belice"}}},"tld":[".bz"],"cca2":"BZ","ccn3":"084","cca3":"BLZ","cioc":"BIZ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"BZD":{"name":"Belize dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["01"]},"capital":["Belmopan"],"altSpellings":["BZ"],"region":"Americas","subregion":"Central America","languages":{"bjz":"Belizean Creole","eng":"English","spa":"Spanish"},"translations":{"ara":{"official":"\u0628\u0644\u064A\u0632","common":"\u0628\u0644\u064A\u0632"},"ces":{"official":"Belize","common":"Belize"},"deu":{"official":"Belize","common":"Belize"},"est":{"official":"Belize","common":"Belize"},"fin":{"official":"Belize","common":"Belize"},"fra":{"official":"Belize","common":"Belize"},"hrv":{"official":"Belize","common":"Belize"},"hun":{"official":"Belize","common":"Belize"},"ita":{"official":"Belize","common":"Belize"},"jpn":{"official":"\u30D9\u30EA\u30FC\u30BA","common":"\u30D9\u30EA\u30FC\u30BA"},"kor":{"official":"\uBCA8\uB9AC\uC988","common":"\uBCA8\uB9AC\uC988"},"nld":{"official":"Belize","common":"Belize"},"per":{"official":"\u0628\u0644\u06CC\u0632","common":"\u0628\u0644\u06CC\u0632"},"pol":{"official":"Belize","common":"Belize"},"por":{"official":"Belize","common":"Belize"},"rus":{"official":"\u0411\u0435\u043B\u0438\u0437","common":"\u0411\u0435\u043B\u0438\u0437"},"slk":{"official":"Belize","common":"Belize"},"spa":{"official":"Belice","common":"Belice"},"srp":{"official":"Belize","common":"Belize"},"swe":{"official":"Belize","common":"Belize"},"tur":{"official":"Belize","common":"Belize"},"urd":{"official":"\u0628\u06CC\u0644\u06CC\u0632","common":"\u0628\u06CC\u0644\u06CC\u0632"},"zho":{"official":"\u4F2F\u5229\u5179","common":"\u4F2F\u5229\u5179"}},"latlng":[17.25,-88.75],"landlocked":false,"borders":["GTM","MEX"],"area":22966,"flag":"\uD83C\uDDE7\uD83C\uDDFF","demonyms":{"eng":{"f":"Belizean","m":"Belizean"},"fra":{"f":"B\xe9lizienne","m":"B\xe9lizien"}}},{"name":{"common":"Bermuda","official":"Bermuda","native":{"eng":{"official":"Bermuda","common":"Bermuda"}}},"tld":[".bm"],"cca2":"BM","ccn3":"060","cca3":"BMU","cioc":"BER","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"BMD":{"name":"Bermudian dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["441"]},"capital":["Hamilton"],"altSpellings":["BM","The Islands of Bermuda","The Bermudas","Somers Isles"],"region":"Americas","subregion":"North America","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0628\u0631\u0645\u0648\u062F\u0627","common":"\u0628\u0631\u0645\u0648\u062F\u0627"},"ces":{"official":"Bermudsk\xe9 ostrovy","common":"Bermudy"},"deu":{"official":"Bermuda","common":"Bermuda"},"est":{"official":"Bermuda","common":"Bermuda"},"fin":{"official":"Bermuda","common":"Bermuda"},"fra":{"official":"Bermudes","common":"Bermudes"},"hrv":{"official":"Bermuda","common":"Bermudi"},"hun":{"official":"Bermuda","common":"Bermuda"},"ita":{"official":"Bermuda","common":"Bermuda"},"jpn":{"official":"\u30D0\u30DF\u30E5\u30FC\u30C0\u8AF8\u5CF6","common":"\u30D0\u30DF\u30E5\u30FC\u30C0"},"kor":{"official":"\uBC84\uBBA4\uB2E4","common":"\uBC84\uBBA4\uB2E4"},"nld":{"official":"Bermuda","common":"Bermuda"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0628\u0631\u0645\u0648\u062F\u0627","common":"\u0628\u0631\u0645\u0648\u062F\u0627"},"pol":{"official":"Bermudy","common":"Bermudy"},"por":{"official":"Bermudas","common":"Bermudas"},"rus":{"official":"\u0411\u0435\u0440\u043C\u0443\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0411\u0435\u0440\u043C\u0443\u0434\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Bermudy","common":"Bermudy"},"spa":{"official":"Bermuda","common":"Bermudas"},"srp":{"official":"Bermuda","common":"Bermudi"},"swe":{"official":"Bermuda","common":"Bermuda"},"tur":{"official":"Bermuda","common":"Bermuda"},"urd":{"official":"\u0628\u0631\u0645\u0648\u062F\u0627","common":"\u0628\u0631\u0645\u0648\u062F\u0627"},"zho":{"official":"\u767E\u6155\u5927","common":"\u767E\u6155\u5927"}},"latlng":[32.33333333,-64.75],"landlocked":false,"borders":[],"area":54,"flag":"\uD83C\uDDE7\uD83C\uDDF2","demonyms":{"eng":{"f":"Bermudian","m":"Bermudian"},"fra":{"f":"Bermudienne","m":"Bermudien"}}},{"name":{"common":"Bolivia","official":"Plurinational State of Bolivia","native":{"aym":{"official":"Wuliwya Suyu","common":"Wuliwya"},"grn":{"official":"Tet\xe3 Vol\xedvia","common":"Vol\xedvia"},"que":{"official":"Buliwya Mamallaqta","common":"Buliwya"},"spa":{"official":"Estado Plurinacional de Bolivia","common":"Bolivia"}}},"tld":[".bo"],"cca2":"BO","ccn3":"068","cca3":"BOL","cioc":"BOL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"BOB":{"name":"Bolivian boliviano","symbol":"Bs."}},"idd":{"root":"+5","suffixes":["91"]},"capital":["Sucre"],"altSpellings":["BO","Buliwya","Wuliwya","Bolivia, Plurinational State of","Plurinational State of Bolivia","Estado Plurinacional de Bolivia","Buliwya Mamallaqta","Wuliwya Suyu","Tet\xe3 Vol\xedvia"],"region":"Americas","subregion":"South America","languages":{"aym":"Aymara","grn":"Guaran\xed","que":"Quechua","spa":"Spanish"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0628\u0648\u0644\u064A\u0641\u064A\u0627 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0642\u0648\u0645\u064A\u0627\u062A","common":"\u0628\u0648\u0644\u064A\u0641\u064A\u0627"},"ces":{"official":"Mnohon\xe1rodnostn\xed st\xe1t Bol\xedvie","common":"Bol\xedvie"},"deu":{"official":"Plurinationaler Staat Bolivien","common":"Bolivien"},"est":{"official":"Boliivia Paljurahvuseline Riik","common":"Boliivia"},"fin":{"official":"Bolivian monikansainen valtio","common":"Bolivia"},"fra":{"official":"\xc9tat plurinational de Bolivie","common":"Bolivie"},"hrv":{"official":"Plurinational State of Bolivia","common":"Bolivija"},"hun":{"official":"Bol\xedviai T\xf6bbnemzetis\xe9g\u0171 \xc1llam","common":"Bol\xedvia"},"ita":{"official":"Stato Plurinazionale della Bolivia","common":"Bolivia"},"jpn":{"official":"\u30DC\u30EA\u30D3\u30A2\u591A\u6C11\u65CF\u56FD","common":"\u30DC\u30EA\u30D3\u30A2"},"kor":{"official":"\uBCFC\uB9AC\uBE44\uC544 \uB2E4\uBBFC\uC871\uAD6D","common":"\uBCFC\uB9AC\uBE44\uC544"},"nld":{"official":"Plurinationale Staat van Bolivia","common":"Bolivia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0648\u0644\u06CC\u0648\u06CC","common":"\u0628\u0648\u0644\u06CC\u0648\u06CC"},"pol":{"official":"Wielonarodowe Pa\u0144stwo Boliwia","common":"Boliwia"},"por":{"official":"Estado Plurinacional da Bol\xedvia","common":"Bol\xedvia"},"rus":{"official":"\u041C\u043D\u043E\u0433\u043E\u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u0411\u043E\u043B\u0438\u0432\u0438\u044F","common":"\u0411\u043E\u043B\u0438\u0432\u0438\u044F"},"slk":{"official":"Bol\xedvijsk\xe1 republika","common":"Bol\xedvia"},"spa":{"official":"Estado Plurinacional de Bolivia","common":"Bolivia"},"srp":{"official":"Vi\u0161enacionalna Dr\u017Eava Bolivija","common":"Bolivija"},"swe":{"official":"M\xe5ngnationella staten Bolivia","common":"Bolivia"},"tur":{"official":"Bolivya \xe7okuluslu Devleti","common":"Bolivya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0648\u0644\u06CC\u0648\u06CC\u0627","common":"\u0628\u0648\u0644\u06CC\u0648\u06CC\u0627"},"zho":{"official":"\u591A\u6C11\u65CF\u73BB\u5229\u7EF4\u4E9A\u56FD","common":"\u73BB\u5229\u7EF4\u4E9A"}},"latlng":[-17,-65],"landlocked":true,"borders":["ARG","BRA","CHL","PRY","PER"],"area":1098581,"flag":"\uD83C\uDDE7\uD83C\uDDF4","demonyms":{"eng":{"f":"Bolivian","m":"Bolivian"},"fra":{"f":"Bolivienne","m":"Bolivien"}}},{"name":{"common":"Caribbean Netherlands","official":"Bonaire, Sint Eustatius and Saba","native":{"nld":{"official":"Bonaire, Sint Eustatius en Saba","common":"Caribisch Nederland"},"pap":{"official":"Boneiru, Sint Eustatius y Saba","common":"Boneiru, Sint Eustatius y Saba"}}},"tld":[".bq",".nl"],"cca2":"BQ","ccn3":"535","cca3":"BES","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["99"]},"capital":["Kralendijk","Oranjestad","The Bottom"],"altSpellings":["BES islands","Bonaire Sint Eustatius and Saba"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English","nld":"Dutch","pap":"Papiamento"},"translations":{"ara":{"official":"\u0628\u0648\u0646\u064A\u0631 \u0648\u0633\u064A\u0646\u062A \u0623\u0648\u0633\u062A\u0627\u062A\u064A\u0648\u0633 \u0648\u0633\u0627\u0628\u0627","common":"\u0627\u0644\u062C\u0632\u0631 \u0627\u0644\u0643\u0627\u0631\u064A\u0628\u064A\u0629 \u0627\u0644\u0647\u0648\u0644\u0646\u062F\u064A\u0629"},"ces":{"official":"Karibsk\xe9 Nizozemsko","common":"Karibsk\xe9 Nizozemsko"},"deu":{"official":"Bonaire, Sint Eustatius und Saba","common":"Karibische Niederlande"},"est":{"official":"Bonaire, Sint Eustatius ja Saba","common":"Bonaire, Sint Eustatius ja Saba"},"fin":{"official":"Bonaire, Sint Eustatius ja Saba","common":"Bonaire, Sint Eustatius ja Saba"},"fra":{"official":"Bonaire, Saint-Eustache et Saba","common":"Pays-Bas carib\xe9ens"},"hrv":{"official":"Bonaire, Sint Eustatius i Saba","common":"Bonaire, Sint Eustatius i Saba"},"hun":{"official":"Bonaire","common":"Bonaire"},"ita":{"official":"Bonaire, Sint Eustatius e Saba","common":"Paesi Bassi caraibici"},"jpn":{"official":"\u30AA\u30E9\u30F3\u30C0\u30AB\u30EA\u30D6\u9818\u57DF","common":"BES\u8AF8\u5CF6"},"kor":{"official":"\uBCF4\uB124\uB974, \uC2E0\uD2B8\uC678\uC2A4\uD0C0\uD2F0\uC704\uC2A4, \uC0AC\uBC14","common":"\uCE74\uB9AC\uBE0C \uB124\uB35C\uB780\uB4DC"},"nld":{"official":"Bonaire, Sint Eustatius en Saba","common":"Caribisch Nederland"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0627\u0631\u0627\u0626\u06CC\u0628 \u0647\u0644\u0646\u062F","common":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0627\u0631\u0627\u0626\u06CC\u0628 \u0647\u0644\u0646\u062F"},"pol":{"official":"Bonaire, Sint Eustatius i Saba","common":"Antyle Holenderskie"},"por":{"official":"Bonaire, Saba e Santo Eust\xe1quio","common":"Pa\xedses Baixos Caribenhos"},"rus":{"official":"\u0411\u043E\u043D\u044D\u0439\u0440, \u0421\u0438\u043D\u0442-\u042D\u0441\u0442\u0430\u0442\u0438\u0443\u0441 \u0438 \u0421\u0430\u0431\u0430","common":"\u041A\u0430\u0440\u0438\u0431\u0441\u043A\u0438\u0435 \u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B"},"slk":{"official":"Bonaire, Sint Eustatius a Saba","common":"Bonaire, Sint Eustatius a Saba"},"spa":{"official":"Bonaire, San Eustaquio y Saba","common":"Caribe Neerland\xe9s"},"srp":{"official":"Karipska Holandija","common":"Karipska Holandija"},"swe":{"official":"Bonaire, Sint Eustatius and Saba","common":"Karibiska Nederl\xe4nderna"},"tur":{"official":"Karayip Hollandas\u0131","common":"Karayip Hollandas\u0131"},"urd":{"official":"\u0628\u0648\u0646\u0627\u06CC\u0631\u060C \u0633\u06CC\u0646\u0679 \u0627\u06CC\u0648\u0633\u0679\u0627\u0626\u06CC\u0633 \u0627\u0648\u0631 \u0633\u0627\u0628\u0627","common":"\u06A9\u06CC\u0631\u06CC\u0628\u06CC\u0646 \u0646\u06CC\u062F\u0631\u0644\u06CC\u0646\u0688\u0632"},"zho":{"official":"\u8377\u862D\u52A0\u52D2\u6BD4\u5340","common":"\u8377\u862D\u52A0\u52D2\u6BD4\u5340"}},"latlng":[12.18,-68.25],"landlocked":false,"borders":[],"area":328,"flag":"","demonyms":{"eng":{"f":"Dutch","m":"Dutch"},"fra":{"f":"N\xe9erlandaise","m":"N\xe9erlandais"}}},{"name":{"common":"Brazil","official":"Federative Republic of Brazil","native":{"por":{"official":"Rep\xfablica Federativa do Brasil","common":"Brasil"}}},"tld":[".br"],"cca2":"BR","ccn3":"076","cca3":"BRA","cioc":"BRA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"BRL":{"name":"Brazilian real","symbol":"R$"}},"idd":{"root":"+5","suffixes":["5"]},"capital":["Bras\xedlia"],"altSpellings":["BR","Brasil","Federative Republic of Brazil","Rep\xfablica Federativa do Brasil"],"region":"Americas","subregion":"South America","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0628\u0631\u0627\u0632\u064A\u0644 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u0627\u0644\u0628\u0631\u0627\u0632\u064A\u0644"},"ces":{"official":"Brazilsk\xe1 federativn\xed republika","common":"Braz\xedlie"},"deu":{"official":"F\xf6derative Republik Brasilien","common":"Brasilien"},"est":{"official":"Brasiilia Liitvabariik","common":"Brasiilia"},"fin":{"official":"Brasilian liittotasavalta","common":"Brasilia"},"fra":{"official":"R\xe9publique f\xe9d\xe9rative du Br\xe9sil","common":"Br\xe9sil"},"hrv":{"official":"Savezne Republike Brazil","common":"Brazil"},"hun":{"official":"Brazil Sz\xf6vets\xe9gi K\xf6zt\xe1rsas\xe1g","common":"Braz\xedlia"},"ita":{"official":"Repubblica federativa del Brasile","common":"Brasile"},"jpn":{"official":"\u30D6\u30E9\u30B8\u30EB\u9023\u90A6\u5171\u548C\u56FD","common":"\u30D6\u30E9\u30B8\u30EB"},"kor":{"official":"\uBE0C\uB77C\uC9C8 \uC5F0\uBC29 \uACF5\uD654\uAD6D","common":"\uBE0C\uB77C\uC9C8"},"nld":{"official":"Federale Republiek Brazili\xeb","common":"Brazili\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u062A\u06CC\u0648 \u0628\u0631\u0632\u06CC\u0644","common":"\u0628\u0631\u0632\u06CC\u0644"},"pol":{"official":"Federacyjna Republika Brazylii","common":"Brazylia"},"por":{"official":"Rep\xfablica Federativa do Brasil","common":"Brasil"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F","common":"\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F"},"slk":{"official":"Braz\xedlska federat\xedvna republika","common":"Braz\xedlia"},"spa":{"official":"Rep\xfablica Federativa del Brasil","common":"Brasil"},"srp":{"official":"Federativna Republika Brazil","common":"Brazil"},"swe":{"official":"F\xf6rbundsrepubliken Brasilien","common":"Brasilien"},"tur":{"official":"Brezilya Federal Cumhuriyeti","common":"Brezilya"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0631\u0627\u0632\u06CC\u0644","common":"\u0628\u0631\u0627\u0632\u06CC\u0644"},"zho":{"official":"\u5DF4\u897F\u8054\u90A6\u5171\u548C\u56FD","common":"\u5DF4\u897F"}},"latlng":[-10,-55],"landlocked":false,"borders":["ARG","BOL","COL","GUF","GUY","PRY","PER","SUR","URY","VEN"],"area":8515767,"flag":"\uD83C\uDDE7\uD83C\uDDF7","demonyms":{"eng":{"f":"Brazilian","m":"Brazilian"},"fra":{"f":"Br\xe9silienne","m":"Br\xe9silien"}}},{"name":{"common":"Barbados","official":"Barbados","native":{"eng":{"official":"Barbados","common":"Barbados"}}},"tld":[".bb"],"cca2":"BB","ccn3":"052","cca3":"BRB","cioc":"BAR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"BBD":{"name":"Barbadian dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["246"]},"capital":["Bridgetown"],"altSpellings":["BB"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0628\u0627\u0631\u0628\u0627\u062F\u0648\u0633","common":"\u0628\u0627\u0631\u0628\u0627\u062F\u0648\u0633"},"ces":{"official":"Barbados","common":"Barbados"},"deu":{"official":"Barbados","common":"Barbados"},"est":{"official":"Barbados","common":"Barbados"},"fin":{"official":"Barbados","common":"Barbados"},"fra":{"official":"Barbade","common":"Barbade"},"hrv":{"official":"Barbados","common":"Barbados"},"hun":{"official":"Barbados","common":"Barbados"},"ita":{"official":"Barbados","common":"Barbados"},"jpn":{"official":"\u30D0\u30EB\u30D0\u30C9\u30B9","common":"\u30D0\u30EB\u30D0\u30C9\u30B9"},"kor":{"official":"\uBC14\uBCA0\uC774\uB3C4\uC2A4","common":"\uBC14\uBCA0\uC774\uB3C4\uC2A4"},"nld":{"official":"Barbados","common":"Barbados"},"per":{"official":"\u0628\u0627\u0631\u0628\u0627\u062F\u0648\u0633","common":"\u0628\u0627\u0631\u0628\u0627\u062F\u0648\u0633"},"pol":{"official":"Barbados","common":"Barbados"},"por":{"official":"Barbados","common":"Barbados"},"rus":{"official":"\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441","common":"\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441"},"slk":{"official":"Barbados","common":"Barbados"},"spa":{"official":"Barbados","common":"Barbados"},"srp":{"official":"Barbados","common":"Barbados"},"swe":{"official":"Barbados","common":"Barbados"},"tur":{"official":"Barbados","common":"Barbados"},"urd":{"official":"\u0628\u0627\u0631\u0628\u0627\u0688\u0648\u0633","common":"\u0628\u0627\u0631\u0628\u0627\u0688\u0648\u0633"},"zho":{"official":"\u5DF4\u5DF4\u591A\u65AF","common":"\u5DF4\u5DF4\u591A\u65AF"}},"latlng":[13.16666666,-59.53333333],"landlocked":false,"borders":[],"area":430,"flag":"\uD83C\uDDE7\uD83C\uDDE7","demonyms":{"eng":{"f":"Barbadian","m":"Barbadian"},"fra":{"f":"Barbadienne","m":"Barbadien"}}},{"name":{"common":"Brunei","official":"Nation of Brunei, Abode of Peace","native":{"msa":{"official":"Nation of Brunei, Abode Damai","common":"Negara Brunei Darussalam"}}},"tld":[".bn"],"cca2":"BN","ccn3":"096","cca3":"BRN","cioc":"BRU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"BND":{"name":"Brunei dollar","symbol":"$"},"SGD":{"name":"Singapore dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["73"]},"capital":["Bandar Seri Begawan"],"altSpellings":["BN","Brunei Darussalam","Nation of Brunei","the Abode of Peace"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"msa":"Malay"},"translations":{"ara":{"official":"\u0628\u0631\u0648\u0646\u0627\u064A \u062F\u0627\u0631 \u0627\u0644\u0633\u0644\u0627\u0645","common":"\u0628\u0631\u0648\u0646\u0627\u064A"},"ces":{"official":"Sultan\xe1t Brunej","common":"Brunej"},"deu":{"official":"Sultanat Brunei Darussalam","common":"Brunei"},"est":{"official":"Brunei Darussalami Riik","common":"Brunei"},"fin":{"official":"Brunei Darussalamin valtio","common":"Brunei"},"fra":{"official":"\xc9tat de Brunei Darussalam","common":"Brunei"},"hrv":{"official":"Nacija od Bruneja, Ku\u0107u Mira","common":"Brunej"},"hun":{"official":"Brunei Szultan\xe1tus","common":"Brunei"},"ita":{"official":"Nazione di Brunei, Dimora della Pace","common":"Brunei"},"jpn":{"official":"\u30D6\u30EB\u30CD\u30A4\u30FB\u30C0\u30EB\u30B5\u30E9\u30FC\u30E0\u56FD","common":"\u30D6\u30EB\u30CD\u30A4"},"kor":{"official":"\uBE0C\uB8E8\uB098\uC774 \uB2E4\uB8E8\uC0B4\uB78C\uAD6D","common":"\uBE0C\uB8E8\uB098\uC774"},"nld":{"official":"Natie van Brunei, de verblijfplaats van de Vrede","common":"Brunei"},"per":{"official":"\u0628\u0631\u0648\u0646\u0626\u06CC \u0633\u0631\u0627\u06CC \u0635\u0644\u062D","common":"\u0628\u0631\u0648\u0646\u0626\u06CC"},"pol":{"official":"Pa\u0144stwo Brunei Darussalam","common":"Brunei"},"por":{"official":"Na\xe7\xe3o do Brunei, Morada da Paz","common":"Brunei"},"rus":{"official":"\u041D\u0430\u0446\u0438\u044F \u0411\u0440\u0443\u043D\u0435\u0439, \u043E\u0431\u0438\u0442\u0435\u043B\u044C \u043C\u0438\u0440\u0430","common":"\u0411\u0440\u0443\u043D\u0435\u0439"},"slk":{"official":"Brunejsk\xfd sultan\xe2t","common":"Brunej"},"spa":{"official":"Naci\xf3n de Brunei, Morada de la Paz","common":"Brunei"},"srp":{"official":"Brunej Darusalam","common":"Brunej"},"swe":{"official":"Brunei Darussalam","common":"Brunei"},"tur":{"official":"Brunei Bar\u0131\u015F \xfclkesi Devleti (Dar\xfc\'s-Selam)","common":"Brunei"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0628\u0631\u0648\u0646\u0627\u0626\u06CC \u062F\u0627\u0631\u0627\u0644\u0633\u0644\u0627\u0645","common":"\u0628\u0631\u0648\u0646\u0627\u0626\u06CC"},"zho":{"official":"\u6587\u83B1\u548C\u5E73\u4E4B\u56FD","common":"\u6587\u83B1"}},"latlng":[4.5,114.66666666],"landlocked":false,"borders":["MYS"],"area":5765,"flag":"\uD83C\uDDE7\uD83C\uDDF3","demonyms":{"eng":{"f":"Bruneian","m":"Bruneian"},"fra":{"f":"Brun\xe9ienne","m":"Brun\xe9ien"}}},{"name":{"common":"Bhutan","official":"Kingdom of Bhutan","native":{"dzo":{"official":"\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F62\u0F92\u0FB1\u0F63\u0F0B\u0F41\u0F56\u0F0B","common":"\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B"}}},"tld":[".bt"],"cca2":"BT","ccn3":"064","cca3":"BTN","cioc":"BHU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"BTN":{"name":"Bhutanese ngultrum","symbol":"Nu."},"INR":{"name":"Indian rupee","symbol":"\u20B9"}},"idd":{"root":"+9","suffixes":["75"]},"capital":["Thimphu"],"altSpellings":["BT","Kingdom of Bhutan"],"region":"Asia","subregion":"Southern Asia","languages":{"dzo":"Dzongkha"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0628\u0648\u062A\u0627\u0646","common":"\u0628\u0648\u062A\u0627\u0646"},"ces":{"official":"Bh\xfat\xe1nsk\xe9 kr\xe1lovstv\xed","common":"Bh\xfat\xe1n"},"deu":{"official":"K\xf6nigreich Bhutan","common":"Bhutan"},"est":{"official":"Bhutani Kuningriik","common":"Bhutan"},"fin":{"official":"Bhutanin kuningaskunta","common":"Bhutan"},"fra":{"official":"Royaume du Bhoutan","common":"Bhoutan"},"hrv":{"official":"Kraljevina Butan","common":"Butan"},"hun":{"official":"Bhut\xe1ni Kir\xe1lys\xe1g","common":"Bhut\xe1n"},"ita":{"official":"Regno del Bhutan","common":"Bhutan"},"jpn":{"official":"\u30D6\u30FC\u30BF\u30F3\u738B\u56FD","common":"\u30D6\u30FC\u30BF\u30F3"},"kor":{"official":"\uBD80\uD0C4 \uC655\uAD6D","common":"\uBD80\uD0C4"},"nld":{"official":"Koninkrijk Bhutan","common":"Bhutan"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0628\u0648\u062A\u0627\u0646","common":"\u0628\u0648\u062A\u0627\u0646"},"pol":{"official":"Bhutan","common":"Bhutan"},"por":{"official":"Reino do But\xe3o","common":"But\xe3o"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0411\u0443\u0442\u0430\u043D","common":"\u0411\u0443\u0442\u0430\u043D"},"slk":{"official":"Bhut\xe1nske kr\xe2\u013Eovstvo","common":"Bhut\xe1n"},"spa":{"official":"Reino de But\xe1n","common":"But\xe1n"},"srp":{"official":"Kraljevina Butan","common":"Butan"},"swe":{"official":"Konungariket Bhutan","common":"Bhutan"},"tur":{"official":"Butan Krall\u0131\u011F\u0131","common":"Butan"},"urd":{"official":"\u0633\u0644\u0637\u0646\u062A \u0628\u06BE\u0648\u0679\u0627\u0646","common":"\u0628\u06BE\u0648\u0679\u0627\u0646"},"zho":{"official":"\u4E0D\u4E39\u738B\u56FD","common":"\u4E0D\u4E39"}},"latlng":[27.5,90.5],"landlocked":true,"borders":["CHN","IND"],"area":38394,"flag":"\uD83C\uDDE7\uD83C\uDDF9","demonyms":{"eng":{"f":"Bhutanese","m":"Bhutanese"},"fra":{"f":"Bhoutanaise","m":"Bhoutanais"}}},{"name":{"common":"Bouvet Island","official":"Bouvet Island","native":{"nor":{"official":"Bouvet\xf8ya","common":"Bouvet\xf8ya"}}},"tld":[".bv"],"cca2":"BV","ccn3":"074","cca3":"BVT","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{},"idd":{"root":"+4","suffixes":["7"]},"capital":[],"altSpellings":["BV","Bouvet\xf8ya","Bouvet-\xf8ya"],"region":"Antarctic","subregion":"","languages":{"nor":"Norwegian"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0628\u0648\u0641\u064A\u0647","common":"\u062C\u0632\u0631 \u0628\u0648\u0641\u064A\u0647"},"ces":{"official":"Bouvet\u016Fv ostrov","common":"Bouvet\u016Fv ostrov"},"deu":{"official":"Bouvetinsel","common":"Bouvetinsel"},"est":{"official":"Bouvet\u2019 saar","common":"Bouvet\u2019 saar"},"fin":{"official":"Bouvet\'nsaari","common":"Bouvet\'nsaari"},"fra":{"official":"\xcele Bouvet","common":"\xcele Bouvet"},"hrv":{"official":"Bouvet Island","common":"Otok Bouvet"},"hun":{"official":"Bouvet-sziget","common":"Bouvet-sziget"},"ita":{"official":"Isola Bouvet","common":"Isola Bouvet"},"jpn":{"official":"\u30D6\u30FC\u30D9\u5CF6","common":"\u30D6\u30FC\u30D9\u5CF6"},"kor":{"official":"\uBD80\uBCA0 \uC12C","common":"\uBD80\uBCA0 \uC12C"},"nld":{"official":"Bouvet Island","common":"Bouveteiland"},"per":{"official":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u0628\u0648\u0648\u0647","common":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u0628\u0648\u0648\u0647"},"pol":{"official":"Wyspa Bouveta","common":"Wyspa Bouveta"},"por":{"official":"Ilha Bouvet","common":"Ilha Bouvet"},"rus":{"official":"\u041E\u0441\u0442\u0440\u043E\u0432 \u0411\u0443\u0432\u0435","common":"\u041E\u0441\u0442\u0440\u043E\u0432 \u0411\u0443\u0432\u0435"},"slk":{"official":"Bouvetov ostrov","common":"Bouvetov ostrov"},"spa":{"official":"Isla Bouvet","common":"Isla Bouvet"},"srp":{"official":"Ostrvo Buve","common":"Buve"},"swe":{"official":"Bouvet\xf6n","common":"Bouvet\xf6n"},"tur":{"official":"Bouvet Adas\u0131","common":"Bouvet Adas\u0131"},"urd":{"official":"\u062C\u0632\u06CC\u0631\u06C1 \u0628\u0648\u0648\u06C1","common":"\u062C\u0632\u06CC\u0631\u06C1 \u0628\u0648\u0648\u06C1"},"zho":{"official":"\u5E03\u7EF4\u5C9B","common":"\u5E03\u7EF4\u5C9B"}},"latlng":[-54.43333333,3.4],"landlocked":false,"borders":[],"area":49,"flag":"\uD83C\uDDE7\uD83C\uDDFB","demonyms":{"eng":{"f":"","m":""},"fra":{"f":"","m":""}}},{"name":{"common":"Botswana","official":"Republic of Botswana","native":{"eng":{"official":"Republic of Botswana","common":"Botswana"},"tsn":{"official":"Lefatshe la Botswana","common":"Botswana"}}},"tld":[".bw"],"cca2":"BW","ccn3":"072","cca3":"BWA","cioc":"BOT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"BWP":{"name":"Botswana pula","symbol":"P"}},"idd":{"root":"+2","suffixes":["67"]},"capital":["Gaborone"],"altSpellings":["BW","Republic of Botswana","Lefatshe la Botswana"],"region":"Africa","subregion":"Southern Africa","languages":{"eng":"English","tsn":"Tswana"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0648\u062A\u0633\u0648\u0627\u0646\u0627","common":"\u0628\u0648\u062A\u0633\u0648\u0627\u0646\u0627"},"ces":{"official":"Botswansk\xe1 republika","common":"Botswana"},"deu":{"official":"Republik Botsuana","common":"Botswana"},"est":{"official":"Botswana Vabariik","common":"Botswana"},"fin":{"official":"Botswanan tasavalta","common":"Botswana"},"fra":{"official":"R\xe9publique du Botswana","common":"Botswana"},"hrv":{"official":"Republika Bocvana","common":"Bocvana"},"hun":{"official":"Botswanai K\xf6zt\xe1rsas\xe1g","common":"Botswana"},"ita":{"official":"Repubblica del Botswana","common":"Botswana"},"jpn":{"official":"\u30DC\u30C4\u30EF\u30CA\u5171\u548C\u56FD","common":"\u30DC\u30C4\u30EF\u30CA"},"kor":{"official":"\uBCF4\uCE20\uC640\uB098 \uACF5\uD654\uAD6D","common":"\uBCF4\uCE20\uC640\uB098"},"nld":{"official":"Republiek Botswana","common":"Botswana"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0648\u062A\u0633\u0648\u0627\u0646\u0627","common":"\u0628\u0648\u062A\u0633\u0648\u0627\u0646\u0627"},"pol":{"official":"Republika Botswany","common":"Botswana"},"por":{"official":"Rep\xfablica do Botswana","common":"Botswana"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u043E\u0442\u0441\u0432\u0430\u043D\u0430","common":"\u0411\u043E\u0442\u0441\u0432\u0430\u043D\u0430"},"slk":{"official":"Botswansk\xe1 republika","common":"Botswana"},"spa":{"official":"Rep\xfablica de Botswana","common":"Botswana"},"srp":{"official":"Republika Bocvana","common":"Bocvana"},"swe":{"official":"Republiken Botswana","common":"Botswana"},"tur":{"official":"Botsvana Cumhuriyeti","common":"Botsvana"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u0648\u0679\u0633\u0648\u0627\u0646\u0627","common":"\u0628\u0648\u0679\u0633\u0648\u0627\u0646\u0627"},"zho":{"official":"\u535A\u8328\u74E6\u7EB3\u5171\u548C\u56FD","common":"\u535A\u8328\u74E6\u7EB3"}},"latlng":[-22,24],"landlocked":true,"borders":["NAM","ZAF","ZMB","ZWE"],"area":582000,"flag":"\uD83C\uDDE7\uD83C\uDDFC","demonyms":{"eng":{"f":"Motswana","m":"Motswana"},"fra":{"f":"Botswanaise","m":"Botswanais"}}},{"name":{"common":"Central African Republic","official":"Central African Republic","native":{"fra":{"official":"R\xe9publique centrafricaine","common":"R\xe9publique centrafricaine"},"sag":{"official":"K\xf6d\xf6r\xf6s\xease t\xee B\xeaafr\xeeka","common":"B\xeaafr\xeeka"}}},"tld":[".cf"],"cca2":"CF","ccn3":"140","cca3":"CAF","cioc":"CAF","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["36"]},"capital":["Bangui"],"altSpellings":["CF","Central African Republic","R\xe9publique centrafricaine"],"region":"Africa","subregion":"Middle Africa","languages":{"fra":"French","sag":"Sango"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u0627\u0644\u0648\u0633\u0637\u0649","common":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u0627\u0644\u0648\u0633\u0637\u0649"},"ces":{"official":"St\u0159edoafrick\xe1 republika","common":"St\u0159edoafrick\xe1 republika"},"deu":{"official":"Zentralafrikanische Republik","common":"Zentralafrikanische Republik"},"est":{"official":"Kesk-Aafrika Vabariik","common":"Kesk-Aafrika Vabariik"},"fin":{"official":"Keski-Afrikan tasavalta","common":"Keski-Afrikan tasavalta"},"fra":{"official":"R\xe9publique centrafricaine","common":"R\xe9publique centrafricaine"},"hrv":{"official":"Centralna Afri\u010Dka Republika","common":"Srednjoafri\u010Dka Republika"},"hun":{"official":"K\xf6z\xe9p-afrikai K\xf6zt\xe1rsas\xe1g","common":"K\xf6z\xe9p-afrikai K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica Centrafricana","common":"Repubblica Centrafricana"},"jpn":{"official":"\u4E2D\u592E\u30A2\u30D5\u30EA\u30AB\u5171\u548C\u56FD","common":"\u4E2D\u592E\u30A2\u30D5\u30EA\u30AB"},"kor":{"official":"\uC911\uC559\uC544\uD504\uB9AC\uCE74 \uACF5\uD654\uAD6D","common":"\uC911\uC559\uC544\uD504\uB9AC\uCE74 \uACF5\uD654\uAD6D"},"nld":{"official":"Centraal-Afrikaanse Republiek","common":"Centraal-Afrikaanse Republiek"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0641\u0631\u06CC\u0642\u0627\u06CC \u0645\u0631\u06A9\u0632\u06CC","common":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0641\u0631\u06CC\u0642\u0627\u06CC \u0645\u0631\u06A9\u0632\u06CC"},"pol":{"official":"Republika \u015Arodkowoafryka\u0144ska","common":"Republika \u015Arodkowoafryka\u0144ska"},"por":{"official":"Rep\xfablica Centro-Africano","common":"Rep\xfablica Centro-Africana"},"rus":{"official":"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430"},"slk":{"official":"Stredoafrick\xe1 republika","common":"Stredoafrick\xe1 republika"},"spa":{"official":"Rep\xfablica Centroafricana","common":"Rep\xfablica Centroafricana"},"srp":{"official":"Centralnoafri\u010Dka Republika","common":"Centralnoafri\u010Dka Republika"},"swe":{"official":"Centralafrikanska republiken","common":"Centralafrikanska republiken"},"tur":{"official":"Orta Afrika Cumhuriyeti","common":"Orta Afrika Cumhuriyeti"},"urd":{"official":"\u0648\u0633\u0637\u06CC \u0627\u0641\u0631\u06CC\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1","common":"\u0648\u0633\u0637\u06CC \u0627\u0641\u0631\u06CC\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1"},"zho":{"official":"\u4E2D\u975E\u5171\u548C\u56FD","common":"\u4E2D\u975E\u5171\u548C\u56FD"}},"latlng":[7,21],"landlocked":true,"borders":["CMR","TCD","COD","COG","SSD","SDN"],"area":622984,"flag":"\uD83C\uDDE8\uD83C\uDDEB","demonyms":{"eng":{"f":"Central African","m":"Central African"},"fra":{"f":"Centrafricaine","m":"Centrafricain"}}},{"name":{"common":"Canada","official":"Canada","native":{"eng":{"official":"Canada","common":"Canada"},"fra":{"official":"Canada","common":"Canada"}}},"tld":[".ca"],"cca2":"CA","ccn3":"124","cca3":"CAN","cioc":"CAN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"CAD":{"name":"Canadian dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["204","226","236","249","250","263","289","306","343","354","365","367","368","382","387","403","416","418","428","431","437","438","450","468","474","506","514","519","548","579","581","584","587","600","604","613","622","633","639","644","647","655","672","677","683","688","705","709","742","753","778","780","782","807","819","825","867","873","879","902","905","942"]},"capital":["Ottawa"],"altSpellings":["CA"],"region":"Americas","subregion":"North America","languages":{"eng":"English","fra":"French"},"translations":{"ara":{"official":"\u0643\u0646\u062F\u0627","common":"\u0643\u0646\u062F\u0627"},"ces":{"official":"Kanada","common":"Kanada"},"deu":{"official":"Kanada","common":"Kanada"},"est":{"official":"Kanada","common":"Kanada"},"fin":{"official":"Kanada","common":"Kanada"},"fra":{"official":"Canada","common":"Canada"},"hrv":{"official":"Kanada","common":"Kanada"},"hun":{"official":"Kanada","common":"Kanada"},"ita":{"official":"Canada","common":"Canada"},"jpn":{"official":"\u30AB\u30CA\u30C0","common":"\u30AB\u30CA\u30C0"},"kor":{"official":"\uCE90\uB098\uB2E4","common":"\uCE90\uB098\uB2E4"},"nld":{"official":"Canada","common":"Canada"},"per":{"official":"\u06A9\u0627\u0646\u0627\u062F\u0627","common":"\u06A9\u0627\u0646\u0627\u062F\u0627"},"pol":{"official":"Kanada","common":"Kanada"},"por":{"official":"Canad\xe1","common":"Canad\xe1"},"rus":{"official":"\u041A\u0430\u043D\u0430\u0434\u0430","common":"\u041A\u0430\u043D\u0430\u0434\u0430"},"slk":{"official":"Kanada","common":"Kanada"},"spa":{"official":"Canad\xe1","common":"Canad\xe1"},"srp":{"official":"Kanada","common":"Kanada"},"swe":{"official":"Kanada","common":"Kanada"},"tur":{"official":"Kanada","common":"Kanada"},"urd":{"official":"\u06A9\u06CC\u0646\u06CC\u0688\u0627","common":"\u06A9\u06CC\u0646\u06CC\u0688\u0627"},"zho":{"official":"\u52A0\u62FF\u5927","common":"\u52A0\u62FF\u5927"}},"latlng":[60,-95],"landlocked":false,"borders":["USA"],"area":9984670,"flag":"\uD83C\uDDE8\uD83C\uDDE6","demonyms":{"eng":{"f":"Canadian","m":"Canadian"},"fra":{"f":"Canadienne","m":"Canadien"}}},{"name":{"common":"Cocos (Keeling) Islands","official":"Territory of the Cocos (Keeling) Islands","native":{"eng":{"official":"Territory of the Cocos (Keeling) Islands","common":"Cocos (Keeling) Islands"}}},"tld":[".cc"],"cca2":"CC","ccn3":"166","cca3":"CCK","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["1"]},"capital":["West Island"],"altSpellings":["CC","Keeling Islands","Cocos Islands"],"region":"Oceania","subregion":"Australia and New Zealand","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0625\u0642\u0644\u064A\u0645 \u062C\u0632\u0631 \u0643\u0648\u0643\u0648\u0633","common":"\u062C\u0632\u0631 \u0643\u0648\u0643\u0648\u0633"},"ces":{"official":"Kokosov\xe9 ostrovy","common":"Kokosov\xe9 ostrovy"},"deu":{"official":"Gebiet der Kokos- (Keeling-) Inseln","common":"Kokosinseln"},"est":{"official":"Kookossaarte ala","common":"Kookossaared"},"fin":{"official":"Kookossaaret","common":"Kookossaaret"},"fra":{"official":"Territoire des \xeeles Cocos (Keeling)","common":"\xceles Cocos"},"hrv":{"official":"Teritoriju Kokosovi (Keeling) Islands","common":"Kokosovi Otoci"},"hun":{"official":"K\xf3kusz-szigetek","common":"K\xf3kusz-szigetek"},"ita":{"official":"Territorio della (Keeling) Isole Cocos","common":"Isole Cocos e Keeling"},"jpn":{"official":"\u30B3\u30B3\u30B9\u8AF8\u5CF6","common":"\u30B3\u30B3\u30B9\u8AF8\u5CF6"},"kor":{"official":"\uCF54\uCF54\uC2A4 \uC81C\uB3C4","common":"\uCF54\uCF54\uC2A4 \uC81C\uB3C4"},"nld":{"official":"Grondgebied van de Eilanden Cocos (Keeling )","common":"Cocoseilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u06A9\u0648\u0633","common":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u06A9\u0648\u0633"},"pol":{"official":"Wyspy Kokosowe","common":"Wyspy Kokosowe"},"por":{"official":"Territ\xf3rio dos Cocos (Keeling)","common":"Ilhas Cocos (Keeling)"},"rus":{"official":"\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041A\u043E\u043A\u043E\u0441\u043E\u0432\u044B\u0435 (\u041A\u0438\u043B\u0438\u043D\u0433) \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u044B\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Kokosov\xe9 ostrovy","common":"Kokosov\xe9 ostrovy"},"spa":{"official":"Territorio de los (Keeling) Islas Cocos","common":"Islas Cocos o Islas Keeling"},"srp":{"official":"Teritorija Kokosovih (Kiling) Ostrva","common":"Kokosova Ostrva"},"swe":{"official":"Kokos\xf6arna","common":"Kokos\xf6arna"},"tur":{"official":"Cocos (Keeling) Adalar\u0131","common":"Cocos (Keeling) Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 (\u06A9\u06CC\u0644\u0646\u06AF) \u06A9\u0648\u06A9\u0648\u0633","common":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u0648\u06A9\u0648\u0633"},"zho":{"official":"\u79D1\u79D1\u65AF","common":"\u79D1\u79D1\u65AF"}},"latlng":[-12.5,96.83333333],"landlocked":false,"borders":[],"area":14,"flag":"\uD83C\uDDE8\uD83C\uDDE8","demonyms":{"eng":{"f":"Cocos Islander","m":"Cocos Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Switzerland","official":"Swiss Confederation","native":{"fra":{"official":"Conf\xe9d\xe9ration suisse","common":"Suisse"},"gsw":{"official":"Schweizerische Eidgenossenschaft","common":"Schweiz"},"ita":{"official":"Confederazione Svizzera","common":"Svizzera"},"roh":{"official":"Confederaziun svizra","common":"Svizra"}}},"tld":[".ch"],"cca2":"CH","ccn3":"756","cca3":"CHE","cioc":"SUI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"CHF":{"name":"Swiss franc","symbol":"Fr."}},"idd":{"root":"+4","suffixes":["1"]},"capital":["Bern"],"altSpellings":["CH","Swiss Confederation","Schweiz","Suisse","Svizzera","Svizra"],"region":"Europe","subregion":"Western Europe","languages":{"fra":"French","gsw":"Swiss German","ita":"Italian","roh":"Romansh"},"translations":{"ara":{"official":"\u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0633\u0648\u064A\u0633\u0631\u064A","common":"\u0633\u0648\u064A\u0633\u0631\u0627"},"ces":{"official":"\u0160v\xfdcarsk\xe1 konfederace","common":"\u0160v\xfdcarsko"},"deu":{"official":"Schweizerische Eidgenossenschaft","common":"Schweiz"},"est":{"official":"\u0160veitsi Konf\xf6deratsioon","common":"\u0160veits"},"fin":{"official":"Sveitsin valaliitto","common":"Sveitsi"},"fra":{"official":"Conf\xe9d\xe9ration suisse","common":"Suisse"},"hrv":{"official":"\u0161vicarska Konfederacija","common":"\u0160vicarska"},"hun":{"official":"Sv\xe1jc","common":"Sv\xe1jc"},"ita":{"official":"Confederazione svizzera","common":"Svizzera"},"jpn":{"official":"\u30B9\u30A4\u30B9\u9023\u90A6","common":"\u30B9\u30A4\u30B9"},"kor":{"official":"\uC2A4\uC704\uC2A4 \uC5F0\uBC29","common":"\uC2A4\uC704\uC2A4"},"nld":{"official":"Zwitserse Confederatie","common":"Zwitserland"},"per":{"official":"\u06A9\u0646\u0641\u062F\u0631\u0627\u0633\u06CC\u0648\u0646 \u0633\u0648\u0626\u06CC\u0633","common":"\u0633\u0648\u0626\u06CC\u0633"},"pol":{"official":"Konfederacja Szwajcarska","common":"Szwajcaria"},"por":{"official":"Confedera\xe7\xe3o Su\xed\xe7a","common":"Su\xed\xe7a"},"rus":{"official":"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043A\u0430\u044F \u041A\u043E\u043D\u0444\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F","common":"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"},"slk":{"official":"\u0160vaj\u010Diarska konfeder\xe1cia","common":"\u0160vaj\u010Diarsko"},"spa":{"official":"Confederaci\xf3n Suiza","common":"Suiza"},"srp":{"official":"\u0160vajcarska Konfederacija","common":"\u0160vajcarska"},"swe":{"official":"Schweiziska edsf\xf6rbundet","common":"Schweiz"},"tur":{"official":"\u0130svi\xe7re Konfederasyonu","common":"\u0130svi\xe7re"},"urd":{"official":"\u0633\u0648\u0626\u06CC\u0633  \u0645\u062A\u062D\u062F\u06C1","common":"\u0633\u0648\u06CC\u0679\u0630\u0631\u0644\u06CC\u0646\u0688"},"zho":{"official":"\u745E\u58EB\u8054\u90A6","common":"\u745E\u58EB"}},"latlng":[47,8],"landlocked":true,"borders":["AUT","FRA","ITA","LIE","DEU"],"area":41284,"flag":"\uD83C\uDDE8\uD83C\uDDED","demonyms":{"eng":{"f":"Swiss","m":"Swiss"},"fra":{"f":"Suisse","m":"Suisse"}}},{"name":{"common":"Chile","official":"Republic of Chile","native":{"spa":{"official":"Rep\xfablica de Chile","common":"Chile"}}},"tld":[".cl"],"cca2":"CL","ccn3":"152","cca3":"CHL","cioc":"CHI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"CLP":{"name":"Chilean peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["6"]},"capital":["Santiago"],"altSpellings":["CL","Republic of Chile","Rep\xfablica de Chile"],"region":"Americas","subregion":"South America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0634\u064A\u0644\u064A","common":"\u062A\u0634\u064A\u0644\u064A"},"ces":{"official":"Chilsk\xe1 republika","common":"Chile"},"deu":{"official":"Republik Chile","common":"Chile"},"est":{"official":"T\u0161iili Vabariik","common":"T\u0161iili"},"fin":{"official":"Chilen tasavalta","common":"Chile"},"fra":{"official":"R\xe9publique du Chili","common":"Chili"},"hrv":{"official":"Republika \u010Cile","common":"\u010Cile"},"hun":{"official":"Chilei K\xf6zt\xe1rsas\xe1g","common":"Chile"},"ita":{"official":"Repubblica del Cile","common":"Cile"},"jpn":{"official":"\u30C1\u30EA\u5171\u548C\u56FD","common":"\u30C1\u30EA"},"kor":{"official":"\uCE60\uB808 \uACF5\uD654\uAD6D","common":"\uCE60\uB808"},"nld":{"official":"Republiek Chili","common":"Chili"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0634\u06CC\u0644\u06CC","common":"\u0634\u06CC\u0644\u06CC"},"pol":{"official":"Republika Chile","common":"Chile"},"por":{"official":"Rep\xfablica do Chile","common":"Chile"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0427\u0438\u043B\u0438","common":"\u0427\u0438\u043B\u0438"},"slk":{"official":"\u010C\xedlska republika","common":"\u010Cile"},"spa":{"official":"Rep\xfablica de Chile","common":"Chile"},"srp":{"official":"Republika \u010Cile","common":"\u010Cile"},"swe":{"official":"Republiken Chile","common":"Chile"},"tur":{"official":"\u015Fili Cumhuriyeti","common":"\u015Fili"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u0644\u06CC","common":"\u0686\u0644\u06CC"},"zho":{"official":"\u667A\u5229\u5171\u548C\u56FD","common":"\u667A\u5229"}},"latlng":[-30,-71],"landlocked":false,"borders":["ARG","BOL","PER"],"area":756102,"flag":"\uD83C\uDDE8\uD83C\uDDF1","demonyms":{"eng":{"f":"Chilean","m":"Chilean"},"fra":{"f":"Chilienne","m":"Chilien"}}},{"name":{"common":"China","official":"People\'s Republic of China","native":{"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD","common":"\u4E2D\u56FD"}}},"tld":[".cn",".\u4E2D\u56FD",".\u4E2D\u570B",".\u516C\u53F8",".\u7F51\u7EDC"],"cca2":"CN","ccn3":"156","cca3":"CHN","cioc":"CHN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"CNY":{"name":"Chinese yuan","symbol":"\xa5"}},"idd":{"root":"+8","suffixes":["6"]},"capital":["Beijing"],"altSpellings":["CN","Zh\u014Dnggu\xf3","Zhongguo","Zhonghua","People\'s Republic of China","\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD","Zh\u014Dnghu\xe1 R\xe9nm\xedn G\xf2ngh\xe9gu\xf3"],"region":"Asia","subregion":"Eastern Asia","languages":{"zho":"Chinese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0627\u0644\u0635\u064A\u0646"},"ces":{"official":"\u010C\xednsk\xe1 lidov\xe1 republika","common":"\u010C\xedna"},"deu":{"official":"Volksrepublik China","common":"China"},"est":{"official":"Hiina Rahvavabariik","common":"Hiina"},"fin":{"official":"Kiinan kansantasavalta","common":"Kiina"},"fra":{"official":"R\xe9publique populaire de Chine","common":"Chine"},"hrv":{"official":"Narodna Republika Kina","common":"Kina"},"hun":{"official":"K\xednai N\xe9pk\xf6zt\xe1rsas\xe1g","common":"K\xedna"},"ita":{"official":"Repubblica popolare cinese","common":"Cina"},"jpn":{"official":"\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u56FD","common":"\u4E2D\u56FD"},"kor":{"official":"\uC911\uD654\uC778\uBBFC\uACF5\uD654\uAD6D","common":"\uC911\uAD6D"},"nld":{"official":"Volksrepubliek China","common":"China"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062E\u0644\u0642 \u0686\u06CC\u0646","common":"\u0686\u06CC\u0646"},"pol":{"official":"Chi\u0144ska Republika Ludowa","common":"Chiny"},"por":{"official":"Rep\xfablica Popular da China","common":"China"},"rus":{"official":"\u041D\u0430\u0440\u043E\u0434\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0438\u0442\u0430\u0439","common":"\u041A\u0438\u0442\u0430\u0439"},"slk":{"official":"\u010C\xednska \u013Eudov\xe1 republika","common":"\u010C\xedna"},"spa":{"official":"Rep\xfablica Popular de China","common":"China"},"srp":{"official":"Narodna Republika Kina","common":"Kina"},"swe":{"official":"Folkrepubliken Kina","common":"Kina"},"tur":{"official":"\xe7in Halk Cumhuriyeti","common":"\xe7in"},"urd":{"official":"\u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u06CC\u0646","common":"\u0686\u06CC\u0646"},"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD","common":"\u4E2D\u56FD"}},"latlng":[35,105],"landlocked":false,"borders":["AFG","BTN","MMR","HKG","IND","KAZ","NPL","PRK","KGZ","LAO","MAC","MNG","PAK","RUS","TJK","VNM"],"area":9706961,"flag":"\uD83C\uDDE8\uD83C\uDDF3","demonyms":{"eng":{"f":"Chinese","m":"Chinese"},"fra":{"f":"Chinoise","m":"Chinois"}}},{"name":{"common":"Ivory Coast","official":"Republic of C\xf4te d\'Ivoire","native":{"fra":{"official":"R\xe9publique de C\xf4te d\'Ivoire","common":"C\xf4te d\'Ivoire"}}},"tld":[".ci"],"cca2":"CI","ccn3":"384","cca3":"CIV","cioc":"CIV","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["25"]},"capital":["Yamoussoukro"],"altSpellings":["CI","C\xf4te d\'Ivoire","Cote d\'Ivoire","Ivory Coast","Republic of C\xf4te d\'Ivoire","R\xe9publique de C\xf4te d\'Ivoire"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0627\u062D\u0644 \u0627\u0644\u0639\u0627\u062C","common":"\u0633\u0627\u062D\u0644 \u0627\u0644\u0639\u0627\u062C"},"ces":{"official":"Republika Pob\u0159e\u017E\xed slonoviny","common":"Pob\u0159e\u017E\xed slonoviny"},"deu":{"official":"Republik C\xf4te d\'Ivoire","common":"C\xf4te d\'Ivoire"},"est":{"official":"C\xf4te d\u2019Ivoire\u2019i Vabariik","common":"Elevandiluurannik"},"fin":{"official":"Norsunluurannikon tasavalta","common":"Norsunluurannikko"},"fra":{"official":"R\xe9publique de C\xf4te d\' Ivoire","common":"C\xf4te d\'Ivoire"},"hrv":{"official":"Republika C\xf4te d\'Ivoire","common":"Obala Bjelokosti"},"hun":{"official":"Elef\xe1ntcsontparti K\xf6zt\xe1rsas\xe1g","common":"Elef\xe1ntcsontpart"},"ita":{"official":"Repubblica della Costa d\'Avorio","common":"Costa d\'Avorio"},"jpn":{"official":"\u30B3\u30FC\u30C8\u30B8\u30DC\u30EF\u30FC\u30EB\u5171\u548C\u56FD","common":"\u30B3\u30FC\u30C8\u30B8\u30DC\u30EF\u30FC\u30EB"},"kor":{"official":"\uCF54\uD2B8\uB514\uBD80\uC544\uB974 \uACF5\uD654\uAD6D","common":"\uCF54\uD2B8\uB514\uBD80\uC544\uB974"},"nld":{"official":"Republiek Ivoorkust","common":"Ivoorkust"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0627\u062D\u0644 \u0639\u0627\u062C","common":"\u0633\u0627\u062D\u0644 \u0639\u0627\u062C"},"pol":{"official":"Republika Wybrze\u017Ba Ko\u015Bci S\u0142oniowej","common":"Wybrze\u017Be Ko\u015Bci S\u0142oniowej"},"por":{"official":"Rep\xfablica da C\xf4te d\'Ivoire","common":"Costa do Marfim"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0442-\u0434\'\u0418\u0432\u0443\u0430\u0440\u0435","common":"\u041A\u043E\u0442-\u0434\u2019\u0418\u0432\u0443\u0430\u0440"},"slk":{"official":"Republika Pobre\u017Eie Slonoviny","common":"Pobr\u017Eie Slonoviny"},"spa":{"official":"Rep\xfablica de C\xf4te d\'Ivoire","common":"Costa de Marfil"},"srp":{"official":"Republika Obala Slonova\u010De","common":"Obala Slonova\u010De"},"swe":{"official":"Republiken Elfenbenskusten","common":"Elfenbenskusten"},"tur":{"official":"Fildi\u015Fi Sahili","common":"Fildi\u015Fi Sahili"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u062A \u062F\u06CC\u0648\u0627\u063A","common":"\u0622\u0626\u06CC\u0648\u0631\u06CC \u06A9\u0648\u0633\u0679"},"zho":{"official":"\u79D1\u7279\u8FEA\u74E6\u5171\u548C\u56FD","common":"\u79D1\u7279\u8FEA\u74E6"}},"latlng":[8,-5],"landlocked":false,"borders":["BFA","GHA","GIN","LBR","MLI"],"area":322463,"flag":"\uD83C\uDDE8\uD83C\uDDEE","demonyms":{"eng":{"f":"Ivorian","m":"Ivorian"},"fra":{"f":"Ivoirienne","m":"Ivoirien"}}},{"name":{"common":"Cameroon","official":"Republic of Cameroon","native":{"eng":{"official":"Republic of Cameroon","common":"Cameroon"},"fra":{"official":"R\xe9publique du Cameroun","common":"Cameroun"}}},"tld":[".cm"],"cca2":"CM","ccn3":"120","cca3":"CMR","cioc":"CMR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["37"]},"capital":["Yaound\xe9"],"altSpellings":["CM","Republic of Cameroon","R\xe9publique du Cameroun"],"region":"Africa","subregion":"Middle Africa","languages":{"eng":"English","fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0648\u0646","common":"\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0648\u0646"},"ces":{"official":"Kamerunsk\xe1 republika","common":"Kamerun"},"deu":{"official":"Republik Kamerun","common":"Kamerun"},"est":{"official":"Kameruni Vabariik","common":"Kamerun"},"fin":{"official":"Kamerunin tasavalta","common":"Kamerun"},"fra":{"official":"R\xe9publique du Cameroun","common":"Cameroun"},"hrv":{"official":"Republika Kamerun","common":"Kamerun"},"hun":{"official":"Kameruni K\xf6zt\xe1rsas\xe1g","common":"Kamerun"},"ita":{"official":"Repubblica del Camerun","common":"Camerun"},"jpn":{"official":"\u30AB\u30E1\u30EB\u30FC\u30F3\u5171\u548C\u56FD","common":"\u30AB\u30E1\u30EB\u30FC\u30F3"},"kor":{"official":"\uCE74\uBA54\uB8EC \uACF5\uD654\uAD6D","common":"\uCE74\uBA54\uB8EC"},"nld":{"official":"Republiek Kameroen","common":"Kameroen"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0627\u0645\u0650\u0631\u0648\u0646","common":"\u06A9\u0627\u0645\u0650\u0631\u0648\u0646"},"pol":{"official":"Republika Wybrze\u017Ba Ko\u015Bci S\u0142oniowej","common":"Wybrze\u017Be Ko\u015Bci S\u0142oniowej"},"por":{"official":"Rep\xfablica dos Camar\xf5es","common":"Camar\xf5es"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u043C\u0435\u0440\u0443\u043D","common":"\u041A\u0430\u043C\u0435\u0440\u0443\u043D"},"slk":{"official":"Kamerunsk\xe1 republika","common":"Kamerun"},"spa":{"official":"Rep\xfablica de Camer\xfan","common":"Camer\xfan"},"srp":{"official":"Republika Kamerun","common":"Kamerun"},"swe":{"official":"Republiken Kamerun","common":"Kamerun"},"tur":{"official":"Kamerun Cumhuriyeti","common":"Kamerun"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u06CC\u0645\u0631\u0648\u0646","common":"\u06A9\u06CC\u0645\u0631\u0648\u0646"},"zho":{"official":"\u5580\u9EA6\u9686\u5171\u548C\u56FD","common":"\u5580\u9EA6\u9686"}},"latlng":[6,12],"landlocked":false,"borders":["CAF","TCD","COG","GNQ","GAB","NGA"],"area":475442,"flag":"\uD83C\uDDE8\uD83C\uDDF2","demonyms":{"eng":{"f":"Cameroonian","m":"Cameroonian"},"fra":{"f":"Camerounaise","m":"Camerounais"}}},{"name":{"common":"DR Congo","official":"Democratic Republic of the Congo","native":{"fra":{"official":"R\xe9publique d\xe9mocratique du Congo","common":"RD Congo"},"kon":{"official":"Repubilika ya Kongo Demokratiki","common":"Repubilika ya Kongo Demokratiki"},"lin":{"official":"Republiki ya Kong\xf3 Demokratiki","common":"Republiki ya Kong\xf3 Demokratiki"},"lua":{"official":"Ditunga dia Kongu wa Mungalaata","common":"Ditunga dia Kongu wa Mungalaata"},"swa":{"official":"Jamhuri ya Kidemokrasia ya Kongo","common":"Jamhuri ya Kidemokrasia ya Kongo"}}},"tld":[".cd"],"cca2":"CD","ccn3":"180","cca3":"COD","cioc":"COD","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"CDF":{"name":"Congolese franc","symbol":"FC"}},"idd":{"root":"+2","suffixes":["43"]},"capital":["Kinshasa"],"altSpellings":["CD","DR Congo","Congo-Kinshasa","Congo, the Democratic Republic of the","Democratic Republic of Congo","DRC"],"region":"Africa","subregion":"Middle Africa","languages":{"fra":"French","kon":"Kikongo","lin":"Lingala","lua":"Tshiluba","swa":"Swahili"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0648\u0646\u063A\u0648 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u0627\u0644\u0643\u0648\u0646\u063A\u0648"},"ces":{"official":"Demokratick\xe1 republika Kongo","common":"DR Kongo"},"deu":{"official":"Demokratische Republik Kongo","common":"Kongo (Dem. Rep.)"},"est":{"official":"Kongo Demokraatlik Vabariik","common":"Kongo DV"},"fin":{"official":"Kongon demokraattinen tasavalta","common":"Kongon demokraattinen tasavalta"},"fra":{"official":"R\xe9publique d\xe9mocratique du Congo","common":"Congo (R\xe9p. d\xe9m.)"},"hrv":{"official":"Demokratska Republika Kongo","common":"Kongo, Demokratska Republika"},"hun":{"official":"Kong\xf3i Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Kong\xf3i Demokratikus K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica Democratica del Congo","common":"Congo (Rep. Dem.)"},"jpn":{"official":"\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30B3\u30F3\u30B4\u6C11\u4E3B\u5171\u548C\u56FD"},"kor":{"official":"\uCF69\uACE0 \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uCF69\uACE0 \uBBFC\uC8FC \uACF5\uD654\uAD6D"},"nld":{"official":"Democratische Republiek Congo","common":"Congo (DRC)"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u06A9\u0646\u06AF\u0648","common":"\u06A9\u0646\u06AF\u0648 \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9"},"pol":{"official":"Demokratyczna Republika Konga","common":"Demokratyczna Republika Konga"},"por":{"official":"Rep\xfablica Democr\xe1tica do Congo","common":"Rep\xfablica Democr\xe1tica do Congo"},"rus":{"official":"\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E","common":"\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E"},"slk":{"official":"Kon\u017Esk\xe1 demokratick\xe1 republika","common":"Kongo"},"spa":{"official":"Rep\xfablica Democr\xe1tica del Congo","common":"Congo (Rep. Dem.)"},"srp":{"official":"Demokratska Republika Kongo","common":"Kongo, Demokratska Republika"},"swe":{"official":"Demokratiska republiken Kongo","common":"Kongo-Kinshasa"},"tur":{"official":"Kongo Demokratik Cumhuriyeti","common":"Kongo Demokratik Cumhuriyeti"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0627\u0646\u06AF\u0648","common":"\u06A9\u0627\u0646\u06AF\u0648"},"zho":{"official":"\u521A\u679C\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u6C11\u4E3B\u521A\u679C"}},"latlng":[0,25],"landlocked":false,"borders":["AGO","BDI","CAF","COG","RWA","SSD","TZA","UGA","ZMB"],"area":2344858,"flag":"\uD83C\uDDE8\uD83C\uDDE9","demonyms":{"eng":{"f":"Congolese","m":"Congolese"},"fra":{"f":"Congolaise","m":"Congolais"}}},{"name":{"common":"Republic of the Congo","official":"Republic of the Congo","native":{"fra":{"official":"R\xe9publique du Congo","common":"R\xe9publique du Congo"},"kon":{"official":"Repubilika ya Kongo","common":"Repubilika ya Kongo"},"lin":{"official":"Republ\xedki ya Kong\xf3","common":"Republ\xedki ya Kong\xf3"}}},"tld":[".cg"],"cca2":"CG","ccn3":"178","cca3":"COG","cioc":"CGO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["42"]},"capital":["Brazzaville"],"altSpellings":["CG","Congo","Congo-Brazzaville"],"region":"Africa","subregion":"Middle Africa","languages":{"fra":"French","kon":"Kikongo","lin":"Lingala"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0648\u0646\u063A\u0648","common":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0643\u0648\u0646\u063A\u0648"},"ces":{"official":"Kon\u017Esk\xe1 republika","common":"Kongo"},"deu":{"official":"Republik Kongo","common":"Kongo"},"est":{"official":"Kongo Vabariik","common":"Kongo Vabariik"},"fin":{"official":"Kongon tasavalta","common":"Kongo-Brazzaville"},"fra":{"official":"R\xe9publique du Congo","common":"Congo"},"hrv":{"official":"Republika Kongo","common":"Kongo"},"hun":{"official":"Kong\xf3i K\xf6zt\xe1rsas\xe1g","common":"Kong\xf3i K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica del Congo","common":"Congo"},"jpn":{"official":"\u30B3\u30F3\u30B4\u5171\u548C\u56FD","common":"\u30B3\u30F3\u30B4\u5171\u548C\u56FD"},"kor":{"official":"\uCF69\uACE0","common":"\uCF69\uACE0"},"nld":{"official":"Republiek Congo","common":"Congo"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0631\u0627\u0632\u0627\u0648\u06CC\u0644 \u06A9\u064F\u0646\u06AF\u0648","common":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u064F\u0646\u06AF\u0648"},"pol":{"official":"Republika Konga","common":"Kongo"},"por":{"official":"Rep\xfablica do Congo","common":"Congo"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E","common":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043D\u0433\u043E"},"slk":{"official":"Kon\u017Esk\xe1 republika","common":"Kongo"},"spa":{"official":"Rep\xfablica del Congo","common":"Congo"},"srp":{"official":"Republika Kongo","common":"Kongo, Republika"},"swe":{"official":"Republiken Kongo","common":"Kongo-Brazzaville"},"tur":{"official":"Kongo Cumhuriyeti","common":"Kongo Cumhuriyeti"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0627\u0646\u06AF\u0648","common":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0627\u0646\u06AF\u0648"},"zho":{"official":"\u521A\u679C\u5171\u548C\u56FD","common":"\u521A\u679C"}},"latlng":[-1,15],"landlocked":false,"borders":["AGO","CMR","CAF","COD","GAB"],"area":342000,"flag":"\uD83C\uDDE8\uD83C\uDDEC","demonyms":{"eng":{"f":"Congolese","m":"Congolese"},"fra":{"f":"Congolaise","m":"Congolais"}}},{"name":{"common":"Cook Islands","official":"Cook Islands","native":{"eng":{"official":"Cook Islands","common":"Cook Islands"},"rar":{"official":"K\u016Bki \'\u0100irani","common":"K\u016Bki \'\u0100irani"}}},"tld":[".ck"],"cca2":"CK","ccn3":"184","cca3":"COK","cioc":"COK","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"CKD":{"name":"Cook Islands dollar","symbol":"$"},"NZD":{"name":"New Zealand dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["82"]},"capital":["Avarua"],"altSpellings":["CK","K\u016Bki \'\u0100irani"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","rar":"Cook Islands M\u0101ori"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0643\u0648\u0643","common":"\u062C\u0632\u0631 \u0643\u0648\u0643"},"ces":{"official":"Cookovy ostrovy","common":"Cookovy ostrovy"},"deu":{"official":"Cookinseln","common":"Cookinseln"},"est":{"official":"Cooki saared","common":"Cooki saared"},"fin":{"official":"Cookinsaaret","common":"Cookinsaaret"},"fra":{"official":"\xceles Cook","common":"\xceles Cook"},"hrv":{"official":"Cook Islands","common":"Cookovo Oto\u010Dje"},"hun":{"official":"Cook-szigetek","common":"Cook-szigetek"},"ita":{"official":"Isole Cook","common":"Isole Cook"},"jpn":{"official":"\u30AF\u30C3\u30AF\u8AF8\u5CF6","common":"\u30AF\u30C3\u30AF\u8AF8\u5CF6"},"kor":{"official":"\uCFE1 \uC81C\uB3C4","common":"\uCFE1 \uC81C\uB3C4"},"nld":{"official":"Cook eilanden","common":"Cookeilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u06A9","common":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u06A9"},"pol":{"official":"Wyspy Cooka","common":"Wyspy Cooka"},"por":{"official":"Ilhas Cook","common":"Ilhas Cook"},"rus":{"official":"\u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u041A\u0443\u043A\u0430","common":"\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u041A\u0443\u043A\u0430"},"slk":{"official":"Cookove ostrovy","common":"Cookove ostrovy"},"spa":{"official":"Islas Cook","common":"Islas Cook"},"srp":{"official":"Kukova Ostrva","common":"Kukova Ostrva"},"swe":{"official":"Cook\xf6arna","common":"Cook\xf6arna"},"tur":{"official":"Cook Adalar\u0131","common":"Cook Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06A9","common":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06A9"},"zho":{"official":"\u5E93\u514B\u7FA4\u5C9B","common":"\u5E93\u514B\u7FA4\u5C9B"}},"latlng":[-21.23333333,-159.76666666],"landlocked":false,"borders":[],"area":236,"flag":"\uD83C\uDDE8\uD83C\uDDF0","demonyms":{"eng":{"f":"Cook Islander","m":"Cook Islander"},"fra":{"f":"Cookienne","m":"Cookien"}}},{"name":{"common":"Colombia","official":"Republic of Colombia","native":{"spa":{"official":"Rep\xfablica de Colombia","common":"Colombia"}}},"tld":[".co"],"cca2":"CO","ccn3":"170","cca3":"COL","cioc":"COL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"COP":{"name":"Colombian peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["7"]},"capital":["Bogot\xe1"],"altSpellings":["CO","Republic of Colombia","Rep\xfablica de Colombia"],"region":"Americas","subregion":"South America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627","common":"\u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627"},"ces":{"official":"Kolumbijsk\xe1 republika","common":"Kolumbie"},"deu":{"official":"Republik Kolumbien","common":"Kolumbien"},"est":{"official":"Colombia Vabariik","common":"Colombia"},"fin":{"official":"Kolumbian tasavalta","common":"Kolumbia"},"fra":{"official":"R\xe9publique de Colombie","common":"Colombie"},"hrv":{"official":"Republika Kolumbija","common":"Kolumbija"},"hun":{"official":"Kolumbiai K\xf6zt\xe1rsas\xe1g","common":"Kolumbia"},"ita":{"official":"Repubblica di Colombia","common":"Colombia"},"jpn":{"official":"\u30B3\u30ED\u30F3\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30B3\u30ED\u30F3\u30D3\u30A2"},"kor":{"official":"\uCF5C\uB86C\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uCF5C\uB86C\uBE44\uC544"},"nld":{"official":"Republiek Colombia","common":"Colombia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0644\u0645\u0628\u06CC\u0627","common":"\u06A9\u0644\u0645\u0628\u06CC\u0627"},"pol":{"official":"Republika Kolumbii","common":"Kolumbia"},"por":{"official":"Rep\xfablica da Col\xf4mbia","common":"Col\xf4mbia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F","common":"\u041A\u043E\u043B\u0443\u043C\u0431\u0438\u044F"},"slk":{"official":"Kolumbijsk\xe1 republika","common":"Kolumbia"},"spa":{"official":"Rep\xfablica de Colombia","common":"Colombia"},"srp":{"official":"Republika Kolumbija","common":"Kolumbija"},"swe":{"official":"Republiken Colombia","common":"Colombia"},"tur":{"official":"Kolombiya Cumhuriyeti","common":"Kolombiya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u0644\u0645\u0628\u06CC\u0627","common":"\u06A9\u0648\u0644\u0645\u0628\u06CC\u0627"},"zho":{"official":"\u54E5\u4F26\u6BD4\u4E9A\u5171\u548C\u56FD","common":"\u54E5\u4F26\u6BD4\u4E9A"}},"latlng":[4,-72],"landlocked":false,"borders":["BRA","ECU","PAN","PER","VEN"],"area":1141748,"flag":"\uD83C\uDDE8\uD83C\uDDF4","demonyms":{"eng":{"f":"Colombian","m":"Colombian"},"fra":{"f":"Colombienne","m":"Colombien"}}},{"name":{"common":"Comoros","official":"Union of the Comoros","native":{"ara":{"official":"\u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0642\u0645\u0631\u064A","common":"\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631"},"fra":{"official":"Union des Comores","common":"Comores"},"zdj":{"official":"Udzima wa Komori","common":"Komori"}}},"tld":[".km"],"cca2":"KM","ccn3":"174","cca3":"COM","cioc":"COM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"KMF":{"name":"Comorian franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["69"]},"capital":["Moroni"],"altSpellings":["KM","Union of the Comoros","Union des Comores","Udzima wa Komori","al-Itti\u1E25\u0101d al-Qumur\u012B"],"region":"Africa","subregion":"Eastern Africa","languages":{"ara":"Arabic","fra":"French","zdj":"Comorian"},"translations":{"ara":{"official":"\u0627\u0644\u0625\u062A\u062D\u0627\u062F \u0627\u0644\u0642\u0645\u0631\u064A","common":"\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631"},"ces":{"official":"Komorsk\xfd svaz","common":"Komory"},"deu":{"official":"Union der Komoren","common":"Komoren"},"est":{"official":"Komoori Liit","common":"Komoorid"},"fin":{"official":"Komorien liitto","common":"Komorit"},"fra":{"official":"Union des Comores","common":"Comores"},"hrv":{"official":"Savez Komori","common":"Komori"},"hun":{"official":"Comore-szigeteki Uni\xf3","common":"Comore-szigetek"},"ita":{"official":"Unione delle Comore","common":"Comore"},"jpn":{"official":"\u30B3\u30E2\u30ED\u9023\u5408","common":"\u30B3\u30E2\u30ED"},"kor":{"official":"\uCF54\uBAA8\uB85C \uC5F0\uBC29","common":"\uCF54\uBAA8\uB85C"},"nld":{"official":"Unie van de Comoren","common":"Comoren"},"per":{"official":"\u0645\u062C\u0645\u0639\u200C\u0627\u0644\u062C\u0632\u0627\u06CC\u0631 \u0642\u0645\u0631","common":"\u0627\u062A\u062D\u0627\u062F \u0642\u064F\u0645\u064F\u0631"},"pol":{"official":"Zwi\u0105zek Komor\xf3w","common":"Komory"},"por":{"official":"Uni\xe3o das Comores","common":"Comores"},"rus":{"official":"\u0421\u043E\u044E\u0437 \u041A\u043E\u043C\u043E\u0440\u0441\u043A\u0438\u0445 \u041E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","common":"\u041A\u043E\u043C\u043E\u0440\u044B"},"slk":{"official":"Komorsk\xe1 \xfania","common":"Komory"},"spa":{"official":"Uni\xf3n de las Comoras","common":"Comoras"},"srp":{"official":"Unija Komora","common":"Komori"},"swe":{"official":"Unionen Komorerna","common":"Komorerna"},"tur":{"official":"Komorlar Birli\u011Fi","common":"Komorlar"},"urd":{"official":"\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0642\u0645\u0631\u06CC","common":"\u0627\u0644\u0642\u0645\u0631\u06CC"},"zho":{"official":"\u79D1\u6469\u7F57\u8054\u76DF","common":"\u79D1\u6469\u7F57"}},"latlng":[-12.16666666,44.25],"landlocked":false,"borders":[],"area":1862,"flag":"\uD83C\uDDF0\uD83C\uDDF2","demonyms":{"eng":{"f":"Comoran","m":"Comoran"},"fra":{"f":"Comorienne","m":"Comorien"}}},{"name":{"common":"Cape Verde","official":"Republic of Cabo Verde","native":{"por":{"official":"Rep\xfablica de Cabo Verde","common":"Cabo Verde"}}},"tld":[".cv"],"cca2":"CV","ccn3":"132","cca3":"CPV","cioc":"CPV","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"CVE":{"name":"Cape Verdean escudo","symbol":"Esc"}},"idd":{"root":"+2","suffixes":["38"]},"capital":["Praia"],"altSpellings":["CV","Republic of Cabo Verde","Rep\xfablica de Cabo Verde"],"region":"Africa","subregion":"Western Africa","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0627\u0628\u0648 \u0641\u064A\u0631\u062F\u064A","common":"\u0643\u0627\u0628\u0648 \u0641\u064A\u0631\u062F\u064A"},"ces":{"official":"Kapverdsk\xe1 republika","common":"Kapverdy"},"deu":{"official":"Republik Cabo Verde","common":"Kap Verde"},"est":{"official":"Cabo Verde Vabariik","common":"Roheneemesaared"},"fin":{"official":"Kap Verden tasavalta","common":"Kap Verde"},"fra":{"official":"R\xe9publique du Cap-Vert","common":"\xceles du Cap-Vert"},"hrv":{"official":"Republika Cabo Verde","common":"Zelenortska Republika"},"hun":{"official":"Z\xf6ld-foki K\xf6zt\xe1rsas\xe1g","common":"Z\xf6ld-foki K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica di Capo Verde","common":"Capo Verde"},"jpn":{"official":"\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7\u5171\u548C\u56FD","common":"\u30AB\u30FC\u30DC\u30D9\u30EB\u30C7"},"kor":{"official":"\uCE74\uBCF4\uBCA0\uB974\uB370 \uACF5\uD654\uAD6D","common":"\uCE74\uBCF4\uBCA0\uB974\uB370"},"nld":{"official":"Republiek van Cabo Verde","common":"Kaapverdi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0628\u0648 \u0648\u0631\u062F","common":"\u062F\u0645\u0627\u063A\u0647\u0654 \u0633\u0628\u0632"},"pol":{"official":"Republika Zielonego Przyl\u0105dka","common":"Republika Zielonego Przyl\u0105dka"},"por":{"official":"Rep\xfablica de Cabo Verde","common":"Cabo Verde"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0431\u043E -\u0412\u0435\u0440\u0434\u0435","common":"\u041A\u0430\u0431\u043E-\u0412\u0435\u0440\u0434\u0435"},"slk":{"official":"Kapverdsk\xe1 republika","common":"Kapverdy"},"spa":{"official":"Rep\xfablica de Cabo Verde","common":"Cabo Verde"},"srp":{"official":"Republika Zelenortska Ostrva","common":"Zelenortska Ostrva"},"swe":{"official":"Republiken Kap Verde","common":"Kap Verde"},"tur":{"official":"Ye\u015Fil Burun Cumhuriyeti","common":"Ye\u015Fil Burun"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u06CC\u067E \u0648\u0631\u0688\u06CC","common":"\u06A9\u06CC\u067E \u0648\u0631\u0688\u06CC"},"zho":{"official":"\u4F5B\u5F97\u89D2\u5171\u548C\u56FD","common":"\u4F5B\u5F97\u89D2"}},"latlng":[16,-24],"landlocked":false,"borders":[],"area":4033,"flag":"\uD83C\uDDE8\uD83C\uDDFB","demonyms":{"eng":{"f":"Cape Verdian","m":"Cape Verdian"},"fra":{"f":"Cap-verdienne","m":"Cap-verdien"}}},{"name":{"common":"Costa Rica","official":"Republic of Costa Rica","native":{"spa":{"official":"Rep\xfablica de Costa Rica","common":"Costa Rica"}}},"tld":[".cr"],"cca2":"CR","ccn3":"188","cca3":"CRI","cioc":"CRC","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"CRC":{"name":"Costa Rican col\xf3n","symbol":"\u20A1"}},"idd":{"root":"+5","suffixes":["06"]},"capital":["San Jos\xe9"],"altSpellings":["CR","Republic of Costa Rica","Rep\xfablica de Costa Rica"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0633\u062A\u0627\u0631\u064A\u0643\u0627","common":"\u0643\u0648\u0633\u062A\u0627\u0631\u064A\u0643\u0627"},"ces":{"official":"Kostarick\xe1 republika","common":"Kostarika"},"deu":{"official":"Republik Costa Rica","common":"Costa Rica"},"est":{"official":"Costa Rica Vabariik","common":"Costa Rica"},"fin":{"official":"Costa Rican tasavalta","common":"Costa Rica"},"fra":{"official":"R\xe9publique du Costa Rica","common":"Costa Rica"},"hrv":{"official":"Republika Kostarika","common":"Kostarika"},"hun":{"official":"Costa Rica-i K\xf6zt\xe1rsas\xe1g","common":"Costa Rica"},"ita":{"official":"Repubblica di Costa Rica","common":"Costa Rica"},"jpn":{"official":"\u30B3\u30B9\u30BF\u30EA\u30AB\u5171\u548C\u56FD","common":"\u30B3\u30B9\u30BF\u30EA\u30AB"},"kor":{"official":"\uCF54\uC2A4\uD0C0\uB9AC\uCE74 \uACF5\uD654\uAD6D","common":"\uCF54\uC2A4\uD0C0\uB9AC\uCE74"},"nld":{"official":"Republiek Costa Rica","common":"Costa Rica"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0627\u0633\u062A\u0627\u0631\u06CC\u06A9\u0627","common":"\u06A9\u0627\u0633\u062A\u0627\u0631\u06CC\u06A9\u0627"},"pol":{"official":"Republika Kostaryki","common":"Kostaryka"},"por":{"official":"Rep\xfablica da Costa Rica","common":"Costa Rica"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430","common":"\u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430"},"slk":{"official":"Kostarick\xe1 republika","common":"Kostarika"},"spa":{"official":"Rep\xfablica de Costa Rica","common":"Costa Rica"},"srp":{"official":"Republika Kostarika","common":"Kostarika"},"swe":{"official":"Republiken Costa Rica","common":"Costa Rica"},"tur":{"official":"Kosta Rika Cumhuriyeti","common":"Kosta Rika"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u0633\u0679\u0627\u0631\u06CC\u06A9\u0627","common":"\u06A9\u0648\u0633\u0679\u0627\u0631\u06CC\u06A9\u0627"},"zho":{"official":"\u54E5\u65AF\u8FBE\u9ECE\u52A0\u5171\u548C\u56FD","common":"\u54E5\u65AF\u8FBE\u9ECE\u52A0"}},"latlng":[10,-84],"landlocked":false,"borders":["NIC","PAN"],"area":51100,"flag":"\uD83C\uDDE8\uD83C\uDDF7","demonyms":{"eng":{"f":"Costa Rican","m":"Costa Rican"},"fra":{"f":"Costaricaine","m":"Costaricain"}}},{"name":{"common":"Cuba","official":"Republic of Cuba","native":{"spa":{"official":"Rep\xfablica de Cuba","common":"Cuba"}}},"tld":[".cu"],"cca2":"CU","ccn3":"192","cca3":"CUB","cioc":"CUB","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"CUC":{"name":"Cuban convertible peso","symbol":"$"},"CUP":{"name":"Cuban peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["3"]},"capital":["Havana"],"altSpellings":["CU","Republic of Cuba","Rep\xfablica de Cuba"],"region":"Americas","subregion":"Caribbean","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0628\u0627","common":"\u0643\u0648\u0628\u0627"},"ces":{"official":"Kub\xe1nsk\xe1 republika","common":"Kuba"},"deu":{"official":"Republik Kuba","common":"Kuba"},"est":{"official":"Kuuba Vabariik","common":"Kuuba"},"fin":{"official":"Kuuban tasavalta","common":"Kuuba"},"fra":{"official":"R\xe9publique de Cuba","common":"Cuba"},"hrv":{"official":"Republika Kuba","common":"Kuba"},"hun":{"official":"Kubai K\xf6zt\xe1rsas\xe1g","common":"Kuba"},"ita":{"official":"Repubblica di Cuba","common":"Cuba"},"jpn":{"official":"\u30AD\u30E5\u30FC\u30D0\u5171\u548C\u56FD","common":"\u30AD\u30E5\u30FC\u30D0"},"kor":{"official":"\uCFE0\uBC14 \uACF5\uD654\uAD6D","common":"\uCFE0\uBC14"},"nld":{"official":"Republiek Cuba","common":"Cuba"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0648\u0628\u0627","common":"\u06A9\u0648\u0628\u0627"},"pol":{"official":"Republika Kuby","common":"Kuba"},"por":{"official":"Rep\xfablica de Cuba","common":"Cuba"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0443\u0431\u0430","common":"\u041A\u0443\u0431\u0430"},"slk":{"official":"Kub\xe1nska republika","common":"Kuba"},"spa":{"official":"Rep\xfablica de Cuba","common":"Cuba"},"srp":{"official":"Republika Kuba","common":"Kuba"},"swe":{"official":"Republiken Kuba","common":"Kuba"},"tur":{"official":"K\xfcba Cumhuriyeti","common":"K\xfcba"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u06CC\u0648\u0628\u0627","common":"\u06A9\u06CC\u0648\u0628\u0627"},"zho":{"official":"\u53E4\u5DF4\u5171\u548C\u56FD","common":"\u53E4\u5DF4"}},"latlng":[21.5,-80],"landlocked":false,"borders":[],"area":109884,"flag":"\uD83C\uDDE8\uD83C\uDDFA","demonyms":{"eng":{"f":"Cuban","m":"Cuban"},"fra":{"f":"Cubaine","m":"Cubain"}}},{"name":{"common":"Cura\xe7ao","official":"Country of Cura\xe7ao","native":{"eng":{"official":"Country of Cura\xe7ao","common":"Cura\xe7ao"},"nld":{"official":"Land Cura\xe7ao","common":"Cura\xe7ao"},"pap":{"official":"Pais K\xf2rsou","common":"Pais K\xf2rsou"}}},"tld":[".cw"],"cca2":"CW","ccn3":"531","cca3":"CUW","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"ANG":{"name":"Netherlands Antillean guilder","symbol":"\u0192"}},"idd":{"root":"+5","suffixes":["99"]},"capital":["Willemstad"],"altSpellings":["CW","Curacao","K\xf2rsou","Country of Cura\xe7ao","Land Cura\xe7ao","Pais K\xf2rsou"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English","nld":"Dutch","pap":"Papiamento"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0643\u0648\u0631\u0627\u0633\u0627\u0648","common":"\u0643\u0648\u0631\u0627\u0633\u0627\u0648"},"ces":{"official":"Autonomn\xed zem\u011B Cura\xe7ao","common":"Cura\xe7ao"},"deu":{"official":"Land Cura\xe7ao","common":"Cura\xe7ao"},"est":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"fin":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"fra":{"official":"Pays de Cura\xe7ao","common":"Cura\xe7ao"},"hrv":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"hun":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"ita":{"official":"Paese di Cura\xe7ao","common":"Cura\xe7ao"},"jpn":{"official":"\u30AD\u30E5\u30E9\u30BD\u30FC","common":"\u30AD\u30E5\u30E9\u30BD\u30FC"},"kor":{"official":"\uD034\uB77C\uC18C","common":"\uD034\uB77C\uC18C"},"nld":{"official":"Land Cura\xe7ao","common":"Cura\xe7ao"},"per":{"official":"\u06A9\u0648\u0631\u0627\u0633\u0627\u0626\u0648","common":"\u06A9\u0648\u0631\u0627\u0633\u0627\u0626\u0648"},"pol":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"por":{"official":"Pa\xeds de Cura\xe7ao","common":"ilha da Cura\xe7\xe3o"},"rus":{"official":"\u0421\u0442\u0440\u0430\u043D\u0430 \u041A\u044E\u0440\u0430\u0441\u0430\u043E","common":"\u041A\u044E\u0440\u0430\u0441\u0430\u043E"},"slk":{"official":"Curacao","common":"Curacao"},"spa":{"official":"Pa\xeds de Curazao","common":"Curazao"},"srp":{"official":"Dr\u017Eava Kurasao","common":"Kurasao"},"swe":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"tur":{"official":"Cura\xe7ao","common":"Cura\xe7ao"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u06A9\u06CC\u0648\u0631\u0627\u0633\u0627\u0624","common":"\u06A9\u06CC\u0648\u0631\u0627\u0633\u0627\u0624"},"zho":{"official":"\u5E93\u62C9\u7D22","common":"\u5E93\u62C9\u7D22"}},"latlng":[12.116667,-68.933333],"landlocked":false,"borders":[],"area":444,"flag":"\uD83C\uDDE8\uD83C\uDDFC","demonyms":{"eng":{"f":"Cura\xe7aoan","m":"Cura\xe7aoan"},"fra":{"f":"Curacienne","m":"Curacien"}}},{"name":{"common":"Christmas Island","official":"Territory of Christmas Island","native":{"eng":{"official":"Territory of Christmas Island","common":"Christmas Island"}}},"tld":[".cx"],"cca2":"CX","ccn3":"162","cca3":"CXR","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["1"]},"capital":["Flying Fish Cove"],"altSpellings":["CX","Territory of Christmas Island"],"region":"Oceania","subregion":"Australia and New Zealand","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u064A\u0631\u0629 \u0643\u0631\u064A\u0633\u0645\u0627\u0633","common":"\u062C\u0632\u064A\u0631\u0629 \u0643\u0631\u064A\u0633\u0645\u0627\u0633"},"ces":{"official":"Teritorium V\xe1no\u010Dn\xedho ostrova","common":"V\xe1no\u010Dn\xed ostrov"},"deu":{"official":"Gebiet der Weihnachtsinsel","common":"Weihnachtsinsel"},"est":{"official":"J\xf5ulusaare ala","common":"J\xf5ulusaar"},"fin":{"official":"Joulusaaren alue","common":"Joulusaari"},"fra":{"official":"Territoire de l\'\xeele Christmas","common":"\xcele Christmas"},"hrv":{"official":"Teritorij Bo\u017Ei\u0107ni otok","common":"Bo\u017Ei\u0107ni otok"},"hun":{"official":"Kar\xe1csony-sziget","common":"Kar\xe1csony-sziget"},"ita":{"official":"Territorio di Christmas Island","common":"Isola di Natale"},"jpn":{"official":"\u30AF\u30EA\u30B9\u30DE\u30B9\u5CF6","common":"\u30AF\u30EA\u30B9\u30DE\u30B9\u5CF6"},"kor":{"official":"\uD06C\uB9AC\uC2A4\uB9C8\uC2A4 \uC12C","common":"\uD06C\uB9AC\uC2A4\uB9C8\uC2A4 \uC12C"},"nld":{"official":"Grondgebied van Christmas Island","common":"Christmaseiland"},"per":{"official":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u06A9\u0631\u06CC\u0633\u0645\u0633","common":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u06A9\u0631\u06CC\u0633\u0645\u0633"},"pol":{"official":"Wyspa Bo\u017Cego Narodzenia","common":"Wyspa Bo\u017Cego Narodzenia"},"por":{"official":"Territ\xf3rio da Ilha Christmas","common":"Ilha do Natal"},"rus":{"official":"\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430","common":"\u041E\u0441\u0442\u0440\u043E\u0432 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430"},"slk":{"official":"Terit\xf3rium Viano\u010Dn\xe9ho ostrova","common":"Viano\u010Dn\xfa ostrov"},"spa":{"official":"Territorio de la Isla de Navidad","common":"Isla de Navidad"},"srp":{"official":"Teritorija Bo\u017Ei\u0107no ostrvo","common":"Bo\u017Ei\u0107no Ostrvo"},"swe":{"official":"Jul\xf6n","common":"Jul\xf6n"},"tur":{"official":"Christmas Adas\u0131","common":"Christmas Adas\u0131"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u062C\u0632\u06CC\u0631\u06C1 \u06A9\u0631\u0633\u0645\u0633","common":"\u062C\u0632\u06CC\u0631\u06C1 \u06A9\u0631\u0633\u0645\u0633"},"zho":{"official":"\u5723\u8BDE\u5C9B","common":"\u5723\u8BDE\u5C9B"}},"latlng":[-10.5,105.66666666],"landlocked":false,"borders":[],"area":135,"flag":"\uD83C\uDDE8\uD83C\uDDFD","demonyms":{"eng":{"f":"Christmas Islander","m":"Christmas Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Cayman Islands","official":"Cayman Islands","native":{"eng":{"official":"Cayman Islands","common":"Cayman Islands"}}},"tld":[".ky"],"cca2":"KY","ccn3":"136","cca3":"CYM","cioc":"CAY","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"KYD":{"name":"Cayman Islands dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["345"]},"capital":["George Town"],"altSpellings":["KY"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0643\u0627\u064A\u0645\u0627\u0646","common":"\u062C\u0632\u0631 \u0643\u0627\u064A\u0645\u0627\u0646"},"ces":{"official":"Kajmansk\xe9 ostrovy","common":"Kajmansk\xe9 ostrovy"},"deu":{"official":"Cayman-Inseln","common":"Kaimaninseln"},"est":{"official":"Kaimanisaared","common":"Kaimanisaared"},"fin":{"official":"Caymansaaret","common":"Caymansaaret"},"fra":{"official":"\xceles Ca\xefmans","common":"\xceles Ca\xefmans"},"hrv":{"official":"Kajmanski otoci","common":"Kajmanski otoci"},"hun":{"official":"Kajm\xe1n-szigetek","common":"Kajm\xe1n-szigetek"},"ita":{"official":"Isole Cayman","common":"Isole Cayman"},"jpn":{"official":"\u30B1\u30A4\u30DE\u30F3\u8AF8\u5CF6","common":"\u30B1\u30A4\u30DE\u30F3\u8AF8\u5CF6"},"kor":{"official":"\uCF00\uC774\uB9E8 \uC81C\uB3C4","common":"\uCF00\uC774\uB9E8 \uC81C\uB3C4"},"nld":{"official":"Caymaneilanden","common":"Caymaneilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u06CC\u0645\u0646","common":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u06CC\u0645\u0646"},"pol":{"official":"Kajmany","common":"Kajmany"},"por":{"official":"Ilhas Cayman","common":"Ilhas Caim\xe3o"},"rus":{"official":"\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Kajmanie ostrovy","common":"Kajmanie ostrovy"},"spa":{"official":"Islas Caim\xe1n","common":"Islas Caim\xe1n"},"srp":{"official":"Kajmanska Ostrva","common":"Kajmanska Ostrva"},"swe":{"official":"Cayman\xf6arna","common":"Cayman\xf6arna"},"tur":{"official":"Cayman Adalar\u0131","common":"Cayman Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06CC\u0645\u06CC\u0646","common":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06CC\u0645\u06CC\u0646"},"zho":{"official":"\u5F00\u66FC\u7FA4\u5C9B","common":"\u5F00\u66FC\u7FA4\u5C9B"}},"latlng":[19.5,-80.5],"landlocked":false,"borders":[],"area":264,"flag":"\uD83C\uDDF0\uD83C\uDDFE","demonyms":{"eng":{"f":"Caymanian","m":"Caymanian"},"fra":{"f":"Ca\xefmanienne","m":"Ca\xefmanien"}}},{"name":{"common":"Cyprus","official":"Republic of Cyprus","native":{"ell":{"official":"\u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 \u039A\u03CD\u03C0\u03C1\u03BF\u03C2","common":"\u039A\u03CD\u03C0\u03C1\u03BF\u03C2"},"tur":{"official":"K\u0131br\u0131s Cumhuriyeti","common":"K\u0131br\u0131s"}}},"tld":[".cy"],"cca2":"CY","ccn3":"196","cca3":"CYP","cioc":"CYP","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["57"]},"capital":["Nicosia"],"altSpellings":["CY","K\xfdpros","K\u0131br\u0131s","Republic of Cyprus","\u039A\u03C5\u03C0\u03C1\u03B9\u03B1\u03BA\u03AE \u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1","K\u0131br\u0131s Cumhuriyeti"],"region":"Europe","subregion":"Southern Europe","languages":{"ell":"Greek","tur":"Turkish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0642\u0628\u0631\u0635","common":"\u0642\u0628\u0631\u0635"},"ces":{"official":"Kypersk\xe1 republika","common":"Kypr"},"deu":{"official":"Republik Zypern","common":"Zypern"},"est":{"official":"K\xfcprose Vabariik","common":"K\xfcpros"},"fin":{"official":"Kyproksen tasavalta","common":"Kypros"},"fra":{"official":"R\xe9publique de Chypre","common":"Chypre"},"hrv":{"official":"Republika Cipar","common":"Cipar"},"hun":{"official":"Ciprusi K\xf6zt\xe1rsas\xe1g","common":"Ciprus"},"ita":{"official":"Repubblica di Cipro","common":"Cipro"},"jpn":{"official":"\u30AD\u30D7\u30ED\u30B9\u5171\u548C\u56FD","common":"\u30AD\u30D7\u30ED\u30B9"},"kor":{"official":"\uD0A4\uD504\uB85C\uC2A4 \uACF5\uD654\uAD6D","common":"\uD0A4\uD504\uB85C\uC2A4"},"nld":{"official":"Republiek Cyprus","common":"Cyprus"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0642\u0628\u0631\u0633","common":"\u0642\u0650\u0628\u0631\u0650\u0633"},"pol":{"official":"Republika Cypryjska","common":"Cypr"},"por":{"official":"Rep\xfablica de Chipre","common":"Chipre"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0438\u043F\u0440","common":"\u041A\u0438\u043F\u0440"},"slk":{"official":"Cypersk\xe1 republika","common":"Cyprus"},"spa":{"official":"Rep\xfablica de Chipre","common":"Chipre"},"srp":{"official":"Republika Kipar","common":"Kipar"},"swe":{"official":"Republiken Cypern","common":"Cypern"},"tur":{"official":"K\u0131br\u0131s Cumhuriyeti","common":"K\u0131br\u0131s"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0642\u0628\u0631\u0635","common":"\u0642\u0628\u0631\u0635"},"zho":{"official":"\u585E\u6D66\u8DEF\u65AF\u5171\u548C\u56FD","common":"\u585E\u6D66\u8DEF\u65AF"}},"latlng":[35,33],"landlocked":false,"borders":[],"area":9251,"flag":"\uD83C\uDDE8\uD83C\uDDFE","demonyms":{"eng":{"f":"Cypriot","m":"Cypriot"},"fra":{"f":"Chypriote","m":"Chypriote"}}},{"name":{"common":"Czechia","official":"Czech Republic","native":{"ces":{"official":"\u010Cesk\xe1 republika","common":"\u010Cesko"},"slk":{"official":"\u010Cesk\xe1 republika","common":"\u010Cesko"}}},"tld":[".cz"],"cca2":"CZ","ccn3":"203","cca3":"CZE","cioc":"CZE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"CZK":{"name":"Czech koruna","symbol":"K\u010D"}},"idd":{"root":"+4","suffixes":["20"]},"capital":["Prague"],"altSpellings":["CZ","\u010Cesk\xe1 republika","\u010Cesko"],"region":"Europe","subregion":"Central Europe","languages":{"ces":"Czech","slk":"Slovak"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062A\u0634\u064A\u0643","common":"\u0627\u0644\u062A\u0634\u064A\u0643"},"ces":{"official":"\u010Cesk\xe1 republika","common":"\u010Cesko"},"deu":{"official":"Tschechische Republik","common":"Tschechien"},"est":{"official":"T\u0161ehhi Vabariik","common":"T\u0161ehhi"},"fin":{"official":"T\u0161ekin tasavalta","common":"T\u0161ekki"},"fra":{"official":"R\xe9publique tch\xe8que","common":"Tch\xe9quie"},"hrv":{"official":"\u010Ce\u0161ka","common":"\u010Ce\u0161ka"},"hun":{"official":"Cseh K\xf6zt\xe1rsas\xe1g","common":"Csehorsz\xe1g"},"ita":{"official":"Repubblica Ceca","common":"Cechia"},"jpn":{"official":"\u30C1\u30A7\u30B3\u5171\u548C\u56FD","common":"\u30C1\u30A7\u30B3"},"kor":{"official":"\uCCB4\uCF54","common":"\uCCB4\uCF54"},"nld":{"official":"Tsjechische Republiek","common":"Tsjechi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0686\u06A9","common":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0686\u06A9"},"pol":{"official":"Republika Czeska","common":"Czechy"},"por":{"official":"Rep\xfablica Checa","common":"Ch\xe9quia"},"rus":{"official":"\u0427\u0435\u0448\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0427\u0435\u0445\u0438\u044F"},"slk":{"official":"\u010Cesk\xe1 republika","common":"\u010Cesko"},"spa":{"official":"Rep\xfablica Checa","common":"Chequia"},"srp":{"official":"\u010Ce\u0161ka Republika","common":"\u010Ce\u0161ka"},"swe":{"official":"Republiken Tjeckien","common":"Tjeckien"},"tur":{"official":"\xe7ek Cumhuriyeti","common":"\xe7ekya"},"urd":{"official":"\u0686\u064A\u06A9 \u062C\u0645\u06C1\u0648\u0631\u064A\u06C1","common":"\u0686\u064A\u06A9"},"zho":{"official":"\u6377\u514B\u5171\u548C\u56FD","common":"\u6377\u514B"}},"latlng":[49.75,15.5],"landlocked":true,"borders":["AUT","DEU","POL","SVK"],"area":78865,"flag":"\uD83C\uDDE8\uD83C\uDDFF","demonyms":{"eng":{"f":"Czech","m":"Czech"},"fra":{"f":"Tch\xe8que","m":"Tch\xe8que"}}},{"name":{"common":"Germany","official":"Federal Republic of Germany","native":{"deu":{"official":"Bundesrepublik Deutschland","common":"Deutschland"}}},"tld":[".de"],"cca2":"DE","ccn3":"276","cca3":"DEU","cioc":"GER","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+4","suffixes":["9"]},"capital":["Berlin"],"altSpellings":["DE","Federal Republic of Germany","Bundesrepublik Deutschland"],"region":"Europe","subregion":"Western Europe","languages":{"deu":"German"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0644\u0645\u0627\u0646\u064A\u0627 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u0623\u0644\u0645\u0627\u0646\u064A\u0627"},"ces":{"official":"Spolkov\xe1 republika N\u011Bmecko","common":"N\u011Bmecko"},"deu":{"official":"Bundesrepublik Deutschland","common":"Deutschland"},"est":{"official":"Saksamaa Liitvabariik","common":"Saksamaa"},"fin":{"official":"Saksan liittotasavalta","common":"Saksa"},"fra":{"official":"R\xe9publique f\xe9d\xe9rale d\'Allemagne","common":"Allemagne"},"hrv":{"official":"Njema\u010Dka Federativna Republika","common":"Njema\u010Dka"},"hun":{"official":"N\xe9met Sz\xf6vets\xe9gi K\xf6zt\xe1rsas\xe1g","common":"N\xe9metorsz\xe1g"},"ita":{"official":"Repubblica federale di Germania","common":"Germania"},"jpn":{"official":"\u30C9\u30A4\u30C4\u9023\u90A6\u5171\u548C\u56FD","common":"\u30C9\u30A4\u30C4"},"kor":{"official":"\uB3C5\uC77C \uC5F0\uBC29 \uACF5\uD654\uAD6D","common":"\uB3C5\uC77C"},"nld":{"official":"Bondsrepubliek Duitsland","common":"Duitsland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u0644 \u0622\u0644\u0645\u0627\u0646","common":"\u0622\u0644\u0645\u0627\u0646"},"pol":{"official":"Republika Federalna Niemiec","common":"Niemcy"},"por":{"official":"Rep\xfablica Federal da Alemanha","common":"Alemanha"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F","common":"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F"},"slk":{"official":"Nemeck\xe1 spolkov\xe1 republika","common":"Nemecko"},"spa":{"official":"Rep\xfablica Federal de Alemania","common":"Alemania"},"srp":{"official":"Savezna Republika Nema\u010Dka","common":"Nema\u010Dka"},"swe":{"official":"F\xf6rbundsrepubliken Tyskland","common":"Tyskland"},"tur":{"official":"Almanya Federal Cumhuriyeti","common":"Almanya"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0631\u0645\u0646\u06CC","common":"\u062C\u0631\u0645\u0646\u06CC"},"zho":{"official":"\u5FB7\u610F\u5FD7\u8054\u90A6\u5171\u548C\u56FD","common":"\u5FB7\u56FD"}},"latlng":[51,9],"landlocked":false,"borders":["AUT","BEL","CZE","DNK","FRA","LUX","NLD","POL","CHE"],"area":357114,"flag":"\uD83C\uDDE9\uD83C\uDDEA","demonyms":{"eng":{"f":"German","m":"German"},"fra":{"f":"Allemande","m":"Allemand"}}},{"name":{"common":"Djibouti","official":"Republic of Djibouti","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u064A\u0628\u0648\u062A\u064A","common":"\u062C\u064A\u0628\u0648\u062A\u064A"},"fra":{"official":"R\xe9publique de Djibouti","common":"Djibouti"}}},"tld":[".dj"],"cca2":"DJ","ccn3":"262","cca3":"DJI","cioc":"DJI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"DJF":{"name":"Djiboutian franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["53"]},"capital":["Djibouti"],"altSpellings":["DJ","Jabuuti","Gabuuti","Republic of Djibouti","R\xe9publique de Djibouti","Gabuutih Ummuuno","Jamhuuriyadda Jabuuti"],"region":"Africa","subregion":"Eastern Africa","languages":{"ara":"Arabic","fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u064A\u0628\u0648\u062A\u064A","common":"\u062C\u064A\u0628\u0648\u062A\u064A"},"ces":{"official":"D\u017Eibutsk\xe1 republika","common":"D\u017Eibutsko"},"deu":{"official":"Republik Dschibuti","common":"Dschibuti"},"est":{"official":"Djibouti Vabariik","common":"Djibouti"},"fin":{"official":"Dijiboutin tasavalta","common":"Dijibouti"},"fra":{"official":"R\xe9publique de Djibouti","common":"Djibouti"},"hrv":{"official":"Republika D\u017Eibuti","common":"D\u017Eibuti"},"hun":{"official":"Dzsibuti K\xf6zt\xe1rsas\xe1g","common":"Dzsibuti"},"ita":{"official":"Repubblica di Gibuti","common":"Gibuti"},"jpn":{"official":"\u30B8\u30D6\u30C1\u5171\u548C\u56FD","common":"\u30B8\u30D6\u30C1"},"kor":{"official":"\uC9C0\uBD80\uD2F0 \uACF5\uD654\uAD6D","common":"\uC9C0\uBD80\uD2F0"},"nld":{"official":"Republiek Djibouti","common":"Djibouti"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062C\u06CC\u0628\u0648\u062A\u06CC","common":"\u062C\u06CC\u0628\u0648\u062A\u06CC"},"pol":{"official":"Republika D\u017Cibuti","common":"D\u017Cibuti"},"por":{"official":"Rep\xfablica do Djibouti","common":"Djibouti"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0414\u0436\u0438\u0431\u0443\u0442\u0438","common":"\u0414\u0436\u0438\u0431\u0443\u0442\u0438"},"slk":{"official":"\u01C5ibutsk\xe1 republika","common":"\u01C5ibutsko"},"spa":{"official":"Rep\xfablica de Djibouti","common":"Djibouti"},"srp":{"official":"Republika D\u017Eibuti","common":"D\u017Eibuti"},"swe":{"official":"Republiken Djibouti","common":"Djibouti"},"tur":{"official":"Cibuti Cumhuriyeti","common":"Cibuti"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0628\u0648\u062A\u06CC","common":"\u062C\u0628\u0648\u062A\u06CC"},"zho":{"official":"\u5409\u5E03\u63D0\u5171\u548C\u56FD","common":"\u5409\u5E03\u63D0"}},"latlng":[11.5,43],"landlocked":false,"borders":["ERI","ETH","SOM"],"area":23200,"flag":"\uD83C\uDDE9\uD83C\uDDEF","demonyms":{"eng":{"f":"Djibouti","m":"Djibouti"},"fra":{"f":"Djiboutienne","m":"Djiboutien"}}},{"name":{"common":"Dominica","official":"Commonwealth of Dominica","native":{"eng":{"official":"Commonwealth of Dominica","common":"Dominica"}}},"tld":[".dm"],"cca2":"DM","ccn3":"212","cca3":"DMA","cioc":"DMA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["767"]},"capital":["Roseau"],"altSpellings":["DM","Dominique","Wai\u2018tu kubuli","Commonwealth of Dominica"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0643\u0648\u0645\u0648\u0646\u0648\u0644\u062B \u062F\u0648\u0645\u064A\u0646\u064A\u0643\u0627","common":"\u062F\u0648\u0645\u064A\u0646\u064A\u0643\u0627"},"ces":{"official":"Dominik\xe1nsk\xe9 spole\u010Denstv\xed","common":"Dominika"},"deu":{"official":"Commonwealth von Dominica","common":"Dominica"},"est":{"official":"Dominica \xdchendus","common":"Dominica"},"fin":{"official":"Dominican liittovaltio","common":"Dominica"},"fra":{"official":"Commonwealth de la Dominique","common":"Dominique"},"hrv":{"official":"Zajednica Dominika","common":"Dominika"},"hun":{"official":"Dominikai K\xf6z\xf6ss\xe9g","common":"Dominikai K\xf6z\xf6ss\xe9g"},"ita":{"official":"Commonwealth di Dominica","common":"Dominica"},"jpn":{"official":"\u30C9\u30DF\u30CB\u30AB\u56FD","common":"\u30C9\u30DF\u30CB\u30AB\u56FD"},"kor":{"official":"\uB3C4\uBBF8\uB2C8\uCE74 \uACF5\uD654\uAD6D","common":"\uB3C4\uBBF8\uB2C8\uCE74 \uACF5\uD654\uAD6D"},"nld":{"official":"Gemenebest Dominica","common":"Dominica"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u0647\u0645\u0633\u0648\u062F \u062F\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0627","common":"\u062F\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0627"},"pol":{"official":"Wsp\xf3lnota Dominiki","common":"Dominika"},"por":{"official":"Comunidade da Dominica","common":"Dominica"},"rus":{"official":"\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0438","common":"\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430"},"slk":{"official":"Dominick\xe9 spolo\u010Denstvo","common":"Dominika"},"spa":{"official":"Mancomunidad de Dominica","common":"Dominica"},"srp":{"official":"Komonvelt Dominika","common":"Dominika"},"swe":{"official":"Samv\xe4ldet Dominica","common":"Dominica"},"tur":{"official":"Dominika Toplulu\u011Fu","common":"Dominika"},"urd":{"official":"\u062F\u0648\u0644\u062A\u0650 \u0645\u0634\u062A\u0631\u06A9\u06C1 \u0688\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0627","common":"\u0688\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0627"},"zho":{"official":"\u591A\u7C73\u5C3C\u52A0\u5171\u548C\u56FD","common":"\u591A\u7C73\u5C3C\u52A0"}},"latlng":[15.41666666,-61.33333333],"landlocked":false,"borders":[],"area":751,"flag":"\uD83C\uDDE9\uD83C\uDDF2","demonyms":{"eng":{"f":"Dominican","m":"Dominican"},"fra":{"f":"Dominiquaise","m":"Dominiquais"}}},{"name":{"common":"Denmark","official":"Kingdom of Denmark","native":{"dan":{"official":"Kongeriget Danmark","common":"Danmark"}}},"tld":[".dk"],"cca2":"DK","ccn3":"208","cca3":"DNK","cioc":"DEN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"DKK":{"name":"Danish krone","symbol":"kr"}},"idd":{"root":"+4","suffixes":["5"]},"capital":["Copenhagen"],"altSpellings":["DK","Danmark","Kingdom of Denmark","Kongeriget Danmark"],"region":"Europe","subregion":"Northern Europe","languages":{"dan":"Danish"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u062F\u0646\u0645\u0627\u0631\u0643","common":"\u0627\u0644\u062F\u0646\u0645\u0627\u0631\u0643"},"ces":{"official":"D\xe1nsk\xe9 kr\xe1lovstv\xed","common":"D\xe1nsko"},"deu":{"official":"K\xf6nigreich D\xe4nemark","common":"D\xe4nemark"},"est":{"official":"Taani Kuningriik","common":"Taani"},"fin":{"official":"Tanskan kuningaskunta","common":"Tanska"},"fra":{"official":"Royaume du Danemark","common":"Danemark"},"hrv":{"official":"Kraljevina Danska","common":"Danska"},"hun":{"official":"D\xe1n Kir\xe1lys\xe1g","common":"D\xe1nia"},"ita":{"official":"Regno di Danimarca","common":"Danimarca"},"jpn":{"official":"\u30C7\u30F3\u30DE\u30FC\u30AF\u738B\u56FD","common":"\u30C7\u30F3\u30DE\u30FC\u30AF"},"kor":{"official":"\uB374\uB9C8\uD06C \uC655\uAD6D","common":"\uB374\uB9C8\uD06C"},"nld":{"official":"Koninkrijk Denemarken","common":"Denemarken"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u062F\u0627\u0646\u0645\u0627\u0631\u06A9","common":"\u062F\u0627\u0646\u0645\u0627\u0631\u06A9"},"pol":{"official":"Kr\xf3lestwo Danii","common":"Dania"},"por":{"official":"Reino da Dinamarca","common":"Dinamarca"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0414\u0430\u043D\u0438\u044F","common":"\u0414\u0430\u043D\u0438\u044F"},"slk":{"official":"D\xe1nske kr\xe1\u013Eovstvo","common":"D\xe1nsko"},"spa":{"official":"Reino de Dinamarca","common":"Dinamarca"},"srp":{"official":"Kraljevina Danska","common":"Danska"},"swe":{"official":"Konungariket Danmark","common":"Danmark"},"tur":{"official":"Danimarka Krall\u0131\u011F\u0131","common":"Danimarka"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0688\u0646\u0645\u0627\u0631\u06A9","common":"\u0688\u0646\u0645\u0627\u0631\u06A9"},"zho":{"official":"\u4E39\u9EA6\u738B\u56FD","common":"\u4E39\u9EA6"}},"latlng":[56,10],"landlocked":false,"borders":["DEU"],"area":43094,"flag":"\uD83C\uDDE9\uD83C\uDDF0","demonyms":{"eng":{"f":"Danish","m":"Danish"},"fra":{"f":"Danoise","m":"Danois"}}},{"name":{"common":"Dominican Republic","official":"Dominican Republic","native":{"spa":{"official":"Rep\xfablica Dominicana","common":"Rep\xfablica Dominicana"}}},"tld":[".do"],"cca2":"DO","ccn3":"214","cca3":"DOM","cioc":"DOM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"DOP":{"name":"Dominican peso","symbol":"$"}},"idd":{"root":"+1","suffixes":["809","829","849"]},"capital":["Santo Domingo"],"altSpellings":["DO"],"region":"Americas","subregion":"Caribbean","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062F\u0648\u0645\u064A\u0646\u064A\u0643\u0627\u0646","common":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062F\u0648\u0645\u064A\u0646\u064A\u0643\u0627\u0646"},"ces":{"official":"Dominik\xe1nsk\xe1 republika","common":"Dominik\xe1nsk\xe1 republika"},"deu":{"official":"Dominikanische Republik","common":"Dominikanische Republik"},"est":{"official":"Dominikaani Vabariik","common":"Dominikaani Vabariik"},"fin":{"official":"Dominikaaninen tasavalta","common":"Dominikaaninen tasavalta"},"fra":{"official":"R\xe9publique Dominicaine","common":"R\xe9publique dominicaine"},"hrv":{"official":"Dominikanska Republika","common":"Dominikanska Republika"},"hun":{"official":"Dominikai K\xf6zt\xe1rsas\xe1g","common":"Dominikai K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica Dominicana","common":"Repubblica Dominicana"},"jpn":{"official":"\u30C9\u30DF\u30CB\u30AB\u5171\u548C\u56FD","common":"\u30C9\u30DF\u30CB\u30AB\u5171\u548C\u56FD"},"kor":{"official":"\uB3C4\uBBF8\uB2C8\uCE74 \uACF5\uD654\uAD6D","common":"\uB3C4\uBBF8\uB2C8\uCE74 \uACF5\uD654\uAD6D"},"nld":{"official":"Dominicaanse Republiek","common":"Dominicaanse Republiek"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0646","common":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0646"},"pol":{"official":"Republika Dominika\u0144ska","common":"Dominikana"},"por":{"official":"Rep\xfablica Dominicana","common":"Rep\xfablica Dominicana"},"rus":{"official":"\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430"},"slk":{"official":"Dominik\xe1nska republika","common":"Dominik\xe1nska republika"},"spa":{"official":"Rep\xfablica Dominicana","common":"Rep\xfablica Dominicana"},"srp":{"official":"Dominikanska Republika","common":"Dominikanska Republika"},"swe":{"official":"Dominikanska republiken","common":"Dominikanska republiken"},"tur":{"official":"Dominik Cumhuriyeti","common":"Dominik Cumhuriyeti"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0688\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0646","common":"\u0688\u0648\u0645\u06CC\u0646\u06CC\u06A9\u0646"},"zho":{"official":"\u591A\u660E\u5C3C\u52A0\u5171\u548C\u56FD","common":"\u591A\u660E\u5C3C\u52A0"}},"latlng":[19,-70.66666666],"landlocked":false,"borders":["HTI"],"area":48671,"flag":"\uD83C\uDDE9\uD83C\uDDF4","demonyms":{"eng":{"f":"Dominican","m":"Dominican"},"fra":{"f":"Dominicaine","m":"Dominicain"}}},{"name":{"common":"Algeria","official":"People\'s Democratic Republic of Algeria","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0634\u0639\u0628\u064A\u0629 \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A\u0629","common":"\u0627\u0644\u062C\u0632\u0627\u0626\u0631"}}},"tld":[".dz","\u0627\u0644\u062C\u0632\u0627\u0626\u0631."],"cca2":"DZ","ccn3":"012","cca3":"DZA","cioc":"ALG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"DZD":{"name":"Algerian dinar","symbol":"\u062F.\u062C"}},"idd":{"root":"+2","suffixes":["13"]},"capital":["Algiers"],"altSpellings":["DZ","Dzayer","Alg\xe9rie"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0634\u0639\u0628\u064A\u0629 \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A\u0629","common":"\u0627\u0644\u062C\u0632\u0627\u0626\u0631"},"ces":{"official":"Al\u017E\xedrsk\xe1 demokratick\xe1 a lidov\xe1 republika","common":"Al\u017E\xedrsko"},"deu":{"official":"Demokratische Volksrepublik Algerien","common":"Algerien"},"est":{"official":"Al\u017Eeeria Demokraatlik Rahvavabariik","common":"Al\u017Eeeria"},"fin":{"official":"Algerian demokraattinen kansantasavalta","common":"Algeria"},"fra":{"official":"R\xe9publique d\xe9mocratique et populaire d\'Alg\xe9rie","common":"Alg\xe9rie"},"hrv":{"official":"Narodna Demokratska Republika Al\u017Eir","common":"Al\u017Eir"},"hun":{"official":"Alg\xe9riai N\xe9pi Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Alg\xe9ria"},"ita":{"official":"Repubblica popolare democratica di Algeria","common":"Algeria"},"jpn":{"official":"\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2\u4EBA\u6C11\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2"},"kor":{"official":"\uC54C\uC81C\uB9AC \uC778\uBBFC \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uC54C\uC81C\uB9AC"},"nld":{"official":"Democratische Volksrepubliek Algerije","common":"Algerije"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u062E\u0644\u0642 \u0627\u0644\u062C\u0632\u0627\u06CC\u0631","common":"\u0627\u0644\u062C\u0632\u0627\u06CC\u0631"},"pol":{"official":"Algierska Republika Ludowo-Demokratyczna","common":"Algieria"},"por":{"official":"Rep\xfablica Argelina Democr\xe1tica e Popular","common":"Arg\xe9lia"},"rus":{"official":"\u041D\u0430\u0440\u043E\u0434\u043D\u043E-\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u043B\u0436\u0438\u0440","common":"\u0410\u043B\u0436\u0438\u0440"},"slk":{"official":"Al\u017E\xedrska demokratick\xe1 \u013Eudov\xe1 republika","common":"Al\u017E\xedrsko"},"spa":{"official":"Rep\xfablica Argelina Democr\xe1tica y Popular","common":"Argelia"},"srp":{"official":"Narodna Demokratska Republika Al\u017Eir","common":"Al\u017Eir"},"swe":{"official":"Demokratiska folkrepubliken Algeriet","common":"Algeriet"},"tur":{"official":"Cezayir Demokratik Halk Cumhuriyeti","common":"Cezayir"},"urd":{"official":"\u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0644\u062C\u0632\u0627\u0626\u0631","common":"\u0627\u0644\u062C\u0632\u0627\u0626\u0631"},"zho":{"official":"\u963F\u5C14\u53CA\u5229\u4E9A\u4EBA\u6C11\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u963F\u5C14\u53CA\u5229\u4E9A"}},"latlng":[28,3],"landlocked":false,"borders":["TUN","LBY","NER","ESH","MRT","MLI","MAR"],"area":2381741,"flag":"\uD83C\uDDE9\uD83C\uDDFF","demonyms":{"eng":{"f":"Algerian","m":"Algerian"},"fra":{"f":"Alg\xe9rienne","m":"Alg\xe9rien"}}},{"name":{"common":"Ecuador","official":"Republic of Ecuador","native":{"spa":{"official":"Rep\xfablica del Ecuador","common":"Ecuador"}}},"tld":[".ec"],"cca2":"EC","ccn3":"218","cca3":"ECU","cioc":"ECU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["93"]},"capital":["Quito"],"altSpellings":["EC","Republic of Ecuador","Rep\xfablica del Ecuador"],"region":"Americas","subregion":"South America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0625\u0643\u0648\u0627\u062F\u0648\u0631","common":"\u0627\u0644\u0625\u0643\u0648\u0627\u062F\u0648\u0631"},"ces":{"official":"Ekv\xe1dorsk\xe1 republika","common":"Ekv\xe1dor"},"deu":{"official":"Republik Ecuador","common":"Ecuador"},"est":{"official":"Ecuadori Vabariik","common":"Ecuador"},"fin":{"official":"Ecuadorin tasavalta","common":"Ecuador"},"fra":{"official":"R\xe9publique de l\'\xc9quateur","common":"\xc9quateur"},"hrv":{"official":"Republika Ekvador","common":"Ekvador"},"hun":{"official":"Ecuadori K\xf6zt\xe1rsas\xe1g","common":"Ecuador"},"ita":{"official":"Repubblica dell\'Ecuador","common":"Ecuador"},"jpn":{"official":"\u30A8\u30AF\u30A2\u30C9\u30EB\u5171\u548C\u56FD","common":"\u30A8\u30AF\u30A2\u30C9\u30EB"},"kor":{"official":"\uC5D0\uCF70\uB3C4\uB974 \uACF5\uD654\uAD6D","common":"\uC5D0\uCF70\uB3C4\uB974"},"nld":{"official":"Republiek Ecuador","common":"Ecuador"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u06A9\u0648\u0627\u062F\u0648\u0631","common":"\u0627\u06A9\u0648\u0627\u062F\u0648\u0631"},"pol":{"official":"Ekwador","common":"Ekwador"},"por":{"official":"Rep\xfablica do Equador","common":"Equador"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u042D\u043A\u0432\u0430\u0434\u043E\u0440","common":"\u042D\u043A\u0432\u0430\u0434\u043E\u0440"},"slk":{"official":"Ekv\xe1dorsk\xe1 republika","common":"Ekv\xe1dor"},"spa":{"official":"Rep\xfablica del Ecuador","common":"Ecuador"},"srp":{"official":"Republika Ekvador","common":"Ekvador"},"swe":{"official":"Republiken Ecuador","common":"Ecuador"},"tur":{"official":"Ekvador Cumhuriyeti","common":"Ekvador"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u06CC\u06A9\u0648\u0688\u0648\u0631","common":"\u0627\u06CC\u06A9\u0648\u0627\u0688\u0648\u0631"},"zho":{"official":"\u5384\u74DC\u591A\u5C14\u5171\u548C\u56FD","common":"\u5384\u74DC\u591A\u5C14"}},"latlng":[-2,-77.5],"landlocked":false,"borders":["COL","PER"],"area":276841,"flag":"\uD83C\uDDEA\uD83C\uDDE8","demonyms":{"eng":{"f":"Ecuadorean","m":"Ecuadorean"},"fra":{"f":"\xc9quatorienne","m":"\xc9quatorien"}}},{"name":{"common":"Egypt","official":"Arab Republic of Egypt","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0635\u0631 \u0627\u0644\u0639\u0631\u0628\u064A\u0629","common":"\u0645\u0635\u0631"}}},"tld":[".eg",".\u0645\u0635\u0631"],"cca2":"EG","ccn3":"818","cca3":"EGY","cioc":"EGY","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"EGP":{"name":"Egyptian pound","symbol":"\xa3"}},"idd":{"root":"+2","suffixes":["0"]},"capital":["Cairo"],"altSpellings":["EG","Arab Republic of Egypt"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0635\u0631 \u0627\u0644\u0639\u0631\u0628\u064A\u0629","common":"\u0645\u0635\u0631"},"ces":{"official":"Egyptsk\xe1 arabsk\xe1 republika","common":"Egypt"},"deu":{"official":"Arabische Republik \xc4gypten","common":"\xc4gypten"},"est":{"official":"Egiptuse Araabia Vabariik","common":"Egiptus"},"fin":{"official":"Egyptin arabitasavalta","common":"Egypti"},"fra":{"official":"R\xe9publique arabe d\'\xc9gypte","common":"\xc9gypte"},"hrv":{"official":"Arapska Republika Egipat","common":"Egipat"},"hun":{"official":"Egyiptomi Arab K\xf6zt\xe1rsas\xe1g","common":"Egyiptom"},"ita":{"official":"Repubblica araba d\'Egitto","common":"Egitto"},"jpn":{"official":"\u30A8\u30B8\u30D7\u30C8\u30FB\u30A2\u30E9\u30D6\u5171\u548C\u56FD","common":"\u30A8\u30B8\u30D7\u30C8"},"kor":{"official":"\uC774\uC9D1\uD2B8 \uC544\uB78D \uACF5\uD654\uAD6D","common":"\uC774\uC9D1\uD2B8"},"nld":{"official":"Arabische Republiek Egypte","common":"Egypte"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0639\u0631\u0628\u06CC \u0645\u0635\u0631","common":"\u0645\u0635\u0631"},"pol":{"official":"Arabska Republika Egiptu","common":"Egipt"},"por":{"official":"Rep\xfablica \xc1rabe do Egipto","common":"Egito"},"rus":{"official":"\u0410\u0440\u0430\u0431\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0415\u0433\u0438\u043F\u0435\u0442","common":"\u0415\u0433\u0438\u043F\u0435\u0442"},"slk":{"official":"Egyptsk\xe1 arabsk\xe1 republika","common":"Egypt"},"spa":{"official":"Rep\xfablica \xc1rabe de Egipto","common":"Egipto"},"srp":{"official":"Arapska Republika Egipat","common":"Egipat"},"swe":{"official":"Arabrepubliken Egypten","common":"Egypten"},"tur":{"official":"M\u0131s\u0131r Arap Cumhuriyeti","common":"M\u0131s\u0131r"},"urd":{"official":"\u0645\u0635\u0631\u06CC \u0639\u0631\u0628 \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1","common":"\u0645\u0635\u0631"},"zho":{"official":"\u963F\u62C9\u4F2F\u57C3\u53CA\u5171\u548C\u56FD","common":"\u57C3\u53CA"}},"latlng":[27,30],"landlocked":false,"borders":["ISR","LBY","PSE","SDN"],"area":1002450,"flag":"\uD83C\uDDEA\uD83C\uDDEC","demonyms":{"eng":{"f":"Egyptian","m":"Egyptian"},"fra":{"f":"\xc9gyptienne","m":"\xc9gyptien"}}},{"name":{"common":"Eritrea","official":"State of Eritrea","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0625\u0631\u064A\u062A\u0631\u064A\u0627","common":"\u0625\u0631\u064A\u062A\u0631\u064A\u0627"},"eng":{"official":"State of Eritrea","common":"Eritrea"},"tir":{"official":"\u1203\u1308\u1228 \u12A4\u122D\u1275\u122B","common":"\u12A4\u122D\u1275\u122B"}}},"tld":[".er"],"cca2":"ER","ccn3":"232","cca3":"ERI","cioc":"ERI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"ERN":{"name":"Eritrean nakfa","symbol":"Nfk"}},"idd":{"root":"+2","suffixes":["91"]},"capital":["Asmara"],"altSpellings":["ER","State of Eritrea","\u1203\u1308\u1228 \u12A4\u122D\u1275\u122B","Dawlat Iritriy\xe1","\u02BEErtr\u0101","Iritriy\u0101"],"region":"Africa","subregion":"Eastern Africa","languages":{"ara":"Arabic","eng":"English","tir":"Tigrinya"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0625\u0631\u064A\u062A\u0631\u064A\u0627","common":"\u0625\u0631\u064A\u062A\u0631\u064A\u0627"},"ces":{"official":"St\xe1t Eritrea","common":"Eritrea"},"deu":{"official":"Staat Eritrea","common":"Eritrea"},"est":{"official":"Eritrea Riik","common":"Eritrea"},"fin":{"official":"Eritrean valtio","common":"Eritrea"},"fra":{"official":"\xc9tat d\'\xc9rythr\xe9e","common":"\xc9rythr\xe9e"},"hrv":{"official":"Dr\u017Eava Eritreji","common":"Eritreja"},"hun":{"official":"Eritrea","common":"Eritrea"},"ita":{"official":"Stato di Eritrea","common":"Eritrea"},"jpn":{"official":"\u30A8\u30EA\u30C8\u30EA\u30A2\u56FD","common":"\u30A8\u30EA\u30C8\u30EA\u30A2"},"kor":{"official":"\uC5D0\uB9AC\uD2B8\uB808\uC544\uAD6D","common":"\uC5D0\uB9AC\uD2B8\uB808\uC544"},"nld":{"official":"Staat Eritrea","common":"Eritrea"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0631\u06CC\u062A\u0631\u0647","common":"\u0627\u0631\u06CC\u062A\u0631\u0647"},"pol":{"official":"Pa\u0144stwo Erytrea","common":"Erytrea"},"por":{"official":"Estado da Eritreia","common":"Eritreia"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u042D\u0440\u0438\u0442\u0440\u0435\u044F","common":"\u042D\u0440\u0438\u0442\u0440\u0435\u044F"},"slk":{"official":"Eritrejsk\xfd \u0161t\xe1t","common":"Eritrea"},"spa":{"official":"Estado de Eritrea","common":"Eritrea"},"srp":{"official":"Dr\u017Eava Eritreja","common":"Eritreja"},"swe":{"official":"Staten Eritrea","common":"Eritrea"},"tur":{"official":"Eritre Devleti","common":"Eritre"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0627\u0631\u062A\u0631\u06CC\u0627","common":"\u0627\u0631\u062A\u0631\u06CC\u0627"},"zho":{"official":"\u5384\u7ACB\u7279\u91CC\u4E9A","common":"\u5384\u7ACB\u7279\u91CC\u4E9A"}},"latlng":[15,39],"landlocked":false,"borders":["DJI","ETH","SDN"],"area":117600,"flag":"\uD83C\uDDEA\uD83C\uDDF7","demonyms":{"eng":{"f":"Eritrean","m":"Eritrean"},"fra":{"f":"\xc9rythr\xe9enne","m":"\xc9rythr\xe9en"}}},{"name":{"common":"Western Sahara","official":"Sahrawi Arab Democratic Republic","native":{"ber":{"official":"Sahrawi Arab Democratic Republic","common":"Western Sahara"},"mey":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0635\u062D\u0631\u0627\u0648\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629"},"spa":{"official":"Rep\xfablica \xc1rabe Saharaui Democr\xe1tica","common":"Sahara Occidental"}}},"tld":[".eh"],"cca2":"EH","ccn3":"732","cca3":"ESH","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"DZD":{"name":"Algerian dinar","symbol":"\u062F\u062C"},"MAD":{"name":"Moroccan dirham","symbol":"DH"},"MRU":{"name":"Mauritanian ouguiya","symbol":"UM"}},"idd":{"root":"+2","suffixes":["125288","125289"]},"capital":["El Aai\xfan"],"altSpellings":["EH","Tane\u1E93roft Tutrimt"],"region":"Africa","subregion":"Northern Africa","languages":{"ber":"Berber","mey":"Hassaniya","spa":"Spanish"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0635\u062D\u0631\u0627\u0648\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629"},"ces":{"official":"Z\xe1padn\xed Sahara","common":"Z\xe1padn\xed Sahara"},"deu":{"official":"Demokratische Arabische Republik Sahara","common":"Westsahara"},"est":{"official":"L\xe4\xe4ne-Sahara","common":"L\xe4\xe4ne-Sahara"},"fin":{"official":"L\xe4nsi-Sahara","common":"L\xe4nsi-Sahara"},"fra":{"official":"R\xe9publique arabe sahraouie d\xe9mocratique","common":"Sahara Occidental"},"hrv":{"official":"Sahrawi Arab Demokratska Republika","common":"Zapadna Sahara"},"hun":{"official":"Nyugat-Szahara","common":"Nyugat-Szahara"},"ita":{"official":"Repubblica Araba Saharawi Democratica","common":"Sahara Occidentale"},"jpn":{"official":"\u897F\u30B5\u30CF\u30E9","common":"\u897F\u30B5\u30CF\u30E9"},"kor":{"official":"\uC0AC\uD558\uB77C \uC544\uB78D \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uC11C\uC0AC\uD558\uB77C"},"nld":{"official":"Sahrawi Arabische Democratische Republiek","common":"Westelijke Sahara"},"per":{"official":"\u0635\u062D\u0631\u0627\u06CC \u063A\u0631\u0628\u06CC","common":"\u0635\u062D\u0631\u0627\u06CC \u063A\u0631\u0628\u06CC"},"pol":{"official":"Saharyjska Arabska Republika Demokratyczna","common":"Sahara Zachodnia"},"por":{"official":"Rep\xfablica \xc1rabe Saharaui Democr\xe1tica","common":"Saara Ocidental"},"rus":{"official":"Sahrawi \u0410\u0440\u0430\u0431\u0441\u043A\u0430\u044F \u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0417\u0430\u043F\u0430\u0434\u043D\u0430\u044F \u0421\u0430\u0445\u0430\u0440\u0430"},"slk":{"official":"Z\xe1padn\xe1 Sahara","common":"Z\xe1padn\xe1 Sahara"},"spa":{"official":"Rep\xfablica \xc1rabe Saharaui Democr\xe1tica","common":"Sahara Occidental"},"srp":{"official":"Saharska Arapska Demokratska Republika","common":"Zapadna Sahara"},"swe":{"official":"V\xe4stsahara","common":"V\xe4stsahara"},"tur":{"official":"Sahra Demokratik Arap Cumhuriyeti","common":"Sahra Demokratik Arap Cumhuriyeti"},"urd":{"official":"\u0635\u062D\u0631\u0627\u0648\u06CC \u0639\u0631\u0628 \u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1","common":"\u0645\u063A\u0631\u0628\u06CC \u0635\u062D\u0627\u0631\u0627"},"zho":{"official":"\u963F\u62C9\u4F2F\u6492\u54C8\u62C9\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u897F\u6492\u54C8\u62C9"}},"latlng":[24.5,-13],"landlocked":false,"borders":["DZA","MRT","MAR"],"area":266000,"flag":"\uD83C\uDDEA\uD83C\uDDED","demonyms":{"eng":{"f":"Sahrawi","m":"Sahrawi"},"fra":{"f":"","m":""}}},{"name":{"common":"Spain","official":"Kingdom of Spain","native":{"spa":{"official":"Reino de Espa\xf1a","common":"Espa\xf1a"}}},"tld":[".es"],"cca2":"ES","ccn3":"724","cca3":"ESP","cioc":"ESP","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["4"]},"capital":["Madrid"],"altSpellings":["ES","Kingdom of Spain","Reino de Espa\xf1a"],"region":"Europe","subregion":"Southern Europe","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0625\u0633\u0628\u0627\u0646\u064A\u0627","common":"\u0625\u0633\u0628\u0627\u0646\u064A\u0627"},"ces":{"official":"\u0160pan\u011Blsk\xe9 kr\xe1lovstv\xed","common":"\u0160pan\u011Blsko"},"deu":{"official":"K\xf6nigreich Spanien","common":"Spanien"},"est":{"official":"Hispaania Kuningriik","common":"Hispaania"},"fin":{"official":"Espanjan kuningaskunta","common":"Espanja"},"fra":{"official":"Royaume d\'Espagne","common":"Espagne"},"hrv":{"official":"Kraljevina \u0160panjolska","common":"\u0160panjolska"},"hun":{"official":"Spanyol Kir\xe1lys\xe1g","common":"Spanyolorsz\xe1g"},"ita":{"official":"Regno di Spagna","common":"Spagna"},"jpn":{"official":"\u30B9\u30DA\u30A4\u30F3","common":"\u30B9\u30DA\u30A4\u30F3"},"kor":{"official":"\uC5D0\uC2A4\uD30C\uB0D0 \uC655\uAD6D","common":"\uC2A4\uD398\uC778"},"nld":{"official":"Koninkrijk Spanje","common":"Spanje"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0627\u0633\u067E\u0627\u0646\u06CC\u0627","common":"\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"},"pol":{"official":"Kr\xf3lestwo Hiszpanii ","common":"Hiszpania"},"por":{"official":"Reino de Espanha","common":"Espanha"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0418\u0441\u043F\u0430\u043D\u0438\u044F","common":"\u0418\u0441\u043F\u0430\u043D\u0438\u044F"},"slk":{"official":"\u0160panielske kr\xe1\u013Eovstvo","common":"\u0160panielsko"},"spa":{"official":"Reino de Espa\xf1a","common":"Espa\xf1a"},"srp":{"official":"Kraljevina \u0160panija","common":"\u0160panija"},"swe":{"official":"Konungariket Spanien","common":"Spanien"},"tur":{"official":"\u0130spanya Krall\u0131\u011F\u0131","common":"\u0130spanya"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u06C1\u0633\u067E\u0627\u0646\u06CC\u06C1","common":"\u06C1\u0633\u067E\u0627\u0646\u06CC\u06C1"},"zho":{"official":"\u897F\u73ED\u7259\u738B\u56FD","common":"\u897F\u73ED\u7259"}},"latlng":[40,-4],"landlocked":false,"borders":["AND","FRA","GIB","PRT","MAR"],"area":505992,"flag":"\uD83C\uDDEA\uD83C\uDDF8","demonyms":{"eng":{"f":"Spanish","m":"Spanish"},"fra":{"f":"Espagnole","m":"Espagnol"}}},{"name":{"common":"Estonia","official":"Republic of Estonia","native":{"est":{"official":"Eesti Vabariik","common":"Eesti"}}},"tld":[".ee"],"cca2":"EE","ccn3":"233","cca3":"EST","cioc":"EST","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["72"]},"capital":["Tallinn"],"altSpellings":["EE","Eesti","Republic of Estonia","Eesti Vabariik"],"region":"Europe","subregion":"Northern Europe","languages":{"est":"Estonian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0625\u0633\u062A\u0648\u0646\u064A\u0627","common":"\u0625\u0633\u062A\u0648\u0646\u064A\u0627"},"ces":{"official":"Estonsk\xe1 republika","common":"Estonsko"},"deu":{"official":"Republik Estland","common":"Estland"},"est":{"official":"Eesti Vabariik","common":"Eesti"},"fin":{"official":"Viron tasavalta","common":"Viro"},"fra":{"official":"R\xe9publique d\'Estonie","common":"Estonie"},"hrv":{"official":"Republika Estonija","common":"Estonija"},"hun":{"official":"\xc9szt K\xf6zt\xe1rsas\xe1g","common":"\xc9sztorsz\xe1g"},"ita":{"official":"Repubblica di Estonia","common":"Estonia"},"jpn":{"official":"\u30A8\u30B9\u30C8\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30A8\u30B9\u30C8\u30CB\u30A2"},"kor":{"official":"\uC5D0\uC2A4\uD1A0\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uC5D0\uC2A4\uD1A0\uB2C8\uC544"},"nld":{"official":"Republiek Estland","common":"Estland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u062A\u0648\u0646\u06CC","common":"\u0627\u0650\u0633\u062A\u0648\u0646\u06CC"},"pol":{"official":"Republika Esto\u0144ska","common":"Estonia"},"por":{"official":"Rep\xfablica da Est\xf3nia","common":"Est\xf3nia"},"rus":{"official":"\u042D\u0441\u0442\u043E\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u042D\u0441\u0442\u043E\u043D\u0438\u044F"},"slk":{"official":"Est\xf3nska republika","common":"Est\xf3nsko"},"spa":{"official":"Rep\xfablica de Estonia","common":"Estonia"},"srp":{"official":"Republika Estonija","common":"Estonija"},"swe":{"official":"Republiken Estland","common":"Estland"},"tur":{"official":"Estonya Cumhuriyeti","common":"Estonya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0633\u0679\u0648\u0646\u06CC\u0627","common":"\u0627\u0633\u0679\u0648\u0646\u06CC\u0627"},"zho":{"official":"\u7231\u6C99\u5C3C\u4E9A\u5171\u548C\u56FD","common":"\u7231\u6C99\u5C3C\u4E9A"}},"latlng":[59,26],"landlocked":false,"borders":["LVA","RUS"],"area":45227,"flag":"\uD83C\uDDEA\uD83C\uDDEA","demonyms":{"eng":{"f":"Estonian","m":"Estonian"},"fra":{"f":"Estonienne","m":"Estonien"}}},{"name":{"common":"Ethiopia","official":"Federal Democratic Republic of Ethiopia","native":{"amh":{"official":"\u12E8\u12A2\u1275\u12EE\u1335\u12EB \u134C\u12F4\u122B\u120B\u12CA \u12F2\u121E\u12AD\u122B\u1232\u12EB\u12CA \u122A\u1350\u1265\u120A\u12AD","common":"\u12A2\u1275\u12EE\u1335\u12EB"}}},"tld":[".et"],"cca2":"ET","ccn3":"231","cca3":"ETH","cioc":"ETH","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"ETB":{"name":"Ethiopian birr","symbol":"Br"}},"idd":{"root":"+2","suffixes":["51"]},"capital":["Addis Ababa"],"altSpellings":["ET","\u02BE\u012Aty\u014D\u1E57\u1E57y\u0101","Federal Democratic Republic of Ethiopia","\u12E8\u12A2\u1275\u12EE\u1335\u12EB \u134C\u12F4\u122B\u120B\u12CA \u12F2\u121E\u12AD\u122B\u1232\u12EB\u12CA \u122A\u1350\u1265\u120A\u12AD"],"region":"Africa","subregion":"Eastern Africa","languages":{"amh":"Amharic"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0625\u062B\u064A\u0648\u0628\u064A\u0627 \u0627\u0644\u0641\u062F\u0631\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0648\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u0625\u062B\u064A\u0648\u0628\u064A\u0627"},"ces":{"official":"Etiopsk\xe1 federativn\xed demokratick\xe1 republika","common":"Etiopie"},"deu":{"official":"Demokratische Bundesrepublik \xc4thiopien","common":"\xc4thiopien"},"est":{"official":"Etioopia Demokraatlik Liitvabariik","common":"Etioopia"},"fin":{"official":"Etiopian demokraattinen liittotasavalta","common":"Etiopia"},"fra":{"official":"R\xe9publique f\xe9d\xe9rale d\xe9mocratique d\'\xc9thiopie","common":"\xc9thiopie"},"hrv":{"official":"Savezna Demokratska Republika Etiopija","common":"Etiopija"},"hun":{"official":"Eti\xf3p Sz\xf6vets\xe9gi Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Eti\xf3pia"},"ita":{"official":"Repubblica federale democratica di Etiopia","common":"Etiopia"},"jpn":{"official":"\u30A8\u30C1\u30AA\u30D4\u30A2\u9023\u90A6\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30A8\u30C1\u30AA\u30D4\u30A2"},"kor":{"official":"\uC5D0\uD2F0\uC624\uD53C\uC544 \uC5F0\uBC29 \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uC5D0\uD2F0\uC624\uD53C\uC544"},"nld":{"official":"Federale Democratische Republiek Ethiopi\xeb","common":"Ethiopi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u0644 \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u0627\u062A\u06CC\u0648\u067E\u06CC","common":"\u0627\u0650\u062A\u06CC\u0648\u067E\u06CC"},"pol":{"official":"Federalna Demokratyczna Republika Etiopii","common":"Etiopia"},"por":{"official":"Rep\xfablica Federal Democr\xe1tica da Eti\xf3pia","common":"Eti\xf3pia"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u042D\u0444\u0438\u043E\u043F\u0438\u044F","common":"\u042D\u0444\u0438\u043E\u043F\u0438\u044F"},"slk":{"official":"Eti\xf3pska federat\xedvna demokratick\xe1 republika","common":"Eti\xf3pia"},"spa":{"official":"Rep\xfablica Democr\xe1tica Federal de Etiop\xeda","common":"Etiop\xeda"},"srp":{"official":"Savezna Demokratska Republika Etiopija","common":"Etiopija"},"swe":{"official":"Demokratiska f\xf6rbundsrepubliken Etiopien","common":"Etiopien"},"tur":{"official":"Etiyopya Federal Demokratik Cumhuriyeti","common":"Etiyopya"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u06CC\u062A\u06BE\u0648\u067E\u06CC\u0627","common":"\u0627\u06CC\u062A\u06BE\u0648\u067E\u06CC\u0627"},"zho":{"official":"\u57C3\u585E\u4FC4\u6BD4\u4E9A\u8054\u90A6\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u57C3\u585E\u4FC4\u6BD4\u4E9A"}},"latlng":[8,38],"landlocked":true,"borders":["DJI","ERI","KEN","SOM","SSD","SDN"],"area":1104300,"flag":"\uD83C\uDDEA\uD83C\uDDF9","demonyms":{"eng":{"f":"Ethiopian","m":"Ethiopian"},"fra":{"f":"\xc9thiopienne","m":"\xc9thiopien"}}},{"name":{"common":"Finland","official":"Republic of Finland","native":{"fin":{"official":"Suomen tasavalta","common":"Suomi"},"swe":{"official":"Republiken Finland","common":"Finland"}}},"tld":[".fi"],"cca2":"FI","ccn3":"246","cca3":"FIN","cioc":"FIN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["58"]},"capital":["Helsinki"],"altSpellings":["FI","Suomi","Republic of Finland","Suomen tasavalta","Republiken Finland"],"region":"Europe","subregion":"Northern Europe","languages":{"fin":"Finnish","swe":"Swedish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0641\u0646\u0644\u0646\u062F\u0627","common":"\u0641\u0646\u0644\u0646\u062F\u0627"},"ces":{"official":"Finsk\xe1 republika","common":"Finsko"},"deu":{"official":"Republik Finnland","common":"Finnland"},"est":{"official":"Soome Vabariik","common":"Soome"},"fin":{"official":"Suomen tasavalta","common":"Suomi"},"fra":{"official":"R\xe9publique de Finlande","common":"Finlande"},"hrv":{"official":"Republika Finska","common":"Finska"},"hun":{"official":"Finn K\xf6zt\xe1rsas\xe1g","common":"Finnorsz\xe1g"},"ita":{"official":"Repubblica di Finlandia","common":"Finlandia"},"jpn":{"official":"\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u5171\u548C\u56FD","common":"\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9"},"kor":{"official":"\uD540\uB780\uB4DC \uACF5\uD654\uAD6D","common":"\uD540\uB780\uB4DC"},"nld":{"official":"Republiek Finland","common":"Finland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u0646\u0644\u0627\u0646\u062F","common":"\u0641\u0646\u0644\u0627\u0646\u062F"},"pol":{"official":"Republika Finlandii","common":"Finlandia"},"por":{"official":"Rep\xfablica da Finl\xe2ndia","common":"Finl\xe2ndia"},"rus":{"official":"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"},"slk":{"official":"F\xednska republika","common":"F\xednsko"},"spa":{"official":"Rep\xfablica de Finlandia","common":"Finlandia"},"srp":{"official":"Republika Finska","common":"Finska"},"swe":{"official":"Republiken Finland","common":"Finland"},"tur":{"official":"Finlandiya Cumhuriyeti","common":"Finlandiya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0641\u0646 \u0644\u06CC\u0646\u0688","common":"\u0641\u0646 \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u82AC\u5170\u5171\u548C\u56FD","common":"\u82AC\u5170"}},"latlng":[64,26],"landlocked":false,"borders":["NOR","SWE","RUS"],"area":338424,"flag":"\uD83C\uDDEB\uD83C\uDDEE","demonyms":{"eng":{"f":"Finnish","m":"Finnish"},"fra":{"f":"Finlandaise","m":"Finlandais"}}},{"name":{"common":"Fiji","official":"Republic of Fiji","native":{"eng":{"official":"Republic of Fiji","common":"Fiji"},"fij":{"official":"Matanitu Tugalala o Viti","common":"Viti"},"hif":{"official":"\u0930\u093F\u092A\u092C\u094D\u0932\u093F\u0915 \u0911\u092B \u092B\u0940\u091C\u0940","common":"\u092B\u093F\u091C\u0940"}}},"tld":[".fj"],"cca2":"FJ","ccn3":"242","cca3":"FJI","cioc":"FIJ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"FJD":{"name":"Fijian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["79"]},"capital":["Suva"],"altSpellings":["FJ","Viti","Republic of Fiji","Matanitu ko Viti","Fij\u012B Ga\u1E47ar\u0101jya"],"region":"Oceania","subregion":"Melanesia","languages":{"eng":"English","fij":"Fijian","hif":"Fiji Hindi"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u0632\u0631 \u0641\u064A\u062C\u064A","common":"\u0641\u064A\u062C\u064A"},"ces":{"official":"Republika Fid\u017Eijsk\xfdch ostrov\u016F","common":"Fid\u017Ei"},"deu":{"official":"Republik Fidschi","common":"Fidschi"},"est":{"official":"Fid\u017Ei Vabariik","common":"Fid\u017Ei"},"fin":{"official":"Fid\u017Ein tasavalta","common":"Fid\u017Ei"},"fra":{"official":"R\xe9publique des Fidji","common":"Fidji"},"hrv":{"official":"Republika Fid\u017Ei","common":"Fi\u0111i"},"hun":{"official":"Fidzsi-szigeteki K\xf6zt\xe1rsas\xe1g","common":"Fidzsi-szigetek"},"ita":{"official":"Repubblica di Figi","common":"Figi"},"jpn":{"official":"\u30D5\u30A3\u30B8\u30FC\u8AF8\u5CF6\u5171\u548C\u56FD","common":"\u30D5\u30A3\u30B8\u30FC"},"kor":{"official":"\uD53C\uC9C0 \uACF5\uD654\uAD6D","common":"\uD53C\uC9C0"},"nld":{"official":"Republiek Fiji","common":"Fiji"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062C\u0632\u0627\u06CC\u0631 \u0641\u06CC\u062C\u06CC","common":"\u0641\u06CC\u062C\u06CC"},"pol":{"official":"Republika Fid\u017Ci","common":"Fid\u017Ci"},"por":{"official":"Rep\xfablica de Fiji","common":"Fiji"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0424\u0438\u0434\u0436\u0438","common":"\u0424\u0438\u0434\u0436\u0438"},"slk":{"official":"Fi\u01C6ijsk\xe1 republika","common":"Fi\u01C6i"},"spa":{"official":"Rep\xfablica de Fiji","common":"Fiyi"},"srp":{"official":"Republika Fid\u017Ei","common":"Fid\u017Ei"},"swe":{"official":"Republiken Fiji","common":"Fiji"},"tur":{"official":"Fiji Cumhuriyeti","common":"Fiji"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0641\u062C\u06CC","common":"\u0641\u062C\u06CC"},"zho":{"official":"\u6590\u6D4E\u5171\u548C\u56FD","common":"\u6590\u6D4E"}},"latlng":[-18,175],"landlocked":false,"borders":[],"area":18272,"flag":"\uD83C\uDDEB\uD83C\uDDEF","demonyms":{"eng":{"f":"Fijian","m":"Fijian"},"fra":{"f":"Fidjienne","m":"Fidjien"}}},{"name":{"common":"Falkland Islands","official":"Falkland Islands","native":{"eng":{"official":"Falkland Islands","common":"Falkland Islands"}}},"tld":[".fk"],"cca2":"FK","ccn3":"238","cca3":"FLK","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"FKP":{"name":"Falkland Islands pound","symbol":"\xa3"}},"idd":{"root":"+5","suffixes":["00"]},"capital":["Stanley"],"altSpellings":["FK","Islas Malvinas","Falkland Islands (Malvinas)"],"region":"Americas","subregion":"South America","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062F","common":"\u062C\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062F"},"ces":{"official":"Falklandsk\xe9 ostrovy","common":"Falklandy"},"deu":{"official":"Falklandinseln","common":"Falklandinseln"},"est":{"official":"Falklandi saared","common":"Falklandi saared"},"fin":{"official":"Falkandinsaaret","common":"Falkandinsaaret"},"fra":{"official":"\xceles Malouines","common":"\xceles Malouines"},"hrv":{"official":"Falklandski otoci","common":"Falklandski Otoci"},"hun":{"official":"Falkland-szigetek","common":"Falkland-szigetek"},"ita":{"official":"Isole Falkland","common":"Isole Falkland o Isole Malvine"},"jpn":{"official":"\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\uFF08\u30DE\u30EB\u30D3\u30CA\u30B9\uFF09\u8AF8\u5CF6","common":"\u30D5\u30A9\u30FC\u30AF\u30E9\u30F3\u30C9\u8AF8\u5CF6"},"kor":{"official":"\uD3EC\uD074\uB79C\uB4DC \uC81C\uB3C4","common":"\uD3EC\uD074\uB79C\uB4DC \uC81C\uB3C4"},"nld":{"official":"Falkland eilanden","common":"Falklandeilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0641\u0627\u0644\u06A9\u0644\u0646\u062F","common":"\u062C\u0632\u0627\u06CC\u0631 \u0641\u0627\u0644\u06A9\u0644\u0646\u062F"},"pol":{"official":"Falklandy","common":"Falklandy"},"por":{"official":"Ilhas Malvinas","common":"Ilhas Malvinas"},"rus":{"official":"\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0424\u043E\u043B\u043A\u043B\u0435\u043D\u0434\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Falklandsk\xe9 ostrovy","common":"Falklandy"},"spa":{"official":"islas Malvinas","common":"Islas Malvinas"},"srp":{"official":"Folklandska ostrva","common":"Folklandska ostrva"},"swe":{"official":"Falklands\xf6arna","common":"Falklands\xf6arna"},"tur":{"official":"Falkland (Malvina) Adalar\u0131","common":"Falkland (Malvina) Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u0641\u0627\u06A9\u0644\u06CC\u0646\u0688","common":"\u062C\u0632\u0627\u0626\u0631 \u0641\u0627\u06A9\u0644\u06CC\u0646\u0688"},"zho":{"official":"\u798F\u514B\u5170\u7FA4\u5C9B","common":"\u798F\u514B\u5170\u7FA4\u5C9B"}},"latlng":[-51.75,-59],"landlocked":false,"borders":[],"area":12173,"flag":"\uD83C\uDDEB\uD83C\uDDF0","demonyms":{"eng":{"f":"Falkland Islander","m":"Falkland Islander"},"fra":{"f":"Malouinne","m":"Malouin"}}},{"name":{"common":"France","official":"French Republic","native":{"fra":{"official":"R\xe9publique fran\xe7aise","common":"France"}}},"tld":[".fr"],"cca2":"FR","ccn3":"250","cca3":"FRA","cioc":"FRA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["3"]},"capital":["Paris"],"altSpellings":["FR","French Republic","R\xe9publique fran\xe7aise"],"region":"Europe","subregion":"Western Europe","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629","common":"\u0641\u0631\u0646\u0633\u0627"},"ces":{"official":"Francouzsk\xe1 republika","common":"Francie"},"deu":{"official":"Franz\xf6sische Republik","common":"Frankreich"},"est":{"official":"Prantsuse Vabariik","common":"Prantsusmaa"},"fin":{"official":"Ranskan tasavalta","common":"Ranska"},"fra":{"official":"R\xe9publique fran\xe7aise","common":"France"},"hrv":{"official":"Francuska Republika","common":"Francuska"},"hun":{"official":"Francia K\xf6zt\xe1rsas\xe1g","common":"Franciaorsz\xe1g"},"ita":{"official":"Repubblica francese","common":"Francia"},"jpn":{"official":"\u30D5\u30E9\u30F3\u30B9\u5171\u548C\u56FD","common":"\u30D5\u30E9\u30F3\u30B9"},"kor":{"official":"\uD504\uB791\uC2A4 \uACF5\uD654\uAD6D","common":"\uD504\uB791\uC2A4"},"nld":{"official":"Franse Republiek","common":"Frankrijk"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u0631\u0627\u0646\u0633\u0647","common":"\u0641\u0631\u0627\u0646\u0633\u0647"},"pol":{"official":"Republika Francuska","common":"Francja"},"por":{"official":"Rep\xfablica Francesa","common":"Fran\xe7a"},"rus":{"official":"\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0424\u0440\u0430\u043D\u0446\u0438\u044F"},"slk":{"official":"Franc\xfazska republika","common":"Franc\xfazsko"},"spa":{"official":"Rep\xfablica franc\xe9s","common":"Francia"},"srp":{"official":"Republika Francuska","common":"Francuska"},"swe":{"official":"Republiken Frankrike","common":"Frankrike"},"tur":{"official":"Fransa Cumhuriyeti","common":"Fransa"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0641\u0631\u0627\u0646\u0633","common":"\u0641\u0631\u0627\u0646\u0633"},"zho":{"official":"\u6CD5\u5170\u897F\u5171\u548C\u56FD","common":"\u6CD5\u56FD"}},"latlng":[46,2],"landlocked":false,"borders":["AND","BEL","DEU","ITA","LUX","MCO","ESP","CHE"],"area":551695,"flag":"\uD83C\uDDEB\uD83C\uDDF7","demonyms":{"eng":{"f":"French","m":"French"},"fra":{"f":"Fran\xe7aise","m":"Fran\xe7ais"}}},{"name":{"common":"Faroe Islands","official":"Faroe Islands","native":{"dan":{"official":"F\xe6r\xf8erne","common":"F\xe6r\xf8erne"},"fao":{"official":"F\xf8royar","common":"F\xf8royar"}}},"tld":[".fo"],"cca2":"FO","ccn3":"234","cca3":"FRO","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"DKK":{"name":"Danish krone","symbol":"kr"},"FOK":{"name":"Faroese kr\xf3na","symbol":"kr"}},"idd":{"root":"+2","suffixes":["98"]},"capital":["T\xf3rshavn"],"altSpellings":["FO","F\xf8royar","F\xe6r\xf8erne","Faeroe Islands"],"region":"Europe","subregion":"Northern Europe","languages":{"dan":"Danish","fao":"Faroese"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0641\u0627\u0631\u0648","common":"\u062C\u0632\u0631 \u0641\u0627\u0631\u0648"},"ces":{"official":"Faersk\xe9 ostrovy","common":"Faersk\xe9 ostrovy"},"deu":{"official":"F\xe4r\xf6er","common":"F\xe4r\xf6er-Inseln"},"est":{"official":"F\xe4\xe4ri saared","common":"F\xe4\xe4ri saared"},"fin":{"official":"F\xe4rsaaret","common":"F\xe4rsaaret"},"fra":{"official":"\xceles F\xe9ro\xe9","common":"\xceles F\xe9ro\xe9"},"hrv":{"official":"Farski Otoci","common":"Farski Otoci"},"hun":{"official":"Fer\xf6er","common":"Fer\xf6er"},"ita":{"official":"Isole Faroe","common":"Isole Far Oer"},"jpn":{"official":"\u30D5\u30A7\u30ED\u30FC\u8AF8\u5CF6","common":"\u30D5\u30A7\u30ED\u30FC\u8AF8\u5CF6"},"kor":{"official":"\uD398\uB85C \uC81C\uB3C4","common":"\uD398\uB85C \uC81C\uB3C4"},"nld":{"official":"Faer\xf6er","common":"Faer\xf6er"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0641\u0627\u0631\u0648\u0626\u0647","common":"\u062C\u0632\u0627\u06CC\u0631 \u0641\u0627\u0631\u0648\u0626\u0647"},"pol":{"official":"Wyspy Owcze","common":"Wyspy Owcze"},"por":{"official":"Ilhas Faroe","common":"Ilhas Faro\xe9"},"rus":{"official":"\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Faersk\xe9 ostrovy","common":"Faersk\xe9 ostrovy"},"spa":{"official":"Islas Feroe","common":"Islas Faroe"},"srp":{"official":"Farska Ostrva","common":"Farska Ostrva"},"swe":{"official":"F\xe4r\xf6arna","common":"F\xe4r\xf6arna"},"tur":{"official":"Faroe Adalar\u0131","common":"Faroe Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u0641\u0627\u0631\u0648","common":"\u062C\u0632\u0627\u0626\u0631 \u0641\u0627\u0631\u0648"},"zho":{"official":"\u6CD5\u7F57\u7FA4\u5C9B","common":"\u6CD5\u7F57\u7FA4\u5C9B"}},"latlng":[62,-7],"landlocked":false,"borders":[],"area":1393,"flag":"\uD83C\uDDEB\uD83C\uDDF4","demonyms":{"eng":{"f":"Faroese","m":"Faroese"},"fra":{"f":"F\xe9ro\xefenne","m":"F\xe9ro\xefen"}}},{"name":{"common":"Micronesia","official":"Federated States of Micronesia","native":{"eng":{"official":"Federated States of Micronesia","common":"Micronesia"}}},"tld":[".fm"],"cca2":"FM","ccn3":"583","cca3":"FSM","cioc":"FSM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{},"idd":{"root":"+6","suffixes":["91"]},"capital":["Palikir"],"altSpellings":["FM","Federated States of Micronesia","Micronesia, Federated States of"],"region":"Oceania","subregion":"Micronesia","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0648\u0644\u0627\u064A\u0627\u062A \u0645\u064A\u0643\u0631\u0648\u0646\u064A\u0633\u064A\u0627 \u0627\u0644\u0645\u062A\u062D\u062F\u0629","common":"\u0645\u064A\u0643\u0631\u0648\u0646\u064A\u0633\u064A\u0627"},"ces":{"official":"Federativn\xed st\xe1ty Mikron\xe9sie","common":"Mikron\xe9sie"},"deu":{"official":"F\xf6derierte Staaten von Mikronesien","common":"Mikronesien"},"est":{"official":"Mikroneesia Liiduriigid","common":"Mikroneesia"},"fin":{"official":"Mikronesian liittovaltio","common":"Mikronesia"},"fra":{"official":"\xc9tats f\xe9d\xe9r\xe9s de Micron\xe9sie","common":"Micron\xe9sie"},"hrv":{"official":"Savezne Dr\u017Eave Mikronezije","common":"Mikronezija"},"hun":{"official":"Mikron\xe9ziai Sz\xf6vets\xe9gi \xc1llamok","common":"Mikron\xe9ziai Sz\xf6vets\xe9gi \xc1llamok"},"ita":{"official":"Stati federati di Micronesia","common":"Micronesia"},"jpn":{"official":"\u30DF\u30AF\u30ED\u30CD\u30B7\u30A2\u9023\u90A6","common":"\u30DF\u30AF\u30ED\u30CD\u30B7\u30A2"},"kor":{"official":"\uBBF8\uD06C\uB85C\uB124\uC2DC\uC544 \uC5F0\uBC29","common":"\uBBF8\uD06C\uB85C\uB124\uC2DC\uC544"},"nld":{"official":"Federale Staten van Micronesia","common":"Micronesi\xeb"},"per":{"official":"\u0627\u06CC\u0627\u0644\u0627\u062A \u0641\u062F\u0631\u0627\u0644 \u0645\u06CC\u06A9\u0631\u0648\u0646\u0632\u06CC","common":"\u0645\u06CC\u06A9\u0631\u0648\u0646\u0632\u06CC"},"pol":{"official":"Sfederowane Stany Mikronezji","common":"Mikronezja"},"por":{"official":"Estados Federados da Micron\xe9sia","common":"Micron\xe9sia"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u041C\u0438\u043A\u0440\u043E\u043D\u0435\u0437\u0438\u0438","common":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u041C\u0438\u043A\u0440\u043E\u043D\u0435\u0437\u0438\u0438"},"slk":{"official":"Mikron\xe9zske federat\xedvne \u0161t\xe1ty","common":"Mikron\xe9zia"},"spa":{"official":"Estados Federados de Micronesia","common":"Micronesia"},"srp":{"official":"Savezne Dr\u017Eave Mikronezije","common":"Mikronezija"},"swe":{"official":"Mikronesiska federationen","common":"Mikronesiska federationen"},"tur":{"official":"Mikronezya Federal Devletleri","common":"Mikronezya"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u06C1\u0627\u0626\u06D2 \u0648\u0641\u0627\u0642\u06CC\u06C1 \u0645\u0627\u0626\u06A9\u0631\u0648\u0646\u06CC\u0634\u06CC\u0627","common":"\u0645\u0627\u0626\u06A9\u0631\u0648\u0646\u06CC\u0634\u06CC\u0627"},"zho":{"official":"\u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A\u8054\u90A6","common":"\u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A"}},"latlng":[6.91666666,158.25],"landlocked":false,"borders":[],"area":702,"flag":"\uD83C\uDDEB\uD83C\uDDF2","demonyms":{"eng":{"f":"Micronesian","m":"Micronesian"},"fra":{"f":"Micron\xe9sienne","m":"Micron\xe9sien"}}},{"name":{"common":"Gabon","official":"Gabonese Republic","native":{"fra":{"official":"R\xe9publique gabonaise","common":"Gabon"}}},"tld":[".ga"],"cca2":"GA","ccn3":"266","cca3":"GAB","cioc":"GAB","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["41"]},"capital":["Libreville"],"altSpellings":["GA","Gabonese Republic","R\xe9publique Gabonaise"],"region":"Africa","subregion":"Middle Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u063A\u0627\u0628\u0648\u0646","common":"\u0627\u0644\u063A\u0627\u0628\u0648\u0646"},"ces":{"official":"Gabonsk\xe1 republika","common":"Gabon"},"deu":{"official":"Gabunische Republik","common":"Gabun"},"est":{"official":"Gaboni Vabariik","common":"Gabon"},"fin":{"official":"Gabonin tasavalta","common":"Gabon"},"fra":{"official":"R\xe9publique gabonaise","common":"Gabon"},"hrv":{"official":"Gabon Republika","common":"Gabon"},"hun":{"official":"Gaboni K\xf6zt\xe1rsas\xe1g","common":"Gabon"},"ita":{"official":"Repubblica gabonese","common":"Gabon"},"jpn":{"official":"\u30AC\u30DC\u30F3\u5171\u548C\u56FD","common":"\u30AC\u30DC\u30F3"},"kor":{"official":"\uAC00\uBD09 \uACF5\uD654\uAD6D","common":"\uAC00\uBD09"},"nld":{"official":"Republiek Gabon","common":"Gabon"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06AF\u0627\u0628\u064F\u0646","common":"\u06AF\u0627\u0628\u0646"},"pol":{"official":"Republika Gabo\u0144ska","common":"Gabon"},"por":{"official":"Rep\xfablica do Gab\xe3o","common":"Gab\xe3o"},"rus":{"official":"\u0413\u0430\u0431\u043E\u043D\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0413\u0430\u0431\u043E\u043D"},"slk":{"official":"Gabonsk\xe1 republika","common":"Gabon"},"spa":{"official":"Rep\xfablica de Gab\xf3n","common":"Gab\xf3n"},"srp":{"official":"Gabonska Republika","common":"Gabon"},"swe":{"official":"Republiken Gabon","common":"Gabon"},"tur":{"official":"Gabon Cumhuriyeti","common":"Gabon"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u06CC\u0628\u0648\u0646","common":"\u06AF\u06CC\u0628\u0648\u0646"},"zho":{"official":"\u52A0\u84EC\u5171\u548C\u56FD","common":"\u52A0\u84EC"}},"latlng":[-1,11.75],"landlocked":false,"borders":["CMR","COG","GNQ"],"area":267668,"flag":"\uD83C\uDDEC\uD83C\uDDE6","demonyms":{"eng":{"f":"Gabonese","m":"Gabonese"},"fra":{"f":"Gabonaise","m":"Gabonais"}}},{"name":{"common":"United Kingdom","official":"United Kingdom of Great Britain and Northern Ireland","native":{"eng":{"official":"United Kingdom of Great Britain and Northern Ireland","common":"United Kingdom"}}},"tld":[".uk"],"cca2":"GB","ccn3":"826","cca3":"GBR","cioc":"GBR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"GBP":{"name":"British pound","symbol":"\xa3"}},"idd":{"root":"+4","suffixes":["4"]},"capital":["London"],"altSpellings":["GB","UK","Great Britain"],"region":"Europe","subregion":"Northern Europe","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A\u0627 \u0627\u0644\u0639\u0638\u0645\u0649 \u0648\u0627\u064A\u0631\u0644\u0646\u062F\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629","common":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629"},"ces":{"official":"Spojen\xe9 kr\xe1lovstv\xed Velk\xe9 Brit\xe1nie a Severn\xedho Irska","common":"Spojen\xe9 kr\xe1lovstv\xed"},"deu":{"official":"Vereinigtes K\xf6nigreich Gro\xdfbritannien und Nordirland","common":"Vereinigtes K\xf6nigreich"},"est":{"official":"Suurbritannia ja P\xf5hja-Iiri \xdchendkuningriik","common":"Suurbritannia"},"fin":{"official":"Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta","common":"Yhdistynyt kuningaskunta"},"fra":{"official":"Royaume-Uni de Grande-Bretagne et d\'Irlande du Nord","common":"Royaume-Uni"},"hrv":{"official":"Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske","common":"Ujedinjeno Kraljevstvo"},"hun":{"official":"Nagy-Britannia \xe9s \xc9szak-\xcdrorsz\xe1g Egyes\xfclt Kir\xe1lys\xe1ga","common":"Egyes\xfclt Kir\xe1lys\xe1g"},"ita":{"official":"Regno Unito di Gran Bretagna e Irlanda del Nord","common":"Regno Unito"},"jpn":{"official":"\u30B0\u30EC\u30FC\u30C8\u30D6\u30EA\u30C6\u30F3\u53CA\u3073\u5317\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9\u9023\u5408\u738B\u56FD","common":"\u30A4\u30AE\u30EA\u30B9"},"kor":{"official":"\uADF8\uB808\uC774\uD2B8\uBE0C\uB9AC\uD2BC \uBD81\uC544\uC77C\uB79C\uB4DC \uC5F0\uD569 \uC655\uAD6D","common":"\uC601\uAD6D"},"nld":{"official":"Verenigd Koninkrijk van Groot-Brittanni\xeb en Noord-Ierland","common":"Verenigd Koninkrijk"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0645\u062A\u062D\u062F \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627\u06CC \u06A9\u0628\u06CC\u0631 \u0648 \u0627\u06CC\u0631\u0644\u0646\u062F \u0634\u0645\u0627\u0644\u06CC","common":"\u0627\u0646\u06AF\u0644\u06CC\u0633"},"pol":{"official":"Zjednoczone Kr\xf3lestwo Wielkiej Brytanii i Irlandii P\xf3\u0142nocnej","common":"Zjednoczone Kr\xf3lestwo"},"por":{"official":"Reino Unido da Gr\xe3-Bretanha e Irlanda do Norte","common":"Reino Unido"},"rus":{"official":"\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u043E\u0435 \u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u0438 \u0438 \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0418\u0440\u043B\u0430\u043D\u0434\u0438\u0438","common":"\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"},"slk":{"official":"Spojen\xe9 kr\xe1\u013Eovstvo Ve\u013Ekej Brit\xe1nie a Severn\xe9ho\xccrska","common":"Ve\u013Ek\xe1 Brit\xe1nia (Spojen\xe9 kr\xe1\u013Eovstvo)"},"spa":{"official":"Reino Unido de Gran Breta\xf1a e Irlanda del Norte","common":"Reino Unido"},"srp":{"official":"Ujedinjeno Kraljevstvo Velike Britanije i Severne Irske","common":"Ujedinjeno Kraljevstvo"},"swe":{"official":"F\xf6renade konungariket Storbritannien och Nordirland","common":"Storbritannien"},"tur":{"official":"B\xfcy\xfck Britanya ve Kuzey \u0130rlanda Birle\u015Fik Krall\u0131\u011F\u0131","common":"Birle\u015Fik Krall\u0131k"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0645\u062A\u062D\u062F\u06C1 \u0628\u0631\u0637\u0627\u0646\u06CC\u06C1 \u0639\u0638\u0645\u06CC \u0648 \u0634\u0645\u0627\u0644\u06CC \u0622\u0626\u0631\u0644\u06CC\u0646\u0688","common":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0645\u062A\u062D\u062F\u06C1"},"zho":{"official":"\u5927\u4E0D\u5217\u98A0\u53CA\u5317\u7231\u5C14\u5170\u8054\u5408\u738B\u56FD","common":"\u82F1\u56FD"}},"latlng":[54,-2],"landlocked":false,"borders":["IRL"],"area":242900,"flag":"\uD83C\uDDEC\uD83C\uDDE7","demonyms":{"eng":{"f":"British","m":"British"},"fra":{"f":"Britannique","m":"Britannique"}}},{"name":{"common":"Georgia","official":"Georgia","native":{"kat":{"official":"\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD","common":"\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD"}}},"tld":[".ge"],"cca2":"GE","ccn3":"268","cca3":"GEO","cioc":"GEO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"GEL":{"name":"lari","symbol":"\u20BE"}},"idd":{"root":"+9","suffixes":["95"]},"capital":["Tbilisi"],"altSpellings":["GE","Sakartvelo"],"region":"Asia","subregion":"Western Asia","languages":{"kat":"Georgian"},"translations":{"ara":{"official":"\u062C\u0648\u0631\u062C\u064A\u0627","common":"\u062C\u0648\u0631\u062C\u064A\u0627"},"ces":{"official":"Gruzie","common":"Gruzie"},"deu":{"official":"Georgien","common":"Georgien"},"est":{"official":"Gruusia","common":"Gruusia"},"fin":{"official":"Georgia","common":"Georgia"},"fra":{"official":"R\xe9publique de G\xe9orgie","common":"G\xe9orgie"},"hrv":{"official":"Gruzija","common":"Gruzija"},"hun":{"official":"Gr\xfazia","common":"Gr\xfazia"},"ita":{"official":"Georgia","common":"Georgia"},"jpn":{"official":"\u30B8\u30E7\u30FC\u30B8\u30A2","common":"\u30B8\u30E7\u30FC\u30B8\u30A2"},"kor":{"official":"\uC870\uC9C0\uC544","common":"\uC870\uC9C0\uC544"},"nld":{"official":"Georgia","common":"Georgi\xeb"},"per":{"official":"\u06AF\u0631\u062C\u0633\u062A\u0627\u0646","common":"\u06AF\u0631\u062C\u0633\u062A\u0627\u0646"},"pol":{"official":"Gruzja","common":"Gruzja"},"por":{"official":"Georgia","common":"Ge\xf3rgia"},"rus":{"official":"\u0413\u0440\u0443\u0437\u0438\u044F","common":"\u0413\u0440\u0443\u0437\u0438\u044F"},"slk":{"official":"Gruz\xednsko","common":"Gruz\xednsko"},"spa":{"official":"Georgia","common":"Georgia"},"srp":{"official":"Gruzija","common":"Gruzija"},"swe":{"official":"Georgien","common":"Georgien"},"tur":{"official":"G\xfcrcistan","common":"G\xfcrcistan"},"urd":{"official":"\u062C\u0627\u0631\u062C\u06CC\u0627","common":"\u062C\u0627\u0631\u062C\u06CC\u0627"},"zho":{"official":"\u683C\u9C81\u5409\u4E9A","common":"\u683C\u9C81\u5409\u4E9A"}},"latlng":[42,43.5],"landlocked":false,"borders":["ARM","AZE","RUS","TUR"],"area":69700,"flag":"\uD83C\uDDEC\uD83C\uDDEA","demonyms":{"eng":{"f":"Georgian","m":"Georgian"},"fra":{"f":"G\xe9orgienne","m":"G\xe9orgien"}}},{"name":{"common":"Guernsey","official":"Bailiwick of Guernsey","native":{"eng":{"official":"Bailiwick of Guernsey","common":"Guernsey"},"fra":{"official":"Bailliage de Guernesey","common":"Guernesey"},"nfr":{"official":"Dg\xe8rn\xe9siais","common":"Dg\xe8rn\xe9siais"}}},"tld":[".gg"],"cca2":"GG","ccn3":"831","cca3":"GGY","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"GBP":{"name":"British pound","symbol":"\xa3"},"GGP":{"name":"Guernsey pound","symbol":"\xa3"}},"idd":{"root":"+4","suffixes":["4"]},"capital":["St. Peter Port"],"altSpellings":["GG","Bailiwick of Guernsey","Bailliage de Guernesey"],"region":"Europe","subregion":"Northern Europe","languages":{"eng":"English","fra":"French","nfr":"Guern\xe9siais"},"translations":{"ara":{"official":"\u063A\u064A\u0631\u0646\u0632\u064A","common":"\u063A\u064A\u0631\u0646\u0632\u064A"},"ces":{"official":"Rycht\xe1\u0159stv\xed Guernsey","common":"Guernsey"},"deu":{"official":"Vogtei Guernsey","common":"Guernsey"},"est":{"official":"Guernsey foogtkond","common":"Guernsey"},"fin":{"official":"Guernsey","common":"Guernsey"},"fra":{"official":"Bailliage de Guernesey","common":"Guernesey"},"hrv":{"official":"Struka Guernsey","common":"Guernsey"},"hun":{"official":"Guernsey","common":"Guernsey"},"ita":{"official":"Baliato di Guernsey","common":"Guernsey"},"jpn":{"official":"\u30AC\u30FC\u30F3\u30B8\u30FC\u5CF6","common":"\u30AC\u30FC\u30F3\u30B8\u30FC"},"kor":{"official":"\uAC74\uC9C0 \uC12C","common":"\uAC74\uC9C0 \uC12C"},"nld":{"official":"Baljuwschap Guernsey","common":"Guernsey"},"per":{"official":"\u06AF\u0631\u0646\u0632\u06CC","common":"\u06AF\u0631\u0646\u0632\u06CC"},"pol":{"official":"Baliwat Guernsey","common":"Guernsey"},"por":{"official":"Bailiado de Guernsey","common":"Guernsey"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043D\u043D\u043E\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u0413\u0435\u0440\u043D\u0441\u0438","common":"\u0413\u0435\u0440\u043D\u0441\u0438"},"slk":{"official":"Guernsey","common":"Guernsey"},"spa":{"official":"Bail\xeda de Guernsey","common":"Guernsey"},"srp":{"official":"Bejlivik Gernzi","common":"Gernzi"},"swe":{"official":"Guernsey","common":"Guernsey"},"tur":{"official":"Guernsey Muhaf\u0131zl\u0131\u011F\u0131","common":"Guernsey"},"urd":{"official":"\u06AF\u0631\u0646\u0632\u06CC \u0631\u0648\u062F\u0628\u0627\u0631","common":"\u06AF\u0631\u0646\u0632\u06CC"},"zho":{"official":"\u6839\u897F\u5C9B","common":"\u6839\u897F\u5C9B"}},"latlng":[49.46666666,-2.58333333],"landlocked":false,"borders":[],"area":78,"flag":"\uD83C\uDDEC\uD83C\uDDEC","demonyms":{"eng":{"f":"Channel Islander","m":"Channel Islander"},"fra":{"f":"Guernesiaise","m":"Guernesiais"}}},{"name":{"common":"Ghana","official":"Republic of Ghana","native":{"eng":{"official":"Republic of Ghana","common":"Ghana"}}},"tld":[".gh"],"cca2":"GH","ccn3":"288","cca3":"GHA","cioc":"GHA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"GHS":{"name":"Ghanaian cedi","symbol":"\u20B5"}},"idd":{"root":"+2","suffixes":["33"]},"capital":["Accra"],"altSpellings":["GH"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u0627\u0646\u0627","common":"\u063A\u0627\u0646\u0627"},"ces":{"official":"Ghansk\xe1 republika","common":"Ghana"},"deu":{"official":"Republik Ghana","common":"Ghana"},"est":{"official":"Ghana Vabariik","common":"Ghana"},"fin":{"official":"Ghanan tasavalta","common":"Ghana"},"fra":{"official":"R\xe9publique du Ghana","common":"Ghana"},"hrv":{"official":"Republika Gana","common":"Gana"},"hun":{"official":"Gh\xe1nai K\xf6zt\xe1rsas\xe1g","common":"Gh\xe1na"},"ita":{"official":"Repubblica del Ghana","common":"Ghana"},"jpn":{"official":"\u30AC\u30FC\u30CA\u5171\u548C\u56FD","common":"\u30AC\u30FC\u30CA"},"kor":{"official":"\uAC00\uB098 \uACF5\uD654\uAD6D","common":"\uAC00\uB098"},"nld":{"official":"Republiek Ghana","common":"Ghana"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u063A\u0646\u0627","common":"\u063A\u0646\u0627"},"pol":{"official":"Republika Ghany","common":"Ghana"},"por":{"official":"Rep\xfablica do Gana","common":"Gana"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0430\u043D\u0430","common":"\u0413\u0430\u043D\u0430"},"slk":{"official":"Ghansk\xe1 republika","common":"Ghana"},"spa":{"official":"Rep\xfablica de Ghana","common":"Ghana"},"srp":{"official":"Republika Gana","common":"Gana"},"swe":{"official":"Republiken Ghana","common":"Ghana"},"tur":{"official":"Gana Cumhuriyeti","common":"Gana"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u06BE\u0627\u0646\u0627","common":"\u06AF\u06BE\u0627\u0646\u0627"},"zho":{"official":"\u52A0\u7EB3\u5171\u548C\u56FD","common":"\u52A0\u7EB3"}},"latlng":[8,-2],"landlocked":false,"borders":["BFA","CIV","TGO"],"area":238533,"flag":"\uD83C\uDDEC\uD83C\uDDED","demonyms":{"eng":{"f":"Ghanaian","m":"Ghanaian"},"fra":{"f":"Ghan\xe9enne","m":"Ghan\xe9en"}}},{"name":{"common":"Gibraltar","official":"Gibraltar","native":{"eng":{"official":"Gibraltar","common":"Gibraltar"}}},"tld":[".gi"],"cca2":"GI","ccn3":"292","cca3":"GIB","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"GIP":{"name":"Gibraltar pound","symbol":"\xa3"}},"idd":{"root":"+3","suffixes":["50"]},"capital":["Gibraltar"],"altSpellings":["GI"],"region":"Europe","subregion":"Southern Europe","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0628\u0644 \u0637\u0627\u0631\u0642","common":"\u062C\u0628\u0644 \u0637\u0627\u0631\u0642"},"ces":{"official":"Gibraltar","common":"Gibraltar"},"deu":{"official":"Gibraltar","common":"Gibraltar"},"est":{"official":"Gibraltar","common":"Gibraltar"},"fin":{"official":"Gibraltar","common":"Gibraltar"},"fra":{"official":"Gibraltar","common":"Gibraltar"},"hrv":{"official":"Gibraltar","common":"Gibraltar"},"hun":{"official":"Gibralt\xe1r","common":"Gibralt\xe1r"},"ita":{"official":"Gibilterra","common":"Gibilterra"},"jpn":{"official":"\u30B8\u30D6\u30E9\u30EB\u30BF\u30EB","common":"\u30B8\u30D6\u30E9\u30EB\u30BF\u30EB"},"kor":{"official":"\uC9C0\uBE0C\uB864\uD130","common":"\uC9C0\uBE0C\uB864\uD130"},"nld":{"official":"Gibraltar","common":"Gibraltar"},"per":{"official":"\u062C\u0628\u0644 \u0637\u0627\u0631\u0642","common":"\u062C\u0628\u0644 \u0637\u0627\u0631\u0642"},"pol":{"official":"Gibraltar","common":"Gibraltar"},"por":{"official":"Gibraltar","common":"Gibraltar"},"rus":{"official":"\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440","common":"\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440"},"slk":{"official":"Gibralt\xe1r","common":"Gibralt\xe1r"},"spa":{"official":"Gibraltar","common":"Gibraltar"},"srp":{"official":"Gibraltar","common":"Gibraltar"},"swe":{"official":"Gibraltar","common":"Gibraltar"},"tur":{"official":"Cebelitar\u0131k","common":"Cebelitar\u0131k"},"urd":{"official":"\u062C\u0628\u0644 \u0627\u0644\u0637\u0627\u0631\u0642","common":"\u062C\u0628\u0644 \u0627\u0644\u0637\u0627\u0631\u0642"},"zho":{"official":"\u76F4\u5E03\u7F57\u9640","common":"\u76F4\u5E03\u7F57\u9640"}},"latlng":[36.13333333,-5.35],"landlocked":false,"borders":["ESP"],"area":6,"flag":"\uD83C\uDDEC\uD83C\uDDEE","demonyms":{"eng":{"f":"Gibraltar","m":"Gibraltar"},"fra":{"f":"Gibraltarienne","m":"Gibraltarien"}}},{"name":{"common":"Guinea","official":"Republic of Guinea","native":{"fra":{"official":"R\xe9publique de Guin\xe9e","common":"Guin\xe9e"}}},"tld":[".gn"],"cca2":"GN","ccn3":"324","cca3":"GIN","cioc":"GUI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"GNF":{"name":"Guinean franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["24"]},"capital":["Conakry"],"altSpellings":["GN","Republic of Guinea","R\xe9publique de Guin\xe9e"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u064A\u0646\u064A\u0627","common":"\u063A\u064A\u0646\u064A\u0627"},"ces":{"official":"Guinejsk\xe1 republika","common":"Guinea"},"deu":{"official":"Republik Guinea","common":"Guinea"},"est":{"official":"Guinea Vabariik","common":"Guinea"},"fin":{"official":"Guinean tasavalta","common":"Guinea"},"fra":{"official":"R\xe9publique de Guin\xe9e","common":"Guin\xe9e"},"hrv":{"official":"Republika Gvineja","common":"Gvineja"},"hun":{"official":"Guineai K\xf6zt\xe1rsas\xe1g","common":"Guinea"},"ita":{"official":"Repubblica di Guinea","common":"Guinea"},"jpn":{"official":"\u30AE\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30AE\u30CB\u30A2"},"kor":{"official":"\uAE30\uB2C8 \uACF5\uD654\uAD6D","common":"\uAE30\uB2C8"},"nld":{"official":"Republiek Guinee","common":"Guinee"},"per":{"official":"\u0645\u0645\u0644\u06A9\u062A \u0645\u0633\u062A\u0642\u0644 \u067E\u0627\u067E\u0648\u0622 \u06AF\u06CC\u0646\u0647 \u0646\u0648","common":"\u067E\u0627\u067E\u0648\u0622 \u06AF\u06CC\u0646\u0647 \u0646\u0648"},"pol":{"official":"Republika Gwinei","common":"Gwinea"},"por":{"official":"Rep\xfablica da Guin\xe9","common":"Guin\xe9"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0432\u0438\u043D\u0435\u044F","common":"\u0413\u0432\u0438\u043D\u0435\u044F"},"slk":{"official":"Guinejsk\xe1 republika","common":"Guinea"},"spa":{"official":"Rep\xfablica de Guinea","common":"Guinea"},"srp":{"official":"Republika Gvineja","common":"Gvineja"},"swe":{"official":"Republiken Guinea","common":"Guinea"},"tur":{"official":"Gine Cumhuriyeti","common":"Gine"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u0646\u06CC","common":"\u06AF\u0646\u06CC"},"zho":{"official":"\u51E0\u5185\u4E9A\u5171\u548C\u56FD","common":"\u51E0\u5185\u4E9A"}},"latlng":[11,-10],"landlocked":false,"borders":["CIV","GNB","LBR","MLI","SEN","SLE"],"area":245857,"flag":"\uD83C\uDDEC\uD83C\uDDF3","demonyms":{"eng":{"f":"Guinean","m":"Guinean"},"fra":{"f":"Guin\xe9enne","m":"Guin\xe9en"}}},{"name":{"common":"Guadeloupe","official":"Guadeloupe","native":{"fra":{"official":"Guadeloupe","common":"Guadeloupe"}}},"tld":[".gp"],"cca2":"GP","ccn3":"312","cca3":"GLP","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["90"]},"capital":["Basse-Terre"],"altSpellings":["GP","Gwadloup"],"region":"Americas","subregion":"Caribbean","languages":{"fra":"French"},"translations":{"ara":{"official":"\u063A\u0648\u0627\u062F\u0644\u0648\u0628","common":"\u063A\u0648\u0627\u062F\u0644\u0648\u0628"},"ces":{"official":"Guadeloupe","common":"Guadeloupe"},"deu":{"official":"Guadeloupe","common":"Guadeloupe"},"est":{"official":"Guadeloupe\u2019i ja s\xf5ltkondade departemang","common":"Guadeloupe"},"fin":{"official":"Guadeloupen departmentti","common":"Guadeloupe"},"fra":{"official":"Guadeloupe","common":"Guadeloupe"},"hrv":{"official":"Gvadalupa","common":"Gvadalupa"},"hun":{"official":"Guadeloupe","common":"Guadeloupe"},"ita":{"official":"Guadeloupe","common":"Guadeloupa"},"jpn":{"official":"\u30B0\u30A2\u30C9\u30EB\u30FC\u30D7\u5CF6","common":"\u30B0\u30A2\u30C9\u30EB\u30FC\u30D7"},"kor":{"official":"\uACFC\uB4E4\uB8E8\uD504","common":"\uACFC\uB4E4\uB8E8\uD504"},"nld":{"official":"Guadeloupe","common":"Guadeloupe"},"per":{"official":"\u06AF\u0648\u0627\u062F\u0644\u0648\u067E","common":"\u06AF\u0648\u0627\u062F\u0644\u0648\u067E"},"pol":{"official":"Gwadelupa","common":"Gwadelupa"},"por":{"official":"Guadalupe","common":"Guadalupe"},"rus":{"official":"\u0413\u0432\u0430\u0434\u0435\u043B\u0443\u043F\u0430","common":"\u0413\u0432\u0430\u0434\u0435\u043B\u0443\u043F\u0430"},"slk":{"official":"Guadeloupe","common":"Guadeloupe"},"spa":{"official":"Guadalupe","common":"Guadalupe"},"srp":{"official":"Gvadelup","common":"Gvadelup"},"swe":{"official":"Guadeloupe","common":"Guadeloupe"},"tur":{"official":"Guadeloupe","common":"Guadeloupe"},"urd":{"official":"\u06AF\u0648\u0627\u0688\u06CC\u0644\u0648\u067E","common":"\u06AF\u0648\u0627\u0688\u06CC\u0644\u0648\u067E"},"zho":{"official":"\u74DC\u5FB7\u7F57\u666E\u5C9B","common":"\u74DC\u5FB7\u7F57\u666E\u5C9B"}},"latlng":[16.25,-61.583333],"landlocked":false,"borders":[],"area":1628,"flag":"\uD83C\uDDEC\uD83C\uDDF5","demonyms":{"eng":{"f":"Guadeloupian","m":"Guadeloupian"},"fra":{"f":"Guadeloup\xe9enne","m":"Guadeloup\xe9en"}}},{"name":{"common":"Gambia","official":"Republic of the Gambia","native":{"eng":{"official":"Republic of the Gambia","common":"Gambia"}}},"tld":[".gm"],"cca2":"GM","ccn3":"270","cca3":"GMB","cioc":"GAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"GMD":{"name":"dalasi","symbol":"D"}},"idd":{"root":"+2","suffixes":["20"]},"capital":["Banjul"],"altSpellings":["GM","Republic of the Gambia"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u0627\u0645\u0628\u064A\u0627","common":"\u063A\u0627\u0645\u0628\u064A\u0627"},"ces":{"official":"Gambijsk\xe1 republika","common":"Gambie"},"deu":{"official":"Republik Gambia","common":"Gambia"},"est":{"official":"Gambia Vabariik","common":"Gambia"},"fin":{"official":"Gambian tasavalta","common":"Gambia"},"fra":{"official":"R\xe9publique de Gambie","common":"Gambie"},"hrv":{"official":"Republika Gambija","common":"Gambija"},"hun":{"official":"Gambiai K\xf6zt\xe1rsas\xe1g","common":"Gambia"},"ita":{"official":"Repubblica del Gambia","common":"Gambia"},"jpn":{"official":"\u30AC\u30F3\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30AC\u30F3\u30D3\u30A2"},"kor":{"official":"\uAC10\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uAC10\uBE44\uC544"},"nld":{"official":"Republiek Gambia","common":"Gambia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06AF\u0627\u0645\u0628\u06CC\u0627","common":"\u06AF\u0627\u0645\u0628\u06CC\u0627"},"pol":{"official":"Republika Gambii","common":"Gambia"},"por":{"official":"Rep\xfablica da G\xe2mbia","common":"G\xe2mbia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0430\u043C\u0431\u0438\u044F","common":"\u0413\u0430\u043C\u0431\u0438\u044F"},"slk":{"official":"Gambijsk\xe1 republika","common":"Gambia"},"spa":{"official":"Rep\xfablica de Gambia","common":"Gambia"},"srp":{"official":"Republika Gambija","common":"Gambija"},"swe":{"official":"Republiken Gambia","common":"Gambia"},"tur":{"official":"Gambiya Cumhuriyeti","common":"Gambiya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u06CC\u0645\u0628\u06CC\u0627","common":"\u06AF\u06CC\u0645\u0628\u06CC\u0627"},"zho":{"official":"\u5188\u6BD4\u4E9A\u5171\u548C\u56FD","common":"\u5188\u6BD4\u4E9A"}},"latlng":[13.46666666,-16.56666666],"landlocked":false,"borders":["SEN"],"area":10689,"flag":"\uD83C\uDDEC\uD83C\uDDF2","demonyms":{"eng":{"f":"Gambian","m":"Gambian"},"fra":{"f":"Gambienne","m":"Gambien"}}},{"name":{"common":"Guinea-Bissau","official":"Republic of Guinea-Bissau","native":{"por":{"official":"Rep\xfablica da Guin\xe9-Bissau","common":"Guin\xe9-Bissau"},"pov":{"official":"Rep\xfablica da Guin\xe9-Bissau","common":"Guin\xe9-Bissau"}}},"tld":[".gw"],"cca2":"GW","ccn3":"624","cca3":"GNB","cioc":"GBS","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["45"]},"capital":["Bissau"],"altSpellings":["GW","Republic of Guinea-Bissau","Rep\xfablica da Guin\xe9-Bissau"],"region":"Africa","subregion":"Western Africa","languages":{"por":"Portuguese","pov":"Upper Guinea Creole"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u064A\u0646\u064A\u0627 \u0628\u064A\u0633\u0627\u0648","common":"\u063A\u064A\u0646\u064A\u0627 \u0628\u064A\u0633\u0627\u0648"},"ces":{"official":"Republika Guinea-Bissau","common":"Guinea-Bissau"},"deu":{"official":"Republik Guinea-Bissau","common":"Guinea-Bissau"},"est":{"official":"Guinea-Bissau Vabariik","common":"Guinea-Bissau"},"fin":{"official":"Guinea-Bissaun tasavalta","common":"Guinea-Bissau"},"fra":{"official":"R\xe9publique de Guin\xe9e-Bissau","common":"Guin\xe9e-Bissau"},"hrv":{"official":"Republika Gvineja Bisau","common":"Gvineja Bisau"},"hun":{"official":"Bissau-Guineai K\xf6zt\xe1rsas\xe1g","common":"Bissau-Guinea"},"ita":{"official":"Repubblica di Guinea-Bissau","common":"Guinea-Bissau"},"jpn":{"official":"\u30AE\u30CB\u30A2\u30D3\u30B5\u30A6\u5171\u548C\u56FD","common":"\u30AE\u30CB\u30A2\u30D3\u30B5\u30A6"},"kor":{"official":"\uAE30\uB2C8\uBE44\uC0AC\uC6B0 \uACF5\uD654\uAD6D","common":"\uAE30\uB2C8\uBE44\uC0AC\uC6B0"},"nld":{"official":"Republiek Guinee-Bissau","common":"Guinee-Bissau"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06AF\u06CC\u0646\u0647 \u0628\u06CC\u0633\u0627\u0626\u0648","common":"\u06AF\u06CC\u0646\u0647 \u0628\u06CC\u0633\u0627\u0626\u0648"},"pol":{"official":"Republika Gwinei Bissau","common":"Gwinea Bissau"},"por":{"official":"Rep\xfablica da Guin\xe9-Bissau","common":"Guin\xe9-Bissau"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0432\u0438\u043D\u0435\u044F -\u0411\u0438\u0441\u0430\u0443","common":"\u0413\u0432\u0438\u043D\u0435\u044F-\u0411\u0438\u0441\u0430\u0443"},"slk":{"official":"Guinejsko-bissausk\xe1 republika","common":"Guinea-Bissau"},"spa":{"official":"Rep\xfablica de Guinea-Bissau","common":"Guinea-Bis\xe1u"},"srp":{"official":"Republika Gvineja Bisao","common":"Gvineja Bisao"},"swe":{"official":"Republiken Guinea-Bissau","common":"Guinea-Bissau"},"tur":{"official":"Gine-Bissau Cumhuriyeti","common":"Gine-Bissau"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u0646\u06CC \u0628\u0633\u0627\u0624","common":"\u06AF\u0646\u06CC \u0628\u0633\u0627\u0624"},"zho":{"official":"\u51E0\u5185\u4E9A\u6BD4\u7ECD\u5171\u548C\u56FD","common":"\u51E0\u5185\u4E9A\u6BD4\u7ECD"}},"latlng":[12,-15],"landlocked":false,"borders":["GIN","SEN"],"area":36125,"flag":"\uD83C\uDDEC\uD83C\uDDFC","demonyms":{"eng":{"f":"Guinea-Bissauan","m":"Guinea-Bissauan"},"fra":{"f":"Bissau-Guin\xe9enne","m":"Bissau-Guin\xe9en"}}},{"name":{"common":"Equatorial Guinea","official":"Republic of Equatorial Guinea","native":{"fra":{"official":"R\xe9publique de la Guin\xe9e \xc9quatoriale","common":"Guin\xe9e \xe9quatoriale"},"por":{"official":"Rep\xfablica da Guin\xe9 Equatorial","common":"Guin\xe9 Equatorial"},"spa":{"official":"Rep\xfablica de Guinea Ecuatorial","common":"Guinea Ecuatorial"}}},"tld":[".gq"],"cca2":"GQ","ccn3":"226","cca3":"GNQ","cioc":"GEQ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["40"]},"capital":["Malabo"],"altSpellings":["GQ","Republic of Equatorial Guinea","Rep\xfablica de Guinea Ecuatorial","R\xe9publique de Guin\xe9e \xe9quatoriale","Rep\xfablica da Guin\xe9 Equatorial"],"region":"Africa","subregion":"Middle Africa","languages":{"fra":"French","por":"Portuguese","spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u064A\u0646\u064A\u0627 \u0627\u0644\u0627\u0633\u062A\u0648\u0627\u0626\u064A\u0629","common":"\u063A\u064A\u0646\u064A\u0627 \u0627\u0644\u0627\u0633\u062A\u0648\u0627\u0626\u064A\u0629"},"ces":{"official":"Republika Rovn\xedkov\xe1 Guinea","common":"Rovn\xedkov\xe1 Guinea"},"deu":{"official":"Republik \xc4quatorialguinea","common":"\xc4quatorialguinea"},"est":{"official":"Ekvatoriaal-Guinea Vabariik","common":"Ekvatoriaal-Guinea"},"fin":{"official":"P\xe4iv\xe4ntasaajan Guinean tasavalta","common":"P\xe4iv\xe4ntasaajan Guinea"},"fra":{"official":"R\xe9publique de Guin\xe9e \xe9quatoriale","common":"Guin\xe9e \xe9quatoriale"},"hrv":{"official":"Republika Ekvatorska Gvineja","common":"Ekvatorijalna Gvineja"},"hun":{"official":"Egyenl\xedt\u0151i-Guinea-i K\xf6zt\xe1rsas\xe1g","common":"Egyenl\xedt\u0151i-Guinea"},"ita":{"official":"Repubblica della Guinea Equatoriale","common":"Guinea Equatoriale"},"jpn":{"official":"\u8D64\u9053\u30AE\u30CB\u30A2\u5171\u548C\u56FD","common":"\u8D64\u9053\u30AE\u30CB\u30A2"},"kor":{"official":"\uC801\uB3C4 \uAE30\uB2C8 \uACF5\uD654\uAD6D","common":"\uC801\uB3C4 \uAE30\uB2C8"},"nld":{"official":"Republiek Equatoriaal-Guinea","common":"Equatoriaal-Guinea"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06AF\u06CC\u0646\u0647 \u0627\u0633\u062A\u0648\u0627\u06CC\u06CC","common":"\u06AF\u06CC\u0646\u0647 \u0627\u0633\u062A\u0648\u0627\u06CC\u06CC"},"pol":{"official":"Republika Gwinei R\xf3wnikowej","common":"Gwinea R\xf3wnikowa"},"por":{"official":"Rep\xfablica da Guin\xe9 Equatorial","common":"Guin\xe9 Equatorial"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u042D\u043A\u0432\u0430\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F","common":"\u042D\u043A\u0432\u0430\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F"},"slk":{"official":"Republika rovn\xedkovej Guiney","common":"Rovn\xedkov\xe1 Guinea"},"spa":{"official":"Rep\xfablica de Guinea Ecuatorial","common":"Guinea Ecuatorial"},"srp":{"official":"Republika Ekvatorijalna Gvineja","common":"Ekvatorijalna Gvineja"},"swe":{"official":"Republiken Ekvatorialguinea","common":"Ekvatorialguinea"},"tur":{"official":"Ekvator Ginesi Cumhuriyeti","common":"Ekvator Ginesi"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0633\u062A\u0648\u0627\u0626\u06CC \u06AF\u0646\u06CC","common":"\u0627\u0633\u062A\u0648\u0627\u0626\u06CC \u06AF\u0646\u06CC"},"zho":{"official":"\u8D64\u9053\u51E0\u5185\u4E9A\u5171\u548C\u56FD","common":"\u8D64\u9053\u51E0\u5185\u4E9A"}},"latlng":[2,10],"landlocked":false,"borders":["CMR","GAB"],"area":28051,"flag":"\uD83C\uDDEC\uD83C\uDDF6","demonyms":{"eng":{"f":"Equatorial Guinean","m":"Equatorial Guinean"},"fra":{"f":"\xc9quato-guin\xe9enne","m":"\xc9quato-guin\xe9en"}}},{"name":{"common":"Greece","official":"Hellenic Republic","native":{"ell":{"official":"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AE \u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1","common":"\u0395\u03BB\u03BB\u03AC\u03B4\u03B1"}}},"tld":[".gr"],"cca2":"GR","ccn3":"300","cca3":"GRC","cioc":"GRE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["0"]},"capital":["Athens"],"altSpellings":["GR","Ell\xe1da","Hellenic Republic","\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AE \u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1"],"region":"Europe","subregion":"Southern Europe","languages":{"ell":"Greek"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0647\u064A\u0644\u064A\u0646\u064A\u0629","common":"\u0627\u0644\u064A\u0648\u0646\u0627\u0646"},"ces":{"official":"\u0158eck\xe1 republika","common":"\u0158ecko"},"deu":{"official":"Hellenische Republik","common":"Griechenland"},"est":{"official":"Kreeka Vabariik","common":"Kreeka"},"fin":{"official":"Helleenien tasavalta","common":"Kreikka"},"fra":{"official":"R\xe9publique hell\xe9nique","common":"Gr\xe8ce"},"hrv":{"official":"Helenska Republika","common":"Gr\u010Dka"},"hun":{"official":"G\xf6r\xf6g K\xf6zt\xe1rsas\xe1g","common":"G\xf6r\xf6gorsz\xe1g"},"ita":{"official":"Repubblica ellenica","common":"Grecia"},"jpn":{"official":"\u30AE\u30EA\u30B7\u30E3\u5171\u548C\u56FD","common":"\u30AE\u30EA\u30B7\u30E3"},"kor":{"official":"\uADF8\uB9AC\uC2A4 \uACF5\uD654\uAD6D","common":"\uADF8\uB9AC\uC2A4"},"nld":{"official":"Helleense Republiek","common":"Griekenland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06CC\u0648\u0646\u0627\u0646","common":"\u06CC\u0648\u0646\u0627\u0646"},"pol":{"official":"Republika Grecka","common":"Grecja"},"por":{"official":"Rep\xfablica Hel\xe9nica","common":"Gr\xe9cia"},"rus":{"official":"\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0413\u0440\u0435\u0446\u0438\u044F"},"slk":{"official":"Gr\xe9cka republika","common":"Gre\xe9cko"},"spa":{"official":"Rep\xfablica Hel\xe9nica","common":"Grecia"},"srp":{"official":"Republika Gr\u010Dka","common":"Gr\u010Dka"},"swe":{"official":"Republiken Grekland","common":"Grekland"},"tur":{"official":"Helen Cumhuriyeti","common":"Yunanistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06C1\u06CC\u0644\u06CC\u0646\u06CC\u06C1","common":"\u06CC\u0648\u0646\u0627\u0646"},"zho":{"official":"\u5E0C\u814A\u5171\u548C\u56FD","common":"\u5E0C\u814A"}},"latlng":[39,22],"landlocked":false,"borders":["ALB","BGR","TUR","MKD"],"area":131990,"flag":"\uD83C\uDDEC\uD83C\uDDF7","demonyms":{"eng":{"f":"Greek","m":"Greek"},"fra":{"f":"Grecque","m":"Grec"}}},{"name":{"common":"Grenada","official":"Grenada","native":{"eng":{"official":"Grenada","common":"Grenada"}}},"tld":[".gd"],"cca2":"GD","ccn3":"308","cca3":"GRD","cioc":"GRN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["473"]},"capital":["St. George\'s"],"altSpellings":["GD"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u063A\u0631\u064A\u0646\u0627\u062F\u0627","common":"\u063A\u0631\u064A\u0646\u0627\u062F\u0627"},"ces":{"official":"Grenada","common":"Grenada"},"deu":{"official":"Grenada","common":"Grenada"},"est":{"official":"Grenada","common":"Grenada"},"fin":{"official":"Grenada","common":"Grenada"},"fra":{"official":"Grenade","common":"Grenade"},"hrv":{"official":"Grenada","common":"Grenada"},"hun":{"official":"Grenada","common":"Grenada"},"ita":{"official":"Grenada","common":"Grenada"},"jpn":{"official":"\u30B0\u30EC\u30CA\u30C0","common":"\u30B0\u30EC\u30CA\u30C0"},"kor":{"official":"\uADF8\uB808\uB098\uB2E4","common":"\uADF8\uB808\uB098\uB2E4"},"nld":{"official":"Grenada","common":"Grenada"},"per":{"official":"\u06AF\u0631\u0646\u0627\u062F\u0627","common":"\u06AF\u0631\u0646\u0627\u062F\u0627"},"pol":{"official":"Grenada","common":"Grenada"},"por":{"official":"Grenada","common":"Granada"},"rus":{"official":"\u0413\u0440\u0435\u043D\u0430\u0434\u0430","common":"\u0413\u0440\u0435\u043D\u0430\u0434\u0430"},"slk":{"official":"Grenada","common":"Grenada"},"spa":{"official":"Granada","common":"Grenada"},"srp":{"official":"Grenada","common":"Grenada"},"swe":{"official":"Grenada","common":"Grenada"},"tur":{"official":"Grenada","common":"Grenada"},"urd":{"official":"\u06AF\u0631\u06CC\u0646\u0627\u0688\u0627","common":"\u06AF\u0631\u06CC\u0646\u0627\u0688\u0627"},"zho":{"official":"\u683C\u6797\u7EB3\u8FBE","common":"\u683C\u6797\u7EB3\u8FBE"}},"latlng":[12.11666666,-61.66666666],"landlocked":false,"borders":[],"area":344,"flag":"\uD83C\uDDEC\uD83C\uDDE9","demonyms":{"eng":{"f":"Grenadian","m":"Grenadian"},"fra":{"f":"Grenadienne","m":"Grenadien"}}},{"name":{"common":"Greenland","official":"Greenland","native":{"kal":{"official":"Kalaallit Nunaat","common":"Kalaallit Nunaat"}}},"tld":[".gl"],"cca2":"GL","ccn3":"304","cca3":"GRL","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"DKK":{"name":"krone","symbol":"kr."}},"idd":{"root":"+2","suffixes":["99"]},"capital":["Nuuk"],"altSpellings":["GL","Gr\xf8nland"],"region":"Americas","subregion":"North America","languages":{"kal":"Greenlandic"},"translations":{"ara":{"official":"\u062C\u0631\u064A\u0646\u0644\u0627\u0646\u062F","common":"\u062C\u0631\u064A\u0646\u0644\u0627\u0646\u062F"},"ces":{"official":"Gr\xf3nsko","common":"Gr\xf3nsko"},"deu":{"official":"Gr\xf6nland","common":"Gr\xf6nland"},"est":{"official":"Gr\xf6\xf6nimaa","common":"Gr\xf6\xf6nimaa"},"fin":{"official":"Gro\xf6nlanti","common":"Gro\xf6nlanti"},"fra":{"official":"Groenland","common":"Groenland"},"hrv":{"official":"Grenland","common":"Grenland"},"hun":{"official":"Gr\xf6nland","common":"Gr\xf6nland"},"ita":{"official":"Groenlandia","common":"Groenlandia"},"jpn":{"official":"\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9","common":"\u30B0\u30EA\u30FC\u30F3\u30E9\u30F3\u30C9"},"kor":{"official":"\uADF8\uB9B0\uB780\uB4DC","common":"\uADF8\uB9B0\uB780\uB4DC"},"nld":{"official":"Groenland","common":"Groenland"},"per":{"official":"\u06AF\u0631\u0648\u0626\u0646\u0644\u0646\u062F","common":"\u06AF\u0631\u06CC\u0646\u0644\u0646\u062F"},"pol":{"official":"Grenlandia","common":"Grenlandia"},"por":{"official":"Groenl\xe2ndia","common":"Gronel\xe2ndia"},"rus":{"official":"\u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F","common":"\u0413\u0440\u0435\u043D\u043B\u0430\u043D\u0434\u0438\u044F"},"slk":{"official":"Gr\xf3nsko","common":"Gr\xf3nsko"},"spa":{"official":"Groenlandia","common":"Groenlandia"},"srp":{"official":"Grenland","common":"Grenland"},"swe":{"official":"Gr\xf6nland","common":"Gr\xf6nland"},"tur":{"official":"Gr\xf6nland","common":"Gr\xf6nland"},"urd":{"official":"\u06AF\u0631\u06CC\u0646 \u0644\u06CC\u0646\u0688","common":"\u06AF\u0631\u06CC\u0646 \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u683C\u9675\u5170","common":"\u683C\u9675\u5170"}},"latlng":[72,-40],"landlocked":false,"borders":[],"area":2166086,"flag":"\uD83C\uDDEC\uD83C\uDDF1","demonyms":{"eng":{"f":"Greenlandic","m":"Greenlandic"},"fra":{"f":"Groenlandaise","m":"Groenlandais"}}},{"name":{"common":"Guatemala","official":"Republic of Guatemala","native":{"spa":{"official":"Rep\xfablica de Guatemala","common":"Guatemala"}}},"tld":[".gt"],"cca2":"GT","ccn3":"320","cca3":"GTM","cioc":"GUA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"GTQ":{"name":"Guatemalan quetzal","symbol":"Q"}},"idd":{"root":"+5","suffixes":["02"]},"capital":["Guatemala City"],"altSpellings":["GT"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u0648\u0627\u062A\u064A\u0645\u0627\u0644\u0627","common":"\u063A\u0648\u0627\u062A\u064A\u0645\u0627\u0644\u0627"},"ces":{"official":"Republika Guatemala","common":"Guatemala"},"deu":{"official":"Republik Guatemala","common":"Guatemala"},"est":{"official":"Guatemala Vabariik","common":"Guatemala"},"fin":{"official":"Guatemalan tasavalta","common":"Guatemala"},"fra":{"official":"R\xe9publique du Guatemala","common":"Guatemala"},"hrv":{"official":"Republika Gvatemala","common":"Gvatemala"},"hun":{"official":"Guatemalai K\xf6zt\xe1rsas\xe1g","common":"Guatemala"},"ita":{"official":"Repubblica del Guatemala","common":"Guatemala"},"jpn":{"official":"\u30B0\u30A2\u30C6\u30DE\u30E9\u5171\u548C\u56FD","common":"\u30B0\u30A2\u30C6\u30DE\u30E9"},"kor":{"official":"\uACFC\uD14C\uB9D0\uB77C \uACF5\uD654\uAD6D","common":"\uACFC\uD14C\uB9D0\uB77C"},"nld":{"official":"Republiek Guatemala","common":"Guatemala"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06AF\u0648\u0627\u062A\u0650\u0645\u0627\u0644\u0627","common":"\u06AF\u0648\u0627\u062A\u0650\u0645\u0627\u0644\u0627"},"pol":{"official":"Republika Gwatemali","common":"Gwatemala"},"por":{"official":"Rep\xfablica da Guatemala","common":"Guatemala"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430","common":"\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430"},"slk":{"official":"Guatemalsk\xe1 republika","common":"Guatemala"},"spa":{"official":"Rep\xfablica de Guatemala","common":"Guatemala"},"srp":{"official":"Republika Gvatemala","common":"Gvatemala"},"swe":{"official":"Republiken Guatemala","common":"Guatemala"},"tur":{"official":"Guatemala Cumhuriyeti","common":"Guatemala"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u0648\u0627\u062A\u06CC\u0645\u0627\u0644\u0627","common":"\u06AF\u0648\u0627\u062A\u06CC\u0645\u0627\u0644\u0627"},"zho":{"official":"\u5371\u5730\u9A6C\u62C9\u5171\u548C\u56FD","common":"\u5371\u5730\u9A6C\u62C9"}},"latlng":[15.5,-90.25],"landlocked":false,"borders":["BLZ","SLV","HND","MEX"],"area":108889,"flag":"\uD83C\uDDEC\uD83C\uDDF9","demonyms":{"eng":{"f":"Guatemalan","m":"Guatemalan"},"fra":{"f":"Guat\xe9malt\xe8que","m":"Guat\xe9malt\xe8que"}}},{"name":{"common":"French Guiana","official":"Guiana","native":{"fra":{"official":"Guyane","common":"Guyane fran\xe7aise"}}},"tld":[".gf"],"cca2":"GF","ccn3":"254","cca3":"GUF","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["94"]},"capital":["Cayenne"],"altSpellings":["GF","Guiana","Guyane"],"region":"Americas","subregion":"South America","languages":{"fra":"French"},"translations":{"ara":{"official":"\u063A\u0648\u064A\u0627\u0646\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629","common":"\u063A\u0648\u064A\u0627\u0646\u0627"},"ces":{"official":"Francouzsk\xe1 Guyana","common":"Francouzsk\xe1 Guyana"},"deu":{"official":"Franz\xf6sisch-Guayana","common":"Franz\xf6sisch-Guayana"},"est":{"official":"Guajaana departemang","common":"Prantsuse Guajaana"},"fin":{"official":"Ranskan Guayana","common":"Ranskan Guayana"},"fra":{"official":"Guyane","common":"Guyane"},"hrv":{"official":"Gijana","common":"Francuska Gvajana"},"hun":{"official":"Francia Guyana","common":"Francia Guyana"},"ita":{"official":"Guiana","common":"Guyana francese"},"jpn":{"official":"\u30D5\u30E9\u30F3\u30B9\u9818\u30AE\u30A2\u30CA","common":"\u30D5\u30E9\u30F3\u30B9\u9818\u30AE\u30A2\u30CA"},"kor":{"official":"\uD504\uB791\uC2A4\uB839 \uAE30\uC544\uB098","common":"\uD504\uB791\uC2A4\uB839 \uAE30\uC544\uB098"},"nld":{"official":"Guyana","common":"Frans-Guyana"},"per":{"official":"\u06AF\u0648\u06CC\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u0647","common":"\u06AF\u0648\u06CC\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u0647"},"pol":{"official":"Gujana Francuska","common":"Gujana Francuska"},"por":{"official":"Guiana","common":"Guiana Francesa"},"rus":{"official":"\u0413\u0432\u0438\u0430\u043D\u0430","common":"\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u0413\u0432\u0438\u0430\u043D\u0430"},"slk":{"official":"Franc\xfazska Guyana","common":"Guyana"},"spa":{"official":"Guayana","common":"Guayana Francesa"},"srp":{"official":"Gvajana","common":"Francuska Gvajana"},"swe":{"official":"Franska Guyana","common":"Franska Guyana"},"tur":{"official":"Frans\u0131z Guyanas\u0131","common":"Frans\u0131z Guyanas\u0131"},"urd":{"official":"\u06AF\u06CC\u0627\u0646\u0627","common":"\u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC \u06AF\u06CC\u0627\u0646\u0627"},"zho":{"official":"\u6CD5\u5C5E\u572D\u4E9A\u90A3","common":"\u6CD5\u5C5E\u572D\u4E9A\u90A3"}},"latlng":[4,-53],"landlocked":false,"borders":["BRA","SUR"],"area":83534,"flag":"\uD83C\uDDEC\uD83C\uDDEB","demonyms":{"eng":{"f":"Guianan","m":"Guianan"},"fra":{"f":"Guyanaise","m":"Guyanais"}}},{"name":{"common":"Guam","official":"Guam","native":{"cha":{"official":"Gu\xe5h\xe5n","common":"Gu\xe5h\xe5n"},"eng":{"official":"Guam","common":"Guam"},"spa":{"official":"Guam","common":"Guam"}}},"tld":[".gu"],"cca2":"GU","ccn3":"316","cca3":"GUM","cioc":"GUM","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["671"]},"capital":["Hag\xe5t\xf1a"],"altSpellings":["GU","Gu\xe5h\xe5n"],"region":"Oceania","subregion":"Micronesia","languages":{"cha":"Chamorro","eng":"English","spa":"Spanish"},"translations":{"ara":{"official":"\u063A\u0648\u0627\u0645","common":"\u063A\u0648\u0627\u0645"},"ces":{"official":"Guam","common":"Guam"},"deu":{"official":"Guam","common":"Guam"},"est":{"official":"Guami ala","common":"Guam"},"fin":{"official":"Guam","common":"Guam"},"fra":{"official":"Guam","common":"Guam"},"hrv":{"official":"Guam","common":"Guam"},"hun":{"official":"Guam","common":"Guam"},"ita":{"official":"Guam","common":"Guam"},"jpn":{"official":"\u30B0\u30A2\u30E0","common":"\u30B0\u30A2\u30E0"},"kor":{"official":"\uAD0C","common":"\uAD0C"},"nld":{"official":"Guam","common":"Guam"},"per":{"official":"\u06AF\u0648\u0622\u0645","common":"\u06AF\u0648\u0622\u0645"},"pol":{"official":"Terytorium Guamu","common":"Guam"},"por":{"official":"Guam","common":"Guam"},"rus":{"official":"\u0413\u0443\u0430\u043C","common":"\u0413\u0443\u0430\u043C"},"slk":{"official":"Guam","common":"Guam"},"spa":{"official":"Guam","common":"Guam"},"srp":{"official":"Gvam","common":"Gvam"},"swe":{"official":"Guam","common":"Guam"},"tur":{"official":"Guam Topra\u011F\u0131","common":"Guam"},"urd":{"official":"\u06AF\u0648\u0627\u0645","common":"\u06AF\u0648\u0627\u0645"},"zho":{"official":"\u5173\u5C9B","common":"\u5173\u5C9B"}},"latlng":[13.46666666,144.78333333],"landlocked":false,"borders":[],"area":549,"flag":"\uD83C\uDDEC\uD83C\uDDFA","demonyms":{"eng":{"f":"Guamanian","m":"Guamanian"},"fra":{"f":"","m":""}}},{"name":{"common":"Guyana","official":"Co-operative Republic of Guyana","native":{"eng":{"official":"Co-operative Republic of Guyana","common":"Guyana"}}},"tld":[".gy"],"cca2":"GY","ccn3":"328","cca3":"GUY","cioc":"GUY","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"GYD":{"name":"Guyanese dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["92"]},"capital":["Georgetown"],"altSpellings":["GY","Co-operative Republic of Guyana"],"region":"Americas","subregion":"South America","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u063A\u064A\u0627\u0646\u0627 \u0627\u0644\u062A\u0639\u0627\u0648\u0646\u064A\u0629","common":"\u063A\u064A\u0627\u0646\u0627"},"ces":{"official":"Kooperativn\xed republika Guyana","common":"Guyana"},"deu":{"official":"Kooperative Republik Guyana","common":"Guyana"},"est":{"official":"Guyana Vabariik","common":"Guyana"},"fin":{"official":"Guayanan osuustoiminnallinen tasavalta","common":"Guayana"},"fra":{"official":"R\xe9publique coop\xe9rative de Guyana","common":"Guyana"},"hrv":{"official":"Zadruga Republika Gvajana","common":"Gvajana"},"hun":{"official":"Guyanai Sz\xf6vetkezeti K\xf6zt\xe1rsas\xe1g","common":"Guyana"},"ita":{"official":"Co -operative Republic of Guyana","common":"Guyana"},"jpn":{"official":"\u30AC\u30A4\u30A2\u30CA\u5171\u548C\u56FD","common":"\u30AC\u30A4\u30A2\u30CA"},"kor":{"official":"\uAC00\uC774\uC544\uB098 \uD611\uB3D9 \uACF5\uD654\uAD6D","common":"\uAC00\uC774\uC544\uB098"},"nld":{"official":"Co\xf6peratieve Republiek Guyana","common":"Guyana"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0639\u0627\u0648\u0646\u06CC \u06AF\u0648\u06CC\u0627\u0646","common":"\u06AF\u0648\u06CC\u0627\u0646"},"pol":{"official":"Kooperacyjna Republika Gujany","common":"Gujana"},"por":{"official":"Co -operative Rep\xfablica da Guiana","common":"Guiana"},"rus":{"official":"\u041A\u043E\u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0430\u0439\u0430\u043D\u0430","common":"\u0413\u0430\u0439\u0430\u043D\u0430"},"slk":{"official":"Guyansk\xe1 kooperat\xedvna republika","common":"Guyana"},"spa":{"official":"Rep\xfablica Cooperativa de Guyana","common":"Guyana"},"srp":{"official":"Kooperativna Republika Gvajana","common":"Gvajana"},"swe":{"official":"Kooperativa republiken Guyana","common":"Guyana"},"tur":{"official":"Guyana Kooperatif Cumhuriyeti","common":"Guyana"},"urd":{"official":"\u062A\u0639\u0627\u0648\u0646\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06AF\u06CC\u0627\u0646\u0627","common":"\u06AF\u06CC\u0627\u0646\u0627"},"zho":{"official":"\u572D\u4E9A\u90A3\u5171\u548C\u56FD","common":"\u572D\u4E9A\u90A3"}},"latlng":[5,-59],"landlocked":false,"borders":["BRA","SUR","VEN"],"area":214969,"flag":"\uD83C\uDDEC\uD83C\uDDFE","demonyms":{"eng":{"f":"Guyanese","m":"Guyanese"},"fra":{"f":"Guyanienne","m":"Guyanien"}}},{"name":{"common":"Hong Kong","official":"Hong Kong Special Administrative Region of the People\'s Republic of China","native":{"eng":{"official":"Hong Kong Special Administrative Region of the People\'s Republic of China","common":"Hong Kong"},"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A","common":"\u9999\u6E2F"}}},"tld":[".hk",".\u9999\u6E2F"],"cca2":"HK","ccn3":"344","cca3":"HKG","cioc":"HKG","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"HKD":{"name":"Hong Kong dollar","symbol":"$"}},"idd":{"root":"+8","suffixes":["52"]},"capital":["City of Victoria"],"altSpellings":["HK"],"region":"Asia","subregion":"Eastern Asia","languages":{"eng":"English","zho":"Chinese"},"translations":{"ara":{"official":"\u0645\u0646\u0637\u0642\u0629 \u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A \u0627\u0644\u0627\u062F\u0627\u0631\u064A\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A"},"ces":{"official":"Zvl\xe1\u0161tn\xed administrativn\xed oblast \u010C\xednsk\xe9 lidov\xe9 republiky Hongkong","common":"Hongkong"},"deu":{"official":"Sonderverwaltungszone Hongkong der Volksrepublik China","common":"Hongkong"},"est":{"official":"Hongkongi erihalduspiirkond","common":"Hongkong"},"fin":{"official":"Hong Kongin erityishallintoalue","common":"Hongkong"},"fra":{"official":"R\xe9gion administrative sp\xe9ciale de Hong Kong de la R\xe9publique populaire de Chine","common":"Hong Kong"},"hrv":{"official":"Hong Kong Posebnog upravnog podru\u010DjaNarodne Republike Kine","common":"Hong Kong"},"hun":{"official":"Hongkong","common":"Hongkong"},"ita":{"official":"Hong Kong Regione amministrativa speciale della Repubblica Popolare Cinese","common":"Hong Kong"},"jpn":{"official":"\u9999\u6E2F\u7279\u5225\u884C\u653F\u533A","common":"\u9999\u6E2F"},"kor":{"official":"\uC911\uD654\uC778\uBBFC\uACF5\uD654\uAD6D \uD64D\uCF69 \uD2B9\uBCC4\uD589\uC815\uAD6C","common":"\uD64D\uCF69"},"nld":{"official":"Hong Kong Speciale Administratieve Regio van de Volksrepubliek China","common":"Hongkong"},"per":{"official":"\u0647\u064F\u0646\u06AF \u06A9\u064F\u0646\u06AF","common":"\u0647\u064F\u0646\u06AF \u06A9\u064F\u0646\u06AF"},"pol":{"official":"Specjalny Region Administracyjny Chi\u0144skiej Republiki Ludowej Hongkong","common":"Hongkong"},"por":{"official":"Hong Kong Regi\xe3o Administrativa Especial da Rep\xfablica Popular da China","common":"Hong Kong"},"rus":{"official":"Hong Kong \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0440\u0430\u0439\u043E\u043D \u041A\u0438\u0442\u0430\u0439\u0441\u043A\u043E\u0439 \u041D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0438\u0442\u0430\u044F","common":"\u0413\u043E\u043D\u043A\u043E\u043D\u0433"},"slk":{"official":"\u0160peci\xe1lna administrat\xedvna oblas\u0165\u010C\xednskej \u013Eudovej republiky Hongkong","common":"Hongkong"},"spa":{"official":"Hong Kong Regi\xf3n Administrativa Especial de la Rep\xfablica Popular China","common":"Hong Kong"},"srp":{"official":"Hongkong specijalna administrativna oblast Narodne Republike Kine","common":"Hongkong"},"swe":{"official":"Hongkong","common":"Hongkong"},"tur":{"official":"\xe7in Halk Cumhuriyeti Hong Kong \xf6zel \u0130dari B\xf6lgesi","common":"Hong Kong"},"urd":{"official":"\u06C1\u0627\u0646\u06AF \u06A9\u0627\u0646\u06AF \u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u06CC\u0646 \u06A9\u0627 \u062E\u0635\u0648\u0635\u06CC \u0627\u0646\u062A\u0638\u0627\u0645\u06CC \u0639\u0644\u0627\u0642\u06C1","common":"\u06C1\u0627\u0646\u06AF \u06A9\u0627\u0646\u06AF"},"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A","common":"\u9999\u6E2F"}},"latlng":[22.267,114.188],"landlocked":false,"borders":["CHN"],"area":1104,"flag":"\uD83C\uDDED\uD83C\uDDF0","demonyms":{"eng":{"f":"Hong Konger","m":"Hong Konger"},"fra":{"f":"Hongkongaise","m":"Hongkongais"}}},{"name":{"common":"Heard Island and McDonald Islands","official":"Heard Island and McDonald Islands","native":{"eng":{"official":"Heard Island and McDonald Islands","common":"Heard Island and McDonald Islands"}}},"tld":[".hm",".aq"],"cca2":"HM","ccn3":"334","cca3":"HMD","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{},"idd":{"root":"","suffixes":[]},"capital":[],"altSpellings":["HM","Heard Island and McDonald Islands"],"region":"Antarctic","subregion":"","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u064A\u0631\u0629 \u0647\u064A\u0631\u062F \u0648\u062C\u0632\u0631 \u0645\u0627\u0643\u062F\u0648\u0646\u0627\u0644\u062F","common":"\u062C\u0632\u064A\u0631\u0629 \u0647\u064A\u0631\u062F \u0648\u062C\u0632\u0631 \u0645\u0627\u0643\u062F\u0648\u0646\u0627\u0644\u062F"},"ces":{"official":"Heard\u016Fv ostrov a McDonaldovy ostrovy","common":"Heard\u016Fv ostrov a McDonaldovy ostrovy"},"deu":{"official":"Heard und McDonaldinseln","common":"Heard und die McDonaldinseln"},"est":{"official":"Heardi ja McDonaldi saarte ala","common":"Heard ja McDonald"},"fin":{"official":"Heard ja McDonaldinsaaret","common":"Heard ja McDonaldinsaaret"},"fra":{"official":"\xceles Heard-et-MacDonald","common":"\xceles Heard-et-MacDonald"},"hrv":{"official":"Otok Heard i oto\u010Dje McDonald","common":"Otok Heard i oto\u010Dje McDonald"},"hun":{"official":"Heard-sziget \xe9s McDonald-szigetek","common":"Heard-sziget \xe9s McDonald-szigetek"},"ita":{"official":"Isole Heard e McDonald","common":"Isole Heard e McDonald"},"jpn":{"official":"\u30CF\u30FC\u30C9\u5CF6\u30FB\u30DE\u30AF\u30C9\u30CA\u30EB\u30C9\u8AF8\u5CF6","common":"\u30CF\u30FC\u30C9\u5CF6\u3068\u30DE\u30AF\u30C9\u30CA\u30EB\u30C9\u8AF8\u5CF6"},"kor":{"official":"\uD5C8\uB4DC \uB9E5\uB3C4\uB110\uB4DC \uC81C\uB3C4","common":"\uD5C8\uB4DC \uB9E5\uB3C4\uB110\uB4DC \uC81C\uB3C4"},"nld":{"official":"Heard en McDonaldeilanden","common":"Heard-en McDonaldeilanden"},"per":{"official":"\u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u062F \u0648 \u062C\u0632\u0627\u06CC\u0631 \u0645\u06A9\u200C\u062F\u0648\u0646\u0627\u0644\u062F","common":"\u062C\u0632\u06CC\u0631\u0647 \u0647\u0631\u062F \u0648 \u062C\u0632\u0627\u06CC\u0631 \u0645\u06A9\u200C\u062F\u0648\u0646\u0627\u0644\u062F"},"pol":{"official":"Terytorium Wysp Heard i McDonalda","common":"Wyspy Heard i McDonalda"},"por":{"official":"Ilha Heard e Ilhas McDonald","common":"Ilha Heard e Ilhas McDonald"},"rus":{"official":"\u041E\u0441\u0442\u0440\u043E\u0432 \u0425\u0435\u0440\u0434 \u0438 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u041C\u0430\u043A\u0434\u043E\u043D\u0430\u043B\u044C\u0434","common":"\u041E\u0441\u0442\u0440\u043E\u0432 \u0425\u0435\u0440\u0434 \u0438 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u041C\u0430\u043A\u0434\u043E\u043D\u0430\u043B\u044C\u0434"},"slk":{"official":"Terit\xf3rium Heardovho ostrova a Macdonaldov\xfdch ostrovov","common":"Heardov ostrov"},"spa":{"official":"Islas Heard y McDonald","common":"Islas Heard y McDonald"},"srp":{"official":"Herdovo ostrvo i Makdonaldova ostrva","common":"Herdovo ostrvo i Makdonaldova ostrva"},"swe":{"official":"Heard- och McDonald\xf6arna","common":"Heard- och McDonald\xf6arna"},"tur":{"official":"Heard Adas\u0131 ve McDonald Adalar\u0131","common":"Heard Adas\u0131 ve McDonald Adalar\u0131"},"urd":{"official":"\u062C\u0632\u06CC\u0631\u06C1 \u06C1\u0631\u0688 \u0648 \u062C\u0632\u0627\u0626\u0631 \u0645\u06A9\u0688\u0648\u0646\u0644\u0688","common":"\u062C\u0632\u06CC\u0631\u06C1 \u06C1\u0631\u0688 \u0648 \u062C\u0632\u0627\u0626\u0631 \u0645\u06A9\u0688\u0648\u0646\u0644\u0688"},"zho":{"official":"\u8D6B\u5FB7\u5C9B\u548C\u9EA6\u5F53\u52B3\u7FA4\u5C9B","common":"\u8D6B\u5FB7\u5C9B\u548C\u9EA6\u5F53\u52B3\u7FA4\u5C9B"}},"latlng":[-53.1,72.51666666],"landlocked":false,"borders":[],"area":412,"flag":"\uD83C\uDDED\uD83C\uDDF2","demonyms":{"eng":{"f":"Heard and McDonald Islander","m":"Heard and McDonald Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Honduras","official":"Republic of Honduras","native":{"spa":{"official":"Rep\xfablica de Honduras","common":"Honduras"}}},"tld":[".hn"],"cca2":"HN","ccn3":"340","cca3":"HND","cioc":"HON","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"HNL":{"name":"Honduran lempira","symbol":"L"}},"idd":{"root":"+5","suffixes":["04"]},"capital":["Tegucigalpa"],"altSpellings":["HN","Republic of Honduras","Rep\xfablica de Honduras"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0647\u0646\u062F\u0648\u0631\u0627\u0633","common":"\u0647\u0646\u062F\u0648\u0631\u0627\u0633"},"ces":{"official":"Hondurask\xe1 republika","common":"Honduras"},"deu":{"official":"Republik Honduras","common":"Honduras"},"est":{"official":"Hondurase Vabariik","common":"Honduras"},"fin":{"official":"Hondurasin tasavalta","common":"Honduras"},"fra":{"official":"R\xe9publique du Honduras","common":"Honduras"},"hrv":{"official":"Republika Honduras","common":"Honduras"},"hun":{"official":"Hondurasi K\xf6zt\xe1rsas\xe1g","common":"Honduras"},"ita":{"official":"Repubblica di Honduras","common":"Honduras"},"jpn":{"official":"\u30DB\u30F3\u30B8\u30E5\u30E9\u30B9\u5171\u548C\u56FD","common":"\u30DB\u30F3\u30B8\u30E5\u30E9\u30B9"},"kor":{"official":"\uC628\uB450\uB77C\uC2A4 \uACF5\uD654\uAD6D","common":"\uC628\uB450\uB77C\uC2A4"},"nld":{"official":"Republiek Honduras","common":"Honduras"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0647\u0646\u062F\u0648\u0631\u0627\u0633","common":"\u0647\u064F\u0646\u062F\u0648\u0631\u0627\u0633"},"pol":{"official":"Republika Hondurasu","common":"Honduras"},"por":{"official":"Rep\xfablica de Honduras","common":"Honduras"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u043E\u043D\u0434\u0443\u0440\u0430\u0441","common":"\u0413\u043E\u043D\u0434\u0443\u0440\u0430\u0441"},"slk":{"official":"Hondurask\xe1 republika","common":"Honduras"},"spa":{"official":"Rep\xfablica de Honduras","common":"Honduras"},"srp":{"official":"Republika Honduras","common":"Honduras"},"swe":{"official":"Republiken Honduras","common":"Honduras"},"tur":{"official":"Honduras Cumhuriyeti","common":"Honduras"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06C1\u0648\u0646\u0688\u0648\u0631\u0627\u0633","common":"\u06C1\u0648\u0646\u0688\u0648\u0631\u0627\u0633"},"zho":{"official":"\u6D2A\u90FD\u62C9\u65AF\u5171\u548C\u56FD","common":"\u6D2A\u90FD\u62C9\u65AF"}},"latlng":[15,-86.5],"landlocked":false,"borders":["GTM","SLV","NIC"],"area":112492,"flag":"\uD83C\uDDED\uD83C\uDDF3","demonyms":{"eng":{"f":"Honduran","m":"Honduran"},"fra":{"f":"Hondurienne","m":"Hondurien"}}},{"name":{"common":"Croatia","official":"Republic of Croatia","native":{"hrv":{"official":"Republika Hrvatska","common":"Hrvatska"}}},"tld":[".hr"],"cca2":"HR","ccn3":"191","cca3":"HRV","cioc":"CRO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["85"]},"capital":["Zagreb"],"altSpellings":["HR","Hrvatska","Republic of Croatia","Republika Hrvatska"],"region":"Europe","subregion":"Southeast Europe","languages":{"hrv":"Croatian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0631\u0648\u0627\u062A\u064A\u0627","common":"\u0643\u0631\u0648\u0627\u062A\u064A\u0627"},"ces":{"official":"Chorvatsk\xe1 republika","common":"Chorvatsko"},"deu":{"official":"Republik Kroatien","common":"Kroatien"},"est":{"official":"Horvaatia Vabariik","common":"Horvaatia"},"fin":{"official":"Kroatian tasavalta","common":"Kroatia"},"fra":{"official":"R\xe9publique de Croatie","common":"Croatie"},"hrv":{"official":"Republika Hrvatska","common":"Hrvatska"},"hun":{"official":"Horv\xe1t K\xf6zt\xe1rsas\xe1g","common":"Horv\xe1torsz\xe1g"},"ita":{"official":"Repubblica di Croazia","common":"Croazia"},"jpn":{"official":"\u30AF\u30ED\u30A2\u30C1\u30A2\u5171\u548C\u56FD","common":"\u30AF\u30ED\u30A2\u30C1\u30A2"},"kor":{"official":"\uD06C\uB85C\uC544\uD2F0\uC544 \uACF5\uD654\uAD6D","common":"\uD06C\uB85C\uC544\uD2F0\uC544"},"nld":{"official":"Republiek Kroati\xeb","common":"Kroati\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0631\u0648\u0627\u0633\u06CC","common":"\u06A9\u0631\u064F\u0648\u0627\u0633\u06CC"},"pol":{"official":"Republika Chorwacji","common":"Chorwacja"},"por":{"official":"Rep\xfablica da Cro\xe1cia","common":"Cro\xe1cia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F","common":"\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F"},"slk":{"official":"Chorv\xe1tska republika","common":"Chorv\xe1tsko"},"spa":{"official":"Rep\xfablica de Croacia","common":"Croacia"},"srp":{"official":"Republika Hrvatska","common":"Hrvatska"},"swe":{"official":"Republiken Kroatien","common":"Kroatien"},"tur":{"official":"H\u0131rvatistan Cumhuriyeti","common":"H\u0131rvatistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0631\u0648\u06CC\u0626\u0634\u0627","common":"\u06A9\u0631\u0648\u06CC\u0626\u0634\u0627"},"zho":{"official":"\u514B\u7F57\u5730\u4E9A\u5171\u548C\u56FD","common":"\u514B\u7F57\u5730\u4E9A"}},"latlng":[45.16666666,15.5],"landlocked":false,"borders":["BIH","HUN","MNE","SRB","SVN"],"area":56594,"flag":"\uD83C\uDDED\uD83C\uDDF7","demonyms":{"eng":{"f":"Croatian","m":"Croatian"},"fra":{"f":"Croate","m":"Croate"}}},{"name":{"common":"Haiti","official":"Republic of Haiti","native":{"fra":{"official":"R\xe9publique d\'Ha\xefti","common":"Ha\xefti"},"hat":{"official":"Repiblik Ayiti","common":"Ayiti"}}},"tld":[".ht"],"cca2":"HT","ccn3":"332","cca3":"HTI","cioc":"HAI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"HTG":{"name":"Haitian gourde","symbol":"G"}},"idd":{"root":"+5","suffixes":["09"]},"capital":["Port-au-Prince"],"altSpellings":["HT","Republic of Haiti","R\xe9publique d\'Ha\xefti","Repiblik Ayiti"],"region":"Americas","subregion":"Caribbean","languages":{"fra":"French","hat":"Haitian Creole"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0647\u0627\u064A\u062A\u064A","common":"\u0647\u0627\u064A\u062A\u064A"},"ces":{"official":"Republika Haiti","common":"Haiti"},"deu":{"official":"Republik Haiti","common":"Haiti"},"est":{"official":"Haiti Vabariik","common":"Haiti"},"fin":{"official":"Haitin tasavalta","common":"Haiti"},"fra":{"official":"R\xe9publique d\'Ha\xefti","common":"Ha\xefti"},"hrv":{"official":"Republika Haiti","common":"Haiti"},"hun":{"official":"Haiti K\xf6zt\xe1rsas\xe1g","common":"Haiti"},"ita":{"official":"Repubblica di Haiti","common":"Haiti"},"jpn":{"official":"\u30CF\u30A4\u30C1\u5171\u548C\u56FD","common":"\u30CF\u30A4\u30C1"},"kor":{"official":"\uC544\uC774\uD2F0 \uACF5\uD654\uAD6D","common":"\uC544\uC774\uD2F0"},"nld":{"official":"Republiek Ha\xefti","common":"Ha\xefti"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0647\u0627\u0626\u06CC\u062A\u06CC","common":"\u0647\u0627\u0626\u06CC\u062A\u06CC"},"pol":{"official":"Republika Haiti","common":"Haiti"},"por":{"official":"Rep\xfablica do Haiti","common":"Haiti"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0413\u0430\u0438\u0442\u0438","common":"\u0413\u0430\u0438\u0442\u0438"},"slk":{"official":"Haitsk\xe1 republika","common":"Haiti"},"spa":{"official":"Rep\xfablica de Hait\xed","common":"Hait\xed"},"srp":{"official":"Republika Haiti","common":"Haiti"},"swe":{"official":"Republiken Haiti","common":"Haiti"},"tur":{"official":"Haiti Cumhuriyeti","common":"Haiti"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06C1\u06CC\u0679\u06CC","common":"\u06C1\u06CC\u0679\u06CC"},"zho":{"official":"\u6D77\u5730\u5171\u548C\u56FD","common":"\u6D77\u5730"}},"latlng":[19,-72.41666666],"landlocked":false,"borders":["DOM"],"area":27750,"flag":"\uD83C\uDDED\uD83C\uDDF9","demonyms":{"eng":{"f":"Haitian","m":"Haitian"},"fra":{"f":"Ha\xeftienne","m":"Ha\xeftien"}}},{"name":{"common":"Hungary","official":"Hungary","native":{"hun":{"official":"Magyarorsz\xe1g","common":"Magyarorsz\xe1g"}}},"tld":[".hu"],"cca2":"HU","ccn3":"348","cca3":"HUN","cioc":"HUN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"HUF":{"name":"Hungarian forint","symbol":"Ft"}},"idd":{"root":"+3","suffixes":["6"]},"capital":["Budapest"],"altSpellings":["HU"],"region":"Europe","subregion":"Central Europe","languages":{"hun":"Hungarian"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0645\u062C\u0631\u064A\u0629","common":"\u0627\u0644\u0645\u062C\u0631"},"ces":{"official":"Ma\u010Farsko","common":"Ma\u010Farsko"},"deu":{"official":"Ungarn","common":"Ungarn"},"est":{"official":"Ungari","common":"Ungari"},"fin":{"official":"Unkari","common":"Unkari"},"fra":{"official":"Hongrie","common":"Hongrie"},"hrv":{"official":"Mad\u017Earska","common":"Ma\u0111arska"},"hun":{"official":"Magyarorsz\xe1g","common":"Magyarorsz\xe1g"},"ita":{"official":"Ungheria","common":"Ungheria"},"jpn":{"official":"\u30CF\u30F3\u30AC\u30EA\u30FC","common":"\u30CF\u30F3\u30AC\u30EA\u30FC"},"kor":{"official":"\uD5DD\uAC00\uB9AC","common":"\uD5DD\uAC00\uB9AC"},"nld":{"official":"Hongarije","common":"Hongarije"},"per":{"official":"\u0645\u062C\u0627\u0631\u0633\u062A\u0627\u0646","common":"\u0645\u062C\u0627\u0631\u0633\u062A\u0627\u0646"},"pol":{"official":"W\u0119gry","common":"W\u0119gry"},"por":{"official":"Hungria","common":"Hungria"},"rus":{"official":"\u0412\u0435\u043D\u0433\u0440\u0438\u044F","common":"\u0412\u0435\u043D\u0433\u0440\u0438\u044F"},"slk":{"official":"Ma\u010Farsko","common":"Ma\u010Farsko"},"spa":{"official":"Hungr\xeda","common":"Hungr\xeda"},"srp":{"official":"Madjarska","common":"Madjarska"},"swe":{"official":"Ungern","common":"Ungern"},"tur":{"official":"Macaristan","common":"Macaristan"},"urd":{"official":"\u0645\u062C\u0627\u0631\u0633\u062A\u0627\u0646","common":"\u0645\u062C\u0627\u0631\u0633\u062A\u0627\u0646"},"zho":{"official":"\u5308\u7259\u5229","common":"\u5308\u7259\u5229"}},"latlng":[47,20],"landlocked":true,"borders":["AUT","HRV","ROU","SRB","SVK","SVN","UKR"],"area":93028,"flag":"\uD83C\uDDED\uD83C\uDDFA","demonyms":{"eng":{"f":"Hungarian","m":"Hungarian"},"fra":{"f":"Hongroise","m":"Hongrois"}}},{"name":{"common":"Indonesia","official":"Republic of Indonesia","native":{"ind":{"official":"Republik Indonesia","common":"Indonesia"}}},"tld":[".id"],"cca2":"ID","ccn3":"360","cca3":"IDN","cioc":"INA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"IDR":{"name":"Indonesian rupiah","symbol":"Rp"}},"idd":{"root":"+6","suffixes":["2"]},"capital":["Jakarta"],"altSpellings":["ID","Republic of Indonesia","Republik Indonesia"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"ind":"Indonesian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627","common":"\u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627"},"ces":{"official":"Indon\xe9sk\xe1 republika","common":"Indon\xe9sie"},"deu":{"official":"Republik Indonesien","common":"Indonesien"},"est":{"official":"Indoneesia Vabariik","common":"Indoneesia"},"fin":{"official":"Indonesian tasavalta","common":"Indonesia"},"fra":{"official":"R\xe9publique d\'Indon\xe9sie","common":"Indon\xe9sie"},"hrv":{"official":"Republika Indonezija","common":"Indonezija"},"hun":{"official":"Indon\xe9z K\xf6zt\xe1rsas\xe1g","common":"Indon\xe9zia"},"ita":{"official":"Repubblica di Indonesia","common":"Indonesia"},"jpn":{"official":"\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2\u5171\u548C\u56FD","common":"\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2"},"kor":{"official":"\uC778\uB3C4\uB124\uC2DC\uC544 \uACF5\uD654\uAD6D","common":"\uC778\uB3C4\uB124\uC2DC\uC544"},"nld":{"official":"Republiek Indonesi\xeb","common":"Indonesi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0646\u062F\u0648\u0646\u0632\u06CC","common":"\u0627\u0646\u062F\u0648\u0646\u0632\u06CC"},"pol":{"official":"Republika Indonezji","common":"Indonezja"},"por":{"official":"Rep\xfablica da Indon\xe9sia","common":"Indon\xe9sia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F","common":"\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u044F"},"slk":{"official":"Indon\xe9zska republika","common":"Indon\xe9zia"},"spa":{"official":"Rep\xfablica de Indonesia","common":"Indonesia"},"srp":{"official":"Republika Indonezija","common":"Indonezija"},"swe":{"official":"Republiken Indonesien","common":"Indonesien"},"tur":{"official":"Endonezya Cumhuriyeti","common":"Endonezya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0646\u0688\u0648\u0646\u06CC\u0634\u06CC\u0627","common":"\u0627\u0646\u0688\u0648\u0646\u06CC\u0634\u06CC\u0627"},"zho":{"official":"\u5370\u5EA6\u5C3C\u897F\u4E9A\u5171\u548C\u56FD","common":"\u5370\u5EA6\u5C3C\u897F\u4E9A"}},"latlng":[-5,120],"landlocked":false,"borders":["TLS","MYS","PNG"],"area":1904569,"flag":"\uD83C\uDDEE\uD83C\uDDE9","demonyms":{"eng":{"f":"Indonesian","m":"Indonesian"},"fra":{"f":"Indon\xe9sienne","m":"Indon\xe9sien"}}},{"name":{"common":"Isle of Man","official":"Isle of Man","native":{"eng":{"official":"Isle of Man","common":"Isle of Man"},"glv":{"official":"Ellan Vannin or Mannin","common":"Mannin"}}},"tld":[".im"],"cca2":"IM","ccn3":"833","cca3":"IMN","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"GBP":{"name":"British pound","symbol":"\xa3"},"IMP":{"name":"Manx pound","symbol":"\xa3"}},"idd":{"root":"+4","suffixes":["4"]},"capital":["Douglas"],"altSpellings":["IM","Ellan Vannin","Mann","Mannin"],"region":"Europe","subregion":"Northern Europe","languages":{"eng":"English","glv":"Manx"},"translations":{"ara":{"official":"\u062C\u0632\u064A\u0631\u0629 \u0645\u0627\u0646","common":"\u062C\u0632\u064A\u0631\u0629 \u0645\u0627\u0646"},"ces":{"official":"Ostrov Man","common":"Ostrov Man"},"deu":{"official":"Isle of Man","common":"Insel Man"},"est":{"official":"Mani saar","common":"Mani saar"},"fin":{"official":"Mansaari","common":"Mansaari"},"fra":{"official":"Isle of Man","common":"\xcele de Man"},"hrv":{"official":"Mana ostrvo","common":"Otok Man"},"hun":{"official":"Man","common":"Man"},"ita":{"official":"Isola di Man","common":"Isola di Man"},"jpn":{"official":"\u30DE\u30F3\u5CF6","common":"\u30DE\u30F3\u5CF6"},"kor":{"official":"\uB9E8\uC12C","common":"\uB9E8\uC12C"},"nld":{"official":"Isle of Man","common":"Isle of Man"},"per":{"official":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u0645\u064E\u0646","common":"\u062C\u0632\u06CC\u0631\u0647\u0654 \u0645\u064E\u0646"},"pol":{"official":"Wyspa Man","common":"Wyspa Man"},"por":{"official":"Isle of Man","common":"Ilha de Man"},"rus":{"official":"\u041E\u0441\u0442\u0440\u043E\u0432 \u041C\u044D\u043D","common":"\u041E\u0441\u0442\u0440\u043E\u0432 \u041C\u044D\u043D"},"slk":{"official":"Ostrov Man","common":"Man"},"spa":{"official":"Isla de Man","common":"Isla de Man"},"srp":{"official":"Ostrvo Men","common":"Men Ostrvo"},"swe":{"official":"Isle of Man","common":"Isle of Man"},"tur":{"official":"Man Adas\u0131","common":"Man Adas\u0131"},"urd":{"official":"\u0622\u0626\u0644 \u0622\u0641 \u0645\u06CC\u0646","common":"\u0622\u0626\u0644 \u0622\u0641 \u0645\u06CC\u0646"},"zho":{"official":"\u9A6C\u6069\u5C9B","common":"\u9A6C\u6069\u5C9B"}},"latlng":[54.25,-4.5],"landlocked":false,"borders":[],"area":572,"flag":"\uD83C\uDDEE\uD83C\uDDF2","demonyms":{"eng":{"f":"Manx","m":"Manx"},"fra":{"f":"","m":""}}},{"name":{"common":"India","official":"Republic of India","native":{"eng":{"official":"Republic of India","common":"India"},"hin":{"official":"\u092D\u093E\u0930\u0924 \u0917\u0923\u0930\u093E\u091C\u094D\u092F","common":"\u092D\u093E\u0930\u0924"},"tam":{"official":"\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0B95\u0BCD \u0B95\u0BC1\u0B9F\u0BBF\u0BAF\u0BB0\u0B9A\u0BC1","common":"\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"}}},"tld":[".in"],"cca2":"IN","ccn3":"356","cca3":"IND","cioc":"IND","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"INR":{"name":"Indian rupee","symbol":"\u20B9"}},"idd":{"root":"+9","suffixes":["1"]},"capital":["New Delhi"],"altSpellings":["IN","Bh\u0101rat","Republic of India","Bharat Ganrajya","\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"],"region":"Asia","subregion":"Southern Asia","languages":{"eng":"English","hin":"Hindi","tam":"Tamil"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0647\u0646\u062F","common":"\u0627\u0644\u0647\u0646\u062F"},"ces":{"official":"Indick\xe1 republika","common":"Indie"},"deu":{"official":"Republik Indien","common":"Indien"},"est":{"official":"India Vabariik","common":"India"},"fin":{"official":"Intian tasavalta","common":"Intia"},"fra":{"official":"R\xe9publique de l\'Inde","common":"Inde"},"hrv":{"official":"Republika Indija","common":"Indija"},"hun":{"official":"Indiai K\xf6zt\xe1rsas\xe1g","common":"India"},"ita":{"official":"Repubblica dell\'India","common":"India"},"jpn":{"official":"\u30A4\u30F3\u30C9","common":"\u30A4\u30F3\u30C9"},"kor":{"official":"\uC778\uB3C4 \uACF5\uD654\uAD6D","common":"\uC778\uB3C4"},"nld":{"official":"Republiek India","common":"India"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0647\u0646\u062F\u0648\u0633\u062A\u0627\u0646","common":"\u0647\u0646\u062F"},"pol":{"official":"Republika Indii","common":"Indie"},"por":{"official":"Rep\xfablica da \xcdndia","common":"\xcdndia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0418\u043D\u0434\u0438\u044F","common":"\u0418\u043D\u0434\u0438\u044F"},"slk":{"official":"Indick\xe1 republika","common":"India"},"spa":{"official":"Rep\xfablica de la India","common":"India"},"srp":{"official":"Republika Indija","common":"Indija"},"swe":{"official":"Republiken Indien","common":"Indien"},"tur":{"official":"Hindistan Cumhuriyeti","common":"Hindistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0628\u06BE\u0627\u0631\u062A","common":"\u0628\u06BE\u0627\u0631\u062A"},"zho":{"official":"\u5370\u5EA6\u5171\u548C\u56FD","common":"\u5370\u5EA6"}},"latlng":[20,77],"landlocked":false,"borders":["BGD","BTN","MMR","CHN","NPL","PAK"],"area":3287590,"flag":"\uD83C\uDDEE\uD83C\uDDF3","demonyms":{"eng":{"f":"Indian","m":"Indian"},"fra":{"f":"Indienne","m":"Indien"}}},{"name":{"common":"British Indian Ocean Territory","official":"British Indian Ocean Territory","native":{"eng":{"official":"British Indian Ocean Territory","common":"British Indian Ocean Territory"}}},"tld":[".io"],"cca2":"IO","ccn3":"086","cca3":"IOT","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+2","suffixes":["46"]},"capital":["Diego Garcia"],"altSpellings":["IO"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0625\u0642\u0644\u064A\u0645 \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0646\u062F\u064A \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A","common":"\u0625\u0642\u0644\u064A\u0645 \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0646\u062F\u064A \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A"},"ces":{"official":"Britsk\xe9 indickooce\xe1nsk\xe9 \xfazem\xed","common":"Britsk\xe9 indickooce\xe1nsk\xe9 \xfazem\xed"},"deu":{"official":"Britisches Territorium im Indischen Ozean","common":"Britisches Territorium im Indischen Ozean"},"est":{"official":"Briti India ookeani ala","common":"Briti India ookeani ala"},"fin":{"official":"Brittil\xe4inen Intian valtameren alue","common":"Brittil\xe4inen Intian valtameren alue"},"fra":{"official":"Territoire britannique de l\' oc\xe9an Indien","common":"Territoire britannique de l\'oc\xe9an Indien"},"hrv":{"official":"British Indian Ocean Territory","common":"Britanski Indijskooceanski teritorij"},"hun":{"official":"Brit Indiai-\xf3ce\xe1ni Ter\xfclet","common":"Brit Indiai-\xf3ce\xe1ni Ter\xfclet"},"ita":{"official":"Territorio britannico dell\'Oceano Indiano","common":"Territorio britannico dell\'oceano indiano"},"jpn":{"official":"\u82F1\u9818\u30A4\u30F3\u30C9\u6D0B\u5730\u57DF","common":"\u30A4\u30AE\u30EA\u30B9\u9818\u30A4\u30F3\u30C9\u6D0B\u5730\u57DF"},"kor":{"official":"\uC778\uB3C4 \uACF5\uD654\uAD6D","common":"\uC778\uB3C4"},"nld":{"official":"Brits Indische Oceaan Territorium","common":"Britse Gebieden in de Indische Oceaan"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627 \u062F\u0631 \u0627\u0642\u06CC\u0627\u0646\u0648\u0633 \u0647\u0646\u062F","common":"\u0642\u0644\u0645\u0631\u0648 \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627 \u062F\u0631 \u0627\u0642\u06CC\u0627\u0646\u0648\u0633 \u0647\u0646\u062F"},"pol":{"official":"Brytyjskie Terytorium Oceanu Indyjskiego","common":"Brytyjskie Terytorium Oceanu Indyjskiego"},"por":{"official":"British Indian Ocean Territory","common":"Territ\xf3rio Brit\xe2nico do Oceano \xcdndico"},"rus":{"official":"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0418\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043E\u043A\u0435\u0430\u043D\u0430","common":"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0432 \u0418\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u043C \u043E\u043A\u0435\u0430\u043D\u0435"},"slk":{"official":"Britsk\xe9 indickooce\xe1nske \xfazemie","common":"Britsk\xe9 indickooce\xe1nske \xfazemie"},"spa":{"official":"Territorio Brit\xe1nico del Oc\xe9ano \xcdndico","common":"Territorio Brit\xe1nico del Oc\xe9ano \xcdndico"},"srp":{"official":"Britanska Teritorija Indijskog Okeana","common":"Britanska Teritorija Indijskog Okeana"},"swe":{"official":"Brittiska territoriet i Indiska Oceanen","common":"Brittiska territoriet i Indiska Oceanen"},"tur":{"official":"Britanya Hint Okyanusu Topraklar\u0131","common":"Britanya Hint Okyanusu Topraklar\u0131"},"urd":{"official":"\u0628\u0631\u0637\u0627\u0646\u0648\u06CC \u0628\u062D\u0631\u06C1\u0646\u062F \u062E\u0637\u06C1","common":"\u0628\u0631\u0637\u0627\u0646\u0648\u06CC \u0628\u062D\u0631\u06C1\u0646\u062F \u062E\u0637\u06C1"},"zho":{"official":"\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730","common":"\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730"}},"latlng":[-6,71.5],"landlocked":false,"borders":[],"area":60,"flag":"\uD83C\uDDEE\uD83C\uDDF4","demonyms":{"eng":{"f":"Indian","m":"Indian"},"fra":{"f":"","m":""}}},{"name":{"common":"Ireland","official":"Republic of Ireland","native":{"eng":{"official":"Republic of Ireland","common":"Ireland"},"gle":{"official":"Poblacht na h\xc9ireann","common":"\xc9ire"}}},"tld":[".ie"],"cca2":"IE","ccn3":"372","cca3":"IRL","cioc":"IRL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["53"]},"capital":["Dublin"],"altSpellings":["IE","\xc9ire","Republic of Ireland","Poblacht na h\xc9ireann"],"region":"Europe","subregion":"Northern Europe","languages":{"eng":"English","gle":"Irish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u064A\u0631\u0644\u0646\u062F\u0627","common":"\u0623\u064A\u0631\u0644\u0646\u062F\u0627"},"ces":{"official":"Irsko","common":"Irsko"},"deu":{"official":"Republik Irland","common":"Irland"},"est":{"official":"Iirimaa","common":"Iirimaa"},"fin":{"official":"Irlannin tasavalta","common":"Irlanti"},"fra":{"official":"R\xe9publique d\'Irlande","common":"Irlande"},"hrv":{"official":"Republika Irska","common":"Irska"},"hun":{"official":"\xcdr K\xf6zt\xe1rsas\xe1g","common":"\xcdrorsz\xe1g"},"ita":{"official":"Repubblica d\'Irlanda","common":"Irlanda"},"jpn":{"official":"\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9","common":"\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9"},"kor":{"official":"\uC544\uC77C\uB79C\uB4DC \uACF5\uD654\uAD6D","common":"\uC544\uC77C\uB79C\uB4DC"},"nld":{"official":"Republic of Ireland","common":"Ierland"},"per":{"official":"\u0627\u06CC\u0631\u0644\u0646\u062F","common":"\u0627\u06CC\u0631\u0644\u0646\u062F"},"pol":{"official":"Republika Irlandii","common":"Irlandia"},"por":{"official":"Rep\xfablica da Irlanda","common":"Irlanda"},"rus":{"official":"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F","common":"\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F"},"slk":{"official":"\xcdrska republika","common":"\xcdrsko"},"spa":{"official":"Rep\xfablica de Irlanda","common":"Irlanda"},"srp":{"official":"Republika Irska","common":"Irska"},"swe":{"official":"Irland","common":"Irland"},"tur":{"official":"\u0130rlanda Cumhuriyeti","common":"\u0130rlanda"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0632\u06CC\u0631\u06C1 \u0622\u0626\u0631\u0644\u06CC\u0646\u0688","common":"\u062C\u0632\u06CC\u0631\u06C1 \u0622\u0626\u0631\u0644\u06CC\u0646\u0688"},"zho":{"official":"\u7231\u5C14\u5170\u5171\u548C\u56FD","common":"\u7231\u5C14\u5170"}},"latlng":[53,-8],"landlocked":false,"borders":["GBR"],"area":70273,"flag":"\uD83C\uDDEE\uD83C\uDDEA","demonyms":{"eng":{"f":"Irish","m":"Irish"},"fra":{"f":"Irlandaise","m":"Irlandais"}}},{"name":{"common":"Iran","official":"Islamic Republic of Iran","native":{"fas":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0627\u06CC\u0631\u0627\u0646","common":"\u0627\u06CC\u0631\u0627\u0646"}}},"tld":[".ir","\u0627\u06CC\u0631\u0627\u0646."],"cca2":"IR","ccn3":"364","cca3":"IRN","cioc":"IRI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"IRR":{"name":"Iranian rial","symbol":"\uFDFC"}},"idd":{"root":"+9","suffixes":["8"]},"capital":["Tehran"],"altSpellings":["IR","Islamic Republic of Iran","Iran, Islamic Republic of","Jomhuri-ye Esl\u0101mi-ye Ir\u0101n"],"region":"Asia","subregion":"Southern Asia","languages":{"fas":"Persian (Farsi)"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0625\u064A\u0631\u0627\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629","common":"\u0625\u064A\u0631\u0627\u0646"},"ces":{"official":"Isl\xe1msk\xe1 republika \xcdr\xe1n","common":"\xcdr\xe1n"},"deu":{"official":"Islamische Republik Iran","common":"Iran"},"est":{"official":"Iraani Islamivabariik","common":"Iraan"},"fin":{"official":"Iranin islamilainen tasavalta","common":"Iran"},"fra":{"official":"R\xe9publique islamique d\'Iran","common":"Iran"},"hrv":{"official":"Islamska Republika Iran","common":"Iran"},"hun":{"official":"Ir\xe1ni Iszl\xe1m K\xf6zt\xe1rsas\xe1g","common":"Ir\xe1n"},"ita":{"official":"Repubblica islamica dell\'Iran","common":"Iran"},"jpn":{"official":"\u30A4\u30E9\u30F3\u30FB\u30A4\u30B9\u30E9\u30E0\u5171\u548C\u56FD","common":"\u30A4\u30E9\u30F3"},"kor":{"official":"\uC774\uB780 \uC774\uC2AC\uB78C \uACF5\uD654\uAD6D","common":"\uC774\uB780"},"nld":{"official":"Islamitische Republiek Iran","common":"Iran"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0627\u06CC\u0631\u0627\u0646","common":"\u0627\u06CC\u0631\u0627\u0646"},"pol":{"official":"Islamska Republika Iranu","common":"Iran"},"por":{"official":"Rep\xfablica Isl\xe2mica do Ir\xe3","common":"Ir\xe3o"},"rus":{"official":"\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0418\u0440\u0430\u043D","common":"\u0418\u0440\u0430\u043D"},"slk":{"official":"Ir\xe1nska islamsk\xe1 republika","common":"Ir\xe1n"},"spa":{"official":"Rep\xfablica Isl\xe1mica de Ir\xe1n","common":"Iran"},"srp":{"official":"Islamska Republika Iran","common":"Iran"},"swe":{"official":"Islamiska republiken Iran","common":"Iran"},"tur":{"official":"\u0130ran \u0130slam Cumhuriyeti","common":"\u0130ran"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u06CC\u0631\u0627\u0646","common":"\u0627\u06CC\u0631\u0627\u0646"},"zho":{"official":"\u4F0A\u6717\u4F0A\u65AF\u5170\u5171\u548C\u56FD","common":"\u4F0A\u6717"}},"latlng":[32,53],"landlocked":false,"borders":["AFG","ARM","AZE","IRQ","PAK","TUR","TKM"],"area":1648195,"flag":"\uD83C\uDDEE\uD83C\uDDF7","demonyms":{"eng":{"f":"Iranian","m":"Iranian"},"fra":{"f":"Iranienne","m":"Iranien"}}},{"name":{"common":"Iraq","official":"Republic of Iraq","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0627\u0642","common":"\u0627\u0644\u0639\u0631\u0627\u0642"},"arc":{"official":"\u0729\u0718\u073C\u071B\u0722\u0735\u0710 \u0710\u071D\u073C\u072A\u0732\u0729","common":"\u0729\u0718\u073C\u071B\u0722\u0735\u0710"},"ckb":{"official":"\u06A9\u06C6\u0645\u0627\u0631\u06CC \u0639\u06CE\u0631\u0627\u0642","common":"\u06A9\u06C6\u0645\u0627\u0631\u06CC"}}},"tld":[".iq"],"cca2":"IQ","ccn3":"368","cca3":"IRQ","cioc":"IRQ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"IQD":{"name":"Iraqi dinar","symbol":"\u0639.\u062F"}},"idd":{"root":"+9","suffixes":["64"]},"capital":["Baghdad"],"altSpellings":["IQ","Republic of Iraq","Jumh\u016Briyyat al-\u2018Ir\u0101q"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic","arc":"Aramaic","ckb":"Sorani"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0627\u0642","common":"\u0627\u0644\u0639\u0631\u0627\u0642"},"ces":{"official":"Ir\xe1ck\xe1 republika","common":"Ir\xe1k"},"deu":{"official":"Republik Irak","common":"Irak"},"est":{"official":"Iraagi Vabariik","common":"Iraak"},"fin":{"official":"Irakin tasavalta","common":"Irak"},"fra":{"official":"R\xe9publique d\'Irak","common":"Irak"},"hrv":{"official":"Republika Irak","common":"Irak"},"hun":{"official":"Iraki K\xf6zt\xe1rsas\xe1g","common":"Irak"},"ita":{"official":"Repubblica dell\'Iraq","common":"Iraq"},"jpn":{"official":"\u30A4\u30E9\u30AF\u5171\u548C\u56FD","common":"\u30A4\u30E9\u30AF"},"kor":{"official":"\uC774\uB77C\uD06C \uACF5\uD654\uAD6D","common":"\uC774\uB77C\uD06C"},"nld":{"official":"Republiek Irak","common":"Irak"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0639\u0631\u0627\u0642","common":"\u0639\u0631\u0627\u0642"},"pol":{"official":"Republika Iraku","common":"Irak"},"por":{"official":"Rep\xfablica do Iraque","common":"Iraque"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0418\u0440\u0430\u043A","common":"\u0418\u0440\u0430\u043A"},"slk":{"official":"Irack\xe1 republika","common":"Irak"},"spa":{"official":"Rep\xfablica de Irak","common":"Irak"},"srp":{"official":"Republika Irak","common":"Irak"},"swe":{"official":"Republiken Irak","common":"Irak"},"tur":{"official":"Irak Cumhuriyeti","common":"Irak"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0639\u0631\u0627\u0642","common":"\u0639\u0631\u0627\u0642"},"zho":{"official":"\u4F0A\u62C9\u514B\u5171\u548C\u56FD","common":"\u4F0A\u62C9\u514B"}},"latlng":[33,44],"landlocked":false,"borders":["IRN","JOR","KWT","SAU","SYR","TUR"],"area":438317,"flag":"\uD83C\uDDEE\uD83C\uDDF6","demonyms":{"eng":{"f":"Iraqi","m":"Iraqi"},"fra":{"f":"Irakienne","m":"Irakien"}}},{"name":{"common":"Iceland","official":"Iceland","native":{"isl":{"official":"\xcdsland","common":"\xcdsland"}}},"tld":[".is"],"cca2":"IS","ccn3":"352","cca3":"ISL","cioc":"ISL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"ISK":{"name":"Icelandic kr\xf3na","symbol":"kr"}},"idd":{"root":"+3","suffixes":["54"]},"capital":["Reykjavik"],"altSpellings":["IS","Island","Republic of Iceland","L\xfd\xf0veldi\xf0 \xcdsland"],"region":"Europe","subregion":"Northern Europe","languages":{"isl":"Icelandic"},"translations":{"ara":{"official":"\u0622\u064A\u0633\u0644\u0646\u062F\u0627","common":"\u0622\u064A\u0633\u0644\u0646\u062F\u0627"},"ces":{"official":"Island","common":"Island"},"deu":{"official":"Island","common":"Island"},"est":{"official":"Islandi Vabariik","common":"Island"},"fin":{"official":"Islanti","common":"Islanti"},"fra":{"official":"R\xe9publique d\'Islande","common":"Islande"},"hrv":{"official":"Island","common":"Island"},"hun":{"official":"Izland","common":"Izland"},"ita":{"official":"Islanda","common":"Islanda"},"jpn":{"official":"\u30A2\u30A4\u30B9\u30E9\u30F3\u30C9","common":"\u30A2\u30A4\u30B9\u30E9\u30F3\u30C9"},"kor":{"official":"\uC544\uC774\uC2AC\uB780\uB4DC \uACF5\uD654\uAD6D","common":"\uC544\uC774\uC2AC\uB780\uB4DC"},"nld":{"official":"IJsland","common":"IJsland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u06CC\u0633\u0644\u0646\u062F","common":"\u0627\u06CC\u0633\u0644\u0646\u062F"},"pol":{"official":"Republika Islandii","common":"Islandia"},"por":{"official":"Isl\xe2ndia","common":"Isl\xe2ndia"},"rus":{"official":"\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F","common":"\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F"},"slk":{"official":"Islandsk\xe1 republika","common":"Island"},"spa":{"official":"Islandia","common":"Islandia"},"srp":{"official":"Republika Island","common":"Island"},"swe":{"official":"Island","common":"Island"},"tur":{"official":"\u0130zlanda","common":"\u0130zlanda"},"urd":{"official":"\u0622\u0626\u0633 \u0644\u06CC\u0646\u0688","common":"\u0622\u0626\u0633 \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u51B0\u5C9B","common":"\u51B0\u5C9B"}},"latlng":[65,-18],"landlocked":false,"borders":[],"area":103000,"flag":"\uD83C\uDDEE\uD83C\uDDF8","demonyms":{"eng":{"f":"Icelander","m":"Icelander"},"fra":{"f":"Islandaise","m":"Islandais"}}},{"name":{"common":"Israel","official":"State of Israel","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0625\u0633\u0631\u0627\u0626\u064A\u0644","common":"\u0625\u0633\u0631\u0627\u0626\u064A\u0644"},"heb":{"official":"\u05DE\u05D3\u05D9\u05E0\u05EA \u05D9\u05E9\u05E8\u05D0\u05DC","common":"\u05D9\u05E9\u05E8\u05D0\u05DC"}}},"tld":[".il"],"cca2":"IL","ccn3":"376","cca3":"ISR","cioc":"ISR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"ILS":{"name":"Israeli new shekel","symbol":"\u20AA"}},"idd":{"root":"+9","suffixes":["72"]},"capital":["Jerusalem"],"altSpellings":["IL","State of Israel","Med\u012Bnat Yisr\u0101\'el"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic","heb":"Hebrew"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0625\u0633\u0631\u0627\u0626\u064A\u0644","common":"\u0625\u0633\u0631\u0627\u0626\u064A\u0644"},"ces":{"official":"St\xe1t Izrael","common":"Izrael"},"deu":{"official":"Staat Israel","common":"Israel"},"est":{"official":"Iisraeli Riik","common":"Iisrael"},"fin":{"official":"Israelin valtio","common":"Israel"},"fra":{"official":"\xc9tat d\'Isra\xebl","common":"Isra\xebl"},"hrv":{"official":"Dr\u017Eava Izrael","common":"Izrael"},"hun":{"official":"Izrael","common":"Izrael"},"ita":{"official":"Stato di Israele","common":"Israele"},"jpn":{"official":"\u30A4\u30B9\u30E9\u30A8\u30EB\u56FD","common":"\u30A4\u30B9\u30E9\u30A8\u30EB"},"kor":{"official":"\uC774\uC2A4\uB77C\uC5D8\uAD6D","common":"\uC774\uC2A4\uB77C\uC5D8"},"nld":{"official":"Staat Isra\xebl","common":"Isra\xebl"},"per":{"official":"\u0641\u0644\u0633\u0637\u064A\u0646 \u0627\u0634\u063A\u0627\u0644\u06CC","common":"\u0641\u0644\u0633\u0637\u064A\u0646 \u0627\u0634\u063A\u0627\u0644\u06CC"},"pol":{"official":"Pa\u0144stwo Izrael","common":"Izrael"},"por":{"official":"Estado de Israel","common":"Israel"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u0418\u0437\u0440\u0430\u0438\u043B\u044C","common":"\u0418\u0437\u0440\u0430\u0438\u043B\u044C"},"slk":{"official":"Izraelsk\xfd \u0161t\xe1t","common":"Izrael"},"spa":{"official":"Estado de Israel","common":"Israel"},"srp":{"official":"Dr\u017Eava Izrael","common":"Izrael"},"swe":{"official":"Staten Israel","common":"Israel"},"tur":{"official":"\u0130srail Devleti","common":"\u0130srail"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0627\u0633\u0631\u0627\u0626\u06CC\u0644","common":"\u0627\u0633\u0631\u0627\u0626\u06CC\u0644"},"zho":{"official":"\u4EE5\u8272\u5217\u56FD","common":"\u4EE5\u8272\u5217"}},"latlng":[31.47,35.13],"landlocked":false,"borders":["EGY","JOR","LBN","PSE","SYR"],"area":20770,"flag":"\uD83C\uDDEE\uD83C\uDDF1","demonyms":{"eng":{"f":"Israeli","m":"Israeli"},"fra":{"f":"Isra\xe9lienne","m":"Isra\xe9lien"}}},{"name":{"common":"Italy","official":"Italian Republic","native":{"ita":{"official":"Repubblica italiana","common":"Italia"}}},"tld":[".it"],"cca2":"IT","ccn3":"380","cca3":"ITA","cioc":"ITA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["9"]},"capital":["Rome"],"altSpellings":["IT","Italian Republic","Repubblica italiana"],"region":"Europe","subregion":"Southern Europe","languages":{"ita":"Italian"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A\u0629","common":"\u0625\u064A\u0637\u0627\u0644\u064A\u0627"},"ces":{"official":"Italsk\xe1 republika","common":"It\xe1lie"},"deu":{"official":"Italienische Republik","common":"Italien"},"est":{"official":"Itaalia Vabariik","common":"Itaalia"},"fin":{"official":"Italian tasavalta","common":"Italia"},"fra":{"official":"R\xe9publique italienne","common":"Italie"},"hrv":{"official":"talijanska Republika","common":"Italija"},"hun":{"official":"Olasz K\xf6zt\xe1rsas\xe1g","common":"Olaszorsz\xe1g"},"ita":{"official":"Repubblica italiana","common":"Italia"},"jpn":{"official":"\u30A4\u30BF\u30EA\u30A2\u5171\u548C\u56FD","common":"\u30A4\u30BF\u30EA\u30A2"},"kor":{"official":"\uC774\uD0C8\uB9AC\uC544 \uACF5\uD654\uAD6D","common":"\uC774\uD0C8\uB9AC\uC544"},"nld":{"official":"Italiaanse Republiek","common":"Itali\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627","common":"\u0627\u06CC\u062A\u0627\u0644\u06CC\u0627"},"pol":{"official":"Republika W\u0142oska","common":"W\u0142ochy"},"por":{"official":"Rep\xfablica Italiana","common":"It\xe1lia"},"rus":{"official":"\u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0418\u0442\u0430\u043B\u0438\u044F"},"slk":{"official":"Talianska republika","common":"Taliansko"},"spa":{"official":"Rep\xfablica Italiana","common":"Italia"},"srp":{"official":"Republika Italija","common":"Italija"},"swe":{"official":"Republiken Italien","common":"Italien"},"tur":{"official":"\u0130talya Cumhuriyeti","common":"\u0130talya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0637\u0627\u0644\u06CC\u06C1","common":"\u0627\u0637\u0627\u0644\u06CC\u06C1"},"zho":{"official":"\u610F\u5927\u5229\u5171\u548C\u56FD","common":"\u610F\u5927\u5229"}},"latlng":[42.83333333,12.83333333],"landlocked":false,"borders":["AUT","FRA","SMR","SVN","CHE","VAT"],"area":301336,"flag":"\uD83C\uDDEE\uD83C\uDDF9","demonyms":{"eng":{"f":"Italian","m":"Italian"},"fra":{"f":"Italienne","m":"Italien"}}},{"name":{"common":"Jamaica","official":"Jamaica","native":{"eng":{"official":"Jamaica","common":"Jamaica"},"jam":{"official":"Jamaica","common":"Jamaica"}}},"tld":[".jm"],"cca2":"JM","ccn3":"388","cca3":"JAM","cioc":"JAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"JMD":{"name":"Jamaican dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["876"]},"capital":["Kingston"],"altSpellings":["JM"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English","jam":"Jamaican Patois"},"translations":{"ara":{"official":"\u062C\u0627\u0645\u0627\u064A\u0643\u0627","common":"\u062C\u0627\u0645\u0627\u064A\u0643\u0627"},"ces":{"official":"Jamajka","common":"Jamajka"},"deu":{"official":"Jamaika","common":"Jamaika"},"est":{"official":"Jamaica","common":"Jamaica"},"fin":{"official":"Jamaika","common":"Jamaika"},"fra":{"official":"Jama\xefque","common":"Jama\xefque"},"hrv":{"official":"Jamajka","common":"Jamajka"},"hun":{"official":"Jamaica","common":"Jamaica"},"ita":{"official":"Giamaica","common":"Giamaica"},"jpn":{"official":"\u30B8\u30E3\u30DE\u30A4\u30AB","common":"\u30B8\u30E3\u30DE\u30A4\u30AB"},"kor":{"official":"\uC790\uBA54\uC774\uCE74","common":"\uC790\uBA54\uC774\uCE74"},"nld":{"official":"Jamaica","common":"Jamaica"},"per":{"official":"\u062C\u0627\u0645\u0627\u0626\u06CC\u06A9\u0627","common":"\u062C\u0627\u0645\u0627\u0626\u06CC\u06A9\u0627"},"pol":{"official":"Jamajka","common":"Jamajka"},"por":{"official":"Jamaica","common":"Jamaica"},"rus":{"official":"\u042F\u043C\u0430\u0439\u043A\u0430","common":"\u042F\u043C\u0430\u0439\u043A\u0430"},"slk":{"official":"Jamajka","common":"Jamajka"},"spa":{"official":"Jamaica","common":"Jamaica"},"srp":{"official":"Jamajka","common":"Jamajka"},"swe":{"official":"Jamaica","common":"Jamaica"},"tur":{"official":"Jamaika","common":"Jamaika"},"urd":{"official":"\u062C\u0645\u06CC\u06A9\u0627","common":"\u062C\u0645\u06CC\u06A9\u0627"},"zho":{"official":"\u7259\u4E70\u52A0","common":"\u7259\u4E70\u52A0"}},"latlng":[18.25,-77.5],"landlocked":false,"borders":[],"area":10991,"flag":"\uD83C\uDDEF\uD83C\uDDF2","demonyms":{"eng":{"f":"Jamaican","m":"Jamaican"},"fra":{"f":"Jama\xefcaine","m":"Jama\xefcain"}}},{"name":{"common":"Jersey","official":"Bailiwick of Jersey","native":{"eng":{"official":"Bailiwick of Jersey","common":"Jersey"},"fra":{"official":"Bailliage de Jersey","common":"Jersey"},"nrf":{"official":"Bailliage d\xe9 J\xe8rri","common":"J\xe8rri"}}},"tld":[".je"],"cca2":"JE","ccn3":"832","cca3":"JEY","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"GBP":{"name":"British pound","symbol":"\xa3"},"JEP":{"name":"Jersey pound","symbol":"\xa3"}},"idd":{"root":"+4","suffixes":["4"]},"capital":["Saint Helier"],"altSpellings":["JE","Bailiwick of Jersey","Bailliage de Jersey","Bailliage d\xe9 J\xe8rri"],"region":"Europe","subregion":"Northern Europe","languages":{"eng":"English","fra":"French","nrf":"J\xe8rriais"},"translations":{"ara":{"official":"\u062C\u064A\u0631\u0632\u064A","common":"\u062C\u064A\u0631\u0632\u064A"},"ces":{"official":"Rycht\xe1\u0159stv\xed Jersey","common":"Jersey"},"deu":{"official":"Vogtei Jersey","common":"Jersey"},"est":{"official":"Jersey foogtkond","common":"Jersey"},"fin":{"official":"Jersey","common":"Jersey"},"fra":{"official":"Bailliage de Jersey","common":"Jersey"},"hrv":{"official":"Struka od Jersey","common":"Jersey"},"hun":{"official":"Jersey","common":"Jersey"},"ita":{"official":"Baliato di Jersey","common":"Isola di Jersey"},"jpn":{"official":"\u30B8\u30E3\u30FC\u30B8\u30FC\u5CF6","common":"\u30B8\u30E3\u30FC\u30B8\u30FC"},"kor":{"official":"\uC800\uC9C0 \uC12C","common":"\uC800\uC9C0 \uC12C"},"nld":{"official":"Baljuwschap Jersey","common":"Jersey"},"per":{"official":"\u062C\u0631\u0632\u06CC","common":"\u062C\u0631\u0632\u06CC"},"pol":{"official":"Jersey","common":"Jersey"},"por":{"official":"Bailiado de Jersey","common":"Jersey"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043D\u043D\u043E\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u0414\u0436\u0435\u0440\u0441\u0438","common":"\u0414\u0436\u0435\u0440\u0441\u0438"},"slk":{"official":"Bailiwick Jersey","common":"Jersey"},"spa":{"official":"Bail\xeda de Jersey","common":"Jersey"},"srp":{"official":"Bejlivik D\u017Eerzi","common":"D\u017Eerzi"},"swe":{"official":"Jersey","common":"Jersey"},"tur":{"official":"Jersey","common":"Jersey"},"urd":{"official":"\u062C\u0631\u0632\u06CC","common":"\u062C\u0631\u0632\u06CC"},"zho":{"official":"\u6CFD\u897F\u5C9B","common":"\u6CFD\u897F\u5C9B"}},"latlng":[49.25,-2.16666666],"landlocked":false,"borders":[],"area":116,"flag":"\uD83C\uDDEF\uD83C\uDDEA","demonyms":{"eng":{"f":"Channel Islander","m":"Channel Islander"},"fra":{"f":"Jersiaise","m":"Jersiais"}}},{"name":{"common":"Jordan","official":"Hashemite Kingdom of Jordan","native":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0623\u0631\u062F\u0646\u064A\u0629 \u0627\u0644\u0647\u0627\u0634\u0645\u064A\u0629","common":"\u0627\u0644\u0623\u0631\u062F\u0646"}}},"tld":[".jo","\u0627\u0644\u0627\u0631\u062F\u0646."],"cca2":"JO","ccn3":"400","cca3":"JOR","cioc":"JOR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"JOD":{"name":"Jordanian dinar","symbol":"\u062F.\u0627"}},"idd":{"root":"+9","suffixes":["62"]},"capital":["Amman"],"altSpellings":["JO","Hashemite Kingdom of Jordan","al-Mamlakah al-Urdun\u012Byah al-H\u0101shim\u012Byah"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0623\u0631\u062F\u0646\u064A\u0629 \u0627\u0644\u0647\u0627\u0634\u0645\u064A\u0629","common":"\u0627\u0644\u0623\u0631\u062F\u0646"},"ces":{"official":"Jord\xe1nsk\xe9 h\xe1\u0161imovsk\xe9 kr\xe1lovstv\xed","common":"Jord\xe1nsko"},"deu":{"official":"Haschemitisches K\xf6nigreich Jordanien","common":"Jordanien"},"est":{"official":"Jordaania Ha\u0161imiidi Kuningriik","common":"Jordaania"},"fin":{"official":"Jordanian ha\u0161emiittinen kunigaskunta","common":"Jordania"},"fra":{"official":"Royaume hach\xe9mite de Jordanie","common":"Jordanie"},"hrv":{"official":"Ha\u0161emitske Kraljevine Jordan","common":"Jordan"},"hun":{"official":"Jord\xe1nia","common":"Jord\xe1nia"},"ita":{"official":"Regno hascemita di Giordania","common":"Giordania"},"jpn":{"official":"\u30E8\u30EB\u30C0\u30F3\u30FB\u30CF\u30B7\u30DF\u30C6\u738B\u56FD","common":"\u30E8\u30EB\u30C0\u30F3"},"kor":{"official":"\uC694\uB974\uB2E8 \uD558\uC2EC \uC655\uAD6D","common":"\uC694\uB974\uB2E8"},"nld":{"official":"Hasjemitisch Koninkrijk Jordani\xeb","common":"Jordani\xeb"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0627\u064F\u0631\u062F\u064F\u0646 \u0647\u0627\u0634\u0645\u06CC","common":"\u0627\u0631\u062F\u0646"},"pol":{"official":"Jorda\u0144skie Kr\xf3lestwo Haszymidzkie","common":"Jordania"},"por":{"official":"Reino Hachemita da Jord\xe2nia","common":"Jord\xe2nia"},"rus":{"official":"\u0418\u043E\u0440\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0425\u0430\u0448\u0438\u043C\u0438\u0442\u0441\u043A\u043E\u0433\u043E \u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u0430","common":"\u0418\u043E\u0440\u0434\u0430\u043D\u0438\u044F"},"slk":{"official":"Jord\xe1nske h\xe1\u0161imovsk\xe9 kr\xe1\u013Eovstvo","common":"Jord\xe1nsko"},"spa":{"official":"Reino Hachemita de Jordania","common":"Jordania"},"srp":{"official":"Ha\u0161emitska Kraljevina Jordan","common":"Jordan"},"swe":{"official":"Hashimitiska kungad\xf6met Jordanien","common":"Jordanien"},"tur":{"official":"\xfcrd\xfcn H\xe2\u015Fimi Krall\u0131\u011F\u0131","common":"\xfcrd\xfcn"},"urd":{"official":"\u06BE\u0627\u0634\u0645\u06CC \u0645\u0645\u0644\u06A9\u062A\u0650 \u0627\u0631\u062F\u0646","common":"\u0627\u0631\u062F\u0646"},"zho":{"official":"\u7EA6\u65E6\u54C8\u5E0C\u59C6\u738B\u56FD","common":"\u7EA6\u65E6"}},"latlng":[31,36],"landlocked":false,"borders":["IRQ","ISR","PSE","SAU","SYR"],"area":89342,"flag":"\uD83C\uDDEF\uD83C\uDDF4","demonyms":{"eng":{"f":"Jordanian","m":"Jordanian"},"fra":{"f":"Jordanienne","m":"Jordanien"}}},{"name":{"common":"Japan","official":"Japan","native":{"jpn":{"official":"\u65E5\u672C","common":"\u65E5\u672C"}}},"tld":[".jp",".\u307F\u3093\u306A"],"cca2":"JP","ccn3":"392","cca3":"JPN","cioc":"JPN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"JPY":{"name":"Japanese yen","symbol":"\xa5"}},"idd":{"root":"+8","suffixes":["1"]},"capital":["Tokyo"],"altSpellings":["JP","Nippon","Nihon"],"region":"Asia","subregion":"Eastern Asia","languages":{"jpn":"Japanese"},"translations":{"ara":{"official":"\u0627\u0644\u064A\u0627\u0628\u0627\u0646","common":"\u0627\u0644\u064A\u0627\u0628\u0627\u0646"},"ces":{"official":"Japonsko","common":"Japonsko"},"deu":{"official":"Japan","common":"Japan"},"est":{"official":"Jaapan","common":"Jaapan"},"fin":{"official":"Japani","common":"Japani"},"fra":{"official":"Japon","common":"Japon"},"hrv":{"official":"Japan","common":"Japan"},"hun":{"official":"Jap\xe1n","common":"Jap\xe1n"},"ita":{"official":"Giappone","common":"Giappone"},"jpn":{"official":"\u65E5\u672C\u56FD","common":"\u65E5\u672C"},"kor":{"official":"\uC77C\uBCF8\uAD6D","common":"\uC77C\uBCF8"},"nld":{"official":"Japan","common":"Japan"},"per":{"official":"\u0698\u0627\u067E\u0646","common":"\u0698\u0627\u067E\u0646"},"pol":{"official":"Japonia","common":"Japonia"},"por":{"official":"Jap\xe3o","common":"Jap\xe3o"},"rus":{"official":"\u042F\u043F\u043E\u043D\u0438\u044F","common":"\u042F\u043F\u043E\u043D\u0438\u044F"},"slk":{"official":"Japonsko","common":"Japonsko"},"spa":{"official":"Jap\xf3n","common":"Jap\xf3n"},"srp":{"official":"Japan","common":"Japan"},"swe":{"official":"Japan","common":"Japan"},"tur":{"official":"Japonya","common":"Japonya"},"urd":{"official":"\u062C\u0627\u067E\u0627\u0646","common":"\u062C\u0627\u067E\u0627\u0646"},"zho":{"official":"\u65E5\u672C\u56FD","common":"\u65E5\u672C"}},"latlng":[36,138],"landlocked":false,"borders":[],"area":377930,"flag":"\uD83C\uDDEF\uD83C\uDDF5","demonyms":{"eng":{"f":"Japanese","m":"Japanese"},"fra":{"f":"Japonaise","m":"Japonais"}}},{"name":{"common":"Kazakhstan","official":"Republic of Kazakhstan","native":{"kaz":{"official":"\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0441\u044B","common":"\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D","common":"\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D"}}},"tld":[".kz",".\u049B\u0430\u0437"],"cca2":"KZ","ccn3":"398","cca3":"KAZ","cioc":"KAZ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KZT":{"name":"Kazakhstani tenge","symbol":"\u20B8"}},"idd":{"root":"+7","suffixes":["6","7"]},"capital":["Astana"],"altSpellings":["KZ","Qazaqstan","\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D","Republic of Kazakhstan","\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0441\u044B","Qazaqstan Respubl\xefkas\u0131","\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D","Respublika Kazakhstan"],"region":"Asia","subregion":"Central Asia","languages":{"kaz":"Kazakh","rus":"Russian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0627\u0632\u0627\u062E\u0633\u062A\u0627\u0646","common":"\u0643\u0627\u0632\u0627\u062E\u0633\u062A\u0627\u0646"},"ces":{"official":"Republika Kazachst\xe1n","common":"Kazachst\xe1n"},"deu":{"official":"Republik Kasachstan","common":"Kasachstan"},"est":{"official":"Kasahstani Vabariik","common":"Kasahstan"},"fin":{"official":"Kazakstanin tasavalta","common":"Kazakstan"},"fra":{"official":"R\xe9publique du Kazakhstan","common":"Kazakhstan"},"hrv":{"official":"Republika Kazahstan","common":"Kazahstan"},"hun":{"official":"Kazah K\xf6zt\xe1rsas\xe1g","common":"Kazahszt\xe1n"},"ita":{"official":"Repubblica del Kazakhstan","common":"Kazakistan"},"jpn":{"official":"\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3\u5171\u548C\u56FD","common":"\u30AB\u30B6\u30D5\u30B9\u30BF\u30F3"},"kor":{"official":"\uCE74\uC790\uD750\uC2A4\uD0C4 \uACF5\uD654\uAD6D","common":"\uCE74\uC790\uD750\uC2A4\uD0C4"},"nld":{"official":"Republiek Kazachstan","common":"Kazachstan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0642\u0632\u0627\u0642\u0633\u062A\u0627\u0646","common":"\u0642\u0632\u0627\u0642\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Kazachstanu","common":"Kazachstan"},"por":{"official":"Rep\xfablica do Cazaquist\xe3o","common":"Cazaquist\xe3o"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D","common":"\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D"},"slk":{"official":"Kaza\u0161sk\xe1 republika","common":"Kazachstan"},"spa":{"official":"Rep\xfablica de Kazajst\xe1n","common":"Kazajist\xe1n"},"srp":{"official":"Republika Kazahstan","common":"Kazahstan"},"swe":{"official":"Republiken Kazakstan","common":"Kazakstan"},"tur":{"official":"Kazakistan Cumhuriyeti","common":"Kazakistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0642\u0627\u0632\u0642\u0633\u062A\u0627\u0646","common":"\u0642\u0627\u0632\u0642\u0633\u062A\u0627\u0646"},"zho":{"official":"\u54C8\u8428\u514B\u65AF\u5766\u5171\u548C\u56FD","common":"\u54C8\u8428\u514B\u65AF\u5766"}},"latlng":[48,68],"landlocked":true,"borders":["CHN","KGZ","RUS","TKM","UZB"],"area":2724900,"flag":"\uD83C\uDDF0\uD83C\uDDFF","demonyms":{"eng":{"f":"Kazakhstani","m":"Kazakhstani"},"fra":{"f":"Kazakhstanaise","m":"Kazakhstanais"}}},{"name":{"common":"Kenya","official":"Republic of Kenya","native":{"eng":{"official":"Republic of Kenya","common":"Kenya"},"swa":{"official":"Republic of Kenya","common":"Kenya"}}},"tld":[".ke"],"cca2":"KE","ccn3":"404","cca3":"KEN","cioc":"KEN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"KES":{"name":"Kenyan shilling","symbol":"Sh"}},"idd":{"root":"+2","suffixes":["54"]},"capital":["Nairobi"],"altSpellings":["KE","Republic of Kenya","Jamhuri ya Kenya"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","swa":"Swahili"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u064A\u0646\u064A\u0627","common":"\u0643\u064A\u0646\u064A\u0627"},"ces":{"official":"Ke\u0148sk\xe1 republika","common":"Ke\u0148a"},"deu":{"official":"Republik Kenia","common":"Kenia"},"est":{"official":"Keenia Vabariik","common":"Keenia"},"fin":{"official":"Kenian tasavalta","common":"Kenia"},"fra":{"official":"R\xe9publique du Kenya","common":"Kenya"},"hrv":{"official":"Republika Kenija","common":"Kenija"},"hun":{"official":"Kenyai K\xf6zt\xe1rsas\xe1g","common":"Kenya"},"ita":{"official":"Repubblica del Kenya","common":"Kenya"},"jpn":{"official":"\u30B1\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30B1\u30CB\u30A2"},"kor":{"official":"\uCF00\uB0D0 \uACF5\uD654\uAD6D","common":"\uCF00\uB0D0"},"nld":{"official":"Republiek Kenia","common":"Kenia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0646\u06CC\u0627","common":"\u06A9\u0646\u06CC\u0627"},"pol":{"official":"Republika Kenii","common":"Kenia"},"por":{"official":"Rep\xfablica do Qu\xe9nia","common":"Qu\xe9nia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0435\u043D\u0438\u044F","common":"\u041A\u0435\u043D\u0438\u044F"},"slk":{"official":"Kensk\xe1 republika","common":"Ke\u0148a"},"spa":{"official":"Rep\xfablica de Kenya","common":"Kenia"},"srp":{"official":"Republika Kenija","common":"Kenija"},"swe":{"official":"Republiken Kenya","common":"Kenya"},"tur":{"official":"Kenya Cumhuriyeti","common":"Kenya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u06CC\u0646\u06CC\u0627","common":"\u06A9\u06CC\u0646\u06CC\u0627"},"zho":{"official":"\u80AF\u5C3C\u4E9A\u5171\u548C\u56FD","common":"\u80AF\u5C3C\u4E9A"}},"latlng":[1,38],"landlocked":false,"borders":["ETH","SOM","SSD","TZA","UGA"],"area":580367,"flag":"\uD83C\uDDF0\uD83C\uDDEA","demonyms":{"eng":{"f":"Kenyan","m":"Kenyan"},"fra":{"f":"K\xe9nyane","m":"K\xe9nyan"}}},{"name":{"common":"Kyrgyzstan","official":"Kyrgyz Republic","native":{"kir":{"official":"\u041A\u044B\u0440\u0433\u044B\u0437 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0441\u044B","common":"\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D"},"rus":{"official":"\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F"}}},"tld":[".kg"],"cca2":"KG","ccn3":"417","cca3":"KGZ","cioc":"KGZ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KGS":{"name":"Kyrgyzstani som","symbol":"\u0441"}},"idd":{"root":"+9","suffixes":["96"]},"capital":["Bishkek"],"altSpellings":["KG","\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F","Kyrgyz Republic","\u041A\u044B\u0440\u0433\u044B\u0437 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0441\u044B","Kyrgyz Respublikasy"],"region":"Asia","subregion":"Central Asia","languages":{"kir":"Kyrgyz","rus":"Russian"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0642\u064A\u0631\u063A\u064A\u0632\u064A\u0629","common":"\u0642\u064A\u0631\u063A\u064A\u0632\u0633\u062A\u0627\u0646"},"ces":{"official":"Kyrgyzsk\xe1 republika","common":"Kyrgyzst\xe1n"},"deu":{"official":"Kirgisische Republik","common":"Kirgisistan"},"est":{"official":"Kirgiisi Vabariik","common":"K\xf5rg\xf5zstan"},"fin":{"official":"Kirgisian tasavalta","common":"Kirgisia"},"fra":{"official":"R\xe9publique kirghize","common":"Kirghizistan"},"hrv":{"official":"Kirgistanu","common":"Kirgistan"},"hun":{"official":"Kirgiz K\xf6zt\xe1rsas\xe1g","common":"Kirgiziszt\xe1n"},"ita":{"official":"Kirghizistan","common":"Kirghizistan"},"jpn":{"official":"\u30AD\u30EB\u30AE\u30B9\u5171\u548C\u56FD","common":"\u30AD\u30EB\u30AE\u30B9"},"kor":{"official":"\uD0A4\uB974\uAE30\uC2A4 \uACF5\uD654\uAD6D","common":"\uD0A4\uB974\uAE30\uC2A4\uC2A4\uD0C4"},"nld":{"official":"Kirgizische Republiek","common":"Kirgizi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0642\u0650\u0631\u0642\u06CC\u0632\u0633\u062A\u0627\u0646","common":"\u0642\u0631\u0642\u06CC\u0632\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Kirgiska","common":"Kirgistan"},"por":{"official":"Rep\xfablica do Quirguist\xe3o","common":"Quirguist\xe3o"},"rus":{"official":"\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041A\u0438\u0440\u0433\u0438\u0437\u0438\u044F"},"slk":{"official":"Kirgizsk\xe1 republika","common":"Kirgizsko"},"spa":{"official":"Rep\xfablica Kirguisa","common":"Kirguizist\xe1n"},"srp":{"official":"Kirgiska Republika","common":"Kirgistan"},"swe":{"official":"Republiken Kirgizistan","common":"Kirgizistan"},"tur":{"official":"K\u0131rg\u0131z Cumhuriyeti","common":"K\u0131rg\u0131zistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0631\u063A\u06CC\u0632\u0633\u062A\u0627\u0646","common":"\u06A9\u0631\u063A\u06CC\u0632\u0633\u062A\u0627\u0646"},"zho":{"official":"\u5409\u5C14\u5409\u65AF\u65AF\u5766\u5171\u548C\u56FD","common":"\u5409\u5C14\u5409\u65AF\u65AF\u5766"}},"latlng":[41,75],"landlocked":true,"borders":["CHN","KAZ","TJK","UZB"],"area":199951,"flag":"\uD83C\uDDF0\uD83C\uDDEC","demonyms":{"eng":{"f":"Kirghiz","m":"Kirghiz"},"fra":{"f":"Kirghize","m":"Kirghize"}}},{"name":{"common":"Cambodia","official":"Kingdom of Cambodia","native":{"khm":{"official":"\u1796\u17D2\u179A\u17C7\u179A\u17B6\u1787\u17B6\u178E\u17B6\u1785\u1780\u17D2\u179A\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6","common":"K\xe2mp\u016Dch\xe9a"}}},"tld":[".kh"],"cca2":"KH","ccn3":"116","cca3":"KHM","cioc":"CAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KHR":{"name":"Cambodian riel","symbol":"\u17DB"},"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+8","suffixes":["55"]},"capital":["Phnom Penh"],"altSpellings":["KH","Kingdom of Cambodia"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"khm":"Khmer"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0643\u0645\u0628\u0648\u062F\u064A\u0627","common":"\u0643\u0645\u0628\u0648\u062F\u064A\u0627"},"ces":{"official":"Kambod\u017Esk\xe9 kr\xe1lovstv\xed","common":"Kambod\u017Ea"},"deu":{"official":"K\xf6nigreich Kambodscha","common":"Kambodscha"},"est":{"official":"Kambod\u017Ea Kuningriik","common":"Kambod\u017Ea"},"fin":{"official":"Kambod\u017Ean kuningaskunta","common":"Kambod\u017Ea"},"fra":{"official":"Royaume du Cambodge","common":"Cambodge"},"hrv":{"official":"Kraljevina Kambod\u017Ea","common":"Kambod\u017Ea"},"hun":{"official":"Kambodzsai Kir\xe1lys\xe1g","common":"Kambodzsa"},"ita":{"official":"Regno di Cambogia","common":"Cambogia"},"jpn":{"official":"\u30AB\u30F3\u30DC\u30B8\u30A2\u738B\u56FD","common":"\u30AB\u30F3\u30DC\u30B8\u30A2"},"kor":{"official":"\uCE84\uBCF4\uB514\uC544 \uC655\uAD6D","common":"\uCE84\uBCF4\uB514\uC544"},"nld":{"official":"Koninkrijk Cambodja","common":"Cambodja"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u06A9\u0627\u0645\u0628\u0648\u062C","common":"\u06A9\u0627\u0645\u0628\u0648\u062C"},"pol":{"official":"Kr\xf3lestwo Kambod\u017Cy","common":"Kambod\u017Ca"},"por":{"official":"Reino do Camboja","common":"Camboja"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u041A\u0430\u043C\u0431\u043E\u0434\u0436\u0430","common":"\u041A\u0430\u043C\u0431\u043E\u0434\u0436\u0430"},"slk":{"official":"Kambo\u01C6sk\xe9 kr\xe1\u013Eovstvo","common":"Kambo\u01C6a"},"spa":{"official":"Reino de Camboya","common":"Camboya"},"srp":{"official":"Kraljevina Kambod\u017Ea","common":"Kambod\u017Ea"},"swe":{"official":"Konungariket Kambodja","common":"Kambodja"},"tur":{"official":"Kambo\xe7ya Krall\u0131\u011F\u0131","common":"Kambo\xe7ya"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u06A9\u0645\u0628\u0648\u0688\u06CC\u0627","common":"\u06A9\u0645\u0628\u0648\u0688\u06CC\u0627"},"zho":{"official":"\u67EC\u57D4\u5BE8\u738B\u56FD","common":"\u67EC\u57D4\u5BE8"}},"latlng":[13,105],"landlocked":false,"borders":["LAO","THA","VNM"],"area":181035,"flag":"\uD83C\uDDF0\uD83C\uDDED","demonyms":{"eng":{"f":"Cambodian","m":"Cambodian"},"fra":{"f":"Cambodgienne","m":"Cambodgien"}}},{"name":{"common":"Kiribati","official":"Independent and Sovereign Republic of Kiribati","native":{"eng":{"official":"Independent and Sovereign Republic of Kiribati","common":"Kiribati"},"gil":{"official":"Ribaberiki Kiribati","common":"Kiribati"}}},"tld":[".ki"],"cca2":"KI","ccn3":"296","cca3":"KIR","cioc":"KIR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"},"KID":{"name":"Kiribati dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["86"]},"capital":["South Tarawa"],"altSpellings":["KI","Republic of Kiribati","Ribaberiki Kiribati"],"region":"Oceania","subregion":"Micronesia","languages":{"eng":"English","gil":"Gilbertese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u064A\u0631\u064A\u0628\u0627\u062A\u064A","common":"\u0643\u064A\u0631\u064A\u0628\u0627\u062A\u064A"},"ces":{"official":"Republika Kiribati","common":"Kiribati"},"deu":{"official":"Republik Kiribati","common":"Kiribati"},"est":{"official":"Kiribati Vabariik","common":"Kiribati"},"fin":{"official":"Kiribatin tasavalta","common":"Kiribati"},"fra":{"official":"R\xe9publique de Kiribati","common":"Kiribati"},"hrv":{"official":"Samostalne i suverene Republike Kiribati","common":"Kiribati"},"hun":{"official":"Kiribati K\xf6zt\xe1rsas\xe1g","common":"Kiribati"},"ita":{"official":"Repubblica indipendente e sovrano di Kiribati","common":"Kiribati"},"jpn":{"official":"\u30AD\u30EA\u30D0\u30B9\u5171\u548C\u56FD","common":"\u30AD\u30EA\u30D0\u30B9"},"kor":{"official":"\uD0A4\uB9AC\uBC14\uC2DC \uACF5\uD654\uAD6D","common":"\uD0A4\uB9AC\uBC14\uC2DC"},"nld":{"official":"Onafhankelijke en soevereine republiek Kiribati","common":"Kiribati"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u06CC\u0631\u06CC\u0628\u0627\u062A\u06CC","common":"\u06A9\u06CC\u0631\u06CC\u0628\u0627\u062A\u06CC"},"pol":{"official":"Republika Kiribati","common":"Kiribati"},"por":{"official":"Independente e soberano Rep\xfablica de Kiribati","common":"Kiribati"},"rus":{"official":"\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0439 \u0438 \u0441\u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0438\u0440\u0438\u0431\u0430\u0442\u0438","common":"\u041A\u0438\u0440\u0438\u0431\u0430\u0442\u0438"},"slk":{"official":"Kiribatsk\xe1 republika","common":"Kiribati"},"spa":{"official":"Rep\xfablica Independiente y Soberano de Kiribati","common":"Kiribati"},"srp":{"official":"Republika Kiribati","common":"Kiribati"},"swe":{"official":"Republiken Kiribati","common":"Kiribati"},"tur":{"official":"Kiribati Cumhuriyeti","common":"Kiribati"},"urd":{"official":"\u0633\u0644\u0637\u0646\u062A \u0622\u0632\u0627\u062F \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u06CC\u0631\u06CC\u0628\u0627\u062A\u06CC","common":"\u06A9\u06CC\u0631\u06CC\u0628\u0627\u062A\u06CC"},"zho":{"official":"\u57FA\u91CC\u5DF4\u65AF\u5171\u548C\u56FD","common":"\u57FA\u91CC\u5DF4\u65AF"}},"latlng":[1.41666666,173],"landlocked":false,"borders":[],"area":811,"flag":"\uD83C\uDDF0\uD83C\uDDEE","demonyms":{"eng":{"f":"I-Kiribati","m":"I-Kiribati"},"fra":{"f":"Kiribatienne","m":"Kiribatien"}}},{"name":{"common":"Saint Kitts and Nevis","official":"Federation of Saint Christopher and Nevis","native":{"eng":{"official":"Federation of Saint Christopher and Nevis","common":"Saint Kitts and Nevis"}}},"tld":[".kn"],"cca2":"KN","ccn3":"659","cca3":"KNA","cioc":"SKN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["869"]},"capital":["Basseterre"],"altSpellings":["KN","Federation of Saint Christopher and Nevis"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0642\u062F\u064A\u0633 \u0643\u0631\u064A\u0633\u062A\u0648\u0641\u0631 \u0648\u0646\u064A\u0641\u064A\u0633","common":"\u0633\u0627\u0646\u062A \u0643\u064A\u062A\u0633 \u0648\u0646\u064A\u0641\u064A\u0633"},"ces":{"official":"Federace Sv. Kry\u0161tof a Nevis","common":"Svat\xfd Kry\u0161tof a Nevis"},"deu":{"official":"F\xf6deration von St. Kitts und Nevis","common":"St. Kitts und Nevis"},"est":{"official":"Saint Kittsi ja Nevise F\xf6deratsioon","common":"Saint Kitts ja Nevis"},"fin":{"official":"Saint Christopherin ja Nevisin federaatio","common":"Saint Kitts ja Nevis"},"fra":{"official":"F\xe9d\xe9ration de Saint-Christophe-et-Ni\xe9v\xe8s","common":"Saint-Christophe-et-Ni\xe9v\xe8s"},"hrv":{"official":"Federacija Sv.Kristofora i Nevisa","common":"Sveti Kristof i Nevis"},"hun":{"official":"Saint Christopher \xe9s Nevis \xc1llamsz\xf6vets\xe9g","common":"Saint Kitts \xe9s Nevis"},"ita":{"official":"Federazione di Saint Christopher e Nevis","common":"Saint Kitts e Nevis"},"jpn":{"official":"\u30BB\u30F3\u30C8\u30AD\u30C3\u30C4\u30FB\u30CD\u30FC\u30D3\u30B9","common":"\u30BB\u30F3\u30C8\u30AD\u30C3\u30C4\u30FB\u30CD\u30FC\u30F4\u30A3\u30B9\u9023\u90A6"},"kor":{"official":"\uC138\uC778\uD2B8\uD0A4\uCE20 \uB124\uBE44\uC2A4 \uC5F0\uBC29","common":"\uC138\uC778\uD2B8\uD0A4\uCE20 \uB124\uBE44\uC2A4"},"nld":{"official":"Federatie van Saint Kitts en Nevis","common":"Saint Kitts en Nevis"},"per":{"official":"\u0641\u062F\u0631\u0627\u0633\u06CC\u0648\u0646 \u0633\u0646\u062A \u06A9\u06CC\u062A\u0633 \u0648 \u0646\u0648\u06CC\u0633","common":"\u0633\u0646\u062A \u06A9\u06CC\u062A\u0633 \u0648 \u0646\u0648\u06CC\u0633"},"pol":{"official":"Federacja Saint Kitts i Nevis","common":"Saint Kitts i Nevis"},"por":{"official":"Federa\xe7\xe3o de S\xe3o Crist\xf3v\xe3o e Nevis","common":"S\xe3o Crist\xf3v\xe3o e Nevis"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F \u0421\u0435\u043D\u0442-\u041A\u0440\u0438\u0441\u0442\u043E\u0444\u0435\u0440 \u0438 \u041D \u0435 \u0432 \u0438 \u0441","common":"\u0421\u0435\u043D\u0442-\u041A\u0438\u0442\u0441 \u0438 \u041D\u0435\u0432\u0438\u0441"},"slk":{"official":"Feder\u0EE1cia Sv\xe4t\xe9ho Kri\u0161tofa a Nevisu","common":"Sv\xe4t\xfd Kri\u0161tof a Nevis"},"spa":{"official":"Federaci\xf3n de San Crist\xf3bal y Nevis","common":"San Crist\xf3bal y Nieves"},"srp":{"official":"Federacija Sent Kits i Nevis","common":"Sveti Kits i Nevis"},"swe":{"official":"Federationen Saint Kitts och Nevis","common":"Saint Kitts och Nevis"},"tur":{"official":"Saint Kitts ve Nevis Federasyonu","common":"Saint Kitts ve Nevis"},"urd":{"official":"\u0648\u0641\u0627\u0642\u0650 \u0633\u06CC\u0646\u0679 \u06A9\u06CC\u0679\u0632 \u0648 \u0646\u0627\u0648\u06CC\u0633","common":"\u0633\u06CC\u0646\u0679 \u06A9\u06CC\u0679\u0632 \u0648 \u0646\u0627\u0648\u06CC\u0633"},"zho":{"official":"\u5723\u514B\u91CC\u65AF\u6258\u5F17\u548C\u5C3C\u7EF4\u65AF\u8054\u90A6","common":"\u5723\u57FA\u8328\u548C\u5C3C\u7EF4\u65AF"}},"latlng":[17.33333333,-62.75],"landlocked":false,"borders":[],"area":261,"flag":"\uD83C\uDDF0\uD83C\uDDF3","demonyms":{"eng":{"f":"Kittitian or Nevisian","m":"Kittitian or Nevisian"},"fra":{"f":"Kittitienne-et-nevicienne","m":"Kittitien-et-nevicien"}}},{"name":{"common":"South Korea","official":"Republic of Korea","native":{"kor":{"official":"\uB300\uD55C\uBBFC\uAD6D","common":"\uD55C\uAD6D"}}},"tld":[".kr",".\uD55C\uAD6D"],"cca2":"KR","ccn3":"410","cca3":"KOR","cioc":"KOR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KRW":{"name":"South Korean won","symbol":"\u20A9"}},"idd":{"root":"+8","suffixes":["2"]},"capital":["Seoul"],"altSpellings":["KR","Korea, Republic of","Republic of Korea","\uB0A8\uD55C","\uB0A8\uC870\uC120"],"region":"Asia","subregion":"Eastern Asia","languages":{"kor":"Korean"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0631\u064A\u0627","common":"\u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629"},"ces":{"official":"Korejsk\xe1 republika","common":"Ji\u017En\xed Korea"},"deu":{"official":"Republik Korea","common":"S\xfcdkorea"},"est":{"official":"Korea Vabariik","common":"L\xf5una-Korea"},"fin":{"official":"Korean tasavalta","common":"Etel\xe4-Korea"},"fra":{"official":"R\xe9publique de Cor\xe9e","common":"Cor\xe9e du Sud"},"hrv":{"official":"Republika Koreja","common":"Ju\u017Ena Koreja"},"hun":{"official":"Koreai K\xf6zt\xe1rsas\xe1g","common":"D\xe9l-Korea"},"ita":{"official":"Repubblica di Corea","common":"Corea del Sud"},"jpn":{"official":"\u5927\u97D3\u6C11\u56FD","common":"\u97D3\u56FD"},"kor":{"official":"\uB300\uD55C\uBBFC\uAD6D","common":"\uD55C\uAD6D"},"nld":{"official":"Republiek Korea","common":"Zuid-Korea"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0631\u0647","common":"\u06A9\u0631\u0647\u0654 \u062C\u0646\u0648\u0628\u06CC"},"pol":{"official":"Republika Korei","common":"Korea Po\u0142udniowa"},"por":{"official":"Rep\xfablica da Coreia","common":"Coreia do Sul"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0440\u0435\u044F","common":"\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F"},"slk":{"official":"K\xf3rejsk\xe1 republika","common":"Ju\u017En\xe1 K\xf3rea"},"spa":{"official":"Rep\xfablica de Corea","common":"Corea del Sur"},"srp":{"official":"Republika Koreja","common":"Ju\u017Ena Koreja"},"swe":{"official":"Republiken Korea","common":"Sydkorea"},"tur":{"official":"Kore Cumhuriyeti","common":"G\xfcney Kore"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u0631\u06CC\u0627 ","common":"\u062C\u0646\u0648\u0628\u06CC \u06A9\u0648\u0631\u06CC\u0627"},"zho":{"official":"\u5927\u97E9\u6C11\u56FD","common":"\u97E9\u56FD"}},"latlng":[37,127.5],"landlocked":false,"borders":["PRK"],"area":100210,"flag":"\uD83C\uDDF0\uD83C\uDDF7","demonyms":{"eng":{"f":"South Korean","m":"South Korean"},"fra":{"f":"Sud-cor\xe9enne","m":"Sud-cor\xe9en"}}},{"name":{"common":"Kosovo","official":"Republic of Kosovo","native":{"sqi":{"official":"Republika e Kosov\xebs","common":"Kosova"},"srp":{"official":"\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0441\u043E\u0432\u043E","common":"\u041A\u043E\u0441\u043E\u0432\u043E"}}},"tld":[".xk"],"cca2":"XK","ccn3":"","cca3":"UNK","cioc":"KOS","independent":null,"status":"user-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["83"]},"capital":["Pristina"],"altSpellings":["XK","\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0441\u043E\u0432\u043E"],"region":"Europe","subregion":"Southeast Europe","languages":{"sqi":"Albanian","srp":"Serbian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0633\u0648\u0641\u0648","common":"\u0643\u0648\u0633\u0648\u0641\u0648"},"ces":{"official":"Kosovsk\xe1 republika","common":"Kosovo"},"deu":{"official":"Republik Kosovo","common":"Kosovo"},"est":{"official":"Kosovo Vabariik","common":"Kosovo"},"fin":{"official":"Kosovon tasavalta","common":"Kosovo"},"fra":{"official":"R\xe9publique du Kosovo","common":"Kosovo"},"hrv":{"official":"Republika Kosovo","common":"Kosovo"},"hun":{"official":"Koszov\xf3","common":"Koszov\xf3"},"ita":{"official":"Repubblica del Kosovo","common":"Kosovo"},"jpn":{"official":"\u30B3\u30BD\u30DC\u5171\u548C\u56FD","common":"\u30B3\u30BD\u30DC"},"kor":{"official":"\uCF54\uC18C\uBCF4 \uACF5\uD654\uAD6D","common":"\uCF54\uC18C\uBCF4"},"nld":{"official":"Republiek Kosovo","common":"Kosovo"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06A9\u0648\u0632\u0648\u0648","common":"\u06A9\u0648\u0632\u0648\u0648"},"pol":{"official":"Republika Kosowa","common":"Kosowo"},"por":{"official":"Rep\xfablica do Kosovo","common":"Kosovo"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0441\u043E\u0432\u043E","common":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0441\u043E\u0432\u043E"},"slk":{"official":"Republika Kosovo","common":"Kosovo"},"spa":{"official":"Rep\xfablica de Kosovo","common":"Kosovo"},"srp":{"official":"Republika Kosovo","common":"Kosovo"},"swe":{"official":"Republiken Kosovo","common":"Kosovo"},"tur":{"official":"Kosova Cumhuriyeti","common":"Kosova"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u0633\u0648\u0648\u06C1","common":"\u06A9\u0648\u0633\u0648\u0648\u06C1"},"zho":{"official":"\u79D1\u7D22\u6C83\u5171\u548C\u56FD","common":"\u79D1\u7D22\u6C83"}},"latlng":[42.666667,21.166667],"landlocked":true,"borders":["ALB","MKD","MNE","SRB"],"area":10908,"flag":"\uD83C\uDDFD\uD83C\uDDF0","demonyms":{"eng":{"f":"Kosovar","m":"Kosovar"},"fra":{"f":"Kosovare","m":"Kosovar"}}},{"name":{"common":"Kuwait","official":"State of Kuwait","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0627\u0644\u0643\u0648\u064A\u062A","common":"\u0627\u0644\u0643\u0648\u064A\u062A"}}},"tld":[".kw"],"cca2":"KW","ccn3":"414","cca3":"KWT","cioc":"KUW","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KWD":{"name":"Kuwaiti dinar","symbol":"\u062F.\u0643"}},"idd":{"root":"+9","suffixes":["65"]},"capital":["Kuwait City"],"altSpellings":["KW","State of Kuwait","Dawlat al-Kuwait"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0627\u0644\u0643\u0648\u064A\u062A","common":"\u0627\u0644\u0643\u0648\u064A\u062A"},"ces":{"official":"St\xe1t Kuvajt","common":"Kuvajt"},"deu":{"official":"Staat Kuwait","common":"Kuwait"},"est":{"official":"Kuveidi Riik","common":"Kuveit"},"fin":{"official":"Kuwaitin valtio","common":"Kuwait"},"fra":{"official":"\xc9tat du Kowe\xeft","common":"Kowe\xeft"},"hrv":{"official":"Dr\u017Eava Kuvajt","common":"Kuvajt"},"hun":{"official":"Kuvaiti \xc1llam","common":"Kuvait"},"ita":{"official":"Stato del Kuwait","common":"Kuwait"},"jpn":{"official":"\u30AF\u30A6\u30A7\u30FC\u30C8\u56FD","common":"\u30AF\u30A6\u30A7\u30FC\u30C8"},"kor":{"official":"\uCFE0\uC6E8\uC774\uD2B8\uAD6D","common":"\uCFE0\uC6E8\uC774\uD2B8"},"nld":{"official":"Staat Koeweit","common":"Koeweit"},"per":{"official":"\u062F\u0648\u0644\u062A \u06A9\u0648\u06CC\u062A","common":"\u06A9\u064F\u0648\u06CC\u062A"},"pol":{"official":"Pa\u0144stwo Kuwejt","common":"Kuwejt"},"por":{"official":"Estado do Kuwait","common":"Kuwait"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u041A\u0443\u0432\u0435\u0439\u0442","common":"\u041A\u0443\u0432\u0435\u0439\u0442"},"slk":{"official":"Kuvajtsk\xfd \u0161t\xe1t","common":"Kuvajt"},"spa":{"official":"Estado de Kuwait","common":"Kuwait"},"srp":{"official":"Dr\u017Eava Kuvajt","common":"Kuvajt"},"swe":{"official":"Staten Kuwait","common":"Kuwait"},"tur":{"official":"Kuveyt Devleti","common":"Kuveyt"},"urd":{"official":"\u062F\u0648\u0644\u062A\u0650 \u06A9\u0648\u06CC\u062A","common":"\u06A9\u0648\u06CC\u062A"},"zho":{"official":"\u79D1\u5A01\u7279\u56FD","common":"\u79D1\u5A01\u7279"}},"latlng":[29.5,45.75],"landlocked":false,"borders":["IRQ","SAU"],"area":17818,"flag":"\uD83C\uDDF0\uD83C\uDDFC","demonyms":{"eng":{"f":"Kuwaiti","m":"Kuwaiti"},"fra":{"f":"Kowe\xeftienne","m":"Kowe\xeftien"}}},{"name":{"common":"Laos","official":"Lao People\'s Democratic Republic","native":{"lao":{"official":"\u0EAA\u0EB2\u0E97\u0EB2\u0EA5\u0EB0\u0E99\u0EB0 \u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95 \u0E84\u0EBB\u0E99\u0EA5\u0EB2\u0EA7 \u0E82\u0EAD\u0E87","common":"\u0EAA\u0E9B\u0E9B\u0EA5\u0EB2\u0EA7"}}},"tld":[".la"],"cca2":"LA","ccn3":"418","cca3":"LAO","cioc":"LAO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"LAK":{"name":"Lao kip","symbol":"\u20AD"}},"idd":{"root":"+8","suffixes":["56"]},"capital":["Vientiane"],"altSpellings":["LA","Lao","Lao People\'s Democratic Republic","Sathalanalat Paxathipatai Paxaxon Lao"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"lao":"Lao"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0644\u0627\u0648\u0633 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0644\u0627\u0648\u0633"},"ces":{"official":"Laosk\xe1 lidov\u011B demokratick\xe1 republika","common":"Laos"},"deu":{"official":"Demokratische Volksrepublik Laos","common":"Laos"},"est":{"official":"Laose Demokraatlik Rahvavabariik","common":"Laos"},"fin":{"official":"Laosin demokraattinen kansantasavalta","common":"Laos"},"fra":{"official":"R\xe9publique d\xe9mocratique populaire lao","common":"Laos"},"hrv":{"official":"Narodna Demokratska Republika","common":"Laos"},"hun":{"official":"Laoszi N\xe9pi Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Laosz"},"ita":{"official":"Repubblica democratica popolare del Laos","common":"Laos"},"jpn":{"official":"\u30E9\u30AA\u30B9\u4EBA\u6C11\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30E9\u30AA\u30B9"},"kor":{"official":"\uB77C\uC624 \uC778\uBBFC \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uB77C\uC624\uC2A4"},"nld":{"official":"Lao Democratische Volksrepubliek","common":"Laos"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u062E\u0644\u0642 \u0644\u0627\u0626\u0648\u0633","common":"\u0644\u0627\u0626\u0648\u0633"},"pol":{"official":"Laota\u0144ska Republika Ludowo-Demokratyczna","common":"Laos"},"por":{"official":"Laos, Rep\xfablica Democr\xe1tica","common":"Laos"},"rus":{"official":"\u041B\u0430\u043E\u0441\u0441\u043A\u0430\u044F \u041D\u0430\u0440\u043E\u0434\u043D\u043E-\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041B\u0430\u043E\u0441"},"slk":{"official":"Laosk\xe1 \u013Eudovodemokratick\xe1 republika","common":"Laos"},"spa":{"official":"Rep\xfablica Democr\xe1tica Popular Lao","common":"Laos"},"srp":{"official":"Narodna Demokratska Republika Laos","common":"Laos"},"swe":{"official":"Demokratiska folkrepubliken Laos","common":"Laos"},"tur":{"official":"Laos Demokratik Halk Cumhuriyeti","common":"Laos"},"urd":{"official":"\u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0644\u0627\u0624","common":"\u0644\u0627\u0624\u0633"},"zho":{"official":"\u8001\u631D\u4EBA\u6C11\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u8001\u631D"}},"latlng":[18,105],"landlocked":true,"borders":["MMR","KHM","CHN","THA","VNM"],"area":236800,"flag":"\uD83C\uDDF1\uD83C\uDDE6","demonyms":{"eng":{"f":"Laotian","m":"Laotian"},"fra":{"f":"Laotienne","m":"Laotien"}}},{"name":{"common":"Lebanon","official":"Lebanese Republic","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629","common":"\u0644\u0628\u0646\u0627\u0646"},"fra":{"official":"R\xe9publique libanaise","common":"Liban"}}},"tld":[".lb"],"cca2":"LB","ccn3":"422","cca3":"LBN","cioc":"LBN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"LBP":{"name":"Lebanese pound","symbol":"\u0644.\u0644"}},"idd":{"root":"+9","suffixes":["61"]},"capital":["Beirut"],"altSpellings":["LB","Lebanese Republic","Al-Jumh\u016Br\u012Byah Al-Libn\u0101n\u012Byah"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic","fra":"French"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0644\u0628\u0646\u0627\u0646\u064A\u0629","common":"\u0644\u0628\u0646\u0627\u0646"},"ces":{"official":"Libanonsk\xe1 republika","common":"Libanon"},"deu":{"official":"Libanesische Republik","common":"Libanon"},"est":{"official":"Liibanoni Vabariik","common":"Liibanon"},"fin":{"official":"Libanonin tasavalta","common":"Libanon"},"fra":{"official":"R\xe9publique libanaise","common":"Liban"},"hrv":{"official":"Libanonska Republika","common":"Libanon"},"hun":{"official":"Libanoni K\xf6zt\xe1rsas\xe1g","common":"Libanon"},"ita":{"official":"Repubblica libanese","common":"Libano"},"jpn":{"official":"\u30EC\u30D0\u30CE\u30F3\u5171\u548C\u56FD","common":"\u30EC\u30D0\u30CE\u30F3"},"kor":{"official":"\uB808\uBC14\uB17C \uACF5\uD654\uAD6D","common":"\uB808\uBC14\uB17C"},"nld":{"official":"Libanese Republiek","common":"Libanon"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0644\u0628\u0646\u0627\u0646","common":"\u0644\u0628\u0646\u0627\u0646"},"pol":{"official":"Republika Liba\u0144ska","common":"Liban"},"por":{"official":"Rep\xfablica Libanesa","common":"L\xedbano"},"rus":{"official":"\u041B\u0438\u0432\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041B\u0438\u0432\u0430\u043D"},"slk":{"official":"Libanonsk\xe1 republika","common":"Libanon"},"spa":{"official":"Rep\xfablica Libanesa","common":"L\xedbano"},"srp":{"official":"Libanska Republika","common":"Liban"},"swe":{"official":"Republiken Libanon","common":"Libanon"},"tur":{"official":"L\xfcbnan Cumhuriyeti","common":"L\xfcbnan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0644\u0628\u0646\u0627\u0646","common":"\u0644\u0628\u0646\u0627\u0646"},"zho":{"official":"\u9ECE\u5DF4\u5AE9\u5171\u548C\u56FD","common":"\u9ECE\u5DF4\u5AE9"}},"latlng":[33.83333333,35.83333333],"landlocked":false,"borders":["ISR","SYR"],"area":10452,"flag":"\uD83C\uDDF1\uD83C\uDDE7","demonyms":{"eng":{"f":"Lebanese","m":"Lebanese"},"fra":{"f":"Libanaise","m":"Libanais"}}},{"name":{"common":"Liberia","official":"Republic of Liberia","native":{"eng":{"official":"Republic of Liberia","common":"Liberia"}}},"tld":[".lr"],"cca2":"LR","ccn3":"430","cca3":"LBR","cioc":"LBR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"LRD":{"name":"Liberian dollar","symbol":"$"}},"idd":{"root":"+2","suffixes":["31"]},"capital":["Monrovia"],"altSpellings":["LR","Republic of Liberia"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0644\u064A\u0628\u064A\u0631\u064A\u0627","common":"\u0644\u064A\u0628\u064A\u0631\u064A\u0627"},"ces":{"official":"Liberijsk\xe1 republika","common":"Lib\xe9rie"},"deu":{"official":"Republik Liberia","common":"Liberia"},"est":{"official":"Libeeria Vabariik","common":"Libeeria"},"fin":{"official":"Liberian tasavalta","common":"Liberia"},"fra":{"official":"R\xe9publique du Lib\xe9ria","common":"Liberia"},"hrv":{"official":"Republika Liberija","common":"Liberija"},"hun":{"official":"Lib\xe9riai K\xf6zt\xe1rsas\xe1g","common":"Lib\xe9ria"},"ita":{"official":"Repubblica di Liberia","common":"Liberia"},"jpn":{"official":"\u30EA\u30D9\u30EA\u30A2\u5171\u548C\u56FD","common":"\u30EA\u30D9\u30EA\u30A2"},"kor":{"official":"\uB77C\uC774\uBCA0\uB9AC\uC544 \uACF5\uD654\uAD6D","common":"\uB77C\uC774\uBCA0\uB9AC\uC544"},"nld":{"official":"Republiek Liberia","common":"Liberia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0644\u06CC\u0628\u0631\u06CC\u0627","common":"\u0644\u06CC\u0628\u0640\u0650\u0631\u06CC\u0627"},"pol":{"official":"Republika Liberii","common":"Liberia"},"por":{"official":"Rep\xfablica da Lib\xe9ria","common":"Lib\xe9ria"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041B\u0438\u0431\u0435\u0440\u0438\u044F","common":"\u041B\u0438\u0431\u0435\u0440\u0438\u044F"},"slk":{"official":"Lib\xe9rijsk\xe1 republika","common":"Lib\xe9ria"},"spa":{"official":"Rep\xfablica de Liberia","common":"Liberia"},"srp":{"official":"Republika Liberija","common":"Liberija"},"swe":{"official":"Republiken Liberia","common":"Liberia"},"tur":{"official":"Liberya Cumhuriyeti","common":"Liberya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0644\u0627\u0626\u0628\u06CC\u0631\u06CC\u0627","common":"\u0644\u0627\u0626\u0628\u06CC\u0631\u06CC\u0627"},"zho":{"official":"\u5229\u6BD4\u91CC\u4E9A\u5171\u548C\u56FD","common":"\u5229\u6BD4\u91CC\u4E9A"}},"latlng":[6.5,-9.5],"landlocked":false,"borders":["GIN","CIV","SLE"],"area":111369,"flag":"\uD83C\uDDF1\uD83C\uDDF7","demonyms":{"eng":{"f":"Liberian","m":"Liberian"},"fra":{"f":"Lib\xe9rienne","m":"Lib\xe9rien"}}},{"name":{"common":"Libya","official":"State of Libya","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0644\u064A\u0628\u064A\u0627","common":"\u0644\u064A\u0628\u064A\u0627"}}},"tld":[".ly"],"cca2":"LY","ccn3":"434","cca3":"LBY","cioc":"LBA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"LYD":{"name":"Libyan dinar","symbol":"\u0644.\u062F"}},"idd":{"root":"+2","suffixes":["18"]},"capital":["Tripoli"],"altSpellings":["LY","State of Libya","Dawlat Libya"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0644\u064A\u0628\u064A\u0627","common":"\u0644\u064A\u0628\u064A\u0627"},"ces":{"official":"St\xe1t Libye","common":"Libye"},"deu":{"official":"Staat Libyen","common":"Libyen"},"est":{"official":"Liib\xfca","common":"Liib\xfca"},"fin":{"official":"Libyan valtio","common":"Libya"},"fra":{"official":"Grande R\xe9publique arabe libyenne populaire et socialiste","common":"Libye"},"hrv":{"official":"Dr\u017Eava Libiji","common":"Libija"},"hun":{"official":"L\xedbia \xc1llam","common":"L\xedbia"},"ita":{"official":"Stato della Libia","common":"Libia"},"jpn":{"official":"\u30EA\u30D3\u30A2","common":"\u30EA\u30D3\u30A2"},"kor":{"official":"\uB9AC\uBE44\uC544","common":"\uB9AC\uBE44\uC544"},"nld":{"official":"Staat van Libi\xeb","common":"Libi\xeb"},"per":{"official":"\u062F\u0648\u0644\u062A \u0644\u06CC\u0628\u06CC","common":"\u0644\u06CC\u0628\u06CC"},"pol":{"official":"Pa\u0144stwo Libia","common":"Libia"},"por":{"official":"Estado da L\xedbia","common":"L\xedbia"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u041B\u0438\u0432\u0438\u0438","common":"\u041B\u0438\u0432\u0438\u044F"},"slk":{"official":"L\xedbya","common":"L\xedbya"},"spa":{"official":"Estado de Libia","common":"Libia"},"srp":{"official":"Dr\u017Eava Libija","common":"Libija"},"swe":{"official":"Staten Libyen","common":"Libyen"},"tur":{"official":"Libya Devleti","common":"Libya"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0644\u06CC\u0628\u06CC\u0627","common":"\u0644\u06CC\u0628\u06CC\u0627"},"zho":{"official":"\u5229\u6BD4\u4E9A\u56FD","common":"\u5229\u6BD4\u4E9A"}},"latlng":[25,17],"landlocked":false,"borders":["DZA","TCD","EGY","NER","SDN","TUN"],"area":1759540,"flag":"\uD83C\uDDF1\uD83C\uDDFE","demonyms":{"eng":{"f":"Libyan","m":"Libyan"},"fra":{"f":"Libyenne","m":"Libyen"}}},{"name":{"common":"Saint Lucia","official":"Saint Lucia","native":{"eng":{"official":"Saint Lucia","common":"Saint Lucia"}}},"tld":[".lc"],"cca2":"LC","ccn3":"662","cca3":"LCA","cioc":"LCA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["758"]},"capital":["Castries"],"altSpellings":["LC"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0633\u0627\u0646\u062A \u0644\u0648\u0633\u064A\u0627","common":"\u0633\u0627\u0646\u062A \u0644\u0648\u0633\u064A\u0627"},"ces":{"official":"Svat\xe1 Lucie","common":"Svat\xe1 Lucie"},"deu":{"official":"St. Lucia","common":"St. Lucia"},"est":{"official":"Saint Lucia","common":"Saint Lucia"},"fin":{"official":"Saint Lucia","common":"Saint Lucia"},"fra":{"official":"Sainte-Lucie","common":"Sainte-Lucie"},"hrv":{"official":"Sveta Lucija","common":"Sveta Lucija"},"hun":{"official":"Saint Lucia","common":"Saint Lucia"},"ita":{"official":"Santa Lucia","common":"Santa Lucia"},"jpn":{"official":"\u30BB\u30F3\u30C8\u30EB\u30B7\u30A2","common":"\u30BB\u30F3\u30C8\u30EB\u30B7\u30A2"},"kor":{"official":"\uC138\uC778\uD2B8\uB8E8\uC2DC\uC544","common":"\uC138\uC778\uD2B8\uB8E8\uC2DC\uC544"},"nld":{"official":"Saint Lucia","common":"Saint Lucia"},"per":{"official":"\u0633\u0646\u062A \u0644\u0648\u0633\u06CC\u0627","common":"\u0633\u0646\u062A \u0644\u0648\u0633\u06CC\u0627"},"pol":{"official":"Saint Lucia","common":"Saint Lucia"},"por":{"official":"Santa L\xfacia","common":"Santa L\xfacia"},"rus":{"official":"\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F","common":"\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F"},"slk":{"official":"Sv\xe4t\xe1 Lucia","common":"Sv\xe4t\xe1 Lucia"},"spa":{"official":"Santa Luc\xeda","common":"Santa Luc\xeda"},"srp":{"official":"Sveta Lucija","common":"Sveta Lucija"},"swe":{"official":"Saint Lucia","common":"Saint Lucia"},"tur":{"official":"Saint Lucia","common":"Saint Lucia"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u0644\u0648\u0633\u06CC\u0627","common":"\u0633\u06CC\u0646\u0679 \u0644\u0648\u0633\u06CC\u0627"},"zho":{"official":"\u5723\u5362\u897F\u4E9A","common":"\u5723\u5362\u897F\u4E9A"}},"latlng":[13.88333333,-60.96666666],"landlocked":false,"borders":[],"area":616,"flag":"\uD83C\uDDF1\uD83C\uDDE8","demonyms":{"eng":{"f":"Saint Lucian","m":"Saint Lucian"},"fra":{"f":"Saint-Lucienne","m":"Saint-Lucien"}}},{"name":{"common":"Liechtenstein","official":"Principality of Liechtenstein","native":{"deu":{"official":"F\xfcrstentum Liechtenstein","common":"Liechtenstein"}}},"tld":[".li"],"cca2":"LI","ccn3":"438","cca3":"LIE","cioc":"LIE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"CHF":{"name":"Swiss franc","symbol":"Fr"}},"idd":{"root":"+4","suffixes":["23"]},"capital":["Vaduz"],"altSpellings":["LI","Principality of Liechtenstein","F\xfcrstentum Liechtenstein"],"region":"Europe","subregion":"Western Europe","languages":{"deu":"German"},"translations":{"ara":{"official":"\u0625\u0645\u0627\u0631\u0629 \u0644\u064A\u062E\u062A\u0646\u0634\u062A\u0627\u064A\u0646","common":"\u0644\u064A\u062E\u062A\u0646\u0634\u062A\u0627\u064A\u0646"},"ces":{"official":"Kn\xed\u017Eectv\xed Lichten\u0161tejnsk\xe9","common":"Lichten\u0161tejnsko"},"deu":{"official":"F\xfcrstentum Liechtenstein","common":"Liechtenstein"},"est":{"official":"Liechtensteini V\xfcrstiriik","common":"Liechtenstein"},"fin":{"official":"Liechensteinin ruhtinaskunta","common":"Liechenstein"},"fra":{"official":"Principaut\xe9 du Liechtenstein","common":"Liechtenstein"},"hrv":{"official":"Kne\u017Eevina Lihten\u0161tajn","common":"Lihten\u0161tajn"},"hun":{"official":"Liechtensteini Hercegs\xe9g","common":"Liechtenstein"},"ita":{"official":"Principato del Liechtenstein","common":"Liechtenstein"},"jpn":{"official":"\u30EA\u30D2\u30C6\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3\u516C\u56FD","common":"\u30EA\u30D2\u30C6\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3"},"kor":{"official":"\uB9AC\uD788\uD150\uC288\uD0C0\uC778 \uACF5\uAD6D","common":"\uB9AC\uD788\uD150\uC288\uD0C0\uC778"},"nld":{"official":"Vorstendom Liechtenstein","common":"Liechtenstein"},"per":{"official":"\u0634\u0627\u0647\u0632\u0627\u062F\u0647\u200C\u0646\u0634\u06CC\u0646 \u0644\u06CC\u062E\u062A\u0646\u200C\u0627\u0634\u062A\u0627\u06CC\u0646","common":"\u0644\u06CC\u062E\u062A\u0646\u200C\u0627\u0634\u062A\u0627\u06CC\u0646"},"pol":{"official":"Ksi\u0119stwo Liechtensteinu","common":"Liechtenstein"},"por":{"official":"Principado de Liechtenstein","common":"Liechtenstein"},"rus":{"official":"\u041A\u043D\u044F\u0436\u0435\u0441\u0442\u0432\u043E \u041B\u0438\u0445\u0442\u0435\u043D\u0448\u0442\u0435\u0439\u043D","common":"\u041B\u0438\u0445\u0442\u0435\u043D\u0448\u0442\u0435\u0439\u043D"},"slk":{"official":"Lichten\u0161tajnsk\xe9 knie\u017Eatstvo","common":"Lichten\u0161tajnsko"},"spa":{"official":"Principado de Liechtenstein","common":"Liechtenstein"},"srp":{"official":"Kne\u017Eevina Lihten\u0161tajn","common":"Lihten\u0161tajn"},"swe":{"official":"Furstend\xf6met Liechtenstein","common":"Liechtenstein"},"tur":{"official":"Lihten\u015Ftayn Prensli\u011Fi","common":"Lihten\u015Ftayn"},"urd":{"official":"\u0627\u0645\u0627\u0631\u0627\u062A \u0644\u06CC\u062E\u062A\u06CC\u0646\u0633\u062A\u0627\u0626\u0646","common":"\u0644\u06CC\u062E\u062A\u06CC\u0646\u0633\u062A\u0627\u0626\u0646"},"zho":{"official":"\u5217\u652F\u6566\u58EB\u767B\u516C\u56FD","common":"\u5217\u652F\u6566\u58EB\u767B"}},"latlng":[47.26666666,9.53333333],"landlocked":true,"borders":["AUT","CHE"],"area":160,"flag":"\uD83C\uDDF1\uD83C\uDDEE","demonyms":{"eng":{"f":"Liechtensteiner","m":"Liechtensteiner"},"fra":{"f":"Liechtensteinoise","m":"Liechtensteinois"}}},{"name":{"common":"Sri Lanka","official":"Democratic Socialist Republic of Sri Lanka","native":{"sin":{"official":"\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF \u0DB4\u0DCA\u200D\u0DBB\u0DA2\u0DCF\u0DAD\u0DCF\u0DB1\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A \u0DC3\u0DB8\u0DCF\u0DA2\u0DC0\u0DCF\u0DAF\u0DD3 \u0DA2\u0DB1\u0DBB\u0DA2\u0DBA","common":"\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0"},"tam":{"official":"\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8 \u0B9A\u0BA9\u0BA8\u0BBE\u0BAF\u0B95 \u0B9A\u0BCB\u0B9A\u0BB2\u0BBF\u0B9A\u0B95\u0BCD \u0B95\u0BC1\u0B9F\u0BBF\u0BAF\u0BB0\u0B9A\u0BC1","common":"\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8"}}},"tld":[".lk",".\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8",".\u0DBD\u0D82\u0D9A\u0DCF"],"cca2":"LK","ccn3":"144","cca3":"LKA","cioc":"SRI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"LKR":{"name":"Sri Lankan rupee","symbol":"Rs  \u0DBB\u0DD4"}},"idd":{"root":"+9","suffixes":["4"]},"capital":["Colombo"],"altSpellings":["LK","ila\u1E45kai","Democratic Socialist Republic of Sri Lanka"],"region":"Asia","subregion":"Southern Asia","languages":{"sin":"Sinhala","tam":"Tamil"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0631\u064A\u0644\u0627\u0646\u0643\u0627 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0633\u0631\u064A\u0644\u0627\u0646\u0643\u0627"},"ces":{"official":"Sr\xedlansk\xe1 demokratick\xe1 socialistick\xe1 republika","common":"Sr\xed Lanka"},"deu":{"official":"Demokratische Sozialistische Republik Sri Lanka","common":"Sri Lanka"},"est":{"official":"Sri Lanka Demokraatlik Sotsialistlik Vabariik","common":"Sri Lanka"},"fin":{"official":"Sri Lankan demokraattinen sosialistinen tasavalta","common":"Sri Lanka"},"fra":{"official":"R\xe9publique d\xe9mocratique socialiste du Sri Lanka","common":"Sri Lanka"},"hrv":{"official":"Demokratska Socijalisti\u010Dke Republike \u0160ri Lanke","common":"\u0160ri Lanka"},"hun":{"official":"Sr\xed Lanka-i Demokratikus Szocialista K\xf6zt\xe1rsas\xe1g","common":"Sr\xed Lanka"},"ita":{"official":"Repubblica democratica socialista dello Sri Lanka","common":"Sri Lanka"},"jpn":{"official":"\u30B9\u30EA\u30E9\u30F3\u30AB\u6C11\u4E3B\u793E\u4F1A\u4E3B\u7FA9\u5171\u548C\u56FD","common":"\u30B9\u30EA\u30E9\u30F3\u30AB"},"kor":{"official":"\uC2A4\uB9AC\uB791\uCE74 \uBBFC\uC8FC \uC0AC\uD68C\uC8FC\uC758 \uACF5\uD654\uAD6D","common":"\uC2A4\uB9AC\uB791\uCE74"},"nld":{"official":"Democratische Socialistische Republiek Sri Lanka","common":"Sri Lanka"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u0633\u0648\u0633\u06CC\u0627\u0644\u06CC\u0633\u062A\u06CC \u0633\u0631\u06CC\u200C\u0644\u0627\u0646\u06A9\u0627","common":"\u0633\u0631\u06CC\u200C\u0644\u0627\u0646\u06A9\u0627"},"pol":{"official":"Demokratyczno-Socjalistyczna Republika Sri Lanki","common":"Sri Lanka"},"por":{"official":"Rep\xfablica Democr\xe1tica Socialista do Sri Lanka","common":"Sri Lanka"},"rus":{"official":"\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0421\u043E\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430","common":"\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430"},"slk":{"official":"Sr\xedlansk\xe1 demokratick\xe1 socialistick\xe1 republika","common":"Sr\xed Lanka"},"spa":{"official":"Rep\xfablica Democr\xe1tica Socialista de Sri Lanka","common":"Sri Lanka"},"srp":{"official":"Demokratska Socijalisti\u010Dka Republika \u0160ri Lanka","common":"\u0160ri Lanka"},"swe":{"official":"Demokratiska socialistiska republiken Sri Lanka","common":"Sri Lanka"},"tur":{"official":"Sri Lanka Demokratik Sosyalist Cumhuriyeti","common":"Sri Lanka"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC \u0648 \u0627\u0634\u062A\u0631\u0627\u06A9\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0631\u06CC \u0644\u0646\u06A9\u0627","common":"\u0633\u0631\u06CC \u0644\u0646\u06A9\u0627"},"zho":{"official":"\u65AF\u91CC\u5170\u5361\u6C11\u4E3B\u793E\u4F1A\u4E3B\u4E49\u5171\u548C\u56FD","common":"\u65AF\u91CC\u5170\u5361"}},"latlng":[7,81],"landlocked":false,"borders":["IND"],"area":65610,"flag":"\uD83C\uDDF1\uD83C\uDDF0","demonyms":{"eng":{"f":"Sri Lankan","m":"Sri Lankan"},"fra":{"f":"Sri-lankaise","m":"Sri-lankais"}}},{"name":{"common":"Lesotho","official":"Kingdom of Lesotho","native":{"eng":{"official":"Kingdom of Lesotho","common":"Lesotho"},"sot":{"official":"Kingdom of Lesotho","common":"Lesotho"}}},"tld":[".ls"],"cca2":"LS","ccn3":"426","cca3":"LSO","cioc":"LES","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"LSL":{"name":"Lesotho loti","symbol":"L"},"ZAR":{"name":"South African rand","symbol":"R"}},"idd":{"root":"+2","suffixes":["66"]},"capital":["Maseru"],"altSpellings":["LS","Kingdom of Lesotho","Muso oa Lesotho"],"region":"Africa","subregion":"Southern Africa","languages":{"eng":"English","sot":"Sotho"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0644\u064A\u0633\u0648\u062A\u0648","common":"\u0644\u064A\u0633\u0648\u062A\u0648"},"ces":{"official":"Lesothsk\xe9 kr\xe1lovstv\xed","common":"Lesotho"},"deu":{"official":"K\xf6nigreich Lesotho","common":"Lesotho"},"est":{"official":"Lesotho Kuningriik","common":"Lesotho"},"fin":{"official":"Lesothon kuningaskunta","common":"Lesotho"},"fra":{"official":"Royaume du Lesotho","common":"Lesotho"},"hrv":{"official":"Kraljevina Lesoto","common":"Lesoto"},"hun":{"official":"Lesoth\xf3i Kir\xe1lys\xe1g","common":"Lesotho"},"ita":{"official":"Regno del Lesotho","common":"Lesotho"},"jpn":{"official":"\u30EC\u30BD\u30C8\u738B\u56FD","common":"\u30EC\u30BD\u30C8"},"kor":{"official":"\uB808\uC18C\uD1A0 \uC655\uAD6D","common":"\uB808\uC18C\uD1A0"},"nld":{"official":"Koninkrijk Lesotho","common":"Lesotho"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0644\u0633\u0648\u062A\u0648","common":"\u0644\u0633\u0648\u062A\u0648"},"pol":{"official":"Kr\xf3lestwo Lesotho","common":"Lesotho"},"por":{"official":"Reino do Lesoto","common":"Lesoto"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u041B\u0435\u0441\u043E\u0442\u043E","common":"\u041B\u0435\u0441\u043E\u0442\u043E"},"slk":{"official":"Lesothsk\xe9 kr\xe1\u013Eovstvo","common":"Lesotho"},"spa":{"official":"Reino de Lesotho","common":"Lesotho"},"srp":{"official":"Kraljevina Lesoto","common":"Lesoto"},"swe":{"official":"Konungariket Lesotho","common":"Lesotho"},"tur":{"official":"Lesotho Krall\u0131\u011F\u0131","common":"Lesotho"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0644\u06CC\u0633\u0648\u062A\u06BE\u0648","common":"\u0644\u06CC\u0633\u0648\u062A\u06BE\u0648"},"zho":{"official":"\u83B1\u7D22\u6258\u738B\u56FD","common":"\u83B1\u7D22\u6258"}},"latlng":[-29.5,28.5],"landlocked":true,"borders":["ZAF"],"area":30355,"flag":"\uD83C\uDDF1\uD83C\uDDF8","demonyms":{"eng":{"f":"Mosotho","m":"Mosotho"},"fra":{"f":"L\xe9sothienne","m":"L\xe9sothien"}}},{"name":{"common":"Lithuania","official":"Republic of Lithuania","native":{"lit":{"official":"Lietuvos Respublikos","common":"Lietuva"}}},"tld":[".lt"],"cca2":"LT","ccn3":"440","cca3":"LTU","cioc":"LTU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["70"]},"capital":["Vilnius"],"altSpellings":["LT","Republic of Lithuania","Lietuvos Respublika"],"region":"Europe","subregion":"Northern Europe","languages":{"lit":"Lithuanian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0644\u064A\u062A\u0648\u0627\u0646\u064A\u0627","common":"\u0644\u064A\u062A\u0648\u0627\u0646\u064A\u0627"},"ces":{"official":"Litevsk\xe1 republika","common":"Litva"},"deu":{"official":"Republik Litauen","common":"Litauen"},"est":{"official":"Leedu Vabariik","common":"Leedu"},"fin":{"official":"Liettuan tasavalta","common":"Liettua"},"fra":{"official":"R\xe9publique de Lituanie","common":"Lituanie"},"hrv":{"official":"Republika Litva","common":"Litva"},"hun":{"official":"Litv\xe1n K\xf6zt\xe1rsas\xe1g","common":"Litv\xe1nia"},"ita":{"official":"Repubblica di Lituania","common":"Lituania"},"jpn":{"official":"\u30EA\u30C8\u30A2\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30EA\u30C8\u30A2\u30CB\u30A2"},"kor":{"official":"\uB9AC\uD22C\uC544\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uB9AC\uD22C\uC544\uB2C8\uC544"},"nld":{"official":"Republiek Litouwen","common":"Litouwen"},"per":{"official":"\u0644\u06CC\u062A\u0648\u0627\u0646\u06CC\u0627\u06CC\u06CC\u200C\u0647\u0627","common":"\u0644\u06CC\u062A\u0648\u0627\u0646\u06CC\u0627\u06CC\u06CC\u200C\u0647\u0627"},"pol":{"official":"Republika Litewska","common":"Litwa"},"por":{"official":"Rep\xfablica da Litu\xe2nia","common":"Litu\xe2nia"},"rus":{"official":"\u041B\u0438\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041B\u0438\u0442\u0432\u0430"},"slk":{"official":"Litovsk\xe1 republika","common":"Litva"},"spa":{"official":"Rep\xfablica de Lituania","common":"Lituania"},"srp":{"official":"Republika Litvanija","common":"Litvanija"},"swe":{"official":"Republiken Litauen","common":"Litauen"},"tur":{"official":"Litvanya Cumhuriyeti","common":"Litvanya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0644\u062A\u06BE\u0648\u0648\u06CC\u0646\u06CC\u0627","common":"\u0644\u062A\u06BE\u0648\u0648\u06CC\u0646\u06CC\u0627"},"zho":{"official":"\u7ACB\u9676\u5B9B\u5171\u548C\u56FD","common":"\u7ACB\u9676\u5B9B"}},"latlng":[56,24],"landlocked":false,"borders":["BLR","LVA","POL","RUS"],"area":65300,"flag":"\uD83C\uDDF1\uD83C\uDDF9","demonyms":{"eng":{"f":"Lithuanian","m":"Lithuanian"},"fra":{"f":"Lituanienne","m":"Lituanien"}}},{"name":{"common":"Luxembourg","official":"Grand Duchy of Luxembourg","native":{"deu":{"official":"Gro\xdfherzogtum Luxemburg","common":"Luxemburg"},"fra":{"official":"Grand-Duch\xe9 de Luxembourg","common":"Luxembourg"},"ltz":{"official":"Groussherzogtum L\xebtzebuerg","common":"L\xebtzebuerg"}}},"tld":[".lu"],"cca2":"LU","ccn3":"442","cca3":"LUX","cioc":"LUX","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["52"]},"capital":["Luxembourg"],"altSpellings":["LU","Grand Duchy of Luxembourg","Grand-Duch\xe9 de Luxembourg","Gro\xdfherzogtum Luxemburg","Groussherzogtum L\xebtzebuerg"],"region":"Europe","subregion":"Western Europe","languages":{"deu":"German","fra":"French","ltz":"Luxembourgish"},"translations":{"ara":{"official":"\u062F\u0648\u0642\u064A\u0629 \u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063A","common":"\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063A"},"ces":{"official":"Lucembursk\xe9 velkov\xe9vodstv\xed","common":"Lucembursko"},"deu":{"official":"Gro\xdfherzogtum Luxemburg,","common":"Luxemburg"},"est":{"official":"Luksemburgi Suurhertsogiriik","common":"Luksemburg"},"fin":{"official":"Luxemburgin suurherttuakunta","common":"Luxemburg"},"fra":{"official":"Grand-Duch\xe9 de Luxembourg","common":"Luxembourg"},"hrv":{"official":"Veliko Vojvodstvo Luksemburg","common":"Luksemburg"},"hun":{"official":"Luxemburgi Nagyhercegs\xe9g","common":"Luxemburg"},"ita":{"official":"Granducato di Lussemburgo","common":"Lussemburgo"},"jpn":{"official":"\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF\u5927\u516C\u56FD","common":"\u30EB\u30AF\u30BB\u30F3\u30D6\u30EB\u30AF"},"kor":{"official":"\uB8E9\uC148\uBD80\uB974\uD06C \uB300\uACF5\uAD6D","common":"\uB8E9\uC148\uBD80\uB974\uD06C"},"nld":{"official":"Groothertogdom Luxemburg","common":"Luxemburg"},"per":{"official":"\u062F\u0648\u06A9\u200C\u0646\u0634\u06CC\u0646 \u0644\u0648\u06A9\u0632\u0627\u0645\u0628\u0648\u0631\u06AF","common":"\u0644\u0648\u06A9\u0632\u0627\u0645\u0628\u0648\u0631\u06AF"},"pol":{"official":"Wielkie Ksi\u0119stwo Luksemburga","common":"Luksemburg"},"por":{"official":"Gr\xe3o-Ducado do Luxemburgo","common":"Luxemburgo"},"rus":{"official":"\u0412\u0435\u043B\u0438\u043A\u043E\u0435 \u0413\u0435\u0440\u0446\u043E\u0433\u0441\u0442\u0432\u043E \u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433","common":"\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433"},"slk":{"official":"Luxembursk\xe9 ve\u013Ekovojvodstvo","common":"Luxembursko"},"spa":{"official":"Gran Ducado de Luxemburgo","common":"Luxemburgo"},"srp":{"official":"Veliko Vojvodstvo Luksemburg","common":"Luksemburg"},"swe":{"official":"Storhertigd\xf6met Luxemburg","common":"Luxemburg"},"tur":{"official":"L\xfcksemburg B\xfcy\xfck D\xfckal\u0131\u011F\u0131","common":"L\xfcksemburg"},"urd":{"official":"\u062F\u0648\u0642\u06CC\u06C1 \u06A9\u0628\u06CC\u0631\u0644\u06A9\u0633\u0645\u0628\u0631\u06AF","common":"\u0644\u06A9\u0633\u0645\u0628\u0631\u06AF"},"zho":{"official":"\u5362\u68EE\u5821\u5927\u516C\u56FD","common":"\u5362\u68EE\u5821"}},"latlng":[49.75,6.16666666],"landlocked":true,"borders":["BEL","FRA","DEU"],"area":2586,"flag":"\uD83C\uDDF1\uD83C\uDDFA","demonyms":{"eng":{"f":"Luxembourger","m":"Luxembourger"},"fra":{"f":"Luxembourgeoise","m":"Luxembourgeois"}}},{"name":{"common":"Latvia","official":"Republic of Latvia","native":{"lav":{"official":"Latvijas Republikas","common":"Latvija"}}},"tld":[".lv"],"cca2":"LV","ccn3":"428","cca3":"LVA","cioc":"LAT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["71"]},"capital":["Riga"],"altSpellings":["LV","Republic of Latvia","Latvijas Republika"],"region":"Europe","subregion":"Northern Europe","languages":{"lav":"Latvian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0644\u0627\u062A\u0641\u064A\u0627","common":"\u0644\u0627\u062A\u0641\u064A\u0627"},"ces":{"official":"Loty\u0161sk\xe1 republika","common":"Loty\u0161sko"},"deu":{"official":"Republik Lettland","common":"Lettland"},"est":{"official":"L\xe4ti Vabariik","common":"L\xe4ti"},"fin":{"official":"Latvian tasavalta","common":"Latvia"},"fra":{"official":"R\xe9publique de Lettonie","common":"Lettonie"},"hrv":{"official":"Republika Latvija","common":"Latvija"},"hun":{"official":"Lett K\xf6zt\xe1rsas\xe1g","common":"Lettorsz\xe1g"},"ita":{"official":"Repubblica di Lettonia","common":"Lettonia"},"jpn":{"official":"\u30E9\u30C8\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30E9\u30C8\u30D3\u30A2"},"kor":{"official":"\uB77C\uD2B8\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uB77C\uD2B8\uBE44\uC544"},"nld":{"official":"Republiek Letland","common":"Letland"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0644\u062A\u0648\u0646\u06CC","common":"\u0644\u062A\u0648\u0646\u06CC"},"pol":{"official":"Republika \u0141otewska","common":"\u0141otwa"},"por":{"official":"Rep\xfablica da Let\xf3nia","common":"Let\xf3nia"},"rus":{"official":"\u041B\u0430\u0442\u0432\u0438\u0439\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041B\u0430\u0442\u0432\u0438\u044F"},"slk":{"official":"Loty\u0161sk\xe1 republika","common":"Loty\u0161sko"},"spa":{"official":"Rep\xfablica de Letonia","common":"Letonia"},"srp":{"official":"Republika Letonija","common":"Letonija"},"swe":{"official":"Republiken Lettland","common":"Lettland"},"tur":{"official":"Letonya Cumhuriyeti","common":"Letonya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0644\u0679\u0648\u06CC\u0627","common":"\u0644\u0679\u0648\u06CC\u0627"},"zho":{"official":"\u62C9\u8131\u7EF4\u4E9A\u5171\u548C\u56FD","common":"\u62C9\u8131\u7EF4\u4E9A"}},"latlng":[57,25],"landlocked":false,"borders":["BLR","EST","LTU","RUS"],"area":64559,"flag":"\uD83C\uDDF1\uD83C\uDDFB","demonyms":{"eng":{"f":"Latvian","m":"Latvian"},"fra":{"f":"Lettone","m":"Letton"}}},{"name":{"common":"Macau","official":"Macao Special Administrative Region of the People\'s Republic of China","native":{"por":{"official":"Regi\xe3o Administrativa Especial de Macau da Rep\xfablica Popular da China","common":"Macau"},"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A","common":"\u6FB3\u95E8"}}},"tld":[".mo"],"cca2":"MO","ccn3":"446","cca3":"MAC","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"MOP":{"name":"Macanese pataca","symbol":"P"}},"idd":{"root":"+8","suffixes":["53"]},"capital":[],"altSpellings":["MO","\u6FB3\u95E8","Macao","Macao Special Administrative Region of the People\'s Republic of China","\u4E2D\u83EF\u4EBA\u6C11\u5171\u548C\u570B\u6FB3\u9580\u7279\u5225\u884C\u653F\u5340","Regi\xe3o Administrativa Especial de Macau da Rep\xfablica Popular da China"],"region":"Asia","subregion":"Eastern Asia","languages":{"por":"Portuguese","zho":"Chinese"},"translations":{"ara":{"official":"\u0645\u0646\u0637\u0642\u0629 \u0645\u0627\u0643\u0627\u0648 \u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0645\u0627\u0643\u0627\u0648"},"ces":{"official":"Zvl\xe1\u0161tn\xed spr\xe1vn\xed oblast \u010C\xednsk\xe9 lidov\xe9 republiky Macao","common":"Macao"},"deu":{"official":"Sonderverwaltungsregion Macau der Volksrepublik China","common":"Macao"},"est":{"official":"Macau erihalduspiirkond","common":"Macau"},"fin":{"official":"Macaon Kiinan kansantasavallan erityishallintoalue","common":"Macao"},"fra":{"official":"R\xe9gion administrative sp\xe9ciale de Macao de la R\xe9publique populaire de Chine","common":"Macao"},"hrv":{"official":"Makao Posebnog upravnog podru\u010DjaNarodne Republike Kine","common":"Makao"},"hun":{"official":"Maka\xf3","common":"Maka\xf3"},"ita":{"official":"Macao Regione amministrativa speciale della Repubblica Popolare Cinese","common":"Macao"},"jpn":{"official":"\u6FB3\u9580\u7279\u5225\u884C\u653F\u533A","common":"\u30DE\u30AB\u30AA"},"kor":{"official":"\uC911\uD654\uC778\uBBFC\uACF5\uD654\uAD6D \uB9C8\uCE74\uC624 \uD2B9\uBCC4\uD589\uC815\uAD6C","common":"\uB9C8\uCE74\uC624"},"nld":{"official":"Speciale Administratieve Regio Macau van de Volksrepubliek China","common":"Macao"},"per":{"official":"\u0645\u0627\u06A9\u0627\u0626\u0648","common":"\u0645\u0627\u06A9\u0627\u0626\u0648"},"pol":{"official":"Specjalny Region Administracyjny Chi\u0144skiej Republiki Ludowej Makau","common":"Makau"},"por":{"official":"Macau Regi\xe3o Administrativa Especial da Rep\xfablica Popular da China","common":"Macau"},"rus":{"official":"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0440\u0430\u0439\u043E\u043D \u041C\u0430\u043A\u0430\u043E \u041A\u0438\u0442\u0430\u0439\u0441\u043A\u043E\u0439 \u041D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0438\u0442\u0430\u0439","common":"\u041C\u0430\u043A\u0430\u043E"},"slk":{"official":"Macao, \u0160peci\xe0lna administrat\xedvna oblas\u0166","common":"Macao"},"spa":{"official":"Macao, Regi\xf3n Administrativa Especial de la Rep\xfablica Popular China","common":"Macao"},"srp":{"official":"Makao specijalna administrativna oblast Narodne Republike Kine","common":"Makao"},"swe":{"official":"Macao","common":"Macao"},"tur":{"official":"\xe7in Halk Cumhuriyeti Makao \xf6zel \u0130dari B\xf6lgesi","common":"Makao"},"urd":{"official":"\u0645\u06A9\u0627\u0624 \u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u06CC\u0646 \u06A9\u0627 \u062E\u0635\u0648\u0635\u06CC \u0627\u0646\u062A\u0638\u0627\u0645\u06CC \u0639\u0644\u0627\u0642\u06C1","common":"\u0645\u06A9\u0627\u0624"},"zho":{"official":"\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A","common":"\u6FB3\u95E8"}},"latlng":[22.16666666,113.55],"landlocked":false,"borders":["CHN"],"area":30,"flag":"\uD83C\uDDF2\uD83C\uDDF4","demonyms":{"eng":{"f":"Macanese","m":"Macanese"},"fra":{"f":"Macanaise","m":"Macanais"}}},{"name":{"common":"Saint Martin","official":"Saint Martin","native":{"fra":{"official":"Saint-Martin","common":"Saint-Martin"}}},"tld":[".fr",".gp"],"cca2":"MF","ccn3":"663","cca3":"MAF","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["90"]},"capital":["Marigot"],"altSpellings":["MF","Collectivity of Saint Martin","Collectivit\xe9 de Saint-Martin","Saint Martin (French part)"],"region":"Americas","subregion":"Caribbean","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0633\u0627\u0646\u062A \u0645\u0627\u0631\u062A\u0646","common":"\u0633\u0627\u0646\u062A \u0645\u0627\u0631\u062A\u0646"},"ces":{"official":"Svat\xfd Martin","common":"Svat\xfd Martin (Francie)"},"deu":{"official":"Saint-Martin","common":"Saint-Martin"},"est":{"official":"Saint-Martini \xfchendus","common":"Saint-Martin"},"fin":{"official":"Saint-Martin","common":"Saint-Martin"},"fra":{"official":"Saint-Martin","common":"Saint-Martin"},"hrv":{"official":"Saint Martin","common":"Sveti Martin"},"hun":{"official":"Saint-Martin K\xf6z\xf6ss\xe9g","common":"Saint-Martin"},"ita":{"official":"saint Martin","common":"Saint Martin"},"jpn":{"official":"\u30B5\u30F3\u30DE\u30EB\u30BF\u30F3","common":"\u30B5\u30F3\u30FB\u30DE\u30EB\u30BF\u30F3"},"kor":{"official":"\uC0DD\uB9C8\uB974\uD0F1","common":"\uC0DD\uB9C8\uB974\uD0F1"},"nld":{"official":"Saint Martin","common":"Saint-Martin"},"per":{"official":"\u0633\u0646 \u0645\u0627\u0631\u062A\u0646","common":"\u0633\u0646 \u0645\u0627\u0631\u062A\u0646"},"pol":{"official":"Wsp\xf3lnota Saint-Martin","common":"Saint-Martin"},"por":{"official":"saint Martin","common":"S\xe3o Martinho"},"rus":{"official":"\u0421\u0435\u043D-\u041C\u0430\u0440\u0442\u0435\u043D","common":"\u0421\u0435\u043D-\u041C\u0430\u0440\u0442\u0435\u043D"},"slk":{"official":"Saint-Martin","common":"Saint-Martin"},"spa":{"official":"Saint Martin","common":"Saint Martin"},"srp":{"official":"Sveti Martin","common":"Sveti Martin"},"swe":{"official":"F\xf6rvaltningsomr\xe5det Saint-Martin","common":"Saint-Martin"},"tur":{"official":"Saint Martin","common":"Saint Martin"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u0645\u0627\u0631\u0679\u0646","common":"\u0633\u06CC\u0646\u0679 \u0645\u0627\u0631\u0679\u0646"},"zho":{"official":"\u5723\u9A6C\u4E01","common":"\u5723\u9A6C\u4E01"}},"latlng":[18.08333333,-63.95],"landlocked":false,"borders":["SXM"],"area":53,"flag":"\uD83C\uDDF2\uD83C\uDDEB","demonyms":{"eng":{"f":"Saint Martin Islander","m":"Saint Martin Islander"},"fra":{"f":"Saint-Martinoise","m":"Saint-Martinois"}}},{"name":{"common":"Morocco","official":"Kingdom of Morocco","native":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u063A\u0631\u0628\u064A\u0629","common":"\u0627\u0644\u0645\u063A\u0631\u0628"},"ber":{"official":"\u2D5C\u2D30\u2D33\u2D4D\u2D37\u2D49\u2D5C \u2D4F \u2D4D\u2D4E\u2D56\u2D54\u2D49\u2D31","common":"\u2D4D\u2D4E\u2D30\u2D56\u2D54\u2D49\u2D31"}}},"tld":[".ma","\u0627\u0644\u0645\u063A\u0631\u0628."],"cca2":"MA","ccn3":"504","cca3":"MAR","cioc":"MAR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MAD":{"name":"Moroccan dirham","symbol":"\u062F.\u0645."}},"idd":{"root":"+2","suffixes":["12"]},"capital":["Rabat"],"altSpellings":["MA","Kingdom of Morocco","Al-Mamlakah al-Ma\u0121ribiyah"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic","ber":"Berber"},"translations":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u063A\u0631\u0628\u064A\u0629","common":"\u0627\u0644\u0645\u063A\u0631\u0628"},"ces":{"official":"Marock\xe9 kr\xe1lovstv\xed","common":"Maroko"},"deu":{"official":"K\xf6nigreich Marokko","common":"Marokko"},"est":{"official":"Maroko Kuningriik","common":"Maroko"},"fin":{"official":"Marokon kuningaskunta","common":"Marokko"},"fra":{"official":"Royaume du Maroc","common":"Maroc"},"hrv":{"official":"Kraljevina Maroko","common":"Maroko"},"hun":{"official":"Marokk\xf3i Kir\xe1lys\xe1g","common":"Marokk\xf3"},"ita":{"official":"Regno del Marocco","common":"Marocco"},"jpn":{"official":"\u30E2\u30ED\u30C3\u30B3\u738B\u56FD","common":"\u30E2\u30ED\u30C3\u30B3"},"kor":{"official":"\uBAA8\uB85C\uCF54 \uC655\uAD6D","common":"\uBAA8\uB85C\uCF54"},"nld":{"official":"Koninkrijk Marokko","common":"Marokko"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0645\u0631\u0627\u06A9\u0634","common":"\u0645\u0631\u0627\u06A9\u0634"},"pol":{"official":"Kr\xf3lestwo Maroka\u0144skie","common":"Maroko"},"por":{"official":"Reino de Marrocos","common":"Marrocos"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u041C\u0430\u0440\u043E\u043A\u043A\u043E","common":"\u041C\u0430\u0440\u043E\u043A\u043A\u043E"},"slk":{"official":"Marock\xe9 knie\u017Eatstvo","common":"Maroko"},"spa":{"official":"Reino de Marruecos","common":"Marruecos"},"srp":{"official":"Kraljevina Maroko","common":"Maroko"},"swe":{"official":"Konungariket Marocko","common":"Marocko"},"tur":{"official":"Fas Krall\u0131\u011F\u0131","common":"Fas"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0645\u0631\u0627\u06A9\u0634","common":"\u0645\u0631\u0627\u06A9\u0634"},"zho":{"official":"\u6469\u6D1B\u54E5\u738B\u56FD","common":"\u6469\u6D1B\u54E5"}},"latlng":[32,-5],"landlocked":false,"borders":["DZA","ESH","ESP"],"area":446550,"flag":"\uD83C\uDDF2\uD83C\uDDE6","demonyms":{"eng":{"f":"Moroccan","m":"Moroccan"},"fra":{"f":"Marocaine","m":"Marocain"}}},{"name":{"common":"Monaco","official":"Principality of Monaco","native":{"fra":{"official":"Principaut\xe9 de Monaco","common":"Monaco"}}},"tld":[".mc"],"cca2":"MC","ccn3":"492","cca3":"MCO","cioc":"MON","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["77"]},"capital":["Monaco"],"altSpellings":["MC","Principality of Monaco","Principaut\xe9 de Monaco"],"region":"Europe","subregion":"Western Europe","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0625\u0645\u0627\u0631\u0629 \u0645\u0648\u0646\u0627\u0643\u0648","common":"\u0645\u0648\u0646\u0627\u0643\u0648"},"ces":{"official":"Monack\xe9 kn\xed\u017Eectv\xed","common":"Monako"},"deu":{"official":"F\xfcrstentum Monaco","common":"Monaco"},"est":{"official":"Monaco V\xfcrstiriik","common":"Monaco"},"fin":{"official":"Monacon ruhtinaskunta","common":"Monaco"},"fra":{"official":"Principaut\xe9 de Monaco","common":"Monaco"},"hrv":{"official":"Kne\u017Eevina Monako","common":"Monako"},"hun":{"official":"Monac\xf3i Hercegs\xe9g","common":"Monaco"},"ita":{"official":"Principato di Monaco","common":"Principato di Monaco"},"jpn":{"official":"\u30E2\u30CA\u30B3\u516C\u56FD","common":"\u30E2\u30CA\u30B3"},"kor":{"official":"\uBAA8\uB098\uCF54 \uACF5\uAD6D","common":"\uBAA8\uB098\uCF54"},"nld":{"official":"Vorstendom Monaco","common":"Monaco"},"per":{"official":"\u0634\u0627\u0647\u0632\u0627\u062F\u0647\u200C\u0646\u0634\u06CC\u0646 \u0645\u0648\u0646\u0627\u06A9\u0648","common":"\u0645\u0648\u0646\u0627\u06A9\u0648"},"pol":{"official":"Ksi\u0119stwo Monako","common":"Monako"},"por":{"official":"Principado do M\xf3naco","common":"M\xf3naco"},"rus":{"official":"\u041A\u043D\u044F\u0436\u0435\u0441\u0442\u0432\u043E \u041C\u043E\u043D\u0430\u043A\u043E","common":"\u041C\u043E\u043D\u0430\u043A\u043E"},"slk":{"official":"Monack\xe9 knie\u017Eatstvo","common":"Monako"},"spa":{"official":"Principado de M\xf3naco","common":"M\xf3naco"},"srp":{"official":"Kne\u017Eevina Monako","common":"Monako"},"swe":{"official":"Furstend\xf6met Monaco","common":"Monaco"},"tur":{"official":"Monako Prensli\u011Fi","common":"Monako"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0646\u0627\u06A9\u0648","common":"\u0645\u0648\u0646\u0627\u06A9\u0648"},"zho":{"official":"\u6469\u7EB3\u54E5\u516C\u56FD","common":"\u6469\u7EB3\u54E5"}},"latlng":[43.73333333,7.4],"landlocked":false,"borders":["FRA"],"area":2.02,"flag":"\uD83C\uDDF2\uD83C\uDDE8","demonyms":{"eng":{"f":"Monegasque","m":"Monegasque"},"fra":{"f":"Mon\xe9gasque","m":"Mon\xe9gasque"}}},{"name":{"common":"Moldova","official":"Republic of Moldova","native":{"ron":{"official":"Republica Moldova","common":"Moldova"}}},"tld":[".md"],"cca2":"MD","ccn3":"498","cca3":"MDA","cioc":"MDA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"MDL":{"name":"Moldovan leu","symbol":"L"}},"idd":{"root":"+3","suffixes":["73"]},"capital":["Chi\u0219in\u0103u"],"altSpellings":["MD","Moldova, Republic of","Republic of Moldova","Republica Moldova"],"region":"Europe","subregion":"Eastern Europe","languages":{"ron":"Moldavian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0648\u0644\u062F\u0648\u06A4\u0627","common":"\u0645\u0648\u0644\u062F\u0648\u06A4\u0627"},"ces":{"official":"Moldavsk\xe1 republika","common":"Moldavsko"},"deu":{"official":"Republik Moldau","common":"Moldawien"},"est":{"official":"Moldova Vabariik","common":"Moldova"},"fin":{"official":"Moldovan tasavalta","common":"Moldova"},"fra":{"official":"R\xe9publique de Moldavie","common":"Moldavie"},"hrv":{"official":"Moldavija","common":"Moldova"},"hun":{"official":"Moldovai K\xf6zt\xe1rsas\xe1g","common":"Moldova"},"ita":{"official":"Repubblica di Moldova","common":"Moldavia"},"jpn":{"official":"\u30E2\u30EB\u30C9\u30D0\u5171\u548C\u56FD","common":"\u30E2\u30EB\u30C9\u30D0"},"kor":{"official":"\uBAB0\uB3C4\uBC14 \uACF5\uD654\uAD6D","common":"\uBAB0\uB3C4\uBC14"},"nld":{"official":"Republiek Moldavi\xeb","common":"Moldavi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0648\u0644\u062F\u0627\u0648\u06CC","common":"\u0645\u0648\u0644\u062F\u0627\u0648\u06CC"},"pol":{"official":"Republika Mo\u0142dawii","common":"Mo\u0142dawia"},"por":{"official":"Rep\xfablica da Mold\xe1via","common":"Mold\xe1via"},"rus":{"official":"\u041C\u043E\u043B\u0434\u043E\u0432\u0430","common":"\u041C\u043E\u043B\u0434\u0430\u0432\u0438\u044F"},"slk":{"official":"Moldavsk\xe1 republika","common":"Moldavsko"},"spa":{"official":"Rep\xfablica de Moldova","common":"Moldavia"},"srp":{"official":"Republika Moldavija","common":"Moldavija"},"swe":{"official":"Republiken Moldavien","common":"Moldavien"},"tur":{"official":"Moldova Cumhuriyeti","common":"Moldova"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0627\u0644\u062F\u0648\u0648\u0627","common":"\u0645\u0627\u0644\u062F\u0648\u0648\u0627"},"zho":{"official":"\u6469\u5C14\u591A\u74E6\u5171\u548C\u56FD","common":"\u6469\u5C14\u591A\u74E6"}},"latlng":[47,29],"landlocked":true,"borders":["ROU","UKR"],"area":33846,"flag":"\uD83C\uDDF2\uD83C\uDDE9","demonyms":{"eng":{"f":"Moldovan","m":"Moldovan"},"fra":{"f":"Moldave","m":"Moldave"}}},{"name":{"common":"Madagascar","official":"Republic of Madagascar","native":{"fra":{"official":"R\xe9publique de Madagascar","common":"Madagascar"},"mlg":{"official":"Repoblikan\'i Madagasikara","common":"Madagasikara"}}},"tld":[".mg"],"cca2":"MG","ccn3":"450","cca3":"MDG","cioc":"MAD","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MGA":{"name":"Malagasy ariary","symbol":"Ar"}},"idd":{"root":"+2","suffixes":["61"]},"capital":["Antananarivo"],"altSpellings":["MG","Republic of Madagascar","Repoblikan\'i Madagasikara","R\xe9publique de Madagascar"],"region":"Africa","subregion":"Eastern Africa","languages":{"fra":"French","mlg":"Malagasy"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u062F\u063A\u0634\u0642\u0631","common":"\u0645\u062F\u063A\u0634\u0642\u0631"},"ces":{"official":"Madagaskarsk\xe1 republika","common":"Madagaskar"},"deu":{"official":"Republik Madagaskar","common":"Madagaskar"},"est":{"official":"Madagaskari Vabariik","common":"Madagaskar"},"fin":{"official":"Madagaskarin tasavalta","common":"Madagaskar"},"fra":{"official":"R\xe9publique de Madagascar","common":"Madagascar"},"hrv":{"official":"Republika Madagaskar","common":"Madagaskar"},"hun":{"official":"Madagaszk\xe1ri K\xf6zt\xe1rsas\xe1g","common":"Madagaszk\xe1r"},"ita":{"official":"Repubblica del Madagascar","common":"Madagascar"},"jpn":{"official":"\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB\u5171\u548C\u56FD","common":"\u30DE\u30C0\u30AC\u30B9\u30AB\u30EB"},"kor":{"official":"\uB9C8\uB2E4\uAC00\uC2A4\uCE74\uB974 \uACF5\uD654\uAD6D","common":"\uB9C8\uB2E4\uAC00\uC2A4\uCE74\uB974"},"nld":{"official":"Republiek Madagaskar","common":"Madagaskar"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0627\u062F\u0627\u06AF\u0627\u0633\u06A9\u0627\u0631","common":"\u0645\u0627\u062F\u0627\u06AF\u0627\u0633\u06A9\u0627\u0631"},"pol":{"official":"Republika Madagaskaru","common":"Madagaskar"},"por":{"official":"Rep\xfablica de Madag\xe1scar","common":"Madag\xe1scar"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440","common":"\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440"},"slk":{"official":"Madagaskarsk\xe1 republika","common":"Madagaskar"},"spa":{"official":"Rep\xfablica de Madagascar","common":"Madagascar"},"srp":{"official":"Republika Madagaskar","common":"Madagaskar"},"swe":{"official":"Republiken Madagaskar","common":"Madagaskar"},"tur":{"official":"Madagaskar Cumhuriyeti","common":"Madagaskar"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0688\u063A\u0627\u0633\u06A9\u0631","common":"\u0645\u0688\u063A\u0627\u0633\u06A9\u0631"},"zho":{"official":"\u9A6C\u8FBE\u52A0\u65AF\u52A0\u5171\u548C\u56FD","common":"\u9A6C\u8FBE\u52A0\u65AF\u52A0"}},"latlng":[-20,47],"landlocked":false,"borders":[],"area":587041,"flag":"\uD83C\uDDF2\uD83C\uDDEC","demonyms":{"eng":{"f":"Malagasy","m":"Malagasy"},"fra":{"f":"Malgache","m":"Malgache"}}},{"name":{"common":"Maldives","official":"Republic of the Maldives","native":{"div":{"official":"\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0783\u07A7\u0787\u07B0\u0796\u07AD\u078E\u07AC \u0796\u07AA\u0789\u07B0\u0780\u07AB\u0783\u07A8\u0787\u07B0\u0794\u07A7","common":"\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0783\u07A7\u0787\u07B0\u0796\u07AD\u078E\u07AC"}}},"tld":[".mv"],"cca2":"MV","ccn3":"462","cca3":"MDV","cioc":"MDV","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"MVR":{"name":"Maldivian rufiyaa","symbol":".\u0783"}},"idd":{"root":"+9","suffixes":["60"]},"capital":["Mal\xe9"],"altSpellings":["MV","Maldive Islands","Republic of the Maldives","Dhivehi Raajjeyge Jumhooriyya"],"region":"Asia","subregion":"Southern Asia","languages":{"div":"Maldivian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0645\u0627\u0644\u062F\u064A\u0641","common":"\u0627\u0644\u0645\u0627\u0644\u062F\u064A\u0641"},"ces":{"official":"Maledivsk\xe1 republika","common":"Maledivy"},"deu":{"official":"Republik Malediven","common":"Malediven"},"est":{"official":"Maldiivi Vabariik","common":"Maldiivid"},"fin":{"official":"Malediivien tasavalta","common":"Malediivit"},"fra":{"official":"R\xe9publique des Maldives","common":"Maldives"},"hrv":{"official":"Republika Maldivi","common":"Maldivi"},"hun":{"official":"Mald\xedv-szigetek","common":"Mald\xedv-szigetek"},"ita":{"official":"Repubblica delle Maldive","common":"Maldive"},"jpn":{"official":"\u30E2\u30EB\u30C7\u30A3\u30D6\u5171\u548C\u56FD","common":"\u30E2\u30EB\u30C7\u30A3\u30D6"},"kor":{"official":"\uBAB0\uB514\uBE0C \uACF5\uD654\uAD6D","common":"\uBAB0\uB514\uBE0C"},"nld":{"official":"Republiek van de Malediven","common":"Maldiven"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0627\u0644\u062F\u06CC\u0648","common":"\u0645\u0627\u0644\u062F\u06CC\u0648"},"pol":{"official":"Republika Malediw\xf3w","common":"Malediwy"},"por":{"official":"Rep\xfablica das Maldivas","common":"Maldivas"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B","common":"\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B"},"slk":{"official":"Maldivsk\xe1 republika","common":"Maldivy"},"spa":{"official":"Rep\xfablica de las Maldivas","common":"Maldivas"},"srp":{"official":"Republika Maldivi","common":"Maldivi"},"swe":{"official":"Republiken Maldiverna","common":"Maldiverna"},"tur":{"official":"Maldivler Cumhuriyeti","common":"Maldivler"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0627\u0644\u062F\u06CC\u067E","common":"\u0645\u0627\u0644\u062F\u06CC\u067E"},"zho":{"official":"\u9A6C\u5C14\u4EE3\u592B\u5171\u548C\u56FD","common":"\u9A6C\u5C14\u4EE3\u592B"}},"latlng":[3.25,73],"landlocked":false,"borders":[],"area":300,"flag":"\uD83C\uDDF2\uD83C\uDDFB","demonyms":{"eng":{"f":"Maldivan","m":"Maldivan"},"fra":{"f":"Maldivienne","m":"Maldivien"}}},{"name":{"common":"Mexico","official":"United Mexican States","native":{"spa":{"official":"Estados Unidos Mexicanos","common":"M\xe9xico"}}},"tld":[".mx"],"cca2":"MX","ccn3":"484","cca3":"MEX","cioc":"MEX","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"MXN":{"name":"Mexican peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["2"]},"capital":["Mexico City"],"altSpellings":["MX","Mexicanos","United Mexican States","Estados Unidos Mexicanos"],"region":"Americas","subregion":"North America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0645\u0643\u0633\u064A\u0643\u064A\u0629","common":"\u0627\u0644\u0645\u0633\u0643\u064A\u0643"},"ces":{"official":"Spojen\xe9 st\xe1ty mexick\xe9","common":"Mexiko"},"deu":{"official":"Vereinigte Mexikanische Staaten","common":"Mexiko"},"est":{"official":"Mehhiko \xdchendriigid","common":"Mehhiko"},"fin":{"official":"Meksikon yhdysvallat","common":"Meksiko"},"fra":{"official":"\xc9tats-Unis du Mexique","common":"Mexique"},"hrv":{"official":"Sjedinjene Meksi\u010Dke Dr\u017Eave","common":"Meksiko"},"hun":{"official":"Mexik\xf3i Egyes\xfclt \xc1llamok","common":"Mexik\xf3"},"ita":{"official":"Stati Uniti del Messico","common":"Messico"},"jpn":{"official":"\u30E1\u30AD\u30B7\u30B3\u5408\u8846\u56FD","common":"\u30E1\u30AD\u30B7\u30B3"},"kor":{"official":"\uBA55\uC2DC\uCF54 \uD569\uC911\uAD6D","common":"\uBA55\uC2DC\uCF54"},"nld":{"official":"Verenigde Mexicaanse Staten","common":"Mexico"},"per":{"official":"\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F \u0645\u06A9\u0632\u06CC\u06A9","common":"\u0645\u06A9\u0632\u06CC\u06A9"},"pol":{"official":"Meksyka\u0144skie Stany Zjednoczone","common":"Meksyk"},"por":{"official":"Estados Unidos Mexicanos","common":"M\xe9xico"},"rus":{"official":"\u041C\u0435\u043A\u0441\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0435 \u0421\u043E\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B","common":"\u041C\u0435\u043A\u0441\u0438\u043A\u0430"},"slk":{"official":"Spojen\xe9 \u0161t\xe1\u0161y mexick\xe9","common":"Mexiko"},"spa":{"official":"Estados Unidos Mexicanos","common":"M\xe9xico"},"srp":{"official":"Sjedinjene Meksi\u010Dke Dr\u017Eave","common":"Meksiko"},"swe":{"official":"Mexikos f\xf6renta stater","common":"Mexiko"},"tur":{"official":"Birle\u015Fik Meksika Devletleri","common":"Meksika"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u06C1\u0627\u0626\u06D2 \u0645\u062A\u062D\u062F\u06C1 \u0645\u06CC\u06A9\u0633\u06CC\u06A9\u0648","common":"\u0645\u06CC\u06A9\u0633\u06CC\u06A9\u0648"},"zho":{"official":"\u58A8\u897F\u54E5\u5408\u4F17\u56FD","common":"\u58A8\u897F\u54E5"}},"latlng":[23,-102],"landlocked":false,"borders":["BLZ","GTM","USA"],"area":1964375,"flag":"\uD83C\uDDF2\uD83C\uDDFD","demonyms":{"eng":{"f":"Mexican","m":"Mexican"},"fra":{"f":"Mexicaine","m":"Mexicain"}}},{"name":{"common":"Marshall Islands","official":"Republic of the Marshall Islands","native":{"eng":{"official":"Republic of the Marshall Islands","common":"Marshall Islands"},"mah":{"official":"Republic of the Marshall Islands","common":"M\u0327aje\u013C"}}},"tld":[".mh"],"cca2":"MH","ccn3":"584","cca3":"MHL","cioc":"MHL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["92"]},"capital":["Majuro"],"altSpellings":["MH","Republic of the Marshall Islands","Aolep\u0101n Aor\u014Dkin M\u0327aje\u013C"],"region":"Oceania","subregion":"Micronesia","languages":{"eng":"English","mah":"Marshallese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u0632\u0631 \u0645\u0627\u0631\u0634\u0627\u0644","common":"\u062C\u0632\u0631 \u0645\u0627\u0631\u0634\u0627\u0644"},"ces":{"official":"Republika Marshallovy ostrovy","common":"Marshallovy ostrovy"},"deu":{"official":"Republik Marshallinseln","common":"Marshallinseln"},"est":{"official":"Marshalli Saarte Vabariik","common":"Marshalli Saared"},"fin":{"official":"Marshallinsaarten tasavalta","common":"Marshallinsaaret"},"fra":{"official":"R\xe9publique des \xceles Marshall","common":"\xceles Marshall"},"hrv":{"official":"Republika Mar\u0161alovi Otoci","common":"Mar\u0161alovi Otoci"},"hun":{"official":"Marshall-szigetek","common":"Marshall-szigetek"},"ita":{"official":"Repubblica delle Isole Marshall","common":"Isole Marshall"},"jpn":{"official":"\u30DE\u30FC\u30B7\u30E3\u30EB\u8AF8\u5CF6\u5171\u548C\u56FD","common":"\u30DE\u30FC\u30B7\u30E3\u30EB\u8AF8\u5CF6"},"kor":{"official":"\uB9C8\uC15C \uC81C\uB3C4 \uACF5\uD654\uAD6D","common":"\uB9C8\uC15C \uC81C\uB3C4"},"nld":{"official":"Republiek van de Marshall-eilanden","common":"Marshalleilanden"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062C\u0632\u0627\u06CC\u0631 \u0645\u0627\u0631\u0634\u0627\u0644","common":"\u062C\u0632\u0627\u06CC\u0631 \u0645\u0627\u0631\u0634\u0627\u0644"},"pol":{"official":"Republika Wysp Marshalla","common":"Wyspy Marshalla"},"por":{"official":"Rep\xfablica das Ilhas Marshall","common":"Ilhas Marshall"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u0440\u0448\u0430\u043B\u043B\u043E\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u041C\u0430\u0440\u0448\u0430\u043B\u043B\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Republika Marshallov\xfdch ostrovov","common":"Marshallove ostrovy"},"spa":{"official":"Rep\xfablica de las Islas Marshall","common":"Islas Marshall"},"srp":{"official":"Republika Mar\u0161alska Ostrva","common":"Mar\u0161alska Ostrva"},"swe":{"official":"Republiken Marshall\xf6arna","common":"Marshall\xf6arna"},"tur":{"official":"Marshall Adalar\u0131 Cumhuriyeti","common":"Marshall Adalar\u0131"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0632\u0627\u0626\u0631 \u0645\u0627\u0631\u0634\u0644","common":"\u062C\u0632\u0627\u0626\u0631 \u0645\u0627\u0631\u0634\u0644"},"zho":{"official":"\u9A6C\u7ECD\u5C14\u7FA4\u5C9B\u5171\u548C\u56FD","common":"\u9A6C\u7ECD\u5C14\u7FA4\u5C9B"}},"latlng":[9,168],"landlocked":false,"borders":[],"area":181,"flag":"\uD83C\uDDF2\uD83C\uDDED","demonyms":{"eng":{"f":"Marshallese","m":"Marshallese"},"fra":{"f":"Marshallaise","m":"Marshallais"}}},{"name":{"common":"North Macedonia","official":"Republic of North Macedonia","native":{"mkd":{"official":"\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430","common":"\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430"}}},"tld":[".mk"],"cca2":"MK","ccn3":"807","cca3":"MKD","cioc":"MKD","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"MKD":{"name":"denar","symbol":"den"}},"idd":{"root":"+3","suffixes":["89"]},"capital":["Skopje"],"altSpellings":["MK","The former Yugoslav Republic of Macedonia","Republic of North Macedonia","Macedonia, The Former Yugoslav Republic of","\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430","Macedonia"],"region":"Europe","subregion":"Southeast Europe","languages":{"mkd":"Macedonian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0634\u0645\u0627\u0644 \u0645\u0642\u062F\u0648\u0646\u064A\u0627","common":"\u0634\u0645\u0627\u0644 \u0645\u0642\u062F\u0648\u0646\u064A\u0627"},"ces":{"official":"Republika Severn\xed Makedonie","common":"Severn\xed Makedonie"},"deu":{"official":"Republik Nordmazedonien","common":"Nordmazedonien"},"est":{"official":"P\xf5hja-Makedoonia Vabariik","common":"P\xf5hja-Makedoonia"},"fin":{"official":"Pohjois-Makedonian tasavalta","common":"Pohjois-Makedonia"},"fra":{"official":"R\xe9publique de Mac\xe9doine du Nord","common":"Mac\xe9doine du Nord"},"hrv":{"official":"Republika Sjeverna Makedonija","common":"Sjeverna Makedonija"},"hun":{"official":"\xc9szak-maced\xf3n K\xf6zt\xe1rsas\xe1g","common":"\xc9szak-Maced\xf3nia"},"ita":{"official":"Repubblica di Macedonia del Nord","common":"Macedonia del Nord"},"jpn":{"official":"\u5317\u30DE\u30B1\u30C9\u30CB\u30A2\u5171\u548C\u56FD","common":"\u5317\u30DE\u30B1\u30C9\u30CB\u30A2"},"kor":{"official":"\uBD81\uB9C8\uCF00\uB3C4\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uBD81\uB9C8\uCF00\uB3C4\uB2C8\uC544"},"nld":{"official":"Republiek Noord-Macedoni\xeb","common":"Noord-Macedoni\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0642\u062F\u0648\u0646\u06CC\u0647 \u0634\u0645\u0627\u0644\u06CC","common":"\u0645\u0642\u062F\u0648\u0646\u06CC\u0647 \u0634\u0645\u0627\u0644\u06CC"},"pol":{"official":"Republika Macedonii P\xf3\u0142nocnej","common":"Macedonia P\xf3\u0142nocna"},"por":{"official":"Rep\xfablica da Maced\xf4nia do Norte","common":"Maced\xf3nia do Norte"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F","common":"\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F"},"slk":{"official":"Severomaced\xf3nska republika","common":"Severn\xe9 Maced\xf3nsko"},"spa":{"official":"Rep\xfablica de Macedonia del Norte","common":"Macedonia del Norte"},"srp":{"official":"Republika Severna Makedonija","common":"Severna Makedonija"},"swe":{"official":"Republiken Nordmakedonien","common":"Nordmakedonien"},"tur":{"official":"Kuzey Makedonya Cumhuriyeti","common":"Kuzey Makedonya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0642\u062F\u0648\u0646\u06CC\u06C1","common":"\u0634\u0645\u0627\u0644\u06CC \u0645\u0642\u062F\u0648\u0646\u06CC\u06C1"},"zho":{"official":"\u5317\u99AC\u5176\u9813\u5171\u548C\u570B","common":"\u5317\u99AC\u5176\u9813"}},"latlng":[41.83333333,22],"landlocked":true,"borders":["ALB","BGR","GRC","UNK","SRB"],"area":25713,"flag":"\uD83C\uDDF2\uD83C\uDDF0","demonyms":{"eng":{"f":"Macedonian","m":"Macedonian"},"fra":{"f":"Mac\xe9donienne","m":"Mac\xe9donien"}}},{"name":{"common":"Mali","official":"Republic of Mali","native":{"fra":{"official":"R\xe9publique du Mali","common":"Mali"}}},"tld":[".ml"],"cca2":"ML","ccn3":"466","cca3":"MLI","cioc":"MLI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["23"]},"capital":["Bamako"],"altSpellings":["ML","Republic of Mali","R\xe9publique du Mali"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0627\u0644\u064A","common":"\u0645\u0627\u0644\u064A"},"ces":{"official":"Republika Mali","common":"Mali"},"deu":{"official":"Republik Mali","common":"Mali"},"est":{"official":"Mali Vabariik","common":"Mali"},"fin":{"official":"Malin tasavalta","common":"Mali"},"fra":{"official":"R\xe9publique du Mali","common":"Mali"},"hrv":{"official":"Republika Mali","common":"Mali"},"hun":{"official":"Mali K\xf6zt\xe1rsas\xe1g","common":"Mali"},"ita":{"official":"Repubblica del Mali","common":"Mali"},"jpn":{"official":"\u30DE\u30EA\u5171\u548C\u56FD","common":"\u30DE\u30EA"},"kor":{"official":"\uB9D0\uB9AC \uACF5\uD654\uAD6D","common":"\uB9D0\uB9AC"},"nld":{"official":"Republiek Mali","common":"Mali"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0627\u0644\u06CC","common":"\u0645\u0627\u0644\u06CC"},"pol":{"official":"Republika Mali","common":"Mali"},"por":{"official":"Rep\xfablica do Mali","common":"Mali"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u043B\u0438","common":"\u041C\u0430\u043B\u0438"},"slk":{"official":"Malijsk\xe1 republika","common":"Mali"},"spa":{"official":"Rep\xfablica de Mal\xed","common":"Mali"},"srp":{"official":"Republika Mali","common":"Mali"},"swe":{"official":"Republiken Mali","common":"Mali"},"tur":{"official":"Mali Cumhuriyeti","common":"Mali"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0627\u0644\u06CC","common":"\u0645\u0627\u0644\u06CC"},"zho":{"official":"\u9A6C\u91CC\u5171\u548C\u56FD","common":"\u9A6C\u91CC"}},"latlng":[17,-4],"landlocked":true,"borders":["DZA","BFA","GIN","CIV","MRT","NER","SEN"],"area":1240192,"flag":"\uD83C\uDDF2\uD83C\uDDF1","demonyms":{"eng":{"f":"Malian","m":"Malian"},"fra":{"f":"Malienne","m":"Malien"}}},{"name":{"common":"Malta","official":"Republic of Malta","native":{"eng":{"official":"Republic of Malta","common":"Malta"},"mlt":{"official":"Repubblika ta \' Malta","common":"Malta"}}},"tld":[".mt"],"cca2":"MT","ccn3":"470","cca3":"MLT","cioc":"MLT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["56"]},"capital":["Valletta"],"altSpellings":["MT","Republic of Malta","Repubblika ta\' Malta"],"region":"Europe","subregion":"Southern Europe","languages":{"eng":"English","mlt":"Maltese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0627\u0644\u0637\u0627","common":"\u0645\u0627\u0644\u0637\u0627"},"ces":{"official":"Maltsk\xe1 republika","common":"Malta"},"deu":{"official":"Republik Malta","common":"Malta"},"est":{"official":"Malta Vabariik","common":"Malta"},"fin":{"official":"Maltan tasavalta","common":"Malta"},"fra":{"official":"R\xe9publique de Malte","common":"Malte"},"hrv":{"official":"Republika Malta","common":"Malta"},"hun":{"official":"M\xe1ltai K\xf6zt\xe1rsas\xe1g","common":"M\xe1lta"},"ita":{"official":"Repubblica di Malta","common":"Malta"},"jpn":{"official":"\u30DE\u30EB\u30BF\u5171\u548C\u56FD","common":"\u30DE\u30EB\u30BF"},"kor":{"official":"\uBAB0\uD0C0 \uACF5\uD654\uAD6D","common":"\uBAB0\uD0C0"},"nld":{"official":"Republiek Malta","common":"Malta"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0627\u0644\u062A","common":"\u0645\u0627\u0644\u062A"},"pol":{"official":"Republika Malty","common":"Malta"},"por":{"official":"Rep\xfablica de Malta","common":"Malta"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u043B\u044C\u0442\u0430","common":"\u041C\u0430\u043B\u044C\u0442\u0430"},"slk":{"official":"Maltsk\xe1 republika","common":"Malta"},"spa":{"official":"Rep\xfablica de Malta","common":"Malta"},"srp":{"official":"Republika Malta","common":"Malta"},"swe":{"official":"Republiken Malta","common":"Malta"},"tur":{"official":"Malta Cumhuriyeti","common":"Malta"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0627\u0644\u0679\u0627","common":"\u0645\u0627\u0644\u0679\u0627"},"zho":{"official":"\u9A6C\u8033\u4ED6\u5171\u548C\u56FD","common":"\u9A6C\u8033\u4ED6"}},"latlng":[35.83333333,14.58333333],"landlocked":false,"borders":[],"area":316,"flag":"\uD83C\uDDF2\uD83C\uDDF9","demonyms":{"eng":{"f":"Maltese","m":"Maltese"},"fra":{"f":"Maltaise","m":"Maltais"}}},{"name":{"common":"Myanmar","official":"Republic of the Union of Myanmar","native":{"mya":{"official":"\u1015\u103C\u100A\u103A\u1011\u1031\u102C\u1004\u103A\u1005\u102F \u101E\u1019\u1039\u1019\u1010 \u1019\u103C\u1014\u103A\u1019\u102C\u1014\u102D\u102F\u1004\u103A\u1004\u1036\u1010\u1031\u102C\u103A","common":"\u1019\u103C\u1014\u103A\u1019\u102C"}}},"tld":[".mm"],"cca2":"MM","ccn3":"104","cca3":"MMR","cioc":"MYA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"MMK":{"name":"Burmese kyat","symbol":"Ks"}},"idd":{"root":"+9","suffixes":["5"]},"capital":["Naypyidaw"],"altSpellings":["MM","Burma","Republic of the Union of Myanmar","Pyidaunzu Thanm\u0103da My\u0103ma Nainngandaw"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"mya":"Burmese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u062A\u062D\u0627\u062F \u0645\u064A\u0627\u0646\u0645\u0627\u0631","common":"\u0645\u064A\u0627\u0646\u0645\u0627\u0631"},"ces":{"official":"Republika Myanmarsk\xfd svaz","common":"Myanmar"},"deu":{"official":"Republik der Union Myanmar","common":"Myanmar"},"est":{"official":"Myanmari Liidu Vabariik","common":"Myanmar"},"fin":{"official":"Myanmarin liiton tasavalta","common":"Myanmar"},"fra":{"official":"R\xe9publique de l\'Union du Myanmar","common":"Birmanie"},"hrv":{"official":"Republika Unije Mijanmar","common":"Mijanmar"},"hun":{"official":"Mianmari \xc1llamsz\xf6vets\xe9g K\xf6zt\xe1rsas\xe1ga","common":"Mianmar"},"ita":{"official":"Repubblica dell\'Unione di Myanmar","common":"Birmania"},"jpn":{"official":"\u30DF\u30E3\u30F3\u30DE\u30FC\u9023\u90A6\u5171\u548C\u56FD","common":"\u30DF\u30E3\u30F3\u30DE\u30FC"},"kor":{"official":"\uBBF8\uC580\uB9C8 \uC5F0\uBC29 \uACF5\uD654\uAD6D","common":"\uBBF8\uC580\uB9C8"},"nld":{"official":"Republiek van de Unie van Myanmar","common":"Myanmar"},"per":{"official":"\u0627\u062A\u062D\u0627\u062F\u06CC\u0647 \u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u06CC\u0627\u0646\u0645\u0627\u0631","common":"\u0645\u06CC\u0627\u0646\u0645\u0627\u0631"},"pol":{"official":"Republika Zwi\u0105zku Mjanmy","common":"Mjanma"},"por":{"official":"Rep\xfablica da Uni\xe3o de Myanmar","common":"Myanmar"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u043E\u044E\u0437\u0430 \u041C\u044C\u044F\u043D\u043C\u0430","common":"\u041C\u044C\u044F\u043D\u043C\u0430"},"slk":{"official":"Mjanmarsk\xe1 zv\xe4zov\xe1 republika","common":"Mjanmarsko"},"spa":{"official":"Rep\xfablica de la Uni\xf3n de Myanmar","common":"Myanmar"},"srp":{"official":"Republika Mjanmarska Unija","common":"Mjanmar"},"swe":{"official":"Republiken Unionen Myanmar","common":"Myanmar"},"tur":{"official":"Myanmar Birli\u011Fi Cumhuriyeti","common":"Myanmar"},"urd":{"official":"\u0645\u062A\u062D\u062F\u06C1 \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u06CC\u0627\u0646\u0645\u0627\u0631","common":"\u0645\u06CC\u0627\u0646\u0645\u0627\u0631"},"zho":{"official":"\u7F05\u7538\u8054\u90A6\u5171\u548C\u56FD","common":"\u7F05\u7538"}},"latlng":[22,98],"landlocked":false,"borders":["BGD","CHN","IND","LAO","THA"],"area":676578,"flag":"\uD83C\uDDF2\uD83C\uDDF2","demonyms":{"eng":{"f":"Burmese","m":"Burmese"},"fra":{"f":"Birmane","m":"Birman"}}},{"name":{"common":"Montenegro","official":"Montenegro","native":{"cnr":{"official":"\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430","common":"\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430"}}},"tld":[".me"],"cca2":"ME","ccn3":"499","cca3":"MNE","cioc":"MNE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["82"]},"capital":["Podgorica"],"altSpellings":["ME","Crna Gora"],"region":"Europe","subregion":"Southeast Europe","languages":{"cnr":"Montenegrin"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0628\u0644 \u0627\u0644\u0627\u0633\u0648\u062F","common":"\u0627\u0644\u062C\u0628\u0644 \u0627\u0644\u0627\u0633\u0648\u062F"},"ces":{"official":"\u010Cern\xe1 Hora","common":"\u010Cern\xe1 Hora"},"deu":{"official":"Montenegro","common":"Montenegro"},"est":{"official":"Montenegro","common":"Montenegro"},"fin":{"official":"Montenegro","common":"Montenegro"},"fra":{"official":"Mont\xe9n\xe9gro","common":"Mont\xe9n\xe9gro"},"hrv":{"official":"Crna Gora","common":"Crna Gora"},"hun":{"official":"Montenegr\xf3","common":"Montenegr\xf3"},"ita":{"official":"Montenegro","common":"Montenegro"},"jpn":{"official":"\u30E2\u30F3\u30C6\u30CD\u30B0\u30ED","common":"\u30E2\u30F3\u30C6\u30CD\u30B0\u30ED"},"kor":{"official":"\uBAAC\uD14C\uB124\uADF8\uB85C","common":"\uBAAC\uD14C\uB124\uADF8\uB85C"},"nld":{"official":"Montenegro","common":"Montenegro"},"per":{"official":"\u0645\u0648\u0646\u062A\u0647\u200C\u0646\u06AF\u0631\u0648","common":"\u0645\u0648\u0646\u062A\u0647\u200C\u0646\u06AF\u0631\u0648"},"pol":{"official":"Czarnog\xf3ra","common":"Czarnog\xf3ra"},"por":{"official":"Montenegro","common":"Montenegro"},"rus":{"official":"\u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F","common":"\u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F"},"slk":{"official":"\u010Cierna Hora","common":"\u010Cierna Hora"},"spa":{"official":"Montenegro","common":"Montenegro"},"srp":{"official":"Crna Gora","common":"Crna Gora"},"swe":{"official":"Montenegro","common":"Montenegro"},"tur":{"official":"Karada\u011F","common":"Karada\u011F"},"urd":{"official":"\u0645\u0648\u0646\u0679\u06CC\u0646\u06CC\u06AF\u0631\u0648","common":"\u0645\u0648\u0646\u0679\u06CC\u0646\u06CC\u06AF\u0631\u0648"},"zho":{"official":"\u9ED1\u5C71","common":"\u9ED1\u5C71"}},"latlng":[42.5,19.3],"landlocked":false,"borders":["ALB","BIH","HRV","UNK","SRB"],"area":13812,"flag":"\uD83C\uDDF2\uD83C\uDDEA","demonyms":{"eng":{"f":"Montenegrin","m":"Montenegrin"},"fra":{"f":"Mont\xe9n\xe9grine","m":"Mont\xe9n\xe9grin"}}},{"name":{"common":"Mongolia","official":"Mongolia","native":{"mon":{"official":"\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441","common":"\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441"}}},"tld":[".mn"],"cca2":"MN","ccn3":"496","cca3":"MNG","cioc":"MGL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"MNT":{"name":"Mongolian t\xf6gr\xf6g","symbol":"\u20AE"}},"idd":{"root":"+9","suffixes":["76"]},"capital":["Ulan Bator"],"altSpellings":["MN"],"region":"Asia","subregion":"Eastern Asia","languages":{"mon":"Mongolian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0646\u063A\u0648\u0644\u064A\u0627","common":"\u0645\u0646\u063A\u0648\u0644\u064A\u0627"},"ces":{"official":"St\xe1t Mongolsko","common":"Mongolsko"},"deu":{"official":"Mongolei","common":"Mongolei"},"est":{"official":"Mongoolia","common":"Mongoolia"},"fin":{"official":"Mongolian tasavalta","common":"Mongolia"},"fra":{"official":"Mongolie","common":"Mongolie"},"hrv":{"official":"Mongolija","common":"Mongolija"},"hun":{"official":"Mong\xf3lia","common":"Mong\xf3lia"},"ita":{"official":"Mongolia","common":"Mongolia"},"jpn":{"official":"\u30E2\u30F3\u30B4\u30EB\u56FD","common":"\u30E2\u30F3\u30B4\u30EB"},"kor":{"official":"\uBABD\uACE8","common":"\uBABD\uACE8\uAD6D"},"nld":{"official":"Mongoli\xeb","common":"Mongoli\xeb"},"per":{"official":"\u0645\u063A\u0648\u0644\u0633\u062A\u0627\u0646","common":"\u0645\u063A\u0648\u0644\u0633\u062A\u0627\u0646"},"pol":{"official":"Mongolia","common":"Mongolia"},"por":{"official":"Mong\xf3lia","common":"Mong\xf3lia"},"rus":{"official":"\u041C\u043E\u043D\u0433\u043E\u043B\u0438\u044F","common":"\u041C\u043E\u043D\u0433\u043E\u043B\u0438\u044F"},"slk":{"official":"Mongolsko","common":"Mongolsko"},"spa":{"official":"Mongolia","common":"Mongolia"},"srp":{"official":"Mongolija","common":"Mongolija"},"swe":{"official":"Mongoliet","common":"Mongoliet"},"tur":{"official":"Mo\u011Folistan","common":"Mo\u011Folistan"},"urd":{"official":"\u0645\u0646\u06AF\u0648\u0644\u06CC\u0627","common":"\u0645\u0646\u06AF\u0648\u0644\u06CC\u0627"},"zho":{"official":"\u8499\u53E4","common":"\u8499\u53E4"}},"latlng":[46,105],"landlocked":true,"borders":["CHN","RUS"],"area":1564110,"flag":"\uD83C\uDDF2\uD83C\uDDF3","demonyms":{"eng":{"f":"Mongolian","m":"Mongolian"},"fra":{"f":"Mongole","m":"Mongol"}}},{"name":{"common":"Northern Mariana Islands","official":"Commonwealth of the Northern Mariana Islands","native":{"cal":{"official":"Commonwealth of the Northern Mariana Islands","common":"Northern Mariana Islands"},"cha":{"official":"Sankattan Siha Na Islas Mari\xe5nas","common":"Na Islas Mari\xe5nas"},"eng":{"official":"Commonwealth of the Northern Mariana Islands","common":"Northern Mariana Islands"}}},"tld":[".mp"],"cca2":"MP","ccn3":"580","cca3":"MNP","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["670"]},"capital":["Saipan"],"altSpellings":["MP","Commonwealth of the Northern Mariana Islands","Sankattan Siha Na Islas Mari\xe5nas"],"region":"Oceania","subregion":"Micronesia","languages":{"cal":"Carolinian","cha":"Chamorro","eng":"English"},"translations":{"ara":{"official":"\u0643\u0648\u0645\u0648\u0646\u0648\u0644\u062B \u062C\u0632\u0631 \u0645\u0627\u0631\u064A\u0627\u0646\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629","common":"\u062C\u0632\u0631 \u0645\u0627\u0631\u064A\u0627\u0646\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629"},"ces":{"official":"Spole\u010Denstv\xed Severn\xedch Marian","common":"Severn\xed Mariany"},"deu":{"official":"Commonwealth der N\xf6rdlichen Marianen","common":"N\xf6rdliche Marianen"},"est":{"official":"P\xf5hja-Mariaani \xdchendus","common":"P\xf5hja-Mariaanid"},"fin":{"official":"Pohjois-Mariaanit","common":"Pohjois-Mariaanit"},"fra":{"official":"Commonwealth des \xeeles Mariannes du Nord","common":"\xceles Mariannes du Nord"},"hrv":{"official":"Zajednica je Sjeverni Marijanski otoci","common":"Sjevernomarijanski otoci"},"hun":{"official":"\xc9szaki-Mariana-szigetek","common":"\xc9szaki-Mariana-szigetek"},"ita":{"official":"Commonwealth delle Isole Marianne Settentrionali","common":"Isole Marianne Settentrionali"},"jpn":{"official":"\u5317\u30DE\u30EA\u30A2\u30CA\u8AF8\u5CF6","common":"\u5317\u30DE\u30EA\u30A2\u30CA\u8AF8\u5CF6"},"kor":{"official":"\uBD81\uB9C8\uB9AC\uC544\uB098 \uC81C\uB3C4","common":"\uBD81\uB9C8\uB9AC\uC544\uB098 \uC81C\uB3C4"},"nld":{"official":"Commonwealth van de Noordelijke Marianen","common":"Noordelijke Marianeneilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0645\u0627\u0631\u06CC\u0627\u0646\u0627\u06CC \u0634\u0645\u0627\u0644\u06CC","common":"\u062C\u0632\u0627\u06CC\u0631 \u0645\u0627\u0631\u06CC\u0627\u0646\u0627\u06CC \u0634\u0645\u0627\u0644\u06CC"},"pol":{"official":"Wsp\xf3lnota Marian\xf3w P\xf3\u0142nocnych","common":"Mariany P\xf3\u0142nocne"},"por":{"official":"Comunidade das Ilhas Marianas do Norte","common":"Marianas Setentrionais"},"rus":{"official":"\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u041C\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0445 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","common":"\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u041C\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Spolo\u010Denstvo ostrovov Severn\xe9 Mari\xe1ny","common":"Severn\xe9 Mari\xe1ny"},"spa":{"official":"Mancomunidad de las Islas Marianas del Norte","common":"Islas Marianas del Norte"},"srp":{"official":"Komonvelt Severna Marijanska Ostrva","common":"Severna Marijanska Ostrva"},"swe":{"official":"Nordmarianerna","common":"Nordmarianerna"},"tur":{"official":"Kuzey Mariana Adalar\u0131 Milletler Toplulu\u011Fu","common":"Kuzey Mariana Adalar\u0131"},"urd":{"official":"\u062F\u0648\u0644\u062A\u0650 \u0645\u0634\u062A\u0631\u06A9\u06C1 \u062C\u0632\u0627\u0626\u0631 \u0634\u0645\u0627\u0644\u06CC \u0645\u0627\u0631\u06CC\u0627\u0646\u0627","common":"\u062C\u0632\u0627\u0626\u0631 \u0634\u0645\u0627\u0644\u06CC \u0645\u0627\u0631\u06CC\u0627\u0646\u0627"},"zho":{"official":"\u5317\u9A6C\u91CC\u4E9A\u7EB3\u7FA4\u5C9B","common":"\u5317\u9A6C\u91CC\u4E9A\u7EB3\u7FA4\u5C9B"}},"latlng":[15.2,145.75],"landlocked":false,"borders":[],"area":464,"flag":"\uD83C\uDDF2\uD83C\uDDF5","demonyms":{"eng":{"f":"American","m":"American"},"fra":{"f":"Am\xe9ricaine","m":"Am\xe9rican"}}},{"name":{"common":"Mozambique","official":"Republic of Mozambique","native":{"por":{"official":"Rep\xfablica de Mo\xe7ambique","common":"Mo\xe7ambique"}}},"tld":[".mz"],"cca2":"MZ","ccn3":"508","cca3":"MOZ","cioc":"MOZ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MZN":{"name":"Mozambican metical","symbol":"MT"}},"idd":{"root":"+2","suffixes":["58"]},"capital":["Maputo"],"altSpellings":["MZ","Republic of Mozambique","Rep\xfablica de Mo\xe7ambique"],"region":"Africa","subregion":"Eastern Africa","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0648\u0632\u0645\u0628\u064A\u0642","common":"\u0645\u0648\u0632\u0645\u0628\u064A\u0642"},"ces":{"official":"Mosambick\xe1 republika","common":"Mosambik"},"deu":{"official":"Republik Mosambik","common":"Mosambik"},"est":{"official":"Mosambiigi Vabariik","common":"Mosambiik"},"fin":{"official":"Mosambikin tasavalta","common":"Mosambik"},"fra":{"official":"R\xe9publique du Mozambique","common":"Mozambique"},"hrv":{"official":"Republika Mozambiku","common":"Mozambik"},"hun":{"official":"Mozambiki K\xf6zt\xe1rsas\xe1g","common":"Mozambik"},"ita":{"official":"Repubblica del Mozambico","common":"Mozambico"},"jpn":{"official":"\u30E2\u30B6\u30F3\u30D3\u30FC\u30AF\u5171\u548C\u56FD","common":"\u30E2\u30B6\u30F3\u30D3\u30FC\u30AF"},"kor":{"official":"\uBAA8\uC7A0\uBE44\uD06C \uACF5\uD654\uAD6D","common":"\uBAA8\uC7A0\uBE44\uD06C"},"nld":{"official":"Republiek Mozambique","common":"Mozambique"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0648\u0632\u0627\u0645\u0628\u06CC\u06A9","common":"\u0645\u0648\u0632\u0627\u0645\u0628\u06CC\u06A9"},"pol":{"official":"Republika Mozambiku","common":"Mozambik"},"por":{"official":"Rep\xfablica de Mo\xe7ambique","common":"Mo\xe7ambique"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u043E\u0437\u0430\u043C\u0431\u0438\u043A","common":"\u041C\u043E\u0437\u0430\u043C\u0431\u0438\u043A"},"slk":{"official":"Mozambick\xe1 republika","common":"Mozambik"},"spa":{"official":"Rep\xfablica de Mozambique","common":"Mozambique"},"srp":{"official":"Republika Mozambik","common":"Mozambik"},"swe":{"official":"Republiken Mo\xe7ambique","common":"Mo\xe7ambique"},"tur":{"official":"Mozambik Cumhuriyeti","common":"Mozambik"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0648\u0632\u0645\u0628\u06CC\u0642","common":"\u0645\u0648\u0632\u0645\u0628\u06CC\u0642"},"zho":{"official":"\u83AB\u6851\u6BD4\u514B\u5171\u548C\u56FD","common":"\u83AB\u6851\u6BD4\u514B"}},"latlng":[-18.25,35],"landlocked":false,"borders":["MWI","ZAF","SWZ","TZA","ZMB","ZWE"],"area":801590,"flag":"\uD83C\uDDF2\uD83C\uDDFF","demonyms":{"eng":{"f":"Mozambican","m":"Mozambican"},"fra":{"f":"Mozambicaine","m":"Mozambicain"}}},{"name":{"common":"Mauritania","official":"Islamic Republic of Mauritania","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629 \u0627\u0644\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0629","common":"\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627"}}},"tld":[".mr"],"cca2":"MR","ccn3":"478","cca3":"MRT","cioc":"MTN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MRU":{"name":"Mauritanian ouguiya","symbol":"UM"}},"idd":{"root":"+2","suffixes":["22"]},"capital":["Nouakchott"],"altSpellings":["MR","Islamic Republic of Mauritania","al-Jumh\u016Briyyah al-\u02BEIsl\u0101miyyah al-M\u016Br\u012Bt\u0101niyyah"],"region":"Africa","subregion":"Western Africa","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629 \u0627\u0644\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0629","common":"\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627"},"ces":{"official":"Maurit\xe1nsk\xe1 isl\xe1msk\xe1 republika","common":"Maurit\xe1nie"},"deu":{"official":"Islamische Republik Mauretanien","common":"Mauretanien"},"est":{"official":"Mauritaania Islamivabariik","common":"Mauritaania"},"fin":{"official":"Mauritanian islamilainen tasavalta","common":"Mauritania"},"fra":{"official":"R\xe9publique islamique de Mauritanie","common":"Mauritanie"},"hrv":{"official":"Islamska Republika Mauritanija","common":"Mauritanija"},"hun":{"official":"Maurit\xe1niai Iszl\xe1m K\xf6zt\xe1rsas\xe1g","common":"Maurit\xe1nia"},"ita":{"official":"Repubblica islamica di Mauritania","common":"Mauritania"},"jpn":{"official":"\u30E2\u30FC\u30EA\u30BF\u30CB\u30A2\u30FB\u30A4\u30B9\u30E9\u30E0\u5171\u548C\u56FD","common":"\u30E2\u30FC\u30EA\u30BF\u30CB\u30A2"},"kor":{"official":"\uBAA8\uB9AC\uD0C0\uB2C8 \uC774\uC2AC\uB78C \uACF5\uD654\uAD6D","common":"\uBAA8\uB9AC\uD0C0\uB2C8"},"nld":{"official":"Islamitische Republiek Mauritani\xeb","common":"Mauritani\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0645\u0648\u0631\u06CC\u062A\u0627\u0646\u06CC","common":"\u0645\u0648\u0631\u06CC\u062A\u0627\u0646\u06CC"},"pol":{"official":"Islamska Republika Maureta\u0144ska","common":"Mauretania"},"por":{"official":"Rep\xfablica Isl\xe2mica da Maurit\xe2nia","common":"Maurit\xe2nia"},"rus":{"official":"\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u0432\u0440\u0438\u0442\u0430\u043D\u0438\u044F","common":"\u041C\u0430\u0432\u0440\u0438\u0442\u0430\u043D\u0438\u044F"},"slk":{"official":"Maurit\xe1nska islamsk\xe1 republika","common":"Maurit\xe1nia"},"spa":{"official":"Rep\xfablica Isl\xe1mica de Mauritania","common":"Mauritania"},"srp":{"official":"Islamska Republika Mauritanija","common":"Mauritanija"},"swe":{"official":"Islamiska republiken Mauretanien","common":"Mauretanien"},"tur":{"official":"Moritanya \u0130slam Cumhuriyeti","common":"Moritanya"},"urd":{"official":"\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0648\u0631\u06CC\u062A\u0627\u0646\u06CC\u06C1","common":"\u0645\u0648\u0631\u06CC\u062A\u0627\u0646\u06CC\u06C1"},"zho":{"official":"\u6BDB\u91CC\u5854\u5C3C\u4E9A\u4F0A\u65AF\u5170\u5171\u548C\u56FD","common":"\u6BDB\u91CC\u5854\u5C3C\u4E9A"}},"latlng":[20,-12],"landlocked":false,"borders":["DZA","MLI","SEN","ESH"],"area":1030700,"flag":"\uD83C\uDDF2\uD83C\uDDF7","demonyms":{"eng":{"f":"Mauritanian","m":"Mauritanian"},"fra":{"f":"Mauritanienne","m":"Mauritanien"}}},{"name":{"common":"Montserrat","official":"Montserrat","native":{"eng":{"official":"Montserrat","common":"Montserrat"}}},"tld":[".ms"],"cca2":"MS","ccn3":"500","cca3":"MSR","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["664"]},"capital":["Plymouth"],"altSpellings":["MS"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0645\u0648\u0646\u062A\u0633\u0631\u0627\u062A","common":"\u0645\u0648\u0646\u062A\u0633\u0631\u0627\u062A"},"ces":{"official":"Montserrat","common":"Montserrat"},"deu":{"official":"Montserrat","common":"Montserrat"},"est":{"official":"Montserrat","common":"Montserrat"},"fin":{"official":"Montserrat","common":"Montserrat"},"fra":{"official":"Montserrat","common":"Montserrat"},"hrv":{"official":"Montserrat","common":"Montserrat"},"hun":{"official":"Montserrat","common":"Montserrat"},"ita":{"official":"Montserrat","common":"Montserrat"},"jpn":{"official":"\u30E2\u30F3\u30C8\u30BB\u30E9\u30C8","common":"\u30E2\u30F3\u30C8\u30BB\u30E9\u30C8"},"kor":{"official":"\uBAAC\uD2B8\uC138\uB7AB","common":"\uBAAC\uD2B8\uC138\uB7AB"},"nld":{"official":"Montserrat","common":"Montserrat"},"per":{"official":"\u0645\u0648\u0646\u062A\u0633\u0631\u0627\u062A","common":"\u0645\u0648\u0646\u062A\u0633\u0631\u0627\u062A"},"pol":{"official":"Montserrat","common":"Montserrat"},"por":{"official":"Montserrat","common":"Montserrat"},"rus":{"official":"\u041C\u043E\u043D\u0442\u0441\u0435\u0440\u0440\u0430\u0442","common":"\u041C\u043E\u043D\u0442\u0441\u0435\u0440\u0440\u0430\u0442"},"slk":{"official":"Montserrat","common":"Montserrat"},"spa":{"official":"Montserrat","common":"Montserrat"},"srp":{"official":"Montserat","common":"Montserat"},"swe":{"official":"Montserrat","common":"Montserrat"},"tur":{"official":"Montserrat","common":"Montserrat"},"urd":{"official":"\u0645\u0627\u0646\u0679\u0633\u0631\u06CC\u0679","common":"\u0645\u0627\u0646\u0679\u0633\u0631\u06CC\u0679"},"zho":{"official":"\u8499\u7279\u585E\u62C9\u7279","common":"\u8499\u7279\u585E\u62C9\u7279"}},"latlng":[16.75,-62.2],"landlocked":false,"borders":[],"area":102,"flag":"\uD83C\uDDF2\uD83C\uDDF8","demonyms":{"eng":{"f":"Montserratian","m":"Montserratian"},"fra":{"f":"Montserratienne","m":"Montserratien"}}},{"name":{"common":"Martinique","official":"Martinique","native":{"fra":{"official":"Martinique","common":"Martinique"}}},"tld":[".mq"],"cca2":"MQ","ccn3":"474","cca3":"MTQ","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["96"]},"capital":["Fort-de-France"],"altSpellings":["MQ"],"region":"Americas","subregion":"Caribbean","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0645\u0627\u0631\u062A\u064A\u0646\u064A\u0643","common":"\u0645\u0627\u0631\u062A\u064A\u0646\u064A\u0643"},"ces":{"official":"Martinik","common":"Martinik"},"deu":{"official":"Martinique","common":"Martinique"},"est":{"official":"Martinique\u2019i departemang","common":"Martinique"},"fin":{"official":"Martinique","common":"Martinique"},"fra":{"official":"Martinique","common":"Martinique"},"hrv":{"official":"Martinique","common":"Martinique"},"hun":{"official":"Martinique","common":"Martinique"},"ita":{"official":"Martinique","common":"Martinica"},"jpn":{"official":"\u30DE\u30EB\u30C1\u30CB\u30FC\u30AF\u5CF6","common":"\u30DE\u30EB\u30C6\u30A3\u30CB\u30FC\u30AF"},"kor":{"official":"\uB9C8\uB974\uD2F0\uB2C8\uD06C","common":"\uB9C8\uB974\uD2F0\uB2C8\uD06C"},"nld":{"official":"Martinique","common":"Martinique"},"per":{"official":"\u0645\u0627\u0631\u062A\u06CC\u0646\u06CC\u06A9","common":"\u0645\u0627\u0631\u062A\u06CC\u0646\u06CC\u06A9"},"pol":{"official":"Martynika","common":"Martynika"},"por":{"official":"Martinique","common":"Martinica"},"rus":{"official":"\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430","common":"\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430"},"slk":{"official":"Martinique","common":"Martinique"},"spa":{"official":"Martinica","common":"Martinica"},"srp":{"official":"Martinik","common":"Martinik"},"swe":{"official":"Martinique","common":"Martinique"},"tur":{"official":"Martinik","common":"Martinik"},"urd":{"official":"\u0645\u0627\u0631\u0679\u06CC\u0646\u06CC\u06A9","common":"\u0645\u0627\u0631\u0679\u06CC\u0646\u06CC\u06A9"},"zho":{"official":"\u9A6C\u63D0\u5C3C\u514B","common":"\u9A6C\u63D0\u5C3C\u514B"}},"latlng":[14.666667,-61],"landlocked":false,"borders":[],"area":1128,"flag":"\uD83C\uDDF2\uD83C\uDDF6","demonyms":{"eng":{"f":"Martinican","m":"Martinican"},"fra":{"f":"Martiniquaise","m":"Martiniquais"}}},{"name":{"common":"Mauritius","official":"Republic of Mauritius","native":{"eng":{"official":"Republic of Mauritius","common":"Mauritius"},"fra":{"official":"R\xe9publique de Maurice","common":"Maurice"},"mfe":{"official":"Republik Moris","common":"Moris"}}},"tld":[".mu"],"cca2":"MU","ccn3":"480","cca3":"MUS","cioc":"MRI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MUR":{"name":"Mauritian rupee","symbol":"\u20A8"}},"idd":{"root":"+2","suffixes":["30"]},"capital":["Port Louis"],"altSpellings":["MU","Republic of Mauritius","R\xe9publique de Maurice"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","fra":"French","mfe":"Mauritian Creole"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633","common":"\u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633"},"ces":{"official":"Mauricijsk\xe1 republika","common":"Mauricius"},"deu":{"official":"Republik Mauritius","common":"Mauritius"},"est":{"official":"Mauritiuse Vabariik","common":"Mauritius"},"fin":{"official":"Mauritiuksen tasavalta","common":"Mauritius"},"fra":{"official":"R\xe9publique de Maurice","common":"\xcele Maurice"},"hrv":{"official":"Republika Mauricijus","common":"Mauricijus"},"hun":{"official":"Mauritiusi K\xf6zt\xe1rsas\xe1g","common":"Mauritius"},"ita":{"official":"Repubblica di Mauritius","common":"Mauritius"},"jpn":{"official":"\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9\u5171\u548C\u56FD","common":"\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9"},"kor":{"official":"\uBAA8\uB9AC\uC154\uC2A4 \uACF5\uD654\uAD6D","common":"\uBAA8\uB9AC\uC154\uC2A4"},"nld":{"official":"Republiek Mauritius","common":"Mauritius"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0648\u0631\u06CC\u0633","common":"\u0645\u0648\u0631\u06CC\u0633"},"pol":{"official":"Republika Mauritiusu","common":"Mauritius"},"por":{"official":"Rep\xfablica das Maur\xedcias","common":"Maur\xedcio"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439","common":"\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439"},"slk":{"official":"Maur\xedcijsk\xe1 republika","common":"Maur\xedcius"},"spa":{"official":"Rep\xfablica de Mauricio","common":"Mauricio"},"srp":{"official":"Republika Mauricijus","common":"Mauricijus"},"swe":{"official":"Republiken Mauritius","common":"Mauritius"},"tur":{"official":"Mauritius Cumhuriyeti","common":"Mauritius"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0648\u0631\u06CC\u0634\u0633","common":"\u0645\u0648\u0631\u06CC\u0634\u0633"},"zho":{"official":"\u6BDB\u91CC\u6C42\u65AF\u5171\u548C\u56FD","common":"\u6BDB\u91CC\u6C42\u65AF"}},"latlng":[-20.28333333,57.55],"landlocked":false,"borders":[],"area":2040,"flag":"\uD83C\uDDF2\uD83C\uDDFA","demonyms":{"eng":{"f":"Mauritian","m":"Mauritian"},"fra":{"f":"Mauricienne","m":"Mauricien"}}},{"name":{"common":"Malawi","official":"Republic of Malawi","native":{"eng":{"official":"Republic of Malawi","common":"Malawi"},"nya":{"official":"Chalo cha Malawi, Dziko la Mala\u0175i","common":"Mala\u0175i"}}},"tld":[".mw"],"cca2":"MW","ccn3":"454","cca3":"MWI","cioc":"MAW","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"MWK":{"name":"Malawian kwacha","symbol":"MK"}},"idd":{"root":"+2","suffixes":["65"]},"capital":["Lilongwe"],"altSpellings":["MW","Republic of Malawi"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","nya":"Chewa"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0627\u0644\u0627\u0648\u064A","common":"\u0645\u0627\u0644\u0627\u0648\u064A"},"ces":{"official":"Malawisk\xe1 republika","common":"Malawi"},"deu":{"official":"Republik Malawi","common":"Malawi"},"est":{"official":"Malawi Vabariik","common":"Malawi"},"fin":{"official":"Malawin tasavalta","common":"Malawi"},"fra":{"official":"R\xe9publique du Malawi","common":"Malawi"},"hrv":{"official":"Republika Malavi","common":"Malavi"},"hun":{"official":"Malawi K\xf6zt\xe1rsas\xe1g","common":"Malawi"},"ita":{"official":"Repubblica del Malawi","common":"Malawi"},"jpn":{"official":"\u30DE\u30E9\u30A6\u30A4\u5171\u548C\u56FD","common":"\u30DE\u30E9\u30A6\u30A4"},"kor":{"official":"\uB9D0\uB77C\uC704 \uACF5\uD654\uAD6D","common":"\uB9D0\uB77C\uC704"},"nld":{"official":"Republiek Malawi","common":"Malawi"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u0627\u0644\u0627\u0648\u06CC","common":"\u0645\u0627\u0644\u0627\u0648\u06CC"},"pol":{"official":"Republika Malawi","common":"Malawi"},"por":{"official":"Rep\xfablica do Malawi","common":"Malawi"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u043B\u0430\u0432\u0438","common":"\u041C\u0430\u043B\u0430\u0432\u0438"},"slk":{"official":"Malawijsk\xe1 republika","common":"Malawi"},"spa":{"official":"Rep\xfablica de Malawi","common":"Malawi"},"srp":{"official":"Republika Malavi","common":"Malavi"},"swe":{"official":"Republiken Malawi","common":"Malawi"},"tur":{"official":"Malavi Cumhuriyeti","common":"Malavi"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0644\u0627\u0648\u06CC","common":"\u0645\u0644\u0627\u0648\u06CC"},"zho":{"official":"\u9A6C\u62C9\u7EF4\u5171\u548C\u56FD","common":"\u9A6C\u62C9\u7EF4"}},"latlng":[-13.5,34],"landlocked":true,"borders":["MOZ","TZA","ZMB"],"area":118484,"flag":"\uD83C\uDDF2\uD83C\uDDFC","demonyms":{"eng":{"f":"Malawian","m":"Malawian"},"fra":{"f":"Malawienne","m":"Malawien"}}},{"name":{"common":"Malaysia","official":"Malaysia","native":{"eng":{"official":"Malaysia","common":"Malaysia"},"msa":{"official":"\u0645\u0644\u064A\u0633\u064A\u0627","common":"\u0645\u0644\u064A\u0633\u064A\u0627"}}},"tld":[".my"],"cca2":"MY","ccn3":"458","cca3":"MYS","cioc":"MAS","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"MYR":{"name":"Malaysian ringgit","symbol":"RM"}},"idd":{"root":"+6","suffixes":["0"]},"capital":["Kuala Lumpur"],"altSpellings":["MY"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"eng":"English","msa":"Malay"},"translations":{"ara":{"official":"\u0645\u0627\u0644\u064A\u0632\u064A\u0627","common":"\u0645\u0627\u0644\u064A\u0632\u064A\u0627"},"ces":{"official":"Malajsie","common":"Malajsie"},"deu":{"official":"Malaysia","common":"Malaysia"},"est":{"official":"Malaisia","common":"Malaisia"},"fin":{"official":"Malesia","common":"Malesia"},"fra":{"official":"F\xe9d\xe9ration de Malaisie","common":"Malaisie"},"hrv":{"official":"Malezija","common":"Malezija"},"hun":{"official":"Malajzia","common":"Malajzia"},"ita":{"official":"Malaysia","common":"Malesia"},"jpn":{"official":"\u30DE\u30EC\u30FC\u30B7\u30A2","common":"\u30DE\u30EC\u30FC\u30B7\u30A2"},"kor":{"official":"\uB9D0\uB808\uC774\uC2DC\uC544","common":"\uB9D0\uB808\uC774\uC2DC\uC544"},"nld":{"official":"Maleisi\xeb","common":"Maleisi\xeb"},"per":{"official":"\u0641\u062F\u0631\u0627\u0633\u06CC\u0648\u0646 \u0645\u0627\u0644\u0632\u06CC","common":"\u0645\u0627\u0644\u0632\u06CC"},"pol":{"official":"Malezja","common":"Malezja"},"por":{"official":"Mal\xe1sia","common":"Mal\xe1sia"},"rus":{"official":"\u041C\u0430\u043B\u0430\u0439\u0437\u0438\u044F","common":"\u041C\u0430\u043B\u0430\u0439\u0437\u0438\u044F"},"slk":{"official":"Malajzia","common":"Malajzia"},"spa":{"official":"Malasia","common":"Malasia"},"srp":{"official":"Malezija","common":"Malezija"},"swe":{"official":"Malaysia","common":"Malaysia"},"tur":{"official":"Malezya","common":"Malezya"},"urd":{"official":"\u0645\u0644\u0627\u0626\u06CC\u0634\u06CC\u0627","common":"\u0645\u0644\u0627\u0626\u06CC\u0634\u06CC\u0627"},"zho":{"official":"\u9A6C\u6765\u897F\u4E9A","common":"\u9A6C\u6765\u897F\u4E9A"}},"latlng":[2.5,112.5],"landlocked":false,"borders":["BRN","IDN","THA"],"area":330803,"flag":"\uD83C\uDDF2\uD83C\uDDFE","demonyms":{"eng":{"f":"Malaysian","m":"Malaysian"},"fra":{"f":"Malaisienne","m":"Malaisien"}}},{"name":{"common":"Mayotte","official":"Department of Mayotte","native":{"fra":{"official":"D\xe9partement de Mayotte","common":"Mayotte"}}},"tld":[".yt"],"cca2":"YT","ccn3":"175","cca3":"MYT","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+2","suffixes":["62"]},"capital":["Mamoudzou"],"altSpellings":["YT","Department of Mayotte","D\xe9partement de Mayotte"],"region":"Africa","subregion":"Eastern Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0645\u0627\u064A\u0648\u062A","common":"\u0645\u0627\u064A\u0648\u062A"},"ces":{"official":"Mayotte","common":"Mayotte"},"deu":{"official":"\xdcbersee-D\xe9partement Mayotte","common":"Mayotte"},"est":{"official":"Mayotte","common":"Mayotte"},"fin":{"official":"Mayotte","common":"Mayotte"},"fra":{"official":"D\xe9partement de Mayotte","common":"Mayotte"},"hrv":{"official":"Odjel Mayotte","common":"Mayotte"},"hun":{"official":"Mayotte","common":"Mayotte"},"ita":{"official":"Dipartimento di Mayotte","common":"Mayotte"},"jpn":{"official":"\u30DE\u30A4\u30E8\u30C3\u30C8\u5CF6","common":"\u30DE\u30E8\u30C3\u30C8"},"kor":{"official":"\uB9C8\uC694\uD2B8","common":"\uB9C8\uC694\uD2B8"},"nld":{"official":"Afdeling Mayotte","common":"Mayotte"},"per":{"official":"\u0645\u062C\u0645\u0648\u0639\u0647 \u0634\u0647\u0631\u0633\u062A\u0627\u0646\u06CC \u0645\u0627\u06CC\u0648\u062A","common":"\u0645\u0627\u06CC\u0648\u062A"},"pol":{"official":"Majotta","common":"Majotta"},"por":{"official":"Departamento de Mayotte","common":"Mayotte"},"rus":{"official":"\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 \u041C\u0430\u0439\u043E\u0442\u0442\u0430","common":"\u041C\u0430\u0439\u043E\u0442\u0442\u0430"},"slk":{"official":"Department Mayotte","common":"Mayotte"},"spa":{"official":"Departamento de Mayotte","common":"Mayotte"},"srp":{"official":"Kolektivitet Majot","common":"Majot"},"swe":{"official":"Departementsomr\xe5det Mayotte","common":"Mayotte"},"tur":{"official":"Mayotte","common":"Mayotte"},"urd":{"official":"\u0645\u0627\u06CC\u0648\u0679","common":"\u0645\u0627\u06CC\u0648\u0679"},"zho":{"official":"\u9A6C\u7EA6\u7279","common":"\u9A6C\u7EA6\u7279"}},"latlng":[-12.83333333,45.16666666],"landlocked":false,"borders":[],"area":374,"flag":"\uD83C\uDDFE\uD83C\uDDF9","demonyms":{"eng":{"f":"Mahoran","m":"Mahoran"},"fra":{"f":"Mahoraise","m":"Mahorais"}}},{"name":{"common":"Namibia","official":"Republic of Namibia","native":{"afr":{"official":"Republiek van Namibi\xeb","common":"Namibi\xeb"},"deu":{"official":"Republik Namibia","common":"Namibia"},"eng":{"official":"Republic of Namibia","common":"Namibia"},"her":{"official":"Republic of Namibia","common":"Namibia"},"hgm":{"official":"Republic of Namibia","common":"Namibia"},"kwn":{"official":"Republic of Namibia","common":"Namibia"},"loz":{"official":"Republic of Namibia","common":"Namibia"},"ndo":{"official":"Republic of Namibia","common":"Namibia"},"tsn":{"official":"Lefatshe la Namibia","common":"Namibia"}}},"tld":[".na"],"cca2":"NA","ccn3":"516","cca3":"NAM","cioc":"NAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"NAD":{"name":"Namibian dollar","symbol":"$"},"ZAR":{"name":"South African rand","symbol":"R"}},"idd":{"root":"+2","suffixes":["64"]},"capital":["Windhoek"],"altSpellings":["NA","Namibi\xeb","Republic of Namibia"],"region":"Africa","subregion":"Southern Africa","languages":{"afr":"Afrikaans","deu":"German","eng":"English","her":"Herero","hgm":"Khoekhoe","kwn":"Kwangali","loz":"Lozi","ndo":"Ndonga","tsn":"Tswana"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0646\u0627\u0645\u064A\u0628\u064A\u0627","common":"\u0646\u0627\u0645\u064A\u0628\u064A\u0627"},"ces":{"official":"Namibijsk\xe1 republika","common":"Namibie"},"deu":{"official":"Republik Namibia","common":"Namibia"},"est":{"official":"Namiibia Vabariik","common":"Namiibia"},"fin":{"official":"Namibian tasavalta","common":"Namibia"},"fra":{"official":"R\xe9publique de Namibie","common":"Namibie"},"hrv":{"official":"Republika Namibija","common":"Namibija"},"hun":{"official":"Nam\xedbiai K\xf6zt\xe1rsas\xe1g","common":"Nam\xedbia"},"ita":{"official":"Repubblica di Namibia","common":"Namibia"},"jpn":{"official":"\u30CA\u30DF\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30CA\u30DF\u30D3\u30A2"},"kor":{"official":"\uB098\uBBF8\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uB098\uBBF8\uBE44\uC544"},"nld":{"official":"Republiek Namibi\xeb","common":"Namibi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0646\u0627\u0645\u06CC\u0628\u06CC\u0627","common":"\u0646\u0627\u0645\u06CC\u0628\u06CC\u0627"},"pol":{"official":"Republika Namibii","common":"Namibia"},"por":{"official":"Rep\xfablica da Nam\xedbia","common":"Nam\xedbia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0430\u043C\u0438\u0431\u0438\u044F","common":"\u041D\u0430\u043C\u0438\u0431\u0438\u044F"},"slk":{"official":"Nam\xedbijsk\xe1 republika","common":"Nam\xedbia"},"spa":{"official":"Rep\xfablica de Namibia","common":"Namibia"},"srp":{"official":"Republika Namibija","common":"Namibija"},"swe":{"official":"Republiken Namibia","common":"Namibia"},"tur":{"official":"Namibya Cumhuriyeti","common":"Namibya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u0645\u06CC\u0628\u06CC\u0627","common":"\u0646\u0645\u06CC\u0628\u06CC\u0627"},"zho":{"official":"\u7EB3\u7C73\u6BD4\u4E9A\u5171\u548C\u56FD","common":"\u7EB3\u7C73\u6BD4\u4E9A"}},"latlng":[-22,17],"landlocked":false,"borders":["AGO","BWA","ZAF","ZMB"],"area":825615,"flag":"\uD83C\uDDF3\uD83C\uDDE6","demonyms":{"eng":{"f":"Namibian","m":"Namibian"},"fra":{"f":"Namibienne","m":"Namibien"}}},{"name":{"common":"New Caledonia","official":"New Caledonia","native":{"fra":{"official":"Nouvelle-Cal\xe9donie","common":"Nouvelle-Cal\xe9donie"}}},"tld":[".nc"],"cca2":"NC","ccn3":"540","cca3":"NCL","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"XPF":{"name":"CFP franc","symbol":"\u20A3"}},"idd":{"root":"+6","suffixes":["87"]},"capital":["Noum\xe9a"],"altSpellings":["NC"],"region":"Oceania","subregion":"Melanesia","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0643\u0627\u0644\u064A\u062F\u0648\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629","common":"\u0643\u0627\u0644\u064A\u062F\u0648\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"},"ces":{"official":"Nov\xe1 Kaledonie","common":"Nov\xe1 Kaledonie"},"deu":{"official":"Neukaledonien","common":"Neukaledonien"},"est":{"official":"Uus-Kaledoonia","common":"Uus-Kaledoonia"},"fin":{"official":"Uusi-Kaledonia","common":"Uusi-Kaledonia"},"fra":{"official":"Nouvelle-Cal\xe9donie","common":"Nouvelle-Cal\xe9donie"},"hrv":{"official":"Nova Kaledonija","common":"Nova Kaledonija"},"hun":{"official":"\xdaj-Kaled\xf3nia","common":"\xdaj-Kaled\xf3nia"},"ita":{"official":"Nuova Caledonia","common":"Nuova Caledonia"},"jpn":{"official":"\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2","common":"\u30CB\u30E5\u30FC\u30AB\u30EC\u30C9\u30CB\u30A2"},"kor":{"official":"\uB204\uBCA8\uCE7C\uB808\uB3C4\uB2C8","common":"\uB204\uBCA8\uCE7C\uB808\uB3C4\uB2C8"},"nld":{"official":"nieuw -Caledoni\xeb","common":"Nieuw-Caledoni\xeb"},"per":{"official":"\u06A9\u0627\u0644\u062F\u0648\u0646\u06CC\u0627\u06CC \u062C\u062F\u06CC\u062F","common":"\u06A9\u0627\u0644\u062F\u0648\u0646\u06CC\u0627\u06CC \u062C\u062F\u06CC\u062F"},"pol":{"official":"Nowa Kaledonia","common":"Nowa Kaledonia"},"por":{"official":"New Caledonia","common":"Nova Caled\xf3nia"},"rus":{"official":"\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F","common":"\u041D\u043E\u0432\u0430\u044F \u041A\u0430\u043B\u0435\u0434\u043E\u043D\u0438\u044F"},"slk":{"official":"Nov\xe1 Kaled\xf3nia","common":"Nov\xe1 Kaled\xf3nia"},"spa":{"official":"nueva Caledonia","common":"Nueva Caledonia"},"srp":{"official":"Nova Kaledonija","common":"Nova Kaledonija"},"swe":{"official":"Nya Kaledonien","common":"Nya Kaledonien"},"tur":{"official":"Yeni Kaledonya","common":"Yeni Kaledonya"},"urd":{"official":"\u0646\u06CC\u0648 \u06A9\u06CC\u0644\u06CC\u0688\u0648\u0646\u06CC\u0627","common":"\u0646\u06CC\u0648 \u06A9\u06CC\u0644\u06CC\u0688\u0648\u0646\u06CC\u0627"},"zho":{"official":"\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A","common":"\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A"}},"latlng":[-21.5,165.5],"landlocked":false,"borders":[],"area":18575,"flag":"\uD83C\uDDF3\uD83C\uDDE8","demonyms":{"eng":{"f":"New Caledonian","m":"New Caledonian"},"fra":{"f":"N\xe9o-Cal\xe9donienne","m":"N\xe9o-Cal\xe9donien"}}},{"name":{"common":"Niger","official":"Republic of Niger","native":{"fra":{"official":"R\xe9publique du Niger","common":"Niger"}}},"tld":[".ne"],"cca2":"NE","ccn3":"562","cca3":"NER","cioc":"NIG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["27"]},"capital":["Niamey"],"altSpellings":["NE","Nijar"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0646\u064A\u062C\u0631","common":"\u0627\u0644\u0646\u064A\u062C\u0631"},"ces":{"official":"Nigersk\xe1 republika","common":"Niger"},"deu":{"official":"Republik Niger","common":"Niger"},"est":{"official":"Nigeri Vabariik","common":"Niger"},"fin":{"official":"Nigerin tasavalta","common":"Niger"},"fra":{"official":"R\xe9publique du Niger","common":"Niger"},"hrv":{"official":"Republika Niger","common":"Niger"},"hun":{"official":"Nigeri K\xf6zt\xe1rsas\xe1g","common":"Niger"},"ita":{"official":"Repubblica del Niger","common":"Niger"},"jpn":{"official":"\u30CB\u30B8\u30A7\u30FC\u30EB\u5171\u548C\u56FD","common":"\u30CB\u30B8\u30A7\u30FC\u30EB"},"kor":{"official":"\uB2C8\uC81C\uB974 \uACF5\uD654\uAD6D","common":"\uB2C8\uC81C\uB974"},"nld":{"official":"Republiek Niger","common":"Niger"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0646\u06CC\u062C\u0631","common":"\u0646\u06CC\u062C\u0631"},"pol":{"official":"Republika Nigru","common":"Niger"},"por":{"official":"Rep\xfablica do N\xedger","common":"N\xedger"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0438\u0433\u0435\u0440","common":"\u041D\u0438\u0433\u0435\u0440"},"slk":{"official":"Nig\xe9rsk\xe1 republika","common":"Niger"},"spa":{"official":"Rep\xfablica de N\xedger","common":"N\xedger"},"srp":{"official":"Republika Niger","common":"Niger"},"swe":{"official":"Republiken Niger","common":"Niger"},"tur":{"official":"Nijer Cumhuriyeti","common":"Nijer"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u0627\u0626\u062C\u0631","common":"\u0646\u0627\u0626\u062C\u0631"},"zho":{"official":"\u5C3C\u65E5\u5C14\u5171\u548C\u56FD","common":"\u5C3C\u65E5\u5C14"}},"latlng":[16,8],"landlocked":true,"borders":["DZA","BEN","BFA","TCD","LBY","MLI","NGA"],"area":1267000,"flag":"\uD83C\uDDF3\uD83C\uDDEA","demonyms":{"eng":{"f":"Nigerien","m":"Nigerien"},"fra":{"f":"Nig\xe9rienne","m":"Nig\xe9rien"}}},{"name":{"common":"Norfolk Island","official":"Territory of Norfolk Island","native":{"eng":{"official":"Territory of Norfolk Island","common":"Norfolk Island"},"pih":{"official":"Teratri of Norf\'k Ailen","common":"Norf\'k Ailen"}}},"tld":[".nf"],"cca2":"NF","ccn3":"574","cca3":"NFK","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["72"]},"capital":["Kingston"],"altSpellings":["NF","Territory of Norfolk Island","Teratri of Norf\'k Ailen"],"region":"Oceania","subregion":"Australia and New Zealand","languages":{"eng":"English","pih":"Norfuk"},"translations":{"ara":{"official":"\u0625\u0642\u0644\u064A\u0645 \u062C\u0632\u064A\u0631\u0629 \u0646\u0648\u0631\u0641\u0648\u0644\u0643","common":"\u062C\u0632\u064A\u0631\u0629 \u0646\u0648\u0631\u0641\u0648\u0644\u0643"},"ces":{"official":"Teritorium ostrova Norfolk","common":"Norfolk"},"deu":{"official":"Gebiet der Norfolkinsel","common":"Norfolkinsel"},"est":{"official":"Norfolki saare ala","common":"Norfolk"},"fin":{"official":"Norfolkinsaaren territorio","common":"Norfolkinsaari"},"fra":{"official":"Territoire de l\'\xeele Norfolk","common":"\xcele Norfolk"},"hrv":{"official":"Teritorij Norfolk Island","common":"Otok Norfolk"},"hun":{"official":"Norfolk-sziget","common":"Norfolk-sziget"},"ita":{"official":"Territorio di Norfolk Island","common":"Isola Norfolk"},"jpn":{"official":"\u30CE\u30FC\u30D5\u30A9\u30FC\u30AF\u5CF6","common":"\u30CE\u30FC\u30D5\u30A9\u30FC\u30AF\u5CF6"},"kor":{"official":"\uB178\uD37D \uC12C","common":"\uB178\uD37D \uC12C"},"nld":{"official":"Grondgebied van Norfolk Island","common":"Norfolkeiland"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u062C\u0632\u0627\u06CC\u0631 \u0646\u0648\u0631\u0641\u06A9","common":"\u062C\u0632\u06CC\u0631\u0647 \u0646\u0648\u0631\u0641\u06A9"},"pol":{"official":"Terytorium Wyspy Norfolk","common":"Wyspa Norfolk"},"por":{"official":"Territ\xf3rio da Ilha Norfolk","common":"Ilha Norfolk"},"rus":{"official":"\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u041D\u043E\u0440\u0444\u043E\u043B\u043A","common":"\u041D\u043E\u0440\u0444\u043E\u043B\u043A"},"slk":{"official":"Terit\xf3rium ostrova Norfolk","common":"Norfolk"},"spa":{"official":"Territorio de la Isla Norfolk","common":"Isla de Norfolk"},"srp":{"official":"Teritorija Ostrva Norfok","common":"Ostrvo Norfok"},"swe":{"official":"Norfolk\xf6n","common":"Norfolk\xf6n"},"tur":{"official":"Norfolk Adas\u0131","common":"Norfolk Adas\u0131"},"urd":{"official":"\u062C\u0632\u06CC\u0631\u06C1 \u0646\u0648\u0631\u0641\u06A9 \u062E\u0637\u06C1","common":"\u062C\u0632\u06CC\u0631\u06C1 \u0646\u0648\u0631\u0641\u06A9"},"zho":{"official":"\u8BFA\u798F\u514B\u5C9B","common":"\u8BFA\u798F\u514B\u5C9B"}},"latlng":[-29.03333333,167.95],"landlocked":false,"borders":[],"area":36,"flag":"\uD83C\uDDF3\uD83C\uDDEB","demonyms":{"eng":{"f":"Norfolk Islander","m":"Norfolk Islander"},"fra":{"f":"Norfolkaise","m":"Norfolkais"}}},{"name":{"common":"Nigeria","official":"Federal Republic of Nigeria","native":{"eng":{"official":"Federal Republic of Nigeria","common":"Nigeria"}}},"tld":[".ng"],"cca2":"NG","ccn3":"566","cca3":"NGA","cioc":"NGR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"NGN":{"name":"Nigerian naira","symbol":"\u20A6"}},"idd":{"root":"+2","suffixes":["34"]},"capital":["Abuja"],"altSpellings":["NG","Nijeriya","Na\xedj\xedr\xed\xe0","Federal Republic of Nigeria"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0646\u064A\u062C\u064A\u0631\u064A\u0627 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u0646\u064A\u062C\u064A\u0631\u064A\u0627"},"ces":{"official":"Nigerijsk\xe1 federativn\xed republika","common":"Nig\xe9rie"},"deu":{"official":"Bundesrepublik Nigeria","common":"Nigeria"},"est":{"official":"Nigeeria Liitvabariik","common":"Nigeeria"},"fin":{"official":"Nigerian liittotasavalta","common":"Nigeria"},"fra":{"official":"R\xe9publique f\xe9d\xe9rale du Nigeria","common":"Nig\xe9ria"},"hrv":{"official":"Savezna Republika Nigerija","common":"Nigerija"},"hun":{"official":"Nig\xe9ria","common":"Nig\xe9ria"},"ita":{"official":"Repubblica federale di Nigeria","common":"Nigeria"},"jpn":{"official":"\u30CA\u30A4\u30B8\u30A7\u30EA\u30A2\u9023\u90A6\u5171\u548C\u56FD","common":"\u30CA\u30A4\u30B8\u30A7\u30EA\u30A2"},"kor":{"official":"\uB098\uC774\uC9C0\uB9AC\uC544 \uC5F0\uBC29 \uACF5\uD654\uAD6D","common":"\uB098\uC774\uC9C0\uB9AC\uC544"},"nld":{"official":"Federale Republiek Nigeria","common":"Nigeria"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u0644 \u0646\u06CC\u062C\u0631\u06CC\u0647","common":"\u0646\u06CC\u062C\u0631\u06CC\u0647"},"pol":{"official":"Federalna Republika Nigerii","common":"Nigeria"},"por":{"official":"Rep\xfablica Federal da Nig\xe9ria","common":"Nig\xe9ria"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0438\u0433\u0435\u0440\u0438\u044F","common":"\u041D\u0438\u0433\u0435\u0440\u0438\u044F"},"slk":{"official":"Nig\xe9rijsk\xe1 federat\xedvna republika","common":"Nig\xe9ria"},"spa":{"official":"Rep\xfablica Federal de Nigeria","common":"Nigeria"},"srp":{"official":"Savezna Republika Nigerija","common":"Nigerija"},"swe":{"official":"F\xf6rbundsrepubliken Nigeria","common":"Nigeria"},"tur":{"official":"Nijerya Federal Cumhuriyeti","common":"Nijerya"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u0627\u0626\u062C\u06CC\u0631\u06CC\u0627","common":"\u0646\u0627\u0626\u062C\u06CC\u0631\u06CC\u0627"},"zho":{"official":"\u5C3C\u65E5\u5229\u4E9A\u8054\u90A6\u5171\u548C\u56FD","common":"\u5C3C\u65E5\u5229\u4E9A"}},"latlng":[10,8],"landlocked":false,"borders":["BEN","CMR","TCD","NER"],"area":923768,"flag":"\uD83C\uDDF3\uD83C\uDDEC","demonyms":{"eng":{"f":"Nigerian","m":"Nigerian"},"fra":{"f":"Nig\xe9riane","m":"Nig\xe9rian"}}},{"name":{"common":"Nicaragua","official":"Republic of Nicaragua","native":{"spa":{"official":"Rep\xfablica de Nicaragua","common":"Nicaragua"}}},"tld":[".ni"],"cca2":"NI","ccn3":"558","cca3":"NIC","cioc":"NCA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"NIO":{"name":"Nicaraguan c\xf3rdoba","symbol":"C$"}},"idd":{"root":"+5","suffixes":["05"]},"capital":["Managua"],"altSpellings":["NI","Republic of Nicaragua","Rep\xfablica de Nicaragua"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0646\u064A\u0643\u0627\u0631\u0627\u063A\u0648\u0627","common":"\u0646\u064A\u0643\u0627\u0631\u0627\u063A\u0648\u0627"},"ces":{"official":"Republika Nikaragua","common":"Nikaragua"},"deu":{"official":"Republik Nicaragua","common":"Nicaragua"},"est":{"official":"Nicaragua Vabariik","common":"Nicaragua"},"fin":{"official":"Nicaraguan tasavalta","common":"Nicaragua"},"fra":{"official":"R\xe9publique du Nicaragua","common":"Nicaragua"},"hrv":{"official":"Republika Nikaragva","common":"Nikaragva"},"hun":{"official":"Nicaraguai K\xf6zt\xe1rsas\xe1g","common":"Nicaragua"},"ita":{"official":"Repubblica del Nicaragua","common":"Nicaragua"},"jpn":{"official":"\u30CB\u30AB\u30E9\u30B0\u30A2\u5171\u548C\u56FD","common":"\u30CB\u30AB\u30E9\u30B0\u30A2"},"kor":{"official":"\uB2C8\uCE74\uB77C\uACFC \uACF5\uD654\uAD6D","common":"\uB2C8\uCE74\uB77C\uACFC"},"nld":{"official":"Republiek Nicaragua","common":"Nicaragua"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0646\u06CC\u06A9\u0627\u0631\u0627\u06AF\u0648\u0626\u0647","common":"\u0646\u06CC\u06A9\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"},"pol":{"official":"Republika Nikaragui","common":"Nikaragua"},"por":{"official":"Rep\xfablica da Nicar\xe1gua","common":"Nicar\xe1gua"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0438\u043A\u0430\u0440\u0430\u0433\u0443\u0430","common":"\u041D\u0438\u043A\u0430\u0440\u0430\u0433\u0443\u0430"},"slk":{"official":"Nikaragujsk\xe1 republika","common":"Nikaragua"},"spa":{"official":"Rep\xfablica de Nicaragua","common":"Nicaragua"},"srp":{"official":"Republika Nikaragva","common":"Nikaragva"},"swe":{"official":"Republiken Nicaragua","common":"Nicaragua"},"tur":{"official":"Nikaragua Cumhuriyeti","common":"Nikaragua"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u06A9\u0627\u0631\u0627\u06AF\u0648\u0627","common":"\u0646\u06A9\u0627\u0631\u0627\u06AF\u0648\u0627"},"zho":{"official":"\u5C3C\u52A0\u62C9\u74DC\u5171\u548C\u56FD","common":"\u5C3C\u52A0\u62C9\u74DC"}},"latlng":[13,-85],"landlocked":false,"borders":["CRI","HND"],"area":130373,"flag":"\uD83C\uDDF3\uD83C\uDDEE","demonyms":{"eng":{"f":"Nicaraguan","m":"Nicaraguan"},"fra":{"f":"Nicaraguayenne","m":"Nicaraguayen"}}},{"name":{"common":"Niue","official":"Niue","native":{"eng":{"official":"Niue","common":"Niue"},"niu":{"official":"Niu\u0113","common":"Niu\u0113"}}},"tld":[".nu"],"cca2":"NU","ccn3":"570","cca3":"NIU","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"NZD":{"name":"New Zealand dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["83"]},"capital":["Alofi"],"altSpellings":["NU"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","niu":"Niuean"},"translations":{"ara":{"official":"\u0646\u064A\u064A\u0648\u064A","common":"\u0646\u064A\u064A\u0648\u064A"},"ces":{"official":"Niue","common":"Niue"},"deu":{"official":"Niue","common":"Niue"},"est":{"official":"Niue","common":"Niue"},"fin":{"official":"Niue","common":"Niue"},"fra":{"official":"Niue","common":"Niue"},"hrv":{"official":"Niue","common":"Niue"},"hun":{"official":"Niue","common":"Niue"},"ita":{"official":"Niue","common":"Niue"},"jpn":{"official":"\u30CB\u30A6\u30A8","common":"\u30CB\u30A6\u30A8"},"kor":{"official":"\uB2C8\uC6B0\uC5D0","common":"\uB2C8\uC6B0\uC5D0"},"nld":{"official":"Niue","common":"Niue"},"per":{"official":"\u0646\u06CC\u0648\u0648\u06CC","common":"\u0646\u06CC\u0648\u0648\u06CC"},"pol":{"official":"Niue","common":"Niue"},"por":{"official":"Niue","common":"Niue"},"rus":{"official":"\u041D\u0438\u0443\u044D","common":"\u041D\u0438\u0443\u044D"},"slk":{"official":"Niue","common":"Niue"},"spa":{"official":"Niue","common":"Niue"},"srp":{"official":"Nijue","common":"Nijue"},"swe":{"official":"Niue","common":"Niue"},"tur":{"official":"Niue","common":"Niue"},"urd":{"official":"\u0646\u06CC\u0648\u0648\u06D2","common":"\u0646\u06CC\u0648\u0648\u06D2"},"zho":{"official":"\u7EBD\u57C3","common":"\u7EBD\u57C3"}},"latlng":[-19.03333333,-169.86666666],"landlocked":false,"borders":[],"area":260,"flag":"\uD83C\uDDF3\uD83C\uDDFA","demonyms":{"eng":{"f":"Niuean","m":"Niuean"},"fra":{"f":"Niu\xe9enne","m":"Niu\xe9en"}}},{"name":{"common":"Netherlands","official":"Kingdom of the Netherlands","native":{"nld":{"official":"Koninkrijk der Nederlanden","common":"Nederland"}}},"tld":[".nl"],"cca2":"NL","ccn3":"528","cca3":"NLD","cioc":"NED","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["1"]},"capital":["Amsterdam"],"altSpellings":["NL","Holland","Nederland","The Netherlands"],"region":"Europe","subregion":"Western Europe","languages":{"nld":"Dutch"},"translations":{"ara":{"official":"\u0647\u0648\u0644\u0646\u062F\u0627","common":"\u0647\u0648\u0644\u0646\u062F\u0627"},"ces":{"official":"Nizozemsk\xe9 kr\xe1lovstv\xed","common":"Nizozemsko"},"deu":{"official":"Niederlande","common":"Niederlande"},"est":{"official":"Madalmaade Kuningriik","common":"Holland"},"fin":{"official":"Alankomaat","common":"Alankomaat"},"fra":{"official":"Pays-Bas","common":"Pays-Bas"},"hrv":{"official":"Holandija","common":"Nizozemska"},"hun":{"official":"Holland Kir\xe1lys\xe1g","common":"Hollandia"},"ita":{"official":"Paesi Bassi","common":"Paesi Bassi"},"jpn":{"official":"\u30AA\u30E9\u30F3\u30C0\u738B\u56FD","common":"\u30AA\u30E9\u30F3\u30C0"},"kor":{"official":"\uB124\uB35C\uB780\uB4DC \uC655\uAD6D","common":"\uB124\uB35C\uB780\uB4DC"},"nld":{"official":"Nederland","common":"Nederland"},"per":{"official":"\u0647\u0644\u0646\u062F","common":"\u0647\u0644\u0646\u062F"},"pol":{"official":"Kr\xf3lestwo Niderland\xf3w","common":"Holandia"},"por":{"official":"Holanda","common":"Holanda"},"rus":{"official":"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B","common":"\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B"},"slk":{"official":"Holandsk\xe9 kr\xe1\u013Eovstvo","common":"Holansko"},"spa":{"official":"Pa\xedses Bajos","common":"Pa\xedses Bajos"},"srp":{"official":"Kraljevina Holandija","common":"Holandija"},"swe":{"official":"Nederl\xe4nderna","common":"Nederl\xe4nderna"},"tur":{"official":"Hollanda Krall\u0131\u011F\u0131","common":"Hollanda"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0646\u06CC\u062F\u0631\u0644\u06CC\u0646\u0688\u0632","common":"\u0646\u06CC\u062F\u0631\u0644\u06CC\u0646\u0688\u0632"},"zho":{"official":"\u8377\u5170","common":"\u8377\u5170"}},"latlng":[52.5,5.75],"landlocked":false,"borders":["BEL","DEU"],"area":41850,"flag":"\uD83C\uDDF3\uD83C\uDDF1","demonyms":{"eng":{"f":"Dutch","m":"Dutch"},"fra":{"f":"N\xe9erlandaise","m":"N\xe9erlandais"}}},{"name":{"common":"Norway","official":"Kingdom of Norway","native":{"nno":{"official":"Kongeriket Noreg","common":"Noreg"},"nob":{"official":"Kongeriket Norge","common":"Norge"},"smi":{"official":"Norgga gonagasriika","common":"Norgga"}}},"tld":[".no"],"cca2":"NO","ccn3":"578","cca3":"NOR","cioc":"NOR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"NOK":{"name":"Norwegian krone","symbol":"kr"}},"idd":{"root":"+4","suffixes":["7"]},"capital":["Oslo"],"altSpellings":["NO","Norge","Noreg","Kingdom of Norway","Kongeriket Norge","Kongeriket Noreg"],"region":"Europe","subregion":"Northern Europe","languages":{"nno":"Norwegian Nynorsk","nob":"Norwegian Bokm\xe5l","smi":"Sami"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0646\u0631\u0648\u064A\u062C","common":"\u0627\u0644\u0646\u0631\u0648\u064A\u062C"},"ces":{"official":"Norsk\xe9 kr\xe1lovstv\xed","common":"Norsko"},"deu":{"official":"K\xf6nigreich Norwegen","common":"Norwegen"},"est":{"official":"Norra Kuningriik","common":"Norra"},"fin":{"official":"Norjan kuningaskunta","common":"Norja"},"fra":{"official":"Royaume de Norv\xe8ge","common":"Norv\xe8ge"},"hrv":{"official":"Kraljevina Norve\u0161ka","common":"Norve\u0161ka"},"hun":{"official":"Norv\xe9g Kir\xe1lys\xe1g","common":"Norv\xe9gia"},"ita":{"official":"Regno di Norvegia","common":"Norvegia"},"jpn":{"official":"\u30CE\u30EB\u30A6\u30A7\u30FC\u738B\u56FD","common":"\u30CE\u30EB\u30A6\u30A7\u30FC"},"kor":{"official":"\uB178\uB974\uC6E8\uC774 \uC655\uAD6D","common":"\uB178\uB974\uC6E8\uC774"},"nld":{"official":"Koninkrijk Noorwegen","common":"Noorwegen"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0646\u0631\u0648\u0698","common":"\u0646\u0631\u0648\u0698"},"pol":{"official":"Kr\xf3lestwo Norwegii","common":"Norwegia"},"por":{"official":"Reino da Noruega","common":"Noruega"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F","common":"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F"},"slk":{"official":"N\xf3rske kr\xe1\u013Eovstvo","common":"N\xf3rsko"},"spa":{"official":"Reino de Noruega","common":"Noruega"},"srp":{"official":"Kraljevina Norve\u0161ka","common":"Norve\u0161ka"},"swe":{"official":"Konungariket Norge","common":"Norge"},"tur":{"official":"Norve\xe7 Krall\u0131\u011F\u0131","common":"Norve\xe7"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0646\u0627\u0631\u0648\u06D2","common":"\u0646\u0627\u0631\u0648\u06D2"},"zho":{"official":"\u632A\u5A01\u738B\u56FD","common":"\u632A\u5A01"}},"latlng":[62,10],"landlocked":false,"borders":["FIN","SWE","RUS"],"area":323802,"flag":"\uD83C\uDDF3\uD83C\uDDF4","demonyms":{"eng":{"f":"Norwegian","m":"Norwegian"},"fra":{"f":"Norv\xe9gienne","m":"Norv\xe9gien"}}},{"name":{"common":"Nepal","official":"Federal Democratic Republic of Nepal","native":{"nep":{"official":"\u0928\u0947\u092A\u093E\u0932 \u0938\u0902\u0918\u0940\u092F \u0932\u094B\u0915\u0924\u093E\u0928\u094D\u0924\u094D\u0930\u093F\u0915 \u0917\u0923\u0924\u0928\u094D\u0924\u094D\u0930","common":"\u0928\u0947\u092A\u093E\u0932"}}},"tld":[".np"],"cca2":"NP","ccn3":"524","cca3":"NPL","cioc":"NEP","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"NPR":{"name":"Nepalese rupee","symbol":"\u20A8"}},"idd":{"root":"+9","suffixes":["77"]},"capital":["Kathmandu"],"altSpellings":["NP","Federal Democratic Republic of Nepal","Lokt\u0101ntrik Ganatantra Nep\u0101l"],"region":"Asia","subregion":"Southern Asia","languages":{"nep":"Nepali"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0646\u064A\u0628\u0627\u0644 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u0646\u064A\u0628\u0627\u0644"},"ces":{"official":"Federativn\xed demokratick\xe1 republika Nep\xe1l","common":"Nep\xe1l"},"deu":{"official":"Demokratische Bundesrepublik Nepal","common":"Nepal"},"est":{"official":"Nepali Demokraatlik Liitvabariik","common":"Nepal"},"fin":{"official":"Nepalin demokraattinen liittotasavalta","common":"Nepal"},"fra":{"official":"R\xe9publique du N\xe9pal","common":"N\xe9pal"},"hrv":{"official":"Savezna Demokratska Republika Nepal","common":"Nepal"},"hun":{"official":"Nep\xe1li Sz\xf6vets\xe9gi Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Nep\xe1l"},"ita":{"official":"Repubblica federale democratica del Nepal","common":"Nepal"},"jpn":{"official":"\u30CD\u30D1\u30FC\u30EB\u9023\u90A6\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30CD\u30D1\u30FC\u30EB"},"kor":{"official":"\uB124\uD314 \uC5F0\uBC29 \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uB124\uD314"},"nld":{"official":"Federale Democratische Republiek Nepal","common":"Nepal"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u0644 \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u0646\u067E\u0627\u0644","common":"\u0646\u067E\u0627\u0644"},"pol":{"official":"Federalna Demokratyczna Republika Nepalu","common":"Nepal"},"por":{"official":"Rep\xfablica Democr\xe1tica Federal do Nepal","common":"Nepal"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0435\u043F\u0430\u043B","common":"\u041D\u0435\u043F\u0430\u043B"},"slk":{"official":"Nep\xe1lska federat\xedvna demokratick\xe1 republika","common":"Nep\xe1l"},"spa":{"official":"Rep\xfablica Democr\xe1tica Federal de Nepal","common":"Nepal"},"srp":{"official":"Savezna Demokratska Republika Nepal","common":"Nepal"},"swe":{"official":"Demokratiska f\xf6rbundsrepubliken Nepal","common":"Nepal"},"tur":{"official":"Nepal Federal Demokratik Cumhuriyeti","common":"Nepal"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u06CC\u067E\u0627\u0644","common":"\u0646\u06CC\u067E\u0627\u0644"},"zho":{"official":"\u5C3C\u6CCA\u5C14\u8054\u90A6\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u5C3C\u6CCA\u5C14"}},"latlng":[28,84],"landlocked":true,"borders":["CHN","IND"],"area":147181,"flag":"\uD83C\uDDF3\uD83C\uDDF5","demonyms":{"eng":{"f":"Nepalese","m":"Nepalese"},"fra":{"f":"N\xe9palaise","m":"N\xe9palais"}}},{"name":{"common":"Nauru","official":"Republic of Nauru","native":{"eng":{"official":"Republic of Nauru","common":"Nauru"},"nau":{"official":"Republic of Nauru","common":"Nauru"}}},"tld":[".nr"],"cca2":"NR","ccn3":"520","cca3":"NRU","cioc":"NRU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["74"]},"capital":["Yaren"],"altSpellings":["NR","Naoero","Pleasant Island","Republic of Nauru","Ripublik Naoero"],"region":"Oceania","subregion":"Micronesia","languages":{"eng":"English","nau":"Nauru"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0646\u0627\u0648\u0631\u0648","common":"\u0646\u0627\u0648\u0631\u0648"},"ces":{"official":"Republika Nauru","common":"Nauru"},"deu":{"official":"Republik Nauru","common":"Nauru"},"est":{"official":"Nauru Vabariik","common":"Nauru"},"fin":{"official":"Naurun tasavalta","common":"Nauru"},"fra":{"official":"R\xe9publique de Nauru","common":"Nauru"},"hrv":{"official":"Republika Nauru","common":"Nauru"},"hun":{"official":"Naurui K\xf6zt\xe1rsas\xe1g","common":"Nauru"},"ita":{"official":"Repubblica di Nauru","common":"Nauru"},"jpn":{"official":"\u30CA\u30A6\u30EB\u5171\u548C\u56FD","common":"\u30CA\u30A6\u30EB"},"kor":{"official":"\uB098\uC6B0\uB8E8 \uACF5\uD654\uAD6D","common":"\uB098\uC6B0\uB8E8"},"nld":{"official":"Republiek Nauru","common":"Nauru"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0646\u0627\u0626\u0648\u0631\u0648","common":"\u0646\u0627\u0626\u0648\u0631\u0648"},"pol":{"official":"Republika Nauru","common":"Nauru"},"por":{"official":"Rep\xfablica de Nauru","common":"Nauru"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041D\u0430\u0443\u0440\u0443","common":"\u041D\u0430\u0443\u0440\u0443"},"slk":{"official":"Naursk\xe1 republika","common":"Nauru"},"spa":{"official":"Rep\xfablica de Nauru","common":"Nauru"},"srp":{"official":"Republika Nauru","common":"Nauru"},"swe":{"official":"Republiken Nauru","common":"Nauru"},"tur":{"official":"Nauru Cumhuriyeti","common":"Nauru"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0646\u0627\u0648\u0631\u0648","common":"\u0646\u0627\u0648\u0631\u0648"},"zho":{"official":"\u7459\u9C81\u5171\u548C\u56FD","common":"\u7459\u9C81"}},"latlng":[-0.53333333,166.91666666],"landlocked":false,"borders":[],"area":21,"flag":"\uD83C\uDDF3\uD83C\uDDF7","demonyms":{"eng":{"f":"Nauruan","m":"Nauruan"},"fra":{"f":"Nauruane","m":"Nauruan"}}},{"name":{"common":"New Zealand","official":"New Zealand","native":{"eng":{"official":"New Zealand","common":"New Zealand"},"mri":{"official":"Aotearoa","common":"Aotearoa"},"nzs":{"official":"New Zealand","common":"New Zealand"}}},"tld":[".nz"],"cca2":"NZ","ccn3":"554","cca3":"NZL","cioc":"NZL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"NZD":{"name":"New Zealand dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["4"]},"capital":["Wellington"],"altSpellings":["NZ","Aotearoa"],"region":"Oceania","subregion":"Australia and New Zealand","languages":{"eng":"English","mri":"M\u0101ori","nzs":"New Zealand Sign Language"},"translations":{"ara":{"official":"\u0646\u064A\u0648\u0632\u064A\u0644\u0646\u062F\u0627","common":"\u0646\u064A\u0648\u0632\u064A\u0644\u0646\u062F\u0627"},"ces":{"official":"Nov\xfd Z\xe9land","common":"Nov\xfd Z\xe9land"},"deu":{"official":"Neuseeland","common":"Neuseeland"},"est":{"official":"Uus-Meremaa","common":"Uus-Meremaa"},"fin":{"official":"Uusi-Seelanti","common":"Uusi-Seelanti"},"fra":{"official":"Nouvelle-Z\xe9lande","common":"Nouvelle-Z\xe9lande"},"hrv":{"official":"Novi Zeland","common":"Novi Zeland"},"hun":{"official":"\xdaj-Z\xe9land","common":"\xdaj-Z\xe9land"},"ita":{"official":"Nuova Zelanda","common":"Nuova Zelanda"},"jpn":{"official":"\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9","common":"\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9"},"kor":{"official":"\uB274\uC9C8\uB79C\uB4DC","common":"\uB274\uC9C8\uB79C\uB4DC"},"nld":{"official":"Nieuw Zeeland","common":"Nieuw-Zeeland"},"per":{"official":"\u0646\u06CC\u0648\u0632\u06CC\u0644\u0646\u062F","common":"\u0646\u06CC\u0648\u0632\u06CC\u0644\u0646\u062F"},"pol":{"official":"Nowa Zelandia","common":"Nowa Zelandia"},"por":{"official":"nova Zel\xe2ndia","common":"Nova Zel\xe2ndia"},"rus":{"official":"\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F","common":"\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F"},"slk":{"official":"Nov\xfd Z\xe9land","common":"Nov\xfd Z\xe9land"},"spa":{"official":"nueva Zelanda","common":"Nueva Zelanda"},"srp":{"official":"Novi Zeland","common":"Novi Zeland"},"swe":{"official":"Nya Zeeland","common":"Nya Zeeland"},"tur":{"official":"Yeni Zelanda","common":"Yeni Zelanda"},"urd":{"official":"\u0646\u06CC\u0648\u0632\u06CC \u0644\u06CC\u0646\u0688","common":"\u0646\u06CC\u0648\u0632\u06CC \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u65B0\u897F\u5170","common":"\u65B0\u897F\u5170"}},"latlng":[-41,174],"landlocked":false,"borders":[],"area":270467,"flag":"\uD83C\uDDF3\uD83C\uDDFF","demonyms":{"eng":{"f":"New Zealander","m":"New Zealander"},"fra":{"f":"Neo-Z\xe9landaise","m":"Neo-Z\xe9landais"}}},{"name":{"common":"Oman","official":"Sultanate of Oman","native":{"ara":{"official":"\u0633\u0644\u0637\u0646\u0629 \u0639\u0645\u0627\u0646","common":"\u0639\u0645\u0627\u0646"}}},"tld":[".om"],"cca2":"OM","ccn3":"512","cca3":"OMN","cioc":"OMA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"OMR":{"name":"Omani rial","symbol":"\u0631.\u0639."}},"idd":{"root":"+9","suffixes":["68"]},"capital":["Muscat"],"altSpellings":["OM","Sultanate of Oman","Sal\u1E6Danat \u02BBUm\u0101n"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0633\u0644\u0637\u0646\u0629 \u0639\u0645\u0627\u0646","common":"\u0639\u0645\u0627\u0646"},"ces":{"official":"Sultan\xe1t Om\xe1n","common":"Om\xe1n"},"deu":{"official":"Sultanat Oman","common":"Oman"},"est":{"official":"Omaani Sultaniriik","common":"Omaan"},"fin":{"official":"Omanin sulttaanikunta","common":"Oman"},"fra":{"official":"Sultanat d\'Oman","common":"Oman"},"hrv":{"official":"Sultanat Oman","common":"Oman"},"hun":{"official":"Om\xe1ni Szultan\xe1tus","common":"Om\xe1n"},"ita":{"official":"Sultanato dell\'Oman","common":"oman"},"jpn":{"official":"\u30AA\u30DE\u30FC\u30F3\u56FD","common":"\u30AA\u30DE\u30FC\u30F3"},"kor":{"official":"\uC624\uB9CC \uC220\uD0C4\uAD6D","common":"\uC624\uB9CC"},"nld":{"official":"Sultanaat van Oman","common":"Oman"},"per":{"official":"\u0633\u0644\u0637\u0627\u0646\u200C\u0646\u0634\u06CC\u0646 \u0639\u064F\u0645\u0627\u0646","common":"\u0639\u0645\u0627\u0646"},"pol":{"official":"Su\u0142tanat Omanu","common":"Oman"},"por":{"official":"Sultanato de Om\xe3","common":"Om\xe3"},"rus":{"official":"\u0421\u0443\u043B\u0442\u0430\u043D\u0430\u0442 \u041E\u043C\u0430\u043D","common":"\u041E\u043C\u0430\u043D"},"slk":{"official":"Om\xe1nsky sultan\xe1t","common":"Om\xe1n"},"spa":{"official":"Sultanato de Om\xe1n","common":"Om\xe1n"},"srp":{"official":"Sultanat Oman","common":"Oman"},"swe":{"official":"Sultanatet Oman","common":"Oman"},"tur":{"official":"Umman Sultanl\u0131\u011F\u0131","common":"Umman"},"urd":{"official":"\u0633\u0644\u0637\u0646\u062A \u0639\u0645\u0627\u0646","common":"\u0639\u0645\u0627\u0646"},"zho":{"official":"\u963F\u66FC\u82CF\u4E39\u56FD","common":"\u963F\u66FC"}},"latlng":[21,57],"landlocked":false,"borders":["SAU","ARE","YEM"],"area":309500,"flag":"\uD83C\uDDF4\uD83C\uDDF2","demonyms":{"eng":{"f":"Omani","m":"Omani"},"fra":{"f":"Omanaise","m":"Omanais"}}},{"name":{"common":"Pakistan","official":"Islamic Republic of Pakistan","native":{"eng":{"official":"Islamic Republic of Pakistan","common":"Pakistan"},"urd":{"official":"\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C2 \u067E\u0627\u0643\u0633\u062A\u0627\u0646","common":"\u067E\u0627\u0643\u0633\u062A\u0627\u0646"}}},"tld":[".pk"],"cca2":"PK","ccn3":"586","cca3":"PAK","cioc":"PAK","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"PKR":{"name":"Pakistani rupee","symbol":"\u20A8"}},"idd":{"root":"+9","suffixes":["2"]},"capital":["Islamabad"],"altSpellings":["PK","P\u0101kist\u0101n","Islamic Republic of Pakistan","Isl\u0101m\u012B Jumh\u016Briya\'eh P\u0101kist\u0101n"],"region":"Asia","subregion":"Southern Asia","languages":{"eng":"English","urd":"Urdu"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0627\u0643\u0633\u062A\u0627\u0646 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629","common":"\u0628\u0627\u0643\u0633\u062A\u0627\u0646"},"ces":{"official":"P\xe1kist\xe1nsk\xe1 isl\xe1msk\xe1 republika","common":"P\xe1kist\xe1n"},"deu":{"official":"Islamische Republik Pakistan","common":"Pakistan"},"est":{"official":"Pakistani Islamivabariik","common":"Pakistan"},"fin":{"official":"Pakistanin islamilainen tasavalta","common":"Pakistan"},"fra":{"official":"R\xe9publique islamique du Pakistan","common":"Pakistan"},"hrv":{"official":"Islamska Republika Pakistan","common":"Pakistan"},"hun":{"official":"Pakiszt\xe1n","common":"Pakiszt\xe1n"},"ita":{"official":"Repubblica islamica del Pakistan","common":"Pakistan"},"jpn":{"official":"\u30D1\u30AD\u30B9\u30BF\u30F3\u30FB\u30A4\u30B9\u30E9\u30E0\u5171\u548C\u56FD","common":"\u30D1\u30AD\u30B9\u30BF\u30F3"},"kor":{"official":"\uD30C\uD0A4\uC2A4\uD0C4 \uC774\uC2AC\uB78C \uACF5\uD654\uAD6D","common":"\uD30C\uD0A4\uC2A4\uD0C4"},"nld":{"official":"Islamitische Republiek Pakistan","common":"Pakistan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u067E\u0627\u06A9\u0633\u062A\u0627\u0646","common":"\u067E\u0627\u06A9\u0633\u062A\u0627\u0646"},"pol":{"official":"Islamska Republika Pakistanu","common":"Pakistan"},"por":{"official":"Rep\xfablica Isl\xe2mica do Paquist\xe3o","common":"Paquist\xe3o"},"rus":{"official":"\u0418\u0441\u043B\u0430\u043C\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D","common":"\u041F\u0430\u043A\u0438\u0441\u0442\u0430\u043D"},"slk":{"official":"Pakistansk\xe1 islamsk\xe1 republika","common":"Pakistan"},"spa":{"official":"Rep\xfablica Isl\xe1mica de Pakist\xe1n","common":"Pakist\xe1n"},"srp":{"official":"Islamska Republika Pakistan","common":"Pakistan"},"swe":{"official":"Islamiska republiken Pakistan","common":"Pakistan"},"tur":{"official":"Pakistan \u0130slam Cumhuriyeti","common":"Pakistan"},"urd":{"official":"\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646","common":"\u067E\u0627\u06A9\u0633\u062A\u0627\u0646"},"zho":{"official":"\u5DF4\u57FA\u65AF\u5766\u4F0A\u65AF\u5170\u5171\u548C\u56FD","common":"\u5DF4\u57FA\u65AF\u5766"}},"latlng":[30,70],"landlocked":false,"borders":["AFG","CHN","IND","IRN"],"area":881912,"flag":"\uD83C\uDDF5\uD83C\uDDF0","demonyms":{"eng":{"f":"Pakistani","m":"Pakistani"},"fra":{"f":"Pakistanaise","m":"Pakistanais"}}},{"name":{"common":"Panama","official":"Republic of Panama","native":{"spa":{"official":"Rep\xfablica de Panam\xe1","common":"Panam\xe1"}}},"tld":[".pa"],"cca2":"PA","ccn3":"591","cca3":"PAN","cioc":"PAN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"PAB":{"name":"Panamanian balboa","symbol":"B/."},"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["07"]},"capital":["Panama City"],"altSpellings":["PA","Republic of Panama","Rep\xfablica de Panam\xe1"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0646\u0645\u0627","common":"\u0628\u0646\u0645\u0627"},"ces":{"official":"Panamsk\xe1 republika","common":"Panama"},"deu":{"official":"Republik Panama","common":"Panama"},"est":{"official":"Panama Vabariik","common":"Panama"},"fin":{"official":"Panaman tasavalta","common":"Panama"},"fra":{"official":"R\xe9publique du Panama","common":"Panama"},"hrv":{"official":"Republika Panama","common":"Panama"},"hun":{"official":"Panamai K\xf6zt\xe1rsas\xe1g","common":"Panama"},"ita":{"official":"Repubblica di Panama","common":"Panama"},"jpn":{"official":"\u30D1\u30CA\u30DE\u5171\u548C\u56FD","common":"\u30D1\u30CA\u30DE"},"kor":{"official":"\uD30C\uB098\uB9C8 \uACF5\uD654\uAD6D","common":"\uD30C\uB098\uB9C8"},"nld":{"official":"Republiek Panama","common":"Panama"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u067E\u0627\u0646\u0627\u0645\u0627","common":"\u067E\u0627\u0646\u0627\u0645\u0627"},"pol":{"official":"Republika Panamy","common":"Panama"},"por":{"official":"Rep\xfablica do Panam\xe1","common":"Panam\xe1"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u0430\u043D\u0430\u043C\u0430","common":"\u041F\u0430\u043D\u0430\u043C\u0430"},"slk":{"official":"Panamsk\xe1 republika","common":"Panama"},"spa":{"official":"Rep\xfablica de Panam\xe1","common":"Panam\xe1"},"srp":{"official":"Republika Panama","common":"Panama"},"swe":{"official":"Republiken Panama","common":"Panama"},"tur":{"official":"Panama Cumhuriyeti","common":"Panama"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0627\u0646\u0627\u0645\u0627","common":"\u067E\u0627\u0646\u0627\u0645\u0627"},"zho":{"official":"\u5DF4\u62FF\u9A6C\u5171\u548C\u56FD","common":"\u5DF4\u62FF\u9A6C"}},"latlng":[9,-80],"landlocked":false,"borders":["COL","CRI"],"area":75417,"flag":"\uD83C\uDDF5\uD83C\uDDE6","demonyms":{"eng":{"f":"Panamanian","m":"Panamanian"},"fra":{"f":"Panam\xe9enne","m":"Panam\xe9en"}}},{"name":{"common":"Pitcairn Islands","official":"Pitcairn Group of Islands","native":{"eng":{"official":"Pitcairn Group of Islands","common":"Pitcairn Islands"}}},"tld":[".pn"],"cca2":"PN","ccn3":"612","cca3":"PCN","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"NZD":{"name":"New Zealand dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["4"]},"capital":["Adamstown"],"altSpellings":["PN","Pitcairn","Pitcairn Henderson Ducie and Oeno Islands"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0628\u064A\u062A\u0643\u064A\u0631\u0646","common":"\u062C\u0632\u0631 \u0628\u064A\u062A\u0643\u064A\u0631\u0646"},"ces":{"official":"Pitcairnovy ostrovy","common":"Pitcairnovy ostrovy"},"deu":{"official":"Pitcairninseln","common":"Pitcairninseln"},"est":{"official":"Pitcairni, Hendersoni, Ducie ja Oeno saar","common":"Pitcairn"},"fin":{"official":"Pitcairn","common":"Pitcairn"},"fra":{"official":"Groupe d\'\xeeles Pitcairn","common":"\xceles Pitcairn"},"hrv":{"official":"Pitcairn skupine otoka","common":"Pitcairnovo oto\u010Dje"},"hun":{"official":"Pitcairn-szigetek","common":"Pitcairn-szigetek"},"ita":{"official":"Pitcairn gruppo di isole","common":"Isole Pitcairn"},"jpn":{"official":"\u30D4\u30C8\u30B1\u30A2\u30F3\u8AF8\u5CF6","common":"\u30D4\u30C8\u30B1\u30A2\u30F3\u8AF8\u5CF6"},"kor":{"official":"\uD54F\uCF00\uC5B8 \uC81C\uB3C4","common":"\uD54F\uCF00\uC5B8 \uC81C\uB3C4"},"nld":{"official":"Pitcairn groep eilanden","common":"Pitcairneilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u067E\u06CC\u062A\u200C\u06A9\u0631\u0646","common":"\u062C\u0632\u0627\u06CC\u0631 \u067E\u06CC\u062A\u200C\u06A9\u0631\u0646"},"pol":{"official":"Wyspy Pitcairn, Henderson, Ducie i Oeno","common":"Pitcairn"},"por":{"official":"Pitcairn grupo de ilhas","common":"Ilhas Pitcairn"},"rus":{"official":"\u041F\u0438\u0442\u043A\u044D\u0440\u043D \u0433\u0440\u0443\u043F\u043F\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432","common":"\u041E\u0441\u0442\u0440\u043E\u0432\u0430 \u041F\u0438\u0442\u043A\u044D\u0440\u043D"},"slk":{"official":"Pitcairnove ostrovy","common":"Pitcairnove ostrovy"},"spa":{"official":"Grupo de Islas Pitcairn","common":"Islas Pitcairn"},"srp":{"official":"Grupa Ostrva Pitkern","common":"Ostrva Pitkern"},"swe":{"official":"Pitcairn\xf6arna","common":"Pitcairn\xf6arna"},"tur":{"official":"Pitcairn, Henderson, Ducie ve Oeno Adalar\u0131","common":"Pitcairn Adalar\u0131"},"urd":{"official":"\u067E\u0679\u06A9\u06CC\u0631\u0646 \u062C\u0632\u0627\u0626\u0631","common":"\u062C\u0632\u0627\u0626\u0631 \u067E\u0679\u06A9\u06CC\u0631\u0646"},"zho":{"official":"\u76AE\u7279\u51EF\u6069\u7FA4\u5C9B","common":"\u76AE\u7279\u51EF\u6069\u7FA4\u5C9B"}},"latlng":[-25.06666666,-130.1],"landlocked":false,"borders":[],"area":47,"flag":"\uD83C\uDDF5\uD83C\uDDF3","demonyms":{"eng":{"f":"Pitcairn Islander","m":"Pitcairn Islander"},"fra":{"f":"Pitcairnaise","m":"Pitcairnais"}}},{"name":{"common":"Peru","official":"Republic of Peru","native":{"aym":{"official":"Piruw Suyu","common":"Piruw"},"que":{"official":"Piruw Ripuwlika","common":"Piruw"},"spa":{"official":"Rep\xfablica del Per\xfa","common":"Per\xfa"}}},"tld":[".pe"],"cca2":"PE","ccn3":"604","cca3":"PER","cioc":"PER","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"PEN":{"name":"Peruvian sol","symbol":"S/."}},"idd":{"root":"+5","suffixes":["1"]},"capital":["Lima"],"altSpellings":["PE","Republic of Peru","Rep\xfablica del Per\xfa"],"region":"Americas","subregion":"South America","languages":{"aym":"Aymara","que":"Quechua","spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u064A\u0631\u0648","common":"\u0628\u064A\u0631\u0648"},"ces":{"official":"Peru\xe1nsk\xe1 republika","common":"Peru"},"deu":{"official":"Republik Peru","common":"Peru"},"est":{"official":"Peruu Vabariik","common":"Peruu"},"fin":{"official":"Perun tasavalta","common":"Peru"},"fra":{"official":"R\xe9publique du P\xe9rou","common":"P\xe9rou"},"hrv":{"official":"Republika Peru","common":"Peru"},"hun":{"official":"Perui K\xf6zt\xe1rsas\xe1g","common":"Peru"},"ita":{"official":"Repubblica del Per\xf9","common":"Per\xf9"},"jpn":{"official":"\u30DA\u30EB\u30FC\u5171\u548C\u56FD","common":"\u30DA\u30EB\u30FC"},"kor":{"official":"\uD398\uB8E8 \uACF5\uD654\uAD6D","common":"\uD398\uB8E8"},"nld":{"official":"Republiek Peru","common":"Peru"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u067E\u0631\u0648","common":"\u067E\u0631\u0648"},"pol":{"official":"Republika Peru","common":"Peru"},"por":{"official":"Rep\xfablica do Peru","common":"Per\xfa"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u0435\u0440\u0443","common":"\u041F\u0435\u0440\u0443"},"slk":{"official":"Peru\xe1nska republika","common":"Peru"},"spa":{"official":"Rep\xfablica de Per\xfa","common":"Per\xfa"},"srp":{"official":"Republika Peru","common":"Peru"},"swe":{"official":"Republiken Peru","common":"Peru"},"tur":{"official":"Peru Cumhuriyeti","common":"Peru"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u06CC\u0631\u0648","common":"\u067E\u06CC\u0631\u0648"},"zho":{"official":"\u79D8\u9C81\u5171\u548C\u56FD","common":"\u79D8\u9C81"}},"latlng":[-10,-76],"landlocked":false,"borders":["BOL","BRA","CHL","COL","ECU"],"area":1285216,"flag":"\uD83C\uDDF5\uD83C\uDDEA","demonyms":{"eng":{"f":"Peruvian","m":"Peruvian"},"fra":{"f":"P\xe9ruvienne","m":"P\xe9ruvien"}}},{"name":{"common":"Philippines","official":"Republic of the Philippines","native":{"eng":{"official":"Republic of the Philippines","common":"Philippines"},"fil":{"official":"Republic of the Philippines","common":"Pilipinas"}}},"tld":[".ph"],"cca2":"PH","ccn3":"608","cca3":"PHL","cioc":"PHI","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"PHP":{"name":"Philippine peso","symbol":"\u20B1"}},"idd":{"root":"+6","suffixes":["3"]},"capital":["Manila"],"altSpellings":["PH","Republic of the Philippines","Rep\xfablika ng Pilipinas"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"eng":"English","fil":"Filipino"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0641\u0644\u0628\u064A\u0646","common":"\u0627\u0644\u0641\u0644\u0628\u064A\u0646"},"ces":{"official":"Filip\xednsk\xe1 republika","common":"Filip\xedny"},"deu":{"official":"Republik der Philippinen","common":"Philippinen"},"est":{"official":"Filipiini Vabariik","common":"Filipiinid"},"fin":{"official":"Filippiinien tasavalta","common":"Filippiinit"},"fra":{"official":"R\xe9publique des Philippines","common":"Philippines"},"hrv":{"official":"Republika Filipini","common":"Filipini"},"hun":{"official":"F\xfcl\xf6p-szigeteki K\xf6zt\xe1rsas\xe1g","common":"F\xfcl\xf6p-szigetek"},"ita":{"official":"Repubblica delle Filippine","common":"Filippine"},"jpn":{"official":"\u30D5\u30A3\u30EA\u30D4\u30F3\u5171\u548C\u56FD","common":"\u30D5\u30A3\u30EA\u30D4\u30F3"},"kor":{"official":"\uD544\uB9AC\uD540 \uACF5\uD654\uAD6D","common":"\uD544\uB9AC\uD540"},"nld":{"official":"Republiek der Filipijnen","common":"Filipijnen"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u06CC\u0644\u06CC\u067E\u06CC\u0646","common":"\u0641\u06CC\u0644\u06CC\u067E\u06CC\u0646"},"pol":{"official":"Republika Filipin","common":"Filipiny"},"por":{"official":"Rep\xfablica das Filipinas","common":"Filipinas"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B","common":"\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u044B"},"slk":{"official":"Filip\xednska republika","common":"Filip\xedny"},"spa":{"official":"Rep\xfablica de las Filipinas","common":"Filipinas"},"srp":{"official":"Republika Filipini","common":"Filipini"},"swe":{"official":"Republiken Filippinerna","common":"Filippinerna"},"tur":{"official":"Filipinler Cumhuriyeti","common":"Filipinler"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0641\u0644\u067E\u0627\u0626\u0646","common":"\u0641\u0644\u067E\u0627\u0626\u0646"},"zho":{"official":"\u83F2\u5F8B\u5BBE\u5171\u548C\u56FD","common":"\u83F2\u5F8B\u5BBE"}},"latlng":[13,122],"landlocked":false,"borders":[],"area":342353,"flag":"\uD83C\uDDF5\uD83C\uDDED","demonyms":{"eng":{"f":"Filipino","m":"Filipino"},"fra":{"f":"Philippine","m":"Philippin"}}},{"name":{"common":"Palau","official":"Republic of Palau","native":{"eng":{"official":"Republic of Palau","common":"Palau"},"pau":{"official":"Beluu er a Belau","common":"Belau"}}},"tld":[".pw"],"cca2":"PW","ccn3":"585","cca3":"PLW","cioc":"PLW","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["80"]},"capital":["Ngerulmud"],"altSpellings":["PW","Republic of Palau","Beluu er a Belau"],"region":"Oceania","subregion":"Micronesia","languages":{"eng":"English","pau":"Palauan"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0627\u0644\u0627\u0648","common":"\u0628\u0627\u0644\u0627\u0648"},"ces":{"official":"Republika Palau","common":"Palau"},"deu":{"official":"Republik Palau","common":"Palau"},"est":{"official":"Belau Vabariik","common":"Belau"},"fin":{"official":"Palaun tasavalta","common":"Palau"},"fra":{"official":"R\xe9publique des Palaos (Palau)","common":"Palaos (Palau)"},"hrv":{"official":"Republika Palau","common":"Palau"},"hun":{"official":"Palaui K\xf6zt\xe1rsas\xe1g","common":"Palau"},"ita":{"official":"Repubblica di Palau","common":"Palau"},"jpn":{"official":"\u30D1\u30E9\u30AA\u5171\u548C\u56FD","common":"\u30D1\u30E9\u30AA"},"kor":{"official":"\uD314\uB77C\uC6B0 \uACF5\uD654\uAD6D","common":"\uD314\uB77C\uC6B0"},"nld":{"official":"Republiek van Palau","common":"Palau"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u067E\u0627\u0644\u0627\u0626\u0648","common":"\u067E\u0627\u0644\u0627\u0626\u0648"},"pol":{"official":"Republika Palau","common":"Palau"},"por":{"official":"Rep\xfablica de Palau","common":"Palau"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u0430\u043B\u0430\u0443","common":"\u041F\u0430\u043B\u0430\u0443"},"slk":{"official":"Palausk\xe1 republika","common":"Palau"},"spa":{"official":"Rep\xfablica de Palau","common":"Palau"},"srp":{"official":"Republika Palau","common":"Palau"},"swe":{"official":"Republiken Palau","common":"Palau"},"tur":{"official":"Palau Cumhuriyeti","common":"Palau"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0644\u0627\u0624","common":"\u067E\u0644\u0627\u0624"},"zho":{"official":"\u5E15\u52B3\u5171\u548C\u56FD","common":"\u5E15\u52B3"}},"latlng":[7.5,134.5],"landlocked":false,"borders":[],"area":459,"flag":"\uD83C\uDDF5\uD83C\uDDFC","demonyms":{"eng":{"f":"Palauan","m":"Palauan"},"fra":{"f":"Paluane","m":"Paluan"}}},{"name":{"common":"Papua New Guinea","official":"Independent State of Papua New Guinea","native":{"eng":{"official":"Independent State of Papua New Guinea","common":"Papua New Guinea"},"hmo":{"official":"Independen Stet bilong Papua Niugini","common":"Papua Niu Gini"},"tpi":{"official":"Independen Stet bilong Papua Niugini","common":"Papua Niugini"}}},"tld":[".pg"],"cca2":"PG","ccn3":"598","cca3":"PNG","cioc":"PNG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"PGK":{"name":"Papua New Guinean kina","symbol":"K"}},"idd":{"root":"+6","suffixes":["75"]},"capital":["Port Moresby"],"altSpellings":["PG","Independent State of Papua New Guinea","Independen Stet bilong Papua Niugini"],"region":"Oceania","subregion":"Melanesia","languages":{"eng":"English","hmo":"Hiri Motu","tpi":"Tok Pisin"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0628\u0627\u0628\u0648\u0627 \u063A\u064A\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629","common":"\u0628\u0627\u0628\u0648\u0627 \u063A\u064A\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"},"ces":{"official":"Nez\xe1visl\xfd st\xe1t Papua Nov\xe1 Guinea","common":"Papua-Nov\xe1 Guinea"},"deu":{"official":"Unabh\xe4ngiger Staat Papua-Neuguinea","common":"Papua-Neuguinea"},"est":{"official":"Paapua Uus-Guinea Iseseisvusriik","common":"Paapua Uus-Guinea"},"fin":{"official":"Papua-Uuden-Guinean Itsen\xe4inen valtio","common":"Papua-Uusi-Guinea"},"fra":{"official":"\xc9tat ind\xe9pendant de Papouasie-Nouvelle-Guin\xe9e","common":"Papouasie-Nouvelle-Guin\xe9e"},"hrv":{"official":"Nezavisna Dr\u017Eava Papui Novoj Gvineji","common":"Papua Nova Gvineja"},"hun":{"official":"P\xe1pua \xdaj-Guinea F\xfcggetlen \xc1llam","common":"P\xe1pua \xdaj-Guinea"},"ita":{"official":"Stato indipendente di Papua Nuova Guinea","common":"Papua Nuova Guinea"},"jpn":{"official":"\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2\u72EC\u7ACB\u56FD","common":"\u30D1\u30D7\u30A2\u30CB\u30E5\u30FC\u30AE\u30CB\u30A2"},"kor":{"official":"\uD30C\uD478\uC544\uB274\uAE30\uB2C8 \uB3C5\uB9BD\uAD6D","common":"\uD30C\uD478\uC544\uB274\uAE30\uB2C8"},"nld":{"official":"Onafhankelijke Staat Papoea -Nieuw-Guinea","common":"Papoea-Nieuw-Guinea"},"per":{"official":"\u0645\u0645\u0644\u06A9\u062A \u0645\u0633\u062A\u0642\u0644 \u067E\u0627\u067E\u0648\u0622 \u06AF\u06CC\u0646\u0647\u0654 \u0646\u0648","common":"\u067E\u0627\u067E\u0648\u0622 \u06AF\u06CC\u0646\u0647 \u0646\u0648"},"pol":{"official":"Niezale\u017Cne Pa\u0144stwo Papui-Nowej Gwinei","common":"Papua-Nowa Gwinea"},"por":{"official":"Estado Independente da Papua Nova Guin\xe9","common":"Papua Nova Guin\xe9"},"rus":{"official":"\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0435 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u041F\u0430\u043F\u0443\u0430-\u041D\u043E\u0432\u043E\u0439 \u0413\u0432\u0438\u043D\u0435\u0438","common":"\u041F\u0430\u043F\u0443\u0430 \u2014 \u041D\u043E\u0432\u0430\u044F \u0413\u0432\u0438\u043D\u0435\u044F"},"slk":{"official":"Nez\xe1visl\xfd \u0161t\xe1t Papua-Nov\xe1 Guinea","common":"Papua-Nov\xe1 Guinea"},"spa":{"official":"Estado Independiente de Pap\xfaa Nueva Guinea","common":"Pap\xfaa Nueva Guinea"},"srp":{"official":"Nezavisna Dr\u017Eava Papua Nova Gvineja","common":"Papua Nova Gvineja"},"swe":{"official":"Den oberoende staten Papua Nya Guinea","common":"Papua Nya Guinea"},"tur":{"official":"Papua Yeni Gine Ba\u011F\u0131ms\u0131z Devleti","common":"Papua Yeni Gine"},"urd":{"official":"\u0622\u0632\u0627\u062F \u0631\u06CC\u0627\u0633\u062A\u0650 \u067E\u0627\u067E\u0648\u0627 \u0646\u06CC\u0648 \u06AF\u0646\u06CC","common":"\u067E\u0627\u067E\u0648\u0627 \u0646\u06CC\u0648 \u06AF\u0646\u06CC"},"zho":{"official":"\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A","common":"\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A"}},"latlng":[-6,147],"landlocked":false,"borders":["IDN"],"area":462840,"flag":"\uD83C\uDDF5\uD83C\uDDEC","demonyms":{"eng":{"f":"Papua New Guinean","m":"Papua New Guinean"},"fra":{"f":"Papouasienne","m":"Papouasien"}}},{"name":{"common":"Poland","official":"Republic of Poland","native":{"pol":{"official":"Rzeczpospolita Polska","common":"Polska"}}},"tld":[".pl"],"cca2":"PL","ccn3":"616","cca3":"POL","cioc":"POL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"PLN":{"name":"Polish z\u0142oty","symbol":"z\u0142"}},"idd":{"root":"+4","suffixes":["8"]},"capital":["Warsaw"],"altSpellings":["PL","Republic of Poland","Rzeczpospolita Polska"],"region":"Europe","subregion":"Central Europe","languages":{"pol":"Polish"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0628\u0648\u0644\u0646\u062F\u064A\u0629","common":"\u0628\u0648\u0644\u0646\u062F\u0627"},"ces":{"official":"Polsk\xe1 republika","common":"Polsko"},"deu":{"official":"Republik Polen","common":"Polen"},"est":{"official":"Poola Vabariik","common":"Poola"},"fin":{"official":"Puolan tasavalta","common":"Puola"},"fra":{"official":"R\xe9publique de Pologne","common":"Pologne"},"hrv":{"official":"Republika Poljska","common":"Poljska"},"hun":{"official":"Lengyel K\xf6zt\xe1rsas\xe1g","common":"Lengyelorsz\xe1g"},"ita":{"official":"Repubblica di Polonia","common":"Polonia"},"jpn":{"official":"\u30DD\u30FC\u30E9\u30F3\u30C9\u5171\u548C\u56FD","common":"\u30DD\u30FC\u30E9\u30F3\u30C9"},"kor":{"official":"\uD3F4\uB780\uB4DC \uACF5\uD654\uAD6D","common":"\uD3F4\uB780\uB4DC"},"nld":{"official":"Republiek Polen","common":"Polen"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0644\u0647\u0633\u062A\u0627\u0646","common":"\u0644\u0647\u0633\u062A\u0627\u0646"},"pol":{"official":"Rzeczpospolita Polska","common":"Polska"},"por":{"official":"Rep\xfablica da Pol\xf3nia","common":"Pol\xf3nia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u043E\u043B\u044C\u0448\u0430","common":"\u041F\u043E\u043B\u044C\u0448\u0430"},"slk":{"official":"Po\u013Esk\xe1 republika","common":"Po\u013Esko"},"spa":{"official":"Rep\xfablica de Polonia","common":"Polonia"},"srp":{"official":"Republika Poljska","common":"Poljska"},"swe":{"official":"Republiken Polen","common":"Polen"},"tur":{"official":"Polonya Cumhuriyeti","common":"Polonya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0648\u0644\u06CC\u0646\u0688","common":"\u067E\u0648\u0644\u06CC\u0646\u0688"},"zho":{"official":"\u6CE2\u5170\u5171\u548C\u56FD","common":"\u6CE2\u5170"}},"latlng":[52,20],"landlocked":false,"borders":["BLR","CZE","DEU","LTU","RUS","SVK","UKR"],"area":312679,"flag":"\uD83C\uDDF5\uD83C\uDDF1","demonyms":{"eng":{"f":"Polish","m":"Polish"},"fra":{"f":"Polonaise","m":"Polonais"}}},{"name":{"common":"Puerto Rico","official":"Commonwealth of Puerto Rico","native":{"eng":{"official":"Commonwealth of Puerto Rico","common":"Puerto Rico"},"spa":{"official":"Estado Libre Asociado de Puerto Rico","common":"Puerto Rico"}}},"tld":[".pr"],"cca2":"PR","ccn3":"630","cca3":"PRI","cioc":"PUR","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["787","939"]},"capital":["San Juan"],"altSpellings":["PR","Commonwealth of Puerto Rico","Estado Libre Asociado de Puerto Rico"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English","spa":"Spanish"},"translations":{"ara":{"official":"\u0643\u0648\u0645\u0646\u0648\u0644\u062B \u0628\u0648\u064A\u0631\u062A\u0648\u0631\u064A\u0643\u0648","common":"\u0628\u0648\u064A\u0631\u062A\u0648\u0631\u064A\u0643\u0648"},"ces":{"official":"Portoriko","common":"Portoriko"},"deu":{"official":"Freistaat Puerto Rico","common":"Puerto Rico"},"est":{"official":"Puerto Rico \xdchendus","common":"Puerto Rico"},"fin":{"official":"Puerto Rico","common":"Puerto Rico"},"fra":{"official":"Porto Rico","common":"Porto Rico"},"hrv":{"official":"Zajednica Puerto Rico","common":"Portoriko"},"hun":{"official":"Puerto Rico","common":"Puerto Rico"},"ita":{"official":"Commonwealth di Porto Rico","common":"Porto Rico"},"jpn":{"official":"\u30D7\u30A8\u30EB\u30C8\u30EA\u30B3","common":"\u30D7\u30A8\u30EB\u30C8\u30EA\u30B3"},"kor":{"official":"\uD478\uC5D0\uB974\uD1A0\uB9AC\uCF54","common":"\uD478\uC5D0\uB974\uD1A0\uB9AC\uCF54"},"nld":{"official":"Gemenebest van Puerto Rico","common":"Puerto Rico"},"per":{"official":"\u0642\u0644\u0645\u0631\u0648 \u0647\u0645\u0633\u0648\u062F \u067E\u0648\u0631\u062A\u0648\u0631\u06CC\u06A9\u0648","common":"\u067E\u0648\u0631\u062A\u0648\u0631\u06CC\u06A9\u0648"},"pol":{"official":"Wolne Stowarzyszone Pa\u0144stwo Portoryko","common":"Portoryko"},"por":{"official":"Commonwealth of Puerto Rico","common":"Porto Rico"},"rus":{"official":"\u0421\u043E\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u043E \u041F\u0443\u044D\u0440\u0442\u043E-\u0420\u0438\u043A\u043E","common":"\u041F\u0443\u044D\u0440\u0442\u043E-\u0420\u0438\u043A\u043E"},"slk":{"official":"Portorick\xe9 spolo\u010Denstvo","common":"Portoriko"},"spa":{"official":"Asociado de Puerto Rico","common":"Puerto Rico"},"srp":{"official":"Komonvelt Portoriko","common":"Portoriko"},"swe":{"official":"Puerto Rico","common":"Puerto Rico"},"tur":{"official":"Porto Riko Toplulu\u011Fu","common":"Porto Riko"},"urd":{"official":" \u062F\u0648\u0644\u062A\u0650 \u0645\u0634\u062A\u0631\u06A9\u06C1 \u067E\u0648\u0631\u0679\u0648 \u0631\u06CC\u06A9\u0648","common":"\u067E\u0648\u0631\u0679\u0648 \u0631\u06CC\u06A9\u0648"},"zho":{"official":"\u6CE2\u591A\u9ECE\u5404\u8054\u90A6","common":"\u6CE2\u591A\u9ECE\u5404"}},"latlng":[18.25,-66.5],"landlocked":false,"borders":[],"area":8870,"flag":"\uD83C\uDDF5\uD83C\uDDF7","demonyms":{"eng":{"f":"Puerto Rican","m":"Puerto Rican"},"fra":{"f":"Portoricaine","m":"Portoricain"}}},{"name":{"common":"North Korea","official":"Democratic People\'s Republic of Korea","native":{"kor":{"official":"\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D","common":"\uC870\uC120"}}},"tld":[".kp"],"cca2":"KP","ccn3":"408","cca3":"PRK","cioc":"PRK","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"KPW":{"name":"North Korean won","symbol":"\u20A9"}},"idd":{"root":"+8","suffixes":["50"]},"capital":["Pyongyang"],"altSpellings":["KP","Democratic People\'s Republic of Korea","DPRK","\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D","Chos\u014Fn Minjuju\u016Di Inmin Konghwaguk","Korea, Democratic People\'s Republic of","\uBD81\uD55C","\uBD81\uC870\uC120"],"region":"Asia","subregion":"Eastern Asia","languages":{"kor":"Korean"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629 \u0627\u0644\u0634\u0639\u0628\u064A\u0629","common":"\u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629"},"ces":{"official":"Korejsk\xe1 lidov\u011B demokratick\xe1 republika","common":"Severn\xed Korea"},"deu":{"official":"Demokratische Volksrepublik Korea","common":"Nordkorea"},"est":{"official":"Korea Rahvademokraatlik Vabariik","common":"P\xf5hja-Korea"},"fin":{"official":"Korean demokraattinen kansantasavalta","common":"Pohjois-Korea"},"fra":{"official":"R\xe9publique populaire d\xe9mocratique de Cor\xe9e","common":"Cor\xe9e du Nord"},"hrv":{"official":"Demokratska Narodna Republika Koreja","common":"Sjeverna Koreja"},"hun":{"official":"Koreai N\xe9pi Demokratikus K\xf6zt\xe1rsas\xe1g","common":"\xc9szak-Korea"},"ita":{"official":"Repubblica democratica popolare di Corea","common":"Corea del Nord"},"jpn":{"official":"\u5317\u671D\u9BAE","common":"\u5317\u671D\u9BAE"},"kor":{"official":"\uC870\uC120\uBBFC\uC8FC\uC8FC\uC758\uC778\uBBFC\uACF5\uD654\uAD6D","common":"\uC870\uC120"},"nld":{"official":"Democratische Volksrepubliek Korea","common":"Noord-Korea"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u062E\u0644\u0642 \u06A9\u0631\u0647","common":"\u06A9\u064F\u0631\u0647 \u0634\u0645\u0627\u0644\u06CC"},"pol":{"official":"Korea\u0144ska Republika Ludowo-Demokratyczna","common":"Korea P\xf3\u0142nocna"},"por":{"official":"Rep\xfablica Popular Democr\xe1tica da Coreia","common":"Coreia do Norte"},"rus":{"official":"\u041A\u043E\u0440\u0435\u0439\u0441\u043A\u0430\u044F \u041D\u0430\u0440\u043E\u0434\u043D\u043E-\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u0440\u0435\u044F","common":"\u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F"},"slk":{"official":"K\xf3rejsk\xe1 \u013Eudovodemokratick\xe1 republika","common":"K\xf3rejsk\xe1 \u013Eudovodemokratick\xe1 republika (K\u013DR, Severn\xe1 K\xf3rea)"},"spa":{"official":"Rep\xfablica Popular Democr\xe1tica de Corea","common":"Corea del Norte"},"srp":{"official":"Demokratska Narodna Republika Koreja","common":"Severna Koreja"},"swe":{"official":"Demokratiska Folkrepubliken Korea","common":"Nordkorea"},"tur":{"official":"Kore Demokratik Halk Cumhuriyeti","common":"Kuzey Kore"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC \u0639\u0648\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06A9\u0648\u0631\u06CC\u0627","common":"\u0634\u0645\u0627\u0644\u06CC \u06A9\u0648\u0631\u06CC\u0627"},"zho":{"official":"\u671D\u9C9C\u4EBA\u6C11\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u671D\u9C9C"}},"latlng":[40,127],"landlocked":false,"borders":["CHN","KOR","RUS"],"area":120538,"flag":"\uD83C\uDDF0\uD83C\uDDF5","demonyms":{"eng":{"f":"North Korean","m":"North Korean"},"fra":{"f":"Nord-cor\xe9enne","m":"Nord-cor\xe9en"}}},{"name":{"common":"Portugal","official":"Portuguese Republic","native":{"por":{"official":"Rep\xfablica portugu\xeas","common":"Portugal"}}},"tld":[".pt"],"cca2":"PT","ccn3":"620","cca3":"PRT","cioc":"POR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["51"]},"capital":["Lisbon"],"altSpellings":["PT","Portuguesa","Portuguese Republic","Rep\xfablica Portuguesa"],"region":"Europe","subregion":"Southern Europe","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0628\u0631\u062A\u063A\u0627\u0644\u064A\u0629","common":"\u0627\u0644\u0628\u0631\u062A\u063A\u0627\u0644"},"ces":{"official":"Portugalsk\xe1 republika","common":"Portugalsko"},"deu":{"official":"Portugiesische Republik","common":"Portugal"},"est":{"official":"Portugali Vabariik","common":"Portugal"},"fin":{"official":"Portugalin tasavalta","common":"Portugali"},"fra":{"official":"R\xe9publique portugaise","common":"Portugal"},"hrv":{"official":"Portugalska Republika","common":"Portugal"},"hun":{"official":"Portug\xe1l K\xf6zt\xe1rsas\xe1g","common":"Portug\xe1lia"},"ita":{"official":"Repubblica portoghese","common":"Portogallo"},"jpn":{"official":"\u30DD\u30EB\u30C8\u30AC\u30EB\u5171\u548C\u56FD","common":"\u30DD\u30EB\u30C8\u30AC\u30EB"},"kor":{"official":"\uD3EC\uB974\uD22C\uAC08 \uACF5\uD654\uAD6D","common":"\uD3EC\uB974\uD22C\uAC08"},"nld":{"official":"Portugese Republiek","common":"Portugal"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u067E\u0631\u062A\u063A\u0627\u0644","common":"\u067E\u0631\u062A\u063A\u0627\u0644"},"pol":{"official":"Republika Portugalska","common":"Portugalia"},"por":{"official":"Rep\xfablica portugu\xeas","common":"Portugal"},"rus":{"official":"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u044C\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F"},"slk":{"official":"Portugalsk\xe1 republika","common":"Portugalsko"},"spa":{"official":"Rep\xfablica Portuguesa","common":"Portugal"},"srp":{"official":"Republika Portugal","common":"Portugal"},"swe":{"official":"Republiken Portugal","common":"Portugal"},"tur":{"official":"Portekiz Cumhuriyeti","common":"Portekiz"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0631\u062A\u06AF\u0627\u0644","common":"\u067E\u0631\u062A\u06AF\u0627\u0644"},"zho":{"official":"\u8461\u8404\u7259\u5171\u548C\u56FD","common":"\u8461\u8404\u7259"}},"latlng":[39.5,-8],"landlocked":false,"borders":["ESP"],"area":92090,"flag":"\uD83C\uDDF5\uD83C\uDDF9","demonyms":{"eng":{"f":"Portuguese","m":"Portuguese"},"fra":{"f":"Portugaise","m":"Portugais"}}},{"name":{"common":"Paraguay","official":"Republic of Paraguay","native":{"grn":{"official":"Tet\xe3 Paragu\xe1i","common":"Paragu\xe1i"},"spa":{"official":"Rep\xfablica de Paraguay","common":"Paraguay"}}},"tld":[".py"],"cca2":"PY","ccn3":"600","cca3":"PRY","cioc":"PAR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"PYG":{"name":"Paraguayan guaran\xed","symbol":"\u20B2"}},"idd":{"root":"+5","suffixes":["95"]},"capital":["Asunci\xf3n"],"altSpellings":["PY","Republic of Paraguay","Rep\xfablica del Paraguay","Tet\xe3 Paragu\xe1i"],"region":"Americas","subregion":"South America","languages":{"grn":"Guaran\xed","spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A","common":"\u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A"},"ces":{"official":"Paraguaysk\xe1 republika","common":"Paraguay"},"deu":{"official":"Republik Paraguay","common":"Paraguay"},"est":{"official":"Paraguay Vabariik","common":"Paraguay"},"fin":{"official":"Paraguayn tasavalta","common":"Paraguay"},"fra":{"official":"R\xe9publique du Paraguay","common":"Paraguay"},"hrv":{"official":"Republika Paragvaj","common":"Paragvaj"},"hun":{"official":"Paraguayi K\xf6zt\xe1rsas\xe1g","common":"Paraguay"},"ita":{"official":"Repubblica del Paraguay","common":"Paraguay"},"jpn":{"official":"\u30D1\u30E9\u30B0\u30A2\u30A4\u5171\u548C\u56FD","common":"\u30D1\u30E9\u30B0\u30A2\u30A4"},"kor":{"official":"\uD30C\uB77C\uACFC\uC774 \uACF5\uD654\uAD6D","common":"\uD30C\uB77C\uACFC\uC774"},"nld":{"official":"Republiek Paraguay","common":"Paraguay"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647","common":"\u067E\u0627\u0631\u0627\u06AF\u0648\u0626\u0647"},"pol":{"official":"Republika Paragwaju","common":"Paragwaj"},"por":{"official":"Rep\xfablica do Paraguai","common":"Paraguai"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439","common":"\u041F\u0430\u0440\u0430\u0433\u0432\u0430\u0439"},"slk":{"official":"Paraguajsk\xe1 republika","common":"Paraguaj"},"spa":{"official":"Rep\xfablica de Paraguay","common":"Paraguay"},"srp":{"official":"Republika Paragvaj","common":"Paragvaj"},"swe":{"official":"Republiken Paraguay","common":"Paraguay"},"tur":{"official":"Paraguay Cumhuriyeti","common":"Paraguay"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u06CC\u0631\u0627\u06AF\u0648\u0626\u06D2","common":"\u067E\u06CC\u0631\u0627\u06AF\u0648\u0626\u06D2"},"zho":{"official":"\u5DF4\u62C9\u572D\u5171\u548C\u56FD","common":"\u5DF4\u62C9\u572D"}},"latlng":[-23,-58],"landlocked":true,"borders":["ARG","BOL","BRA"],"area":406752,"flag":"\uD83C\uDDF5\uD83C\uDDFE","demonyms":{"eng":{"f":"Paraguayan","m":"Paraguayan"},"fra":{"f":"Paraguayenne","m":"Paraguayen"}}},{"name":{"common":"Palestine","official":"State of Palestine","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0641\u0644\u0633\u0637\u064A\u0646","common":"\u0641\u0644\u0633\u0637\u064A\u0646"}}},"tld":[".ps","\u0641\u0644\u0633\u0637\u064A\u0646."],"cca2":"PS","ccn3":"275","cca3":"PSE","cioc":"PLE","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EGP":{"name":"Egyptian pound","symbol":"E\xa3"},"ILS":{"name":"Israeli new shekel","symbol":"\u20AA"},"JOD":{"name":"Jordanian dinar","symbol":"JD"}},"idd":{"root":"+9","suffixes":["70"]},"capital":["Ramallah"],"altSpellings":["PS","Palestine, State of","State of Palestine","Dawlat Filas\u1E6Din"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0641\u0644\u0633\u0637\u064A\u0646","common":"\u0641\u0644\u0633\u0637\u064A\u0646"},"ces":{"official":"St\xe1t Palestina","common":"Palestina"},"deu":{"official":"Staat Pal\xe4stina","common":"Pal\xe4stina"},"est":{"official":"Palestiina Riik","common":"Palestiina"},"fin":{"official":"Palestiinan valtio","common":"Palestiina"},"fra":{"official":"\xc9tat de Palestine","common":"Palestine"},"hrv":{"official":"State of Palestine","common":"Palestina"},"hun":{"official":"Palesztin Auton\xf3mia","common":"Palesztina"},"ita":{"official":"Stato di Palestina","common":"Palestina"},"jpn":{"official":"\u30D1\u30EC\u30B9\u30C1\u30CA","common":"\u30D1\u30EC\u30B9\u30C1\u30CA"},"kor":{"official":"\uD314\uB808\uC2A4\uD0C0\uC778\uAD6D","common":"\uD314\uB808\uC2A4\uD0C0\uC778"},"nld":{"official":"Staat Palestina","common":"Palestijnse gebieden"},"per":{"official":"\u062F\u0648\u0644\u062A \u0641\u0644\u0633\u0637\u06CC\u0646","common":"\u0641\u0644\u0633\u0637\u06CC\u0646"},"pol":{"official":"Pa\u0144stwo Palestyna","common":"Palestyna"},"por":{"official":"Estado da Palestina","common":"Palestina"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u041F\u0430\u043B\u0435\u0441\u0442\u0438\u043D\u0430","common":"\u041F\u0430\u043B\u0435\u0441\u0442\u0438\u043D\u0430"},"slk":{"official":"Palest\xednsky \u0161t\xe1t","common":"Palest\xedna"},"spa":{"official":"Estado de Palestina","common":"Palestina"},"srp":{"official":"Dr\u017Eava Palestina","common":"Palestina"},"swe":{"official":"Palestina","common":"Palestina"},"tur":{"official":"Filistin Devleti","common":"Filistin"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0641\u0644\u0633\u0637\u06CC\u0646","common":"\u0641\u0644\u0633\u0637\u06CC\u0646"},"zho":{"official":"\u5DF4\u52D2\u65AF\u5766\u56FD","common":"\u5DF4\u52D2\u65AF\u5766"}},"latlng":[31.9,35.2],"landlocked":false,"borders":["ISR","EGY","JOR"],"area":6220,"flag":"\uD83C\uDDF5\uD83C\uDDF8","demonyms":{"eng":{"f":"Palestinian","m":"Palestinian"},"fra":{"f":"Palestinienne","m":"Palestinien"}}},{"name":{"common":"French Polynesia","official":"French Polynesia","native":{"fra":{"official":"Polyn\xe9sie fran\xe7aise","common":"Polyn\xe9sie fran\xe7aise"}}},"tld":[".pf"],"cca2":"PF","ccn3":"258","cca3":"PYF","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"XPF":{"name":"CFP franc","symbol":"\u20A3"}},"idd":{"root":"+6","suffixes":["89"]},"capital":["Papeet\u0113"],"altSpellings":["PF","Polyn\xe9sie fran\xe7aise","French Polynesia","P\u014Dr\u012Bnetia Far\u0101ni"],"region":"Oceania","subregion":"Polynesia","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0628\u0648\u0644\u064A\u0646\u0632\u064A\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629","common":"\u0628\u0648\u0644\u064A\u0646\u0632\u064A\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629"},"ces":{"official":"Francouzsk\xe1 Polyn\xe9sie","common":"Francouzsk\xe1 Polyn\xe9sie"},"deu":{"official":"Franz\xf6sisch-Polynesien","common":"Franz\xf6sisch-Polynesien"},"est":{"official":"Prantsuse Pol\xfcneesia","common":"Prantsuse Pol\xfcneesia"},"fin":{"official":"Ranskan Polynesia","common":"Ranskan Polynesia"},"fra":{"official":"Polyn\xe9sie fran\xe7aise","common":"Polyn\xe9sie fran\xe7aise"},"hrv":{"official":"Francuska Polinezija","common":"Francuska Polinezija"},"hun":{"official":"Francia Polin\xe9zia","common":"Francia Polin\xe9zia"},"ita":{"official":"Polinesia Francese","common":"Polinesia Francese"},"jpn":{"official":"\u30D5\u30E9\u30F3\u30B9\u9818\u30DD\u30EA\u30CD\u30B7\u30A2","common":"\u30D5\u30E9\u30F3\u30B9\u9818\u30DD\u30EA\u30CD\u30B7\u30A2"},"kor":{"official":"\uD504\uB791\uC2A4\uB839 \uD3F4\uB9AC\uB124\uC2DC\uC544","common":"\uD504\uB791\uC2A4\uB839 \uD3F4\uB9AC\uB124\uC2DC\uC544"},"nld":{"official":"Frans-Polynesi\xeb","common":"Frans-Polynesi\xeb"},"per":{"official":"\u067E\u064F\u0644\u06CC\u200C\u0646\u0650\u0632\u06CC \u0641\u0631\u0627\u0646\u0633\u0647","common":"\u067E\u064F\u0644\u06CC\u200C\u0646\u0650\u0632\u06CC \u0641\u0631\u0627\u0646\u0633\u0647"},"pol":{"official":"Polinezja Francuska","common":"Polinezja Francuska"},"por":{"official":"Polin\xe9sia Francesa","common":"Polin\xe9sia Francesa"},"rus":{"official":"\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u041F\u043E\u043B\u0438\u043D\u0435\u0437\u0438\u044F","common":"\u0424\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0430\u044F \u041F\u043E\u043B\u0438\u043D\u0435\u0437\u0438\u044F"},"slk":{"official":"Franc\xfazska Polyn\xe9zia","common":"Franc\xfazska Polyn\xe9zia"},"spa":{"official":"Polinesia franc\xe9s","common":"Polinesia Francesa"},"srp":{"official":"Francuska Polinezija","common":"Francuska Polinezija"},"swe":{"official":"Franska Polynesien","common":"Franska Polynesien"},"tur":{"official":"Frans\u0131z Polinezyas\u0131","common":"Frans\u0131z Polinezyas\u0131"},"urd":{"official":"\u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC \u067E\u0648\u0644\u06CC\u0646\u06CC\u0634\u06CC\u0627","common":"\u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06CC \u067E\u0648\u0644\u06CC\u0646\u06CC\u0634\u06CC\u0627"},"zho":{"official":"\u6CD5\u5C5E\u6CE2\u5229\u5C3C\u897F\u4E9A","common":"\u6CD5\u5C5E\u6CE2\u5229\u5C3C\u897F\u4E9A"}},"latlng":[-15,-140],"landlocked":false,"borders":[],"area":4167,"flag":"\uD83C\uDDF5\uD83C\uDDEB","demonyms":{"eng":{"f":"French Polynesian","m":"French Polynesian"},"fra":{"f":"Polyn\xe9sienne","m":"Polyn\xe9sien"}}},{"name":{"common":"Qatar","official":"State of Qatar","native":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0642\u0637\u0631","common":"\u0642\u0637\u0631"}}},"tld":[".qa","\u0642\u0637\u0631."],"cca2":"QA","ccn3":"634","cca3":"QAT","cioc":"QAT","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"QAR":{"name":"Qatari riyal","symbol":"\u0631.\u0642"}},"idd":{"root":"+9","suffixes":["74"]},"capital":["Doha"],"altSpellings":["QA","State of Qatar","Dawlat Qa\u1E6Dar"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0642\u0637\u0631","common":"\u0642\u0637\u0631"},"ces":{"official":"St\xe1t Katar","common":"Katar"},"deu":{"official":"Staat Katar","common":"Katar"},"est":{"official":"Katari Riik","common":"Katar"},"fin":{"official":"Qatarin valtio","common":"Qatar"},"fra":{"official":"\xc9tat du Qatar","common":"Qatar"},"hrv":{"official":"Dr\u017Eava Katar","common":"Katar"},"hun":{"official":"Katari \xc1llam","common":"Katar"},"ita":{"official":"Stato del Qatar","common":"Qatar"},"jpn":{"official":"\u30AB\u30BF\u30FC\u30EB\u56FD","common":"\u30AB\u30BF\u30FC\u30EB"},"kor":{"official":"\uCE74\uD0C0\uB974\uAD6D","common":"\uCE74\uD0C0\uB974"},"nld":{"official":"Staat Qatar","common":"Qatar"},"per":{"official":"\u062F\u0648\u0644\u062A \u0642\u0637\u0631","common":"\u0642\u0637\u0631"},"pol":{"official":"Pa\u0144stwo Katar","common":"Katar"},"por":{"official":"Estado do Qatar","common":"Catar"},"rus":{"official":"\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u041A\u0430\u0442\u0430\u0440","common":"\u041A\u0430\u0442\u0430\u0440"},"slk":{"official":"Katarsk\xfd \u0161t\xe1t","common":"Katar"},"spa":{"official":"Estado de Qatar","common":"Catar"},"srp":{"official":"Dr\u017Eava Katar","common":"Katar"},"swe":{"official":"Staten Qatar","common":"Qatar"},"tur":{"official":"Katar Devleti","common":"Katar"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u0650 \u0642\u0637\u0631","common":"\u0642\u0637\u0631"},"zho":{"official":"\u5361\u5854\u5C14\u56FD","common":"\u5361\u5854\u5C14"}},"latlng":[25.5,51.25],"landlocked":false,"borders":["SAU"],"area":11586,"flag":"\uD83C\uDDF6\uD83C\uDDE6","demonyms":{"eng":{"f":"Qatari","m":"Qatari"},"fra":{"f":"Qatarienne","m":"Qatarien"}}},{"name":{"common":"R\xe9union","official":"R\xe9union Island","native":{"fra":{"official":"Ile de la R\xe9union","common":"La R\xe9union"}}},"tld":[".re"],"cca2":"RE","ccn3":"638","cca3":"REU","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+2","suffixes":["62"]},"capital":["Saint-Denis"],"altSpellings":["RE","Reunion"],"region":"Africa","subregion":"Eastern Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0632\u064A\u0631\u0629 \u0644\u0627 \u0631\u064A\u0648\u0646\u064A\u0648\u0646","common":"\u0644\u0627 \u0631\u064A\u0648\u0646\u064A\u0648\u0646"},"ces":{"official":"R\xe9union","common":"R\xe9union"},"deu":{"official":"R\xe9union","common":"R\xe9union"},"est":{"official":"R\xe9unioni departemang","common":"R\xe9union"},"fin":{"official":"R\xe9union","common":"R\xe9union"},"fra":{"official":"Ile de la R\xe9union","common":"R\xe9union"},"hrv":{"official":"R\xe9union Island","common":"R\xe9union"},"hun":{"official":"R\xe9union","common":"R\xe9union"},"ita":{"official":"R\xe9union","common":"Riunione"},"jpn":{"official":"\u30EC\u30E6\u30CB\u30AA\u30F3","common":"\u30EC\u30E6\u30CB\u30AA\u30F3"},"kor":{"official":"\uB808\uC704\uB2C8\uC639","common":"\uB808\uC704\uB2C8\uC639"},"nld":{"official":"R\xe9union","common":"R\xe9union"},"per":{"official":"\u0631\u0626\u0648\u0646\u06CC\u0648\u0646","common":"\u0631\u0626\u0648\u0646\u06CC\u0648\u0646"},"pol":{"official":"Reunion","common":"Reunion"},"por":{"official":"Ilha da Reuni\xe3o","common":"Reuni\xe3o"},"rus":{"official":"\u0420\u0435\u044E\u043D\u044C\u043E\u043D","common":"\u0420\u0435\u044E\u043D\u044C\u043E\u043D"},"slk":{"official":"R\xe9unionsk\xfd z\xe1morsk\xfd departm\xe1n","common":"R\xe9union"},"spa":{"official":"Isla de la Reuni\xf3n","common":"Reuni\xf3n"},"srp":{"official":"Departman Reinion","common":"Reinion"},"swe":{"official":"R\xe9union","common":"R\xe9union"},"tur":{"official":"R\xe9union","common":"R\xe9union"},"urd":{"official":"\u0631\u06D2 \u06CC\u0648\u0646\u06CC\u0648\u06BA \u062C\u0632\u06CC\u0631\u06C1","common":"\u0631\u06D2 \u06CC\u0648\u0646\u06CC\u0648\u06BA"},"zho":{"official":"\u7559\u5C3C\u65FA\u5C9B","common":"\u7559\u5C3C\u65FA\u5C9B"}},"latlng":[-21.15,55.5],"landlocked":false,"borders":[],"area":2511,"flag":"\uD83C\uDDF7\uD83C\uDDEA","demonyms":{"eng":{"f":"R\xe9unionese","m":"R\xe9unionese"},"fra":{"f":"R\xe9unionnaise","m":"R\xe9unionnais"}}},{"name":{"common":"Romania","official":"Romania","native":{"ron":{"official":"Rom\xe2nia","common":"Rom\xe2nia"}}},"tld":[".ro"],"cca2":"RO","ccn3":"642","cca3":"ROU","cioc":"ROU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"RON":{"name":"Romanian leu","symbol":"lei"}},"idd":{"root":"+4","suffixes":["0"]},"capital":["Bucharest"],"altSpellings":["RO","Rumania","Roumania","Rom\xe2nia"],"region":"Europe","subregion":"Southeast Europe","languages":{"ron":"Romanian"},"translations":{"ara":{"official":"\u0631\u0648\u0645\u0627\u0646\u064A\u0627","common":"\u0631\u0648\u0645\u0627\u0646\u064A\u0627"},"ces":{"official":"Rumunsko","common":"Rumunsko"},"deu":{"official":"Rum\xe4nien","common":"Rum\xe4nien"},"est":{"official":"Rumeenia","common":"Rumeenia"},"fin":{"official":"Romania","common":"Romania"},"fra":{"official":"Roumanie","common":"Roumanie"},"hrv":{"official":"Rumunija","common":"Rumunjska"},"hun":{"official":"Rom\xe1nia","common":"Rom\xe1nia"},"ita":{"official":"Romania","common":"Romania"},"jpn":{"official":"\u30EB\u30FC\u30DE\u30CB\u30A2","common":"\u30EB\u30FC\u30DE\u30CB\u30A2"},"kor":{"official":"\uB8E8\uB9C8\uB2C8\uC544","common":"\uB8E8\uB9C8\uB2C8\uC544"},"nld":{"official":"Roemeni\xeb","common":"Roemeni\xeb"},"per":{"official":"\u0631\u0648\u0645\u0627\u0646\u06CC","common":"\u0631\u0648\u0645\u0627\u0646\u06CC"},"pol":{"official":"Rumunia","common":"Rumunia"},"por":{"official":"Rom\xeania","common":"Rom\xe9nia"},"rus":{"official":"\u0420\u0443\u043C\u044B\u043D\u0438\u044F","common":"\u0420\u0443\u043C\u044B\u043D\u0438\u044F"},"slk":{"official":"Rumunsko","common":"Rumunsko"},"spa":{"official":"Rumania","common":"Rumania"},"srp":{"official":"Rumunija","common":"Rumunija"},"swe":{"official":"Rum\xe4nien","common":"Rum\xe4nien"},"tur":{"official":"Romanya","common":"Romanya"},"urd":{"official":"\u0631\u0648\u0645\u0627\u0646\u06CC\u06C1","common":"\u0631\u0648\u0645\u0627\u0646\u06CC\u06C1"},"zho":{"official":"\u7F57\u9A6C\u5C3C\u4E9A","common":"\u7F57\u9A6C\u5C3C\u4E9A"}},"latlng":[46,25],"landlocked":false,"borders":["BGR","HUN","MDA","SRB","UKR"],"area":238391,"flag":"\uD83C\uDDF7\uD83C\uDDF4","demonyms":{"eng":{"f":"Romanian","m":"Romanian"},"fra":{"f":"Roumaine","m":"Roumain"}}},{"name":{"common":"Russia","official":"Russian Federation","native":{"rus":{"official":"\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F","common":"\u0420\u043E\u0441\u0441\u0438\u044F"}}},"tld":[".ru",".su",".\u0440\u0444"],"cca2":"RU","ccn3":"643","cca3":"RUS","cioc":"RUS","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"RUB":{"name":"Russian ruble","symbol":"\u20BD"}},"idd":{"root":"+7","suffixes":["3","4","5","8","9"]},"capital":["Moscow"],"altSpellings":["RU","Russian Federation","\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F"],"region":"Europe","subregion":"Eastern Europe","languages":{"rus":"Russian"},"translations":{"ara":{"official":"\u0631\u0648\u0633\u064A\u0627 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u0631\u0648\u0633\u064A\u0627"},"ces":{"official":"Rusk\xe1 federace","common":"Rusko"},"deu":{"official":"Russische F\xf6deration","common":"Russland"},"est":{"official":"Venemaa F\xf6deratsioon","common":"Venemaa"},"fin":{"official":"Ven\xe4j\xe4n federaatio","common":"Ven\xe4j\xe4"},"fra":{"official":"F\xe9d\xe9ration de Russie","common":"Russie"},"hrv":{"official":"Ruska Federacija","common":"Rusija"},"hun":{"official":"Oroszorsz\xe1gi F\xf6der\xe1ci\xf3","common":"Oroszorsz\xe1g"},"ita":{"official":"Federazione russa","common":"Russia"},"jpn":{"official":"\u30ED\u30B7\u30A2\u9023\u90A6","common":"\u30ED\u30B7\u30A2"},"kor":{"official":"\uB7EC\uC2DC\uC544 \uC5F0\uBC29","common":"\uB7EC\uC2DC\uC544"},"nld":{"official":"Russische Federatie","common":"Rusland"},"per":{"official":"\u0641\u062F\u0631\u0627\u0633\u06CC\u0648\u0646 \u0631\u0648\u0633\u06CC\u0647","common":"\u0631\u0648\u0633\u06CC\u0647"},"pol":{"official":"Federacja Rosyjska","common":"Rosja"},"por":{"official":"Federa\xe7\xe3o Russa","common":"R\xfassia"},"rus":{"official":"\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F","common":"\u0420\u043E\u0441\u0441\u0438\u044F"},"slk":{"official":"Rusk\xe1 feder\xe1cia","common":"Rusko"},"spa":{"official":"Federaci\xf3n de Rusia","common":"Rusia"},"srp":{"official":"Ruska Federacija","common":"Rusija"},"swe":{"official":"Ryska federationen","common":"Ryssland"},"tur":{"official":"Rusya Federasyonu","common":"Rusya"},"urd":{"official":"\u0631\u0648\u0633\u06CC \u0648\u0641\u0627\u0642","common":"\u0631\u0648\u0633"},"zho":{"official":"\u4FC4\u7F57\u65AF\u8054\u90A6","common":"\u4FC4\u7F57\u65AF"}},"latlng":[60,100],"landlocked":false,"borders":["AZE","BLR","CHN","EST","FIN","GEO","KAZ","PRK","LVA","LTU","MNG","NOR","POL","UKR"],"area":17098242,"flag":"\uD83C\uDDF7\uD83C\uDDFA","demonyms":{"eng":{"f":"Russian","m":"Russian"},"fra":{"f":"Russe","m":"Russe"}}},{"name":{"common":"Rwanda","official":"Republic of Rwanda","native":{"eng":{"official":"Republic of Rwanda","common":"Rwanda"},"fra":{"official":"R\xe9publique rwandaise","common":"Rwanda"},"kin":{"official":"Repubulika y\'u Rwanda","common":"Rwanda"}}},"tld":[".rw"],"cca2":"RW","ccn3":"646","cca3":"RWA","cioc":"RWA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"RWF":{"name":"Rwandan franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["50"]},"capital":["Kigali"],"altSpellings":["RW","Republic of Rwanda","Repubulika y\'u Rwanda","R\xe9publique du Rwanda"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","fra":"French","kin":"Kinyarwanda"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0631\u0648\u0627\u0646\u062F\u0627","common":"\u0631\u0648\u0627\u0646\u062F\u0627"},"ces":{"official":"Rwandsk\xe1 republika","common":"Rwanda"},"deu":{"official":"Republik Ruanda","common":"Ruanda"},"est":{"official":"Rwanda Vabariik","common":"Rwanda"},"fin":{"official":"Ruandan tasavalta","common":"Ruanda"},"fra":{"official":"R\xe9publique rwandaise","common":"Rwanda"},"hrv":{"official":"Republika Ruandi","common":"Ruanda"},"hun":{"official":"Ruandai K\xf6zt\xe1rsas\xe1g","common":"Ruanda"},"ita":{"official":"Repubblica del Ruanda","common":"Ruanda"},"jpn":{"official":"\u30EB\u30EF\u30F3\u30C0\u5171\u548C\u56FD","common":"\u30EB\u30EF\u30F3\u30C0"},"kor":{"official":"\uB974\uC644\uB2E4 \uACF5\uD654\uAD6D","common":"\uB974\uC644\uB2E4"},"nld":{"official":"Republiek Rwanda","common":"Rwanda"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0631\u0648\u0627\u0646\u062F\u0627","common":"\u0631\u0648\u0627\u0646\u062F\u0627"},"pol":{"official":"Republika Rwandy","common":"Rwanda"},"por":{"official":"Rep\xfablica do Ruanda","common":"Ruanda"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0420\u0443\u0430\u043D\u0434\u0430","common":"\u0420\u0443\u0430\u043D\u0434\u0430"},"slk":{"official":"Rwandsk\xe1 republika","common":"Rwanda"},"spa":{"official":"Rep\xfablica de Rwanda","common":"Ruanda"},"srp":{"official":"Republika Ruanda","common":"Ruanda"},"swe":{"official":"Republiken Rwanda","common":"Rwanda"},"tur":{"official":"Ruanda Cumhuriyeti","common":"Ruanda"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0631\u0648\u0627\u0646\u0688\u0627","common":"\u0631\u0648\u0627\u0646\u0688\u0627"},"zho":{"official":"\u5362\u65FA\u8FBE\u5171\u548C\u56FD","common":"\u5362\u65FA\u8FBE"}},"latlng":[-2,30],"landlocked":true,"borders":["BDI","COD","TZA","UGA"],"area":26338,"flag":"\uD83C\uDDF7\uD83C\uDDFC","demonyms":{"eng":{"f":"Rwandan","m":"Rwandan"},"fra":{"f":"Rwandaise","m":"Rwandais"}}},{"name":{"common":"Saudi Arabia","official":"Kingdom of Saudi Arabia","native":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629","common":"\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629"}}},"tld":[".sa",".\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629"],"cca2":"SA","ccn3":"682","cca3":"SAU","cioc":"KSA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"SAR":{"name":"Saudi riyal","symbol":"\u0631.\u0633"}},"idd":{"root":"+9","suffixes":["66"]},"capital":["Riyadh"],"altSpellings":["Saudi","SA","Kingdom of Saudi Arabia","Al-Mamlakah al-\u2018Arabiyyah as-Su\u2018\u016Bdiyyah"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629","common":"\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629"},"ces":{"official":"Sa\xfadskoarabsk\xe9 kr\xe1lovstv\xed","common":"Sa\xfadsk\xe1 Ar\xe1bie"},"deu":{"official":"K\xf6nigreich Saudi-Arabien","common":"Saudi-Arabien"},"est":{"official":"Saudi Araabia Kuningriik","common":"Saudi Araabia"},"fin":{"official":"Saudi-Arabian kuningaskunta","common":"Saudi-Arabia"},"fra":{"official":"Royaume d\'Arabie Saoudite","common":"Arabie Saoudite"},"hrv":{"official":"Kraljevina Saudijska Arabija","common":"Saudijska Arabija"},"hun":{"official":"Sza\xfad-Ar\xe1bia","common":"Sza\xfad-Ar\xe1bia"},"ita":{"official":"Arabia Saudita","common":"Arabia Saudita"},"jpn":{"official":"\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2\u738B\u56FD","common":"\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2"},"kor":{"official":"\uC0AC\uC6B0\uB514\uC544\uB77C\uBE44\uC544 \uC655\uAD6D","common":"\uC0AC\uC6B0\uB514\uC544\uB77C\uBE44\uC544"},"nld":{"official":"Koninkrijk van Saoedi-Arabi\xeb","common":"Saoedi-Arabi\xeb"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0639\u0631\u0628\u06CC \u0633\u064E\u0639\u0648\u062F\u06CC","common":"\u0639\u0631\u0628\u0633\u062A\u0627\u0646 \u0633\u0639\u0648\u062F\u06CC"},"pol":{"official":"Kr\xf3lestwo Arabii Saudyjskiej","common":"Arabia Saudyjska"},"por":{"official":"Reino da Ar\xe1bia Saudita","common":"Ar\xe1bia Saudita"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F","common":"\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F"},"slk":{"official":"Saudskoarabsk\xe9 kr\xe1\u013Eovstvo","common":"Saudsk\xe1 Ar\xe1bia"},"spa":{"official":"Reino de Arabia Saudita","common":"Arabia Saud\xed"},"srp":{"official":"Kraljevina Saudijska Arabija","common":"Saudijska Arabija"},"swe":{"official":"Kungad\xf6met Saudiarabien","common":"Saudiarabien"},"tur":{"official":"Suudi Arabistan Krall\u0131\u011F\u0131","common":"Suudi Arabistan"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0633\u0639\u0648\u062F\u06CC \u0639\u0631\u0628","common":"\u0633\u0639\u0648\u062F\u06CC \u0639\u0631\u0628"},"zho":{"official":"\u6C99\u7279\u963F\u62C9\u4F2F\u738B\u56FD","common":"\u6C99\u7279\u963F\u62C9\u4F2F"}},"latlng":[25,45],"landlocked":false,"borders":["IRQ","JOR","KWT","OMN","QAT","ARE","YEM"],"area":2149690,"flag":"\uD83C\uDDF8\uD83C\uDDE6","demonyms":{"eng":{"f":"Saudi Arabian","m":"Saudi Arabian"},"fra":{"f":"Saoudienne","m":"Saoudien"}}},{"name":{"common":"Sudan","official":"Republic of the Sudan","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0646","common":"\u0627\u0644\u0633\u0648\u062F\u0627\u0646"},"eng":{"official":"Republic of the Sudan","common":"Sudan"}}},"tld":[".sd"],"cca2":"SD","ccn3":"729","cca3":"SDN","cioc":"SUD","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SDG":{"name":"Sudanese pound","symbol":"PT"}},"idd":{"root":"+2","suffixes":["49"]},"capital":["Khartoum"],"altSpellings":["SD","Republic of the Sudan","Jumh\u016Br\u012Byat as-S\u016Bd\u0101n"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic","eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0633\u0648\u062F\u0627\u0646","common":"\u0627\u0644\u0633\u0648\u062F\u0627\u0646"},"ces":{"official":"S\xfad\xe1nsk\xe1 republika","common":"S\xfad\xe1n"},"deu":{"official":"Republik Sudan","common":"Sudan"},"est":{"official":"Sudaani Vabariik","common":"Sudaan"},"fin":{"official":"Sudanin tasavalta","common":"Sudan"},"fra":{"official":"R\xe9publique du Soudan","common":"Soudan"},"hrv":{"official":"Republika Sudan","common":"Sudan"},"hun":{"official":"Szud\xe1ni K\xf6zt\xe1rsas\xe1g","common":"Szud\xe1n"},"ita":{"official":"Repubblica del Sudan","common":"Sudan"},"jpn":{"official":"\u30B9\u30FC\u30C0\u30F3\u5171\u548C\u56FD","common":"\u30B9\u30FC\u30C0\u30F3"},"kor":{"official":"\uC218\uB2E8 \uACF5\uD654\uAD6D","common":"\uC218\uB2E8"},"nld":{"official":"Republiek Soedan","common":"Soedan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0648\u062F\u0627\u0646","common":"\u0633\u0648\u062F\u0627\u0646"},"pol":{"official":"Republika Sudanu","common":"Sudan"},"por":{"official":"Rep\xfablica do Sud\xe3o","common":"Sud\xe3o"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0443\u0434\u0430\u043D","common":"\u0421\u0443\u0434\u0430\u043D"},"slk":{"official":"Sud\xe1nska republika","common":"Sud\xe1n"},"spa":{"official":"Rep\xfablica de Sud\xe1n","common":"Sud\xe1n"},"srp":{"official":"Republika Sudan","common":"Sudan"},"swe":{"official":"Republiken Sudan","common":"Sudan"},"tur":{"official":"Sudan Cumhuriyeti","common":"Sudan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0648\u062F\u0627\u0646","common":"\u0633\u0648\u062F\u0627\u0646"},"zho":{"official":"\u82CF\u4E39\u5171\u548C\u56FD","common":"\u82CF\u4E39"}},"latlng":[15,30],"landlocked":false,"borders":["CAF","TCD","EGY","ERI","ETH","LBY","SSD"],"area":1886068,"flag":"\uD83C\uDDF8\uD83C\uDDE9","demonyms":{"eng":{"f":"Sudanese","m":"Sudanese"},"fra":{"f":"Soudanaise","m":"Soudanais"}}},{"name":{"common":"Senegal","official":"Republic of Senegal","native":{"fra":{"official":"R\xe9publique du S\xe9n\xe9gal","common":"S\xe9n\xe9gal"}}},"tld":[".sn"],"cca2":"SN","ccn3":"686","cca3":"SEN","cioc":"SEN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["21"]},"capital":["Dakar"],"altSpellings":["SN","Republic of Senegal","R\xe9publique du S\xe9n\xe9gal"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0633\u0646\u063A\u0627\u0644","common":"\u0627\u0644\u0633\u0646\u063A\u0627\u0644"},"ces":{"official":"Senegalsk\xe1 republika","common":"Senegal"},"deu":{"official":"Republik Senegal","common":"Senegal"},"est":{"official":"Senegali Vabariik","common":"Senegal"},"fin":{"official":"Senegalin tasavalta","common":"Senegal"},"fra":{"official":"R\xe9publique du S\xe9n\xe9gal","common":"S\xe9n\xe9gal"},"hrv":{"official":"Republika Senegal","common":"Senegal"},"hun":{"official":"Szeneg\xe1li K\xf6zt\xe1rsas\xe1g","common":"Szeneg\xe1l"},"ita":{"official":"Repubblica del Senegal","common":"Senegal"},"jpn":{"official":"\u30BB\u30CD\u30AC\u30EB\u5171\u548C\u56FD","common":"\u30BB\u30CD\u30AC\u30EB"},"kor":{"official":"\uC138\uB124\uAC08 \uACF5\uD654\uAD6D","common":"\uC138\uB124\uAC08"},"nld":{"official":"Republiek Senegal","common":"Senegal"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0646\u06AF\u0627\u0644","common":"\u0633\u0646\u06AF\u0627\u0644"},"pol":{"official":"Senegal","common":"Senegal"},"por":{"official":"Rep\xfablica do Senegal","common":"Senegal"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u043D\u0435\u0433\u0430\u043B","common":"\u0421\u0435\u043D\u0435\u0433\u0430\u043B"},"slk":{"official":"Senegalsk\xe1 republika","common":"Senegal"},"spa":{"official":"Rep\xfablica de Senegal","common":"Senegal"},"srp":{"official":"Republika Senegal","common":"Senegal"},"swe":{"official":"Republiken Senegal","common":"Senegal"},"tur":{"official":"Senegal Cumhuriyeti","common":"Senegal"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u06CC\u0646\u06CC\u06AF\u0627\u0644","common":"\u0633\u06CC\u0646\u06CC\u06AF\u0627\u0644"},"zho":{"official":"\u585E\u5185\u52A0\u5C14\u5171\u548C\u56FD","common":"\u585E\u5185\u52A0\u5C14"}},"latlng":[14,-14],"landlocked":false,"borders":["GMB","GIN","GNB","MLI","MRT"],"area":196722,"flag":"\uD83C\uDDF8\uD83C\uDDF3","demonyms":{"eng":{"f":"Senegalese","m":"Senegalese"},"fra":{"f":"S\xe9n\xe9galaise","m":"S\xe9n\xe9galais"}}},{"name":{"common":"Singapore","official":"Republic of Singapore","native":{"eng":{"official":"Republic of Singapore","common":"Singapore"},"msa":{"official":"Republik Singapura","common":"Singapura"},"tam":{"official":"\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD \u0B95\u0BC1\u0B9F\u0BBF\u0BAF\u0BB0\u0B9A\u0BC1","common":"\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD"},"zho":{"official":"\u65B0\u52A0\u5761\u5171\u548C\u56FD","common":"\u65B0\u52A0\u5761"}}},"tld":[".sg",".\u65B0\u52A0\u5761",".\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD"],"cca2":"SG","ccn3":"702","cca3":"SGP","cioc":"SGP","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"SGD":{"name":"Singapore dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["5"]},"capital":["Singapore"],"altSpellings":["SG","Singapura","Republik Singapura","\u65B0\u52A0\u5761\u5171\u548C\u56FD"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"eng":"English","msa":"Malay","tam":"Tamil","zho":"Chinese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0646\u063A\u0627\u0641\u0648\u0631\u0629","common":"\u0633\u0646\u063A\u0627\u0641\u0648\u0631\u0629"},"ces":{"official":"Singapursk\xe1 republika","common":"Singapur"},"deu":{"official":"Republik Singapur","common":"Singapur"},"est":{"official":"Singapuri Vabariik","common":"Singapur"},"fin":{"official":"Singaporen tasavalta","common":"Singapore"},"fra":{"official":"R\xe9publique de Singapour","common":"Singapour"},"hrv":{"official":"Republika Singapur","common":"Singapur"},"hun":{"official":"Szingap\xfari K\xf6zt\xe1rsas\xe1g","common":"Szingap\xfar"},"ita":{"official":"Repubblica di Singapore","common":"Singapore"},"jpn":{"official":"\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB\u5171\u548C\u56FD","common":"\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB"},"kor":{"official":"\uC2F1\uAC00\uD3EC\uB974 \uACF5\uD654\uAD6D","common":"\uC2F1\uAC00\uD3EC\uB974"},"nld":{"official":"Republiek Singapore","common":"Singapore"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0646\u06AF\u0627\u067E\u0648\u0631","common":"\u0633\u0646\u06AF\u0627\u067E\u0648\u0631"},"pol":{"official":"Republika Singapuru","common":"Singapur"},"por":{"official":"Rep\xfablica de Singapura","common":"Singapura"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440","common":"\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440"},"slk":{"official":"Singapursk\xe1 republika","common":"Singapur"},"spa":{"official":"Rep\xfablica de Singapur","common":"Singapur"},"srp":{"official":"Republika Singapur","common":"Singapur"},"swe":{"official":"Republiken Singapore","common":"Singapore"},"tur":{"official":"Singapur Cumhuriyeti","common":"Singapur"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0646\u06AF\u0627\u067E\u0648\u0631","common":"\u0633\u0646\u06AF\u0627\u067E\u0648\u0631"},"zho":{"official":"\u65B0\u52A0\u5761\u5171\u548C\u56FD","common":"\u65B0\u52A0\u5761"}},"latlng":[1.36666666,103.8],"landlocked":false,"borders":[],"area":710,"flag":"\uD83C\uDDF8\uD83C\uDDEC","demonyms":{"eng":{"f":"Singaporean","m":"Singaporean"},"fra":{"f":"Singapourienne","m":"Singapourien"}}},{"name":{"common":"South Georgia","official":"South Georgia and the South Sandwich Islands","native":{"eng":{"official":"South Georgia and the South Sandwich Islands","common":"South Georgia"}}},"tld":[".gs"],"cca2":"GS","ccn3":"239","cca3":"SGS","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"SHP":{"name":"Saint Helena pound","symbol":"\xa3"}},"idd":{"root":"+5","suffixes":["00"]},"capital":["King Edward Point"],"altSpellings":["GS","South Georgia and the South Sandwich Islands"],"region":"Antarctic","subregion":"","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0648\u0631\u062C\u064A\u0627 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629 \u0648\u062C\u0632\u0631 \u0633\u0627\u0646\u062F\u0648\u062A\u0634 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629","common":"\u062C\u0648\u0631\u062C\u064A\u0627 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629"},"ces":{"official":"Ji\u017En\xed Georgie a Ji\u017En\xed Sandwichovy ostrovy","common":"Ji\u017En\xed Georgie a Ji\u017En\xed Sandwichovy ostrovy"},"deu":{"official":"S\xfcdgeorgien und die S\xfcdlichen Sandwichinseln","common":"S\xfcdgeorgien und die S\xfcdlichen Sandwichinseln"},"est":{"official":"L\xf5una-Georgia ja L\xf5una-Sandwichi saared","common":"L\xf5una-Georgia ja L\xf5una-Sandwichi saared"},"fin":{"official":"Etel\xe4-Georgia ja Etel\xe4iset Sandwichsaaret","common":"Etel\xe4-Georgia ja Etel\xe4iset Sandwichsaaret"},"fra":{"official":"G\xe9orgie du Sud et les \xeeles Sandwich du Sud","common":"G\xe9orgie du Sud-et-les \xceles Sandwich du Sud"},"hrv":{"official":"Ju\u017Ena D\u017Eord\u017Eija i Otoci Ju\u017Eni Sendvi\u010D","common":"Ju\u017Ena Georgija i oto\u010Dje Ju\u017Eni Sandwich"},"hun":{"official":"D\xe9li-Georgia \xe9s D\xe9li-Sandwich-szigetek","common":"D\xe9li-Georgia \xe9s D\xe9li-Sandwich-szigetek"},"ita":{"official":"Georgia del Sud e isole Sandwich del Sud","common":"Georgia del Sud e Isole Sandwich Meridionali"},"jpn":{"official":"\u5357\u30B8\u30E7\u30FC\u30B8\u30A2\u5CF6\u30FB\u5357\u30B5\u30F3\u30C9\u30A4\u30C3\u30C1\u8AF8\u5CF6","common":"\u30B5\u30A6\u30B9\u30B8\u30E7\u30FC\u30B8\u30A2\u30FB\u30B5\u30A6\u30B9\u30B5\u30F3\u30C9\u30A6\u30A3\u30C3\u30C1\u8AF8\u5CF6"},"kor":{"official":"\uC870\uC9C0\uC544","common":"\uC870\uC9C0\uC544"},"nld":{"official":"Zuid-Georgi\xeb en de Zuidelijke Sandwich-eilanden","common":"Zuid-Georgia en Zuidelijke Sandwicheilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u062C\u0648\u0631\u062C\u06CC\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC \u0648 \u0633\u0627\u0646\u062F\u0648\u06CC\u0686 \u062C\u0646\u0648\u0628\u06CC","common":"\u062C\u0632\u0627\u06CC\u0631 \u062C\u0648\u0631\u062C\u06CC\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC \u0648 \u0633\u0627\u0646\u062F\u0648\u06CC\u0686 \u062C\u0646\u0648\u0628\u06CC"},"pol":{"official":"Georgia Po\u0142udniowa i Sandwich Po\u0142udniowy","common":"Georgia Po\u0142udniowa i Sandwich Po\u0142udniowy"},"por":{"official":"Ge\xf3rgia do Sul e Sandwich do Sul","common":"Ilhas Ge\xf3rgia do Sul e Sandwich do Sul"},"rus":{"official":"\u042E\u0436\u043D\u0430\u044F \u0413\u0435\u043E\u0440\u0433\u0438\u044F \u0438 \u042E\u0436\u043D\u044B\u0435 \u0421\u0430\u043D\u0434\u0432\u0438\u0447\u0435\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u042E\u0436\u043D\u0430\u044F \u0413\u0435\u043E\u0440\u0433\u0438\u044F \u0438 \u042E\u0436\u043D\u044B\u0435 \u0421\u0430\u043D\u0434\u0432\u0438\u0447\u0435\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Ju\u017En\xe1 Georgia a Ju\u017En\xe9 Sandwichove ostrovy","common":"Ju\u017En\xe1 Georgia a Ju\u017En\xe9 Sandwichove ostrovy"},"spa":{"official":"Georgia del Sur y las Islas Sandwich del Sur","common":"Islas Georgias del Sur y Sandwich del Sur"},"srp":{"official":"Ju\u017Ena D\u017Eord\u017Eija i Ju\u017Ena Sendvi\u010Dka Ostrva","common":"Ju\u017Ena D\u017Eord\u017Eija"},"swe":{"official":"Sydgeorgien","common":"Sydgeorgien"},"tur":{"official":"G\xfcney Georgia ve G\xfcney Sandwich Adalar\u0131","common":"G\xfcney Georgia ve G\xfcney Sandwich Adalar\u0131"},"urd":{"official":"\u062C\u0646\u0648\u0628\u06CC \u062C\u0627\u0631\u062C\u06CC\u0627 \u0648 \u062C\u0632\u0627\u0626\u0631 \u062C\u0646\u0648\u0628\u06CC \u0633\u06CC\u0646\u0688\u0648\u0686","common":"\u062C\u0646\u0648\u0628\u06CC \u062C\u0627\u0631\u062C\u06CC\u0627"},"zho":{"official":"\u5357\u4E54\u6CBB\u4E9A\u5C9B\u548C\u5357\u6851\u5A01\u5947\u7FA4\u5C9B","common":"\u5357\u4E54\u6CBB\u4E9A"}},"latlng":[-54.5,-37],"landlocked":false,"borders":[],"area":3903,"flag":"\uD83C\uDDEC\uD83C\uDDF8","demonyms":{"eng":{"f":"South Georgian South Sandwich Islander","m":"South Georgian South Sandwich Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Svalbard and Jan Mayen","official":"Svalbard og Jan Mayen","native":{"nor":{"official":"Svalbard og Jan Mayen","common":"Svalbard og Jan Mayen"}}},"tld":[".sj"],"cca2":"SJ","ccn3":"744","cca3":"SJM","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"NOK":{"name":"krone","symbol":"kr"}},"idd":{"root":"+4","suffixes":["779"]},"capital":["Longyearbyen"],"altSpellings":["SJ","Svalbard and Jan Mayen Islands"],"region":"Europe","subregion":"Northern Europe","languages":{"nor":"Norwegian"},"translations":{"ara":{"official":"\u0633\u0641\u0627\u0644\u0628\u0627\u0631\u062F \u0648\u064A\u0627\u0646 \u0645\u0627\u064A\u0646","common":"\u0633\u0641\u0627\u0644\u0628\u0627\u0631\u062F \u0648\u064A\u0627\u0646 \u0645\u0627\u064A\u0646"},"ces":{"official":"\u0160picberky a Jan Mayen","common":"\u0160picberky a Jan Mayen"},"deu":{"official":"Spitzbergen und Jan Mayen","common":"Spitzbergen und Jan Mayen"},"est":{"official":"Svalbard","common":"Svalbard"},"fin":{"official":"Huippuvuoret","common":"Huippuvuoret"},"fra":{"official":"Jan Mayen Svalbard","common":"Svalbard et Jan Mayen"},"hrv":{"official":"Svalbard og Jan Mayen","common":"Svalbard i Jan Mayen"},"hun":{"official":"Svalbard \xe9s Jan Mayen","common":"Svalbard \xe9s Jan Mayen"},"ita":{"official":"Svalbard og Jan Mayen","common":"Svalbard e Jan Mayen"},"jpn":{"official":"\u30B9\u30F4\u30A1\u30FC\u30EB\u30D0\u30EB\u8AF8\u5CF6\u30FB\u30E4\u30F3\u30DE\u30A4\u30A8\u30F3\u5CF6","common":"\u30B9\u30F4\u30A1\u30FC\u30EB\u30D0\u30EB\u8AF8\u5CF6\u304A\u3088\u3073\u30E4\u30F3\u30DE\u30A4\u30A8\u30F3\u5CF6"},"kor":{"official":"\uC2A4\uBC1C\uBC14\uB974 \uC580\uB9C8\uC60C \uC81C\uB3C4","common":"\uC2A4\uBC1C\uBC14\uB974 \uC580\uB9C8\uC60C \uC81C\uB3C4"},"nld":{"official":"Svalbard og Jan Mayen","common":"Svalbard en Jan Mayen"},"per":{"official":"\u0633\u0648\u0627\u0644\u0628\u0627\u0631\u062F \u0648 \u06CC\u0627\u0646 \u0645\u0627\u06CC\u0646","common":"\u0633\u0648\u0627\u0644\u0628\u0627\u0631\u062F \u0648 \u06CC\u0627\u0646 \u0645\u0627\u06CC\u0646"},"pol":{"official":"Svalbard i Jan Mayen","common":"Svalbard i Jan Mayen"},"por":{"official":"Svalbard og Jan Mayen","common":"Ilhas Svalbard e Jan Mayen"},"rus":{"official":"\u0421\u0432\u0430\u043B\u044C\u0431\u0430\u0440\u0434\u0430 \u043E\u0433 \u042F\u043D-\u041C\u0430\u0439\u0435\u043D","common":"\u0428\u043F\u0438\u0446\u0431\u0435\u0440\u0433\u0435\u043D \u0438 \u042F\u043D-\u041C\u0430\u0439\u0435\u043D"},"slk":{"official":"Svalbard a Jan Mayen","common":"Svalbard a Jan Mayen"},"spa":{"official":"Svalbard og Jan Mayen","common":"Islas Svalbard y Jan Mayen"},"srp":{"official":"Svalbard i Jan Majen","common":"Svalbard i Jan Majen"},"swe":{"official":"Svalbard och Jan Mayen","common":"Svalbard och Jan Mayen"},"tur":{"official":"Svalbard ve Jan Mayen","common":"Svalbard ve Jan Mayen"},"urd":{"official":"\u0633\u0648\u0627\u0644\u0628\u0627\u0631\u0688 \u0627\u0648\u0631 \u062C\u0627\u0646 \u0645\u06CC\u0626\u0646","common":"\u0633\u0648\u0627\u0644\u0628\u0627\u0631\u0688 \u0627\u0648\u0631 \u062C\u0627\u0646 \u0645\u06CC\u0626\u0646"},"zho":{"official":"\u65AF\u74E6\u5C14\u5DF4\u7279","common":"\u65AF\u74E6\u5C14\u5DF4\u7279"}},"latlng":[78,20],"landlocked":false,"borders":[],"area":-1,"flag":"\uD83C\uDDF8\uD83C\uDDEF","demonyms":{"eng":{"f":"Norwegian","m":"Norwegian"},"fra":{"f":"","m":""}}},{"name":{"common":"Solomon Islands","official":"Solomon Islands","native":{"eng":{"official":"Solomon Islands","common":"Solomon Islands"}}},"tld":[".sb"],"cca2":"SB","ccn3":"090","cca3":"SLB","cioc":"SOL","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"SBD":{"name":"Solomon Islands dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["77"]},"capital":["Honiara"],"altSpellings":["SB"],"region":"Oceania","subregion":"Melanesia","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0633\u0644\u064A\u0645\u0627\u0646","common":"\u062C\u0632\u0631 \u0633\u0644\u064A\u0645\u0627\u0646"},"ces":{"official":"\u0160alamounovy ostrovy","common":"\u0160alamounovy ostrovy"},"deu":{"official":"Salomonen","common":"Salomonen"},"est":{"official":"Saalomoni Saared","common":"Saalomoni Saared"},"fin":{"official":"Salomonsaaret","common":"Salomonsaaret"},"fra":{"official":"\xceles Salomon","common":"\xceles Salomon"},"hrv":{"official":"Solomonski Otoci","common":"Solomonski Otoci"},"hun":{"official":"Salamon-szigetek","common":"Salamon-szigetek"},"ita":{"official":"Isole Salomone","common":"Isole Salomone"},"jpn":{"official":"\u30BD\u30ED\u30E2\u30F3\u8AF8\u5CF6","common":"\u30BD\u30ED\u30E2\u30F3\u8AF8\u5CF6"},"kor":{"official":"\uC194\uB85C\uBAAC \uC81C\uB3C4","common":"\uC194\uB85C\uBAAC \uC81C\uB3C4"},"nld":{"official":"Solomon eilanden","common":"Salomonseilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0633\u0644\u06CC\u0645\u0627\u0646","common":"\u062C\u0632\u0627\u06CC\u0631 \u0633\u0644\u06CC\u0645\u0627\u0646"},"pol":{"official":"Wyspy Salomona","common":"Wyspy Salomona"},"por":{"official":"Ilhas Salom\xe3o","common":"Ilhas Salom\xe3o"},"rus":{"official":"\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u044B \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0421\u043E\u043B\u043E\u043C\u043E\u043D\u043E\u0432\u044B \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Salomonove ostrovy","common":"Salomonove ostrovy"},"spa":{"official":"islas Salom\xf3n","common":"Islas Salom\xf3n"},"srp":{"official":"Solomonova Ostrva","common":"Solomonova Ostrva"},"swe":{"official":"Salomon\xf6arna","common":"Salomon\xf6arna"},"tur":{"official":"Solomon Adalar\u0131","common":"Solomon Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u0633\u0644\u06CC\u0645\u0627\u0646","common":"\u062C\u0632\u0627\u0626\u0631 \u0633\u0644\u06CC\u0645\u0627\u0646"},"zho":{"official":"\u6240\u7F57\u95E8\u7FA4\u5C9B","common":"\u6240\u7F57\u95E8\u7FA4\u5C9B"}},"latlng":[-8,159],"landlocked":false,"borders":[],"area":28896,"flag":"\uD83C\uDDF8\uD83C\uDDE7","demonyms":{"eng":{"f":"Solomon Islander","m":"Solomon Islander"},"fra":{"f":"Salomonienne","m":"Salomonien"}}},{"name":{"common":"Sierra Leone","official":"Republic of Sierra Leone","native":{"eng":{"official":"Republic of Sierra Leone","common":"Sierra Leone"}}},"tld":[".sl"],"cca2":"SL","ccn3":"694","cca3":"SLE","cioc":"SLE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SLL":{"name":"Sierra Leonean leone","symbol":"Le"}},"idd":{"root":"+2","suffixes":["32"]},"capital":["Freetown"],"altSpellings":["SL","Republic of Sierra Leone"],"region":"Africa","subregion":"Western Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u064A\u0631\u0627\u0644\u064A\u0648\u0646","common":"\u0633\u064A\u0631\u0627\u0644\u064A\u0648\u0646"},"ces":{"official":"Republika Sierra Leone","common":"Sierra Leone"},"deu":{"official":"Republik Sierra Leone","common":"Sierra Leone"},"est":{"official":"Sierra Leone Vabariik","common":"Sierra Leone"},"fin":{"official":"Sierra Leonen tasavalta","common":"Sierra Leone"},"fra":{"official":"R\xe9publique de Sierra Leone","common":"Sierra Leone"},"hrv":{"official":"Republika Sijera Leone","common":"Sijera Leone"},"hun":{"official":"Sierra Leone K\xf6zt\xe1rsas\xe1g","common":"Sierra Leone"},"ita":{"official":"Repubblica della Sierra Leone","common":"Sierra Leone"},"jpn":{"official":"\u30B7\u30A8\u30E9\u30EC\u30AA\u30CD\u5171\u548C\u56FD","common":"\u30B7\u30A8\u30E9\u30EC\u30AA\u30CD"},"kor":{"official":"\uC2DC\uC5D0\uB77C\uB9AC\uC628 \uACF5\uD654\uAD6D","common":"\uC2DC\uC5D0\uB77C\uB9AC\uC628"},"nld":{"official":"Republiek Sierra Leone","common":"Sierra Leone"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u06CC\u0631\u0627\u0644\u0626\u0648\u0646","common":"\u0633\u06CC\u0631\u0627\u0644\u0626\u0648\u0646"},"pol":{"official":"Sierra Leone","common":"Sierra Leone"},"por":{"official":"Rep\xfablica da Serra Leoa","common":"Serra Leoa"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u044C\u0435\u0440\u0440\u0430-\u041B\u0435\u043E\u043D\u0435","common":"\u0421\u044C\u0435\u0440\u0440\u0430-\u041B\u0435\u043E\u043D\u0435"},"slk":{"official":"Sierraleonsk\xe1 republika","common":"Sierra Leone"},"spa":{"official":"Rep\xfablica de Sierra Leona","common":"Sierra Leone"},"srp":{"official":"Republika Sijera Leone","common":"Sijera Leone"},"swe":{"official":"Republiken Sierra Leone","common":"Sierra Leone"},"tur":{"official":"Sierra Leone Cumhuriyeti","common":"Sierra Leone"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u06CC\u0631\u0627\u0644\u06CC\u0648\u0646","common":"\u0633\u06CC\u0631\u0627\u0644\u06CC\u0648\u0646"},"zho":{"official":"\u585E\u62C9\u5229\u6602\u5171\u548C\u56FD","common":"\u585E\u62C9\u5229\u6602"}},"latlng":[8.5,-11.5],"landlocked":false,"borders":["GIN","LBR"],"area":71740,"flag":"\uD83C\uDDF8\uD83C\uDDF1","demonyms":{"eng":{"f":"Sierra Leonean","m":"Sierra Leonean"},"fra":{"f":"Sierra-leonaise","m":"Sierra-leonais"}}},{"name":{"common":"El Salvador","official":"Republic of El Salvador","native":{"spa":{"official":"Rep\xfablica de El Salvador","common":"El Salvador"}}},"tld":[".sv"],"cca2":"SV","ccn3":"222","cca3":"SLV","cioc":"ESA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["03"]},"capital":["San Salvador"],"altSpellings":["SV","Republic of El Salvador","Rep\xfablica de El Salvador"],"region":"Americas","subregion":"Central America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0633\u0644\u0641\u0627\u062F\u0648\u0631","common":"\u0627\u0644\u0633\u0644\u0641\u0627\u062F\u0648\u0631"},"ces":{"official":"Salvadorsk\xe1 republika","common":"Salvador"},"deu":{"official":"Republik El Salvador","common":"El Salvador"},"est":{"official":"El Salvadori Vabariik","common":"El Salvador"},"fin":{"official":"El Salvadorin tasavalta","common":"El Salvador"},"fra":{"official":"R\xe9publique du Salvador","common":"Salvador"},"hrv":{"official":"Republika El Salvador","common":"Salvador"},"hun":{"official":"Salvadori K\xf6zt\xe1rsas\xe1g","common":"Salvador"},"ita":{"official":"Repubblica di El Salvador","common":"El Salvador"},"jpn":{"official":"\u30A8\u30EB\u30B5\u30EB\u30D0\u30C9\u30EB\u5171\u548C\u56FD","common":"\u30A8\u30EB\u30B5\u30EB\u30D0\u30C9\u30EB"},"kor":{"official":"\uC5D8\uC0B4\uBC14\uB3C4\uB974 \uACF5\uD654\uAD6D","common":"\uC5D8\uC0B4\uBC14\uB3C4\uB974"},"nld":{"official":"Republiek El Salvador","common":"El Salvador"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0644\u0633\u0627\u0644\u0648\u0627\u062F\u0648\u0631","common":"\u0627\u0644\u0633\u0627\u0644\u0648\u0627\u062F\u0648\u0631"},"pol":{"official":"Republika Salwadoru","common":"Salwador"},"por":{"official":"Rep\xfablica de El Salvador","common":"El Salvador"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u042D\u043B\u044C-\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440","common":"\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440"},"slk":{"official":"Salv\xe1dorsk\xe1 republika","common":"Salv\xe1dor"},"spa":{"official":"Rep\xfablica de El Salvador","common":"El Salvador"},"srp":{"official":"Republika El Salvador","common":"El Salvador"},"swe":{"official":"Republiken El Salvador","common":"El Salvador"},"tur":{"official":"El Salvador Cumhuriyeti","common":"El Salvador"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u06CC\u0644 \u0633\u06CC\u0644\u0648\u0627\u0688\u0648\u0631","common":"\u0627\u06CC\u0644 \u0633\u06CC\u0644\u0648\u0627\u0688\u0648\u0631"},"zho":{"official":"\u8428\u5C14\u74E6\u591A\u5171\u548C\u56FD","common":"\u8428\u5C14\u74E6\u591A"}},"latlng":[13.83333333,-88.91666666],"landlocked":false,"borders":["GTM","HND"],"area":21041,"flag":"\uD83C\uDDF8\uD83C\uDDFB","demonyms":{"eng":{"f":"Salvadoran","m":"Salvadoran"},"fra":{"f":"Salvadorienne","m":"Salvadorien"}}},{"name":{"common":"San Marino","official":"Most Serene Republic of San Marino","native":{"ita":{"official":"Serenissima Repubblica di San Marino","common":"San Marino"}}},"tld":[".sm"],"cca2":"SM","ccn3":"674","cca3":"SMR","cioc":"SMR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["78"]},"capital":["City of San Marino"],"altSpellings":["SM","Republic of San Marino","Repubblica di San Marino"],"region":"Europe","subregion":"Southern Europe","languages":{"ita":"Italian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0627\u0646 \u0645\u0627\u0631\u064A\u0646\u0648","common":"\u0633\u0627\u0646 \u0645\u0627\u0631\u064A\u0646\u0648"},"ces":{"official":"Republika San Marino","common":"San Marino"},"deu":{"official":"Republik San Marino","common":"San Marino"},"est":{"official":"San Marino Vabariik","common":"San Marino"},"fin":{"official":"San Marinon seesteinen tasavalta","common":"San Marino"},"fra":{"official":"R\xe9publique de Saint-Marin","common":"Saint-Marin"},"hrv":{"official":"Ve\u0107ina Serene Republika San Marino","common":"San Marino"},"hun":{"official":"San Marino K\xf6zt\xe1rsas\xe1g","common":"San Marino"},"ita":{"official":"Serenissima Repubblica di San Marino","common":"San Marino"},"jpn":{"official":"\u30B5\u30F3\u30DE\u30EA\u30CE\u5171\u548C\u56FD","common":"\u30B5\u30F3\u30DE\u30EA\u30CE"},"kor":{"official":"\uC0B0\uB9C8\uB9AC\uB178 \uACF5\uD654\uAD6D","common":"\uC0B0\uB9C8\uB9AC\uB178"},"nld":{"official":"Meest Serene Republiek San Marino","common":"San Marino"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0648","common":"\u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0648"},"pol":{"official":"Republika San Marino","common":"San Marino"},"por":{"official":"Seren\xedssima Rep\xfablica de San Marino","common":"San Marino"},"rus":{"official":"\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E Serene \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E","common":"\u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E"},"slk":{"official":"Sanmar\xednska republika","common":"San Mar\xedno"},"spa":{"official":"Seren\xedsima Rep\xfablica de San Marino","common":"San Marino"},"srp":{"official":"Republika San Marino","common":"San Marino"},"swe":{"official":"Republiken San Marino","common":"San Marino"},"tur":{"official":"San Marino Cumhuriyeti","common":"San Marino"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0648","common":"\u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0648"},"zho":{"official":"\u5723\u9A6C\u529B\u8BFA\u5171\u548C\u56FD","common":"\u5723\u9A6C\u529B\u8BFA"}},"latlng":[43.76666666,12.41666666],"landlocked":true,"borders":["ITA"],"area":61,"flag":"\uD83C\uDDF8\uD83C\uDDF2","demonyms":{"eng":{"f":"Sammarinese","m":"Sammarinese"},"fra":{"f":"Saint-Marinaise","m":"Saint-Marinais"}}},{"name":{"common":"Somalia","official":"Federal Republic of Somalia","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u0648\u0645\u0627\u0644 \u0627\u0644\u0641\u064A\u062F\u0631\u0627\u0644\u064A\u0629","common":"\u0627\u0644\u0635\u0648\u0645\u0627\u0644"},"som":{"official":"Jamhuuriyadda Federaalka Soomaaliya","common":"Soomaaliya"}}},"tld":[".so"],"cca2":"SO","ccn3":"706","cca3":"SOM","cioc":"SOM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SOS":{"name":"Somali shilling","symbol":"Sh"}},"idd":{"root":"+2","suffixes":["52"]},"capital":["Mogadishu"],"altSpellings":["SO","a\u1E63-\u1E62\u016Bm\u0101l","Federal Republic of Somalia","Jamhuuriyadda Federaalka Soomaaliya","Jumh\u016Briyyat a\u1E63-\u1E62\u016Bm\u0101l al-Fider\u0101liyya"],"region":"Africa","subregion":"Eastern Africa","languages":{"ara":"Arabic","som":"Somali"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u0648\u0645\u0627\u0644 \u0627\u0644\u0641\u064A\u062F\u0631\u0627\u0644\u064A\u0629","common":"\u0627\u0644\u0635\u0648\u0645\u0627\u0644"},"ces":{"official":"Som\xe1lsk\xe1 demokratick\xe1 republika","common":"Som\xe1lsko"},"deu":{"official":"Bundesrepublik Somalia","common":"Somalia"},"est":{"official":"Somaalia Liitvabariik","common":"Somaalia"},"fin":{"official":"Somalian liittotasavalta","common":"Somalia"},"fra":{"official":"R\xe9publique f\xe9d\xe9rale de Somalie","common":"Somalie"},"hrv":{"official":"Savezna Republika Somaliji","common":"Somalija"},"hun":{"official":"Szom\xe1li Sz\xf6vets\xe9gi K\xf6zt\xe1rsas\xe1g","common":"Szom\xe1lia"},"ita":{"official":"Repubblica federale di Somalia","common":"Somalia"},"jpn":{"official":"\u30BD\u30DE\u30EA\u30A2\u9023\u90A6\u5171\u548C\u56FD","common":"\u30BD\u30DE\u30EA\u30A2"},"kor":{"official":" \uC18C\uB9D0\uB9AC\uC544 \uC5F0\uBC29 \uACF5\uD654\uAD6D","common":"\uC18C\uB9D0\uB9AC\uC544"},"nld":{"official":"Federale Republiek Somali\xeb","common":"Somali\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0641\u062F\u0631\u0627\u0644 \u0633\u0648\u0645\u0627\u0644\u06CC","common":"\u0633\u0648\u0645\u0627\u0644\u06CC"},"pol":{"official":"Federalna Republika Somalii","common":"Somalia"},"por":{"official":"Rep\xfablica Federal da Som\xe1lia","common":"Som\xe1lia"},"rus":{"official":"\u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u043E\u043C\u0430\u043B\u0438","common":"\u0421\u043E\u043C\u0430\u043B\u0438"},"slk":{"official":"Som\xe1lska federat\xedvna republika","common":"Som\xe1lsko"},"spa":{"official":"Rep\xfablica Federal de Somalia","common":"Somalia"},"srp":{"official":"Savezna Republika Somalija","common":"Somalija"},"swe":{"official":"F\xf6rbundsrepubliken Somalia","common":"Somalia"},"tur":{"official":"Somali Federal Cumhuriyeti","common":"Somali"},"urd":{"official":"\u0648\u0641\u0627\u0642\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0635\u0648\u0645\u0627\u0644\u06CC\u06C1","common":"\u0635\u0648\u0645\u0627\u0644\u06CC\u06C1"},"zho":{"official":"\u7D22\u9A6C\u91CC\u5171\u548C\u56FD","common":"\u7D22\u9A6C\u91CC"}},"latlng":[10,49],"landlocked":false,"borders":["DJI","ETH","KEN"],"area":637657,"flag":"\uD83C\uDDF8\uD83C\uDDF4","demonyms":{"eng":{"f":"Somali","m":"Somali"},"fra":{"f":"Somalienne","m":"Somalien"}}},{"name":{"common":"Saint Pierre and Miquelon","official":"Saint Pierre and Miquelon","native":{"fra":{"official":"Collectivit\xe9 territoriale de Saint-Pierre-et-Miquelon","common":"Saint-Pierre-et-Miquelon"}}},"tld":[".pm"],"cca2":"PM","ccn3":"666","cca3":"SPM","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+5","suffixes":["08"]},"capital":["Saint-Pierre"],"altSpellings":["PM","Collectivit\xe9 territoriale de Saint-Pierre-et-Miquelon"],"region":"Americas","subregion":"North America","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0633\u0627\u0646 \u0628\u064A\u064A\u0631 \u0648\u0645\u064A\u0643\u0644\u0648\u0646","common":"\u0633\u0627\u0646 \u0628\u064A\u064A\u0631 \u0648\u0645\u064A\u0643\u0644\u0648\u0646"},"ces":{"official":"Saint-Pierre a Miquelon","common":"Saint-Pierre a Miquelon"},"deu":{"official":"St. Pierre und Miquelon","common":"St. Pierre und Miquelon"},"est":{"official":"Saint-Pierre\u2019i ja Miqueloni territoriaal\xfchendus","common":"Saint-Pierre ja Miquelon"},"fin":{"official":"Saint-Pierre ja Miquelon","common":"Saint-Pierre ja Miquelon"},"fra":{"official":"Saint-Pierre-et-Miquelon","common":"Saint-Pierre-et-Miquelon"},"hrv":{"official":"Saint Pierre i Miquelon","common":"Sveti Petar i Mikelon"},"hun":{"official":"Saint-Pierre \xe9s Miquelon","common":"Saint-Pierre \xe9s Miquelon"},"ita":{"official":"Saint Pierre e Miquelon","common":"Saint-Pierre e Miquelon"},"jpn":{"official":"\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u5CF6\u30FB\u30DF\u30AF\u30ED\u30F3\u5CF6","common":"\u30B5\u30F3\u30D4\u30A8\u30FC\u30EB\u5CF6\u53CA\u3073\u30DF\u30AF\u30ED\u30F3\u5CF6"},"kor":{"official":"\uC0DD\uD53C\uC5D0\uB974 \uBBF8\uD074\uB871","common":"\uC0DD\uD53C\uC5D0\uB974 \uBBF8\uD074\uB871"},"nld":{"official":"Saint-Pierre en Miquelon","common":"Saint Pierre en Miquelon"},"per":{"official":"\u0633\u0646-\u067E\u06CC\u0631-\u0627-\u0645\u06CC\u06A9\u0644\u0648\u0646","common":"\u0633\u0646-\u067E\u06CC\u0650\u0631 \u0648 \u0645\u06CC\u06A9\u0644\u064F\u0646"},"pol":{"official":"Saint-Pierre i Miquelon","common":"Saint-Pierre i Miquelon"},"por":{"official":"Saint Pierre e Miquelon","common":"Saint-Pierre e Miquelon"},"rus":{"official":"\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D","common":"\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D"},"slk":{"official":"Ostrovy Saint Pierre a Miquelon","common":"Saint Pierre a Miquelon"},"spa":{"official":"San Pedro y Miquel\xf3n","common":"San Pedro y Miquel\xf3n"},"srp":{"official":"Sent Pjer i Mikelon","common":"Sent Pjer i Mikelon"},"swe":{"official":"Saint-Pierre och Miquelon","common":"Saint-Pierre och Miquelon"},"tur":{"official":"Saint Pierre ve Miquelon","common":"Saint Pierre ve Miquelon"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u067E\u06CC\u0626\u0631 \u0648 \u0645\u06CC\u06A9\u06CC\u0644\u0648\u0646","common":"\u0633\u06CC\u0646\u0679 \u067E\u06CC\u0626\u0631 \u0648 \u0645\u06CC\u06A9\u06CC\u0644\u0648\u0646"},"zho":{"official":"\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686","common":"\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686"}},"latlng":[46.83333333,-56.33333333],"landlocked":false,"borders":[],"area":242,"flag":"\uD83C\uDDF5\uD83C\uDDF2","demonyms":{"eng":{"f":"Saint-Pierrais, Miquelonnais","m":"Saint-Pierrais, Miquelonnais"},"fra":{"f":"Saint-Pierraise, Miquelonaise","m":"Saint-Pierrais, Miquelonais"}}},{"name":{"common":"Serbia","official":"Republic of Serbia","native":{"srp":{"official":"\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0440\u0431\u0438\u0458\u0430","common":"\u0421\u0440\u0431\u0438\u0458\u0430"}}},"tld":[".rs",".\u0441\u0440\u0431"],"cca2":"RS","ccn3":"688","cca3":"SRB","cioc":"SRB","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"RSD":{"name":"Serbian dinar","symbol":"\u0434\u0438\u043D."}},"idd":{"root":"+3","suffixes":["81"]},"capital":["Belgrade"],"altSpellings":["RS","Srbija","Republika Srbija","\u0421\u0440\u0431\u0438\u0458\u0430","\u0420\u0435\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0440\u0431\u0438\u0458\u0430","Republic of Serbia"],"region":"Europe","subregion":"Southeast Europe","languages":{"srp":"Serbian"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0635\u064A\u0631\u0628\u064A\u0627","common":"\u0635\u064A\u0631\u0628\u064A\u0627"},"ces":{"official":"Srbsk\xe1 republika","common":"Srbsko"},"deu":{"official":"Republik Serbien","common":"Serbien"},"est":{"official":"Serbia Vabariik","common":"Serbia"},"fin":{"official":"Serbian tasavalta","common":"Serbia"},"fra":{"official":"R\xe9publique de Serbie","common":"Serbie"},"hrv":{"official":"Republika Srbija","common":"Srbija"},"hun":{"official":"Szerb K\xf6zt\xe1rsas\xe1g","common":"Szerbia"},"ita":{"official":"Repubblica di Serbia","common":"Serbia"},"jpn":{"official":"\u30BB\u30EB\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30BB\u30EB\u30D3\u30A2"},"kor":{"official":"\uC138\uB974\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uC138\uB974\uBE44\uC544"},"nld":{"official":"Republiek Servi\xeb","common":"Servi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0635\u0631\u0628\u0633\u062A\u0627\u0646","common":"\u0635\u0631\u0628\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Serbii","common":"Serbia"},"por":{"official":"Rep\xfablica da S\xe9rvia","common":"S\xe9rvia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0440\u0431\u0438\u044F","common":"\u0421\u0435\u0440\u0431\u0438\u044F"},"slk":{"official":"Srbsk\xe1 republika","common":"Srbsko"},"spa":{"official":"Rep\xfablica de Serbia","common":"Serbia"},"srp":{"official":"Republika Srbija","common":"Srbija"},"swe":{"official":"Republiken Serbien","common":"Serbien"},"tur":{"official":"S\u0131rbistan Cumhuriyeti","common":"S\u0131rbistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0631\u0628\u06CC\u0627","common":"\u0633\u0631\u0628\u06CC\u0627"},"zho":{"official":"\u585E\u5C14\u7EF4\u4E9A\u5171\u548C\u56FD","common":"\u585E\u5C14\u7EF4\u4E9A"}},"latlng":[44,21],"landlocked":true,"borders":["BIH","BGR","HRV","HUN","UNK","MKD","MNE","ROU"],"area":88361,"flag":"\uD83C\uDDF7\uD83C\uDDF8","demonyms":{"eng":{"f":"Serbian","m":"Serbian"},"fra":{"f":"Serbe","m":"Serbe"}}},{"name":{"common":"South Sudan","official":"Republic of South Sudan","native":{"eng":{"official":"Republic of South Sudan","common":"South Sudan"}}},"tld":[".ss"],"cca2":"SS","ccn3":"728","cca3":"SSD","cioc":"","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SSP":{"name":"South Sudanese pound","symbol":"\xa3"}},"idd":{"root":"+2","suffixes":["11"]},"capital":["Juba"],"altSpellings":["SS"],"region":"Africa","subregion":"Middle Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646","common":"\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646"},"ces":{"official":"Jihos\xfad\xe1nsk\xe1 republika","common":"Ji\u017En\xed S\xfad\xe1n"},"deu":{"official":"Republik S\xfcdsudan","common":"S\xfcdsudan"},"est":{"official":"L\xf5una-Sudaani Vabariik","common":"L\xf5una-Sudaan"},"fin":{"official":"Etel\xe4-Sudanin tasavalta","common":"Etel\xe4-Sudan"},"fra":{"official":"R\xe9publique du Soudan du Sud","common":"Soudan du Sud"},"hrv":{"official":"Republika Ju\u017Eni Sudan","common":"Ju\u017Eni Sudan"},"hun":{"official":"D\xe9l-szud\xe1ni K\xf6zt\xe1rsas\xe1g","common":"D\xe9l-Szud\xe1n"},"ita":{"official":"Repubblica del Sudan del Sud","common":"Sudan del sud"},"jpn":{"official":"\u5357\u30B9\u30FC\u30C0\u30F3\u5171\u548C\u56FD","common":"\u5357\u30B9\u30FC\u30C0\u30F3"},"kor":{"official":"\uB0A8\uC218\uB2E8 \uACF5\uD654\uAD6D","common":"\uB0A8\uC218\uB2E8"},"nld":{"official":"Republiek Zuid-Soedan","common":"Zuid-Soedan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0648\u062F\u0627\u0646 \u062C\u0646\u0648\u0628\u06CC","common":"\u0633\u0648\u062F\u0627\u0646 \u062C\u0646\u0648\u0628\u06CC"},"pol":{"official":"Republika Sudanu","common":"Sudan"},"por":{"official":"Rep\xfablica do Sud\xe3o do Sul","common":"Sud\xe3o do Sul"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u042E\u0436\u043D\u044B\u0439 \u0421\u0443\u0434\u0430\u043D","common":"\u042E\u0436\u043D\u044B\u0439 \u0421\u0443\u0434\u0430\u043D"},"slk":{"official":"Juhosud\xe1nska republika","common":"Ju\u017En\xfd Sud\xe1n"},"spa":{"official":"Rep\xfablica de Sud\xe1n del Sur","common":"Sud\xe1n del Sur"},"srp":{"official":"Republika Ju\u017Eni Sudan","common":"Ju\u017Eni Sudan"},"swe":{"official":"Republiken Sydsudan","common":"Sydsudan"},"tur":{"official":"G\xfcney Sudan Cumhuriyeti","common":"G\xfcney Sudan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0646\u0648\u0628\u06CC \u0633\u0648\u0688\u0627\u0646","common":"\u062C\u0646\u0648\u0628\u06CC \u0633\u0648\u0688\u0627\u0646"},"zho":{"official":"\u5357\u82CF\u4E39\u5171\u548C\u56FD","common":"\u5357\u82CF\u4E39"}},"latlng":[7,30],"landlocked":true,"borders":["CAF","COD","ETH","KEN","SDN","UGA"],"area":619745,"flag":"\uD83C\uDDF8\uD83C\uDDF8","demonyms":{"eng":{"f":"South Sudanese","m":"South Sudanese"},"fra":{"f":"Sud-Soudanaise","m":"Sud-Soudanais"}}},{"name":{"common":"S\xe3o Tom\xe9 and Pr\xedncipe","official":"Democratic Republic of S\xe3o Tom\xe9 and Pr\xedncipe","native":{"por":{"official":"Rep\xfablica Democr\xe1tica do S\xe3o Tom\xe9 e Pr\xedncipe","common":"S\xe3o Tom\xe9 e Pr\xedncipe"}}},"tld":[".st"],"cca2":"ST","ccn3":"678","cca3":"STP","cioc":"STP","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"STN":{"name":"S\xe3o Tom\xe9 and Pr\xedncipe dobra","symbol":"Db"}},"idd":{"root":"+2","suffixes":["39"]},"capital":["S\xe3o Tom\xe9"],"altSpellings":["ST","Democratic Republic of S\xe3o Tom\xe9 and Pr\xedncipe","Sao Tome and Principe","Rep\xfablica Democr\xe1tica de S\xe3o Tom\xe9 e Pr\xedncipe"],"region":"Africa","subregion":"Middle Africa","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0627\u0648 \u062A\u0648\u0645\u064A \u0648\u0628\u0631\u064A\u0646\u0633\u064A\u0628 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u0633\u0627\u0648 \u062A\u0648\u0645\u064A \u0648\u0628\u0631\u064A\u0646\u0633\u064A\u0628"},"ces":{"official":"Demokratick\xe1 republika Svat\xfd Tom\xe1\u0161 a Princ\u016Fv ostrov","common":"Svat\xfd Tom\xe1\u0161 a Princ\u016Fv ostrov"},"deu":{"official":"Demokratische Republik S\xe3o Tom\xe9 und Pr\xedncipe","common":"S\xe3o Tom\xe9 und Pr\xedncipe"},"est":{"official":"S\xe3o Tom\xe9 ja Pr\xedncipe Demokraatlik Vabariik","common":"S\xe3o Tom\xe9 ja Pr\xedncipe"},"fin":{"official":"S\xe3o Tom\xe9 ja Pr\xedncipen demokraattinen tasavalta","common":"S\xe3o T\xe9me ja Pr\xedncipe"},"fra":{"official":"R\xe9publique d\xe9mocratique de S\xe3o Tom\xe9 et Pr\xedncipe","common":"S\xe3o Tom\xe9 et Pr\xedncipe"},"hrv":{"official":"Demokratska Republika S\xe3o Tome i Principe","common":"Sveti Toma i Princip"},"hun":{"official":"S\xe3o Tom\xe9 \xe9s Pr\xedncipe Demokratikus K\xf6zt\xe1rsas\xe1g","common":"S\xe3o Tom\xe9 \xe9s Pr\xedncipe"},"ita":{"official":"Repubblica democratica di S\xe3o Tom\xe9 e Pr\xedncipe","common":"S\xe3o Tom\xe9 e Pr\xedncipe"},"jpn":{"official":"\u30B5\u30F3\u30C8\u30E1\u30FB\u30D7\u30EA\u30F3\u30B7\u30DA\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u30B5\u30F3\u30C8\u30E1\u30FB\u30D7\u30EA\u30F3\u30B7\u30DA"},"kor":{"official":"\uC0C1\uD22C\uBA54 \uD504\uB9B0\uC2DC\uD398 \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uC0C1\uD22C\uBA54 \uD504\uB9B0\uC2DC\uD398"},"nld":{"official":"Democratische Republiek Sao Tom\xe9 en Principe","common":"Sao Tom\xe9 en Principe"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u0633\u0627\u0626\u0648\u062A\u0648\u0645\u0647 \u0648 \u067E\u0631\u0646\u0633\u06CC\u067E","common":"\u0633\u0627\u0626\u0648\u062A\u0648\u0645\u0647 \u0648 \u067E\u0631\u0646\u0633\u06CC\u067E"},"pol":{"official":"Demokratyczna Republika Wysp \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119cej","common":"Wyspy \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119ca"},"por":{"official":"Rep\xfablica Democr\xe1tica de S\xe3o Tom\xe9 e Pr\xedncipe","common":"S\xe3o Tom\xe9 e Pr\xedncipe"},"rus":{"official":"\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0430\u043D-\u0422\u043E\u043C\u0435 \u0438 \u041F\u0440\u0438\u043D\u0441\u0438\u043F\u0438","common":"\u0421\u0430\u043D-\u0422\u043E\u043C\u0435 \u0438 \u041F\u0440\u0438\u043D\u0441\u0438\u043F\u0438"},"slk":{"official":"Demokratick\xe1 republika Sv\xe4t\xe9ho Tom\xe1\u0161a A princovho ostrova","common":"Sv\xe4t\xfd Tom\xe1\u0161 a Princov ostrov"},"spa":{"official":"Rep\xfablica Democr\xe1tica de Santo Tom\xe9 y Pr\xedncipe","common":"Santo Tom\xe9 y Pr\xedncipe"},"srp":{"official":"Demokratska Republika Sao Tome i Prinsipe","common":"Sao Tome i Prinsipe"},"swe":{"official":"Demokratiska republiken S\xe3o Tom\xe9 och Pr\xedncipe","common":"S\xe3o Tom\xe9 och Pr\xedncipe"},"tur":{"official":"S\xe3o Tom\xe9 ve Pr\xedncipe Demokratik Cumhuriyeti","common":"S\xe3o Tom\xe9 ve Pr\xedncipe"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0627\u0624 \u0679\u0648\u0645\u06D2 \u0648 \u067E\u0631\u0646\u0633\u067E\u06D2","common":"\u0633\u0627\u0624 \u0679\u0648\u0645\u06D2 \u0648 \u067E\u0631\u0646\u0633\u067E\u06D2"},"zho":{"official":"\u5723\u591A\u7F8E\u548C\u666E\u6797\u897F\u6BD4\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u5723\u591A\u7F8E\u548C\u666E\u6797\u897F\u6BD4"}},"latlng":[1,7],"landlocked":false,"borders":[],"area":964,"flag":"\uD83C\uDDF8\uD83C\uDDF9","demonyms":{"eng":{"f":"Sao Tomean","m":"Sao Tomean"},"fra":{"f":"Santom\xe9enne","m":"Santom\xe9en"}}},{"name":{"common":"Suriname","official":"Republic of Suriname","native":{"nld":{"official":"Republiek Suriname","common":"Suriname"}}},"tld":[".sr"],"cca2":"SR","ccn3":"740","cca3":"SUR","cioc":"SUR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"SRD":{"name":"Surinamese dollar","symbol":"$"}},"idd":{"root":"+5","suffixes":["97"]},"capital":["Paramaribo"],"altSpellings":["SR","Sarnam","Sranangron","Republic of Suriname","Republiek Suriname"],"region":"Americas","subregion":"South America","languages":{"nld":"Dutch"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0648\u0631\u064A\u0646\u0627\u0645","common":"\u0633\u0648\u0631\u064A\u0646\u0627\u0645"},"ces":{"official":"Republika Surinam","common":"Surinam"},"deu":{"official":"Republik Suriname","common":"Suriname"},"est":{"official":"Suriname Vabariik","common":"Suriname"},"fin":{"official":"Surinamen tasavalta","common":"Suriname"},"fra":{"official":"R\xe9publique du Suriname","common":"Surinam"},"hrv":{"official":"Republika Surinam","common":"Surinam"},"hun":{"official":"Suriname K\xf6zt\xe1rsas\xe1g","common":"Suriname"},"ita":{"official":"Repubblica del Suriname","common":"Suriname"},"jpn":{"official":"\u30B9\u30EA\u30CA\u30E0\u5171\u548C\u56FD","common":"\u30B9\u30EA\u30CA\u30E0"},"kor":{"official":"\uC218\uB9AC\uB0A8 \uACF5\uD654\uAD6D","common":"\uC218\uB9AC\uB0A8"},"nld":{"official":"Republiek Suriname","common":"Suriname"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0648\u0631\u06CC\u0646\u0627\u0645","common":"\u0633\u0648\u0631\u06CC\u0646\u0627\u0645"},"pol":{"official":"Republika Surinamu","common":"Surinam"},"por":{"official":"Rep\xfablica do Suriname","common":"Suriname"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0443\u0440\u0438\u043D\u0430\u043C","common":"\u0421\u0443\u0440\u0438\u043D\u0430\u043C"},"slk":{"official":"Surinamsk\xe1 republika","common":"Surinam"},"spa":{"official":"Rep\xfablica de Suriname","common":"Surinam"},"srp":{"official":"Republika Surinam","common":"Surinam"},"swe":{"official":"Republiken Surinam","common":"Surinam"},"tur":{"official":"Surinam Cumhuriyeti","common":"Surinam"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0631\u06CC\u0646\u0627\u0645","common":"\u0633\u0631\u06CC\u0646\u0627\u0645"},"zho":{"official":"\u82CF\u91CC\u5357\u5171\u548C\u56FD","common":"\u82CF\u91CC\u5357"}},"latlng":[4,-56],"landlocked":false,"borders":["BRA","GUF","GUY"],"area":163820,"flag":"\uD83C\uDDF8\uD83C\uDDF7","demonyms":{"eng":{"f":"Surinamer","m":"Surinamer"},"fra":{"f":"Surinamaise","m":"Surinamais"}}},{"name":{"common":"Slovakia","official":"Slovak Republic","native":{"slk":{"official":"Slovensk\xe1 republika","common":"Slovensko"}}},"tld":[".sk"],"cca2":"SK","ccn3":"703","cca3":"SVK","cioc":"SVK","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+4","suffixes":["21"]},"capital":["Bratislava"],"altSpellings":["SK","Slovak Republic","Slovensk\xe1 republika"],"region":"Europe","subregion":"Central Europe","languages":{"slk":"Slovak"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0644\u0648\u0641\u0627\u0643\u064A\u0627","common":"\u0633\u0644\u0648\u0641\u0627\u0643\u064A\u0627"},"ces":{"official":"Slovensk\xe1 republika","common":"Slovensko"},"deu":{"official":"Slowakische Republik","common":"Slowakei"},"est":{"official":"Slovaki Vabariik","common":"Slovakkia"},"fin":{"official":"Slovakian tasavalta","common":"Slovakia"},"fra":{"official":"R\xe9publique slovaque","common":"Slovaquie"},"hrv":{"official":"slova\u010Dka","common":"Slova\u010Dka"},"hun":{"official":"Szlov\xe1k K\xf6zt\xe1rsas\xe1g","common":"Szlov\xe1kia"},"ita":{"official":"Repubblica slovacca","common":"Slovacchia"},"jpn":{"official":"\u30B9\u30ED\u30D0\u30AD\u30A2\u5171\u548C\u56FD","common":"\u30B9\u30ED\u30D0\u30AD\u30A2"},"kor":{"official":"\uC2AC\uB85C\uBC14\uD0A4\uC544 \uACF5\uD654\uAD6D","common":"\uC2AC\uB85C\uBC14\uD0A4\uC544"},"nld":{"official":"Slowaakse Republiek","common":"Slowakije"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0648\u0627\u06A9\u06CC","common":"\u0627\u0650\u0633\u0644\u064F\u0648\u0627\u06A9\u06CC"},"pol":{"official":"Republika S\u0142owacka","common":"S\u0142owacja"},"por":{"official":"Rep\xfablica Eslovaca","common":"Eslov\xe1quia"},"rus":{"official":"\u0421\u043B\u043E\u0432\u0430\u0446\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F"},"slk":{"official":"Slovensk\xe1 republika","common":"Slovensko"},"spa":{"official":"Rep\xfablica Eslovaca","common":"Eslovaquia"},"srp":{"official":"Slova\u010Dka republika","common":"Slova\u010Dka"},"swe":{"official":"Republiken Slovakien","common":"Slovakien"},"tur":{"official":"Slovak Cumhuriyeti","common":"Slovakya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0644\u0648\u0648\u0627\u06A9\u06CC\u06C1","common":"\u0633\u0644\u0648\u0648\u0627\u06A9\u06CC\u06C1"},"zho":{"official":"\u65AF\u6D1B\u4F10\u514B\u5171\u548C\u56FD","common":"\u65AF\u6D1B\u4F10\u514B"}},"latlng":[48.66666666,19.5],"landlocked":true,"borders":["AUT","CZE","HUN","POL","UKR"],"area":49037,"flag":"\uD83C\uDDF8\uD83C\uDDF0","demonyms":{"eng":{"f":"Slovak","m":"Slovak"},"fra":{"f":"Slovaque","m":"Slovaque"}}},{"name":{"common":"Slovenia","official":"Republic of Slovenia","native":{"slv":{"official":"Republika Slovenija","common":"Slovenija"}}},"tld":[".si"],"cca2":"SI","ccn3":"705","cca3":"SVN","cioc":"SLO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["86"]},"capital":["Ljubljana"],"altSpellings":["SI","Republic of Slovenia","Republika Slovenija"],"region":"Europe","subregion":"Central Europe","languages":{"slv":"Slovene"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u0644\u0648\u0641\u064A\u0646\u064A\u0627","common":"\u0633\u0644\u0648\u0641\u064A\u0646\u064A\u0627"},"ces":{"official":"Slovinsk\xe1 republika","common":"Slovinsko"},"deu":{"official":"Republik Slowenien","common":"Slowenien"},"est":{"official":"Sloveenia Vabariik","common":"Sloveenia"},"fin":{"official":"Slovenian tasavalta","common":"Slovenia"},"fra":{"official":"R\xe9publique de Slov\xe9nie","common":"Slov\xe9nie"},"hrv":{"official":"Republika Slovenija","common":"Slovenija"},"hun":{"official":"Szlov\xe9n K\xf6zt\xe1rsas\xe1g","common":"Szlov\xe9nia"},"ita":{"official":"Repubblica di Slovenia","common":"Slovenia"},"jpn":{"official":"\u30B9\u30ED\u30D9\u30CB\u30A2\u5171\u548C\u56FD","common":"\u30B9\u30ED\u30D9\u30CB\u30A2"},"kor":{"official":"\uC2AC\uB85C\uBCA0\uB2C8\uC544 \uACF5\uD654\uAD6D","common":"\uC2AC\uB85C\uBCA0\uB2C8\uC544"},"nld":{"official":"Republiek Sloveni\xeb","common":"Sloveni\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0648\u0648\u0646\u06CC","common":"\u0627\u0633\u0644\u0648\u0648\u0646\u06CC"},"pol":{"official":"Republika S\u0142owenii","common":"S\u0142owenia"},"por":{"official":"Rep\xfablica da Eslov\xe9nia","common":"Eslov\xe9nia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F","common":"\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"},"slk":{"official":"Slovinsk\xe1 republika","common":"Slovinsko"},"spa":{"official":"Rep\xfablica de Eslovenia","common":"Eslovenia"},"srp":{"official":"Republika Slovenija","common":"Slovenija"},"swe":{"official":"Republiken Slovenien","common":"Slovenien"},"tur":{"official":"Slovenya Cumhuriyeti","common":"Slovenya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0644\u0648\u0648\u06CC\u0646\u06CC\u0627","common":"\u0633\u0644\u0648\u0648\u06CC\u0646\u06CC\u0627"},"zho":{"official":"\u65AF\u6D1B\u6587\u5C3C\u4E9A\u5171\u548C\u56FD","common":"\u65AF\u6D1B\u6587\u5C3C\u4E9A"}},"latlng":[46.11666666,14.81666666],"landlocked":false,"borders":["AUT","HRV","ITA","HUN"],"area":20273,"flag":"\uD83C\uDDF8\uD83C\uDDEE","demonyms":{"eng":{"f":"Slovene","m":"Slovene"},"fra":{"f":"Slov\xe8ne","m":"Slov\xe8ne"}}},{"name":{"common":"Sweden","official":"Kingdom of Sweden","native":{"swe":{"official":"Konungariket Sverige","common":"Sverige"}}},"tld":[".se"],"cca2":"SE","ccn3":"752","cca3":"SWE","cioc":"SWE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"SEK":{"name":"Swedish krona","symbol":"kr"}},"idd":{"root":"+4","suffixes":["6"]},"capital":["Stockholm"],"altSpellings":["SE","Kingdom of Sweden","Konungariket Sverige"],"region":"Europe","subregion":"Northern Europe","languages":{"swe":"Swedish"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0633\u0648\u064A\u062F","common":"\u0627\u0644\u0633\u0648\u064A\u062F"},"ces":{"official":"\u0160v\xe9dsk\xe9 kr\xe1lovstv\xed","common":"\u0160v\xe9dsko"},"deu":{"official":"K\xf6nigreich Schweden","common":"Schweden"},"est":{"official":"Rootsi Kuningriik","common":"Rootsi"},"fin":{"official":"Ruotsin kuningaskunta","common":"Ruotsi"},"fra":{"official":"Royaume de Su\xe8de","common":"Su\xe8de"},"hrv":{"official":"Kraljevina \u0160vedska","common":"\u0160vedska"},"hun":{"official":"Sv\xe9d Kir\xe1lys\xe1g","common":"Sv\xe9dorsz\xe1g"},"ita":{"official":"Regno di Svezia","common":"Svezia"},"jpn":{"official":"\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3\u738B\u56FD","common":"\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3"},"kor":{"official":"\uC2A4\uC6E8\uB374 \uC655\uAD6D","common":"\uC2A4\uC6E8\uB374"},"nld":{"official":"Koninkrijk Zweden","common":"Zweden"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0633\u0648\u0626\u062F","common":"\u0633\u0648\u0626\u062F"},"pol":{"official":"Kr\xf3lestwo Szwecji","common":"Szwecja"},"por":{"official":"Reino da Su\xe9cia","common":"Su\xe9cia"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0428\u0432\u0435\u0446\u0438\u044F","common":"\u0428\u0432\u0435\u0446\u0438\u044F"},"slk":{"official":"\u0160v\xe9dske kr\xe1\u013Eovstvo","common":"\u0160v\xe9dsko"},"spa":{"official":"Reino de Suecia","common":"Suecia"},"srp":{"official":"Kraljevina \u0160vedska","common":"\u0160vedska"},"swe":{"official":"Konungariket Sverige","common":"Sverige"},"tur":{"official":"\u0130sve\xe7 Krall\u0131\u011F\u0131","common":"\u0130sve\xe7"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0633\u0648\u06CC\u0688\u0646","common":"\u0633\u0648\u06CC\u0688\u0646"},"zho":{"official":"\u745E\u5178\u738B\u56FD","common":"\u745E\u5178"}},"latlng":[62,15],"landlocked":false,"borders":["FIN","NOR"],"area":450295,"flag":"\uD83C\uDDF8\uD83C\uDDEA","demonyms":{"eng":{"f":"Swedish","m":"Swedish"},"fra":{"f":"Su\xe9doise","m":"Su\xe9dois"}}},{"name":{"common":"Eswatini","official":"Kingdom of Eswatini","native":{"eng":{"official":"Kingdom of Eswatini","common":"Eswatini"},"ssw":{"official":"Umbuso weSwatini","common":"eSwatini"}}},"tld":[".sz"],"cca2":"SZ","ccn3":"748","cca3":"SWZ","cioc":"SWZ","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SZL":{"name":"Swazi lilangeni","symbol":"L"},"ZAR":{"name":"South African rand","symbol":"R"}},"idd":{"root":"+2","suffixes":["68"]},"capital":["Lobamba"],"altSpellings":["SZ","Swaziland","weSwatini","Swatini","Ngwane","Kingdom of Eswatini","Umbuso weSwatini"],"region":"Africa","subregion":"Southern Africa","languages":{"eng":"English","ssw":"Swazi"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u0625\u0633\u0648\u0627\u062A\u064A\u0646\u064A","common":"\u0625\u0633\u0648\u0627\u062A\u064A\u0646\u064A"},"ces":{"official":"Svazijsk\xe9 kr\xe1lovstv\xed","common":"Svazijsko"},"deu":{"official":"K\xf6nigreich Eswatini","common":"Swasiland"},"est":{"official":"eSwatini Kuningriik","common":"Svaasimaa"},"fin":{"official":"Swazimaan kuningaskunta","common":"Swazimaa"},"fra":{"official":"Royaume d\u2019Eswatini","common":"Swaziland"},"hrv":{"official":"Kraljevina eSwatini","common":"Svazi"},"hun":{"official":"Szv\xe1zif\xf6ldi Kir\xe1lys\xe1g","common":"Szv\xe1zif\xf6ld"},"ita":{"official":"Regno di eSwatini","common":"Swaziland"},"jpn":{"official":"\u30A8\u30B9\u30EF\u30C6\u30A3\u30CB\u738B\u56FD","common":"\u30A8\u30B9\u30EF\u30C6\u30A3\u30CB"},"kor":{"official":"\uC5D0\uC2A4\uC640\uD2F0\uB2C8 \uC655\uAD6D","common":"\uC5D0\uC2A4\uC640\uD2F0\uB2C8"},"nld":{"official":"Koninkrijk eSwatini","common":"Swaziland"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u0633\u0648\u0627\u0632\u06CC\u0644\u0646\u062F","common":"\u0627\u0633\u0648\u0627\u062A\u06CC\u0646\u06CC"},"pol":{"official":"Kr\xf3lestwo Suazi","common":"Suazi"},"por":{"official":"Reino de eSwatini","common":"Suazil\xe2ndia"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0421\u0432\u0430\u0437\u0438\u043B\u0435\u043D\u0434","common":"\u0421\u0432\u0430\u0437\u0438\u043B\u0435\u043D\u0434"},"slk":{"official":"Svazijsk\xe9 kr\xe1\u013Eovstvo","common":"Svazijsko"},"spa":{"official":"Reino de eSwatini","common":"Suazilandia"},"srp":{"official":"Kraljevina Esvatini","common":"Esvatini"},"swe":{"official":"Konungariket Eswatini","common":"Swaziland"},"tur":{"official":"Esvatini Krall\u0131\u011F\u0131","common":"Esvatini"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0633\u0648\u0627\u0632\u06CC \u0644\u06CC\u0646\u0688","common":"\u0633\u0648\u0627\u0632\u06CC \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u65AF\u5A01\u58EB\u5170\u738B\u56FD","common":"\u65AF\u5A01\u58EB\u5170"}},"latlng":[-26.5,31.5],"landlocked":true,"borders":["MOZ","ZAF"],"area":17364,"flag":"\uD83C\uDDF8\uD83C\uDDFF","demonyms":{"eng":{"f":"Swazi","m":"Swazi"},"fra":{"f":"Swazie","m":"Swazie"}}},{"name":{"common":"Sint Maarten","official":"Sint Maarten","native":{"eng":{"official":"Sint Maarten","common":"Sint Maarten"},"fra":{"official":"Saint-Martin","common":"Saint-Martin"},"nld":{"official":"Sint Maarten","common":"Sint Maarten"}}},"tld":[".sx"],"cca2":"SX","ccn3":"534","cca3":"SXM","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"ANG":{"name":"Netherlands Antillean guilder","symbol":"\u0192"}},"idd":{"root":"+1","suffixes":["721"]},"capital":["Philipsburg"],"altSpellings":["SX","Sint Maarten (Dutch part)"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English","fra":"French","nld":"Dutch"},"translations":{"ara":{"official":"\u0633\u064A\u0646\u062A \u0645\u0627\u0631\u062A\u0646","common":"\u0633\u064A\u0646\u062A \u0645\u0627\u0631\u062A\u0646"},"ces":{"official":"Svat\xfd Martin","common":"Svat\xfd Martin (Nizozemsko)"},"deu":{"official":"Sint Maarten","common":"Sint Maarten"},"est":{"official":"Sint Maarten","common":"Sint Maarten"},"fin":{"official":"Sint Maarten","common":"Sint Maarten"},"fra":{"official":"Sint Maarten","common":"Saint-Martin"},"hrv":{"official":"Sveti Martin","common":"Sveti Martin"},"hun":{"official":"Sint Maarten","common":"Sint Maarten"},"ita":{"official":"Sint Maarten","common":"Sint Maarten"},"jpn":{"official":"\u30B7\u30F3\u30C8\u30FB\u30DE\u30FC\u30EB\u30C6\u30F3","common":"\u30B7\u30F3\u30C8\u30FB\u30DE\u30FC\u30EB\u30C6\u30F3"},"kor":{"official":"\uC2E0\uD2B8\uB9C8\uB974\uD134","common":"\uC2E0\uD2B8\uB9C8\uB974\uD134"},"nld":{"official":"Sint Maarten","common":"Sint Maarten"},"per":{"official":"\u0633\u0646 \u0645\u0627\u0631\u062A\u0646","common":"\u0633\u0646 \u0645\u0627\u0631\u062A\u0646"},"pol":{"official":"Sint Maarten","common":"Sint Maarten"},"por":{"official":"Sint Maarten","common":"S\xe3o Martinho"},"rus":{"official":"\u0421\u0438\u043D\u0442-\u041C\u0430\u0430\u0440\u0442\u0435\u043D","common":"\u0421\u0438\u043D\u0442-\u041C\u0430\u0440\u0442\u0435\u043D"},"slk":{"official":"Sint Maarten","common":"Sint Maarten"},"spa":{"official":"Sint Maarten","common":"Sint Maarten"},"srp":{"official":"Sveti Martin","common":"Sveti Martin"},"swe":{"official":"Sint Maarten","common":"Sint Maarten"},"tur":{"official":"Sint Maarten","common":"Sint Maarten"},"urd":{"official":"\u0633\u0646\u0679 \u0645\u0627\u0631\u0679\u0646","common":"\u0633\u0646\u0679 \u0645\u0627\u0631\u0679\u0646"},"zho":{"official":"\u5723\u9A6C\u4E01\u5C9B","common":"\u5723\u9A6C\u4E01\u5C9B"}},"latlng":[18.033333,-63.05],"landlocked":false,"borders":["MAF"],"area":34,"flag":"\uD83C\uDDF8\uD83C\uDDFD","demonyms":{"eng":{"f":"St. Maartener","m":"St. Maartener"},"fra":{"f":"Saint-Martinoise","m":"Saint-Martinois"}}},{"name":{"common":"Seychelles","official":"Republic of Seychelles","native":{"crs":{"official":"Repiblik Sesel","common":"Sesel"},"eng":{"official":"Republic of Seychelles","common":"Seychelles"},"fra":{"official":"R\xe9publique des Seychelles","common":"Seychelles"}}},"tld":[".sc"],"cca2":"SC","ccn3":"690","cca3":"SYC","cioc":"SEY","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"SCR":{"name":"Seychellois rupee","symbol":"\u20A8"}},"idd":{"root":"+2","suffixes":["48"]},"capital":["Victoria"],"altSpellings":["SC","Republic of Seychelles","Repiblik Sesel","R\xe9publique des Seychelles"],"region":"Africa","subregion":"Eastern Africa","languages":{"crs":"Seychellois Creole","eng":"English","fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0633\u064A\u0634\u0644","common":"\u0633\u064A\u0634\u0644"},"ces":{"official":"Seychelsk\xe1 republika","common":"Seychely"},"deu":{"official":"Republik der Seychellen","common":"Seychellen"},"est":{"official":"Sei\u0161elli Vabariik","common":"Sei\u0161ellid"},"fin":{"official":"Seychellien tasavalta","common":"Seychellit"},"fra":{"official":"R\xe9publique des Seychelles","common":"Seychelles"},"hrv":{"official":"Republika Sej\u0161eli","common":"Sej\u0161eli"},"hun":{"official":"Seychelle K\xf6zt\xe1rsas\xe1g","common":"Seychelle-szigetek"},"ita":{"official":"Repubblica delle Seychelles","common":"Seychelles"},"jpn":{"official":"\u30BB\u30FC\u30B7\u30A7\u30EB\u5171\u548C\u56FD","common":"\u30BB\u30FC\u30B7\u30A7\u30EB"},"kor":{"official":"\uC138\uC774\uC178 \uACF5\uD654\uAD6D","common":"\uC138\uC774\uC178"},"nld":{"official":"Republiek der Seychellen","common":"Seychellen"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u06CC\u0634\u0644","common":"\u0633\u06CC\u0634\u0644"},"pol":{"official":"Republika Seszeli","common":"Seszele"},"por":{"official":"Rep\xfablica das Seychelles","common":"Seicheles"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0439\u0448\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0421\u0435\u0439\u0448\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Seychelsk\xe1 republika","common":"Seychely"},"spa":{"official":"Rep\xfablica de las Seychelles","common":"Seychelles"},"srp":{"official":"Republika Sej\u0161eli","common":"Sej\u0161eli"},"swe":{"official":"Republiken Seychellerna","common":"Seychellerna"},"tur":{"official":"Sey\u015Feller Cumhuriyeti","common":"Sey\u015Feller"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u06CC\u0686\u06CC\u0644\u06CC\u0633","common":"\u0633\u06CC\u0686\u06CC\u0644\u06CC\u0633"},"zho":{"official":"\u585E\u820C\u5C14\u5171\u548C\u56FD","common":"\u585E\u820C\u5C14"}},"latlng":[-4.58333333,55.66666666],"landlocked":false,"borders":[],"area":452,"flag":"\uD83C\uDDF8\uD83C\uDDE8","demonyms":{"eng":{"f":"Seychellois","m":"Seychellois"},"fra":{"f":"Seychelloise","m":"Seychellois"}}},{"name":{"common":"Syria","official":"Syrian Arab Republic","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629","common":"\u0633\u0648\u0631\u064A\u0627"}}},"tld":[".sy","\u0633\u0648\u0631\u064A\u0627."],"cca2":"SY","ccn3":"760","cca3":"SYR","cioc":"SYR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"SYP":{"name":"Syrian pound","symbol":"\xa3"}},"idd":{"root":"+9","suffixes":["63"]},"capital":["Damascus"],"altSpellings":["SY","Syrian Arab Republic","Al-Jumh\u016Br\u012Byah Al-\u02BBArab\u012Byah As-S\u016Br\u012Byah"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629","common":"\u0633\u0648\u0631\u064A\u0627"},"ces":{"official":"Syrsk\xe1 arabsk\xe1 republika","common":"S\xfdrie"},"deu":{"official":"Arabische Republik Syrien","common":"Syrien"},"est":{"official":"S\xfc\xfcria Araabia Vabariik","common":"S\xfc\xfcria"},"fin":{"official":"Syyrian arabitasavalta","common":"Syyria"},"fra":{"official":"R\xe9publique arabe syrienne","common":"Syrie"},"hrv":{"official":"Sirijska Arapska Republika","common":"Sirija"},"hun":{"official":"Sz\xedriai Arab K\xf6zt\xe1rsas\xe1g","common":"Sz\xedria"},"ita":{"official":"Repubblica araba siriana","common":"Siria"},"jpn":{"official":"\u30B7\u30EA\u30A2\u30FB\u30A2\u30E9\u30D6\u5171\u548C\u56FD","common":"\u30B7\u30EA\u30A2"},"kor":{"official":"\uC2DC\uB9AC\uC544 \uC544\uB78D \uACF5\uD654\uAD6D","common":"\uC2DC\uB9AC\uC544"},"nld":{"official":"Syrische Arabische Republiek","common":"Syri\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0639\u0631\u0628\u06CC \u0633\u0648\u0631\u06CC\u0647","common":"\u0633\u0648\u0631\u06CC\u0647"},"pol":{"official":"Syryjska Republika Arabska","common":"Syria"},"por":{"official":"Rep\xfablica \xc1rabe S\xedria","common":"S\xedria"},"rus":{"official":"\u0421\u0438\u0440\u0438\u0439\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0431\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0421\u0438\u0440\u0438\u044F"},"slk":{"official":"S\xfdrska arabsk\xe1 republika","common":"S\xfdria"},"spa":{"official":"Rep\xfablica \xc1rabe Siria","common":"Siria"},"srp":{"official":"Sirijska Arapska Republika","common":"Sirija"},"swe":{"official":"Syriska arabiska republiken","common":"Syrien"},"tur":{"official":"Suriye Arap Cumhuriyeti","common":"Suriye"},"urd":{"official":"\u0639\u0631\u0628 \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0633\u0648\u0631\u06CC\u06C1","common":"\u0633\u0648\u0631\u06CC\u06C1"},"zho":{"official":"\u53D9\u5229\u4E9A\u963F\u62C9\u4F2F\u5171\u548C\u56FD","common":"\u53D9\u5229\u4E9A"}},"latlng":[35,38],"landlocked":false,"borders":["IRQ","ISR","JOR","LBN","TUR"],"area":185180,"flag":"\uD83C\uDDF8\uD83C\uDDFE","demonyms":{"eng":{"f":"Syrian","m":"Syrian"},"fra":{"f":"Syrienne","m":"Syrien"}}},{"name":{"common":"Turks and Caicos Islands","official":"Turks and Caicos Islands","native":{"eng":{"official":"Turks and Caicos Islands","common":"Turks and Caicos Islands"}}},"tld":[".tc"],"cca2":"TC","ccn3":"796","cca3":"TCA","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["649"]},"capital":["Cockburn Town"],"altSpellings":["TC"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u062A\u0648\u0631\u0643\u0633 \u0648\u0643\u0627\u064A\u0643\u0648\u0633","common":"\u062C\u0632\u0631 \u062A\u0648\u0631\u0643\u0633 \u0648\u0643\u0627\u064A\u0643\u0648\u0633"},"ces":{"official":"Turks a Caicos","common":"Turks a Caicos"},"deu":{"official":"Turks und Caicos Inseln","common":"Turks-und Caicosinseln"},"est":{"official":"Turksi ja Caicose saared","common":"Turks ja Caicos"},"fin":{"official":"Turks-ja Caicossaaret","common":"Turks-ja Caicossaaret"},"fra":{"official":"\xceles Turques et Ca\xefques","common":"\xceles Turques-et-Ca\xefques"},"hrv":{"official":"Otoci Turks i Caicos","common":"Otoci Turks i Caicos"},"hun":{"official":"Turks- \xe9s Caicos-szigetek","common":"Turks- \xe9s Caicos-szigetek"},"ita":{"official":"Turks e Caicos","common":"Isole Turks e Caicos"},"jpn":{"official":"\u30BF\u30FC\u30AF\u30B9\u30FB\u30AB\u30A4\u30B3\u30B9\u8AF8\u5CF6","common":"\u30BF\u30FC\u30AF\u30B9\u30FB\u30AB\u30A4\u30B3\u30B9\u8AF8\u5CF6"},"kor":{"official":"\uD130\uD06C\uC2A4 \uCF00\uC774\uCEE4\uC2A4 \uC81C\uB3C4","common":"\uD130\uD06C\uC2A4 \uCF00\uC774\uCEE4\uC2A4 \uC81C\uB3C4"},"nld":{"official":"Turks-en Caicoseilanden","common":"Turks-en Caicoseilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u062A\u0648\u0631\u06A9\u0633 \u0648 \u06A9\u0627\u06CC\u06A9\u0648\u0633","common":"\u062C\u0632\u0627\u06CC\u0631 \u062A\u0648\u0631\u06A9\u0633 \u0648 \u06A9\u0627\u06CC\u06A9\u0648\u0633"},"pol":{"official":"Turks i Caicos","common":"Turks i Caicos"},"por":{"official":"Ilhas Turks e Caicos","common":"Ilhas Turks e Caicos"},"rus":{"official":"\u0422\u0435\u0440\u043A\u0441 \u0438 \u041A\u0430\u0439\u043A\u043E\u0441 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0422\u0435\u0440\u043A\u0441 \u0438 \u041A\u0430\u0439\u043A\u043E\u0441"},"slk":{"official":"Ostrovy Turks a Caicos","common":"Turks a Caicos"},"spa":{"official":"Islas Turcas y Caicos","common":"Islas Turks y Caicos"},"srp":{"official":"Ostrva Terks i Kejkos","common":"Ostrva Terks i Kejkos"},"swe":{"official":"Turks- och Caicos\xf6arna","common":"Turks- och Caicos\xf6arna"},"tur":{"official":"Turks ve Caicos Adalar\u0131","common":"Turks ve Caicos Adalar\u0131"},"urd":{"official":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06CC\u06A9\u0633 \u0648 \u062A\u0631\u06A9\u06CC\u06C1","common":"\u062C\u0632\u0627\u0626\u0631 \u06A9\u06CC\u06A9\u0633 \u0648 \u062A\u0631\u06A9\u06CC\u06C1"},"zho":{"official":"\u7279\u514B\u65AF\u548C\u51EF\u79D1\u65AF\u7FA4\u5C9B","common":"\u7279\u514B\u65AF\u548C\u51EF\u79D1\u65AF\u7FA4\u5C9B"}},"latlng":[21.75,-71.58333333],"landlocked":false,"borders":[],"area":948,"flag":"\uD83C\uDDF9\uD83C\uDDE8","demonyms":{"eng":{"f":"Turks and Caicos Islander","m":"Turks and Caicos Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Chad","official":"Republic of Chad","native":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0634\u0627\u062F","common":"\u062A\u0634\u0627\u062F"},"fra":{"official":"R\xe9publique du Tchad","common":"Tchad"}}},"tld":[".td"],"cca2":"TD","ccn3":"148","cca3":"TCD","cioc":"CHA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XAF":{"name":"Central African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["35"]},"capital":["N\'Djamena"],"altSpellings":["TD","Tchad","Republic of Chad","R\xe9publique du Tchad"],"region":"Africa","subregion":"Middle Africa","languages":{"ara":"Arabic","fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0634\u0627\u062F","common":"\u062A\u0634\u0627\u062F"},"ces":{"official":"\u010Cadsk\xe1 republika","common":"\u010Cad"},"deu":{"official":"Republik Tschad","common":"Tschad"},"est":{"official":"T\u0161aadi Vabariik","common":"T\u0161aad"},"fin":{"official":"T\u0161adin tasavalta","common":"T\u0161ad"},"fra":{"official":"R\xe9publique du Tchad","common":"Tchad"},"hrv":{"official":"\u010Cadu","common":"\u010Cad"},"hun":{"official":"Cs\xe1d K\xf6zt\xe1rsas\xe1g","common":"Cs\xe1d"},"ita":{"official":"Repubblica del Ciad","common":"Ciad"},"jpn":{"official":"\u30C1\u30E3\u30C9\u5171\u548C\u56FD","common":"\u30C1\u30E3\u30C9"},"kor":{"official":"\uCC28\uB4DC \uACF5\uD654\uAD6D","common":"\uCC28\uB4DC"},"nld":{"official":"Republiek Tsjaad","common":"Tsjaad"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0686\u0627\u062F","common":"\u0686\u0627\u062F"},"pol":{"official":"Republika Czadu","common":"Czad"},"por":{"official":"Rep\xfablica do Chade","common":"Chade"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0427\u0430\u0434","common":"\u0427\u0430\u0434"},"slk":{"official":"\u010Cadsk\xe1 republika","common":"\u010Cad"},"spa":{"official":"Rep\xfablica de Chad","common":"Chad"},"srp":{"official":"Republika \u010Cad","common":"\u010Cad"},"swe":{"official":"Republiken Tchad","common":"Tchad"},"tur":{"official":"\xe7ad Cumhuriyeti","common":"\xe7ad"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u0627\u0688","common":"\u0686\u0627\u0688"},"zho":{"official":"\u4E4D\u5F97\u5171\u548C\u56FD","common":"\u4E4D\u5F97"}},"latlng":[15,19],"landlocked":true,"borders":["CMR","CAF","LBY","NER","NGA","SDN"],"area":1284000,"flag":"\uD83C\uDDF9\uD83C\uDDE9","demonyms":{"eng":{"f":"Chadian","m":"Chadian"},"fra":{"f":"Tchadienne","m":"Tchadien"}}},{"name":{"common":"Togo","official":"Togolese Republic","native":{"fra":{"official":"R\xe9publique togolaise","common":"Togo"}}},"tld":[".tg"],"cca2":"TG","ccn3":"768","cca3":"TGO","cioc":"TOG","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"XOF":{"name":"West African CFA franc","symbol":"Fr"}},"idd":{"root":"+2","suffixes":["28"]},"capital":["Lom\xe9"],"altSpellings":["TG","Togolese","Togolese Republic","R\xe9publique Togolaise"],"region":"Africa","subregion":"Western Africa","languages":{"fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0648\u063A\u0648","common":"\u062A\u0648\u063A\u0648"},"ces":{"official":"Republika Togo","common":"Togo"},"deu":{"official":"Republik Togo","common":"Togo"},"est":{"official":"Togo Vabariik","common":"Togo"},"fin":{"official":"Togon tasavalta","common":"Togo"},"fra":{"official":"R\xe9publique togolaise","common":"Togo"},"hrv":{"official":"Togolese Republika","common":"Togo"},"hun":{"official":"Tog\xf3i K\xf6zt\xe1rsas\xe1g","common":"Togo"},"ita":{"official":"Repubblica del Togo","common":"Togo"},"jpn":{"official":"\u30C8\u30FC\u30B4\u5171\u548C\u56FD","common":"\u30C8\u30FC\u30B4"},"kor":{"official":"\uD1A0\uACE0 \uACF5\uD654\uAD6D","common":"\uD1A0\uACE0"},"nld":{"official":"Republiek Togo","common":"Togo"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0648\u06AF\u0648","common":"\u062A\u0648\u06AF\u0648"},"pol":{"official":"Republika Togijska","common":"Togo"},"por":{"official":"Rep\xfablica do Togo","common":"Togo"},"rus":{"official":"\u0422\u043E\u0433\u043E \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0422\u043E\u0433\u043E"},"slk":{"official":"Togsk\xe1 republika","common":"Togo"},"spa":{"official":"Rep\xfablica de Togo","common":"Togo"},"srp":{"official":"Republika Togo","common":"Togo"},"swe":{"official":"Republiken Togo","common":"Togo"},"tur":{"official":"Togo Cumhuriyeti","common":"Togo"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0679\u0648\u06AF\u0648","common":"\u0679\u0648\u06AF\u0648"},"zho":{"official":"\u591A\u54E5\u5171\u548C\u56FD","common":"\u591A\u54E5"}},"latlng":[8,1.16666666],"landlocked":false,"borders":["BEN","BFA","GHA"],"area":56785,"flag":"\uD83C\uDDF9\uD83C\uDDEC","demonyms":{"eng":{"f":"Togolese","m":"Togolese"},"fra":{"f":"Togolaise","m":"Togolais"}}},{"name":{"common":"Thailand","official":"Kingdom of Thailand","native":{"tha":{"official":"\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E44\u0E17\u0E22","common":"\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22"}}},"tld":[".th",".\u0E44\u0E17\u0E22"],"cca2":"TH","ccn3":"764","cca3":"THA","cioc":"THA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"THB":{"name":"Thai baht","symbol":"\u0E3F"}},"idd":{"root":"+6","suffixes":["6"]},"capital":["Bangkok"],"altSpellings":["TH","Prathet","Thai","Kingdom of Thailand","\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E44\u0E17\u0E22","Ratcha Anachak Thai"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"tha":"Thai"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u062A\u0627\u064A\u0644\u0646\u062F","common":"\u062A\u0627\u064A\u0644\u0646\u062F"},"ces":{"official":"Thajsk\xe9 kr\xe1lovstv\xed","common":"Thajsko"},"deu":{"official":"K\xf6nigreich Thailand","common":"Thailand"},"est":{"official":"Tai Kuningriik","common":"Tai"},"fin":{"official":"Thaimaan kuningaskunta","common":"Thaimaa"},"fra":{"official":"Royaume de Tha\xeflande","common":"Tha\xeflande"},"hrv":{"official":"Kraljevina Tajland","common":"Tajland"},"hun":{"official":"Thaif\xf6ldi Kir\xe1lys\xe1g","common":"Thaif\xf6ld"},"ita":{"official":"Regno di Thailandia","common":"Tailandia"},"jpn":{"official":"\u30BF\u30A4\u738B\u56FD","common":"\u30BF\u30A4"},"kor":{"official":"\uD0C0\uC774 \uC655\uAD6D","common":"\uD0DC\uAD6D"},"nld":{"official":"Koninkrijk Thailand","common":"Thailand"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u062A\u0627\u06CC\u0644\u0646\u062F","common":"\u062A\u0627\u06CC\u0644\u0646\u062F"},"pol":{"official":"Kr\xf3lestwo Tajlandii","common":"Tajlandia"},"por":{"official":"Reino da Tail\xe2ndia","common":"Tail\xe2ndia"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0422\u0430\u0438\u043B\u0430\u043D\u0434","common":"\u0422\u0430\u0438\u043B\u0430\u043D\u0434"},"slk":{"official":"Thajsk\xe9 kr\xe1\u013Eovstvo","common":"Thajsko"},"spa":{"official":"Reino de Tailandia","common":"Tailandia"},"srp":{"official":"Kraljevina Tajland","common":"Tajland"},"swe":{"official":"Konungariket Thailand","common":"Thailand"},"tur":{"official":"Tayland Krall\u0131\u011F\u0131","common":"Tayland"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u062A\u06BE\u0627\u0626\u06CC \u0644\u06CC\u0646\u0688","common":"\u062A\u06BE\u0627\u0626\u06CC \u0644\u06CC\u0646\u0688"},"zho":{"official":"\u6CF0\u738B\u56FD","common":"\u6CF0\u56FD"}},"latlng":[15,100],"landlocked":false,"borders":["MMR","KHM","LAO","MYS"],"area":513120,"flag":"\uD83C\uDDF9\uD83C\uDDED","demonyms":{"eng":{"f":"Thai","m":"Thai"},"fra":{"f":"Tha\xeflandaise","m":"Tha\xeflandais"}}},{"name":{"common":"Tajikistan","official":"Republic of Tajikistan","native":{"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D","common":"\u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D"},"tgk":{"official":"\u04B6\u0443\u043C\u04B3\u0443\u0440\u0438\u0438 \u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D","common":"\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D"}}},"tld":[".tj"],"cca2":"TJ","ccn3":"762","cca3":"TJK","cioc":"TJK","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"TJS":{"name":"Tajikistani somoni","symbol":"\u0405\u041C"}},"idd":{"root":"+9","suffixes":["92"]},"capital":["Dushanbe"],"altSpellings":["TJ","To\xe7ikiston","Republic of Tajikistan","\u04B6\u0443\u043C\u04B3\u0443\u0440\u0438\u0438 \u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D","\xc7umhuriyi To\xe7ikiston"],"region":"Asia","subregion":"Central Asia","languages":{"rus":"Russian","tgk":"Tajik"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0637\u0627\u062C\u064A\u0643\u0633\u062A\u0627\u0646","common":"\u0637\u0627\u062C\u064A\u0643\u0633\u062A\u0627\u0646"},"ces":{"official":"Republika T\xe1d\u017Eikist\xe1n","common":"T\xe1d\u017Eikist\xe1n"},"deu":{"official":"Republik Tadschikistan","common":"Tadschikistan"},"est":{"official":"Tad\u017Eikistani Vabariik","common":"Tad\u017Eikistan"},"fin":{"official":"Tad\u017Eikistanin tasavalta","common":"Tad\u017Eikistan"},"fra":{"official":"R\xe9publique du Tadjikistan","common":"Tadjikistan"},"hrv":{"official":"Republika Tad\u017Eikistan","common":"Ta\u0111ikistan"},"hun":{"official":"T\xe1dzsik K\xf6zt\xe1rsas\xe1g","common":"T\xe1dzsikiszt\xe1n"},"ita":{"official":"Repubblica del Tajikistan","common":"Tagikistan"},"jpn":{"official":"\u30BF\u30B8\u30AD\u30B9\u30BF\u30F3\u5171\u548C\u56FD","common":"\u30BF\u30B8\u30AD\u30B9\u30BF\u30F3"},"kor":{"official":"\uD0C0\uC9C0\uD0A4\uC2A4\uD0C4 \uACF5\uD654\uAD6D","common":"\uD0C0\uC9C0\uD0A4\uC2A4\uD0C4"},"nld":{"official":"Tadzjikistan","common":"Tadzjikistan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0627\u062C\u06CC\u06A9\u0633\u062A\u0627\u0646","common":"\u062A\u0627\u062C\u06CC\u06A9\u0650\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Tad\u017Cykistanu","common":"Tad\u017Cykistan"},"por":{"official":"Rep\xfablica do Tajiquist\xe3o","common":"Tajiquist\xe3o"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D","common":"\u0422\u0430\u0434\u0436\u0438\u043A\u0438\u0441\u0442\u0430\u043D"},"slk":{"official":"Ta\u01C6ick\xe1 republika","common":"Ta\u01C6ikistan"},"spa":{"official":"Rep\xfablica de Tayikist\xe1n","common":"Tayikist\xe1n"},"srp":{"official":"Republika Tad\u017Eikistan","common":"Tad\u017Eikistan"},"swe":{"official":"Republiken Tadzjikistan","common":"Tadzjikistan"},"tur":{"official":"Tacikistan Cumhuriyeti","common":"Tacikistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062A\u0627\u062C\u06A9\u0633\u062A\u0627\u0646","common":"\u062A\u0627\u062C\u06A9\u0633\u062A\u0627\u0646"},"zho":{"official":"\u5854\u5409\u514B\u65AF\u5766\u5171\u548C\u56FD","common":"\u5854\u5409\u514B\u65AF\u5766"}},"latlng":[39,71],"landlocked":true,"borders":["AFG","CHN","KGZ","UZB"],"area":143100,"flag":"\uD83C\uDDF9\uD83C\uDDEF","demonyms":{"eng":{"f":"Tadzhik","m":"Tadzhik"},"fra":{"f":"Tadjike","m":"Tadjike"}}},{"name":{"common":"Tokelau","official":"Tokelau","native":{"eng":{"official":"Tokelau","common":"Tokelau"},"smo":{"official":"Tokelau","common":"Tokelau"},"tkl":{"official":"Tokelau","common":"Tokelau"}}},"tld":[".tk"],"cca2":"TK","ccn3":"772","cca3":"TKL","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"NZD":{"name":"New Zealand dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["90"]},"capital":["Fakaofo"],"altSpellings":["TK"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","smo":"Samoan","tkl":"Tokelauan"},"translations":{"ara":{"official":"\u062A\u0648\u0643\u064A\u0644\u0627\u0648","common":"\u062A\u0648\u0643\u064A\u0644\u0627\u0648"},"ces":{"official":"Tokelau","common":"Tokelau"},"deu":{"official":"Tokelau","common":"Tokelau"},"est":{"official":"Tokelau","common":"Tokelau"},"fin":{"official":"Tokelau","common":"Tokelau"},"fra":{"official":"\xceles Tokelau","common":"Tokelau"},"hrv":{"official":"Tokelau","common":"Tokelau"},"hun":{"official":"Tokelau-szigetek","common":"Tokelau-szigetek"},"ita":{"official":"Tokelau","common":"Isole Tokelau"},"jpn":{"official":"\u30C8\u30B1\u30E9\u30A6\u8AF8\u5CF6","common":"\u30C8\u30B1\u30E9\u30A6"},"kor":{"official":"\uD1A0\uCF08\uB77C\uC6B0","common":"\uD1A0\uCF08\uB77C\uC6B0"},"nld":{"official":"Tokelau","common":"Tokelau"},"per":{"official":"\u062A\u0648\u06A9\u0644\u0627\u0626\u0648","common":"\u062A\u0648\u06A9\u0644\u0627\u0626\u0648"},"pol":{"official":"Tokelau","common":"Tokelau"},"por":{"official":"Tokelau","common":"Tokelau"},"rus":{"official":"\u0422\u043E\u043A\u0435\u043B\u0430\u0443","common":"\u0422\u043E\u043A\u0435\u043B\u0430\u0443"},"slk":{"official":"Tokelausk\xe9 ostrovy","common":"Tokelau"},"spa":{"official":"Tokelau","common":"Islas Tokelau"},"srp":{"official":"Tokelau","common":"Tokelau"},"swe":{"official":"Tokelau\xf6arna","common":"Tokelau\xf6arna"},"tur":{"official":"Tokelau","common":"Tokelau"},"urd":{"official":"\u0679\u0648\u06A9\u06CC\u0644\u0627\u0624","common":"\u0679\u0648\u06A9\u06CC\u0644\u0627\u0624"},"zho":{"official":"\u6258\u514B\u52B3","common":"\u6258\u514B\u52B3"}},"latlng":[-9,-172],"landlocked":false,"borders":[],"area":12,"flag":"\uD83C\uDDF9\uD83C\uDDF0","demonyms":{"eng":{"f":"Tokelauan","m":"Tokelauan"},"fra":{"f":"","m":""}}},{"name":{"common":"Turkmenistan","official":"Turkmenistan","native":{"rus":{"official":"\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D","common":"\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u044F"},"tuk":{"official":"T\xfcrkmenistan","common":"T\xfcrkmenistan"}}},"tld":[".tm"],"cca2":"TM","ccn3":"795","cca3":"TKM","cioc":"TKM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"TMT":{"name":"Turkmenistan manat","symbol":"m"}},"idd":{"root":"+9","suffixes":["93"]},"capital":["Ashgabat"],"altSpellings":["TM"],"region":"Asia","subregion":"Central Asia","languages":{"rus":"Russian","tuk":"Turkmen"},"translations":{"ara":{"official":"\u062A\u0631\u0643\u0645\u0627\u0646\u0633\u062A\u0627\u0646","common":"\u062A\u0631\u0643\u0645\u0627\u0646\u0633\u062A\u0627\u0646"},"ces":{"official":"Turkmenist\xe1n","common":"Turkmenist\xe1n"},"deu":{"official":"Turkmenistan","common":"Turkmenistan"},"est":{"official":"T\xfcrkmenistan","common":"T\xfcrkmenistan"},"fin":{"official":"Turkmenistan","common":"Turkmenistan"},"fra":{"official":"Turkm\xe9nistan","common":"Turkm\xe9nistan"},"hrv":{"official":"Turkmenistan","common":"Turkmenistan"},"hun":{"official":"T\xfcrkm\xe9n K\xf6zt\xe1rsas\xe1g","common":"T\xfcrkmeniszt\xe1n"},"ita":{"official":"Turkmenistan","common":"Turkmenistan"},"jpn":{"official":"\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3","common":"\u30C8\u30EB\u30AF\u30E1\u30CB\u30B9\u30BF\u30F3"},"kor":{"official":"\uD22C\uB974\uD06C\uBA54\uB2C8\uC2A4\uD0C4","common":"\uD22C\uB974\uD06C\uBA54\uB2C8\uC2A4\uD0C4"},"nld":{"official":"Turkmenistan","common":"Turkmenistan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062E\u0644\u0642 \u062A\u0631\u06A9\u0645\u0646\u0633\u062A\u0627\u0646","common":"\u062A\u0631\u06A9\u0645\u0646\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Turkmenistanu","common":"Turkmenistan"},"por":{"official":"Turcomenist\xe3o","common":"Turquemenist\xe3o"},"rus":{"official":"\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u0441\u0442\u0430\u043D","common":"\u0422\u0443\u0440\u043A\u043C\u0435\u043D\u0438\u044F"},"slk":{"official":"Turkm\xe9nsko","common":"Turkm\xe9nsko"},"spa":{"official":"Turkmenist\xe1n","common":"Turkmenist\xe1n"},"srp":{"official":"Turkmenistan","common":"Turkmenistan"},"swe":{"official":"Turkmenistan","common":"Turkmenistan"},"tur":{"official":"T\xfcrkmenistan","common":"T\xfcrkmenistan"},"urd":{"official":"\u062A\u0631\u06A9\u0645\u0627\u0646\u0633\u062A\u0627\u0646","common":"\u062A\u0631\u06A9\u0645\u0627\u0646\u0633\u062A\u0627\u0646"},"zho":{"official":"\u571F\u5E93\u66FC\u65AF\u5766","common":"\u571F\u5E93\u66FC\u65AF\u5766"}},"latlng":[40,60],"landlocked":true,"borders":["AFG","IRN","KAZ","UZB"],"area":488100,"flag":"\uD83C\uDDF9\uD83C\uDDF2","demonyms":{"eng":{"f":"Turkmen","m":"Turkmen"},"fra":{"f":"Turkm\xe8ne","m":"Turkm\xe8ne"}}},{"name":{"common":"Timor-Leste","official":"Democratic Republic of Timor-Leste","native":{"por":{"official":"Rep\xfablica Democr\xe1tica de Timor-Leste","common":"Timor-Leste"},"tet":{"official":"Rep\xfablika Demokr\xe1tika Tim\xf3r-Leste","common":"Tim\xf3r-Leste"}}},"tld":[".tl"],"cca2":"TL","ccn3":"626","cca3":"TLS","cioc":"TLS","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["70"]},"capital":["Dili"],"altSpellings":["TL","East Timor","Timor","Democratic Republic of Timor-Leste","Rep\xfablica Democr\xe1tica de Timor-Leste","Rep\xfablika Demokr\xe1tika Tim\xf3r-Leste","Tim\xf3r Lorosa\'e","Timor Lorosae"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"por":"Portuguese","tet":"Tetum"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u064A\u0645\u0648\u0631 \u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0627\u0644\u062F\u064A\u0645\u0642\u0631\u0627\u0637\u064A\u0629","common":"\u062A\u064A\u0645\u0648\u0631 \u0627\u0644\u0634\u0631\u0642\u064A\u0629"},"ces":{"official":"Demokratick\xe1 republika V\xfdchodn\xed Timor","common":"V\xfdchodn\xed Timor"},"deu":{"official":"Demokratische Republik Timor-Leste","common":"Osttimor"},"est":{"official":"Timor-Leste Demokraatlik Vabariik","common":"Ida-Timor"},"fin":{"official":"It\xe4-Timorin demokraattinen tasavalta","common":"It\xe4-Timor"},"fra":{"official":"R\xe9publique d\xe9mocratique du Timor oriental","common":"Timor oriental"},"hrv":{"official":"Demokratska Republika Timor-Leste","common":"Isto\u010Dni Timor"},"hun":{"official":"Kelet-timori Demokratikus K\xf6zt\xe1rsas\xe1g","common":"Kelet-Timor"},"ita":{"official":"Repubblica Democratica di Timor Est","common":"Timor Est"},"jpn":{"official":"\u6771\u30C6\u30A3\u30E2\u30FC\u30EB\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u6771\u30C6\u30A3\u30E2\u30FC\u30EB"},"kor":{"official":"\uB3D9\uD2F0\uBAA8\uB974 \uBBFC\uC8FC \uACF5\uD654\uAD6D","common":"\uB3D9\uD2F0\uBAA8\uB974"},"nld":{"official":"Democratische Republiek Oost-Timor","common":"Oost-Timor"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062F\u0645\u0648\u06A9\u0631\u0627\u062A\u06CC\u06A9 \u062A\u06CC\u0645\u0648\u0631 \u0634\u0631\u0642\u06CC","common":"\u062A\u06CC\u0645\u0648\u0631 \u0634\u0631\u0642\u06CC"},"pol":{"official":"Demokratyczna Republika Timoru Wschodniego","common":"Timor Wschodni"},"por":{"official":"Rep\xfablica Democr\xe1tica de Timor-Leste","common":"Timor-Leste"},"rus":{"official":"\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0438\u043C\u043E\u0440 -\u041B\u0435\u0448\u0442\u0438","common":"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0422\u0438\u043C\u043E\u0440"},"slk":{"official":"V\xfdchodotimorsk\xe1 demokratick\xe1 republika","common":"V\xfdchodn\xfd Timor"},"spa":{"official":"Rep\xfablica Democr\xe1tica de Timor-Leste","common":"Timor Oriental"},"srp":{"official":"Demokratska Republika Isto\u010Dni Timor","common":"Isto\u010Dni Timor"},"swe":{"official":"Demokratiska republiken \xd6sttimor","common":"\xd6sttimor"},"tur":{"official":"Do\u011Fu Timor Demokratik Cumhuriyeti","common":"Do\u011Fu Timor"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0645\u0634\u0631\u0642\u06CC \u062A\u06CC\u0645\u0648\u0631","common":"\u0645\u0634\u0631\u0642\u06CC \u062A\u06CC\u0645\u0648\u0631"},"zho":{"official":"\u4E1C\u5E1D\u6C76\u6C11\u4E3B\u5171\u548C\u56FD","common":"\u4E1C\u5E1D\u6C76"}},"latlng":[-8.83333333,125.91666666],"landlocked":false,"borders":["IDN"],"area":14874,"flag":"\uD83C\uDDF9\uD83C\uDDF1","demonyms":{"eng":{"f":"East Timorese","m":"East Timorese"},"fra":{"f":"Est-timoraise","m":"Est-timorais"}}},{"name":{"common":"Tonga","official":"Kingdom of Tonga","native":{"eng":{"official":"Kingdom of Tonga","common":"Tonga"},"ton":{"official":"Kingdom of Tonga","common":"Tonga"}}},"tld":[".to"],"cca2":"TO","ccn3":"776","cca3":"TON","cioc":"TGA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"TOP":{"name":"Tongan pa\u02BBanga","symbol":"T$"}},"idd":{"root":"+6","suffixes":["76"]},"capital":["Nuku\'alofa"],"altSpellings":["TO"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","ton":"Tongan"},"translations":{"ara":{"official":"\u0645\u0645\u0644\u0643\u0629 \u062A\u0648\u0646\u063A\u0627","common":"\u062A\u0648\u0646\u063A\u0627"},"ces":{"official":"Kr\xe1lovstv\xed Tonga","common":"Tonga"},"deu":{"official":"K\xf6nigreich Tonga","common":"Tonga"},"est":{"official":"Tonga Kuningriik","common":"Tonga"},"fin":{"official":"Tongan kuningaskunta","common":"Tonga"},"fra":{"official":"Royaume des Tonga","common":"Tonga"},"hrv":{"official":"Kraljevina Tonga","common":"Tonga"},"hun":{"official":"Tongai Kir\xe1lys\xe1g","common":"Tonga"},"ita":{"official":"Regno di Tonga","common":"Tonga"},"jpn":{"official":"\u30C8\u30F3\u30AC\u738B\u56FD","common":"\u30C8\u30F3\u30AC"},"kor":{"official":"\uD1B5\uAC00 \uC655\uAD6D","common":"\uD1B5\uAC00"},"nld":{"official":"Koninkrijk Tonga","common":"Tonga"},"per":{"official":"\u067E\u0627\u062F\u0634\u0627\u0647\u06CC \u062A\u0648\u0646\u06AF\u0627","common":"\u062A\u0648\u0646\u06AF\u0627"},"pol":{"official":"Kr\xf3lestwo Tonga","common":"Tonga"},"por":{"official":"Reino de Tonga","common":"Tonga"},"rus":{"official":"\u041A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u0442\u0432\u043E \u0422\u043E\u043D\u0433\u0430","common":"\u0422\u043E\u043D\u0433\u0430"},"slk":{"official":"Tongsk\xe9 kr\xe1\u013Eovstvo","common":"Tonga"},"spa":{"official":"Reino de Tonga","common":"Tonga"},"srp":{"official":"Kraljevina Tonga","common":"Tonga"},"swe":{"official":"Konungariket Tonga","common":"Tonga"},"tur":{"official":"Tonga Krall\u0131\u011F\u0131","common":"Tonga"},"urd":{"official":"\u0645\u0645\u0644\u06A9\u062A\u0650 \u0679\u0648\u0646\u06AF\u0627","common":"\u0679\u0648\u0646\u06AF\u0627"},"zho":{"official":"\u6C64\u52A0\u738B\u56FD","common":"\u6C64\u52A0"}},"latlng":[-20,-175],"landlocked":false,"borders":[],"area":747,"flag":"\uD83C\uDDF9\uD83C\uDDF4","demonyms":{"eng":{"f":"Tongan","m":"Tongan"},"fra":{"f":"Tonguienne","m":"Tonguien"}}},{"name":{"common":"Trinidad and Tobago","official":"Republic of Trinidad and Tobago","native":{"eng":{"official":"Republic of Trinidad and Tobago","common":"Trinidad and Tobago"}}},"tld":[".tt"],"cca2":"TT","ccn3":"780","cca3":"TTO","cioc":"TTO","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"TTD":{"name":"Trinidad and Tobago dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["868"]},"capital":["Port of Spain"],"altSpellings":["TT","Republic of Trinidad and Tobago"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0631\u064A\u0646\u064A\u062F\u0627\u062F \u0648\u062A\u0648\u0628\u0627\u063A\u0648","common":"\u062A\u0631\u064A\u0646\u064A\u062F\u0627\u062F \u0648\u062A\u0648\u0628\u0627\u063A\u0648"},"ces":{"official":"Republika Trinidad a Tobago","common":"Trinidad a Tobago"},"deu":{"official":"Republik Trinidad und Tobago","common":"Trinidad und Tobago"},"est":{"official":"Trinidadi ja Tobago Vabariik","common":"Trinidad ja Tobago"},"fin":{"official":"Trinidadin ja Tobagon tasavalta","common":"Trinidad ja Tobago"},"fra":{"official":"R\xe9publique de Trinit\xe9-et-Tobago","common":"Trinit\xe9-et-Tobago"},"hrv":{"official":"Republika Trinidad i Tobago","common":"Trinidad i Tobago"},"hun":{"official":"Trinidad \xe9s Tobago K\xf6zt\xe1rsas\xe1g","common":"Trinidad \xe9s Tobago"},"ita":{"official":"Repubblica di Trinidad e Tobago","common":"Trinidad e Tobago"},"jpn":{"official":"\u30C8\u30EA\u30CB\u30C0\u30FC\u30C9\u30FB\u30C8\u30D0\u30B4\u5171\u548C\u56FD","common":"\u30C8\u30EA\u30CB\u30C0\u30FC\u30C9\u30FB\u30C8\u30D0\u30B4"},"kor":{"official":"\uD2B8\uB9AC\uB2C8\uB2E4\uB4DC \uD1A0\uBC14\uACE0 \uACF5\uD654\uAD6D","common":"\uD2B8\uB9AC\uB2C8\uB2E4\uB4DC \uD1A0\uBC14\uACE0"},"nld":{"official":"Republiek Trinidad en Tobago","common":"Trinidad en Tobago"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0631\u06CC\u0646\u06CC\u062F\u0627\u062F \u0648 \u062A\u0648\u0628\u0627\u06AF\u0648","common":"\u062A\u0631\u06CC\u0646\u06CC\u062F\u0627\u062F \u0648 \u062A\u0648\u0628\u0627\u06AF\u0648"},"pol":{"official":"Trynidad i Tobago","common":"Trynidad i Tobago"},"por":{"official":"Rep\xfablica de Trinidad e Tobago","common":"Trinidade e Tobago"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0440\u0438\u043D\u0438\u0434\u0430\u0434 \u0438 \u0422\u043E\u0431\u0430\u0433\u043E","common":"\u0422\u0440\u0438\u043D\u0438\u0434\u0430\u0434 \u0438 \u0422\u043E\u0431\u0430\u0433\u043E"},"slk":{"official":"Republika Trinidad a Tobaga","common":"Trinidad a Tobago"},"spa":{"official":"Rep\xfablica de Trinidad y Tobago","common":"Trinidad y Tobago"},"srp":{"official":"Republika Trinidad i Tobago","common":"Trinidad i Tobago"},"swe":{"official":"Republiken Trinidad och Tobago","common":"Trinidad och Tobago"},"tur":{"official":"Trinidad ve Tobago Cumhuriyeti","common":"Trinidad ve Tobago"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0679\u0631\u06CC\u0646\u06CC\u0688\u0627\u0688 \u0648 \u0679\u0648\u0628\u0627\u06AF\u0648","common":"\u0679\u0631\u06CC\u0646\u06CC\u0688\u0627\u0688 \u0648 \u0679\u0648\u0628\u0627\u06AF\u0648"},"zho":{"official":"\u7279\u7ACB\u5C3C\u8FBE\u548C\u591A\u5DF4\u54E5\u5171\u548C\u56FD","common":"\u7279\u7ACB\u5C3C\u8FBE\u548C\u591A\u5DF4\u54E5"}},"latlng":[11,-61],"landlocked":false,"borders":[],"area":5130,"flag":"\uD83C\uDDF9\uD83C\uDDF9","demonyms":{"eng":{"f":"Trinidadian","m":"Trinidadian"},"fra":{"f":"Trinidadienne","m":"Trinidadien"}}},{"name":{"common":"Tunisia","official":"Tunisian Republic","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062A\u0648\u0646\u0633\u064A\u0629","common":"\u062A\u0648\u0646\u0633"}}},"tld":[".tn"],"cca2":"TN","ccn3":"788","cca3":"TUN","cioc":"TUN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"TND":{"name":"Tunisian dinar","symbol":"\u062F.\u062A"}},"idd":{"root":"+2","suffixes":["16"]},"capital":["Tunis"],"altSpellings":["TN","Republic of Tunisia","al-Jumh\u016Briyyah at-T\u016Bnisiyyah"],"region":"Africa","subregion":"Northern Africa","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062A\u0648\u0646\u0633\u064A\u0629","common":"\u062A\u0648\u0646\u0633"},"ces":{"official":"Tunisk\xe1 republika","common":"Tunisko"},"deu":{"official":"Tunesische Republik","common":"Tunesien"},"est":{"official":"Tuneesia Vabariik","common":"Tuneesia"},"fin":{"official":"Tunisian tasavalta","common":"Tunisia"},"fra":{"official":"R\xe9publique tunisienne","common":"Tunisie"},"hrv":{"official":"Tuniski Republika","common":"Tunis"},"hun":{"official":"Tun\xe9ziai K\xf6zt\xe1rsas\xe1g","common":"Tun\xe9zia"},"ita":{"official":"Repubblica tunisina","common":"Tunisia"},"jpn":{"official":"\u30C1\u30E5\u30CB\u30B8\u30A2\u5171\u548C\u56FD","common":"\u30C1\u30E5\u30CB\u30B8\u30A2"},"kor":{"official":"\uD280\uB2C8\uC9C0 \uACF5\uD654\uAD6D","common":"\uD280\uB2C8\uC9C0"},"nld":{"official":"Republiek Tunesi\xeb","common":"Tunesi\xeb"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0648\u0646\u0633","common":"\u062A\u0648\u0646\u0633"},"pol":{"official":"Republika Tunezyjska","common":"Tunezja"},"por":{"official":"Rep\xfablica da Tun\xedsia","common":"Tun\xedsia"},"rus":{"official":"\u0422\u0443\u043D\u0438\u0441\u0441\u043A\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438","common":"\u0422\u0443\u043D\u0438\u0441"},"slk":{"official":"Tunisk\xe1 republika","common":"Tunisko"},"spa":{"official":"Rep\xfablica de T\xfanez","common":"T\xfanez"},"srp":{"official":"Republika Tunis","common":"Tunis"},"swe":{"official":"Republiken Tunisien","common":"Tunisien"},"tur":{"official":"Tunus Cumhuriyeti","common":"Tunus"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062A\u0648\u0646\u0633","common":"\u062A\u0648\u0646\u0633"},"zho":{"official":"\u7A81\u5C3C\u65AF\u5171\u548C\u56FD","common":"\u7A81\u5C3C\u65AF"}},"latlng":[34,9],"landlocked":false,"borders":["DZA","LBY"],"area":163610,"flag":"\uD83C\uDDF9\uD83C\uDDF3","demonyms":{"eng":{"f":"Tunisian","m":"Tunisian"},"fra":{"f":"Tunisienne","m":"Tunisien"}}},{"name":{"common":"T\xfcrkiye","official":"Republic of T\xfcrkiye","native":{"tur":{"official":"T\xfcrkiye Cumhuriyeti","common":"T\xfcrkiye"}}},"tld":[".tr"],"cca2":"TR","ccn3":"792","cca3":"TUR","cioc":"TUR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"TRY":{"name":"Turkish lira","symbol":"\u20BA"}},"idd":{"root":"+9","suffixes":["0"]},"capital":["Ankara"],"altSpellings":["TR","Turkiye","Republic of Turkey","T\xfcrkiye Cumhuriyeti"],"region":"Asia","subregion":"Western Asia","languages":{"tur":"Turkish"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0629","common":"\u062A\u0631\u0643\u064A\u0627"},"ces":{"official":"Tureck\xe1 republika","common":"Turecko"},"deu":{"official":"Republik T\xfcrkei","common":"T\xfcrkei"},"est":{"official":"T\xfcrgi Vabariik","common":"T\xfcrgi"},"fin":{"official":"Turkin tasavalta","common":"Turkki"},"fra":{"official":"R\xe9publique de Turquie","common":"Turquie"},"hrv":{"official":"Republika Turska","common":"Turska"},"hun":{"official":"T\xf6r\xf6k K\xf6zt\xe1rsas\xe1g","common":"T\xf6r\xf6korsz\xe1g"},"ita":{"official":"Repubblica di Turchia","common":"Turchia"},"jpn":{"official":"\u30C8\u30EB\u30B3\u5171\u548C\u56FD","common":"\u30C8\u30EB\u30B3"},"kor":{"official":"\uD130\uD0A4 \uACF5\uD654\uAD6D","common":"\uD130\uD0A4"},"nld":{"official":"Republiek Turkije","common":"Turkije"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u062A\u0631\u06A9\u06CC\u0647","common":"\u062A\u0631\u06A9\u06CC\u0647"},"pol":{"official":"Republika Turcji","common":"Turcja"},"por":{"official":"Rep\xfablica da Turquia","common":"Turquia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0443\u0440\u0446\u0438\u0438","common":"\u0422\u0443\u0440\u0446\u0438\u044F"},"slk":{"official":"Tureck\xe1 republika","common":"Turecko"},"spa":{"official":"Rep\xfablica de Turqu\xeda","common":"Turqu\xeda"},"srp":{"official":"Republika Turska","common":"Turska"},"swe":{"official":"Republiken Turkiet","common":"Turkiet"},"tur":{"official":"T\xfcrkiye Cumhuriyeti","common":"T\xfcrkiye"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062A\u0631\u06A9\u06CC","common":"\u062A\u0631\u06A9\u06CC"},"zho":{"official":"\u571F\u8033\u5176\u5171\u548C\u56FD","common":"\u571F\u8033\u5176"}},"latlng":[39,35],"landlocked":false,"borders":["ARM","AZE","BGR","GEO","GRC","IRN","IRQ","SYR"],"area":783562,"flag":"\uD83C\uDDF9\uD83C\uDDF7","demonyms":{"eng":{"f":"Turkish","m":"Turkish"},"fra":{"f":"Turque","m":"Turc"}}},{"name":{"common":"Tuvalu","official":"Tuvalu","native":{"eng":{"official":"Tuvalu","common":"Tuvalu"},"tvl":{"official":"Tuvalu","common":"Tuvalu"}}},"tld":[".tv"],"cca2":"TV","ccn3":"798","cca3":"TUV","cioc":"TUV","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"AUD":{"name":"Australian dollar","symbol":"$"},"TVD":{"name":"Tuvaluan dollar","symbol":"$"}},"idd":{"root":"+6","suffixes":["88"]},"capital":["Funafuti"],"altSpellings":["TV"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","tvl":"Tuvaluan"},"translations":{"ara":{"official":"\u062A\u0648\u0641\u0627\u0644\u0648","common":"\u062A\u0648\u0641\u0627\u0644\u0648"},"ces":{"official":"Tuvalu","common":"Tuvalu"},"deu":{"official":"Tuvalu","common":"Tuvalu"},"est":{"official":"Tuvalu","common":"Tuvalu"},"fin":{"official":"Tuvalu","common":"Tuvalu"},"fra":{"official":"Tuvalu","common":"Tuvalu"},"hrv":{"official":"Tuvalu","common":"Tuvalu"},"hun":{"official":"Tuvalu","common":"Tuvalu"},"ita":{"official":"Tuvalu","common":"Tuvalu"},"jpn":{"official":"\u30C4\u30D0\u30EB","common":"\u30C4\u30D0\u30EB"},"kor":{"official":"\uD22C\uBC1C\uB8E8","common":"\uD22C\uBC1C\uB8E8"},"nld":{"official":"Tuvalu","common":"Tuvalu"},"per":{"official":"\u062A\u0648\u0648\u0627\u0644\u0648","common":"\u062A\u0648\u0648\u0627\u0644\u0648"},"pol":{"official":"Tuvalu","common":"Tuvalu"},"por":{"official":"Tuvalu","common":"Tuvalu"},"rus":{"official":"\u0422\u0443\u0432\u0430\u043B\u0443","common":"\u0422\u0443\u0432\u0430\u043B\u0443"},"slk":{"official":"Tuvalu","common":"Tuvalu"},"spa":{"official":"Tuvalu","common":"Tuvalu"},"srp":{"official":"Tuvalu","common":"Tuvalu"},"swe":{"official":"Tuvalu","common":"Tuvalu"},"tur":{"official":"Tuvalu","common":"Tuvalu"},"urd":{"official":"\u062A\u0648\u0648\u0627\u0644\u0648","common":"\u062A\u0648\u0648\u0627\u0644\u0648"},"zho":{"official":"\u56FE\u74E6\u5362","common":"\u56FE\u74E6\u5362"}},"latlng":[-8,178],"landlocked":false,"borders":[],"area":26,"flag":"\uD83C\uDDF9\uD83C\uDDFB","demonyms":{"eng":{"f":"Tuvaluan","m":"Tuvaluan"},"fra":{"f":"Tuvaluane","m":"Tuvaluan"}}},{"name":{"common":"Taiwan","official":"Republic of China (Taiwan)","native":{"zho":{"official":"\u4E2D\u83EF\u6C11\u570B","common":"\u53F0\u7063"}}},"tld":[".tw",".\u53F0\u7063",".\u53F0\u6E7E"],"cca2":"TW","ccn3":"158","cca3":"TWN","cioc":"TPE","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"TWD":{"name":"New Taiwan dollar","symbol":"$"}},"idd":{"root":"+8","suffixes":["86"]},"capital":["Taipei"],"altSpellings":["TW","T\xe1iw\u0101n","Republic of China","\u4E2D\u83EF\u6C11\u570B","Zh\u014Dnghu\xe1 M\xedngu\xf3","Chinese Taipei"],"region":"Asia","subregion":"Eastern Asia","languages":{"zho":"Chinese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0635\u064A\u0646 (\u062A\u0627\u064A\u0648\u0627\u0646)","common":"\u062A\u0627\u064A\u0648\u0627\u0646"},"ces":{"official":"\u010C\xednsk\xe1 republika","common":"Tchaj-wan"},"deu":{"official":"Republik China (Taiwan)","common":"Taiwan"},"est":{"official":"Taiwani","common":"Taiwan"},"fin":{"official":"Kiinan tasavalta","common":"Taiwan"},"fra":{"official":"R\xe9publique de Chine (Ta\xefwan)","common":"Ta\xefwan"},"hrv":{"official":"Republika Kina","common":"Tajvan"},"hun":{"official":"K\xednai K\xf6zt\xe1rsas\xe1g","common":"Tajvan"},"ita":{"official":"Repubblica cinese (Taiwan)","common":"Taiwan"},"jpn":{"official":"\u53F0\u6E7E","common":"\u4E2D\u83EF\u6C11\u56FD"},"kor":{"official":"\uC911\uD654\uBBFC\uAD6D","common":"\uB300\uB9CC"},"nld":{"official":"Republiek China (Taiwan)","common":"Taiwan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0686\u06CC\u0646","common":"\u062A\u0627\u06CC\u0648\u0627\u0646"},"pol":{"official":"Republika Chi\u0144ska (Tajwan)","common":"Tajwan"},"por":{"official":"Rep\xfablica da China","common":"Ilha Formosa"},"rus":{"official":"\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0422\u0430\u0439\u0432\u0430\u043D\u044C"},"slk":{"official":"\u010C\xednska republika","common":"Taiwan"},"spa":{"official":"Rep\xfablica de China en Taiw\xe1n","common":"Taiw\xe1n"},"srp":{"official":"Republika Kina (Tajvan)","common":"Tajvan"},"swe":{"official":"Republiken Kina","common":"Taiwan"},"tur":{"official":"\xe7in Cumhuriyeti (Tayvan)","common":"Tayvan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0686\u06CC\u0646 (\u062A\u0627\u0626\u06CC\u0648\u0627\u0646)","common":"\u062A\u0627\u0626\u06CC\u0648\u0627\u0646"},"zho":{"official":"\u4E2D\u83EF\u6C11\u570B","common":"\u53F0\u7063"}},"latlng":[23.5,121],"landlocked":false,"borders":[],"area":36193,"flag":"\uD83C\uDDF9\uD83C\uDDFC","demonyms":{"eng":{"f":"Taiwanese","m":"Taiwanese"},"fra":{"f":"Ta\xefwanaise","m":"Ta\xefwanais"}}},{"name":{"common":"Tanzania","official":"United Republic of Tanzania","native":{"eng":{"official":"United Republic of Tanzania","common":"Tanzania"},"swa":{"official":"Jamhuri ya Muungano wa Tanzania","common":"Tanzania"}}},"tld":[".tz"],"cca2":"TZ","ccn3":"834","cca3":"TZA","cioc":"TAN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"TZS":{"name":"Tanzanian shilling","symbol":"Sh"}},"idd":{"root":"+2","suffixes":["55"]},"capital":["Dodoma"],"altSpellings":["TZ","Tanzania, United Republic of","United Republic of Tanzania","Jamhuri ya Muungano wa Tanzania"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","swa":"Swahili"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062A\u0646\u0632\u0627\u0646\u064A\u0627 \u0627\u0644\u0627\u062A\u062D\u0627\u062F\u064A\u0629","common":"\u062A\u0646\u0632\u0627\u0646\u064A\u0627"},"ces":{"official":"Sjednocen\xe1 tanzansk\xe1 republika","common":"Tanzanie"},"deu":{"official":"Vereinigte Republik Tansania","common":"Tansania"},"est":{"official":"Tansaania \xdchendvabariik","common":"Tansaania"},"fin":{"official":"Tansanian yhdistynyt tasavalta","common":"Tansania"},"fra":{"official":"R\xe9publique -Unie de Tanzanie","common":"Tanzanie"},"hrv":{"official":"Ujedinjena Republika Tanzanija","common":"Tanzanija"},"hun":{"official":"T\xe1dzsik K\xf6zt\xe1rsas\xe1g","common":"T\xe1dzsikiszt\xe1n"},"ita":{"official":"Repubblica Unita di Tanzania","common":"Tanzania"},"jpn":{"official":"\u30BF\u30F3\u30B6\u30CB\u30A2\u9023\u5408\u5171\u548C\u56FD","common":"\u30BF\u30F3\u30B6\u30CB\u30A2"},"kor":{"official":"\uD0C4\uC790\uB2C8\uC544 \uC5F0\uD569 \uACF5\uD654\uAD6D","common":"\uD0C4\uC790\uB2C8\uC544"},"nld":{"official":"Verenigde Republiek Tanzania","common":"Tanzania"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0645\u062A\u062D\u062F \u062A\u0627\u0646\u0632\u0627\u0646\u06CC\u0627","common":"\u062A\u0627\u0646\u0632\u0627\u0646\u06CC\u0627"},"pol":{"official":"Zjednoczona Republika Tanzanii","common":"Tanzania"},"por":{"official":"Rep\xfablica Unida da Tanz\xe2nia","common":"Tanz\xe2nia"},"rus":{"official":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u043D\u0437\u0430\u043D\u0438\u044F","common":"\u0422\u0430\u043D\u0437\u0430\u043D\u0438\u044F"},"slk":{"official":"Tanz\xe1nijsk\xe1 zjednoten\xe1 republika","common":"Tanz\xe1nia"},"spa":{"official":"Rep\xfablica Unida de Tanzania","common":"Tanzania"},"srp":{"official":"Ujedinjena Republika Tanzanija","common":"Tanzanija"},"swe":{"official":"F\xf6renade republiken Tanzania","common":"Tanzania"},"tur":{"official":"Tanzanya Birle\u015Fik Cumhuriyeti","common":"Tanzanya"},"urd":{"official":"\u0645\u062A\u062D\u062F\u06C1 \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062A\u0646\u0632\u0627\u0646\u06CC\u06C1","common":"\u062A\u0646\u0632\u0627\u0646\u06CC\u06C1"},"zho":{"official":"\u5766\u6851\u5C3C\u4E9A\u8054\u5408\u5171\u548C\u56FD","common":"\u5766\u6851\u5C3C\u4E9A"}},"latlng":[-6,35],"landlocked":false,"borders":["BDI","COD","KEN","MWI","MOZ","RWA","UGA","ZMB"],"area":945087,"flag":"\uD83C\uDDF9\uD83C\uDDFF","demonyms":{"eng":{"f":"Tanzanian","m":"Tanzanian"},"fra":{"f":"Tanzanienne","m":"Tanzanien"}}},{"name":{"common":"Uganda","official":"Republic of Uganda","native":{"eng":{"official":"Republic of Uganda","common":"Uganda"},"swa":{"official":"Republic of Uganda","common":"Uganda"}}},"tld":[".ug"],"cca2":"UG","ccn3":"800","cca3":"UGA","cioc":"UGA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"UGX":{"name":"Ugandan shilling","symbol":"Sh"}},"idd":{"root":"+2","suffixes":["56"]},"capital":["Kampala"],"altSpellings":["UG","Republic of Uganda","Jamhuri ya Uganda"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English","swa":"Swahili"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0648\u063A\u0646\u062F\u0627","common":"\u0623\u0648\u063A\u0646\u062F\u0627"},"ces":{"official":"Ugandsk\xe1 republika","common":"Uganda"},"deu":{"official":"Republik Uganda","common":"Uganda"},"est":{"official":"Uganda Vabariik","common":"Uganda"},"fin":{"official":"Ugandan tasavalta","common":"Uganda"},"fra":{"official":"R\xe9publique de l\'Ouganda","common":"Ouganda"},"hrv":{"official":"Republika Uganda","common":"Uganda"},"hun":{"official":"Ugandai K\xf6zt\xe1rsas\xe1g","common":"Uganda"},"ita":{"official":"Repubblica di Uganda","common":"Uganda"},"jpn":{"official":"\u30A6\u30AC\u30F3\u30C0\u5171\u548C\u56FD","common":"\u30A6\u30AC\u30F3\u30C0"},"kor":{"official":"\uC6B0\uAC04\uB2E4 \uACF5\uD654\uAD6D","common":"\uC6B0\uAC04\uB2E4"},"nld":{"official":"Republiek Uganda","common":"Oeganda"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0648\u06AF\u0627\u0646\u062F\u0627","common":"\u0627\u0648\u06AF\u0627\u0646\u062F\u0627"},"pol":{"official":"Republika Ugandy","common":"Uganda"},"por":{"official":"Rep\xfablica do Uganda","common":"Uganda"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0423\u0433\u0430\u043D\u0434\u0430","common":"\u0423\u0433\u0430\u043D\u0434\u0430"},"slk":{"official":"Ugandsk\xe1 republika","common":"Uganda"},"spa":{"official":"Rep\xfablica de Uganda","common":"Uganda"},"srp":{"official":"Republika Uganda","common":"Uganda"},"swe":{"official":"Republiken Uganda","common":"Uganda"},"tur":{"official":"Uganda Cumhuriyeti","common":"Uganda"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06CC\u0648\u06AF\u0646\u0688\u0627","common":"\u06CC\u0648\u06AF\u0646\u0688\u0627"},"zho":{"official":"\u4E4C\u5E72\u8FBE\u5171\u548C\u56FD","common":"\u4E4C\u5E72\u8FBE"}},"latlng":[1,32],"landlocked":true,"borders":["COD","KEN","RWA","SSD","TZA"],"area":241550,"flag":"\uD83C\uDDFA\uD83C\uDDEC","demonyms":{"eng":{"f":"Ugandan","m":"Ugandan"},"fra":{"f":"Ougandaise","m":"Ougandais"}}},{"name":{"common":"Ukraine","official":"Ukraine","native":{"ukr":{"official":"\u0423\u043A\u0440\u0430\u0457\u043D\u0430","common":"\u0423\u043A\u0440\u0430\u0457\u043D\u0430"}}},"tld":[".ua",".\u0443\u043A\u0440"],"cca2":"UA","ccn3":"804","cca3":"UKR","cioc":"UKR","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Eastern European Group","currencies":{"UAH":{"name":"Ukrainian hryvnia","symbol":"\u20B4"}},"idd":{"root":"+3","suffixes":["80"]},"capital":["Kyiv"],"altSpellings":["UA","Ukrayina"],"region":"Europe","subregion":"Eastern Europe","languages":{"ukr":"Ukrainian"},"translations":{"ara":{"official":"\u0623\u0648\u0643\u0631\u0627\u0646\u064A\u0627","common":"\u0623\u0648\u0643\u0631\u0627\u0646\u064A\u0627"},"ces":{"official":"Ukrajina","common":"Ukrajina"},"deu":{"official":"Ukraine","common":"Ukraine"},"est":{"official":"Ukraina","common":"Ukraina"},"fin":{"official":"Ukraina","common":"Ukraina"},"fra":{"official":"Ukraine","common":"Ukraine"},"hrv":{"official":"Ukrajina","common":"Ukrajina"},"hun":{"official":"Ukrajna","common":"Ukrajna"},"ita":{"official":"Ucraina","common":"Ucraina"},"jpn":{"official":"\u30A6\u30AF\u30E9\u30A4\u30CA","common":"\u30A6\u30AF\u30E9\u30A4\u30CA"},"kor":{"official":"\uC6B0\uD06C\uB77C\uC774\uB098","common":"\uC6B0\uD06C\uB77C\uC774\uB098"},"nld":{"official":"Oekra\xefne","common":"Oekra\xefne"},"per":{"official":"\u0627\u0648\u06A9\u0631\u0627\u06CC\u0646","common":"\u0627\u0648\u06A9\u0631\u0627\u06CC\u0646"},"pol":{"official":"Ukraina","common":"Ukraina"},"por":{"official":"Ucr\xe2nia","common":"Ucr\xe2nia"},"rus":{"official":"\u0423\u043A\u0440\u0430\u0438\u043D\u0430","common":"\u0423\u043A\u0440\u0430\u0438\u043D\u0430"},"slk":{"official":"Ukrajina","common":"Ukrajina"},"spa":{"official":"Ucrania","common":"Ucrania"},"srp":{"official":"Ukrajina","common":"Ukrajina"},"swe":{"official":"Ukraina","common":"Ukraina"},"tur":{"official":"Ukrayna","common":"Ukrayna"},"urd":{"official":"\u06CC\u0648\u06A9\u0631\u06CC\u0646","common":"\u06CC\u0648\u06A9\u0631\u06CC\u0646"},"zho":{"official":"\u4E4C\u514B\u5170","common":"\u4E4C\u514B\u5170"}},"latlng":[49,32],"landlocked":false,"borders":["BLR","HUN","MDA","POL","ROU","RUS","SVK"],"area":603500,"flag":"\uD83C\uDDFA\uD83C\uDDE6","demonyms":{"eng":{"f":"Ukrainian","m":"Ukrainian"},"fra":{"f":"Ukrainienne","m":"Ukrainien"}}},{"name":{"common":"United States Minor Outlying Islands","official":"United States Minor Outlying Islands","native":{"eng":{"official":"United States Minor Outlying Islands","common":"United States Minor Outlying Islands"}}},"tld":[".us"],"cca2":"UM","ccn3":"581","cca3":"UMI","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+2","suffixes":["68"]},"capital":[],"altSpellings":["UM"],"region":"Americas","subregion":"North America","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0627\u0644\u0646\u0627\u0626\u064A\u0629","common":"\u062C\u0632\u0631 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0627\u0644\u0646\u0627\u0626\u064A\u0629"},"ces":{"official":"Men\u0161\xed odlehl\xe9 ostrovy Spojen\xfdch st\xe1t\u016F americk\xfdch","common":"Men\u0161\xed odlehl\xe9 ostrovy USA"},"deu":{"official":"USA, kleinere ausgelagerte Inseln","common":"Kleinere Inselbesitzungen der Vereinigten Staaten"},"est":{"official":"\xdchendriikide v\xe4ikesed hajasaared","common":"\xdchendriikide hajasaared"},"fin":{"official":"Yhdysvaltain asumattomat saaret","common":"Yhdysvaltain asumattomat saaret"},"fra":{"official":"\xceles mineures \xe9loign\xe9es des \xc9tats-Unis","common":"\xceles mineures \xe9loign\xe9es des \xc9tats-Unis"},"hrv":{"official":"Mali udaljeni otoci SAD-a","common":"Mali udaljeni otoci SAD-a"},"hun":{"official":"Az Amerikai Egyes\xfclt \xc1llamok lakatlan k\xfclbirtokai","common":"Az Amerikai Egyes\xfclt \xc1llamok lakatlan k\xfclbirtokai"},"ita":{"official":"Stati Uniti Isole Minori","common":"Isole minori esterne degli Stati Uniti d\'America"},"jpn":{"official":"\u7C73\u9818\u5C0F\u96E2\u5CF6","common":"\u5408\u8846\u56FD\u9818\u6709\u5C0F\u96E2\u5CF6"},"kor":{"official":"\uBBF8\uAD6D\uB839 \uAD70\uC18C \uC81C\uB3C4","common":"\uBBF8\uAD6D\uB839 \uAD70\uC18C \uC81C\uB3C4"},"nld":{"official":"Kleine afgelegen eilanden van de Verenigde Staten","common":"Kleine afgelegen eilanden van de Verenigde Staten"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u0686\u06A9 \u062D\u0627\u0634\u06CC\u0647\u200C\u0627\u06CC \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627","common":"\u062C\u0632\u0627\u06CC\u0631 \u06A9\u0648\u0686\u06A9 \u062D\u0627\u0634\u06CC\u0647\u200C\u0627\u06CC \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627"},"pol":{"official":"Dalekie Wyspy Mniejsze Stan\xf3w Zjednoczonych","common":"Dalekie Wyspy Mniejsze Stan\xf3w Zjednoczonych"},"por":{"official":"Estados Unidos Ilhas Menores Distantes","common":"Ilhas Menores Distantes dos Estados Unidos"},"rus":{"official":"\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043C\u0430\u043B\u044B\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u0428\u0410","common":"\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u043C\u0430\u043B\u044B\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u0428\u0410"},"slk":{"official":"Men\u0161ie od\u013Eahl\xe9 ostrovy Spjoen\xfdch \u0161t\xe1tov","common":"Men\u0161ie od\u013Eahl\xe9 ostrovy USA"},"spa":{"official":"Estados Unidos Islas menores alejadas de","common":"Islas Ultramarinas Menores de Estados Unidos"},"srp":{"official":"Mala udaljena ostrva Sjedinjenih Ameri\u010Dkih Dr\u017Eava","common":"Mala udaljena ostrva SAD-a"},"swe":{"official":"F\xf6renta staternas mindre \xf6ar i Oceanien och V\xe4stindien","common":"F\xf6renta staternas mindre \xf6ar i Oceanien och V\xe4stindien"},"tur":{"official":"Amerika Birle\u015Fik Devletleri K\xfc\xe7\xfck D\u0131\u015F Adalar\u0131","common":"Amerika Birle\u015Fik Devletleri K\xfc\xe7\xfck D\u0131\u015F Adalar\u0131"},"urd":{"official":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0686\u06BE\u0648\u0679\u06D2 \u0628\u06CC\u0631\u0648\u0646\u06CC \u062C\u0632\u0627\u0626\u0631","common":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0686\u06BE\u0648\u0679\u06D2 \u0628\u06CC\u0631\u0648\u0646\u06CC \u062C\u0632\u0627\u0626\u0631"},"zho":{"official":"\u7F8E\u56FD\u672C\u571F\u5916\u5C0F\u5C9B\u5C7F","common":"\u7F8E\u56FD\u672C\u571F\u5916\u5C0F\u5C9B\u5C7F"}},"latlng":[19.3,166.633333],"landlocked":false,"borders":[],"area":34.2,"flag":"\uD83C\uDDFA\uD83C\uDDF2","demonyms":{"eng":{"f":"American Islander","m":"American Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Uruguay","official":"Oriental Republic of Uruguay","native":{"spa":{"official":"Rep\xfablica Oriental del Uruguay","common":"Uruguay"}}},"tld":[".uy"],"cca2":"UY","ccn3":"858","cca3":"URY","cioc":"URU","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"UYU":{"name":"Uruguayan peso","symbol":"$"}},"idd":{"root":"+5","suffixes":["98"]},"capital":["Montevideo"],"altSpellings":["UY","Oriental Republic of Uruguay","Rep\xfablica Oriental del Uruguay"],"region":"Americas","subregion":"South America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0623\u0648\u0631\u0648\u063A\u0648\u0627\u064A \u0627\u0644\u0634\u0631\u0642\u064A\u0629","common":"\u0627\u0644\u0623\u0648\u0631\u0648\u063A\u0648\u0627\u064A"},"ces":{"official":"Uruguaysk\xe1 v\xfdchodn\xed republika","common":"Uruguay"},"deu":{"official":"Republik \xd6stlich des Uruguay","common":"Uruguay"},"est":{"official":"Uruguay Idavabariik","common":"Uruguay"},"fin":{"official":"Uruguayn it\xe4inen tasavalta","common":"Uruguay"},"fra":{"official":"R\xe9publique orientale de l\'Uruguay","common":"Uruguay"},"hrv":{"official":"Orijentalna Republika Urugvaj","common":"Urugvaj"},"hun":{"official":"Uruguayi Keleti K\xf6zt\xe1rsas\xe1g","common":"Uruguay"},"ita":{"official":"Repubblica Orientale dell\'Uruguay","common":"Uruguay"},"jpn":{"official":"\u30A6\u30EB\u30B0\u30A2\u30A4\u6771\u65B9\u5171\u548C\u56FD","common":"\u30A6\u30EB\u30B0\u30A2\u30A4"},"kor":{"official":"\uC6B0\uB8E8\uACFC\uC774 \uB3D9\uBC29 \uACF5\uD654\uAD6D","common":"\uC6B0\uB8E8\uACFC\uC774"},"nld":{"official":"Oosterse Republiek Uruguay","common":"Uruguay"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0631\u0648\u06AF\u0648\u0626\u0647","common":"\u0627\u0631\u0648\u06AF\u0648\u0626\u0647"},"pol":{"official":"Wschodnia Republika Urugwaju","common":"Urugwaj"},"por":{"official":"Rep\xfablica Oriental do Uruguai","common":"Uruguai"},"rus":{"official":"\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0439 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0423\u0440\u0443\u0433\u0432\u0430\u0439","common":"\u0423\u0440\u0443\u0433\u0432\u0430\u0439"},"slk":{"official":"Uruguajsk\xe1 v\xfdchodn\xe1 republika","common":"Uruguaj"},"spa":{"official":"Rep\xfablica Oriental del Uruguay","common":"Uruguay"},"srp":{"official":"Isto\u010Dna Republika Urugvaj","common":"Urugvaj"},"swe":{"official":"Republiken Uruguay","common":"Uruguay"},"tur":{"official":"Uruguay Do\u011Fu Cumhuriyeti","common":"Uruguay"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0634\u0631\u0642\u06CC\u06C1 \u06CC\u0648\u0631\u0627\u06AF\u0648\u0626\u06D2","common":"\u06CC\u0648\u0631\u0627\u06AF\u0648\u0626\u06D2"},"zho":{"official":"\u4E4C\u62C9\u572D\u4E1C\u5CB8\u5171\u548C\u56FD","common":"\u4E4C\u62C9\u572D"}},"latlng":[-33,-56],"landlocked":false,"borders":["ARG","BRA"],"area":181034,"flag":"\uD83C\uDDFA\uD83C\uDDFE","demonyms":{"eng":{"f":"Uruguayan","m":"Uruguayan"},"fra":{"f":"Uruguayenne","m":"Uruguayen"}}},{"name":{"common":"United States","official":"United States of America","native":{"eng":{"official":"United States of America","common":"United States"}}},"tld":[".us"],"cca2":"US","ccn3":"840","cca3":"USA","cioc":"USA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Western European and Others Group","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["201","202","203","205","206","207","208","209","210","212","213","214","215","216","217","218","219","220","223","224","225","227","228","229","231","234","239","240","248","251","252","253","254","256","260","262","267","269","270","272","274","276","279","281","283","301","302","303","304","305","307","308","309","310","312","313","314","315","316","317","318","319","320","321","323","325","326","327","330","331","332","334","336","337","339","341","346","347","351","352","360","361","364","380","385","386","401","402","404","405","406","407","408","409","410","412","413","414","415","417","419","423","424","425","430","432","434","435","440","442","443","445","447","448","458","463","464","469","470","475","478","479","480","484","500","501","502","503","504","505","507","508","509","510","512","513","515","516","517","518","520","521","522","523","524","525","526","527","528","529","530","531","532","533","534","535","538","539","540","541","542","543","544","545","546","547","549","550","551","552","553","554","556","557","558","559","561","562","563","564","566","567","569","570","571","572","573","574","575","577","578","580","582","585","586","588","589","601","602","603","605","606","607","608","609","610","612","614","615","616","617","618","619","620","623","626","628","629","630","631","636","640","641","646","650","651","656","657","659","660","661","662","667","669","678","679","680","681","682","689","700","701","702","703","704","706","707","708","710","712","713","714","715","716","717","718","719","720","724","725","726","727","730","731","732","734","737","740","743","747","754","757","760","762","763","765","769","770","771","772","773","774","775","779","781","785","786","801","802","803","804","805","806","808","810","812","813","814","815","816","817","818","820","826","828","830","831","832","838","839","840","843","845","847","848","850","854","856","857","858","859","860","862","863","864","865","870","872","878","901","903","904","906","907","908","909","910","912","913","914","915","916","917","918","919","920","925","928","929","930","931","934","936","937","938","940","941","943","945","947","948","949","951","952","954","956","959","970","971","972","973","975","978","979","980","983","984","985","986","989"]},"capital":["Washington D.C."],"altSpellings":["US","USA","United States of America"],"region":"Americas","subregion":"North America","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629","common":"\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629"},"ces":{"official":"Spojen\xe9 st\xe1ty americk\xe9","common":"Spojen\xe9 st\xe1ty"},"deu":{"official":"Vereinigte Staaten von Amerika","common":"Vereinigte Staaten"},"est":{"official":"Ameerika \xdchendriigid","common":"Ameerika \xdchendriigid"},"fin":{"official":"Amerikan yhdysvallat","common":"Yhdysvallat"},"fra":{"official":"Les \xe9tats-unis d\'Am\xe9rique","common":"\xc9tats-Unis"},"hrv":{"official":"Sjedinjene Dr\u017Eave Amerike","common":"Sjedinjene Ameri\u010Dke Dr\u017Eave"},"hun":{"official":"Amerikai Egyes\xfclt \xc1llamok","common":"Amerikai Egyes\xfclt \xc1llamok"},"ita":{"official":"Stati Uniti d\'America","common":"Stati Uniti d\'America"},"jpn":{"official":"\u30A2\u30E1\u30EA\u30AB\u5408\u8846\u56FD","common":"\u30A2\u30E1\u30EA\u30AB"},"kor":{"official":"\uC544\uBA54\uB9AC\uCE74 \uD569\uC911\uAD6D","common":"\uBBF8\uAD6D"},"nld":{"official":"Verenigde Staten van Amerika","common":"Verenigde Staten"},"per":{"official":"\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627","common":"\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627"},"pol":{"official":"Stany Zjednoczone Ameryki","common":"Stany Zjednoczone"},"por":{"official":"Estados Unidos da Am\xe9rica","common":"Estados Unidos"},"rus":{"official":"\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u0410\u043C\u0435\u0440\u0438\u043A\u0438","common":"\u0421\u043E\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u0410\u043C\u0435\u0440\u0438\u043A\u0438"},"slk":{"official":"Spojen\xe9 \u0161t\xe1ty Americk\xe9","common":"Spojen\xe9 \u0161t\xe1ty americk\xe9"},"spa":{"official":"Estados Unidos de Am\xe9rica","common":"Estados Unidos"},"srp":{"official":"Sjedinjene Ameri\u010Dke Dr\u017Eave","common":"SAD"},"swe":{"official":"Amerikas f\xf6renta stater","common":"USA"},"tur":{"official":"Amerika Birle\u015Fik Devletleri","common":"Amerika Birle\u015Fik Devletleri"},"urd":{"official":"\u0631\u06CC\u0627\u0633\u062A\u06C1\u0627\u0626\u06D2 \u0645\u062A\u062D\u062F\u06C1 \u0627\u0645\u0631\u06CC\u06A9\u0627","common":"\u0631\u06CC\u0627\u0633\u062A\u06C1\u0627\u0626\u06D2 \u0645\u062A\u062D\u062F\u06C1"},"zho":{"official":"\u7F8E\u5229\u575A\u5408\u4F17\u56FD","common":"\u7F8E\u56FD"}},"latlng":[38,-97],"landlocked":false,"borders":["CAN","MEX"],"area":9372610,"flag":"\uD83C\uDDFA\uD83C\uDDF8","demonyms":{"eng":{"f":"American","m":"American"},"fra":{"f":"Am\xe9ricaine","m":"Am\xe9ricain"}}},{"name":{"common":"Uzbekistan","official":"Republic of Uzbekistan","native":{"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D","common":"\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D"},"uzb":{"official":"O\'zbekiston Respublikasi","common":"O\u2018zbekiston"}}},"tld":[".uz"],"cca2":"UZ","ccn3":"860","cca3":"UZB","cioc":"UZB","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"UZS":{"name":"Uzbekistani so\u02BBm","symbol":"so\'m"}},"idd":{"root":"+9","suffixes":["98"]},"capital":["Tashkent"],"altSpellings":["UZ","Republic of Uzbekistan","O\u2018zbekiston Respublikasi","\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0441\u0438"],"region":"Asia","subregion":"Central Asia","languages":{"rus":"Russian","uzb":"Uzbek"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0648\u0632\u0628\u0627\u0643\u0633\u062A\u0627\u0646","common":"\u0623\u0648\u0632\u0628\u0627\u0643\u0633\u062A\u0627\u0646"},"ces":{"official":"Republika Uzbekist\xe1n","common":"Uzbekist\xe1n"},"deu":{"official":"Republik Usbekistan","common":"Usbekistan"},"est":{"official":"Usbekistani Vabariik","common":"Usbekistan"},"fin":{"official":"Uzbekistanin tasavalta","common":"Uzbekistan"},"fra":{"official":"R\xe9publique d\'Ouzb\xe9kistan","common":"Ouzb\xe9kistan"},"hrv":{"official":"Republika Uzbekistan","common":"Uzbekistan"},"hun":{"official":"\xdczb\xe9g K\xf6zt\xe1rsas\xe1g","common":"\xdczbegiszt\xe1n"},"ita":{"official":"Repubblica di Uzbekistan","common":"Uzbekistan"},"jpn":{"official":"\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3\u5171\u548C\u56FD","common":"\u30A6\u30BA\u30D9\u30AD\u30B9\u30BF\u30F3"},"kor":{"official":"\uC6B0\uC988\uBCA0\uD0A4\uC2A4\uD0C4 \uACF5\uD654\uAD6D","common":"\uC6B0\uC988\uBCA0\uD0A4\uC2A4\uD0C4"},"nld":{"official":"Republiek Oezbekistan","common":"Oezbekistan"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646","common":"\u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646"},"pol":{"official":"Republika Uzbekistanu","common":"Uzbekistan"},"por":{"official":"Rep\xfablica do Usbequist\xe3o","common":"Uzbequist\xe3o"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D","common":"\u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D"},"slk":{"official":"Uzbeck\xe1 republika","common":"Uzbekistan"},"spa":{"official":"Rep\xfablica de Uzbekist\xe1n","common":"Uzbekist\xe1n"},"srp":{"official":"Republika Uzbekistan","common":"Uzbekistan"},"swe":{"official":"Republiken Uzbekistan","common":"Uzbekistan"},"tur":{"official":"\xf6zbekistan Cumhuriyeti","common":"\xf6zbekistan"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646","common":"\u0627\u0632\u0628\u06A9\u0633\u062A\u0627\u0646"},"zho":{"official":"\u4E4C\u5179\u522B\u514B\u65AF\u5766\u5171\u548C\u56FD","common":"\u4E4C\u5179\u522B\u514B\u65AF\u5766"}},"latlng":[41,64],"landlocked":true,"borders":["AFG","KAZ","KGZ","TJK","TKM"],"area":447400,"flag":"\uD83C\uDDFA\uD83C\uDDFF","demonyms":{"eng":{"f":"Uzbekistani","m":"Uzbekistani"},"fra":{"f":"Ouzb\xe8ke","m":"Ouzb\xe8ke"}}},{"name":{"common":"Vatican City","official":"Vatican City State","native":{"ita":{"official":"Stato della Citt\xe0 del Vaticano","common":"Vaticano"},"lat":{"official":"Status Civitatis Vatican\xe6","common":"Vatican\xe6"}}},"tld":[".va"],"cca2":"VA","ccn3":"336","cca3":"VAT","cioc":"","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"","currencies":{"EUR":{"name":"Euro","symbol":"\u20AC"}},"idd":{"root":"+3","suffixes":["906698","79"]},"capital":["Vatican City"],"altSpellings":["VA","Holy See (Vatican City State)","Vatican City State","Vatican","Stato della Citt\xe0 del Vaticano"],"region":"Europe","subregion":"Southern Europe","languages":{"ita":"Italian","lat":"Latin"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0641\u0627\u062A\u064A\u0643\u0627\u0646","common":"\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0641\u0627\u062A\u064A\u0643\u0627\u0646"},"ces":{"official":"M\u011Bstsk\xfd st\xe1t Vatik\xe1n","common":"Vatik\xe1n"},"deu":{"official":"Staat Vatikanstadt","common":"Vatikanstadt"},"est":{"official":"Vatikani Linnriik","common":"Vatikan"},"fin":{"official":"Vatikaanin kaupunkivaltio","common":"Vatikaani"},"fra":{"official":"Cit\xe9 du Vatican","common":"Cit\xe9 du Vatican"},"hrv":{"official":"Vatikan","common":"Vatikan"},"hun":{"official":"Vatik\xe1n \xc1llam","common":"Vatik\xe1n"},"ita":{"official":"Citt\xe0 del Vaticano","common":"Citt\xe0 del Vaticano"},"jpn":{"official":"\u30D0\u30C1\u30AB\u30F3\u5E02\u56FD","common":"\u30D0\u30C1\u30AB\u30F3"},"kor":{"official":"\uBC14\uD2F0\uCE78 \uC2DC\uAD6D","common":"\uBC14\uD2F0\uCE78"},"nld":{"official":"Vaticaanstad","common":"Vaticaanstad"},"per":{"official":"\u062F\u0648\u0644\u062A\u200C\u0634\u0647\u0631 \u0648\u0627\u062A\u06CC\u06A9\u0627\u0646","common":"\u0648\u0627\u062A\u06CC\u06A9\u0627\u0646"},"pol":{"official":"Pa\u0144stwo Watyka\u0144skie","common":"Watykan"},"por":{"official":"Cidade do Vaticano","common":"Cidade do Vaticano"},"rus":{"official":"\u0413\u043E\u0440\u043E\u0434-\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u0412\u0430\u0442\u0438\u043A\u0430\u043D","common":"\u0412\u0430\u0442\u0438\u043A\u0430\u043D"},"slk":{"official":"Sv\xe4t\xe1 stolica (Vatik\xe1nsky mestsk\xfd \u0161t\xe1t","common":"Vatik\xe1n"},"spa":{"official":"Ciudad del Vaticano","common":"Ciudad del Vaticano"},"srp":{"official":"Sveta Stolica","common":"Vatikan"},"swe":{"official":"Vatikanstaten","common":"Vatikanstaten"},"tur":{"official":"Vatikan \u015Fehir Devleti","common":"Vatikan"},"urd":{"official":"\u0648\u06CC\u0679\u06CC\u06A9\u0646 \u0633\u0679\u06CC","common":"\u0648\u06CC\u0679\u06CC\u06A9\u0646 \u0633\u0679\u06CC"},"zho":{"official":"\u68B5\u8482\u5188\u57CE\u56FD","common":"\u68B5\u8482\u5188"}},"latlng":[41.9,12.45],"landlocked":true,"borders":["ITA"],"area":0.44,"flag":"\uD83C\uDDFB\uD83C\uDDE6","demonyms":{"eng":{"f":"Vatican","m":"Vatican"},"fra":{"f":"Vaticane","m":"Vatican"}}},{"name":{"common":"Saint Vincent and the Grenadines","official":"Saint Vincent and the Grenadines","native":{"eng":{"official":"Saint Vincent and the Grenadines","common":"Saint Vincent and the Grenadines"}}},"tld":[".vc"],"cca2":"VC","ccn3":"670","cca3":"VCT","cioc":"VIN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"XCD":{"name":"Eastern Caribbean dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["784"]},"capital":["Kingstown"],"altSpellings":["VC"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u0633\u0627\u0646\u062A \u0641\u064A\u0646\u0633\u0646\u062A \u0648\u0627\u0644\u063A\u0631\u064A\u0646\u0627\u062F\u064A\u0646","common":"\u0633\u0627\u0646\u062A \u0641\u064A\u0646\u0633\u0646\u062A \u0648\u0627\u0644\u063A\u0631\u064A\u0646\u0627\u062F\u064A\u0646"},"ces":{"official":"Svat\xfd Vincenc a Grenadiny","common":"Svat\xfd Vincenc a Grenadiny"},"deu":{"official":"St. Vincent und die Grenadinen","common":"St. Vincent und die Grenadinen"},"est":{"official":"Saint Vincent ja Grenadiinid","common":"Saint Vincent"},"fin":{"official":"Saint Vincent ja Grenadiinit","common":"Saint Vincent ja Grenadiinit"},"fra":{"official":"Saint-Vincent-et-les Grenadines","common":"Saint-Vincent-et-les-Grenadines"},"hrv":{"official":"Sveti Vincent i Grenadini","common":"Sveti Vincent i Grenadini"},"hun":{"official":"Saint Vincent \xe9s a Grenadine-szigetek","common":"Saint Vincent \xe9s a Grenadine-szigetek"},"ita":{"official":"Saint Vincent e Grenadine","common":"Saint Vincent e Grenadine"},"jpn":{"official":"\u30BB\u30F3\u30C8\u30D3\u30F3\u30BB\u30F3\u30C8\u30FB\u30B0\u30EC\u30CA\u30C7\u30A3\u30FC\u30F3\u8AF8\u5CF6","common":"\u30BB\u30F3\u30C8\u30D3\u30F3\u30BB\u30F3\u30C8\u30FB\u30B0\u30EC\u30CA\u30C7\u30A3\u30FC\u30F3"},"kor":{"official":"\uC138\uC778\uD2B8\uBE48\uC13C\uD2B8 \uADF8\uB808\uB098\uB518","common":"\uC138\uC778\uD2B8\uBE48\uC13C\uD2B8 \uADF8\uB808\uB098\uB518"},"nld":{"official":"Saint Vincent en de Grenadines","common":"Saint Vincent en de Grenadines"},"per":{"official":"\u0633\u0646\u062A \u0648\u06CC\u0646\u0633\u0646\u062A \u0648 \u06AF\u0631\u0646\u0627\u062F\u06CC\u0646\u200C\u0647\u0627","common":"\u0633\u0646\u062A \u0648\u06CC\u0646\u0633\u0646\u062A \u0648 \u06AF\u0631\u0646\u0627\u062F\u06CC\u0646\u200C\u0647\u0627"},"pol":{"official":"Saint Vincent i Grenadyny","common":"Saint Vincent i Grenadyny"},"por":{"official":"S\xe3o Vicente e Granadinas","common":"S\xe3o Vincente e Granadinas"},"rus":{"official":"\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442 \u0438 \u0413\u0440\u0435\u043D\u0430\u0434\u0438\u043D\u044B","common":"\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442 \u0438 \u0413\u0440\u0435\u043D\u0430\u0434\u0438\u043D\u044B"},"slk":{"official":"Sv\xe4t\xfd Vincent a Grenad\xedny","common":"Sv\xe4t\xfd Vincent a Grenad\xedny"},"spa":{"official":"San Vicente y las Granadinas","common":"San Vicente y Granadinas"},"srp":{"official":"Sent Vinsent i Grenadini","common":"Sveti Vinsent i Grenadini"},"swe":{"official":"Saint Vincent och Grenadinerna","common":"Saint Vincent och Grenadinerna"},"tur":{"official":"Saint Vincent ve Grenadinler","common":"Saint Vincent ve Grenadinler"},"urd":{"official":"\u0633\u06CC\u0646\u0679 \u0648\u06CC\u0646\u0633\u06CC\u0646\u0679 \u0648 \u06AF\u0631\u06CC\u0646\u0627\u0688\u0627\u0626\u0646\u0632","common":"\u0633\u06CC\u0646\u0679 \u0648\u06CC\u0646\u0633\u06CC\u0646\u0679 \u0648 \u06AF\u0631\u06CC\u0646\u0627\u0688\u0627\u0626\u0646\u0632"},"zho":{"official":"\u5723\u6587\u68EE\u7279\u548C\u683C\u6797\u7EB3\u4E01\u65AF","common":"\u5723\u6587\u68EE\u7279\u548C\u683C\u6797\u7EB3\u4E01\u65AF"}},"latlng":[13.25,-61.2],"landlocked":false,"borders":[],"area":389,"flag":"\uD83C\uDDFB\uD83C\uDDE8","demonyms":{"eng":{"f":"Saint Vincentian","m":"Saint Vincentian"},"fra":{"f":"Vincentaise","m":"Vincentais"}}},{"name":{"common":"Venezuela","official":"Bolivarian Republic of Venezuela","native":{"spa":{"official":"Rep\xfablica Bolivariana de Venezuela","common":"Venezuela"}}},"tld":[".ve"],"cca2":"VE","ccn3":"862","cca3":"VEN","cioc":"VEN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Latin American and Caribbean Group","currencies":{"VES":{"name":"Venezuelan bol\xedvar soberano","symbol":"Bs.S."}},"idd":{"root":"+5","suffixes":["8"]},"capital":["Caracas"],"altSpellings":["VE","Bolivarian Republic of Venezuela","Venezuela, Bolivarian Republic of","Rep\xfablica Bolivariana de Venezuela"],"region":"Americas","subregion":"South America","languages":{"spa":"Spanish"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0641\u0646\u0632\u0648\u064A\u0644\u0627 \u0627\u0644\u0628\u0648\u0644\u064A\u0641\u0627\u0631\u064A\u0629","common":"\u0641\u0646\u0632\u0648\u064A\u0644\u0627"},"ces":{"official":"Bol\xedvarsk\xe1 republika Venezuela","common":"Venezuela"},"deu":{"official":"Bolivarische Republik Venezuela","common":"Venezuela"},"est":{"official":"Venezuela Bol\xedvari Vabariik","common":"Venezuela"},"fin":{"official":"Venezuelan bolivariaainen tasavalta","common":"Venezuela"},"fra":{"official":"R\xe9publique bolivarienne du Venezuela","common":"Venezuela"},"hrv":{"official":"BOLIVARIJANSKA Republika Venezuela","common":"Venezuela"},"hun":{"official":"Venezuelai Boliv\xe1ri K\xf6zt\xe1rsas\xe1g","common":"Venezuela"},"ita":{"official":"Repubblica Bolivariana del Venezuela","common":"Venezuela"},"jpn":{"official":"\u30D9\u30CD\u30BA\u30A8\u30E9\u30FB\u30DC\u30EA\u30D0\u30EB\u5171\u548C\u56FD","common":"\u30D9\u30CD\u30BA\u30A8\u30E9"},"kor":{"official":"\uBCA0\uB124\uC218\uC5D8\uB77C \uBCFC\uB9AC\uBC14\uB974 \uACF5\uD654\uAD6D","common":"\uBCA0\uB124\uC218\uC5D8\uB77C"},"nld":{"official":"Bolivariaanse Republiek Venezuela","common":"Venezuela"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0628\u0648\u0644\u06CC\u0648\u0627\u0631\u06CC \u0648\u0646\u0632\u0648\u0626\u0644\u0627","common":"\u0648\u0646\u0632\u0648\u0626\u0644\u0627"},"pol":{"official":"Boliwaria\u0144ska Republika Wenezueli","common":"Wenezuela"},"por":{"official":"Rep\xfablica Bolivariana da Venezuela","common":"Venezuela"},"rus":{"official":"\u0411\u043E\u043B\u0438\u0432\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0430","common":"\u0412\u0435\u043D\u0435\u0441\u0443\u044D\u043B\u0430"},"slk":{"official":"Venezuelsk\xe1 bol\xedvarovsk\xe1 republika","common":"Venezuela"},"spa":{"official":"Rep\xfablica Bolivariana de Venezuela","common":"Venezuela"},"srp":{"official":"Bolivarska Republika Venecuela","common":"Venecuela"},"swe":{"official":"Bolivarianska republiken Venezuela","common":"Venezuela"},"tur":{"official":"Bolivarc\u0131 Venezuela Cumhuriyeti","common":"Venezuela"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0648\u06CC\u0646\u06CC\u0632\u0648\u06CC\u0644\u0627","common":"\u0648\u06CC\u0646\u06CC\u0632\u0648\u06CC\u0644\u0627"},"zho":{"official":"\u59D4\u5185\u745E\u62C9\u73BB\u5229\u74E6\u5C14\u5171\u548C\u56FD","common":"\u59D4\u5185\u745E\u62C9"}},"latlng":[8,-66],"landlocked":false,"borders":["BRA","COL","GUY"],"area":916445,"flag":"\uD83C\uDDFB\uD83C\uDDEA","demonyms":{"eng":{"f":"Venezuelan","m":"Venezuelan"},"fra":{"f":"V\xe9n\xe9zu\xe9lienne","m":"V\xe9n\xe9zu\xe9lien"}}},{"name":{"common":"British Virgin Islands","official":"Virgin Islands","native":{"eng":{"official":"Virgin Islands","common":"British Virgin Islands"}}},"tld":[".vg"],"cca2":"VG","ccn3":"092","cca3":"VGB","cioc":"IVB","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["284"]},"capital":["Road Town"],"altSpellings":["VG","Virgin Islands, British"],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0627\u0644\u0639\u0630\u0631\u0627\u0621 \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A\u0629","common":"\u062C\u0632\u0631 \u0627\u0644\u0639\u0630\u0631\u0627\u0621"},"ces":{"official":"Britsk\xe9 Panensk\xe9 ostrovy","common":"Britsk\xe9 Panensk\xe9 ostrovy"},"deu":{"official":"Jungferninseln","common":"Britische Jungferninseln"},"est":{"official":"Neitsisaared","common":"Briti Neitsisaared"},"fin":{"official":"Brittil\xe4iset Neitsytsaaret","common":"Neitsytsaaret"},"fra":{"official":"\xeeles Vierges","common":"\xceles Vierges britanniques"},"hrv":{"official":"Djevi\u010Danski Otoci","common":"Britanski Djevi\u010Danski Otoci"},"hun":{"official":"Brit Virgin-szigetek","common":"Brit Virgin-szigetek"},"ita":{"official":"Isole Vergini","common":"Isole Vergini Britanniche"},"jpn":{"official":"\u82F1\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6","common":"\u30A4\u30AE\u30EA\u30B9\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6"},"kor":{"official":"\uC601\uAD6D\uB839 \uBC84\uC9C4\uC544\uC77C\uB79C\uB4DC","common":"\uC601\uAD6D\uB839 \uBC84\uC9C4\uC544\uC77C\uB79C\uB4DC"},"nld":{"official":"Maagdeneilanden","common":"Britse Maagdeneilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0648\u06CC\u0631\u062C\u06CC\u0646 \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627","common":"\u062C\u0632\u0627\u06CC\u0631 \u0648\u06CC\u0631\u062C\u06CC\u0646 \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627"},"pol":{"official":"Brytyjskie Wyspy Dziewicze","common":"Brytyjskie Wyspy Dziewicze"},"por":{"official":"Ilhas Virgens","common":"Ilhas Virgens"},"rus":{"official":"\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0411\u0440\u0438\u0442\u0430\u043D\u0441\u043A\u0438\u0435 \u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Panensk\xe9 ostrovy","common":"Panensk\xe9 ostrovy"},"spa":{"official":"Islas V\xedrgenes","common":"Islas V\xedrgenes del Reino Unido"},"srp":{"official":"Devi\u010Danska Ostrva","common":"Britanska Devi\u010Danska Ostrva"},"swe":{"official":"Brittiska Jungfru\xf6arna","common":"Brittiska Jungfru\xf6arna"},"tur":{"official":"Virjin Adalar\u0131","common":"Virjin Adalar\u0131"},"urd":{"official":"\u0628\u0631\u0637\u0627\u0646\u0648\u06CC \u062C\u0632\u0627\u0626\u0631 \u0648\u0631\u062C\u0646","common":"\u0628\u0631\u0637\u0627\u0646\u0648\u06CC \u062C\u0632\u0627\u0626\u0631 \u0648\u0631\u062C\u0646"},"zho":{"official":"\u82F1\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B","common":"\u82F1\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B"}},"latlng":[18.431383,-64.62305],"landlocked":false,"borders":[],"area":151,"flag":"\uD83C\uDDFB\uD83C\uDDEC","demonyms":{"eng":{"f":"Virgin Islander","m":"Virgin Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"United States Virgin Islands","official":"Virgin Islands of the United States","native":{"eng":{"official":"Virgin Islands of the United States","common":"United States Virgin Islands"}}},"tld":[".vi"],"cca2":"VI","ccn3":"850","cca3":"VIR","cioc":"ISV","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["340"]},"capital":["Charlotte Amalie"],"altSpellings":["VI","Virgin Islands, U.S."],"region":"Americas","subregion":"Caribbean","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0632\u0631 \u0627\u0644\u0639\u0630\u0631\u0627\u0621 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629","common":"\u062C\u0632\u0631 \u0627\u0644\u0639\u0630\u0631\u0627\u0621 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629"},"ces":{"official":"Americk\xe9 Panensk\xe9 ostrovy","common":"Americk\xe9 Panensk\xe9 ostrovy"},"deu":{"official":"Amerikanische Jungferninseln","common":"Amerikanische Jungferninseln"},"est":{"official":"\xdchendriikide Neitsisaared","common":"Neitsisaared, USA"},"fin":{"official":"Yhdysvaltain Neitsytsaaret","common":"Neitsytsaaret"},"fra":{"official":"\xceles Vierges des \xc9tats-Unis","common":"\xceles Vierges des \xc9tats-Unis"},"hrv":{"official":"Djevi\u010Danski Otoci SAD","common":"Ameri\u010Dki Djevi\u010Danski Otoci"},"hun":{"official":"Amerikai Virgin-szigetek","common":"Amerikai Virgin-szigetek"},"ita":{"official":"Isole Vergini degli Stati Uniti","common":"Isole Vergini americane"},"jpn":{"official":"\u7C73\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6","common":"\u30A2\u30E1\u30EA\u30AB\u9818\u30F4\u30A1\u30FC\u30B8\u30F3\u8AF8\u5CF6"},"kor":{"official":"\uBBF8\uAD6D\uB839 \uBC84\uC9C4\uC544\uC77C\uB79C\uB4DC","common":"\uBBF8\uAD6D\uB839 \uBC84\uC9C4\uC544\uC77C\uB79C\uB4DC"},"nld":{"official":"Maagdeneilanden van de Verenigde Staten","common":"Amerikaanse Maagdeneilanden"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0648\u06CC\u0631\u062C\u06CC\u0646 \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627","common":"\u062C\u0632\u0627\u06CC\u0631 \u0648\u06CC\u0631\u062C\u06CC\u0646 \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627"},"pol":{"official":"Wyspy Dziewicze Stan\xf3w Zjednoczonych","common":"Wyspy Dziewicze Stan\xf3w Zjednoczonych"},"por":{"official":"Ilhas Virgens dos Estados Unidos","common":"Ilhas Virgens dos Estados Unidos"},"rus":{"official":"\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 \u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u0428\u0442\u0430\u0442\u043E\u0432","common":"\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u041E\u0441\u0442\u0440\u043E\u0432\u0430"},"slk":{"official":"Americk\xe9 Panensk\xe9 ostrovy","common":"Americk\xe9 Panensk\xe9 ostrovy"},"spa":{"official":"Islas V\xedrgenes de los Estados Unidos","common":"Islas V\xedrgenes de los Estados Unidos"},"srp":{"official":"Devi\u010Danska Ostrva Amerike","common":"Ameri\u010Dka Devi\u010Danska Ostrva"},"swe":{"official":"Amerikanska Jungfru\xf6arna","common":"Amerikanska Jungfru\xf6arna"},"tur":{"official":"Amerika Birle\u015Fik Devletleri Virjin Adalar\u0131","common":"ABD Virjin Adalar\u0131"},"urd":{"official":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u062C\u0632\u0627\u0626\u0631 \u0648\u0631\u062C\u0646","common":"\u0627\u0645\u0631\u06CC\u06A9\u06CC \u062C\u0632\u0627\u0626\u0631 \u0648\u0631\u062C\u0646"},"zho":{"official":"\u7F8E\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B","common":"\u7F8E\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B"}},"latlng":[18.35,-64.933333],"landlocked":false,"borders":[],"area":347,"flag":"\uD83C\uDDFB\uD83C\uDDEE","demonyms":{"eng":{"f":"Virgin Islander","m":"Virgin Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Vietnam","official":"Socialist Republic of Vietnam","native":{"vie":{"official":"C\u1ED9ng h\xf2a x\xe3 h\u1ED9i ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam","common":"Vi\u1EC7t Nam"}}},"tld":[".vn"],"cca2":"VN","ccn3":"704","cca3":"VNM","cioc":"VIE","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"VND":{"name":"Vietnamese \u0111\u1ED3ng","symbol":"\u20AB"}},"idd":{"root":"+8","suffixes":["4"]},"capital":["Hanoi"],"altSpellings":["VN","Socialist Republic of Vietnam","C\u1ED9ng h\xf2a X\xe3 h\u1ED9i ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam","Viet Nam"],"region":"Asia","subregion":"South-Eastern Asia","languages":{"vie":"Vietnamese"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0641\u064A\u062A\u0646\u0627\u0645 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643\u064A\u0629","common":"\u0641\u064A\u062A\u0646\u0627\u0645"},"ces":{"official":"Vietnamsk\xe1 socialistick\xe1 republika","common":"Vietnam"},"deu":{"official":"Sozialistische Republik Vietnam","common":"Vietnam"},"est":{"official":"Vietnami Sotsialistlik Vabariik","common":"Vietnam"},"fin":{"official":"Vietnamin sosialistinen tasavalta","common":"Vietnam"},"fra":{"official":"R\xe9publique socialiste du Vi\xeat Nam","common":"Vi\xeat Nam"},"hrv":{"official":"Socijalisti\u010Dka Republika Vijetnam","common":"Vijetnam"},"hun":{"official":"Vietn\xe1mi Szocialista K\xf6zt\xe1rsas\xe1g","common":"Vietn\xe1m"},"ita":{"official":"Repubblica socialista del Vietnam","common":"Vietnam"},"jpn":{"official":"\u30D9\u30C8\u30CA\u30E0\u793E\u4F1A\u4E3B\u7FA9\u5171\u548C\u56FD","common":"\u30D9\u30C8\u30CA\u30E0"},"kor":{"official":"\uBCA0\uD2B8\uB0A8 \uC0AC\uD68C\uC8FC\uC758 \uACF5\uD654\uAD6D","common":"\uBCA0\uD2B8\uB0A8"},"nld":{"official":"Socialistische Republiek Vietnam","common":"Vietnam"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0633\u0648\u0633\u06CC\u0627\u0644\u06CC\u0633\u062A\u06CC \u0648\u06CC\u062A\u0646\u0627\u0645","common":"\u0648\u06CC\u062A\u0646\u0627\u0645"},"pol":{"official":"Socjalistyczna Republika Wietnamu","common":"Wietnam"},"por":{"official":"Rep\xfablica Socialista do Vietname","common":"Vietname"},"rus":{"official":"\u0421\u043E\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0412\u044C\u0435\u0442\u043D\u0430\u043C","common":"\u0412\u044C\u0435\u0442\u043D\u0430\u043C"},"slk":{"official":"Vietnamsk\xe1 socialistick\xe1 republika","common":"Vietnam"},"spa":{"official":"Rep\xfablica Socialista de Vietnam","common":"Vietnam"},"srp":{"official":"Socijalisti\u010Dka Republika Vijetnam","common":"Vijetnam"},"swe":{"official":"Socialistiska republiken Vietnam","common":"Vietnam"},"tur":{"official":"Vietnam Sosyalist Cumhuriyeti","common":"Vietnam"},"urd":{"official":"\u0627\u0634\u062A\u0631\u0627\u06A9\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0648\u06CC\u062A\u0646\u0627\u0645","common":"\u0648\u06CC\u062A\u0646\u0627\u0645"},"zho":{"official":"\u8D8A\u5357\u793E\u4F1A\u4E3B\u4E49\u5171\u548C\u56FD","common":"\u8D8A\u5357"}},"latlng":[16.16666666,107.83333333],"landlocked":false,"borders":["KHM","CHN","LAO"],"area":331212,"flag":"\uD83C\uDDFB\uD83C\uDDF3","demonyms":{"eng":{"f":"Vietnamese","m":"Vietnamese"},"fra":{"f":"Vietnamienne","m":"Vietnamien"}}},{"name":{"common":"Vanuatu","official":"Republic of Vanuatu","native":{"bis":{"official":"Ripablik blong Vanuatu","common":"Vanuatu"},"eng":{"official":"Republic of Vanuatu","common":"Vanuatu"},"fra":{"official":"R\xe9publique de Vanuatu","common":"Vanuatu"}}},"tld":[".vu"],"cca2":"VU","ccn3":"548","cca3":"VUT","cioc":"VAN","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"VUV":{"name":"Vanuatu vatu","symbol":"Vt"}},"idd":{"root":"+6","suffixes":["78"]},"capital":["Port Vila"],"altSpellings":["VU","Republic of Vanuatu","Ripablik blong Vanuatu","R\xe9publique de Vanuatu"],"region":"Oceania","subregion":"Melanesia","languages":{"bis":"Bislama","eng":"English","fra":"French"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0641\u0627\u0646\u0648\u0627\u062A\u0648","common":"\u0641\u0627\u0646\u0648\u0627\u062A\u0648"},"ces":{"official":"Republika Vanuatu","common":"Vanuatu"},"deu":{"official":"Vanuatu","common":"Vanuatu"},"est":{"official":"Vanuatu Vabariik","common":"Vanuatu"},"fin":{"official":"Vanuatun tasavalta","common":"Vanuatu"},"fra":{"official":"R\xe9publique de Vanuatu","common":"Vanuatu"},"hrv":{"official":"Republika Vanuatu","common":"Vanuatu"},"hun":{"official":"Vanuatui K\xf6zt\xe1rsas\xe1g","common":"Vanuatu"},"ita":{"official":"Repubblica di Vanuatu","common":"Vanuatu"},"jpn":{"official":"\u30D0\u30CC\u30A2\u30C4\u5171\u548C\u56FD","common":"\u30D0\u30CC\u30A2\u30C4"},"kor":{"official":"\uBC14\uB204\uC544\uD22C \uACF5\uD654\uAD6D","common":"\uBC14\uB204\uC544\uD22C"},"nld":{"official":"Republiek Vanuatu","common":"Vanuatu"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0648\u0627\u0646\u0648\u0627\u062A\u0648","common":"\u0648\u0627\u0646\u0648\u0627\u062A\u0648"},"pol":{"official":"Republika Vanuatu","common":"Vanuatu"},"por":{"official":"Rep\xfablica de Vanuatu","common":"Vanuatu"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0412\u0430\u043D\u0443\u0430\u0442\u0443","common":"\u0412\u0430\u043D\u0443\u0430\u0442\u0443"},"slk":{"official":"Vanuatsk\xe1 republika","common":"Vanuatu"},"spa":{"official":"Rep\xfablica de Vanuatu","common":"Vanuatu"},"srp":{"official":"Republika Vanuatu","common":"Vanuatu"},"swe":{"official":"Republiken Vanuatu","common":"Vanuatu"},"tur":{"official":"Vanuatu Cumhuriyeti","common":"Vanuatu"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0648\u0627\u0646\u0648\u0627\u062A\u0648","common":"\u0648\u0627\u0646\u0648\u0627\u062A\u0648"},"zho":{"official":"\u74E6\u52AA\u963F\u56FE\u5171\u548C\u56FD","common":"\u74E6\u52AA\u963F\u56FE"}},"latlng":[-16,167],"landlocked":false,"borders":[],"area":12189,"flag":"\uD83C\uDDFB\uD83C\uDDFA","demonyms":{"eng":{"f":"Ni-Vanuatu","m":"Ni-Vanuatu"},"fra":{"f":"Vanuatuane","m":"Vanuatuan"}}},{"name":{"common":"Wallis and Futuna","official":"Territory of the Wallis and Futuna Islands","native":{"fra":{"official":"Territoire des \xeeles Wallis et Futuna","common":"Wallis et Futuna"}}},"tld":[".wf"],"cca2":"WF","ccn3":"876","cca3":"WLF","cioc":"","independent":false,"status":"officially-assigned","unMember":false,"unRegionalGroup":"","currencies":{"XPF":{"name":"CFP franc","symbol":"\u20A3"}},"idd":{"root":"+6","suffixes":["81"]},"capital":["Mata-Utu"],"altSpellings":["WF","Territory of the Wallis and Futuna Islands","Territoire des \xeeles Wallis et Futuna"],"region":"Oceania","subregion":"Polynesia","languages":{"fra":"French"},"translations":{"ara":{"official":"\u0625\u0642\u0644\u064A\u0645 \u062C\u0632\u0631 \u0648\u0627\u0644\u064A\u0633 \u0648\u0641\u0648\u062A\u0648\u0646\u0627","common":"\u0648\u0627\u0644\u064A\u0633 \u0648\u0641\u0648\u062A\u0648\u0646\u0627"},"ces":{"official":"Teritorium ostrov\u016F Wallis a Futuna","common":"Wallis a Futuna"},"deu":{"official":"Gebiet der Wallis und Futuna","common":"Wallis und Futuna"},"est":{"official":"Wallise ja Futuna ala","common":"Wallis ja Futuna"},"fin":{"official":"Wallisin ja Futunan yhteis\xf6","common":"Wallis ja Futuna"},"fra":{"official":"Territoire des \xeeles Wallis et Futuna","common":"Wallis-et-Futuna"},"hrv":{"official":"Teritoriju Wallis i Futuna","common":"Wallis i Fortuna"},"hun":{"official":"Wallis \xe9s Futuna","common":"Wallis \xe9s Futuna"},"ita":{"official":"Territorio delle Isole Wallis e Futuna","common":"Wallis e Futuna"},"jpn":{"official":"\u30EF\u30EA\u30B9\u30FB\u30D5\u30C6\u30E5\u30CA\u8AF8\u5CF6","common":"\u30A6\u30A9\u30EA\u30B9\u30FB\u30D5\u30C4\u30CA"},"kor":{"official":"\uC648\uB9AC\uC2A4 \uD4CC\uD280\uB098","common":"\uC648\uB9AC\uC2A4 \uD4CC\uD280\uB098"},"nld":{"official":"Grondgebied van de Wallis en Futuna","common":"Wallis en Futuna"},"per":{"official":"\u062C\u0632\u0627\u06CC\u0631 \u0648\u0627\u0644\u06CC\u0633 \u0648 \u0641\u0648\u062A\u0648\u0646\u0627","common":"\u0648\u0627\u0644\u06CC\u0633 \u0648 \u0641\u0648\u062A\u0648\u0646\u0627"},"pol":{"official":"Terytorium Wysp Wallis i Futuna","common":"Wallis i Futuna"},"por":{"official":"Territ\xf3rio das Ilhas Wallis e Futuna","common":"Wallis e Futuna"},"rus":{"official":"\u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0423\u043E\u043B\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430","common":"\u0423\u043E\u043B\u043B\u0438\u0441 \u0438 \u0424\u0443\u0442\u0443\u043D\u0430"},"slk":{"official":"Terit\xf3rium ostrovov Wallis a Futuna","common":"Wallis a Futuna"},"spa":{"official":"Territorio de las Islas Wallis y Futuna","common":"Wallis y Futuna"},"srp":{"official":"Teritorija ostrva Valis i Futuna","common":"Valis i Futuna ostrva"},"swe":{"official":"Territoriet Wallis- och Futuna\xf6arna","common":"Wallis- och Futuna\xf6arna"},"tur":{"official":"Wallis ve Futuna Adalar\u0131 B\xf6lgesi","common":"Wallis ve Futuna Adalar\u0131 B\xf6lgesi"},"urd":{"official":"\u0633\u0631 \u0632\u0645\u06CC\u0646\u0650 \u0648\u0627\u0644\u0633 \u0648 \u0641\u062A\u0648\u0646\u06C1 \u062C\u0632\u0627\u0626\u0631","common":"\u0648\u0627\u0644\u0633 \u0648 \u0641\u062A\u0648\u0646\u06C1"},"zho":{"official":"\u74E6\u5229\u65AF\u548C\u5BCC\u56FE\u7EB3\u7FA4\u5C9B","common":"\u74E6\u5229\u65AF\u548C\u5BCC\u56FE\u7EB3\u7FA4\u5C9B"}},"latlng":[-13.3,-176.2],"landlocked":false,"borders":[],"area":142,"flag":"\uD83C\uDDFC\uD83C\uDDEB","demonyms":{"eng":{"f":"Wallis and Futuna Islander","m":"Wallis and Futuna Islander"},"fra":{"f":"","m":""}}},{"name":{"common":"Samoa","official":"Independent State of Samoa","native":{"eng":{"official":"Independent State of Samoa","common":"Samoa"},"smo":{"official":"Malo Sa\u02BBoloto Tuto\u02BBatasi o S\u0101moa","common":"S\u0101moa"}}},"tld":[".ws"],"cca2":"WS","ccn3":"882","cca3":"WSM","cioc":"SAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"WST":{"name":"Samoan t\u0101l\u0101","symbol":"T"}},"idd":{"root":"+6","suffixes":["85"]},"capital":["Apia"],"altSpellings":["WS","Independent State of Samoa","Malo Sa\u02BBoloto Tuto\u02BBatasi o S\u0101moa"],"region":"Oceania","subregion":"Polynesia","languages":{"eng":"English","smo":"Samoan"},"translations":{"ara":{"official":"\u062F\u0648\u0644\u0629 \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0645\u0633\u062A\u0642\u0644\u0629","common":"\u0633\u0627\u0645\u0648\u0627"},"ces":{"official":"Nez\xe1visl\xfd st\xe1t Samoa","common":"Samoa"},"deu":{"official":"Unabh\xe4ngige Staat Samoa","common":"Samoa"},"est":{"official":"Samoa Iseseisvusriik","common":"Samoa"},"fin":{"official":"Samoan itsen\xe4inen valtio","common":"Samoa"},"fra":{"official":"Samoa","common":"Samoa"},"hrv":{"official":"Nezavisna Dr\u017Eava Samoa","common":"Samoa"},"hun":{"official":"Szamoai F\xfcggetlen \xc1llam","common":"Szamoa"},"ita":{"official":"Stato indipendente di Samoa","common":"Samoa"},"jpn":{"official":"\u30B5\u30E2\u30A2\u72EC\u7ACB\u56FD","common":"\u30B5\u30E2\u30A2"},"kor":{"official":"\uC0AC\uBAA8\uC544 \uB3C5\uB9BD\uAD6D","common":"\uC0AC\uBAA8\uC544"},"nld":{"official":"Onafhankelijke Staat Samoa","common":"Samoa"},"per":{"official":"\u0627\u06CC\u0627\u0644\u062A \u0645\u0633\u062A\u0642\u0644 \u0633\u0627\u0645\u0648\u0622","common":"\u0633\u0627\u0645\u0648\u0622"},"pol":{"official":"Niezale\u017Cne Pa\u0144stwo Samoa","common":"Samoa"},"por":{"official":"Estado Independente de Samoa","common":"Samoa"},"rus":{"official":"\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0435 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u0421\u0430\u043C\u043E\u0430","common":"\u0421\u0430\u043C\u043E\u0430"},"slk":{"official":"Nez\xe1visl\xfd \u0161t\xe1tSamoa","common":"Samoa"},"spa":{"official":"Estado Independiente de Samoa","common":"Samoa"},"srp":{"official":"Nezavisna Dr\u017Eava Samoa","common":"Samoa"},"swe":{"official":"Sj\xe4lvst\xe4ndiga staten Samoa","common":"Samoa"},"tur":{"official":"Ba\u011F\u0131ms\u0131z Samoa Devleti","common":"Ba\u011F\u0131ms\u0131z Samoa Devleti"},"urd":{"official":"\u0622\u0632\u0627\u062F \u0633\u0644\u0637\u0646\u062A\u0650 \u0633\u0627\u0645\u0648\u0627","common":"\u0633\u0627\u0645\u0648\u0648\u0627"},"zho":{"official":"\u8428\u6469\u4E9A\u72EC\u7ACB\u56FD","common":"\u8428\u6469\u4E9A"}},"latlng":[-13.58333333,-172.33333333],"landlocked":false,"borders":[],"area":2842,"flag":"\uD83C\uDDFC\uD83C\uDDF8","demonyms":{"eng":{"f":"Samoan","m":"Samoan"},"fra":{"f":"Samoane","m":"Samoan"}}},{"name":{"common":"Yemen","official":"Republic of Yemen","native":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u064A\u0645\u0646\u064A\u0629","common":"\u0627\u0644\u064A\u0645\u0646"}}},"tld":[".ye"],"cca2":"YE","ccn3":"887","cca3":"YEM","cioc":"YEM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"Asia and the Pacific Group","currencies":{"YER":{"name":"Yemeni rial","symbol":"\uFDFC"}},"idd":{"root":"+9","suffixes":["67"]},"capital":["Sana\'a"],"altSpellings":["YE","Yemeni Republic","al-Jumh\u016Briyyah al-Yamaniyyah"],"region":"Asia","subregion":"Western Asia","languages":{"ara":"Arabic"},"translations":{"ara":{"official":"\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u064A\u0645\u0646\u064A\u0629","common":"\u0627\u0644\u064A\u0645\u0646"},"ces":{"official":"Jemensk\xe1 republika","common":"Jemen"},"deu":{"official":"Republik Jemen","common":"Jemen"},"est":{"official":"Jeemeni Vabariik","common":"Jeemen"},"fin":{"official":"Jemenin tasavalta","common":"Jemen"},"fra":{"official":"R\xe9publique du Y\xe9men","common":"Y\xe9men"},"hrv":{"official":"Republika Jemen","common":"Jemen"},"hun":{"official":"Jemeni K\xf6zt\xe1rsas\xe1g","common":"Jemen"},"ita":{"official":"Repubblica dello Yemen","common":"Yemen"},"jpn":{"official":"\u30A4\u30A8\u30E1\u30F3\u5171\u548C\u56FD","common":"\u30A4\u30A8\u30E1\u30F3"},"kor":{"official":"\uC608\uBA58 \uACF5\uD654\uAD6D","common":"\uC608\uBA58"},"nld":{"official":"Republiek Jemen","common":"Jemen"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u06CC\u0645\u0646","common":"\u06CC\u0645\u0646"},"pol":{"official":"Republika Jeme\u0144ska","common":"Jemen"},"por":{"official":"Rep\xfablica do I\xeamen","common":"I\xe9men"},"rus":{"official":"\u0419\u0435\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u0419\u0435\u043C\u0435\u043D"},"slk":{"official":"Jemensk\xe1 republika","common":"Jemen"},"spa":{"official":"Rep\xfablica de Yemen","common":"Yemen"},"srp":{"official":"Republika Jemen","common":"Jemen"},"swe":{"official":"Republiken Jemen","common":"Jemen"},"tur":{"official":"Yemen Cumhuriyeti","common":"Yemen"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u06CC\u0645\u0646","common":"\u06CC\u0645\u0646"},"zho":{"official":"\u4E5F\u95E8\u5171\u548C\u56FD","common":"\u4E5F\u95E8"}},"latlng":[15,48],"landlocked":false,"borders":["OMN","SAU"],"area":527968,"flag":"\uD83C\uDDFE\uD83C\uDDEA","demonyms":{"eng":{"f":"Yemeni","m":"Yemeni"},"fra":{"f":"Y\xe9m\xe9nite","m":"Y\xe9m\xe9nite"}}},{"name":{"common":"South Africa","official":"Republic of South Africa","native":{"afr":{"official":"Republiek van Suid-Afrika","common":"South Africa"},"eng":{"official":"Republic of South Africa","common":"South Africa"},"nbl":{"official":"IRiphabliki yeSewula Afrika","common":"Sewula Afrika"},"nso":{"official":"Rephaboliki ya Afrika-Borwa ","common":"Afrika-Borwa"},"sot":{"official":"Rephaboliki ya Afrika Borwa","common":"Afrika Borwa"},"ssw":{"official":"IRiphabhulikhi yeNingizimu Afrika","common":"Ningizimu Afrika"},"tsn":{"official":"Rephaboliki ya Aforika Borwa","common":"Aforika Borwa"},"tso":{"official":"Riphabliki ra Afrika Dzonga","common":"Afrika Dzonga"},"ven":{"official":"Riphabu\u1E3Diki ya Afurika Tshipembe","common":"Afurika Tshipembe"},"xho":{"official":"IRiphabliki yaseMzantsi Afrika","common":"Mzantsi Afrika"},"zul":{"official":"IRiphabliki yaseNingizimu Afrika","common":"Ningizimu Afrika"}}},"tld":[".za"],"cca2":"ZA","ccn3":"710","cca3":"ZAF","cioc":"RSA","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"ZAR":{"name":"South African rand","symbol":"R"}},"idd":{"root":"+2","suffixes":["7"]},"capital":["Pretoria","Bloemfontein","Cape Town"],"altSpellings":["ZA","RSA","Suid-Afrika","Republic of South Africa"],"region":"Africa","subregion":"Southern Africa","languages":{"afr":"Afrikaans","eng":"English","nbl":"Southern Ndebele","nso":"Northern Sotho","sot":"Southern Sotho","ssw":"Swazi","tsn":"Tswana","tso":"Tsonga","ven":"Venda","xho":"Xhosa","zul":"Zulu"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u062C\u0646\u0648\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627","common":"\u062C\u0646\u0648\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627"},"ces":{"official":"Jihoafrick\xe1 republika","common":"Jihoafrick\xe1 republika"},"deu":{"official":"Republik S\xfcdafrika","common":"S\xfcdafrika"},"est":{"official":"L\xf5una-Aafrika Vabariik","common":"L\xf5una-Aafrika Vabariik"},"fin":{"official":"Etel\xe4-Afrikan tasavalta","common":"Etel\xe4-Afrikka"},"fra":{"official":"R\xe9publique d\'Afrique du Sud","common":"Afrique du Sud"},"hrv":{"official":"Ju\u017Enoafri\u010Dka Republika","common":"Ju\u017Enoafri\u010Dka Republika"},"hun":{"official":"D\xe9l-afrikai K\xf6zt\xe1rsas\xe1g","common":"D\xe9l-afrikai K\xf6zt\xe1rsas\xe1g"},"ita":{"official":"Repubblica del Sud Africa","common":"Sud Africa"},"jpn":{"official":"\u5357\u30A2\u30D5\u30EA\u30AB\u5171\u548C\u56FD","common":"\u5357\u30A2\u30D5\u30EA\u30AB"},"kor":{"official":"\uB0A8\uC544\uD504\uB9AC\uCE74 \uACF5\uD654\uAD6D","common":"\uB0A8\uC544\uD504\uB9AC\uCE74"},"nld":{"official":"Republiek Zuid-Afrika","common":"Zuid-Afrika"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0622\u0641\u0631\u06CC\u0642\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC","common":"\u0622\u0641\u0631\u06CC\u0642\u0627\u06CC \u062C\u0646\u0648\u0628\u06CC"},"pol":{"official":"Republika Po\u0142udniowej Afryki","common":"Po\u0142udniowa Afryka"},"por":{"official":"Rep\xfablica da \xc1frica do Sul","common":"\xc1frica do Sul"},"rus":{"official":"\u042E\u0436\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430","common":"\u042E\u0436\u043D\u043E-\u0410\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430"},"slk":{"official":"Juhoafrick\xe1 republika","common":"Juhoafrick\xe1 republika"},"spa":{"official":"Rep\xfablica de Sud\xe1frica","common":"Sud\xe1frica"},"srp":{"official":"Republika Ju\u017Ena Afrika","common":"Ju\u017Enoafri\u010Dka Republika"},"swe":{"official":"Republiken Sydafrika","common":"Sydafrika"},"tur":{"official":"G\xfcney Afrika Cumhuriyeti","common":"G\xfcney Afrika"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u062C\u0646\u0648\u0628\u06CC \u0627\u0641\u0631\u06CC\u0642\u0627","common":"\u062C\u0646\u0648\u0628\u06CC \u0627\u0641\u0631\u06CC\u0642\u0627"},"zho":{"official":"\u5357\u975E\u5171\u548C\u56FD","common":"\u5357\u975E"}},"latlng":[-29,24],"landlocked":false,"borders":["BWA","LSO","MOZ","NAM","SWZ","ZWE"],"area":1221037,"flag":"\uD83C\uDDFF\uD83C\uDDE6","demonyms":{"eng":{"f":"South African","m":"South African"},"fra":{"f":"Sud-africaine","m":"Sud-africain"}}},{"name":{"common":"Zambia","official":"Republic of Zambia","native":{"eng":{"official":"Republic of Zambia","common":"Zambia"}}},"tld":[".zm"],"cca2":"ZM","ccn3":"894","cca3":"ZMB","cioc":"ZAM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"ZMW":{"name":"Zambian kwacha","symbol":"ZK"}},"idd":{"root":"+2","suffixes":["60"]},"capital":["Lusaka"],"altSpellings":["ZM","Republic of Zambia"],"region":"Africa","subregion":"Eastern Africa","languages":{"eng":"English"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0632\u0627\u0645\u0628\u064A\u0627","common":"\u0632\u0627\u0645\u0628\u064A\u0627"},"ces":{"official":"Zambijsk\xe1 republika","common":"Zambie"},"deu":{"official":"Republik Sambia","common":"Sambia"},"est":{"official":"Sambia Vabariik","common":"Sambia"},"fin":{"official":"Sambian tasavalta","common":"Sambia"},"fra":{"official":"R\xe9publique de Zambie","common":"Zambie"},"hrv":{"official":"Republika Zambija","common":"Zambija"},"hun":{"official":"Zambiai K\xf6zt\xe1rsas\xe1g","common":"Zambia"},"ita":{"official":"Repubblica di Zambia","common":"Zambia"},"jpn":{"official":"\u30B6\u30F3\u30D3\u30A2\u5171\u548C\u56FD","common":"\u30B6\u30F3\u30D3\u30A2"},"kor":{"official":"\uC7A0\uBE44\uC544 \uACF5\uD654\uAD6D","common":"\uC7A0\uBE44\uC544"},"nld":{"official":"Republiek Zambia","common":"Zambia"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0632\u0627\u0645\u0628\u06CC\u0627","common":"\u0632\u0627\u0645\u0628\u06CC\u0627"},"pol":{"official":"Republika Zambii","common":"Zambia"},"por":{"official":"Rep\xfablica da Z\xe2mbia","common":"Z\xe2mbia"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0417\u0430\u043C\u0431\u0438\u044F","common":"\u0417\u0430\u043C\u0431\u0438\u044F"},"slk":{"official":"Zambijsk\xe1 republika","common":"Zambia"},"spa":{"official":"Rep\xfablica de Zambia","common":"Zambia"},"srp":{"official":"Republika Zambija","common":"Zambija"},"swe":{"official":"Republiken Zambia","common":"Zambia"},"tur":{"official":"Zambiya Cumhuriyeti","common":"Zambiya"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0632\u06CC\u0645\u0628\u06CC\u0627","common":"\u0632\u06CC\u0645\u0628\u06CC\u0627"},"zho":{"official":"\u8D5E\u6BD4\u4E9A\u5171\u548C\u56FD","common":"\u8D5E\u6BD4\u4E9A"}},"latlng":[-15,30],"landlocked":true,"borders":["AGO","BWA","COD","MWI","MOZ","NAM","TZA","ZWE"],"area":752612,"flag":"\uD83C\uDDFF\uD83C\uDDF2","demonyms":{"eng":{"f":"Zambian","m":"Zambian"},"fra":{"f":"Zambienne","m":"Zambien"}}},{"name":{"common":"Zimbabwe","official":"Republic of Zimbabwe","native":{"bwg":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"eng":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"kck":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"khi":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"ndc":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"nde":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"nya":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"sna":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"sot":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"toi":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"tsn":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"tso":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"ven":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"xho":{"official":"Republic of Zimbabwe","common":"Zimbabwe"},"zib":{"official":"Republic of Zimbabwe","common":"Zimbabwe"}}},"tld":[".zw"],"cca2":"ZW","ccn3":"716","cca3":"ZWE","cioc":"ZIM","independent":true,"status":"officially-assigned","unMember":true,"unRegionalGroup":"African Group","currencies":{"BWP":{"name":"Botswana pula","symbol":"P"},"CNY":{"name":"Chinese yuan","symbol":"\xa5"},"EUR":{"name":"Euro","symbol":"\u20AC"},"GBP":{"name":"British pound","symbol":"\xa3"},"INR":{"name":"Indian rupee","symbol":"\u20B9"},"JPY":{"name":"Japanese yen","symbol":"\xa5"},"USD":{"name":"United States dollar","symbol":"$"},"ZAR":{"name":"South African rand","symbol":"Rs"},"ZWB":{"name":"Zimbabwean bonds","symbol":"$"}},"idd":{"root":"+2","suffixes":["63"]},"capital":["Harare"],"altSpellings":["ZW","Republic of Zimbabwe"],"region":"Africa","subregion":"Eastern Africa","languages":{"bwg":"Chibarwe","eng":"English","kck":"Kalanga","khi":"Khoisan","ndc":"Ndau","nde":"Northern Ndebele","nya":"Chewa","sna":"Shona","sot":"Sotho","toi":"Tonga","tsn":"Tswana","tso":"Tsonga","ven":"Venda","xho":"Xhosa","zib":"Zimbabwean Sign Language"},"translations":{"ara":{"official":"\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0632\u064A\u0645\u0628\u0627\u0628\u0648\u064A","common":"\u0632\u064A\u0645\u0628\u0627\u0628\u0648\u064A"},"ces":{"official":"Zimbabwsk\xe1 republika","common":"Zimbabwe"},"deu":{"official":"Republik Simbabwe","common":"Simbabwe"},"est":{"official":"Zimbabwe Vabariik","common":"Zimbabwe"},"fin":{"official":"Zimbabwen tasavalta","common":"Zimbabwe"},"fra":{"official":"R\xe9publique du Zimbabwe","common":"Zimbabwe"},"hrv":{"official":"Republika Zimbabve","common":"Zimbabve"},"hun":{"official":"Zimbabwei K\xf6zt\xe1rsas\xe1g","common":"Zimbabwe"},"ita":{"official":"Repubblica dello Zimbabwe","common":"Zimbabwe"},"jpn":{"official":"\u30B8\u30F3\u30D0\u30D6\u30A8\u5171\u548C\u56FD","common":"\u30B8\u30F3\u30D0\u30D6\u30A8"},"kor":{"official":"\uC9D0\uBC14\uBE0C\uC6E8 \uACF5\uD654\uAD6D","common":"\uC9D0\uBC14\uBE0C\uC6E8"},"nld":{"official":"Republiek Zimbabwe","common":"Zimbabwe"},"per":{"official":"\u062C\u0645\u0647\u0648\u0631\u06CC \u0632\u06CC\u0645\u0628\u0627\u0628\u0648\u0647","common":"\u0632\u06CC\u0645\u0628\u0627\u0628\u0648\u0647"},"pol":{"official":"Republika Zimbabwe","common":"Zimbabwe"},"por":{"official":"Rep\xfablica do Zimbabwe","common":"Zimbabwe"},"rus":{"official":"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0417\u0438\u043C\u0431\u0430\u0431\u0432\u0435","common":"\u0417\u0438\u043C\u0431\u0430\u0431\u0432\u0435"},"slk":{"official":"Zimbabwianska republika","common":"Zimbabwe"},"spa":{"official":"Rep\xfablica de Zimbabue","common":"Zimbabue"},"srp":{"official":"Republika Zimbabve","common":"Zimbabve"},"swe":{"official":"Republiken Zimbabwe","common":"Zimbabwe"},"tur":{"official":"Zimbabve Cumhuriyeti","common":"Zimbabve"},"urd":{"official":"\u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u0632\u0645\u0628\u0627\u0628\u0648\u06D2","common":"\u0632\u0645\u0628\u0627\u0628\u0648\u06D2"},"zho":{"official":"\u6D25\u5DF4\u5E03\u97E6\u5171\u548C\u56FD","common":"\u6D25\u5DF4\u5E03\u97E6"}},"latlng":[-20,30],"landlocked":true,"borders":["BWA","MOZ","ZAF","ZMB"],"area":390757,"flag":"\uD83C\uDDFF\uD83C\uDDFC","demonyms":{"eng":{"f":"Zimbabwean","m":"Zimbabwean"},"fra":{"f":"Zimbabw\xe9enne","m":"Zimbabw\xe9en"}}}]');

},{}],"fn8Fk":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aS6X9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>utils);
parcelHelpers.export(exports, "getAllCountries", ()=>getAllCountries);
parcelHelpers.export(exports, "getAllTimezones", ()=>getAllTimezones);
parcelHelpers.export(exports, "getCountriesForTimezone", ()=>getCountriesForTimezone);
parcelHelpers.export(exports, "getCountry", ()=>getCountry);
parcelHelpers.export(exports, "getCountryForTimezone", ()=>getCountryForTimezone);
parcelHelpers.export(exports, "getTimezone", ()=>getTimezone);
parcelHelpers.export(exports, "getTimezonesForCountry", ()=>getTimezonesForCountry);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var n = 0, F = function() {};
            return {
                s: F,
                n: function() {
                    return n >= r.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: r[n++]
                    };
                },
                e: function(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, u = !1;
    return {
        s: function() {
            t = t.call(r);
        },
        n: function() {
            var r = t.next();
            return a = r.done, r;
        },
        e: function(r) {
            u = !0, o = r;
        },
        f: function() {
            try {
                a || null == t.return || t.return();
            } finally{
                if (u) throw o;
            }
        }
    };
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
var countries$1 = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "\xc5land Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barth\xe9lemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos Islands",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Cura\xe7ao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "R\xe9union",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "T\xfcrkiye",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "Virgin Islands (UK)",
    VI: "Virgin Islands (US)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
};
var timezones$1 = {
    "Africa/Abidjan": {
        u: 0,
        c: [
            "CI",
            "BF",
            "GH",
            "GM",
            "GN",
            "IS",
            "ML",
            "MR",
            "SH",
            "SL",
            "SN",
            "TG"
        ]
    },
    "Africa/Accra": {
        a: "Africa/Abidjan",
        c: [
            "GH"
        ],
        r: 1
    },
    "Africa/Addis_Ababa": {
        a: "Africa/Nairobi",
        c: [
            "ET"
        ],
        r: 1
    },
    "Africa/Algiers": {
        u: 60,
        c: [
            "DZ"
        ]
    },
    "Africa/Asmara": {
        a: "Africa/Nairobi",
        c: [
            "ER"
        ],
        r: 1
    },
    "Africa/Asmera": {
        a: "Africa/Nairobi",
        c: [
            "ER"
        ],
        r: 1
    },
    "Africa/Bamako": {
        a: "Africa/Abidjan",
        c: [
            "ML"
        ],
        r: 1
    },
    "Africa/Bangui": {
        a: "Africa/Lagos",
        c: [
            "CF"
        ],
        r: 1
    },
    "Africa/Banjul": {
        a: "Africa/Abidjan",
        c: [
            "GM"
        ],
        r: 1
    },
    "Africa/Bissau": {
        u: 0,
        c: [
            "GW"
        ]
    },
    "Africa/Blantyre": {
        a: "Africa/Maputo",
        c: [
            "MW"
        ],
        r: 1
    },
    "Africa/Brazzaville": {
        a: "Africa/Lagos",
        c: [
            "CG"
        ],
        r: 1
    },
    "Africa/Bujumbura": {
        a: "Africa/Maputo",
        c: [
            "BI"
        ],
        r: 1
    },
    "Africa/Cairo": {
        u: 120,
        d: 180,
        c: [
            "EG"
        ]
    },
    "Africa/Casablanca": {
        u: 60,
        d: 0,
        c: [
            "MA"
        ]
    },
    "Africa/Ceuta": {
        u: 60,
        d: 120,
        c: [
            "ES"
        ]
    },
    "Africa/Conakry": {
        a: "Africa/Abidjan",
        c: [
            "GN"
        ],
        r: 1
    },
    "Africa/Dakar": {
        a: "Africa/Abidjan",
        c: [
            "SN"
        ],
        r: 1
    },
    "Africa/Dar_es_Salaam": {
        a: "Africa/Nairobi",
        c: [
            "TZ"
        ],
        r: 1
    },
    "Africa/Djibouti": {
        a: "Africa/Nairobi",
        c: [
            "DJ"
        ],
        r: 1
    },
    "Africa/Douala": {
        a: "Africa/Lagos",
        c: [
            "CM"
        ],
        r: 1
    },
    "Africa/El_Aaiun": {
        u: 60,
        d: 0,
        c: [
            "EH"
        ]
    },
    "Africa/Freetown": {
        a: "Africa/Abidjan",
        c: [
            "SL"
        ],
        r: 1
    },
    "Africa/Gaborone": {
        a: "Africa/Maputo",
        c: [
            "BW"
        ],
        r: 1
    },
    "Africa/Harare": {
        a: "Africa/Maputo",
        c: [
            "ZW"
        ],
        r: 1
    },
    "Africa/Johannesburg": {
        u: 120,
        c: [
            "ZA",
            "LS",
            "SZ"
        ]
    },
    "Africa/Juba": {
        u: 120,
        c: [
            "SS"
        ]
    },
    "Africa/Kampala": {
        a: "Africa/Nairobi",
        c: [
            "UG"
        ],
        r: 1
    },
    "Africa/Khartoum": {
        u: 120,
        c: [
            "SD"
        ]
    },
    "Africa/Kigali": {
        a: "Africa/Maputo",
        c: [
            "RW"
        ],
        r: 1
    },
    "Africa/Kinshasa": {
        a: "Africa/Lagos",
        c: [
            "CD"
        ],
        r: 1
    },
    "Africa/Lagos": {
        u: 60,
        c: [
            "NG",
            "AO",
            "BJ",
            "CD",
            "CF",
            "CG",
            "CM",
            "GA",
            "GQ",
            "NE"
        ]
    },
    "Africa/Libreville": {
        a: "Africa/Lagos",
        c: [
            "GA"
        ],
        r: 1
    },
    "Africa/Lome": {
        a: "Africa/Abidjan",
        c: [
            "TG"
        ],
        r: 1
    },
    "Africa/Luanda": {
        a: "Africa/Lagos",
        c: [
            "AO"
        ],
        r: 1
    },
    "Africa/Lubumbashi": {
        a: "Africa/Maputo",
        c: [
            "CD"
        ],
        r: 1
    },
    "Africa/Lusaka": {
        a: "Africa/Maputo",
        c: [
            "ZM"
        ],
        r: 1
    },
    "Africa/Malabo": {
        a: "Africa/Lagos",
        c: [
            "GQ"
        ],
        r: 1
    },
    "Africa/Maputo": {
        u: 120,
        c: [
            "MZ",
            "BI",
            "BW",
            "CD",
            "MW",
            "RW",
            "ZM",
            "ZW"
        ]
    },
    "Africa/Maseru": {
        a: "Africa/Johannesburg",
        c: [
            "LS"
        ],
        r: 1
    },
    "Africa/Mbabane": {
        a: "Africa/Johannesburg",
        c: [
            "SZ"
        ],
        r: 1
    },
    "Africa/Mogadishu": {
        a: "Africa/Nairobi",
        c: [
            "SO"
        ],
        r: 1
    },
    "Africa/Monrovia": {
        u: 0,
        c: [
            "LR"
        ]
    },
    "Africa/Nairobi": {
        u: 180,
        c: [
            "KE",
            "DJ",
            "ER",
            "ET",
            "KM",
            "MG",
            "SO",
            "TZ",
            "UG",
            "YT"
        ]
    },
    "Africa/Ndjamena": {
        u: 60,
        c: [
            "TD"
        ]
    },
    "Africa/Niamey": {
        a: "Africa/Lagos",
        c: [
            "NE"
        ],
        r: 1
    },
    "Africa/Nouakchott": {
        a: "Africa/Abidjan",
        c: [
            "MR"
        ],
        r: 1
    },
    "Africa/Ouagadougou": {
        a: "Africa/Abidjan",
        c: [
            "BF"
        ],
        r: 1
    },
    "Africa/Porto-Novo": {
        a: "Africa/Lagos",
        c: [
            "BJ"
        ],
        r: 1
    },
    "Africa/Sao_Tome": {
        u: 0,
        c: [
            "ST"
        ]
    },
    "Africa/Timbuktu": {
        a: "Africa/Abidjan",
        c: [
            "ML"
        ],
        r: 1
    },
    "Africa/Tripoli": {
        u: 120,
        c: [
            "LY"
        ]
    },
    "Africa/Tunis": {
        u: 60,
        c: [
            "TN"
        ]
    },
    "Africa/Windhoek": {
        u: 120,
        c: [
            "NA"
        ]
    },
    "America/Adak": {
        u: -600,
        d: -540,
        c: [
            "US"
        ]
    },
    "America/Anchorage": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Anguilla": {
        a: "America/Puerto_Rico",
        c: [
            "AI"
        ],
        r: 1
    },
    "America/Antigua": {
        a: "America/Puerto_Rico",
        c: [
            "AG"
        ],
        r: 1
    },
    "America/Araguaina": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Argentina/Buenos_Aires": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Catamarca": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/ComodRivadavia": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Argentina/Cordoba": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Jujuy": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/La_Rioja": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Mendoza": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Rio_Gallegos": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Salta": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/San_Juan": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/San_Luis": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Tucuman": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Ushuaia": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Aruba": {
        a: "America/Puerto_Rico",
        c: [
            "AW"
        ],
        r: 1
    },
    "America/Asuncion": {
        u: -180,
        c: [
            "PY"
        ]
    },
    "America/Atikokan": {
        a: "America/Panama",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Atka": {
        a: "America/Adak",
        r: 1
    },
    "America/Bahia": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Bahia_Banderas": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Barbados": {
        u: -240,
        c: [
            "BB"
        ]
    },
    "America/Belem": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Belize": {
        u: -360,
        c: [
            "BZ"
        ]
    },
    "America/Blanc-Sablon": {
        a: "America/Puerto_Rico",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Boa_Vista": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Bogota": {
        u: -300,
        c: [
            "CO"
        ]
    },
    "America/Boise": {
        u: -420,
        d: -360,
        c: [
            "US"
        ]
    },
    "America/Buenos_Aires": {
        a: "America/Argentina/Buenos_Aires",
        r: 1
    },
    "America/Cambridge_Bay": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Campo_Grande": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Cancun": {
        u: -300,
        c: [
            "MX"
        ]
    },
    "America/Caracas": {
        u: -240,
        c: [
            "VE"
        ]
    },
    "America/Catamarca": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Cayenne": {
        u: -180,
        c: [
            "GF"
        ]
    },
    "America/Cayman": {
        a: "America/Panama",
        c: [
            "KY"
        ],
        r: 1
    },
    "America/Chicago": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Chihuahua": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Ciudad_Juarez": {
        u: -420,
        d: -360,
        c: [
            "MX"
        ]
    },
    "America/Coral_Harbour": {
        a: "America/Panama",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Cordoba": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Costa_Rica": {
        u: -360,
        c: [
            "CR"
        ]
    },
    "America/Coyhaique": {
        u: -180,
        c: [
            "CL"
        ]
    },
    "America/Creston": {
        a: "America/Phoenix",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Cuiaba": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Curacao": {
        a: "America/Puerto_Rico",
        c: [
            "CW"
        ],
        r: 1
    },
    "America/Danmarkshavn": {
        u: 0,
        c: [
            "GL"
        ]
    },
    "America/Dawson": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Dawson_Creek": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Denver": {
        u: -420,
        d: -360,
        c: [
            "US"
        ]
    },
    "America/Detroit": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Dominica": {
        a: "America/Puerto_Rico",
        c: [
            "DM"
        ],
        r: 1
    },
    "America/Edmonton": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Eirunepe": {
        u: -300,
        c: [
            "BR"
        ]
    },
    "America/El_Salvador": {
        u: -360,
        c: [
            "SV"
        ]
    },
    "America/Ensenada": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Fort_Nelson": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Fort_Wayne": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Fortaleza": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Glace_Bay": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Godthab": {
        a: "America/Nuuk",
        r: 1
    },
    "America/Goose_Bay": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Grand_Turk": {
        u: -300,
        d: -240,
        c: [
            "TC"
        ]
    },
    "America/Grenada": {
        a: "America/Puerto_Rico",
        c: [
            "GD"
        ],
        r: 1
    },
    "America/Guadeloupe": {
        a: "America/Puerto_Rico",
        c: [
            "GP"
        ],
        r: 1
    },
    "America/Guatemala": {
        u: -360,
        c: [
            "GT"
        ]
    },
    "America/Guayaquil": {
        u: -300,
        c: [
            "EC"
        ]
    },
    "America/Guyana": {
        u: -240,
        c: [
            "GY"
        ]
    },
    "America/Halifax": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Havana": {
        u: -300,
        d: -240,
        c: [
            "CU"
        ]
    },
    "America/Hermosillo": {
        u: -420,
        c: [
            "MX"
        ]
    },
    "America/Indiana/Indianapolis": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Knox": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Indiana/Marengo": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Petersburg": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Tell_City": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Indiana/Vevay": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Vincennes": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Winamac": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indianapolis": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Inuvik": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Iqaluit": {
        u: -300,
        d: -240,
        c: [
            "CA"
        ]
    },
    "America/Jamaica": {
        u: -300,
        c: [
            "JM"
        ]
    },
    "America/Jujuy": {
        a: "America/Argentina/Jujuy",
        r: 1
    },
    "America/Juneau": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Kentucky/Louisville": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Kentucky/Monticello": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Knox_IN": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "America/Kralendijk": {
        a: "America/Puerto_Rico",
        c: [
            "BQ"
        ],
        r: 1
    },
    "America/La_Paz": {
        u: -240,
        c: [
            "BO"
        ]
    },
    "America/Lima": {
        u: -300,
        c: [
            "PE"
        ]
    },
    "America/Los_Angeles": {
        u: -480,
        d: -420,
        c: [
            "US"
        ]
    },
    "America/Louisville": {
        a: "America/Kentucky/Louisville",
        r: 1
    },
    "America/Lower_Princes": {
        a: "America/Puerto_Rico",
        c: [
            "SX"
        ],
        r: 1
    },
    "America/Maceio": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Managua": {
        u: -360,
        c: [
            "NI"
        ]
    },
    "America/Manaus": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Marigot": {
        a: "America/Puerto_Rico",
        c: [
            "MF"
        ],
        r: 1
    },
    "America/Martinique": {
        u: -240,
        c: [
            "MQ"
        ]
    },
    "America/Matamoros": {
        u: -360,
        d: -300,
        c: [
            "MX"
        ]
    },
    "America/Mazatlan": {
        u: -420,
        c: [
            "MX"
        ]
    },
    "America/Mendoza": {
        a: "America/Argentina/Mendoza",
        r: 1
    },
    "America/Menominee": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Merida": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Metlakatla": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Mexico_City": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Miquelon": {
        u: -180,
        d: -120,
        c: [
            "PM"
        ]
    },
    "America/Moncton": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Monterrey": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Montevideo": {
        u: -180,
        c: [
            "UY"
        ]
    },
    "America/Montreal": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Montserrat": {
        a: "America/Puerto_Rico",
        c: [
            "MS"
        ],
        r: 1
    },
    "America/Nassau": {
        a: "America/Toronto",
        c: [
            "BS"
        ],
        r: 1
    },
    "America/New_York": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Nipigon": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Nome": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Noronha": {
        u: -120,
        c: [
            "BR"
        ]
    },
    "America/North_Dakota/Beulah": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/North_Dakota/Center": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/North_Dakota/New_Salem": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Nuuk": {
        u: -120,
        d: -60,
        c: [
            "GL"
        ]
    },
    "America/Ojinaga": {
        u: -360,
        d: -300,
        c: [
            "MX"
        ]
    },
    "America/Panama": {
        u: -300,
        c: [
            "PA",
            "CA",
            "KY"
        ]
    },
    "America/Pangnirtung": {
        a: "America/Iqaluit",
        r: 1
    },
    "America/Paramaribo": {
        u: -180,
        c: [
            "SR"
        ]
    },
    "America/Phoenix": {
        u: -420,
        c: [
            "US",
            "CA"
        ]
    },
    "America/Port-au-Prince": {
        u: -300,
        d: -240,
        c: [
            "HT"
        ]
    },
    "America/Port_of_Spain": {
        a: "America/Puerto_Rico",
        c: [
            "TT"
        ],
        r: 1
    },
    "America/Porto_Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "America/Porto_Velho": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Puerto_Rico": {
        u: -240,
        c: [
            "PR",
            "AG",
            "CA",
            "AI",
            "AW",
            "BL",
            "BQ",
            "CW",
            "DM",
            "GD",
            "GP",
            "KN",
            "LC",
            "MF",
            "MS",
            "SX",
            "TT",
            "VC",
            "VG",
            "VI"
        ]
    },
    "America/Punta_Arenas": {
        u: -180,
        c: [
            "CL"
        ]
    },
    "America/Rainy_River": {
        a: "America/Winnipeg",
        r: 1
    },
    "America/Rankin_Inlet": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Recife": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Regina": {
        u: -360,
        c: [
            "CA"
        ]
    },
    "America/Resolute": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Rio_Branco": {
        u: -300,
        c: [
            "BR"
        ]
    },
    "America/Rosario": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Santa_Isabel": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Santarem": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Santiago": {
        u: -240,
        d: -180,
        c: [
            "CL"
        ]
    },
    "America/Santo_Domingo": {
        u: -240,
        c: [
            "DO"
        ]
    },
    "America/Sao_Paulo": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Scoresbysund": {
        u: -120,
        d: -60,
        c: [
            "GL"
        ]
    },
    "America/Shiprock": {
        a: "America/Denver",
        r: 1
    },
    "America/Sitka": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/St_Barthelemy": {
        a: "America/Puerto_Rico",
        c: [
            "BL"
        ],
        r: 1
    },
    "America/St_Johns": {
        u: -210,
        d: -150,
        c: [
            "CA"
        ]
    },
    "America/St_Kitts": {
        a: "America/Puerto_Rico",
        c: [
            "KN"
        ],
        r: 1
    },
    "America/St_Lucia": {
        a: "America/Puerto_Rico",
        c: [
            "LC"
        ],
        r: 1
    },
    "America/St_Thomas": {
        a: "America/Puerto_Rico",
        c: [
            "VI"
        ],
        r: 1
    },
    "America/St_Vincent": {
        a: "America/Puerto_Rico",
        c: [
            "VC"
        ],
        r: 1
    },
    "America/Swift_Current": {
        u: -360,
        c: [
            "CA"
        ]
    },
    "America/Tegucigalpa": {
        u: -360,
        c: [
            "HN"
        ]
    },
    "America/Thule": {
        u: -240,
        d: -180,
        c: [
            "GL"
        ]
    },
    "America/Thunder_Bay": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Tijuana": {
        u: -480,
        d: -420,
        c: [
            "MX"
        ]
    },
    "America/Toronto": {
        u: -300,
        d: -240,
        c: [
            "CA",
            "BS"
        ]
    },
    "America/Tortola": {
        a: "America/Puerto_Rico",
        c: [
            "VG"
        ],
        r: 1
    },
    "America/Vancouver": {
        u: -480,
        d: -420,
        c: [
            "CA"
        ]
    },
    "America/Virgin": {
        a: "America/Puerto_Rico",
        c: [
            "VI"
        ],
        r: 1
    },
    "America/Whitehorse": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Winnipeg": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Yakutat": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Yellowknife": {
        a: "America/Edmonton",
        r: 1
    },
    "Antarctica/Casey": {
        u: 480,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Davis": {
        u: 420,
        c: [
            "AQ"
        ]
    },
    "Antarctica/DumontDUrville": {
        a: "Pacific/Port_Moresby",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Macquarie": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Antarctica/Mawson": {
        u: 300,
        c: [
            "AQ"
        ]
    },
    "Antarctica/McMurdo": {
        a: "Pacific/Auckland",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Palmer": {
        u: -180,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Rothera": {
        u: -180,
        c: [
            "AQ"
        ]
    },
    "Antarctica/South_Pole": {
        a: "Pacific/Auckland",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Syowa": {
        a: "Asia/Riyadh",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Troll": {
        u: 0,
        d: 120,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Vostok": {
        u: 300,
        c: [
            "AQ"
        ]
    },
    "Arctic/Longyearbyen": {
        a: "Europe/Berlin",
        c: [
            "SJ"
        ],
        r: 1
    },
    "Asia/Aden": {
        a: "Asia/Riyadh",
        c: [
            "YE"
        ],
        r: 1
    },
    "Asia/Almaty": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Amman": {
        u: 180,
        c: [
            "JO"
        ]
    },
    "Asia/Anadyr": {
        u: 720,
        c: [
            "RU"
        ]
    },
    "Asia/Aqtau": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Aqtobe": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Ashgabat": {
        u: 300,
        c: [
            "TM"
        ]
    },
    "Asia/Ashkhabad": {
        a: "Asia/Ashgabat",
        r: 1
    },
    "Asia/Atyrau": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Baghdad": {
        u: 180,
        c: [
            "IQ"
        ]
    },
    "Asia/Bahrain": {
        a: "Asia/Qatar",
        c: [
            "BH"
        ],
        r: 1
    },
    "Asia/Baku": {
        u: 240,
        c: [
            "AZ"
        ]
    },
    "Asia/Bangkok": {
        u: 420,
        c: [
            "TH",
            "CX",
            "KH",
            "LA",
            "VN"
        ]
    },
    "Asia/Barnaul": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Beirut": {
        u: 120,
        d: 180,
        c: [
            "LB"
        ]
    },
    "Asia/Bishkek": {
        u: 360,
        c: [
            "KG"
        ]
    },
    "Asia/Brunei": {
        a: "Asia/Kuching",
        c: [
            "BN"
        ],
        r: 1
    },
    "Asia/Calcutta": {
        a: "Asia/Kolkata",
        r: 1
    },
    "Asia/Chita": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Choibalsan": {
        a: "Asia/Ulaanbaatar",
        r: 1
    },
    "Asia/Chongqing": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Chungking": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Colombo": {
        u: 330,
        c: [
            "LK"
        ]
    },
    "Asia/Dacca": {
        a: "Asia/Dhaka",
        r: 1
    },
    "Asia/Damascus": {
        u: 180,
        c: [
            "SY"
        ]
    },
    "Asia/Dhaka": {
        u: 360,
        c: [
            "BD"
        ]
    },
    "Asia/Dili": {
        u: 540,
        c: [
            "TL"
        ]
    },
    "Asia/Dubai": {
        u: 240,
        c: [
            "AE",
            "OM",
            "RE",
            "SC",
            "TF"
        ]
    },
    "Asia/Dushanbe": {
        u: 300,
        c: [
            "TJ"
        ]
    },
    "Asia/Famagusta": {
        u: 120,
        d: 180,
        c: [
            "CY"
        ]
    },
    "Asia/Gaza": {
        u: 120,
        d: 180,
        c: [
            "PS"
        ]
    },
    "Asia/Harbin": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Hebron": {
        u: 120,
        d: 180,
        c: [
            "PS"
        ]
    },
    "Asia/Ho_Chi_Minh": {
        u: 420,
        c: [
            "VN"
        ]
    },
    "Asia/Hong_Kong": {
        u: 480,
        c: [
            "HK"
        ]
    },
    "Asia/Hovd": {
        u: 420,
        c: [
            "MN"
        ]
    },
    "Asia/Irkutsk": {
        u: 480,
        c: [
            "RU"
        ]
    },
    "Asia/Istanbul": {
        a: "Europe/Istanbul",
        r: 1
    },
    "Asia/Jakarta": {
        u: 420,
        c: [
            "ID"
        ]
    },
    "Asia/Jayapura": {
        u: 540,
        c: [
            "ID"
        ]
    },
    "Asia/Jerusalem": {
        u: 120,
        d: 180,
        c: [
            "IL"
        ]
    },
    "Asia/Kabul": {
        u: 270,
        c: [
            "AF"
        ]
    },
    "Asia/Kamchatka": {
        u: 720,
        c: [
            "RU"
        ]
    },
    "Asia/Karachi": {
        u: 300,
        c: [
            "PK"
        ]
    },
    "Asia/Kashgar": {
        a: "Asia/Urumqi",
        r: 1
    },
    "Asia/Kathmandu": {
        u: 345,
        c: [
            "NP"
        ]
    },
    "Asia/Katmandu": {
        a: "Asia/Kathmandu",
        r: 1
    },
    "Asia/Khandyga": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Kolkata": {
        u: 330,
        c: [
            "IN"
        ]
    },
    "Asia/Krasnoyarsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Kuala_Lumpur": {
        a: "Asia/Singapore",
        c: [
            "MY"
        ],
        r: 1
    },
    "Asia/Kuching": {
        u: 480,
        c: [
            "MY",
            "BN"
        ]
    },
    "Asia/Kuwait": {
        a: "Asia/Riyadh",
        c: [
            "KW"
        ],
        r: 1
    },
    "Asia/Macao": {
        a: "Asia/Macau",
        r: 1
    },
    "Asia/Macau": {
        u: 480,
        c: [
            "MO"
        ]
    },
    "Asia/Magadan": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Makassar": {
        u: 480,
        c: [
            "ID"
        ]
    },
    "Asia/Manila": {
        u: 480,
        c: [
            "PH"
        ]
    },
    "Asia/Muscat": {
        a: "Asia/Dubai",
        c: [
            "OM"
        ],
        r: 1
    },
    "Asia/Nicosia": {
        u: 120,
        d: 180,
        c: [
            "CY"
        ]
    },
    "Asia/Novokuznetsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Novosibirsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Omsk": {
        u: 360,
        c: [
            "RU"
        ]
    },
    "Asia/Oral": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Phnom_Penh": {
        a: "Asia/Bangkok",
        c: [
            "KH"
        ],
        r: 1
    },
    "Asia/Pontianak": {
        u: 420,
        c: [
            "ID"
        ]
    },
    "Asia/Pyongyang": {
        u: 540,
        c: [
            "KP"
        ]
    },
    "Asia/Qatar": {
        u: 180,
        c: [
            "QA",
            "BH"
        ]
    },
    "Asia/Qostanay": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Qyzylorda": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Rangoon": {
        a: "Asia/Yangon",
        c: [
            "MM"
        ],
        r: 1
    },
    "Asia/Riyadh": {
        u: 180,
        c: [
            "SA",
            "AQ",
            "KW",
            "YE"
        ]
    },
    "Asia/Saigon": {
        a: "Asia/Ho_Chi_Minh",
        r: 1
    },
    "Asia/Sakhalin": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Samarkand": {
        u: 300,
        c: [
            "UZ"
        ]
    },
    "Asia/Seoul": {
        u: 540,
        c: [
            "KR"
        ]
    },
    "Asia/Shanghai": {
        u: 480,
        c: [
            "CN"
        ]
    },
    "Asia/Singapore": {
        u: 480,
        c: [
            "SG",
            "AQ",
            "MY"
        ]
    },
    "Asia/Srednekolymsk": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Taipei": {
        u: 480,
        c: [
            "TW"
        ]
    },
    "Asia/Tashkent": {
        u: 300,
        c: [
            "UZ"
        ]
    },
    "Asia/Tbilisi": {
        u: 240,
        c: [
            "GE"
        ]
    },
    "Asia/Tehran": {
        u: 210,
        c: [
            "IR"
        ]
    },
    "Asia/Tel_Aviv": {
        a: "Asia/Jerusalem",
        r: 1
    },
    "Asia/Thimbu": {
        a: "Asia/Thimphu",
        r: 1
    },
    "Asia/Thimphu": {
        u: 360,
        c: [
            "BT"
        ]
    },
    "Asia/Tokyo": {
        u: 540,
        c: [
            "JP",
            "AU"
        ]
    },
    "Asia/Tomsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Ujung_Pandang": {
        a: "Asia/Makassar",
        r: 1
    },
    "Asia/Ulaanbaatar": {
        u: 480,
        c: [
            "MN"
        ]
    },
    "Asia/Ulan_Bator": {
        a: "Asia/Ulaanbaatar",
        r: 1
    },
    "Asia/Urumqi": {
        u: 360,
        c: [
            "CN"
        ]
    },
    "Asia/Ust-Nera": {
        u: 600,
        c: [
            "RU"
        ]
    },
    "Asia/Vientiane": {
        a: "Asia/Bangkok",
        c: [
            "LA"
        ],
        r: 1
    },
    "Asia/Vladivostok": {
        u: 600,
        c: [
            "RU"
        ]
    },
    "Asia/Yakutsk": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Yangon": {
        u: 390,
        c: [
            "MM",
            "CC"
        ]
    },
    "Asia/Yekaterinburg": {
        u: 300,
        c: [
            "RU"
        ]
    },
    "Asia/Yerevan": {
        u: 240,
        c: [
            "AM"
        ]
    },
    "Atlantic/Azores": {
        u: -60,
        d: 0,
        c: [
            "PT"
        ]
    },
    "Atlantic/Bermuda": {
        u: -240,
        d: -180,
        c: [
            "BM"
        ]
    },
    "Atlantic/Canary": {
        u: 0,
        d: 60,
        c: [
            "ES"
        ]
    },
    "Atlantic/Cape_Verde": {
        u: -60,
        c: [
            "CV"
        ]
    },
    "Atlantic/Faeroe": {
        a: "Atlantic/Faroe",
        r: 1
    },
    "Atlantic/Faroe": {
        u: 0,
        d: 60,
        c: [
            "FO"
        ]
    },
    "Atlantic/Jan_Mayen": {
        a: "Europe/Berlin",
        c: [
            "SJ"
        ],
        r: 1
    },
    "Atlantic/Madeira": {
        u: 0,
        d: 60,
        c: [
            "PT"
        ]
    },
    "Atlantic/Reykjavik": {
        a: "Africa/Abidjan",
        c: [
            "IS"
        ],
        r: 1
    },
    "Atlantic/South_Georgia": {
        u: -120,
        c: [
            "GS"
        ]
    },
    "Atlantic/St_Helena": {
        a: "Africa/Abidjan",
        c: [
            "SH"
        ],
        r: 1
    },
    "Atlantic/Stanley": {
        u: -180,
        c: [
            "FK"
        ]
    },
    "Australia/ACT": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Adelaide": {
        u: 570,
        d: 630,
        c: [
            "AU"
        ]
    },
    "Australia/Brisbane": {
        u: 600,
        c: [
            "AU"
        ]
    },
    "Australia/Broken_Hill": {
        u: 570,
        d: 630,
        c: [
            "AU"
        ]
    },
    "Australia/Canberra": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Currie": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Darwin": {
        u: 570,
        c: [
            "AU"
        ]
    },
    "Australia/Eucla": {
        u: 525,
        c: [
            "AU"
        ]
    },
    "Australia/Hobart": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/LHI": {
        a: "Australia/Lord_Howe",
        r: 1
    },
    "Australia/Lindeman": {
        u: 600,
        c: [
            "AU"
        ]
    },
    "Australia/Lord_Howe": {
        u: 630,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/Melbourne": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/NSW": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/North": {
        a: "Australia/Darwin",
        r: 1
    },
    "Australia/Perth": {
        u: 480,
        c: [
            "AU"
        ]
    },
    "Australia/Queensland": {
        a: "Australia/Brisbane",
        r: 1
    },
    "Australia/South": {
        a: "Australia/Adelaide",
        r: 1
    },
    "Australia/Sydney": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/Tasmania": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Victoria": {
        a: "Australia/Melbourne",
        r: 1
    },
    "Australia/West": {
        a: "Australia/Perth",
        r: 1
    },
    "Australia/Yancowinna": {
        a: "Australia/Broken_Hill",
        r: 1
    },
    "Brazil/Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "Brazil/DeNoronha": {
        a: "America/Noronha",
        r: 1
    },
    "Brazil/East": {
        a: "America/Sao_Paulo",
        r: 1
    },
    "Brazil/West": {
        a: "America/Manaus",
        r: 1
    },
    CET: {
        a: "Europe/Brussels",
        r: 1
    },
    CST6CDT: {
        a: "America/Chicago",
        r: 1
    },
    "Canada/Atlantic": {
        a: "America/Halifax",
        r: 1
    },
    "Canada/Central": {
        a: "America/Winnipeg",
        r: 1
    },
    "Canada/Eastern": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "Canada/Mountain": {
        a: "America/Edmonton",
        r: 1
    },
    "Canada/Newfoundland": {
        a: "America/St_Johns",
        r: 1
    },
    "Canada/Pacific": {
        a: "America/Vancouver",
        r: 1
    },
    "Canada/Saskatchewan": {
        a: "America/Regina",
        r: 1
    },
    "Canada/Yukon": {
        a: "America/Whitehorse",
        r: 1
    },
    "Chile/Continental": {
        a: "America/Santiago",
        r: 1
    },
    "Chile/EasterIsland": {
        a: "Pacific/Easter",
        r: 1
    },
    Cuba: {
        a: "America/Havana",
        r: 1
    },
    EET: {
        a: "Europe/Athens",
        r: 1
    },
    EST: {
        a: "America/Panama",
        r: 1
    },
    EST5EDT: {
        a: "America/New_York",
        r: 1
    },
    Egypt: {
        a: "Africa/Cairo",
        r: 1
    },
    Eire: {
        a: "Europe/Dublin",
        r: 1
    },
    "Etc/GMT": {
        u: 0
    },
    "Etc/GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT+1": {
        u: -60
    },
    "Etc/GMT+10": {
        u: -600
    },
    "Etc/GMT+11": {
        u: -660
    },
    "Etc/GMT+12": {
        u: -720
    },
    "Etc/GMT+2": {
        u: -120
    },
    "Etc/GMT+3": {
        u: -180
    },
    "Etc/GMT+4": {
        u: -240
    },
    "Etc/GMT+5": {
        u: -300
    },
    "Etc/GMT+6": {
        u: -360
    },
    "Etc/GMT+7": {
        u: -420
    },
    "Etc/GMT+8": {
        u: -480
    },
    "Etc/GMT+9": {
        u: -540
    },
    "Etc/GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT-1": {
        u: 60
    },
    "Etc/GMT-10": {
        u: 600
    },
    "Etc/GMT-11": {
        u: 660
    },
    "Etc/GMT-12": {
        u: 720
    },
    "Etc/GMT-13": {
        u: 780
    },
    "Etc/GMT-14": {
        u: 840
    },
    "Etc/GMT-2": {
        u: 120
    },
    "Etc/GMT-3": {
        u: 180
    },
    "Etc/GMT-4": {
        u: 240
    },
    "Etc/GMT-5": {
        u: 300
    },
    "Etc/GMT-6": {
        u: 360
    },
    "Etc/GMT-7": {
        u: 420
    },
    "Etc/GMT-8": {
        u: 480
    },
    "Etc/GMT-9": {
        u: 540
    },
    "Etc/GMT0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/Greenwich": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/UCT": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/UTC": {
        u: 0
    },
    "Etc/Universal": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/Zulu": {
        a: "Etc/UTC",
        r: 1
    },
    "Europe/Amsterdam": {
        a: "Europe/Brussels",
        c: [
            "NL"
        ],
        r: 1
    },
    "Europe/Andorra": {
        u: 60,
        d: 120,
        c: [
            "AD"
        ]
    },
    "Europe/Astrakhan": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Athens": {
        u: 120,
        d: 180,
        c: [
            "GR"
        ]
    },
    "Europe/Belfast": {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    "Europe/Belgrade": {
        u: 60,
        d: 120,
        c: [
            "RS",
            "BA",
            "HR",
            "ME",
            "MK",
            "SI"
        ]
    },
    "Europe/Berlin": {
        u: 60,
        d: 120,
        c: [
            "DE",
            "DK",
            "NO",
            "SE",
            "SJ"
        ]
    },
    "Europe/Bratislava": {
        a: "Europe/Prague",
        c: [
            "SK"
        ],
        r: 1
    },
    "Europe/Brussels": {
        u: 60,
        d: 120,
        c: [
            "BE",
            "LU",
            "NL"
        ]
    },
    "Europe/Bucharest": {
        u: 120,
        d: 180,
        c: [
            "RO"
        ]
    },
    "Europe/Budapest": {
        u: 60,
        d: 120,
        c: [
            "HU"
        ]
    },
    "Europe/Busingen": {
        a: "Europe/Zurich",
        c: [
            "DE"
        ],
        r: 1
    },
    "Europe/Chisinau": {
        u: 120,
        d: 180,
        c: [
            "MD"
        ]
    },
    "Europe/Copenhagen": {
        a: "Europe/Berlin",
        c: [
            "DK"
        ],
        r: 1
    },
    "Europe/Dublin": {
        u: 0,
        d: 60,
        c: [
            "IE"
        ]
    },
    "Europe/Gibraltar": {
        u: 60,
        d: 120,
        c: [
            "GI"
        ]
    },
    "Europe/Guernsey": {
        a: "Europe/London",
        c: [
            "GG"
        ],
        r: 1
    },
    "Europe/Helsinki": {
        u: 120,
        d: 180,
        c: [
            "FI",
            "AX"
        ]
    },
    "Europe/Isle_of_Man": {
        a: "Europe/London",
        c: [
            "IM"
        ],
        r: 1
    },
    "Europe/Istanbul": {
        u: 180,
        c: [
            "TR"
        ]
    },
    "Europe/Jersey": {
        a: "Europe/London",
        c: [
            "JE"
        ],
        r: 1
    },
    "Europe/Kaliningrad": {
        u: 120,
        c: [
            "RU"
        ]
    },
    "Europe/Kiev": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Kirov": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Kyiv": {
        u: 120,
        d: 180,
        c: [
            "UA"
        ]
    },
    "Europe/Lisbon": {
        u: 0,
        d: 60,
        c: [
            "PT"
        ]
    },
    "Europe/Ljubljana": {
        a: "Europe/Belgrade",
        c: [
            "SI"
        ],
        r: 1
    },
    "Europe/London": {
        u: 0,
        d: 60,
        c: [
            "GB",
            "GG",
            "IM",
            "JE"
        ]
    },
    "Europe/Luxembourg": {
        a: "Europe/Brussels",
        c: [
            "LU"
        ],
        r: 1
    },
    "Europe/Madrid": {
        u: 60,
        d: 120,
        c: [
            "ES"
        ]
    },
    "Europe/Malta": {
        u: 60,
        d: 120,
        c: [
            "MT"
        ]
    },
    "Europe/Mariehamn": {
        a: "Europe/Helsinki",
        c: [
            "AX"
        ],
        r: 1
    },
    "Europe/Minsk": {
        u: 180,
        c: [
            "BY"
        ]
    },
    "Europe/Monaco": {
        a: "Europe/Paris",
        c: [
            "MC"
        ],
        r: 1
    },
    "Europe/Moscow": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Nicosia": {
        a: "Asia/Nicosia",
        r: 1
    },
    "Europe/Oslo": {
        a: "Europe/Berlin",
        c: [
            "NO"
        ],
        r: 1
    },
    "Europe/Paris": {
        u: 60,
        d: 120,
        c: [
            "FR",
            "MC"
        ]
    },
    "Europe/Podgorica": {
        a: "Europe/Belgrade",
        c: [
            "ME"
        ],
        r: 1
    },
    "Europe/Prague": {
        u: 60,
        d: 120,
        c: [
            "CZ",
            "SK"
        ]
    },
    "Europe/Riga": {
        u: 120,
        d: 180,
        c: [
            "LV"
        ]
    },
    "Europe/Rome": {
        u: 60,
        d: 120,
        c: [
            "IT",
            "SM",
            "VA"
        ]
    },
    "Europe/Samara": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/San_Marino": {
        a: "Europe/Rome",
        c: [
            "SM"
        ],
        r: 1
    },
    "Europe/Sarajevo": {
        a: "Europe/Belgrade",
        c: [
            "BA"
        ],
        r: 1
    },
    "Europe/Saratov": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Simferopol": {
        u: 180,
        c: [
            "RU",
            "UA"
        ]
    },
    "Europe/Skopje": {
        a: "Europe/Belgrade",
        c: [
            "MK"
        ],
        r: 1
    },
    "Europe/Sofia": {
        u: 120,
        d: 180,
        c: [
            "BG"
        ]
    },
    "Europe/Stockholm": {
        a: "Europe/Berlin",
        c: [
            "SE"
        ],
        r: 1
    },
    "Europe/Tallinn": {
        u: 120,
        d: 180,
        c: [
            "EE"
        ]
    },
    "Europe/Tirane": {
        u: 60,
        d: 120,
        c: [
            "AL"
        ]
    },
    "Europe/Tiraspol": {
        a: "Europe/Chisinau",
        r: 1
    },
    "Europe/Ulyanovsk": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Uzhgorod": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Vaduz": {
        a: "Europe/Zurich",
        c: [
            "LI"
        ],
        r: 1
    },
    "Europe/Vatican": {
        a: "Europe/Rome",
        c: [
            "VA"
        ],
        r: 1
    },
    "Europe/Vienna": {
        u: 60,
        d: 120,
        c: [
            "AT"
        ]
    },
    "Europe/Vilnius": {
        u: 120,
        d: 180,
        c: [
            "LT"
        ]
    },
    "Europe/Volgograd": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Warsaw": {
        u: 60,
        d: 120,
        c: [
            "PL"
        ]
    },
    "Europe/Zagreb": {
        a: "Europe/Belgrade",
        c: [
            "HR"
        ],
        r: 1
    },
    "Europe/Zaporozhye": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Zurich": {
        u: 60,
        d: 120,
        c: [
            "CH",
            "DE",
            "LI"
        ]
    },
    Factory: {
        u: 0
    },
    GB: {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    "GB-Eire": {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    GMT: {
        a: "Etc/GMT",
        r: 1
    },
    "GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    GMT0: {
        a: "Etc/GMT",
        r: 1
    },
    Greenwich: {
        a: "Etc/GMT",
        r: 1
    },
    HST: {
        a: "Pacific/Honolulu",
        r: 1
    },
    Hongkong: {
        a: "Asia/Hong_Kong",
        r: 1
    },
    Iceland: {
        a: "Africa/Abidjan",
        c: [
            "IS"
        ],
        r: 1
    },
    "Indian/Antananarivo": {
        a: "Africa/Nairobi",
        c: [
            "MG"
        ],
        r: 1
    },
    "Indian/Chagos": {
        u: 360,
        c: [
            "IO"
        ]
    },
    "Indian/Christmas": {
        a: "Asia/Bangkok",
        c: [
            "CX"
        ],
        r: 1
    },
    "Indian/Cocos": {
        a: "Asia/Yangon",
        c: [
            "CC"
        ],
        r: 1
    },
    "Indian/Comoro": {
        a: "Africa/Nairobi",
        c: [
            "KM"
        ],
        r: 1
    },
    "Indian/Kerguelen": {
        a: "Indian/Maldives",
        c: [
            "TF"
        ],
        r: 1
    },
    "Indian/Mahe": {
        a: "Asia/Dubai",
        c: [
            "SC"
        ],
        r: 1
    },
    "Indian/Maldives": {
        u: 300,
        c: [
            "MV",
            "TF"
        ]
    },
    "Indian/Mauritius": {
        u: 240,
        c: [
            "MU"
        ]
    },
    "Indian/Mayotte": {
        a: "Africa/Nairobi",
        c: [
            "YT"
        ],
        r: 1
    },
    "Indian/Reunion": {
        a: "Asia/Dubai",
        c: [
            "RE"
        ],
        r: 1
    },
    Iran: {
        a: "Asia/Tehran",
        r: 1
    },
    Israel: {
        a: "Asia/Jerusalem",
        r: 1
    },
    Jamaica: {
        a: "America/Jamaica",
        r: 1
    },
    Japan: {
        a: "Asia/Tokyo",
        c: [
            "JP"
        ],
        r: 1
    },
    Kwajalein: {
        a: "Pacific/Kwajalein",
        r: 1
    },
    Libya: {
        a: "Africa/Tripoli",
        r: 1
    },
    MET: {
        a: "Europe/Brussels",
        r: 1
    },
    MST: {
        a: "America/Phoenix",
        r: 1
    },
    MST7MDT: {
        a: "America/Denver",
        r: 1
    },
    "Mexico/BajaNorte": {
        a: "America/Tijuana",
        r: 1
    },
    "Mexico/BajaSur": {
        a: "America/Mazatlan",
        r: 1
    },
    "Mexico/General": {
        a: "America/Mexico_City",
        r: 1
    },
    NZ: {
        a: "Pacific/Auckland",
        c: [
            "NZ"
        ],
        r: 1
    },
    "NZ-CHAT": {
        a: "Pacific/Chatham",
        r: 1
    },
    Navajo: {
        a: "America/Denver",
        r: 1
    },
    PRC: {
        a: "Asia/Shanghai",
        r: 1
    },
    PST8PDT: {
        a: "America/Los_Angeles",
        r: 1
    },
    "Pacific/Apia": {
        u: 780,
        c: [
            "WS"
        ]
    },
    "Pacific/Auckland": {
        u: 720,
        d: 780,
        c: [
            "NZ",
            "AQ"
        ]
    },
    "Pacific/Bougainville": {
        u: 660,
        c: [
            "PG"
        ]
    },
    "Pacific/Chatham": {
        u: 765,
        d: 825,
        c: [
            "NZ"
        ]
    },
    "Pacific/Chuuk": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Easter": {
        u: -360,
        d: -300,
        c: [
            "CL"
        ]
    },
    "Pacific/Efate": {
        u: 660,
        c: [
            "VU"
        ]
    },
    "Pacific/Enderbury": {
        a: "Pacific/Kanton",
        r: 1
    },
    "Pacific/Fakaofo": {
        u: 780,
        c: [
            "TK"
        ]
    },
    "Pacific/Fiji": {
        u: 720,
        c: [
            "FJ"
        ]
    },
    "Pacific/Funafuti": {
        a: "Pacific/Tarawa",
        c: [
            "TV"
        ],
        r: 1
    },
    "Pacific/Galapagos": {
        u: -360,
        c: [
            "EC"
        ]
    },
    "Pacific/Gambier": {
        u: -540,
        c: [
            "PF"
        ]
    },
    "Pacific/Guadalcanal": {
        u: 660,
        c: [
            "SB",
            "FM"
        ]
    },
    "Pacific/Guam": {
        u: 600,
        c: [
            "GU",
            "MP"
        ]
    },
    "Pacific/Honolulu": {
        u: -600,
        c: [
            "US"
        ]
    },
    "Pacific/Johnston": {
        a: "Pacific/Honolulu",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Kanton": {
        u: 780,
        c: [
            "KI"
        ]
    },
    "Pacific/Kiritimati": {
        u: 840,
        c: [
            "KI"
        ]
    },
    "Pacific/Kosrae": {
        u: 660,
        c: [
            "FM"
        ]
    },
    "Pacific/Kwajalein": {
        u: 720,
        c: [
            "MH"
        ]
    },
    "Pacific/Majuro": {
        a: "Pacific/Tarawa",
        c: [
            "MH"
        ],
        r: 1
    },
    "Pacific/Marquesas": {
        u: -570,
        c: [
            "PF"
        ]
    },
    "Pacific/Midway": {
        a: "Pacific/Pago_Pago",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Nauru": {
        u: 720,
        c: [
            "NR"
        ]
    },
    "Pacific/Niue": {
        u: -660,
        c: [
            "NU"
        ]
    },
    "Pacific/Norfolk": {
        u: 660,
        d: 720,
        c: [
            "NF"
        ]
    },
    "Pacific/Noumea": {
        u: 660,
        c: [
            "NC"
        ]
    },
    "Pacific/Pago_Pago": {
        u: -660,
        c: [
            "AS",
            "UM"
        ]
    },
    "Pacific/Palau": {
        u: 540,
        c: [
            "PW"
        ]
    },
    "Pacific/Pitcairn": {
        u: -480,
        c: [
            "PN"
        ]
    },
    "Pacific/Pohnpei": {
        a: "Pacific/Guadalcanal",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Ponape": {
        a: "Pacific/Guadalcanal",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Port_Moresby": {
        u: 600,
        c: [
            "PG",
            "AQ",
            "FM"
        ]
    },
    "Pacific/Rarotonga": {
        u: -600,
        c: [
            "CK"
        ]
    },
    "Pacific/Saipan": {
        a: "Pacific/Guam",
        c: [
            "MP"
        ],
        r: 1
    },
    "Pacific/Samoa": {
        a: "Pacific/Pago_Pago",
        c: [
            "AS"
        ],
        r: 1
    },
    "Pacific/Tahiti": {
        u: -600,
        c: [
            "PF"
        ]
    },
    "Pacific/Tarawa": {
        u: 720,
        c: [
            "KI",
            "MH",
            "TV",
            "UM",
            "WF"
        ]
    },
    "Pacific/Tongatapu": {
        u: 780,
        c: [
            "TO"
        ]
    },
    "Pacific/Truk": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Wake": {
        a: "Pacific/Tarawa",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Wallis": {
        a: "Pacific/Tarawa",
        c: [
            "WF"
        ],
        r: 1
    },
    "Pacific/Yap": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    Poland: {
        a: "Europe/Warsaw",
        r: 1
    },
    Portugal: {
        a: "Europe/Lisbon",
        r: 1
    },
    ROC: {
        a: "Asia/Taipei",
        r: 1
    },
    ROK: {
        a: "Asia/Seoul",
        r: 1
    },
    Singapore: {
        a: "Asia/Singapore",
        c: [
            "SG"
        ],
        r: 1
    },
    Turkey: {
        a: "Europe/Istanbul",
        r: 1
    },
    UCT: {
        a: "Etc/UTC",
        r: 1
    },
    "US/Alaska": {
        a: "America/Anchorage",
        r: 1
    },
    "US/Aleutian": {
        a: "America/Adak",
        r: 1
    },
    "US/Arizona": {
        a: "America/Phoenix",
        c: [
            "US"
        ],
        r: 1
    },
    "US/Central": {
        a: "America/Chicago",
        r: 1
    },
    "US/East-Indiana": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "US/Eastern": {
        a: "America/New_York",
        r: 1
    },
    "US/Hawaii": {
        a: "Pacific/Honolulu",
        r: 1
    },
    "US/Indiana-Starke": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "US/Michigan": {
        a: "America/Detroit",
        r: 1
    },
    "US/Mountain": {
        a: "America/Denver",
        r: 1
    },
    "US/Pacific": {
        a: "America/Los_Angeles",
        r: 1
    },
    "US/Samoa": {
        a: "Pacific/Pago_Pago",
        c: [
            "AS"
        ],
        r: 1
    },
    UTC: {
        a: "Etc/UTC",
        r: 1
    },
    Universal: {
        a: "Etc/UTC",
        r: 1
    },
    "W-SU": {
        a: "Europe/Moscow",
        r: 1
    },
    WET: {
        a: "Europe/Lisbon",
        r: 1
    },
    Zulu: {
        a: "Etc/UTC",
        r: 1
    }
};
var data = {
    countries: countries$1,
    timezones: timezones$1
};
var timezonesMap;
function buildCountry(data, id) {
    var name = data.countries[id];
    if (!name) return null;
    var tzMap = getTimezonesMap(data)[id] || {};
    return {
        id: id,
        name: name,
        timezones: tzMap.current || [],
        allTimezones: tzMap.all || []
    };
}
function getTimezonesMap(data) {
    timezonesMap || (timezonesMap = buildTimezonesMap(data));
    return timezonesMap;
}
function buildTimezonesMap(data) {
    return Object.keys(data.timezones).reduce(function(result, id) {
        var tz = data.timezones[id];
        var c = tz.c, a = tz.a;
        var aliasTz = data.timezones[a] || {};
        var countries = c || aliasTz.c;
        if (!countries) return result;
        var _iterator = _createForOfIteratorHelper(countries), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var country = _step.value;
                if (!result[country]) Object.assign(result, _defineProperty({}, country, {
                    current: [],
                    all: []
                }));
                if (tz.r === undefined) result[country].current.push(id);
                result[country].all.push(id);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return result;
    }, {});
}
function buildTimezone(data, name) {
    var timezone = data.timezones[name];
    if (!timezone) return null;
    var _timezone$a = timezone.a, aliasOf = _timezone$a === void 0 ? null : _timezone$a;
    var aliasTz = aliasOf ? data.timezones[aliasOf] : {};
    var tz = _objectSpread2(_objectSpread2({}, aliasTz), data.timezones[name]);
    var countries = tz.c || [];
    var utcOffset = tz.u;
    var dstOffset = Number.isInteger(tz.d) ? tz.d : utcOffset;
    var result = {
        name: name,
        countries: countries,
        utcOffset: utcOffset,
        utcOffsetStr: getOffsetString(utcOffset),
        dstOffset: dstOffset,
        dstOffsetStr: getOffsetString(dstOffset),
        aliasOf: aliasOf
    };
    if (timezone.r) result.deprecated = true;
    return result;
}
function getOffsetString(offset) {
    var hours = Math.floor(Math.abs(offset) / 60);
    var min = offset % 60;
    var sign = offset < 0 ? '-' : '+';
    return "".concat(sign).concat(getNumberString(hours), ":").concat(getNumberString(min));
}
function getNumberString(input) {
    var number_ = Math.abs(input);
    var prefix = number_ < 10 ? '0' : '';
    return "".concat(prefix).concat(number_);
}
var _excluded = [
    "allTimezones"
];
var totalTimezones = Object.keys(data.timezones).length;
var countries = {};
var timezones = {};
var memoizedTimezones = 0;
function getAllCountries() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(data.countries).reduce(function(previous, id) {
        return Object.assign(previous, _defineProperty({}, id, getCountry(id, options)));
    }, {});
}
function getAllTimezones() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (totalTimezones !== memoizedTimezones) for(var _i = 0, _Object$keys = Object.keys(data.timezones); _i < _Object$keys.length; _i++){
        var name = _Object$keys[_i];
        getTimezone(name);
    }
    return deliverTimezones(timezones, options);
}
function getCountry(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!countries[id]) memoizeCountry(buildCountry(data, id));
    return deliverCountry(countries[id], options);
}
function memoizeCountry(country) {
    if (!country) return;
    countries[country.id] = country;
}
function getTimezone(name) {
    if (!timezones[name]) memoizeTimezone(buildTimezone(data, name));
    return timezones[name] ? _objectSpread2({}, timezones[name]) : null;
}
function memoizeTimezone(timezone) {
    if (!timezone) return;
    timezones[timezone.name] = timezone;
    memoizedTimezones = Object.keys(timezone).length;
}
function getCountriesForTimezone(tzName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var timezone = getTimezone(tzName) || {};
    var values = timezone.countries || [];
    return values.map(function(c) {
        return getCountry(c, options);
    });
}
function getCountryForTimezone(tzName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _getCountriesForTimez = getCountriesForTimezone(tzName, options), _getCountriesForTimez2 = _slicedToArray(_getCountriesForTimez, 1), main = _getCountriesForTimez2[0];
    return main || null;
}
function getTimezonesForCountry(countryId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var country = getCountry(countryId, options);
    if (!country) return null;
    var values = country.timezones || [];
    return values.map(function(timezone) {
        return getTimezone(timezone);
    });
}
function deliverTimezones(tzs, options) {
    var _ref = options || {}, deprecated = _ref.deprecated;
    if (deprecated === true) return tzs;
    return Object.keys(tzs).reduce(function(previous, key) {
        if (!tzs[key].deprecated) Object.assign(previous, _defineProperty({}, key, tzs[key]));
        return previous;
    }, {});
}
function deliverCountry(country, options) {
    if (!country) return null;
    var _ref2 = options || {}, deprecated = _ref2.deprecated;
    country.allTimezones;
    var other = _objectWithoutProperties(country, _excluded);
    var tz = deprecated ? country.allTimezones : country.timezones;
    return _objectSpread2(_objectSpread2({}, other), {}, {
        timezones: tz
    });
}
var utils = {
    getCountry: getCountry,
    getTimezone: getTimezone,
    getAllCountries: getAllCountries,
    getAllTimezones: getAllTimezones,
    getTimezonesForCountry: getTimezonesForCountry,
    getCountriesForTimezone: getCountriesForTimezone,
    getCountryForTimezone: getCountryForTimezone
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}]},["9JsF8","huufM"], "huufM", "parcelRequireab85", {})

//# sourceMappingURL=worker.7fe67360.js.map
