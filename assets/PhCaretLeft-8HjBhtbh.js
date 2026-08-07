import{n as f,Y as h,t as a,p as g,O as d,s as c}from"./property-BxmscnVo.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"2778c5828739799f4fdbf80f93ddc59dfb2850d9"};var r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="03f0165e-104a-4e4e-be03-2e3db93b0cb6",t._sentryDebugIdIdentifier="sentry-dbid-03f0165e-104a-4e4e-be03-2e3db93b0cb6")}catch{}})();var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(t,r,i,l)=>{for(var s=l>1?void 0:l?y(r,i):r,n=t.length-1,p;n>=0;n--)(p=t[n])&&(s=(l?p(r,i,s):p(s))||s);return l&&s&&u(r,i,s),s};let e=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return h`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",a`<path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"/>`],["light",a`<path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"/>`],["regular",a`<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>`],["bold",a`<path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"/>`],["fill",a`<path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"/>`],["duotone",a`<path d="M160,48V208L80,128Z" opacity="0.2"/><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"/>`]]);e.styles=g`
    :host {
      display: contents;
    }
  `;o([d({type:String,reflect:!0})],e.prototype,"size",2);o([d({type:String,reflect:!0})],e.prototype,"weight",2);o([d({type:String,reflect:!0})],e.prototype,"color",2);o([d({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=o([c("ph-caret-left")],e);export{e as PhCaretLeft};
