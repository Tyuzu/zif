(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[573],{30573:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var n,r,l=a(1068),c=a.n(l),s=a(52992),i=a(20530),o=a(26849),p=a(30081),m=a(97647),u=a(81010),Z=a(10891),E=a(71509),f=(a(82526),a(41817),a(77766)),g=a.n(f),d=a(67294),y=a(49140),h=a(74806),b=a(44012),v=a(64593),N=a(61409),P=a(32024),k=a(98346),w=a(50045),T=a(33644),_=a(65730),M=a(51014),R=a(61156),x=a(55087),L=a(25063),O=a(87997),C=a(46790),D=a(56474),Y=a.n(D),B="Gfycat Pro provides you with an ad-free experience, HD default viewing, and directly supports Gfycat. With your support, we can improve benefits for Gfycat Pro members and our free product features as well.",q=a(79905),A=a(9080),S=a(46686);var H=(n=(0,y.connect)((function(e){return{mobile:e.renderConfig.mobile,isPro:(0,R.Os)(e),currentPlan:(0,R.Os)(e)?(0,R.RM)(e):{}}}),{openModal:x.openModal,requestSubscriptionData:L.zd}),(0,h.ZP)(r=n(r=function(e){(0,m.Z)(r,e);var t,a,n=(t=r,a=function(){if("undefined"==typeof Reflect||!c())return!1;if(c().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(c()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,Z.Z)(t);if(a){var r=(0,Z.Z)(this).constructor;e=c()(n,arguments,r)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function r(){var e,t;(0,i.Z)(this,r);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t=n.call.apply(n,g()(e=[this]).call(e,l)),(0,E.Z)((0,p.Z)(t),"handleOptionClick",(function(e){return function(){var a=t.props,n=a.isPro,r=a.currentPlan;n&&r.subscriptionType===e&&!r.endDate?P.Z.getHistoryInstance().push("/settings/pro"):t.props.openModal({modalType:M.K.PRO_PAYMENT_MODAL,modalProps:{subscriptionType:e,switchingPlan:n&&!r.endDate}})}})),t}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestSubscriptionData()}},{key:"render",value:function(){var e,t=this.props,a=t.intl,n=t.isPro,r=t.currentPlan,l=r.subscriptionType,c=r.endDate,i=t.mobile,o=i?"https://thumbs.gfycat.com/SadRightBasil-mobile.jpg":"https://thumbs.gfycat.com/SadRightBasil-poster.jpg",p=i?"https://thumbs.gfycat.com/SadRightBasil-mobile.mp4":"https://giant.gfycat.com/SadRightBasil.mp4",m=d.createElement("video",{className:"top-logo",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,controls:!1,poster:o,src:p}),u=function(e){return e.optionType!==l||c?d.createElement(w.ZP,{className:"start-plan-button",type:w.V5.GRADIENT_BORDER},n&&!c?d.createElement(b.Z,q.Z.switchPlan):d.createElement(b.Z,q.Z.getStartedButtonText)):d.createElement(w.ZP,{className:"current-plan-button",type:w.V5.OUTLINED},d.createElement(b.Z,q.Z.currentPlanButtonText))},Z=d.createElement("div",{className:"subscription-option"},d.createElement("h2",null,d.createElement(b.Z,q.Z.gfycatPro)),d.createElement("div",{className:"subscription-option__price gfycat-text-regular"},d.createElement(b.Z,(0,s.Z)({},q.Z.price,{values:{price:d.createElement("span",{className:"price-value"},"$".concat(O.Z[C.Z.YEARLY]))}}))),d.createElement("div",{className:"subscription-option__billing-period gfycat-text-regular"},d.createElement(b.Z,q.Z.billedYearly)," ",d.createElement("span",{className:"saving-value"},d.createElement(b.Z,q.Z.savingValue))),d.createElement(u,{optionType:C.Z.YEARLY})),E=d.createElement("div",{className:"subscription-option"},d.createElement("h2",null,d.createElement(b.Z,q.Z.gfycatPro)),d.createElement("div",{className:"subscription-option__price gfycat-text-regular"},d.createElement(b.Z,(0,s.Z)({},q.Z.price,{values:{price:d.createElement("span",{className:"price-value"},"$".concat(O.Z[C.Z.MONTHLY]))}}))),d.createElement("div",{className:"subscription-option__billing-period gfycat-text-regular"},d.createElement(b.Z,q.Z.billedMonthly)),d.createElement(u,{optionType:C.Z.MONTHLY}));return d.createElement(T.C,null,d.createElement("div",{className:"subscription-landing-container"},d.createElement(v.Z,(e={title:a.formatMessage(q.Z.gfycatPro)}.title,Y()({title:e,titleTemplate:"%s",meta:[{name:"description",content:B},{name:"twitter:title",content:e},{name:"twitter:description",content:B},{property:"og:description",content:B},{property:"og:title",content:e}]}))),m,d.createElement("h1",{className:"subscription-landing__title"},d.createElement(b.Z,q.Z.gfycatPro)),d.createElement("h3",{className:"subscription-features-list__title"},d.createElement(b.Z,q.Z.featuresListTitle)),d.createElement("p",{className:"subscription-features-list"},d.createElement(b.Z,q.Z.featuresList),d.createElement("br",null),d.createElement(b.Z,q.Z.moreComing)),d.createElement("h2",{className:"subscription-landing__description"},d.createElement(b.Z,q.Z.description)),d.createElement("div",{className:"subscription-options"},d.createElement(k.Z,{link:"signup",onClick:this.handleOptionClick(C.Z.YEARLY)},Z),d.createElement(k.Z,{link:"signup",onClick:this.handleOptionClick(C.Z.MONTHLY)},E)),d.createElement("h2",{className:"faq-section-title"},"FAQ"),d.createElement(_.Z,{title:a.formatMessage(q.Z.question1)},d.createElement("p",{className:"gfycat-text-regular"},d.createElement(b.Z,q.Z.answer1))),d.createElement(_.Z,{title:a.formatMessage(q.Z.question2)},d.createElement("p",{className:"gfycat-text-regular"},d.createElement(b.Z,(0,s.Z)({},q.Z.answer2,{values:{answer2Link:d.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gfycat.com/practicalspiritedgoat-brutal-savage-rekt-paul-chaloner"},d.createElement(b.Z,q.Z.answer2LinkText))}})))),d.createElement(_.Z,{title:a.formatMessage(q.Z.question3)},d.createElement("p",{className:"gfycat-text-regular"},d.createElement(b.Z,(0,s.Z)({},q.Z.answer3,{values:{answer3Link:d.createElement(N.rU,{to:"/settings/preferences"},d.createElement(b.Z,S.Z.preferences))}})))),d.createElement(_.Z,{title:a.formatMessage(q.Z.question4)},d.createElement("p",{className:"gfycat-text-regular"},d.createElement(b.Z,(0,s.Z)({},q.Z.answer4,{values:{answer4Link:d.createElement(N.rU,{className:"question-4-link",to:"/settings/pro"},d.createElement(b.Z,A.Z.settings))}})))),d.createElement("div",{className:"more-help gfycat-text-regular"},d.createElement(b.Z,q.Z.moreHelp)," ",d.createElement(N.rU,{to:"/support"},d.createElement(b.Z,q.Z.contactSupport)))))}}]),r}(d.Component))||r)||r)}}]);