(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[3276],{13276:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r,a,l=n(86902),c=n.n(l),s=n(14310),o=n.n(s),i=n(20116),u=n.n(i),f=n(34074),g=n.n(f),h=n(78914),d=n.n(h),v=n(39649),m=n.n(v),p=n(20368),y=n.n(p),Z=n(63978),E=n.n(Z),k=n(1068),b=n.n(k),C=n(20530),S=n(26849),N=n(30081),T=n(97647),w=n(81010),x=n(10891),B=n(71509),O=n(3649),z=n.n(O),I=n(2991),P=n.n(I),M=n(67294),R=n(49140),j=n(74510),q=n(51611),F=n(10196),D=n(71840);function G(e,t){var n=c()(e);if(o()){var r=o()(e);t&&(r=u()(r).call(r,(function(t){return g()(e,t).enumerable}))),n.push.apply(n,r)}return n}n(41038);var L=(r=(0,R.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)d()(n=G(Object(r),!0)).call(n,(function(t){(0,B.Z)(e,t,r[t])}));else if(m())y()(e,m()(r));else{var a;d()(a=G(Object(r))).call(a,(function(t){E()(e,t,g()(r,t))}))}}return e}({cache:e.cache},e.stickersReview.reviewed)}),{requestStickers:q.Uz}),(0,j.Z)(a=r(a=function(e){(0,T.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!b())return!1;if(b().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(b()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,x.Z)(t);if(n){var a=(0,x.Z)(this).constructor;e=b()(r,arguments,a)}else e=r.apply(this,arguments);return(0,w.Z)(this,e)});function a(e){var t;return(0,C.Z)(this,a),t=r.call(this,e),(0,B.Z)((0,N.Z)(t),"handleNext",(function(){t.setState({page:t.state.page+1}),window.scrollTo(0,0),t.props.requestStickers({count:25,reviewed:!0})})),t.state={page:0},t}return(0,S.Z)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.requestStickers({count:25,reviewed:!0}).catch((function(t){e.setState({unauthorized:!0})})).then((function(t){e.props.requestStickers({count:25,reviewed:!0})}))}},{key:"render",value:function(){var e=this.props,t=e.cache,n=e.count,r=e.gfycats,a=void 0===r?[]:r,l=this.state,c=l.page,s=l.unauthorized,o=Math.min(n,25),i=z()(a).call(a,c*o,(c+1)*o),u=i?P()(i).call(i,(function(e,n){var r=t.gifs[e]||{};return[M.createElement(D.Z,{gfyItem:r,key:e}),M.createElement("hr",{key:"".concat(e,"-hr")})]})):null;return M.createElement(F.Z,{buttonNext:!0,onButtonClick:this.handleNext,unauthorized:s},u)}}]),a}(M.Component))||a)||a)},71840:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var r=n(1068),a=n.n(r),l=n(86902),c=n.n(l),s=n(14310),o=n.n(s),i=n(20116),u=n.n(i),f=n(34074),g=n.n(f),h=n(78914),d=n.n(h),v=n(39649),m=n.n(v),p=n(20368),y=n.n(p),Z=n(63978),E=n.n(Z),k=n(20530),b=n(26849),C=n(30081),S=n(97647),N=n(81010),T=n(10891),w=n(71509),x=n(54103),B=n.n(x),O=n(67294),z=(n(45697),n(8391)),I=n(15094);function P(e,t){var n=c()(e);if(o()){var r=o()(e);t&&(r=u()(r).call(r,(function(t){return g()(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)d()(n=P(Object(r),!0)).call(n,(function(t){(0,w.Z)(e,t,r[t])}));else if(m())y()(e,m()(r));else{var a;d()(a=P(Object(r))).call(a,(function(t){E()(e,t,g()(r,t))}))}}return e}var R="Tags can't be empty",j="Server error, please try again or refresh the page",q=function(e){(0,S.Z)(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,T.Z)(t);if(n){var l=(0,T.Z)(this).constructor;e=a()(r,arguments,l)}else e=r.apply(this,arguments);return(0,N.Z)(this,e)});function l(e){var t;return(0,k.Z)(this,l),t=r.call(this,e),(0,w.Z)((0,C.Z)(t),"handleTitleChange",(function(e,n){var r={gfyId:e,title:n},a=""===n;t.setState({title:n,error:M(M({},t.state.error),{},{title:{value:a,message:a?"Title can't be empty":""}})},(function(){a||z.Z.updateMetadata([r]).catch((function(e){t.setState({error:M(M({},t.state.error),{},{title:{value:!0,message:"Server error, please try again or refresh the page"}})}),console.log("err")}))}))})),(0,w.Z)((0,C.Z)(t),"handlePrimaryTagsChange",(function(e,n){var r={gfyId:e,tags:n},a=!n||!n.length;t.setState({tags:n,error:M(M({},t.state.error),{},{tags:{value:a,message:a?R:""}})},(function(){a||z.Z.updateMetadata([r]).catch((function(e){t.setState({error:M(M({},t.state.error),{},{tags:{value:!0,message:j}})}),console.log("err")}))}))})),(0,w.Z)((0,C.Z)(t),"handleSecondaryTagsChange",(function(e,n){var r={gfyId:e,tags2:n},a=!n||!n.length;t.setState({tags2:n,error:M(M({},t.state.error),{},{tags2:{value:a,message:a?R:""}})},(function(){a||z.Z.updateMetadata([r]).catch((function(e){t.setState({error:M(M({},t.state.error),{},{tags2:{value:!0,message:j}})}),console.log("err")}))}))})),t.state={error:{tags:{},tags2:{},title:{}}},t}return(0,b.Z)(l,[{key:"render",value:function(){var e,t,n,r=this.props.gfyItem,a=r.gfyId,l=r.max1mbGif,c=this.state,s=c.error,o=c.tags,i=c.tags2,u=c.title,f=void 0!==u?u:r.title,g=void 0!==o?o:r.tags,h=void 0!==i?i:r.tags2;return O.createElement("div",{className:"stickers-tagging-item"},O.createElement("div",{className:"image-frame"},O.createElement("img",{src:l,alt:""})),O.createElement("div",{className:"edit"},O.createElement("div",{className:"input-label"},"Title"),O.createElement(I.Gl,{error:s.title,title:f,onChange:B()(e=this.handleTitleChange).call(e,null,a)}),O.createElement("div",{className:"input-label"},"Primary Tags"),O.createElement(I.B7,{addOnBlur:!0,error:s.tags,tags:g,onChange:B()(t=this.handlePrimaryTagsChange).call(t,null,a)}),O.createElement("div",{className:"input-label"},"Secondary Tags"),O.createElement(I.B7,{addOnBlur:!0,error:s.tags2,tags:h,onChange:B()(n=this.handleSecondaryTagsChange).call(n,null,a)})))}}]),l}(O.Component)},10196:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(67294),a=(n(45697),n(23353)),l=n.n(a),c=n(64593),s=n(50045),o=n(33644),i=n(56474);const u=n.n(i)()({meta:[{name:"robots",content:"noindex, nofollow"}]}),f=function(e){var t=e.buttonNext,n=e.children,a=e.onButtonClick,i=e.unauthorized,f=t?r.createElement(s.ZP,{className:"button-next",type:s.V5.FILLED,onClick:a},"Next"):null;return r.createElement(l(),{className:"stickers-tagging-page"},r.createElement(o.C,null,r.createElement("div",{className:"stickers-tagging-container"},r.createElement(c.Z,u),i?r.createElement("div",{className:"unauthorized"},"Unauthorized"):r.createElement(r.Fragment,null,n,f))))}},41038:()=>{}}]);