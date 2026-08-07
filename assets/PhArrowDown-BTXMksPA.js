import{n as f,Y as h,t as o,p as c,O as d,s as g}from"./property-BxmscnVo.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"2778c5828739799f4fdbf80f93ddc59dfb2850d9"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="a60c35e9-6b4d-4134-9ecc-e35050d5faff",e._sentryDebugIdIdentifier="sentry-dbid-a60c35e9-6b4d-4134-9ecc-e35050d5faff")}catch{}})();var u=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(e,r,i,s)=>{for(var a=s>1?void 0:s?w(r,i):r,n=e.length-1,p;n>=0;n--)(p=e[n])&&(a=(s?p(r,i,a):p(a))||a);return s&&a&&u(r,i,a),a};let t=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var e;return h`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${t.weightsMap.get((e=this.weight)!=null?e:"regular")}
    </svg>`}};t.weightsMap=new Map([["thin",o`<path d="M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z"/>`],["light",o`<path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"/>`],["regular",o`<path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"/>`],["bold",o`<path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"/>`],["fill",o`<path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z"/>`],["duotone",o`<path d="M200,144l-72,72L56,144Z" opacity="0.2"/><path d="M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z"/>`]]);t.styles=c`
    :host {
      display: contents;
    }
  `;l([d({type:String,reflect:!0})],t.prototype,"size",2);l([d({type:String,reflect:!0})],t.prototype,"weight",2);l([d({type:String,reflect:!0})],t.prototype,"color",2);l([d({type:Boolean,reflect:!0})],t.prototype,"mirrored",2);t=l([g("ph-arrow-down")],t);export{t as PhArrowDown};
