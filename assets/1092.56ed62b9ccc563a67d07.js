(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[1092],{31238:(e,t,n)=>{e.exports=n(66877)},41901:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$,O:()=>X});var r,o,a,i=n(86902),c=n.n(i),l=n(14310),s=n.n(l),u=n(20116),p=n.n(u),d=n(34074),f=n.n(d),m=n(78914),h=n.n(m),v=n(39649),y=n.n(v),g=n(20368),Z=n.n(g),C=n(63978),k=n.n(C),w=n(1068),b=n.n(w),E=n(20530),P=n(26849),F=n(30081),S=n(97647),R=n(81010),N=n(10891),I=n(71509),G=n(31238),O=n.n(G),x=n(94198),M=n.n(x),_=n(67294),B=(n(45697),n(49140)),T=n(94184),V=n.n(T),A=n(10754),W=n(58709),D=n(9375),L=n(75878),U=n(2260),j=n(64535),Y=n(63100),q=n(46830),z=n(30559),J=n(19758);function Q(e,t){var n=c()(e);if(s()){var r=s()(e);t&&(r=p()(r).call(r,(function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=Q(Object(r),!0)).call(n,(function(t){(0,I.Z)(e,t,r[t])}));else if(y())Z()(e,y()(r));else{var o;h()(o=Q(Object(r))).call(o,(function(t){k()(e,t,f()(r,t))}))}}return e}var K=(0,B.connect)((function(e){return{mobile:e.renderConfig.mobile}}))((a=o=function(e){(0,S.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!b())return!1;if(b().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(b()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,N.Z)(t);if(n){var o=(0,N.Z)(this).constructor;e=b()(r,arguments,o)}else e=r.apply(this,arguments);return(0,R.Z)(this,e)});function o(e){var t;return(0,E.Z)(this,o),t=r.call(this,e),(0,I.Z)((0,F.Z)(t),"handlePlayerClick",(function(){if(t.props.controls&&!t.props.mobile){var e=(0,z.K)(t.props.gfyItem),n="https://gfycat.com/".concat(e);window.open(n,"_blank")}t.props.mobile&&t.state.muted&&t.handleShareOpen()})),(0,I.Z)((0,F.Z)(t),"handleShareOpen",(function(){t.setState({shareOpened:!0}),t.video&&t.video.pause()})),(0,I.Z)((0,F.Z)(t),"handleShareClose",(function(){t.setState({shareOpened:!1}),t.video&&t.video.play()})),(0,I.Z)((0,F.Z)(t),"handlePlayerStateChange",(function(e){var n=e.controlsVisible;t.state.userVisible!==n&&t.setState({userVisible:n})})),(0,I.Z)((0,F.Z)(t),"getRef",(function(e){t.video=e;var n=t.props.getRef;n&&n(e),t.video&&t.initEmbedlyReceiver()})),(0,I.Z)((0,F.Z)(t),"handleWindowMessage",(function(e){var n=e.data;if(n)switch(n){case"play":t.video&&t.video.play();break;case"pause":t.video&&t.video.pause()}})),(0,I.Z)((0,F.Z)(t),"handleSoundControlClick",(function(e,n){var r=n.muted;t.video.muted=r,t.setState({muted:r})})),(0,I.Z)((0,F.Z)(t),"initEmbedlyReceiver",(function(){"undefined"!=typeof playerjs&&(t.receiver=new playerjs.Receiver,t.receiver.on("play",(function(){t.video.play(),t.receiver.emit("play")})),t.receiver.on("pause",(function(){t.video.pause(),t.receiver.emit("pause")})),t.receiver.on("getCurrentTime",(function(e){return e(t.video.currentTime)})),t.receiver.on("setCurrentTime",(function(e){t.video.currentTime=e})),t.receiver.on("getPaused",(function(e){return e(t.video.paused)})),t.receiver.on("getDuration",(function(e){return e(t.video.duration)})),t.receiver.on("getVolume",(function(e){return e(100*t.video.volume)})),t.receiver.on("setVolume",(function(e){return t.video.volume=e/100})),t.receiver.on("mute",(function(){return t.video.mute=!0})),t.receiver.on("unmute",(function(){return t.video.mute=!1})),t.receiver.on("getMuted",(function(e){return e(t.video.mute)})),t.receiver.on("getLoop",(function(e){return e(t.video.loop)})),t.receiver.on("setLoop",(function(e){return t.video.loop=e})),t.video.addEventListener("ended",(function(){return t.receiver.emit("ended")})),t.video.addEventListener("timeupdate",(function(){t.receiver.emit("timeupdate",{seconds:t.video.currentTime,duration:t.video.duration})})),t.receiver.ready())})),(0,I.Z)((0,F.Z)(t),"user",(function(){var e=t.props,n=e.controls,r=e.gfyItem,o=t.state.userVisible,a=r.published,i=r.userData;return i&&n&&M()(a,10)?_.createElement("div",{key:"iframe-top",className:V()("iframe-top",{visible:o})},_.createElement(j.Z,{user:i,target:"_blank"})):null})),t.state={muted:!0,userVisible:t.props.controls,shareOpened:!1},t}return(0,P.Z)(o,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleWindowMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleWindowMessage)}},{key:"render",value:function(){var e=this,t=this.state,n=t.muted,r=t.shareOpened,o=this.props,a=o.autoPlay,i=o.backgroundColor,c=o.context,l=o.controls,s=o.forceVideo,u=o.gfyItem,p=o.hd,d=o.logo,f=o.loop,m=o.mobile,h=o.playbackRate,v=u.gfyId,y=u.hasAudio&&m?n?_.createElement(U.Z,{gfyId:v,onClick:this.handleSoundControlClick}):_.createElement(A.Z,{className:V()("ic ic-send",{low:!(0,q.Dt)()}),svg:J.Z,onClick:this.handleShareOpen}):null,g=(0,Y.Z)(u)?D.zb:D.nk,Z=!s&&u.hasTransparency?m?_.createElement(D.Ee,{backgroundColor:i||"transparent",gfyItem:u,onClick:this.handlePlayerClick}):_.createElement(W.A,{context:c,backgroundColor:i||"transparent",gfyItem:u,controls:l,fullscreenElement:this.iframeContainer,onStateChange:this.handlePlayerStateChange,onClick:this.handlePlayerClick}):m?_.createElement(g,{highQuality:p,loop:f,backgroundColor:i||"#000000",getRef:this.getRef,gfyItem:u,controls:!n,onClick:this.handlePlayerClick}):_.createElement(W.Y,{autoPlay:a,backgroundColor:i||"#000000",context:c,controls:l,fullscreenElement:this.iframeContainer,getRef:this.getRef,gfyItem:u,hd:p,loop:f,logo:d,onClick:this.handlePlayerClick,onStateChange:this.handlePlayerStateChange,show360:!0,playbackRate:h}),C=m?r?_.createElement(L.Z,{context:c,gfyItem:u,onCloseButtonClick:this.handleShareClose}):null:this.user();return _.createElement("div",{className:"iframe-player-container",onClick:this.handleClick,ref:function(t){return e.iframeContainer=t}},Z,C,y)}}]),o}(_.Component),(0,I.Z)(o,"defaultProps",{autoPlay:!0,controls:!0,forceVideo:!1,hd:!1,logo:!0,loop:!0,playbackRate:1}),r=a))||r,X=function(e){var t="0"!==e.autoplay;return H(H(H(H(H({},void 0!==e.autoplay&&{autoPlay:t}),void 0!==e.controls&&t&&{controls:"0"!==e.controls,userVisible:"0"!==e.controls}),void 0!==e.speed&&!isNaN(O()(e.speed))&&{playbackRate:O()(e.speed)}),void 0!==e.loops&&!isNaN(M()(e.loops,10))&&{loops:M()(e.loops,10)}),void 0!==e.hd&&1===M()(e.hd,10)&&{hd:!0})};const $=K},11092:(e,t,n)=>{"use strict";n.r(t),n.d(t,{NUMBER_OF_ITEMS_PER_REQUEST:()=>x,default:()=>M});var r,o,a,i=n(1068),c=n.n(i),l=n(69417),s=n(20530),u=n(26849),p=n(97647),d=n(81010),f=n(10891),m=n(67294),h=n(49140),v=n(64593),y=n(30081),g=n(71509),Z=n(2991),C=n.n(Z),k=n(77766),w=n.n(k),b=(n(45697),n(41901)),E=n(40642),P=n(20518),F=n(61156);var S=(0,h.connect)((function(e,t){var n=t.tagName,r=(0,F.nJ)(e,n),o=r.hasMore,a=r.items;return{hasMore:o,items:C()(a).call(a,(function(t){return(0,F.rg)(e,t)}))}}),{continueTagSearch:P.Y})((a=o=function(e){(0,p.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!c())return!1;if(c().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(c()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,f.Z)(t);if(n){var o=(0,f.Z)(this).constructor;e=c()(r,arguments,o)}else e=r.apply(this,arguments);return(0,d.Z)(this,e)});function o(){var e,t;(0,s.Z)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=r.call.apply(r,w()(e=[this]).call(e,a)),(0,g.Z)((0,y.Z)(t),"loadMore",(function(){var e=t.props.count;t.props.continueTagSearch({tagName:t.props.tagName,count:e})})),t}return(0,u.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.hasMore,n=e.items,r=e.loops,o=e.playerProps;return m.createElement("div",{className:"iframe-tag-player"},n.length?m.createElement(E.Z,{context:"serial_iframe",hasMore:t,items:n,loadMore:this.loadMore,loops:r,playerComponent:b.Z,playerProps:o}):null)}}]),o}(m.Component),(0,g.Z)(o,"defaultProps",{count:30}),(0,g.Z)(o,"fetchInitialData",(function(e,t){return e.dispatch((0,P.p)(t))})),r=a))||r,R=n(6111),N=n(56474),I=n.n(N),G=n(65589);var O;var x=30,M=(0,h.connect)((function(e,t){var n=t.params,r=(0,F.nJ)(e,n.tagName).items;return{firstGif:r&&r.length?(0,F.rg)(e,r[0]):{},tagName:n.tagName}}))(O=(0,R.Z)("pageview_iframe",{params:{type:"tag"},fromProps:{keyword:"tagName"}})(O=function(e){(0,p.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!c())return!1;if(c().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(c()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,f.Z)(t);if(n){var o=(0,f.Z)(this).constructor;e=c()(r,arguments,o)}else e=r.apply(this,arguments);return(0,d.Z)(this,e)});function o(e){var t;(0,s.Z)(this,o);var n=(t=r.call(this,e)).props.location.query,a=(0,b.O)(n),i=a.loops,c=(0,l.Z)(a,["loops"]);return t.state={playerProps:c,loops:i},t}return(0,u.Z)(o,[{key:"render",value:function(){var e=this.state,t=e.loops,n=e.playerProps,r=this.props,o=r.firstGif,a=r.tagName;return m.createElement("div",{className:"iframe-tag-container"},m.createElement(v.Z,function(e){var t,n=e.firstGif,r=e.keyword,o=n.frameRate,a=n.max5mbGif,i=n.mobileUrl,c=n.mobilePosterUrl,l=n.numFrames,s="https://gfycat.com/ifr/search/".concat(r),u="".concat(r," GIFs | Find & Make GIFs on Gfycat"),p="See more ".concat(r," GIFs! Create and share your own GIFs, amazing moments and funny reactions with Gfycat"),d=640,f=360,m=(0,G.g9)({frameRate:o,numFrames:l});return I()({htmlAttributes:{lang:"en"},title:u,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{"http-equiv":"X-UA-Compatible",content:"IE=edge, chrome=1"},{name:"robots",content:"index"},{name:"description",content:w()(t="Search results for ".concat(r," GIFs. Create and share your own ")).call(t,r," GIFs, with Gfycat")},{name:"keywords",content:(0,G.Hw)({tags:[r]})},{name:"author",content:"Gfycat"},{name:"msvalidate.01",content:"2B4FF0FE01F14713C7AAC3BC41F0F777"},{name:"google-site-verification",content:"O3hEECEwrFnDhE5a1aBk2Flh3WT3cnb0PYeWWSsNfwE"},{property:"fb:app_id",content:958688167485836},{name:"p:domain_verify",content:"7e04e49a14f815cd10e520cb44c7c451"},{name:"twitter:card",content:"player"},{name:"twitter:site",content:"@Gfycat"},{name:"twitter:title",content:u},{name:"twitter:description",content:p},{name:"twitter:url",content:s},{name:"twitter:image",content:a},{name:"twitter:image:src",content:a},{name:"twitter:player",content:s},{name:"twitter:player:width",content:d},{name:"twitter:player:height",content:f},{property:"og:type",content:"video"},{property:"og:url",content:a},{property:"og:title",content:u},{property:"og:description",content:p},{property:"og:image",content:a},{property:"og:image:width",content:d},{property:"og:image:height",content:f},{property:"og:image:secure_url",content:a},{property:"og:image",content:c},{property:"og:image:width",content:d},{property:"og:image:height",content:f},{property:"og:video",content:i},{property:"og:video:secure_url",content:i},{property:"og:video:type",content:"video/mp4"},{property:"og:video:width",content:f},{property:"og:video:height",content:d},{property:"og:video:duration",content:m},{property:"og:video:iframe",content:s}],script:[]})}({firstGif:o,keyword:a})),m.createElement(S,{count:x,loops:t,playerProps:n,tagName:a}))}}]),o}(m.Component))||O)||O},7579:(e,t,n)=>{n(49718);var r=n(54058);e.exports=r.parseFloat},81942:(e,t,n)=>{var r=n(21899),o=n(74853).trim,a=n(73483),i=r.parseFloat,c=1/i(a+"-0")!=-1/0;e.exports=c?function(e){var t=o(String(e)),n=i(t);return 0===n&&"-"==t.charAt(0)?-0:n}:i},49718:(e,t,n)=>{var r=n(76887),o=n(81942);r({global:!0,forced:parseFloat!=o},{parseFloat:o})},66877:(e,t,n)=>{var r=n(7579);e.exports=r}}]);