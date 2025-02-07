(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__7475ef._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/lib/i18n/settings.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cookieName": (()=>cookieName),
    "defaultNS": (()=>defaultNS),
    "fallbackLng": (()=>fallbackLng),
    "getOptions": (()=>getOptions),
    "languages": (()=>languages)
});
const languages = [
    'en',
    'kr'
];
const fallbackLng = 'kr';
const defaultNS = 'common';
const cookieName = 'i18next';
function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    };
}
}}),
"[project]/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/accept-language/Build/Source/AcceptLanguage.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/i18n/settings.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].languages(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["languages"]);
const config = {
    // matcher: '/:lng*'
    matcher: [
        '/((?!api|_next/static|_next/image|assets|images|videos|favicon.ico|sw.js|site.webmanifest).*)'
    ]
};
function middleware(req) {
    let lng;
    if (req.cookies.has(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["cookieName"])) lng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].get(req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["cookieName"]).value);
    if (!lng) lng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].get(req.headers.get('Accept-Language'));
    if (!lng) lng = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["fallbackLng"];
    // Redirect if lng in path is not supported
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["languages"].some((loc)=>req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
    }
    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'));
        const lngInReferer = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["languages"].find((l)=>refererUrl.pathname.startsWith(`/${l}`));
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        if (lngInReferer) response.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["cookieName"], lngInReferer);
        return response;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7475ef._.js.map