(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[9526],{31238:(e,t,n)=>{e.exports=n(66877)},41901:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$,O:()=>J});var o,r,i,a=n(86902),c=n.n(a),l=n(14310),s=n.n(l),u=n(20116),p=n.n(u),d=n(34074),m=n.n(d),f=n(78914),v=n.n(f),h=n(39649),y=n.n(h),g=n(20368),C=n.n(g),b=n(63978),k=n.n(b),Z=n(1068),w=n.n(Z),E=n(20530),x=n(26849),P=n(30081),F=n(97647),I=n(81010),R=n(10891),S=n(71509),O=n(31238),T=n.n(O),M=n(94198),G=n.n(M),N=n(67294),V=(n(45697),n(49140)),_=n(94184),B=n.n(_),A=n(10754),W=n(58709),L=n(9375),U=n(75878),D=n(2260),j=n(64535),q=n(63100),z=n(46830),Y=n(30559),H=n(19758);function K(e,t){var n=c()(e);if(s()){var o=s()(e);t&&(o=p()(o).call(o,(function(t){return m()(e,t).enumerable}))),n.push.apply(n,o)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n,o=null!=arguments[t]?arguments[t]:{};if(t%2)v()(n=K(Object(o),!0)).call(n,(function(t){(0,S.Z)(e,t,o[t])}));else if(y())C()(e,y()(o));else{var r;v()(r=K(Object(o))).call(r,(function(t){k()(e,t,m()(o,t))}))}}return e}var X=(0,V.connect)((function(e){return{mobile:e.renderConfig.mobile}}))((i=r=function(e){(0,F.Z)(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,R.Z)(t);if(n){var r=(0,R.Z)(this).constructor;e=w()(o,arguments,r)}else e=o.apply(this,arguments);return(0,I.Z)(this,e)});function r(e){var t;return(0,E.Z)(this,r),t=o.call(this,e),(0,S.Z)((0,P.Z)(t),"handlePlayerClick",(function(){if(t.props.controls&&!t.props.mobile){var e=(0,Y.K)(t.props.gfyItem),n="https://gfycat.com/".concat(e);window.open(n,"_blank")}t.props.mobile&&t.state.muted&&t.handleShareOpen()})),(0,S.Z)((0,P.Z)(t),"handleShareOpen",(function(){t.setState({shareOpened:!0}),t.video&&t.video.pause()})),(0,S.Z)((0,P.Z)(t),"handleShareClose",(function(){t.setState({shareOpened:!1}),t.video&&t.video.play()})),(0,S.Z)((0,P.Z)(t),"handlePlayerStateChange",(function(e){var n=e.controlsVisible;t.state.userVisible!==n&&t.setState({userVisible:n})})),(0,S.Z)((0,P.Z)(t),"getRef",(function(e){t.video=e;var n=t.props.getRef;n&&n(e),t.video&&t.initEmbedlyReceiver()})),(0,S.Z)((0,P.Z)(t),"handleWindowMessage",(function(e){var n=e.data;if(n)switch(n){case"play":t.video&&t.video.play();break;case"pause":t.video&&t.video.pause()}})),(0,S.Z)((0,P.Z)(t),"handleSoundControlClick",(function(e,n){var o=n.muted;t.video.muted=o,t.setState({muted:o})})),(0,S.Z)((0,P.Z)(t),"initEmbedlyReceiver",(function(){"undefined"!=typeof playerjs&&(t.receiver=new playerjs.Receiver,t.receiver.on("play",(function(){t.video.play(),t.receiver.emit("play")})),t.receiver.on("pause",(function(){t.video.pause(),t.receiver.emit("pause")})),t.receiver.on("getCurrentTime",(function(e){return e(t.video.currentTime)})),t.receiver.on("setCurrentTime",(function(e){t.video.currentTime=e})),t.receiver.on("getPaused",(function(e){return e(t.video.paused)})),t.receiver.on("getDuration",(function(e){return e(t.video.duration)})),t.receiver.on("getVolume",(function(e){return e(100*t.video.volume)})),t.receiver.on("setVolume",(function(e){return t.video.volume=e/100})),t.receiver.on("mute",(function(){return t.video.mute=!0})),t.receiver.on("unmute",(function(){return t.video.mute=!1})),t.receiver.on("getMuted",(function(e){return e(t.video.mute)})),t.receiver.on("getLoop",(function(e){return e(t.video.loop)})),t.receiver.on("setLoop",(function(e){return t.video.loop=e})),t.video.addEventListener("ended",(function(){return t.receiver.emit("ended")})),t.video.addEventListener("timeupdate",(function(){t.receiver.emit("timeupdate",{seconds:t.video.currentTime,duration:t.video.duration})})),t.receiver.ready())})),(0,S.Z)((0,P.Z)(t),"user",(function(){var e=t.props,n=e.controls,o=e.gfyItem,r=t.state.userVisible,i=o.published,a=o.userData;return a&&n&&G()(i,10)?N.createElement("div",{key:"iframe-top",className:B()("iframe-top",{visible:r})},N.createElement(j.Z,{user:a,target:"_blank"})):null})),t.state={muted:!0,userVisible:t.props.controls,shareOpened:!1},t}return(0,x.Z)(r,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleWindowMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleWindowMessage)}},{key:"render",value:function(){var e=this,t=this.state,n=t.muted,o=t.shareOpened,r=this.props,i=r.autoPlay,a=r.backgroundColor,c=r.context,l=r.controls,s=r.forceVideo,u=r.gfyItem,p=r.hd,d=r.logo,m=r.loop,f=r.mobile,v=r.playbackRate,h=u.gfyId,y=u.hasAudio&&f?n?N.createElement(D.Z,{gfyId:h,onClick:this.handleSoundControlClick}):N.createElement(A.Z,{className:B()("ic ic-send",{low:!(0,z.Dt)()}),svg:H.Z,onClick:this.handleShareOpen}):null,g=(0,q.Z)(u)?L.zb:L.nk,C=!s&&u.hasTransparency?f?N.createElement(L.Ee,{backgroundColor:a||"transparent",gfyItem:u,onClick:this.handlePlayerClick}):N.createElement(W.A,{context:c,backgroundColor:a||"transparent",gfyItem:u,controls:l,fullscreenElement:this.iframeContainer,onStateChange:this.handlePlayerStateChange,onClick:this.handlePlayerClick}):f?N.createElement(g,{highQuality:p,loop:m,backgroundColor:a||"#000000",getRef:this.getRef,gfyItem:u,controls:!n,onClick:this.handlePlayerClick}):N.createElement(W.Y,{autoPlay:i,backgroundColor:a||"#000000",context:c,controls:l,fullscreenElement:this.iframeContainer,getRef:this.getRef,gfyItem:u,hd:p,loop:m,logo:d,onClick:this.handlePlayerClick,onStateChange:this.handlePlayerStateChange,show360:!0,playbackRate:v}),b=f?o?N.createElement(U.Z,{context:c,gfyItem:u,onCloseButtonClick:this.handleShareClose}):null:this.user();return N.createElement("div",{className:"iframe-player-container",onClick:this.handleClick,ref:function(t){return e.iframeContainer=t}},C,b,y)}}]),r}(N.Component),(0,S.Z)(r,"defaultProps",{autoPlay:!0,controls:!0,forceVideo:!1,hd:!1,logo:!0,loop:!0,playbackRate:1}),o=i))||o,J=function(e){var t="0"!==e.autoplay;return Q(Q(Q(Q(Q({},void 0!==e.autoplay&&{autoPlay:t}),void 0!==e.controls&&t&&{controls:"0"!==e.controls,userVisible:"0"!==e.controls}),void 0!==e.speed&&!isNaN(T()(e.speed))&&{playbackRate:T()(e.speed)}),void 0!==e.loops&&!isNaN(G()(e.loops,10))&&{loops:G()(e.loops,10)}),void 0!==e.hd&&1===G()(e.hd,10)&&{hd:!0})};const $=X},89526:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var o=n(69417),r=n(20530),i=n(26849),a=n(30081),c=n(97647),l=n(81010),s=n(10891),u=n(71509),p=n(2991),d=n.n(p),m=n(1068),f=n.n(m),v=n(67294),h=n(49140),y=n(64593),g=n(41901),C=n(40642),b=n(6111),k=n(33422),Z=n(32662),w=n(61156),E=n(77766),x=n.n(E),P=n(56474),F=n.n(P),I=n(65589);var R;var S=(0,h.connect)((function(e,t){var n,o=t.params,r=o.collectionId,i=o.linkText,a=o.userid,c=(0,Z._N)(e,r).feed;return{items:d()(n=c.items).call(n,(function(t){return(0,w.rg)(e,t)})),hasMore:c.hasMore,userid:a,linkText:i,collectionId:r}}),{continueUserCollectionGifs:k.ix})(R=(0,b.Z)("pageview_iframe",{fromProps:{albumId:"collectionId",linkText:"linkText",userid:"userid"},params:{type:"album"}})(R=function(e){(0,c.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!f())return!1;if(f().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(f()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=f()(o,arguments,r)}else e=o.apply(this,arguments);return(0,l.Z)(this,e)});function d(e){var t;(0,r.Z)(this,d),t=p.call(this,e),(0,u.Z)((0,a.Z)(t),"loadMore",(function(){var e=t.props,n=e.collectionId,o=e.userid;t.props.continueUserCollectionGifs({collectionId:n,userid:o})}));var n=t.props.location.query,i=(0,g.O)(n),c=i.loops,l=(0,o.Z)(i,["loops"]);return t.state={playerProps:l,loops:c},t}return(0,i.Z)(d,[{key:"render",value:function(){var e=this.state,t=e.loops,n=e.playerProps,o=this.props,r=o.hasMore,i=o.items,a=this.props.params,c=a.userid,l=a.linkText,s=i&&i.length?i[0]:{};return v.createElement("div",{className:"iframe-album-container"},v.createElement(y.Z,function(e){var t,n,o=e.firstGif,r=e.userid,i=e.linkText,a=o.frameRate,c=o.max5mbGif,l=o.mobileUrl,s=o.mobilePosterUrl,u=o.numFrames,p=o.tags,d=x()(t="https://gfycat.com/ifr/@".concat(r,"/")).call(t,i),m=x()(n="GIF album '".concat(i,"' by @")).call(n,r," | Find & Make GIFs on Gfycat"),f="See more GIFs by @".concat(r,". Create and share your own GIFs, amazing moments and funny reactions with Gfycat"),v=640,h=360,y=(0,I.g9)({frameRate:a,numFrames:u});return F()({htmlAttributes:{lang:"en"},title:m,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{"http-equiv":"X-UA-Compatible",content:"IE=edge, chrome=1"},{name:"robots",content:"index"},{name:"description",content:f},{name:"keywords",content:(0,I.Hw)({tags:p})},{name:"author",content:"@".concat(r)},{name:"msvalidate.01",content:"2B4FF0FE01F14713C7AAC3BC41F0F777"},{name:"google-site-verification",content:"O3hEECEwrFnDhE5a1aBk2Flh3WT3cnb0PYeWWSsNfwE"},{property:"fb:app_id",content:958688167485836},{name:"p:domain_verify",content:"7e04e49a14f815cd10e520cb44c7c451"},{name:"twitter:card",content:"player"},{name:"twitter:site",content:"@Gfycat"},{name:"twitter:title",content:m},{name:"twitter:description",content:f},{name:"twitter:url",content:d},{name:"twitter:image",content:c},{name:"twitter:image:src",content:c},{name:"twitter:player",content:d},{name:"twitter:player:width",content:v},{name:"twitter:player:height",content:h},{property:"og:type",content:"video"},{property:"og:url",content:c},{property:"og:title",content:m},{property:"og:description",content:f},{property:"og:image",content:c},{property:"og:image:width",content:v},{property:"og:image:height",content:h},{property:"og:image:secure_url",content:c},{property:"og:image",content:s},{property:"og:image:width",content:v},{property:"og:image:height",content:h},{property:"og:video",content:l},{property:"og:video:secure_url",content:l},{property:"og:video:type",content:"video/mp4"},{property:"og:video:width",content:h},{property:"og:video:height",content:v},{property:"og:video:duration",content:y},{property:"og:video:iframe",content:d}],link:[{rel:"canonical",href:d}],script:[]})}({firstGif:s,userid:c,linkText:l})),i&&i.length?v.createElement(C.Z,{context:"serial_iframe",hasMore:r,items:i,loadMore:this.loadMore,loops:t,playerComponent:g.Z,playerProps:n}):null)}}]),d}(v.Component))||R)||R},7579:(e,t,n)=>{n(49718);var o=n(54058);e.exports=o.parseFloat},81942:(e,t,n)=>{var o=n(21899),r=n(74853).trim,i=n(73483),a=o.parseFloat,c=1/a(i+"-0")!=-1/0;e.exports=c?function(e){var t=r(String(e)),n=a(t);return 0===n&&"-"==t.charAt(0)?-0:n}:a},49718:(e,t,n)=>{var o=n(76887),r=n(81942);o({global:!0,forced:parseFloat!=r},{parseFloat:r})},66877:(e,t,n)=>{var o=n(7579);e.exports=o}}]);