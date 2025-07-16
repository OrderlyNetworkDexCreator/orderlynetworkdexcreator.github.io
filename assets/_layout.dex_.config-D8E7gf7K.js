import{r as t,j as n}from"./index-gtzDq4NN.js";import{u as Dt,y as i}from"./Button-BSfaTc78.js";import{u as Nt,W as jt}from"./WalletConnect-wZZg2GsW.js";import{g as Pt,p as Et,c as It,a as At}from"./apiClient-B3f8wvFK.js";import{C as et}from"./Card-CifjJiYp.js";import{c as Wt,F as Mt,D as Ot,v as Bt,a as Xt,m as $t,b as Rt,r as Ut}from"./DexSectionRenderer-wCDsEWGY.js";import{u as Vt}from"./index-NzCv2nBk.js";import{L as tt}from"./components-CnksOt0G.js";import"./elliptic-CmiuSZBJ.js";import"./index-CnWg8Wxw.js";import"./FormInput-DWjLgT8u.js";import"./index-Ca0uKtNp.js";import"./dayjs.min-DsMxAas2.js";import"./browser-Bm_RdZik.js";import"./index-Dvs6MNyz.js";import"./dijkstra-C00ieaqj.js";const p=`:root {
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
}`;function ns(){const{isAuthenticated:X,token:h,isLoading:st}=Dt(),{openModal:at}=Nt(),b=Vt(),[Q,Z]=t.useState(""),[ee,te]=t.useState(""),[se,ae]=t.useState(""),[oe,ne]=t.useState(""),[re,ie]=t.useState(""),[le,ce]=t.useState(""),[de,ue]=t.useState(""),[S,me]=t.useState(""),[x,ge]=t.useState(""),[y,fe]=t.useState(!1),[C,pe]=t.useState(!1),[L,he]=t.useState(null),[v,be]=t.useState(null),[w,Se]=t.useState(null),[$,xe]=t.useState([]),k=async s=>(await fetch(s)).blob(),T=s=>new Promise(e=>{const o=new FileReader;o.onloadend=()=>e(o.result),o.readAsDataURL(s)}),[R,ye]=t.useState([]),[ot,Ce]=t.useState(!1),[r,Le]=t.useState(null),[nt,ve]=t.useState(!1),[rt,D]=t.useState(!1),[a,we]=t.useState({id:"",brokerName:"",brokerId:"",preferredBrokerId:null,themeCSS:null,primaryLogo:null,secondaryLogo:null,favicon:null,pnlPosters:null,telegramLink:"",discordLink:"",xLink:"",walletConnectProjectId:"",privyAppId:"",privyTermsOfUse:"",enabledMenus:"",customMenus:"",enableAbstractWallet:!1,enableCampaigns:!1,chainIds:[],defaultChain:null,repoUrl:null,customDomain:null,disableMainnet:!1,disableTestnet:!1,disableEvmWallets:!1,disableSolanaWallets:!1,tradingViewColorConfig:null,availableLanguages:null,seoSiteName:null,seoSiteDescription:null,seoSiteLanguage:null,seoSiteLocale:null,seoTwitterHandle:null,seoThemeColor:null,seoKeywords:null,createdAt:"",updatedAt:""}),[U,V]=t.useState(""),[f,l]=t.useState(null),[it,ke]=t.useState(!1),[Te,H]=t.useState(!1),[N,c]=t.useState(!1),[De,Ne]=t.useState("colors"),[j,je]=t.useState([]),[P,Pe]=t.useState(void 0),[E,Ee]=t.useState(!1),[I,Ie]=t.useState(!1),[A,Ae]=t.useState(!1),[W,We]=t.useState(!1),[M,O]=t.useState(null),[Me,Oe]=t.useState(""),[Be,Xe]=t.useState(""),[$e,Re]=t.useState(""),[Ue,Ve]=t.useState(""),[He,Ke]=t.useState(""),[Fe,Je]=t.useState(""),[Ge,qe]=t.useState("");t.useEffect(()=>{if(!X||!h)return;async function s(){ve(!0);try{const e=await Pt("api/dex",h);if(e&&"exists"in e&&e.exists===!1){b("/dex");return}else e&&"id"in e?(Le(e),Z(e.brokerName),te(e.telegramLink||""),ae(e.discordLink||""),ne(e.xLink||""),ie(e.walletConnectProjectId||""),ce(e.privyAppId||""),ue(e.privyTermsOfUse||""),me(e.enabledMenus||""),ge(e.customMenus||""),fe(e.enableAbstractWallet||!1),pe(e.enableCampaigns||!1),Ee(e.disableMainnet||!1),Ie(e.disableTestnet||!1),Ae(e.disableEvmWallets||!1),We(e.disableSolanaWallets||!1),O(e.tradingViewColorConfig||null),ye(e.availableLanguages||[]),Oe(e.seoSiteName||""),Xe(e.seoSiteDescription||""),Re(e.seoSiteLanguage||""),Ve(e.seoSiteLocale||""),Ke(e.seoTwitterHandle||""),Je(e.seoThemeColor||""),qe(e.seoKeywords||""),D(!1),e.themeCSS?(l(e.themeCSS),c(!0)):(l(p),c(!0)),we({...e,chainIds:e.chainIds||[],defaultChain:e.defaultChain||null,enableAbstractWallet:e.enableAbstractWallet||!1,enableCampaigns:e.enableCampaigns||!1,disableMainnet:e.disableMainnet||!1,disableTestnet:e.disableTestnet||!1,disableEvmWallets:e.disableEvmWallets||!1,disableSolanaWallets:e.disableSolanaWallets||!1,availableLanguages:e.availableLanguages||[],seoSiteName:e.seoSiteName||null,seoSiteDescription:e.seoSiteDescription||null,seoSiteLanguage:e.seoSiteLanguage||null,seoSiteLocale:e.seoSiteLocale||null,seoTwitterHandle:e.seoTwitterHandle||null,seoThemeColor:e.seoThemeColor||null,seoKeywords:e.seoKeywords||null}),Ne("colors"),je(e.chainIds||[]),Pe(e.defaultChain||void 0)):b("/dex")}catch(e){console.error("Failed to fetch DEX data",e),b("/dex")}finally{ve(!1)}}s()},[X,h,b]),t.useEffect(()=>{!f&&!a.themeCSS&&(l(p),c(!0))},[f,a.themeCSS]),t.useEffect(()=>{r&&(async()=>{if(r.primaryLogo&&he(await k(r.primaryLogo)),r.secondaryLogo&&be(await k(r.secondaryLogo)),r.favicon&&Se(await k(r.favicon)),r.pnlPosters){const e=await Promise.all(r.pnlPosters.map(o=>o?k(o):Promise.resolve(null)));xe(e)}})()},[r]);const lt=async()=>{if(!U.trim()){i.error("Please enter a theme description");return}ke(!0);try{const s=await Et("api/theme/modify",{prompt:U.trim(),currentTheme:f||a.themeCSS},h);s&&s.theme?(at("themePreview",{theme:s.theme,onApply:ct,onCancel:dt}),i.success("Theme generated successfully!")):i.error("Failed to generate theme")}catch(s){console.error("Error generating theme:",s),i.error("Error generating theme. Please try again.")}finally{ke(!1)}},ct=s=>{l(s),c(!0)},dt=()=>{},ut=s=>{l(s),c(!0)},mt=()=>{l(a.themeCSS||null),c(!!a.themeCSS),O(a.tradingViewColorConfig||null),V(""),H(!1),D(!1),i.success("Theme reset")},gt=()=>{l(p),c(!0),O(null),V(""),H(!1),D(!1),i.success("Theme reset to default")},ft=()=>{H(!Te)},pt=s=>e=>{const o=e.target.value;switch(s){case"brokerName":Z(o);break;case"telegramLink":te(o);break;case"discordLink":ae(o);break;case"xLink":ne(o);break;case"walletConnectProjectId":ie(o);break;case"privyAppId":ce(o);break;case"privyTermsOfUse":ue(o);break;case"themePrompt":V(o);break;case"seoSiteName":Oe(o);break;case"seoSiteDescription":Xe(o);break;case"seoSiteLanguage":Re(o);break;case"seoSiteLocale":Ve(o);break;case"seoTwitterHandle":Ke(o);break;case"seoThemeColor":Je(o);break;case"seoKeywords":qe(o);break}},ht=s=>e=>{switch(s){case"primaryLogo":he(e);break;case"secondaryLogo":be(e);break;case"favicon":Se(e);break}},bt=s=>{xe(s)},St=async s=>{s.preventDefault();const e=Q.trim(),o=ee.trim(),d=se.trim(),B=oe.trim(),u=re.trim(),m=le.trim(),K=de.trim(),F=Me.trim(),J=Be.trim(),G=$e.trim(),q=Ue.trim(),Y=He.trim(),_=Fe.trim(),z=Ge.trim();if(!e){i.error("Broker name is required");return}const[Ye,_e,ze,Qe]=await Promise.all([L?T(L):Promise.resolve(null),v?T(v):Promise.resolve(null),w?T(w):Promise.resolve(null),Promise.all($.map(g=>g?T(g):Promise.resolve(null)))]);if(r&&r.id&&!(e!==(a.brokerName||"")||o!==(a.telegramLink||"")||d!==(a.discordLink||"")||B!==(a.xLink||"")||u!==(a.walletConnectProjectId||"")||m!==(a.privyAppId||"")||K!==(a.privyTermsOfUse||"")||S!==(a.enabledMenus||"")||x!==(a.customMenus||"")||Ye!==(a.primaryLogo||null)||_e!==(a.secondaryLogo||null)||ze!==(a.favicon||null)||JSON.stringify(Qe)!==JSON.stringify(a.pnlPosters||[])||N||JSON.stringify(j)!==JSON.stringify(a.chainIds||[])||P!==(a.defaultChain||void 0)||y!==(a.enableAbstractWallet||!1)||C!==(a.enableCampaigns||!1)||E!==(a.disableMainnet||!1)||I!==(a.disableTestnet||!1)||A!==(a.disableEvmWallets||!1)||W!==(a.disableSolanaWallets||!1)||JSON.stringify(M||null)!==JSON.stringify(a.tradingViewColorConfig||null)||JSON.stringify(R)!==JSON.stringify(a.availableLanguages||[])||F!==(a.seoSiteName||"")||J!==(a.seoSiteDescription||"")||G!==(a.seoSiteLanguage||"")||q!==(a.seoSiteLocale||"")||Y!==(a.seoTwitterHandle||"")||_!==(a.seoThemeColor||"")||z!==(a.seoKeywords||""))){i.info("No changes to save");return}Ce(!0);try{const g={primaryLogo:L,secondaryLogo:v,favicon:w,pnlPosters:$},kt={brokerName:e,telegramLink:o||null,discordLink:d||null,xLink:B||null,walletConnectProjectId:u||null,privyAppId:m||null,privyTermsOfUse:K||null,themeCSS:N?f:a.themeCSS,enabledMenus:S,customMenus:x,enableAbstractWallet:y,enableCampaigns:C,chainIds:j,defaultChain:P,disableMainnet:E,disableTestnet:I,disableEvmWallets:A,disableSolanaWallets:W,tradingViewColorConfig:M,availableLanguages:R,seoSiteName:F||null,seoSiteDescription:J||null,seoSiteLanguage:G||null,seoSiteLocale:q||null,seoTwitterHandle:Y||null,seoThemeColor:_||null,seoKeywords:z||null},Tt=It(kt,g);if(r&&r.id){const Ze=await At(`api/dex/${r.id}`,Tt,h);we({...Ze,brokerName:e,telegramLink:o,discordLink:d,xLink:B,walletConnectProjectId:u,privyAppId:m,privyTermsOfUse:K,enabledMenus:S,customMenus:x,primaryLogo:Ye,secondaryLogo:_e,favicon:ze,pnlPosters:Qe,themeCSS:N?f:null,enableAbstractWallet:y,enableCampaigns:C,chainIds:j,defaultChain:P,disableMainnet:E,disableTestnet:I,disableEvmWallets:A,disableSolanaWallets:W,tradingViewColorConfig:M,seoSiteName:F||null,seoSiteDescription:J||null,seoSiteLanguage:G||null,seoSiteLocale:q||null,seoTwitterHandle:Y||null,seoThemeColor:_||null,seoKeywords:z||null}),Le(Ze),i.success("DEX configuration updated successfully!"),b("/dex#dex-creation-status")}}catch(g){console.error("Error updating DEX:",g),i.error("Failed to update DEX configuration")}finally{Ce(!1)}},xt=s=>{s=s.replace("#","");const e=parseInt(s.slice(0,2),16),o=parseInt(s.slice(2,4),16),d=parseInt(s.slice(4,6),16);return`${e} ${o} ${d}`},yt=t.useCallback((s,e)=>{const o=xt(e);l(d=>{let u=d||p;if(s.startsWith("oui-color")){const m=new RegExp(`(--${s}:\\s*)(\\d+\\s+\\d+\\s+\\d+)`,"g");u=u.replace(m,`$1${o}`)}else if(s.startsWith("gradient")){const m=new RegExp(`(--oui-${s}:\\s*)(\\d+\\s+\\d+\\s+\\d+)`,"g");u=u.replace(m,`$1${o}`)}return u}),c(!0)},[p]),Ct=t.useCallback((s,e)=>{l(o=>{if(!o)return o;const d=new RegExp(`(--${s}:\\s*)([^;]+)`,"g");return o.replace(d,`$1${e}`)}),c(!0)},[]),Lt=Bt(),vt=Wt(Ut("Broker name"),Rt(3,"Broker name"),$t(50,"Broker name")),wt=({tab:s,label:e})=>n.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg ${De===s?"bg-background-dark/50 text-white border-t border-l border-r border-light/10":"bg-transparent text-gray-400 hover:text-white"}`,onClick:()=>Ne(s),type:"button",children:e});return st||nt?n.jsx("div",{className:"w-full h-[calc(100vh-64px)] flex items-center justify-center px-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),n.jsx("div",{className:"text-base md:text-lg mb-2",children:"Loading DEX Configuration"}),n.jsx("div",{className:"text-xs md:text-sm text-gray-400",children:"Please wait while we fetch your settings"})]})}):X?r?n.jsxs("div",{className:"container mx-auto p-4 max-w-3xl",children:[n.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8",children:n.jsxs("div",{children:[n.jsxs(tt,{to:"/dex",className:"text-sm text-gray-400 hover:text-primary-light mb-2 inline-flex items-center",children:[n.jsx("div",{className:"i-mdi:arrow-left h-4 w-4 mr-1"}),"Back to DEX Dashboard"]}),n.jsx("h1",{className:"text-2xl md:text-3xl font-bold gradient-text",children:"DEX Configuration"})]})}),n.jsx(Mt,{onSubmit:St,className:"space-y-6",submitText:"Update DEX Configuration",isLoading:ot,loadingText:"Saving",disabled:!1,children:n.jsx(Ot,{mode:"direct",sections:Xt,allProps:{brokerName:Q,handleInputChange:pt,brokerNameValidator:vt,primaryLogo:L,secondaryLogo:v,favicon:w,handleImageChange:ht,currentTheme:f,defaultTheme:p,showThemeEditor:Te,viewCssCode:rt,activeThemeTab:De,themePrompt:U,isGeneratingTheme:it,themeApplied:N,tradingViewColorConfig:M,toggleThemeEditor:ft,handleResetTheme:mt,handleResetToDefault:gt,handleThemeEditorChange:ut,setViewCssCode:D,ThemeTabButton:wt,updateCssColor:yt,updateCssValue:Ct,handleGenerateTheme:lt,setTradingViewColorConfig:O,pnlPosters:$,handlePnLPosterChange:bt,telegramLink:ee,discordLink:se,xLink:oe,urlValidator:Lt,seoSiteName:Me,seoSiteDescription:Be,seoSiteLanguage:$e,seoSiteLocale:Ue,seoTwitterHandle:He,seoThemeColor:Fe,seoKeywords:Ge,walletConnectProjectId:re,privyAppId:le,privyTermsOfUse:de,enableAbstractWallet:y,onEnableAbstractWalletChange:fe,disableEvmWallets:A,disableSolanaWallets:W,onDisableEvmWalletsChange:Ae,onDisableSolanaWalletsChange:We,chainIds:j,onChainIdsChange:je,defaultChain:P,onDefaultChainChange:Pe,disableMainnet:E,disableTestnet:I,onDisableMainnetChange:Ee,onDisableTestnetChange:Ie,availableLanguages:R,onAvailableLanguagesChange:ye,enabledMenus:S,setEnabledMenus:me,customMenus:x,setCustomMenus:ge,enableCampaigns:C,setEnableCampaigns:pe},idPrefix:"config-"})})]}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(et,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"No DEX Found"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"You need to create a DEX first before you can configure it."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(tt,{to:"/dex",className:"btn-connect",children:"Create Your DEX"})})]})]})}):n.jsx("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6",children:"DEX Configuration"}),n.jsxs(et,{children:[n.jsx("h2",{className:"text-lg md:text-xl font-medium mb-3 md:mb-4",children:"Authentication Required"}),n.jsx("p",{className:"mb-4 md:mb-6 text-sm md:text-base text-gray-300",children:"Please connect your wallet and login to access DEX configuration."}),n.jsx("div",{className:"flex justify-center",children:n.jsx(jt,{})})]})]})})}export{ns as default};
