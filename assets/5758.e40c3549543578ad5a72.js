(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[5758],{25758:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>tt});var r=n(86902),a=n.n(r),o=n(14310),i=n.n(o),c=n(20116),l=n.n(c),s=n(34074),u=n.n(s),f=n(78914),h=n.n(f),p=n(39649),d=n.n(p),m=n(20368),v=n.n(m),g=n(63978),y=n.n(g),Z=n(1068),w=n.n(Z),b=n(20530),E=n(26849),k=n(97647),S=n(81010),C=n(10891),N=n(71509),x=(n(45697),n(67294)),H=n(49140),P=n(64593),T=n(81714),I=n(93476),L=n.n(I),O=(n(74916),n(64765),n(63128)),B=n(20277),R=n(70236),G=n(30081),M=n(77766),D=n.n(M),j=n(33959),W=n(66022),F=n(76301);var A,_=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){return(0,b.Z)(this,a),r.call(this,e)}return(0,E.Z)(a,[{key:"render",value:function(){return x.createElement("div",{className:"loader"},x.createElement("svg",{className:"circular",viewBox:"25 25 50 50"},x.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})))}}]),a}(x.Component);function U(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=U(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=U(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var q,V={closeDialog:j.gk,goBackInHashHistory:W.A5},Y=(0,H.connect)((function(e){return z(z({},e.dialog),{},{webpSupported:e.featureDetection.webpSupported})}),V)(A=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(){var e,t;(0,b.Z)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=r.call.apply(r,D()(e=[this]).call(e,o)),(0,N.Z)((0,G.Z)(t),"closeDialogHandler",(function(){var e=t.props,n=e.closeDialog;(0,e.goBackInHashHistory)(),n()})),(0,N.Z)((0,G.Z)(t),"componentWillReceiveProps",(function(e){var n=e.actionCompleted;t.props.actionCompleted!==n&&t.fadeOut()})),(0,N.Z)((0,G.Z)(t),"fadeOut",(function(){document.getElementsByClassName("dialog-container")[0].classList.add("fadeout")})),t}return(0,E.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.content,n=(e.clickHandler,e.opened),r=e.actionHandler,a=e.actionPending,o=e.webpSupported,i=e.actionCompleted,c=t||{},l=c.max1mbGif,s=c.gfyName,u="https://thumbs.gfycat.com/".concat(s,".webp"),f=x.createElement(F.Z,{size:20,color:"#939393",visible:!0}),h=x.createElement(_,null),p=a?null:i?x.createElement("div",{className:"sent"},"Reply sent"):"This Gfycat will be sent to everyone on the email thread",d=a||i?null:x.createElement("div",{className:"buttons"},x.createElement("div",{className:"cancel-button",onClick:this.closeDialogHandler},"Cancel"),x.createElement("div",{className:"send-button",onClick:r},"Send")),m=a?x.createElement("div",{className:"loading-animation"}," ",o?h:f):null;return n?x.createElement("div",{className:"dialog-container ".concat(o?"android":"ios")},x.createElement("div",{className:"overlay",onClick:this.closeDialogHandler}),x.createElement("div",{className:"dialog-content"},x.createElement("img",{className:"dialog-gif",src:o?u:l}),x.createElement("p",{className:"dialog-text"},p),d,m)):null}}]),a}(x.Component))||A,$=(n(23123),n(25843)),J=n.n($),K=n(81643),X=n.n(K),Q=n(2991),ee=n.n(Q),te=(n(69600),n(15306),n(39177));function ne(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=ne(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=ne(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var ae={saveSearchScrollPosition:B.Ld,searchTextUpdate:B.GG,requestCategoriesListIfNeeded:te.$V};const oe=(0,H.connect)((function(e){return re(re(re({},e.owa.categories),e.cache),{},{searchText:e.owa.search.searchText,searchBarText:e.owa.search.searchBarText,webpSupported:e.featureDetection.webpSupported})}),ae)(q=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"filterTagsList",(function(){var e,n=t.props,r=n.searchBarText,a=n.tagsList,o=J()(e=r.toLowerCase()).call(e).split(/ +/).join(" ");return a&&a.length?l()(a).call(a,(function(e){var t;if(!r||-1!=X()(t=e.tagName).call(t,o))return e})):[]})),t}return(0,E.Z)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.props.requestCategoriesListIfNeeded()}},{key:"componentWillUnmount",value:function(){(0,this.props.saveSearchScrollPosition)(0)}},{key:"render",value:function(){var e,t=this.props,n=t.tagsList,r=t.webpSupported,a=t.gifs,o=n&&n.length?ee()(e=this.filterTagsList(n)).call(e,(function(e,t){var n=e.tagName,o=e.gfyId,i=a[o],c=i.gfyName,l=i.max1mbGif,s=i.avgColor,u=n.replace(/\s/g,"-"),f="https://thumbs.gfycat.com/".concat(c,".webp"),h={backgroundImage:"url(".concat(r?f:l,")")},p={backgroundColor:s},d="trending"===u?"":u;return x.createElement("a",{href:"#".concat(d),key:t},x.createElement("div",{className:"reaction-container"},x.createElement("div",{className:"reaction",style:re(re({},h),p)},x.createElement("div",{className:"reaction-name"},n))))})):[];return x.createElement("div",{className:"owa-reactions-container"},o)}}]),a}(x.Component))||q;var ie=n(94198),ce=n.n(ie),le=n(71114),se=n(69417),ue=(n(9653),n(54103)),fe=n.n(ue);function he(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=he(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=he(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var de=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t,n;return(0,b.Z)(this,a),(n=r.call(this,e)).scrollListener=fe()(t=n.scrollListener).call(t,(0,G.Z)(n)),n}return(0,E.Z)(a,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.attachScrollListener(),this.setScrollPosition()}},{key:"componentDidUpdate",value:function(){this.attachScrollListener()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.element,a=t.hasMore,o=(t.initialLoad,t.loader),i=(t.loadMore,t.pageStart,t.threshold,t.useWindow,t.isReverse,t.containerHeight),c=(t.scrollPosition,(0,se.Z)(t,["children","element","hasMore","initialLoad","loader","loadMore","pageStart","threshold","useWindow","isReverse","containerHeight","scrollPosition"]));c.ref=function(t){e.scrollComponent=t};var l=i?pe(pe({},c),{},{style:{height:i}}):c;return x.createElement(r,l,n,a&&(o||this._defaultLoader))}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"setScrollPosition",value:function(){var e=this.props.scrollPosition;null!==e&&window.scrollTo(0,e)}},{key:"scrollListener",value:function(){var e,t=this.scrollComponent,n=window;if(this.props.useWindow){var r=void 0!==n.pageYOffset?n.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;e=this.props.isReverse?r:this.calculateTopPosition(t)+t.offsetHeight-r-window.innerHeight}else e=this.props.isReverse?t.parentNode.scrollTop:t.scrollHeight-t.parentNode.scrollTop-t.parentNode.clientHeight;e<Number(this.props.threshold)&&(this.detachScrollListener(),"function"==typeof this.props.loadMore&&this.props.loadMore(this.pageLoaded+=1))}},{key:"attachScrollListener",value:function(){if(this.props.hasMore){var e=window;0==this.props.useWindow&&(e=this.scrollComponent.parentNode),e.addEventListener("scroll",this.scrollListener),e.addEventListener("resize",this.scrollListener),this.props.initialLoad&&this.scrollListener()}}},{key:"detachScrollListener",value:function(){var e=window;0==this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("scroll",this.scrollListener),e.removeEventListener("resize",this.scrollListener)}},{key:"componentWillUnmount",value:function(){this.detachScrollListener()}},{key:"setDefaultLoader",value:function(e){this._defaultLoader=e}}]),a}(x.Component);(0,N.Z)(de,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,threshold:250,useWindow:!0,isReverse:!1,containerHeight:null,scrollPosition:null});var me=n(33032),ve=n.n(me);function ge(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=ge(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=ge(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var Ze,we=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(){var e,t;(0,b.Z)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=r.call.apply(r,D()(e=[this]).call(e,o)),(0,N.Z)((0,G.Z)(t),"shareEventHandler",(function(){var e=t.props;(0,e.sendEvent)({event:"owa_share",params:{gfyId:e.gfyItem.gfyId,app_id:"outlook_web_addin"}})})),(0,N.Z)((0,G.Z)(t),"getGifHtml",(function(){var e,n=t.props.gfyItem,r=n.max5mbGif,a=n.gfyId;return D()(e="<img src=".concat(r,' /><p>via <a href="https://gfycat.com/')).call(e,a,'" title="Cmd+Click or tap to open a link">Gfycat</a></p>')})),(0,N.Z)((0,G.Z)(t),"dialogActionHandler",(function(){var e=t.getGifHtml(),n=t.props,r=n.itemClickHandler,a=n.dialogActionPending,o=n.dialogActionFinished;a(),r(e).then((function(e){o(),ve()((function(){Office.context.ui.closeContainer()}),2e3)})).catch((function(e){o()}))})),(0,N.Z)((0,G.Z)(t),"clickHandler",(function(){if(t.shareEventHandler(),Office.context.mailbox.item.body.setSelectedDataAsync){var e=t.getGifHtml();Office.context.mailbox.item.body.setSelectedDataAsync(e,{coercionType:Office.CoercionType.Html},(function(e){}))}else{var n=t.props,r=n.openDialogHandler,a=n.gfyItem,o=n.actionPending;r({content:a,actionHandler:t.dialogActionHandler,actionPending:o})}})),t}return(0,E.Z)(a,[{key:"render",value:function(){var e,t,n=this,r=this.props,a=r.webpSupported,o=r.mobileDevice,i=r.gfyItem,c=r.top,l=r.left,s=r.index,u=r.keyword,f=i.gfyName,h=i.width,p=i.height,d=i.max1mbGif,m=i.avgColor,v="https://thumbs.gfycat.com/".concat(f,".webp"),g={backgroundImage:"url(".concat(a?v:d,")")},y={backgroundColor:m},Z={paddingBottom:100/h*p+"%"},w=o&&a?x.createElement("a",{href:"#preview","aria-label":D()(e="Gif result number ".concat(s," for ")).call(e,u)},x.createElement("div",{className:"search-item",style:ye(ye(ye({},g),y),Z),onClick:function(){return n.clickHandler(i)}})):x.createElement("button",{className:"search-item","aria-label":D()(t="Gif result number ".concat(s+1," for ")).call(t,u),style:ye(ye(ye({},g),y),Z),onClick:function(){return n.clickHandler(i)}});return x.createElement("div",{className:"search-item-wrapper",style:{top:c,left:l}},w)}}]),a}(x.Component);function be(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=be(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=be(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var ke,Se={saveSearchScrollPosition:B.Ld,sendEvent:le.qP,openDialog:j.G3,dialogActionPending:j.a7,dialogActionFinished:j.bt,replyAll:R.qU},Ce=(0,H.connect)((function(e){return Ee(Ee(Ee({},e.cache),e.owa.search),{},{webpSupported:e.featureDetection.webpSupported,mobileDevice:e.renderConfig.mobile})}),Se)(Ze=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"itemClickHandler",(function(){})),(0,N.Z)((0,G.Z)(t),"minHeightColumnIndex",(function(){var e;return X()(e=t.columnsHeights).call(e,Math.min.apply(Math,t.columnsHeights))})),(0,N.Z)((0,G.Z)(t),"maxHeightColumnIndex",(function(){var e;return X()(e=t.columnsHeights).call(e,Math.max.apply(Math,t.columnsHeights))})),(0,N.Z)((0,G.Z)(t),"maxColumnHeight",(function(){return Math.max.apply(Math,t.columnsHeights)})),(0,N.Z)((0,G.Z)(t),"resizeHandler",(function(){t.state.containerWidth!==t.container.offsetWidth&&(t.setState(Ee(Ee({},t.state),{},{containerWidth:t.container.offsetWidth})),t.columnsHeights=[0,0])})),(0,N.Z)((0,G.Z)(t),"scrollHandler",(function(){t.scrollPosition=window.scrollY})),t.state={containerWidth:null},t.scrollPosition=t.props.scrollPosition,t.numberOfColumns=2,t.columnsHeights=[0,0],t.padding=2,t}return(0,E.Z)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.keyword!=this.props.keyword&&"undefined"!=typeof window&&window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){this.container=document.getElementById("search-grid-container"),this.setState(Ee(Ee({},this.state),{},{containerWidth:this.container.offsetWidth})),"undefined"!=typeof window&&(window.addEventListener("resize",this.resizeHandler),window.addEventListener("scroll",this.scrollHandler))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.saveSearchScrollPosition;"trending"!==e.keyword&&t(this.scrollPosition),"undefined"!=typeof window&&(window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("scroll",this.scrollHandler))}},{key:"render",value:function(){var e=this,t=this.props,n=t.containerClassName,r=t.gifs,a=t.keyword,o=t.resultsByTerm,i=t.webpSupported,c=t.scrollPosition,l=t.loadMore,s=t.mobileDevice,u=t.sendEvent,f=t.openDialog,h=t.dialogActionPending,p=t.dialogActionFinished,d=t.replyAll,m=this.state.containerWidth,v=o[a]?o[a]:{},g=v.moreRemaining,y=v.items,Z=void 0===y?[]:y,w=v.isEmpty,b=[0,ce()(.5*m,10)];this.columnsHeights=[0,0];var E=m&&Z.length?ee()(Z).call(Z,(function(t,n){var o,c=r[t],l=c.gfyId,v=e.minHeightColumnIndex(),g=e.columnsHeights[v]+"px",y=b[v]+"px",Z=.5*m/c.width*c.height+e.padding;return e.columnsHeights[v]+=Z,x.createElement(we,{webpSupported:i,gfyItem:c,top:g,left:y,itemClickHandler:d,key:D()(o="".concat(n,"-")).call(o,l),sendEvent:u,openDialogHandler:f,dialogActionPending:h,dialogActionFinished:p,mobileDevice:s,index:n,keyword:a})})):null;this.containerHeight=this.maxColumnHeight();var k=i?x.createElement(_,null):x.createElement(F.Z,{visible:!0,size:30,color:"#939393",className:"search-grid-spinner"}),S=E?x.createElement(de,{className:"search-grid-infinite-scroll",pageStart:0,loadMore:l,initialLoad:!1,hasMore:g,threshold:1,containerHeight:this.containerHeight,scrollPosition:c},E):w?null:k,C=w?x.createElement("div",{className:"empty-search"},x.createElement("div",{className:"empty-search-image"}),x.createElement("p",null,"0 Gifs found for ",x.createElement("strong",null,a)),x.createElement("a",{href:"#reactions"},x.createElement("div",{className:"empty-search-button"},"Go to Reactions"))):null;return x.createElement("div",{id:"search-grid-container",className:"search-grid-container ".concat(n)},S,C)}}]),a}(x.Component))||Ze;var Ne,xe={searchCategory:B.Gv,searchIfNeededInitial:B.rm,saveSearchScrollPosition:B.Ld,requestCategoriesListIfNeeded:te.$V},He=(0,H.connect)(null,xe)(ke=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"loadMore",(function(){(0,t.props.searchCategory)({tagName:"trending"})})),t}return(0,E.Z)(a,[{key:"componentWillUnmount",value:function(){this.props.saveSearchScrollPosition(0)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.searchIfNeededInitial,n=e.requestCategoriesListIfNeeded;t("trending"),n()}},{key:"render",value:function(){return x.createElement(Ce,{containerClassName:"trending-container",keyword:"trending",loadMore:this.loadMore})}}]),a}(x.Component))||ke;function Pe(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=Pe(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=Pe(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var Ie={searchGfycat:B.$j,searchIfNeededInitial:B.rm};const Le=(0,H.connect)((function(e){return Te(Te({},e.owa.search),e.owa.hashRouter)}),Ie)(Ne=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"loadMore",(function(){var e=t.props,n=e.searchText;(0,e.searchGfycat)({searchText:n})})),t}return(0,E.Z)(a,[{key:"componentDidMount",value:function(){var e=this.props.hash;this.props.searchIfNeededInitial(e.split("+").join(" "))}},{key:"componentWillReceiveProps",value:function(e){var t=e.hash;this.props.hash!==t&&this.props.searchIfNeededInitial(t.split("+").join(" "))}},{key:"render",value:function(){var e=this.props.searchText;return x.createElement(Ce,{containerClassName:"search-container",keyword:e,loadMore:this.loadMore})}}]),a}(x.Component))||Ne;var Oe;function Be(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=Be(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=Be(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var Ge,Me={closeDialog:j.gk,saveUrlHash:W.wi},De=(0,H.connect)((function(e){return Re(Re({},e.owa.hashRouter),{},{dialogOpened:e.dialog.opened})}),Me)(Oe=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"saveCurrentUrlHash",(function(){var e=t.props,n=e.dialogOpened,r=e.closeDialog,a=e.saveUrlHash,o=(e.prevHash,"");"undefined"!=typeof window&&(o=window.location.hash?window.location.hash.split("#")[1]:""),"preview"!==o&&(n&&r(),a(o))})),(0,N.Z)((0,G.Z)(t),"addEventListener",(function(){"undefined"!=typeof window&&window.addEventListener("hashchange",(function(){t.saveCurrentUrlHash()}))})),(0,N.Z)((0,G.Z)(t),"getCurrentComponent",(function(){var e=t.props.hash,n=null;if(!e)return He;switch(e){case"":n=He;break;case"reactions":n=oe;break;default:n=Le}return n})),t.addEventListener(),t}return(0,E.Z)(a,[{key:"componentWillMount",value:function(){this.saveCurrentUrlHash()}},{key:"render",value:function(){var e=this.getCurrentComponent();return x.createElement(e)}}]),a}(x.Component))||Oe,je=n(94184),We=n.n(je);function Fe(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=Fe(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=Fe(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}var _e={saveSearchBarText:B.Ky,saveSearchScrollPosition:B.Ld},Ue=(0,H.connect)((function(e){return Ae(Ae(Ae({},e.owa.categories),e.owa.search),e.owa.hashRouter)}),_e)(Ge=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(e){var t;return(0,b.Z)(this,a),t=r.call(this,e),(0,N.Z)((0,G.Z)(t),"getSearchTextFromPath",(function(e){var t=e.split("/");return t[t.length-1].split("+").join(" ")})),(0,N.Z)((0,G.Z)(t),"parseSearchText",(function(e){return J()(e).call(e).split(/ +/).join("+")})),(0,N.Z)((0,G.Z)(t),"removeExtraSpaces",(function(e){return J()(e).call(e).split(/ +/).join(" ")})),(0,N.Z)((0,G.Z)(t),"updateSearchInputValue",(function(e){var n=t.props.saveSearchBarText;t.searchInput.value=e,n(e)})),(0,N.Z)((0,G.Z)(t),"handleSubmit",(function(e){e.preventDefault(),t.triggerSearch(t.searchInput.value),t.searchInput.blur()})),(0,N.Z)((0,G.Z)(t),"triggerSearch",(function(e){e=t.parseSearchText(e),window.location.hash=e,(0,t.props.saveSearchScrollPosition)(0)})),(0,N.Z)((0,G.Z)(t),"handleChange",(function(e){clearTimeout(t.searchTimeout);var n=t.props.hash,r=e.target.value;(0,t.props.saveSearchBarText)(r),""===r?t.showReactions():"reactions"===n&&t.isFilteredTags(r)||(t.searchTimeout=ve()((function(){t.triggerSearch(r)}),500))})),(0,N.Z)((0,G.Z)(t),"isFilteredTags",(function(e){e=t.removeExtraSpaces(e);var n=t.props.tagsList,r=e.toLowerCase();return!!(n&&n.length?l()(n).call(n,(function(t){var n;if(!e||-1!=X()(n=t.tagName).call(n,r))return t})):[]).length})),(0,N.Z)((0,G.Z)(t),"showReactions",(function(){window.location.hash="reactions"})),(0,N.Z)((0,G.Z)(t),"clearSearchHandle",(function(){t.updateSearchInputValue(""),window.location.hash=""})),t.searchTimeout=null,t}return(0,E.Z)(a,[{key:"componentDidMount",value:function(){var e=this.props.hash;e&&"reactions"!==e&&!this.searchInput.value&&this.updateSearchInputValue(e)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.tagsDict,n=e.hash;this.props.hash!==n&&(n&&"reactions"!==n?(this.parseSearchText(this.searchInput.value),t[n]&&n!==this.removeExtraSpaces(this.searchInput.value)&&this.updateSearchInputValue(n)):this.updateSearchInputValue(""))}},{key:"shouldComponentUpdate",value:function(e,t){return!!(!e.searchBarText&&this.props.searchBarText||e.searchBarText&&!this.props.searchBarText)}},{key:"render",value:function(){var e=this,t=this.props.searchBarText,n=t?x.createElement("div",{className:"clear-search-button",onClick:this.clearSearchHandle},x.createElement("img",{className:"icon-cross",src:"https://assets.gfycat.com/static/images/icons/ic_cross/ic_cross_grey.png",srcSet:"https://assets.gfycat.com/static/images/icons/ic_cross/ic_cross_grey@2x.png"})):null,r=t?null:x.createElement("span",{className:"placeholder"},"Search Gfycat");return x.createElement("form",{className:"owa-search-form",onSubmit:this.handleSubmit,action:"#",method:"get",target:"_top",noValidate:"",role:"search"},x.createElement("div",{className:"owa-search-bar"},x.createElement("div",{className:"search-input-bg"}),r,x.createElement("input",{"aria-label":"Search input",className:"search-input",name:"searchText",onChange:this.handleChange,autoComplete:"off",autoCapitalize:"off",type:"text",ref:function(t){return e.searchInput=t}}),x.createElement("img",{className:"icon-search",src:"https://assets.gfycat.com/static/images/icons/ic_search/ic_search_grey.png",srcSet:"https://assets.gfycat.com/static/images/icons/ic_search/ic_search_grey@2x.png"}),n),x.createElement("button",{type:"submit",className:"submit-button"}))}}]),a}(x.Component))||Ge;const ze=n.p+"e0629608dc5513e38926f34122417214.png",qe=n.p+"5cb63fe0a52f3cc0eb054445bfcc069e.png",Ve=n.p+"3cc07a8ec3943b24ac8b009dcb9139ca.png",Ye=n.p+"8e8218520b8a8239f48ae4388ad14400.png";var $e=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(){return(0,b.Z)(this,a),r.apply(this,arguments)}return(0,E.Z)(a,[{key:"render",value:function(){var e=this.props.hash;return x.createElement("header",{className:"owa-header-container"},x.createElement(Ue,null),x.createElement("nav",{className:"owa-nav-bar"},x.createElement("a",{href:"#",className:We()({active:""===e}),"aria-label":"Trending"},x.createElement("img",{className:"icon icon-trending",src:ze,srcSet:"".concat(qe," 2x"),alt:""})),x.createElement("a",{href:"#reactions","aria-label":"Reactions",className:"reactions"===e?"active":""},x.createElement("img",{className:"icon icon-reactions",src:Ve,srcSet:"".concat(Ye," 2x"),alt:""}))))}}]),a}(x.Component),Je=n(56474);const Ke=n.n(Je)()({htmlAttributes:{lang:"en"},title:"Gfycat",defaultTitle:"Gfycat",titleTemplate:"%s",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{"http-equiv":"X-UA-Compatible",content:"IE=edge, chrome=1"},{name:"robots",content:"noindex,nofollow"},{name:"googlebot",content:"noindex,nofollow"},{name:"description",content:"Gfycat is your destination for the best and most popular GIFs, videos, viral memes and stickers online. Find and share Funny GIFs, Gaming GIFs, Reactions GIFs, Stickers GIFs, and more. Follow the top GIF creators on the internet on Gfycat."},{name:"author",content:"Gfycat"},{name:"theme-color",content:"#2475FF"}],script:"undefined"==typeof window?[{type:"text/javascript",src:"https://appsforoffice.microsoft.com/lib/1/hosted/Office.js"}]:[]});var Xe;function Qe(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}var et={authenticateSdk:O.oT,requestOutlookToken:R.Py},tt=(0,H.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=Qe(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])}));else if(d())v()(e,d()(r));else{var a;h()(a=Qe(Object(r))).call(a,(function(t){y()(e,t,u()(r,t))}))}}return e}({},e.owa.hashRouter)}),et)(Xe=(0,T.OJ)([{promise:function(e){return e.store.dispatch((function(e,t){return e((0,O.oT)()).then((function(n){var r=t().owa.search.resultsByTerm;return r.hasOwnProperty("trending")&&r.trending.items?L().resolve():e((0,B.rm)("trending"))})).catch((function(e){return L().reject()}))}))}}])(Xe=function(e){(0,k.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!w())return!1;if(w().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(w()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,C.Z)(t);if(n){var a=(0,C.Z)(this).constructor;e=w()(r,arguments,a)}else e=r.apply(this,arguments);return(0,S.Z)(this,e)});function a(){return(0,b.Z)(this,a),r.apply(this,arguments)}return(0,E.Z)(a,[{key:"componentDidMount",value:function(){this.props.authenticateSdk(),this.props.requestOutlookToken()}},{key:"render",value:function(){var e=this.props.hash;return x.createElement("div",{className:"owa-main-container"},x.createElement(P.Z,Ke),x.createElement($e,{hash:e}),x.createElement("div",{className:"owa-component-container"},x.createElement(De,null)),x.createElement(Y,null))}}]),a}(x.Component))||Xe)||Xe}}]);