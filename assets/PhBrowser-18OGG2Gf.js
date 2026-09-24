import{n as f,Y as c,t as o,p as h,O as d,s as H}from"./property-B_-743tp.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="27f58576-0fc6-4f77-b250-ec0db816573c",e._sentryDebugIdIdentifier="sentry-dbid-27f58576-0fc6-4f77-b250-ec0db816573c")}catch{}})();var V=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(e,r,i,n)=>{for(var s=n>1?void 0:n?g(r,i):r,l=e.length-1,p;l>=0;l--)(p=e[l])&&(s=(n?p(r,i,s):p(s))||s);return n&&s&&V(r,i,s),s};let t=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var e;return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${t.weightsMap.get((e=this.weight)!=null?e:"regular")}
    </svg>`}};t.weightsMap=new Map([["thin",o`<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V92H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V100H220V200A4,4,0,0,1,216,204Z"/>`],["light",o`<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V90H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V102H218v98A2,2,0,0,1,216,202Z"/>`],["regular",o`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`],["bold",o`<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V84H44V60ZM44,196V108H212v88Z"/>`],["fill",o`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Z"/>`],["duotone",o`<path d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`]]);t.styles=h`
    :host {
      display: contents;
    }
  `;a([d({type:String,reflect:!0})],t.prototype,"size",2);a([d({type:String,reflect:!0})],t.prototype,"weight",2);a([d({type:String,reflect:!0})],t.prototype,"color",2);a([d({type:Boolean,reflect:!0})],t.prototype,"mirrored",2);t=a([H("ph-browser")],t);export{t as PhBrowser};
