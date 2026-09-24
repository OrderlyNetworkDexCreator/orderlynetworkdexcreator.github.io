import{n as f,Y as h,t as l,p as c,O as s,s as g}from"./property-B_-743tp.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="8d0722fd-aa60-4ddf-bc8b-6cf5cac19591",t._sentryDebugIdIdentifier="sentry-dbid-8d0722fd-aa60-4ddf-bc8b-6cf5cac19591")}catch{}})();var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(t,r,i,d)=>{for(var a=d>1?void 0:d?y(r,i):r,n=t.length-1,p;n>=0;n--)(p=t[n])&&(a=(d?p(r,i,a):p(a))||a);return d&&a&&u(r,i,a),a};let e=class extends f{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return h`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",l`<path d="M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"/>`],["light",l`<path d="M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"/>`],["regular",l`<path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>`],["bold",l`<path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"/>`],["fill",l`<path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"/>`],["duotone",l`<path d="M112,56V200L40,128Z" opacity="0.2"/><path d="M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"/>`]]);e.styles=c`
    :host {
      display: contents;
    }
  `;o([s({type:String,reflect:!0})],e.prototype,"size",2);o([s({type:String,reflect:!0})],e.prototype,"weight",2);o([s({type:String,reflect:!0})],e.prototype,"color",2);o([s({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=o([g("ph-arrow-left")],e);export{e as PhArrowLeft};
