"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{69471:function(t,e,o){var n=o(65988),r=(o(67294),o(35944));e.Z=function(t){var e=t.stroke,o=void 0===e?"var(--accent-yellow-dimmer)":e,a=t.width,c=void 0===a?"40px":a,l=t.height;return(0,r.BX)("div",{className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]]),children:[(0,r.tZ)("svg",{width:"53px",height:"37px",viewBox:"0 0 53 37",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]]),children:(0,r.tZ)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]]),children:(0,r.tZ)("g",{stroke:o,strokeWidth:"2",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]]),children:(0,r.BX)("g",{className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]]),children:[(0,r.tZ)("polygon",{points:"41.73 29.68 5 23 5 7 41.73 0.32",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])}),(0,r.tZ)("path",{d:"M11,6 L11,31.25 C11.0036168,33.6295084 12.7465542,35.6487651 15.1,36 L17.5,36",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])}),(0,r.tZ)("path",{d:"M5,9 L5,21 C2.23857625,21 8.8817842e-16,18.7614237 8.8817842e-16,16 L8.8817842e-16,14 C8.8817842e-16,11.2385763 2.23857625,9 5,9 Z",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])}),(0,r.tZ)("path",{d:"M48,15 L52,15",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])}),(0,r.tZ)("path",{d:"M47.44,10.25 L50.56,7.75",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])}),(0,r.tZ)("path",{d:"M50.56,22.25 L47.44,19.75",className:n.default.dynamic([["1937252334",[c||"auto",l||"auto"]]])})]})})})}),(0,r.tZ)(n.default,{id:"1937252334",dynamic:[c||"auto",l||"auto"],children:["svg.__jsx-style-dynamic-selector{display:block;width:".concat(c||"auto",";height:").concat(l||"auto",";}")]})]})}},98904:function(t,e,o){o.d(e,{Z:function(){return Z}});var n=o(79056),r=(o(67294),o(82100)),a=o(23495),c=o(45187),l=o(45869),i=o(51444),s=o(38934),d=o(49512),u=o(82457),v=o(70565),p=o(223),h=o(92169),f=o(80718),m=o(35944);function Z(t){var e=(0,i.Z)().showError,o=t.post,Z=(0,r.I0)(),y=(0,r.v9)((function(t){return t.user.userInfo.isLoggedIn}),r.wU),b=(0,c.YsJ)({onError:function(t){return e((0,a.bc)(t.message))},onCompleted:function(t){var e;"PostVote"===(null===(e=t.createPostVote)||void 0===e?void 0:e.__typename)&&(0,s.track)(s.events.REACTED_TO_REPL,{replView:"",reaction:"upvote",isReplTalk:!0,item:"post"})}}),g=(0,n.Z)(b,2),j=g[0],w=g[1].loading,x=(0,c.e1h)({onError:function(t){return e((0,a.bc)(t.message))}}),O=(0,n.Z)(x,2),k=O[0],C=O[1].loading,P=function(){if(y){if(!w&&!C){o.canVote||e("Voting not allowed");var t={postId:o.id};o.hasVoted?k({variables:t}):j({variables:t})}}else Z({type:"AUTH_MODAL_SHOW"})};return t.v2?(0,m.BX)(d.Z,{css:[u.l0.rowWithGap(8),u.l0.align.center,"",""],children:[o.voteCount>0?(0,m.tZ)(p.x,{children:(0,f.d)(o.voteCount)}):null,(0,m.tZ)(d.Z,{children:(0,m.tZ)(v.Z,{alt:o.hasVoted?"Remove upvote":"Upvote",onClick:P,size:32,children:(0,m.tZ)(h.Z,{})})})]}):(0,m.tZ)(l.Z,{hasVoted:o.hasVoted,canVote:o.canVote,voteCount:o.voteCount,lite:t.lite,small:t.small,onClick:P})}},45869:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(65988),r=(o(67294),o(94184)),a=o.n(r),c=o(35944);function l(t){return(0,c.BX)("button",{onClick:function(){t.canVote&&t.onClick()},title:"Upvote",className:"jsx-1129441626 "+(a()("vote-control",t.lite?"vote-control-lite":"vote-control-heavy",{"vote-control-active":t.hasVoted,"vote-control-can-vote":t.canVote,"vote-control-small":t.small})||""),children:[(0,c.tZ)("div",{className:"jsx-1129441626 vote-control-arrow",children:"\u25b2"}),(0,c.tZ)("div",{className:"jsx-1129441626 vote-control-count",children:t.voteCount}),(0,c.tZ)(n.default,{id:"1129441626",children:["button.jsx-1129441626{background-color:transparent;border:0 none;}",".vote-control.jsx-1129441626{color:var(--foreground-default);text-align:center;width:40px;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".vote-control-heavy.jsx-1129441626{border:1px solid var(--foreground-default);border-radius:4px;}",".vote-control-can-vote.jsx-1129441626{cursor:pointer;}",".vote-control-heavy.vote-control-can-vote.jsx-1129441626:hover{background-color:var(--accent-positive-default);color:white;}",".vote-control-heavy.vote-control-can-vote.jsx-1129441626:hover,.vote-control-heavy.vote-control-active.jsx-1129441626{border:1px solid var(--accent-positive-default);}",".vote-control-lite.vote-control-can-vote.jsx-1129441626:hover,.vote-control-lite.vote-control-active.jsx-1129441626{color:var(--accent-positive-default);}",".vote-control-arrow.jsx-1129441626{font-size:16px;padding:5px;pointer-events:none;}",".vote-control-count.jsx-1129441626{pointer-events:none;font-size:16px;font-weight:bold;padding:0 5px 5px;}",".vote-control-small.jsx-1129441626{display:block;width:36px;}",".vote-control-small.jsx-1129441626 .vote-control-arrow.jsx-1129441626{padding:0;font-size:var(--font-size-small);-webkit-transform:scaleX(1.7);-ms-transform:scaleX(1.7);transform:scaleX(1.7);}",".vote-control-small.jsx-1129441626 .vote-control-count.jsx-1129441626{padding:0;font-weight:normal;}",".vote-control-active.jsx-1129441626,.vote-control-active.jsx-1129441626:hover{color:var(--accent-positive-default);}",".vote-control-heavy.vote-control-active.jsx-1129441626,.vote-control-heavy.vote-control-active.jsx-1129441626:hover{background-color:var(--accent-positive-default);color:white;}",".vote-control-heavy.vote-control-active.jsx-1129441626,.vote-control-heavy.vote-control-active.jsx-1129441626:hover{color:white;}"]})]})}},20088:function(t,e,o){o.d(e,{Z:function(){return w}});var n=o(92809),r=(o(67294),o(223)),a=o(14900),c=o(49512),l=o(82457),i=o(33393),s=o(98904),d=o(69471),u=o(55104),v=o(87433),p=o(57925),h=o(48242),f=o(66795),m=o(76391),Z=o(61850),y=o(35944);function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(Object(o),!0).forEach((function(e){(0,n.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var j={name:"s2a4s9",styles:"flex-shrink:1"};function w(t){var e,o=t.post,n=o.user,b=o.repl,w=o.board,x=(0,Z.Z)("flag-posts-feed-v2");return n?(0,y.BX)(c.Z,{css:[l.l0.colWithGap(8),"",""],children:[(0,y.BX)(c.Z,{css:[l.l0.rowWithGap(8),l.l0.justify.spaceBetween,l.l0.align.center,"",""],children:[(0,y.tZ)(v.Z,{user:n,timeCreated:o.timeCreated,postType:"post"}),o.isAnnouncement?(0,y.tZ)(d.Z,{width:"24px"}):(0,y.tZ)(s.Z,{post:o,v2:!0})]}),(0,y.BX)(c.Z,{css:[l.l0.borderRadius(8),l.l0.position.relative,{overflow:"hidden",border:"1px solid "+l.TV.outlineDimmest},"",""],children:[(0,y.BX)(a.Z,{elevated:!0,css:[l.l0.p(16),l.l0.colWithGap(8),"",""],children:[(0,y.BX)(c.Z,{css:[l.l0.rowWithGap(8),l.l0.align.center,l.l0.justify.spaceBetween,"",""],children:[(0,y.tZ)(r.x,{variant:"subheadBig",css:j,children:o.title}),(0,y.BX)(c.Z,{css:[l.l0.rowWithGap(8),l.l0.align.center,"",""],children:[x&&b?(0,y.tZ)(m.Vs,{tags:b.tags}):null,w&&!x?(0,y.tZ)(p.Z,{name:w.name,color:w.color||void 0}):null]})]}),(0,y.tZ)(r.x,{maxLines:2,children:o.preview}),b?(0,y.BX)(c.Z,{css:[l.l0.rowWithGap(8),l.l0.align.center,"",""],children:[(0,y.tZ)(u.Z,{size:16,alt:b.title,iconUrl:b.templateInfo.iconUrl}),(0,y.tZ)(r.x,{children:b.templateInfo.label})]}):null,(0,y.tZ)(f.Z,g({},(0,i.i)(o)))]}),null!==(e=o.recentComments)&&void 0!==e&&e.length?(0,y.tZ)(c.Z,{css:[l.l0.p(16),"",""],children:(0,y.tZ)(h.Z,{comments:o.recentComments.map((function(t){return{id:t.id,user:t.user||void 0,body:t.preview,timeCreated:t.timeCreated}}))})}):null]})]}):null}},92169:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(92809),r=(o(67294),o(96622)),a=o(35944);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){(0,n.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t){return(0,a.tZ)(r.Z,l(l({},t),{},{children:(0,a.tZ)("path",{d:"M12 19V5M12 5L5 12M12 5L19 12",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))}}}]);