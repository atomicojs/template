"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var atomico=require("atomico");function style(e,t){void 0===t&&(t={});var o=document,r=o.querySelector("style#"+e)||o.createElement("style");return r.id=e,t=Object.assign({},{id:e,cn:e},t),o.head.appendChild(r),function(e){return r.innerHTML=[].concat(e).map(function(e){return e(t)}).join("\n")}}var theme=function(e){return e.id+"{font-size:30px}"+e.id+" .box{display:inline-flex}"+e.id+" .emoji{animation:"+e.cn+"-hello 1s infinite alternate;transform-origin:80% 80%}"+e.id+" .beer{transform:scaleX(-1)}@keyframes "+e.cn+"-hello{0%{transform:rotate(0deg)}50%{transform:rotate(-20deg)}to{transform:rotate(20deg)}}"};function style$1(e,t){return style(e,t)(theme)}var TAG_NAME="atomico-starter-component";class Tag extends atomico.Element{static get props(){return["hello"]}render(){return atomico.h("div",{class:"box"},atomico.h("div",{class:"emoji"},"👋"),atomico.h("div",{class:"text"},this.props.hello||"😎"),atomico.h("div",{class:"beer"},"🍺"))}}style$1(TAG_NAME),customElements.define(TAG_NAME,Tag),exports.TAG_NAME=TAG_NAME,exports.Tag=Tag;
//# sourceMappingURL=atomico-starter-component.js.map
