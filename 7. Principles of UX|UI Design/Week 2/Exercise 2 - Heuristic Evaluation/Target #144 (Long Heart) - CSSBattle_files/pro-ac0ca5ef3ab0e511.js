(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{5196:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pro",function(){return s(5898)}])},2220:function(e,t,s){"use strict";s.d(t,{z:function(){return o}});var n=s(865),a=s(6670),i=s(6297),r=s(2322),l=(s(2784),s(9241));function o(e){var t=e.type,s=void 0===t?"button":t,o=e.primary,c=e.danger,d=e.success,h=e.cool,u=e.size,m=e.extraClasses,p=void 0===m?"":m,x=e.children,g=e.isLoading,f=(0,i.Z)(e,["type","primary","danger","success","cool","size","extraClasses","children","isLoading"]);return(0,r.jsxs)("button",(0,a.Z)((0,n.Z)({type:s,className:"button ".concat(o?"button--primary":""," \n      ").concat(h?"button--cssbattle":"","\n      ").concat(u?"button--".concat(u):"","\n      ").concat(d?"button--success":""," ").concat(c?"button--danger":""," ").concat(p),disabled:g},f),{children:[x,(0,r.jsx)("div",{style:{display:"flex",transition:"max-width 0.3s ease",overflow:"hidden",maxWidth:g?"1.6em":0},children:(0,r.jsx)(l.a,{height:"1.3em",leftMargin:"0.5rem"})})]}))}},7448:function(e,t,s){"use strict";s.d(t,{T:function(){return r}});var n=s(2322),a=(s(2784),s(4697)),i=s(7171);function r(e){var t=e.fixedHeight,s=e.hideFooter,r=e.extraClasses,l=void 0===r?"":r,o=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h,{}),(0,n.jsx)("div",{className:"container ".concat(t?"container--fixed-height":"","\n        ").concat(s?"container--hide-footer":"","\n        ").concat(l),children:o}),(0,n.jsx)(i.$,{})]})}},6735:function(e,t,s){"use strict";s.d(t,{H:function(){return a}});var n=s(2784);function a(e){var t=(0,n.useState)(),s=t[0],a=t[1];return(0,n.useEffect)((function(){var t=document.createElement("script");t.src="https://cdn.paddle.com/paddle/paddle.js",t.async="true",t.addEventListener("load",(function(){window.Paddle.Setup({vendor:e}),a(!0)})),document.body.appendChild(t)}),[]),s}},5898:function(e,t,s){"use strict";s.r(t);var n=s(2322),a=s(2784),i=s(7729),r=s.n(i),l=s(7448),o=s(6735),c=s(1251),d=s(2220),h=s(1893),u=s(5598);function m(){return(0,n.jsx)("div",{className:"pro-feature__coming-soon",children:"Coming Soon"})}function p(e){var t=e.title,s=e.isComingSoon,a=e.isRemoved,i=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h3",{className:"pro-feature__title",style:{textDecoration:a?"line-through":null},children:[t," ",s&&(0,n.jsx)(m,{})]}),(0,n.jsx)("p",{className:"pro-feature__desc",style:{textDecoration:a?"line-through":null},children:i})]})}t.default=function(){var e=function(e){x("yearly"===e.target.value)},t=(0,h.a)(),s=(0,o.H)(50177),i=(0,a.useState)(!0),m=i[0],x=i[1];return(0,n.jsxs)(l.T,{extraClasses:"container--pro-page",children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"PRO | CSSBattle"},"title"),(0,n.jsx)("meta",{property:"og:title",content:"PRO | CSSBattle"},"ogTitle")]}),(0,n.jsx)("div",{className:"container__item",children:(0,n.jsxs)("div",{className:"item__content",children:[(0,n.jsx)("div",{className:"pro-left",children:(null===t||void 0===t?void 0:t.isPro)?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("p",{className:"para",children:'You are already a "PRO" player.'}),(0,n.jsx)("p",{className:"para",children:(0,n.jsx)("a",{className:"link",href:"/settings?tab=membership",children:'Manage your "PRO" membership'})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h1",{className:"heading",style:{fontSize:"var(--font-size-4)",marginTop:0},children:[(0,n.jsx)("span",{style:{verticalAlign:"middle"},children:"Upgrade to "}),(0,n.jsx)("img",{src:"/images/pro-badge.svg",width:"40",style:{verticalAlign:"middle"},alt:"Pro"})]}),(0,n.jsxs)("div",{className:"filter generic-filter",children:[(0,n.jsxs)("span",{className:"filter__button",style:{flex:"auto"},children:[(0,n.jsx)("input",{type:"radio",name:"subscription-type",id:"yearly",value:"yearly",defaultChecked:!0,onChange:e}),(0,n.jsx)("label",{htmlFor:"yearly",children:"Yearly (40% off)"})]}),(0,n.jsxs)("span",{className:"filter__button",style:{flex:"auto"},children:[(0,n.jsx)("input",{type:"radio",name:"subscription-type",id:"monthly",value:"monthly",onChange:e}),(0,n.jsx)("label",{htmlFor:"monthly",children:"Monthly"})]})]}),(0,n.jsx)("div",{className:"pro-pricing",children:(0,n.jsx)("span",{children:m?(0,n.jsx)(n.Fragment,{children:" $3/month "}):(0,n.jsx)(n.Fragment,{children:" $5/month "})})}),(0,n.jsxs)(u.VStack,{gap:"1rem",children:[(0,n.jsx)("p",{className:"ta-c",children:"+ taxes"}),(0,n.jsx)("p",{className:"para para--small",children:"Cancel anytime. 100% refund if cancelled within 14 days."})]}),(0,n.jsx)("p",{className:"para",children:t?(0,n.jsxs)(d.z,{primary:!0,extraClasses:"button--full-width",onClick:function(){window.Paddle.Checkout.open({product:m?564882:561645,passthrough:t.uid})},disabled:!s,children:["Upgrade to PRO for"," ",m?(0,n.jsx)(n.Fragment,{children:" $36/year "}):(0,n.jsx)(n.Fragment,{children:" $5/month "})]}):(0,n.jsx)("a",{href:"/login",className:"button button--primary button--full-width",children:"Sign Up before you upgrade"})})]})}),(0,n.jsxs)("div",{className:"pro-right",children:[(0,n.jsx)("p",{className:"benefits-desc",children:"CSSBattle is free and will always be free to play. Upgrading to PRO gives you the following additional sweet benefits that make playing on CSSBattle a little more fun and enjoyable for you."}),(0,n.jsxs)("ul",{className:"pro-features",children:[(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsxs)(p,{title:"Add plugins to the code editor",children:["Want to minify your code automatically before submitting? Or maybe convert all the ",(0,n.jsx)("code",{children:"px"})," units to ",(0,n.jsx)("code",{children:"in"})," ","with a press of a button? With plugins, you'll be able to do all that and more."]})}),(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsx)(p,{title:"Advanced target stats",children:"Get a bird's-eye view on your performance in battles with our advance stats. See where you're performing well and where you're lagging behind."})}),(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsx)(p,{title:"Unlimited submissions history",children:"Be able to see all your past submissions on every target (otherwise limited to last 5 submissions)."})}),(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsx)(p,{title:"VSCode Editor",children:"Feel at home with the VSCode editor? We've got you covered."})}),(null===t||void 0===t?void 0:t.isPro)?(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsx)(p,{title:"Light theme",isRemoved:!0,children:"Get access to a PRO special light theme."})}):null,(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsxs)(p,{title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{style:{verticalAlign:"middle"},children:"PRO badge"})," ",(0,n.jsx)("img",{src:"/images/pro-badge.svg",width:"30",style:{verticalAlign:"middle"},alt:"Pro"})]}),children:["Get a shiny badge next to your name wherever it appears across CSSBattle. ",(0,n.jsx)(c.dy,{label:"sunglasses",children:"\ud83d\ude0e"})]})}),(0,n.jsx)("li",{className:"pro-feature",children:(0,n.jsx)(p,{title:"Create public community targets",isComingSoon:!0,children:"Create your own targets for the community with your own rules. All the targets will be rated by the community and we'll feature new targets every week."})})]})]})]})})]})}}},function(e){e.O(0,[154,836,774,888,179],(function(){return t=5196,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=pro-ac0ca5ef3ab0e511.js.map