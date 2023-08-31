(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[1725],{81725:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(1068),i=n.n(r),a=n(20530),s=n(26849),c=n(30081),l=n(97647),o=n(81010),u=n(10891),f=n(71509),p=n(77766),d=n.n(p),h=n(67294),g=n(49140),m=n(74806),v=n(44012),E=n(61409),w=n(64593),y=n(50045),Z=n(75120),N=n(48195),S=n(61156),_=n(94870),P=n(99811),b=n(93476),k=n.n(b),T=n(8391),O=n(63392),U=n(56474),I=n.n(U),C=n(63963);n(26496);var R,D,L,A=n(6111);const F=(R=(0,g.connect)((function(e){return{isFeatureAvailable:(0,S.Os)(e)||(0,S.B1)(e),isPro:(0,S.Os)(e),viewingPreference:(0,S.UM)(e),setting:(0,S.qh)(e)}}),{showToastNotification:_.I,updateViewingPreference:function(e){return function(t,n){var r=e?"1":"0";return(0,S.UM)(n()).isSaving?k().resolve():(t({type:O.lz,value:r,isSaving:!0}),T.Z.updateViewingPreference(r).then((function(e){return t({type:O.LO,value:r,isSaving:!1}),k().resolve()}),(function(e){var n=e.errorMessage;return t({type:O.q,errorMessage:n,isSaving:!1}),k().reject()})))}}}),D=(0,A.Z)("settings_pageview",{params:{context:"preferences"}}),R(L=(0,m.ZP)(L=D(L=function(e){(0,l.Z)(p,e);var t,n,r=(t=p,n=function(){if("undefined"==typeof Reflect||!i())return!1;if(i().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(i()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=i()(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function p(){var e,t;(0,a.Z)(this,p);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=r.call.apply(r,d()(e=[this]).call(e,i)),(0,f.Z)((0,c.Z)(t),"state",{hd:t.props.viewingPreference}),(0,f.Z)((0,c.Z)(t),"onQualityChange",(function(e){})),(0,f.Z)((0,c.Z)(t),"handleSubmit",(function(){return t.props.updateViewingPreference(t.state.hd).then((function(){}),(function(){t.props.showToastNotification({toastType:P.N.ERROR})}))})),(0,f.Z)((0,c.Z)(t),"handleClick",(function(e){return function(n){e!==t.state.hd?t.setState({hd:e}):n.preventDefault()}})),t}return(0,s.Z)(p,[{key:"componentDidUpdate",value:function(e){var t=this.props.viewingPreference;t!==this.state.hd&&t!==e.viewingPreference&&this.setState({hd:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.isFeatureAvailable,r=t.setting.isSaving,i=t.intl,a=this.state.hd,s=h.createElement("div",{className:"unlock-hint-text gfycat-text-hint"},h.createElement(v.Z,{id:"SETTINGS.UPGRADE_TO_PRO_TEXT",defaultMessage:"{upgradeLink} to unlock this feature",description:"Upgrade text",values:{upgradeLink:h.createElement(E.rU,{to:"/pro"},h.createElement(v.Z,{id:"SETTINGS.UPGRADE_TO_PRO_LINK",defaultMessage:"Upgrade to Gfycat Pro",description:"Upgrade link text"}))}}));return h.createElement("div",{className:"viewing-preferences-settings"},h.createElement(Z.lB,{className:"settings-form viewing-preferences-form",data:{},onSubmit:this.handleSubmit,isSaving:r},(function(t){return t.data,t.errors,h.createElement(h.Fragment,null,h.createElement(w.Z,function(e){var t=e.title;return I()({title:t,meta:[{name:"twitter:title",content:(0,C._r)(t)},{property:"og:url",content:"https://gfycat.com/settings/preferences"},{property:"og:title",content:(0,C._r)(t)}]})}({title:i.formatMessage(N.Z.viewingPreferencesMetaTitle)})),h.createElement("h2",{className:"settings-section__title"},h.createElement(v.Z,N.Z.viewingPreferencesFormTitle)),h.createElement("div",{className:"video-quality-switch"},h.createElement("div",{className:"switch-buttons-container full-width"},h.createElement("label",{className:"gfycat-text-regular"},h.createElement(v.Z,{id:"VIDEO_QUALITY.SWITCH_LABEL",defaultMessage:"Video player quality",description:"Video quality switch label"})),h.createElement(y.ZP,{className:"switch-button noselect",onClick:e.handleClick(!0),type:a?y.V5.SQUARE_ICON_FILLED:y.V5.SQUARE_ICON_OUTLINED,disabled:!n},n?h.createElement("label",{htmlFor:"viewing-preference-input"},"HD"):"HD"),h.createElement(y.ZP,{className:"switch-button noselect",onClick:e.handleClick(!1),type:a?y.V5.SQUARE_ICON_OUTLINED:y.V5.SQUARE_ICON_FILLED,disabled:!n},n?h.createElement("label",{htmlFor:"viewing-preference-input"},"SD"):"SD"),h.createElement("input",{id:"viewing-preference-input",className:"viewing-preference-input",type:"checkbox",name:"hd"})),n?null:s))})))}}]),p}(h.Component))||L)||L)||L)}}]);