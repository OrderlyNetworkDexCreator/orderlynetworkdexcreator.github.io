import{n as g,Y as f,t as s,p as h,O as n,s as c}from"./property-B_-743tp.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7fa197a0-b9d2-46e2-ad21-c81a41bef82e",e._sentryDebugIdIdentifier="sentry-dbid-7fa197a0-b9d2-46e2-ad21-c81a41bef82e")}catch{}})();var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(e,r,i,o)=>{for(var a=o>1?void 0:o?y(r,i):r,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(o?p(r,i,a):p(a))||a);return o&&a&&u(r,i,a),a};let t=class extends g{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var e;return f`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${t.weightsMap.get((e=this.weight)!=null?e:"regular")}
    </svg>`}};t.weightsMap=new Map([["thin",s`<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>`],["light",s`<path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"/>`],["regular",s`<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`],["bold",s`<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>`],["fill",s`<path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>`],["duotone",s`<path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"/><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`]]);t.styles=h`
    :host {
      display: contents;
    }
  `;l([n({type:String,reflect:!0})],t.prototype,"size",2);l([n({type:String,reflect:!0})],t.prototype,"weight",2);l([n({type:String,reflect:!0})],t.prototype,"color",2);l([n({type:Boolean,reflect:!0})],t.prototype,"mirrored",2);t=l([c("ph-magnifying-glass")],t);export{t as PhMagnifyingGlass};
