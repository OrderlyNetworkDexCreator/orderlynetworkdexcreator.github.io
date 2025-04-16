import{r as t,j as e}from"./index-C8dewyAZ.js";import{y as be,B as W,z as i}from"./Button-BTXMOV36.js";import{F as y,g as V,d as fe,p as te}from"./FormInput-g7esvGRP.js";function ye(){const o=t.useContext(be);if(o===void 0)throw new Error("useAuth must be used within an AuthProvider");return o}function P({placeholder:o="Search...",initialValue:E="",value:a,onSearch:u,className:N="",debounceTime:j=300,disabled:h=!1,clearOnEscape:v=!0}){const[I,c]=t.useState(E),d=t.useRef(null),n=t.useRef(null),p=a!==void 0?a:I;t.useEffect(()=>{a!==void 0&&c(a)},[a]),t.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]);const g=m=>{const b=m.target.value;c(b),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{u(b)},j)},w=m=>{v&&m.key==="Escape"&&(c(""),u(""),n.current&&n.current.focus())},R=()=>{c(""),u(""),n.current&&n.current.focus()};return e.jsxs("div",{className:`relative w-full ${N}`,children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx("div",{className:"i-mdi:magnify h-5 w-5 text-gray-400"})}),e.jsx("input",{ref:n,type:"text",className:"border-light/10 bg-dark/20 backdrop-blur-sm text-white placeholder-gray-400 text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 focus:ring-primary-light focus:border-primary-light focus:outline-none",placeholder:o,value:p,onChange:g,onKeyDown:w,disabled:h}),p&&e.jsx("button",{type:"button",onClick:R,className:"absolute inset-y-0 right-0 flex items-center pr-3",disabled:h,children:e.jsx("div",{className:"i-mdi:close-circle h-5 w-5 text-gray-400 hover:text-gray-200"})})]})}function we(){const[o,E]=t.useState([]),[a,u]=t.useState(!1),[N,j]=t.useState(""),[h,v]=t.useState(""),[I,c]=t.useState(!1),[d,n]=t.useState(null),[p,g]=t.useState([]),[w,R]=t.useState([]),[m,b]=t.useState(!1),[A,Q]=t.useState(""),[L,$]=t.useState(""),[ae,z]=t.useState(!1),[J,D]=t.useState(null),[C,X]=t.useState([]),[q,K]=t.useState(""),[U,G]=t.useState(""),[T,H]=t.useState(""),[le,Y]=t.useState(!1),[M,k]=t.useState(null),[B,F]=t.useState([]),[Z,_]=t.useState(""),[ne,O]=t.useState(null),[ie,ee]=t.useState(!0),{isAuthenticated:re,token:x}=ye();t.useEffect(()=>{async function r(){if(!re){O(!1),ee(!1);return}try{const s=await V("api/admin/check",x);O(s.isAdmin),s.isAdmin&&(se(),S())}catch(s){console.error("Error checking admin status:",s),O(!1)}finally{ee(!1)}}r()},[re,x]);const S=async()=>{u(!0);try{const r=await V("api/admin/dexes",x);E(r.dexes)}catch(r){console.error("Error loading DEXes:",r),i.error("Failed to load DEXes")}finally{u(!1)}},se=async()=>{b(!0);try{const r=await V("api/admin/users",x);R(r.admins)}catch(r){console.error("Error loading admin users:",r),i.error("Failed to load admin users")}finally{b(!1)}},oe=r=>{if(j(r),!r){g([]);return}const s=r.toLowerCase(),f=o.filter(l=>l.user.address.toLowerCase().includes(s)||l.brokerName.toLowerCase().includes(s));g(f)},de=r=>{if(K(r),!r){X([]);return}const s=r.toLowerCase(),f=o.filter(l=>l.id.toLowerCase().includes(s)||l.brokerName.toLowerCase().includes(s)||l.brokerId.toLowerCase().includes(s));X(f)},ce=r=>{if(_(r),!r){F([]);return}const s=r.toLowerCase(),f=o.filter(l=>l.repoUrl&&(l.id.toLowerCase().includes(s)||l.brokerName.toLowerCase().includes(s)||l.repoUrl.toLowerCase().includes(s)));F(f)},me=r=>{v(r.user.address),g([]),j("")},xe=r=>{Q(r.id),$(r.brokerId),X([]),K("")},ue=r=>{if(G(r.id),r.repoUrl){const s=r.repoUrl.match(/github\.com\/[^/]+\/([^/]+)/);s&&s[1]&&H(s[1])}F([]),_("")},he=async r=>{if(r.preventDefault(),!h.trim()){i.error("Please enter a wallet address");return}c(!0),n(null);try{const s=await fe("api/dex/admin/delete",{walletAddress:h.trim()},x,{showToastOnError:!1});n(s),i.success("DEX deleted successfully"),S()}catch(s){console.error("Error in admin component:",s),s instanceof Error?n({error:s.message}):n({error:"An unknown error occurred"})}finally{c(!1)}},pe=async r=>{if(r.preventDefault(),!A.trim()){i.error("Please enter a DEX ID");return}if(!L.trim()){i.error("Please enter a Broker ID");return}z(!0),D(null);try{const s=await te(`api/admin/dex/${A}/broker-id`,{brokerId:L.trim()},x,{showToastOnError:!1});D(s),i.success("Broker ID updated successfully"),S()}catch(s){console.error("Error updating broker ID:",s),s instanceof Error?D({error:s.message}):D({error:"An unknown error occurred"})}finally{z(!1)}},ge=async r=>{if(r.preventDefault(),!U.trim()){i.error("Please enter a DEX ID");return}if(!T.trim()){i.error("Please enter a new repository name");return}Y(!0),k(null);try{const s=await te(`api/admin/dex/${U}/rename-repo`,{newName:T.trim()},x,{showToastOnError:!1});k(s),i.success("Repository renamed successfully"),S()}catch(s){console.error("Error renaming repository:",s),s instanceof Error?k({error:s.message}):k({error:"An unknown error occurred"})}finally{Y(!1)}};return ie?e.jsxs("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10 text-center",children:[e.jsx("div",{className:"i-svg-spinners:pulse-rings-multiple h-12 w-12 mx-auto text-primary-light mb-4"}),e.jsx("p",{children:"Checking admin status..."})]}):ne?e.jsxs("div",{className:"w-full max-w-4xl mx-auto px-4 py-6 md:py-10",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-6",children:"Admin Tools"}),e.jsxs("div",{className:"bg-warning/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-warning/20 mb-6",children:[e.jsx("p",{className:"text-warning font-medium mb-2",children:"⚠️ Warning: Admin Only Area"}),e.jsx("p",{className:"text-gray-300 text-sm",children:"This page contains tools for administrators only. Improper use can result in data loss."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-light/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-light/10",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-medium",children:"Admin Users"}),e.jsx("button",{onClick:se,disabled:m,className:"p-1 rounded hover:bg-dark/50",title:"Refresh admin list",children:e.jsx("div",{className:`i-mdi:refresh h-5 w-5 ${m?"animate-spin":""}`})})]}),e.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"List of users with admin privileges."}),m?e.jsxs("div",{className:"text-center py-4",children:[e.jsx("div",{className:"i-svg-spinners:pulse-rings h-8 w-8 mx-auto text-primary-light mb-2"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Loading admins..."})]}):e.jsx(e.Fragment,{children:w.length>0?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left border-b border-light/10",children:[e.jsx("th",{className:"px-2 py-2",children:"Address"}),e.jsx("th",{className:"px-2 py-2",children:"Added On"})]})}),e.jsx("tbody",{children:w.map(r=>e.jsxs("tr",{className:"border-b border-light/5",children:[e.jsxs("td",{className:"px-2 py-3 font-mono text-xs",children:[r.address.substring(0,6),"...",r.address.substring(r.address.length-4)]}),e.jsx("td",{className:"px-2 py-3",children:new Date(r.createdAt).toLocaleDateString()})]},r.id))})]})}):e.jsx("p",{className:"text-gray-400 text-sm italic",children:"No admin users found."})})]}),e.jsxs("div",{className:"bg-light/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-light/10",children:[e.jsx("h2",{className:"text-xl font-medium mb-4",children:"Delete DEX by Wallet Address"}),e.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"This tool allows you to delete a DEX associated with a specific wallet address. This action cannot be undone."}),e.jsxs("form",{onSubmit:he,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"walletSearch",className:"block text-sm font-medium mb-1",children:"Search DEX"}),e.jsx(P,{placeholder:"Search by wallet or broker name...",onSearch:oe,initialValue:N,className:"mb-2"}),p.length>0&&e.jsx("div",{className:"mt-2 border border-light/10 rounded-lg overflow-hidden",children:e.jsx("div",{className:"max-h-48 overflow-y-auto",children:p.map(r=>e.jsxs("div",{className:"p-2 hover:bg-primary-light/10 cursor-pointer flex justify-between items-center border-b border-light/5 last:border-b-0",onClick:()=>me(r),children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.brokerName||"Unnamed DEX"}),e.jsxs("div",{className:"text-xs font-mono text-gray-400",children:[r.user.address.substring(0,8),"...",r.user.address.substring(r.user.address.length-6)]})]}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(r.createdAt).toLocaleDateString()})]},r.id))})}),N&&p.length===0&&!a&&e.jsx("div",{className:"text-sm text-gray-400 p-2",children:"No DEXes found matching your search."}),a&&e.jsx("div",{className:"text-center py-2",children:e.jsx("div",{className:"i-svg-spinners:pulse-rings h-6 w-6 mx-auto text-primary-light/80"})})]}),e.jsx(y,{id:"walletAddress",label:"Wallet Address",value:h,onChange:r=>v(r.target.value),placeholder:"0x...",helpText:"Enter the full wallet address",required:!0}),e.jsx(W,{type:"submit",variant:"danger",isLoading:I,loadingText:"Deleting...",className:"mt-2",children:"Delete DEX"})]}),d&&e.jsxs("div",{className:"mt-6 p-4 bg-dark/70 rounded-lg border border-light/10 overflow-x-auto",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Result:"}),e.jsx("pre",{className:"text-xs text-gray-300",children:JSON.stringify(d,null,2)})]})]}),e.jsxs("div",{className:"bg-light/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-light/10",children:[e.jsx("h2",{className:"text-xl font-medium mb-4",children:"Update Broker ID"}),e.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Update the broker ID for a specific DEX. This affects the DEX's integration with the Orderly Network."}),e.jsxs("form",{onSubmit:pe,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"brokerSearch",className:"block text-sm font-medium mb-1",children:"Search DEX"}),e.jsx(P,{placeholder:"Search by DEX ID or broker name...",onSearch:de,initialValue:q,className:"mb-2"}),C.length>0&&e.jsx("div",{className:"mt-2 border border-light/10 rounded-lg overflow-hidden",children:e.jsx("div",{className:"max-h-48 overflow-y-auto",children:C.map(r=>e.jsxs("div",{className:"p-2 hover:bg-primary-light/10 cursor-pointer flex justify-between border-b border-light/5 last:border-b-0",onClick:()=>xe(r),children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.brokerName||"Unnamed DEX"}),e.jsxs("div",{className:"text-xs text-gray-400",children:["ID: ",r.id.substring(0,8),"..."]}),e.jsxs("div",{className:"text-xs text-gray-400",children:["Current Broker ID: ",r.brokerId]})]}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(r.createdAt).toLocaleDateString()})]},r.id))})}),q&&C.length===0&&!a&&e.jsx("div",{className:"text-sm text-gray-400 p-2",children:"No DEXes found matching your search."}),a&&e.jsx("div",{className:"text-center py-2",children:e.jsx("div",{className:"i-svg-spinners:pulse-rings h-6 w-6 mx-auto text-primary-light/80"})})]}),e.jsx(y,{id:"dexId",label:"DEX ID",value:A,onChange:r=>Q(r.target.value),placeholder:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",helpText:"Enter the UUID of the DEX to update",required:!0}),e.jsx(y,{id:"brokerId",label:"New Broker ID",value:L,onChange:r=>$(r.target.value),placeholder:"new-broker-id",helpText:"Enter the new broker ID (1-50 characters)",required:!0,minLength:1,maxLength:50}),e.jsx(W,{type:"submit",variant:"primary",isLoading:ae,loadingText:"Updating...",className:"mt-2",children:"Update Broker ID"})]}),J&&e.jsxs("div",{className:"mt-6 p-4 bg-dark/70 rounded-lg border border-light/10 overflow-x-auto",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Result:"}),e.jsx("pre",{className:"text-xs text-gray-300",children:JSON.stringify(J,null,2)})]})]}),e.jsxs("div",{className:"bg-light/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-light/10",children:[e.jsx("h2",{className:"text-xl font-medium mb-4",children:"Rename Repository"}),e.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Rename the GitHub repository for a DEX. This will update all references including the deployment URL."}),e.jsxs("form",{onSubmit:ge,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"repoSearch",className:"block text-sm font-medium mb-1",children:"Search DEX"}),e.jsx(P,{placeholder:"Search by DEX ID or broker name...",onSearch:ce,initialValue:Z,className:"mb-2"}),B.length>0&&e.jsx("div",{className:"mt-2 border border-light/10 rounded-lg overflow-hidden",children:e.jsx("div",{className:"max-h-48 overflow-y-auto",children:B.map(r=>e.jsxs("div",{className:"p-2 hover:bg-primary-light/10 cursor-pointer flex justify-between border-b border-light/5 last:border-b-0",onClick:()=>ue(r),children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.brokerName||"Unnamed DEX"}),e.jsxs("div",{className:"text-xs text-gray-400",children:["ID: ",r.id.substring(0,8),"..."]}),r.repoUrl&&e.jsxs("div",{className:"text-xs text-gray-400 truncate max-w-xs",children:["Repo:"," ",r.repoUrl.replace("https://github.com/","")]})]}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(r.createdAt).toLocaleDateString()})]},r.id))})}),Z&&B.length===0&&!a&&e.jsx("div",{className:"text-sm text-gray-400 p-2",children:"No DEXes found matching your search."}),a&&e.jsx("div",{className:"text-center py-2",children:e.jsx("div",{className:"i-svg-spinners:pulse-rings h-6 w-6 mx-auto text-primary-light/80"})})]}),e.jsx(y,{id:"repoDexId",label:"DEX ID",value:U,onChange:r=>G(r.target.value),placeholder:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",helpText:"Enter the UUID of the DEX to update",required:!0}),e.jsx(y,{id:"newRepoName",label:"New Repository Name",value:T,onChange:r=>H(r.target.value),placeholder:"new-repo-name",helpText:"Lowercase letters, numbers, and hyphens only",required:!0,pattern:"^[a-z0-9-]+$",minLength:1,maxLength:90}),e.jsx(W,{type:"submit",variant:"primary",isLoading:le,loadingText:"Renaming...",className:"mt-2",children:"Rename Repository"})]}),M&&e.jsxs("div",{className:"mt-6 p-4 bg-dark/70 rounded-lg border border-light/10 overflow-x-auto",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Result:"}),e.jsx("pre",{className:"text-xs text-gray-300",children:JSON.stringify(M,null,2)})]})]})]})]}):e.jsxs("div",{className:"w-full max-w-3xl mx-auto px-4 py-6 md:py-10",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-6",children:"Admin Tools"}),e.jsxs("div",{className:"bg-error/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-error/20",children:[e.jsx("p",{className:"text-error font-medium mb-2",children:"⚠️ Access Denied"}),e.jsx("p",{className:"text-gray-300 text-sm",children:"You don't have admin privileges to access this page."})]})]})}export{we as default};
