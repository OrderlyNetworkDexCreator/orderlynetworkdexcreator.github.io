import{aL as C,bb as E,aQ as S,b6 as d,aM as w,b1 as y,aE as l,b2 as O,ba as h,a3 as x,ak as g,V as P,o as $,v as R,_ as T}from"./components-BPyHaav6.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"f23328cbf1bd8eb6c62973cc0d709e64bde7fe76"};var e=new i.Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="6328a675-e8df-441e-8451-7e852abab501",i._sentryDebugIdIdentifier="sentry-dbid-6328a675-e8df-441e-8451-7e852abab501")}catch{}})();const _=C`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:i})=>i.theme.foregroundPrimary};
    border-radius: ${({borderRadius:i})=>i[4]};
    border: 1px solid ${({tokens:i})=>i.theme.borderPrimary};
    font-family: ${({fontFamily:i})=>i.regular};
    font-size: ${({textSize:i})=>i.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:i})=>i.theme.textPrimary};
    caret-color: ${({tokens:i})=>i.core.textAccentPrimary};
    transition:
      background-color ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]},
      border-color ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]},
      box-shadow ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:i})=>i[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:i})=>i.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:i})=>i.core.foregroundAccent040};
  }
`;var v=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let c=class extends y{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};c.styles=[E,S,_];v([d({type:Boolean})],c.prototype,"disabled",void 0);v([d({type:String})],c.prototype,"value",void 0);c=v([w("wui-input-numeric")],c);const L=O`
  :host {
    position: relative;
    display: block;
  }
`;var f=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let p=class extends y{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(n=>n!==""),this.handleKeyDown=(e,t)=>{const n=e.target,s=this.getInputElement(n),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!s)return;o.includes(e.key)&&e.preventDefault();const r=s.selectionStart;switch(e.key){case"ArrowLeft":r&&s.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":s.value===""?this.focusInputField("prev",t):this.updateInput(s,t,"");break;case"Backspace":s.value===""?this.focusInputField("prev",t):this.updateInput(s,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const n=t+1;if(!this.shouldInputBeEnabled(n))return;const s=this.numerics[n<this.length?n:t],o=s?this.getInputElement(s):void 0;o&&(o.disabled=!1,o.focus())}if(e==="prev"){const n=t-1,s=this.numerics[n>-1?n:t],o=s?this.getInputElement(s):void 0;o&&o.focus()}}}firstUpdated(){var t,n;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(n=this.numerics[0])==null||n.focus()}render(){return l`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,t)}
              @click=${n=>this.selectInput(n)}
              @keydown=${n=>this.handleKeyDown(n,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){const s=this.numerics[t],o=e||(s?this.getInputElement(s):void 0);o&&(o.value=n,this.values=this.values.map((r,a)=>a===t?n:r))}selectInput(e){const t=e.target;if(t){const n=this.getInputElement(t);n==null||n.select()}}handleInput(e,t){const n=e.target,s=this.getInputElement(n);if(s){const o=s.value;e.inputType==="insertFromPaste"?this.handlePaste(s,o,t):x.isNumber(o)&&e.data?(this.updateInput(s,t,e.data),this.focusInputField("next",t)):this.updateInput(s,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const s=t[0];if(s&&x.isNumber(s)){this.updateInput(e,n,s);const r=t.substring(1);if(n+1<this.length&&r.length){const a=this.numerics[n+1],I=a?this.getInputElement(a):void 0;I&&this.handlePaste(I,r,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};p.styles=[E,L];f([d({type:Number})],p.prototype,"length",void 0);f([d({type:String})],p.prototype,"otp",void 0);f([h()],p.prototype,"values",void 0);p=f([w("wui-otp")],p);const k=O`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var m=function(i,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},b;let u=b=class extends y{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=g.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=P.state.data)==null?void 0:e.email,this.authConnector=$.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=g.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=g.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(n){this.error=R.parseError(n),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!$.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),T.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){T.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===b.OTP_LENGTH}};u.OTP_LENGTH=6;u.styles=k;m([h()],u.prototype,"loading",void 0);m([h()],u.prototype,"timeoutTimeLeft",void 0);m([h()],u.prototype,"error",void 0);u=b=m([w("w3m-email-otp-widget")],u);export{u as W};
