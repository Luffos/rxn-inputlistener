(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[772],{259:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Zo:function(){return d},ah:function(){return c}});var i=n(7294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=i.createContext({});function c(e){var t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):a(a({},t),e)}),[t,e])}var u={};function d(e){var t=e.components,n=e.children,r=e.disableParentContext,o=c(t);return r&&(o=t||u),i.createElement(l.Provider,{value:o},n)}},354:function(e){"use strict";var t=function(e){};e.exports=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(t(n),!e){var a;if(void 0===n)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=0;(a=new Error(n.replace(/%s/g,(function(){return String(i[l++])})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},6469:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{ZP:function(){return s}});var i=n(354),o=n.n(i),a=!("undefined"==typeof window||!window.document||!window.document.createElement),l={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},c={},u=a,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"get",value:function(t){return u&&(u=!1,e._update()),o()(l[t],"No dimension set for key "+t),l[t]}},{key:"set",value:function(e){e&&(a?o()(!1,"Dimensions cannot be set in the browser"):(null!=e.screen&&(l.screen=e.screen),null!=e.window&&(l.window=e.window)))}},{key:"_update",value:function(){if(a){var e=window,t=e.document.documentElement;l.window={fontScale:1,height:t.clientHeight,scale:e.devicePixelRatio||1,width:t.clientWidth},l.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width},Array.isArray(c.change)&&c.change.forEach((function(e){return e(l)}))}}},{key:"addEventListener",value:function(e,t){var n=this;return c[e]=c[e]||[],c[e].push(t),{remove:function(){n.removeEventListener(e,t)}}}},{key:"removeEventListener",value:function(e,t){Array.isArray(c[e])&&(c[e]=c[e].filter((function(e){return e!==t})))}}],(n=null)&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();a&&window.addEventListener("resize",d._update,!1);var f=n(7294);var s=function(){var e,t,n,r=(e=(0,f.useState)((function(){return d.get("window")})),t=e[0],n=e[1],(0,f.useEffect)((function(){function e(e){var t=e.window;null!=t&&n(t)}return d.addEventListener("change",e),n(d.get("window")),function(){d.removeEventListener("change",e)}}),[]),t),i=r.width,o=r.height;return{vw:function(e){return function(e,t){return(t||d.get("window").width)*(e/100)}(e,i)},vh:function(e){return function(e,t){return(t||d.get("window").height)*(e/100)}(e,o)},vmin:function(e){return function(e,t,n){return Math.min((t||d.get("window").width)*(null!=e?e/100:1),(n||d.get("window").height)*(null!=e?e/100:1))}(e,i,o)},vmax:function(e){return function(e,t,n){return Math.max((t||d.get("window").width)*(null!=e?e/100:1),(n||d.get("window").height)*(null!=e?e/100:1))}(e,i,o)},percentage:function(e,t){return function(e,t){return t*e/100}(e,t)}}}},1755:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),i=n(1597),o=n(3571),a=n.n(o),l=n(1785),c=n.n(l),u=n(4808),d=n.n(u),f="style-module--navIcon--Yyu3D",s="style-module--navItem--rjYGv",m=function(){var e=(0,r.useState)(0),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){n(window.pageYOffset)};return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),t},h=n(858),p=function(e){var t=e.TopBarSelected,n=(0,h.Z)("(min-width: 768px)"),o=m();return r.createElement("div",{id:"style-module--navBarRoot--jpT4Q",style:{position:"fixed",zIndex:2,top:0,left:0,width:"100vw",backgroundColor:o>40?"#0b0921b3":"transparent"}},r.createElement("div",{id:"style-module--navBarContent--Aq-8V"},r.createElement(i.rU,{to:"/"},r.createElement(d(),{id:"style-module--logo--kTE66",height:n?60:55,style:{marginLeft:n?-30:-35}})),r.createElement("div",{id:"style-module--rightItemsDesktop--VXlLA"},r.createElement(i.rU,{to:"/docs","data-currentpage":"DOCS"===t,className:s},"DOCUMENTATION"),r.createElement(i.rU,{to:"/examples","data-currentpage":"EXAMPLES"===t,className:s},"EXAMPLES"),r.createElement("a",{style:{display:"flex",justifyContent:"center",alignItems:"center"},href:"https://github.com/Luffos/rxn-input"},r.createElement(a(),{height:30,id:f}))),r.createElement("div",{id:"style-module--rightItemsMobile--mN2M6"},r.createElement(c(),{style:{paddingLeft:5},id:f,height:22}))))},C=(0,r.memo)(p),w=function(e){var t=e.children,n=e.TopBarSelected;e.withoutDefaultFooter;return r.createElement("div",{style:{margin:"0 auto",maxWidth:"110rem",paddingLeft:20,paddingRight:20}},r.createElement(C,{TopBarSelected:n}),t)},v=(0,r.memo)(w)},858:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=function(e){return"undefined"!=typeof window&&window.matchMedia(e).matches},n=(0,r.useState)(t(e)),i=n[0],o=n[1];function a(){o(t(e))}return(0,r.useEffect)((function(){var t=window.matchMedia(e);return a(),t.addListener?t.addListener(a):t.addEventListener("change",a),function(){t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}}),[e]),i}},4808:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("g",{filter:"url(#filter0_d_27_703)",key:0},r.createElement("path",{d:"M24.88 52.8049H18.44L12.88 42.2449H8.88V52.8049H3.32V30.4449C3.32 28.3115 3.81333 26.7649 4.8 25.8049C5.78667 24.8182 7.44 24.3249 9.76 24.3249H14.48C17.3067 24.3249 19.5467 25.1915 21.2 26.9249C22.88 28.6315 23.72 30.8049 23.72 33.4449C23.72 35.3649 23.2133 37.0315 22.2 38.4449C21.2133 39.8315 19.9867 40.7915 18.52 41.3249L24.88 52.8049ZM14.12 37.6049C15.2933 37.6049 16.2533 37.2049 17 36.4049C17.7733 35.5782 18.16 34.5649 18.16 33.3649C18.16 32.1382 17.7867 31.1515 17.04 30.4049C16.32 29.6582 15.3467 29.2849 14.12 29.2849H11.36C9.70667 29.2849 8.88 30.1249 8.88 31.8049V37.6049H14.12ZM51.9719 52.8049H45.0919L39.1319 42.8849L33.2519 52.8049H26.3719L35.9319 38.2049L26.9719 24.3249H33.8119L39.1319 33.5249L44.5319 24.3249H51.3319L42.3719 38.2049L51.9719 52.8049ZM77.2778 24.3249V49.9249C77.2778 50.8049 77.0111 51.5649 76.4778 52.2049C75.9445 52.8182 75.3178 53.1249 74.5978 53.1249C72.7578 53.1249 71.2511 52.0582 70.0778 49.9249L60.2378 34.5249V52.8049H54.6778V24.3249H60.0378L71.7178 42.9649V24.3249H77.2778ZM99.7628 52.8049H94.2028V24.3249H99.7628V52.8049ZM123.71 52.8049H118.51V38.2049C118.51 36.8982 118.244 36.0049 117.71 35.5249C117.177 35.0449 116.43 34.8049 115.47 34.8049L110.79 36.7649V52.8049H105.59V29.9649H109.47L110.67 32.6849L117.07 29.7249C118.857 29.7249 120.404 30.3915 121.71 31.7249C123.044 33.0315 123.71 34.9515 123.71 37.4849V52.8049ZM147.16 40.7649C147.16 46.7115 145.627 50.5115 142.56 52.1649C141.307 52.8315 139.773 53.1649 137.96 53.1649L134.12 50.6849V59.6049H128.92V30.1249H139.16C142.253 30.1249 144.36 31.0049 145.48 32.7649C146.6 34.4982 147.16 37.1649 147.16 40.7649ZM141.96 41.5649C141.96 37.0582 140.52 34.8049 137.64 34.8049H134.12V45.4049L137.64 47.6849C139.187 47.6849 140.293 47.2049 140.96 46.2449C141.627 45.2582 141.96 43.6982 141.96 41.5649ZM168.383 52.8049H164.503L163.303 50.0849L156.903 53.0449C155.116 53.0449 153.556 52.3915 152.223 51.0849C150.916 49.7515 150.263 47.8182 150.263 45.2849V29.9649H155.463V44.1649C155.463 46.6982 156.476 47.9649 158.503 47.9649L163.183 45.4449V29.9649H168.383V52.8049ZM183.993 52.8049H180.753C178.779 52.8049 177.273 52.2182 176.233 51.0449C175.219 49.8715 174.713 48.4715 174.713 46.8449V34.8449H172.513V30.8849H174.713V26.4049H179.913V30.8849H183.593V34.8449H179.913V46.5249C179.913 47.7782 180.513 48.4049 181.713 48.4049H183.993V52.8049Z",fill:"white"})),r.createElement("g",{filter:"url(#filter1_d_27_703)",key:1},r.createElement("ellipse",{cx:"217.5",cy:"39",rx:"20.5",ry:"20",fill:"url(#paint0_linear_27_703)"})),r.createElement("path",{d:"M218.5 41.3835C219.849 41.3835 220.943 40.3164 220.943 39C220.943 37.6837 219.849 36.6166 218.5 36.6166C217.151 36.6166 216.057 37.6837 216.057 39C216.057 40.3164 217.151 41.3835 218.5 41.3835Z",fill:"white",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M218.5 33.6096C222.132 33.6096 225.506 34.1181 228.05 34.9725C231.115 36.002 233 37.5625 233 38.9756C233 40.4481 231.003 42.1059 227.711 43.1699C225.223 43.9742 221.948 44.3941 218.5 44.3941C214.965 44.3941 211.618 44 209.101 43.161C205.918 42.0993 204 40.42 204 38.9756C204 37.574 205.799 36.0256 208.821 34.9976C211.375 34.1291 214.832 33.6096 218.5 33.6096H218.5Z",stroke:"white",strokeWidth:"2",key:3}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M213.712 36.3081C215.527 33.2385 217.664 30.641 219.693 28.9178C222.139 26.8416 224.466 26.0285 225.72 26.7343C227.028 27.4699 227.502 29.9862 226.802 33.2995C226.274 35.8046 225.01 38.7818 223.288 41.6957C221.522 44.6831 219.5 47.3152 217.498 49.0224C214.965 51.1829 212.515 51.9647 211.233 51.2431C209.988 50.5434 209.512 48.2487 210.11 45.181C210.614 42.589 211.88 39.4076 213.712 36.308L213.712 36.3081Z",stroke:"white",strokeWidth:"2",key:4}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M213.717 41.7035C211.897 38.6374 210.658 35.5333 210.141 32.9572C209.519 29.8534 209.959 27.4803 211.212 26.7724C212.518 26.0346 214.99 26.8904 217.583 29.1366C219.543 30.8347 221.556 33.3892 223.283 36.3003C225.054 39.2848 226.382 42.3086 226.898 44.8533C227.552 48.0735 227.023 50.534 225.741 51.2577C224.498 51.9599 222.223 51.2165 219.797 49.1797C217.747 47.4589 215.554 44.8 213.717 41.7034V41.7035Z",stroke:"white",strokeWidth:"2",key:5}),r.createElement("defs",{key:6},[r.createElement("filter",{id:"filter0_d_27_703",x:"0.319946",y:"21.3249",width:"188.672",height:"43.28",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:0},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha",key:1}),r.createElement("feOffset",{dx:"1",dy:"1",key:2}),r.createElement("feGaussianBlur",{stdDeviation:"2",key:3}),r.createElement("feComposite",{in2:"hardAlpha",operator:"out",key:4}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.0666667 0 0 0 0 0.576471 0 0 0 0 0.901961 0 0 0 0.54 0",key:5}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_27_703",key:6}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_27_703",result:"shape",key:7})]),r.createElement("filter",{id:"filter1_d_27_703",x:"178",y:"0",width:"79",height:"78",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",key:1},[r.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix",key:0}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha",key:1}),r.createElement("feMorphology",{radius:"7",operator:"erode",in:"SourceAlpha",result:"effect1_dropShadow_27_703",key:2}),r.createElement("feOffset",{key:3}),r.createElement("feGaussianBlur",{stdDeviation:"13",key:4}),r.createElement("feComposite",{in2:"hardAlpha",operator:"out",key:5}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.152941 0 0 0 0 0.662745 0 0 0 0 0.956863 0 0 0 0.8 0",key:6}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_27_703",key:7}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_27_703",result:"shape",key:8})]),r.createElement("linearGradient",{id:"paint0_linear_27_703",x1:"217.5",y1:"19",x2:"217.5",y2:"59",gradientUnits:"userSpaceOnUse",key:2},[r.createElement("stop",{stopColor:"#1CB0FA",key:0}),r.createElement("stop",{offset:"1",stopColor:"#0169CA",key:1})])])])}i.defaultProps={width:"257",height:"78",viewBox:"0 0 257 78",fill:"none"},e.exports=i,i.default=i},3571:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"#94A3B8",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}i.defaultProps={viewBox:"0 0 24 24"},e.exports=i,i.default=i},1785:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,r.createElement("path",{d:"M3.66341 20C4.54747 20 5.39531 20.3512 6.02043 20.9763C6.64555 21.6014 6.99674 22.4493 6.99674 23.3333C6.99674 24.2174 6.64555 25.0652 6.02043 25.6904C5.39531 26.3155 4.54747 26.6667 3.66341 26.6667C2.77936 26.6667 1.93151 26.3155 1.30639 25.6904C0.681268 25.0652 0.330078 24.2174 0.330078 23.3333C0.330078 22.4493 0.681268 21.6014 1.30639 20.9763C1.93151 20.3512 2.77936 20 3.66341 20ZM3.66341 10C4.54747 10 5.39531 10.3512 6.02043 10.9763C6.64555 11.6014 6.99674 12.4493 6.99674 13.3333C6.99674 14.2174 6.64555 15.0652 6.02043 15.6904C5.39531 16.3155 4.54747 16.6667 3.66341 16.6667C2.77936 16.6667 1.93151 16.3155 1.30639 15.6904C0.681268 15.0652 0.330078 14.2174 0.330078 13.3333C0.330078 12.4493 0.681268 11.6014 1.30639 10.9763C1.93151 10.3512 2.77936 10 3.66341 10ZM3.66341 0C4.54747 0 5.39531 0.351189 6.02043 0.976311C6.64555 1.60143 6.99674 2.44928 6.99674 3.33333C6.99674 4.21739 6.64555 5.06523 6.02043 5.69036C5.39531 6.31548 4.54747 6.66667 3.66341 6.66667C2.77936 6.66667 1.93151 6.31548 1.30639 5.69036C0.681268 5.06523 0.330078 4.21739 0.330078 3.33333C0.330078 2.44928 0.681268 1.60143 1.30639 0.976311C1.93151 0.351189 2.77936 0 3.66341 0Z",fill:"#94A3B8"}))}i.defaultProps={width:"7",height:"27",viewBox:"0 0 7 27",fill:"none"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=e82b64bd3efe7e0b8cfab1ef543529af13ed2fd2-541fcc58532699e84888.js.map