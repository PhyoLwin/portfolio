(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f81749._.js", {

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
                lineNumber: 45,
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
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "3",
                        cy: "19",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "3",
                        cy: "35",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyLomTech/index.tsx",
                lineNumber: 48,
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
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyLomTech/index.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyLomTech/index.tsx",
                                lineNumber: 63,
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
                                lineNumber: 69,
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
                                        lineNumber: 74,
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
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 75,
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
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('solutionsText')
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyLomTech/index.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyLomTech/index.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TextWrapper$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextWrapper"], {
                        lng: lng
                    }, void 0, false, {
                        fileName: "[project]/components/WhyLomTech/index.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyLomTech/index.tsx",
                lineNumber: 61,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const PortfolioCard = ({ href, imageSrc, title, client, location, dataAos, dataAosDelay })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:z-10 p-0",
        "data-aos": dataAos,
        "data-aos-delay": dataAosDelay,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: title,
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    className: "absolute inset-0 w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg text-gray-500 font-semibold mb-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                        lineNumber: 34,
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
                        lineNumber: 35,
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
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/PortfolioCard.tsx",
        lineNumber: 19,
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
    "PortfolioLayout": (()=>PortfolioLayout),
    "default": (()=>__TURBOPACK__default__export__)
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
                imageSrc: 'https://img.freepik.com/free-vector/hand-drawn-fire-prevention-concept_23-2149126371.jpg'
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
                imageSrc: '/images/portfolio/prime.png'
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
                imageSrc: '/images/portfolio/codehada.png'
            },
            {
                title: 'portfolio.projects.project14.title',
                client: 'portfolio.projects.project14.client',
                location: 'portfolio.projects.project14.location',
                imageSrc: '/images/portfolio/tabtab.png'
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
            },
            {
                title: 'portfolio.projects.project15.title',
                client: 'portfolio.projects.project15.client',
                location: 'portfolio.projects.project15.location',
                imageSrc: '/images/portfolio/healivery.png'
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
                imageSrc: '/images/portfolio/amma.png'
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
                title: 'portfolio.projects.project16.title',
                client: 'portfolio.projects.project16.client',
                location: 'portfolio.projects.project16.location',
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
        className: "py-20 px-4 sm:px-8 bg-customBlue text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-4xl font-bold text-center mb-8",
                children: t('portfolio.title')
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/index.tsx",
                lineNumber: 168,
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
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                            children: yearData.projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$PortfolioCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    imageSrc: project.imageSrc,
                                    title: t(project.title),
                                    client: t(project.client),
                                    location: t(project.location),
                                    dataAos: "fade-up",
                                    dataAosDelay: idx * 100
                                }, idx, false, {
                                    fileName: "[project]/components/Portfolio/index.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio/index.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/Portfolio/index.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/index.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
};
_s(PortfolioLayout, "yIHkV3cUFHCxFeD16vLIxDL2JDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = PortfolioLayout;
const __TURBOPACK__default__export__ = PortfolioLayout;
var _c;
__turbopack_refresh__.register(_c, "PortfolioLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/[lng]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : ("TURBOPACK unreachable", undefined);
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
            }, O = function() {
                w = (0, h.default)(), j();
            }, M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
            }, _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0);
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0);
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {},
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b, o = v;
                        return b = v = void 0, k = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return k = e, h = setTimeout(f, t), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w, o = e - k, i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w, o = e - k;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(), n = c(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e, t, o) {
                    var r = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: a
                    });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b, o = v;
                        return b = v = void 0, O = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return O = e, h = setTimeout(f, t), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w, o = e - O, i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w, o = e - O;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(), n = s(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            "use strict";
            function n(e) {
                var t = void 0, o = void 0, i = void 0;
                for(t = 0; t < e.length; t += 1){
                    if (o = e[t], o.dataset && o.dataset.aos) return !0;
                    if (i = o.children && n(o.children)) return !0;
                }
                return !1;
            }
            function o() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document, i = o(), r = new i(a);
                u = t, r.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function a(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                    if (n(i)) return u();
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {};
            t.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e() {
                    n(this, e);
                }
                return i(e, [
                    {
                        key: "phone",
                        value: function() {
                            var e = o();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e = o();
                            return !(!u.test(e) && !c.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e;
            }();
            t.default = new s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
            }, o = function(e, t) {
                var o = window.pageYOffset, i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t);
                });
            };
            t.default = o;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12), r = o(i), a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                }), e;
            };
            t.default = a;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(13), r = o(i), a = function(e, t) {
                var n = 0, o = 0, i = window.innerHeight, a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i;
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
            };
            t.default = a;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    };
                });
            };
            t.default = n;
        }
    ]);
});
}}),
}]);

//# sourceMappingURL=_f81749._.js.map