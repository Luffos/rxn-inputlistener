(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=a},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,a=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==a&&a}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var a=n(6495).Z,r=n(2648).Z,i=(0,n(1598).Z)(n(7294)),c=r(n(1585)),o=n(8e3),s=n(5850),d=n(9470);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(9475);var u=["name","httpEquiv","charSet","itemProp"];function f(e,t){var n,r,c,o,s=t.inAmpMode;return e.reduce(h,[]).reverse().concat(l(s).reverse()).filter((n=new Set,r=new Set,c=new Set,o={},function(e){var t=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;var i=e.key.slice(e.key.indexOf("$")+1);n.has(i)?t=!1:n.add(i)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var s=0,d=u.length;s<d;s++){var l=u[s];if(e.props.hasOwnProperty(l)){if("charSet"===l)c.has(l)?t=!1:c.add(l);else{var h=e.props[l],f=o[l]||new Set;("name"!==l||!a)&&f.has(h)?t=!1:(f.add(h),o[l]=f)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!s&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=a({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,i.default.cloneElement(e,r)}return i.default.cloneElement(e,{key:n})})}var p=function(e){var t=e.children,n=i.useContext(o.AmpStateContext),a=i.useContext(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:f,headManager:a,inAmpMode:d.isInAmpMode(n)},t)};t.default=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,o=e.reduceComponentsToState;function s(){if(n&&n.mountedInstances){var t=a.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(o(t,e))}}return r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),s()),i(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(function(){return n&&(n._pendingUpdate=s),function(){n&&(n._pendingUpdate=s)}}),c(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var a=(0,n(1598).Z)(n(7294)),r=!1,i=r?function(){}:a.useLayoutEffect,c=r?function(){}:a.useEffect},3838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a,r,i,c,o,s,d,l,h,u=n(7294),f=n(7105),p=n(9521),m=n(2261),v=n(2892),g=n(4670),x=p.default.div.withConfig({displayName:"indexstyles__Section1",componentId:"sc-oga0h5-0"})(["@keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}animation:fadeIn 5s;"]),y=p.default.div.withConfig({displayName:"indexstyles__Section1Content",componentId:"sc-oga0h5-1"})(["display:flex;flex-direction:row;","{flex-direction:column;}"],m.Z.down("lg")),_=p.default.div.withConfig({displayName:"indexstyles__Section1Background",componentId:"sc-oga0h5-2"})(["position:absolute;width:100%;max-width:",";height:250px;filter:blur(8rem);background:radial-gradient(50% 41.03% at 50% 58.97%,rgba(0,131,255,0) 50%,rgb(0,131,255) 28.65%,rgba(0,25,245,0.62) 81.25%,rgba(0,131,255,0) 99.99%);left:50%;margin-top:20px;opacity:0.8;transform:translateX(-50%);z-index:0;"],g.Z.maxWidth),Z=p.default.h1.withConfig({displayName:"indexstyles__Title",componentId:"sc-oga0h5-3"})(["margin:0px;padding:0;font-size:3rem;","{margin-left:auto;margin-right:auto;align-self:center;text-align:center;}","{font-size:2rem;}","{font-size:1.4rem;}"],m.Z.down("lg"),m.Z.down("md"),m.Z.down("sm")),w=p.default.h2.withConfig({displayName:"indexstyles__SubTitle",componentId:"sc-oga0h5-4"})(["margin:0;margin-top:1.5rem;padding:0;font-size:1.8rem;color:",";","{margin-left:auto;margin-right:auto;align-self:center;text-align:center;}","{font-size:1.2rem;}","{font-size:0.9rem;}& > span{color:",";}"],v.Z.ZIMABLUE,m.Z.down("lg"),m.Z.down("md"),m.Z.down("sm"),v.Z.BLUEBLOUSE),M=p.default.div.withConfig({displayName:"indexstyles__DevicesWrapper",componentId:"sc-oga0h5-5"})(["margin-left:auto;margin-top:-2.5rem;width:500px;height:500px;display:flex;justify-content:center;","{margin-top:4rem;margin-left:auto;margin-right:auto;margin-top:0rem;width:400px;height:300px;& > svg{align-self:end;}}","{margin-top:0rem;width:300px;height:260px;}","{margin-top:0.5rem;width:240px;height:240px;& > svg{align-self:end;}}"],m.Z.down("lg"),m.Z.down("md"),m.Z.down("sm")),E=p.default.div.withConfig({displayName:"indexstyles__GetStartedButton",componentId:"sc-oga0h5-6"})(["margin-top:2rem;display:flex;justify-content:center;align-items:center;cursor:pointer;user-select:none;color:white;font-weight:600;font-size:1.5rem;letter-spacing:0.08rem;width:16rem;height:4rem;background:linear-gradient(180deg,rgba(16,117,255,0.9) 0%,rgba(9,115,223,0.9) 0.01%,rgba(18,21,93,0.9) 100%);border:0.1rem solid #0b4ea8;border-radius:1rem;transition:0.1s filter linear;&:hover{filter:brightness(140%);}","{margin-top:1rem;margin-left:auto;margin-right:auto;}","{margin-top:0rem;width:14rem;height:3.5rem;font-size:1rem;}","{margin-top:0rem;width:12rem;height:3rem;font-size:0.9rem;}"],m.Z.down("lg"),m.Z.down("md"),m.Z.down("sm"));function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var j=function(e){return u.createElement("svg",b({width:469,height:298,fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),a||(a=u.createElement("rect",{y:49.908,width:342.837,height:165.785,rx:4,fill:"url(#Devices_svg__a)"})),r||(r=u.createElement("path",{d:"M255.921 138.434c0-.889.72-1.61 1.609-1.61h53.116c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61H257.53a1.61 1.61 0 0 1-1.609-1.61v-20.924ZM30.582 74.051c0-.889.72-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924c0 .89-.721 1.61-1.61 1.61H32.19a1.61 1.61 0 0 1-1.61-1.61V74.052ZM62.773 74.051c0-.889.72-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924c0 .89-.721 1.61-1.61 1.61H64.383a1.61 1.61 0 0 1-1.61-1.61V74.052ZM94.964 74.051c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61H96.574a1.61 1.61 0 0 1-1.61-1.61V74.052ZM127.156 74.051c0-.889.72-1.61 1.609-1.61h20.925c.889 0 1.609.721 1.609 1.61v20.924c0 .89-.72 1.61-1.609 1.61h-20.925c-.889 0-1.609-.72-1.609-1.61V74.052ZM159.347 74.051c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.609.721 1.609 1.61v20.924c0 .89-.72 1.61-1.609 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61V74.052ZM191.538 74.051c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61V74.052ZM223.73 74.051c0-.889.72-1.61 1.609-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924c-.889 0-1.609-.72-1.609-1.61V74.052ZM255.921 74.051c0-.889.72-1.61 1.609-1.61h20.925c.889 0 1.609.721 1.609 1.61v20.924c0 .89-.72 1.61-1.609 1.61H257.53c-.889 0-1.609-.72-1.609-1.61V74.052ZM288.112 74.051c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61V74.052ZM30.582 106.242c0-.888.72-1.609 1.61-1.609h20.924c.889 0 1.61.721 1.61 1.609v20.925a1.61 1.61 0 0 1-1.61 1.609H32.19c-.889 0-1.61-.72-1.61-1.609v-20.925ZM62.773 106.242c0-.888.72-1.609 1.61-1.609h20.924c.889 0 1.61.721 1.61 1.609v20.925c0 .889-.721 1.609-1.61 1.609H64.383c-.89 0-1.61-.72-1.61-1.609v-20.925ZM94.964 106.242c0-.888.721-1.609 1.61-1.609h20.924c.889 0 1.61.721 1.61 1.609v20.925a1.61 1.61 0 0 1-1.61 1.609H96.574c-.889 0-1.61-.72-1.61-1.609v-20.925ZM127.156 106.242c0-.888.72-1.609 1.609-1.609h20.925a1.61 1.61 0 0 1 1.609 1.609v20.925c0 .889-.72 1.609-1.609 1.609h-20.925c-.889 0-1.609-.72-1.609-1.609v-20.925ZM159.347 106.242a1.61 1.61 0 0 1 1.61-1.609h20.924a1.61 1.61 0 0 1 1.609 1.609v20.925c0 .889-.72 1.609-1.609 1.609h-20.924a1.61 1.61 0 0 1-1.61-1.609v-20.925ZM191.538 106.242a1.61 1.61 0 0 1 1.61-1.609h20.924c.889 0 1.61.721 1.61 1.609v20.925a1.61 1.61 0 0 1-1.61 1.609h-20.924a1.61 1.61 0 0 1-1.61-1.609v-20.925ZM223.73 106.242c0-.888.72-1.609 1.609-1.609h20.924c.889 0 1.61.721 1.61 1.609v20.925a1.61 1.61 0 0 1-1.61 1.609h-20.924c-.889 0-1.609-.72-1.609-1.609v-20.925ZM255.921 106.242c0-.888.72-1.609 1.609-1.609h20.925a1.61 1.61 0 0 1 1.609 1.609v20.925c0 .889-.72 1.609-1.609 1.609H257.53c-.889 0-1.609-.72-1.609-1.609v-20.925Z",fill:"#D0E8FF"})),i||(i=u.createElement("path",{d:"M288.112 106.242a1.61 1.61 0 0 1 1.61-1.609h20.924c.889 0 1.61.721 1.61 1.609v53.116a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61v-53.116ZM30.582 138.434c0-.889.72-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924c0 .889-.721 1.61-1.61 1.61H32.19a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM62.773 138.434c0-.889.72-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924c0 .889-.721 1.61-1.61 1.61H64.383a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM94.964 138.434c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61H96.574a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM127.156 138.434c0-.889.72-1.61 1.609-1.61h20.925a1.61 1.61 0 0 1 1.609 1.61v20.924c0 .889-.72 1.61-1.609 1.61h-20.925a1.61 1.61 0 0 1-1.609-1.61v-20.924ZM159.347 138.434c0-.889.721-1.61 1.61-1.61h20.924a1.61 1.61 0 0 1 1.609 1.61v20.924c0 .889-.72 1.61-1.609 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM191.538 138.434c0-.889.721-1.61 1.61-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM223.73 138.434c0-.889.72-1.61 1.609-1.61h20.924c.889 0 1.61.721 1.61 1.61v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.609-1.61v-20.924ZM30.582 170.625c0-.889.72-1.609 1.61-1.609h20.924c.889 0 1.61.72 1.61 1.609v20.924c0 .889-.721 1.61-1.61 1.61H32.19a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM62.773 170.625c0-.889.72-1.609 1.61-1.609h20.924c.889 0 1.61.72 1.61 1.609v20.924c0 .889-.721 1.61-1.61 1.61H64.383a1.61 1.61 0 0 1-1.61-1.61v-20.924ZM94.964 170.625c0-.889.721-1.609 1.61-1.609h149.689c.889 0 1.61.72 1.61 1.609v20.924a1.61 1.61 0 0 1-1.61 1.61H96.573a1.61 1.61 0 0 1-1.609-1.61v-20.924ZM255.921 170.625c0-.889.72-1.609 1.609-1.609h20.925c.889 0 1.609.72 1.609 1.609v20.924c0 .889-.72 1.61-1.609 1.61H257.53a1.61 1.61 0 0 1-1.609-1.61v-20.924ZM288.112 170.625a1.61 1.61 0 0 1 1.61-1.609h20.924c.889 0 1.61.72 1.61 1.609v20.924a1.61 1.61 0 0 1-1.61 1.61h-20.924a1.61 1.61 0 0 1-1.61-1.61v-20.924Z",fill:"#D0E8FF"})),c||(c=u.createElement("path",{d:"M269.131 186.543h165.517V254.9H269.131v-68.357Z",fill:"#D0E8FF"})),o||(o=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M294.321 156.844c-16.818 4.622-31.493 24.835-42.478 58.512-5.534 16.963-8.26 31.571-8.761 46.952-.45 13.827.838 21.446 4.71 27.846 3.37 5.573 8.54 7.771 18.202 7.738 7.598-.025 13.568-1.631 23.291-6.263 21.092-10.05 39.495-14.629 61.773-15.37 25.225-.839 46.43 3.712 71.512 15.346 11.423 5.299 15.427 6.368 23.936 6.395 7.501.022 10.697-.746 13.597-3.27 2.383-2.073 5.792-8.64 7.067-13.611 4.949-19.3-.388-52.336-13.263-82.097-6.517-15.062-12.388-24.354-20.351-32.203-5.793-5.711-10.123-8.388-16.034-9.914-6.948-1.793-11.59-1.105-25.148 3.729-2.792.996-8.377 2.398-12.411 3.118-6.485 1.156-9.35 1.309-24.768 1.321-11.533.009-18.836-.237-21.572-.727-7.675-1.373-12.389-2.656-17.139-4.664-8.444-3.568-15.989-4.535-22.163-2.838Zm116.194 39.039c6.31 5.841 2.269 15.833-6.065 14.996-8.276-.831-10.652-11.28-3.568-15.691 2.634-1.64 7.49-1.29 9.633.695Zm-100.258 2.841c.337.623.612 4.181.612 7.906v6.774h6.836c3.759 0 7.35.273 7.978.606 1.023.543 1.143 1.279 1.143 7.008s-.12 6.464-1.143 7.007c-.628.334-4.219.607-7.978.607h-6.836v7.203c0 4.822-.234 7.437-.709 7.907-.464.46-2.911.703-7.071.703-5.685 0-6.428-.121-6.974-1.133-.337-.623-.612-4.181-.612-7.907v-6.773h-6.665c-9.196 0-9.292-.08-9.292-7.614 0-7.535.096-7.614 9.292-7.614h6.665v-6.774c0-3.725.275-7.283.612-7.906.547-1.014 1.29-1.133 7.071-1.133s6.524.119 7.071 1.133Zm81.891 14.104c5.002 3.063 5.102 10.644.187 14.113-5.045 3.559-12.499.042-13.279-6.267-.815-6.598 7.244-11.428 13.092-7.846Zm35.717.353c6.082 5.071 3.886 13.75-3.845 15.199-2.439.457-6.488-1.227-7.995-3.323-2.41-3.356-2.244-7.332.439-10.492 1.935-2.279 3.242-2.833 6.799-2.881 2.152-.029 3.169.302 4.602 1.497ZM409.797 230.3c5.114 2.898 5.075 11.077-.068 14.227-7.392 4.527-16.378-3.927-11.904-11.2 1.501-2.441 2.585-3.329 4.946-4.056 2.136-.658 4.717-.279 7.026 1.029Z",fill:"url(#Devices_svg__b)"})),s||(s=u.createElement("path",{d:"M379.502 100.309c0 18.123 14.69 32.825 32.816 32.825h1.535c18.131 0 32.825-14.702 32.825-32.825V83.647h-67.176v16.662Z",fill:"url(#Devices_svg__c)"})),d||(d=u.createElement("path",{d:"M388.365 11.47c-1.243 2.602-.989 5.393.763 8.3 2.407 4.025 4.909 4.233 7.562 4.442 2.511.204 5.343.442 9.718 3.787 7.036 5.401 6.106 15.065 5.543 18.373h-32.449v35.381h67.172V46.372h-31.862c.672-4.192 1.318-14.46-6.69-20.608-5.03-3.842-8.6-4.142-11.203-4.35-2.473-.2-3.712-.301-5.384-3.087-1.243-2.086-1.46-3.925-.634-5.63 1.952-4.072 9.939-6.866 27.828-9.752V0c-17.276 2.69-27.645 5.81-30.364 11.47Zm24.833 42.81a4.779 4.779 0 0 1 4.772 4.771v12.413c0 2.627-2.136 4.78-4.772 4.78h-.221c-2.636 0-4.767-2.153-4.767-4.78V59.05a4.772 4.772 0 0 1 4.767-4.771h.221Z",fill:"url(#Devices_svg__d)"})),l||(l=u.createElement("rect",{x:407.969,y:53.766,width:10.241,height:23.043,rx:5.121,fill:"#D0E8FF"})),h||(h=u.createElement("defs",null,u.createElement("linearGradient",{id:"Devices_svg__a",x1:171.419,y1:49.908,x2:171.419,y2:215.693,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#0785FC",stopOpacity:.88}),u.createElement("stop",{offset:1,stopColor:"#131158"})),u.createElement("linearGradient",{id:"Devices_svg__b",x1:355.996,y1:156,x2:355.996,y2:298,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#0876E3"}),u.createElement("stop",{offset:1,stopColor:"#140B50"})),u.createElement("linearGradient",{id:"Devices_svg__c",x1:413.09,y1:0,x2:413.09,y2:133.134,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#0872DE",stopOpacity:.96}),u.createElement("stop",{offset:1,stopColor:"#130D53"})),u.createElement("linearGradient",{id:"Devices_svg__d",x1:413.09,y1:0,x2:413.09,y2:133.134,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#0872DE",stopOpacity:.96}),u.createElement("stop",{offset:1,stopColor:"#130D53"})))))},C=n(9008),O=n.n(C),S=n(6554),H=n(1664),I=n.n(H),U=n(5893),k=function(){var e=(0,S.Z)(m.Z.down("lg")),t=(0,u.useState)(!1),n=t[0],a=t[1];return(0,u.useLayoutEffect)(function(){a(!0)},[]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(O(),{children:(0,U.jsx)("title",{children:"RXN Input - Cross Platform Input Handler for React and React Native."})}),(0,U.jsx)(f.Z,{children:(0,U.jsx)(f.b,{style:{marginTop:"9rem"},children:n&&(0,U.jsxs)(x,{children:[(0,U.jsx)(_,{}),(0,U.jsx)("div",{style:{position:"relative",zIndex:0},children:(0,U.jsxs)(y,{children:[(0,U.jsxs)("div",{children:[(0,U.jsxs)(Z,{children:["Cross-Platform Input Handler",(0,U.jsx)("br",{}),"for React and React Native"]}),(0,U.jsxs)(w,{children:["Mouse",(0,U.jsx)("span",{children:","})," Touches",(0,U.jsx)("span",{children:","})," Keyboard ",(0,U.jsx)("span",{children:"and"})," Gamepad"]}),!e&&(0,U.jsx)(I(),{href:"/docs/getting-started/installation",children:(0,U.jsx)("a",{style:{display:e?"none":"flex",width:"fit-content"},children:(0,U.jsx)(E,{children:"Get started"})})})]}),(0,U.jsx)(M,{children:(0,U.jsx)(j,{viewBox:"0 0 469 298"})}),e&&(0,U.jsx)(I(),{href:"/docs/getting-started/installation",children:(0,U.jsx)("a",{style:{display:e?"flex":"none",width:"fit-content",margin:"0 auto",paddingBottom:"3rem"},children:(0,U.jsx)(E,{children:"Get started"})})})]})})]})})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3838)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[324,105,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);