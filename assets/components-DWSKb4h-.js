const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DvpnhZJB.js","assets/custom-A51bstbZ.js","assets/i18n-fgUJB7wK.js","assets/languages-vppiBlCs.js","assets/i18nInstance-4f7Kr0BZ.js","assets/sha256-D1b4xQkT.js","assets/hmac-Bpd2M4Ab.js","assets/index-BtJtt-kL.js","assets/dijkstra-DQ7TgEK5.js","assets/browser-ponyfill-BMDBuBWt.js","assets/PhArrowCircleDown-BV5Sl1GQ.js","assets/property-3tIzMNbN.js","assets/PhArrowClockwise-BGVBoaZq.js","assets/PhArrowDown-D5MTzKA_.js","assets/PhArrowLeft-B8_JqLkL.js","assets/PhArrowRight-BRA4mSsk.js","assets/PhArrowSquareOut-BISljgy9.js","assets/PhArrowsDownUp-CtsxxDYh.js","assets/PhArrowsLeftRight-BQ1bY0PT.js","assets/PhArrowUp-BWNVmKoU.js","assets/PhArrowUpRight-ISdWwWxJ.js","assets/PhArrowsClockwise-CiXcW1Fh.js","assets/PhBank-BL0mlC5L.js","assets/PhBrowser-Dcx6MytM.js","assets/PhCaretDown-BZoeQxca.js","assets/PhCaretLeft-hpfjswvh.js","assets/PhCaretRight-RCkg0aUO.js","assets/PhCaretUp-7QdlgRUJ.js","assets/PhCheck-CXB_MPaJ.js","assets/PhCircleHalf-TYXfpIb0.js","assets/PhClock-BjdCrVzj.js","assets/PhCompass-DcCi1VYf.js","assets/PhCopy-CKppt1Bc.js","assets/PhCreditCard-DpPbLjnb.js","assets/PhCurrencyDollar-COl9F7TF.js","assets/PhDesktop-BqxgrmEa.js","assets/PhDeviceMobile-pv8394-7.js","assets/PhDotsThree-DwJl1Q5L.js","assets/PhVault-tm37gkIC.js","assets/PhEnvelope-Cur5tKdA.js","assets/PhFunnelSimple-gO2K3rhb.js","assets/PhGlobe-BQzbSD26.js","assets/PhIdentificationCard-GD5EdiRj.js","assets/PhImage-DZA-BFXt.js","assets/PhInfo-B2cde7cE.js","assets/PhLightbulb-DUCYPepb.js","assets/PhMagnifyingGlass-DEyUNDzV.js","assets/PhPaperPlaneRight-BYnOW9tG.js","assets/PhPlus-BX6rh-U-.js","assets/PhPower-DJhuav2s.js","assets/PhPuzzlePiece-B4k-hyA3.js","assets/PhQrCode-MnSe1hc9.js","assets/PhQuestion-DcsxAzVd.js","assets/PhQuestionMark-SXnw5Ld4.js","assets/PhSealCheck-DWgSaNxO.js","assets/PhSignOut-CDsBWQi7.js","assets/PhSpinner-M1b7jR9o.js","assets/PhTrash-DklgeHcT.js","assets/PhUser-Do4ZKt4P.js","assets/PhWallet-B9DnOVnW.js","assets/PhWarning-DEBACsaP.js","assets/PhWarningCircle-Hqi43qrq.js","assets/PhX-CvpgbsgX.js"])))=>i.map(i=>d[i]);
import{m as us,w as cn,l as Lh,g as gi,x as uc,W as Ka}from"./index-BtJtt-kL.js";import{_ as ne}from"./i18n-fgUJB7wK.js";import{d as Ai,b as Dh,r as Mh}from"./dijkstra-DQ7TgEK5.js";import"./browser-ponyfill-BMDBuBWt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"07b7ca12ba0d2283a2567474bcec4fd2e0bda085"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="78a53df9-83af-4a5f-a3a5-62cc7dba5758",e._sentryDebugIdIdentifier="sentry-dbid-78a53df9-83af-4a5f-a3a5-62cc7dba5758")}catch{}})();const Uh=Symbol(),Ul=Symbol(),co="a",hp="f",Cd="p",fp="c",mp="t",Wl="h",uo="w",Bl="o",Fl="k";let Wh=(e,t)=>new Proxy(e,t);const rl=Object.getPrototypeOf,il=new WeakMap,gp=e=>e&&(il.has(e)?il.get(e):rl(e)===Object.prototype||rl(e)===Array.prototype),aa=e=>typeof e=="object"&&e!==null,Bh=e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(t=>!t.configurable&&!t.writable),Fh=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(n=>{n.configurable=!0}),Object.create(rl(e),t)},jh=(e,t)=>{const n={[hp]:t};let r=!1;const o=(a,c)=>{if(!r){let l=n[co].get(e);if(l||(l={},n[co].set(e,l)),a===uo)l[uo]=!0;else{let d=l[a];d||(d=new Set,l[a]=d),d.add(c)}}},i=()=>{r=!0,n[co].delete(e)},s={get(a,c){return c===Ul?e:(o(Fl,c),zh(Reflect.get(a,c),n[co],n[fp],n[mp]))},has(a,c){return c===Uh?(i(),!0):(o(Wl,c),Reflect.has(a,c))},getOwnPropertyDescriptor(a,c){return o(Bl,c),Reflect.getOwnPropertyDescriptor(a,c)},ownKeys(a){return o(uo),Reflect.ownKeys(a)}};return t&&(s.set=s.deleteProperty=()=>!1),[s,n]},jl=e=>e[Ul]||e,zh=(e,t,n,r)=>{if(!gp(e))return e;let o=r&&r.get(e);if(!o){const c=jl(e);Bh(c)?o=[c,Fh(c)]:o=[c],r==null||r.set(e,o)}const[i,s]=o;let a=n&&n.get(i);return(!a||a[1][hp]!==!!s)&&(a=jh(i,!!s),a[1][Cd]=Wh(s||i,a[0]),n&&n.set(i,a)),a[1][co]=t,a[1][fp]=n,a[1][mp]=r,a[1][Cd]},Hh=(e,t)=>{const n=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return n.length!==r.length||n.some((o,i)=>o!==r[i])},Vh=(e,t,n,r,o=Object.is)=>{if(o(e,t))return!1;if(!aa(e)||!aa(t))return!0;const i=n.get(jl(e));if(!i)return!0;if(r){if(r.get(e)===t)return!1;r.set(e,t)}let s=null;for(const a of i[Wl]||[])if(s=Reflect.has(e,a)!==Reflect.has(t,a),s)return s;if(i[uo]===!0){if(s=Hh(e,t),s)return s}else for(const a of i[Bl]||[]){const c=!!Reflect.getOwnPropertyDescriptor(e,a),l=!!Reflect.getOwnPropertyDescriptor(t,a);if(s=c!==l,s)return s}for(const a of i[Fl]||[])if(s=Vh(e[a],t[a],n,r,o),s)return s;if(s===null)throw new Error("invalid used");return s},Kh=e=>gp(e)&&e[Ul]||null,vd=(e,t=!0)=>{il.set(e,t)},ky=(e,t,n)=>{const r=[],o=new WeakSet,i=(s,a)=>{var c,l,d;if(o.has(s))return;aa(s)&&o.add(s);const m=aa(s)&&t.get(jl(s));if(m){if((c=m[Wl])===null||c===void 0||c.forEach(w=>{const g=`:has(${String(w)})`;r.push(a?[...a,g]:[g])}),m[uo]===!0){const w=":ownKeys";r.push(a?[...a,w]:[w])}else(l=m[Bl])===null||l===void 0||l.forEach(w=>{const g=`:hasOwn(${String(w)})`;r.push(a?[...a,g]:[g])});(d=m[Fl])===null||d===void 0||d.forEach(w=>{"value"in(Object.getOwnPropertyDescriptor(s,w)||{})&&i(s[w],a?[...a,w]:[w])})}else a&&r.push(a)};return i(e),r},ca={},zl=e=>typeof e=="object"&&e!==null,qh=e=>zl(e)&&!ps.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!(e instanceof Promise),wp=(e,t)=>{const n=ol.get(e);if((n==null?void 0:n[0])===t)return n[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return vd(r,!0),ol.set(e,[t,r]),Reflect.ownKeys(e).forEach(o=>{if(Object.getOwnPropertyDescriptor(r,o))return;const i=Reflect.get(e,o),{enumerable:s}=Reflect.getOwnPropertyDescriptor(e,o),a={value:i,enumerable:s,configurable:!0};if(ps.has(i))vd(i,!1);else if(Xn.has(i)){const[c,l]=Xn.get(i);a.value=wp(c,l())}Object.defineProperty(r,o,a)}),Object.preventExtensions(r)},Gh=(e,t,n,r)=>({deleteProperty(o,i){const s=Reflect.get(o,i);n(i);const a=Reflect.deleteProperty(o,i);return a&&r(["delete",[i],s]),a},set(o,i,s,a){const c=!e()&&Reflect.has(o,i),l=Reflect.get(o,i,a);if(c&&(Ed(l,s)||go.has(s)&&Ed(l,go.get(s))))return!0;n(i),zl(s)&&(s=Kh(s)||s);const d=!Xn.has(s)&&Yh(s)?$e(s):s;return t(i,d),Reflect.set(o,i,d,a),r(["set",[i],s,l]),!0}}),Xn=new WeakMap,ps=new WeakSet,ol=new WeakMap,ta=[1],go=new WeakMap;let Ed=Object.is,Zh=(e,t)=>new Proxy(e,t),Yh=qh,Jh=wp,Xh=Gh;function $e(e={}){if(!zl(e))throw new Error("object required");const t=go.get(e);if(t)return t;let n=ta[0];const r=new Set,o=(C,x=++ta[0])=>{n!==x&&(i=n=x,r.forEach(A=>A(C,x)))};let i=n;const s=(C=ta[0])=>(i!==C&&(i=C,c.forEach(([x])=>{const A=x[1](C);A>n&&(n=A)})),n),a=C=>(x,A)=>{const R=[...x];R[1]=[C,...R[1]],o(R,A)},c=new Map,l=(C,x)=>{const A=!ps.has(x)&&Xn.get(x);if(A){if((ca?"production":void 0)!=="production"&&c.has(C))throw new Error("prop listener already exists");if(r.size){const R=A[2](a(C));c.set(C,[A,R])}else c.set(C,[A])}},d=C=>{var x;const A=c.get(C);A&&(c.delete(C),(x=A[1])==null||x.call(A))},m=C=>(r.add(C),r.size===1&&c.forEach(([A,R],O)=>{if((ca?"production":void 0)!=="production"&&R)throw new Error("remove already exists");const G=A[2](a(O));c.set(O,[A,G])}),()=>{r.delete(C),r.size===0&&c.forEach(([A,R],O)=>{R&&(R(),c.set(O,[A]))})});let w=!0;const g=Xh(()=>w,l,d,o),b=Zh(e,g);go.set(e,b);const y=[e,s,m];return Xn.set(b,y),Reflect.ownKeys(e).forEach(C=>{const x=Object.getOwnPropertyDescriptor(e,C);"value"in x&&x.writable&&(b[C]=e[C])}),w=!1,b}function He(e,t,n){const r=Xn.get(e);(ca?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],s=r[2];let a=!1;const l=s(d=>{i.push(d),o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function wo(e){const t=Xn.get(e);(ca?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[n,r]=t;return Jh(n,r())}function Ri(e){return ps.add(e),e}function Qh(){return{proxyStateMap:Xn,refSet:ps,snapCache:ol,versionHolder:ta,proxyCache:go}}function Ve(e,t,n,r){let o=e[t];return He(e,()=>{const i=e[t];Object.is(o,i)||n(o=i)})}const{proxyStateMap:ef,snapCache:tf}=Qh(),Ws=e=>ef.has(e);function nf(e){const t=[];let n=0;const r=new Map,o=new WeakMap,i=()=>{const l=tf.get(a),d=l==null?void 0:l[1];if(d&&!o.has(d)){const m=new Map(r);o.set(d,m)}},s=l=>o.get(l)||r,a={data:t,index:n,epoch:0,get size(){return Ws(this)||i(),s(this).size},get(l){const m=s(this).get(l);if(m===void 0){this.epoch;return}return this.data[m]},has(l){const d=s(this);return this.epoch,d.has(l)},set(l,d){if(!Ws(this))throw new Error("Cannot perform mutations on a snapshot");const m=r.get(l);return m===void 0?(r.set(l,this.index),this.data[this.index++]=d):this.data[m]=d,this.epoch++,this},delete(l){if(!Ws(this))throw new Error("Cannot perform mutations on a snapshot");const d=r.get(l);return d===void 0?!1:(delete this.data[d],r.delete(l),this.epoch++,!0)},clear(){if(!Ws(this))throw new Error("Cannot perform mutations on a snapshot");this.data.length=0,this.index=0,this.epoch++,r.clear()},forEach(l){this.epoch,s(this).forEach((m,w)=>{l(this.data[m],w,this)})},*entries(){this.epoch;const l=s(this);for(const[d,m]of l)yield[d,this.data[m]]},*keys(){this.epoch;const l=s(this);for(const d of l.keys())yield d},*values(){this.epoch;const l=s(this);for(const d of l.values())yield this.data[d]},[Symbol.iterator](){return this.entries()},get[Symbol.toStringTag](){return"Map"},toJSON(){return new Map(this.entries())}},c=$e(a);return Object.defineProperties(c,{size:{enumerable:!1},index:{enumerable:!1},epoch:{enumerable:!1},data:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(c),c}const bp={isLowerCaseMatch(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())}};var na={exports:{}},rf=na.exports,_d;function of(){return _d||(_d=1,function(e,t){(function(n,r){e.exports=r()})(rf,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var r=["th","st","nd","rd"],o=n%100;return"["+n+(r[(o-20)%10]||r[o]||r[0])+"]"}}})}(na)),na.exports}var sf=of();const af=us(sf);var ra={exports:{}},cf=ra.exports,Ad;function lf(){return Ad||(Ad=1,function(e,t){(function(n,r){e.exports=r()})(cf,function(){return function(n,r,o){n=n||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,m,w){return i.fromToBase(l,d,m,w)}o.en.relativeTime=s,i.fromToBase=function(l,d,m,w,g){for(var b,y,C,x=m.$locale().relativeTime||s,A=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],R=A.length,O=0;O<R;O+=1){var G=A[O];G.d&&(b=w?o(l).diff(m,G.d,!0):m.diff(l,G.d,!0));var U=(n.rounding||Math.round)(Math.abs(b));if(C=b>0,U<=G.r||!G.r){U<=1&&O>0&&(G=A[O-1]);var F=x[G.l];g&&(U=g(""+U)),y=typeof F=="string"?F.replace("%d",U):F(U,d,G.l,C);break}}if(d)return y;var Y=C?x.future:x.past;return typeof Y=="function"?Y(y):Y.replace("%s",y)},i.to=function(l,d){return a(l,d,this,!0)},i.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?o.utc():o()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})}(ra)),ra.exports}var df=lf();const uf=us(df);var ia={exports:{}},pf=ia.exports,xd;function hf(){return xd||(xd=1,function(e,t){(function(n,r){e.exports=r()})(pf,function(){return function(n,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})}(ia)),ia.exports}var ff=hf();const mf=us(ff);Ai.extend(uf);Ai.extend(mf);const gf={...af,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},wf=["January","February","March","April","May","June","July","August","September","October","November","December"];Ai.locale("en-web3-modal",gf);const sl={getMonthNameByIndex(e){return wf[e]},getYear(e=new Date().toISOString()){return Ai(e).year()},getRelativeDateFromNow(e){return Ai(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return Ai(e).format(t)}};var Sd={};const _={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",BASE_ACCOUNT:"baseAccount",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122",TON:"ton",TRON:"tron"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks",ton:"TON",tron:"TRON"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",TON:"ton",TRON:"tron"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],SOLANA_SPL_TOKEN_ADDRESSES:{SOL:"So11111111111111111111111111111111111111112"},NATIVE_IMAGE_IDS_BY_NAMESPACE:{eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"3e8119e5-2a6f-4818-c50c-1937011d5900",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},TOKEN_SYMBOLS_BY_ADDRESS:{"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":"USDC","0x833589fcd6edb6e08f4c7c32d4f71b54bda02913":"USDC","0x0b2c639c533813f4aa9d7837caf62653d097ff85":"USDC","0xaf88d065e77c8cc2239327c5edb3a432268e5831":"USDC","0x3c499c542cef5e3811e1192ce70d8cc03d5c3359":"USDC","0x2791bca1f2de4661ed88a30c99a7a9449aa84174":"USDC",EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:"USDC","0xdac17f958d2ee523a2206206994597c13d831ec7":"USDT","0x94b008aa00579c1307b0ef2c499ad98a8ce58e58":"USDT","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9":"USDT","0xc2132d05d31c914a87c6611c10748aeb04b58e8f":"USDT",Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:"USDT"},HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof cn<"u"&&typeof Sd<"u"?Sd.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}},HEADLESS_NOT_ENABLED:{DEFAULT:{displayMessage:"",debugMessage:"Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."}}},IS_DEVELOPMENT:typeof cn<"u"&&!1,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://localhost:*","http://127.0.0.1:*","https://127.0.0.1:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"],METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH"},bf={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return(e==null?void 0:e.filter(n=>n.chainNamespace===t))||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){var o;if(!t)return;const n=e.find(i=>i.caipNetworkId===t);if(n)return n.name;const[r]=t.split(":");return((o=_.CHAIN_NAME_MAP)==null?void 0:o[r])||void 0}},yp=["eip155","solana","polkadot","bip122","cosmos","sui","stacks"];var yf=20,Cf=1,Nr=1e6,Td=1e6,vf=-7,Ef=21,_f=!1,hs="[big.js] ",ni=hs+"Invalid ",qa=ni+"decimal places",Af=ni+"rounding mode",Cp=hs+"Division by zero",Se={},ln=void 0,xf=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function vp(){function e(t){var n=this;if(!(n instanceof e))return t===ln?vp():new e(t);if(t instanceof e)n.s=t.s,n.e=t.e,n.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(ni+"value");t=t===0&&1/t<0?"-0":String(t)}Sf(n,t)}n.constructor=e}return e.prototype=Se,e.DP=yf,e.RM=Cf,e.NE=vf,e.PE=Ef,e.strict=_f,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function Sf(e,t){var n,r,o;if(!xf.test(t))throw Error(ni+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),o=t.length,r=0;r<o&&t.charAt(r)=="0";)++r;if(r==o)e.c=[e.e=0];else{for(;o>0&&t.charAt(--o)=="0";);for(e.e=n-r-1,e.c=[],n=0;r<=o;)e.c[n++]=+t.charAt(r++)}return e}function ri(e,t,n,r){var o=e.c;if(n===ln&&(n=e.constructor.RM),n!==0&&n!==1&&n!==2&&n!==3)throw Error(Af);if(t<1)r=n===3&&(r||!!o[0])||t===0&&(n===1&&o[0]>=5||n===2&&(o[0]>5||o[0]===5&&(r||o[1]!==ln))),o.length=1,r?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(r=n===1&&o[t]>=5||n===2&&(o[t]>5||o[t]===5&&(r||o[t+1]!==ln||o[t-1]&1))||n===3&&(r||!!o[0]),o.length=t,r){for(;++o[--t]>9;)if(o[t]=0,t===0){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function ii(e,t,n){var r=e.e,o=e.c.join(""),i=o.length;if(t)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(r<0?"e":"e+")+r;else if(r<0){for(;++r;)o="0"+o;o="0."+o}else if(r>0)if(++r>i)for(r-=i;r--;)o+="0";else r<i&&(o=o.slice(0,r)+"."+o.slice(r));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&n?"-"+o:o}Se.abs=function(){var e=new this.constructor(this);return e.s=1,e};Se.cmp=function(e){var t,n=this,r=n.c,o=(e=new n.constructor(e)).c,i=n.s,s=e.s,a=n.e,c=e.e;if(!r[0]||!o[0])return r[0]?i:o[0]?-s:0;if(i!=s)return i;if(t=i<0,a!=c)return a>c^t?1:-1;for(s=(a=r.length)<(c=o.length)?a:c,i=-1;++i<s;)if(r[i]!=o[i])return r[i]>o[i]^t?1:-1;return a==c?0:a>c^t?1:-1};Se.div=function(e){var t=this,n=t.constructor,r=t.c,o=(e=new n(e)).c,i=t.s==e.s?1:-1,s=n.DP;if(s!==~~s||s<0||s>Nr)throw Error(qa);if(!o[0])throw Error(Cp);if(!r[0])return e.s=i,e.c=[e.e=0],e;var a,c,l,d,m,w=o.slice(),g=a=o.length,b=r.length,y=r.slice(0,a),C=y.length,x=e,A=x.c=[],R=0,O=s+(x.e=t.e-e.e)+1;for(x.s=i,i=O<0?0:O,w.unshift(0);C++<a;)y.push(0);do{for(l=0;l<10;l++){if(a!=(C=y.length))d=a>C?1:-1;else for(m=-1,d=0;++m<a;)if(o[m]!=y[m]){d=o[m]>y[m]?1:-1;break}if(d<0){for(c=C==a?o:w;C;){if(y[--C]<c[C]){for(m=C;m&&!y[--m];)y[m]=9;--y[m],y[C]+=10}y[C]-=c[C]}for(;!y[0];)y.shift()}else break}A[R++]=d?l:++l,y[0]&&d?y[C]=r[g]||0:y=[r[g]]}while((g++<b||y[0]!==ln)&&i--);return!A[0]&&R!=1&&(A.shift(),x.e--,O--),R>O&&ri(x,O,n.RM,y[0]!==ln),x};Se.eq=function(e){return this.cmp(e)===0};Se.gt=function(e){return this.cmp(e)>0};Se.gte=function(e){return this.cmp(e)>-1};Se.lt=function(e){return this.cmp(e)<0};Se.lte=function(e){return this.cmp(e)<1};Se.minus=Se.sub=function(e){var t,n,r,o,i=this,s=i.constructor,a=i.s,c=(e=new s(e)).s;if(a!=c)return e.s=-c,i.plus(e);var l=i.c.slice(),d=i.e,m=e.c,w=e.e;if(!l[0]||!m[0])return m[0]?e.s=-c:l[0]?e=new s(i):e.s=1,e;if(a=d-w){for((o=a<0)?(a=-a,r=l):(w=d,r=m),r.reverse(),c=a;c--;)r.push(0);r.reverse()}else for(n=((o=l.length<m.length)?l:m).length,a=c=0;c<n;c++)if(l[c]!=m[c]){o=l[c]<m[c];break}if(o&&(r=l,l=m,m=r,e.s=-e.s),(c=(n=m.length)-(t=l.length))>0)for(;c--;)l[t++]=0;for(c=t;n>a;){if(l[--n]<m[n]){for(t=n;t&&!l[--t];)l[t]=9;--l[t],l[n]+=10}l[n]-=m[n]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--w;return l[0]||(e.s=1,l=[w=0]),e.c=l,e.e=w,e};Se.mod=function(e){var t,n=this,r=n.constructor,o=n.s,i=(e=new r(e)).s;if(!e.c[0])throw Error(Cp);return n.s=e.s=1,t=e.cmp(n)==1,n.s=o,e.s=i,t?new r(n):(o=r.DP,i=r.RM,r.DP=r.RM=0,n=n.div(e),r.DP=o,r.RM=i,this.minus(n.times(e)))};Se.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e};Se.plus=Se.add=function(e){var t,n,r,o=this,i=o.constructor;if(e=new i(e),o.s!=e.s)return e.s=-e.s,o.minus(e);var s=o.e,a=o.c,c=e.e,l=e.c;if(!a[0]||!l[0])return l[0]||(a[0]?e=new i(o):e.s=o.s),e;if(a=a.slice(),t=s-c){for(t>0?(c=s,r=l):(t=-t,r=a),r.reverse();t--;)r.push(0);r.reverse()}for(a.length-l.length<0&&(r=l,l=a,a=r),t=l.length,n=0;t;a[t]%=10)n=(a[--t]=a[t]+l[t]+n)/10|0;for(n&&(a.unshift(n),++c),t=a.length;a[--t]===0;)a.pop();return e.c=a,e.e=c,e};Se.pow=function(e){var t=this,n=new t.constructor("1"),r=n,o=e<0;if(e!==~~e||e<-Td||e>Td)throw Error(ni+"exponent");for(o&&(e=-e);e&1&&(r=r.times(t)),e>>=1,!!e;)t=t.times(t);return o?n.div(r):r};Se.prec=function(e,t){if(e!==~~e||e<1||e>Nr)throw Error(ni+"precision");return ri(new this.constructor(this),e,t)};Se.round=function(e,t){if(e===ln)e=0;else if(e!==~~e||e<-Nr||e>Nr)throw Error(qa);return ri(new this.constructor(this),e+this.e+1,t)};Se.sqrt=function(){var e,t,n,r=this,o=r.constructor,i=r.s,s=r.e,a=new o("0.5");if(!r.c[0])return new o(r);if(i<0)throw Error(hs+"No square root");i=Math.sqrt(+ii(r,!0,!0)),i===0||i===1/0?(t=r.c.join(""),t.length+s&1||(t+="0"),i=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new o((i==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+s)):e=new o(i+""),s=e.e+(o.DP+=4);do n=e,e=a.times(n.plus(r.div(n)));while(n.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return ri(e,(o.DP-=4)+e.e+1,o.RM)};Se.times=Se.mul=function(e){var t,n=this,r=n.constructor,o=n.c,i=(e=new r(e)).c,s=o.length,a=i.length,c=n.e,l=e.e;if(e.s=n.s==e.s?1:-1,!o[0]||!i[0])return e.c=[e.e=0],e;for(e.e=c+l,s<a&&(t=o,o=i,i=t,l=s,s=a,a=l),t=new Array(l=s+a);l--;)t[l]=0;for(c=a;c--;){for(a=0,l=s+c;l>c;)a=t[l]+i[c]*o[l-c-1]+a,t[l--]=a%10,a=a/10|0;t[l]=a}for(a?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e};Se.toExponential=function(e,t){var n=this,r=n.c[0];if(e!==ln){if(e!==~~e||e<0||e>Nr)throw Error(qa);for(n=ri(new n.constructor(n),++e,t);n.c.length<e;)n.c.push(0)}return ii(n,!0,!!r)};Se.toFixed=function(e,t){var n=this,r=n.c[0];if(e!==ln){if(e!==~~e||e<0||e>Nr)throw Error(qa);for(n=ri(new n.constructor(n),e+n.e+1,t),e=e+n.e+1;n.c.length<e;)n.c.push(0)}return ii(n,!1,!!r)};Se[Symbol.for("nodejs.util.inspect.custom")]=Se.toJSON=Se.toString=function(){var e=this,t=e.constructor;return ii(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};Se.toNumber=function(){var e=+ii(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(hs+"Imprecise conversion");return e};Se.toPrecision=function(e,t){var n=this,r=n.constructor,o=n.c[0];if(e!==ln){if(e!==~~e||e<1||e>Nr)throw Error(ni+"precision");for(n=ri(new r(n),e,t);n.c.length<e;)n.c.push(0)}return ii(n,e<=n.e||n.e<=r.NE||n.e>=r.PE,!!o)};Se.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(hs+"valueOf disallowed");return ii(e,e.e<=t.NE||e.e>=t.PE,!0)};var tn=vp();const Ii={bigNumber(e,t={safe:!1}){try{return e?new tn(e):new tn(0)}catch(n){if(t.safe)return new tn(0);throw n}},formatNumber(e,t){const{decimals:n,round:r=8,safe:o=!0}=t;return Ii.bigNumber(e,{safe:o}).div(new tn(10).pow(n)).round(r)},multiply(e,t){if(e===void 0||t===void 0)return new tn(0);const n=new tn(e),r=new tn(t);return n.times(r)},toFixed(e,t=2){return e===void 0||e===""?new tn(0).toFixed(t):new tn(e).toFixed(t)},formatNumberToLocalString(e,t=2){return e===void 0||e===""?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"})},parseLocalStringToNumber(e){if(e===void 0||e==="")return 0;const t=e.replace(/,/gu,"");return new tn(t).toNumber()}},Tf=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Nf=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Rf=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],If={getERC20Abi:e=>_.USDT_CONTRACT_ADDRESSES.includes(e)?Rf:Tf,getSwapAbi:()=>Nf},$f={URLS:{FAQ:"https://walletconnect.com/faq"}},wi={ConnectorExplorerIds:{[_.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[_.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[_.CONNECTOR_ID.BASE_ACCOUNT]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[_.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[_.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[_.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[_.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[_.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[_.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[_.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[_.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[_.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[_.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[_.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[_.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[_.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[_.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[_.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[_.BINANCE_CONNECTOR_NAME]:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"},ConnectorImageIds:{[_.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[_.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[_.CONNECTOR_ID.BASE_ACCOUNT]:"bba2c8be-7fd1-463e-42b1-796ecb0ad200",[_.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[_.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[_.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[_.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[_.CONNECTOR_ID.INJECTED]:"Browser Wallet",[_.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[_.CONNECTOR_ID.COINBASE]:"Coinbase",[_.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[_.CONNECTOR_ID.BASE_ACCOUNT]:"Base Account",[_.CONNECTOR_ID.LEDGER]:"Ledger",[_.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[_.CONNECTOR_ID.INJECTED]:"INJECTED",[_.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[_.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[_.CONNECTOR_ID.AUTH]:"AUTH"}},At={validateCaipAddress(e){var t;if(((t=e.split(":"))==null?void 0:t.length)!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);const[n,r,o]=t;if(!n||!r||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:n,chainId:r,address:o}},parseCaipNetworkId(e){const t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[n,r]=t;if(!n||!r)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:n,chainId:r}}},$t={RPC_ERROR_CODE:{USER_REJECTED_REQUEST:4001,USER_REJECTED_METHODS:5002,USER_REJECTED:5e3,SEND_TRANSACTION_ERROR:5001},PROVIDER_RPC_ERROR_NAME:{PROVIDER_RPC:"ProviderRpcError",USER_REJECTED_REQUEST:"UserRejectedRequestError",SEND_TRANSACTION_ERROR:"SendTransactionError"},isRpcProviderError(e){try{if(typeof e=="object"&&e!==null){const t=e,n=typeof t.message=="string",r=typeof t.code=="number";return n&&r}return!1}catch{return!1}},isUserRejectedMessage(e){return e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user cancelled")||e.toLowerCase().includes("user canceled")},isUserRejectedRequestError(e){if($t.isRpcProviderError(e)){const t=e.code===$t.RPC_ERROR_CODE.USER_REJECTED_REQUEST,n=e.code===$t.RPC_ERROR_CODE.USER_REJECTED_METHODS;return t||n||$t.isUserRejectedMessage(e.message)}return e instanceof Error?$t.isUserRejectedMessage(e.message):!1}};let kf=class extends Error{constructor(t,n){super(n.message,{cause:t}),this.name=$t.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC,this.code=n.code}},Of=class extends kf{constructor(t){super(t,{code:$t.RPC_ERROR_CODE.USER_REJECTED_REQUEST,message:"User rejected the request"}),this.name=$t.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST}};const J={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",RECENT_WALLET:"@appkit/recent_wallet",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections",DISCONNECTED_CONNECTOR_IDS:"@appkit/disconnected_connector_ids",HISTORY_TRANSACTIONS_CACHE:"@appkit/history_transactions_cache",TOKEN_PRICE_CACHE:"@appkit/token_price_cache",RECENT_EMAILS:"@appkit/recent_emails",LATEST_APPKIT_VERSION:"@appkit/latest_version",TON_WALLETS_CACHE:"@appkit/ton_wallets_cache"};function pc(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const Z={setItem(e,t){lo()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(lo())return localStorage.getItem(e)||void 0},removeItem(e){lo()&&localStorage.removeItem(e)},clear(){lo()&&localStorage.clear()}};function lo(){return typeof window<"u"&&typeof localStorage<"u"}function la(e,t){const n=(e==null?void 0:e["--apkt-accent"])??(e==null?void 0:e["--w3m-accent"]);return t==="light"?{"--w3m-accent":n||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":n||"hsla(230, 100%, 67%, 1)","--w3m-background":"#202020"}}var Nd={};const hc=(typeof cn<"u"&&typeof Nd<"u"?Nd.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Ly=[{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],Dy="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",Ce={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:hc,SECURE_SITE_DASHBOARD:`${hc}/dashboard`,SECURE_SITE_FAVICON:`${hc}/images/favicon.png`,SOLANA_NATIVE_TOKEN_ADDRESS:"So11111111111111111111111111111111111111111",RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SUGGESTED_TOKENS_BY_CHAIN:{"eip155:42161":["USD₮0"]},BALANCE_SUPPORTED_CHAINS:[_.CHAIN.EVM,_.CHAIN.SOLANA],SEND_PARAMS_SUPPORTED_CHAINS:[_.CHAIN.EVM],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:[_.CHAIN.EVM],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:[_.CHAIN.EVM,_.CHAIN.SOLANA],PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES:[_.CHAIN.EVM,_.CHAIN.SOLANA],ACTIVITY_ENABLED_CHAIN_NAMESPACES:[_.CHAIN.EVM,_.CHAIN.TON],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x",ton:"0x",tron:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:[_.CHAIN.EVM,_.CHAIN.SOLANA],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0,multiWallet:!1,emailCapture:!1,payWithExchange:!1,payments:!1,reownAuthentication:!1,headless:!1},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1,emailCapture:!1,reownAuthentication:!1,headless:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1,headless:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa",ton:"eoa",tron:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"},SIWX_DEFAULTS:{signOutOnDisconnect:!0},MANDATORY_WALLET_IDS_ON_MOBILE:[wi.ConnectorExplorerIds[_.CONNECTOR_ID.COINBASE],wi.ConnectorExplorerIds[_.CONNECTOR_ID.COINBASE_SDK],wi.ConnectorExplorerIds[_.CONNECTOR_ID.BASE_ACCOUNT],wi.ConnectorExplorerIds[_.SOLFLARE_CONNECTOR_NAME],wi.ConnectorExplorerIds[_.PHANTOM_CONNECTOR_NAME],wi.ConnectorExplorerIds[_.BINANCE_CONNECTOR_NAME]],DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"]},D={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5,tonWallets:864e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=D.getActiveNamespace(),t=D.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0,r=n?isNaN(Number(n))?n:Number(n):void 0;return{namespace:e,caipNetworkId:t,chainId:r}},setWalletConnectDeepLink({name:e,href:t}){try{Z.setItem(J.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=Z.getItem(J.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{Z.removeItem(J.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{Z.setItem(J.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{Z.setItem(J.ACTIVE_CAIP_NETWORK_ID,e),D.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return Z.getItem(J.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{Z.removeItem(J.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=pc(e);Z.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=D.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),Z.setItem(J.RECENT_WALLETS,JSON.stringify(t)),Z.setItem(J.RECENT_WALLET,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=Z.getItem(J.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=Z.getItem(J.RECENT_WALLET);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{Z.removeItem(J.RECENT_WALLET)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=pc(e);Z.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return Z.getItem(J.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=pc(e);return Z.getItem(t)}catch{console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{Z.setItem(J.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return Z.getItem(J.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{Z.removeItem(J.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return Z.getItem(J.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var n;const e=Z.getItem(J.ACTIVE_CAIP_NETWORK_ID);return(n=e==null?void 0:e.split(":"))==null?void 0:n[1]},setConnectionStatus(e){try{Z.setItem(J.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return Z.getItem(J.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=Z.getItem(J.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));Z.setItem(J.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=D.getConnectedNamespaces();t.includes(e)||(t.push(e),D.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=D.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),D.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return Z.getItem(J.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{Z.setItem(J.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{Z.removeItem(J.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=Z.getItem(J.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=D.getBalanceCache();Z.setItem(J.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const n=D.getBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.portfolio))return n.balance;D.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=D.getBalanceCache();t[e.caipAddress]=e,Z.setItem(J.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=Z.getItem(J.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=D.getBalanceCache();Z.setItem(J.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const n=D.getNativeBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.nativeBalance))return n;console.info("Discarding cache for address",e),D.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=D.getNativeBalanceCache();t[e.caipAddress]=e,Z.setItem(J.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=Z.getItem(J.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const n=D.getEnsCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.ens))return n.ens;D.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=D.getEnsCache();t[e.address]=e,Z.setItem(J.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=D.getEnsCache();Z.setItem(J.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=Z.getItem(J.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const n=D.getIdentityCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.identity))return n.identity;D.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=D.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},Z.setItem(J.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=D.getIdentityCache();Z.setItem(J.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},getTonWalletsCache(){try{const e=Z.getItem(J.TON_WALLETS_CACHE),t=e?JSON.parse(e):void 0;if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tonWallets))return t;D.removeTonWalletsCache()}catch{console.info("Unable to get ton wallets cache")}},updateTonWalletsCache(e){try{const t=D.getTonWalletsCache()||{timestamp:0,wallets:[]};t.timestamp=new Date().getTime(),t.wallets=e,Z.setItem(J.TON_WALLETS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ton wallets cache",e)}},removeTonWalletsCache(){try{Z.removeItem(J.TON_WALLETS_CACHE)}catch{console.info("Unable to remove ton wallets cache")}},clearAddressCache(){try{Z.removeItem(J.PORTFOLIO_CACHE),Z.removeItem(J.NATIVE_BALANCE_CACHE),Z.removeItem(J.ENS_CACHE),Z.removeItem(J.IDENTITY_CACHE),Z.removeItem(J.HISTORY_TRANSACTIONS_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{Z.setItem(J.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=Z.getItem(J.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const n=D.getConnections(),r=n[t]??[],o=new Map;for(const s of r)o.set(s.connectorId,{...s});for(const s of e){const a=o.get(s.connectorId),c=s.connectorId===_.CONNECTOR_ID.AUTH;if(a&&!c){const l=new Set(a.accounts.map(m=>m.address.toLowerCase())),d=s.accounts.filter(m=>!l.has(m.address.toLowerCase()));a.accounts.push(...d)}else o.set(s.connectorId,{...s})}const i={...n,[t]:Array.from(o.values())};Z.setItem(J.CONNECTIONS,JSON.stringify(i))}catch(n){console.error("Unable to sync connections to storage",n)}},getConnections(){try{const e=Z.getItem(J.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection({connectorId:e,address:t,namespace:n}){try{const r=D.getConnections(),o=r[n]??[],i=new Map(o.map(a=>[a.connectorId,a])),s=i.get(e);s&&(s.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase()).length===0?i.delete(e):i.set(e,{...s,accounts:s.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase())})),Z.setItem(J.CONNECTIONS,JSON.stringify({...r,[n]:Array.from(i.values())}))}catch{console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`)}},getDisconnectedConnectorIds(){try{const e=Z.getItem(J.DISCONNECTED_CONNECTOR_IDS);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{const n=D.getDisconnectedConnectorIds(),r=n[t]??[];r.push(e),Z.setItem(J.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(r))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{const n=D.getDisconnectedConnectorIds();let r=n[t]??[];r=r.filter(o=>o.toLowerCase()!==e.toLowerCase()),Z.setItem(J.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(r))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{return(D.getDisconnectedConnectorIds()[t]??[]).some(o=>o.toLowerCase()===e.toLowerCase())}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=Z.getItem(J.HISTORY_TRANSACTIONS_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress({address:e,chainId:t=""}){var n;try{const o=(n=D.getTransactionsCache()[e])==null?void 0:n[t];if(o&&!this.isCacheExpired(o.timestamp,this.cacheExpiry.transactionsHistory))return o.transactions;D.removeTransactionsCache({address:e,chainId:t})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache({address:e,chainId:t="",timestamp:n,transactions:r}){try{const o=D.getTransactionsCache();o[e]={...o[e],[t]:{timestamp:n,transactions:r}},Z.setItem(J.HISTORY_TRANSACTIONS_CACHE,JSON.stringify(o))}catch{console.info("Unable to update transactions cache",{address:e,chainId:t,timestamp:n,transactions:r})}},removeTransactionsCache({address:e,chainId:t}){try{const n=D.getTransactionsCache(),r=(n==null?void 0:n[e])||{},{[t]:o,...i}=r;Z.setItem(J.HISTORY_TRANSACTIONS_CACHE,JSON.stringify({...n,[e]:i}))}catch{console.info("Unable to remove transactions cache",{address:e,chainId:t})}},getTokenPriceCache(){try{const e=Z.getItem(J.TOKEN_PRICE_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const n=D.getTokenPriceCache()[e.join(",")];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.tokenPrice))return n.tokenPrice;D.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=D.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},Z.setItem(J.TOKEN_PRICE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=D.getTokenPriceCache();Z.setItem(J.TOKEN_PRICE_CACHE,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=e==null?void 0:e.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=Z.getItem(J.LATEST_APPKIT_VERSION);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=D.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,Z.setItem(J.LATEST_APPKIT_VERSION,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},T={getWindow(){if(!(typeof window>"u"))return window},isMobile(){var e;return this.isClient()?!!(window!=null&&window.matchMedia&&typeof window.matchMedia=="function"&&((e=window.matchMedia("(pointer:coarse)"))!=null&&e.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return T.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Ce.TEN_SEC_MS:!0},isAllowedRetry(e,t=Ce.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},isSafeApp(){var e,t;if(T.isClient()&&window.self!==window.top)try{const n=(t=(e=window==null?void 0:window.location)==null?void 0:e.ancestorOrigins)==null?void 0:t[0],r="https://app.safe.global";if(n){const o=new URL(n),i=new URL(r);return o.hostname===i.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+Ce.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function o(){e(...r)}n&&clearTimeout(n),n=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,n=null){if(T.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e,o=n;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),o&&!(o!=null&&o.endsWith("/"))&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,redirectUniversalLink:o?`${o}wc?uri=${i}`:void 0,href:r}},formatUniversalUrl(e,t){if(!T.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?D.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){window==null||window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){return window==null?void 0:window.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){var n,r;if(typeof window>"u")return!1;const e=window!=null&&window.matchMedia&&typeof window.matchMedia=="function"?(n=window.matchMedia("(display-mode: standalone)"))==null?void 0:n.matches:!1,t=(r=window==null?void 0:window.navigator)==null?void 0:r.standalone;return!!(e||t)},async preloadImage(e){const t=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,T.wait(2e3)])},parseBalance(e,t){let n="0.000";if(typeof e=="string"){const c=Number(e);if(!isNaN(c)){const l=(Math.floor(c*1e3)/1e3).toFixed(3);l&&(n=l)}}const[r,o]=n.split("."),i=r||"0",s=o||"000";return{formattedText:`${i}.${s}${t?` ${t}`:""}`,value:i,decimals:s,symbol:t}},getApiUrl(){return _.W3M_API_URL},getBlockchainApiUrl(){return _.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return _.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,n;return typeof e=="string"?e:typeof((n=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:n.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach((r,o)=>{n[r]=o}),t.sort((r,o)=>{const i=n[r.id],s=n[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const n of e)t+=n.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[n,r]=t.split(".");return{dollars:n,pennies:r}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);case"bip122":{const n=/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),r=/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),o=/^bc1[a-z0-9]{39,87}$/u.test(e),i=/^bc1p[a-z0-9]{58}$/u.test(e);return n||r||o||i}default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter(r=>{const o=r[t];return n.has(o)?!1:(n.add(o),!0)})},generateSdkVersion(e,t,n){const o=e.length===0?Ce.ADAPTER_TYPES.UNIVERSAL:e.map(i=>i.adapterType).join(",");return`${t}-${o}-${n}`},createAccount(e){const{chainNamespace:t,chainId:n,address:r}=At.parseCaipAddress(e.caipAddress);return{namespace:t,address:r,chainId:n,caipAddress:e.caipAddress,type:e.type,publicKey:e.publicKey,path:e.path}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),n=t[0];return t.filter(Boolean).length===3&&n in _.CHAIN_NAME_MAP},getAccount(e){return e?typeof e=="string"?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0}},isMac(){const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,n="state=";if(new URL(e).host==="auth.magic.link"){const o="provider_authorization_url=",i=e.substring(e.indexOf(o)+o.length),s=this.injectIntoUrl(decodeURIComponent(i),n,t);return e.replace(i,encodeURIComponent(s))}return this.injectIntoUrl(e,n,t)},injectIntoUrl(e,t,n){const r=e.indexOf(t);if(r===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const o=e.indexOf("&",r),i=t.length,s=o!==-1?o:e.length,a=e.substring(0,r+i),c=e.substring(r+i,s),l=e.substring(o),d=c+n;return a+d+l},isNumber(e){return typeof e!="number"&&typeof e!="string"?!1:!isNaN(Number(e))},appendPayToUri(e,t){return t?`${e}&pay=${encodeURIComponent(t)}`:e}};var $i={};const Pf="https://secure.walletconnect.org/sdk",Lf=(typeof cn<"u"&&typeof $i<"u"?$i.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||Pf,Df=(typeof cn<"u"&&typeof $i<"u"?$i.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",Mf=(typeof cn<"u"&&typeof $i<"u"?$i.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4",q={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",APP_RELOAD:"@w3m-app/RELOAD",APP_RPC_ABORT:"@w3m-app/RPC_ABORT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",FRAME_RELOAD_SUCCESS:"@w3m-frame/RELOAD_SUCCESS",FRAME_RELOAD_ERROR:"@w3m-frame/RELOAD_ERROR",FRAME_RPC_ABORT_SUCCESS:"@w3m-frame/RPC_ABORT_SUCCESS",FRAME_RPC_ABORT_ERROR:"@w3m-frame/RPC_ABORT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Ne={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Rd={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},Fe={set(e,t){on.isClient&&localStorage.setItem(`${q.STORAGE_KEY}${e}`,t)},get(e){return on.isClient?localStorage.getItem(`${q.STORAGE_KEY}${e}`):null},delete(e,t){on.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${q.STORAGE_KEY}${e}`))}},Bs=30*1e3,on={checkIfAllowedToTriggerEmail(){const e=Fe.get(q.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Bs){const n=Math.ceil((Bs-t)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const e=Fe.get(q.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Bs)return Math.ceil((Bs-t)/1e3)}return 0},checkIfRequestExists(e){return Ne.NOT_SAFE_RPC_METHODS.includes(e.method)||Ne.SAFE_RPC_METHODS.includes(e.method)},getResponseType(e){return typeof e=="string"&&((e==null?void 0:e.match(Rd.transactionHash))||(e==null?void 0:e.match(Rd.signedMessage)))?q.RPC_RESPONSE_TYPE_TX:q.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(e){return Ne.SAFE_RPC_METHODS.includes(e.method)},isClient:typeof window<"u"};var _e;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const i={};for(const s of o)i[s]=s;return i},e.getValidEnumValues=o=>{const i=e.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of i)s[a]=o[a];return e.objectValues(s)},e.objectValues=o=>e.objectKeys(o).map(function(i){return o[i]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},e.find=(o,i)=>{for(const s of o)if(i(s))return s},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}e.joinValues=r,e.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(_e||(_e={}));var al;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(al||(al={}));const z=_e.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Hn=e=>{switch(typeof e){case"undefined":return z.undefined;case"string":return z.string;case"number":return isNaN(e)?z.nan:z.number;case"boolean":return z.boolean;case"function":return z.function;case"bigint":return z.bigint;case"symbol":return z.symbol;case"object":return Array.isArray(e)?z.array:e===null?z.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?z.promise:typeof Map<"u"&&e instanceof Map?z.map:typeof Set<"u"&&e instanceof Set?z.set:typeof Date<"u"&&e instanceof Date?z.date:z.object;default:return z.unknown}},L=_e.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Uf=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Vt extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(i){return i.message},r={_errors:[]},o=i=>{for(const s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,_e.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):r.push(t(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}Vt.create=e=>new Vt(e);const bo=(e,t)=>{let n;switch(e.code){case L.invalid_type:e.received===z.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case L.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,_e.jsonStringifyReplacer)}`;break;case L.unrecognized_keys:n=`Unrecognized key(s) in object: ${_e.joinValues(e.keys,", ")}`;break;case L.invalid_union:n="Invalid input";break;case L.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${_e.joinValues(e.options)}`;break;case L.invalid_enum_value:n=`Invalid enum value. Expected ${_e.joinValues(e.options)}, received '${e.received}'`;break;case L.invalid_arguments:n="Invalid function arguments";break;case L.invalid_return_type:n="Invalid function return type";break;case L.invalid_date:n="Invalid date";break;case L.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:_e.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case L.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case L.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case L.custom:n="Invalid input";break;case L.invalid_intersection_types:n="Intersection results could not be merged";break;case L.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case L.not_finite:n="Number must be finite";break;default:n=t.defaultError,_e.assertNever(e)}return{message:n}};let Ep=bo;function Wf(e){Ep=e}function da(){return Ep}const ua=e=>{const{data:t,path:n,errorMaps:r,issueData:o}=e,i=[...n,...o.path||[]],s={...o,path:i};let a="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)a=l(s,{data:t,defaultError:a}).message;return{...o,path:i,message:o.message||a}},Bf=[];function K(e,t){const n=ua({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,da(),bo].filter(r=>!!r)});e.common.issues.push(n)}class Ye{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const o of n){if(o.status==="aborted")return he;o.status==="dirty"&&t.dirty(),r.push(o.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return Ye.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const o of n){const{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return he;i.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:t.value,value:r}}}const he=Object.freeze({status:"aborted"}),_p=e=>({status:"dirty",value:e}),ot=e=>({status:"valid",value:e}),cl=e=>e.status==="aborted",ll=e=>e.status==="dirty",yo=e=>e.status==="valid",pa=e=>typeof Promise<"u"&&e instanceof Promise;var re;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(re||(re={}));class dn{constructor(t,n,r,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Id=(e,t)=>{if(yo(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Vt(e.common.issues);return this._error=n,this._error}}};function ge(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:o}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:o}}class we{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Hn(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Hn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Ye,ctx:{common:t.parent.common,data:t.data,parsedType:Hn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(pa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const o={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hn(t)},i=this._parseSync({data:t,path:o.path,parent:o});return Id(o,i)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hn(t)},o=this._parse({data:t,path:r.path,parent:r}),i=await(pa(o)?o:Promise.resolve(o));return Id(r,i)}refine(t,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{const s=t(o),a=()=>i.addIssue({code:L.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,o)=>t(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(t){return new qt({schema:this,typeName:le.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return In.create(this,this._def)}nullable(){return $r.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Kt.create(this,this._def)}promise(){return Oi.create(this,this._def)}or(t){return _o.create([this,t],this._def)}and(t){return Ao.create(this,t,this._def)}transform(t){return new qt({...ge(this._def),schema:this,typeName:le.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new Ro({...ge(this._def),innerType:this,defaultValue:n,typeName:le.ZodDefault})}brand(){return new xp({typeName:le.ZodBranded,type:this,...ge(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new ga({...ge(this._def),innerType:this,catchValue:n,typeName:le.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return fs.create(this,t)}readonly(){return ba.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ff=/^c[^\s-]{8,}$/i,jf=/^[a-z][a-z0-9]*$/,zf=/^[0-9A-HJKMNP-TV-Z]{26}$/,Hf=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Vf=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Kf="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let fc;const qf=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Gf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Zf=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Yf(e,t){return!!((t==="v4"||!t)&&qf.test(e)||(t==="v6"||!t)&&Gf.test(e))}class Ht extends we{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==z.string){const i=this._getOrReturnCtx(t);return K(i,{code:L.invalid_type,expected:z.string,received:i.parsedType}),he}const r=new Ye;let o;for(const i of this._def.checks)if(i.kind==="min")t.data.length<i.value&&(o=this._getOrReturnCtx(t,o),K(o,{code:L.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")t.data.length>i.value&&(o=this._getOrReturnCtx(t,o),K(o,{code:L.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const s=t.data.length>i.value,a=t.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(t,o),s?K(o,{code:L.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&K(o,{code:L.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Vf.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"email",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")fc||(fc=new RegExp(Kf,"u")),fc.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"emoji",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Hf.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"uuid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Ff.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"cuid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")jf.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"cuid2",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")zf.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"ulid",code:L.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),K(o,{validation:"url",code:L.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"regex",code:L.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?t.data=t.data.trim():i.kind==="includes"?t.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(t,o),K(o,{code:L.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?t.data=t.data.toLowerCase():i.kind==="toUpperCase"?t.data=t.data.toUpperCase():i.kind==="startsWith"?t.data.startsWith(i.value)||(o=this._getOrReturnCtx(t,o),K(o,{code:L.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?t.data.endsWith(i.value)||(o=this._getOrReturnCtx(t,o),K(o,{code:L.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Zf(i).test(t.data)||(o=this._getOrReturnCtx(t,o),K(o,{code:L.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?Yf(t.data,i.version)||(o=this._getOrReturnCtx(t,o),K(o,{validation:"ip",code:L.invalid_string,message:i.message}),r.dirty()):_e.assertNever(i);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(o=>t.test(o),{validation:n,code:L.invalid_string,...re.errToObj(r)})}_addCheck(t){return new Ht({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...re.errToObj(t)})}url(t){return this._addCheck({kind:"url",...re.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...re.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...re.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...re.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...re.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...re.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...re.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...re.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...re.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...re.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...re.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...re.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...re.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...re.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...re.errToObj(n)})}nonempty(t){return this.min(1,re.errToObj(t))}trim(){return new Ht({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ht({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ht({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Ht.create=e=>{var t;return new Ht({checks:[],typeName:le.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...ge(e)})};function Jf(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=n>r?n:r,i=parseInt(e.toFixed(o).replace(".","")),s=parseInt(t.toFixed(o).replace(".",""));return i%s/Math.pow(10,o)}class Qn extends we{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==z.number){const i=this._getOrReturnCtx(t);return K(i,{code:L.invalid_type,expected:z.number,received:i.parsedType}),he}let r;const o=new Ye;for(const i of this._def.checks)i.kind==="int"?_e.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),K(r,{code:L.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?Jf(t.data,i.value)!==0&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),K(r,{code:L.not_finite,message:i.message}),o.dirty()):_e.assertNever(i);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,re.toString(n))}gt(t,n){return this.setLimit("min",t,!1,re.toString(n))}lte(t,n){return this.setLimit("max",t,!0,re.toString(n))}lt(t,n){return this.setLimit("max",t,!1,re.toString(n))}setLimit(t,n,r,o){return new Qn({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:re.toString(o)}]})}_addCheck(t){return new Qn({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:re.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:re.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:re.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:re.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:re.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:re.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&_e.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Qn.create=e=>new Qn({checks:[],typeName:le.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...ge(e)});class er extends we{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==z.bigint){const i=this._getOrReturnCtx(t);return K(i,{code:L.invalid_type,expected:z.bigint,received:i.parsedType}),he}let r;const o=new Ye;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?t.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),K(r,{code:L.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):_e.assertNever(i);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,re.toString(n))}gt(t,n){return this.setLimit("min",t,!1,re.toString(n))}lte(t,n){return this.setLimit("max",t,!0,re.toString(n))}lt(t,n){return this.setLimit("max",t,!1,re.toString(n))}setLimit(t,n,r,o){return new er({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:re.toString(o)}]})}_addCheck(t){return new er({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:re.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:re.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}er.create=e=>{var t;return new er({checks:[],typeName:le.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...ge(e)})};class Co extends we{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==z.boolean){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.boolean,received:r.parsedType}),he}return ot(t.data)}}Co.create=e=>new Co({typeName:le.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...ge(e)});class Rr extends we{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==z.date){const i=this._getOrReturnCtx(t);return K(i,{code:L.invalid_type,expected:z.date,received:i.parsedType}),he}if(isNaN(t.data.getTime())){const i=this._getOrReturnCtx(t);return K(i,{code:L.invalid_date}),he}const r=new Ye;let o;for(const i of this._def.checks)i.kind==="min"?t.data.getTime()<i.value&&(o=this._getOrReturnCtx(t,o),K(o,{code:L.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?t.data.getTime()>i.value&&(o=this._getOrReturnCtx(t,o),K(o,{code:L.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):_e.assertNever(i);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Rr({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:re.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:re.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}Rr.create=e=>new Rr({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:le.ZodDate,...ge(e)});class ha extends we{_parse(t){if(this._getType(t)!==z.symbol){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.symbol,received:r.parsedType}),he}return ot(t.data)}}ha.create=e=>new ha({typeName:le.ZodSymbol,...ge(e)});class vo extends we{_parse(t){if(this._getType(t)!==z.undefined){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.undefined,received:r.parsedType}),he}return ot(t.data)}}vo.create=e=>new vo({typeName:le.ZodUndefined,...ge(e)});class Eo extends we{_parse(t){if(this._getType(t)!==z.null){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.null,received:r.parsedType}),he}return ot(t.data)}}Eo.create=e=>new Eo({typeName:le.ZodNull,...ge(e)});class ki extends we{constructor(){super(...arguments),this._any=!0}_parse(t){return ot(t.data)}}ki.create=e=>new ki({typeName:le.ZodAny,...ge(e)});class _r extends we{constructor(){super(...arguments),this._unknown=!0}_parse(t){return ot(t.data)}}_r.create=e=>new _r({typeName:le.ZodUnknown,...ge(e)});class kn extends we{_parse(t){const n=this._getOrReturnCtx(t);return K(n,{code:L.invalid_type,expected:z.never,received:n.parsedType}),he}}kn.create=e=>new kn({typeName:le.ZodNever,...ge(e)});class fa extends we{_parse(t){if(this._getType(t)!==z.undefined){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.void,received:r.parsedType}),he}return ot(t.data)}}fa.create=e=>new fa({typeName:le.ZodVoid,...ge(e)});class Kt extends we{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),o=this._def;if(n.parsedType!==z.array)return K(n,{code:L.invalid_type,expected:z.array,received:n.parsedType}),he;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(K(n,{code:s?L.too_big:L.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(K(n,{code:L.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(K(n,{code:L.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new dn(n,s,n.path,a)))).then(s=>Ye.mergeArray(r,s));const i=[...n.data].map((s,a)=>o.type._parseSync(new dn(n,s,n.path,a)));return Ye.mergeArray(r,i)}get element(){return this._def.type}min(t,n){return new Kt({...this._def,minLength:{value:t,message:re.toString(n)}})}max(t,n){return new Kt({...this._def,maxLength:{value:t,message:re.toString(n)}})}length(t,n){return new Kt({...this._def,exactLength:{value:t,message:re.toString(n)}})}nonempty(t){return this.min(1,t)}}Kt.create=(e,t)=>new Kt({type:e,minLength:null,maxLength:null,exactLength:null,typeName:le.ZodArray,...ge(t)});function vi(e){if(e instanceof Pe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=In.create(vi(r))}return new Pe({...e._def,shape:()=>t})}else return e instanceof Kt?new Kt({...e._def,type:vi(e.element)}):e instanceof In?In.create(vi(e.unwrap())):e instanceof $r?$r.create(vi(e.unwrap())):e instanceof un?un.create(e.items.map(t=>vi(t))):e}class Pe extends we{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=_e.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==z.object){const l=this._getOrReturnCtx(t);return K(l,{code:L.invalid_type,expected:z.object,received:l.parsedType}),he}const{status:r,ctx:o}=this._processInputParams(t),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof kn&&this._def.unknownKeys==="strip"))for(const l in o.data)s.includes(l)||a.push(l);const c=[];for(const l of s){const d=i[l],m=o.data[l];c.push({key:{status:"valid",value:l},value:d._parse(new dn(o,m,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof kn){const l=this._def.unknownKeys;if(l==="passthrough")for(const d of a)c.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(l==="strict")a.length>0&&(K(o,{code:L.unrecognized_keys,keys:a}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const d of a){const m=o.data[d];c.push({key:{status:"valid",value:d},value:l._parse(new dn(o,m,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const d of c){const m=await d.key;l.push({key:m,value:await d.value,alwaysSet:d.alwaysSet})}return l}).then(l=>Ye.mergeObjectSync(r,l)):Ye.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(t){return re.errToObj,new Pe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var o,i,s,a;const c=(s=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=re.errToObj(t).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Pe({...this._def,unknownKeys:"strip"})}passthrough(){return new Pe({...this._def,unknownKeys:"passthrough"})}extend(t){return new Pe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Pe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:le.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new Pe({...this._def,catchall:t})}pick(t){const n={};return _e.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Pe({...this._def,shape:()=>n})}omit(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new Pe({...this._def,shape:()=>n})}deepPartial(){return vi(this)}partial(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];t&&!t[r]?n[r]=o:n[r]=o.optional()}),new Pe({...this._def,shape:()=>n})}required(t){const n={};return _e.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof In;)i=i._def.innerType;n[r]=i}}),new Pe({...this._def,shape:()=>n})}keyof(){return Ap(_e.objectKeys(this.shape))}}Pe.create=(e,t)=>new Pe({shape:()=>e,unknownKeys:"strip",catchall:kn.create(),typeName:le.ZodObject,...ge(t)});Pe.strictCreate=(e,t)=>new Pe({shape:()=>e,unknownKeys:"strict",catchall:kn.create(),typeName:le.ZodObject,...ge(t)});Pe.lazycreate=(e,t)=>new Pe({shape:e,unknownKeys:"strip",catchall:kn.create(),typeName:le.ZodObject,...ge(t)});class _o extends we{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function o(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=i.map(a=>new Vt(a.ctx.common.issues));return K(n,{code:L.invalid_union,unionErrors:s}),he}if(n.common.async)return Promise.all(r.map(async i=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i;const s=[];for(const c of r){const l={...n,common:{...n.common,issues:[]},parent:null},d=c._parseSync({data:n.data,path:n.path,parent:l});if(d.status==="valid")return d;d.status==="dirty"&&!i&&(i={result:d,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=s.map(c=>new Vt(c));return K(n,{code:L.invalid_union,unionErrors:a}),he}}get options(){return this._def.options}}_o.create=(e,t)=>new _o({options:e,typeName:le.ZodUnion,...ge(t)});const oa=e=>e instanceof So?oa(e.schema):e instanceof qt?oa(e.innerType()):e instanceof To?[e.value]:e instanceof tr?e.options:e instanceof No?Object.keys(e.enum):e instanceof Ro?oa(e._def.innerType):e instanceof vo?[void 0]:e instanceof Eo?[null]:null;class Ga extends we{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==z.object)return K(n,{code:L.invalid_type,expected:z.object,received:n.parsedType}),he;const r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(K(n,{code:L.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),he)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const o=new Map;for(const i of n){const s=oa(i.shape[t]);if(!s)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);o.set(a,i)}}return new Ga({typeName:le.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...ge(r)})}}function dl(e,t){const n=Hn(e),r=Hn(t);if(e===t)return{valid:!0,data:e};if(n===z.object&&r===z.object){const o=_e.objectKeys(t),i=_e.objectKeys(e).filter(a=>o.indexOf(a)!==-1),s={...e,...t};for(const a of i){const c=dl(e[a],t[a]);if(!c.valid)return{valid:!1};s[a]=c.data}return{valid:!0,data:s}}else if(n===z.array&&r===z.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let i=0;i<e.length;i++){const s=e[i],a=t[i],c=dl(s,a);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return n===z.date&&r===z.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Ao extends we{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=(i,s)=>{if(cl(i)||cl(s))return he;const a=dl(i.value,s.value);return a.valid?((ll(i)||ll(s))&&n.dirty(),{status:n.value,value:a.data}):(K(r,{code:L.invalid_intersection_types}),he)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Ao.create=(e,t,n)=>new Ao({left:e,right:t,typeName:le.ZodIntersection,...ge(n)});class un extends we{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==z.array)return K(r,{code:L.invalid_type,expected:z.array,received:r.parsedType}),he;if(r.data.length<this._def.items.length)return K(r,{code:L.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),he;!this._def.rest&&r.data.length>this._def.items.length&&(K(r,{code:L.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((s,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new dn(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>Ye.mergeArray(n,s)):Ye.mergeArray(n,i)}get items(){return this._def.items}rest(t){return new un({...this._def,rest:t})}}un.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new un({items:e,typeName:le.ZodTuple,rest:null,...ge(t)})};class xo extends we{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==z.object)return K(r,{code:L.invalid_type,expected:z.object,received:r.parsedType}),he;const o=[],i=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:i._parse(new dn(r,a,r.path,a)),value:s._parse(new dn(r,r.data[a],r.path,a))});return r.common.async?Ye.mergeObjectAsync(n,o):Ye.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof we?new xo({keyType:t,valueType:n,typeName:le.ZodRecord,...ge(r)}):new xo({keyType:Ht.create(),valueType:t,typeName:le.ZodRecord,...ge(n)})}}class ma extends we{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==z.map)return K(r,{code:L.invalid_type,expected:z.map,received:r.parsedType}),he;const o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,c],l)=>({key:o._parse(new dn(r,a,r.path,[l,"key"])),value:i._parse(new dn(r,c,r.path,[l,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,d=await c.value;if(l.status==="aborted"||d.status==="aborted")return he;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of s){const l=c.key,d=c.value;if(l.status==="aborted"||d.status==="aborted")return he;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}}}}ma.create=(e,t,n)=>new ma({valueType:t,keyType:e,typeName:le.ZodMap,...ge(n)});class Ir extends we{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==z.set)return K(r,{code:L.invalid_type,expected:z.set,received:r.parsedType}),he;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(K(r,{code:L.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(K(r,{code:L.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const i=this._def.valueType;function s(c){const l=new Set;for(const d of c){if(d.status==="aborted")return he;d.status==="dirty"&&n.dirty(),l.add(d.value)}return{status:n.value,value:l}}const a=[...r.data.values()].map((c,l)=>i._parse(new dn(r,c,r.path,l)));return r.common.async?Promise.all(a).then(c=>s(c)):s(a)}min(t,n){return new Ir({...this._def,minSize:{value:t,message:re.toString(n)}})}max(t,n){return new Ir({...this._def,maxSize:{value:t,message:re.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Ir.create=(e,t)=>new Ir({valueType:e,minSize:null,maxSize:null,typeName:le.ZodSet,...ge(t)});class xi extends we{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==z.function)return K(n,{code:L.invalid_type,expected:z.function,received:n.parsedType}),he;function r(a,c){return ua({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,da(),bo].filter(l=>!!l),issueData:{code:L.invalid_arguments,argumentsError:c}})}function o(a,c){return ua({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,da(),bo].filter(l=>!!l),issueData:{code:L.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Oi){const a=this;return ot(async function(...c){const l=new Vt([]),d=await a._def.args.parseAsync(c,i).catch(g=>{throw l.addIssue(r(c,g)),l}),m=await Reflect.apply(s,this,d);return await a._def.returns._def.type.parseAsync(m,i).catch(g=>{throw l.addIssue(o(m,g)),l})})}else{const a=this;return ot(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new Vt([r(c,l.error)]);const d=Reflect.apply(s,this,l.data),m=a._def.returns.safeParse(d,i);if(!m.success)throw new Vt([o(d,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new xi({...this._def,args:un.create(t).rest(_r.create())})}returns(t){return new xi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new xi({args:t||un.create([]).rest(_r.create()),returns:n||_r.create(),typeName:le.ZodFunction,...ge(r)})}}class So extends we{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}So.create=(e,t)=>new So({getter:e,typeName:le.ZodLazy,...ge(t)});class To extends we{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return K(n,{received:n.data,code:L.invalid_literal,expected:this._def.value}),he}return{status:"valid",value:t.data}}get value(){return this._def.value}}To.create=(e,t)=>new To({value:e,typeName:le.ZodLiteral,...ge(t)});function Ap(e,t){return new tr({values:e,typeName:le.ZodEnum,...ge(t)})}class tr extends we{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return K(n,{expected:_e.joinValues(r),received:n.parsedType,code:L.invalid_type}),he}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return K(n,{received:n.data,code:L.invalid_enum_value,options:r}),he}return ot(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return tr.create(t)}exclude(t){return tr.create(this.options.filter(n=>!t.includes(n)))}}tr.create=Ap;class No extends we{_parse(t){const n=_e.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==z.string&&r.parsedType!==z.number){const o=_e.objectValues(n);return K(r,{expected:_e.joinValues(o),received:r.parsedType,code:L.invalid_type}),he}if(n.indexOf(t.data)===-1){const o=_e.objectValues(n);return K(r,{received:r.data,code:L.invalid_enum_value,options:o}),he}return ot(t.data)}get enum(){return this._def.values}}No.create=(e,t)=>new No({values:e,typeName:le.ZodNativeEnum,...ge(t)});class Oi extends we{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==z.promise&&n.common.async===!1)return K(n,{code:L.invalid_type,expected:z.promise,received:n.parsedType}),he;const r=n.parsedType===z.promise?n.data:Promise.resolve(n.data);return ot(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Oi.create=(e,t)=>new Oi({type:e,typeName:le.ZodPromise,...ge(t)});class qt extends we{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===le.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=this._def.effect||null,i={addIssue:s=>{K(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const s=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const c=o.refinement(a,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?he:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?he:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!yo(s))return s;const a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>yo(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):s);_e.assertNever(o)}}qt.create=(e,t,n)=>new qt({schema:e,typeName:le.ZodEffects,effect:t,...ge(n)});qt.createWithPreprocess=(e,t,n)=>new qt({schema:t,effect:{type:"preprocess",transform:e},typeName:le.ZodEffects,...ge(n)});class In extends we{_parse(t){return this._getType(t)===z.undefined?ot(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}In.create=(e,t)=>new In({innerType:e,typeName:le.ZodOptional,...ge(t)});class $r extends we{_parse(t){return this._getType(t)===z.null?ot(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}$r.create=(e,t)=>new $r({innerType:e,typeName:le.ZodNullable,...ge(t)});class Ro extends we{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===z.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Ro.create=(e,t)=>new Ro({innerType:e,typeName:le.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...ge(t)});class ga extends we{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return pa(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Vt(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Vt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ga.create=(e,t)=>new ga({innerType:e,typeName:le.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...ge(t)});class wa extends we{_parse(t){if(this._getType(t)!==z.nan){const r=this._getOrReturnCtx(t);return K(r,{code:L.invalid_type,expected:z.nan,received:r.parsedType}),he}return{status:"valid",value:t.data}}}wa.create=e=>new wa({typeName:le.ZodNaN,...ge(e)});const Xf=Symbol("zod_brand");class xp extends we{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class fs extends we{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?he:i.status==="dirty"?(n.dirty(),_p(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?he:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(t,n){return new fs({in:t,out:n,typeName:le.ZodPipeline})}}class ba extends we{_parse(t){const n=this._def.innerType._parse(t);return yo(n)&&(n.value=Object.freeze(n.value)),n}}ba.create=(e,t)=>new ba({innerType:e,typeName:le.ZodReadonly,...ge(t)});const Sp=(e,t={},n)=>e?ki.create().superRefine((r,o)=>{var i,s;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,c=(s=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&s!==void 0?s:!0,l=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...l,fatal:c})}}):ki.create(),Qf={object:Pe.lazycreate};var le;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(le||(le={}));const e0=(e,t={message:`Input not instance of ${e.name}`})=>Sp(n=>n instanceof e,t),Tp=Ht.create,Np=Qn.create,t0=wa.create,n0=er.create,Rp=Co.create,r0=Rr.create,i0=ha.create,o0=vo.create,s0=Eo.create,a0=ki.create,c0=_r.create,l0=kn.create,d0=fa.create,u0=Kt.create,p0=Pe.create,h0=Pe.strictCreate,f0=_o.create,m0=Ga.create,g0=Ao.create,w0=un.create,b0=xo.create,y0=ma.create,C0=Ir.create,v0=xi.create,E0=So.create,_0=To.create,A0=tr.create,x0=No.create,S0=Oi.create,$d=qt.create,T0=In.create,N0=$r.create,R0=qt.createWithPreprocess,I0=fs.create,$0=()=>Tp().optional(),k0=()=>Np().optional(),O0=()=>Rp().optional(),P0={string:e=>Ht.create({...e,coerce:!0}),number:e=>Qn.create({...e,coerce:!0}),boolean:e=>Co.create({...e,coerce:!0}),bigint:e=>er.create({...e,coerce:!0}),date:e=>Rr.create({...e,coerce:!0})},L0=he;var p=Object.freeze({__proto__:null,defaultErrorMap:bo,setErrorMap:Wf,getErrorMap:da,makeIssue:ua,EMPTY_PATH:Bf,addIssueToContext:K,ParseStatus:Ye,INVALID:he,DIRTY:_p,OK:ot,isAborted:cl,isDirty:ll,isValid:yo,isAsync:pa,get util(){return _e},get objectUtil(){return al},ZodParsedType:z,getParsedType:Hn,ZodType:we,ZodString:Ht,ZodNumber:Qn,ZodBigInt:er,ZodBoolean:Co,ZodDate:Rr,ZodSymbol:ha,ZodUndefined:vo,ZodNull:Eo,ZodAny:ki,ZodUnknown:_r,ZodNever:kn,ZodVoid:fa,ZodArray:Kt,ZodObject:Pe,ZodUnion:_o,ZodDiscriminatedUnion:Ga,ZodIntersection:Ao,ZodTuple:un,ZodRecord:xo,ZodMap:ma,ZodSet:Ir,ZodFunction:xi,ZodLazy:So,ZodLiteral:To,ZodEnum:tr,ZodNativeEnum:No,ZodPromise:Oi,ZodEffects:qt,ZodTransformer:qt,ZodOptional:In,ZodNullable:$r,ZodDefault:Ro,ZodCatch:ga,ZodNaN:wa,BRAND:Xf,ZodBranded:xp,ZodPipeline:fs,ZodReadonly:ba,custom:Sp,Schema:we,ZodSchema:we,late:Qf,get ZodFirstPartyTypeKind(){return le},coerce:P0,any:a0,array:u0,bigint:n0,boolean:Rp,date:r0,discriminatedUnion:m0,effect:$d,enum:A0,function:v0,instanceof:e0,intersection:g0,lazy:E0,literal:_0,map:y0,nan:t0,nativeEnum:x0,never:l0,null:s0,nullable:N0,number:Np,object:p0,oboolean:O0,onumber:k0,optional:T0,ostring:$0,pipeline:I0,preprocess:R0,promise:S0,record:b0,set:C0,strictObject:h0,string:Tp,symbol:i0,transformer:$d,tuple:w0,undefined:o0,union:f0,unknown:c0,void:d0,NEVER:L0,ZodIssueCode:L,quotelessJson:Uf,ZodError:Vt});const Le=p.object({message:p.string()});function H(e){return p.literal(q[e])}const Za=p.object({serializedMessage:p.string().optional(),accountAddress:p.string(),chainId:p.string(),notBefore:p.string().optional(),domain:p.string(),uri:p.string(),version:p.string(),nonce:p.string(),statement:p.string().optional(),resources:p.array(p.string()).optional(),requestId:p.string().optional(),issuedAt:p.string().optional(),expirationTime:p.string().optional()});p.object({accessList:p.array(p.string()),blockHash:p.string().nullable(),blockNumber:p.string().nullable(),chainId:p.string().or(p.number()),from:p.string(),gas:p.string(),hash:p.string(),input:p.string().nullable(),maxFeePerGas:p.string(),maxPriorityFeePerGas:p.string(),nonce:p.string(),r:p.string(),s:p.string(),to:p.string(),transactionIndex:p.string().nullable(),type:p.string(),v:p.string(),value:p.string()});const D0=p.object({chainId:p.string().or(p.number()),rpcUrl:p.optional(p.string())}),M0=p.object({email:p.string().email()}),U0=p.object({otp:p.string()}),W0=p.object({uri:p.string(),preferredAccountType:p.optional(p.string()),chainId:p.optional(p.string().or(p.number())),siwxMessage:p.optional(Za),rpcUrl:p.optional(p.string())}),B0=p.object({chainId:p.optional(p.string().or(p.number())),preferredAccountType:p.optional(p.string()),socialUri:p.optional(p.string()),siwxMessage:p.optional(Za),rpcUrl:p.optional(p.string())}),F0=p.object({provider:p.enum(["google","github","apple","facebook","x","discord"])}),j0=p.object({email:p.string().email()}),z0=p.object({otp:p.string()}),H0=p.object({otp:p.string()}),V0=p.object({themeMode:p.optional(p.enum(["light","dark"])),themeVariables:p.optional(p.record(p.string(),p.string().or(p.number()))),w3mThemeVariables:p.optional(p.record(p.string(),p.string()))}),K0=p.object({metadata:p.object({name:p.string(),description:p.string(),url:p.string(),icons:p.array(p.string())}).optional(),sdkVersion:p.string().optional(),sdkType:p.string().optional(),projectId:p.string()}),q0=p.object({type:p.string()}),G0=p.object({action:p.enum(["VERIFY_DEVICE","VERIFY_OTP","CONNECT"])}),Z0=p.object({url:p.string()}),Y0=p.object({userName:p.string()}),J0=p.object({email:p.string().optional().nullable(),address:p.string(),chainId:p.string().or(p.number()),accounts:p.array(p.object({address:p.string(),type:p.enum([Ne.ACCOUNT_TYPES.EOA,Ne.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:p.string().optional().nullable(),preferredAccountType:p.optional(p.string()),signature:p.string().optional(),message:p.string().optional(),siwxMessage:p.optional(Za)}),X0=p.object({action:p.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),Q0=p.object({email:p.string().email().optional().nullable(),address:p.string(),chainId:p.string().or(p.number()),smartAccountDeployed:p.optional(p.boolean()),accounts:p.array(p.object({address:p.string(),type:p.enum([Ne.ACCOUNT_TYPES.EOA,Ne.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:p.optional(p.string()),signature:p.string().optional(),message:p.string().optional(),siwxMessage:p.optional(Za)}),em=p.object({uri:p.string()}),tm=p.object({isConnected:p.boolean()}),nm=p.object({chainId:p.string().or(p.number())}),rm=p.object({chainId:p.string().or(p.number())}),im=p.object({newEmail:p.string().email()}),om=p.object({smartAccountEnabledNetworks:p.array(p.number())});p.object({address:p.string(),isDeployed:p.boolean()});const sm=p.object({version:p.string().optional()}),am=p.object({type:p.string(),address:p.string()}),cm=p.any(),lm=p.object({method:p.literal("eth_accounts")}),dm=p.object({method:p.literal("eth_blockNumber")}),um=p.object({method:p.literal("eth_call"),params:p.array(p.any())}),pm=p.object({method:p.literal("eth_chainId")}),hm=p.object({method:p.literal("eth_estimateGas"),params:p.array(p.any())}),fm=p.object({method:p.literal("eth_feeHistory"),params:p.array(p.any())}),mm=p.object({method:p.literal("eth_gasPrice")}),gm=p.object({method:p.literal("eth_getAccount"),params:p.array(p.any())}),wm=p.object({method:p.literal("eth_getBalance"),params:p.array(p.any())}),bm=p.object({method:p.literal("eth_getBlockByHash"),params:p.array(p.any())}),ym=p.object({method:p.literal("eth_getBlockByNumber"),params:p.array(p.any())}),Cm=p.object({method:p.literal("eth_getBlockReceipts"),params:p.array(p.any())}),vm=p.object({method:p.literal("eth_getBlockTransactionCountByHash"),params:p.array(p.any())}),Em=p.object({method:p.literal("eth_getBlockTransactionCountByNumber"),params:p.array(p.any())}),_m=p.object({method:p.literal("eth_getCode"),params:p.array(p.any())}),Am=p.object({method:p.literal("eth_getFilterChanges"),params:p.array(p.any())}),xm=p.object({method:p.literal("eth_getFilterLogs"),params:p.array(p.any())}),Sm=p.object({method:p.literal("eth_getLogs"),params:p.array(p.any())}),Tm=p.object({method:p.literal("eth_getProof"),params:p.array(p.any())}),Nm=p.object({method:p.literal("eth_getStorageAt"),params:p.array(p.any())}),Rm=p.object({method:p.literal("eth_getTransactionByBlockHashAndIndex"),params:p.array(p.any())}),Im=p.object({method:p.literal("eth_getTransactionByBlockNumberAndIndex"),params:p.array(p.any())}),$m=p.object({method:p.literal("eth_getTransactionByHash"),params:p.array(p.any())}),km=p.object({method:p.literal("eth_getTransactionCount"),params:p.array(p.any())}),Om=p.object({method:p.literal("eth_getTransactionReceipt"),params:p.array(p.any())}),Pm=p.object({method:p.literal("eth_getUncleCountByBlockHash"),params:p.array(p.any())}),Lm=p.object({method:p.literal("eth_getUncleCountByBlockNumber"),params:p.array(p.any())}),Dm=p.object({method:p.literal("eth_maxPriorityFeePerGas")}),Mm=p.object({method:p.literal("eth_newBlockFilter")}),Um=p.object({method:p.literal("eth_newFilter"),params:p.array(p.any())}),Wm=p.object({method:p.literal("eth_newPendingTransactionFilter")}),Bm=p.object({method:p.literal("eth_sendRawTransaction"),params:p.array(p.any())}),Fm=p.object({method:p.literal("eth_syncing"),params:p.array(p.any())}),jm=p.object({method:p.literal("eth_uninstallFilter"),params:p.array(p.any())}),kd=p.object({method:p.literal("personal_sign"),params:p.array(p.any())}),zm=p.object({method:p.literal("eth_signTypedData_v4"),params:p.array(p.any())}),Hm=p.object({method:p.literal("eth_sendTransaction"),params:p.array(p.any())}),Vm=p.object({method:p.literal("solana_signMessage"),params:p.object({message:p.string(),pubkey:p.string()})}),Km=p.object({method:p.literal("solana_signTransaction"),params:p.object({transaction:p.string()})}),qm=p.object({method:p.literal("solana_signAllTransactions"),params:p.object({transactions:p.array(p.string())})}),Gm=p.object({method:p.literal("solana_signAndSendTransaction"),params:p.object({transaction:p.string(),options:p.object({skipPreflight:p.boolean().optional(),preflightCommitment:p.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:p.number().optional(),minContextSlot:p.number().optional()}).optional()})}),Zm=p.object({method:p.literal("wallet_sendCalls"),params:p.array(p.object({chainId:p.string().or(p.number()).optional(),from:p.string().optional(),version:p.string().optional(),capabilities:p.any().optional(),calls:p.array(p.object({to:p.string().startsWith("0x"),data:p.string().startsWith("0x").optional(),value:p.string().optional()}))}))}),Ym=p.object({method:p.literal("wallet_getCallsStatus"),params:p.array(p.string())}),Jm=p.object({method:p.literal("wallet_getCapabilities"),params:p.array(p.string().or(p.number()).optional()).optional()}),Xm=p.object({method:p.literal("wallet_grantPermissions"),params:p.array(p.any())}),Qm=p.object({method:p.literal("wallet_revokePermissions"),params:p.any()}),e1=p.object({method:p.literal("wallet_getAssets"),params:p.any()}),Od=p.object({token:p.string()}),V=p.object({id:p.string().optional()}),mc={appEvent:V.extend({type:H("APP_SWITCH_NETWORK"),payload:D0}).or(V.extend({type:H("APP_CONNECT_EMAIL"),payload:M0})).or(V.extend({type:H("APP_CONNECT_DEVICE")})).or(V.extend({type:H("APP_CONNECT_OTP"),payload:U0})).or(V.extend({type:H("APP_CONNECT_SOCIAL"),payload:W0})).or(V.extend({type:H("APP_GET_FARCASTER_URI")})).or(V.extend({type:H("APP_CONNECT_FARCASTER")})).or(V.extend({type:H("APP_GET_USER"),payload:p.optional(B0)})).or(V.extend({type:H("APP_GET_SOCIAL_REDIRECT_URI"),payload:F0})).or(V.extend({type:H("APP_SIGN_OUT")})).or(V.extend({type:H("APP_IS_CONNECTED"),payload:p.optional(Od)})).or(V.extend({type:H("APP_GET_CHAIN_ID")})).or(V.extend({type:H("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(V.extend({type:H("APP_INIT_SMART_ACCOUNT")})).or(V.extend({type:H("APP_SET_PREFERRED_ACCOUNT"),payload:q0})).or(V.extend({type:H("APP_RPC_REQUEST"),payload:kd.or(e1).or(lm).or(dm).or(um).or(pm).or(hm).or(fm).or(mm).or(gm).or(wm).or(bm).or(ym).or(Cm).or(vm).or(Em).or(_m).or(Am).or(xm).or(Sm).or(Tm).or(Nm).or(Rm).or(Im).or($m).or(km).or(Om).or(Pm).or(Lm).or(Dm).or(Mm).or(Um).or(Wm).or(Bm).or(Fm).or(jm).or(kd).or(zm).or(Hm).or(Vm).or(Km).or(qm).or(Gm).or(Ym).or(Zm).or(Jm).or(Xm).or(Qm).and(p.object({chainId:p.string().or(p.number()).optional(),chainNamespace:p.enum(["eip155","solana","polkadot","bip122","cosmos"]).optional(),rpcUrl:p.string().optional()}))})).or(V.extend({type:H("APP_UPDATE_EMAIL"),payload:j0})).or(V.extend({type:H("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:z0})).or(V.extend({type:H("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:H0})).or(V.extend({type:H("APP_SYNC_THEME"),payload:V0})).or(V.extend({type:H("APP_SYNC_DAPP_DATA"),payload:K0})).or(V.extend({type:H("APP_RELOAD")})).or(V.extend({type:H("APP_RPC_ABORT")})),frameEvent:V.extend({type:H("FRAME_SWITCH_NETWORK_ERROR"),payload:Le}).or(V.extend({type:H("FRAME_SWITCH_NETWORK_SUCCESS"),payload:rm})).or(V.extend({type:H("FRAME_CONNECT_EMAIL_SUCCESS"),payload:G0})).or(V.extend({type:H("FRAME_CONNECT_EMAIL_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:Z0})).or(V.extend({type:H("FRAME_GET_FARCASTER_URI_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:Y0})).or(V.extend({type:H("FRAME_CONNECT_FARCASTER_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_CONNECT_OTP_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_CONNECT_OTP_SUCCESS")})).or(V.extend({type:H("FRAME_CONNECT_DEVICE_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_CONNECT_DEVICE_SUCCESS")})).or(V.extend({type:H("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:J0})).or(V.extend({type:H("FRAME_CONNECT_SOCIAL_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_GET_USER_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_GET_USER_SUCCESS"),payload:Q0})).or(V.extend({type:H("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:em})).or(V.extend({type:H("FRAME_SIGN_OUT_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_SIGN_OUT_SUCCESS")})).or(V.extend({type:H("FRAME_IS_CONNECTED_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_IS_CONNECTED_SUCCESS"),payload:tm})).or(V.extend({type:H("FRAME_GET_CHAIN_ID_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_GET_CHAIN_ID_SUCCESS"),payload:nm})).or(V.extend({type:H("FRAME_RPC_REQUEST_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_RPC_REQUEST_SUCCESS"),payload:cm})).or(V.extend({type:H("FRAME_SESSION_UPDATE"),payload:Od})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_SUCCESS"),payload:X0})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:im})).or(V.extend({type:H("FRAME_SYNC_THEME_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_SYNC_THEME_SUCCESS")})).or(V.extend({type:H("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(V.extend({type:H("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:om})).or(V.extend({type:H("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:am})).or(V.extend({type:H("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_READY"),payload:sm})).or(V.extend({type:H("FRAME_RELOAD_ERROR"),payload:Le})).or(V.extend({type:H("FRAME_RELOAD_SUCCESS")}))};function gc(e,t={}){var n;return typeof(t==null?void 0:t.type)=="string"&&((n=t==null?void 0:t.type)==null?void 0:n.includes(e))}function t1({projectId:e,chainId:t,enableLogger:n,rpcUrl:r=_.BLOCKCHAIN_API_RPC_URL,enableCloudAuthAccount:o=!1}){const i=new URL(Lf);i.searchParams.set("projectId",e),i.searchParams.set("chainId",String(t)),i.searchParams.set("version",Mf),i.searchParams.set("enableLogger",String(n)),i.searchParams.set("rpcUrl",r);const s=Fe.get("dapp_smart_account_version");return s&&(s==="v6"||s==="v7")&&(console.warn(">> AppKit - Forcing smart account version",s),i.searchParams.set("smartAccountVersion",s)),o&&i.searchParams.set("enableCloudAuthAccount","true"),i.toString()}class n1{constructor({projectId:t,isAppClient:n=!1,chainId:r="eip155:1",enableLogger:o=!0,enableCloudAuthAccount:i=!1,rpcUrl:s=_.BLOCKCHAIN_API_RPC_URL}){if(this.iframe=null,this.iframeIsReady=!1,this.initFrame=()=>{const a=document.getElementById("w3m-iframe");this.iframe&&!a&&document.body.appendChild(this.iframe)},this.events={registerFrameEventHandler:(a,c,l)=>{function d({data:m}){var g;if(!gc(q.FRAME_EVENT_KEY,m))return;const w=mc.frameEvent.safeParse(m);if(!w.success){console.warn("W3mFrame: invalid frame event",w.error.message);return}((g=w.data)==null?void 0:g.id)===a&&(c(w.data),window.removeEventListener("message",d))}on.isClient&&(window.addEventListener("message",d),l.addEventListener("abort",()=>{window.removeEventListener("message",d)}))},onFrameEvent:a=>{on.isClient&&window.addEventListener("message",({data:c})=>{if(!gc(q.FRAME_EVENT_KEY,c))return;const l=mc.frameEvent.safeParse(c);l.success?a(l.data):console.warn("W3mFrame: invalid frame event",l.error.message)})},onAppEvent:a=>{on.isClient&&window.addEventListener("message",({data:c})=>{if(!gc(q.APP_EVENT_KEY,c))return;const l=mc.appEvent.safeParse(c);l.success||console.warn("W3mFrame: invalid app event",l.error.message),a(c)})},postAppEvent:a=>{var c;if(on.isClient){if(!((c=this.iframe)!=null&&c.contentWindow))throw new Error("W3mFrame: iframe is not set");this.iframe.contentWindow.postMessage(a,"*")}},postFrameEvent:a=>{if(on.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");parent.postMessage(a,"*")}}},this.projectId=t,this.frameLoadPromise=new Promise((a,c)=>{this.frameLoadPromiseResolver={resolve:a,reject:c}}),this.rpcUrl=s,n&&(this.frameLoadPromise=new Promise((a,c)=>{this.frameLoadPromiseResolver={resolve:a,reject:c}}),on.isClient)){const a=document.createElement("iframe");a.id="w3m-iframe",a.src=t1({projectId:t,chainId:r,enableLogger:o,rpcUrl:this.rpcUrl,enableCloudAuthAccount:i}),a.name="w3m-secure-iframe",a.style.position="fixed",a.style.zIndex="999999",a.style.display="none",a.style.border="none",a.style.animationDelay="0s, 50ms",a.style.borderBottomLeftRadius="clamp(0px, var(--apkt-borderRadius-8), 44px)",a.style.borderBottomRightRadius="clamp(0px, var(--apkt-borderRadius-8), 44px)",this.iframe=a,this.iframe.onerror=()=>{var c;(c=this.frameLoadPromiseResolver)==null||c.reject("Unable to load email login dependency")},this.events.onFrameEvent(c=>{var l;c.type==="@w3m-frame/READY"&&(this.iframeIsReady=!0,(l=this.frameLoadPromiseResolver)==null||l.resolve(void 0))})}}get networks(){const t=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...t)}}var sn={exports:{}};function r1(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}var i1=o1;function o1(e,t,n){var r=n&&n.stringify||r1,o=1;if(typeof e=="object"&&e!==null){var i=t.length+o;if(i===1)return e;var s=new Array(i);s[0]=r(e);for(var a=1;a<i;a++)s[a]=r(t[a]);return s.join(" ")}if(typeof e!="string")return e;var c=t.length;if(c===0)return e;for(var l="",d=1-o,m=-1,w=e&&e.length||0,g=0;g<w;){if(e.charCodeAt(g)===37&&g+1<w){switch(m=m>-1?m:0,e.charCodeAt(g+1)){case 100:case 102:if(d>=c||t[d]==null)break;m<g&&(l+=e.slice(m,g)),l+=Number(t[d]),m=g+2,g++;break;case 105:if(d>=c||t[d]==null)break;m<g&&(l+=e.slice(m,g)),l+=Math.floor(Number(t[d])),m=g+2,g++;break;case 79:case 111:case 106:if(d>=c||t[d]===void 0)break;m<g&&(l+=e.slice(m,g));var b=typeof t[d];if(b==="string"){l+="'"+t[d]+"'",m=g+2,g++;break}if(b==="function"){l+=t[d].name||"<anonymous>",m=g+2,g++;break}l+=r(t[d]),m=g+2,g++;break;case 115:if(d>=c)break;m<g&&(l+=e.slice(m,g)),l+=String(t[d]),m=g+2,g++;break;case 37:m<g&&(l+=e.slice(m,g)),l+="%",m=g+2,g++,d--;break}++d}++g}return m===-1?e:(m<w&&(l+=e.slice(m)),l)}const Pd=i1;sn.exports=$n;const Io=C1().console||{},s1={mapHttpRequest:Fs,mapHttpResponse:Fs,wrapRequestSerializer:wc,wrapResponseSerializer:wc,wrapErrorSerializer:wc,req:Fs,res:Fs,err:Dd,errWithCause:Dd};function qn(e,t){return e==="silent"?1/0:t.levels.values[e]}const Hl=Symbol("pino.logFuncs"),ul=Symbol("pino.hierarchy"),a1={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function Ld(e,t){const n={logger:t,parent:e[ul]};t[ul]=n}function c1(e,t,n){const r={};t.forEach(o=>{r[o]=n[o]?n[o]:Io[o]||Io[a1[o]||"log"]||Si}),e[Hl]=r}function l1(e,t){return Array.isArray(e)?e.filter(function(n){return n!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function $n(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const n=e.browser.write||Io;e.browser.write&&(e.browser.asObject=!0);const r=e.serializers||{},o=l1(e.browser.serialize,r);let i=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(i=!1);const s=Object.keys(e.customLevels||{}),a=["error","fatal","warn","info","debug","trace"].concat(s);typeof n=="function"&&a.forEach(function(y){n[y]=n}),(e.enabled===!1||e.browser.disabled)&&(e.level="silent");const c=e.level||"info",l=Object.create(n);l.log||(l.log=Si),c1(l,a,n),Ld({},l),Object.defineProperty(l,"levelVal",{get:m}),Object.defineProperty(l,"level",{get:w,set:g});const d={transmit:t,serialize:o,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:a,timestamp:w1(e),messageKey:e.messageKey||"msg",onChild:e.onChild||Si};l.levels=d1(e),l.level=c,l.isLevelEnabled=function(y){return this.levels.values[y]?this.levels.values[y]>=this.levels.values[this.level]:!1},l.setMaxListeners=l.getMaxListeners=l.emit=l.addListener=l.on=l.prependListener=l.once=l.prependOnceListener=l.removeListener=l.removeAllListeners=l.listeners=l.listenerCount=l.eventNames=l.write=l.flush=Si,l.serializers=r,l._serialize=o,l._stdErrSerialize=i,l.child=function(...y){return b.call(this,d,...y)},t&&(l._logEvent=pl());function m(){return qn(this.level,this)}function w(){return this._level}function g(y){if(y!=="silent"&&!this.levels.values[y])throw Error("unknown level "+y);this._level=y,fr(this,d,l,"error"),fr(this,d,l,"fatal"),fr(this,d,l,"warn"),fr(this,d,l,"info"),fr(this,d,l,"debug"),fr(this,d,l,"trace"),s.forEach(C=>{fr(this,d,l,C)})}function b(y,C,x){if(!C)throw new Error("missing bindings for child Pino");x=x||{},o&&C.serializers&&(x.serializers=C.serializers);const A=x.serializers;if(o&&A){var R=Object.assign({},r,A),O=e.browser.serialize===!0?Object.keys(R):o;delete C.serializers,Vl([C],O,R,this._stdErrSerialize)}function G(F){this._childLevel=(F._childLevel|0)+1,this.bindings=C,R&&(this.serializers=R,this._serialize=O),t&&(this._logEvent=pl([].concat(F._logEvent.bindings,C)))}G.prototype=this;const U=new G(this);return Ld(this,U),U.child=function(...F){return b.call(this,y,...F)},U.level=x.level||this.level,y.onChild(U),U}return l}function d1(e){const t=e.customLevels||{},n=Object.assign({},$n.levels.values,t),r=Object.assign({},$n.levels.labels,u1(t));return{values:n,labels:r}}function u1(e){const t={};return Object.keys(e).forEach(function(n){t[e[n]]=n}),t}$n.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},$n.stdSerializers=s1,$n.stdTimeFunctions=Object.assign({},{nullTime:Ip,epochTime:$p,unixTime:b1,isoTime:y1});function p1(e){const t=[];e.bindings&&t.push(e.bindings);let n=e[ul];for(;n.parent;)n=n.parent,n.logger.bindings&&t.push(n.logger.bindings);return t.reverse()}function fr(e,t,n,r){if(Object.defineProperty(e,r,{value:qn(e.level,n)>qn(r,n)?Si:n[Hl][r],writable:!0,enumerable:!0,configurable:!0}),e[r]===Si){if(!t.transmit)return;const i=t.transmit.level||e.level,s=qn(i,n);if(qn(r,n)<s)return}e[r]=f1(e,t,n,r);const o=p1(e);o.length!==0&&(e[r]=h1(o,e[r]))}function h1(e,t){return function(){return t.apply(this,[...e,...arguments])}}function f1(e,t,n,r){return function(o){return function(){const i=t.timestamp(),s=new Array(arguments.length),a=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Io?Io:this;for(var c=0;c<s.length;c++)s[c]=arguments[c];var l=!1;if(t.serialize&&(Vl(s,this._serialize,this.serializers,this._stdErrSerialize),l=!0),t.asObject||t.formatters?o.call(a,...m1(this,r,s,i,t)):o.apply(a,s),t.transmit){const d=t.transmit.level||e._level,m=qn(d,n),w=qn(r,n);if(w<m)return;g1(this,{ts:i,methodLevel:r,methodValue:w,transmitValue:n.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:qn(e._level,n)},s,l)}}}(e[Hl][r])}function m1(e,t,n,r,o){const{level:i,log:s=m=>m}=o.formatters||{},a=n.slice();let c=a[0];const l={};let d=(e._childLevel|0)+1;if(d<1&&(d=1),r&&(l.time=r),i){const m=i(t,e.levels.values[t]);Object.assign(l,m)}else l.level=e.levels.values[t];if(o.asObjectBindingsOnly){if(c!==null&&typeof c=="object")for(;d--&&typeof a[0]=="object";)Object.assign(l,a.shift());return[s(l),...a]}else{if(c!==null&&typeof c=="object"){for(;d--&&typeof a[0]=="object";)Object.assign(l,a.shift());c=a.length?Pd(a.shift(),a):void 0}else typeof c=="string"&&(c=Pd(a.shift(),a));return c!==void 0&&(l[o.messageKey]=c),[s(l)]}}function Vl(e,t,n,r){for(const o in e)if(r&&e[o]instanceof Error)e[o]=$n.stdSerializers.err(e[o]);else if(typeof e[o]=="object"&&!Array.isArray(e[o])&&t)for(const i in e[o])t.indexOf(i)>-1&&i in n&&(e[o][i]=n[i](e[o][i]))}function g1(e,t,n,r=!1){const o=t.send,i=t.ts,s=t.methodLevel,a=t.methodValue,c=t.val,l=e._logEvent.bindings;r||Vl(n,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=n.filter(function(d){return l.indexOf(d)===-1}),e._logEvent.level.label=s,e._logEvent.level.value=a,o(s,e._logEvent,c),e._logEvent=pl(l)}function pl(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function Dd(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const n in e)t[n]===void 0&&(t[n]=e[n]);return t}function w1(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Ip:$p}function Fs(){return{}}function wc(e){return e}function Si(){}function Ip(){return!1}function $p(){return Date.now()}function b1(){return Math.round(Date.now()/1e3)}function y1(){return new Date(Date.now()).toISOString()}function C1(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}sn.exports.default=$n;sn.exports.pino=$n;const v1={level:"info"},Ya="custom_context",Kl=1e3*1024;var E1=Object.defineProperty,_1=(e,t,n)=>t in e?E1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vn=(e,t,n)=>_1(e,typeof t!="symbol"?t+"":t,n);class A1{constructor(t){Vn(this,"nodeValue"),Vn(this,"sizeInBytes"),Vn(this,"next"),this.nodeValue=t,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class Md{constructor(t){Vn(this,"lengthInNodes"),Vn(this,"sizeInBytes"),Vn(this,"head"),Vn(this,"tail"),Vn(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=t,this.sizeInBytes=0}append(t){const n=new A1(t);if(n.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${n.size}`);for(;this.size+n.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=n),this.tail=n):(this.head=n,this.tail=n),this.lengthInNodes++,this.sizeInBytes+=n.size}shift(){if(!this.head)return;const t=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=t.size}toArray(){const t=[];let n=this.head;for(;n!==null;)t.push(n.value),n=n.next;return t}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let t=this.head;return{next:()=>{if(!t)return{done:!0,value:null};const n=t.value;return t=t.next,{done:!1,value:n}}}}}const x1=e=>JSON.stringify(e,(t,n)=>typeof n=="bigint"?n.toString()+"n":n);function Ud(e){return typeof e=="string"?e:x1(e)||""}var S1=Object.defineProperty,T1=(e,t,n)=>t in e?S1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,js=(e,t,n)=>T1(e,typeof t!="symbol"?t+"":t,n);class kp{constructor(t,n=Kl){js(this,"logs"),js(this,"level"),js(this,"levelValue"),js(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=t??"error",this.levelValue=sn.exports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=n,this.logs=new Md(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(t,n){n===sn.exports.levels.values.error?console.error(t):n===sn.exports.levels.values.warn?console.warn(t):n===sn.exports.levels.values.debug?console.debug(t):n===sn.exports.levels.values.trace?console.trace(t):console.log(t)}appendToLogs(t){this.logs.append(Ud({timestamp:new Date().toISOString(),log:t}));const n=typeof t=="string"?JSON.parse(t).level:t.level;n>=this.levelValue&&this.forwardToConsole(t,n)}getLogs(){return this.logs}clearLogs(){this.logs=new Md(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(t){const n=this.getLogArray();return n.push(Ud({extraMetadata:t})),new Blob(n,{type:"application/json"})}}var N1=Object.defineProperty,R1=(e,t,n)=>t in e?N1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I1=(e,t,n)=>R1(e,t+"",n);class $1{constructor(t,n=Kl){I1(this,"baseChunkLogger"),this.baseChunkLogger=new kp(t,n)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}downloadLogsBlobInBrowser(t){const n=URL.createObjectURL(this.logsToBlob(t)),r=document.createElement("a");r.href=n,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}}var k1=Object.defineProperty,O1=(e,t,n)=>t in e?k1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P1=(e,t,n)=>O1(e,t+"",n);class L1{constructor(t,n=Kl){P1(this,"baseChunkLogger"),this.baseChunkLogger=new kp(t,n)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}}var D1=Object.defineProperty,M1=Object.defineProperties,U1=Object.getOwnPropertyDescriptors,Wd=Object.getOwnPropertySymbols,W1=Object.prototype.hasOwnProperty,B1=Object.prototype.propertyIsEnumerable,Bd=(e,t,n)=>t in e?D1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zn=(e,t)=>{for(var n in t||(t={}))W1.call(t,n)&&Bd(e,n,t[n]);if(Wd)for(var n of Wd(t))B1.call(t,n)&&Bd(e,n,t[n]);return e},Yn=(e,t)=>M1(e,U1(t));function F1(e){return Yn(Zn({},e),{level:(e==null?void 0:e.level)||v1.level})}function j1(e,t,n=Ya){return e[n]=t,e}function z1(e,t=Ya){return e[t]||""}function H1(e,t,n=Ya){const r=z1(e,n);return r.trim()?`${r}/${t}`:t}function V1(e,t,n=Ya){const r=H1(e,t,n),o=e.child({context:r});return j1(o,r,n)}function K1(e){var t,n;const r=new $1((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:sn.exports(Yn(Zn({},e.opts),{level:"trace",browser:Yn(Zn({},(n=e.opts)==null?void 0:n.browser),{write:o=>r.write(o)})})),chunkLoggerController:r}}function q1(e){var t,n;const r=new L1((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:sn.exports(Yn(Zn({},e.opts),{level:"trace",browser:Yn(Zn({},(n=e.opts)==null?void 0:n.browser),{write:o=>r.write(o)})}),r),chunkLoggerController:r}}function G1(e){var t;if(typeof e.loggerOverride<"u"&&typeof e.loggerOverride!="string")return{logger:e.loggerOverride,chunkLoggerController:null};const n=Yn(Zn({},e.opts),{level:typeof e.loggerOverride=="string"?e.loggerOverride:(t=e.opts)==null?void 0:t.level});return typeof window<"u"?K1(Yn(Zn({},e),{opts:n})):q1(Yn(Zn({},e),{opts:n}))}class Z1{constructor(t){var i;const n=F1({level:Df}),{logger:r,chunkLoggerController:o}=G1({opts:n});this.logger=V1(r,this.constructor.name),this.chunkLoggerController=o,typeof window<"u"&&((i=this.chunkLoggerController)!=null&&i.downloadLogsBlobInBrowser)&&(window.downloadAppKitLogsBlob||(window.downloadAppKitLogsBlob={}),window.downloadAppKitLogsBlob.sdk=()=>{var s;(s=this.chunkLoggerController)!=null&&s.downloadLogsBlobInBrowser&&this.chunkLoggerController.downloadLogsBlobInBrowser({projectId:t})})}}class Y1{constructor({projectId:t,chainId:n,enableLogger:r=!0,onTimeout:o,abortController:i,getActiveCaipNetwork:s,getCaipNetworks:a,enableCloudAuthAccount:c,metadata:l,sdkVersion:d,sdkType:m}){this.openRpcRequests=new Map,this.isInitialized=!1,r&&(this.w3mLogger=new Z1(t)),this.abortController=i,this.getActiveCaipNetwork=s,this.getCaipNetworks=a;const w=this.getRpcUrl(n);this.projectId=t,this.sdkVersion=d,this.sdkType=m,this.metadata=l,this.w3mFrame=new n1({projectId:t,isAppClient:!0,chainId:n,enableLogger:r,rpcUrl:w,enableCloudAuthAccount:c}),this.onTimeout=o,this.getLoginEmailUsed()&&this.createFrame()}async createFrame(){this.w3mFrame.initFrame(),this.initPromise=new Promise(t=>{this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_READY&&setTimeout(()=>{t()},500)})}),await this.initPromise,await this.syncDappData({metadata:this.metadata,projectId:this.projectId,sdkVersion:this.sdkVersion,sdkType:this.sdkType}),await this.getSmartAccountEnabledNetworks(),this.isInitialized=!0,this.initPromise=void 0}async init(){if(!this.isInitialized){if(this.initPromise){await this.initPromise;return}await this.createFrame()}}getLoginEmailUsed(){return!!Fe.get(q.EMAIL_LOGIN_USED_KEY)}getEmail(){return Fe.get(q.EMAIL)}getUsername(){return Fe.get(q.SOCIAL_USERNAME)}async reload(){var t;try{await this.appEvent({type:q.APP_RELOAD})}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error reloading iframe"),n}}async connectEmail(t){var n;try{on.checkIfAllowedToTriggerEmail(),await this.init();const r=await this.appEvent({type:q.APP_CONNECT_EMAIL,payload:t});return this.setNewLastEmailLoginTime(),r}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error connecting email"),r}}async connectDevice(){var t;try{return this.appEvent({type:q.APP_CONNECT_DEVICE})}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error connecting device"),n}}async connectOtp(t){var n;try{return this.appEvent({type:q.APP_CONNECT_OTP,payload:t})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error connecting otp"),r}}async isConnected(){var t;try{if(!this.getLoginEmailUsed())return{isConnected:!1};const n=await this.appEvent({type:q.APP_IS_CONNECTED});return n!=null&&n.isConnected||this.deleteAuthLoginCache(),n}catch(n){throw this.deleteAuthLoginCache(),(t=this.w3mLogger)==null||t.logger.error({error:n},"Error checking connection"),n}}async getChainId(){var t;try{const n=await this.appEvent({type:q.APP_GET_CHAIN_ID});return this.setLastUsedChainId(n.chainId),n}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error getting chain id"),n}}async getSocialRedirectUri(t){var n;try{return await this.init(),this.appEvent({type:q.APP_GET_SOCIAL_REDIRECT_URI,payload:t})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error getting social redirect uri"),r}}async updateEmail(t){var n;try{const r=await this.appEvent({type:q.APP_UPDATE_EMAIL,payload:t});return this.setNewLastEmailLoginTime(),r}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error updating email"),r}}async updateEmailPrimaryOtp(t){var n;try{return this.appEvent({type:q.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:t})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error updating email primary otp"),r}}async updateEmailSecondaryOtp(t){var n;try{const r=await this.appEvent({type:q.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:t});return this.setLoginSuccess(r.newEmail),r}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error updating email secondary otp"),r}}async syncTheme(t){var n;try{return this.appEvent({type:q.APP_SYNC_THEME,payload:t})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error syncing theme"),r}}async syncDappData(t){var n;try{return this.appEvent({type:q.APP_SYNC_DAPP_DATA,payload:t})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error syncing dapp data"),r}}async getSmartAccountEnabledNetworks(){var t;try{const n=await this.appEvent({type:q.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS});return this.persistSmartAccountEnabledNetworks(n.smartAccountEnabledNetworks),n}catch(n){throw this.persistSmartAccountEnabledNetworks([]),(t=this.w3mLogger)==null||t.logger.error({error:n},"Error getting smart account enabled networks"),n}}async setPreferredAccount(t){var n;try{return this.appEvent({type:q.APP_SET_PREFERRED_ACCOUNT,payload:{type:t}})}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error setting preferred account"),r}}async connect(t){var n,r;if(t!=null&&t.socialUri)try{await this.init();const o=this.getRpcUrl(t.chainId),i=await this.appEvent({type:q.APP_CONNECT_SOCIAL,payload:{uri:t.socialUri,preferredAccountType:t.preferredAccountType,chainId:t.chainId,siwxMessage:t.siwxMessage,rpcUrl:o}});return i.userName&&this.setSocialLoginSuccess(i.userName),this.setLoginSuccess(i.email),this.setLastUsedChainId(i.chainId),this.user=i,i}catch(o){throw(n=this.w3mLogger)==null||n.logger.error({error:o},"Error connecting social"),o}else try{const o=(t==null?void 0:t.chainId)||this.getLastUsedChainId()||1,i=await this.getUser({chainId:o,preferredAccountType:t==null?void 0:t.preferredAccountType,siwxMessage:t==null?void 0:t.siwxMessage,rpcUrl:this.getRpcUrl(o)});return this.setLoginSuccess(i.email),this.setLastUsedChainId(i.chainId),this.user=i,i}catch(o){throw(r=this.w3mLogger)==null||r.logger.error({error:o},"Error connecting"),o}}async getUser(t){var n;try{await this.init();const r=(t==null?void 0:t.chainId)||this.getLastUsedChainId()||1,o=await this.appEvent({type:q.APP_GET_USER,payload:{...t,chainId:r,rpcUrl:this.getRpcUrl(r)}});return this.user=o,o}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error connecting"),r}}async connectSocial({uri:t,chainId:n,preferredAccountType:r}){var o;try{await this.init();const i=this.getRpcUrl(n),s=await this.appEvent({type:q.APP_CONNECT_SOCIAL,payload:{uri:t,chainId:n,rpcUrl:i,preferredAccountType:r}});return s.userName&&this.setSocialLoginSuccess(s.userName),s}catch(i){throw(o=this.w3mLogger)==null||o.logger.error({error:i},"Error connecting social"),i}}async getFarcasterUri(){var t;try{return await this.init(),await this.appEvent({type:q.APP_GET_FARCASTER_URI})}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error getting farcaster uri"),n}}async connectFarcaster(){var t;try{const n=await this.appEvent({type:q.APP_CONNECT_FARCASTER});return n.userName&&this.setSocialLoginSuccess(n.userName),n}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error connecting farcaster"),n}}async switchNetwork({chainId:t}){var n;try{const r=this.getRpcUrl(t),o=await this.appEvent({type:q.APP_SWITCH_NETWORK,payload:{chainId:t,rpcUrl:r}});return this.setLastUsedChainId(o.chainId),o}catch(r){throw(n=this.w3mLogger)==null||n.logger.error({error:r},"Error switching network"),r}}async disconnect(){var t;try{return this.deleteAuthLoginCache(),await new Promise(async r=>{const o=setTimeout(()=>{r()},3e3);await this.appEvent({type:q.APP_SIGN_OUT}),clearTimeout(o),r()})}catch(n){throw(t=this.w3mLogger)==null||t.logger.error({error:n},"Error disconnecting"),n}}async request(t){var r,o,i,s,a;const n=t;try{if(Ne.GET_CHAIN_ID===t.method)return this.getLastUsedChainId();const c=t.chainNamespace||"eip155",l=(r=this.getActiveCaipNetwork(c))==null?void 0:r.id;n.chainNamespace=c,n.chainId=l,n.rpcUrl=this.getRpcUrl(l),(o=this.rpcRequestHandler)==null||o.call(this,t);const d=await this.appEvent({type:q.APP_RPC_REQUEST,payload:n});return(i=this.rpcSuccessHandler)==null||i.call(this,d,n),d}catch(c){throw(s=this.rpcErrorHandler)==null||s.call(this,c,n),(a=this.w3mLogger)==null||a.logger.error({error:c},"Error requesting"),c}}onRpcRequest(t){this.rpcRequestHandler=t}onRpcSuccess(t){this.rpcSuccessHandler=t}onRpcError(t){this.rpcErrorHandler=t}onIsConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_IS_CONNECTED_SUCCESS&&n.payload.isConnected&&t()})}onNotConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_IS_CONNECTED_ERROR&&t(),n.type===q.FRAME_IS_CONNECTED_SUCCESS&&!n.payload.isConnected&&t()})}onConnect(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_GET_USER_SUCCESS&&t(n.payload)})}onSocialConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_CONNECT_SOCIAL_SUCCESS&&t(n.payload)})}async getCapabilities(){try{return await this.request({method:"wallet_getCapabilities"})||{}}catch{return{}}}onSetPreferredAccount(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===q.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?t(n.payload):n.type===q.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&t({type:Ne.ACCOUNT_TYPES.EOA})})}getAvailableChainIds(){return Object.keys(this.w3mFrame.networks)}async rejectRpcRequests(){var t;try{await Promise.all(Array.from(this.openRpcRequests.values()).map(async({abortController:n,method:r})=>{Ne.SAFE_RPC_METHODS.includes(r)||n.abort(),await this.appEvent({type:q.APP_RPC_ABORT})})),this.openRpcRequests.clear()}catch(n){(t=this.w3mLogger)==null||t.logger.error({error:n},"Error aborting RPC request")}}async appEvent(t){let n,r;function o(c){return c.replace("@w3m-app/","")}const i=[q.APP_SYNC_DAPP_DATA,q.APP_SYNC_THEME,q.APP_SET_PREFERRED_ACCOUNT],s=o(t.type);return!this.w3mFrame.iframeIsReady&&!i.includes(t.type)&&(r=setTimeout(()=>{var c;(c=this.onTimeout)==null||c.call(this,"iframe_load_failed"),this.abortController.abort()},2e4)),await this.w3mFrame.frameLoadPromise,clearTimeout(r),[q.APP_CONNECT_EMAIL,q.APP_CONNECT_DEVICE,q.APP_CONNECT_OTP,q.APP_CONNECT_SOCIAL,q.APP_GET_SOCIAL_REDIRECT_URI].map(o).includes(s)&&(n=setTimeout(()=>{var c;(c=this.onTimeout)==null||c.call(this,"iframe_request_timeout"),this.abortController.abort()},12e4)),new Promise((c,l)=>{var g,b,y;const d=Math.random().toString(36).substring(7);(y=(g=this.w3mLogger)==null?void 0:(b=g.logger).info)==null||y.call(b,{event:t,id:d},"Sending app event"),this.w3mFrame.events.postAppEvent({...t,id:d});const m=new AbortController;if(s==="RPC_REQUEST"){const C=t;this.openRpcRequests.set(d,{...C.payload,abortController:m})}m.signal.addEventListener("abort",()=>{s==="RPC_REQUEST"?l(new Error("Request was aborted")):s!=="GET_FARCASTER_URI"&&l(new Error("Something went wrong"))});const w=(C,x)=>{var A,R,O;C.id===d&&((R=x==null?void 0:(A=x.logger).info)==null||R.call(A,{framEvent:C,id:d},"Received frame response"),this.openRpcRequests.delete(C.id),C.type===`@w3m-frame/${s}_SUCCESS`?(n&&clearTimeout(n),r&&clearTimeout(r),"payload"in C&&c(C.payload),c(void 0)):C.type===`@w3m-frame/${s}_ERROR`&&(n&&clearTimeout(n),r&&clearTimeout(r),"payload"in C&&l(new Error(((O=C.payload)==null?void 0:O.message)||"An error occurred")),l(new Error("An error occurred"))))};this.w3mFrame.events.registerFrameEventHandler(d,C=>w(C,this.w3mLogger),this.abortController.signal)})}setNewLastEmailLoginTime(){Fe.set(q.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(t){Fe.set(q.SOCIAL_USERNAME,t)}setLoginSuccess(t){t&&Fe.set(q.EMAIL,t),Fe.set(q.EMAIL_LOGIN_USED_KEY,"true"),Fe.delete(q.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){Fe.delete(q.EMAIL_LOGIN_USED_KEY),Fe.delete(q.EMAIL),Fe.delete(q.LAST_USED_CHAIN_KEY),Fe.delete(q.SOCIAL_USERNAME)}setLastUsedChainId(t){t&&Fe.set(q.LAST_USED_CHAIN_KEY,String(t))}getLastUsedChainId(){const t=Fe.get(q.LAST_USED_CHAIN_KEY)??void 0,n=Number(t);return isNaN(n)?t:n}persistSmartAccountEnabledNetworks(t){Fe.set(q.SMART_ACCOUNT_ENABLED_NETWORKS,t.join(","))}getRpcUrl(t){var i,s;let n=t===void 0?void 0:"eip155";typeof t=="string"&&(t.includes(":")?n=(i=At.parseCaipNetworkId(t))==null?void 0:i.chainNamespace:Number.isInteger(Number(t))?n="eip155":n="solana");const r=this.getCaipNetworks(n),o=t?r.find(a=>String(a.id)===String(t)||a.caipNetworkId===t):r[0];return(s=o==null?void 0:o.rpcUrls.default.http)==null?void 0:s[0]}}function Op(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[o,i]=[n.slice(0,n.length-t),n.slice(n.length-t)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}const My=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{name:"addr",type:"address"}],name:"getEthBalance",outputs:[{name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],Uy=[{name:"query",type:"function",stateMutability:"view",inputs:[{type:"tuple[]",name:"queries",components:[{type:"address",name:"sender"},{type:"string[]",name:"urls"},{type:"bytes",name:"data"}]}],outputs:[{type:"bool[]",name:"failures"},{type:"bytes[]",name:"responses"}]},{name:"HttpError",type:"error",inputs:[{type:"uint16",name:"status"},{type:"string",name:"message"}]}],Pp=[{inputs:[{name:"dns",type:"bytes"}],name:"DNSDecodingFailed",type:"error"},{inputs:[{name:"ens",type:"string"}],name:"DNSEncodingFailed",type:"error"},{inputs:[],name:"EmptyAddress",type:"error"},{inputs:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"HttpError",type:"error"},{inputs:[],name:"InvalidBatchGatewayResponse",type:"error"},{inputs:[{name:"errorData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{name:"name",type:"bytes"},{name:"resolver",type:"address"}],name:"ResolverNotContract",type:"error"},{inputs:[{name:"name",type:"bytes"}],name:"ResolverNotFound",type:"error"},{inputs:[{name:"primary",type:"string"},{name:"primaryAddress",type:"bytes"}],name:"ReverseAddressMismatch",type:"error"},{inputs:[{internalType:"bytes4",name:"selector",type:"bytes4"}],name:"UnsupportedResolverProfile",type:"error"}],Wy=[...Pp,{name:"resolveWithGateways",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],By=[...Pp,{name:"reverseWithGateways",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"uint256",name:"coinType"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolver"},{type:"address",name:"reverseResolver"}]}],Fy=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],jy=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],zy=[{name:"isValidSignature",type:"function",stateMutability:"view",inputs:[{name:"hash",type:"bytes32"},{name:"signature",type:"bytes"}],outputs:[{name:"",type:"bytes4"}]}],Hy=[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function",name:"isValidSig"}],zs=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}];async function no(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class ms{constructor({baseUrl:t,clientId:n}){this.baseUrl=t,this.clientId=n}async get({headers:t,signal:n,cache:r,...o}){const i=this.createUrl(o);return(await no(i,{method:"GET",headers:t,signal:n,cache:r})).json()}async getBlob({headers:t,signal:n,...r}){const o=this.createUrl(r);return(await no(o,{method:"GET",headers:t,signal:n})).blob()}async post({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await no(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}async put({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await no(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}async delete({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await no(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}sendBeacon({body:t,...n}){const r=this.createUrl(n);return navigator.sendBeacon(r.toString(),t?JSON.stringify(t):void 0)}}const hl={getFeatureValue(e,t){const n=t==null?void 0:t[e];return n===void 0?Ce.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return T.isTelegram()&&(T.isIos()&&(t=t.filter(n=>n!=="google")),T.isMac()&&(t=t.filter(n=>n!=="x")),T.isAndroid()&&(t=t.filter(n=>!["facebook","x"].includes(n)))),T.isMobile()&&(t=t.filter(n=>n!=="facebook")),t},isSocialsEnabled(){var e,t,n,r;return Array.isArray((e=S.state.features)==null?void 0:e.socials)&&((t=S.state.features)==null?void 0:t.socials.length)>0||Array.isArray((n=S.state.remoteFeatures)==null?void 0:n.socials)&&((r=S.state.remoteFeatures)==null?void 0:r.socials.length)>0},isEmailEnabled(){var e,t;return!!((e=S.state.features)!=null&&e.email||(t=S.state.remoteFeatures)!=null&&t.email)}},X=$e({features:Ce.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:Ce.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),S={state:X,subscribeKey(e,t){return Ve(X,e,t)},setOptions(e){Object.assign(X,e)},setRemoteFeatures(e){var n,r;if(!e)return;const t={...X.remoteFeatures,...e};X.remoteFeatures=t,(n=X.remoteFeatures)!=null&&n.socials&&(X.remoteFeatures.socials=hl.filterSocialsByPlatform(X.remoteFeatures.socials)),(r=X.features)!=null&&r.pay&&(X.remoteFeatures.email=!1,X.remoteFeatures.socials=!1)},setFeatures(e){var n;if(!e)return;X.features||(X.features=Ce.DEFAULT_FEATURES);const t={...X.features,...e};X.features=t,(n=X.features)!=null&&n.pay&&X.remoteFeatures&&(X.remoteFeatures.email=!1,X.remoteFeatures.socials=!1)},setProjectId(e){X.projectId=e},setCustomRpcUrls(e){X.customRpcUrls=e},setAllWallets(e){X.allWallets=e},setIncludeWalletIds(e){X.includeWalletIds=e},setExcludeWalletIds(e){X.excludeWalletIds=e},setFeaturedWalletIds(e){X.featuredWalletIds=e},setTokens(e){X.tokens=e},setTermsConditionsUrl(e){X.termsConditionsUrl=e},setPrivacyPolicyUrl(e){X.privacyPolicyUrl=e},setCustomWallets(e){X.customWallets=e},setIsSiweEnabled(e){X.isSiweEnabled=e},setIsUniversalProvider(e){X.isUniversalProvider=e},setSdkVersion(e){X.sdkVersion=e},setMetadata(e){X.metadata=e},setDisableAppend(e){X.disableAppend=e},setEIP6963Enabled(e){X.enableEIP6963=e},setEnableCoinbase(e){X.enableCoinbase=e},setDebug(e){X.debug=e},setEnableWalletGuide(e){X.enableWalletGuide=e},setEnableAuthLogger(e){X.enableAuthLogger=e},setEnableWallets(e){X.enableWallets=e},setPreferUniversalLinks(e){X.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[t,n]of Object.entries(Ce.SIWX_DEFAULTS))e[t]??(e[t]=n);X.siwx=e},setConnectMethodsOrder(e){X.features={...X.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){X.features={...X.features,walletFeaturesOrder:e}},setSocialsOrder(e){X.remoteFeatures={...X.remoteFeatures,socials:e}},setCollapseWallets(e){X.features={...X.features,collapseWallets:e}},setEnableEmbedded(e){X.enableEmbedded=e},setAllowUnsupportedChain(e){X.allowUnsupportedChain=e},setManualWCControl(e){X.manualWCControl=e},setEnableNetworkSwitch(e){X.enableNetworkSwitch=e},setEnableMobileFullScreen(e){X.enableMobileFullScreen=T.isMobile()&&e},setEnableReconnect(e){X.enableReconnect=e},setCoinbasePreference(e){X.coinbasePreference=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,n])=>{n&&(X.defaultAccountTypes[t]=n)})},setUniversalProviderConfigOverride(e){X.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return X.universalProviderConfigOverride},getSnapshot(){return wo(X)}},wr=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),We=$e({...wr}),J1={state:We,subscribeKey(e,t){return Ve(We,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=T.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){We.message=wr.message,We.variant=wr.variant,We.svg=wr.svg,We.open=wr.open,We.autoClose=wr.autoClose},_showMessage({message:e,svg:t,variant:n="success",autoClose:r=wr.autoClose}){We.open?(We.open=!1,setTimeout(()=>{We.message=e,We.variant=n,We.svg=t,We.open=!0,We.autoClose=r},150)):(We.message=e,We.variant=n,We.svg=t,We.open=!0,We.autoClose=r)}},ye=J1,X1={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Lp=T.getBlockchainApiUrl(),nt=$e({clientId:null,api:new ms({baseUrl:Lp,clientId:null}),supportedChains:{http:[],ws:[]}}),fe={state:nt,async get(e){const{st:t,sv:n}=fe.getSdkProperties(),r=S.state.projectId,o={...e.params||{},st:t,sv:n,projectId:r};return nt.api.get({...e,params:o})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=S.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{nt.supportedChains.http.length||await fe.getSupportedNetworks()}catch{return!1}return nt.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await fe.get({path:"v1/supported-chains"});return nt.supportedChains=e,e}catch{return nt.supportedChains}},async fetchIdentity({address:e}){const t=D.getIdentityFromCacheForAddress(e);if(t)return t;const n=await fe.get({path:`/v1/identity/${e}`,params:{sender:h.state.activeCaipAddress?T.getPlainAddress(h.state.activeCaipAddress):void 0}});return D.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,signal:n,cache:r,chainId:o}){var c;if(!await fe.isNetworkSupported((c=h.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return{data:[],next:void 0};const s=D.getTransactionsCacheForAddress({address:e,chainId:o});if(s)return s;const a=await fe.get({path:`/v1/account/${e}/history`,params:{cursor:t,chainId:o},signal:n,cache:r});return D.updateTransactionsCache({address:e,chainId:o,timestamp:Date.now(),transactions:a}),a},async fetchSwapQuote({amount:e,userAddress:t,from:n,to:r,gasPrice:o}){var s;return await fe.isNetworkSupported((s=h.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?fe.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:n,to:r,gasPrice:o}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){var n;return await fe.isNetworkSupported((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?fe.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async getAddressBalance({caipNetworkId:e,address:t,method:n="getAddressBalance",params:r}){return nt.api.post({path:`/v1?chainId=${e}&projectId=${S.state.projectId}`,body:{id:"1",jsonrpc:"2.0",method:n,params:r??{address:t}}}).then(o=>o.result)},async fetchTokenPrice({addresses:e,caipNetworkId:t=(n=>(n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)()}){if(!await fe.isNetworkSupported(t))return{fungibles:[]};const o=D.getTokenPriceCacheForAddresses(e);if(o)return o;const i=await nt.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:S.state.projectId},headers:{"Content-Type":"application/json"}});return D.updateTokenPriceCache({addresses:e,timestamp:Date.now(),tokenPrice:i}),i},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){var r;return await fe.isNetworkSupported((r=h.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?fe.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){var o;const{st:t,sv:n}=fe.getSdkProperties();if(!await fe.isNetworkSupported((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId))throw new Error("Network not supported for Gas Price");return fe.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:n}})},async generateSwapCalldata({amount:e,from:t,to:n,userAddress:r,disableEstimate:o}){var s;if(!await fe.isNetworkSupported((s=h.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Swaps");return nt.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:Ce.CONVERT_SLIPPAGE_TOLERANCE},projectId:S.state.projectId,from:t,to:n,userAddress:r,disableEstimate:o}})},async generateApproveCalldata({from:e,to:t,userAddress:n}){var s;const{st:r,sv:o}=fe.getSdkProperties();if(!await fe.isNetworkSupported((s=h.state.activeCaipNetwork)==null?void 0:s.caipNetworkId))throw new Error("Network not supported for Swaps");return fe.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:n,from:e,to:t,st:r,sv:o}})},async getBalance(e,t,n){var l;const{st:r,sv:o}=fe.getSdkProperties();if(!await fe.isNetworkSupported((l=h.state.activeCaipNetwork)==null?void 0:l.caipNetworkId))return ye.showError("Token Balance Unavailable"),{balances:[]};const s=`${t}:${e}`,a=D.getBalanceCacheForCaipAddress(s);if(a)return a;const c=await fe.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:n,st:r,sv:o}});return D.updateBalanceCache({caipAddress:s,balance:c,timestamp:Date.now()}),c},async lookupEnsName(e){var n;return await fe.isNetworkSupported((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?fe.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){var r,o;if(!await fe.isNetworkSupported((r=h.state.activeCaipNetwork)==null?void 0:r.caipNetworkId))return[];const n=(o=h.getAccountData())==null?void 0:o.address;return fe.get({path:`/v1/profile/reverse/${e}`,params:{sender:n,apiVersion:"2"}})},async getEnsNameSuggestions(e){var n;return await fe.isNetworkSupported((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?fe.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:n,signature:r}){var i;return await fe.isNetworkSupported((i=h.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?nt.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:n,signature:r},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:r,paymentAmount:o}){var a;return await fe.isNetworkSupported((a=h.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)?(await nt.api.post({path:"/v1/generators/onrampurl",params:{projectId:S.state.projectId},body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url:""},async getOnrampOptions(){var t;if(!await fe.isNetworkSupported((t=h.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await fe.get({path:"/v1/onramp/options"})}catch{return X1}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}){var o;try{return await fe.isNetworkSupported((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?await nt.api.post({path:"/v1/onramp/quote",params:{projectId:S.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}}):null}catch{return{networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var n;return await fe.isNetworkSupported((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?fe.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,n){var o;return await fe.isNetworkSupported((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?nt.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:S.state.projectId},body:{pci:t,signature:n}}):{success:!1}},setClientId(e){nt.clientId=e,nt.api=new ms({baseUrl:Lp,clientId:e})}},Q1=Object.freeze({enabled:!0,events:[]}),eg=new ms({baseUrl:T.getAnalyticsUrl(),clientId:null}),tg=5,ng=60*1e3,Fn=$e({...Q1}),rg={state:Fn,subscribeKey(e,t){return Ve(Fn,e,t)},async sendError(e,t){if(!Fn.enabled)return;const n=Date.now();if(Fn.events.filter(i=>{const s=new Date(i.properties.timestamp||"").getTime();return n-s<ng}).length>=tg)return;const o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};Fn.events.push(o);try{if(typeof window>"u")return;const{projectId:i,sdkType:s,sdkVersion:a}=S.state;await eg.post({path:"/e",params:{projectId:i,st:s,sv:a||"html-wagmi-4.2.2"},body:{eventId:T.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){Fn.enabled=!0},disable(){Fn.enabled=!1},clearEvents(){Fn.events=[]}};class pn extends Error{constructor(t,n,r){super(t),this.originalName="AppKitError",this.name="AppKitError",this.category=n,this.originalError=r,r&&r instanceof Error&&(this.originalName=r.name),Object.setPrototypeOf(this,pn.prototype);let o=!1;if(r instanceof Error&&typeof r.stack=="string"&&r.stack){const i=r.stack,s=i.indexOf(`
`);if(s>-1){const a=i.substring(s+1);this.stack=`${this.name}: ${this.message}
${a}`,o=!0}}o||(Error.captureStackTrace?Error.captureStackTrace(this,pn):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function Fd(e,t){let n="";try{e instanceof Error?n=e.message:typeof e=="string"?n=e:typeof e=="object"&&e!==null?Object.keys(e).length===0?n="Unknown error":n=(e==null?void 0:e.message)||JSON.stringify(e):n=String(e)}catch(o){n="Unknown error",console.error("Error parsing error message",o)}const r=e instanceof pn?e:new pn(n,t,e);throw rg.sendError(r,r.category),r}function Gt(e,t="INTERNAL_SDK_ERROR"){const n={};return Object.keys(e).forEach(r=>{const o=e[r];if(typeof o=="function"){let i=o;o.constructor.name==="AsyncFunction"?i=async(...s)=>{try{return await o(...s)}catch(a){return Fd(a,t)}}:i=(...s)=>{try{return o(...s)}catch(a){return Fd(a,t)}},n[r]=i}else n[r]=o}),n}const vt=$e({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),ig={state:vt,subscribeNetworkImages(e){return He(vt.networkImages,()=>e(vt.networkImages))},subscribeKey(e,t){return Ve(vt,e,t)},subscribe(e){return He(vt,()=>e(vt))},setWalletImage(e,t){vt.walletImages[e]=t},setNetworkImage(e,t){vt.networkImages[e]=t},setChainImage(e,t){vt.chainImages[e]=t},setConnectorImage(e,t){vt.connectorImages={...vt.connectorImages,[e]:t}},setTokenImage(e,t){vt.tokenImages[e]=t},setCurrencyImage(e,t){vt.currencyImages[e]=t}},ze=Gt(ig),jd={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:"",sui:"",stacks:"",ton:"20f673c0-095e-49b2-07cf-eb5049dcf600",tron:"3502bb86-cc4e-420f-a387-59ea63a28b00"},bi=$e({networkImagePromises:{},tokenImagePromises:{}}),xe={async fetchWalletImage(e){if(e)return await P._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(bi.networkImagePromises[e]||(bi.networkImagePromises[e]=P._fetchNetworkImage(e)),await bi.networkImagePromises[e],this.getNetworkImageById(e))},async fetchTokenImage(e){if(e)return bi.tokenImagePromises[e]||(bi.tokenImagePromises[e]=P._fetchTokenImage(e)),await bi.tokenImagePromises[e],this.getTokenImage(e)},getWalletImageById(e){if(e)return ze.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return ze.state.walletImages[e.image_id]},getNetworkImage(e){var t,n,r;if((t=e==null?void 0:e.assets)!=null&&t.imageUrl)return(n=e==null?void 0:e.assets)==null?void 0:n.imageUrl;if((r=e==null?void 0:e.assets)!=null&&r.imageId)return ze.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return ze.state.networkImages[e]},getConnectorImage(e){var t;if(e!=null&&e.imageUrl)return e.imageUrl;if((t=e==null?void 0:e.info)!=null&&t.icon)return e.info.icon;if(e!=null&&e.imageId)return ze.state.connectorImages[e.imageId]},getChainImage(e){return ze.state.networkImages[jd[e]]},getTokenImage(e){if(e)return ze.state.tokenImages[e]},getWalletImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:r}=S.state,o=new URL(`${_.W3M_API_URL}/getWalletImage/${e}`);return o.searchParams.set("projectId",t),o.searchParams.set("st",n),o.searchParams.set("sv",r),o.toString()},getAssetImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:r}=S.state,o=new URL(`${_.W3M_API_URL}/public/getAssetImage/${e}`);return o.searchParams.set("projectId",t),o.searchParams.set("st",n),o.searchParams.set("sv",r),o.toString()},getChainNamespaceImageUrl(e){return this.getAssetImageUrl(jd[e])},async getImageByToken(e,t){if(e==="native"){const r=_.NATIVE_IMAGE_IDS_BY_NAMESPACE[t]??null;return r?xe.fetchNetworkImage(r):void 0}const[,n]=Object.entries(_.TOKEN_SYMBOLS_BY_ADDRESS).find(([r])=>r.toLowerCase()===e.toLowerCase())??[];if(n)return xe.fetchTokenImage(n)}},Be={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app",androidPackage:"app.phantom"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com",evmDeeplink:"cbwallet://miniapp"},BINANCE:{id:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",appId:"yFK5FCqYprrXDiVFbhyRx7",deeplink:"bnc://app.binance.com/mp/app",url:"https://app.binance.com/en/download"}},Dp={isCustomDeeplinkWallet(e,t){return e===Be.PHANTOM.id?t===_.CHAIN.SOLANA||t===_.CHAIN.EVM||t===_.CHAIN.BITCOIN:e===Be.SOLFLARE.id?t===_.CHAIN.SOLANA:e===Be.COINBASE.id?t===_.CHAIN.SOLANA||t===_.CHAIN.EVM:e===Be.BINANCE.id?t===_.CHAIN.BITCOIN:!1},handleMobileDeeplinkRedirect(e,t,n){const r=window.location.href,o=encodeURIComponent(r),i=(n==null?void 0:n.isCoinbaseDisabled)??!1;if(e===Be.PHANTOM.id&&!("phantom"in window)){const s=r.startsWith("https")?"https":"http",a=r.split("/")[2],c=encodeURIComponent(`${s}://${a}`),l=`${Be.PHANTOM.url}/ul/browse/${o}?ref=${c}`;if(T.isAndroid()){const d=`intent://browse/${o}?ref=${c}#Intent;scheme=phantom;package=${Be.PHANTOM.androidPackage};end`;window.location.href=d}else window.location.href=l}if(e===Be.SOLFLARE.id&&t===_.CHAIN.SOLANA&&!("solflare"in window)&&(window.location.href=`${Be.SOLFLARE.url}/ul/v1/browse/${o}?ref=${o}`),t===_.CHAIN.SOLANA&&e===Be.COINBASE.id&&(i||!("coinbaseSolana"in window))&&(window.location.href=`${Be.COINBASE.url}/dapp?cb_url=${o}`),t===_.CHAIN.EVM&&e===Be.COINBASE.id&&(i||!("coinbaseWalletExtension"in window))&&(window.location.href=`${Be.COINBASE.evmDeeplink}?url=${o}`),t===_.CHAIN.BITCOIN&&e===Be.BINANCE.id&&!("binancew3w"in window)){const s=h.state.activeCaipNetwork,a=window.btoa("/pages/browser/index"),c=window.btoa(`url=${o}&defaultChainId=${(s==null?void 0:s.id)??1}`),l=new URL(Be.BINANCE.deeplink);l.searchParams.set("appId",Be.BINANCE.appId),l.searchParams.set("startPagePath",a),l.searchParams.set("startPageQuery",c);const d=new URL(Be.BINANCE.url);d.searchParams.set("_dp",window.btoa(l.toString())),window.location.href=d.toString()}}},og=T.getAnalyticsUrl(),sg=new ms({baseUrl:og,clientId:null}),ag=["MODAL_CREATED"],cg=45,zd=1e3*10,De=$e({timestamp:Date.now(),lastFlush:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"},pendingEvents:[],subscribedToVisibilityChange:!1,walletImpressions:[]}),B={state:De,subscribe(e){return He(De,()=>e(De))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=S.state;return{projectId:e,st:t,sv:n||"html-wagmi-4.2.2"}},shouldFlushEvents(){const e=JSON.stringify(De.pendingEvents).length/1024>cg,t=De.lastFlush+zd<Date.now();return e||t},_setPendingEvent(e){var t,n;try{let r=(t=h.getAccountData())==null?void 0:t.address;if("address"in e.data&&e.data.address&&(r=e.data.address),ag.includes(e.data.event)||typeof window>"u")return;const o=(n=h.getActiveCaipNetwork())==null?void 0:n.caipNetworkId;this.state.pendingEvents.push({eventId:T.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:r,properties:{..."properties"in e.data?e.data.properties:{},caipNetworkId:o}}}),De.reportedErrors.FORBIDDEN=!1,B.shouldFlushEvents()&&B._submitPendingEvents()}catch(r){console.warn("_setPendingEvent",r)}},sendEvent(e){var n;De.timestamp=Date.now(),De.data=e;const t=["INITIALIZE","CONNECT_SUCCESS","SOCIAL_LOGIN_SUCCESS"];((n=S.state.features)!=null&&n.analytics||t.includes(e.event))&&B._setPendingEvent(De),this.subscribeToFlushTriggers()},sendWalletImpressionEvent(e){De.walletImpressions.push(e)},_transformPendingEventsForBatch(e){try{return e.filter(t=>t.props.event!=="WALLET_IMPRESSION_V2")}catch{return e}},_submitPendingEvents(){if(De.lastFlush=Date.now(),!(De.pendingEvents.length===0&&De.walletImpressions.length===0))try{const e=B._transformPendingEventsForBatch(De.pendingEvents);De.walletImpressions.length&&e.push({eventId:T.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:Date.now(),props:{type:"track",event:"WALLET_IMPRESSION_V2",items:[...De.walletImpressions]}}),sg.sendBeacon({path:"/batch",params:B.getSdkProperties(),body:e}),De.reportedErrors.FORBIDDEN=!1,De.pendingEvents=[],De.walletImpressions=[]}catch{De.reportedErrors.FORBIDDEN=!0}},subscribeToFlushTriggers(){var e,t,n;De.subscribedToVisibilityChange||typeof document>"u"||(De.subscribedToVisibilityChange=!0,(e=document==null?void 0:document.addEventListener)==null||e.call(document,"visibilitychange",()=>{document.visibilityState==="hidden"&&B._submitPendingEvents()}),(t=document==null?void 0:document.addEventListener)==null||t.call(document,"freeze",()=>{B._submitPendingEvents()}),(n=window==null?void 0:window.addEventListener)==null||n.call(window,"pagehide",()=>{B._submitPendingEvents()}),setInterval(()=>{B._submitPendingEvents()},zd))}},lg=T.getApiUrl(),rt=new ms({baseUrl:lg,clientId:null}),dg=40,Hd=4,ug=20,pe=$e({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1,explorerWallets:[],explorerFilteredWallets:[],plan:{tier:"none",hasExceededUsageLimit:!1,limits:{isAboveRpcLimit:!1,isAboveMauLimit:!1}}}),P={state:pe,subscribeKey(e,t){return Ve(pe,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=S.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return S.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${rt.baseUrl}/getWalletImage/${e}`,n=await rt.getBlob({path:t,params:P._getSdkProperties()});ze.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${rt.baseUrl}/public/getAssetImage/${e}`,n=await rt.getBlob({path:t,params:P._getSdkProperties()});ze.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${rt.baseUrl}/public/getAssetImage/${e}`,n=await rt.getBlob({path:t,params:P._getSdkProperties()});ze.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${rt.baseUrl}/public/getCurrencyImage/${e}`,n=await rt.getBlob({path:t,params:P._getSdkProperties()});ze.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${rt.baseUrl}/public/getTokenImage/${e}`,n=await rt.getBlob({path:t,params:P._getSdkProperties()});ze.setTokenImage(e,URL.createObjectURL(n))},_filterWalletsByPlatform(e){const t=e.length,n=T.isMobile()?e==null?void 0:e.filter(o=>o.mobile_link||o.webapp_link?!0:Object.values(Be).map(s=>s.id).includes(o.id)):e,r=t-n.length;return{filteredWallets:n,mobileFilteredOutWalletsLength:r}},async fetchProjectConfig(){return(await rt.get({path:"/appkit/v1/config",params:P._getSdkProperties()})).features},async fetchUsage(){try{const e=await rt.get({path:"/appkit/v1/project-limits",params:P._getSdkProperties()}),{tier:t,isAboveMauLimit:n,isAboveRpcLimit:r}=e.planLimits,o=t==="starter",i=n||r;P.state.plan={tier:t,hasExceededUsageLimit:o&&i,limits:{isAboveRpcLimit:r,isAboveMauLimit:n}}}catch(e){console.warn("Failed to fetch usage",e)}},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await rt.get({path:"/projects/v1/origins",params:P._getSdkProperties()});return e}catch(e){if(e instanceof Error&&e.cause instanceof Response){const t=e.cause.status;if(t===_.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)throw new Error("RATE_LIMITED",{cause:e});if(t>=_.HTTP_STATUS_CODES.SERVER_ERROR&&t<600)throw new Error("SERVER_ERROR",{cause:e});return[]}return[]}},async fetchNetworkImages(){const e=h.getAllRequestedCaipNetworks(),t=e==null?void 0:e.map(({assets:n})=>n==null?void 0:n.imageId).filter(Boolean).filter(n=>!xe.getNetworkImageById(n));t&&await Promise.allSettled(t.map(n=>P._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=N.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>P._fetchConnectorImage(n)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>P._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>P._fetchTokenImage(t)))},async fetchWallets(e){var s;const t=e.exclude??[];P._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(Be).map(a=>a.id));const r=await rt.get({path:"/getWallets",params:{...P._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:(s=e.include)==null?void 0:s.join(","),exclude:t.join(",")}}),{filteredWallets:o,mobileFilteredOutWalletsLength:i}=P._filterWalletsByPlatform(r==null?void 0:r.data);return{data:o||[],count:r==null?void 0:r.count,mobileFilteredOutWalletsLength:i}},async prefetchWalletRanks(){const e=N.state.connectors;if(!(e!=null&&e.length))return;const t={page:1,entries:20,badge:"certified"};if(t.names=e.map(o=>o.name).join(","),h.state.activeChain===_.CHAIN.EVM){const o=[...e.flatMap(i=>{var s;return((s=i.connectors)==null?void 0:s.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}))||[]}),...e.map(i=>{var s;return(s=i.info)==null?void 0:s.rdns})].filter(i=>typeof i=="string"&&i.length>0);o.length&&(t.rdns=o.join(","))}const{data:n}=await P.fetchWallets(t);pe.explorerWallets=n,N.extendConnectorsWithExplorerWallets(n);const r=h.getRequestedCaipNetworkIds().join(",");pe.explorerFilteredWallets=n.filter(o=>{var i;return(i=o.chains)==null?void 0:i.some(s=>r.includes(s))})},async fetchFeaturedWallets(){const{featuredWalletIds:e}=S.state;if(e!=null&&e.length){const t={...P._getSdkProperties(),page:1,entries:(e==null?void 0:e.length)??Hd,include:e},{data:n}=await P.fetchWallets(t),r=[...n].sort((i,s)=>e.indexOf(i.id)-e.indexOf(s.id)),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(o.map(i=>P._fetchWalletImage(i))),pe.featured=r,pe.allFeatured=r}},async fetchRecommendedWallets(){try{pe.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=S.state,r=[...t??[],...n??[]].filter(Boolean),o=h.getRequestedCaipNetworkIds().join(","),i={page:1,entries:Hd,include:e,exclude:r,chains:o},{data:s,count:a}=await P.fetchWallets(i),c=D.getRecentWallets(),l=s.map(m=>m.image_id).filter(Boolean),d=c.map(m=>m.image_id).filter(Boolean);await Promise.allSettled([...l,...d].map(m=>P._fetchWalletImage(m))),pe.recommended=s,pe.allRecommended=s,pe.count=a??0}catch{}finally{pe.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e,entries:t,badge:n,include:r,exclude:o}){const{includeWalletIds:i,excludeWalletIds:s,featuredWalletIds:a}=S.state,c=h.getRequestedCaipNetworkIds().join(","),l=[...pe.recommended.map(({id:y})=>y),...s??[],...a??[]].filter(Boolean),d={page:e,entries:t??dg,include:r??i,exclude:o??l,badge_type:n,chains:c},{data:m,count:w,mobileFilteredOutWalletsLength:g}=await P.fetchWallets(d);pe.mobileFilteredOutWalletsLength=g+(pe.mobileFilteredOutWalletsLength??0);const b=m.slice(0,ug).map(y=>y.image_id).filter(Boolean);await Promise.allSettled(b.map(y=>P._fetchWalletImage(y))),pe.wallets=T.uniqueBy([...pe.wallets,...P._filterOutExtensions(m)],"id").filter(y=>{var C;return(C=y.chains)==null?void 0:C.some(x=>c.includes(x))}),pe.count=w>pe.count?w:pe.count,pe.page=e},async initializeExcludedWallets({ids:e}){const t={page:1,entries:e.length,include:e},{data:n}=await P.fetchWallets(t);n&&n.forEach(r=>{pe.excludedWallets.push({rdns:r.rdns,name:r.name})})},async searchWallet({search:e,badge:t,entries:n,page:r,include:o,exclude:i}){const{includeWalletIds:s,excludeWalletIds:a}=S.state,c=h.getRequestedCaipNetworkIds().join(",");pe.search=[];const l={page:r??1,entries:n??100,search:e==null?void 0:e.trim(),badge_type:t,include:o??s,exclude:i??a,chains:c},{data:d}=await P.fetchWallets(l);B.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const m=d.map(w=>w.image_id).filter(Boolean);await Promise.allSettled([...m.map(w=>P._fetchWalletImage(w)),T.wait(300)]),pe.search=P._filterOutExtensions(d)},initPromise(e,t){const n=pe.promises[e];return n||(pe.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:n=!0,fetchNetworkImages:r=!0,fetchWalletRanks:o=!0}={}){const i=[e&&P.initPromise("connectorImages",P.fetchConnectorImages),t&&P.initPromise("featuredWallets",P.fetchFeaturedWallets),n&&P.initPromise("recommendedWallets",P.fetchRecommendedWallets),r&&P.initPromise("networkImages",P.fetchNetworkImages),o&&P.initPromise("walletRanks",P.prefetchWalletRanks)].filter(Boolean);return Promise.allSettled(i)},prefetchAnalyticsConfig(){var e;(e=S.state.features)!=null&&e.analytics&&P.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await rt.get({path:"/getAnalyticsConfig",params:P._getSdkProperties()});S.setFeatures({analytics:e})}catch{S.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!(e!=null&&e.length)){pe.featured=pe.allFeatured,pe.recommended=pe.allRecommended;return}const t=h.getRequestedCaipNetworkIds().join(",");pe.featured=pe.allFeatured.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))}),pe.recommended=pe.allRecommended.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))}),pe.filteredWallets=pe.wallets.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))})},clearFilterByNamespaces(){pe.filteredWallets=[]},setFilterByNamespace(e){if(!e){pe.featured=pe.allFeatured,pe.recommended=pe.allRecommended;return}const t=h.getRequestedCaipNetworkIds().join(",");pe.featured=pe.allFeatured.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))}),pe.recommended=pe.allRecommended.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))}),pe.filteredWallets=pe.wallets.filter(n=>{var r;return(r=n.chains)==null?void 0:r.some(o=>t.includes(o))})}},kt={filterOutDuplicatesByRDNS(e){const t=S.state.enableEIP6963?N.state.connectors:[],n=D.getRecentWallets(),r=t.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean),o=n.map(a=>a.rdns).filter(Boolean),i=r.concat(o);if(i.includes("io.metamask.mobile")&&T.isMobile()){const a=i.indexOf("io.metamask.mobile");i[a]="io.metamask"}return e.filter(a=>!(a!=null&&a.rdns&&i.includes(String(a.rdns))||!(a!=null&&a.rdns)&&t.some(l=>l.name===a.name)))},filterOutDuplicatesByIds(e){const t=N.state.connectors.filter(a=>a.type==="ANNOUNCED"||a.type==="INJECTED"||a.type==="MULTI_CHAIN"),n=D.getRecentWallets(),r=t.map(a=>{var c;return a.explorerId||((c=a.explorerWallet)==null?void 0:c.id)||a.id}),o=n.map(a=>a.id),i=r.concat(o);return e.filter(a=>!i.includes(a==null?void 0:a.id))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=N.state,{featuredWalletIds:n}=S.state,r=t.filter(s=>s.type==="ANNOUNCED").reduce((s,a)=>{var c;return(c=a.info)!=null&&c.rdns&&(s[a.info.rdns]=!0),s},{});return e.map(s=>({...s,installed:!!s.rdns&&!!r[s.rdns??""]})).sort((s,a)=>{const c=Number(a.installed)-Number(s.installed);if(c!==0)return c;if(n!=null&&n.length){const l=n.indexOf(s.id),d=n.indexOf(a.id);if(l!==-1&&d!==-1)return l-d;if(l!==-1)return-1;if(d!==-1)return 1}return 0})},getConnectOrderMethod(e,t){var c;const n=(e==null?void 0:e.connectMethodsOrder)||((c=S.state.features)==null?void 0:c.connectMethodsOrder),r=t||N.state.connectors;if(n)return n;const{injected:o,announced:i}=Ge.getConnectorsByType(r,P.state.recommended,P.state.featured),s=o.filter(Ge.showConnector),a=i.filter(Ge.showConnector);return s.length||a.length?["wallet","email","social"]:Ce.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){const t=!!e.rdns&&P.state.excludedWallets.some(r=>r.rdns===e.rdns),n=!!e.name&&P.state.excludedWallets.some(r=>bp.isLowerCaseMatch(r.name,e.name));return t||n},markWalletsWithDisplayIndex(e){return e.map((t,n)=>({...t,display_index:n}))},filterWalletsByWcSupport(e){return $.state.wcBasic?e.filter(t=>t.supports_wc):T.isMobile()?e.filter(t=>t.supports_wc||Ce.MANDATORY_WALLET_IDS_ON_MOBILE.includes(t.id)):e},getWalletConnectWallets(e){var i;const t=[...P.state.featured,...P.state.recommended];((i=P.state.filteredWallets)==null?void 0:i.length)>0?t.push(...P.state.filteredWallets):t.push(...e);const n=T.uniqueBy(t,"id"),r=kt.markWalletsAsInstalled(n),o=kt.filterWalletsByWcSupport(r);return kt.markWalletsWithDisplayIndex(o)}},Ge={getConnectorsByType(e,t,n){const{customWallets:r}=S.state,o=D.getRecentWallets(),i=kt.filterOutDuplicateWallets(t),s=kt.filterOutDuplicateWallets(n),a=e.filter(m=>m.type==="MULTI_CHAIN"),c=e.filter(m=>m.type==="ANNOUNCED"),l=e.filter(m=>m.type==="INJECTED"),d=e.filter(m=>m.type==="EXTERNAL");return{custom:r,recent:o,external:d,multiChain:a,announced:c,injected:l,recommended:i,featured:s}},showConnector(e){var o;const t=(o=e.info)==null?void 0:o.rdns,n=!!t&&P.state.excludedWallets.some(i=>!!i.rdns&&i.rdns===t),r=!!e.name&&P.state.excludedWallets.some(i=>bp.isLowerCaseMatch(i.name,e.name));return!(e.type==="INJECTED"&&(e.name==="Browser Wallet"&&(!T.isMobile()||T.isMobile()&&!t&&!$.checkInstalled())||n||r)||(e.type==="ANNOUNCED"||e.type==="EXTERNAL")&&(n||r))},getIsConnectedWithWC(){return Array.from(h.state.chains.values()).some(n=>N.getConnectorId(n.namespace)===_.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:e,featured:t,custom:n,recent:r,announced:o,injected:i,multiChain:s,external:a,overriddenConnectors:c=(l=>(l=S.state.features)==null?void 0:l.connectorTypeOrder)()??[]}){const m=[{type:"walletConnect",isEnabled:!0},{type:"recent",isEnabled:r.length>0},{type:"injected",isEnabled:[...i,...o,...s].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:n&&n.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:e.length>0}].filter(y=>y.isEnabled),w=new Set(m.map(y=>y.type)),g=c.filter(y=>w.has(y)).map(y=>({type:y,isEnabled:!0})),b=m.filter(({type:y})=>!g.some(({type:x})=>x===y));return Array.from(new Set([...g,...b].map(({type:y})=>y)))},sortConnectorsByExplorerWallet(e){return[...e].sort((t,n)=>t.explorerWallet&&n.explorerWallet?(t.explorerWallet.order??0)-(n.explorerWallet.order??0):t.explorerWallet?-1:n.explorerWallet?1:0)},getPriority(e){return e.id===_.CONNECTOR_ID.BASE_ACCOUNT?0:e.id===_.CONNECTOR_ID.COINBASE||e.id===_.CONNECTOR_ID.COINBASE_SDK?1:2},sortConnectorsByPriority(e){return[...e].sort((t,n)=>Ge.getPriority(t)-Ge.getPriority(n))},getAuthName({email:e,socialUsername:t,socialProvider:n}){return t?n&&n==="discord"&&t.endsWith("0")?t.slice(0,-1):t:e.length>30?`${e.slice(0,-3)}...`:e},async fetchProviderData(e){var t,n;try{if(e.name==="Browser Wallet"&&!T.isMobile())return{accounts:[],chainId:void 0};if(e.id===_.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};const[r,o]=await Promise.all([(t=e.provider)==null?void 0:t.request({method:"eth_accounts"}),(n=e.provider)==null?void 0:n.request({method:"eth_chainId"}).then(i=>Number(i))]);return{accounts:r,chainId:o}}catch(r){return console.warn(`Failed to fetch provider data for ${e.name}`,r),{accounts:[],chainId:void 0}}},getFilteredCustomWallets(e){const t=D.getRecentWallets(),n=N.state.connectors.map(s=>{var a;return(a=s.info)==null?void 0:a.rdns}).filter(Boolean),r=t.map(s=>s.rdns).filter(Boolean),o=n.concat(r);if(o.includes("io.metamask.mobile")&&T.isMobile()){const s=o.indexOf("io.metamask.mobile");o[s]="io.metamask"}return e.filter(s=>!o.includes(String(s==null?void 0:s.rdns)))},hasWalletConnector(e){return N.state.connectors.some(t=>t.id===e.id||t.name===e.name)},isWalletCompatibleWithCurrentChain(e){const t=h.state.activeChain;return t&&e.chains?e.chains.some(n=>{const r=n.split(":")[0];return t===r}):!0},getFilteredRecentWallets(){return D.getRecentWallets().filter(n=>!kt.isExcluded(n)).filter(n=>!this.hasWalletConnector(n)).filter(n=>this.isWalletCompatibleWithCurrentChain(n))},getCappedRecommendedWallets(e){const{connectors:t}=N.state,{customWallets:n,featuredWalletIds:r}=S.state,o=t.find(A=>A.id==="walletConnect"),i=t.filter(A=>A.type==="INJECTED"||A.type==="ANNOUNCED"||A.type==="MULTI_CHAIN");if(!o&&!i.length&&!(n!=null&&n.length))return[];const s=hl.isEmailEnabled(),a=hl.isSocialsEnabled(),c=i.filter(A=>A.name!=="Browser Wallet"&&A.name!=="WalletConnect"),l=(r==null?void 0:r.length)||0,d=(n==null?void 0:n.length)||0,m=c.length||0,w=s?1:0,g=a?1:0,b=l+d+m+w+g,C=Math.max(0,4-b);return C<=0?[]:kt.filterOutDuplicateWallets(e).slice(0,C)},processConnectorsByType(e,t=!0){const n=Ge.sortConnectorsByExplorerWallet([...e]);return t?n.filter(Ge.showConnector):n},connectorList(){const e=Ge.getConnectorsByType(N.state.connectors,P.state.recommended,P.state.featured),t=this.processConnectorsByType(e.announced.filter(g=>g.id!=="walletConnect")),n=this.processConnectorsByType(e.injected),r=this.processConnectorsByType(e.multiChain.filter(g=>g.name!=="WalletConnect"),!1),o=e.custom,i=e.recent,s=this.processConnectorsByType(e.external.filter(g=>g.id!==_.CONNECTOR_ID.COINBASE_SDK&&g.id!==_.CONNECTOR_ID.BASE_ACCOUNT)),a=e.recommended,c=e.featured,l=Ge.getConnectorTypeOrder({custom:o,recent:i,announced:t,injected:n,multiChain:r,recommended:a,featured:c,external:s}),d=N.state.connectors.find(g=>g.id==="walletConnect"),m=T.isMobile(),w=[];for(const g of l)switch(g){case"walletConnect":{!m&&d&&w.push({kind:"connector",subtype:"walletConnect",connector:d});break}case"recent":{Ge.getFilteredRecentWallets().forEach(y=>w.push({kind:"wallet",subtype:"recent",wallet:y}));break}case"injected":{r.forEach(b=>w.push({kind:"connector",subtype:"multiChain",connector:b})),t.forEach(b=>w.push({kind:"connector",subtype:"announced",connector:b})),n.forEach(b=>w.push({kind:"connector",subtype:"injected",connector:b}));break}case"featured":{c.forEach(b=>w.push({kind:"wallet",subtype:"featured",wallet:b}));break}case"custom":{Ge.getFilteredCustomWallets(o??[]).forEach(y=>w.push({kind:"wallet",subtype:"custom",wallet:y}));break}case"external":{s.forEach(b=>w.push({kind:"connector",subtype:"external",connector:b}));break}case"recommended":{Ge.getCappedRecommendedWallets(a).forEach(y=>w.push({kind:"wallet",subtype:"recommended",wallet:y}));break}default:console.warn(`Unknown connector type: ${g}`)}return w},hasInjectedConnectors(){return N.state.connectors.filter(e=>(e.type==="INJECTED"||e.type==="ANNOUNCED"||e.type==="MULTI_CHAIN")&&e.name!=="Browser Wallet"&&e.name!=="WalletConnect").length}},pg=["ConnectingExternal","ConnectingMultiChain","ConnectingSocial","ConnectingFarcaster"],Ae=$e({view:"Connect",history:["Connect"],transactionStack:[]}),hg={state:Ae,subscribeKey(e,t){return Ve(Ae,e,t)},pushTransactionStack(e){Ae.transactionStack.push(e)},popTransactionStack(e){const t=Ae.transactionStack.pop();if(!t)return;const{onSuccess:n,onError:r,onCancel:o}=t;switch(e){case"success":n==null||n();break;case"error":r==null||r(),E.goBack();break;case"cancel":o==null||o(),E.goBack();break}},push(e,t){let n=e,r=t;P.state.plan.hasExceededUsageLimit&&pg.includes(e)&&(n="UsageExceeded",r=void 0),n!==Ae.view&&(Ae.view=n,Ae.history.push(n),Ae.data=r)},reset(e,t){Ae.view=e,Ae.history=[e],Ae.data=t},replace(e,t){Ae.history.at(-1)===e||(Ae.view=e,Ae.history[Ae.history.length-1]=e,Ae.data=t)},goBack(){var r,o;const e=h.state.activeCaipAddress,t=E.state.view==="ConnectingFarcaster",n=!e&&t;if(Ae.history.length>1){Ae.history.pop();const[i]=Ae.history.slice(-1);i&&(e&&i==="Connect"?Ae.view="Account":Ae.view=i)}else de.close();(r=Ae.data)!=null&&r.wallet&&(Ae.data.wallet=void 0),(o=Ae.data)!=null&&o.redirectView&&(Ae.data.redirectView=void 0),setTimeout(()=>{var i,s,a;if(n){h.setAccountProp("farcasterUrl",void 0,h.state.activeChain);const c=N.getAuthConnector();(i=c==null?void 0:c.provider)==null||i.reload();const l=wo(S.state);(a=(s=c==null?void 0:c.provider)==null?void 0:s.syncDappData)==null||a.call(s,{metadata:l.metadata,sdkVersion:l.sdkVersion,projectId:l.projectId,sdkType:l.sdkType})}},100)},goBackToIndex(e){if(Ae.history.length>1){Ae.history=Ae.history.slice(0,e+1);const[t]=Ae.history.slice(-1);t&&(Ae.view=t)}},goBackOrCloseModal(){E.state.history.length>1?E.goBack():de.close()}},E=Gt(hg),_n=$e({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),fl={state:_n,subscribe(e){return He(_n,()=>e(_n))},setThemeMode(e){_n.themeMode=e;try{const t=N.getAuthConnector();if(t){const n=fl.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:la(n,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){_n.themeVariables={..._n.themeVariables,...e};try{const t=N.getAuthConnector();if(t){const n=fl.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:n,w3mThemeVariables:la(_n.themeVariables,_n.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return wo(_n)}},Gn=Gt(fl),Mp=Object.fromEntries(yp.map(e=>[e,void 0])),fg=Object.fromEntries(yp.map(e=>[e,!0])),ve=$e({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:Mp,filterByNamespaceMap:fg}),mg={state:ve,subscribe(e){return He(ve,()=>{e(ve)})},subscribeKey(e,t){return Ve(ve,e,t)},initialize(e){e.forEach(t=>{const n=D.getConnectedConnectorId(t);n&&N.setConnectorId(n,t)})},setActiveConnector(e){e&&(ve.activeConnector=Ri(e))},setConnectors(e){e.filter(o=>!ve.allConnectors.some(i=>i.id===o.id&&N.getConnectorName(i.name)===N.getConnectorName(o.name)&&i.chain===o.chain)).forEach(o=>{o.type!=="MULTI_CHAIN"&&ve.allConnectors.push(Ri(o))});const n=N.getEnabledNamespaces(),r=N.getEnabledConnectors(n);ve.connectors=N.mergeMultiChainConnectors(r)},filterByNamespaces(e){Object.keys(ve.filterByNamespaceMap).forEach(t=>{ve.filterByNamespaceMap[t]=!1}),e.forEach(t=>{ve.filterByNamespaceMap[t]=!0}),N.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){ve.filterByNamespaceMap[e]=t,N.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=N.getEnabledNamespaces(),t=N.getEnabledConnectors(e),n=N.areAllNamespacesEnabled();ve.connectors=N.mergeMultiChainConnectors(t),n?P.clearFilterByNamespaces():P.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(ve.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return ve.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(ve.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){const t=N.generateConnectorMapByName(e),n=[];return t.forEach(r=>{const o=r[0],i=(o==null?void 0:o.id)===_.CONNECTOR_ID.AUTH;r.length>1&&o?n.push({name:o.name,imageUrl:o.imageUrl,imageId:o.imageId,connectors:[...r],type:i?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(o==null?void 0:o.id)||""}):o&&n.push(o)}),n},generateConnectorMapByName(e){const t=new Map;return e.forEach(n=>{const{name:r}=n,o=N.getConnectorName(r);if(!o)return;const i=t.get(o)||[];i.find(a=>a.chain===n.chain)||i.push(n),t.set(o,i)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(n=>{t.find(r=>r.chain===n.chain)||t.push(n)}),t},addConnector(e){var t,n,r;if(e.id===_.CONNECTOR_ID.AUTH){const o=e,i=wo(S.state),s=Gn.getSnapshot().themeMode,a=Gn.getSnapshot().themeVariables;(n=(t=o==null?void 0:o.provider)==null?void 0:t.syncDappData)==null||n.call(t,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId,sdkType:i.sdkType}),(r=o==null?void 0:o.provider)==null||r.syncTheme({themeMode:s,themeVariables:a,w3mThemeVariables:la(a,s)}),N.setConnectors([e])}else N.setConnectors([e])},getAuthConnector(e){var r;const t=e||h.state.activeChain,n=ve.connectors.find(o=>o.id===_.CONNECTOR_ID.AUTH);if(n)return(r=n==null?void 0:n.connectors)!=null&&r.length?n.connectors.find(i=>i.chain===t):n},getAnnouncedConnectorRdns(){return ve.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectorById(e){return Ge.sortConnectorsByPriority(ve.allConnectors).find(n=>n.id===e)},getConnector({id:e,namespace:t}){const n=t||h.state.activeChain,r=ve.allConnectors.filter(s=>s.chain===n);return Ge.sortConnectorsByPriority(r).find(s=>s.id===e||s.explorerId===e)},syncIfAuthConnector(e){var i,s;if(e.id!=="AUTH")return;const t=e,n=wo(S.state),r=Gn.getSnapshot().themeMode,o=Gn.getSnapshot().themeVariables;(s=(i=t==null?void 0:t.provider)==null?void 0:i.syncDappData)==null||s.call(i,{metadata:n.metadata,sdkVersion:n.sdkVersion,sdkType:n.sdkType,projectId:n.projectId}),t.provider.syncTheme({themeMode:r,themeVariables:o,w3mThemeVariables:la(o,r)})},getConnectorsByNamespace(e){const t=ve.allConnectors.filter(n=>n.chain===e);return N.mergeMultiChainConnectors(t)},canSwitchToSmartAccount(e){return h.checkIfSmartAccountEnabled()&&Ze(e)===Ne.ACCOUNT_TYPES.EOA},selectWalletConnector(e){var o;const t=(o=E.state.data)==null?void 0:o.redirectView,n=h.state.activeChain,r=n?N.getConnector({id:e.id,namespace:n}):void 0;Dp.handleMobileDeeplinkRedirect((r==null?void 0:r.explorerId)||e.id,h.state.activeChain,{isCoinbaseDisabled:S.state.enableCoinbase===!1}),r?E.push("ConnectingExternal",{connector:r,wallet:e,redirectView:t}):E.push("ConnectingWalletConnect",{wallet:e,redirectView:t})},getConnectors(e){return e?N.getConnectorsByNamespace(e):N.mergeMultiChainConnectors(ve.allConnectors)},setFilterByNamespace(e){ve.filterByNamespace=e,ve.connectors=N.getConnectors(e),P.setFilterByNamespace(e)},setConnectorId(e,t){e&&(ve.activeConnectorIds={...ve.activeConnectorIds,[t]:e},D.setConnectedConnectorId(t,e))},removeConnectorId(e){ve.activeConnectorIds={...ve.activeConnectorIds,[e]:void 0},D.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return ve.activeConnectorIds[e]},isConnected(e){return e?!!ve.activeConnectorIds[e]:Object.values(ve.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){ve.activeConnectorIds={...Mp}},extendConnectorsWithExplorerWallets(e){ve.allConnectors.forEach(r=>{const o=e.find(i=>{var s;return i.id===r.id||i.rdns&&i.rdns===((s=r.info)==null?void 0:s.rdns)});o&&(r.explorerWallet=o)});const t=N.getEnabledNamespaces(),n=N.getEnabledConnectors(t);ve.connectors=N.mergeMultiChainConnectors(n)},async connect(e={}){const{namespace:t}=e;return N.setFilterByNamespace(t),E.push("Connect",{addWalletForNamespace:t}),new Promise((n,r)=>{if(t){const o=h.subscribeChainProp("accountState",s=>{s!=null&&s.caipAddress&&(n({caipAddress:s==null?void 0:s.caipAddress}),o())},t),i=de.subscribeKey("open",s=>{s||(r(new Error("Modal closed")),i())})}else{const o=h.subscribeKey("activeCaipAddress",s=>{s&&(n({caipAddress:s}),o())}),i=de.subscribeKey("open",s=>{s||(r(new Error("Modal closed")),i())})}})}},N=Gt(mg),gg=1e3,ro={checkNamespaceConnectorId(e,t){return N.getConnectorId(e)===t},isSocialProvider(e){return Ce.DEFAULT_REMOTE_FEATURES.socials.includes(e)},connectWalletConnect({walletConnect:e,connector:t,closeModalOnConnect:n=!0,redirectViewOnModalClose:r="Connect",onOpen:o,onConnect:i}){return new Promise((s,a)=>{if(e&&N.setActiveConnector(t),o==null||o(T.isMobile()&&e),r){const l=de.subscribeKey("open",d=>{d||(E.state.view!==r&&E.replace(r),l(),a(new Error("Modal closed")))})}const c=h.subscribeKey("activeCaipAddress",l=>{l&&(i==null||i(),n&&de.close(),c(),s(At.parseCaipAddress(l)))})})},connectExternal(e){return new Promise((t,n)=>{const r=h.subscribeKey("activeCaipAddress",o=>{o&&(de.close(),r(),t(At.parseCaipAddress(o)))});$.connectExternal(e,e.chain).catch(()=>{r(),n(new Error("Connection rejected"))})})},connectSocial({social:e,namespace:t,closeModalOnConnect:n=!0,onOpenFarcaster:r,onConnect:o}){let i,s=!1,a=null;const c=t||h.state.activeChain,l=h.subscribeKey("activeCaipAddress",d=>{d&&(n&&de.close(),l())});return new Promise((d,m)=>{async function w(b){var y;if((y=b.data)!=null&&y.resultUri)if(b.origin===_.SECURE_SITE_SDK_ORIGIN){window.removeEventListener("message",w,!1);try{const C=N.getAuthConnector(c);if(C&&!s){i&&i.close(),s=!0;const x=b.data.resultUri;B.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:e}}),D.setConnectedSocialProvider(e),await $.connectExternal({id:C.id,type:C.type,socialUri:x},C.chain);const A=h.state.activeCaipAddress;if(!A){m(new Error("Failed to connect"));return}d(At.parseCaipAddress(A)),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:e}})}}catch(C){B.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:T.parseError(C)}}),m(new Error("Failed to connect"))}}else B.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:"Untrusted Origin"}})}async function g(){if(B.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"){r==null||r();const b=de.subscribeKey("open",C=>{!C&&e==="farcaster"&&(m(new Error("Popup closed")),o==null||o(),b())}),y=N.getAuthConnector();if(y){const C=h.getAccountData(c);if(!(C!=null&&C.farcasterUrl))try{const{url:x}=await y.provider.getFarcasterUri();h.setAccountProp("farcasterUrl",x,c)}catch{m(new Error("Failed to connect to farcaster"))}}}else{const b=N.getAuthConnector();a=T.returnOpenHref(`${_.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes");try{if(b){const{uri:y}=await b.provider.getSocialRedirectUri({provider:e});if(a&&y){a.location.href=y,i=a;const C=setInterval(()=>{i!=null&&i.closed&&!s&&(m(new Error("Popup closed")),clearInterval(C))},1e3);window.addEventListener("message",w,!1)}else a==null||a.close(),m(new Error("Failed to initiate social connection"))}}catch{m(new Error("Failed to initiate social connection")),a==null||a.close()}}}g()})},connectEmail({closeModalOnConnect:e=!0,redirectViewOnModalClose:t="Connect",onOpen:n,onConnect:r}){return new Promise((o,i)=>{if(n==null||n(),t){const a=de.subscribeKey("open",c=>{c||(E.state.view!==t&&E.replace(t),a(),i(new Error("Modal closed")))})}const s=h.subscribeKey("activeCaipAddress",a=>{a&&(r==null||r(),e&&de.close(),s(),o(At.parseCaipAddress(a)))})})},async updateEmail(){const e=D.getConnectedConnectorId(h.state.activeChain),t=N.getAuthConnector();if(!t)throw new Error("No auth connector found");if(e!==_.CONNECTOR_ID.AUTH)throw new Error("Not connected to email or social");const n=t.provider.getEmail()??"";return await de.open({view:"UpdateEmailWallet",data:{email:n,redirectView:void 0}}),new Promise((r,o)=>{const i=setInterval(()=>{const a=t.provider.getEmail()??"";a!==n&&(de.close(),clearInterval(i),s(),r({email:a}))},gg),s=de.subscribeKey("open",a=>{a||(E.state.view!=="Connect"&&E.push("Connect"),clearInterval(i),s(),o(new Error("Modal closed")))})})},canSwitchToSmartAccount(e){return h.checkIfSmartAccountEnabled()&&Ze(e)===Ne.ACCOUNT_TYPES.EOA}};function ya(){var r,o;const e=((r=h.state.activeCaipNetwork)==null?void 0:r.chainNamespace)||"eip155",t=((o=h.state.activeCaipNetwork)==null?void 0:o.id)||1,n=Ce.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${n}`}function Vy(e){return Ce.NATIVE_TOKEN_ADDRESS[e]}function Ze(e){var n;return(n=h.getAccountData(e))==null?void 0:n.preferredAccountType}function Hs(e){var t,n;return e?(n=(t=h.state.chains.get(e))==null?void 0:t.networkState)==null?void 0:n.caipNetwork:h.state.activeCaipNetwork}const zt={getConnectionStatus(e,t){const n=N.state.activeConnectorIds[t],r=$.getConnections(t);return!!n&&e.connectorId===n?"connected":r.some(s=>s.connectorId.toLowerCase()===e.connectorId.toLowerCase())?"active":"disconnected"},excludeConnectorAddressFromConnections({connections:e,connectorId:t,addresses:n}){return e.map(r=>{if((t?r.connectorId.toLowerCase()===t.toLowerCase():!1)&&n){const i=r.accounts.filter(s=>!n.some(c=>c.toLowerCase()===s.address.toLowerCase()));return{...r,accounts:i}}return r})},excludeExistingConnections(e,t){const n=new Set(e);return t.filter(r=>!n.has(r.connectorId))},getConnectionsByConnectorId(e,t){return e.filter(n=>n.connectorId.toLowerCase()===t.toLowerCase())},getConnectionsData(e){var a;const t=!!((a=S.state.remoteFeatures)!=null&&a.multiWallet),n=N.state.activeConnectorIds[e],r=$.getConnections(e),i=($.state.recentConnections.get(e)??[]).filter(c=>N.getConnectorById(c.connectorId)),s=zt.excludeExistingConnections([...r.map(c=>c.connectorId),...n?[n]:[]],i);return t?{connections:r,recentConnections:s}:{connections:r.filter(c=>c.connectorId.toLowerCase()===(n==null?void 0:n.toLowerCase())),recentConnections:[]}},onConnectMobile(e,t){const n=$.state.wcUri;if(e!=null&&e.mobile_link&&n)try{$.setWcError(!1);const{mobile_link:r,link_mode:o,name:i}=e,s=T.appendPayToUri(n,t),{redirect:a,redirectUniversalLink:c,href:l}=T.formatNativeUrl(r,s,o),d=a,m=c,w=T.isIframe()?"_top":"_self";$.setWcLinking({name:i,href:l}),$.setRecentWallet(e),S.state.experimental_preferUniversalLinks&&m?T.openHref(m,w):T.openHref(d,w)}catch(r){B.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:r instanceof Error?r.message:"Error parsing the deep link",uri:n,mobile_link:e.mobile_link,name:e.name}}),$.setWcError(!0)}}},yi=$e({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1,connectingWallet:void 0}),Rn={state:yi,subscribe(e){return He(yi,()=>e(yi))},subscribeOpen(e){return Ve(yi,"open",e)},set(e){Object.assign(yi,{...yi,...e})}},ke=$e({transactions:[],transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),wg={state:ke,subscribe(e){return He(ke,()=>e(ke))},setLastNetworkInView(e){ke.lastNetworkInView=e},async fetchTransactions(e){var t;if(!e)throw new Error("Transactions can't be fetched without an accountAddress");ke.loading=!0;try{const n=await fe.fetchTransactions({account:e,cursor:ke.next,chainId:(t=h.state.activeCaipNetwork)==null?void 0:t.caipNetworkId}),r=it.filterSpamTransactions(n.data),o=it.filterByConnectedChain(r),i=[...ke.transactions,...o];ke.loading=!1,ke.transactions=i,ke.transactionsByYear=it.groupTransactionsByYearAndMonth(ke.transactionsByYear,o),ke.empty=i.length===0,ke.next=n.next?n.next:void 0}catch{const r=h.state.activeChain;B.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:S.state.projectId,cursor:ke.next,isSmartAccount:Ze(r)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),ye.showError("Failed to fetch transactions"),ke.loading=!1,ke.empty=!0,ke.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const n=e;return t.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),i=new Date(r.metadata.minedAt).getMonth(),s=n[o]??{},c=(s[i]??[]).filter(l=>l.id!==r.id);n[o]={...s,[i]:[...c,r].sort((l,d)=>new Date(d.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),n},filterSpamTransactions(e){return e.filter(t=>{var r;return!((r=t.transfers)==null?void 0:r.every(o=>{var i;return((i=o.nft_info)==null?void 0:i.flags.is_spam)===!0}))})},filterByConnectedChain(e){var r;const t=(r=h.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return e.filter(o=>o.metadata.chain===t)},clearCursor(){ke.next=void 0},resetTransactions(){ke.transactions=[],ke.transactionsByYear={},ke.lastNetworkInView=void 0,ke.loading=!1,ke.empty=!1,ke.next=void 0}},it=Gt(wg,"API_ERROR"),me=$e({connections:new Map,recentConnections:new Map,isSwitchingConnection:!1,wcError:!1,wcFetchingUri:!1,buffering:!1,status:"disconnected"});let jn;const bg={state:me,subscribe(e){return He(me,()=>e(me))},subscribeKey(e,t){return Ve(me,e,t)},_getClient(){return me._client},setClient(e){me._client=Ri(e)},initialize(e){const t=e.filter(n=>!!n.namespace).map(n=>n.namespace);$.syncStorageConnections(t)},syncStorageConnections(e){const t=D.getConnections(),n=e??Array.from(h.state.chains.keys());for(const r of n){const o=t[r]??[],i=new Map(me.recentConnections);i.set(r,o),me.recentConnections=i}},getConnections(e){return e?me.connections.get(e)??[]:[]},hasAnyConnection(e){const t=$.state.connections;return Array.from(t.values()).flatMap(n=>n).some(({connectorId:n})=>n===e)},async connectWalletConnect({cache:e="auto"}={}){var n,r,o,i;me.wcFetchingUri=!0;const t=T.isTelegram()||T.isSafari()&&T.isIos();try{if(e==="always"||e==="auto"&&t){if(jn){await jn,jn=void 0;return}if(!T.isPairingExpired(me==null?void 0:me.wcPairingExpiry)){const s=me.wcUri;me.wcUri=s;return}jn=(r=(n=$._getClient())==null?void 0:n.connectWalletConnect)==null?void 0:r.call(n),$.state.status="connecting",await jn,jn=void 0,me.wcPairingExpiry=void 0,$.state.status="connected"}else await((i=(o=$._getClient())==null?void 0:o.connectWalletConnect)==null?void 0:i.call(o))}catch(s){throw me.wcError=!0,me.wcFetchingUri=!1,me.status="disconnected",jn=void 0,s}},async connectExternal(e,t,n=!0){var s,a,c;const r=await((a=(s=$._getClient())==null?void 0:s.connectExternal)==null?void 0:a.call(s,e));n&&h.setActiveNamespace(t);const o=N.state.allConnectors.find(l=>l.id===(e==null?void 0:e.id)),i=e.type==="AUTH"?"email":"browser";return B.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:i,name:(o==null?void 0:o.name)||"Unknown",view:E.state.view,walletRank:(c=o==null?void 0:o.explorerWallet)==null?void 0:c.order}}),r},async reconnectExternal(e){var n,r;await((r=(n=$._getClient())==null?void 0:n.reconnectExternal)==null?void 0:r.call(n,e));const t=e.chain||h.state.activeChain;t&&N.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){var r;if(!t)return;de.setLoading(!0,h.state.activeChain);const n=N.getAuthConnector();n&&(h.setAccountProp("preferredAccountType",e,t),await n.provider.setPreferredAccount(e),D.setPreferredAccountTypes(Object.entries(h.state.chains).reduce((o,[i,s])=>{const a=i,c=Ze(a);return c!==void 0&&(o[a]=c),o},{})),await $.reconnectExternal(n),de.setLoading(!1,h.state.activeChain),B.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((r=h.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)||""}}))},async signMessage(e){var t;return(t=$._getClient())==null?void 0:t.signMessage(e)},parseUnits(e,t){var n;return(n=$._getClient())==null?void 0:n.parseUnits(e,t)},formatUnits(e,t){var n;return(n=$._getClient())==null?void 0:n.formatUnits(e,t)},updateBalance(e){var t;return(t=$._getClient())==null?void 0:t.updateBalance(e)},async sendTransaction(e){var t;return(t=$._getClient())==null?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return(t=$._getClient())==null?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return(t=$._getClient())==null?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t;return((t=$._getClient())==null?void 0:t.walletGetAssets(e))??{}},async estimateGas(e){var t;return(t=$._getClient())==null?void 0:t.estimateGas(e)},async writeContract(e){var t;return(t=$._getClient())==null?void 0:t.writeContract(e)},async writeSolanaTransaction(e){var t;return(t=$._getClient())==null?void 0:t.writeSolanaTransaction(e)},async getEnsAddress(e){var t;return(t=$._getClient())==null?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return(t=$._getClient())==null?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,n;return((n=(t=$._getClient())==null?void 0:t.checkInstalled)==null?void 0:n.call(t,e))||!1},resetWcConnection(){me.wcUri=void 0,me.wcPairingExpiry=void 0,me.wcLinking=void 0,me.recentWallet=void 0,me.wcFetchingUri=!1,me.status="disconnected",it.resetTransactions(),D.deleteWalletConnectDeepLink(),D.deleteRecentWallet(),Rn.set({connectingWallet:void 0})},resetUri(){me.wcUri=void 0,me.wcPairingExpiry=void 0,jn=void 0,me.wcFetchingUri=!1,Rn.set({connectingWallet:void 0})},finalizeWcConnection(e){var r,o;const{wcLinking:t,recentWallet:n}=$.state;t&&D.setWalletConnectDeepLink(t),n&&D.setAppKitRecent(n),e&&B.sendEvent({type:"track",event:"CONNECT_SUCCESS",address:e,properties:{method:t?"mobile":"qrcode",name:((o=(r=E.state.data)==null?void 0:r.wallet)==null?void 0:o.name)||"Unknown",view:E.state.view,walletRank:n==null?void 0:n.order}})},setWcBasic(e){me.wcBasic=e},setUri(e){me.wcUri=e,me.wcFetchingUri=!1,me.wcPairingExpiry=T.getPairingExpiry()},setWcLinking(e){me.wcLinking=e},setWcError(e){me.wcError=e,me.wcFetchingUri=!1,me.buffering=!1},setRecentWallet(e){me.recentWallet=e},setBuffering(e){me.buffering=e},setStatus(e){me.status=e},setIsSwitchingConnection(e){me.isSwitchingConnection=e},async disconnect({id:e,namespace:t,initialDisconnect:n}={}){var r;try{await((r=$._getClient())==null?void 0:r.disconnect({id:e,chainNamespace:t,initialDisconnect:n}))}catch(o){throw new pn("Failed to disconnect","INTERNAL_SDK_ERROR",o)}},async disconnectConnector({id:e,namespace:t}){var n;try{await((n=$._getClient())==null?void 0:n.disconnectConnector({id:e,namespace:t}))}catch(r){throw new pn("Failed to disconnect connector","INTERNAL_SDK_ERROR",r)}},setConnections(e,t){const n=new Map(me.connections);n.set(t,e),me.connections=n},async handleAuthAccountSwitch({address:e,namespace:t}){var i,s;const n=h.getAccountData(t),r=(s=(i=n==null?void 0:n.user)==null?void 0:i.accounts)==null?void 0:s.find(a=>a.type==="smartAccount"),o=r&&r.address.toLowerCase()===e.toLowerCase()&&ro.canSwitchToSmartAccount(t)?"smartAccount":"eoa";await $.setPreferredAccountType(o,t)},async handleActiveConnection({connection:e,namespace:t,address:n}){const r=N.getConnectorById(e.connectorId),o=e.connectorId===_.CONNECTOR_ID.AUTH;if(!r)throw new Error(`No connector found for connection: ${e.connectorId}`);if(o)n&&await $.handleAuthAccountSwitch({address:n,namespace:t});else{const i=await $.connectExternal({id:r.id,type:r.type,provider:r.provider,address:n,chain:t},t);return i==null?void 0:i.address}return n},async handleDisconnectedConnection({connection:e,namespace:t,address:n,closeModalOnConnect:r}){var l,d;const o=N.getConnectorById(e.connectorId),i=(d=(l=e.auth)==null?void 0:l.name)==null?void 0:d.toLowerCase(),s=e.connectorId===_.CONNECTOR_ID.AUTH,a=e.connectorId===_.CONNECTOR_ID.WALLET_CONNECT;if(!o)throw new Error(`No connector found for connection: ${e.connectorId}`);let c;if(s)if(i&&ro.isSocialProvider(i)){const{address:m}=await ro.connectSocial({social:i,closeModalOnConnect:r,onOpenFarcaster(){de.open({view:"ConnectingFarcaster"})},onConnect(){E.replace("ProfileWallets")}});c=m}else{const{address:m}=await ro.connectEmail({closeModalOnConnect:r,onOpen(){de.open({view:"EmailLogin"})},onConnect(){E.replace("ProfileWallets")}});c=m}else if(a){const{address:m}=await ro.connectWalletConnect({walletConnect:!0,connector:o,closeModalOnConnect:r,onOpen(w){const g=w?"AllWallets":"ConnectingWalletConnect";de.state.open?E.push(g):de.open({view:g})},onConnect(){E.replace("ProfileWallets")}});c=m}else{const m=await $.connectExternal({id:o.id,type:o.type,provider:o.provider,chain:t},t);m&&(c=m.address)}return s&&n&&await $.handleAuthAccountSwitch({address:n,namespace:t}),c},async switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:r,onChange:o}){var c;let i;const s=(c=h.getAccountData(n))==null?void 0:c.caipAddress;if(s){const{address:l}=At.parseCaipAddress(s);i=l}const a=zt.getConnectionStatus(e,n);switch(a){case"connected":case"active":{const l=await $.handleActiveConnection({connection:e,namespace:n,address:t});if(i&&l){const d=l.toLowerCase()!==i.toLowerCase();o==null||o({address:l,namespace:n,hasSwitchedAccount:d,hasSwitchedWallet:a==="active"})}break}case"disconnected":{const l=await $.handleDisconnectedConnection({connection:e,namespace:n,address:t,closeModalOnConnect:r});l&&(o==null||o({address:l,namespace:n,hasSwitchedAccount:!0,hasSwitchedWallet:!0}));break}default:throw new Error(`Invalid connection status: ${a}`)}}},$=Gt(bg),bc={createBalance(e,t){const n={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:n.name,symbol:n.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:n.value,price:n.price,quantity:{decimals:n.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:n.decimals})},iconUrl:n.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return Op(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const n=t[1],r=parseInt(n,10);return isNaN(r)?"0x0":`0x${r.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(n=>this.isValidAsset(n)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}};let yc;async function Vd(){if(!yc){const{createPublicClient:e,http:t,defineChain:n}=await ne(async()=>{const{createPublicClient:r,http:o,defineChain:i}=await import("./index-DvpnhZJB.js");return{createPublicClient:r,http:o,defineChain:i}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));yc={createPublicClient:e,http:t,defineChain:n}}return yc}const ml={getBlockchainApiRpcUrl(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()},async getViemChain(e){const{defineChain:t}=await Vd(),{chainId:n}=At.parseCaipNetworkId(e.caipNetworkId);return t({...e,id:Number(n)})},async createViemPublicClient(e){const{createPublicClient:t,http:n}=await Vd(),r=S.state.projectId,o=await ml.getViemChain(e);if(!o)throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);return t({chain:o,transport:n(ml.getBlockchainApiRpcUrl(e.caipNetworkId,r))})}},ql={async getMyTokensWithBalance(e={forceUpdate:void 0,caipNetwork:h.state.activeCaipNetwork,address:(t=>(t=h.getAccountData())==null?void 0:t.address)()}){const{forceUpdate:n,caipNetwork:r,address:o}=e,i=N.getConnectorId("eip155")===_.CONNECTOR_ID.AUTH;if(!o)return[];const s=r?`${r.caipNetworkId}:${o}`:o,a=D.getBalanceCacheForCaipAddress(s);if(a)return a.balances;if(r&&r.chainNamespace===_.CHAIN.EVM&&i){const l=await this.getEIP155Balances(o,r);if(l)return this.filterLowQualityTokens(l)}const c=await fe.getBalance(o,r==null?void 0:r.caipNetworkId,n);return this.filterLowQualityTokens(c.balances)},async getEIP155Balances(e,t){var n,r;try{const o=bc.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),i=await $.getCapabilities(e);if(!((r=(n=i==null?void 0:i[o])==null?void 0:n.assetDiscovery)!=null&&r.supported))return null;const s=await $.walletGetAssets({account:e,chainFilter:[o]});if(!bc.isWalletGetAssetsResponse(s))return null;const c=(s[o]||[]).map(l=>bc.createBalance(l,t.caipNetworkId));return D.updateBalanceCache({caipAddress:`${t.caipNetworkId}:${e}`,balance:{balances:c},timestamp:Date.now()}),c}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},async fetchERC20Balance({caipAddress:e,assetAddress:t,caipNetwork:n}){const r=await ml.createViemPublicClient(n),{address:o}=At.parseCaipAddress(e),[{result:i},{result:s},{result:a},{result:c}]=await r.multicall({contracts:[{address:t,functionName:"name",args:[],abi:zs},{address:t,functionName:"symbol",args:[],abi:zs},{address:t,functionName:"balanceOf",args:[o],abi:zs},{address:t,functionName:"decimals",args:[],abi:zs}]});return{name:i,symbol:s,decimals:c,balance:a&&c?Op(a,c):"0"}}},Cc={adapters:{}},yg={state:Cc,initialize(e){Cc.adapters={...e}},get(e){return Cc.adapters[e]}},Ca={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:void 0,tron:void 0},lt=$e({providers:{...Ca},providerIds:{...Ca}}),Cg={state:lt,subscribeKey(e,t){return Ve(lt,e,t)},subscribe(e){return He(lt,()=>{e(lt)})},subscribeProviders(e){return He(lt.providers,()=>e(lt.providers))},setProvider(e,t){e&&t&&(lt.providers[e]=Ri(t))},getProvider(e){if(e)return lt.providers[e]},setProviderId(e,t){t&&(lt.providerIds[e]=t)},getProviderId(e){if(e)return lt.providerIds[e]},reset(){lt.providers={...Ca},lt.providerIds={...Ca}},resetChain(e){lt.providers[e]=void 0,lt.providerIds[e]=void 0}},vg={async getTokenList(e){var r;const t=await fe.fetchSwapTokens({chainId:e});return((r=t==null?void 0:t.tokens)==null?void 0:r.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){var t;const e=h.state.activeCaipNetwork;if(!e)return null;try{switch(e.chainNamespace){case"solana":const n=(t=await($==null?void 0:$.estimateGas({chainNamespace:"solana"})))==null?void 0:t.toString();return{standard:n,fast:n,instant:n};case"eip155":default:return await fe.fetchGasPrice({chainId:e.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:n,sourceTokenDecimals:r}){const o=await fe.fetchSwapAllowance({tokenAddress:e,userAddress:t});if(o!=null&&o.allowance&&n&&r){const i=$.parseUnits(n,r)||0;return BigInt(o.allowance)>=i}return!1},async getMyTokensWithBalance(e){var n;const t=await ql.getMyTokensWithBalance({forceUpdate:e,caipNetwork:h.state.activeCaipNetwork,address:(n=h.getAccountData())==null?void 0:n.address});return h.setAccountProp("tokenBalance",t,h.state.activeChain),this.mapBalancesToSwapTokens(t)},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:ya(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]},async handleSwapError(e){var t,n;try{const r=e==null?void 0:e.cause;if(!(r!=null&&r.json))return;const o=await r.json(),i=(n=(t=o==null?void 0:o.reasons)==null?void 0:t[0])==null?void 0:n.description;return i!=null&&i.includes("insufficient liquidity")?"Insufficient liquidity":void 0}catch{return}}},Ee=$e({tokenBalances:[],loading:!1}),Eg={state:Ee,subscribe(e){return He(Ee,()=>e(Ee))},subscribeKey(e,t){return Ve(Ee,e,t)},setToken(e){e&&(Ee.token=Ri(e))},setTokenAmount(e){Ee.sendTokenAmount=e},setReceiverAddress(e){Ee.receiverAddress=e},setReceiverProfileImageUrl(e){Ee.receiverProfileImageUrl=e},setReceiverProfileName(e){Ee.receiverProfileName=e},setNetworkBalanceInUsd(e){Ee.networkBalanceInUSD=e},setLoading(e){Ee.loading=e},getSdkEventProperties(e){var t,n;return{message:T.parseError(e),isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,token:((t=Ee.token)==null?void 0:t.symbol)||"",amount:Ee.sendTokenAmount??0,network:((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}},async sendToken(){var e;try{switch(be.setLoading(!0),(e=h.state.activeCaipNetwork)==null?void 0:e.chainNamespace){case"eip155":await be.sendEvmToken();return;case"solana":await be.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}catch(t){throw $t.isUserRejectedRequestError(t)?new Of(t):t}finally{be.setLoading(!1)}},async sendEvmToken(){var n,r,o;const e=h.state.activeChain;if(!e)throw new Error("SendController:sendEvmToken - activeChainNamespace is required");const t=Ze(e);if(!be.state.sendTokenAmount||!be.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!be.state.token)throw new Error("A token is required");if((n=be.state.token)!=null&&n.address){B.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,token:be.state.token.address,amount:be.state.sendTokenAmount,network:((r=h.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)||""}});const{hash:i}=await be.sendERC20Token({receiverAddress:be.state.receiverAddress,tokenAddress:be.state.token.address,sendTokenAmount:be.state.sendTokenAmount,decimals:be.state.token.quantity.decimals});i&&(Ee.hash=i)}else{B.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,token:be.state.token.symbol||"",amount:be.state.sendTokenAmount,network:((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}});const{hash:i}=await be.sendNativeToken({receiverAddress:be.state.receiverAddress,sendTokenAmount:be.state.sendTokenAmount,decimals:be.state.token.quantity.decimals});i&&(Ee.hash=i)}},async fetchTokenBalance(e){var s,a,c;Ee.loading=!0;const t=h.state.activeChain,n=(s=h.state.activeCaipNetwork)==null?void 0:s.caipNetworkId,r=(a=h.state.activeCaipNetwork)==null?void 0:a.chainNamespace,o=((c=h.getAccountData(t))==null?void 0:c.caipAddress)??h.state.activeCaipAddress,i=o?T.getPlainAddress(o):void 0;if(Ee.lastRetry&&!T.isAllowedRetry(Ee.lastRetry,30*Ce.ONE_SEC_MS))return Ee.loading=!1,[];try{if(i&&n&&r){const l=await ql.getMyTokensWithBalance();return Ee.tokenBalances=l,Ee.lastRetry=void 0,l}}catch(l){Ee.lastRetry=Date.now(),e==null||e(l),ye.showError("Token Balance Unavailable")}finally{Ee.loading=!1}return[]},fetchNetworkBalance(){if(Ee.tokenBalances.length===0)return;const e=vg.mapBalancesToSwapTokens(Ee.tokenBalances);if(!e)return;const t=e.find(n=>n.address===ya());t&&(Ee.networkBalanceInUSD=t?Ii.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){var s,a,c,l;E.pushTransactionStack({});const t=e.receiverAddress,n=(s=h.getAccountData())==null?void 0:s.address,r=$.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),i=await $.sendTransaction({chainNamespace:_.CHAIN.EVM,to:t,address:n,data:"0x",value:r??BigInt(0)});return B.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:Ze("eip155")===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,token:((a=be.state.token)==null?void 0:a.symbol)||"",amount:e.sendTokenAmount,network:((c=h.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||"",hash:i||""}}),(l=$._getClient())==null||l.updateBalance("eip155"),be.resetSend(),{hash:i}},async sendERC20Token(e){var r,o,i;E.pushTransactionStack({onSuccess(){E.replace("Account")}});const t=$.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),n=(r=h.getAccountData())==null?void 0:r.address;if(n&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const s=T.getPlainAddress(e.tokenAddress);if(!s)throw new Error("SendController:sendERC20Token - tokenAddress is required");const a=await $.writeContract({fromAddress:n,tokenAddress:s,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:If.getERC20Abi(s),chainNamespace:_.CHAIN.EVM});return B.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:Ze("eip155")===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,token:((o=be.state.token)==null?void 0:o.symbol)||"",amount:e.sendTokenAmount,network:((i=h.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)||"",hash:a||""}}),be.resetSend(),{hash:a}}return{hash:void 0}},async sendSolanaToken(){var n,r,o;if(!be.state.sendTokenAmount||!be.state.receiverAddress)throw new Error("An amount and receiver address are required");E.pushTransactionStack({onSuccess(){E.replace("Account")}});let e;be.state.token&&be.state.token.address!==Ce.SOLANA_NATIVE_TOKEN_ADDRESS&&(T.isCaipAddress(be.state.token.address)?e=T.getPlainAddress(be.state.token.address):e=be.state.token.address);const t=await $.sendTransaction({chainNamespace:"solana",tokenMint:e,to:be.state.receiverAddress,value:be.state.sendTokenAmount});t&&(Ee.hash=t),(n=$._getClient())==null||n.updateBalance("solana"),B.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:!1,token:((r=be.state.token)==null?void 0:r.symbol)||"",amount:be.state.sendTokenAmount,network:((o=h.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||"",hash:t||""}}),be.resetSend()},resetSend(){Ee.token=void 0,Ee.sendTokenAmount=void 0,Ee.receiverAddress=void 0,Ee.receiverProfileImageUrl=void 0,Ee.receiverProfileName=void 0,Ee.loading=!1,Ee.tokenBalances=[]}},be=Gt(Eg),vc={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,user:void 0,preferredAccountType:void 0},Vs={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},W=$e({chains:nf(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{connectionControllerClient:void 0},isSwitchingNamespace:!1}),Up={state:W,subscribe(e){return He(W,()=>{e(W)})},subscribeKey(e,t){return Ve(W,e,t)},subscribeAccountStateProp(e,t,n){var o;const r=n||W.activeChain;return r?Ve(((o=W.chains.get(r))==null?void 0:o.accountState)||{},e,t):()=>{}},subscribeChainProp(e,t,n){let r;return He(W.chains,()=>{var i;const o=n||W.activeChain;if(o){const s=(i=W.chains.get(o))==null?void 0:i[e];r!==s&&(r=s,t(s))}})},initialize(e,t,n){const{chainId:r,namespace:o}=D.getActiveNetworkProps(),i=t==null?void 0:t.find(d=>d.id.toString()===(r==null?void 0:r.toString())),a=e.find(d=>(d==null?void 0:d.namespace)===o)||(e==null?void 0:e[0]),c=e.map(d=>d.namespace).filter(d=>d!==void 0),l=S.state.enableEmbedded?new Set([...c]):new Set([...(t==null?void 0:t.map(d=>d.chainNamespace))??[]]);((e==null?void 0:e.length)===0||!a)&&(W.noAdapters=!0),W.noAdapters||(W.activeChain=a==null?void 0:a.namespace,W.activeCaipNetwork=i,h.setChainNetworkData(a==null?void 0:a.namespace,{caipNetwork:i}),W.activeChain&&Rn.set({activeChain:a==null?void 0:a.namespace})),l.forEach(d=>{const m=t==null?void 0:t.filter(b=>b.chainNamespace===d),w=D.getPreferredAccountTypes()||{},g={...S.state.defaultAccountTypes,...w};h.state.chains.set(d,{namespace:d,networkState:$e({...Vs,caipNetwork:m==null?void 0:m[0]}),accountState:$e({...vc,preferredAccountType:g[d]}),caipNetworks:m??[],...n}),h.setRequestedCaipNetworks(m??[],d)})},removeAdapter(e){var t,n;if(W.activeChain===e){const r=Array.from(W.chains.entries()).find(([o])=>o!==e);if(r){const o=(n=(t=r[1])==null?void 0:t.caipNetworks)==null?void 0:n[0];o&&h.setActiveCaipNetwork(o)}}W.chains.delete(e)},addAdapter(e,{connectionControllerClient:t},n){if(!e.namespace)throw new Error("ChainController:addAdapter - adapter must have a namespace");W.chains.set(e.namespace,{namespace:e.namespace,networkState:{...Vs,caipNetwork:n[0]},accountState:{...vc},caipNetworks:n,connectionControllerClient:t}),h.setRequestedCaipNetworks((n==null?void 0:n.filter(r=>r.chainNamespace===e.namespace))??[],e.namespace)},addNetwork(e){var n;const t=W.chains.get(e.chainNamespace);if(t){const r=[...t.caipNetworks||[]];(n=t.caipNetworks)!=null&&n.find(o=>o.id===e.id)||r.push(e),W.chains.set(e.chainNamespace,{...t,caipNetworks:r}),h.setRequestedCaipNetworks(r,e.chainNamespace),N.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){var r,o,i;const n=W.chains.get(e);if(n){const s=((r=W.activeCaipNetwork)==null?void 0:r.id)===t,a=[...((o=n.caipNetworks)==null?void 0:o.filter(c=>c.id!==t))||[]];s&&((i=n==null?void 0:n.caipNetworks)!=null&&i[0])&&h.setActiveCaipNetwork(n.caipNetworks[0]),W.chains.set(e,{...n,caipNetworks:a}),h.setRequestedCaipNetworks(a||[],e),a.length===0&&N.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const n=W.chains.get(e);n&&(n.networkState={...n.networkState||Vs,...t},W.chains.set(e,n))},setChainAccountData(e,t,n=!0){if(!e)throw new Error("Chain is required to update chain account data");const r=W.chains.get(e);if(r){const o={...r.accountState||vc,...t};W.chains.set(e,{...r,accountState:o}),(W.chains.size===1||W.activeChain===e)&&t.caipAddress&&(W.activeCaipAddress=t.caipAddress)}},setChainNetworkData(e,t){if(!e)return;const n=W.chains.get(e);if(n){const r={...n.networkState||Vs,...t};W.chains.set(e,{...n,networkState:r})}},setAccountProp(e,t,n,r=!0){h.setChainAccountData(n,{[e]:t},r)},setActiveNamespace(e){var r,o;W.activeChain=e;const t=e?W.chains.get(e):void 0,n=(r=t==null?void 0:t.networkState)==null?void 0:r.caipNetwork;n!=null&&n.id&&e&&(W.activeCaipAddress=(o=t==null?void 0:t.accountState)==null?void 0:o.caipAddress,W.activeCaipNetwork=n,h.setChainNetworkData(e,{caipNetwork:n}),D.setActiveCaipNetworkId(n==null?void 0:n.caipNetworkId),Rn.set({activeChain:e,selectedNetworkId:n==null?void 0:n.caipNetworkId}))},setActiveCaipNetwork(e){var i,s;if(!e)return;const t=W.activeChain===e.chainNamespace;t||h.setIsSwitchingNamespace(!0);const n=W.chains.get(e.chainNamespace);W.activeChain=e.chainNamespace,W.activeCaipNetwork=e,h.setChainNetworkData(e.chainNamespace,{caipNetwork:e});let r=(i=n==null?void 0:n.accountState)==null?void 0:i.address;if(r)W.activeCaipAddress=`${e.chainNamespace}:${e.id}:${r}`;else if(t&&W.activeCaipAddress){const{address:a}=At.parseCaipAddress(W.activeCaipAddress);r=a,W.activeCaipAddress=`${e.caipNetworkId}:${r}`}else W.activeCaipAddress=void 0;h.setChainAccountData(e.chainNamespace,{address:r,caipAddress:W.activeCaipAddress}),be.resetSend(),Rn.set({activeChain:W.activeChain,selectedNetworkId:(s=W.activeCaipNetwork)==null?void 0:s.caipNetworkId}),D.setActiveCaipNetworkId(e.caipNetworkId),!h.checkIfSupportedNetwork(e.chainNamespace)&&S.state.enableNetworkSwitch&&!S.state.allowUnsupportedChain&&!$.state.wcBasic&&h.showUnsupportedChainUI()},addCaipNetwork(e){var n;if(!e)return;const t=W.chains.get(e.chainNamespace);t&&((n=t==null?void 0:t.caipNetworks)==null||n.push(e))},async switchActiveNamespace(e){var o;if(!e)return;const t=e!==h.state.activeChain,n=(o=h.getNetworkData(e))==null?void 0:o.caipNetwork,r=h.getCaipNetworkByNamespace(e,n==null?void 0:n.id);t&&r&&await h.switchActiveNetwork(r)},async switchActiveNetwork(e,{throwOnFailure:t=!1}={}){var s;const n=h.state.activeChain;if(!n)throw new Error("ChainController:switchActiveNetwork - namespace is required");const r=Cg.getProviderId(W.activeChain)==="AUTH",o=(s=h.getAccountData(n))==null?void 0:s.address,i=_.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);try{if(o&&e.chainNamespace===n||r&&i){const a=yg.get(e.chainNamespace);if(!a)throw new Error("Adapter not found");await a.switchNetwork({caipNetwork:e})}h.setActiveCaipNetwork(e)}catch(a){if(t)throw a}B.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})},getConnectionControllerClient(e){const t=e||W.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const n=W.chains.get(t);if(!(n!=null&&n.connectionControllerClient))throw new Error("ConnectionController client not set");return n.connectionControllerClient},getNetworkProp(e,t){var r;const n=(r=W.chains.get(t))==null?void 0:r.networkState;if(n)return n[e]},getRequestedCaipNetworks(e){const t=W.chains.get(e),{approvedCaipNetworkIds:n=[],requestedCaipNetworks:r=[]}=(t==null?void 0:t.networkState)||{};return T.sortRequestedNetworks(n,r).filter(s=>s==null?void 0:s.id)},getAllRequestedCaipNetworks(){const e=[];return W.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");const n=h.getRequestedCaipNetworks(t.namespace);e.push(...n)}),e},setRequestedCaipNetworks(e,t){h.setAdapterNetworkState(t,{requestedCaipNetworks:e});const r=h.getAllRequestedCaipNetworks().map(i=>i.chainNamespace),o=Array.from(new Set(r));N.filterByNamespaces(o)},getAllApprovedCaipNetworkIds(){const e=[];return W.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");const n=h.getApprovedCaipNetworkIds(t.namespace);e.push(...n)}),e},getActiveCaipNetwork(e){var t,n;return e?(n=(t=W.chains.get(e))==null?void 0:t.networkState)==null?void 0:n.caipNetwork:W.activeCaipNetwork},getActiveCaipAddress(){return W.activeCaipAddress},getApprovedCaipNetworkIds(e){var r;const t=W.chains.get(e);return((r=t==null?void 0:t.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},setApprovedCaipNetworksData(e,t){h.setAdapterNetworkState(e,t)},checkIfSupportedNetwork(e,t){var o;const n=t||((o=W.activeCaipNetwork)==null?void 0:o.caipNetworkId),r=h.getRequestedCaipNetworks(e);return r.length?r==null?void 0:r.some(i=>i.caipNetworkId===n):!0},checkIfSupportedChainId(e){if(!W.activeChain)return!0;const t=h.getRequestedCaipNetworks(W.activeChain);return t==null?void 0:t.some(n=>n.id===e)},checkIfSmartAccountEnabled(){var r,o;const e=bf.caipNetworkIdToNumber((r=W.activeCaipNetwork)==null?void 0:r.caipNetworkId);if(!W.activeChain||!e)return!1;const n=((o=Fe.get(q.SMART_ACCOUNT_ENABLED_NETWORKS))==null?void 0:o.split(","))||[];return!!(n!=null&&n.includes(e.toString()))},showUnsupportedChainUI(){de.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=W.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&Ce.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){h.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})},resetAccount(e){var o,i;const t=e;if(!t)throw new Error("Chain is required to set account prop");const n=(i=(o=h.state.chains.get(t))==null?void 0:o.accountState)==null?void 0:i.preferredAccountType,r=S.state.defaultAccountTypes[t];W.activeCaipAddress=void 0,h.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:r||n,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,user:void 0,status:"disconnected"}),N.removeConnectorId(t)},setIsSwitchingNamespace(e){W.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){var n,r;const e=[];let t;if(W.chains.forEach(o=>{_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i=>i===o.namespace)&&o.namespace&&e.push(o.namespace)}),e.length>0){const o=e[0];return t=o?(r=(n=W.chains.get(o))==null?void 0:n.caipNetworks)==null?void 0:r[0]:void 0,t}},getAccountData(e){var n;const t=e||W.activeChain;if(t)return(n=h.state.chains.get(t))==null?void 0:n.accountState},getNetworkData(e){var n;const t=e||W.activeChain;if(t)return(n=h.state.chains.get(t))==null?void 0:n.networkState},getCaipNetworkByNamespace(e,t){var o,i,s;if(!e)return;const n=h.state.chains.get(e),r=(o=n==null?void 0:n.caipNetworks)==null?void 0:o.find(a=>a.id.toString()===(t==null?void 0:t.toString()));return r||((i=n==null?void 0:n.networkState)==null?void 0:i.caipNetwork)||((s=n==null?void 0:n.caipNetworks)==null?void 0:s[0])},getRequestedCaipNetworkIds(){const e=N.state.filterByNamespace;return(e?[W.chains.get(e)]:Array.from(W.chains.values())).flatMap(n=>(n==null?void 0:n.caipNetworks)||[]).map(n=>n.caipNetworkId)},getCaipNetworks(e){return e?h.getRequestedCaipNetworks(e):h.getAllRequestedCaipNetworks()},getCaipNetworkById(e,t){return Up.getCaipNetworks(t).find(n=>n.id.toString()===e.toString()||n.caipNetworkId.toString()===e.toString())},setLastConnectedSIWECaipNetwork(e){W.lastConnectedSIWECaipNetwork=e},getLastConnectedSIWECaipNetwork(){return W.lastConnectedSIWECaipNetwork},async fetchTokenBalance(e){var s,a;const t=h.getAccountData();if(!t)return[];const n=(s=h.state.activeCaipNetwork)==null?void 0:s.caipNetworkId,r=(a=h.state.activeCaipNetwork)==null?void 0:a.chainNamespace,o=h.state.activeCaipAddress,i=o?T.getPlainAddress(o):void 0;if(h.setAccountProp("balanceLoading",!0,r),t.lastRetry&&!T.isAllowedRetry(t.lastRetry,30*Ce.ONE_SEC_MS))return h.setAccountProp("balanceLoading",!1,r),[];try{if(i&&n&&r){const c=await ql.getMyTokensWithBalance();return h.setAccountProp("tokenBalance",c,r),h.setAccountProp("lastRetry",void 0,r),h.setAccountProp("balanceLoading",!1,r),c}}catch(c){h.setAccountProp("lastRetry",Date.now(),r),e==null||e(c),ye.showError("Token Balance Unavailable")}finally{h.setAccountProp("balanceLoading",!1,r)}return[]},isCaipNetworkDisabled(e){var c;const t=e.chainNamespace,n=!!((c=h.getAccountData(t))!=null&&c.caipAddress),r=h.getAllApprovedCaipNetworkIds(),o=h.getNetworkProp("supportsAllNetworks",t)!==!1,i=N.getConnectorId(t),s=N.getAuthConnector(),a=i===_.CONNECTOR_ID.AUTH&&s;return!n||o||a?!1:!(r!=null&&r.includes(e.caipNetworkId))}},h=Gt(Up),Wp={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){var w,g;const n=h.state.activeCaipNetwork,r=h.state.activeChain,o=E.state.data;if(e.id===(n==null?void 0:n.id))return;const s=!!((w=h.getAccountData(r))!=null&&w.address),a=!!((g=h.getAccountData(e.chainNamespace))!=null&&g.address),c=e.chainNamespace!==r,d=N.getConnectorId(r)===_.CONNECTOR_ID.AUTH,m=_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(b=>b===e.chainNamespace);t||d&&m?E.push("SwitchNetwork",{...o,network:e}):s&&c&&!a?E.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):E.push("SwitchNetwork",{...o,network:e})}},dt=$e({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),_g={state:dt,subscribe(e){return He(dt,()=>e(dt))},subscribeKey(e,t){return Ve(dt,e,t)},async open(e){var s,a;const t=e==null?void 0:e.namespace,n=h.state.activeChain,r=t&&t!==n,o=(s=h.getAccountData(e==null?void 0:e.namespace))==null?void 0:s.caipAddress,i=h.state.noAdapters;if($.state.wcBasic?P.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1,fetchWalletRanks:!1}):await P.prefetch(),N.setFilterByNamespace(e==null?void 0:e.namespace),de.setLoading(!0,t),t&&r){const c=((a=h.getNetworkData(t))==null?void 0:a.caipNetwork)||h.getRequestedCaipNetworks(t)[0];c&&(i?(await h.switchActiveNetwork(c),E.push("ConnectingWalletConnectBasic")):Wp.onSwitchNetwork({network:c,ignoreSwitchConfirmation:!0}))}else S.state.manualWCControl||i&&!o?T.isMobile()?E.reset("AllWallets"):E.reset("ConnectingWalletConnectBasic"):e!=null&&e.view?E.reset(e.view,e.data):o?E.reset("Account"):E.reset("Connect");dt.open=!0,Rn.set({open:!0}),B.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!o}})},close(){const e=S.state.enableEmbedded,t=!!h.state.activeCaipAddress;dt.open&&B.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),dt.open=!1,E.reset("Connect"),de.clearLoading(),e?t?E.replace("Account"):E.push("Connect"):Rn.set({open:!1}),$.resetUri()},setLoading(e,t){t&&dt.loadingNamespaceMap.set(t,e),dt.loading=e,Rn.set({loading:e})},clearLoading(){dt.loadingNamespaceMap.clear(),dt.loading=!1,Rn.set({loading:!1})},shake(){dt.shake||(dt.shake=!0,setTimeout(()=>{dt.shake=!1},500))}},de=Gt(_g);var Ag=Dh();const Ky=us(Ag);var Ec={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var gl=function(e,t){return gl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},gl(e,t)};function xg(e,t){gl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var wl=function(){return wl=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wl.apply(this,arguments)};function Sg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Tg(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function Ng(e,t){return function(n,r){t(n,r,e)}}function Rg(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function Ig(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{l(r.next(d))}catch(m){s(m)}}function c(d){try{l(r.throw(d))}catch(m){s(m)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function $g(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(d){l=[6,d],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function kg(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function Og(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function bl(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bp(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Pg(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Bp(arguments[t]));return e}function Lg(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function $o(e){return this instanceof $o?(this.v=e,this):new $o(e)}function Dg(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(w){r[w]&&(o[w]=function(g){return new Promise(function(b,y){i.push([w,g,b,y])>1||a(w,g)})})}function a(w,g){try{c(r[w](g))}catch(b){m(i[0][3],b)}}function c(w){w.value instanceof $o?Promise.resolve(w.value.v).then(l,d):m(i[0][2],w)}function l(w){a("next",w)}function d(w){a("throw",w)}function m(w,g){w(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Mg(e){var t,n;return t={},r("next"),r("throw",function(o){throw o}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(o,i){t[o]=e[o]?function(s){return(n=!n)?{value:$o(e[o](s)),done:o==="return"}:i?i(s):s}:i}}function Ug(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof bl=="function"?bl(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}function Wg(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Bg(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Fg(e){return e&&e.__esModule?e:{default:e}}function jg(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function zg(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const Hg=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return wl},__asyncDelegator:Mg,__asyncGenerator:Dg,__asyncValues:Ug,__await:$o,__awaiter:Ig,__classPrivateFieldGet:jg,__classPrivateFieldSet:zg,__createBinding:kg,__decorate:Tg,__exportStar:Og,__extends:xg,__generator:$g,__importDefault:Fg,__importStar:Bg,__makeTemplateObject:Wg,__metadata:Rg,__param:Ng,__read:Bp,__rest:Sg,__spread:Pg,__spreadArrays:Lg,__values:bl},Symbol.toStringTag,{value:"Module"})),Vg=Lh(Hg);var An={},Kd;function Kg(){if(Kd)return An;Kd=1,Object.defineProperty(An,"__esModule",{value:!0}),An.isBrowserCryptoAvailable=An.getSubtleCrypto=An.getBrowerCrypto=void 0;function e(){return(gi===null||gi===void 0?void 0:gi.crypto)||(gi===null||gi===void 0?void 0:gi.msCrypto)||{}}An.getBrowerCrypto=e;function t(){const r=e();return r.subtle||r.webkitSubtle}An.getSubtleCrypto=t;function n(){return!!e()&&!!t()}return An.isBrowserCryptoAvailable=n,An}var xn={},qd;function qg(){if(qd)return xn;qd=1,Object.defineProperty(xn,"__esModule",{value:!0}),xn.isBrowser=xn.isNode=xn.isReactNative=void 0;function e(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}xn.isReactNative=e;function t(){return typeof cn<"u"&&typeof cn.versions<"u"&&typeof cn.versions.node<"u"}xn.isNode=t;function n(){return!e()&&!t()}return xn.isBrowser=n,xn}var Gd;function Gg(){return Gd||(Gd=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=Vg;t.__exportStar(Kg(),e),t.__exportStar(qg(),e)}(Ec)),Ec}var qy=Gg();let mr=null;const rn={getSIWX(){return S.state.siwx},async initializeIfEnabled(e=h.getActiveCaipAddress()){var i,s,a;const t=S.state.siwx;if(!(t&&e))return;const[n,r,o]=e.split(":");if(h.checkIfSupportedNetwork(n,`${n}:${r}`))try{if((i=S.state.remoteFeatures)!=null&&i.emailCapture){const l=(s=h.getAccountData(n))==null?void 0:s.user;await de.open({view:"DataCapture",data:{email:(l==null?void 0:l.email)??void 0}});return}if(mr&&await mr,(await t.getSessions(`${n}:${r}`,o)).length)return;await de.open({view:"SIWXSignMessage"})}catch(c){console.error("SIWXUtil:initializeIfEnabled",c),B.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(c)}),await((a=$._getClient())==null?void 0:a.disconnect().catch(console.error)),E.reset("Connect"),ye.showError("A problem occurred while trying initialize authentication")}},async isAuthenticated(e=h.getActiveCaipAddress()){if(!S.state.siwx||!e)return!0;const{chainNamespace:n,chainId:r,address:o}=At.parseCaipAddress(e),i=`${n}:${r}`;return(await rn.getSessions({address:o,caipNetworkId:i})).length>0},async requestSignMessage(){const e=S.state.siwx,t=T.getPlainAddress(h.getActiveCaipAddress()),n=Hs();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!n)throw new Error("No ActiveCaipNetwork or client found");try{const r=await e.createMessage({chainId:n.caipNetworkId,accountAddress:t}),o=r.toString();let i="";e.signMessage?i=await e.signMessage({message:o,chainId:n.caipNetworkId,accountAddress:t}):(N.getConnectorId(n.chainNamespace)===_.CONNECTOR_ID.AUTH&&E.pushTransactionStack({}),i=await $.signMessage(o)||""),await e.addSession({data:r,message:o,signature:i}),h.setLastConnectedSIWECaipNetwork(n),de.close(),B.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(r){(!de.state.open||E.state.view==="ApproveTransaction")&&await de.open({view:"SIWXSignMessage"}),ye.showError("Error signing message"),B.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(r)}),console.error("SWIXUtil:requestSignMessage",r)}},async cancelSignMessage(){var e;try{const t=this.getSIWX();if((e=t==null?void 0:t.getRequired)==null?void 0:e.call(t)){const r=h.getLastConnectedSIWECaipNetwork();if(r){const o=await(t==null?void 0:t.getSessions(r==null?void 0:r.caipNetworkId,T.getPlainAddress(h.getActiveCaipAddress())||""));o&&o.length>0?await h.switchActiveNetwork(r):await $.disconnect()}else await $.disconnect()}else de.close();de.close(),B.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(t){console.error("SIWXUtil:cancelSignMessage",t)}},async getAllSessions(){const e=this.getSIWX(),t=h.getAllRequestedCaipNetworks(),n=[];return await Promise.all(t.map(async r=>{const o=await(e==null?void 0:e.getSessions(r.caipNetworkId,T.getPlainAddress(h.getActiveCaipAddress())||""));o&&n.push(...o)})),n},async getSessions(e){const t=S.state.siwx;let n=e==null?void 0:e.address;if(!n){const o=h.getActiveCaipAddress();n=T.getPlainAddress(o)}let r=e==null?void 0:e.caipNetworkId;if(!r){const o=h.getActiveCaipNetwork();r=o==null?void 0:o.caipNetworkId}return t&&n&&r?t.getSessions(r,n):[]},async isSIWXCloseDisabled(){var t;const e=this.getSIWX();if(e){const n=E.state.view==="ApproveTransaction",r=E.state.view==="SIWXSignMessage";if(n||r)return((t=e.getRequired)==null?void 0:t.call(e))&&(await this.getSessions()).length===0}return!1},async authConnectorAuthenticate({authConnector:e,chainId:t,socialUri:n,preferredAccountType:r,chainNamespace:o}){var m;const i=rn.getSIWX(),s=Hs();if(!i||!o.includes(_.CHAIN.EVM)||(m=S.state.remoteFeatures)!=null&&m.emailCapture){const w=await e.connect({chainId:t,socialUri:n,preferredAccountType:r});return{address:w.address,chainId:w.chainId,accounts:w.accounts}}const a=`${o}:${t}`,c=await i.createMessage({chainId:a,accountAddress:"<<AccountAddress>>"}),l={accountAddress:c.accountAddress,chainId:c.chainId,domain:c.domain,uri:c.uri,version:c.version,nonce:c.nonce,notBefore:c.notBefore,statement:c.statement,resources:c.resources,requestId:c.requestId,issuedAt:c.issuedAt,expirationTime:c.expirationTime,serializedMessage:c.toString()},d=await e.connect({chainId:t,socialUri:n,siwxMessage:l,preferredAccountType:r});return l.accountAddress=d.address,l.serializedMessage=d.message||"",d.signature&&d.message&&await rn.addEmbeddedWalletSession(l,d.message,d.signature),h.setLastConnectedSIWECaipNetwork(s),{address:d.address,chainId:d.chainId,accounts:d.accounts}},async addEmbeddedWalletSession(e,t,n){if(mr)return mr;const r=rn.getSIWX();return r?(mr=r.addSession({data:e,message:t,signature:n}).finally(()=>{mr=null}),mr):Promise.resolve()},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:n}){var l,d,m;const r=rn.getSIWX(),o=Hs(),i=new Set(t.map(w=>w.split(":")[0]));if(!r||i.size!==1||!i.has("eip155"))return!1;const s=await r.createMessage({chainId:((l=Hs())==null?void 0:l.caipNetworkId)||"",accountAddress:""}),a=await e.authenticate({nonce:s.nonce,domain:s.domain,uri:s.uri,exp:s.expirationTime,iat:s.issuedAt,nbf:s.notBefore,requestId:s.requestId,version:s.version,resources:s.resources,statement:s.statement,chainId:s.chainId,methods:n,chains:[s.chainId,...t.filter(w=>w!==s.chainId)]});ye.showLoading("Authenticating...",{autoClose:!1});const c={...a.session.peer.metadata,name:a.session.peer.metadata.name,icon:(d=a.session.peer.metadata.icons)==null?void 0:d[0],type:"WALLET_CONNECT"};if(h.setAccountProp("connectedWalletInfo",c,Array.from(i)[0]),(m=a==null?void 0:a.auths)!=null&&m.length){const w=a.auths.map(g=>{const b=e.client.formatAuthMessage({request:g.p,iss:g.p.iss});return{data:{...g.p,accountAddress:g.p.iss.split(":").slice(-1).join(""),chainId:g.p.iss.split(":").slice(2,4).join(":"),uri:g.p.aud??"",version:g.p.version||s.version,expirationTime:g.p.exp,issuedAt:g.p.iat,notBefore:g.p.nbf},message:b,signature:g.s.s,cacao:g}});try{await r.setSessions(w),o&&h.setLastConnectedSIWECaipNetwork(o),B.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:rn.getSIWXEventProperties()})}catch(g){throw console.error("SIWX:universalProviderAuth - failed to set sessions",g),B.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:rn.getSIWXEventProperties(g)}),await e.disconnect().catch(console.error),g}finally{ye.hide()}}return!0},getSIWXEventProperties(e){var n;const t=h.state.activeChain;if(!t)throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");return{network:((n=h.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||"",isSmartAccount:Ze(t)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT,message:e?T.parseError(e):void 0}},async clearSessions(){const e=this.getSIWX();e&&await e.setSessions([])}},Bt=$e({message:"",variant:"info",open:!1}),Zg={state:Bt,subscribeKey(e,t){return Ve(Bt,e,t)},open(e,t){const{debug:n}=S.state,{code:r,displayMessage:o,debugMessage:i}=e;o&&n&&(Bt.message=o,Bt.variant=t,Bt.open=!0)},warn(e,t,n){Bt.open=!0,Bt.message=e,Bt.variant="warning",t&&console.warn(t,n)},close(){Bt.open=!1,Bt.message="",Bt.variant="info"}},Fp=Gt(Zg),Ft=$e({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Yg={state:Ft,subscribe(e){return He(Ft,()=>e(Ft))},subscribeKey(e,t){return Ve(Ft,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){Ft.open=!0,Ft.message=e,Ft.triggerRect=t,Ft.variant=n},hide(){Ft.open=!1,Ft.message="",Ft.triggerRect={width:0,height:0,top:0,left:0}}},It=Gt(Yg),io=$e({isLegalCheckboxChecked:!1}),Ar={state:io,subscribe(e){return He(io,()=>e(io))},subscribeKey(e,t){return Ve(io,e,t)},setIsLegalCheckboxChecked(e){io.isLegalCheckboxChecked=e}},Jg={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},Zd={56:"714",204:"714"};class Xg extends Error{}function Qg(){const{sdkType:e,sdkVersion:t,projectId:n}=S.getSnapshot(),r=new URL("https://rpc.walletconnect.org/v1/json-rpc");return r.searchParams.set("projectId",n),r.searchParams.set("st",e),r.searchParams.set("sv",t),r.searchParams.set("source","fund-wallet"),r.toString()}async function Gl(e,t){const n=Qg(),{projectId:r}=S.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:r}},s=await(await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})).json();if(s.error)throw new Xg(s.error.message);return s}async function ew(e){return(await Gl("reown_getExchanges",e)).result}async function tw(e){return(await Gl("reown_getExchangePayUrl",e)).result}async function nw(e){return(await Gl("reown_getExchangeBuyStatus",e)).result}function Yd(e,t){const{chainNamespace:n,chainId:r}=At.parseCaipNetworkId(e),o=Jg[n];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let i=o.native.assetNamespace,s=o.native.assetReference;return t!=="native"?(i=o.defaultTokenNamespace,s=t):n==="eip155"&&Zd[r]&&(s=Zd[r]),`${`${n}:${r}`}/${i}:${s}`}const rw={network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},iw={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ow={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Gy={asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e"},sw={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},aw={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},cw={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},lw={network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},dw={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},uw={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},pw={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},hw={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},fw={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},mw={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},gw={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}},ww={ethereumETH:rw,baseETH:iw,baseUSDC:ow,baseSepoliaETH:sw,ethereumUSDC:aw,arbitrumUSDC:cw,polygonUSDC:lw,solanaUSDC:dw,ethereumUSDT:uw,optimismUSDT:pw,arbitrumUSDT:hw,polygonUSDT:fw,solanaUSDT:mw,solanaSOL:gw};function bw(e){return Object.values(ww).filter(t=>t.network===e)}const yw=0,jp={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},te=$e(jp),je={state:te,subscribe(e){return He(te,()=>e(te))},subscribeKey(e,t){return Ve(te,e,t)},resetState(){Object.assign(te,{...jp})},async getAssetsForNetwork(e){const t=bw(e),n=await je.getAssetsImageAndPrice(t),r=t.map(o=>{var a,c,l,d;const i=o.asset==="native"?ya():`${o.network}:${o.asset}`,s=n.find(m=>{var w,g,b;return((b=(g=(w=m.fungibles)==null?void 0:w[0])==null?void 0:g.address)==null?void 0:b.toLowerCase())===i.toLowerCase()});return{...o,price:((c=(a=s==null?void 0:s.fungibles)==null?void 0:a[0])==null?void 0:c.price)||1,metadata:{...o.metadata,iconUrl:(d=(l=s==null?void 0:s.fungibles)==null?void 0:l[0])==null?void 0:d.iconUrl}}});return te.assets=r,r},async getAssetsImageAndPrice(e){const t=e.map(r=>r.asset==="native"?ya():`${r.network}:${r.asset}`);return await Promise.all(t.map(r=>fe.fetchTokenPrice({addresses:[r]})))},getTokenAmount(){var n;if(!((n=te==null?void 0:te.paymentAsset)!=null&&n.price))throw new Error("Cannot get token price");const e=Ii.bigNumber(te.amount??0).round(8),t=Ii.bigNumber(te.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){var t;te.amount=e,(t=te.paymentAsset)!=null&&t.price&&(te.tokenAmount=je.getTokenAmount())},setPaymentAsset(e){te.paymentAsset=e},isPayWithExchangeEnabled(){var e;return(e=S.state.remoteFeatures)==null?void 0:e.payWithExchange},isPayWithExchangeSupported(){return je.isPayWithExchangeEnabled()&&h.state.activeCaipNetwork&&Ce.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(h.state.activeCaipNetwork.chainNamespace)},async fetchExchanges(){var e;try{const t=je.isPayWithExchangeSupported();if(!te.paymentAsset||!t){te.exchanges=[],te.isLoading=!1;return}te.isLoading=!0;const n=await ew({page:yw,asset:Yd(te.paymentAsset.network,te.paymentAsset.asset),amount:((e=te.amount)==null?void 0:e.toString())??"0"});te.exchanges=n.exchanges.slice(0,2)}catch{throw ye.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{te.isLoading=!1}},async getPayUrl(e,t){try{const n=Number(t.amount),r=await tw({exchangeId:e,asset:Yd(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return B.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),r}catch(n){throw n instanceof Error&&n.message.includes("is not supported")?new Error("Asset not supported"):new Error(n.message)}},async handlePayWithExchange(e){var t;try{const n=(t=h.getAccountData())==null?void 0:t.address;if(!n)throw new Error("No account connected");if(!te.paymentAsset)throw new Error("No payment asset selected");const r=T.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!r)throw new Error("Could not create popup window");te.isPaymentInProgress=!0,te.paymentId=crypto.randomUUID(),te.currentPayment={type:"exchange",exchangeId:e};const{network:o,asset:i}=te.paymentAsset,s={network:o,asset:i,amount:te.tokenAmount,recipient:n},a=await je.getPayUrl(e,s);if(!a){try{r.close()}catch(c){console.error("Unable to close popup window",c)}throw new Error("Unable to initiate payment")}te.currentPayment.sessionId=a.sessionId,te.currentPayment.status="IN_PROGRESS",te.currentPayment.exchangeId=e,r.location.href=a.url}catch{te.error="Unable to initiate payment",ye.showError(te.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:r=20}){const o=await je.getBuyStatus(e,t,n);if(o.status==="SUCCESS"||o.status==="FAILED")return o;if(r===0)throw new Error("Unable to get deposit status");return await new Promise(i=>{setTimeout(i,5e3)}),je.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:r-1})},async getBuyStatus(e,t,n){var r,o,i,s,a;try{if(!te.currentPayment)throw new Error("No current payment");const c=await nw({sessionId:t,exchangeId:e});if(te.currentPayment.status=c.status,c.status==="SUCCESS"||c.status==="FAILED"){const l=(r=h.getAccountData())==null?void 0:r.address;te.currentPayment.result=c.txHash,te.isPaymentInProgress=!1,B.sendEvent({type:"track",event:c.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:c.status==="FAILED"?T.parseError(te.error):void 0,source:"fund-from-exchange",paymentId:n,configuration:{network:((o=te.paymentAsset)==null?void 0:o.network)||"",asset:((i=te.paymentAsset)==null?void 0:i.asset)||"",recipient:l||"",amount:te.amount??0},currentPayment:{type:"exchange",exchangeId:(s=te.currentPayment)==null?void 0:s.exchangeId,sessionId:(a=te.currentPayment)==null?void 0:a.sessionId,result:c.txHash}}})}return c}catch{return{status:"UNKNOWN",txHash:""}}},reset(){te.currentPayment=void 0,te.isPaymentInProgress=!1,te.paymentId="",te.paymentAsset=null,te.amount=0,te.tokenAmount=0,te.priceLoading=!1,te.error=null,te.exchanges=[],te.isLoading=!1}};function Cw(){try{return T.returnOpenHref(`${_.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function vw(){E.push("ConnectingFarcaster");const e=N.getAuthConnector();if(e){const t=h.getAccountData();if(!(t!=null&&t.farcasterUrl))try{const{url:n}=await e.provider.getFarcasterUri();h.setAccountProp("farcasterUrl",n,h.state.activeChain)}catch(n){E.goBack(),ye.showError(n)}}}async function Ew(e){E.push("ConnectingSocial");const t=N.getAuthConnector();let n=null;try{const r=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(T.isTelegram()||(n=Cw()),n)h.setAccountProp("socialWindow",Ri(n),h.state.activeChain);else if(!T.isTelegram())throw new Error("Could not create social popup");const{uri:o}=await t.provider.getSocialRedirectUri({provider:e});if(!o)throw n==null||n.close(),new Error("Could not fetch the social redirect uri");if(n&&(n.location.href=o),T.isTelegram()){D.setTelegramSocialProvider(e);const i=T.formatTelegramSocialLoginUrl(o);T.openHref(i,"_top")}clearTimeout(r)}}catch(r){n==null||n.close();const o=T.parseError(r);ye.showError(o),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:o}})}}async function _w(e){h.setAccountProp("socialProvider",e,h.state.activeChain),B.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await vw():await Ew(e)}const zp={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:_.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage(e,t){return`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`}},Aw={NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700","-239":"20f673c0-095e-49b2-07cf-eb5049dcf600","-3":"20f673c0-095e-49b2-07cf-eb5049dcf600","0x2b6653dc":"3502bb86-cc4e-420f-a387-59ea63a28b00","0x94a9059e":"3502bb86-cc4e-420f-a387-59ea63a28b00","0xcd8690dc":"3502bb86-cc4e-420f-a387-59ea63a28b00"}},Et={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${zp.EIP155}:${n}`]=r}),t},isLowerCaseMatch(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())},getActiveNamespaceConnectedToAuth(){const e=h.state.activeChain;return _.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>N.getConnectorId(t)===_.CONNECTOR_ID.AUTH&&t===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:n}){let r=0;return new Promise(o=>{async function i(){return r+=1,await e()?o(!0):r>=n?o(!1):(setTimeout(i,t),null)}i()})},userChainIdToChainNamespace(e){if(typeof e=="number")return _.CHAIN.EVM;const[t]=e.split(":");return t},getOtherAuthNamespaces(e){return e?_.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(r=>r!==e):[]},getConnectorStorageInfo(e,t){const r=D.getConnections()[t]??[];return{hasDisconnected:D.isConnectorDisconnected(e,t),hasConnected:r.some(o=>Et.isLowerCaseMatch(o.connectorId,e))}}},xw=new AbortController,Sw={EmbeddedWalletAbortController:xw,UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"ORIGIN_NOT_ALLOWED"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{code:"APKT001",displayMessage:"Network Not Found",debugMessage:"The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."},ORIGIN_NOT_ALLOWED:{code:"APKT002",displayMessage:"Invalid App Configuration",debugMessage:()=>`The origin ${lo()?window.origin:"unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${S.state.projectId}]`},IFRAME_LOAD_FAILED:{code:"APKT003",displayMessage:"Network Error: Wallet Load Failed",debugMessage:()=>"Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."},IFRAME_REQUEST_TIMEOUT:{code:"APKT004",displayMessage:"Wallet Request Timeout",debugMessage:()=>"The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."},UNVERIFIED_DOMAIN:{code:"APKT005",displayMessage:"Unverified Domain",debugMessage:()=>"Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."},JWT_TOKEN_NOT_VALID:{code:"APKT006",displayMessage:"Session Expired",debugMessage:"Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."},INVALID_PROJECT_ID:{code:"APKT007",displayMessage:"Invalid Project ID",debugMessage:"The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."},PROJECT_ID_NOT_CONFIGURED:{code:"APKT008",displayMessage:"Project ID Missing",debugMessage:"No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."},SERVER_ERROR_APP_CONFIGURATION:{code:"APKT009",displayMessage:"Server Error",debugMessage:e=>`Unable to fetch App Configuration. ${e}. Please check your network connection and try again shortly. Contact support if the issue persists.`},RATE_LIMITED_APP_CONFIGURATION:{code:"APKT010",displayMessage:"Rate Limited",debugMessage:"You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."}},ALERT_WARNINGS:{LOCAL_CONFIGURATION_IGNORED:{debugMessage:e=>`[Reown Config Notice] ${e}`},INACTIVE_NAMESPACE_NOT_CONNECTED:{code:"APKTW001",displayMessage:"Inactive Namespace Not Connected",debugMessage:(e,t)=>`An error occurred while connecting an inactive namespace ${e}: "${t}"`},INVALID_EMAIL:{code:"APKTW002",displayMessage:"Invalid Email Address",debugMessage:"Please enter a valid email address"}}},Hp="2.50.4";let oo={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:n})=>t?`${e??"https://viem.sh"}${t}${n?`#${n}`:""}`:void 0,version:`viem@${Hp}`};class hn extends Error{constructor(t,n={}){var a;const r=(()=>{var c;return n.cause instanceof hn?n.cause.details:(c=n.cause)!=null&&c.message?n.cause.message:n.details})(),o=n.cause instanceof hn&&n.cause.docsPath||n.docsPath,i=(a=oo.getDocsUrl)==null?void 0:a.call(oo,{...n,docsPath:o}),s=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: ${i}`]:[],...r?[`Details: ${r}`]:[],...oo.version?[`Version: ${oo.version}`]:[]].join(`
`);super(s,n.cause?{cause:n.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.name=n.name??this.name,this.shortMessage=t,this.version=Hp}walk(t){return Vp(this,t)}}function Vp(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e&&e.cause!==void 0?Vp(e.cause,t):t?null:e}class Tw extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}get(t){const n=super.get(t);return super.has(t)&&(super.delete(t),super.set(t,n)),n}set(t,n){if(super.has(t)&&super.delete(t),super.set(t,n),this.maxSize&&this.size>this.maxSize){const r=super.keys().next().value;r!==void 0&&super.delete(r)}return this}}const xr=(e,t,n)=>JSON.stringify(e,(r,o)=>typeof o=="bigint"?o.toString():o,n);function kr(e){if(e!=null&&e.reason)return e.reason;if(typeof DOMException=="function")return new DOMException("This operation was aborted","AbortError");const t=new Error("This operation was aborted");return t.name="AbortError",t}function gs(e){return typeof e=="object"&&e!==null&&"name"in e&&e.name==="AbortError"}const Zl=e=>{try{const t=new URL(e);return!t.username&&!t.password?e:(t.username="",t.password="",t.toString())}catch{return e}};class po extends hn{constructor({body:t,cause:n,details:r,headers:o,status:i,url:s}){super("HTTP request failed.",{cause:n,details:r,metaMessages:[i&&`Status: ${i}`,`URL: ${Zl(s)}`,t&&`Request body: ${xr(t)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=o,this.status=i,this.url=s}}class Kp extends hn{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Zl(r)}`,`Request body: ${xr(t)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code,this.data=n.data,this.url=r}}class Jd extends hn{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Zl(n)}`,`Request body: ${xr(t)}`],name:"TimeoutError"}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.url=n}}const Nw=-1;class mt extends hn{constructor(t,{code:n,docsPath:r,metaMessages:o,name:i,shortMessage:s}){super(s,{cause:t,docsPath:r,metaMessages:o||(t==null?void 0:t.metaMessages),name:i||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=i||t.name,this.code=t instanceof Kp?t.code:n??Nw}}class gt extends mt{constructor(t,n){super(t,n),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class ko extends mt{constructor(t){super(t,{code:ko.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(ko,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Oo extends mt{constructor(t){super(t,{code:Oo.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(Oo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Po extends mt{constructor(t,{method:n}={}){super(t,{code:Po.code,name:"MethodNotFoundRpcError",shortMessage:`The method${n?` "${n}"`:""} does not exist / is not available.`})}}Object.defineProperty(Po,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Lo extends mt{constructor(t){super(t,{code:Lo.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(Lo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Pi extends mt{constructor(t){super(t,{code:Pi.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(Pi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Do extends mt{constructor(t){super(t,{code:Do.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(Do,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Mo extends mt{constructor(t){super(t,{code:Mo.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Mo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Uo extends mt{constructor(t){super(t,{code:Uo.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(Uo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Li extends mt{constructor(t){super(t,{code:Li.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(Li,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Cr extends mt{constructor(t,{method:n}={}){super(t,{code:Cr.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${n?` "${n}"`:""} is not supported.`})}}Object.defineProperty(Cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Di extends mt{constructor(t){super(t,{code:Di.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Di,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Wo extends mt{constructor(t){super(t,{code:Wo.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(Wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Sr extends gt{constructor(t){super(t,{code:Sr.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(Sr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Bo extends gt{constructor(t){super(t,{code:Bo.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(Bo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Fo extends gt{constructor(t,{method:n}={}){super(t,{code:Fo.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${n?` " ${n}"`:""}.`})}}Object.defineProperty(Fo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class jo extends gt{constructor(t){super(t,{code:jo.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class zo extends gt{constructor(t){super(t,{code:zo.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(zo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Ho extends gt{constructor(t){super(t,{code:Ho.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(Ho,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Vo extends gt{constructor(t){super(t,{code:Vo.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(Vo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class Ko extends gt{constructor(t){super(t,{code:Ko.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(Ko,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class qo extends gt{constructor(t){super(t,{code:qo.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(qo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class Go extends gt{constructor(t){super(t,{code:Go.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(Go,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class Zo extends gt{constructor(t){super(t,{code:Zo.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(Zo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class Yo extends gt{constructor(t){super(t,{code:Yo.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(Yo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class Jo extends gt{constructor(t){super(t,{code:Jo.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(Jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class Mi extends gt{constructor(t){super(t,{code:Mi.code,name:"WalletConnectSessionSettlementError",shortMessage:"WalletConnect session settlement failed."})}}Object.defineProperty(Mi,"code",{enumerable:!0,configurable:!0,writable:!0,value:7e3});class Rw extends mt{constructor(t){super(t,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}class Yl extends hn{constructor({cause:t,message:n}={}){var o;const r=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t,name:"ExecutionRevertedError"})}}Object.defineProperty(Yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Yl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted|gas required exceeds allowance/});function Iw(){let e=()=>{},t=()=>{};return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}const _c=new Map;function $w({fn:e,id:t,shouldSplitBatch:n,wait:r=0,sort:o}){const i=async()=>{const d=c();s();const m=d.map(({args:w})=>w);m.length!==0&&e(m).then(w=>{o&&Array.isArray(w)&&w.sort(o);for(let g=0;g<d.length;g++){const{resolve:b}=d[g];b==null||b([w[g],w])}}).catch(w=>{for(let g=0;g<d.length;g++){const{reject:b}=d[g];b==null||b(w)}})},s=()=>_c.delete(t),a=()=>c().map(({args:d})=>d),c=()=>_c.get(t)||[],l=d=>_c.set(t,[...c(),d]);return{flush:s,async schedule(d){const{promise:m,resolve:w,reject:g}=Iw();return(n==null?void 0:n([...a(),d]))&&i(),c().length>0?(l({args:d,resolve:w,reject:g}),m):(l({args:d,resolve:w,reject:g}),setTimeout(i,r),m)}}}async function qp(e,{signal:t}={}){return new Promise((n,r)=>{if(t!=null&&t.aborted){r(kr(t));return}const o=()=>t==null?void 0:t.removeEventListener("abort",s),i=setTimeout(()=>{o(),n()},e),s=()=>{clearTimeout(i),o(),r(kr(t))};t==null||t.addEventListener("abort",s,{once:!0})})}function kw(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0,signal:o}={}){return new Promise((i,s)=>{const a=async({count:c=0}={})=>{if(o!=null&&o.aborted){s(kr(o));return}const l=async({error:d})=>{const m=typeof t=="function"?t({count:c,error:d}):t;if(m)try{await qp(m,{signal:o})}catch(w){s(w);return}a({count:c+1})};try{const d=await e();i(d)}catch(d){if(o!=null&&o.aborted){s(kr(o));return}if(gs(d)){s(d);return}if(c<n&&await r({count:c,error:d}))return l({error:d});s(d)}};a()})}const yl=256;let Ks=yl,qs;function Ow(e=11){if(!qs||Ks+e>yl*2){qs="",Ks=0;for(let t=0;t<yl;t++)qs+=(256+Math.random()*256|0).toString(16).substring(1)}return qs.substring(Ks,Ks+++e)}const Gs=new Tw(8192);function Pw(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(Gs.get(n))return Gs.get(n);const r=e().finally(()=>Gs.delete(n));return Gs.set(n,r),r}function Lw(e,t={}){return async(n,r={})=>{var w;const{dedupe:o=!1,methods:i,retryDelay:s=150,retryCount:a=3,signal:c,uid:l}={...t,...r},{method:d}=n;if((w=i==null?void 0:i.exclude)!=null&&w.includes(d))throw new Cr(new Error("method not supported"),{method:d});if(i!=null&&i.include&&!i.include.includes(d))throw new Cr(new Error("method not supported"),{method:d});if(c!=null&&c.aborted)throw kr(c);const m=o?Mw(`${l}.${xr(n)}`):void 0;return Pw(()=>kw(async()=>{try{return await e(n,c?{signal:c}:void 0)}catch(g){if(c!=null&&c.aborted)throw kr(c);if(gs(g))throw g;const b=g;switch(b.code){case ko.code:throw new ko(b);case Oo.code:throw new Oo(b);case Po.code:throw new Po(b,{method:n.method});case Lo.code:throw new Lo(b);case Pi.code:throw new Pi(b);case Do.code:throw new Do(b);case Mo.code:throw new Mo(b);case Uo.code:throw new Uo(b);case Li.code:throw new Li(b);case Cr.code:throw new Cr(b,{method:n.method});case Di.code:throw new Di(b);case Wo.code:throw new Wo(b);case Sr.code:throw new Sr(b);case Bo.code:throw new Bo(b);case Fo.code:throw new Fo(b);case jo.code:throw new jo(b);case zo.code:throw new zo(b);case Ho.code:throw new Ho(b);case Vo.code:throw new Vo(b);case Ko.code:throw new Ko(b);case qo.code:throw new qo(b);case Go.code:throw new Go(b);case Zo.code:throw new Zo(b);case Yo.code:throw new Yo(b);case Jo.code:throw new Jo(b);case 5e3:throw new Sr(b);case Mi.code:throw new Mi(b);default:throw g instanceof hn?g:new Rw(b)}}},{delay:({count:g,error:b})=>{var y;if(b&&b instanceof po){const C=(y=b==null?void 0:b.headers)==null?void 0:y.get("Retry-After");if(C!=null&&C.match(/\d/))return Number.parseInt(C,10)*1e3}return~~(1<<g)*s},retryCount:a,signal:c,shouldRetry:({error:g})=>Dw(g)}),{enabled:o,id:m})}}function Dw(e){return gs(e)?!1:"code"in e&&typeof e.code=="number"?e.code===-1||e.code===Di.code||e.code===Pi.code||e.code===429:e instanceof po&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function Mw(e,t=0){let n=3735928559^t,r=1103547991^t;for(let o=0;o<e.length;o++){const i=e.charCodeAt(o);n=Math.imul(n^i,2654435761),r=Math.imul(r^i,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(r^r>>>16,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n^n>>>16,3266489909),(4294967296*(2097151&r)+(n>>>0)).toString(36)}function Uw(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let s;const a=new AbortController;try{n>0&&(s=setTimeout(()=>{r&&a.abort()},n)),o(await e({signal:(a==null?void 0:a.signal)||null}))}catch(c){if(a!=null&&a.signal.aborted&&gs(c)){i(t);return}i(c)}finally{clearTimeout(s)}})()})}function Ww(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Xd=Ww();function Bw(e,t={}){const{url:n,headers:r}=Fw(e);return{async request(o){var b,y,C;const{body:i,fetchFn:s=t.fetchFn??fetch,onRequest:a=t.onRequest,onResponse:c=t.onResponse,timeout:l=t.timeout??1e4}=o,d={...t.fetchOptions??{},...o.fetchOptions??{}},{headers:m,method:w,signal:g}=d;try{const x=await Uw(async({signal:R})=>{const O={...d,body:Array.isArray(i)?xr(i.map(Y=>({jsonrpc:"2.0",id:Y.id??Xd.take(),...Y}))):xr({jsonrpc:"2.0",id:i.id??Xd.take(),...i}),headers:{...r,"Content-Type":"application/json",...m},method:w||"POST",signal:g||(l>0?R:null)},G=new Request(n,O),U=await(a==null?void 0:a(G,O))??{...O,url:n};return await s(U.url??n,U)},{errorInstance:new Jd({body:i,url:n}),timeout:l,signal:!0});c&&await c(x);let A;if((b=x.headers.get("Content-Type"))!=null&&b.startsWith("application/json"))A=await x.json();else{A=await x.text();try{A=JSON.parse(A||"{}")}catch(R){if(x.ok)throw R;A={error:A}}}if(!x.ok){if(typeof((y=A.error)==null?void 0:y.code)=="number"&&typeof((C=A.error)==null?void 0:C.message)=="string")return A;throw new po({body:i,details:xr(A.error)||x.statusText,headers:x.headers,status:x.status,url:n})}return A}catch(x){throw g!=null&&g.aborted?kr(g):gs(x)||x instanceof po||x instanceof Jd?x:new po({body:i,cause:x,url:n})}}}}function Fw(e){try{const t=new URL(e),n=(()=>{if(t.username){const r=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(r)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}function Gp({key:e,methods:t,name:n,request:r,retryCount:o=3,retryDelay:i=150,timeout:s,type:a},c){const l=Ow();return{config:{key:e,methods:t,name:n,request:r,retryCount:o,retryDelay:i,timeout:s,type:a},request:Lw(r,{methods:t,retryCount:o,retryDelay:i,uid:l}),value:c}}function Qd(e,t={}){const{key:n="fallback",name:r="Fallback",rank:o=!1,shouldThrow:i=jw,retryCount:s,retryDelay:a}=t;return({chain:c,pollingInterval:l=4e3,timeout:d,...m})=>{let w=e,g=()=>{};const b=Gp({key:n,name:r,async request({method:y,params:C}){let x;const A=async(R=0)=>{const O=w[R]({...m,chain:c,retryCount:0,timeout:d});try{const G=await O.request({method:y,params:C});return g({method:y,params:C,response:G,transport:O,status:"success"}),G}catch(G){if(g({error:G,method:y,params:C,transport:O,status:"error"}),i(G)||R===w.length-1||(x??(x=w.slice(R+1).some(U=>{const{include:F,exclude:Y}=U({chain:c}).config.methods||{};return F?F.includes(y):Y?!Y.includes(y):!0})),!x))throw G;return A(R+1)}};return A()},retryCount:s,retryDelay:a,type:"fallback"},{onResponse:y=>g=y,transports:w.map(y=>y({chain:c,retryCount:0}))});if(o){const y=typeof o=="object"?o:{};zw({chain:c,interval:y.interval??l,onTransports:C=>w=C,ping:y.ping,sampleCount:y.sampleCount,timeout:y.timeout,transports:w,weights:y.weights})}return b}}function jw(e){return!!("code"in e&&typeof e.code=="number"&&(e.code===Li.code||e.code===Sr.code||e.code===Mi.code||Yl.nodeMessage.test(e.message)||e.code===5e3))}function zw({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:o=10,timeout:i=1e3,transports:s,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,d=[],m=async()=>{const w=await Promise.all(s.map(async y=>{const C=y({chain:e,retryCount:0,timeout:i}),x=Date.now();let A,R;try{await(r?r({transport:C}):C.request({method:"net_listening"})),R=1}catch{R=0}finally{A=Date.now()}return{latency:A-x,success:R}}));d.push(w),d.length>o&&d.shift();const g=Math.max(...d.map(y=>Math.max(...y.map(({latency:C})=>C)))),b=s.map((y,C)=>{const x=d.map(U=>U[C].latency),R=1-x.reduce((U,F)=>U+F,0)/x.length/g,O=d.map(U=>U[C].success),G=O.reduce((U,F)=>U+F,0)/O.length;return G===0?[0,C]:[l*R+c*G,C]}).sort((y,C)=>C[0]-y[0]);n(b.map(([,y])=>s[y])),await qp(t),m()};m()}class Hw extends hn{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}let Vw=0;const eu=new WeakMap;function Kw(e){if(!e)return"default";const t=eu.get(e);if(t!==void 0)return t;const n=Vw++;return eu.set(e,n),n}function Zs(e,t={}){const{batch:n,fetchFn:r,fetchOptions:o,key:i="http",methods:s,name:a="HTTP JSON-RPC",onFetchRequest:c,onFetchResponse:l,retryDelay:d,raw:m}=t;return({chain:w,retryCount:g,timeout:b})=>{const{batchSize:y=1e3,wait:C=0}=typeof n=="object"?n:{},x=t.retryCount??g,A=b??t.timeout??1e4,R=e||(w==null?void 0:w.rpcUrls.default.http[0]);if(!R)throw new Hw;const O=Bw(R,{fetchFn:r,fetchOptions:o,onRequest:c,onResponse:l,timeout:A});return Gp({key:i,methods:s,name:a,async request({method:G,params:U},F){const Y={method:G,params:U},Q=F!=null&&F.signal?{signal:F.signal}:void 0,{schedule:ue}=$w({id:`${R}.${Kw(F==null?void 0:F.signal)}`,wait:C,shouldSplitBatch(ce){return ce.length>y},fn:ce=>O.request({body:ce,fetchOptions:Q}),sort:(ce,en)=>ce.id-en.id}),se=async ce=>n?ue(ce):[await O.request({body:ce,fetchOptions:Q})],[{error:ae,result:oe}]=await se(Y);if(m)return{error:ae,result:oe};if(ae)throw new Kp({body:Y,error:ae,url:R});return oe},retryCount:x,retryDelay:d,timeout:A,type:"http"},{fetchOptions:o,url:R})}}const qw="rpc.walletconnect.org";function tu(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()}const Ac=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","eip155:55931","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],Zp={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===qw}catch{n=!1}if(n){const r=new URL(e);return r.searchParams.has("projectId")||r.searchParams.set("projectId",t),r.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:_.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${_.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){var o,i,s;const r=(s=(i=(o=e.rpcUrls)==null?void 0:o.default)==null?void 0:i.http)==null?void 0:s[0];return Ac.includes(t)?tu(t,n):r||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){var w,g,b,y,C,x,A;const o=this.getChainNamespace(e),i=this.getCaipNetworkId(e),s=(b=(g=(w=e.rpcUrls)==null?void 0:w.default)==null?void 0:g.http)==null?void 0:b[0],a=this.getDefaultRpcUrl(e,i,n),c=((x=(C=(y=e==null?void 0:e.rpcUrls)==null?void 0:y.chainDefault)==null?void 0:C.http)==null?void 0:x[0])||s,l=((A=r==null?void 0:r[i])==null?void 0:A.map(R=>R.url))||[],d=[...l,...a?[a]:[]],m=[...l];return c&&!m.includes(c)&&m.push(c),{...e,chainNamespace:o,caipNetworkId:i,assets:{imageId:Aw.NetworkImageIds[e.id],imageUrl:t==null?void 0:t[e.id]},rpcUrls:{...e.rpcUrls,default:{http:d},chainDefault:{http:m}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){return e.map(o=>Zp.extendCaipNetwork(o,{customNetworkImageUrls:t,customRpcUrls:r,projectId:n}))},getViemTransport(e,t,n){var o,i,s;const r=[];return n==null||n.forEach(a=>{r.push(Zs(a.url,a.config))}),Ac.includes(e.caipNetworkId)&&r.push(Zs(tu(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(s=(i=(o=e==null?void 0:e.rpcUrls)==null?void 0:o.default)==null?void 0:i.http)==null||s.forEach(a=>{r.push(Zs(a))}),Qd(r)},extendWagmiTransports(e,t,n){if(Ac.includes(e.caipNetworkId)){const r=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return Qd([n,Zs(r)])}return n},getUnsupportedNetwork(e){return{id:e.split(":")[1],caipNetworkId:e,name:_.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){var c;const t=D.getActiveCaipNetworkId(),n=h.getAllRequestedCaipNetworks(),r=Array.from(((c=h.state.chains)==null?void 0:c.keys())||[]),o=t==null?void 0:t.split(":")[0],i=o?r.includes(o):!1,s=n==null?void 0:n.find(l=>l.caipNetworkId===t);return i&&!s&&t?this.getUnsupportedNetwork(t):s||e||(n==null?void 0:n[0])}},va={interpolate(e,t,n){if(e.length!==2||t.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=e[0]||0,o=e[1]||0,i=t[0]||0,s=t[1]||0;return n<r?i:n>o?s:(s-i)/(o-r)*(n-r)+i}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa=globalThis,Jl=sa.ShadowRoot&&(sa.ShadyCSS===void 0||sa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xl=Symbol(),nu=new WeakMap;let Yp=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Xl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Jl&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=nu.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&nu.set(n,t))}return t}toString(){return this.cssText}};const jt=e=>new Yp(typeof e=="string"?e:e+"",void 0,Xl),Re=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Yp(n,e,Xl)},Gw=(e,t)=>{if(Jl)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=sa.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},ru=Jl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return jt(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zw,defineProperty:Yw,getOwnPropertyDescriptor:Jw,getOwnPropertyNames:Xw,getOwnPropertySymbols:Qw,getPrototypeOf:e2}=Object,Jn=globalThis,iu=Jn.trustedTypes,t2=iu?iu.emptyScript:"",xc=Jn.reactiveElementPolyfillSupport,ho=(e,t)=>e,Ea={toAttribute(e,t){switch(t){case Boolean:e=e?t2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ql=(e,t)=>!Zw(e,t),ou={attribute:!0,type:String,converter:Ea,reflect:!1,useDefault:!1,hasChanged:Ql};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Jn.litPropertyMetadata??(Jn.litPropertyMetadata=new WeakMap);let Ei=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ou){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Yw(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Jw(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){const a=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ou}static _$Ei(){if(this.hasOwnProperty(ho("elementProperties")))return;const t=e2(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ho("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ho("properties"))){const n=this.properties,r=[...Xw(n),...Qw(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(ru(o))}else t!==void 0&&n.push(ru(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gw(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Ea).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var i,s;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Ea;this._$Em=o;const l=c.fromAttribute(n,a.type);this[o]=l??((s=this._$Ej)==null?void 0:s.get(o))??l,this._$Em=null}}requestUpdate(t,n,r,o=!1,i){var s;if(t!==void 0){const a=this.constructor;if(o===!1&&(i=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??Ql)(i,n)||r.useDefault&&r.reflect&&i===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??n??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o){const{wrapped:a}=s,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,s,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};Ei.elementStyles=[],Ei.shadowRootOptions={mode:"open"},Ei[ho("elementProperties")]=new Map,Ei[ho("finalized")]=new Map,xc==null||xc({ReactiveElement:Ei}),(Jn.reactiveElementVersions??(Jn.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=globalThis,su=e=>e,_a=fo.trustedTypes,au=_a?_a.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jp="$lit$",Kn=`lit$${Math.random().toFixed(9).slice(2)}$`,Xp="?"+Kn,n2=`<${Xp}>`,Or=document,Xo=()=>Or.createComment(""),Qo=e=>e===null||typeof e!="object"&&typeof e!="function",ed=Array.isArray,r2=e=>ed(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Sc=`[ 	
\f\r]`,so=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cu=/-->/g,lu=/>/g,gr=RegExp(`>|${Sc}(?:([^\\s"'>=/]+)(${Sc}*=${Sc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),du=/'/g,uu=/"/g,Qp=/^(?:script|style|textarea|title)$/i,eh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),u=eh(1),ee=eh(2),Pr=Symbol.for("lit-noChange"),Me=Symbol.for("lit-nothing"),pu=new WeakMap,vr=Or.createTreeWalker(Or,129);function th(e,t){if(!ed(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return au!==void 0?au.createHTML(t):t}const i2=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=so;for(let a=0;a<n;a++){const c=e[a];let l,d,m=-1,w=0;for(;w<c.length&&(s.lastIndex=w,d=s.exec(c),d!==null);)w=s.lastIndex,s===so?d[1]==="!--"?s=cu:d[1]!==void 0?s=lu:d[2]!==void 0?(Qp.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=gr):d[3]!==void 0&&(s=gr):s===gr?d[0]===">"?(s=o??so,m=-1):d[1]===void 0?m=-2:(m=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?gr:d[3]==='"'?uu:du):s===uu||s===du?s=gr:s===cu||s===lu?s=so:(s=gr,o=void 0);const g=s===gr&&e[a+1].startsWith("/>")?" ":"";i+=s===so?c+n2:m>=0?(r.push(l),c.slice(0,m)+Jp+c.slice(m)+Kn+g):c+Kn+(m===-2?a:g)}return[th(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class es{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,c=this.parts,[l,d]=i2(t,n);if(this.el=es.createElement(l,r),vr.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=vr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(Jp)){const w=d[s++],g=o.getAttribute(m).split(Kn),b=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:b[2],strings:g,ctor:b[1]==="."?s2:b[1]==="?"?a2:b[1]==="@"?c2:Ja}),o.removeAttribute(m)}else m.startsWith(Kn)&&(c.push({type:6,index:i}),o.removeAttribute(m));if(Qp.test(o.tagName)){const m=o.textContent.split(Kn),w=m.length-1;if(w>0){o.textContent=_a?_a.emptyScript:"";for(let g=0;g<w;g++)o.append(m[g],Xo()),vr.nextNode(),c.push({type:2,index:++i});o.append(m[w],Xo())}}}else if(o.nodeType===8)if(o.data===Xp)c.push({type:2,index:i});else{let m=-1;for(;(m=o.data.indexOf(Kn,m+1))!==-1;)c.push({type:7,index:i}),m+=Kn.length-1}i++}}static createElement(t,n){const r=Or.createElement("template");return r.innerHTML=t,r}}function Ui(e,t,n=e,r){var s,a;if(t===Pr)return t;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=Qo(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Ui(e,o._$AS(e,t.values),o,r)),t}class o2{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Or).importNode(n,!0);vr.currentNode=o;let i=vr.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new ws(i,i.nextSibling,this,t):c.type===1?l=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(l=new l2(i,this,t)),this._$AV.push(l),c=r[++a]}s!==(c==null?void 0:c.index)&&(i=vr.nextNode(),s++)}return vr.currentNode=Or,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class ws{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Me,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ui(this,t,n),Qo(t)?t===Me||t==null||t===""?(this._$AH!==Me&&this._$AR(),this._$AH=Me):t!==this._$AH&&t!==Pr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):r2(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Me&&Qo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Or.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=es.createElement(th(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new o2(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=pu.get(t.strings);return n===void 0&&pu.set(t.strings,n=new es(t)),n}k(t){ed(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new ws(this.O(Xo()),this.O(Xo()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const o=su(t).nextSibling;su(t).remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Ja{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Me,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Me}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=Ui(this,t,n,0),s=!Qo(t)||t!==this._$AH&&t!==Pr,s&&(this._$AH=t);else{const a=t;let c,l;for(t=i[0],c=0;c<i.length-1;c++)l=Ui(this,a[r+c],n,c),l===Pr&&(l=this._$AH[c]),s||(s=!Qo(l)||l!==this._$AH[c]),l===Me?t=Me:t!==Me&&(t+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(t)}j(t){t===Me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class s2 extends Ja{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Me?void 0:t}}class a2 extends Ja{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Me)}}class c2 extends Ja{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Ui(this,t,n,0)??Me)===Pr)return;const r=this._$AH,o=t===Me&&r!==Me||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Me&&(r===Me||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class l2{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ui(this,t)}}const Tc=fo.litHtmlPolyfillSupport;Tc==null||Tc(es,ws),(fo.litHtmlVersions??(fo.litHtmlVersions=[])).push("3.3.3");const d2=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new ws(t.insertBefore(Xo(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=globalThis;let k=class extends Ei{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=d2(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Pr}};var pp;k._$litElement$=!0,k.finalized=!0,(pp=Tr.litElementHydrateSupport)==null||pp.call(Tr,{LitElement:k});const Nc=Tr.litElementPolyfillSupport;Nc==null||Nc({LitElement:k});(Tr.litElementVersions??(Tr.litElementVersions=[])).push("4.2.2");const u2={black:"#202020",white:"#FFFFFF",white010:"rgba(255, 255, 255, 0.1)",accent010:"rgba(9, 136, 240, 0.1)",accent020:"rgba(9, 136, 240, 0.2)",accent030:"rgba(9, 136, 240, 0.3)",accent040:"rgba(9, 136, 240, 0.4)",accent050:"rgba(9, 136, 240, 0.5)",accent060:"rgba(9, 136, 240, 0.6)",accent070:"rgba(9, 136, 240, 0.7)",accent080:"rgba(9, 136, 240, 0.8)",accent090:"rgba(9, 136, 240, 0.9)",accent100:"rgba(9, 136, 240, 1.0)",accentSecondary010:"rgba(199, 185, 148, 0.1)",accentSecondary020:"rgba(199, 185, 148, 0.2)",accentSecondary030:"rgba(199, 185, 148, 0.3)",accentSecondary040:"rgba(199, 185, 148, 0.4)",accentSecondary050:"rgba(199, 185, 148, 0.5)",accentSecondary060:"rgba(199, 185, 148, 0.6)",accentSecondary070:"rgba(199, 185, 148, 0.7)",accentSecondary080:"rgba(199, 185, 148, 0.8)",accentSecondary090:"rgba(199, 185, 148, 0.9)",accentSecondary100:"rgba(199, 185, 148, 1.0)",productWalletKit:"#FFB800",productAppKit:"#FF573B",productCloud:"#0988F0",productDocumentation:"#008847",neutrals050:"#F6F6F6",neutrals100:"#F3F3F3",neutrals200:"#E9E9E9",neutrals300:"#D0D0D0",neutrals400:"#BBB",neutrals500:"#9A9A9A",neutrals600:"#6C6C6C",neutrals700:"#4F4F4F",neutrals800:"#363636",neutrals900:"#2A2A2A",neutrals1000:"#252525",semanticSuccess010:"rgba(48, 164, 107, 0.1)",semanticSuccess020:"rgba(48, 164, 107, 0.2)",semanticSuccess030:"rgba(48, 164, 107, 0.3)",semanticSuccess040:"rgba(48, 164, 107, 0.4)",semanticSuccess050:"rgba(48, 164, 107, 0.5)",semanticSuccess060:"rgba(48, 164, 107, 0.6)",semanticSuccess070:"rgba(48, 164, 107, 0.7)",semanticSuccess080:"rgba(48, 164, 107, 0.8)",semanticSuccess090:"rgba(48, 164, 107, 0.9)",semanticSuccess100:"rgba(48, 164, 107, 1.0)",semanticError010:"rgba(223, 74, 52, 0.1)",semanticError020:"rgba(223, 74, 52, 0.2)",semanticError030:"rgba(223, 74, 52, 0.3)",semanticError040:"rgba(223, 74, 52, 0.4)",semanticError050:"rgba(223, 74, 52, 0.5)",semanticError060:"rgba(223, 74, 52, 0.6)",semanticError070:"rgba(223, 74, 52, 0.7)",semanticError080:"rgba(223, 74, 52, 0.8)",semanticError090:"rgba(223, 74, 52, 0.9)",semanticError100:"rgba(223, 74, 52, 1.0)",semanticWarning010:"rgba(243, 161, 63, 0.1)",semanticWarning020:"rgba(243, 161, 63, 0.2)",semanticWarning030:"rgba(243, 161, 63, 0.3)",semanticWarning040:"rgba(243, 161, 63, 0.4)",semanticWarning050:"rgba(243, 161, 63, 0.5)",semanticWarning060:"rgba(243, 161, 63, 0.6)",semanticWarning070:"rgba(243, 161, 63, 0.7)",semanticWarning080:"rgba(243, 161, 63, 0.8)",semanticWarning090:"rgba(243, 161, 63, 0.9)",semanticWarning100:"rgba(243, 161, 63, 1.0)"},Aa={core:{backgroundAccentPrimary:"#0988F0",backgroundAccentCertified:"#C7B994",backgroundWalletKit:"#FFB800",backgroundAppKit:"#FF573B",backgroundCloud:"#0988F0",backgroundDocumentation:"#008847",backgroundSuccess:"rgba(48, 164, 107, 0.20)",backgroundError:"rgba(223, 74, 52, 0.20)",backgroundWarning:"rgba(243, 161, 63, 0.20)",textAccentPrimary:"#0988F0",textAccentCertified:"#C7B994",textWalletKit:"#FFB800",textAppKit:"#FF573B",textCloud:"#0988F0",textDocumentation:"#008847",textSuccess:"#30A46B",textError:"#DF4A34",textWarning:"#F3A13F",borderAccentPrimary:"#0988F0",borderSecondary:"#C7B994",borderSuccess:"#30A46B",borderError:"#DF4A34",borderWarning:"#F3A13F",foregroundAccent010:"rgba(9, 136, 240, 0.1)",foregroundAccent020:"rgba(9, 136, 240, 0.2)",foregroundAccent040:"rgba(9, 136, 240, 0.4)",foregroundAccent060:"rgba(9, 136, 240, 0.6)",foregroundSecondary020:"rgba(199, 185, 148, 0.2)",foregroundSecondary040:"rgba(199, 185, 148, 0.4)",foregroundSecondary060:"rgba(199, 185, 148, 0.6)",iconAccentPrimary:"#0988F0",iconAccentCertified:"#C7B994",iconSuccess:"#30A46B",iconError:"#DF4A34",iconWarning:"#F3A13F",glass010:"rgba(255, 255, 255, 0.1)",zIndex:"9999"},dark:{overlay:"rgba(0, 0, 0, 0.50)",backgroundPrimary:"#202020",backgroundInvert:"#FFFFFF",textPrimary:"#FFFFFF",textSecondary:"#9A9A9A",textTertiary:"#BBBBBB",textInvert:"#202020",borderPrimary:"#2A2A2A",borderPrimaryDark:"#363636",borderSecondary:"#4F4F4F",foregroundPrimary:"#252525",foregroundSecondary:"#2A2A2A",foregroundTertiary:"#363636",iconDefault:"#9A9A9A",iconInverse:"#FFFFFF"},light:{overlay:"rgba(230 , 230, 230, 0.5)",backgroundPrimary:"#FFFFFF",borderPrimaryDark:"#E9E9E9",backgroundInvert:"#202020",textPrimary:"#202020",textSecondary:"#9A9A9A",textTertiary:"#6C6C6C",textInvert:"#FFFFFF",borderPrimary:"#E9E9E9",borderSecondary:"#D0D0D0",foregroundPrimary:"#F3F3F3",foregroundSecondary:"#E9E9E9",foregroundTertiary:"#D0D0D0",iconDefault:"#9A9A9A",iconInverse:"#202020"}},p2={1:"4px",2:"8px",10:"10px",3:"12px",4:"16px",6:"24px",5:"20px",8:"32px",16:"64px",20:"80px",32:"128px",64:"256px",128:"512px",round:"9999px"},h2={0:"0px","01":"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",20:"80px",32:"128px",64:"256px"},f2={regular:"KHTeka",mono:"KHTekaMono"},m2={regular:"400",medium:"500"},g2={h1:"50px",h2:"44px",h3:"38px",h4:"32px",h5:"26px",h6:"20px",large:"16px",medium:"14px",small:"12px"},w2={"h1-regular-mono":{lineHeight:"50px",letterSpacing:"-3px"},"h1-regular":{lineHeight:"50px",letterSpacing:"-1px"},"h1-medium":{lineHeight:"50px",letterSpacing:"-0.84px"},"h2-regular-mono":{lineHeight:"44px",letterSpacing:"-2.64px"},"h2-regular":{lineHeight:"44px",letterSpacing:"-0.88px"},"h2-medium":{lineHeight:"44px",letterSpacing:"-0.88px"},"h3-regular-mono":{lineHeight:"38px",letterSpacing:"-2.28px"},"h3-regular":{lineHeight:"38px",letterSpacing:"-0.76px"},"h3-medium":{lineHeight:"38px",letterSpacing:"-0.76px"},"h4-regular-mono":{lineHeight:"32px",letterSpacing:"-1.92px"},"h4-regular":{lineHeight:"32px",letterSpacing:"-0.32px"},"h4-medium":{lineHeight:"32px",letterSpacing:"-0.32px"},"h5-regular-mono":{lineHeight:"26px",letterSpacing:"-1.56px"},"h5-regular":{lineHeight:"26px",letterSpacing:"-0.26px"},"h5-medium":{lineHeight:"26px",letterSpacing:"-0.26px"},"h6-regular-mono":{lineHeight:"20px",letterSpacing:"-1.2px"},"h6-regular":{lineHeight:"20px",letterSpacing:"-0.6px"},"h6-medium":{lineHeight:"20px",letterSpacing:"-0.6px"},"lg-regular-mono":{lineHeight:"16px",letterSpacing:"-0.96px"},"lg-regular":{lineHeight:"18px",letterSpacing:"-0.16px"},"lg-medium":{lineHeight:"18px",letterSpacing:"-0.16px"},"md-regular-mono":{lineHeight:"14px",letterSpacing:"-0.84px"},"md-regular":{lineHeight:"16px",letterSpacing:"-0.14px"},"md-medium":{lineHeight:"16px",letterSpacing:"-0.14px"},"sm-regular-mono":{lineHeight:"12px",letterSpacing:"-0.72px"},"sm-regular":{lineHeight:"14px",letterSpacing:"-0.12px"},"sm-medium":{lineHeight:"14px",letterSpacing:"-0.12px"}},b2={"ease-out-power-2":"cubic-bezier(0.23, 0.09, 0.08, 1.13)","ease-out-power-1":"cubic-bezier(0.12, 0.04, 0.2, 1.06)","ease-in-power-2":"cubic-bezier(0.92, -0.13, 0.77, 0.91)","ease-in-power-1":"cubic-bezier(0.88, -0.06, 0.8, 0.96)","ease-inout-power-2":"cubic-bezier(0.77, 0.09, 0.23, 1.13)","ease-inout-power-1":"cubic-bezier(0.88, 0.04, 0.12, 1.06)"},y2={xl:"400ms",lg:"200ms",md:"125ms",sm:"75ms"},Cl={colors:u2,fontFamily:f2,fontWeight:m2,textSize:g2,typography:w2,tokens:{core:Aa.core,theme:Aa.dark},borderRadius:p2,spacing:h2,durations:y2,easings:b2},hu="--apkt";function Ys(e){if(!e)return{};const t={};return t["font-family"]=e["--apkt-font-family"]??e["--w3m-font-family"]??"KHTeka",t.accent=e["--apkt-accent"]??e["--w3m-accent"]??"#0988F0",t["color-mix"]=e["--apkt-color-mix"]??e["--w3m-color-mix"]??"#000",t["color-mix-strength"]=e["--apkt-color-mix-strength"]??e["--w3m-color-mix-strength"]??0,t["font-size-master"]=e["--apkt-font-size-master"]??e["--w3m-font-size-master"]??"10px",t["border-radius-master"]=e["--apkt-border-radius-master"]??e["--w3m-border-radius-master"]??"4px",e["--apkt-z-index"]!==void 0?t["z-index"]=e["--apkt-z-index"]:e["--w3m-z-index"]!==void 0&&(t["z-index"]=e["--w3m-z-index"]),t}const Nn={createCSSVariables(e){const t={},n={};function r(i,s,a=""){for(const[c,l]of Object.entries(i)){const d=a?`${a}-${c}`:c;l&&typeof l=="object"&&Object.keys(l).length?(s[c]={},r(l,s[c],d)):typeof l=="string"&&(s[c]=`${hu}-${d}`)}}function o(i,s){for(const[a,c]of Object.entries(i))c&&typeof c=="object"?(s[a]={},o(c,s[a])):typeof c=="string"&&(s[a]=`var(${c})`)}return r(e,t),o(t,n),{cssVariables:t,cssVariablesVarPrefix:n}},assignCSSVariables(e,t){const n={};function r(o,i,s){for(const[a,c]of Object.entries(o)){const l=s?`${s}-${a}`:a,d=i[a];c&&typeof c=="object"?r(c,d,l):typeof d=="string"&&(n[`${hu}-${l}`]=d)}}return r(e,t),n},createRootStyles(e,t){const n={...Cl,tokens:{...Cl.tokens,theme:e==="light"?Aa.light:Aa.dark}},{cssVariables:r}=Nn.createCSSVariables(n),o=Nn.assignCSSVariables(r,n),i=Nn.generateW3MVariables(t),s=Nn.generateW3MOverrides(t),a=Nn.generateScaledVariables(t),c=Nn.generateBaseVariables(o),l={...o,...c,...i,...s,...a},d=Nn.applyColorMixToVariables(t,l),m={...l,...d};return`:root {${Object.entries(m).map(([g,b])=>`${g}:${b.replace("/[:;{}</>]/g","")};`).join("")}}`},generateW3MVariables(e){if(!e)return{};const t=Ys(e),n={};return n["--w3m-font-family"]=t["font-family"],n["--w3m-accent"]=t.accent,n["--w3m-color-mix"]=t["color-mix"],n["--w3m-color-mix-strength"]=`${t["color-mix-strength"]}%`,n["--w3m-font-size-master"]=t["font-size-master"],n["--w3m-border-radius-master"]=t["border-radius-master"],n},generateW3MOverrides(e){if(!e)return{};const t=Ys(e),n={};if(e["--apkt-accent"]||e["--w3m-accent"]){const r=t.accent;n["--apkt-tokens-core-iconAccentPrimary"]=r,n["--apkt-tokens-core-borderAccentPrimary"]=r,n["--apkt-tokens-core-textAccentPrimary"]=r,n["--apkt-tokens-core-backgroundAccentPrimary"]=r}return(e["--apkt-font-family"]||e["--w3m-font-family"])&&(n["--apkt-fontFamily-regular"]=t["font-family"]),t["z-index"]!==void 0&&(n["--apkt-tokens-core-zIndex"]=`${t["z-index"]}`),n},generateScaledVariables(e){if(!e)return{};const t=Ys(e),n={};if(e["--apkt-font-size-master"]||e["--w3m-font-size-master"]){const r=parseFloat(t["font-size-master"].replace("px",""));n["--apkt-textSize-h1"]=`${Number(r)*5}px`,n["--apkt-textSize-h2"]=`${Number(r)*4.4}px`,n["--apkt-textSize-h3"]=`${Number(r)*3.8}px`,n["--apkt-textSize-h4"]=`${Number(r)*3.2}px`,n["--apkt-textSize-h5"]=`${Number(r)*2.6}px`,n["--apkt-textSize-h6"]=`${Number(r)*2}px`,n["--apkt-textSize-large"]=`${Number(r)*1.6}px`,n["--apkt-textSize-medium"]=`${Number(r)*1.4}px`,n["--apkt-textSize-small"]=`${Number(r)*1.2}px`}if(e["--apkt-border-radius-master"]||e["--w3m-border-radius-master"]){const r=parseFloat(t["border-radius-master"].replace("px",""));n["--apkt-borderRadius-1"]=`${Number(r)}px`,n["--apkt-borderRadius-2"]=`${Number(r)*2}px`,n["--apkt-borderRadius-3"]=`${Number(r)*3}px`,n["--apkt-borderRadius-4"]=`${Number(r)*4}px`,n["--apkt-borderRadius-5"]=`${Number(r)*5}px`,n["--apkt-borderRadius-6"]=`${Number(r)*6}px`,n["--apkt-borderRadius-8"]=`${Number(r)*8}px`,n["--apkt-borderRadius-16"]=`${Number(r)*16}px`,n["--apkt-borderRadius-20"]=`${Number(r)*20}px`,n["--apkt-borderRadius-32"]=`${Number(r)*32}px`,n["--apkt-borderRadius-64"]=`${Number(r)*64}px`,n["--apkt-borderRadius-128"]=`${Number(r)*128}px`}return n},generateColorMixCSS(e,t){if(!(e!=null&&e["--w3m-color-mix"])||!e["--w3m-color-mix-strength"])return"";const n=e["--w3m-color-mix"],r=e["--w3m-color-mix-strength"];if(!r||r===0)return"";const o=Object.keys(t||{}).filter(s=>{const a=s.includes("-tokens-core-background")||s.includes("-tokens-core-text")||s.includes("-tokens-core-border")||s.includes("-tokens-core-foreground")||s.includes("-tokens-core-icon")||s.includes("-tokens-theme-background")||s.includes("-tokens-theme-text")||s.includes("-tokens-theme-border")||s.includes("-tokens-theme-foreground")||s.includes("-tokens-theme-icon"),c=s.includes("-borderRadius-")||s.includes("-spacing-")||s.includes("-textSize-")||s.includes("-fontFamily-")||s.includes("-fontWeight-")||s.includes("-typography-")||s.includes("-duration-")||s.includes("-ease-")||s.includes("-path-")||s.includes("-width-")||s.includes("-height-")||s.includes("-visual-size-")||s.includes("-modal-width")||s.includes("-cover");return a&&!c});return o.length===0?"":` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${o.map(s=>{const a=(t==null?void 0:t[s])||"";return a.includes("color-mix")||a.startsWith("#")||a.startsWith("rgb")?`${s}: color-mix(in srgb, ${n} ${r}%, ${a});`:`${s}: color-mix(in srgb, ${n} ${r}%, var(${s}-base, ${a}));`}).join("")}
      }
    }`},generateBaseVariables(e){const t={},n=e["--apkt-tokens-theme-backgroundPrimary"];n&&(t["--apkt-tokens-theme-backgroundPrimary-base"]=n);const r=e["--apkt-tokens-core-backgroundAccentPrimary"];return r&&(t["--apkt-tokens-core-backgroundAccentPrimary-base"]=r),t},applyColorMixToVariables(e,t){const n={};t!=null&&t["--apkt-tokens-theme-backgroundPrimary"]&&(n["--apkt-tokens-theme-backgroundPrimary"]="var(--apkt-tokens-theme-backgroundPrimary-base)"),t!=null&&t["--apkt-tokens-core-backgroundAccentPrimary"]&&(n["--apkt-tokens-core-backgroundAccentPrimary"]="var(--apkt-tokens-core-backgroundAccentPrimary-base)");const r=Ys(e),o=r["color-mix"],i=r["color-mix-strength"];if(!i||i===0)return n;const s=Object.keys(t||{}).filter(a=>{const c=a.includes("-tokens-core-background")||a.includes("-tokens-core-text")||a.includes("-tokens-core-border")||a.includes("-tokens-core-foreground")||a.includes("-tokens-core-icon")||a.includes("-tokens-theme-background")||a.includes("-tokens-theme-text")||a.includes("-tokens-theme-border")||a.includes("-tokens-theme-foreground")||a.includes("-tokens-theme-icon")||a.includes("-tokens-theme-overlay"),l=a.includes("-borderRadius-")||a.includes("-spacing-")||a.includes("-textSize-")||a.includes("-fontFamily-")||a.includes("-fontWeight-")||a.includes("-typography-")||a.includes("-duration-")||a.includes("-ease-")||a.includes("-path-")||a.includes("-width-")||a.includes("-height-")||a.includes("-visual-size-")||a.includes("-modal-width")||a.includes("-cover");return c&&!l});return s.length===0||s.forEach(a=>{const c=(t==null?void 0:t[a])||"";a.endsWith("-base")||(a==="--apkt-tokens-theme-backgroundPrimary"||a==="--apkt-tokens-core-backgroundAccentPrimary"?n[a]=`color-mix(in srgb, ${o} ${i}%, var(${a}-base))`:c.includes("color-mix")||c.startsWith("#")||c.startsWith("rgb")?n[a]=`color-mix(in srgb, ${o} ${i}%, ${c})`:n[a]=`color-mix(in srgb, ${o} ${i}%, var(${a}-base, ${c}))`)}),n}},{cssVariablesVarPrefix:Oe}=Nn.createCSSVariables(Cl);function j(e,...t){return Re(e,...t.map(n=>jt(typeof n=="function"?n(Oe):n)))}let br,Er,an,_t,xa;const Tn={"KHTeka-500-woff2":"https://fonts.reown.com/KHTeka-Medium.woff2","KHTeka-400-woff2":"https://fonts.reown.com/KHTeka-Regular.woff2","KHTeka-300-woff2":"https://fonts.reown.com/KHTeka-Light.woff2","KHTekaMono-400-woff2":"https://fonts.reown.com/KHTekaMono-Regular.woff2","KHTeka-500-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTeka-400-woff":"https://fonts.reown.com/KHTeka-Regular.woff","KHTeka-300-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTekaMono-400-woff":"https://fonts.reown.com/KHTekaMono-Regular.woff"};function Sa(e,t="dark"){br&&document.head.removeChild(br),br=document.createElement("style"),br.textContent=Nn.createRootStyles(t,e),document.head.appendChild(br)}function Xy(e,t="dark"){if(xa=e,Er=document.createElement("style"),an=document.createElement("style"),_t=document.createElement("style"),Er.textContent=Ti(e).core.cssText,an.textContent=Ti(e).dark.cssText,_t.textContent=Ti(e).light.cssText,document.head.appendChild(Er),document.head.appendChild(an),document.head.appendChild(_t),Sa(e,t),fu(t),!((e==null?void 0:e["--apkt-font-family"])||(e==null?void 0:e["--w3m-font-family"])))for(const[r,o]of Object.entries(Tn)){const i=document.createElement("link");i.rel="preload",i.href=o,i.as="font",i.type=r.includes("woff2")?"font/woff2":"font/woff",i.crossOrigin="anonymous",document.head.appendChild(i)}fu(t)}function fu(e="dark"){an&&_t&&br&&(e==="light"?(Sa(xa,e),an.removeAttribute("media"),_t.media="enabled"):(Sa(xa,e),_t.removeAttribute("media"),an.media="enabled"))}function Qy(e){var t,n,r;if(xa=e,Er&&an&&_t){Er.textContent=Ti(e).core.cssText,an.textContent=Ti(e).dark.cssText,_t.textContent=Ti(e).light.cssText;const o=(e==null?void 0:e["--apkt-font-family"])||(e==null?void 0:e["--w3m-font-family"]);o&&(Er.textContent=(t=Er.textContent)==null?void 0:t.replace("font-family: KHTeka",`font-family: ${o}`),an.textContent=(n=an.textContent)==null?void 0:n.replace("font-family: KHTeka",`font-family: ${o}`),_t.textContent=(r=_t.textContent)==null?void 0:r.replace("font-family: KHTeka",`font-family: ${o}`))}if(br){const o=(_t==null?void 0:_t.media)==="enabled"?"light":"dark";Sa(e,o)}}function Ti(e){const t=!!(e!=null&&e["--apkt-font-family"]||e!=null&&e["--w3m-font-family"]);return{core:Re`
      ${t?Re``:Re`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${jt(Tn["KHTeka-400-woff2"])}) format('woff2'),
                url(${jt(Tn["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${jt(Tn["KHTeka-300-woff2"])}) format('woff2'),
                url(${jt(Tn["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${jt(Tn["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${jt(Tn["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${jt(Tn["KHTeka-400-woff2"])}) format('woff2'),
                url(${jt(Tn["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,dark:Re`
      :root {
      }
    `,light:Re`
      :root {
      }
    `}}const ie=Re`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`,Te=Re`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Js=".",Ie={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--apkt-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--apkt-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},formatCurrency(e=0,t={}){const n=Number(e);return isNaN(n)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2,...t}).format(n)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(n),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,c=[];for(let l=0;l<5;l+=1){const d=this.tintColor(r,.15*l);c.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,o=t&255;return[n,r,o]},tintColor(e,t){const[n,r,o]=e,i=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,n){return e.toString().length>=t?Number(e).toFixed(n):e},cssDurationToNumber(e){return e.endsWith("s")?Number(e.replace("s",""))*1e3:e.endsWith("ms")?Number(e.replace("ms","")):0},maskInput({value:e,decimals:t,integers:n}){if(e=e.replace(",","."),e===Js)return`0${Js}`;const[r="",o]=e.split(Js).map(d=>d.replace(/[^0-9]/gu,"")),i=n?r.substring(0,n):r,s=i.length===2?String(Number(i)):i,a=typeof t=="number"?o==null?void 0:o.substring(0,t):o,c=typeof t!="number"||t>0;return(typeof a=="string"&&c?[s,a].join(Js):s)??""},capitalize(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}},C2=3,Xs=.1,v2=["receive","deposit","borrow","claim"],E2=["withdraw","repay","burn"],_i={getTransactionGroupTitle(e,t){const n=sl.getYear(),r=sl.getMonthNameByIndex(t);return e===n?r:`${r} ${e}`},getTransactionImages(e){const[t]=e;return(e==null?void 0:e.length)>1?e.map(r=>this.getTransactionImage(r)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:_i.getTransactionTransferTokenType(e),url:_i.getTransactionImageURL(e)}},getTransactionImageURL(e){var o,i,s,a,c;let t;const n=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);return e&&n?t=(s=(i=(o=e==null?void 0:e.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:e&&r&&(t=(c=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),t},getTransactionTransferTokenType(e){if(e!=null&&e.fungible_info)return"FUNGIBLE";if(e!=null&&e.nft_info)return"NFT"},getTransactionDescriptions(e,t){var w;const n=(w=e==null?void 0:e.metadata)==null?void 0:w.operationType,r=t||(e==null?void 0:e.transfers),o=r&&r.length>0,i=r&&r.length>1,s=o&&r.every(g=>!!(g!=null&&g.fungible_info)),[a,c]=r||[];let l=this.getTransferDescription(a),d=this.getTransferDescription(c);if(!o)return(n==="send"||n==="receive")&&s?(l=Ie.getTruncateString({string:e==null?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),d=Ie.getTruncateString({string:e==null?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,d]):[e.metadata.status];if(i)return r==null?void 0:r.map(g=>this.getTransferDescription(g));let m="";return v2.includes(n)?m="+":E2.includes(n)&&(m="-"),l=m.concat(l),[l]},getTransferDescription(e){var n;let t="";return e&&(e!=null&&e.nft_info?t=((n=e==null?void 0:e.nft_info)==null?void 0:n.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var r;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(r=e==null?void 0:e.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},mergeTransfers(e){if((e==null?void 0:e.length)<=1)return e;const n=this.filterGasFeeTransfers(e).reduce((o,i)=>{var c;const s=(c=i==null?void 0:i.fungible_info)==null?void 0:c.name,a=o.find(({fungible_info:l,direction:d})=>s&&s===(l==null?void 0:l.name)&&d===i.direction);if(a){const l=Number(a.quantity.numeric)+Number(i.quantity.numeric);a.quantity.numeric=l.toString(),a.value=(a.value||0)+(i.value||0)}else o.push(i);return o},[]);let r=n;return n.length>2&&(r=n.sort((o,i)=>(i.value||0)-(o.value||0)).slice(0,2)),r=r.sort((o,i)=>o.direction==="out"&&i.direction==="in"?-1:o.direction==="in"&&i.direction==="out"?1:0),r},filterGasFeeTransfers(e){const t=e==null?void 0:e.reduce((r,o)=>{var s;const i=(s=o==null?void 0:o.fungible_info)==null?void 0:s.name;return i&&(r[i]||(r[i]=[]),r[i].push(o)),r},{}),n=[];return Object.values(t??{}).forEach(r=>{if(r.length===1){const o=r[0];o&&n.push(o)}else{const o=r.filter(s=>s.direction==="in"),i=r.filter(s=>s.direction==="out");if(o.length===1&&i.length===1){const s=o[0],a=i[0];let c=!1;if(s&&a){const l=Number(s.quantity.numeric),d=Number(a.quantity.numeric);d<l*Xs?(n.push(s),c=!0):l<d*Xs&&(n.push(a),c=!0)}c||n.push(...r)}else{const s=this.filterGasFeesFromTokenGroup(r);n.push(...s)}}}),e==null||e.forEach(r=>{var o;(o=r==null?void 0:r.fungible_info)!=null&&o.name||n.push(r)}),n},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;const t=e==null?void 0:e.map(a=>Number(a.quantity.numeric)),n=Math.max(...t),r=Math.min(...t),o=.01;if(r<n*o)return e==null?void 0:e.filter(c=>Number(c.quantity.numeric)>=n*o);const i=e==null?void 0:e.filter(a=>a.direction==="in"),s=e==null?void 0:e.filter(a=>a.direction==="out");if(i.length===1&&s.length===1){const a=i[0],c=s[0];if(a&&c){const l=Number(a.quantity.numeric),d=Number(c.quantity.numeric);if(d<l*Xs)return[a];if(l<d*Xs)return[c]}}return e},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(C2):null}};function _2(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function A2(e,t){return customElements.get(e)||customElements.define(e,t),t}function I(e){return function(n){return typeof n=="function"?A2(e,n):_2(e,n)}}function x2(e){if(e.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let l=0;l<t.length;l++)t[l]=255;for(let l=0;l<e.length;l++){const d=e.charAt(l),m=d.charCodeAt(0);if(t[m]!==255)throw new TypeError(d+" is ambiguous");t[m]=l}const n=e.length,r=e.charAt(0),o=Math.log(n)/Math.log(256),i=Math.log(256)/Math.log(n);function s(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let d=0,m=0,w=0;const g=l.length;for(;w!==g&&l[w]===0;)w++,d++;const b=(g-w)*i+1>>>0,y=new Uint8Array(b);for(;w!==g;){let A=l[w],R=0;for(let O=b-1;(A!==0||R<m)&&O!==-1;O--,R++)A+=256*y[O]>>>0,y[O]=A%n>>>0,A=A/n>>>0;if(A!==0)throw new Error("Non-zero carry");m=R,w++}let C=b-m;for(;C!==b&&y[C]===0;)C++;let x=r.repeat(d);for(;C<b;++C)x+=e.charAt(y[C]);return x}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let d=0,m=0,w=0;for(;l[d]===r;)m++,d++;const g=(l.length-d)*o+1>>>0,b=new Uint8Array(g);for(;d<l.length;){const A=l.charCodeAt(d);if(A>255)return;let R=t[A];if(R===255)return;let O=0;for(let G=g-1;(R!==0||O<w)&&G!==-1;G--,O++)R+=n*b[G]>>>0,b[G]=R%256>>>0,R=R/256>>>0;if(R!==0)throw new Error("Non-zero carry");w=O,d++}let y=g-w;for(;y!==g&&b[y]===0;)y++;const C=new Uint8Array(m+(g-y));let x=m;for(;y!==g;)C[x++]=b[y++];return C}function c(l){const d=a(l);if(d)return d;throw new Error("Non-base"+n+" character")}return{encode:s,decodeUnsafe:a,decode:c}}var S2="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";const e4=x2(S2);let Ue;function t4(e){e&&(Ue=e)}function n4(){if(!Ue)throw new Error('Please call "createAppKit" before using "useAppKit" hook');async function e(n){return Ue==null?void 0:Ue.open(n)}async function t(){await(Ue==null?void 0:Ue.close())}return{open:e,close:t}}function r4(){if(!Ue)throw new Error('Please call "createAppKit" before using "useAppKitState" hook');const[e,t]=uc.useState({...Ue.getState(),initialized:!1}),[n,r]=uc.useState(Ue.getRemoteFeatures());return uc.useEffect(()=>{if(Ue){t({...Ue.getState()}),r(Ue.getRemoteFeatures());const o=Ue==null?void 0:Ue.subscribeState(s=>{t({...s})}),i=Ue==null?void 0:Ue.subscribeRemoteFeatures(s=>{r(s)});return()=>{o==null||o(),i==null||i()}}return()=>null},[]),{...e,...n??{}}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T2=new Set(["children","localName","ref","style","className"]),mu=new WeakMap,gu=(e,t,n,r,o)=>{const i=o==null?void 0:o[t];i===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((s,a,c)=>{let l=mu.get(s);l===void 0&&mu.set(s,l=new Map);let d=l.get(a);c!==void 0?d===void 0?(l.set(a,d={handleEvent:c}),s.addEventListener(a,d)):d.handleEvent=c:d!==void 0&&(l.delete(a),s.removeEventListener(a,d))})(e,i,n)},Xa=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),s=e.forwardRef((a,c)=>{const l=e.useRef(new Map),d=e.useRef(null),m={},w={};for(const[g,b]of Object.entries(a))T2.has(g)?m[g==="className"?"class":g]=b:i.has(g)||g in n.prototype?w[g]=b:m[g]=b;return e.useLayoutEffect(()=>{if(d.current===null)return;const g=new Map;for(const b in w)gu(d.current,b,a[b],l.current.get(b),r),l.current.delete(b),g.set(b,a[b]);for(const[b,y]of l.current)gu(d.current,b,void 0,y,r);l.current=g}),e.useLayoutEffect(()=>{var g;(g=d.current)==null||g.removeAttribute("defer-hydration")},[]),m.suppressHydrationWarning=!0,e.createElement(t,{...m,ref:e.useCallback(g=>{d.current=g,typeof c=="function"?c(g):c!==null&&(c.current=g)},[c])})});return s.displayName=o??n.name,s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N2={attribute:!0,type:String,converter:Ea,reflect:!1,hasChanged:Ql},R2=(e=N2,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const c=this[s];t.call(this,a),this.requestUpdate(s,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,n)=>typeof n=="object"?R2(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=e=>e??Me;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nh=Symbol.for(""),I2=e=>{if((e==null?void 0:e.r)===nh)return e==null?void 0:e._$litStatic$},$2=e=>({_$litStatic$:e,r:nh}),wu=new Map,k2=e=>(t,...n)=>{const r=n.length;let o,i;const s=[],a=[];let c,l=0,d=!1;for(;l<r;){for(c=t[l];l<r&&(i=n[l],(o=I2(i))!==void 0);)c+=o+t[++l],d=!0;l!==r&&a.push(i),s.push(c),l++}if(l===r&&s.push(t[r]),d){const m=s.join("$$lit$$");(t=wu.get(m))===void 0&&(s.raw=s,wu.set(m,t=s)),n=a}return e(t,...n)},bu=k2(u),O2=ee`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,P2=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,L2=ee`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,D2=ee`<svg viewBox="0 0 32 32" fill="none">
<path d="M29.0612 10.0613L13.0612 26.0613C12.9218 26.2011 12.7563 26.3121 12.5739 26.3878C12.3916 26.4635 12.1961 26.5024 11.9987 26.5024C11.8013 26.5024 11.6058 26.4635 11.4235 26.3878C11.2411 26.3121 11.0756 26.2011 10.9362 26.0613L3.9362 19.0613C3.79667 18.9217 3.68599 18.7561 3.61047 18.5738C3.53496 18.3915 3.49609 18.1961 3.49609 17.9988C3.49609 17.8014 3.53496 17.606 3.61047 17.4237C3.68599 17.2414 3.79667 17.0758 3.9362 16.9363C4.07573 16.7967 4.24137 16.686 4.42367 16.6105C4.60598 16.535 4.80137 16.4962 4.9987 16.4962C5.19602 16.4962 5.39141 16.535 5.57372 16.6105C5.75602 16.686 5.92167 16.7967 6.0612 16.9363L11.9999 22.875L26.9387 7.93876C27.2205 7.65697 27.6027 7.49866 28.0012 7.49866C28.3997 7.49866 28.7819 7.65697 29.0637 7.93876C29.3455 8.22055 29.5038 8.60274 29.5038 9.00126C29.5038 9.39977 29.3455 9.78197 29.0637 10.0638L29.0612 10.0613Z" fill="currentColor"/>
</svg>
`,M2=ee`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,U2=ee`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z" fill="currentColor"/>
</svg>
`,W2=ee` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,B2=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,F2=ee`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,j2=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,z2=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,H2=ee`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,V2=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K2=ee`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,q2=ee`<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 0C3.91082 0 2.96829 0.285914 2.1666 0.821586C1.36491 1.35726 0.740067 2.11863 0.371089 3.00942C0.00211226 3.90021 -0.094429 4.88041 0.093674 5.82607C0.281777 6.77172 0.746076 7.64036 1.42786 8.32215C2.10964 9.00393 2.97828 9.46823 3.92394 9.65633C4.86959 9.84443 5.84979 9.74789 6.74058 9.37891C7.63137 9.00994 8.39274 8.38509 8.92842 7.5834C9.46409 6.78171 9.75 5.83918 9.75 4.875C9.74864 3.58249 9.23458 2.34331 8.32064 1.42936C7.4067 0.515418 6.16751 0.00136492 4.875 0ZM4.6875 2.25C4.79875 2.25 4.90751 2.28299 5.00001 2.3448C5.09251 2.40661 5.16461 2.49446 5.20718 2.59724C5.24976 2.70002 5.2609 2.81312 5.23919 2.92224C5.21749 3.03135 5.16392 3.13158 5.08525 3.21025C5.00658 3.28891 4.90635 3.34249 4.79724 3.36419C4.68813 3.3859 4.57503 3.37476 4.47224 3.33218C4.36946 3.28961 4.28161 3.21751 4.2198 3.12501C4.15799 3.03251 4.125 2.92375 4.125 2.8125C4.125 2.66332 4.18427 2.52024 4.28975 2.41475C4.39524 2.30926 4.53832 2.25 4.6875 2.25ZM5.25 7.5C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75V4.875C4.40055 4.875 4.30516 4.83549 4.23484 4.76516C4.16451 4.69484 4.125 4.59946 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40055 4.125 4.5 4.125C4.69891 4.125 4.88968 4.20402 5.03033 4.34467C5.17098 4.48532 5.25 4.67609 5.25 4.875V6.75C5.34946 6.75 5.44484 6.78951 5.51517 6.85983C5.58549 6.93016 5.625 7.02554 5.625 7.125C5.625 7.22446 5.58549 7.31984 5.51517 7.39017C5.44484 7.46049 5.34946 7.5 5.25 7.5Z" fill="#9A9A9A"/>
</svg>
`,G2=ee`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.925 5.5425C28.925 5.5425 28.925 5.555 28.925 5.56125L21.65 29.5537C21.5399 29.9434 21.3132 30.2901 21.0004 30.5473C20.6876 30.8045 20.3036 30.9598 19.9 30.9925C19.8425 30.9975 19.785 31 19.7275 31C19.3493 31.0012 18.9786 30.8941 18.6592 30.6915C18.3398 30.4888 18.085 30.199 17.925 29.8563L13.375 20.5187C13.3295 20.4252 13.3143 20.3197 13.3315 20.2171C13.3488 20.1145 13.3976 20.0198 13.4713 19.9463L20.7113 12.7063C20.8909 12.5172 20.9895 12.2654 20.9862 12.0047C20.9829 11.7439 20.8778 11.4948 20.6934 11.3104C20.509 11.126 20.2599 11.0209 19.9991 11.0176C19.7383 11.0142 19.4866 11.1129 19.2975 11.2925L12.0538 18.5325C11.9802 18.6061 11.8855 18.655 11.7829 18.6722C11.6803 18.6895 11.5748 18.6743 11.4813 18.6287L2.13502 14.08C1.76954 13.9047 1.46598 13.6224 1.26454 13.2706C1.06311 12.9189 0.973316 12.5142 1.00707 12.1102C1.04082 11.7063 1.19652 11.3221 1.45354 11.0087C1.71056 10.6952 2.05676 10.4673 2.44627 10.355L26.4388 3.08H26.4575C26.7991 2.98403 27.1601 2.98066 27.5034 3.07025C27.8468 3.15984 28.1601 3.33916 28.4113 3.58981C28.6624 3.84045 28.8424 4.15341 28.9326 4.49656C29.0229 4.83971 29.0203 5.2007 28.925 5.5425Z" fill="currentColor"/>
</svg>
`,Z2=ee` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,Y2=ee`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,J2=ee`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,X2=ee`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,rh=ee`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="var(--apkt-tokens-theme-textPrimary)" />
</svg>
`,Q2=ee`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64">
    <path fill="var(--apkt-tokens-theme-textPrimary)" d="M61.55 19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82 3.82 0 0 0-1.11-.62l0 0C41.56 7 3.63-.09 2.89 0a1.4 1.4 0 0 0-.58.22L2.12.37a2.23 2.23 0 0 0-.52.84l-.05.13v.71l0 .11C5.82 14.05 22.68 53 26 62.14c.2.62.58 1.8 1.29 1.86h.16c.38 0 2-2.14 2-2.14S58.41 26.74 61.34 23a9.46 9.46 0 0 0 1-1.48A2.41 2.41 0 0 0 61.55 19.28ZM36.88 23.37 49.24 13.12l7.25 6.68Zm-4.8-.67L10.8 5.26l34.43 6.35ZM34 27.27l21.78-3.51-24.9 30ZM7.91 7 30.3 26 27.06 53.78Z"/>
  </svg>
`,e3=ee`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,t3=ee`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,n3=ee`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,r3=ee`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,i3=ee`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,o3=ee`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,yu=ee`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,s3=Re`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var bs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const a3={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",coins:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",paperPlaneTitle:"",reown:"",solana:"",ton:"",tron:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",infoSeal:"",checkmark:""},c3={"ph-arrow-circle-down":()=>ne(()=>import("./PhArrowCircleDown-BV5Sl1GQ.js"),__vite__mapDeps([10,11])),"ph-arrow-clockwise":()=>ne(()=>import("./PhArrowClockwise-BGVBoaZq.js"),__vite__mapDeps([12,11])),"ph-arrow-down":()=>ne(()=>import("./PhArrowDown-D5MTzKA_.js"),__vite__mapDeps([13,11])),"ph-arrow-left":()=>ne(()=>import("./PhArrowLeft-B8_JqLkL.js"),__vite__mapDeps([14,11])),"ph-arrow-right":()=>ne(()=>import("./PhArrowRight-BRA4mSsk.js"),__vite__mapDeps([15,11])),"ph-arrow-square-out":()=>ne(()=>import("./PhArrowSquareOut-BISljgy9.js"),__vite__mapDeps([16,11])),"ph-arrows-down-up":()=>ne(()=>import("./PhArrowsDownUp-CtsxxDYh.js"),__vite__mapDeps([17,11])),"ph-arrows-left-right":()=>ne(()=>import("./PhArrowsLeftRight-BQ1bY0PT.js"),__vite__mapDeps([18,11])),"ph-arrow-up":()=>ne(()=>import("./PhArrowUp-BWNVmKoU.js"),__vite__mapDeps([19,11])),"ph-arrow-up-right":()=>ne(()=>import("./PhArrowUpRight-ISdWwWxJ.js"),__vite__mapDeps([20,11])),"ph-arrows-clockwise":()=>ne(()=>import("./PhArrowsClockwise-CiXcW1Fh.js"),__vite__mapDeps([21,11])),"ph-bank":()=>ne(()=>import("./PhBank-BL0mlC5L.js"),__vite__mapDeps([22,11])),"ph-browser":()=>ne(()=>import("./PhBrowser-Dcx6MytM.js"),__vite__mapDeps([23,11])),"ph-caret-down":()=>ne(()=>import("./PhCaretDown-BZoeQxca.js"),__vite__mapDeps([24,11])),"ph-caret-left":()=>ne(()=>import("./PhCaretLeft-hpfjswvh.js"),__vite__mapDeps([25,11])),"ph-caret-right":()=>ne(()=>import("./PhCaretRight-RCkg0aUO.js"),__vite__mapDeps([26,11])),"ph-caret-up":()=>ne(()=>import("./PhCaretUp-7QdlgRUJ.js"),__vite__mapDeps([27,11])),"ph-check":()=>ne(()=>import("./PhCheck-CXB_MPaJ.js"),__vite__mapDeps([28,11])),"ph-circle-half":()=>ne(()=>import("./PhCircleHalf-TYXfpIb0.js"),__vite__mapDeps([29,11])),"ph-clock":()=>ne(()=>import("./PhClock-BjdCrVzj.js"),__vite__mapDeps([30,11])),"ph-compass":()=>ne(()=>import("./PhCompass-DcCi1VYf.js"),__vite__mapDeps([31,11])),"ph-copy":()=>ne(()=>import("./PhCopy-CKppt1Bc.js"),__vite__mapDeps([32,11])),"ph-credit-card":()=>ne(()=>import("./PhCreditCard-DpPbLjnb.js"),__vite__mapDeps([33,11])),"ph-currency-dollar":()=>ne(()=>import("./PhCurrencyDollar-COl9F7TF.js"),__vite__mapDeps([34,11])),"ph-desktop":()=>ne(()=>import("./PhDesktop-BqxgrmEa.js"),__vite__mapDeps([35,11])),"ph-device-mobile":()=>ne(()=>import("./PhDeviceMobile-pv8394-7.js"),__vite__mapDeps([36,11])),"ph-dots-three":()=>ne(()=>import("./PhDotsThree-DwJl1Q5L.js"),__vite__mapDeps([37,11])),"ph-vault":()=>ne(()=>import("./PhVault-tm37gkIC.js"),__vite__mapDeps([38,11])),"ph-envelope":()=>ne(()=>import("./PhEnvelope-Cur5tKdA.js"),__vite__mapDeps([39,11])),"ph-funnel-simple":()=>ne(()=>import("./PhFunnelSimple-gO2K3rhb.js"),__vite__mapDeps([40,11])),"ph-globe":()=>ne(()=>import("./PhGlobe-BQzbSD26.js"),__vite__mapDeps([41,11])),"ph-identification-card":()=>ne(()=>import("./PhIdentificationCard-GD5EdiRj.js"),__vite__mapDeps([42,11])),"ph-image":()=>ne(()=>import("./PhImage-DZA-BFXt.js"),__vite__mapDeps([43,11])),"ph-info":()=>ne(()=>import("./PhInfo-B2cde7cE.js"),__vite__mapDeps([44,11])),"ph-lightbulb":()=>ne(()=>import("./PhLightbulb-DUCYPepb.js"),__vite__mapDeps([45,11])),"ph-magnifying-glass":()=>ne(()=>import("./PhMagnifyingGlass-DEyUNDzV.js"),__vite__mapDeps([46,11])),"ph-paper-plane-right":()=>ne(()=>import("./PhPaperPlaneRight-BYnOW9tG.js"),__vite__mapDeps([47,11])),"ph-plus":()=>ne(()=>import("./PhPlus-BX6rh-U-.js"),__vite__mapDeps([48,11])),"ph-power":()=>ne(()=>import("./PhPower-DJhuav2s.js"),__vite__mapDeps([49,11])),"ph-puzzle-piece":()=>ne(()=>import("./PhPuzzlePiece-B4k-hyA3.js"),__vite__mapDeps([50,11])),"ph-qr-code":()=>ne(()=>import("./PhQrCode-MnSe1hc9.js"),__vite__mapDeps([51,11])),"ph-question":()=>ne(()=>import("./PhQuestion-DcsxAzVd.js"),__vite__mapDeps([52,11])),"ph-question-circle":()=>ne(()=>import("./PhQuestionMark-SXnw5Ld4.js"),__vite__mapDeps([53,11])),"ph-seal-check":()=>ne(()=>import("./PhSealCheck-DWgSaNxO.js"),__vite__mapDeps([54,11])),"ph-sign-out":()=>ne(()=>import("./PhSignOut-CDsBWQi7.js"),__vite__mapDeps([55,11])),"ph-spinner":()=>ne(()=>import("./PhSpinner-M1b7jR9o.js"),__vite__mapDeps([56,11])),"ph-trash":()=>ne(()=>import("./PhTrash-DklgeHcT.js"),__vite__mapDeps([57,11])),"ph-user":()=>ne(()=>import("./PhUser-Do4ZKt4P.js"),__vite__mapDeps([58,11])),"ph-wallet":()=>ne(()=>import("./PhWallet-B9DnOVnW.js"),__vite__mapDeps([59,11])),"ph-warning":()=>ne(()=>import("./PhWarning-DEBACsaP.js"),__vite__mapDeps([60,11])),"ph-warning-circle":()=>ne(()=>import("./PhWarningCircle-Hqi43qrq.js"),__vite__mapDeps([61,11])),"ph-x":()=>ne(()=>import("./PhX-CvpgbsgX.js"),__vite__mapDeps([62,11]))},l3={appStore:O2,apple:P2,bitcoin:L2,coins:U2,chromeStore:M2,cursor:W2,discord:B2,ethereum:F2,etherscan:j2,facebook:z2,farcaster:H2,github:V2,google:K2,playStore:Z2,paperPlaneTitle:G2,reown:Y2,solana:J2,ton:rh,tron:Q2,telegram:X2,twitch:e3,twitter:yu,twitterIcon:t3,walletConnect:n3,walletConnectInvert:r3,walletConnectBrown:o3,walletConnectLightBrown:i3,x:yu,infoSeal:q2,checkmark:D2},d3={"accent-primary":Oe.tokens.core.iconAccentPrimary,"accent-certified":Oe.tokens.core.iconAccentCertified,"foreground-secondary":Oe.tokens.theme.foregroundSecondary,default:Oe.tokens.theme.iconDefault,success:Oe.tokens.core.iconSuccess,error:Oe.tokens.core.iconError,warning:Oe.tokens.core.iconWarning,inverse:Oe.tokens.theme.iconInverse};let Lr=class extends k{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":d3[this.color]}
    `;const n=a3[this.name];if(n&&n!==""){const r=c3[n];r&&r();const o=$2(n);return bu`<${o} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${o}>`}return l3[this.name]||bu``}};Lr.styles=[ie,s3];bs([f()],Lr.prototype,"size",void 0);bs([f()],Lr.prototype,"name",void 0);bs([f()],Lr.prototype,"weight",void 0);bs([f()],Lr.prototype,"color",void 0);Lr=bs([I("wui-icon")],Lr);const u3=j`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var bn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ot=class extends k{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?u`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?u`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:u`<img src=${M(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Ot.styles=[ie,u3];bn([f()],Ot.prototype,"src",void 0);bn([f()],Ot.prototype,"logo",void 0);bn([f()],Ot.prototype,"icon",void 0);bn([f()],Ot.prototype,"iconColor",void 0);bn([f()],Ot.prototype,"alt",void 0);bn([f()],Ot.prototype,"size",void 0);bn([f({type:Boolean})],Ot.prototype,"boxed",void 0);bn([f({type:Boolean})],Ot.prototype,"rounded",void 0);bn([f({type:Boolean})],Ot.prototype,"fullSize",void 0);Ot=bn([I("wui-image")],Ot);const p3=Re`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var td=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ts=class extends k{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:Oe.tokens.theme.textPrimary,secondary:Oe.tokens.theme.textSecondary,tertiary:Oe.tokens.theme.textTertiary,invert:Oe.tokens.theme.textInvert,error:Oe.tokens.core.textError,warning:Oe.tokens.core.textWarning,"accent-primary":Oe.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,u`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};ts.styles=[ie,p3];td([f()],ts.prototype,"color",void 0);td([f()],ts.prototype,"size",void 0);ts=td([I("wui-loading-spinner")],ts);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ih={ATTRIBUTE:1,CHILD:2},oh=e=>(...t)=>({_$litDirective$:e,values:t});class sh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nd=oh(class extends sh{constructor(e){var t;if(super(e),e.type!==ih.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return Pr}}),h3=j`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var qi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const f3={primary:Oe.tokens.theme.textPrimary,secondary:Oe.tokens.theme.textSecondary,tertiary:Oe.tokens.theme.textTertiary,invert:Oe.tokens.theme.textInvert,error:Oe.tokens.core.textError,success:Oe.tokens.core.textSuccess,warning:Oe.tokens.core.textWarning,"accent-primary":Oe.tokens.core.textAccentPrimary};let nr=class extends k{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":f3[this.color??"primary"]};
      `,u`<slot class=${nd(t)}></slot>`}};nr.styles=[ie,h3];qi([f()],nr.prototype,"variant",void 0);qi([f()],nr.prototype,"color",void 0);qi([f()],nr.prototype,"align",void 0);qi([f()],nr.prototype,"lineClamp",void 0);qi([f()],nr.prototype,"display",void 0);nr=qi([I("wui-text")],nr);const m3=Re`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var wt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Je=class extends k{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ie.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ie.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ie.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ie.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ie.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ie.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ie.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ie.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,u`<slot></slot>`}};Je.styles=[ie,m3];wt([f()],Je.prototype,"flexDirection",void 0);wt([f()],Je.prototype,"flexWrap",void 0);wt([f()],Je.prototype,"flexBasis",void 0);wt([f()],Je.prototype,"flexGrow",void 0);wt([f()],Je.prototype,"flexShrink",void 0);wt([f()],Je.prototype,"alignItems",void 0);wt([f()],Je.prototype,"justifyContent",void 0);wt([f()],Je.prototype,"columnGap",void 0);wt([f()],Je.prototype,"rowGap",void 0);wt([f()],Je.prototype,"gap",void 0);wt([f()],Je.prototype,"padding",void 0);wt([f()],Je.prototype,"margin",void 0);wt([f()],Je.prototype,"width",void 0);Je=wt([I("wui-flex")],Je);const g3=j`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ys=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dr=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const t={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${t[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${t[this.size??"xl"]});
    `,u`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",u`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Ie.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};Dr.styles=[ie,g3];ys([f()],Dr.prototype,"imageSrc",void 0);ys([f()],Dr.prototype,"alt",void 0);ys([f()],Dr.prototype,"address",void 0);ys([f()],Dr.prototype,"size",void 0);Dr=ys([I("wui-avatar")],Dr);const w3=j`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var Zt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let xt=class extends k{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return u`
      <button
        ?disabled=${this.disabled}
        class=${M(this.balance?void 0:"local-no-balance")}
        data-error=${M(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const t=this.networkSrc?u`<wui-image src=${this.networkSrc}></wui-image>`:u` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return u`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${t}</wui-flex>
    </wui-flex>`}addressTemplate(){return u`<wui-text variant="md-regular" color="inherit">
      ${this.address?Ie.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const t=this.loading?u`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:u`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return u`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${t}</wui-flex
      >`}return null}};xt.styles=[ie,Te,w3];Zt([f()],xt.prototype,"networkSrc",void 0);Zt([f()],xt.prototype,"avatarSrc",void 0);Zt([f()],xt.prototype,"balance",void 0);Zt([f({type:Boolean})],xt.prototype,"isUnsupportedChain",void 0);Zt([f({type:Boolean})],xt.prototype,"disabled",void 0);Zt([f({type:Boolean})],xt.prototype,"loading",void 0);Zt([f()],xt.prototype,"address",void 0);Zt([f()],xt.prototype,"profileName",void 0);Zt([f()],xt.prototype,"charsStart",void 0);Zt([f()],xt.prototype,"charsEnd",void 0);xt=Zt([I("wui-account-button")],xt);var at=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class ct extends k{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=S.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(h.getAccountData(this.namespace)),this.setNetworkData(h.getNetworkData(this.namespace))}firstUpdated(){const t=this.namespace;t?this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.setAccountData(n)},t),h.subscribeChainProp("networkState",n=>{var r;this.setNetworkData(n),this.isSupported=h.checkIfSupportedNetwork(t,(r=n==null?void 0:n.caipNetwork)==null?void 0:r.caipNetworkId)},t)):this.unsubscribe.push(ze.subscribeNetworkImages(()=>{this.networkImage=xe.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",n=>{this.caipAddress=n}),h.subscribeChainProp("accountState",n=>{this.setAccountData(n)}),h.subscribeKey("activeCaipNetwork",n=>{this.network=n,this.networkImage=xe.getNetworkImage(n),this.isSupported=n!=null&&n.chainNamespace?h.checkIfSupportedNetwork(n==null?void 0:n.chainNamespace):!0,this.fetchNetworkImage(n)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!h.state.activeChain)return null;const t=this.balance==="show",n=typeof this.balanceVal!="string",{formattedText:r}=T.parseBalance(this.balanceVal,this.balanceSymbol);return u`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${S.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${M(T.getPlainAddress(this.caipAddress))}
        profileName=${M(this.profileName)}
        networkSrc=${M(this.networkImage)}
        avatarSrc=${M(this.profileImage)}
        balance=${t?r:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${n}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||S.state.allowUnsupportedChain?de.open({namespace:this.namespace}):de.open({view:"UnsupportedChain"})}async fetchNetworkImage(t){var n,r;(n=t==null?void 0:t.assets)!=null&&n.imageId&&(this.networkImage=await xe.fetchNetworkImage((r=t==null?void 0:t.assets)==null?void 0:r.imageId))}setAccountData(t){t&&(this.caipAddress=t.caipAddress,this.balanceVal=t.balance,this.balanceSymbol=t.balanceSymbol,this.profileName=t.profileName,this.profileImage=t.profileImage)}setNetworkData(t){t&&(this.network=t.caipNetwork,this.networkImage=xe.getNetworkImage(t.caipNetwork))}}at([f({type:Boolean})],ct.prototype,"disabled",void 0);at([f()],ct.prototype,"balance",void 0);at([f()],ct.prototype,"charsStart",void 0);at([f()],ct.prototype,"charsEnd",void 0);at([f()],ct.prototype,"namespace",void 0);at([v()],ct.prototype,"caipAddress",void 0);at([v()],ct.prototype,"balanceVal",void 0);at([v()],ct.prototype,"balanceSymbol",void 0);at([v()],ct.prototype,"profileName",void 0);at([v()],ct.prototype,"profileImage",void 0);at([v()],ct.prototype,"network",void 0);at([v()],ct.prototype,"networkImage",void 0);at([v()],ct.prototype,"isSupported",void 0);let Cu=class extends ct{};Cu=at([I("w3m-account-button")],Cu);let vl=class extends ct{};vl=at([I("appkit-account-button")],vl);const b3=Re`
  :host {
    display: block;
    width: max-content;
  }
`;var Yt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class Lt extends k{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var t;this.caipAddress=this.namespace?(t=h.getAccountData(this.namespace))==null?void 0:t.caipAddress:h.state.activeCaipAddress,this.namespace?this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.caipAddress=n==null?void 0:n.caipAddress},this.namespace)):this.unsubscribe.push(h.subscribeKey("activeCaipAddress",n=>this.caipAddress=n))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?u`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${M(this.balance)}
            .charsStart=${M(this.charsStart)}
            .charsEnd=${M(this.charsEnd)}
            namespace=${M(this.namespace)}
          >
          </appkit-account-button>
        `:u`
          <appkit-connect-button
            size=${M(this.size)}
            label=${M(this.label)}
            loadingLabel=${M(this.loadingLabel)}
            namespace=${M(this.namespace)}
          ></appkit-connect-button>
        `}}Lt.styles=b3;Yt([f({type:Boolean})],Lt.prototype,"disabled",void 0);Yt([f()],Lt.prototype,"balance",void 0);Yt([f()],Lt.prototype,"size",void 0);Yt([f()],Lt.prototype,"label",void 0);Yt([f()],Lt.prototype,"loadingLabel",void 0);Yt([f()],Lt.prototype,"charsStart",void 0);Yt([f()],Lt.prototype,"charsEnd",void 0);Yt([f()],Lt.prototype,"namespace",void 0);Yt([v()],Lt.prototype,"caipAddress",void 0);let vu=class extends Lt{};vu=Yt([I("w3m-button")],vu);let El=class extends Lt{};El=Yt([I("appkit-button")],El);const y3=j`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var Cs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Mr=class extends k{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return u`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const t={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},n={primary:"invert",secondary:"accent-primary"};return this.loading?u`<wui-loading-spinner
      color=${n[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:u` <wui-text variant=${t[this.size]} color=${n[this.variant]}>
        ${this.text}
      </wui-text>`}};Mr.styles=[ie,Te,y3];Cs([f()],Mr.prototype,"size",void 0);Cs([f()],Mr.prototype,"variant",void 0);Cs([f({type:Boolean})],Mr.prototype,"loading",void 0);Cs([f()],Mr.prototype,"text",void 0);Mr=Cs([I("wui-connect-button")],Mr);var cr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class lr extends k{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=de.state.open,this.loading=this.namespace?de.state.loadingNamespaceMap.get(this.namespace):de.state.loading,this.unsubscribe.push(de.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-connect-button
        size=${M(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?de.close():this.loading||de.open({view:"Connect",namespace:this.namespace})}}cr([f()],lr.prototype,"size",void 0);cr([f()],lr.prototype,"label",void 0);cr([f()],lr.prototype,"loadingLabel",void 0);cr([f()],lr.prototype,"namespace",void 0);cr([v()],lr.prototype,"open",void 0);cr([v()],lr.prototype,"loading",void 0);let Eu=class extends lr{};Eu=cr([I("w3m-connect-button")],Eu);let _l=class extends lr{};_l=cr([I("appkit-connect-button")],_l);const C3=j`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var vs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ur=class extends k{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,u`
      <wui-icon size=${M(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};Ur.styles=[ie,Te,C3];vs([f()],Ur.prototype,"icon",void 0);vs([f()],Ur.prototype,"size",void 0);vs([f()],Ur.prototype,"padding",void 0);vs([f()],Ur.prototype,"color",void 0);Ur=vs([I("wui-icon-box")],Ur);const v3=j`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var Es=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wr=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const t={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return u`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${t[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?u` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};Wr.styles=[ie,Te,v3];Es([f()],Wr.prototype,"imageSrc",void 0);Es([f({type:Boolean})],Wr.prototype,"isUnsupportedChain",void 0);Es([f({type:Boolean})],Wr.prototype,"disabled",void 0);Es([f()],Wr.prototype,"size",void 0);Wr=Es([I("wui-network-button")],Wr);const E3=Re`
  :host {
    display: block;
    width: max-content;
  }
`;var Bn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class yn extends k{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=h.state.activeCaipNetwork,this.networkImage=xe.getNetworkImage(this.network),this.caipAddress=h.state.activeCaipAddress,this.loading=de.state.loading,this.isSupported=S.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0,this.unsubscribe.push(ze.subscribeNetworkImages(()=>{this.networkImage=xe.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),h.subscribeKey("activeCaipNetwork",t=>{var n;this.network=t,this.networkImage=xe.getNetworkImage(t),this.isSupported=t!=null&&t.chainNamespace?h.checkIfSupportedNetwork(t.chainNamespace):!0,xe.fetchNetworkImage((n=t==null?void 0:t.assets)==null?void 0:n.imageId)}),de.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){var t,n;xe.fetchNetworkImage((n=(t=this.network)==null?void 0:t.assets)==null?void 0:n.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.network?h.checkIfSupportedNetwork(this.network.chainNamespace):!0;return u`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${S.state.allowUnsupportedChain?!1:!t}
        imageSrc=${M(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!S.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(B.sendEvent({type:"track",event:"CLICK_NETWORKS"}),de.open({view:"Networks"}))}}yn.styles=E3;Bn([f({type:Boolean})],yn.prototype,"disabled",void 0);Bn([f({type:String})],yn.prototype,"label",void 0);Bn([v()],yn.prototype,"network",void 0);Bn([v()],yn.prototype,"networkImage",void 0);Bn([v()],yn.prototype,"caipAddress",void 0);Bn([v()],yn.prototype,"loading",void 0);Bn([v()],yn.prototype,"isSupported",void 0);let _u=class extends yn{};_u=Bn([I("w3m-network-button")],_u);let Al=class extends yn{};Al=Bn([I("appkit-network-button")],Al);const _3="https://reown.com",A3=j`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var x3=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let xl=class extends k{render(){return u`
      <a
        data-testid="ux-branding-reown"
        href=${_3}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};xl.styles=[ie,Te,A3];xl=x3([I("wui-ux-by-reown")],xl);const S3=j`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var ah=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ta=class extends k{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=S.state.remoteFeatures,this.unsubscribe.push(S.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var i;const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state,r=(i=S.state.features)==null?void 0:i.legalCheckbox;return!t&&!n||r?u`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:u`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=S.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=S.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){var n;return(n=this.remoteFeatures)!=null&&n.reownBranding?t?u`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:u`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Ta.styles=[S3];ah([v()],Ta.prototype,"remoteFeatures",void 0);Ta=ah([I("w3m-legal-footer")],Ta);const T3=j`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var _s=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const N3={sm:"sm-medium",md:"md-medium"},R3={accent:"accent-primary",secondary:"secondary"};let Br=class extends k{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return u`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${R3[this.variant]}
          variant=${N3[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?u`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};Br.styles=[ie,Te,T3];_s([f()],Br.prototype,"size",void 0);_s([f({type:Boolean})],Br.prototype,"disabled",void 0);_s([f()],Br.prototype,"variant",void 0);_s([f()],Br.prototype,"icon",void 0);Br=_s([I("wui-link")],Br);const I3=Re``;var $3=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Sl=class extends k{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state;return!t&&!n?null:u`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return u` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){B.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("WhatIsABuy")}};Sl.styles=[I3];Sl=$3([I("w3m-onramp-providers-footer")],Sl);var Au={};const Qs={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof cn<"u"&&typeof Au<"u"?Au.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]},Ni={getTabsByNamespace(e){var n;return!!e&&e===_.CHAIN.EVM?((n=S.state.remoteFeatures)==null?void 0:n.activity)===!1?Qs.ACCOUNT_TABS.filter(r=>r.label!=="Activity"):Qs.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var t;const e=E.state.view;if(Qs.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:n,privacyPolicyUrl:r}=S.state,o=(t=S.state.features)==null?void 0:t.legalCheckbox;return!(!n&&!r||o)}return Qs.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},k3=j`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var rd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ns=class extends k{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=E.state.view}firstUpdated(){this.status=Ni.hasFooter()?"show":"hide",this.unsubscribe.push(E.subscribeKey("view",t=>{this.view=t,this.status=Ni.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const n of t)if(n.target===this.getWrapper()){const r=`${n.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",r)}}),this.resizeObserver.observe(this.getWrapper())}render(){return u`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Ni.hasFooter()?u` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return u`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return u`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return u` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){B.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),E.push("WhatIsANetwork")}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.container")}};ns.styles=[k3];rd([v()],ns.prototype,"status",void 0);rd([v()],ns.prototype,"view",void 0);ns=rd([I("w3m-footer")],ns);const O3=j`
  :host {
    display: block;
    width: inherit;
  }
`;var id=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let rs=class extends k{constructor(){super(),this.unsubscribe=[],this.viewState=E.state.view,this.history=E.state.history.join(","),this.unsubscribe.push(E.subscribeKey("view",()=>{this.history=E.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return u`${this.templatePageContainer()}`}templatePageContainer(){return u`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=E.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return u`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return u`<w3m-account-view></w3m-account-view>`;case"AllWallets":return u`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return u`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return u`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return u`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return u`<w3m-connect-view></w3m-connect-view>`;case"Create":return u`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return u`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return u`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return u`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return u`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return u`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return u`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return u`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return u`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return u`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return u`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return u`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return u`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return u`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return u`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return u`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return u`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return u`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return u`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return u`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return u`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return u`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return u`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return u`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return u`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return u`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return u`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return u`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return u`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return u`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return u`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return u`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return u`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return u`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return u`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return u`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return u`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return u`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return u`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return u`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return u`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return u`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return u`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return u`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return u`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return u`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return u`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return u`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return u`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return u`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return u`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return u`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return u`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return u`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return u`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return u`<w3m-connect-view></w3m-connect-view>`}}};rs.styles=[O3];id([v()],rs.prototype,"viewState",void 0);id([v()],rs.prototype,"history",void 0);rs=id([I("w3m-router")],rs);const P3=j`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var Gi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let rr=class extends k{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return u`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};rr.styles=[ie,Te,P3];Gi([f()],rr.prototype,"size",void 0);Gi([f({type:Boolean})],rr.prototype,"disabled",void 0);Gi([f()],rr.prototype,"icon",void 0);Gi([f()],rr.prototype,"iconColor",void 0);Gi([f()],rr.prototype,"variant",void 0);rr=Gi([I("wui-icon-link")],rr);const L3=j`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var bt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xe=class extends k{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,u`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${M(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?u`<wui-image
        icon=${this.icon}
        iconColor=${M(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:u`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${M(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:u`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};Xe.styles=[ie,Te,L3];bt([f()],Xe.prototype,"type",void 0);bt([f()],Xe.prototype,"imageSrc",void 0);bt([f()],Xe.prototype,"imageSize",void 0);bt([f()],Xe.prototype,"icon",void 0);bt([f()],Xe.prototype,"iconColor",void 0);bt([f({type:Boolean})],Xe.prototype,"loading",void 0);bt([f()],Xe.prototype,"tabIdx",void 0);bt([f()],Xe.prototype,"boxColor",void 0);bt([f({type:Boolean})],Xe.prototype,"disabled",void 0);bt([f({type:Boolean})],Xe.prototype,"rightIcon",void 0);bt([f({type:Boolean})],Xe.prototype,"boxed",void 0);bt([f({type:Boolean})],Xe.prototype,"rounded",void 0);bt([f({type:Boolean})],Xe.prototype,"fullSize",void 0);Xe=bt([I("wui-list-item")],Xe);const D3=j`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var oi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const M3={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},U3={lg:"md",md:"md",sm:"sm"};let On=class extends k{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??M3[this.size];return u`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=U3[this.size],n=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return u`<wui-loading-spinner color=${n} size=${t}></wui-loading-spinner>`}return null}};On.styles=[ie,Te,D3];oi([f()],On.prototype,"size",void 0);oi([f({type:Boolean})],On.prototype,"disabled",void 0);oi([f({type:Boolean})],On.prototype,"fullWidth",void 0);oi([f({type:Boolean})],On.prototype,"loading",void 0);oi([f()],On.prototype,"variant",void 0);oi([f()],On.prototype,"textVariant",void 0);On=oi([I("wui-button")],On);const W3=j`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var Qa=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wi=class extends k{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return u`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Wi.styles=[ie,Te,W3];Qa([f()],Wi.prototype,"label",void 0);Qa([f()],Wi.prototype,"description",void 0);Qa([f()],Wi.prototype,"icon",void 0);Wi=Qa([I("wui-notice-card")],Wi);var ch=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Tl=class extends k{constructor(){super(),this.unsubscribe=[],this.socialProvider=D.getConnectedSocialProvider(),this.socialUsername=D.getConnectedSocialUsername(),this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=N.getConnectorId(this.namespace),n=N.getAuthConnector();if(!n||t!==_.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const r=n.provider.getEmail()??"";return!r&&!this.socialUsername?(this.style.cssText="display: none",null):u`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,n){n||E.push("UpdateEmailWallet",{email:t,redirectView:"Account"})}getAuthName(t){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};ch([v()],Tl.prototype,"namespace",void 0);Tl=ch([I("w3m-account-auth-button")],Tl);var si=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ir=class extends k{constructor(){var t,n,r;super(),this.usubscribe=[],this.networkImages=ze.state.networkImages,this.address=(t=h.getAccountData())==null?void 0:t.address,this.profileImage=(n=h.getAccountData())==null?void 0:n.profileImage,this.profileName=(r=h.getAccountData())==null?void 0:r.profileName,this.network=h.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=S.state.remoteFeatures,this.usubscribe.push(h.subscribeChainProp("accountState",o=>{o&&(this.address=o.address,this.profileImage=o.profileImage,this.profileName=o.profileName)}),h.subscribeKey("activeCaipNetwork",o=>{o!=null&&o.id&&(this.network=o)}),S.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r,o;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[((r=(n=this.network)==null?void 0:n.assets)==null?void 0:r.imageId)??""];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${M(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${Ie.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${M(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((o=this.network)==null?void 0:o.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var i;const t=(i=this.network)==null?void 0:i.chainNamespace,n=N.getConnectorId(t),r=N.getAuthConnector();return!h.checkIfNamesSupported()||!r||n!==_.CONNECTOR_ID.AUTH||this.profileName?null:u`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var o;const t=N.getConnectorId((o=this.network)==null?void 0:o.chainNamespace),n=N.getAuthConnector(),{origin:r}=location;return!n||t!==_.CONNECTOR_ID.AUTH||r.includes(Ce.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=h.getAllRequestedCaipNetworks(),n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(T.copyToClopboard(this.address),ye.showSuccess("Address copied"))}catch{ye.showError("Failed to copy")}}smartAccountSettingsTemplate(){var i;const t=(i=this.network)==null?void 0:i.chainNamespace,n=h.checkIfSmartAccountEnabled(),r=N.getConnectorId(t);return!N.getAuthConnector()||r!==_.CONNECTOR_ID.AUTH||!n?null:u`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){E.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&E.push("Networks")}async onDisconnect(){var t,n;try{this.disconnecting=!0;const r=(t=this.network)==null?void 0:t.chainNamespace,i=$.getConnections(r).length>0,s=r&&N.state.activeConnectorIds[r],a=(n=this.remoteFeatures)==null?void 0:n.multiWallet;await $.disconnect(a?{id:s,namespace:r}:{}),i&&a&&(E.push("ProfileWallets"),ye.showSuccess("Wallet deleted"))}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),ye.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){B.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),E.push("UpgradeEmailWallet")}onSmartAccountSettings(){E.push("SmartAccountSettings")}};si([v()],ir.prototype,"address",void 0);si([v()],ir.prototype,"profileImage",void 0);si([v()],ir.prototype,"profileName",void 0);si([v()],ir.prototype,"network",void 0);si([v()],ir.prototype,"disconnecting",void 0);si([v()],ir.prototype,"remoteFeatures",void 0);ir=si([I("w3m-account-settings-view")],ir);const B3=j`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var As=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const F3={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},j3={lg:"md",md:"sm",sm:"sm"};let Fr=class extends k{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return u`
      <button data-active=${this.active}>
        ${this.icon?u`<wui-icon size=${j3[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${F3[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Fr.styles=[ie,Te,B3];As([f()],Fr.prototype,"icon",void 0);As([f()],Fr.prototype,"size",void 0);As([f()],Fr.prototype,"label",void 0);As([f({type:Boolean})],Fr.prototype,"active",void 0);Fr=As([I("wui-tab-item")],Fr);const z3=j`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var xs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let jr=class extends k{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,n)=>{var o;const r=n===this.activeTab;return u`
        <wui-tab-item
          @click=${()=>this.onTabClick(n)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${(o=t.label)==null?void 0:o.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};jr.styles=[ie,Te,z3];xs([f({type:Array})],jr.prototype,"tabs",void 0);xs([f()],jr.prototype,"onTabChange",void 0);xs([f()],jr.prototype,"size",void 0);xs([v()],jr.prototype,"activeTab",void 0);jr=xs([I("wui-tabs")],jr);const H3=j`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var ec=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Bi=class extends k{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",n=this.size==="md"?"md":"sm";return u`
      ${this.icon?u`<wui-icon size=${n} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};Bi.styles=[ie,H3];ec([f()],Bi.prototype,"variant",void 0);ec([f()],Bi.prototype,"size",void 0);ec([f()],Bi.prototype,"icon",void 0);Bi=ec([I("wui-tag")],Bi);const V3=j`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Jt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let St=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?u`<wui-icon
          size=${M(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:u`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return u`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        ${this.enableGreenCircle?u`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return u`
      <wui-text variant="lg-regular" color="primary">
        ${Ie.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return u`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};St.styles=[ie,Te,V3];Jt([f()],St.prototype,"address",void 0);Jt([f()],St.prototype,"profileName",void 0);Jt([f()],St.prototype,"alt",void 0);Jt([f()],St.prototype,"imageSrc",void 0);Jt([f()],St.prototype,"icon",void 0);Jt([f()],St.prototype,"iconSize",void 0);Jt([f({type:Boolean})],St.prototype,"enableGreenCircle",void 0);Jt([f({type:Boolean})],St.prototype,"loading",void 0);Jt([f({type:Number})],St.prototype,"charsStart",void 0);Jt([f({type:Number})],St.prototype,"charsEnd",void 0);St=Jt([I("wui-wallet-switch")],St);const K3=j`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Dt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ut=class extends k{constructor(){var t,n,r,o,i,s;super(),this.unsubscribe=[],this.caipAddress=(t=h.getAccountData())==null?void 0:t.caipAddress,this.address=T.getPlainAddress((n=h.getAccountData())==null?void 0:n.caipAddress),this.profileImage=(r=h.getAccountData())==null?void 0:r.profileImage,this.profileName=(o=h.getAccountData())==null?void 0:o.profileName,this.disconnecting=!1,this.balance=(i=h.getAccountData())==null?void 0:i.balance,this.balanceSymbol=(s=h.getAccountData())==null?void 0:s.balanceSymbol,this.features=S.state.features,this.remoteFeatures=S.state.remoteFeatures,this.namespace=h.state.activeChain,this.activeConnectorIds=N.state.activeConnectorIds,this.unsubscribe.push(h.subscribeChainProp("accountState",a=>{this.address=T.getPlainAddress(a==null?void 0:a.caipAddress),this.caipAddress=a==null?void 0:a.caipAddress,this.balance=a==null?void 0:a.balance,this.balanceSymbol=a==null?void 0:a.balanceSymbol,this.profileName=a==null?void 0:a.profileName,this.profileImage=a==null?void 0:a.profileImage}),S.subscribeKey("features",a=>this.features=a),S.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a),N.subscribeKey("activeConnectorIds",a=>{this.activeConnectorIds=a}),h.subscribeKey("activeChain",a=>this.namespace=a),h.subscribeKey("activeCaipNetwork",a=>{a!=null&&a.chainNamespace&&(this.namespace=a==null?void 0:a.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress||!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],n=t?N.getConnectorById(t):void 0,r=xe.getConnectorImage(n),{value:o,decimals:i,symbol:s}=T.parseBalance(this.balance,this.balanceSymbol);return u`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${M(this.caipAddress)}
          address=${M(T.getPlainAddress(this.caipAddress))}
          imageSrc=${M(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${r}
          alt=${n==null?void 0:n.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${o}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${i}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var i,s;if(!this.namespace)return null;const t=Ce.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=!!((i=this.features)!=null&&i.receive),r=((s=this.remoteFeatures)==null?void 0:s.onramp)&&t,o=je.isPayWithExchangeEnabled();return!r&&!n&&!o?null:u`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var n;return(((n=this.features)==null?void 0:n.walletFeaturesOrder)||Ce.DEFAULT_FEATURES.walletFeaturesOrder).map(r=>{switch(r){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var n;return this.namespace&&((n=this.remoteFeatures)==null?void 0:n.activity)&&Ce.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?u` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var r;const t=(r=this.remoteFeatures)==null?void 0:r.swaps,n=h.state.activeChain===_.CHAIN.EVM;return!t||!n?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var o;const t=(o=this.features)==null?void 0:o.send,n=h.state.activeChain;if(!n)throw new Error("SendController:sendTemplate - namespace is required");const r=Ce.SEND_SUPPORTED_NAMESPACES.includes(n);return!t||!r?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const t=h.state.activeChain;if(!t)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const n=N.getConnectorId(t),r=N.getAuthConnector(),{origin:o}=location;return!r||n!==_.CONNECTOR_ID.AUTH||o.includes(Ce.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){E.push("FundWallet")}handleClickSwap(){E.push("Swap")}handleClickSend(){E.push("WalletSend")}explorerBtnTemplate(){var n;return((n=h.getAccountData())==null?void 0:n.addressExplorerUrl)?u`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){B.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("Transactions")}async onDisconnect(){var t;try{this.disconnecting=!0;const r=$.getConnections(this.namespace).length>0,o=this.namespace&&N.state.activeConnectorIds[this.namespace],i=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await $.disconnect(i?{id:o,namespace:this.namespace}:{}),r&&i&&(E.push("ProfileWallets"),ye.showSuccess("Wallet deleted"))}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),ye.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){var n;const t=(n=h.getAccountData())==null?void 0:n.addressExplorerUrl;t&&T.openHref(t,"_blank")}onGoToUpgradeView(){B.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),E.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){E.push("ProfileWallets")}};ut.styles=K3;Dt([v()],ut.prototype,"caipAddress",void 0);Dt([v()],ut.prototype,"address",void 0);Dt([v()],ut.prototype,"profileImage",void 0);Dt([v()],ut.prototype,"profileName",void 0);Dt([v()],ut.prototype,"disconnecting",void 0);Dt([v()],ut.prototype,"balance",void 0);Dt([v()],ut.prototype,"balanceSymbol",void 0);Dt([v()],ut.prototype,"features",void 0);Dt([v()],ut.prototype,"remoteFeatures",void 0);Dt([v()],ut.prototype,"namespace",void 0);Dt([v()],ut.prototype,"activeConnectorIds",void 0);ut=Dt([I("w3m-account-default-widget")],ut);const q3=j`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var od=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let is=class extends k{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return u`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};is.styles=[ie,q3];od([f()],is.prototype,"dollars",void 0);od([f()],is.prototype,"pennies",void 0);is=od([I("wui-balance")],is);const G3=j`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ss=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Z3={sm:"sm-regular",md:"md-regular"};let zr=class extends k{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,u`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${Z3[this.size]}>${this.message}</wui-text>`}};zr.styles=[ie,Te,G3];Ss([f()],zr.prototype,"placement",void 0);Ss([f()],zr.prototype,"variant",void 0);Ss([f()],zr.prototype,"size",void 0);Ss([f()],zr.prototype,"message",void 0);zr=Ss([I("wui-tooltip")],zr);var Nl;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(Nl||(Nl={}));const Y3=j`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var dr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let fn=class extends k{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(t){return n=>{n.stopPropagation(),this.failedImageUrls.add(t),this.requestUpdate()}}render(){const[t,n]=this.images;this.images.length||(this.dataset.noImages="true");const r=(t==null?void 0:t.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":r,i=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,u`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,n]=this.images;return this.images.length===2&&(t!=null&&t.url||n!=null&&n.url)?this.renderSwapImages(t,n):t!=null&&t.url&&!this.failedImageUrls.has(t.url)?this.renderSingleImage(t):(t==null?void 0:t.type)==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(t,n){return u`<div class="swap-images-container">
      ${t!=null&&t.url?this.renderImageOrFallback(t,"first",!0):null}
      ${n!=null&&n.url?this.renderImageOrFallback(n,"last",!0):null}
    </div>`}renderSingleImage(t){return this.renderImageOrFallback(t,void 0,!1)}renderImageOrFallback(t,n,r=!1){return t.url?this.failedImageUrls.has(t.url)?r&&n?this.renderFallbackIconInContainer(n):this.renderFallbackIcon():u`<wui-image
      src=${t.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(t.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(t){return u`<div class="swap-fallback-container ${t}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return u`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(t){return u`<wui-icon size="xl" weight="regular" color="default" name=${t}></wui-icon>`}templateIcon(){let t="accent-primary",n;return n=this.getIcon(),this.status&&(t=this.getStatusColor()),n?u`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${n}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};fn.styles=[Y3];dr([f()],fn.prototype,"type",void 0);dr([f()],fn.prototype,"status",void 0);dr([f()],fn.prototype,"direction",void 0);dr([f({type:Boolean})],fn.prototype,"onlyDirectionIcon",void 0);dr([f({type:Array})],fn.prototype,"images",void 0);dr([f({type:Object})],fn.prototype,"secondImage",void 0);dr([v()],fn.prototype,"failedImageUrls",void 0);fn=dr([I("wui-transaction-visual")],fn);const J3=j`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var ur=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let mn=class extends k{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return u`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${M(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${Nl[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[0];return t?u`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[1];return t?u`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};mn.styles=[ie,J3];ur([f()],mn.prototype,"type",void 0);ur([f({type:Array})],mn.prototype,"descriptions",void 0);ur([f()],mn.prototype,"date",void 0);ur([f({type:Boolean})],mn.prototype,"onlyDirectionIcon",void 0);ur([f()],mn.prototype,"status",void 0);ur([f()],mn.prototype,"direction",void 0);ur([f({type:Array})],mn.prototype,"images",void 0);mn=ur([I("wui-transaction-list-item")],mn);const X3=j`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var Ts=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Hr=class extends k{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",u`<slot></slot>`}};Hr.styles=[X3];Ts([f()],Hr.prototype,"width",void 0);Ts([f()],Hr.prototype,"height",void 0);Ts([f()],Hr.prototype,"variant",void 0);Ts([f({type:Boolean})],Hr.prototype,"rounded",void 0);Hr=Ts([I("wui-shimmer")],Hr);const Q3=j`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var Ns=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Rc={sm:"xxs",lg:"md"};let Vr=class extends k{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return u`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,n]=this.images;return this.images.length===2&&(t||n)?u`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${n} alt="Swap image"></wui-image>
      `:t?u`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Rc[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Rc[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?u`<wui-image src=${t} alt="Token image"></wui-image> `:u`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?u`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:u`<wui-icon
      class="direction-icon"
      size=${Rc[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};Vr.styles=[Q3];Ns([f()],Vr.prototype,"type",void 0);Ns([f()],Vr.prototype,"size",void 0);Ns([f()],Vr.prototype,"statusImageUrl",void 0);Ns([f({type:Array})],Vr.prototype,"images",void 0);Vr=Ns([I("wui-transaction-thumbnail")],Vr);const e5=j`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var t5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Rl=class extends k{render(){return u`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};Rl.styles=[ie,e5];Rl=t5([I("wui-transaction-list-item-loader")],Rl);const n5=j`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var ai=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const xu="last-transaction",r5=7;let Pn=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=h.state.activeCaipAddress,this.transactionsByYear=it.state.transactionsByYear,this.loading=it.state.loading,this.empty=it.state.empty,this.next=it.state.next,it.clearCursor(),this.unsubscribe.push(h.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(it.resetTransactions(),it.fetchTransactions(t)),this.caipAddress=t}),h.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),it.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){it.resetTransactions(),this.caipAddress&&it.fetchTransactions(T.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(n=>{const r=parseInt(n,10),o=new Array(12).fill(null).map((i,s)=>{var l;const a=_i.getTransactionGroupTitle(r,s),c=(l=this.transactionsByYear[r])==null?void 0:l[s];return{groupTitle:a,transactions:c}}).filter(({transactions:i})=>i).reverse();return o.map(({groupTitle:i,transactions:s},a)=>{const c=a===o.length-1;return s?u`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${c?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${i}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,c)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,n){const{date:r,descriptions:o,direction:i,images:s,status:a,type:c,transfers:l,isAllNFT:d}=this.getTransactionListItemProps(t);return u`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${n&&this.next?xu:""}
        status=${a}
        type=${c}
        .images=${s}
        .onlyDirectionIcon=${d||l.length===1}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,n){return t.map((r,o)=>{const i=n&&o===t.length-1;return u`${this.templateRenderTransaction(r,i)}`})}emptyStateActivity(){return u`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return u`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?u`${this.emptyStateAccount()}`:u`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?u` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(r5).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){E.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=S.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(it.fetchTransactions(T.getPlainAddress(this.caipAddress)),B.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:T.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,o;(n=this.paginationObserver)==null||n.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${xu}`);t&&((o=this.paginationObserver)==null||o.observe(t))}getTransactionListItemProps(t){var c,l,d;const n=sl.formatDate((c=t==null?void 0:t.metadata)==null?void 0:c.minedAt),r=_i.mergeTransfers((t==null?void 0:t.transfers)||[]),o=_i.getTransactionDescriptions(t,r),i=r==null?void 0:r[0],s=!!i&&(r==null?void 0:r.every(m=>!!m.nft_info)),a=_i.getTransactionImages(r);return{date:n,direction:i==null?void 0:i.direction,descriptions:o,isAllNFT:s,images:a,status:(l=t.metadata)==null?void 0:l.status,transfers:r,type:(d=t.metadata)==null?void 0:d.operationType}}};Pn.styles=n5;ai([f()],Pn.prototype,"page",void 0);ai([v()],Pn.prototype,"caipAddress",void 0);ai([v()],Pn.prototype,"transactionsByYear",void 0);ai([v()],Pn.prototype,"loading",void 0);ai([v()],Pn.prototype,"empty",void 0);ai([v()],Pn.prototype,"next",void 0);Pn=ai([I("w3m-activity-list")],Pn);const i5=Re`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var o5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Il=class extends k{render(){return u`<w3m-activity-list page="account"></w3m-activity-list>`}};Il.styles=i5;Il=o5([I("w3m-account-activity-widget")],Il);const s5=j`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Zi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let or=class extends k{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?u`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?u`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};or.styles=[ie,Te,s5];Zi([f()],or.prototype,"icon",void 0);Zi([f()],or.prototype,"text",void 0);Zi([f()],or.prototype,"description",void 0);Zi([f()],or.prototype,"tag",void 0);Zi([f({type:Boolean})],or.prototype,"disabled",void 0);or=Zi([I("wui-list-description")],or);const a5=j`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var ci=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ln=class extends k{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return u`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${Ii.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${Ii.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?u`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:u`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};Ln.styles=[ie,Te,a5];ci([f()],Ln.prototype,"tokenName",void 0);ci([f()],Ln.prototype,"tokenImageUrl",void 0);ci([f({type:Number})],Ln.prototype,"tokenValue",void 0);ci([f()],Ln.prototype,"tokenAmount",void 0);ci([f()],Ln.prototype,"tokenCurrency",void 0);ci([f({type:Boolean})],Ln.prototype,"clickable",void 0);Ln=ci([I("wui-list-token")],Ln);const c5=Re`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var sd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let os=class extends k{constructor(){var t;super(),this.unsubscribe=[],this.tokenBalance=(t=h.getAccountData())==null?void 0:t.tokenBalance,this.remoteFeatures=S.state.remoteFeatures,this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.tokenBalance=n==null?void 0:n.tokenBalance}),S.subscribeKey("remoteFeatures",n=>{this.remoteFeatures=n}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`${this.tokenTemplate()}`}tokenTemplate(){var t;return this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>0?u`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:u` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.onramp?u`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:u``}tokenItemTemplate(){var t;return(t=this.tokenBalance)==null?void 0:t.map(n=>u`<wui-list-token
          tokenName=${n.name}
          tokenImageUrl=${n.iconUrl}
          tokenAmount=${n.quantity.numeric}
          tokenValue=${n.value}
          tokenCurrency=${n.symbol}
        ></wui-list-token>`)}onReceiveClick(){E.push("WalletReceive")}onBuyClick(){B.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("OnRampProviders")}};os.styles=c5;sd([v()],os.prototype,"tokenBalance",void 0);sd([v()],os.prototype,"remoteFeatures",void 0);os=sd([I("w3m-account-tokens-widget")],os);const l5=Re`
  :host {
    width: 100%;
    display: block;
  }
`;var ad=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ss=class extends k{constructor(){super(),this.unsubscribe=[],this.text="",this.open=It.state.open,this.unsubscribe.push(E.subscribeKey("view",()=>{It.hide()}),de.subscribeKey("open",t=>{t||It.hide()}),It.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),It.hide()}render(){return u`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return u`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();if(!this.open){const n=document.querySelector("w3m-modal"),r={width:t.width,height:t.height,left:t.left,top:t.top};if(n){const o=n.getBoundingClientRect();r.left=t.left-(window.innerWidth-o.width)/2,r.top=t.top-(window.innerHeight-o.height)/2}It.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||It.hide()}};ss.styles=[l5];ad([f()],ss.prototype,"text",void 0);ad([v()],ss.prototype,"open",void 0);ss=ad([I("w3m-tooltip-trigger")],ss);const d5=j`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Rs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Kr=class extends k{constructor(){super(),this.unsubscribe=[],this.open=It.state.open,this.message=It.state.message,this.triggerRect=It.state.triggerRect,this.variant=It.state.variant,this.unsubscribe.push(It.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,n=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${n}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,u`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};Kr.styles=[d5];Rs([v()],Kr.prototype,"open",void 0);Rs([v()],Kr.prototype,"message",void 0);Rs([v()],Kr.prototype,"triggerRect",void 0);Rs([v()],Kr.prototype,"variant",void 0);Kr=Rs([I("w3m-tooltip")],Kr);const u5=j`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Xt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Tt=class extends k{constructor(){var t,n,r,o;super(...arguments),this.unsubscribe=[],this.network=h.state.activeCaipNetwork,this.profileName=(t=h.getAccountData())==null?void 0:t.profileName,this.address=(n=h.getAccountData())==null?void 0:n.address,this.currentTab=(r=h.getAccountData())==null?void 0:r.currentTab,this.tokenBalance=(o=h.getAccountData())==null?void 0:o.tokenBalance,this.features=S.state.features,this.namespace=h.state.activeChain,this.activeConnectorIds=N.state.activeConnectorIds,this.remoteFeatures=S.state.remoteFeatures}firstUpdated(){h.fetchTokenBalance(),this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{t!=null&&t.address?(this.address=t.address,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):de.close()}),N.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),h.subscribeKey("activeChain",t=>this.namespace=t),h.subscribeKey("activeCaipNetwork",t=>this.network=t),S.subscribeKey("features",t=>this.features=t),S.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],n=t?N.getConnectorById(t):void 0,{icon:r,iconSize:o}=this.getAuthData();return u`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${r}
          iconSize=${o}
          alt=${n==null?void 0:n.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var i;const t=((i=this.features)==null?void 0:i.walletFeaturesOrder)||Ce.DEFAULT_FEATURES.walletFeaturesOrder;if(t.every(s=>{var a,c;return s==="send"||s==="receive"?!((a=this.features)!=null&&a[s]):s==="swaps"||s==="onramp"?!((c=this.remoteFeatures)!=null&&c[s]):!0}))return null;const r=t.map(s=>s==="receive"||s==="onramp"?"fund":s),o=[...new Set(r)];return u`<wui-flex gap="2">
      ${o.map(s=>{switch(s){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var i,s;if(!this.namespace)return null;const t=Ce.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=(i=this.features)==null?void 0:i.receive,r=((s=this.remoteFeatures)==null?void 0:s.onramp)&&t,o=je.isPayWithExchangeEnabled();return!r&&!n&&!o?null:u`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var r;const t=(r=this.remoteFeatures)==null?void 0:r.swaps,n=h.state.activeChain===_.CHAIN.EVM;return!t||!n?null:u`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var o;const t=(o=this.features)==null?void 0:o.send,n=h.state.activeChain,r=Ce.SEND_SUPPORTED_NAMESPACES.includes(n);return!t||!r?null:u`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>h.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===_.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?u`<w3m-account-activity-widget></w3m-account-activity-widget>`:u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var t;if(this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>=0){const n=T.calculateBalance(this.tokenBalance),{dollars:r="0",pennies:o="00"}=T.formatTokenBalance(n);return u`<wui-balance dollars=${r} pennies=${o}></wui-balance>`}return u`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const t=Ni.getTabsByNamespace(h.state.activeChain);return t.length===0?null:u`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${t}
    ></wui-tabs>`}onTabChange(t){h.setAccountProp("currentTab",t,this.namespace)}onFundWalletClick(){E.push("FundWallet")}onSwapClick(){var t,n,r;(t=this.network)!=null&&t.caipNetworkId&&!Ce.SWAP_SUPPORTED_NETWORKS.includes((n=this.network)==null?void 0:n.caipNetworkId)?E.push("UnsupportedChain",{swapUnsupportedChain:!0}):(B.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((r=this.network)==null?void 0:r.caipNetworkId)||"",isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("Swap"))}getAuthData(){const t=D.getConnectedSocialProvider(),n=D.getConnectedSocialUsername(),r=N.getAuthConnector(),o=(r==null?void 0:r.provider.getEmail())??"";return{name:Ge.getAuthName({email:o,socialUsername:n,socialProvider:t}),icon:t??"mail",iconSize:t?"xl":"md"}}onGoToProfileWalletsView(){E.push("ProfileWallets")}onSendClick(){var t;B.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((t=this.network)==null?void 0:t.caipNetworkId)||"",isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("WalletSend")}};Tt.styles=u5;Xt([v()],Tt.prototype,"watchTokenBalance",void 0);Xt([v()],Tt.prototype,"network",void 0);Xt([v()],Tt.prototype,"profileName",void 0);Xt([v()],Tt.prototype,"address",void 0);Xt([v()],Tt.prototype,"currentTab",void 0);Xt([v()],Tt.prototype,"tokenBalance",void 0);Xt([v()],Tt.prototype,"features",void 0);Xt([v()],Tt.prototype,"namespace",void 0);Xt([v()],Tt.prototype,"activeConnectorIds",void 0);Xt([v()],Tt.prototype,"remoteFeatures",void 0);Tt=Xt([I("w3m-account-wallet-features-widget")],Tt);var lh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $l=class extends k{constructor(){super(),this.unsubscribe=[],this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;const t=N.getConnectorId(this.namespace),n=N.getAuthConnector();return u`
      ${n&&t===_.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return u`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return u`<w3m-account-default-widget></w3m-account-default-widget>`}};lh([v()],$l.prototype,"namespace",void 0);$l=lh([I("w3m-account-view")],$l);const p5=j`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var li=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dn=class extends k{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),u`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?u`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:u`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Dn.styles=[ie,p5];li([f()],Dn.prototype,"size",void 0);li([f()],Dn.prototype,"name",void 0);li([f()],Dn.prototype,"imageSrc",void 0);li([f()],Dn.prototype,"walletIcon",void 0);li([f({type:Boolean})],Dn.prototype,"installed",void 0);li([f()],Dn.prototype,"badgeSize",void 0);Dn=li([I("wui-wallet-image")],Dn);const h5=j`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var yt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qe=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return u`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?u`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return u` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:u`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(t=>this.labelAndTagTemplate(t))}
      </wui-flex>
    `}labelAndTagTemplate({address:t,profileName:n,label:r,description:o,enableButton:i,buttonType:s,buttonLabel:a,buttonVariant:c,tagVariant:l,tagLabel:d,alignItems:m="flex-end"}){return u`
      <wui-flex justifyContent="space-between" alignItems=${m} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${r?u`<wui-text variant="sm-medium" color="secondary">${r}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${Ie.getTruncateString({string:n||t,charsStart:n?16:this.charsStart,charsEnd:n?0:this.charsEnd,truncate:n?"end":"middle"})}
            </wui-text>

            ${l&&d?u`<wui-tag variant=${l} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${o?u`<wui-text variant="sm-regular" color="secondary">${o}</wui-text>`:null}
        </wui-flex>

        ${i?this.buttonTemplate({buttonType:s,buttonLabel:a,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:t,buttonLabel:n,buttonVariant:r}){return u`
      <wui-button
        size="sm"
        variant=${r}
        @click=${t==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${t==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${n}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};Qe.styles=[ie,Te,h5];yt([f()],Qe.prototype,"address",void 0);yt([f()],Qe.prototype,"profileName",void 0);yt([f({type:Array})],Qe.prototype,"content",void 0);yt([f()],Qe.prototype,"alt",void 0);yt([f()],Qe.prototype,"imageSrc",void 0);yt([f()],Qe.prototype,"icon",void 0);yt([f()],Qe.prototype,"iconSize",void 0);yt([f()],Qe.prototype,"iconBadge",void 0);yt([f()],Qe.prototype,"iconBadgeSize",void 0);yt([f()],Qe.prototype,"buttonVariant",void 0);yt([f({type:Boolean})],Qe.prototype,"enableMoreButton",void 0);yt([f({type:Number})],Qe.prototype,"charsStart",void 0);yt([f({type:Number})],Qe.prototype,"charsEnd",void 0);Qe=yt([I("wui-active-profile-wallet-item")],Qe);const f5=j`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var tt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ke=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return u`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${Ie.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return u`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${M(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};Ke.styles=[ie,Te,f5];tt([f()],Ke.prototype,"address",void 0);tt([f()],Ke.prototype,"profileName",void 0);tt([f()],Ke.prototype,"alt",void 0);tt([f()],Ke.prototype,"buttonLabel",void 0);tt([f()],Ke.prototype,"buttonVariant",void 0);tt([f()],Ke.prototype,"imageSrc",void 0);tt([f()],Ke.prototype,"icon",void 0);tt([f()],Ke.prototype,"iconSize",void 0);tt([f()],Ke.prototype,"iconBadge",void 0);tt([f()],Ke.prototype,"iconBadgeSize",void 0);tt([f()],Ke.prototype,"rightIcon",void 0);tt([f()],Ke.prototype,"rightIconSize",void 0);tt([f({type:Boolean})],Ke.prototype,"loading",void 0);tt([f({type:Number})],Ke.prototype,"charsStart",void 0);tt([f({type:Number})],Ke.prototype,"charsEnd",void 0);Ke=tt([I("wui-inactive-profile-wallet-item")],Ke);const m5=j`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var cd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let as=class extends k{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,u`${this.template()}`}template(){return this.text?u`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};as.styles=[ie,m5];cd([f()],as.prototype,"text",void 0);cd([f()],as.prototype,"bgColor",void 0);as=cd([I("wui-separator")],as);const Ic={getAuthData(e){var s,a;const t=e.connectorId===_.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const n=((s=e==null?void 0:e.auth)==null?void 0:s.name)??D.getConnectedSocialProvider(),r=((a=e==null?void 0:e.auth)==null?void 0:a.username)??D.getConnectedSocialUsername(),o=N.getAuthConnector(),i=(o==null?void 0:o.provider.getEmail())??"";return{isAuth:!0,icon:n??"mail",iconSize:n?"xl":"md",name:t?Ge.getAuthName({email:i,socialUsername:r,socialProvider:n}):void 0}}},g5=j`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Nt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Rt={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},yr={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton",tron:"tron"},w5=[{namespace:"eip155",icon:yr.eip155,label:"EVM"},{namespace:"solana",icon:yr.solana,label:"Solana"},{namespace:"bip122",icon:yr.bip122,label:"Bitcoin"},{namespace:"ton",icon:yr.ton,label:"Ton"},{namespace:"tron",icon:yr.tron,label:"Tron"}],b5={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"},tron:{title:"Add TRON Wallet",description:"Add your first TRON wallet"}};let st=class extends k{constructor(){var t,n,r;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=h.state.activeChain,this.namespaces=Array.from(h.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=N.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=h.state.activeCaipNetwork,this.user=(t=h.getAccountData())==null?void 0:t.user,this.remoteFeatures=S.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(n=h.getAccountData(this.namespace))==null?void 0:n.caipAddress,this.profileName=(r=h.getAccountData(this.namespace))==null?void 0:r.profileName,this.unsubscribers.push($.subscribeKey("connections",()=>this.onConnectionsChange()),$.subscribeKey("recentConnections",()=>this.requestUpdate()),N.subscribeKey("activeConnectorIds",o=>{this.activeConnectorIds=o}),h.subscribeKey("activeCaipNetwork",o=>this.caipNetwork=o),h.subscribeChainProp("accountState",o=>{this.user=o==null?void 0:o.user}),S.subscribeKey("remoteFeatures",o=>this.remoteFeatures=o)),this.chainListener=h.subscribeChainProp("accountState",o=>{this.caipAddress=o==null?void 0:o.caipAddress,this.profileName=o==null?void 0:o.profileName},this.namespace)}disconnectedCallback(){var t,n;this.unsubscribers.forEach(r=>r()),(t=this.resizeObserver)==null||t.disconnect(),this.removeScrollListener(),(n=this.chainListener)==null||n.call(this)}firstUpdated(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".wallet-list");if(!t)return;const n=()=>this.updateScrollOpacity(t);requestAnimationFrame(n),t.addEventListener("scroll",n),this.resizeObserver=new ResizeObserver(n),this.resizeObserver.observe(t),n()}render(){const t=this.namespace;if(!t)throw new Error("Namespace is not set");return u`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(t)} ${this.renderConnections(t)}
        ${this.renderAddConnectionButton(t)}
      </wui-flex>
    `}renderTabs(){const t=this.namespaces.map(r=>w5.find(o=>o.namespace===r)).filter(Boolean);return t.length>1?u`
        <wui-tabs
          .onTabChange=${r=>this.handleTabChange(r)}
          .activeTab=${this.currentTab}
          .tabs=${t}
        ></wui-tabs>
      `:null}renderHeader(t){const r=this.getActiveConnections(t).flatMap(({accounts:o})=>o).length+(this.caipAddress?1:0);return u`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${yr[t]??yr.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${r>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${r}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>$.disconnect({namespace:t})}
          ?disabled=${!this.hasAnyConnections(t)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(t){const n=this.hasAnyConnections(t);return u`
      <wui-flex flexDirection="column" class=${nd({"wallet-list":!0,"active-wallets-box":n,"empty-wallet-list-box":!n})} rowgap="3">
        ${n?this.renderActiveConnections(t):this.renderEmptyState(t)}
      </wui-flex>
    `}renderActiveConnections(t){const n=this.getActiveConnections(t),r=this.activeConnectorIds[t],o=this.getPlainAddress();return u`
      ${o||r||n.length>0?u`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(t)} ${this.renderActiveConnectionsList(t)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(t)}
    `}renderActiveProfile(t){const n=this.activeConnectorIds[t];if(!n)return null;const{connections:r}=zt.getConnectionsData(t),o=N.getConnectorById(n),i=xe.getConnectorImage(o),s=this.getPlainAddress();if(!s)return null;const a=t===_.CHAIN.BITCOIN,c=Ic.getAuthData({connectorId:n,accounts:[]}),l=this.getActiveConnections(t).flatMap(w=>w.accounts).length>0,d=r.find(w=>w.connectorId===n),m=d==null?void 0:d.accounts.filter(w=>!Et.isLowerCaseMatch(w.address,s));return u`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${o==null?void 0:o.name}
          .content=${this.getProfileContent({address:s,connections:r,connectorId:n,namespace:t})}
          .charsStart=${Rt.ADDRESS_DISPLAY.START}
          .charsEnd=${Rt.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(s)?Rt.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?Rt.BADGE.SIZE:void 0}
          imageSrc=${i}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(t,n)}
          @switch=${()=>{a&&d&&(m!=null&&m[0])&&this.handleSwitchWallet(d,m[0].address,t)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${l?u`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(t){const n=this.getActiveConnections(t);return n.length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(n,!1,t)}
      </wui-flex>
    `}renderRecentConnections(t){const{recentConnections:n}=zt.getConnectionsData(t);return n.flatMap(o=>o.accounts).length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(n,!0,t)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(t,n,r){return t.filter(o=>o.accounts.length>0).map((o,i)=>{const s=N.getConnectorById(o.connectorId),a=xe.getConnectorImage(s)??"",c=Ic.getAuthData(o);return o.accounts.map((l,d)=>{const m=i!==0||d!==0,w=this.isAccountLoading(o.connectorId,l.address);return u`
            <wui-flex flexDirection="column">
              ${m?u`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${l.address}
                alt=${o.connectorId}
                buttonLabel=${n?"Connect":"Switch"}
                buttonVariant=${n?"neutral-secondary":"accent-secondary"}
                rightIcon=${n?"bin":"power"}
                rightIconSize="sm"
                class=${n?"recent-connection":"active-connection"}
                data-testid=${n?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(l.address)?Rt.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(l.address)?Rt.BADGE.SIZE:void 0}
                .icon=${c.icon}
                .iconSize=${c.iconSize}
                .loading=${w}
                .showBalance=${!1}
                .charsStart=${Rt.ADDRESS_DISPLAY.START}
                .charsEnd=${Rt.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(o,l.address,r)}
                @iconClick=${()=>this.handleWalletAction({connection:o,address:l.address,isRecentConnection:n,namespace:r})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(t){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(t))return null;const{title:n}=this.getChainLabelInfo(t);return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(t)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${n}</wui-text>
      </wui-list-item>
    `}renderEmptyState(t){const{title:n,description:r}=this.getChainLabelInfo(t);return u`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${r}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(t)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${n}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(t){var r,o,i;const n=this.namespaces[t];n&&((r=this.chainListener)==null||r.call(this),this.currentTab=this.namespaces.indexOf(n),this.namespace=n,this.caipAddress=(o=h.getAccountData(n))==null?void 0:o.caipAddress,this.profileName=(i=h.getAccountData(n))==null?void 0:i.profileName,this.chainListener=h.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress},n))}async handleSwitchWallet(t,n,r){var o;try{this.isSwitching=!0,this.lastSelectedConnectorId=t.connectorId,this.lastSelectedAddress=n,((o=this.caipNetwork)==null?void 0:o.chainNamespace)!==r&&(t!=null&&t.caipNetwork)&&(N.setFilterByNamespace(r),await h.switchActiveNetwork(t==null?void 0:t.caipNetwork)),await $.switchConnection({connection:t,address:n,namespace:r,closeModalOnConnect:!1,onChange({hasSwitchedAccount:s,hasSwitchedWallet:a}){a?ye.showSuccess("Wallet switched"):s&&ye.showSuccess("Account switched")}})}catch{ye.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(t){const{connection:n,address:r,isRecentConnection:o,namespace:i}=t;o?(D.deleteAddressFromConnection({connectorId:n.connectorId,address:r,namespace:i}),$.syncStorageConnections(),ye.showSuccess("Wallet deleted")):this.handleDisconnect(i,n.connectorId)}async handleDisconnect(t,n){try{await $.disconnect({id:n,namespace:t}),ye.showSuccess("Wallet disconnected")}catch{ye.showError("Failed to disconnect wallet")}}handleCopyAddress(t){T.copyToClopboard(t),ye.showSuccess("Address copied")}handleMore(){E.push("AccountSettings")}handleExternalLink(t){var r,o;const n=(o=(r=this.caipNetwork)==null?void 0:r.blockExplorers)==null?void 0:o.default.url;n&&T.openHref(`${n}/address/${t}`,"_blank")}handleAddConnection(t){N.setFilterByNamespace(t),E.push("Connect",{addWalletForNamespace:t})}getChainLabelInfo(t){return b5[t]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(t){var r,o;if(!this.namespace)return!1;const n=(o=(r=this.user)==null?void 0:r.accounts)==null?void 0:o.find(i=>i.type==="smartAccount");return n&&t?Et.isLowerCaseMatch(n.address,t):!1}getPlainAddress(){return this.caipAddress?T.getPlainAddress(this.caipAddress):void 0}getActiveConnections(t){const n=this.activeConnectorIds[t],{connections:r}=zt.getConnectionsData(t),[o]=r.filter(c=>Et.isLowerCaseMatch(c.connectorId,n));if(!n)return r;const i=t===_.CHAIN.BITCOIN,{address:s}=this.caipAddress?At.parseCaipAddress(this.caipAddress):{};let a=[...s?[s]:[]];return i&&o&&(a=o.accounts.map(c=>c.address)||[]),zt.excludeConnectorAddressFromConnections({connectorId:n,addresses:a,connections:r})}hasAnyConnections(t){const n=this.getActiveConnections(t),{recentConnections:r}=zt.getConnectionsData(t);return!!this.caipAddress||n.length>0||r.length>0}isAccountLoading(t,n){return Et.isLowerCaseMatch(this.lastSelectedConnectorId,t)&&Et.isLowerCaseMatch(this.lastSelectedAddress,n)&&this.isSwitching}getProfileContent(t){const{address:n,connections:r,connectorId:o,namespace:i}=t,[s]=r.filter(c=>Et.isLowerCaseMatch(c.connectorId,o));if(i===_.CHAIN.BITCOIN&&(s!=null&&s.accounts.every(c=>typeof c.type=="string")))return this.getBitcoinProfileContent(s.accounts,n);const a=Ic.getAuthData({connectorId:o,accounts:[]});return[{address:n,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(n)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(t,n){const r=t.length>1,o=this.getPlainAddress();return t.map(i=>{const s=Et.isLowerCaseMatch(i.address,o);let a="PAYMENT";return i.type==="ordinal"&&(a="ORDINALS"),{address:i.address,tagLabel:Et.isLowerCaseMatch(i.address,n)?"Active":void 0,tagVariant:Et.isLowerCaseMatch(i.address,n)?"success":void 0,enableButton:!0,...r?{label:a,alignItems:"flex-end",buttonType:s?"disconnect":"switch",buttonLabel:s?"Disconnect":"Switch",buttonVariant:s?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".wallet-list");t&&t.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".wallet-list");t&&this.updateScrollOpacity(t)}isMultiWalletEnabled(){var t;return!!((t=this.remoteFeatures)!=null&&t.multiWallet)}updateScrollOpacity(t){t.style.setProperty("--connect-scroll--top-opacity",va.interpolate([0,Rt.SCROLL_THRESHOLD],Rt.OPACITY_RANGE,t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",va.interpolate([0,Rt.SCROLL_THRESHOLD],Rt.OPACITY_RANGE,t.scrollHeight-t.scrollTop-t.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:t}=zt.getConnectionsData(this.namespace);t.length===0&&E.reset("ProfileWallets")}this.requestUpdate()}};st.styles=g5;Nt([v()],st.prototype,"currentTab",void 0);Nt([v()],st.prototype,"namespace",void 0);Nt([v()],st.prototype,"namespaces",void 0);Nt([v()],st.prototype,"caipAddress",void 0);Nt([v()],st.prototype,"profileName",void 0);Nt([v()],st.prototype,"activeConnectorIds",void 0);Nt([v()],st.prototype,"lastSelectedAddress",void 0);Nt([v()],st.prototype,"lastSelectedConnectorId",void 0);Nt([v()],st.prototype,"isSwitching",void 0);Nt([v()],st.prototype,"caipNetwork",void 0);Nt([v()],st.prototype,"user",void 0);Nt([v()],st.prototype,"remoteFeatures",void 0);st=Nt([I("w3m-profile-wallets-view")],st);var Yi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let qr=class extends k{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=h.state.activeCaipNetwork,this.features=S.state.features,this.remoteFeatures=S.state.remoteFeatures,this.exchangesLoading=je.state.isLoading,this.exchanges=je.state.exchanges,this.unsubscribe.push(S.subscribeKey("features",t=>this.features=t),S.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),h.subscribeKey("activeCaipNetwork",t=>{this.activeCaipNetwork=t,this.setDefaultPaymentAsset()}),je.subscribeKey("isLoading",t=>this.exchangesLoading=t),je.subscribeKey("exchanges",t=>this.exchanges=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){je.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await je.fetchExchanges())}render(){return u`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const t=await je.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),n=t.find(r=>r.metadata.symbol==="USDC")||t[0];n&&je.setPaymentAsset(n)}onrampTemplate(){var r;if(!this.activeCaipNetwork)return null;const t=(r=this.remoteFeatures)==null?void 0:r.onramp,n=Ce.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!t||!n?null:u`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!je.isPayWithExchangeSupported()?null:u`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){var n;return!((n=this.features)!=null&&n.receive)?null:u`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `}onBuyCrypto(){E.push("OnRampProviders")}onReceive(){E.push("WalletReceive")}onDepositFromExchange(){var t;je.reset(),E.push("PayWithExchange",{redirectView:(t=E.state.data)==null?void 0:t.redirectView})}};Yi([v()],qr.prototype,"activeCaipNetwork",void 0);Yi([v()],qr.prototype,"features",void 0);Yi([v()],qr.prototype,"remoteFeatures",void 0);Yi([v()],qr.prototype,"exchangesLoading",void 0);Yi([v()],qr.prototype,"exchanges",void 0);qr=Yi([I("w3m-fund-wallet-view")],qr);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y5=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,t,!1),mo(o,t);return!0},Na=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},dh=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),E5(t)}};function C5(e){this._$AN!==void 0?(Na(this),this._$AM=e,dh(this)):this._$AM=e}function v5(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)mo(r[i],!1),Na(r[i]);else r!=null&&(mo(r,!1),Na(r));else mo(this,e)}const E5=e=>{e.type==ih.CHILD&&(e._$AP??(e._$AP=v5),e._$AQ??(e._$AQ=C5))};class _5 extends sh{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),dh(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(mo(this,t),Na(this))}setValue(t){if(y5(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=()=>new A5;class A5{}const $c=new WeakMap,$s=oh(class extends _5{render(e){return Me}update(e,[t]){var r;const n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),Me}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=$c.get(t);n===void 0&&(n=new WeakMap,$c.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=$c.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),x5=j`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var tc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Fi=class extends k{constructor(){super(...arguments),this.inputElementRef=Is(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return u`
      <label data-size=${this.size}>
        <input
          ${$s(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Fi.styles=[ie,Te,x5];tc([f({type:Boolean})],Fi.prototype,"checked",void 0);tc([f({type:Boolean})],Fi.prototype,"disabled",void 0);tc([f()],Fi.prototype,"size",void 0);Fi=tc([I("wui-toggle")],Fi);const S5=j`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var uh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ra=class extends k{constructor(){super(...arguments),this.checked=!1}render(){return u`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Ra.styles=[ie,Te,S5];uh([f({type:Boolean})],Ra.prototype,"checked",void 0);Ra=uh([I("wui-certified-switch")],Ra);const T5=j`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Mt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pt=class extends k{constructor(){super(...arguments),this.inputElementRef=Is(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return u` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${$s(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${M(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?u`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?u`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?u`<wui-icon name="spinner" size="md"></wui-icon>`:u`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?u`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?u`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};pt.styles=[ie,Te,T5];Mt([f()],pt.prototype,"icon",void 0);Mt([f({type:Boolean})],pt.prototype,"disabled",void 0);Mt([f({type:Boolean})],pt.prototype,"loading",void 0);Mt([f()],pt.prototype,"placeholder",void 0);Mt([f()],pt.prototype,"type",void 0);Mt([f()],pt.prototype,"value",void 0);Mt([f()],pt.prototype,"errorText",void 0);Mt([f()],pt.prototype,"warningText",void 0);Mt([f()],pt.prototype,"onSubmit",void 0);Mt([f()],pt.prototype,"size",void 0);Mt([f({attribute:!1})],pt.prototype,"onKeyDown",void 0);pt=Mt([I("wui-input-text")],pt);const N5=j`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var ph=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ia=class extends k{constructor(){super(...arguments),this.inputComponentRef=Is(),this.inputValue=""}render(){return u`
      <wui-input-text
        ${$s(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?u`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",this.inputValue="",n.focus(),n.dispatchEvent(new Event("input")))}};Ia.styles=[ie,N5];ph([f()],Ia.prototype,"inputValue",void 0);Ia=ph([I("wui-search-bar")],Ia);const hh=ee`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,R5=j`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var fh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $a=class extends k{constructor(){super(...arguments),this.type="wallet"}render(){return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?u` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${hh}`:u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};$a.styles=[ie,Te,R5];fh([f()],$a.prototype,"type",void 0);$a=fh([I("wui-card-select-loader")],$a);const I5=Re`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ut=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ht=class extends k{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ie.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ie.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ie.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ie.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ie.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ie.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ie.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ie.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};ht.styles=[ie,I5];Ut([f()],ht.prototype,"gridTemplateRows",void 0);Ut([f()],ht.prototype,"gridTemplateColumns",void 0);Ut([f()],ht.prototype,"justifyItems",void 0);Ut([f()],ht.prototype,"alignItems",void 0);Ut([f()],ht.prototype,"justifyContent",void 0);Ut([f()],ht.prototype,"alignContent",void 0);Ut([f()],ht.prototype,"columnGap",void 0);Ut([f()],ht.prototype,"rowGap",void 0);Ut([f()],ht.prototype,"gap",void 0);Ut([f()],ht.prototype,"padding",void 0);Ut([f()],ht.prototype,"margin",void 0);ht=Ut([I("wui-grid")],ht);const $5=j`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Cn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pt=class extends k{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var n,r;const t=((n=this.wallet)==null?void 0:n.badge_type)==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${M(t?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${t?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,n;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="lg"
        imageSrc=${M(this.imageSrc)}
        name=${M((t=this.wallet)==null?void 0:t.name)}
        .installed=${((n=this.wallet)==null?void 0:n.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=xe.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await xe.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,B.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:E.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Pt.styles=$5;Cn([v()],Pt.prototype,"visible",void 0);Cn([v()],Pt.prototype,"imageSrc",void 0);Cn([v()],Pt.prototype,"imageLoading",void 0);Cn([v()],Pt.prototype,"isImpressed",void 0);Cn([f()],Pt.prototype,"explorerId",void 0);Cn([f()],Pt.prototype,"walletQuery",void 0);Cn([f()],Pt.prototype,"certified",void 0);Cn([f()],Pt.prototype,"displayIndex",void 0);Cn([f({type:Object})],Pt.prototype,"wallet",void 0);Pt=Cn([I("w3m-all-wallets-list-item")],Pt);const k5=j`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ks=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Su="local-paginator";let Gr=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!P.state.wallets.length,this.wallets=P.state.wallets,this.mobileFullScreen=S.state.enableMobileFullScreen,this.unsubscribe.push(P.subscribeKey("wallets",t=>this.wallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;this.loading=!0;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");t&&(await P.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${M(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return kt.getWalletConnectWallets(this.wallets).map((t,n)=>u`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${t.id}"
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
          explorerId=${t.id}
          certified=${this.badge==="certified"}
          displayIndex=${n}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:o,mobileFilteredOutWalletsLength:i}=P.state,s=window.innerWidth<352?3:4,a=t.length+n.length;let l=Math.ceil(a/s)*s-a+s;return l-=t.length?r.length%s:0,o===0&&r.length>0?null:o===0||[...r,...t,...n].length<o-(i??0)?this.shimmerTemplate(l,Su):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Su}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:o,count:i,wallets:s}=P.state;s.length<i&&P.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){N.selectWalletConnector(t)}};Gr.styles=k5;ks([v()],Gr.prototype,"loading",void 0);ks([v()],Gr.prototype,"wallets",void 0);ks([v()],Gr.prototype,"badge",void 0);ks([v()],Gr.prototype,"mobileFullScreen",void 0);Gr=ks([I("w3m-all-wallets-list")],Gr);const O5=Re`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Os=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zr=class extends k{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=S.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await P.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=P.state,n=kt.markWalletsAsInstalled(t),r=kt.filterWalletsByWcSupport(n);return r.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map((o,i)=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${i}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){N.selectWalletConnector(t)}};Zr.styles=O5;Os([v()],Zr.prototype,"loading",void 0);Os([v()],Zr.prototype,"mobileFullScreen",void 0);Os([f()],Zr.prototype,"query",void 0);Os([f()],Zr.prototype,"badge",void 0);Zr=Os([I("w3m-all-wallets-search")],Zr);var ld=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ka=class extends k{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=T.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return u`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",ye.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return T.isMobile()?u`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){E.push("ConnectingWalletConnect")}};ld([v()],ka.prototype,"search",void 0);ld([v()],ka.prototype,"badge",void 0);ka=ld([I("w3m-all-wallets-view")],ka);const P5=j`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Ji=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let sr=class extends k{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const t=`${this.size}-regular`;return u`
      <button ?disabled=${this.disabled} tabindex=${M(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${t} color="primary">${this.text}</wui-text>
      </button>
    `}};sr.styles=[ie,Te,P5];Ji([f()],sr.prototype,"text",void 0);Ji([f({type:Boolean})],sr.prototype,"disabled",void 0);Ji([f()],sr.prototype,"size",void 0);Ji([f()],sr.prototype,"icon",void 0);Ji([f()],sr.prototype,"tabIdx",void 0);sr=Ji([I("wui-list-button")],sr);const L5=Re`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Ps=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Yr=class extends k{constructor(){super(...arguments),this.disabled=!1}render(){return u`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${M(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?u`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};Yr.styles=[ie,L5];Ps([f()],Yr.prototype,"errorMessage",void 0);Ps([f({type:Boolean})],Yr.prototype,"disabled",void 0);Ps([f()],Yr.prototype,"value",void 0);Ps([f()],Yr.prototype,"tabIdx",void 0);Yr=Ps([I("wui-email-input")],Yr);const D5=j`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var di=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Mn=class extends k{constructor(){super(),this.unsubscribe=[],this.formRef=Is(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=S.state.remoteFeatures,this.hasExceededUsageLimit=P.state.plan.hasExceededUsageLimit,this.unsubscribe.push(S.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),P.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){var t;(t=this.formRef.value)==null||t.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const t=$.hasAnyConnection(_.CONNECTOR_ID.AUTH);return u`
      <form ${$s(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${M(this.tabIdx)}
          ?disabled=${t||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?u`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?u`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}async onSubmitEmail(t){var r;if(!Ni.isValidEmail(this.email)){Fp.open({displayMessage:Sw.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===h.state.activeChain)){const o=h.getFirstCaipNetworkSupportsAuthConnector();if(o){E.push("SwitchNetwork",{network:o});return}}try{if(this.loading)return;this.loading=!0,t.preventDefault();const o=N.getAuthConnector();if(!o)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await o.provider.connectEmail({email:this.email});if(B.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),i==="VERIFY_OTP")B.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),E.push("EmailVerifyOtp",{email:this.email});else if(i==="VERIFY_DEVICE")E.push("EmailVerifyDevice",{email:this.email});else if(i==="CONNECT"){const s=(r=this.remoteFeatures)==null?void 0:r.multiWallet;await $.connectExternal(o,h.state.activeChain),s?(E.replace("ProfileWallets"),ye.showSuccess("New Wallet Added")):E.replace("Account")}}catch(o){const i=T.parseError(o);i!=null&&i.includes("Invalid email")?this.error="Invalid email. Try again.":ye.showError(o)}finally{this.loading=!1}}onFocusEvent(){B.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Mn.styles=D5;di([f()],Mn.prototype,"tabIdx",void 0);di([v()],Mn.prototype,"email",void 0);di([v()],Mn.prototype,"loading",void 0);di([v()],Mn.prototype,"error",void 0);di([v()],Mn.prototype,"remoteFeatures",void 0);di([v()],Mn.prototype,"hasExceededUsageLimit",void 0);Mn=di([I("w3m-email-login-widget")],Mn);const M5=j`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var nc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const U5={lg:"md",md:"sm",sm:"sm"};let ji=class extends k{constructor(){super(...arguments),this.inputElementRef=Is(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=U5[this.size];return u`
      <label data-size=${this.size}>
        <input
          ${$s(this.inputElementRef)}
          ?checked=${M(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};ji.styles=[ie,M5];nc([f({type:Boolean})],ji.prototype,"checked",void 0);nc([f({type:Boolean})],ji.prototype,"disabled",void 0);nc([f()],ji.prototype,"size",void 0);ji=nc([I("wui-checkbox")],ji);const W5=j`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var mh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Oa=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=Ar.state.isLegalCheckboxChecked,this.unsubscribe.push(Ar.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var o;const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state,r=(o=S.state.features)==null?void 0:o.legalCheckbox;return!t&&!n||!r?null:u`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=S.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=S.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){Ar.setIsLegalCheckboxChecked(!this.checked)}};Oa.styles=[W5];mh([v()],Oa.prototype,"checked",void 0);Oa=mh([I("w3m-legal-checkbox")],Oa);const B5=j`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var gh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pa=class extends k{constructor(){super(...arguments),this.logo="google"}render(){return u`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Pa.styles=[ie,B5];gh([f()],Pa.prototype,"logo",void 0);Pa=gh([I("wui-logo")],Pa);const F5=j`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ls=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Jr=class extends k{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${M(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};Jr.styles=[ie,Te,F5];Ls([f()],Jr.prototype,"logo",void 0);Ls([f()],Jr.prototype,"name",void 0);Ls([f()],Jr.prototype,"tabIdx",void 0);Ls([f({type:Boolean})],Jr.prototype,"disabled",void 0);Jr=Ls([I("wui-list-social")],Jr);const j5=j`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var rc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let zi=class extends k{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${M(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};zi.styles=[ie,Te,j5];rc([f()],zi.prototype,"logo",void 0);rc([f({type:Boolean})],zi.prototype,"disabled",void 0);rc([f()],zi.prototype,"tabIdx",void 0);zi=rc([I("wui-logo-select")],zi);const z5=j`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var pr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Tu=2,Nu=6;let gn=class extends k{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=N.state.connectors,this.remoteFeatures=S.state.remoteFeatures,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.isPwaLoading=!1,this.hasExceededUsageLimit=P.state.plan.hasExceededUsageLimit,this.unsubscribe.push(N.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(n=>n.type==="AUTH")}),S.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),P.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var r;const t=this.walletGuide==="explore";let n=(r=this.remoteFeatures)==null?void 0:r.socials;return!n&&t?(n=Ce.DEFAULT_SOCIALS,this.renderTopViewContent(n)):n?this.renderTopViewContent(n):null}renderTopViewContent(t){return t.length===2?u` <wui-flex gap="2">
        ${t.slice(0,Tu).map(n=>u`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${M(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:u` <wui-list-button
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      size="lg"
      icon=${M(t[0])}
      text=${`Continue with ${Ie.capitalize(t[0])}`}
      tabIdx=${M(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var o;let t=(o=this.remoteFeatures)==null?void 0:o.socials;const n=this.walletGuide==="explore";return(!this.authConnector||!t||t.length===0)&&n&&(t=Ce.DEFAULT_SOCIALS),!t||t.length<=Tu?null:t&&t.length>Nu?u`<wui-flex gap="2">
        ${t.slice(1,Nu-1).map(i=>u`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${M(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${M(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?u`<wui-flex gap="2">
      ${t.slice(1,t.length).map(i=>u`<wui-logo-select
            data-testid=${`social-selector-${i}`}
            @click=${()=>{this.onSocialClick(i)}}
            logo=${i}
            tabIdx=${M(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){E.push("ConnectSocials")}async onSocialClick(t){if(this.hasExceededUsageLimit){E.push("UsageExceeded");return}if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===h.state.activeChain)){const r=h.getFirstCaipNetworkSupportsAuthConnector();if(r){E.push("SwitchNetwork",{network:r});return}}t&&await _w(t)}async handlePwaFrameLoad(){var t;if(T.isPWA()){this.isPwaLoading=!0;try{((t=this.authConnector)==null?void 0:t.provider)instanceof Y1&&await this.authConnector.provider.init()}catch(n){Fp.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:n.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return $.hasAnyConnection(_.CONNECTOR_ID.AUTH)}};gn.styles=z5;pr([f()],gn.prototype,"walletGuide",void 0);pr([f()],gn.prototype,"tabIdx",void 0);pr([v()],gn.prototype,"connectors",void 0);pr([v()],gn.prototype,"remoteFeatures",void 0);pr([v()],gn.prototype,"authConnector",void 0);pr([v()],gn.prototype,"isPwaLoading",void 0);pr([v()],gn.prototype,"hasExceededUsageLimit",void 0);gn=pr([I("w3m-social-login-widget")],gn);const H5=j`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var wh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const kc=4;let La=class extends k{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<kc;return u`${this.walletImages.slice(0,kc).map(({src:n,walletName:r})=>u`
          <wui-wallet-image
            size="sm"
            imageSrc=${n}
            name=${M(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(kc-this.walletImages.length)].map(()=>u` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};La.styles=[ie,H5];wh([f({type:Array})],La.prototype,"walletImages",void 0);La=wh([I("wui-all-wallets-image")],La);const V5=j`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var Ct=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const K5={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton",tron:"tron"};let et=class extends k{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,u`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${M(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){var t;return(t=this.namespaces)!=null&&t.length?u`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((n,r)=>{var o;return u`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(((o=this.namespaces)==null?void 0:o.length)??0)*2-r}
              class="namespace-icon"
            >
              <wui-icon
                name=${M(K5[n])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`})}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?u` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?u` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?u`<wui-wallet-image
        size=${M(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?u`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?u`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?u`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};et.styles=[ie,Te,V5];Ct([f({type:Array})],et.prototype,"walletImages",void 0);Ct([f()],et.prototype,"imageSrc",void 0);Ct([f()],et.prototype,"name",void 0);Ct([f()],et.prototype,"size",void 0);Ct([f()],et.prototype,"tagLabel",void 0);Ct([f()],et.prototype,"tagVariant",void 0);Ct([f()],et.prototype,"walletIcon",void 0);Ct([f()],et.prototype,"tabIdx",void 0);Ct([f({type:Array})],et.prototype,"namespaces",void 0);Ct([f({type:Boolean})],et.prototype,"disabled",void 0);Ct([f({type:Boolean})],et.prototype,"showAllWallets",void 0);Ct([f({type:Boolean})],et.prototype,"loading",void 0);Ct([f({type:String})],et.prototype,"loadingSpinnerColor",void 0);et=Ct([I("wui-list-wallet")],et);var Xi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xr=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=N.state.connectors,this.count=P.state.count,this.filteredCount=P.state.filteredWallets.length,this.isFetchingRecommendedWallets=P.state.isFetchingRecommendedWallets,this.unsubscribe.push(N.subscribeKey("connectors",t=>this.connectors=t),P.subscribeKey("count",t=>this.count=t),P.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),P.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(l=>l.id==="walletConnect"),{allWallets:n}=S.state;if(!t||n==="HIDE"||n==="ONLY_MOBILE"&&!T.isMobile())return null;const r=P.state.featured.length,o=this.count+r,i=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:i;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<o&&(a=`${s}+`);const c=$.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return u`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${M(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${c}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var t;B.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),E.push("AllWallets",{redirectView:(t=E.state.data)==null?void 0:t.redirectView})}};Xi([f()],Xr.prototype,"tabIdx",void 0);Xi([v()],Xr.prototype,"connectors",void 0);Xi([v()],Xr.prototype,"count",void 0);Xi([v()],Xr.prototype,"filteredCount",void 0);Xi([v()],Xr.prototype,"isFetchingRecommendedWallets",void 0);Xr=Xi([I("w3m-all-wallets-widget")],Xr);const q5=j`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Qi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ar=class extends k{constructor(){super(),this.unsubscribe=[],this.explorerWallets=P.state.explorerWallets,this.connections=$.state.connections,this.connectorImages=ze.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push($.subscribeKey("connections",t=>this.connections=t),ze.subscribeKey("connectorImages",t=>this.connectorImages=t),P.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t!=null&&t.length?t:P.state.explorerWallets}),P.subscribeKey("explorerWallets",t=>{var n;(n=this.explorerWallets)!=null&&n.length||(this.explorerWallets=t)})),T.isTelegram()&&T.isIos()&&(this.loadingTelegram=!$.state.wcUri,this.unsubscribe.push($.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return Ge.connectorList().map((t,n)=>t.kind==="connector"?this.renderConnector(t,n):this.renderWallet(t,n))}getConnectorNamespaces(t){var n;return t.subtype==="walletConnect"?[]:t.subtype==="multiChain"?((n=t.connector.connectors)==null?void 0:n.map(r=>r.chain))||[]:[t.connector.chain]}renderConnector(t,n){var m,w;const r=t.connector,o=xe.getConnectorImage(r)||this.connectorImages[(r==null?void 0:r.imageId)??""],s=(this.connections.get(r.chain)??[]).some(g=>Et.isLowerCaseMatch(g.connectorId,r.id));let a,c;t.subtype==="walletConnect"?(a="qr code",c="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",c=s?"info":"success"):(a=void 0,c=void 0);const l=$.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT),d=t.subtype==="walletConnect"||t.subtype==="external"?l:!1;return u`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${M(o)}
        .installed=${!0}
        name=${r.name??"Unknown"}
        .tagVariant=${c}
        tagLabel=${M(a)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${M(this.tabIdx)}
        ?disabled=${d}
        rdnsId=${M(((m=r.explorerWallet)==null?void 0:m.rdns)||void 0)}
        walletRank=${M((w=r.explorerWallet)==null?void 0:w.order)}
        .namespaces=${this.getConnectorNamespaces(t)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){var r;const n=(r=E.state.data)==null?void 0:r.redirectView;if(t.subtype==="walletConnect"){N.setActiveConnector(t.connector),T.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:n});return}if(t.subtype==="multiChain"){N.setActiveConnector(t.connector),E.push("ConnectingMultiChain",{redirectView:n});return}if(t.subtype==="injected"){N.setActiveConnector(t.connector),E.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){T.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:n});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}E.push("ConnectingExternal",{connector:t.connector,redirectView:n})}renderWallet(t,n){const r=t.wallet,o=xe.getWalletImage(r),s=$.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,c=t.subtype==="recent"?"recent":void 0,l=t.subtype==="recent"?"info":void 0;return u`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${M(o)}
        name=${r.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${M(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${M(r.rdns||void 0)}
        walletRank=${M(r.order)}
        tagLabel=${M(c)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){var i;const n=(i=E.state.data)==null?void 0:i.redirectView,r=h.state.activeChain;if(t.subtype==="featured"){N.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;N.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n});return}if(this.loadingTelegram)return;const o=r?N.getConnector({id:t.wallet.id,namespace:r}):void 0;o?E.push("ConnectingExternal",{connector:o,redirectView:n}):E.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n})}};ar.styles=q5;Qi([f({type:Number})],ar.prototype,"tabIdx",void 0);Qi([v()],ar.prototype,"explorerWallets",void 0);Qi([v()],ar.prototype,"connections",void 0);Qi([v()],ar.prototype,"connectorImages",void 0);Qi([v()],ar.prototype,"loadingTelegram",void 0);ar=Qi([I("w3m-connector-list")],ar);var bh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let kl=class extends k{constructor(){super(...arguments),this.tabIdx=void 0}render(){return u`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${M(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${M(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};bh([f()],kl.prototype,"tabIdx",void 0);kl=bh([I("w3m-wallet-login-list")],kl);const G5=j`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Wt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Z5=470;let ft=class extends k{constructor(){var t,n;super(),this.unsubscribe=[],this.connectors=N.state.connectors,this.authConnector=this.connectors.find(r=>r.type==="AUTH"),this.features=S.state.features,this.remoteFeatures=S.state.remoteFeatures,this.enableWallets=S.state.enableWallets,this.noAdapters=h.state.noAdapters,this.walletGuide="get-started",this.checked=Ar.state.isLegalCheckboxChecked,this.isEmailEnabled=((t=this.remoteFeatures)==null?void 0:t.email)&&!h.state.noAdapters,this.isSocialEnabled=((n=this.remoteFeatures)==null?void 0:n.socials)&&this.remoteFeatures.socials.length>0&&!h.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(N.subscribeKey("connectors",r=>{this.connectors=r,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),S.subscribeKey("features",r=>{this.features=r}),S.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),S.subscribeKey("enableWallets",r=>this.enableWallets=r),h.subscribeKey("noAdapters",r=>this.setEmailAndSocialEnableCheck(r,this.remoteFeatures)),Ar.subscribeKey("isLegalCheckboxChecked",r=>this.checked=r))}disconnectedCallback(){var n,r;this.unsubscribe.forEach(o=>o()),(n=this.resizeObserver)==null||n.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".connect");t==null||t.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var n,r;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t==null||t.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(r=this.resizeObserver)==null||r.observe(t),this.handleConnectListScroll())}render(){var w;const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state,r=(w=S.state.features)==null?void 0:w.legalCheckbox,s=!!(t||n)&&!!r&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:s},c=S.state.enableWalletGuide,l=this.enableWallets,d=this.isSocialEnabled||this.authConnector,m=s?-1:void 0;return u`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${nd(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${d&&l&&c&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(m)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var t;return Ni.hasFooter()||!((t=this.remoteFeatures)!=null&&t.reownBranding)?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(t,n){this.isEmailEnabled=(n==null?void 0:n.email)&&!t,this.isSocialEnabled=(n==null?void 0:n.socials)&&n.socials.length>0&&!t,this.remoteFeatures=n,this.noAdapters=t}checkIfAuthEnabled(t){const n=t.filter(o=>o.type===zp.CONNECTOR_TYPE_AUTH).map(o=>o.chain);return _.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o=>n.includes(o))}renderConnectMethod(t){const n=kt.getConnectOrderMethod(this.features,this.connectors);return u`${n.map((r,o)=>{switch(r){case"email":return u`${this.emailTemplate(t)} ${this.separatorTemplate(o,"email")}`;case"social":return u`${this.socialListTemplate(t)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return u`${this.walletListTemplate(t)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){const r=kt.getConnectOrderMethod(this.features,this.connectors)[t+1];return r?this.checkMethodEnabled(r)?r:this.checkIsThereNextMethod(t+1):void 0}separatorTemplate(t,n){const r=this.checkIsThereNextMethod(t),o=this.walletGuide==="explore";switch(n){case"wallet":return this.enableWallets&&r&&!o?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const i=r==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!i&&r?u`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const i=r==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!i&&r?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return!this.isEmailEnabled||!this.isAuthEnabled?null:u`<w3m-email-login-widget tabIdx=${M(t)}></w3m-email-login-widget>`}socialListTemplate(t){return!this.isSocialEnabled||!this.isAuthEnabled?null:u`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${M(t)}
    ></w3m-social-login-widget>`}walletListTemplate(t){var a,c;const n=this.enableWallets,r=((a=this.features)==null?void 0:a.emailShowWallets)===!1,o=(c=this.features)==null?void 0:c.collapseWallets,i=r||o;return!n||(T.isTelegram()&&(T.isSafari()||T.isIos())&&$.connectWalletConnect().catch(l=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&i?u`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${M(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:u`<w3m-wallet-login-list tabIdx=${M(t)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:u`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".connect");if(!t)return;t.scrollHeight>Z5?(t.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--connect-scroll--top-opacity",va.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",va.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){E.push("ConnectWallets")}};ft.styles=G5;Wt([v()],ft.prototype,"connectors",void 0);Wt([v()],ft.prototype,"authConnector",void 0);Wt([v()],ft.prototype,"features",void 0);Wt([v()],ft.prototype,"remoteFeatures",void 0);Wt([v()],ft.prototype,"enableWallets",void 0);Wt([v()],ft.prototype,"noAdapters",void 0);Wt([f()],ft.prototype,"walletGuide",void 0);Wt([v()],ft.prototype,"checked",void 0);Wt([v()],ft.prototype,"isEmailEnabled",void 0);Wt([v()],ft.prototype,"isSocialEnabled",void 0);Wt([v()],ft.prototype,"isAuthEnabled",void 0);ft=Wt([I("w3m-connect-view")],ft);const Y5=j`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var yh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Da=class extends k{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,i=245+r,s=360+r*1.75;return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Da.styles=[ie,Y5];yh([f({type:Number})],Da.prototype,"radius",void 0);Da=yh([I("wui-loading-thumbnail")],Da);const J5=j`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ic=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Hi=class extends k{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Hi.styles=[ie,Te,J5];ic([f({type:Boolean})],Hi.prototype,"disabled",void 0);ic([f()],Hi.prototype,"label",void 0);ic([f()],Hi.prototype,"buttonLabel",void 0);Hi=ic([I("wui-cta-button")],Hi);const X5=j`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Ch=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ma=class extends k{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=T.isMobile(),a=T.isIos(),c=T.isAndroid(),l=[n,r,i,o].filter(Boolean).length>1,d=Ie.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>E.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&T.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&T.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&T.openHref(this.wallet.homepage,"_blank")}};Ma.styles=[X5];Ch([f({type:Object})],Ma.prototype,"wallet",void 0);Ma=Ch([I("w3m-mobile-download-links")],Ma);const Q5=j`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Qt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class qe extends k{constructor(){var t,n,r,o,i;super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,this.connector=(n=E.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=xe.getConnectorImage(this.connector)??xe.getWalletImage(this.wallet),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=$.state.wcUri,this.error=$.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push($.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),$.subscribeKey("wcError",s=>this.error=s)),(T.isTelegram()||T.isSafari())&&T.isIos()&&$.state.wcUri&&((i=this.onConnect)==null||i.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),$.setWcError(!1),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),u`
      <wui-flex
        data-error=${M(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${M(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,n;$.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this)}loaderTemplate(){const t=Gn.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(T.copyToClopboard(this.uri),ye.showSuccess("Link copied"))}catch{ye.showError("Failed to copy")}}}qe.styles=Q5;Qt([v()],qe.prototype,"isRetrying",void 0);Qt([v()],qe.prototype,"uri",void 0);Qt([v()],qe.prototype,"error",void 0);Qt([v()],qe.prototype,"ready",void 0);Qt([v()],qe.prototype,"showRetry",void 0);Qt([v()],qe.prototype,"label",void 0);Qt([v()],qe.prototype,"secondaryBtnLabel",void 0);Qt([v()],qe.prototype,"secondaryLabel",void 0);Qt([v()],qe.prototype,"isLoading",void 0);Qt([f({type:Boolean})],qe.prototype,"isMobile",void 0);Qt([f()],qe.prototype,"onRetry",void 0);var eb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ru=class extends qe{constructor(){var n,r,o,i,s;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=$.getConnections((n=this.connector)==null?void 0:n.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=S.state.remoteFeatures,this.currentActiveConnectorId=N.state.activeConnectorIds[(r=this.connector)==null?void 0:r.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const t=(o=this.connector)==null?void 0:o.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(s=this.wallet)==null?void 0:s.order,view:E.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(N.subscribeKey("activeConnectorIds",a=>{var m;const c=a[t],l=(m=this.remoteFeatures)==null?void 0:m.multiWallet,{redirectView:d}=E.state.data??{};c!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&l?(E.replace("ProfileWallets"),ye.showSuccess("New Wallet Added")):d?E.replace(d):de.close())}),$.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==_.CONNECTOR_ID.COINBASE_SDK||!this.error)&&await $.connectExternal(this.connector,this.connector.chain)}}catch(t){t instanceof pn&&t.originalName===$t.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?B.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(t){var n,r;if((n=this.connector)!=null&&n.chain&&t.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const o=t.get(this.connector.chain)??[],i=(r=this.remoteFeatures)==null?void 0:r.multiWallet;if(o.length===0)E.replace("Connect");else{const s=zt.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(c=>c.accounts),a=zt.getConnectionsByConnectorId(o,this.connector.id).flatMap(c=>c.accounts);a.length===0?this.hasMultipleConnections&&i?(E.replace("ProfileWallets"),ye.showSuccess("Wallet deleted")):de.close():!s.every(l=>a.some(d=>Et.isLowerCaseMatch(l.address,d.address)))&&i&&E.replace("ProfileWallets")}}}isAlreadyConnected(t){return!!t&&this.connectionsByNamespace.some(n=>Et.isLowerCaseMatch(n.connectorId,t.id))}};Ru=eb([I("w3m-connecting-external-view")],Ru);const tb=Re`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var vh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ua=class extends k{constructor(){super(),this.unsubscribe=[],this.activeConnector=N.state.activeConnector,this.unsubscribe.push(N.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${M(xe.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${(t=this.activeConnector)==null?void 0:t.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var t,n;return(n=(t=this.activeConnector)==null?void 0:t.connectors)==null?void 0:n.map((r,o)=>{var i;return r.name?u`
            <w3m-list-wallet
              displayIndex=${o}
              imageSrc=${M(xe.getChainImage(r.chain))}
              name=${_.CHAIN_NAME_MAP[r.chain]}
              @click=${()=>this.onConnector(r)}
              size="sm"
              data-testid="wui-list-chain-${r.chain}"
              rdnsId=${(i=r.explorerWallet)==null?void 0:i.rdns}
            ></w3m-list-wallet>
          `:null})}onConnector(t){var o,i,s,a;const n=(i=(o=this.activeConnector)==null?void 0:o.connectors)==null?void 0:i.find(c=>c.chain===t.chain),r=(s=E.state.data)==null?void 0:s.redirectView;if(!n){ye.showError("Failed to find connector");return}n.id==="walletConnect"?T.isMobile()?E.push("AllWallets"):E.push("ConnectingWalletConnect",{redirectView:r}):E.push("ConnectingExternal",{connector:n,redirectView:r,wallet:(a=this.activeConnector)==null?void 0:a.explorerWallet})}};Ua.styles=tb;vh([v()],Ua.prototype,"activeConnector",void 0);Ua=vh([I("w3m-connecting-multi-chain-view")],Ua);var dd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wa=class extends k{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};dd([f({type:Array})],Wa.prototype,"platforms",void 0);dd([f()],Wa.prototype,"onSelectPlatfrom",void 0);Wa=dd([I("w3m-connecting-header")],Wa);var nb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Iu=class extends qe{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=N.state,n=t.find(r=>{var o,i,s;return r.type==="ANNOUNCED"&&((o=r.info)==null?void 0:o.rdns)===((i=this.wallet)==null?void 0:i.rdns)||r.type==="INJECTED"||r.name===((s=this.wallet)==null?void 0:s.name)});if(n)await $.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");de.close()}catch(t){t instanceof pn&&t.originalName===$t.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?B.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Iu=nb([I("w3m-connecting-wc-browser")],Iu);var rb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $u=class extends qe{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=T.formatNativeUrl(n,this.uri);$.setWcLinking({name:r,href:i}),$.setRecentWallet(this.wallet),T.openHref(o,"_blank")}catch{this.error=!0}}};$u=rb([I("w3m-connecting-wc-desktop")],$u);var eo=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qr=class extends qe{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=S.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{zt.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Ce.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push($.subscribeKey("wcUri",()=>{this.onHandleURI()})),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:E.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;$.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};eo([v()],Qr.prototype,"redirectDeeplink",void 0);eo([v()],Qr.prototype,"redirectUniversalLink",void 0);eo([v()],Qr.prototype,"target",void 0);eo([v()],Qr.prototype,"preferUniversalLinks",void 0);eo([v()],Qr.prototype,"isLoading",void 0);Qr=eo([I("w3m-connecting-wc-mobile")],Qr);var Ci={},Oc,ku;function ib(){return ku||(ku=1,Oc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Oc}var Pc={},zn={},Ou;function ui(){if(Ou)return zn;Ou=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return zn.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},zn.getSymbolTotalCodewords=function(r){return t[r]},zn.getBCHDigit=function(n){let r=0;for(;n!==0;)r++,n>>>=1;return r},zn.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},zn.isKanjiModeEnabled=function(){return typeof e<"u"},zn.toSJIS=function(r){return e(r)},zn}var Lc={},Pu;function ud(){return Pu||(Pu=1,function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}}(Lc)),Lc}var Dc,Lu;function ob(){if(Lu)return Dc;Lu=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const n=Math.floor(t/8);return(this.buffer[n]>>>7-t%8&1)===1},put:function(t,n){for(let r=0;r<n;r++)this.putBit((t>>>n-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},Dc=e,Dc}var Mc,Du;function sb(){if(Du)return Mc;Du=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,n,r,o){const i=t*this.size+n;this.data[i]=r,o&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,n){return this.data[t*this.size+n]},e.prototype.xor=function(t,n,r){this.data[t*this.size+n]^=r},e.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]},Mc=e,Mc}var Uc={},Mu;function ab(){return Mu||(Mu=1,function(e){const t=ui().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=t(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],i=e.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}}(Uc)),Uc}var Wc={},Uu;function cb(){if(Uu)return Wc;Uu=1;const e=ui().getSymbolSize,t=7;return Wc.getPositions=function(r){const o=e(r);return[[0,0],[o-t,0],[0,o-t]]},Wc}var Bc={},Wu;function lb(){return Wu||(Wu=1,function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,d=null;for(let m=0;m<i;m++){a=c=0,l=d=null;for(let w=0;w<i;w++){let g=o.get(m,w);g===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=g,a=1),g=o.get(w,m),g===d?c++:(c>=5&&(s+=t.N1+(c-5)),d=g,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function n(r,o,i){switch(r){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,n(o,c,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),e.applyMask(l,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),d<c&&(c=d,a=l)}return a}}(Bc)),Bc}var ea={},Bu;function Eh(){if(Bu)return ea;Bu=1;const e=ud(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ea.getBlocksCount=function(o,i){switch(i){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},ea.getTotalCodewordsCount=function(o,i){switch(i){case e.L:return n[(o-1)*4+0];case e.M:return n[(o-1)*4+1];case e.Q:return n[(o-1)*4+2];case e.H:return n[(o-1)*4+3];default:return}},ea}var Fc={},ao={},Fu;function db(){if(Fu)return ao;Fu=1;const e=new Uint8Array(512),t=new Uint8Array(256);return function(){let r=1;for(let o=0;o<255;o++)e[o]=r,t[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)e[o]=e[o-255]}(),ao.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},ao.exp=function(r){return e[r]},ao.mul=function(r,o){return r===0||o===0?0:e[t[r]+t[o]]},ao}var ju;function ub(){return ju||(ju=1,function(e){const t=db();e.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(r[s],o[a]);return i},e.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=t.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}}(Fc)),Fc}var jc,zu;function pb(){if(zu)return jc;zu=1;const e=ub();function t(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const i=e.mod(o,this.genPoly),s=this.degree-i.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(i,s),a}return i},jc=t,jc}var zc={},Hc={},Vc={},Hu;function _h(){return Hu||(Hu=1,Vc.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Vc}var nn={},Vu;function Ah(){if(Vu)return nn;Vu=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;nn.KANJI=new RegExp(n,"g"),nn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),nn.BYTE=new RegExp(r,"g"),nn.NUMERIC=new RegExp(e,"g"),nn.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+n+"$"),i=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return nn.testKanji=function(c){return o.test(c)},nn.testNumeric=function(c){return i.test(c)},nn.testAlphanumeric=function(c){return s.test(c)},nn}var Ku;function pi(){return Ku||(Ku=1,function(e){const t=_h(),n=Ah();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return n.testNumeric(i)?e.NUMERIC:n.testAlphanumeric(i)?e.ALPHANUMERIC:n.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return r(i)}catch{return s}}}(Hc)),Hc}var qu;function hb(){return qu||(qu=1,function(e){const t=ui(),n=Eh(),r=ud(),o=pi(),i=_h(),s=7973,a=t.getBCHDigit(s);function c(w,g,b){for(let y=1;y<=40;y++)if(g<=e.getCapacity(y,b,w))return y}function l(w,g){return o.getCharCountIndicator(w,g)+4}function d(w,g){let b=0;return w.forEach(function(y){const C=l(y.mode,g);b+=C+y.getBitsLength()}),b}function m(w,g){for(let b=1;b<=40;b++)if(d(w,b)<=e.getCapacity(b,g,o.MIXED))return b}e.from=function(g,b){return i.isValid(g)?parseInt(g,10):b},e.getCapacity=function(g,b,y){if(!i.isValid(g))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const C=t.getSymbolTotalCodewords(g),x=n.getTotalCodewordsCount(g,b),A=(C-x)*8;if(y===o.MIXED)return A;const R=A-l(y,g);switch(y){case o.NUMERIC:return Math.floor(R/10*3);case o.ALPHANUMERIC:return Math.floor(R/11*2);case o.KANJI:return Math.floor(R/13);case o.BYTE:default:return Math.floor(R/8)}},e.getBestVersionForData=function(g,b){let y;const C=r.from(b,r.M);if(Array.isArray(g)){if(g.length>1)return m(g,C);if(g.length===0)return 1;y=g[0]}else y=g;return c(y.mode,y.getLength(),C)},e.getEncodedBits=function(g){if(!i.isValid(g)||g<7)throw new Error("Invalid QR Code version");let b=g<<12;for(;t.getBCHDigit(b)-a>=0;)b^=s<<t.getBCHDigit(b)-a;return g<<12|b}}(zc)),zc}var Kc={},Gu;function fb(){if(Gu)return Kc;Gu=1;const e=ui(),t=1335,n=21522,r=e.getBCHDigit(t);return Kc.getEncodedBits=function(i,s){const a=i.bit<<3|s;let c=a<<10;for(;e.getBCHDigit(c)-r>=0;)c^=t<<e.getBCHDigit(c)-r;return(a<<10|c)^n},Kc}var qc={},Gc,Zu;function mb(){if(Zu)return Gc;Zu=1;const e=pi();function t(n){this.mode=e.NUMERIC,this.data=n.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let o,i,s;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),s=parseInt(i,10),r.put(s,10);const a=this.data.length-o;a>0&&(i=this.data.substr(o),s=parseInt(i,10),r.put(s,a*3+1))},Gc=t,Gc}var Zc,Yu;function gb(){if(Yu)return Zc;Yu=1;const e=pi(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(r){this.mode=e.ALPHANUMERIC,this.data=r}return n.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){let i;for(i=0;i+2<=this.data.length;i+=2){let s=t.indexOf(this.data[i])*45;s+=t.indexOf(this.data[i+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[i]),6)},Zc=n,Zc}var Yc,Ju;function wb(){return Ju||(Ju=1,Yc=function(t){for(var n=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer}),Yc}var Jc,Xu;function bb(){if(Xu)return Jc;Xu=1;const e=wb(),t=pi();function n(r){this.mode=t.BYTE,typeof r=="string"&&(r=e(r)),this.data=new Uint8Array(r)}return n.getBitsLength=function(o){return o*8},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){for(let o=0,i=this.data.length;o<i;o++)r.put(this.data[o],8)},Jc=n,Jc}var Xc,Qu;function yb(){if(Qu)return Xc;Qu=1;const e=pi(),t=ui();function n(r){this.mode=e.KANJI,this.data=r}return n.getBitsLength=function(o){return o*13},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let i=t.toSJIS(this.data[o]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),r.put(i,13)}},Xc=n,Xc}var ep;function Cb(){return ep||(ep=1,function(e){const t=pi(),n=mb(),r=gb(),o=bb(),i=yb(),s=Ah(),a=ui(),c=Mh();function l(x){return unescape(encodeURIComponent(x)).length}function d(x,A,R){const O=[];let G;for(;(G=x.exec(R))!==null;)O.push({data:G[0],index:G.index,mode:A,length:G[0].length});return O}function m(x){const A=d(s.NUMERIC,t.NUMERIC,x),R=d(s.ALPHANUMERIC,t.ALPHANUMERIC,x);let O,G;return a.isKanjiModeEnabled()?(O=d(s.BYTE,t.BYTE,x),G=d(s.KANJI,t.KANJI,x)):(O=d(s.BYTE_KANJI,t.BYTE,x),G=[]),A.concat(R,O,G).sort(function(F,Y){return F.index-Y.index}).map(function(F){return{data:F.data,mode:F.mode,length:F.length}})}function w(x,A){switch(A){case t.NUMERIC:return n.getBitsLength(x);case t.ALPHANUMERIC:return r.getBitsLength(x);case t.KANJI:return i.getBitsLength(x);case t.BYTE:return o.getBitsLength(x)}}function g(x){return x.reduce(function(A,R){const O=A.length-1>=0?A[A.length-1]:null;return O&&O.mode===R.mode?(A[A.length-1].data+=R.data,A):(A.push(R),A)},[])}function b(x){const A=[];for(let R=0;R<x.length;R++){const O=x[R];switch(O.mode){case t.NUMERIC:A.push([O,{data:O.data,mode:t.ALPHANUMERIC,length:O.length},{data:O.data,mode:t.BYTE,length:O.length}]);break;case t.ALPHANUMERIC:A.push([O,{data:O.data,mode:t.BYTE,length:O.length}]);break;case t.KANJI:A.push([O,{data:O.data,mode:t.BYTE,length:l(O.data)}]);break;case t.BYTE:A.push([{data:O.data,mode:t.BYTE,length:l(O.data)}])}}return A}function y(x,A){const R={},O={start:{}};let G=["start"];for(let U=0;U<x.length;U++){const F=x[U],Y=[];for(let Q=0;Q<F.length;Q++){const ue=F[Q],se=""+U+Q;Y.push(se),R[se]={node:ue,lastCount:0},O[se]={};for(let ae=0;ae<G.length;ae++){const oe=G[ae];R[oe]&&R[oe].node.mode===ue.mode?(O[oe][se]=w(R[oe].lastCount+ue.length,ue.mode)-w(R[oe].lastCount,ue.mode),R[oe].lastCount+=ue.length):(R[oe]&&(R[oe].lastCount=ue.length),O[oe][se]=w(ue.length,ue.mode)+4+t.getCharCountIndicator(ue.mode,A))}}G=Y}for(let U=0;U<G.length;U++)O[G[U]].end=0;return{map:O,table:R}}function C(x,A){let R;const O=t.getBestModeForData(x);if(R=t.from(A,O),R!==t.BYTE&&R.bit<O.bit)throw new Error('"'+x+'" cannot be encoded with mode '+t.toString(R)+`.
 Suggested mode is: `+t.toString(O));switch(R===t.KANJI&&!a.isKanjiModeEnabled()&&(R=t.BYTE),R){case t.NUMERIC:return new n(x);case t.ALPHANUMERIC:return new r(x);case t.KANJI:return new i(x);case t.BYTE:return new o(x)}}e.fromArray=function(A){return A.reduce(function(R,O){return typeof O=="string"?R.push(C(O,null)):O.data&&R.push(C(O.data,O.mode)),R},[])},e.fromString=function(A,R){const O=m(A,a.isKanjiModeEnabled()),G=b(O),U=y(G,R),F=c.find_path(U.map,"start","end"),Y=[];for(let Q=1;Q<F.length-1;Q++)Y.push(U.table[F[Q]].node);return e.fromArray(g(Y))},e.rawSplit=function(A){return e.fromArray(m(A,a.isKanjiModeEnabled()))}}(qc)),qc}var tp;function vb(){if(tp)return Pc;tp=1;const e=ui(),t=ud(),n=ob(),r=sb(),o=ab(),i=cb(),s=lb(),a=Eh(),c=pb(),l=hb(),d=fb(),m=pi(),w=Cb();function g(U,F){const Y=U.size,Q=i.getPositions(F);for(let ue=0;ue<Q.length;ue++){const se=Q[ue][0],ae=Q[ue][1];for(let oe=-1;oe<=7;oe++)if(!(se+oe<=-1||Y<=se+oe))for(let ce=-1;ce<=7;ce++)ae+ce<=-1||Y<=ae+ce||(oe>=0&&oe<=6&&(ce===0||ce===6)||ce>=0&&ce<=6&&(oe===0||oe===6)||oe>=2&&oe<=4&&ce>=2&&ce<=4?U.set(se+oe,ae+ce,!0,!0):U.set(se+oe,ae+ce,!1,!0))}}function b(U){const F=U.size;for(let Y=8;Y<F-8;Y++){const Q=Y%2===0;U.set(Y,6,Q,!0),U.set(6,Y,Q,!0)}}function y(U,F){const Y=o.getPositions(F);for(let Q=0;Q<Y.length;Q++){const ue=Y[Q][0],se=Y[Q][1];for(let ae=-2;ae<=2;ae++)for(let oe=-2;oe<=2;oe++)ae===-2||ae===2||oe===-2||oe===2||ae===0&&oe===0?U.set(ue+ae,se+oe,!0,!0):U.set(ue+ae,se+oe,!1,!0)}}function C(U,F){const Y=U.size,Q=l.getEncodedBits(F);let ue,se,ae;for(let oe=0;oe<18;oe++)ue=Math.floor(oe/3),se=oe%3+Y-8-3,ae=(Q>>oe&1)===1,U.set(ue,se,ae,!0),U.set(se,ue,ae,!0)}function x(U,F,Y){const Q=U.size,ue=d.getEncodedBits(F,Y);let se,ae;for(se=0;se<15;se++)ae=(ue>>se&1)===1,se<6?U.set(se,8,ae,!0):se<8?U.set(se+1,8,ae,!0):U.set(Q-15+se,8,ae,!0),se<8?U.set(8,Q-se-1,ae,!0):se<9?U.set(8,15-se-1+1,ae,!0):U.set(8,15-se-1,ae,!0);U.set(Q-8,8,1,!0)}function A(U,F){const Y=U.size;let Q=-1,ue=Y-1,se=7,ae=0;for(let oe=Y-1;oe>0;oe-=2)for(oe===6&&oe--;;){for(let ce=0;ce<2;ce++)if(!U.isReserved(ue,oe-ce)){let en=!1;ae<F.length&&(en=(F[ae]>>>se&1)===1),U.set(ue,oe-ce,en),se--,se===-1&&(ae++,se=7)}if(ue+=Q,ue<0||Y<=ue){ue-=Q,Q=-Q;break}}}function R(U,F,Y){const Q=new n;Y.forEach(function(ce){Q.put(ce.mode.bit,4),Q.put(ce.getLength(),m.getCharCountIndicator(ce.mode,U)),ce.write(Q)});const ue=e.getSymbolTotalCodewords(U),se=a.getTotalCodewordsCount(U,F),ae=(ue-se)*8;for(Q.getLengthInBits()+4<=ae&&Q.put(0,4);Q.getLengthInBits()%8!==0;)Q.putBit(0);const oe=(ae-Q.getLengthInBits())/8;for(let ce=0;ce<oe;ce++)Q.put(ce%2?17:236,8);return O(Q,U,F)}function O(U,F,Y){const Q=e.getSymbolTotalCodewords(F),ue=a.getTotalCodewordsCount(F,Y),se=Q-ue,ae=a.getBlocksCount(F,Y),oe=Q%ae,ce=ae-oe,en=Math.floor(Q/ae),to=Math.floor(se/ae),kh=to+1,wd=en-to,Oh=new c(wd);let ac=0;const Us=new Array(ae),bd=new Array(ae);let cc=0;const Ph=new Uint8Array(U.buffer);for(let mi=0;mi<ae;mi++){const dc=mi<ce?to:kh;Us[mi]=Ph.slice(ac,ac+dc),bd[mi]=Oh.encode(Us[mi]),ac+=dc,cc=Math.max(cc,dc)}const lc=new Uint8Array(Q);let yd=0,vn,En;for(vn=0;vn<cc;vn++)for(En=0;En<ae;En++)vn<Us[En].length&&(lc[yd++]=Us[En][vn]);for(vn=0;vn<wd;vn++)for(En=0;En<ae;En++)lc[yd++]=bd[En][vn];return lc}function G(U,F,Y,Q){let ue;if(Array.isArray(U))ue=w.fromArray(U);else if(typeof U=="string"){let en=F;if(!en){const to=w.rawSplit(U);en=l.getBestVersionForData(to,Y)}ue=w.fromString(U,en||40)}else throw new Error("Invalid data");const se=l.getBestVersionForData(ue,Y);if(!se)throw new Error("The amount of data is too big to be stored in a QR Code");if(!F)F=se;else if(F<se)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+se+`.
`);const ae=R(F,Y,ue),oe=e.getSymbolSize(F),ce=new r(oe);return g(ce,F),b(ce),y(ce,F),x(ce,Y,0),F>=7&&C(ce,F),A(ce,ae),isNaN(Q)&&(Q=s.getBestMask(ce,x.bind(null,ce,Y))),s.applyMask(Q,ce),x(ce,Y,Q),{modules:ce,version:F,errorCorrectionLevel:Y,maskPattern:Q,segments:ue}}return Pc.create=function(F,Y){if(typeof F>"u"||F==="")throw new Error("No input text");let Q=t.M,ue,se;return typeof Y<"u"&&(Q=t.from(Y.errorCorrectionLevel,t.M),ue=l.from(Y.version),se=s.from(Y.maskPattern),Y.toSJISFunc&&e.setToSJISFunction(Y.toSJISFunc)),G(F,ue,Q,se)},Pc}var Qc={},el={},np;function xh(){return np||(np=1,function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const i=e.getScale(r,o);return Math.floor((r+o.margin*2)*i)},e.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,c=e.getScale(s,i),l=Math.floor((s+i.margin*2)*c),d=i.margin*c,m=[i.color.light,i.color.dark];for(let w=0;w<l;w++)for(let g=0;g<l;g++){let b=(w*l+g)*4,y=i.color.light;if(w>=d&&g>=d&&w<l-d&&g<l-d){const C=Math.floor((w-d)/c),x=Math.floor((g-d)/c);y=m[a[C*s+x]?1:0]}r[b++]=y.r,r[b++]=y.g,r[b++]=y.b,r[b]=y.a}}}(el)),el}var rp;function Eb(){return rp||(rp=1,function(e){const t=xh();function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=t.getOptions(c);const d=t.getImageWidth(i.modules.size,c),m=l.getContext("2d"),w=m.createImageData(d,d);return t.qrToImageData(w.data,i,c),n(m,l,d),m.putImageData(w,0,0),l},e.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(i,s,c),d=c.type||"image/png",m=c.rendererOpts||{};return l.toDataURL(d,m.quality)}}(Qc)),Qc}var tl={},ip;function _b(){if(ip)return tl;ip=1;const e=xh();function t(o,i){const s=o.a/255,a=i+'="'+o.hex+'"';return s<1?a+" "+i+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function n(o,i,s){let a=o+i;return typeof s<"u"&&(a+=" "+s),a}function r(o,i,s){let a="",c=0,l=!1,d=0;for(let m=0;m<o.length;m++){const w=Math.floor(m%i),g=Math.floor(m/i);!w&&!l&&(l=!0),o[m]?(d++,m>0&&w>0&&o[m-1]||(a+=l?n("M",w+s,.5+g+s):n("m",c,0),c=0,l=!1),w+1<i&&o[m+1]||(a+=n("h",d),d=0)):c++}return a}return tl.render=function(i,s,a){const c=e.getOptions(s),l=i.modules.size,d=i.modules.data,m=l+c.margin*2,w=c.color.light.a?"<path "+t(c.color.light,"fill")+' d="M0 0h'+m+"v"+m+'H0z"/>':"",g="<path "+t(c.color.dark,"stroke")+' d="'+r(d,l,c.margin)+'"/>',b='viewBox="0 0 '+m+" "+m+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+b+' shape-rendering="crispEdges">'+w+g+`</svg>
`;return typeof a=="function"&&a(null,C),C},tl}var op;function Ab(){if(op)return Ci;op=1;const e=ib(),t=vb(),n=Eb(),r=_b();function o(i,s,a,c,l){const d=[].slice.call(arguments,1),m=d.length,w=typeof d[m-1]=="function";if(!w&&!e())throw new Error("Callback required as last argument");if(w){if(m<2)throw new Error("Too few arguments provided");m===2?(l=a,a=s,s=c=void 0):m===3&&(s.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=s,s=void 0))}else{if(m<1)throw new Error("Too few arguments provided");return m===1?(a=s,s=c=void 0):m===2&&!s.getContext&&(c=a,a=s,s=void 0),new Promise(function(g,b){try{const y=t.create(a,c);g(i(y,s,c))}catch(y){b(y)}})}try{const g=t.create(a,c);l(null,i(g,s,c))}catch(g){l(g)}}return Ci.create=t.create,Ci.toCanvas=o.bind(null,n.render),Ci.toDataURL=o.bind(null,n.renderToDataURL),Ci.toString=o.bind(null,function(i,s,a){return r.render(i,a)}),Ci}var xb=Ab();const Sb=us(xb),Tb=.1,sp=2.5,Sn=7;function nl(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+Tb}function Nb(e,t){const n=Array.prototype.slice.call(Sb.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const Rb={generate({uri:e,size:t,logoSize:n,padding:r=8,dotColor:o="var(--apkt-colors-black)"}){const s=[],a=Nb(e,"Q"),c=(t-2*r)/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:y,y:C})=>{const x=(a.length-Sn)*c*y+r,A=(a.length-Sn)*c*C+r,R=.45;for(let O=0;O<l.length;O+=1){const G=c*(Sn-O*2);s.push(ee`
            <rect
              fill=${O===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${O===0?G-10:G}
              rx= ${O===0?(G-10)*R:G*R}
              ry= ${O===0?(G-10)*R:G*R}
              stroke=${o}
              stroke-width=${O===0?10:0}
              height=${O===0?G-10:G}
              x= ${O===0?A+c*O+10/2:A+c*O}
              y= ${O===0?x+c*O+10/2:x+c*O}
            />
          `)}});const d=Math.floor((n+25)/c),m=a.length/2-d/2,w=a.length/2+d/2-1,g=[];a.forEach((y,C)=>{y.forEach((x,A)=>{if(a[C][A]&&!(C<Sn&&A<Sn||C>a.length-(Sn+1)&&A<Sn||C<Sn&&A>a.length-(Sn+1))&&!(C>m&&C<w&&A>m&&A<w)){const R=C*c+c/2+r,O=A*c+c/2+r;g.push([R,O])}})});const b={};return g.forEach(([y,C])=>{var x;b[y]?(x=b[y])==null||x.push(C):b[y]=[C]}),Object.entries(b).map(([y,C])=>{const x=C.filter(A=>C.every(R=>!nl(A,R,c)));return[Number(y),x]}).forEach(([y,C])=>{C.forEach(x=>{s.push(ee`<circle cx=${y} cy=${x} fill=${o} r=${c/sp} />`)})}),Object.entries(b).filter(([y,C])=>C.length>1).map(([y,C])=>{const x=C.filter(A=>C.some(R=>nl(A,R,c)));return[Number(y),x]}).map(([y,C])=>{C.sort((A,R)=>A<R?-1:1);const x=[];for(const A of C){const R=x.find(O=>O.some(G=>nl(A,G,c)));R?R.push(A):x.push([A])}return[y,x.map(A=>[A[0],A[A.length-1]])]}).forEach(([y,C])=>{C.forEach(([x,A])=>{s.push(ee`
              <line
                x1=${y}
                x2=${y}
                y1=${x}
                y2=${A}
                stroke=${o}
                stroke-width=${c/(sp/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Ib=j`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var hr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let wn=class extends k{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),u`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return ee`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Rb.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};wn.styles=[ie,Ib];hr([f()],wn.prototype,"uri",void 0);hr([f({type:Number})],wn.prototype,"size",void 0);hr([f()],wn.prototype,"theme",void 0);hr([f()],wn.prototype,"imageSrc",void 0);hr([f()],wn.prototype,"alt",void 0);hr([f({type:Boolean})],wn.prototype,"arenaClear",void 0);hr([f({type:Boolean})],wn.prototype,"farcaster",void 0);wn=hr([I("wui-qr-code")],wn);const $b=j`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Sh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ba=class extends qe{constructor(){super(),this.basic=!1}firstUpdated(){var t,n,r;this.basic||B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(r=this.wallet)==null?void 0:r.order,view:E.state.view}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(n=>n())}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;$.setWcLinking(void 0),$.setRecentWallet(this.wallet);const n=Gn.state.themeVariables["--apkt-qr-color"]??Gn.state.themeVariables["--w3m-qr-color"];return u` <wui-qr-code
      theme=${Gn.state.themeMode}
      uri=${this.uri}
      imageSrc=${M(xe.getWalletImage(this.wallet))}
      color=${M(n)}
      alt=${M(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return u`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Ba.styles=$b;Sh([f({type:Boolean})],Ba.prototype,"basic",void 0);Ba=Sh([I("w3m-connecting-wc-qrcode")],Ba);var kb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ap=class extends k{constructor(){var t,n,r;if(super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(r=this.wallet)==null?void 0:r.order,view:E.state.view}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${M(xe.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ap=kb([I("w3m-connecting-wc-unsupported")],ap);var Th=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ol=class extends qe{constructor(){var t,n;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Ce.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push($.subscribeKey("wcUri",()=>{this.updateLoadingState()})),B.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:(n=this.wallet)==null?void 0:n.order,view:E.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=T.formatUniversalUrl(n,this.uri);$.setWcLinking({name:r,href:i}),$.setRecentWallet(this.wallet),T.openHref(o,"_blank")}catch{this.error=!0}}};Th([v()],Ol.prototype,"isLoading",void 0);Ol=Th([I("w3m-connecting-wc-web")],Ol);const Ob=j`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var hi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Un=class extends k{constructor(){var t;super(),this.wallet=(t=E.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!S.state.siwx,this.remoteFeatures=S.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(S.subscribeKey("remoteFeatures",n=>this.remoteFeatures=n))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return S.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var n,r;if(!(this.platform==="browser"||S.state.manualWCControl&&!t))try{const{wcPairingExpiry:o,status:i}=$.state,{redirectView:s}=E.state.data??{};if(t||S.state.enableEmbedded||T.isPairingExpired(o)||i==="connecting"){const a=$.getConnections(h.state.activeChain),c=(n=this.remoteFeatures)==null?void 0:n.multiWallet,l=a.length>0;await $.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(l&&c?(E.replace("ProfileWallets"),ye.showSuccess("New Wallet Added")):s?E.replace(s):de.close())}}catch(o){if(o instanceof Error&&o.message.includes("An error occurred when attempting to switch chain")&&!S.state.enableNetworkSwitch&&h.state.activeChain){h.setActiveCaipNetwork(Zp.getUnsupportedNetwork(`${h.state.activeChain}:${(r=h.state.activeCaipNetwork)==null?void 0:r.id}`)),h.showUnsupportedChainUI();return}o instanceof pn&&o.originalName===$t.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?B.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):B.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),$.setWcError(!0),ye.showError(o.message??"Connection error"),$.resetWcConnection(),E.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:y})=>y).filter(Boolean),a=[...i?[i]:s??[]],c=S.state.isUniversalProvider?!1:a.length,l=t,d=r,m=$.checkInstalled(a),w=c&&m,g=n&&!T.isMobile();w&&!h.state.noAdapters&&this.platforms.push("browser"),l&&this.platforms.push(T.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),g&&this.platforms.push("desktop");const b=Dp.isCustomDeeplinkWallet(this.wallet.id,h.state.activeChain);!w&&c&&!h.state.noAdapters&&!b&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Un.styles=Ob;hi([v()],Un.prototype,"platform",void 0);hi([v()],Un.prototype,"platforms",void 0);hi([v()],Un.prototype,"isSiwxEnabled",void 0);hi([v()],Un.prototype,"remoteFeatures",void 0);hi([f({type:Boolean})],Un.prototype,"displayBranding",void 0);hi([f({type:Boolean})],Un.prototype,"basic",void 0);Un=hi([I("w3m-connecting-wc-view")],Un);var pd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Fa=class extends k{constructor(){super(),this.unsubscribe=[],this.isMobile=T.isMobile(),this.remoteFeatures=S.state.remoteFeatures,this.unsubscribe.push(S.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:n}=P.state,{customWallets:r}=S.state,o=D.getRecentWallets(),i=t.length||n.length||(r==null?void 0:r.length)||o.length;return u`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${i?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?u` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};pd([v()],Fa.prototype,"isMobile",void 0);pd([v()],Fa.prototype,"remoteFeatures",void 0);Fa=pd([I("w3m-connecting-wc-basic-view")],Fa);const Pb=Re`
  .continue-button-container {
    width: 100%;
  }
`;var Nh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ja=class extends k{constructor(){super(...arguments),this.loading=!1}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{T.openHref($f.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return u` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return u`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){E.push("RegisterAccountName"),B.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:Ze(h.state.activeChain)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT}})}};ja.styles=Pb;Nh([v()],ja.prototype,"loading",void 0);ja=Nh([I("w3m-choose-account-name-view")],ja);var Lb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let cp=class extends k{constructor(){var t;super(...arguments),this.wallet=(t=E.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(B.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),T.openHref(t.href,"_blank"))}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};cp=Lb([I("w3m-downloads-view")],cp);var Db=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Mb="https://walletconnect.com/explorer";let lp=class extends k{render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{T.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=P.state,{customWallets:r}=S.state;return[...n,...r??[],...t].slice(0,4).map((i,s)=>u`
        <w3m-list-wallet
          displayIndex=${s}
          name=${i.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${M(xe.getWalletImage(i))}
          @click=${()=>{this.onWalletClick(i)}}
        ></w3m-list-wallet>
      `)}onWalletClick(t){B.sendEvent({type:"track",event:"GET_WALLET",properties:{name:t.name,walletRank:void 0,explorerId:t.id,type:"homepage"}}),T.openHref(t.homepage??Mb,"_blank")}};lp=Db([I("w3m-get-wallet-view")],lp);const Ub=ee`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Wb=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Bb=ee`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Fb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,jb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,zb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Hb=ee`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Vb=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Kb=ee`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,qb=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Gb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Zb=ee`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,Yb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Jb=ee`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Xb=ee`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Qb=ee`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,ey=ee`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,ty=ee`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,ny=ee`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,ry=ee`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,iy=Re`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var hd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const oy={browser:Wb,dao:Bb,defi:Fb,defiAlt:jb,eth:zb,layers:Vb,lock:qb,login:Gb,network:Yb,nft:Jb,noun:Xb,profile:ty,system:ry,meld:Zb,onrampCard:Qb,google:Hb,pencil:ey,lightbulb:Kb,solana:ny,ton:rh,bitcoin:Ub};let cs=class extends k{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--apkt-visual-size-${this.size});
   `,u`${oy[this.name]}`}};cs.styles=[ie,iy];hd([f()],cs.prototype,"name",void 0);hd([f()],cs.prototype,"size",void 0);cs=hd([I("wui-visual")],cs);var Rh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pl=class extends k{constructor(){super(...arguments),this.data=[]}render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(t=>u`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${t.images.map(n=>u`<wui-visual size="sm" name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${t.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${t.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Rh([f({type:Array})],Pl.prototype,"data",void 0);Pl=Rh([I("w3m-help-widget")],Pl);var sy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const ay=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let dp=class extends k{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${ay}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){B.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),E.push("GetWallet")}};dp=sy([I("w3m-what-is-a-wallet-view")],dp);const cy=j`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Ih=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let za=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=Ar.state.isLegalCheckboxChecked,this.unsubscribe.push(Ar.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var c;const{termsConditionsUrl:t,privacyPolicyUrl:n}=S.state,r=(c=S.state.features)==null?void 0:c.legalCheckbox,i=!!(t||n)&&!!r,s=i&&!this.checked,a=s?-1:void 0;return u`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","3","3","3"]:"3"}
        gap="2"
        class=${M(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${M(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};za.styles=cy;Ih([v()],za.prototype,"checked",void 0);za=Ih([I("w3m-connect-wallets-view")],za);const ly=j`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var dy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ll=class extends k{render(){return u`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ll.styles=[ie,ly];Ll=dy([I("wui-loading-hexagon")],Ll);const uy=ee`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,py=ee`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,hy=j`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var fi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wn=class extends k{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:py,md:hh,lg:uy},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,u`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:u`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};Wn.styles=[ie,hy];fi([f()],Wn.prototype,"size",void 0);fi([f()],Wn.prototype,"name",void 0);fi([f({type:Object})],Wn.prototype,"networkImagesBySize",void 0);fi([f()],Wn.prototype,"imageSrc",void 0);fi([f({type:Boolean})],Wn.prototype,"selected",void 0);fi([f({type:Boolean})],Wn.prototype,"round",void 0);Wn=fi([I("wui-network-image")],Wn);const fy=Re`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var fd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ls=class extends k{constructor(){var t;super(),this.network=(t=E.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.getLabel(),n=this.getSubLabel();return u`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${M(xe.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:u`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${t}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const t=N.getConnectorId(h.state.activeChain);return N.getAuthConnector()&&t===_.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var r;const t=N.getConnectorId(h.state.activeChain);return N.getAuthConnector()&&t===_.CONNECTOR_ID.AUTH?`Switching to ${((r=this.network)==null?void 0:r.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var t;try{this.error=!1,h.state.activeChain!==((t=this.network)==null?void 0:t.chainNamespace)&&h.setIsSwitchingNamespace(!0),this.network&&(await h.switchActiveNetwork(this.network),await rn.isAuthenticated()&&E.goBack())}catch{this.error=!0}}};ls.styles=fy;fd([v()],ls.prototype,"showRetry",void 0);fd([v()],ls.prototype,"error",void 0);ls=fd([I("w3m-network-switch-view")],ls);const my=j`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ds=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ei=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${M(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?u`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:u`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};ei.styles=[ie,Te,my];Ds([f()],ei.prototype,"imageSrc",void 0);Ds([f()],ei.prototype,"name",void 0);Ds([f()],ei.prototype,"tabIdx",void 0);Ds([f({type:Boolean})],ei.prototype,"disabled",void 0);ei=Ds([I("wui-list-network")],ei);const gy=Re`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Ms=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ti=class extends k{constructor(){super(),this.unsubscribe=[],this.network=h.state.activeCaipNetwork,this.requestedCaipNetworks=h.getCaipNetworks(),this.search="",this.onDebouncedSearch=T.debounce(t=>{this.search=t},100),this.unsubscribe.push(ze.subscribeNetworkImages(()=>this.requestUpdate()),h.subscribeKey("activeCaipNetwork",t=>this.network=t),h.subscribe(()=>{this.requestedCaipNetworks=h.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return u`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}networksTemplate(){var r;const t=h.getAllApprovedCaipNetworkIds(),n=T.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=n==null?void 0:n.filter(o=>{var i;return(i=o==null?void 0:o.name)==null?void 0:i.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=n,(r=this.filteredNetworks)==null?void 0:r.map(o=>{var i;return u`
        <wui-list-network
          .selected=${((i=this.network)==null?void 0:i.id)===o.id}
          imageSrc=${M(xe.getNetworkImage(o))}
          type="network"
          name=${o.name??o.id}
          @click=${()=>this.onSwitchNetwork(o)}
          .disabled=${h.isCaipNetworkDisabled(o)}
          data-testid=${`w3m-network-switch-${o.name??o.id}`}
        ></wui-list-network>
      `})}onSwitchNetwork(t){Wp.onSwitchNetwork({network:t})}};ti.styles=gy;Ms([v()],ti.prototype,"network",void 0);Ms([v()],ti.prototype,"requestedCaipNetworks",void 0);Ms([v()],ti.prototype,"filteredNetworks",void 0);Ms([v()],ti.prototype,"search",void 0);ti=Ms([I("w3m-networks-view")],ti);const wy=j`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var $h=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const by={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Ha=class extends k{constructor(){var t,n;super(...arguments),this.unsubscribe=[],this.switchToChain=(t=E.state.data)==null?void 0:t.switchToChain,this.caipNetwork=(n=E.state.data)==null?void 0:n.network,this.activeChain=h.state.activeChain}firstUpdated(){this.unsubscribe.push(h.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.switchToChain?_.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const n=_.CHAIN_NAME_MAP[this.switchToChain];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${M(by[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${n}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${n}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${t} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(h.setIsSwitchingNamespace(!0),N.setFilterByNamespace(this.switchToChain),this.caipNetwork?await h.switchActiveNetwork(this.caipNetwork):h.setActiveNamespace(this.switchToChain),E.reset("Connect"))}};Ha.styles=wy;$h([f()],Ha.prototype,"activeChain",void 0);Ha=$h([I("w3m-switch-active-chain-view")],Ha);var yy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Cy=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let up=class extends k{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Cy}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{T.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};up=yy([I("w3m-what-is-a-network-view")],up);const vy=Re`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var md=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ds=class extends k{constructor(){var t;super(),this.swapUnsupportedChain=(t=E.state.data)==null?void 0:t.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=S.state.remoteFeatures,this.unsubscribe.push(ze.subscribeNetworkImages(()=>this.requestUpdate()),S.subscribeKey("remoteFeatures",n=>{this.remoteFeatures=n}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?u`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:u`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=h.getAllRequestedCaipNetworks(),n=h.getAllApprovedCaipNetworkIds(),r=T.sortRequestedNetworks(n,t);return(this.swapUnsupportedChain?r.filter(i=>Ce.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId)):r).map(i=>u`
        <wui-list-network
          imageSrc=${M(xe.getNetworkImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var t;try{this.disconnecting=!0;const n=h.state.activeChain,o=$.getConnections(n).length>0,i=n&&N.state.activeConnectorIds[n],s=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await $.disconnect(s?{id:i,namespace:n}:{}),o&&s&&(E.push("ProfileWallets"),ye.showSuccess("Wallet deleted"))}catch{B.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),ye.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(t){const n=h.getActiveCaipAddress(),r=h.getAllApprovedCaipNetworkIds(),o=h.getNetworkProp("supportsAllNetworks",t.chainNamespace),i=E.state.data;n?r!=null&&r.includes(t.caipNetworkId)?await h.switchActiveNetwork(t):o?E.push("SwitchNetwork",{...i,network:t}):E.push("SwitchNetwork",{...i,network:t}):n||(h.setActiveCaipNetwork(t),E.push("Connect"))}};ds.styles=vy;md([v()],ds.prototype,"disconnecting",void 0);md([v()],ds.prototype,"remoteFeatures",void 0);ds=md([I("w3m-unsupported-chain-view")],ds);const Ey=j`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var oc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Vi=class extends k{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return u`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};Vi.styles=[ie,Te,Ey];oc([f()],Vi.prototype,"icon",void 0);oc([f()],Vi.prototype,"text",void 0);oc([f()],Vi.prototype,"type",void 0);Vi=oc([I("wui-banner")],Vi);const _y=Re`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ay=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dl=class extends k{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=h.getAllRequestedCaipNetworks(),n=h.getAllApprovedCaipNetworkIds(),r=h.state.activeCaipNetwork,o=h.checkIfSmartAccountEnabled();let i=T.sortRequestedNetworks(n,t);if(o&&Ze(r==null?void 0:r.chainNamespace)===Ne.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;i=[r]}return i.filter(a=>a.chainNamespace===(r==null?void 0:r.chainNamespace)).map(a=>u`
        <wui-list-network
          imageSrc=${M(xe.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Dl.styles=_y;Dl=Ay([I("w3m-wallet-compatible-networks-view")],Dl);const xy=j`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var sc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ki=class extends k{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",u`${this.templateVisual()}`}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:u`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Ki.styles=[ie,xy];sc([f()],Ki.prototype,"imageSrc",void 0);sc([f()],Ki.prototype,"alt",void 0);sc([f({type:Boolean})],Ki.prototype,"borderRadiusFull",void 0);Ki=sc([I("wui-visual-thumbnail")],Ki);const Sy=j`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Ty=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ml=class extends k{constructor(){var t,n,r;super(...arguments),this.dappImageUrl=(t=S.state.metadata)==null?void 0:t.icons,this.walletImageUrl=(r=(n=h.getAccountData())==null?void 0:n.connectedWalletInfo)==null?void 0:r.icon}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return u`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,n){t.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Ml.styles=Sy;Ml=Ty([I("w3m-siwx-sign-message-thumbnails")],Ml);var gd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Va=class extends k{constructor(){var t;super(...arguments),this.dappName=(t=S.state.metadata)==null?void 0:t.name,this.isCancelling=!1,this.isSigning=!1}render(){return u`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await rn.requestSignMessage()}catch(t){if(t instanceof Error&&t.message.includes("OTP is required")){ye.showError({message:"Something went wrong. We need to verify your account again."}),E.replace("DataCapture");return}throw t}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await rn.cancelSignMessage().finally(()=>this.isCancelling=!1)}};gd([v()],Va.prototype,"isCancelling",void 0);gd([v()],Va.prototype,"isSigning",void 0);Va=gd([I("w3m-siwx-sign-message-view")],Va);Xa({tagName:"appkit-button",elementClass:El,react:Ka});Xa({tagName:"appkit-network-button",elementClass:Al,react:Ka});Xa({tagName:"appkit-connect-button",elementClass:_l,react:Ka});Xa({tagName:"appkit-account-button",elementClass:vl,react:Ka});export{Gn as $,yg as A,ql as B,Zp as C,va as D,Sw as E,ms as F,de as G,Ni as H,bf as I,Ii as J,S as K,Ar as L,Dy as M,$f as N,Ly as O,At as P,wi as Q,Cg as R,Rn as S,E as T,rn as U,Z as V,J as W,be as X,ye as Y,D as Z,vg as _,Fp as a,Xy as a$,Ie as a0,Of as a1,Cu as a2,ir as a3,$l as a4,ka as a5,vu as a6,ja as a7,Eu as a8,ft as a9,ky as aA,u as aB,Gy as aC,ow as aD,Uy as aE,e4 as aF,qy as aG,zh as aH,j as aI,I as aJ,Is as aK,nd as aL,Te as aM,zy as aN,zs as aO,Hy as aP,Ag as aQ,_w as aR,Op as aS,Hs as aT,ya as aU,t4 as aV,Vy as aW,Ze as aX,la as aY,k as aZ,Re as a_,za as aa,Ru as ab,Ua as ac,Fa as ad,Un as ae,cp as af,ns as ag,on as ah,Y1 as ai,Ne as aj,Fe as ak,qr as al,lp as am,_u as an,ls as ao,ti as ap,st as aq,rs as ar,Va as as,Ha as at,ds as au,Dl as av,up as aw,dp as ax,kt as ay,jy as az,P as b,Vh as b0,My as b1,f as b2,$s as b3,M as b4,$e as b5,v as b6,ie as b7,fu as b8,Qy as b9,wo as ba,He as bb,Ve as bc,Fy as bd,Wy as be,By as bf,n4 as bg,r4 as bh,Oe as bi,Gt as bj,vl as c,El as d,_l as e,pn as f,Al as g,ze as h,xe as i,fe as j,h as k,$ as l,zt as m,N as n,Ge as o,_ as p,Ce as q,zp as r,Qs as s,If as t,T as u,Ky as v,$t as w,B as x,je as y,Et as z};
