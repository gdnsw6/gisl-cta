(function(){var e={612:function(){},430:function(){},854:function(e,t,n){var a=n(612);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(346).Z("3cc9997a",a,!0,{})},882:function(e,t,n){var a=n(430);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(346).Z("d49a8662",a,!0,{})},346:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var s=t[r],i=s[0],o={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):n.push(a[i]={id:i,parts:[o]})}return n}n.d(t,{Z:function(){return f}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,d=!1,l=function(){},u=null,p="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){d=n,u=r||{};var i=a(e,t);return m(i),function(t){for(var n=[],r=0;r<i.length;r++){var o=s[i[r].id];o.refs--,n.push(o)}t?m(i=a(e,t)):i=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete s[o.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],a=s[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(g(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(g(n.parts[r]));s[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(d)return l;a.parentNode.removeChild(a)}if(v){var r=c++;t=w.bind(null,a=o||(o=h()),r,!1),n=w.bind(null,a,r,!0)}else t=y.bind(null,a=h()),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){a?(a.css!==e.css||a.media!==e.media||a.sourceMap!==e.sourceMap)&&t(e=a):n()}}var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function w(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var s=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function y(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),u.ssrId&&e.setAttribute(p,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundles/gislctabanner/",window?.__sw__?.assetPath&&(n.p=window.__sw__.assetPath+"/bundles/gislctabanner/"),function(){"use strict";n(854);let{Component:e}=Shopware;e.register("sw-cms-block-advanced-cta-banner-basic",{template:'<div class="sw-cms-block-advanced-cta-banner-basic">\n        <slot name="one"></slot>\n</div>\n'}),n(882);let{Component:t}=Shopware;t.register("sw-cms-preview-advanced-cta-banner-basic",{template:'<div class="sw-cms-preview-advanced-cta-banner sw-cms-preview-advanced-cta-banner-basic">\n    <div class="sw-cms-el-preview-advanced-cta-banner">\n        <img :src="assetFilter(\'/administration/static/img/cms/preview_mountain_small.jpg\')" alt="">\n        <div class="container">\n            <div class="container-content">\n                <h3>Full width Banner</h3>\n                <p>Supports multimedia and categories.</p>\n                <button>Cool</button>\n            </div>\n        </div>\n    </div>\n</div>\n',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}),Shopware.Service("cmsService").registerCmsBlock({name:"advanced-cta-banner-basic",label:"sw-cms.blocks.general.ctaBannerbasic.label",category:"advanced-cta-banner",component:"sw-cms-block-advanced-cta-banner-basic",previewComponent:"sw-cms-preview-advanced-cta-banner-basic",defaultConfig:{marginBottom:"0",marginTop:"0",marginLeft:"0",marginRight:"0",sizingMode:"boxed"},slots:{one:{type:"advanced-cta-banner",default:{config:{elementType:{source:"static",value:"cta"},height:{source:"static",value:"250px"},mediaActive:{source:"static",value:!0},videoActive:{source:"static",value:!1}}}}}})}()})();