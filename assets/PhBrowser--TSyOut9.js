import{n as f,Y as c,t as s,p as h,O as d,s as H}from"./property-BxmscnVo.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"2778c5828739799f4fdbf80f93ddc59dfb2850d9"};var r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="448a8c84-a7bc-4220-b4e8-204cfbcaf055",t._sentryDebugIdIdentifier="sentry-dbid-448a8c84-a7bc-4220-b4e8-204cfbcaf055")}catch{}})();var V=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(t,r,i,n)=>{for(var a=n>1?void 0:n?g(r,i):r,l=t.length-1,p;l>=0;l--)(p=t[l])&&(a=(n?p(r,i,a):p(a))||a);return n&&a&&V(r,i,a),a};let e=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",s`<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V92H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V100H220V200A4,4,0,0,1,216,204Z"/>`],["light",s`<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V90H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V102H218v98A2,2,0,0,1,216,202Z"/>`],["regular",s`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`],["bold",s`<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V84H44V60ZM44,196V108H212v88Z"/>`],["fill",s`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Z"/>`],["duotone",s`<path d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`]]);e.styles=h`
    :host {
      display: contents;
    }
  `;o([d({type:String,reflect:!0})],e.prototype,"size",2);o([d({type:String,reflect:!0})],e.prototype,"weight",2);o([d({type:String,reflect:!0})],e.prototype,"color",2);o([d({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=o([H("ph-browser")],e);export{e as PhBrowser};
