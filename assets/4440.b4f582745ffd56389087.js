(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[4440],{75120:(e,t,n)=>{"use strict";n.d(t,{Wi:()=>x,lB:()=>j});var i=n(1068),r=n.n(i),a=n(14310),o=n.n(a),s=n(20116),l=n.n(s),u=n(34074),c=n.n(u),f=n(39649),d=n.n(f),T=n(20368),p=n.n(T),S=n(63978),E=n.n(S),g=n(52992),I=n(69417),P=n(20530),_=n(26849),h=n(30081),N=n(97647),v=n(81010),m=n(10891),y=n(71509),C=(n(68309),n(51942)),G=n.n(C),b=n(78914),O=n.n(b),M=n(86902),R=n.n(M),Z=n(67294),A=(n(45697),n(18446)),L=n.n(A),F=n(41609),w=n.n(F);function B(e,t){var n=R()(e);if(o()){var i=o()(e);t&&(i=l()(i).call(i,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,i)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n,i=null!=arguments[t]?arguments[t]:{};if(t%2)O()(n=B(Object(i),!0)).call(n,(function(t){(0,y.Z)(e,t,i[t])}));else if(d())p()(e,d()(i));else{var r;O()(r=B(Object(i))).call(r,(function(t){E()(e,t,c()(i,t))}))}}return e}var U=function(e){(0,N.Z)(a,e);var t,n,i=(t=a,n=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,m.Z)(t);if(n){var a=(0,m.Z)(this).constructor;e=r()(i,arguments,a)}else e=i.apply(this,arguments);return(0,v.Z)(this,e)});function a(e){var t;return(0,P.Z)(this,a),t=i.call(this,e),(0,y.Z)((0,h.Z)(t),"getInitState",(function(){var e=t.props.data;return{data:G()({},e),originalData:e,touched:{},serverErrors:{},browserValidity:{}}})),(0,y.Z)((0,h.Z)(t),"bootstrap",(function(){t.setState(t.getInitState())})),(0,y.Z)((0,h.Z)(t),"onChange",(function(e){var n=e.target,i=n.name,r=n.type,a=n.value,o=n.checked,s=n.validity;t.setState({data:Y(Y({},t.state.data),{},(0,y.Z)({},i,"checkbox"===r?o:a)),touched:Y(Y({},t.state.touched),{},(0,y.Z)({},i,!0)),serverErrors:Y(Y({},t.state.serverErrors),{},(0,y.Z)({},i,void 0)),browserValidity:Y(Y({},t.state.browserValidity),{},(0,y.Z)({},i,s))})})),(0,y.Z)((0,h.Z)(t),"onSubmit",(function(e){e.preventDefault();var n=t.state,i=n.data,r=n.originalData,a={};for(var o in i)i[o]!==r[o]&&(a[o]=i[o]);t.props.onSubmit(t.state.data,a).then((function(){t.props.unmountsOnSubmit||t.bootstrap()}),(function(e){t.setState({serverErrors:e})}))})),(0,y.Z)((0,h.Z)(t),"isDirty",(function(){return!L()(t.state.data,t.state.originalData)})),t.state=t.getInitState(),t}return(0,_.Z)(a,[{key:"render",value:function(){var e,t,n=this.props,i=(n.data,n.onSubmit,n.unmountsOnSubmit,n.buttons,n.validate),r=n.children,a=(0,I.Z)(n,["data","onSubmit","unmountsOnSubmit","buttons","validate","children"]),o=this.state,s=o.data,l=o.touched,u=o.serverErrors,c=o.browserValidity,f=i?i(this.state.data,c):{},d=w()(f)&&this.isDirty();return O()(e=R()(f)).call(e,(function(e){l[e]||delete f[e]})),O()(t=R()(u)).call(t,(function(e){u[e]&&(f[e]=u[e])})),Z.createElement("form",(0,g.Z)({},a,{onChange:this.onChange}),r({data:s,errors:f,canSave:d,onSubmit:this.onSubmit}))}}]),a}(Z.Component),k=n(15094);var x=function(e){(0,N.Z)(a,e);var t,n,i=(t=a,n=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,m.Z)(t);if(n){var a=(0,m.Z)(this).constructor;e=r()(i,arguments,a)}else e=i.apply(this,arguments);return(0,v.Z)(this,e)});function a(){return(0,P.Z)(this,a),i.apply(this,arguments)}return(0,_.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.children,i=e.error,r=(0,I.Z)(e,["name","children","error"]);return Z.createElement(k.ZP,(0,g.Z)({},r,{name:t,label:n,error:{value:Boolean(i),message:i},fullWidth:!0,onChange:function(){}}))}}]),a}(Z.Component),V=n(44012),D=n(50045),H=n(3999);function W(e,t){var n=R()(e);if(o()){var i=o()(e);t&&(i=l()(i).call(i,(function(t){return c()(e,t).enumerable}))),n.push.apply(n,i)}return n}var j=function(e){(0,N.Z)(a,e);var t,n,i=(t=a,n=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,m.Z)(t);if(n){var a=(0,m.Z)(this).constructor;e=r()(i,arguments,a)}else e=i.apply(this,arguments);return(0,v.Z)(this,e)});function a(){return(0,P.Z)(this,a),i.apply(this,arguments)}return(0,_.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.isSaving,n=e.children,i=(0,I.Z)(e,["isSaving","children"]);return Z.createElement(U,i,(function(e){var i=e.canSave,r=e.onSubmit,a=(0,I.Z)(e,["canSave","onSubmit"]);return Z.createElement(Z.Fragment,null,n(function(e){for(var t=1;t<arguments.length;t++){var n,i=null!=arguments[t]?arguments[t]:{};if(t%2)O()(n=W(Object(i),!0)).call(n,(function(t){(0,y.Z)(e,t,i[t])}));else if(d())p()(e,d()(i));else{var r;O()(r=W(Object(i))).call(r,(function(t){E()(e,t,c()(i,t))}))}}return e}({},a)),Z.createElement(D.ZP,{className:"settings-form__save-button",onClick:r,disabled:!i,pending:t,type:D.V5.FILLED},Z.createElement(V.Z,H.Z.saveChanges)))}))}}]),a}(Z.Component)},48195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(50049).vU)({accountPageTitle:{id:"SETTINGS.ACCOUNT_SETTINGS_PAGE_TITLE",defaultMessage:"Account Settings",description:"Account settings page title"},accountFormTitle:{id:"SETTINGS.ACCOUNT_FORM_TITLE",defaultMessage:"Account Settings",description:"Account form title"},emailInputHint:{id:"SETTINGS.EMAIL_INPUT_HINT",defaultMessage:"Email will not be publicly displayed.",description:"Email input hint text"},indexSettingsTitle:{id:"SETTINGS.INDEX_PAGE_TITLE",defaultMessage:"Settings",description:"Settings page title"},notificationSettingsTitle:{id:"SETTINGS.NOTIFICATION_SETTINS_PAGE_TITLE",defaultMessage:"Notification Settings",description:"Notification settings page title"},passwordFormTitle:{id:"SETTINGS.PASSWORD_FORM_TITLE",defaultMessage:"Change Password",description:"Password form title"},passwordSettingsTitle:{id:"SETTINGS.PASSWORD_SETTINGS_PAGE_TITLE",defaultMessage:"Password Settings",description:"Password settings page title"},profileInfoFormTitle:{id:"SETTINGS.PROFILE_INFO_FORM_TITLE",defaultMessage:"About you",description:"Profile info form title"},profileSettingsTitle:{id:"SETTINGS.PROFILE_SETTINGS_PAGE_TITLE",defaultMessage:"Profile Settings",description:"Profile settings page title"},profilePictureInputHint:{id:"SETTINGS.PROFILE_PICTURE_INPUT_HINT",defaultMessage:"Square .png or .jpg images under 200KB work best",description:"Profile picture input hint"},profilePictureInputLabel:{id:"SETTINGS.PROFILE_PICTURE_INPUT_LABEL",defaultMessage:"Profile Picture",description:"Profile picture input label"},unknownError:{id:"SETTINGS.ERROR_OCCURED",defaultMessage:"An error has occured",description:"Validation error: Some other error occurred."},uploadNewImageButtonText:{id:"SETTINGS.UPLOAD_NEW_IMAGE",defaultMessage:"Upload new image",description:"Upload new image button text"},gfycatProTitle:{id:"SETTINGS.GFYCAT_PRO_PAGE_TITLE",defaultMessage:"Gfycat Pro",description:"Gfycat pro settings page titlte"},gfycatProSeeOtherPlansButton:{id:"SETTINGS.GFYCAT_PRO_SEE_OTHER_PLANS_BUTTON",defaultMessage:"See other plans",description:"See other plans button text"},gfycatProCancelPlanButton:{id:"SETTINGS.GFYCAT_PRO_CANCEL_PLAN_BUTTON",defaultMessage:"Cancel plan",description:"Cancel plan button text"},gfycatProSubscribeButton:{id:"SETTINGS.GFYCAT_PRO_SUBSCRIBE_BUTTON",defaultMessage:"Subscribe",description:"Subscribe button text"},gfycatProPriceYearly:{id:"SETTINGS.GFYCAT_PRO_YEARLY_PRICE",defaultMessage:"Price: ${fullPrice} {perMonth}",description:""},gfycatProYearlyValuePerMonth:{id:"SETTINGS.GFYCAT_PRO_PRICE_YEARLY_PER_MONTH",defaultMessage:"(${value} / Month)",description:"Monthly value with yearly subscription"},gfycatProPriceMonthly:{id:"SETTINGS.GFYCAT_PRO_MONTHLY_PRICE",defaultMessage:"Price: ${value}",description:"Monthly subscription price"},gfycatProCancelConfirmationTitle:{id:"SETTINGS.GFYCAT_PRO_CANCEL_CONFIRMATION_TITLE",defaultMessage:"Cancel Current Plan",description:"Subscription cancel confirmation title"},gfycatProCancelConfirmationText:{id:"SETTINGS.GFYCAT_PRO_CANCEL_CONFIRMATION_TEXT",defaultMessage:"Are you sure you want to cancel your Gfycat Pro subscription? Your Pro benefits will remain valid until {date}.",description:"Subscription cancel confirmation text"},socialLinksFormTitle:{id:"SETTINGS.SOCIAL_LINKS_FORM_TITLE",defaultMessage:"Social links",description:"Social links form title"},viewingPreferencesFormTitle:{id:"SETTINGS.VIEWING_PREFERENCES_FORM_TITLE",defaultMessage:"Viewing preferences",description:"Viewing preferences form title"},gfycatProSettingsMetaTitle:{id:"SETTINGS.GFYCAT_PRO_SETTINGS_META_TITLE",defaultMessage:"Gfycat Pro Settings",description:"Gfycat Pro settings page meta title"},viewingPreferencesMetaTitle:{id:"SETTINGS.VIEWING_PREFERENCES_META_TITLE",defaultMessage:"Viewing Preferences",description:"Viewing preferences settings page meta title"}})}}]);