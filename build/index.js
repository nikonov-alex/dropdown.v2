import*as e from"@nikonov-alex/components.v2";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},n={};t.d(n,{Z:()=>xe});const o=(r={FormComponent:()=>e.FormComponent},l={},t.d(l,r),l),i=Object.keys;var r,l;function a(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return"object"==typeof e?null!==e:d(e)}function d(e){return"function"==typeof e}function p(e,t){if(e)for(const n of i(e))t(e[n],n)}const u={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},f=["Webkit","ms","Moz","O"];i(u).forEach((e=>{f.forEach((t=>{u[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const g=Symbol.for("jsx-dom:type");var m=function(e){return e.ShadowRoot="ShadowRoot",e}(m||{});const b="http://www.w3.org/1999/xlink",v="http://www.w3.org/XML/1998/namespace";function h(e){return!("boolean"==typeof e||null==e)}const w="undefined"!=typeof DOMTokenList?DOMTokenList:function(){};function y(e){return Array.isArray(e)?e.map(y).filter(Boolean).join(" "):e instanceof w?""+e:c(e)?i(e).filter((t=>e[t])).join(" "):h(e)?""+e:""}const x={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},O=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function j(e,t){let n,{children:o,...r}=t;if(r.namespaceURI||0!==x[e]||(r={...r,namespaceURI:"http://www.w3.org/2000/svg"}),a(e)){if(n=r.namespaceURI?document.createElementNS(r.namespaceURI,e):document.createElement(e),function(e,t){for(const n of i(e))T(n,e[n],t)}(r,n),A(o,n),n instanceof window.HTMLSelectElement&&null!=r.value)if(!0===r.multiple&&Array.isArray(r.value)){const e=r.value.map((e=>String(e)));n.querySelectorAll("option").forEach((t=>t.selected=e.includes(t.value)))}else n.value=r.value;k(r.ref,n)}else{if(!d(e))throw new TypeError(`Invalid JSX element type: ${e}`);c(e.defaultProps)&&(r={...e.defaultProps,...r}),n=function(e){const{prototype:t}=e;return!(!t||!t.isReactComponent)}(e)?function(e,t,n){return new e(t={...t,children:n}).render()}(e,r,o):e({...r,children:o})}return n}function k(e,t){var n;c(n=e)&&"current"in n?e.current=t:d(e)&&e(t)}function A(e,t){if(c(i=e)&&"number"==typeof i.length&&"number"!=typeof i.nodeType)!function(e,t){for(const n of[...e])A(n,t)}(e,t);else if(a(e)||s(e))S(document.createTextNode(e),t);else if(null===e)S(document.createComment(""),t);else if((o=e)&&"number"==typeof o.nodeType)S(e,t);else if(null!=(n=e)&&n[g]===m.ShadowRoot){const n=t.attachShadow(e.attr);A(e.children,n),k(e.ref,n)}var n,o,i}function S(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function E(e,t){return e.replace(/[A-Z]/g,(e=>t+e.toLowerCase()))}function L(e,t){null==t||!1===t||(Array.isArray(t)?t.forEach((t=>L(e,t))):a(t)?e.setAttribute("style",t):c(t)&&p(t,((t,n)=>{0===n.indexOf("-")?e.style.setProperty(n,t):s(t)&&0!==u[n]?e.style[n]=t+"px":e.style[n]=t})))}function T(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void M(n,b,E(e,":"),t);case"xmlnsXlink":return void C(n,E(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void M(n,v,E(e,":"),t)}switch(e){case"htmlFor":return void C(n,"for",t);case"dataset":return void p(t,((e,t)=>{null!=e&&(n.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(h(t)&&(n[e]=t));case"dangerouslySetInnerHTML":return void(c(t)&&(n.innerHTML=t.__html));case"value":if(null==t||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement)return void(n.value=t);break;case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(d(t)?t(n):C(n,"class",y(t)));case"ref":case"namespaceURI":return;case"style":return void L(n,t);case"on":case"onCapture":return void p(t,((t,o)=>{n.addEventListener(o,t,"onCapture"===e)}))}if(d(t)){if("o"===e[0]&&"n"===e[1]){let o=e.toLowerCase();const i=o.endsWith("capture");if("ondoubleclick"===o?o="ondblclick":i&&"ondoubleclickcapture"===o&&(o="ondblclickcapture"),i||null!==n[o])if(i)n.addEventListener(o.substring(2,o.length-7),t,!0);else{let i;i=o in window?o.substring(2):o[2]+e.slice(3),n.addEventListener(i,t)}else n[o]=t}}else c(t)?n[e]=t:!0===t?C(n,e,""):!1!==t&&null!=t&&(n instanceof SVGElement&&!O.test(e)?C(n,E(e,"-"),t):C(n,e,t))}function C(e,t,n){e.setAttribute(t,n)}function M(e,t,n,o){e.setAttributeNS(t,n,o)}const R=e=>({left:e.left.slice(0,-1),value:e.left[e.left.length-1],right:[e.value].concat(e.right)}),H=(e,t)=>0===e.left.length?t:e.left[e.left.length-1].disabled?H(R(e),t):R(e),I=e=>H(e,e),N=e=>({left:e.left.concat(e.value),value:e.right[0],right:e.right.slice(1)}),U=(e,t)=>0===e.right.length?t:e.right[0].disabled?U(N(e),t):N(e),F=e=>U(e,e),D={position:"absolute",top:"100%",left:0,width:"100%",listStyleType:"none",paddingLeft:0,margin:0,overflow:"hidden",boxSizing:"border-box",zIndex:1},P={display:"inline-block",lineHeight:"initial",verticalAlign:"middle",width:"100%",boxSizing:"border-box"},q=e=>"selection"in e&&"object"==typeof e.selection,z=e=>Object.assign(Object.assign({},e),{selection:void 0}),G=(e,t)=>Object.assign(Object.assign({},e),{selection:t}),W=e=>Object.assign(Object.assign({},e),{options:e.selection}),B=e=>e.options.value,_=e=>{var t;return j("li",{className:"dropdown-option"+(e.option.class?` ${e.option.class}`:""),style:{backgroundColor:e.selected?"blue":void 0,color:e.option.disabled?"lightgrey":void 0},"data-selected":e.selected,"data-disabled":e.option.disabled,"data-value":e.option.value,children:j("span",{className:"dropdown-option-label",style:P,dangerouslySetInnerHTML:{__html:null!==(t=e.option.label)&&void 0!==t?t:""}})})},K=e=>q(e)?j("ul",{className:"dropdown-options",style:D,children:[e.selection.left.map((e=>j(_,{option:e}))),j(_,{option:e.selection.value,selected:!0}),e.selection.right.map((e=>j(_,{option:e})))]}):j("span",{}),X=e=>"disabled"in e.dataset,Z=e=>(e=>""===e?void 0:e)(e.className.replace("dropdown-option","").trim()),$=e=>e instanceof HTMLElement?e.closest(".dropdown-option"):null,V=e=>Array.prototype.indexOf.call(e.parentElement.children,e),J=e=>Array.prototype.slice.call(e.parentElement.children,0,V(e)),Q=e=>Array.prototype.slice.call(e.parentElement.children,V(e)+1),Y=e=>({value:e.dataset.value,label:e.querySelector(".dropdown-option-label").innerHTML,disabled:X(e),class:Z(e)}),ee={position:"relative",display:"inline-block",textAlign:"left",cursor:"pointer"},te={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",boxSizing:"border-box"},ne=[{},""],oe=e=>"options"in e&&"object"==typeof e.options,ie=(e,t)=>oe(e)&&e.options===t?e:Object.assign(Object.assign({},e),{options:t}),re=e=>"focused"in e&&!0===e.focused,le=e=>"opened"in e&&"object"==typeof e.opened,ae=(e,t)=>le(e)&&e.opened===t?e:Object.assign(Object.assign({},e),{opened:t}),se=e=>oe(e)&&re(e),ce=e=>se(e)&&le(e),de=e=>{return t=e,Object.assign(Object.assign({},t),{focused:!0});var t},pe=e=>ae(e,(e=>{return t={options:e},Object.assign(Object.assign({},t),{selection:t.options});var t})(e.options)),ue=e=>{return t=ie(e,(e=>e.options)(e.opened)),Object.assign(Object.assign({},t),{opened:void 0});var t},fe=e=>q(e.opened)?e:ue(e),ge=e=>j("div",{className:"dropdown-value",style:te,children:ce(e)?B(e.opened).label:e.options.value.label}),me=e=>{return j("div",{className:"dropdown"+(t=e,"class"in t&&"string"==typeof t.class?` ${e.class}`:"")+(ce(e)?" opened":""),tabIndex:0,style:ee,children:[j(ge,Object.assign({},e)),ce(e)?j(K,Object.assign({},e.opened)):j("span",{})]});var t},be=()=>j("span",{className:"dropdown-empty"}),ve=e=>{var t;return oe(e)&&null!==(t=e.options.value.value)&&void 0!==t?t:""},he=e=>{var t;return{label:e.innerHTML,value:e.value,disabled:e.disabled,class:null!==(t=e.className)&&void 0!==t?t:void 0}},we=(e,t)=>{return n=Array.prototype.map.call(e,he),o=t?Array.prototype.indexOf.call(t.parentElement.children,t):0,{left:n.slice(0,o),value:n[o],right:n.slice(o+1)};var n,o},ye={initialState:{options:void 0},render:e=>oe(e)?j(me,Object.assign({},e)):j(be,{}),formValue:ve,domchange:(e,t)=>((e,t)=>""!==t.className?((e,t)=>Object.assign(Object.assign({},e),{class:t}))(e,t.className):e)(((e,t)=>{return t.hasAttribute("required")?(n=e,Object.assign(Object.assign({},n),{required:!0})):e;var n})(((e,t)=>{return n=(e=>e.querySelectorAll("option"))(t),o=(e=>e.querySelector("option[selected]"))(t),0===n.length?Object.assign(Object.assign({},e),{options:void 0}):Object.assign(Object.assign({},e),{options:we(n,o)});var n,o})({},t),t),t),events:{focus:(e,t)=>oe(e)&&!se(e)?de(e):e,blur:(e,t)=>se(e)?(e=>{return t=e,Object.assign(Object.assign({},t),{focused:void 0});var t})(ce(e)?ue(e):e):e,click:(e,t)=>oe(e)?re(e)?le(e)?fe(ae(e,((e,t)=>{return q(e)?!(n=$(t.target))||X(n)?e:z(W(e)):e;var n})(e.opened,t))):pe(e):pe(de(e)):e,mouseover:(e,t)=>ce(e)&&(e=>e.target instanceof HTMLElement&&e.target.matches(".dropdown-options, .dropdown-options *"))(t)?ae(e,((e,t)=>{return q(e)&&(n=$(t.target))instanceof HTMLElement&&V(n)!==(e=>e.selection.left.length)(e)&&!X(n)?G(e,(e=>({left:J(e).map(Y),value:Y(e),right:Q(e).map(Y)}))(n)):e;var n})(e.opened,t)):e,keydown:(e,t)=>se(e)?le(e)?fe(ae(e,((e,t)=>q(e)?t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?z(e):e:["Escape","Enter"].includes(t.code)?z("Enter"===t.code?W(e):e):"ArrowDown"===t.code?W(G(e,F(e.selection))):"ArrowUp"===t.code?W(G(e,I(e.selection))):e:e)(e.opened,t))):((e,t)=>t.ctrlKey?e:t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?pe(e):e:["Enter","Space"].includes(t.code)?pe(e):"ArrowDown"===t.code?ie(e,F(e.options)):"ArrowLeft"===t.code||"ArrowUp"===t.code?ie(e,I(e.options)):"ArrowRight"===t.code?ie(e,F(e.options)):e)(e,t):e},emit:[{when:(e,t)=>oe(e)!==oe(t)||oe(e)&&oe(t)&&!ce(t)&&ve(e)!==ve(t),emit:[e=>new InputEvent("input"),e=>new Event("change")]}],props:{value:{get:ve}},validate:e=>{return"required"in(t=e)&&!0===t.required?(e=>""===ve(e)?[{valueMissing:!0},"This field is required"]:ne)(e):ne;var t}};const xe=class extends o.FormComponent{constructor(e){super(ye,e)}};var Oe=n.Z;export{Oe as default};