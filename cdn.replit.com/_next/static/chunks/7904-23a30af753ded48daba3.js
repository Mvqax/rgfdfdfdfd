"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7904],{32046:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(79056),u=r(67294);function o(e,t){var r=u.useState(e),o=(0,n.Z)(r,2),i=o[0],c=o[1];return u.useEffect((function(){var r=setTimeout((function(){c(e)}),t);return function(){clearTimeout(r)}}),[e]),i}},37813:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294);function u(e){var t=(0,n.useState)(!1),r=t[0],u=t[1],o=(0,n.useRef)(0);return[r,(0,n.useMemo)((function(){return{onDragEnter:function(e){e.preventDefault(),o.current++,u(!0)},onDragLeave:function(e){e.preventDefault(),o.current--,0===o.current&&u(!1)},onDrop:function(t){var r,n;t.preventDefault(),o.current=0,u(!1),t.persist();var i=Array.from(null!==(r=null===t||void 0===t||null===(n=t.dataTransfer)||void 0===n?void 0:n.files)&&void 0!==r?r:[]);0!==i.length?e(i):e(null)},onDragOver:function(e){e.preventDefault()}}}),[e])]}},54298:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(79056),u=r(67294),o=r(16496),i=r.n(o),c=r(61941),a=r(80723);var l=r(37813),s=r(97131),f=r(30266),p=r(809),v=r.n(p),d=r(54907),g=r(96887),b=r(91682);function O(e){var t=e.initialValue,r=e.textTriggers,o=(0,u.useState)(t||""),p=o[0],O=o[1],m=(0,u.useRef)(null),h=function(e){var t=e.textTriggers,r=e.applySuggestion,o=(0,u.useRef)(null),l=(0,c.Z)(t),s=(0,n.Z)(l,2),f=s[0].suggestions,p=s[1],v=(0,a.Kb)({items:(null===f||void 0===f?void 0:f.results)||[],defaultHighlightedIndex:0,isOpen:Boolean(f),onSelectedItemChange:function(e){var t=e.selectedItem;if(f&&t){var n=o.current;if(n){var u=f.applySuggestion({targetValue:n.value,suggestionValue:t.value}),i=u.fullValue,c=u.cursorIndex;r({fullValue:i,cursorIndex:c})}}}}),d=(0,u.useMemo)((function(){if(f&&o.current)return i()(o.current,f.textTrigger.index)}),[f]);return{ref:(0,u.useCallback)((function(e){o.current=e,p(e)}),[p]),suggestions:null===f||void 0===f?void 0:f.results,caretCoordinates:d,combobox:v}}({textTriggers:r,applySuggestion:function(e){var t=e.cursorIndex,r=e.fullValue;O(r),setTimeout((function(){m.current&&m.current.setSelectionRange(t,t)}))}}),y=h.combobox,Z=h.caretCoordinates,j=h.suggestions,P=h.ref,w=function(e){var t=(0,u.useRef)(null),r=(0,g.Z)(e.onChange),n=(0,g.Z)(e.onError),o=(0,u.useCallback)((function(e){t.current=e}),[]),i=(0,u.useCallback)(function(){var e=(0,f.Z)(v().mark((function e(u){var o,i,c,a,l,f,p,g,O,m;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.current){e.next=3;break}return e.abrupt("return");case 3:return i=o.value,c=o.selectionStart?o.selectionStart:i.length,a=u.map((function(e){return"![Uploading ".concat(e.name,"...]()")})),l=i.substr(0,c),f=i.substr(c),p=(0,s.Z)(a),l&&p.unshift(l),f&&p.push(f),r.current(p.join("\n")),g=[],e.prev=13,e.next=16,(0,d.Z)(u);case 16:g=e.sent,e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(13),n.current(e.t0),e.abrupt("return");case 23:return O=[],e.prev=24,e.next=27,Promise.all(g.map((function(e){return null==e?new Error("Could not read file"):(0,b.uz)("/data/images/upload",{image:e.result})})));case 27:O=e.sent,e.next=34;break;case 30:return e.prev=30,e.t1=e.catch(24),n.current(e.t1),e.abrupt("return");case 34:if(t.current){e.next=36;break}return e.abrupt("return");case 36:m=a.reduce((function(e,t,r){var n=u[r].name.replace(/\.[^/.]+$/,""),o=O[r],i=o instanceof Error?"Error uploading":o.url;return e.replace(t,"![".concat(n,"](").concat(i,")"))}),t.current.value),r.current(m);case 38:case"end":return e.stop()}}),e,null,[[13,19],[24,30]])})));return function(t){return e.apply(this,arguments)}}(),[r,n]),c=(0,u.useCallback)((function(e){var t=Array.from(e.clipboardData.items).filter((function(e){return"file"===e.kind})).map((function(e){return e.getAsFile()})).filter((function(e){return null!==e}));t.length&&i(t)}),[i]);return{ref:o,handleFiles:i,handlePaste:c}}({onChange:O,onError:function(){}}),x=w.handleFiles,k=w.handlePaste,C=w.ref,E=(0,l.Z)((function(e){null!==e&&x(e)})),D=(0,n.Z)(E,2)[1],S=(0,u.useCallback)((function(e){m.current=e,P(e),C(e)}),[P,C]),L=(0,u.useCallback)((function(e,t){var r;null===(r=m.current)||void 0===r||r.setSelectionRange(e,t)}),[]);return{ref:S,value:p,setValue:O,dropZoneHanlders:D,handlePaste:k,combobox:y,caretCoordinates:Z,suggestions:j,setSelectionRange:L}}},61941:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(97131),u=r(79056),o=r(67294),i=r(32046),c=r(92809);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return/\s/.test(e)};function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=o.useState(null),i=(0,u.Z)(n,2),c=i[0],a=i[1],f=o.useCallback(a,[a]),p=o.useRef(t);o.useEffect((function(){p.current=t}),[t]);var v=o.useState(null),d=(0,u.Z)(v,2),g=d[0],b=d[1];return o.useEffect((function(){if(c){var e=function(){var e=c.value,t=c.selectionStart;if(t){var r=1===t||s(e[t-2]||""),n=e.length?e[t-1]:null;b((function(u){if(u&&(t<u.index||0===t))return null;if(!n)return u;if(!u&&!r)return u;var o=p.current.includes(n);return u||o?u?s(n)?null:l(l({},u),{},{text:e.slice(u.index,t)}):{index:t,text:"",match:n}:u}))}else b(null)},t=function(){b(null)};return c.addEventListener("focus",e),c.addEventListener("keyup",e),c.addEventListener("blur",t),function(){b(null),c.removeEventListener("focus",e),c.removeEventListener("keyup",e),c.removeEventListener("blur",t)}}}),[c,b]),[g,f]}function p(e){var t=o.useRef(e);o.useEffect((function(){t.current=e}),[e]);var r=o.useState(!1),c=(0,u.Z)(r,2),a=c[0],l=c[1],s=o.useState(null),p=(0,u.Z)(s,2),v=p[0],d=p[1],g=f.apply(void 0,(0,n.Z)(Object.keys(e))),b=(0,u.Z)(g,2),O=b[0],m=b[1],h=o.useRef(O);o.useEffect((function(){h.current=O}),[O]);var y=(0,i.Z)(O,100);return o.useEffect((function(){if(y){var e=y.match,r=y.text,n=t.current[e]?t.current[e]:null;if(n){var u=!1;return l(!0),n(r).then((function(e){u||h.current===y&&(l(!1),d({textTrigger:y,results:e,applySuggestion:function(e){var t=e.targetValue,r=e.suggestionValue,n=t.slice(0,y.index),u=r,o=t.slice(y.index+y.text.length);o&&o.startsWith(" ")||(u+=" ");var i=n+u+o;return{cursorIndex:(n+u).length+(o&&o.startsWith(" ")?1:0),fullValue:i}}}))})),function(){u=!0}}d(null)}else d(null)}),[y,d]),[{isLoading:a,suggestions:v},m]}},54907:function(e,t,r){r.d(t,{p:function(){return n}});var n=function(e){return new Promise((function(t,r){var n=new window.FileReader;n.onload=function(r){r.target?t({name:e.name,result:r.target.result}):t(null)},n.onerror=r,n.readAsDataURL(e)}))};t.Z=function(e){return Promise.all(Array.from(e).filter((function(e){return!!e})).map(n))}},79270:function(e,t,r){r.d(t,{t:function(){return j},g:function(){return x}});var n=r(92809),u=(r(67294),r(70917)),o=r(41664),i=r(80718),c=r(49512),a=r(14900),l=r(82457),s=r(223),f=r(30281),p=r(95211),v=r(65292),d=r(35944);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=(0,u.iv)({border:"1px solid "+l.TV.accentPrimaryDefault,backgroundColor:"transparent"},"",""),m=function(e){var t=e.isActive,r=e.small;return(0,u.iv)([l.l0.p(r?4:8),l.l0.align.center,l.l0.rowWithGap(4),l.l0.fontSize(12),t?O:f.gU.outlined,l.l0.borderRadius(16),{color:"inherit","&:hover":O}],"","")};function h(e){var t=e.tag,r=e.isActive,n=e.isRemovable,u=e.small,o=u?"small":"text";return(0,d.tZ)(a.Z,{elevated:r,css:[l.l0.borderRadius(16),"",""],children:(0,d.BX)(a.Z,{elevated:r,css:[m({isActive:r,small:u}),"",""],children:[(0,d.BX)(c.Z,{css:[l.l0.flex.row,l.l0.align.center,"",""],children:[(0,d.tZ)(s.x,{variant:o,color:"dimmest",children:"#"}),(0,d.tZ)(s.x,{color:"dimmer",variant:o,children:t.id})]}),t.isOfficial&&!u?(0,d.tZ)(v.Z,{}):null,u?null:(0,d.tZ)(s.x,{color:r?"dimmer":"dimmest",variant:"small",children:(0,i.d)(t.replCount)}),n?(0,d.tZ)(p.Z,{size:u?12:16}):null]})})}var y=(0,c.K)("a"),Z={name:"opde7s",styles:"color:inherit"};function j(e){var t=e.tag,r=e.link,n=e.isActive,u=e.small;return(0,d.tZ)(o.default,b(b({},r),{},{passHref:!0,children:(0,d.tZ)(y,{css:Z,children:(0,d.tZ)(h,{tag:t,isActive:n,small:u,isRemovable:n})})}))}var P=(0,c.K)("button"),w={name:"reuayf",styles:"border:none;background:transparent;color:inherit;font:inherit;line-height:normal"};function x(e){var t=e.tag,r=e.onClick,n=e.isActive,u=e.small;return(0,d.tZ)(P,{css:[w,"",""],onClick:r,children:(0,d.tZ)(h,{tag:t,isActive:n,small:u,isRemovable:!0})})}},5537:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(92809),u=(r(67294),r(96622)),o=r(35944);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return(0,o.tZ)(u.Z,c(c({},e),{},{children:(0,o.tZ)("path",{d:"M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z",strokeLinecap:"round",strokeLinejoin:"round"})}))}},50573:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(92809),u=(r(67294),r(96622)),o=r(35944);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return(0,o.tZ)(u.Z,c(c({},e),{},{children:(0,o.tZ)("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))}}}]);