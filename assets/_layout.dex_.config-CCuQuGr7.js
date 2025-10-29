import{r as t,j as o}from"./index-gtzDq4NN.js";import{y as l}from"./globalDisconnect-DEHmIGkh.js";import{u as Mt}from"./useAuth-RM4Avg_6.js";import{u as At}from"./ModalContext-3rcxIYCP.js";import{c as Wt,v as Vt,g as Bt,p as Xt,b as Ut,d as Ot,e as Ft,m as Ht,f as Kt,r as Rt}from"./apiClient-Br2nePLb.js";import{W as Gt}from"./WalletConnect-Bv6-w7CX.js";import{C as bt}from"./Card-DzC9HQ_p.js";import{F as $t}from"./ImagePaste-vd2XcMa8.js";import{u as qt,D as zt,a as xt}from"./useThemeCSS-DcqwGA7D.js";import{a as Yt}from"./index-B6zKOWfM.js";import{L as St}from"./components-CyfABTTb.js";import"./index-BftLqECp.js";import"./tslib.es6-DjQuqsdl.js";import"./switchMap-CAkRPEGC.js";import"./index--NnR_BUb.js";import"./iconify-AJT-F7UA.js";import"./clsx.m-DHulAg21.js";import"./FormInput-CKH1Jbq0.js";import"./index-DPI-5FQ-.js";import"./dayjs.min-DsMxAas2.js";import"./browser-BqbI9gSd.js";import"./index-Dvs6MNyz.js";import"./dijkstra-C00ieaqj.js";const u=`:root {
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
}`;function Sa(){const{isAuthenticated:U,token:g,isLoading:Ct}=Mt(),{openModal:yt}=At(),p=Yt(),[C,Se]=t.useState(""),[O,Ce]=t.useState(""),[F,ye]=t.useState(""),[H,ve]=t.useState(""),[K,Le]=t.useState(""),[R,Te]=t.useState(""),[G,ke]=t.useState(""),[y,$]=t.useState(["email"]),[v,q]=t.useState(""),[L,z]=t.useState(""),[T,Y]=t.useState(!1),[k,_]=t.useState(!1),[h,we]=t.useState(null),[f,De]=t.useState(null),[b,Pe]=t.useState(null),[w,Ne]=t.useState([]),D=async a=>(await fetch(a)).blob(),P=a=>new Promise(e=>{const s=new FileReader;s.onloadend=()=>e(s.result),s.readAsDataURL(a)}),[J,Q]=t.useState([]),[vt,je]=t.useState(!1),[i,Ee]=t.useState(null),[Lt,Ie]=t.useState(!1),[Me,x]=t.useState(!1),[d,Ae]=t.useState({id:"",brokerName:"",brokerId:"",themeCSS:null,primaryLogo:null,secondaryLogo:null,favicon:null,pnlPosters:null,telegramLink:"",discordLink:"",xLink:"",walletConnectProjectId:"",privyAppId:"",privyTermsOfUse:"",privyLoginMethods:null,enabledMenus:"",customMenus:"",enableAbstractWallet:!1,enableCampaigns:!1,chainIds:[],defaultChain:null,repoUrl:null,customDomain:null,disableMainnet:!1,disableTestnet:!1,disableEvmWallets:!1,disableSolanaWallets:!1,tradingViewColorConfig:null,availableLanguages:null,seoSiteName:null,seoSiteDescription:null,seoSiteLanguage:null,seoSiteLocale:null,seoTwitterHandle:null,seoThemeColor:null,seoKeywords:null,createdAt:"",updatedAt:""}),[N,Z]=t.useState(""),[m,n]=t.useState(null),[We,Ve]=t.useState(!1),[ee,te]=t.useState(!1),[j,r]=t.useState(!1),[ae,Be]=t.useState("colors"),[E,se]=t.useState([]),[I,oe]=t.useState(void 0),[M,ie]=t.useState(!1),[A,ne]=t.useState(!1),[W,re]=t.useState(!1),[V,le]=t.useState(!1),[B,S]=t.useState(null),[ce,Xe]=t.useState(""),[de,Ue]=t.useState(""),[me,Oe]=t.useState(""),[ue,Fe]=t.useState(""),[ge,He]=t.useState(""),[pe,Ke]=t.useState(""),[he,Re]=t.useState("");t.useEffect(()=>{if(!U||!g)return;async function a(){Ie(!0);try{const e=await Bt("api/dex",g);if(e&&"exists"in e&&e.exists===!1){p("/dex");return}else e&&"id"in e?(Ee(e),Se(e.brokerName),Ce(e.telegramLink||""),ye(e.discordLink||""),ve(e.xLink||""),Le(e.walletConnectProjectId||""),Te(e.privyAppId||""),ke(e.privyTermsOfUse||""),$(e.privyLoginMethods?e.privyLoginMethods.split(",").filter(Boolean):["email"]),q(e.enabledMenus||""),z(e.customMenus||""),Y(e.enableAbstractWallet||!1),_(e.enableCampaigns||!1),ie(e.disableMainnet||!1),ne(e.disableTestnet||!1),re(e.disableEvmWallets||!1),le(e.disableSolanaWallets||!1),S(e.tradingViewColorConfig??null),Q(e.availableLanguages||[]),Xe(e.seoSiteName||""),Ue(e.seoSiteDescription||""),Oe(e.seoSiteLanguage||""),Fe(e.seoSiteLocale||""),He(e.seoTwitterHandle||""),Ke(e.seoThemeColor||""),Re(e.seoKeywords||""),x(!1),e.themeCSS?(n(e.themeCSS),r(!0)):(n(u),r(!0)),Ae({...e,chainIds:e.chainIds||[],defaultChain:e.defaultChain,enableAbstractWallet:e.enableAbstractWallet||!1,enableCampaigns:e.enableCampaigns||!1,disableMainnet:e.disableMainnet||!1,disableTestnet:e.disableTestnet||!1,disableEvmWallets:e.disableEvmWallets||!1,disableSolanaWallets:e.disableSolanaWallets||!1,availableLanguages:e.availableLanguages||[],privyLoginMethods:e.privyLoginMethods,seoSiteName:e.seoSiteName,seoSiteDescription:e.seoSiteDescription,seoSiteLanguage:e.seoSiteLanguage,seoSiteLocale:e.seoSiteLocale,seoTwitterHandle:e.seoTwitterHandle,seoThemeColor:e.seoThemeColor,seoKeywords:e.seoKeywords}),Be("colors"),se(e.chainIds||[]),oe(e.defaultChain||void 0)):p("/dex")}catch(e){console.error("Failed to fetch DEX data",e),p("/dex")}finally{Ie(!1)}}a()},[U,g,p]),t.useEffect(()=>{!m&&!d.themeCSS&&(n(u),r(!0))},[m,d.themeCSS]),t.useEffect(()=>{i&&(async()=>{if(i.primaryLogo&&we(await D(i.primaryLogo)),i.secondaryLogo&&De(await D(i.secondaryLogo)),i.favicon&&Pe(await D(i.favicon)),i.pnlPosters){const e=await Promise.all(i.pnlPosters.map(s=>s?D(s):Promise.resolve(null)));Ne(e)}})()},[i]);const Ge=async()=>{if(!N.trim()){l.error("Please enter a theme description");return}Ve(!0);try{const a=await Xt("api/theme/modify",{prompt:N.trim(),currentTheme:m||d.themeCSS},g);a&&a.theme?(yt("themePreview",{theme:a.theme,onApply:Tt,onCancel:kt}),l.success("Theme generated successfully!")):l.error("Failed to generate theme")}catch(a){console.error("Error generating theme:",a),l.error("Error generating theme. Please try again.")}finally{Ve(!1)}},Tt=a=>{n(a),r(!0)},kt=()=>{},$e=a=>{n(a),r(!0)},qe=()=>{n(d.themeCSS??null),r(!!d.themeCSS),S(d.tradingViewColorConfig??null),Z(""),te(!1),x(!1),l.success("Theme reset")},ze=()=>{n(u),r(!0),S(null),Z(""),te(!1),x(!1),l.success("Theme reset to default")},Ye=()=>{te(!ee)},_e=a=>e=>{const s=e.target.value;switch(a){case"brokerName":Se(s);break;case"telegramLink":Ce(s);break;case"discordLink":ye(s);break;case"xLink":ve(s);break;case"walletConnectProjectId":Le(s);break;case"privyAppId":Te(s);break;case"privyTermsOfUse":ke(s);break;case"themePrompt":Z(s);break;case"seoSiteName":Xe(s);break;case"seoSiteDescription":Ue(s);break;case"seoSiteLanguage":Oe(s);break;case"seoSiteLocale":Fe(s);break;case"seoTwitterHandle":He(s);break;case"seoThemeColor":Ke(s);break;case"seoKeywords":Re(s);break}},Je=a=>e=>{switch(a){case"primaryLogo":we(e);break;case"secondaryLogo":De(e);break;case"favicon":Pe(e);break}},Qe=a=>{Ne(a)},wt=()=>{const a={brokerName:C,handleInputChange:_e,brokerNameValidator:fe,primaryLogo:h,secondaryLogo:f,favicon:b,handleImageChange:Je,currentTheme:m,defaultTheme:u,showThemeEditor:ee,viewCssCode:Me,activeThemeTab:ae,themePrompt:N,isGeneratingTheme:We,themeApplied:j,tradingViewColorConfig:B,toggleThemeEditor:Ye,handleResetTheme:qe,handleResetToDefault:ze,handleThemeEditorChange:$e,setViewCssCode:x,ThemeTabButton:ot,updateCssColor:at,updateCssValue:tt,handleGenerateTheme:Ge,setTradingViewColorConfig:S,pnlPosters:w,handlePnLPosterChange:Qe,telegramLink:O,discordLink:F,xLink:H,urlValidator:st,seoSiteName:ce,seoSiteDescription:de,seoSiteLanguage:me,seoSiteLocale:ue,seoTwitterHandle:ge,seoThemeColor:pe,seoKeywords:he,walletConnectProjectId:K,privyAppId:R,privyTermsOfUse:G,enableAbstractWallet:T,onEnableAbstractWalletChange:Y,disableEvmWallets:W,disableSolanaWallets:V,onDisableEvmWalletsChange:re,onDisableSolanaWalletsChange:le,privyLoginMethods:y,onPrivyLoginMethodsChange:$,chainIds:E,onChainIdsChange:se,defaultChain:I,onDefaultChainChange:oe,disableMainnet:M,disableTestnet:A,onDisableMainnetChange:ie,onDisableTestnetChange:ne,availableLanguages:J,onAvailableLanguagesChange:Q,enabledMenus:v,setEnabledMenus:q,customMenus:L,setCustomMenus:z,enableCampaigns:k,setEnableCampaigns:_},e=[];for(const s of xt)if(s.getValidationTest&&!s.getValidationTest(a))if(s.key==="brokerDetails"){const X=fe(C.trim());e.push(X||`${s.title}: validation failed`)}else s.key==="privyConfiguration"?e.push(`${s.title}: Please enter a valid Terms of Use URL`):e.push(`${s.title}: validation failed`);return e},Dt=async a=>{a.preventDefault();const e=wt();if(e.length>0){l.error(e[0]);return}const s=C.trim(),be=O.trim(),X=F.trim(),it=H.trim(),nt=K.trim(),rt=R.trim(),lt=G.trim(),ct=ce.trim(),dt=de.trim(),mt=me.trim(),ut=ue.trim(),gt=ge.trim(),pt=pe.trim(),ht=he.trim(),[Pt,Nt,jt,Et]=await Promise.all([h?P(h):Promise.resolve(null),f?P(f):Promise.resolve(null),b?P(b):Promise.resolve(null),Promise.all(w.map(c=>c?P(c):Promise.resolve(null)))]);je(!0);try{const c={primaryLogo:h,secondaryLogo:f,favicon:b,pnlPosters:w},xe={brokerName:s,telegramLink:be,discordLink:X,xLink:it,walletConnectProjectId:nt,privyAppId:rt,privyTermsOfUse:lt,privyLoginMethods:y.join(","),themeCSS:j?m:d.themeCSS,enabledMenus:v,customMenus:L,enableAbstractWallet:T,enableCampaigns:k,chainIds:E,defaultChain:I,disableMainnet:M,disableTestnet:A,disableEvmWallets:W,disableSolanaWallets:V,tradingViewColorConfig:B,availableLanguages:J,seoSiteName:ct,seoSiteDescription:dt,seoSiteLanguage:mt,seoSiteLocale:ut,seoTwitterHandle:gt,seoThemeColor:pt,seoKeywords:ht},It=Ut(xe,c);if(i&&i.id){const ft=await Ot(`api/dex/${i.id}`,It,g,{showToastOnError:!1});Ae({...ft,brokerName:s,telegramLink:be,discordLink:X,xLink:it,walletConnectProjectId:nt,privyAppId:rt,privyTermsOfUse:lt,privyLoginMethods:y.join(","),enabledMenus:v,customMenus:L,primaryLogo:Pt,secondaryLogo:Nt,favicon:jt,pnlPosters:Et,themeCSS:j?m:null,enableAbstractWallet:T,enableCampaigns:k,chainIds:E,defaultChain:I,disableMainnet:M,disableTestnet:A,disableEvmWallets:W,disableSolanaWallets:V,tradingViewColorConfig:B,seoSiteName:ct,seoSiteDescription:dt,seoSiteLanguage:mt,seoSiteLocale:ut,seoTwitterHandle:gt,seoThemeColor:pt,seoKeywords:ht}),Ee(ft),l.success("DEX configuration updated successfully!"),p("/dex#dex-creation-status")}}catch(c){console.error("Error updating DEX:",c);const xe=c instanceof Error?c.message:"Failed to update DEX configuration";l.error(xe)}finally{je(!1)}},{updateCssValue:Ze,updateCssColor:et}=qt(u),tt=t.useCallback((a,e)=>{Ze(a,e,n),r(!0)},[Ze]),at=t.useCallback((a,e)=>{et(a,e,n),r(!0)},[et]),st=Vt(),fe=Wt(Rt("Broker name"),Kt(3,"Broker name"),Ht(30,"Broker name"),Ft("Broker name")),ot=({tab:a,label:e})=>o.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg ${ae===a?"bg-background-dark/50 text-white border-t border-l border-r border-light/10":"bg-transparent text-gray-400 hover:text-white"}`,onClick:()=>Be(a),type:"button",children:e});return Ct||Lt?o.jsx("div",{className:"w-full h-[calc(100vh-64px)] flex items-center justify-center px-4 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),o.jsx("div",{className:"text-base md:text-lg mb-2",children:"Loading DEX Configuration"}),o.jsx("div",{className:"text-xs md:text-sm text-gray-400",children:"Please wait while we fetch your settings"})]})}):U?i?o.jsxs("div",{className:"container mx-auto p-4 max-w-7xl mt-26 pb-52",children:[o.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8",children:o.jsxs("div",{children:[o.jsxs(St,{to:"/dex",className:"text-sm text-gray-400 hover:text-primary-light mb-2 inline-flex items-center",children:[o.jsx("div",{className:"i-mdi:arrow-left h-4 w-4 mr-1"}),"Back to DEX Dashboard"]}),o.jsx("h1",{className:"text-2xl md:text-3xl font-bold gradient-text",children:"DEX Configuration"})]})}),o.jsx($t,{onSubmit:Dt,className:"space-y-6",submitText:"Update DEX Configuration",isLoading:vt,loadingText:"Saving",disabled:!1,enableRateLimit:!0,children:o.jsx(zt,{mode:"direct",sections:xt,showProgressTracker:!0,allProps:{brokerName:C,handleInputChange:_e,brokerNameValidator:fe,primaryLogo:h,secondaryLogo:f,favicon:b,handleImageChange:Je,currentTheme:m,defaultTheme:u,showThemeEditor:ee,viewCssCode:Me,activeThemeTab:ae,themePrompt:N,isGeneratingTheme:We,themeApplied:j,tradingViewColorConfig:B,toggleThemeEditor:Ye,handleResetTheme:qe,handleResetToDefault:ze,handleThemeEditorChange:$e,setViewCssCode:x,ThemeTabButton:ot,updateCssColor:at,updateCssValue:tt,handleGenerateTheme:Ge,setTradingViewColorConfig:S,pnlPosters:w,handlePnLPosterChange:Qe,telegramLink:O,discordLink:F,xLink:H,urlValidator:st,seoSiteName:ce,seoSiteDescription:de,seoSiteLanguage:me,seoSiteLocale:ue,seoTwitterHandle:ge,seoThemeColor:pe,seoKeywords:he,walletConnectProjectId:K,privyAppId:R,privyTermsOfUse:G,privyLoginMethods:y,onPrivyLoginMethodsChange:$,enableAbstractWallet:T,onEnableAbstractWalletChange:Y,disableEvmWallets:W,disableSolanaWallets:V,onDisableEvmWalletsChange:re,onDisableSolanaWalletsChange:le,chainIds:E,onChainIdsChange:se,defaultChain:I,onDefaultChainChange:oe,disableMainnet:M,disableTestnet:A,onDisableMainnetChange:ie,onDisableTestnetChange:ne,availableLanguages:J,onAvailableLanguagesChange:Q,enabledMenus:v,setEnabledMenus:q,customMenus:L,setCustomMenus:z,enableCampaigns:k,setEnableCampaigns:_},idPrefix:"config-"})})]}):o.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),o.jsxs(bt,{children:[o.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"No DEX Found"}),o.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"You need to create a DEX first before you can configure it."}),o.jsx("div",{className:"flex justify-center",children:o.jsx(St,{to:"/dex",className:"btn-connect",children:"Create Your DEX"})})]})]})}):o.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 mt-26 pb-52",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),o.jsxs(bt,{children:[o.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"Authentication Required"}),o.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"Please connect your wallet and login to access DEX configuration."}),o.jsx("div",{className:"flex justify-center",children:o.jsx(Gt,{})})]})]})})}export{Sa as default};
