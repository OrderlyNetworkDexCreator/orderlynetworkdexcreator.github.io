import{r as t,j as n}from"./index-gtzDq4NN.js";import{u as wt,y as i}from"./Button-DMPtKLLk.js";import{u as vt,W as kt}from"./WalletConnect-BTLK1zVc.js";import{g as Tt,p as Dt,c as Nt,a as jt}from"./FormInput-CX0dEUsj.js";import{C as _e}from"./Card-BT6HOUiC.js";import{c as Pt,F as Et,D as It,v as At,a as Wt,m as Mt,b as Ot,r as Bt}from"./DexSectionRenderer-Bt3rvfV3.js";import{u as Xt}from"./index-NzCv2nBk.js";import{L as ze}from"./components-CnksOt0G.js";import"./elliptic-CmiuSZBJ.js";import"./index-D4Vbe6LX.js";import"./dayjs.min-DsMxAas2.js";import"./browser-Bm_RdZik.js";import"./index-Dvs6MNyz.js";import"./dijkstra-C00ieaqj.js";const p=`:root {
  --oui-font-family: 'Manrope', sans-serif;

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
}`;function Zt(){const{isAuthenticated:O,token:b,isLoading:Qe}=wt(),{openModal:Ze}=vt(),h=Xt(),[_,z]=t.useState(""),[Q,Z]=t.useState(""),[ee,te]=t.useState(""),[se,ae]=t.useState(""),[oe,ne]=t.useState(""),[re,ie]=t.useState(""),[le,ce]=t.useState(""),[S,de]=t.useState(""),[x,ue]=t.useState(""),[y,me]=t.useState(!1),[L,ge]=t.useState(null),[C,fe]=t.useState(null),[w,pe]=t.useState(null),[B,be]=t.useState([]),v=async s=>(await fetch(s)).blob(),k=s=>new Promise(e=>{const o=new FileReader;o.onloadend=()=>e(o.result),o.readAsDataURL(s)}),[X,he]=t.useState([]),[et,Se]=t.useState(!1),[r,xe]=t.useState(null),[tt,ye]=t.useState(!1),[st,T]=t.useState(!1),[a,Le]=t.useState({id:"",brokerName:"",brokerId:"",preferredBrokerId:null,themeCSS:null,primaryLogo:null,secondaryLogo:null,favicon:null,pnlPosters:null,telegramLink:"",discordLink:"",xLink:"",walletConnectProjectId:"",privyAppId:"",privyTermsOfUse:"",enabledMenus:"",customMenus:"",enableAbstractWallet:!1,chainIds:[],repoUrl:null,customDomain:null,disableMainnet:!1,disableTestnet:!1,disableEvmWallets:!1,disableSolanaWallets:!1,tradingViewColorConfig:null,availableLanguages:null,seoSiteName:null,seoSiteDescription:null,seoSiteLanguage:null,seoSiteLocale:null,seoTwitterHandle:null,seoThemeColor:null,seoKeywords:null,createdAt:"",updatedAt:""}),[$,R]=t.useState(""),[f,l]=t.useState(null),[at,Ce]=t.useState(!1),[we,U]=t.useState(!1),[D,c]=t.useState(!1),[ve,ke]=t.useState("colors"),[N,Te]=t.useState([]),[j,De]=t.useState(!1),[P,Ne]=t.useState(!1),[E,je]=t.useState(!1),[I,Pe]=t.useState(!1),[A,W]=t.useState(null),[Ee,Ie]=t.useState(""),[Ae,We]=t.useState(""),[Me,Oe]=t.useState(""),[Be,Xe]=t.useState(""),[$e,Re]=t.useState(""),[Ue,Ve]=t.useState(""),[He,Ke]=t.useState("");t.useEffect(()=>{if(!O||!b)return;async function s(){ye(!0);try{const e=await Tt("api/dex",b);if(e&&"exists"in e&&e.exists===!1){h("/dex");return}else e&&"id"in e?(xe(e),z(e.brokerName),Z(e.telegramLink||""),te(e.discordLink||""),ae(e.xLink||""),ne(e.walletConnectProjectId||""),ie(e.privyAppId||""),ce(e.privyTermsOfUse||""),de(e.enabledMenus||""),ue(e.customMenus||""),me(e.enableAbstractWallet||!1),De(e.disableMainnet||!1),Ne(e.disableTestnet||!1),je(e.disableEvmWallets||!1),Pe(e.disableSolanaWallets||!1),W(e.tradingViewColorConfig||null),he(e.availableLanguages||[]),Ie(e.seoSiteName||""),We(e.seoSiteDescription||""),Oe(e.seoSiteLanguage||""),Xe(e.seoSiteLocale||""),Re(e.seoTwitterHandle||""),Ve(e.seoThemeColor||""),Ke(e.seoKeywords||""),T(!1),e.themeCSS?(l(e.themeCSS),c(!0)):(l(p),c(!0)),Le({...e,chainIds:e.chainIds||[],enableAbstractWallet:e.enableAbstractWallet||!1,disableMainnet:e.disableMainnet||!1,disableTestnet:e.disableTestnet||!1,disableEvmWallets:e.disableEvmWallets||!1,disableSolanaWallets:e.disableSolanaWallets||!1,availableLanguages:e.availableLanguages||[],seoSiteName:e.seoSiteName||null,seoSiteDescription:e.seoSiteDescription||null,seoSiteLanguage:e.seoSiteLanguage||null,seoSiteLocale:e.seoSiteLocale||null,seoTwitterHandle:e.seoTwitterHandle||null,seoThemeColor:e.seoThemeColor||null,seoKeywords:e.seoKeywords||null}),ke("colors"),Te(e.chainIds||[])):h("/dex")}catch(e){console.error("Failed to fetch DEX data",e),h("/dex")}finally{ye(!1)}}s()},[O,b,h]),t.useEffect(()=>{!f&&!a.themeCSS&&(l(p),c(!0))},[f,a.themeCSS]),t.useEffect(()=>{r&&(async()=>{if(r.primaryLogo&&ge(await v(r.primaryLogo)),r.secondaryLogo&&fe(await v(r.secondaryLogo)),r.favicon&&pe(await v(r.favicon)),r.pnlPosters){const e=await Promise.all(r.pnlPosters.map(o=>o?v(o):Promise.resolve(null)));be(e)}})()},[r]);const ot=async()=>{if(!$.trim()){i.error("Please enter a theme description");return}Ce(!0);try{const s=await Dt("api/theme/modify",{prompt:$.trim(),currentTheme:f||a.themeCSS},b);s&&s.theme?(Ze("themePreview",{theme:s.theme,onApply:nt,onCancel:rt}),i.success("Theme generated successfully!")):i.error("Failed to generate theme")}catch(s){console.error("Error generating theme:",s),i.error("Error generating theme. Please try again.")}finally{Ce(!1)}},nt=s=>{l(s),c(!0)},rt=()=>{},it=s=>{l(s),c(!0)},lt=()=>{l(a.themeCSS||null),c(!!a.themeCSS),W(a.tradingViewColorConfig||null),R(""),U(!1),T(!1),i.success("Theme reset")},ct=()=>{l(p),c(!0),W(null),R(""),U(!1),T(!1),i.success("Theme reset to default")},dt=()=>{U(!we)},ut=s=>e=>{const o=e.target.value;switch(s){case"brokerName":z(o);break;case"telegramLink":Z(o);break;case"discordLink":te(o);break;case"xLink":ae(o);break;case"walletConnectProjectId":ne(o);break;case"privyAppId":ie(o);break;case"privyTermsOfUse":ce(o);break;case"themePrompt":R(o);break;case"seoSiteName":Ie(o);break;case"seoSiteDescription":We(o);break;case"seoSiteLanguage":Oe(o);break;case"seoSiteLocale":Xe(o);break;case"seoTwitterHandle":Re(o);break;case"seoThemeColor":Ve(o);break;case"seoKeywords":Ke(o);break}},mt=s=>e=>{switch(s){case"primaryLogo":ge(e);break;case"secondaryLogo":fe(e);break;case"favicon":pe(e);break}},gt=s=>{be(s)},ft=async s=>{s.preventDefault();const e=_.trim(),o=Q.trim(),d=ee.trim(),M=se.trim(),u=oe.trim(),m=re.trim(),V=le.trim(),H=Ee.trim(),K=Ae.trim(),F=Me.trim(),J=Be.trim(),G=$e.trim(),q=Ue.trim(),Y=He.trim();if(!e){i.error("Broker name is required");return}const[Fe,Je,Ge,qe]=await Promise.all([L?k(L):Promise.resolve(null),C?k(C):Promise.resolve(null),w?k(w):Promise.resolve(null),Promise.all(B.map(g=>g?k(g):Promise.resolve(null)))]);if(r&&r.id&&!(e!==(a.brokerName||"")||o!==(a.telegramLink||"")||d!==(a.discordLink||"")||M!==(a.xLink||"")||u!==(a.walletConnectProjectId||"")||m!==(a.privyAppId||"")||V!==(a.privyTermsOfUse||"")||S!==(a.enabledMenus||"")||x!==(a.customMenus||"")||Fe!==(a.primaryLogo||null)||Je!==(a.secondaryLogo||null)||Ge!==(a.favicon||null)||JSON.stringify(qe)!==JSON.stringify(a.pnlPosters||[])||D||JSON.stringify(N)!==JSON.stringify(a.chainIds||[])||y!==(a.enableAbstractWallet||!1)||j!==(a.disableMainnet||!1)||P!==(a.disableTestnet||!1)||E!==(a.disableEvmWallets||!1)||I!==(a.disableSolanaWallets||!1)||JSON.stringify(A||null)!==JSON.stringify(a.tradingViewColorConfig||null)||JSON.stringify(X)!==JSON.stringify(a.availableLanguages||[])||H!==(a.seoSiteName||"")||K!==(a.seoSiteDescription||"")||F!==(a.seoSiteLanguage||"")||J!==(a.seoSiteLocale||"")||G!==(a.seoTwitterHandle||"")||q!==(a.seoThemeColor||"")||Y!==(a.seoKeywords||""))){i.info("No changes to save");return}Se(!0);try{const g={primaryLogo:L,secondaryLogo:C,favicon:w,pnlPosters:B},Lt={brokerName:e,telegramLink:o||null,discordLink:d||null,xLink:M||null,walletConnectProjectId:u||null,privyAppId:m||null,privyTermsOfUse:V||null,themeCSS:D?f:a.themeCSS,enabledMenus:S,customMenus:x,enableAbstractWallet:y,chainIds:N,disableMainnet:j,disableTestnet:P,disableEvmWallets:E,disableSolanaWallets:I,tradingViewColorConfig:A,availableLanguages:X,seoSiteName:H||null,seoSiteDescription:K||null,seoSiteLanguage:F||null,seoSiteLocale:J||null,seoTwitterHandle:G||null,seoThemeColor:q||null,seoKeywords:Y||null},Ct=Nt(Lt,g);if(r&&r.id){const Ye=await jt(`api/dex/${r.id}`,Ct,b);Le({...Ye,brokerName:e,telegramLink:o,discordLink:d,xLink:M,walletConnectProjectId:u,privyAppId:m,privyTermsOfUse:V,enabledMenus:S,customMenus:x,primaryLogo:Fe,secondaryLogo:Je,favicon:Ge,pnlPosters:qe,themeCSS:D?f:null,enableAbstractWallet:y,chainIds:N,disableMainnet:j,disableTestnet:P,disableEvmWallets:E,disableSolanaWallets:I,tradingViewColorConfig:A,seoSiteName:H||null,seoSiteDescription:K||null,seoSiteLanguage:F||null,seoSiteLocale:J||null,seoTwitterHandle:G||null,seoThemeColor:q||null,seoKeywords:Y||null}),xe(Ye),i.success("DEX configuration updated successfully!"),h("/dex")}}catch(g){console.error("Error updating DEX:",g),i.error("Failed to update DEX configuration")}finally{Se(!1)}},pt=s=>{s=s.replace("#","");const e=parseInt(s.slice(0,2),16),o=parseInt(s.slice(2,4),16),d=parseInt(s.slice(4,6),16);return`${e} ${o} ${d}`},bt=t.useCallback((s,e)=>{const o=pt(e);l(d=>{let u=d||p;if(s.startsWith("oui-color")){const m=new RegExp(`(--${s}:\\s*)(\\d+\\s+\\d+\\s+\\d+)`,"g");u=u.replace(m,`$1${o}`)}else if(s.startsWith("gradient")){const m=new RegExp(`(--oui-${s}:\\s*)(\\d+\\s+\\d+\\s+\\d+)`,"g");u=u.replace(m,`$1${o}`)}return u}),c(!0)},[p]),ht=t.useCallback((s,e)=>{l(o=>{if(!o)return o;const d=new RegExp(`(--${s}:\\s*)([^;]+)`,"g");return o.replace(d,`$1${e}`)}),c(!0)},[]),St=At(),xt=Pt(Bt("Broker name"),Ot(3,"Broker name"),Mt(50,"Broker name")),yt=({tab:s,label:e})=>n.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg ${ve===s?"bg-background-dark/50 text-white border-t border-l border-r border-light/10":"bg-transparent text-gray-400 hover:text-white"}`,onClick:()=>ke(s),type:"button",children:e});return Qe||tt?n.jsx("div",{className:"w-full h-[calc(100vh-64px)] flex items-center justify-center px-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),n.jsx("div",{className:"text-base md:text-lg mb-2",children:"Loading DEX Configuration"}),n.jsx("div",{className:"text-xs md:text-sm text-gray-400",children:"Please wait while we fetch your settings"})]})}):O?r?n.jsxs("div",{className:"container mx-auto p-4 max-w-3xl",children:[n.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8",children:n.jsxs("div",{children:[n.jsxs(ze,{to:"/dex",className:"text-sm text-gray-400 hover:text-primary-light mb-2 inline-flex items-center",children:[n.jsx("div",{className:"i-mdi:arrow-left h-4 w-4 mr-1"}),"Back to DEX Dashboard"]}),n.jsx("h1",{className:"text-2xl md:text-3xl font-bold gradient-text",children:"DEX Configuration"})]})}),n.jsx(Et,{onSubmit:ft,className:"space-y-6",submitText:"Update DEX Configuration",isLoading:et,loadingText:"Saving",disabled:!1,children:n.jsx(It,{mode:"direct",sections:Wt,allProps:{brokerName:_,handleInputChange:ut,brokerNameValidator:xt,primaryLogo:L,secondaryLogo:C,favicon:w,handleImageChange:mt,currentTheme:f,defaultTheme:p,showThemeEditor:we,viewCssCode:st,activeThemeTab:ve,themePrompt:$,isGeneratingTheme:at,themeApplied:D,tradingViewColorConfig:A,toggleThemeEditor:dt,handleResetTheme:lt,handleResetToDefault:ct,handleThemeEditorChange:it,setViewCssCode:T,ThemeTabButton:yt,updateCssColor:bt,updateCssValue:ht,handleGenerateTheme:ot,setTradingViewColorConfig:W,pnlPosters:B,handlePnLPosterChange:gt,telegramLink:Q,discordLink:ee,xLink:se,urlValidator:St,seoSiteName:Ee,seoSiteDescription:Ae,seoSiteLanguage:Me,seoSiteLocale:Be,seoTwitterHandle:$e,seoThemeColor:Ue,seoKeywords:He,walletConnectProjectId:oe,privyAppId:re,privyTermsOfUse:le,enableAbstractWallet:y,onEnableAbstractWalletChange:me,disableEvmWallets:E,disableSolanaWallets:I,onDisableEvmWalletsChange:je,onDisableSolanaWalletsChange:Pe,chainIds:N,onChainIdsChange:Te,disableMainnet:j,disableTestnet:P,onDisableMainnetChange:De,onDisableTestnetChange:Ne,availableLanguages:X,onAvailableLanguagesChange:he,enabledMenus:S,setEnabledMenus:de,customMenus:x,setCustomMenus:ue},idPrefix:"config-"})})]}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(_e,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"No DEX Found"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"You need to create a DEX first before you can configure it."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(ze,{to:"/dex",className:"btn-connect",children:"Create Your DEX"})})]})]})}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(_e,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"Authentication Required"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"Please connect your wallet and login to access DEX configuration."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(kt,{})})]})]})})}export{Zt as default};
