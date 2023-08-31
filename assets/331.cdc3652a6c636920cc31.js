(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[331],{5693:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(1068),r=n.n(o),a=n(20530),s=n(26849),i=n(30081),c=n(97647),l=n(81010),d=n(10891),u=n(71509),f=n(67294);n(45697);var p=function(e){(0,c.Z)(p,e);var t,n,o=(t=p,n=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,d.Z)(t);if(n){var a=(0,d.Z)(this).constructor;e=r()(o,arguments,a)}else e=o.apply(this,arguments);return(0,l.Z)(this,e)});function p(e){var t;return(0,a.Z)(this,p),t=o.call(this,e),(0,u.Z)((0,i.Z)(t),"handleClick",(function(){t.setState({on:!t.state.on}),t.props.onClick&&t.props.onClick({value:!t.state.on})})),(0,u.Z)((0,i.Z)(t),"handleChange",(function(){t.props.onChange&&t.props.onChange({value:t.state.on})})),t.state={on:!0===t.props.on},t}return(0,s.Z)(p,[{key:"componentDidUpdate",value:function(e){e.on!==this.props.on&&this.props.on!==this.state.on&&this.setState({on:this.props.on})}},{key:"render",value:function(){var e=this.state.on,t=this.props.disabled;return f.createElement("div",{className:"switch"},f.createElement("input",{type:"checkbox",checked:e,onClick:this.handleClick,onChange:this.handleChange,disabled:t}),f.createElement("div",{className:"switch__track"}))}}]),p}(f.Component);(0,u.Z)(p,"defaultProps",{on:!1,disabled:!1});const h=p},20331:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var o,r=n(1068),a=n.n(r),s=n(20530),i=n(26849),c=n(30081),l=n(97647),d=n(81010),u=n(10891),f=n(71509),p=n(78914),h=n.n(p),y=n(54103),E=n.n(y),k=n(2991),g=n.n(k),m=n(67294),C=n(44012),v=n(64593),S=n(61409),Z=n(43011),O=n(56474),T=n.n(O),M=n(77766),N=n.n(M),I=n(63963),_="Cookies Settings";const b=T()({title:_,meta:N()(o=[]).call(o,I.FM,[{name:"twitter:title",content:(0,I._r)(_)},{property:"og:url",content:"https://gfycat.com/privacy/cookie-settings"},{property:"og:title",content:(0,I._r)(_)}])});var B=n(5693);const H=(0,n(50049).vU)({weUseCookies:{id:"COOKIE_SETTINGS.WE_USE_COOKIES",defaultMessage:"We use these cookies",description:"We use these cookies shared string"},preferencesHeader:{id:"COOKIE_SETTINGS.PERFERENCES_HEADER",defaultMessage:"Preferences",description:"Preferences Header"},preferencesBody:{id:"COOKIE_SETTINGS.PERFERENCES_BODY",defaultMessage:"to remember your preferences and improve your experience on our website.",description:"Preferences Body"},performanceHeader:{id:"COOKIE_SETTINGS.PERFORMANCE_HEADER",defaultMessage:"Performance & Analytics",description:"Performance & Analytics Header"},performanceBody:{id:"COOKIE_SETTINGS.PERFORMANCE_BODY",defaultMessage:"to collect information about how you use our site, monitor site performance, and improve our site performance and your experience.",description:"Preferences Body"},marketingHeader:{id:"COOKIE_SETTINGS.MARKETING_HEADER",defaultMessage:"Marketing",description:"Marketing Header"},marketingBody:{id:"COOKIE_SETTINGS.MARKETING_BODY",defaultMessage:"to deliver relevant advertising and measure the effectiveness of our advertising campaigns. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites.",description:"Preferences Body"},necessaryHeader:{id:"COOKIE_SETTINGS.NECESSARY_HEADER",defaultMessage:"Necessary",description:"Necessary Header"},necessaryBody:{id:"COOKIE_SETTINGS.NECESSARY_BODY",defaultMessage:"to help operate the site. Because these cookies are necessary, you can’t turn them off.",description:"Necessary Body"}});var R,P,D,G=n(63867),K=n(67090),A=n(49140);var w="necessary",F="performance",U="marketing",Y="preferences",x=(R=(0,Z.Z)(),P=(0,A.connect)((function(e){return{cookies:(0,G.$1)(e)}}),{updateCookies:K.Sn}),(0,S.EN)(D=R(D=P(D=function(e){(0,l.Z)(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=a()(o,arguments,r)}else e=o.apply(this,arguments);return(0,d.Z)(this,e)});function r(e){var t,n;return(0,s.Z)(this,r),n=o.call(this,e),(0,f.Z)((0,c.Z)(n),"cookieStates",(function(e){var t=n.props,o=t.cookies,r=t.updateCookies,a=[Y,F,U];h()(a).call(a,(function(t){var a=o[t];null!==a?n.setState((0,f.Z)({},t,!0===a)):(n.setState((0,f.Z)({},t,e)),r((0,f.Z)({},t,e)))}))})),(0,f.Z)((0,c.Z)(n),"setEUCookieStates",(function(){n.cookieStates(!1)})),(0,f.Z)((0,c.Z)(n),"setDefaultCookieStates",(function(){n.cookieStates(!0)})),(0,f.Z)((0,c.Z)(n),"handleToggleCookie",(function(e,t){var o=n.props,r=o.cookies,a=o.updateCookies;n.setState((0,f.Z)({},e,!n.state[e]),(function(){a((0,f.Z)({},e,n.state[e]))})),null===r.accepted&&a({accepted:!1}),!1===r.ccpa&&a({ccpa:!0})})),n.state=(0,f.Z)({},w,!0),n.handleToggleCookie=E()(t=n.handleToggleCookie).call(t,(0,c.Z)(n)),n}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.setEUCookieStates()}},{key:"render",value:function(){var e=this,t=this.props.intl,n=[{key:w,toggleDisabled:!0,header:t.formatMessage(H.necessaryHeader),body:t.formatMessage(H.necessaryBody),linkHash:"#Necessary"},{key:Y,header:t.formatMessage(H.preferencesHeader),body:t.formatMessage(H.preferencesBody),linkHash:"#Preferences"},{key:F,header:t.formatMessage(H.performanceHeader),body:t.formatMessage(H.performanceBody),linkHash:"#Performance"},{key:U,header:t.formatMessage(H.marketingHeader),body:t.formatMessage(H.marketingBody),linkHash:"#Marketing"}],o=g()(n).call(n,(function(t,n){return m.createElement("section",{key:n},m.createElement("hr",null),m.createElement("div",{className:"section-headline"},m.createElement("h2",null,t.header),m.createElement(B.Z,{on:e.state[t.key],onClick:function(n){return e.handleToggleCookie(t.key,n)},disabled:t.toggleDisabled})),m.createElement("div",null,m.createElement("a",{href:"/privacy/cookie-information".concat(t.linkHash),target:"_blank",rel:"noreferrer noopener"},m.createElement(C.Z,H.weUseCookies))," ",t.body))}));return m.createElement("article",{className:"cookie-settings-container container"},m.createElement(v.Z,b),m.createElement("h1",null,"  ",m.createElement(C.Z,{id:"COOKIE_SETTINGS.TITLE",defaultMessage:"Gfycat.com Cookie Settings",description:"Cookie Settings Title"})),m.createElement("p",null,m.createElement(C.Z,{id:"COOKIE_SETTINGS.BODY",defaultMessage:"In addition to managing cookies through your browser or device, you can change your cookie settings below. Please note that certain cookies are necessary to run our site and can’t be blocked using these settings.",description:"Cookie Settings Body"})),o)}}]),r}(m.Component))||D)||D)||D)}}]);