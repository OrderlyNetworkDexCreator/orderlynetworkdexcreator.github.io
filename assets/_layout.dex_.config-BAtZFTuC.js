import{r as t,j as o}from"./index-gtzDq4NN.js";import{y as c}from"./globalDisconnect-B8K8XBo3.js";import{u as Wt}from"./useAuth-Xpux6HNU.js";import{u as Vt}from"./ModalContext-hKSq-p4G.js";import{c as Bt,v as Xt,g as Rt,p as Ut,b as $t,d as Ot,e as Ft,m as Ht,f as Kt,r as Gt}from"./apiClient-Cy-AhKIr.js";import{W as qt}from"./WalletConnect-B45c6j4x.js";import{C as St}from"./Card-DzC9HQ_p.js";import{F as zt}from"./ImagePaste-DkIgYaGc.js";import{u as Yt,D as _t,a as Ct}from"./useThemeCSS-CEhuskiH.js";import{a as Jt}from"./index-B6zKOWfM.js";import{L as yt}from"./components-CyfABTTb.js";import"./index-BftLqECp.js";import"./index-CF7nFr5e.js";import"./iconify-AJT-F7UA.js";import"./clsx.m-DHulAg21.js";import"./FormInput-CKH1Jbq0.js";import"./config-lgNZHMBC.js";import"./config-BeXy_h16.js";import"./index-BHzzehqC.js";import"./dayjs.min-DsMxAas2.js";import"./browser-Bm_RdZik.js";import"./index-Dvs6MNyz.js";import"./dijkstra-C00ieaqj.js";const h=`:root {
  --oui-font-family: 'Manrope', sans-serif;
  --oui-font-size-base: 16px;

  /* colors */
  --oui-color-primary: 176 132 233;
  --oui-color-primary-light: 213 190 244;
  --oui-color-primary-darken: 137 76 209;
  --oui-color-primary-contrast: 255 255 255;

  --oui-color-link: 189 107 237;
  --oui-color-link-light: 217 152 250;

  --oui-color-secondary: 255 255 255;
  --oui-color-tertiary: 218 218 218;
  --oui-color-quaternary: 218 218 218;

  --oui-color-danger: 245 97 139;
  --oui-color-danger-light: 250 167 188;
  --oui-color-danger-darken: 237 72 122;
  --oui-color-danger-contrast: 255 255 255;

  --oui-color-success: 41 233 169;
  --oui-color-success-light: 101 240 194;
  --oui-color-success-darken: 0 161 120;
  --oui-color-success-contrast: 255 255 255;

  --oui-color-warning: 255 209 70;
  --oui-color-warning-light: 255 229 133;
  --oui-color-warning-darken: 255 152 0;
  --oui-color-warning-contrast: 255 255 255;

  --oui-color-fill: 36 32 47;
  --oui-color-fill-active: 40 46 58;

  --oui-color-base-1: 93 83 123;
  --oui-color-base-2: 81 72 107;
  --oui-color-base-3: 68 61 69;
  --oui-color-base-4: 57 52 74;
  --oui-color-base-5: 51 46 66;
  --oui-color-base-6: 43 38 56;
  --oui-color-base-7: 36 32 47;
  --oui-color-base-8: 29 26 38;
  --oui-color-base-9: 22 20 28;
  --oui-color-base-10: 14 13 18;

  --oui-color-base-foreground: 255 255 255;
  --oui-color-line: 255 255 255;

  --oui-color-trading-loss: 245 97 139;
  --oui-color-trading-loss-contrast: 255 255 255;
  --oui-color-trading-profit: 41 233 169;
  --oui-color-trading-profit-contrast: 255 255 255;

  /* gradients */
  --oui-gradient-primary-start: 40 0 97;
  --oui-gradient-primary-end: 189 107 237;

  --oui-gradient-secondary-start: 81 42 121;
  --oui-gradient-secondary-end: 176 132 233;

  --oui-gradient-success-start: 1 83 68;
  --oui-gradient-success-end: 41 223 169;

  --oui-gradient-danger-start: 153 24 76;
  --oui-gradient-danger-end: 245 97 139;

  --oui-gradient-brand-start: 231 219 249;
  --oui-gradient-brand-end: 159 107 225;
  --oui-gradient-brand-stop-start: 6.62%;
  --oui-gradient-brand-stop-end: 86.5%;
  --oui-gradient-brand-angle: 17.44deg;

  --oui-gradient-warning-start: 152 58 8;
  --oui-gradient-warning-end: 255 209 70;

  --oui-gradient-neutral-start: 27 29 24;
  --oui-gradient-neutral-end: 38 41 46;

  /* rounded */
  --oui-rounded-sm: 2px;
  --oui-rounded: 4px;
  --oui-rounded-md: 6px;
  --oui-rounded-lg: 8px;
  --oui-rounded-xl: 12px;
  --oui-rounded-2xl: 16px;
  --oui-rounded-full: 9999px;

  /* spacing */
  --oui-spacing-xs: 20rem;
  --oui-spacing-sm: 22.5rem;
  --oui-spacing-md: 26.25rem;
  --oui-spacing-lg: 30rem;
  --oui-spacing-xl: 33.75rem;
}

html, body {
  font-family: 'Manrope', sans-serif !important;
  font-size: 16px !important;
}`;function ya(){const{isAuthenticated:$,token:p,isLoading:vt}=Wt(),{openModal:Lt}=Vt(),f=Jt(),[L,Ce]=t.useState(""),[O,ye]=t.useState(""),[F,ve]=t.useState(""),[H,Le]=t.useState(""),[K,Te]=t.useState(""),[G,we]=t.useState(""),[q,ke]=t.useState(""),[T,z]=t.useState(["email"]),[w,Y]=t.useState(""),[k,_]=t.useState(""),[D,J]=t.useState(!1),[E,Q]=t.useState(!1),[b,De]=t.useState(null),[x,Ee]=t.useState(null),[S,Pe]=t.useState(null),[P,je]=t.useState([]),j=async a=>(await fetch(a)).blob(),N=a=>new Promise(e=>{const s=new FileReader;s.onloadend=()=>e(s.result),s.readAsDataURL(a)}),[Z,ee]=t.useState([]),[Tt,Ne]=t.useState(!1),[n,Ie]=t.useState(null),[wt,Me]=t.useState(!1),[Ae,C]=t.useState(!1),[m,We]=t.useState({id:"",brokerName:"",brokerId:"",themeCSS:null,primaryLogo:null,secondaryLogo:null,favicon:null,pnlPosters:null,telegramLink:"",discordLink:"",xLink:"",walletConnectProjectId:"",privyAppId:"",privyTermsOfUse:"",privyLoginMethods:null,enabledMenus:"",customMenus:"",enableAbstractWallet:!1,enableCampaigns:!1,chainIds:[],defaultChain:null,repoUrl:null,customDomain:null,disableMainnet:!1,disableTestnet:!1,disableEvmWallets:!1,disableSolanaWallets:!1,tradingViewColorConfig:null,availableLanguages:null,seoSiteName:null,seoSiteDescription:null,seoSiteLanguage:null,seoSiteLocale:null,seoTwitterHandle:null,seoThemeColor:null,seoKeywords:null,createdAt:"",updatedAt:""}),[I,te]=t.useState(""),[r,i]=t.useState(null),[Ve,Be]=t.useState(!1),[ae,se]=t.useState(!1),[M,l]=t.useState(!1),[oe,Xe]=t.useState("colors"),[A,ne]=t.useState([]),[W,re]=t.useState(void 0),[V,ie]=t.useState(!1),[B,le]=t.useState(!1),[X,ce]=t.useState(!1),[R,de]=t.useState(!1),[U,y]=t.useState(null),[me,Re]=t.useState(""),[ue,Ue]=t.useState(""),[ge,$e]=t.useState(""),[he,Oe]=t.useState(""),[pe,Fe]=t.useState(""),[fe,He]=t.useState(""),[be,Ke]=t.useState("");t.useEffect(()=>{if(!$||!p)return;async function a(){Me(!0);try{const e=await Rt("api/dex",p);if(e&&"exists"in e&&e.exists===!1){f("/dex");return}else e&&"id"in e?(Ie(e),Ce(e.brokerName),ye(e.telegramLink||""),ve(e.discordLink||""),Le(e.xLink||""),Te(e.walletConnectProjectId||""),we(e.privyAppId||""),ke(e.privyTermsOfUse||""),z(e.privyLoginMethods?e.privyLoginMethods.split(",").filter(Boolean):["email"]),Y(e.enabledMenus||""),_(e.customMenus||""),J(e.enableAbstractWallet||!1),Q(e.enableCampaigns||!1),ie(e.disableMainnet||!1),le(e.disableTestnet||!1),ce(e.disableEvmWallets||!1),de(e.disableSolanaWallets||!1),y(e.tradingViewColorConfig??null),ee(e.availableLanguages||[]),Re(e.seoSiteName||""),Ue(e.seoSiteDescription||""),$e(e.seoSiteLanguage||""),Oe(e.seoSiteLocale||""),Fe(e.seoTwitterHandle||""),He(e.seoThemeColor||""),Ke(e.seoKeywords||""),C(!1),e.themeCSS?(i(e.themeCSS),l(!0)):(i(h),l(!0)),We({...e,chainIds:e.chainIds||[],defaultChain:e.defaultChain,enableAbstractWallet:e.enableAbstractWallet||!1,enableCampaigns:e.enableCampaigns||!1,disableMainnet:e.disableMainnet||!1,disableTestnet:e.disableTestnet||!1,disableEvmWallets:e.disableEvmWallets||!1,disableSolanaWallets:e.disableSolanaWallets||!1,availableLanguages:e.availableLanguages||[],privyLoginMethods:e.privyLoginMethods,seoSiteName:e.seoSiteName,seoSiteDescription:e.seoSiteDescription,seoSiteLanguage:e.seoSiteLanguage,seoSiteLocale:e.seoSiteLocale,seoTwitterHandle:e.seoTwitterHandle,seoThemeColor:e.seoThemeColor,seoKeywords:e.seoKeywords}),Xe("colors"),ne(e.chainIds||[]),re(e.defaultChain||void 0)):f("/dex")}catch(e){console.error("Failed to fetch DEX data",e),f("/dex")}finally{Me(!1)}}a()},[$,p,f]),t.useEffect(()=>{!r&&!m.themeCSS&&(i(h),l(!0))},[r,m.themeCSS]),t.useEffect(()=>{n&&(async()=>{if(n.primaryLogo&&De(await j(n.primaryLogo)),n.secondaryLogo&&Ee(await j(n.secondaryLogo)),n.favicon&&Pe(await j(n.favicon)),n.pnlPosters){const e=await Promise.all(n.pnlPosters.map(s=>s?j(s):Promise.resolve(null)));je(e)}})()},[n]);const Ge=async()=>{if(!I.trim()){c.error("Please enter a theme description");return}Be(!0);try{const a=await Ut("api/theme/modify",{prompt:I.trim(),currentTheme:r||m.themeCSS},p);a&&a.theme?(Lt("themePreview",{theme:a.theme,onApply:kt,onCancel:Dt}),c.success("Theme generated successfully!")):c.error("Failed to generate theme")}catch(a){console.error("Error generating theme:",a),c.error("Error generating theme. Please try again.")}finally{Be(!1)}},kt=a=>{i(a),l(!0)},Dt=()=>{},qe=a=>{i(a),l(!0)},ze=()=>{i(m.themeCSS??null),l(!!m.themeCSS),y(m.tradingViewColorConfig??null),te(""),se(!1),C(!1),c.success("Theme reset")},Ye=()=>{i(h),l(!0),y(null),te(""),se(!1),C(!1),c.success("Theme reset to default")},_e=a=>{if(!r)return;let e=r;a.forEach(s=>{const u=m.themeCSS;if(u){const d=new RegExp(`--oui-color-${s}:\\s*([^;]+);`,"g"),v=u.match(d);v&&(e=e.replace(new RegExp(`--oui-color-${s}:\\s*[^;]+;`,"g"),v[0]))}}),i(e),l(!0),c.success(`${a.length} color${a.length>1?"s":""} reset to original`)},Je=a=>{if(!r)return;let e=r;a.forEach(s=>{const u=new RegExp(`--oui-color-${s}:\\s*([^;]+);`,"g"),d=h.match(u);d&&(e=e.replace(new RegExp(`--oui-color-${s}:\\s*[^;]+;`,"g"),d[0]))}),i(e),l(!0),c.success(`${a.length} color${a.length>1?"s":""} reset to default`)},Qe=()=>{se(!ae)},Ze=a=>e=>{const s=e.target.value;switch(a){case"brokerName":Ce(s);break;case"telegramLink":ye(s);break;case"discordLink":ve(s);break;case"xLink":Le(s);break;case"walletConnectProjectId":Te(s);break;case"privyAppId":we(s);break;case"privyTermsOfUse":ke(s);break;case"themePrompt":te(s);break;case"seoSiteName":Re(s);break;case"seoSiteDescription":Ue(s);break;case"seoSiteLanguage":$e(s);break;case"seoSiteLocale":Oe(s);break;case"seoTwitterHandle":Fe(s);break;case"seoThemeColor":He(s);break;case"seoKeywords":Ke(s);break}},et=a=>e=>{switch(a){case"primaryLogo":De(e);break;case"secondaryLogo":Ee(e);break;case"favicon":Pe(e);break}},tt=a=>{je(a)},Et=()=>{const a={brokerName:L,handleInputChange:Ze,brokerNameValidator:xe,primaryLogo:b,secondaryLogo:x,favicon:S,handleImageChange:et,currentTheme:r,defaultTheme:h,showThemeEditor:ae,viewCssCode:Ae,activeThemeTab:oe,themePrompt:I,isGeneratingTheme:Ve,themeApplied:M,tradingViewColorConfig:U,toggleThemeEditor:Qe,handleResetTheme:ze,handleResetToDefault:Ye,handleResetSelectedColors:_e,handleResetSelectedColorsToDefault:Je,handleThemeEditorChange:qe,setViewCssCode:C,ThemeTabButton:it,updateCssColor:nt,updateCssValue:ot,handleGenerateTheme:Ge,setTradingViewColorConfig:y,pnlPosters:P,handlePnLPosterChange:tt,telegramLink:O,discordLink:F,xLink:H,urlValidator:rt,seoSiteName:me,seoSiteDescription:ue,seoSiteLanguage:ge,seoSiteLocale:he,seoTwitterHandle:pe,seoThemeColor:fe,seoKeywords:be,walletConnectProjectId:K,privyAppId:G,privyTermsOfUse:q,enableAbstractWallet:D,onEnableAbstractWalletChange:J,disableEvmWallets:X,disableSolanaWallets:R,onDisableEvmWalletsChange:ce,onDisableSolanaWalletsChange:de,privyLoginMethods:T,onPrivyLoginMethodsChange:z,chainIds:A,onChainIdsChange:ne,defaultChain:W,onDefaultChainChange:re,disableMainnet:V,disableTestnet:B,onDisableMainnetChange:ie,onDisableTestnetChange:le,availableLanguages:Z,onAvailableLanguagesChange:ee,enabledMenus:w,setEnabledMenus:Y,customMenus:k,setCustomMenus:_,enableCampaigns:E,setEnableCampaigns:Q},e=[];for(const s of Ct)if(s.getValidationTest&&!s.getValidationTest(a))if(s.key==="brokerDetails"){const d=xe(L.trim());e.push(d||`${s.title}: validation failed`)}else s.key==="privyConfiguration"?e.push(`${s.title}: Please enter a valid Terms of Use URL`):e.push(`${s.title}: validation failed`);return e},Pt=async a=>{a.preventDefault();const e=Et();if(e.length>0){c.error(e[0]);return}const s=L.trim(),u=O.trim(),d=F.trim(),v=H.trim(),lt=K.trim(),ct=G.trim(),dt=q.trim(),mt=me.trim(),ut=ue.trim(),gt=ge.trim(),ht=he.trim(),pt=pe.trim(),ft=fe.trim(),bt=be.trim(),[jt,Nt,It,Mt]=await Promise.all([b?N(b):Promise.resolve(null),x?N(x):Promise.resolve(null),S?N(S):Promise.resolve(null),Promise.all(P.map(g=>g?N(g):Promise.resolve(null)))]);Ne(!0);try{const g={primaryLogo:b,secondaryLogo:x,favicon:S,pnlPosters:P},Se={brokerName:s,telegramLink:u,discordLink:d,xLink:v,walletConnectProjectId:lt,privyAppId:ct,privyTermsOfUse:dt,privyLoginMethods:T.join(","),themeCSS:M?r:m.themeCSS,enabledMenus:w,customMenus:k,enableAbstractWallet:D,enableCampaigns:E,chainIds:A,defaultChain:W,disableMainnet:V,disableTestnet:B,disableEvmWallets:X,disableSolanaWallets:R,tradingViewColorConfig:U,availableLanguages:Z,seoSiteName:mt,seoSiteDescription:ut,seoSiteLanguage:gt,seoSiteLocale:ht,seoTwitterHandle:pt,seoThemeColor:ft,seoKeywords:bt},At=$t(Se,g);if(n&&n.id){const xt=await Ot(`api/dex/${n.id}`,At,p,{showToastOnError:!1});We({...xt,brokerName:s,telegramLink:u,discordLink:d,xLink:v,walletConnectProjectId:lt,privyAppId:ct,privyTermsOfUse:dt,privyLoginMethods:T.join(","),enabledMenus:w,customMenus:k,primaryLogo:jt,secondaryLogo:Nt,favicon:It,pnlPosters:Mt,themeCSS:M?r:null,enableAbstractWallet:D,enableCampaigns:E,chainIds:A,defaultChain:W,disableMainnet:V,disableTestnet:B,disableEvmWallets:X,disableSolanaWallets:R,tradingViewColorConfig:U,seoSiteName:mt,seoSiteDescription:ut,seoSiteLanguage:gt,seoSiteLocale:ht,seoTwitterHandle:pt,seoThemeColor:ft,seoKeywords:bt}),Ie(xt),c.success("DEX configuration updated successfully!"),f("/dex#dex-creation-status")}}catch(g){console.error("Error updating DEX:",g);const Se=g instanceof Error?g.message:"Failed to update DEX configuration";c.error(Se)}finally{Ne(!1)}},{updateCssValue:at,updateCssColor:st}=Yt(h),ot=t.useCallback((a,e)=>{at(a,e,i),l(!0)},[at]),nt=t.useCallback((a,e)=>{st(a,e,i),l(!0)},[st]),rt=Xt(),xe=Bt(Gt("Broker name"),Kt(3,"Broker name"),Ht(30,"Broker name"),Ft("Broker name")),it=({tab:a,label:e})=>o.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg ${oe===a?"bg-background-dark/50 text-white border-t border-l border-r border-light/10":"bg-transparent text-gray-400 hover:text-white"}`,onClick:()=>Xe(a),type:"button",children:e});return vt||wt?o.jsx("div",{className:"w-full h-[calc(100vh-64px)] flex items-center justify-center px-4 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),o.jsx("div",{className:"text-base md:text-lg mb-2",children:"Loading DEX Configuration"}),o.jsx("div",{className:"text-xs md:text-sm text-gray-400",children:"Please wait while we fetch your settings"})]})}):$?n?o.jsxs("div",{className:"container mx-auto p-4 max-w-7xl mt-26 pb-52",children:[o.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8",children:o.jsxs("div",{children:[o.jsxs(yt,{to:"/dex",className:"text-sm text-gray-400 hover:text-primary-light mb-2 inline-flex items-center",children:[o.jsx("div",{className:"i-mdi:arrow-left h-4 w-4 mr-1"}),"Back to DEX Dashboard"]}),o.jsx("h1",{className:"text-2xl md:text-3xl font-bold gradient-text",children:"DEX Configuration"})]})}),o.jsx(zt,{onSubmit:Pt,className:"space-y-6",submitText:"Update DEX Configuration",isLoading:Tt,loadingText:"Saving",disabled:!1,enableRateLimit:!0,children:o.jsx(_t,{mode:"direct",sections:Ct,showProgressTracker:!0,allProps:{brokerName:L,handleInputChange:Ze,brokerNameValidator:xe,primaryLogo:b,secondaryLogo:x,favicon:S,handleImageChange:et,currentTheme:r,defaultTheme:h,showThemeEditor:ae,viewCssCode:Ae,activeThemeTab:oe,themePrompt:I,isGeneratingTheme:Ve,themeApplied:M,tradingViewColorConfig:U,toggleThemeEditor:Qe,handleResetTheme:ze,handleResetToDefault:Ye,handleResetSelectedColors:_e,handleResetSelectedColorsToDefault:Je,handleThemeEditorChange:qe,setViewCssCode:C,ThemeTabButton:it,updateCssColor:nt,updateCssValue:ot,handleGenerateTheme:Ge,setTradingViewColorConfig:y,pnlPosters:P,handlePnLPosterChange:tt,telegramLink:O,discordLink:F,xLink:H,urlValidator:rt,seoSiteName:me,seoSiteDescription:ue,seoSiteLanguage:ge,seoSiteLocale:he,seoTwitterHandle:pe,seoThemeColor:fe,seoKeywords:be,walletConnectProjectId:K,privyAppId:G,privyTermsOfUse:q,privyLoginMethods:T,onPrivyLoginMethodsChange:z,enableAbstractWallet:D,onEnableAbstractWalletChange:J,disableEvmWallets:X,disableSolanaWallets:R,onDisableEvmWalletsChange:ce,onDisableSolanaWalletsChange:de,chainIds:A,onChainIdsChange:ne,defaultChain:W,onDefaultChainChange:re,disableMainnet:V,disableTestnet:B,onDisableMainnetChange:ie,onDisableTestnetChange:le,availableLanguages:Z,onAvailableLanguagesChange:ee,enabledMenus:w,setEnabledMenus:Y,customMenus:k,setCustomMenus:_,enableCampaigns:E,setEnableCampaigns:Q},idPrefix:"config-"})})]}):o.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),o.jsxs(St,{children:[o.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"No DEX Found"}),o.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"You need to create a DEX first before you can configure it."}),o.jsx("div",{className:"flex justify-center",children:o.jsx(yt,{to:"/dex",className:"btn-connect",children:"Create Your DEX"})})]})]})}):o.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),o.jsxs(St,{children:[o.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"Authentication Required"}),o.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"Please connect your wallet and login to access DEX configuration."}),o.jsx("div",{className:"flex justify-center",children:o.jsx(qt,{})})]})]})})}export{ya as default};
