(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_145eab._.js", {

"[project]/components/BgAnimation/ArrowBounce.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// components/ArrowBounce.tsx
__turbopack_esm__({
    "ArrowBounce": (()=>ArrowBounce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ArrowBounce = ({ arrowImage, bottomPosition })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-cover bg-center animate-bounce z-20 cursor-pointer",
        style: {
            backgroundImage: `url(${arrowImage})`,
            bottom: bottomPosition
        }
    }, void 0, false, {
        fileName: "[project]/components/BgAnimation/ArrowBounce.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = ArrowBounce;
var _c;
__turbopack_refresh__.register(_c, "ArrowBounce");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/BgAnimation/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BgAnimation": (()=>BgAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BgAnimation$2f$ArrowBounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/BgAnimation/ArrowBounce.tsx [app-client] (ecmascript)");
'use client';
;
;
const BgAnimation = ()=>{
    const arrowImage = '/images/arrow.png';
    const videoFile = '/videos/landing.mp4';
    const scrollToSection = ()=>{
        const section = document.getElementById('whylomtech');
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "animation",
        className: "relative w-full h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover",
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                style: {
                    height: '100vh',
                    width: '100vw',
                    objectFit: 'cover'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: videoFile,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/components/BgAnimation/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    "Your browser does not support the video tag."
                ]
            }, void 0, true, {
                fileName: "[project]/components/BgAnimation/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: scrollToSection,
                className: "absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BgAnimation$2f$ArrowBounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowBounce"], {
                        arrowImage: arrowImage,
                        bottomPosition: "5px"
                    }, void 0, false, {
                        fileName: "[project]/components/BgAnimation/index.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BgAnimation$2f$ArrowBounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowBounce"], {
                        arrowImage: arrowImage,
                        bottomPosition: "20px"
                    }, void 0, false, {
                        fileName: "[project]/components/BgAnimation/index.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BgAnimation$2f$ArrowBounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowBounce"], {
                        arrowImage: arrowImage,
                        bottomPosition: "35px"
                    }, void 0, false, {
                        fileName: "[project]/components/BgAnimation/index.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BgAnimation/index.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BgAnimation/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = BgAnimation;
var _c;
__turbopack_refresh__.register(_c, "BgAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/i18n/settings.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/i18n/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTranslation": (()=>useTranslation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next-resources-to-backend/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-cookie/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const runsOnServerSide = "object" === 'undefined';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((language, namespace)=>__turbopack_module_context__({
        "./locales//en/common.json": {
            id: ()=>"[project]/lib/i18n/locales/en/common.json (json, async loader)",
            module: ()=>__turbopack_require__("[project]/lib/i18n/locales/en/common.json (json, async loader)")(__turbopack_import__)
        },
        "./locales//kr/common.json": {
            id: ()=>"[project]/lib/i18n/locales/kr/common.json (json, async loader)",
            module: ()=>__turbopack_require__("[project]/lib/i18n/locales/kr/common.json (json, async loader)")(__turbopack_import__)
        },
        "./locales/en/common.json": {
            id: ()=>"[project]/lib/i18n/locales/en/common.json (json, async loader)",
            module: ()=>__turbopack_require__("[project]/lib/i18n/locales/en/common.json (json, async loader)")(__turbopack_import__)
        },
        "./locales/kr/common.json": {
            id: ()=>"[project]/lib/i18n/locales/kr/common.json (json, async loader)",
            module: ()=>__turbopack_require__("[project]/lib/i18n/locales/kr/common.json (json, async loader)")(__turbopack_import__)
        }
    }).import(`./locales/${language}/${namespace}.json`))).init({
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptions"])(),
    lng: undefined,
    detection: {
        order: [
            'path',
            'htmlTag',
            'cookie',
            'navigator'
        ]
    },
    preload: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : []
});
function useTranslation(lng, ns, options) {
    _s();
    const [cookies, setCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieName"]
    ]);
    const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(ns, options);
    const { i18n } = ret;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(i18n.resolvedLanguage);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (activeLng === i18n.resolvedLanguage) return;
                setActiveLng(i18n.resolvedLanguage);
            }
        }["useTranslation.useEffect"], [
            activeLng,
            i18n.resolvedLanguage
        ]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (!lng || i18n.resolvedLanguage === lng) return;
                i18n.changeLanguage(lng);
            }
        }["useTranslation.useEffect"], [
            lng,
            i18n
        ]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (cookies.i18next === lng) return;
                setCookie(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieName"], lng, {
                    path: '/'
                });
            }
        }["useTranslation.useEffect"], [
            lng,
            cookies.i18next
        ]);
    }
    return ret;
}
_s(useTranslation, "IJamPGQAdtRhJ0pFVTGFpiHg2ns=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TextWrapper/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TextWrapper": (()=>TextWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const TextWrapper = ({ lng })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(lng, 'common');
    const services = [
        {
            text: t('technicalExpertise'),
            icon: '🛠️',
            side: 'left'
        },
        {
            text: t('diverseExperience'),
            icon: '🌎',
            side: 'right'
        },
        {
            text: t('userFriendlySolutions'),
            icon: '✨',
            side: 'left'
        },
        {
            text: t('reliabilityScalability'),
            icon: '🚀',
            side: 'right'
        },
        {
            text: t('dedicatedTeam'),
            icon: '🤝',
            side: 'left'
        },
        {
            text: t('costEffective'),
            icon: '💰',
            side: 'right'
        },
        {
            text: t('koreanCommunication'),
            icon: '🇰🇷',
            side: 'left'
        },
        {
            text: t('globalTalent'),
            icon: '🌐',
            side: 'right'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextWrapper.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 1000
            });
        }
    }["TextWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-6",
        children: services.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-aos": `fade-${item.side}`,
                className: `chat-bubble ${item.side} glow-effect text-black`,
                children: [
                    item.icon,
                    " ",
                    item.text,
                    index < services.length - 1
                ]
            }, index, true, {
                fileName: "[project]/components/TextWrapper/index.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/TextWrapper/index.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
_s(TextWrapper, "yIHkV3cUFHCxFeD16vLIxDL2JDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TextWrapper;
var _c;
__turbopack_refresh__.register(_c, "TextWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/WhyLomTech/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WhyLomTech": (()=>WhyLomTech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TextWrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/TextWrapper/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const WhyLomTech = ({ lng })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(lng, 'common');
    const whyTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const whySARef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const whySARef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhyLomTech.useEffect": ()=>{
            const handleScroll = {
                "WhyLomTech.useEffect.handleScroll": ()=>{
                    const handleVisibility = {
                        "WhyLomTech.useEffect.handleScroll.handleVisibility": (ref, className)=>{
                            if (ref?.current) {
                                const rect = ref.current.getBoundingClientRect();
                                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                                    ref.current.classList.add(className);
                                } else {
                                    ref.current.classList.remove(className);
                                }
                            }
                        }
                    }["WhyLomTech.useEffect.handleScroll.handleVisibility"];
                    handleVisibility(whyTextRef, 'why-text-visible');
                    handleVisibility(whySARef1, 'why-sa-visible');
                    handleVisibility(whySARef2, 'why-sa-visible');
                }
            }["WhyLomTech.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "WhyLomTech.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["WhyLomTech.useEffect"];
        }
    }["WhyLomTech.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "whylomtech",
        className: "relative px-4 py-12 md:px-16 md:py-24",
        style: {
            backgroundColor: '#0d3388'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "Section2__Heading-sc-1m3n9it-3 fiBlEe text-3xl sm:text-4xl font-bold leading-tight text-white text-center mb-6",
                children: t('sectionHeading')
            }, void 0, false, {
                fileName: "[project]/components/WhyLomTech/index.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "6",
                height: "38",
                viewBox: "0 0 6 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "Section2__Ellipsis-sc-1m3n9it-1 gpvAwB mx-auto mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "3",
                        cy: "3",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "3",
                        cy: "19",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "3",
                        cy: "35",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyLomTech/index.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:justify-around items-center max-w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl text-left relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: whyTextRef,
                                className: "relative why-text-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-semibold text-blue-500 why-text-animation",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('whyLomTechTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyLomTech/index.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyLomTech/index.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl sm:text-4xl font-bold leading-tight text-white mt-4",
                                style: {
                                    maxWidth: '100%',
                                    lineHeight: '2.5rem'
                                },
                                children: t('provenTrackRecordText')
                            }, void 0, false, {
                                fileName: "[project]/components/WhyLomTech/index.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl sm:text-xl font-bold leading-tight text-gray-400 mt-4",
                                style: {
                                    maxWidth: '100%',
                                    lineHeight: '2.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('expertiseText')
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: whySARef1,
                                        className: "relative why-sa-container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white why-sa-animation",
                                            children: t('technologies1Text')
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyLomTech/index.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: whySARef2,
                                        className: "relative why-sa-container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white why-sa-animation",
                                            children: t('technologies2Text')
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyLomTech/index.tsx",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('solutionsText')
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyLomTech/index.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TextWrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        lng: lng
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyLomTech/index.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhyLomTech/index.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
};
_s(WhyLomTech, "iQz1ux/UjnNUamE14M9jpgOkjho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = WhyLomTech;
var _c;
__turbopack_refresh__.register(_c, "WhyLomTech");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Portfolio/PortfolioCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const PortfolioCard = ({ href, imageSrc, title, client, location })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: title,
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    className: "w-full h-48 object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: [
                            t('portfolio.projects.client'),
                            ": ",
                            client
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: [
                            t('portfolio.projects.location'),
                            ": ",
                            location
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(PortfolioCard, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = PortfolioCard;
const __TURBOPACK__default__export__ = PortfolioCard;
var _c;
__turbopack_refresh__.register(_c, "PortfolioCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Portfolio/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PortfolioLayout": (()=>PortfolioLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$PortfolioCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Portfolio/PortfolioCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const portfolioData = [
    {
        year: 2017,
        projects: [
            {
                title: 'portfolio.projects.project1.title',
                client: 'portfolio.projects.project1.client',
                location: 'portfolio.projects.project1.location',
                imageSrc: 'https://www.shutterstock.com/image-vector/delivery-car-box-fly-out-600nw-1970870492.jpg'
            },
            {
                title: 'portfolio.projects.project2.title',
                client: 'portfolio.projects.project2.client',
                location: 'portfolio.projects.project2.location',
                imageSrc: 'https://img.freepik.com/free-vector/flat-background-world-tourism-day-celebration_23-2149582530.jpg'
            }
        ]
    },
    {
        year: 2018,
        projects: [
            {
                title: 'portfolio.projects.project3.title',
                client: 'portfolio.projects.project3.client',
                location: 'portfolio.projects.project3.location',
                imageSrc: 'https://media.istockphoto.com/id/926004618/vector/isometric-post-office-concept-young-man-and-woman-waiting-for-a-parcel-in-a-post-office.jpg?s=612x612&w=0&k=20&c=V-bADq9UZwwmnJAxxt4dN6LCNmN8U-HcEgYSdU1-quw='
            },
            {
                title: 'portfolio.projects.project4.title',
                client: 'portfolio.projects.project4.client',
                location: 'portfolio.projects.project4.location',
                imageSrc: 'https://img.freepik.com/free-vector/hand-drawn-post-office-cartoon-illustration_23-2151093339.jpg'
            },
            {
                title: 'portfolio.projects.project5.title',
                client: 'portfolio.projects.project5.client',
                location: 'portfolio.projects.project5.location',
                imageSrc: 'https://admin.matriyeacademy.com/FileServer/Website/CourseDetails/SubjectPicture/6437c6d464908.webp'
            }
        ]
    },
    {
        year: 2019,
        projects: [
            {
                title: 'portfolio.projects.project6.title',
                client: 'portfolio.projects.project6.client',
                location: 'portfolio.projects.project6.location',
                imageSrc: 'https://ux247.com/wp-content/uploads/2014/08/mobile-homepage-design-best-practice-1024x600.png'
            }
        ]
    },
    {
        year: '2020',
        projects: [
            {
                title: 'portfolio.projects.project7.title',
                client: 'portfolio.projects.project7.client',
                location: 'portfolio.projects.project7.location',
                imageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/c6/fa/a6/c6faa6d9-51a9-6cfa-fe83-65057450df98/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg'
            }
        ]
    },
    {
        year: '2021',
        projects: [
            {
                title: 'portfolio.projects.project8.title',
                client: 'portfolio.projects.project8.client',
                location: 'portfolio.projects.project8.location',
                imageSrc: 'https://www.shutterstock.com/image-vector/cartoon-airplane-over-runway-passenger-600nw-2428871881.jpg'
            }
        ]
    },
    {
        year: '2023',
        projects: [
            {
                title: 'portfolio.projects.project9.title',
                client: 'portfolio.projects.project9.client',
                location: 'portfolio.projects.project9.location',
                imageSrc: 'https://www.creativefabrica.com/wp-content/uploads/2023/10/17/Jet-air-force-icon-graphic-vector-Graphics-81806382-1.png'
            },
            {
                title: 'portfolio.projects.project10.title',
                client: 'portfolio.projects.project10.client',
                location: 'portfolio.projects.project10.location',
                imageSrc: 'https://st4.depositphotos.com/20689124/24064/i/450/depositphotos_240644534-stock-photo-stock-market-forex-trading-graph.jpg'
            }
        ]
    },
    {
        year: '2024',
        projects: [
            {
                title: 'portfolio.projects.project11.title',
                client: 'portfolio.projects.project11.client',
                location: 'portfolio.projects.project11.location',
                imageSrc: 'https://shopequo.com/cdn/shop/articles/Cover_58fe9aa4-942a-4469-b73f-d0b207249fc6.jpg?v=1711295069&width=1600'
            },
            {
                title: 'portfolio.projects.project12.title',
                client: 'portfolio.projects.project12.client',
                location: 'portfolio.projects.project12.location',
                imageSrc: 'https://static.vecteezy.com/system/resources/previews/035/859/250/non_2x/construction-site-banner-mixer-workers-concrete-piles-tower-crane-under-construction-design-background-building-materials-and-equipment-cityscape-skyline-cartoon-flat-illustration-vector.jpg'
            },
            {
                title: 'portfolio.projects.project13.title',
                client: 'portfolio.projects.project13.client',
                location: 'portfolio.projects.project13.location',
                imageSrc: 'https://cdn.psdrepo.com/images/2x/to-do-list-app-freebie-d6.jpg'
            },
            {
                title: 'portfolio.projects.project14.title',
                client: 'portfolio.projects.project14.client',
                location: 'portfolio.projects.project14.location',
                imageSrc: 'https://nacharger.com/_nuxt/img/image-Section04.e519ffe.png'
            }
        ]
    }
];
const PortfolioLayout = ({ lng })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(lng, 'common');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioLayout.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 1000
            });
        }
    }["PortfolioLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "portfolio",
        className: "py-20 px-4 sm:px-8 bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-4xl font-bold text-center mb-8",
                children: t('portfolio.title')
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/index.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            portfolioData.map((yearData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl sm:text-3xl font-semibold mb-4",
                            children: t(`portfolio.years.${yearData.year}`)
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio/index.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                            children: yearData.projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": idx * 100,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$PortfolioCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        imageSrc: project.imageSrc,
                                        title: t(project.title),
                                        client: t(project.client),
                                        location: t(project.location)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/index.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/components/Portfolio/index.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio/index.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/Portfolio/index.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/index.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
};
_s(PortfolioLayout, "yIHkV3cUFHCxFeD16vLIxDL2JDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = PortfolioLayout;
var _c;
__turbopack_refresh__.register(_c, "PortfolioLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Navbar/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTranslation": (()=>useTranslation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next-resources-to-backend/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './settings'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-cookie/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const runsOnServerSide = "object" === 'undefined';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((language, namespace)=>(()=>{
        const e = new Error("Cannot find module 'unknown'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })())).init({
    ...getOptions(),
    lng: undefined,
    detection: {
        order: [
            'path',
            'htmlTag',
            'cookie',
            'navigator'
        ]
    },
    preload: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : []
});
function useTranslation(lng, ns, options) {
    _s();
    const [cookies, setCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"])([
        cookieName
    ]);
    const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(ns, options);
    const { i18n } = ret;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        const [activeLng, setActiveLng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(i18n.resolvedLanguage);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (activeLng === i18n.resolvedLanguage) return;
                setActiveLng(i18n.resolvedLanguage);
            }
        }["useTranslation.useEffect"], [
            i18n.resolvedLanguage
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (!lng || i18n.resolvedLanguage === lng) return;
                i18n.changeLanguage(lng);
            }
        }["useTranslation.useEffect"], [
            lng,
            i18n
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useTranslation.useEffect": ()=>{
                if (cookies.i18next === lng) return;
                setCookie(cookieName, lng, {
                    path: '/'
                });
            }
        }["useTranslation.useEffect"], [
            lng,
            cookies.i18next,
            setCookie
        ]);
    }
    return ret;
}
_s(useTranslation, "IJamPGQAdtRhJ0pFVTGFpiHg2ns=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/[lng]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_145eab._.js.map