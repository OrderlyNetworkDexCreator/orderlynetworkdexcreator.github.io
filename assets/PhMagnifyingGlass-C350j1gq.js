import{n as f,Y as g,t as s,p as h,O as d,s as u}from"./property-C4rCS4FB.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"d48aad66738a791ef83dfa7aaa14e8a9f6f3fdc2"};var a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="178089e9-66d6-440b-b493-5964df72caf5",t._sentryDebugIdIdentifier="sentry-dbid-178089e9-66d6-440b-b493-5964df72caf5")}catch{}})();var y=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(t,a,i,o)=>{for(var r=o>1?void 0:o?c(a,i):a,n=t.length-1,p;n>=0;n--)(p=t[n])&&(r=(o?p(a,i,r):p(r))||r);return o&&r&&y(a,i,r),r};let e=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return g`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",s`<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>`],["light",s`<path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"/>`],["regular",s`<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`],["bold",s`<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>`],["fill",s`<path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>`],["duotone",s`<path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"/><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`]]);e.styles=h`
    :host {
      display: contents;
    }
  `;l([d({type:String,reflect:!0})],e.prototype,"size",2);l([d({type:String,reflect:!0})],e.prototype,"weight",2);l([d({type:String,reflect:!0})],e.prototype,"color",2);l([d({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=l([u("ph-magnifying-glass")],e);export{e as PhMagnifyingGlass};
