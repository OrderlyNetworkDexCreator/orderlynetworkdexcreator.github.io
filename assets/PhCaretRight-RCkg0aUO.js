import{n as h,Y as g,t as s,p as f,O as d,s as c}from"./property-3tIzMNbN.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"07b7ca12ba0d2283a2567474bcec4fd2e0bda085"};var r=new t.Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="aaf46128-70a4-4e80-bf2c-5df85d73b611",t._sentryDebugIdIdentifier="sentry-dbid-aaf46128-70a4-4e80-bf2c-5df85d73b611")}catch{}})();var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(t,r,i,l)=>{for(var a=l>1?void 0:l?y(r,i):r,n=t.length-1,p;n>=0;n--)(p=t[n])&&(a=(l?p(r,i,a):p(a))||a);return l&&a&&u(r,i,a),a};let e=class extends h{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return g`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${e.weightsMap.get((t=this.weight)!=null?t:"regular")}
    </svg>`}};e.weightsMap=new Map([["thin",s`<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"/>`],["light",s`<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"/>`],["regular",s`<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>`],["bold",s`<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"/>`],["fill",s`<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"/>`],["duotone",s`<path d="M176,128,96,208V48Z" opacity="0.2"/><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"/>`]]);e.styles=f`
    :host {
      display: contents;
    }
  `;o([d({type:String,reflect:!0})],e.prototype,"size",2);o([d({type:String,reflect:!0})],e.prototype,"weight",2);o([d({type:String,reflect:!0})],e.prototype,"color",2);o([d({type:Boolean,reflect:!0})],e.prototype,"mirrored",2);e=o([c("ph-caret-right")],e);export{e as PhCaretRight};
