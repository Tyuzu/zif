(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[5228],{45228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ie});var r=n(1068),a=n.n(r),c=n(86902),i=n.n(c),s=n(14310),l=n.n(s),o=n(34074),u=n.n(o),m=n(78914),d=n.n(m),f=n(39649),h=n.n(f),p=n(20368),k=n.n(p),v=n(63978),g=n.n(v),S=n(20530),Z=n(26849),y=n(30081),E=n(97647),I=n(81010),w=n(10891),x=n(71509),C=n(77766),N=n.n(C),b=n(3649),T=n.n(b),R=n(20116),D=n.n(R),z=n(2991),O=n.n(z),F=n(93476),P=n.n(F),L=n(94198),U=n.n(L),q=n(67294),_=n(23353),j=n.n(_),B=n(49140),V=n(8391),A=n(64593),G=n(74510),J=n(51611),M=n(18411),H=n(50045),K=n(33644),Q=n(65589),W=n(56474);const X=n.n(W)()({meta:[{name:"robots",content:"noindex, nofollow"}]});var Y,$,ee,te;function ne(e,t){var n=i()(e);if(l()){var r=l()(e);t&&(r=D()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)d()(n=ne(Object(r),!0)).call(n,(function(t){(0,x.Z)(e,t,r[t])}));else if(h())k()(e,h()(r));else{var a;d()(a=ne(Object(r))).call(a,(function(t){g()(e,t,u()(r,t))}))}}return e}function ae(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,w.Z)(e);if(t){var c=(0,w.Z)(this).constructor;n=a()(r,arguments,c)}else n=r.apply(this,arguments);return(0,I.Z)(this,n)}}var ce=25,ie=(Y=(0,B.connect)((function(e){return{cache:e.cache,unreviewedStickers:e.stickersReview.unreviewed,stickerSearch:e.stickerSearch}}),{beginStickerSearch:M.S,continueStickerSearch:M.z,requestStickers:J.Uz}),(0,G.Z)($=Y((te=ee=function(e){(0,E.Z)(n,e);var t=ae(n);function n(e){var r;return(0,S.Z)(this,n),r=t.call(this,e),(0,x.Z)((0,y.Z)(r),"getNumberOfItems",(function(){var e=r.state.firstItemIndex,t=r.getItems(),n=0;return t.length?n=e+ce<=t.length?ce:t.length-e:n})),(0,x.Z)((0,y.Z)(r),"getItems",(function(){var e=r.props.stickerSearch,t=r.state.searchText;return t&&e[t]?e[t].items||[]:r.props.unreviewedStickers.gfycats||[]})),(0,x.Z)((0,y.Z)(r),"currentStickers",(function(){var e=r.state.firstItemIndex,t=r.getItems(),n=r.getNumberOfItems();return T()(t).call(t,e,e+n)})),(0,x.Z)((0,y.Z)(r),"loadInitialData",(function(){var e=r.props,t=e.beginStickerSearch,n=e.continueStickerSearch,a=e.requestStickers,c=r.state.searchText;c?t({searchText:c,count:ce}).then((function(){n({searchText:c,count:ce})}),(function(e){return function(){console.log("err",e),r.setState({unauthorized:!0})}})):a({count:ce}).then((function(){a({count:ce})}),(function(e){return function(){r.setState({unauthorized:!0})}}))})),(0,x.Z)((0,y.Z)(r),"markStickers",(function(){var e=r.state.marked,t=r.currentStickers(),n=D()(t).call(t,(function(t){return e[t]})),a=O()(n).call(n,(function(t){var n="nsfw"===e[t].review;return re(re({gfyId:t},n&&{nsfw:1}),!n&&{review:e[t].review})}));return a&&a.length?V.Z.reviewStickers(a):P().resolve()})),(0,x.Z)((0,y.Z)(r),"handleReload",(function(){window.location.reload()})),(0,x.Z)((0,y.Z)(r),"handleSave",(function(){r.setState({error:!1}),r.markStickers().then((function(e){r.setState({firstItemIndex:r.state.firstItemIndex+r.getNumberOfItems()}),r.state.searchText?r.props.continueStickerSearch({searchText:r.state.searchText,count:ce}):r.props.requestStickers({count:ce})})).catch((function(e){console.log("err",e),r.setState({error:!0})}))})),(0,x.Z)((0,y.Z)(r),"handleRankingClick",(function(e){var t=e.event,n=e.curated,a=e.gfyId,c=t.target.value,i=r.state.marked,s="nsfw"===c?"nsfw":U()(c,10);void 0===i[a]&&n===U()(c,10)||i[a]&&i[a].review===s?(t.target.checked=!1,r.setState({marked:re(re({},i),{},(0,x.Z)({},a,null))})):r.setState({marked:re(re({},i),{},(0,x.Z)({},a,{review:s}))})})),r.state=re(re({},n.initialState),r.props.params.searchText&&{searchText:n._parseSearchText(r.props.params.searchText)}),r}return(0,Z.Z)(n,[{key:"componentDidMount",value:function(){this.loadInitialData()}},{key:"componentDidUpdate",value:function(e,t){t.searchText!==this.state.searchText&&this.loadInitialData()}},{key:"render",value:function(){var e=this,t=this.props.cache,n=this.state,r=n.error,a=n.unauthorized,c=this.getItems(),i=this.currentStickers(),s=c?O()(i).call(i,(function(n,r){var a,c=t.gifs[n];return q.createElement("div",{className:"sticker noselect",key:N()(a="".concat(n,"-")).call(a,r)},q.createElement("div",{className:"image-frame"},q.createElement("img",{src:c.max1mbGif,alt:""})),q.createElement(se,{curated:c.curated,gfyId:n,key:n,onClick:e.handleRankingClick}))})):null,l=r?q.createElement("div",{className:"error",key:"error"},"Server error, please try again"):null,o=r?q.createElement(H.ZP,{className:"button-reload",type:H.V5.FILLED,onClick:this.handleReload},"Reload"):q.createElement(H.ZP,{className:"button-next",type:H.V5.FILLED,onClick:this.handleSave},"Next");return q.createElement(j(),{className:"stickers-review-page"},q.createElement(K.C,null,q.createElement("div",{className:"stickers-review-container"},q.createElement(A.Z,X),a?q.createElement("span",{className:"unauthorized"},"Unauthorized"):[s,o,l])))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.params.searchText?n._parseSearchText(e.params.searchText):null;return t.searchText!==r?re(re({},n.initialState),{},{searchText:r}):null}}]),n}(q.Component),(0,x.Z)(ee,"initialState",{firstItemIndex:0,marked:{}}),(0,x.Z)(ee,"_parseSearchText",(function(e){return(0,Q.PJ)(e)})),$=te))||$)||$),se=function(e){(0,E.Z)(n,e);var t=ae(n);function n(){var e,r;(0,S.Z)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=t.call.apply(t,N()(e=[this]).call(e,c)),(0,x.Z)((0,y.Z)(r),"handleClick",(function(e){r.props.onClick({event:e,curated:r.props.curated,gfyId:r.props.gfyId})})),r}return(0,Z.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return e.gfyId!==this.props.gfyId}},{key:"render",value:function(){var e=this.props,t=e.curated,n=e.gfyId;return q.createElement("form",{className:"ranking-form"},q.createElement("div",{className:"ranking-form-input-wrapper"},q.createElement("input",{type:"radio",name:n,value:3,onClick:this.handleClick,defaultChecked:3===t}),q.createElement("div",{className:"ranking-button"},"3")),q.createElement("div",{className:"ranking-form-input-wrapper"},q.createElement("input",{type:"radio",name:n,value:2,defaultChecked:2===t,onClick:this.handleClick}),q.createElement("div",{className:"ranking-button"},"2")),q.createElement("div",{className:"ranking-form-input-wrapper"},q.createElement("input",{type:"radio",name:n,value:1,defaultChecked:1===t,onClick:this.handleClick}),q.createElement("div",{className:"ranking-button"},"1")),q.createElement("div",{className:"ranking-form-input-wrapper"},q.createElement("input",{type:"radio",name:n,value:0,defaultChecked:0===t,onClick:this.handleClick}),q.createElement("div",{className:"ranking-button"},"0")),q.createElement("div",{className:"ranking-form-input-wrapper"},q.createElement("input",{type:"radio",name:n,value:"nsfw",onClick:this.handleClick}),q.createElement("div",{className:"ranking-button"},"nsfw")))}}]),n}(q.Component)}}]);