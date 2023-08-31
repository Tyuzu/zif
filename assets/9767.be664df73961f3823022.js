(self.webpackChunkFrontendReact=self.webpackChunkFrontendReact||[]).push([[9767],{77595:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(1068),o=n.n(r),a=n(20530),i=n(26849),l=n(30081),s=n(97647),c=n(81010),u=n(10891),d=n(71509),f=n(77766),m=n.n(f),p=n(2991),E=n.n(p),g=n(3649),v=n.n(g),T=n(94198),M=n.n(T),h=n(67294),I=(n(45697),n(49140)),O=n(61156),_=n(52266),y=n(6285),L=n(20594),Z=(n(68309),n(44012)),w=n(61409),F=n(71114),N=n(73611),S=n(60817),b=n(78117),k=n(40152),C=n(42974),G=n(17146),R=n(7994);const A=(0,I.connect)((function(e,t){var n=t.userid;return{user:(0,O.M_)(e,n).data}}),{sendEvent:F.qP})((function(e){var t=e.user,n=t.name,r=t.username,o=t.userid,a=t.verified,i=t.profileImageUrl,l=t.recentViews,s=t.subscription,c=e.sendEvent,u=(0,h.useState)(!1),d=(0,L.Z)(u,2),f=d[0],m=d[1],p=h.createElement("div",{className:"leaderboard-row"},h.createElement(w.rU,{className:"leaderboard-profile-image",to:"/@".concat(r),onClick:function(){return c({event:"leaderboard_profile_click",params:{username:r}})}},f?h.createElement(S.Z,{url:i,small:!0}):null),h.createElement("div",{className:"leaderboard-user-details"},h.createElement("div",{className:"leaderboard-name-row"},h.createElement(w.rU,{className:"leaderboard-name",to:"/@".concat(r),onClick:function(){return c({event:"leaderboard_profile_click",params:{username:r}})}},n||r),a?h.createElement(b.Z,{small:!0}):null,(0,R.Z)(s)?h.createElement(C.Z,{small:!0}):null),h.createElement(k.Z,{className:"leaderboard-views-row",value:l,format:!1},h.createElement(Z.Z,{id:"LEADERBOARD.VIEWS_LAST_WEEK",values:{views:l},defaultMessage:"{views, plural, one {view} other {views}} last week",description:"Views this user's gifs received last week."}))),h.createElement(N.Z,{userid:o,size:"small"}));return f?p:h.createElement(G.Z,{onChange:function(e){var t=e.visible;t&&!f&&m(t)}},p)}));var P,D,H;const B=(0,I.connect)((function(e){return{leaderboard:(0,O.Zp)(e)}}),{continueLeaderboard:_.p})((H=D=function(e){(0,s.Z)(f,e);var t,n,r=(t=f,n=function(){if("undefined"==typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(o()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=o()(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(){var e,t;(0,a.Z)(this,f);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=r.call.apply(r,m()(e=[this]).call(e,o)),(0,d.Z)((0,l.Z)(t),"loadMore",(function(){t.props.continueLeaderboard({count:t.props.count})})),t}return(0,i.Z)(f,[{key:"render",value:function(){var e,t,n=this.props,r=n.leaderboard,o=n.loadAll,a=n.numberOfShown;if(!r.isReady)return null;var i=a||r.items.lenght,l=E()(e=v()(t=r.items).call(t,0,i)).call(e,(function(e,t){var n=h.createElement(A,{userid:e,key:"creator-list-item-".concat(t)});return o?{item:n,id:"creator-list-item-".concat(e)}:n})),s=M()(.7*this.props.count,10);return h.createElement("div",{className:"leaderboard-list"},o?h.createElement(y.Z,{items:l,loadMore:this.loadMore,loadMoreTriggerIndex:s}):l)}}]),f}(h.Component),(0,d.Z)(D,"fetchInitialData",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.count,r=void 0===n?10:n;return e.dispatch((0,_.o)({count:r}))})),(0,d.Z)(D,"defaultProps",{count:10,loadAll:!1}),P=H))||P},19767:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r,o=n(1068),a=n.n(o),i=n(20530),l=n(26849),s=n(30081),c=n(97647),u=n(81010),d=n(10891),f=n(71509),m=(n(74916),n(15306),n(68309),n(2991)),p=n.n(m),E=n(77766),g=n.n(E),v=n(66419),T=n.n(v),M=n(36384),h=n.n(M),I=n(3649),O=n.n(I),_=n(67294),y=n(49140),L=n(74806),Z=n(44012),w=n(64593),F=n(36419),N=n(52266),S=n(61156),b=n(77595),k=n(33644),C=n(61386),G=n(76301),R=n(43903),A=n(6111),P=n(11690),D=n(56474),H=n.n(D),B=n(63963),W="GIFs from people you follow";const K=H()({title:W,meta:g()(r=[]).call(r,B.FM,[{name:"twitter:title",content:(0,B._r)(W)},{property:"og:url",content:"https://gfycat.com/feed"},{property:"og:title",content:(0,B._r)(W)}])});var Y;var U=(0,A.Z)("view_feed")(Y=(0,y.connect)((function(e){var t=(0,S.QY)(e),n=(0,S.QY)(e),r=n.items,o=n.hasMore,a=n.isReady;return{hasMore:o,isLoggedIn:(0,S.M7)(e),feed:t,items:p()(r).call(r,(function(t){return(0,S.rg)(e,t)})),isReady:a,username:(0,S.RY)(e)}}),{beginFollowFeed:F.qO,beginLeaderboard:N.o,continueFollowFeed:F.MT})(Y=(0,L.ZP)(Y=function(e){(0,c.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,d.Z)(t);if(n){var o=(0,d.Z)(this).constructor;e=a()(r,arguments,o)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function o(){var e,t;(0,i.Z)(this,o);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=r.call.apply(r,g()(e=[this]).call(e,a)),(0,f.Z)((0,s.Z)(t),"loadMore",(function(){t.props.continueFollowFeed({count:20})})),t}return(0,l.Z)(o,[{key:"componentDidMount",value:function(){this.props.isLoggedIn?(this.props.beginFollowFeed({count:20}),this.props.beginLeaderboard({count:30})):this.props.router.replace("/")}},{key:"render",value:function(){var e,t,n=this.props,r=n.items,o=n.isReady,a=n.hasMore,i=n.feed,l=n.intl,s=_.createElement("h1",{className:"follow-feed__title empty-feed-title"},_.createElement(Z.Z,{id:"FOLLOW_FEED.EMPTY_FEED_TITLE",defaultMessage:"You’re not following anyone.",description:"Empty follow feed title"})),c=_.createElement("h2",{className:"follow-feed__subtitle"},_.createElement(Z.Z,{id:"FOLLOW_FEED.EMPTY_FEED_SUBTITLE",defaultMessage:"Try following these top creators:",desctiption:"Bottom subtitle"})),u=_.createElement("h1",{className:"follow-feed__title"},_.createElement(Z.Z,{id:"FOLLOW_FEED.BOTTOM_TITLE",defaultMessage:"You’ve reached the bottom",description:"Feed bottom title"})),d=_.createElement("h2",{className:"follow-feed__subtitle"},_.createElement(Z.Z,{id:"FOLLOW_FEED.BOTTOM_SUBTITLE",defaultMessage:"Want more? Try following these top creators:",desctiption:"Bottom subtitle"})),f={},m=g()(e=[]).call(e,T()(new(h())(p()(t=O()(r).call(r,0,10)).call(t,(function(e){var t=e.userData?e.userData.name||e.userData.username:e.userName;return f[t]=e.userName,t})))));return _.createElement(k.C,null,_.createElement("div",{className:"follow-feed-container"},_.createElement(w.Z,K),o?r.length?_.createElement(_.Fragment,null,_.createElement(C.Z,{context:"grid_feed",feed:i,loadMore:this.loadMore,checkLikes:!0,showCTA:!0,keyword:"follow-feed",title:l.formatMessage(P.Z.followingSectionTitle),relatedTags:_.createElement(R.Z,{analyticsParams:{context:"follow-feed"},tags:m,urlPattern:function(e){return"@".concat(f[e])}})}),o&&!a?_.createElement(_.Fragment,null,u,d,_.createElement(b.Z,{loadAll:!0,count:30})):null):_.createElement(_.Fragment,null,s,c,_.createElement(b.Z,{loadAll:!0,count:30})):_.createElement(G.Z,{size:30})))}}]),o}(_.Component))||Y)||Y)||Y},11690:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(50049).vU)({metaTitle:{id:"HOME.META_TITLE",defaultMessage:"Watch and Create GIFs, Videos, Memes",description:"Home page meta title"},trendingSectionTitle:{id:"HOME.SECTION_TITLE_TRENDING",defaultMessage:"Featured Trending GIFs",description:"Trending section title"},trendingSectionLink:{id:"HOME.SECTION_LINK_TRENDING",defaultMessage:"See more trending GIFs",description:"Trending section link"},popularSectionTitle:{id:"HOME.SECTION_TITLE_POPULAR",defaultMessage:"Popular GIFs",description:"Popular section title"},popularSectionLink:{id:"HOME.SECTION_LINK_POPULAR",defaultMessage:"See more popular GIFs",description:"Popular section link"},followingSectionTitle:{id:"HOME.SECTION_TITLE_FOLLOWING",defaultMessage:"GIFs from People You Follow",description:"Following section title"},followingSectionLink:{id:"HOME.SECTION_LINK_FOLLOWING",defaultMessage:"See more following GIFs",description:"Popular section link"},gamingSectionTitle:{id:"HOME.SECTION_TITLE_GAMING",defaultMessage:"Gaming GIFs",description:"Gaming section title"},gamingSectionLink:{id:"HOME.SECTION_LINK_GAMING",defaultMessage:"See more gaming GIFs",description:"Gaming section link"},reactionSectionTitle:{id:"HOME.SECTION_TITLE_REACTION",defaultMessage:"Reaction GIFs",description:"Reaction section title"},reactionSectionLink:{id:"HOME.SECTION_LINK_REACTION",defaultMessage:"See more reaction GIFs",description:"Reaction section link"},stickerSectionTitle:{id:"HOME.SECTION_TITLE_STICKER",defaultMessage:"Sticker GIFs",description:"Sticker section title"},stickerSectionLink:{id:"HOME.SECTION_LINK_STICKER",defaultMessage:"See more sticker GIFs",description:"Sticker section link"},trendingTagsTitle:{id:"HOME.TRENDING_TAGS_TITLE",defaultMessage:"Current trending tags",description:"Trending tags title"}})},36419:(e,t,n)=>{"use strict";n.d(t,{qO:()=>b,MT:()=>k});var r=n(71509),o=n(93476),a=n.n(o),i=n(2991),l=n.n(i),s=n(86902),c=n.n(s),u=n(14310),d=n.n(u),f=n(20116),m=n.n(f),p=n(34074),E=n.n(p),g=n(78914),v=n.n(g),T=n(39649),M=n.n(T),h=n(20368),I=n.n(h),O=n(63978),_=n.n(O),y=n(8391),L=n(2142),Z=n(68626),w=n(61156);function F(e,t){var n=c()(e);if(d()){var r=d()(e);t&&(r=m()(r).call(r,(function(t){return E()(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n,o=null!=arguments[t]?arguments[t]:{};if(t%2)v()(n=F(Object(o),!0)).call(n,(function(t){(0,r.Z)(e,t,o[t])}));else if(M())I()(e,M()(o));else{var a;v()(a=F(Object(o))).call(a,(function(t){_()(e,t,E()(o,t))}))}}return e}var S=function(e){var t=e.count,n=e.begin;return function(e,r){var o=(0,w.QY)(r()),i=o.cursor,s=o.items,c=void 0===s?[]:s,u=o.hasMore,d=o.promise;if(d)return d;if(!u||n&&c.length)return a().resolve();var f=y.Z.getMyFollowFeed({count:t,cursor:i}).then((function(t){var n=t.cursor,r=t.gfycats;e((0,Z.VX)(r)),e({type:L.dz,cursor:n,items:l()(r).call(r,(function(e){return e.gfyId}))})}),(function(t){var n=t.errorMessage;e({type:L.VR,errorMessage:n})}));return e({type:L.ah}),f}},b=function(e){return S(N(N({},e),{},{begin:!0}))},k=function(e){return S(N({},e))}},52266:(e,t,n)=>{"use strict";n.d(t,{o:()=>b,p:()=>k});var r=n(71509),o=n(93476),a=n.n(o),i=n(78914),l=n.n(i),s=n(2991),c=n.n(s),u=n(86902),d=n.n(u),f=n(14310),m=n.n(f),p=n(20116),E=n.n(p),g=n(34074),v=n.n(g),T=n(39649),M=n.n(T),h=n(20368),I=n.n(h),O=n(63978),_=n.n(O),y=n(8391),L=n(61156),Z=n(2684),w=n(19330);function F(e,t){var n=d()(e);if(m()){var r=m()(e);t&&(r=E()(r).call(r,(function(t){return v()(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n,o=null!=arguments[t]?arguments[t]:{};if(t%2)l()(n=F(Object(o),!0)).call(n,(function(t){(0,r.Z)(e,t,o[t])}));else if(M())I()(e,M()(o));else{var a;l()(a=F(Object(o))).call(a,(function(t){_()(e,t,v()(o,t))}))}}return e}var S=function(e){var t=e.count,n=void 0===t?10:t,r=e.begin;return function(e,t){var o=(0,L.Zp)(t()),i=o.cursor,s=o.isReady,u=o.promise,d=o.hasMore;if(u)return u;if(r&&s||!d)return a().resolve();var f=(0,Z.J)(y.Z.getLeaderboard({cursor:i,count:n})).then((function(t){var n=t.users,r=t.cursor;l()(n).call(n,(function(e){e.userid=e.username.toLowerCase()})),e({type:w.yp,cursor:r,items:c()(n).call(n,(function(e){return e.userid})),users:n})}),(function(t){var n=t.errorMessage;return e({type:w.wy,errorMessage:n}),a().reject(n)}));return e({type:w.XR,promise:f}),f}},b=function(e){return S(N(N({},e),{},{begin:!0}))},k=function(e){return S(N(N({},e),{},{begin:!1}))}}}]);