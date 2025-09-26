import{r as t,j as n}from"./index-gtzDq4NN.js";import{y as r}from"./globalDisconnect-B8K8XBo3.js";import{u as Wt}from"./useAuth-Xpux6HNU.js";import{u as Ot}from"./ModalContext-B4Vdo_jB.js";import{c as Vt,v as Bt,g as Ut,p as Xt,b as Rt,d as $t,e as Ht,m as Kt,f as Ft,r as Jt}from"./apiClient-Cy-AhKIr.js";import{W as Gt}from"./WalletConnect-BosvOeLD.js";import{C as Lt}from"./Card-DzC9HQ_p.js";import{F as qt}from"./ImagePaste-DdxKcvWC.js";import{u as zt,D as Yt,a as Tt}from"./useThemeCSS-mMm7B7t2.js";import{a as _t}from"./index-B6zKOWfM.js";import{L as wt}from"./components-CyfABTTb.js";import"./index-BftLqECp.js";import"./index-CF7nFr5e.js";import"./iconify-AJT-F7UA.js";import"./clsx.m-DHulAg21.js";import"./FormInput-CKH1Jbq0.js";import"./config-BlglxcoY.js";import"./config-Dmay-zMu.js";import"./index-BHzzehqC.js";import"./dayjs.min-DsMxAas2.js";import"./browser-Bm_RdZik.js";import"./index-Dvs6MNyz.js";import"./dijkstra-C00ieaqj.js";const h=`:root {
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
}`;function Ca(){const{isAuthenticated:$,token:p,isLoading:kt}=Wt(),{openModal:Dt}=Ot(),b=_t(),[O,Pe]=t.useState(""),[H,je]=t.useState(""),[K,Ie]=t.useState(""),[F,Me]=t.useState(""),[J,Ae]=t.useState(""),[G,We]=t.useState(""),[q,Oe]=t.useState(""),[S,z]=t.useState(["email"]),[x,Y]=t.useState(""),[y,_]=t.useState(""),[C,Q]=t.useState(!1),[v,Z]=t.useState(!1),[L,Ve]=t.useState(null),[T,Be]=t.useState(null),[w,Ue]=t.useState(null),[V,Xe]=t.useState([]),B=async a=>(await fetch(a)).blob(),U=a=>new Promise(e=>{const s=new FileReader;s.onloadend=()=>e(s.result),s.readAsDataURL(a)}),[X,ee]=t.useState([]),[Nt,Re]=t.useState(!1),[i,$e]=t.useState(null),[Et,He]=t.useState(!1),[Ke,k]=t.useState(!1),[o,Fe]=t.useState({id:"",brokerName:"",brokerId:"",themeCSS:null,primaryLogo:null,secondaryLogo:null,favicon:null,pnlPosters:null,telegramLink:"",discordLink:"",xLink:"",walletConnectProjectId:"",privyAppId:"",privyTermsOfUse:"",privyLoginMethods:null,enabledMenus:"",customMenus:"",enableAbstractWallet:!1,enableCampaigns:!1,chainIds:[],defaultChain:null,repoUrl:null,customDomain:null,disableMainnet:!1,disableTestnet:!1,disableEvmWallets:!1,disableSolanaWallets:!1,tradingViewColorConfig:null,availableLanguages:null,seoSiteName:null,seoSiteDescription:null,seoSiteLanguage:null,seoSiteLocale:null,seoTwitterHandle:null,seoThemeColor:null,seoKeywords:null,createdAt:"",updatedAt:""}),[R,te]=t.useState(""),[l,c]=t.useState(null),[Je,Ge]=t.useState(!1),[ae,se]=t.useState(!1),[D,d]=t.useState(!1),[oe,qe]=t.useState("colors"),[N,ne]=t.useState([]),[E,ie]=t.useState(void 0),[P,re]=t.useState(!1),[j,le]=t.useState(!1),[I,ce]=t.useState(!1),[M,de]=t.useState(!1),[A,W]=t.useState(null),[ue,ze]=t.useState(""),[me,Ye]=t.useState(""),[ge,_e]=t.useState(""),[he,Qe]=t.useState(""),[fe,Ze]=t.useState(""),[pe,et]=t.useState(""),[be,tt]=t.useState("");t.useEffect(()=>{if(!$||!p)return;async function a(){He(!0);try{const e=await Ut("api/dex",p);if(e&&"exists"in e&&e.exists===!1){b("/dex");return}else e&&"id"in e?($e(e),Pe(e.brokerName),je(e.telegramLink||""),Ie(e.discordLink||""),Me(e.xLink||""),Ae(e.walletConnectProjectId||""),We(e.privyAppId||""),Oe(e.privyTermsOfUse||""),z(e.privyLoginMethods?e.privyLoginMethods.split(",").filter(Boolean):["email"]),Y(e.enabledMenus||""),_(e.customMenus||""),Q(e.enableAbstractWallet||!1),Z(e.enableCampaigns||!1),re(e.disableMainnet||!1),le(e.disableTestnet||!1),ce(e.disableEvmWallets||!1),de(e.disableSolanaWallets||!1),W(e.tradingViewColorConfig||null),ee(e.availableLanguages||[]),ze(e.seoSiteName||""),Ye(e.seoSiteDescription||""),_e(e.seoSiteLanguage||""),Qe(e.seoSiteLocale||""),Ze(e.seoTwitterHandle||""),et(e.seoThemeColor||""),tt(e.seoKeywords||""),k(!1),e.themeCSS?(c(e.themeCSS),d(!0)):(c(h),d(!0)),Fe({...e,chainIds:e.chainIds||[],defaultChain:e.defaultChain||null,enableAbstractWallet:e.enableAbstractWallet||!1,enableCampaigns:e.enableCampaigns||!1,disableMainnet:e.disableMainnet||!1,disableTestnet:e.disableTestnet||!1,disableEvmWallets:e.disableEvmWallets||!1,disableSolanaWallets:e.disableSolanaWallets||!1,availableLanguages:e.availableLanguages||[],privyLoginMethods:e.privyLoginMethods||null,seoSiteName:e.seoSiteName||null,seoSiteDescription:e.seoSiteDescription||null,seoSiteLanguage:e.seoSiteLanguage||null,seoSiteLocale:e.seoSiteLocale||null,seoTwitterHandle:e.seoTwitterHandle||null,seoThemeColor:e.seoThemeColor||null,seoKeywords:e.seoKeywords||null}),qe("colors"),ne(e.chainIds||[]),ie(e.defaultChain||void 0)):b("/dex")}catch(e){console.error("Failed to fetch DEX data",e),b("/dex")}finally{He(!1)}}a()},[$,p,b]),t.useEffect(()=>{!l&&!o.themeCSS&&(c(h),d(!0))},[l,o.themeCSS]),t.useEffect(()=>{i&&(async()=>{if(i.primaryLogo&&Ve(await B(i.primaryLogo)),i.secondaryLogo&&Be(await B(i.secondaryLogo)),i.favicon&&Ue(await B(i.favicon)),i.pnlPosters){const e=await Promise.all(i.pnlPosters.map(s=>s?B(s):Promise.resolve(null)));Xe(e)}})()},[i]);const at=async()=>{if(!R.trim()){r.error("Please enter a theme description");return}Ge(!0);try{const a=await Xt("api/theme/modify",{prompt:R.trim(),currentTheme:l||o.themeCSS},p);a&&a.theme?(Dt("themePreview",{theme:a.theme,onApply:Pt,onCancel:jt}),r.success("Theme generated successfully!")):r.error("Failed to generate theme")}catch(a){console.error("Error generating theme:",a),r.error("Error generating theme. Please try again.")}finally{Ge(!1)}},Pt=a=>{c(a),d(!0)},jt=()=>{},st=a=>{c(a),d(!0)},ot=()=>{c(o.themeCSS||null),d(!!o.themeCSS),W(o.tradingViewColorConfig||null),te(""),se(!1),k(!1),r.success("Theme reset")},nt=()=>{c(h),d(!0),W(null),te(""),se(!1),k(!1),r.success("Theme reset to default")},it=a=>{if(!l)return;let e=l;a.forEach(s=>{const m=o.themeCSS;if(m){const u=new RegExp(`--oui-color-${s}:\\s*([^;]+);`,"g"),f=m.match(u);f&&(e=e.replace(new RegExp(`--oui-color-${s}:\\s*[^;]+;`,"g"),f[0]))}}),c(e),d(!0),r.success(`${a.length} color${a.length>1?"s":""} reset to original`)},rt=a=>{if(!l)return;let e=l;a.forEach(s=>{const m=new RegExp(`--oui-color-${s}:\\s*([^;]+);`,"g"),u=h.match(m);u&&(e=e.replace(new RegExp(`--oui-color-${s}:\\s*[^;]+;`,"g"),u[0]))}),c(e),d(!0),r.success(`${a.length} color${a.length>1?"s":""} reset to default`)},lt=()=>{se(!ae)},ct=a=>e=>{const s=e.target.value;switch(a){case"brokerName":Pe(s);break;case"telegramLink":je(s);break;case"discordLink":Ie(s);break;case"xLink":Me(s);break;case"walletConnectProjectId":Ae(s);break;case"privyAppId":We(s);break;case"privyTermsOfUse":Oe(s);break;case"themePrompt":te(s);break;case"seoSiteName":ze(s);break;case"seoSiteDescription":Ye(s);break;case"seoSiteLanguage":_e(s);break;case"seoSiteLocale":Qe(s);break;case"seoTwitterHandle":Ze(s);break;case"seoThemeColor":et(s);break;case"seoKeywords":tt(s);break}},dt=a=>e=>{switch(a){case"primaryLogo":Ve(e);break;case"secondaryLogo":Be(e);break;case"favicon":Ue(e);break}},ut=a=>{Xe(a)},It=()=>{const a={brokerName:O,handleInputChange:ct,brokerNameValidator:Se,primaryLogo:L,secondaryLogo:T,favicon:w,handleImageChange:dt,currentTheme:l,defaultTheme:h,showThemeEditor:ae,viewCssCode:Ke,activeThemeTab:oe,themePrompt:R,isGeneratingTheme:Je,themeApplied:D,tradingViewColorConfig:A,toggleThemeEditor:lt,handleResetTheme:ot,handleResetToDefault:nt,handleResetSelectedColors:it,handleResetSelectedColorsToDefault:rt,handleThemeEditorChange:st,setViewCssCode:k,ThemeTabButton:bt,updateCssColor:ft,updateCssValue:ht,handleGenerateTheme:at,setTradingViewColorConfig:W,pnlPosters:V,handlePnLPosterChange:ut,telegramLink:H,discordLink:K,xLink:F,urlValidator:pt,seoSiteName:ue,seoSiteDescription:me,seoSiteLanguage:ge,seoSiteLocale:he,seoTwitterHandle:fe,seoThemeColor:pe,seoKeywords:be,walletConnectProjectId:J,privyAppId:G,privyTermsOfUse:q,enableAbstractWallet:C,onEnableAbstractWalletChange:Q,disableEvmWallets:I,disableSolanaWallets:M,onDisableEvmWalletsChange:ce,onDisableSolanaWalletsChange:de,privyLoginMethods:S,onPrivyLoginMethodsChange:z,chainIds:N,onChainIdsChange:ne,defaultChain:E,onDefaultChainChange:ie,disableMainnet:P,disableTestnet:j,onDisableMainnetChange:re,onDisableTestnetChange:le,availableLanguages:X,onAvailableLanguagesChange:ee,enabledMenus:x,setEnabledMenus:Y,customMenus:y,setCustomMenus:_,enableCampaigns:v,setEnableCampaigns:Z},e=[];for(const s of Tt)if(s.getValidationTest&&!s.getValidationTest(a))if(s.key==="brokerDetails"){const u=Se(O.trim());e.push(u||`${s.title}: validation failed`)}else s.key==="privyConfiguration"?e.push(`${s.title}: Please enter a valid Terms of Use URL`):e.push(`${s.title}: validation failed`);return e},Mt=async a=>{a.preventDefault();const e=It();if(e.length>0){r.error(e[0]);return}const s=O.trim(),m=H.trim(),u=K.trim(),f=F.trim(),xe=J.trim(),ye=G.trim(),Ce=q.trim(),ve=ue.trim(),Le=me.trim(),Te=ge.trim(),we=he.trim(),ke=fe.trim(),De=pe.trim(),Ne=be.trim(),[St,xt,yt,Ct]=await Promise.all([L?U(L):Promise.resolve(null),T?U(T):Promise.resolve(null),w?U(w):Promise.resolve(null),Promise.all(V.map(g=>g?U(g):Promise.resolve(null)))]);if(i&&i.id&&!(s!==(o.brokerName||"")||m!==(o.telegramLink||"")||u!==(o.discordLink||"")||f!==(o.xLink||"")||xe!==(o.walletConnectProjectId||"")||ye!==(o.privyAppId||"")||Ce!==(o.privyTermsOfUse||"")||JSON.stringify(S)!==JSON.stringify(o.privyLoginMethods||["email"])||x!==(o.enabledMenus||"")||y!==(o.customMenus||"")||St!==(o.primaryLogo||null)||xt!==(o.secondaryLogo||null)||yt!==(o.favicon||null)||JSON.stringify(Ct)!==JSON.stringify(o.pnlPosters||[])||D||JSON.stringify(N)!==JSON.stringify(o.chainIds||[])||E!==(o.defaultChain||void 0)||C!==(o.enableAbstractWallet||!1)||v!==(o.enableCampaigns||!1)||P!==(o.disableMainnet||!1)||j!==(o.disableTestnet||!1)||I!==(o.disableEvmWallets||!1)||M!==(o.disableSolanaWallets||!1)||JSON.stringify(A||null)!==JSON.stringify(o.tradingViewColorConfig||null)||JSON.stringify(X)!==JSON.stringify(o.availableLanguages||[])||ve!==(o.seoSiteName||"")||Le!==(o.seoSiteDescription||"")||Te!==(o.seoSiteLanguage||"")||we!==(o.seoSiteLocale||"")||ke!==(o.seoTwitterHandle||"")||De!==(o.seoThemeColor||"")||Ne!==(o.seoKeywords||""))){r.info("No changes to save");return}Re(!0);try{const g={primaryLogo:L,secondaryLogo:T,favicon:w,pnlPosters:V},Ee={brokerName:s,telegramLink:m||null,discordLink:u||null,xLink:f||null,walletConnectProjectId:xe||null,privyAppId:ye||null,privyTermsOfUse:Ce||null,privyLoginMethods:S.join(","),themeCSS:D?l:o.themeCSS,enabledMenus:x,customMenus:y,enableAbstractWallet:C,enableCampaigns:v,chainIds:N,defaultChain:E,disableMainnet:P,disableTestnet:j,disableEvmWallets:I,disableSolanaWallets:M,tradingViewColorConfig:A,availableLanguages:X,seoSiteName:ve||null,seoSiteDescription:Le||null,seoSiteLanguage:Te||null,seoSiteLocale:we||null,seoTwitterHandle:ke||null,seoThemeColor:De||null,seoKeywords:Ne||null},At=Rt(Ee,g);if(i&&i.id){const vt=await $t(`api/dex/${i.id}`,At,p,{showToastOnError:!1});Fe({...vt,brokerName:s,telegramLink:m,discordLink:u,xLink:f,walletConnectProjectId:xe,privyAppId:ye,privyTermsOfUse:Ce,privyLoginMethods:S.join(","),enabledMenus:x,customMenus:y,primaryLogo:St,secondaryLogo:xt,favicon:yt,pnlPosters:Ct,themeCSS:D?l:null,enableAbstractWallet:C,enableCampaigns:v,chainIds:N,defaultChain:E,disableMainnet:P,disableTestnet:j,disableEvmWallets:I,disableSolanaWallets:M,tradingViewColorConfig:A,seoSiteName:ve||null,seoSiteDescription:Le||null,seoSiteLanguage:Te||null,seoSiteLocale:we||null,seoTwitterHandle:ke||null,seoThemeColor:De||null,seoKeywords:Ne||null}),$e(vt),r.success("DEX configuration updated successfully!"),b("/dex#dex-creation-status")}}catch(g){console.error("Error updating DEX:",g);const Ee=g instanceof Error?g.message:"Failed to update DEX configuration";r.error(Ee)}finally{Re(!1)}},{updateCssValue:mt,updateCssColor:gt}=zt(h),ht=t.useCallback((a,e)=>{mt(a,e,c),d(!0)},[mt]),ft=t.useCallback((a,e)=>{gt(a,e,c),d(!0)},[gt]),pt=Bt(),Se=Vt(Jt("Broker name"),Ft(3,"Broker name"),Kt(30,"Broker name"),Ht("Broker name")),bt=({tab:a,label:e})=>n.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg ${oe===a?"bg-background-dark/50 text-white border-t border-l border-r border-light/10":"bg-transparent text-gray-400 hover:text-white"}`,onClick:()=>qe(a),type:"button",children:e});return kt||Et?n.jsx("div",{className:"w-full h-[calc(100vh-64px)] flex items-center justify-center px-4 mt-26 pb-52",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),n.jsx("div",{className:"text-base md:text-lg mb-2",children:"Loading DEX Configuration"}),n.jsx("div",{className:"text-xs md:text-sm text-gray-400",children:"Please wait while we fetch your settings"})]})}):$?i?n.jsxs("div",{className:"container mx-auto p-4 max-w-7xl mt-26 pb-52",children:[n.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8",children:n.jsxs("div",{children:[n.jsxs(wt,{to:"/dex",className:"text-sm text-gray-400 hover:text-primary-light mb-2 inline-flex items-center",children:[n.jsx("div",{className:"i-mdi:arrow-left h-4 w-4 mr-1"}),"Back to DEX Dashboard"]}),n.jsx("h1",{className:"text-2xl md:text-3xl font-bold gradient-text",children:"DEX Configuration"})]})}),n.jsx(qt,{onSubmit:Mt,className:"space-y-6",submitText:"Update DEX Configuration",isLoading:Nt,loadingText:"Saving",disabled:!1,enableRateLimit:!0,children:n.jsx(Yt,{mode:"direct",sections:Tt,showProgressTracker:!0,allProps:{brokerName:O,handleInputChange:ct,brokerNameValidator:Se,primaryLogo:L,secondaryLogo:T,favicon:w,handleImageChange:dt,currentTheme:l,defaultTheme:h,showThemeEditor:ae,viewCssCode:Ke,activeThemeTab:oe,themePrompt:R,isGeneratingTheme:Je,themeApplied:D,tradingViewColorConfig:A,toggleThemeEditor:lt,handleResetTheme:ot,handleResetToDefault:nt,handleResetSelectedColors:it,handleResetSelectedColorsToDefault:rt,handleThemeEditorChange:st,setViewCssCode:k,ThemeTabButton:bt,updateCssColor:ft,updateCssValue:ht,handleGenerateTheme:at,setTradingViewColorConfig:W,pnlPosters:V,handlePnLPosterChange:ut,telegramLink:H,discordLink:K,xLink:F,urlValidator:pt,seoSiteName:ue,seoSiteDescription:me,seoSiteLanguage:ge,seoSiteLocale:he,seoTwitterHandle:fe,seoThemeColor:pe,seoKeywords:be,walletConnectProjectId:J,privyAppId:G,privyTermsOfUse:q,privyLoginMethods:S,onPrivyLoginMethodsChange:z,enableAbstractWallet:C,onEnableAbstractWalletChange:Q,disableEvmWallets:I,disableSolanaWallets:M,onDisableEvmWalletsChange:ce,onDisableSolanaWalletsChange:de,chainIds:N,onChainIdsChange:ne,defaultChain:E,onDefaultChainChange:ie,disableMainnet:P,disableTestnet:j,onDisableMainnetChange:re,onDisableTestnetChange:le,availableLanguages:X,onAvailableLanguagesChange:ee,enabledMenus:x,setEnabledMenus:Y,customMenus:y,setCustomMenus:_,enableCampaigns:v,setEnableCampaigns:Z},idPrefix:"config-"})})]}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(Lt,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"No DEX Found"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"You need to create a DEX first before you can configure it."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(wt,{to:"/dex",className:"btn-connect",children:"Create Your DEX"})})]})]})}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(Lt,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"Authentication Required"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"Please connect your wallet and login to access DEX configuration."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(Gt,{})})]})]})})}export{Ca as default};
