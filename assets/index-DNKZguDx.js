import{l as d,r as u,p,m,x as f}from"./localizedRoute-CH8jRBiR.js";import{n as h,c as g}from"./if-defined-Y-vOL_i7.js";const v=d`
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
  }
`;var c=function(s,t,r,o){var l=arguments.length,e=l<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,r,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(l<3?n(e):l>3?n(t,r,e):n(t,r))||e);return l>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends m{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};i.styles=[u,p,v];c([h()],i.prototype,"src",void 0);c([h()],i.prototype,"alt",void 0);c([h()],i.prototype,"size",void 0);i=c([g("wui-image")],i);
