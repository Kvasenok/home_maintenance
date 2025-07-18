var tt=Object.defineProperty;var er=Object.getOwnPropertyDescriptor;var tr=(e,t)=>{for(var i in t)tt(e,i,{get:t[i],enumerable:!0})};var S=(e,t,i,r)=>{for(var n=r>1?void 0:r?er(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(r?a(t,i,n):a(n))||n);return r&&n&&tt(t,i,n),n};var le=globalThis,ue=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),rt=new WeakMap,X=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(ue&&t===void 0){let r=i!==void 0&&i.length===1;r&&(t=rt.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&rt.set(i,t))}return t}toString(){return this.cssText}},it=e=>new X(typeof e=="string"?e:e+"",void 0,Se),Ae=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((r,n,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new X(i,e,Se)},nt=(e,t)=>{if(ue)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of t){let r=document.createElement("style"),n=le.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=i.cssText,e.appendChild(r)}},we=ue?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let r of t.cssRules)i+=r.cssText;return it(i)})(e):e;var{is:rr,defineProperty:ir,getOwnPropertyDescriptor:nr,getOwnPropertyNames:sr,getOwnPropertySymbols:ar,getPrototypeOf:or}=Object,$=globalThis,st=$.trustedTypes,hr=st?st.emptyScript:"",lr=$.reactiveElementPolyfillSupport,W=(e,t)=>e,z={toAttribute(e,t){switch(t){case Boolean:e=e?hr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ce=(e,t)=>!rr(e,t),at={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=at){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,i);n!==void 0&&ir(this.prototype,t,n)}}static getPropertyDescriptor(t,i,r){let{get:n,set:s}=nr(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:n,set(a){let o=n?.call(this);s?.call(this,a),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=or(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let i=this.properties,r=[...sr(i),...ar(i)];for(let n of r)this.createProperty(n,i[n])}let t=this[Symbol.metadata];if(t!==null){let i=litPropertyMetadata.get(t);if(i!==void 0)for(let[r,n]of i)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[i,r]of this.elementProperties){let n=this._$Eu(i,r);n!==void 0&&this._$Eh.set(n,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)i.unshift(we(n))}else t!==void 0&&i.push(we(t));return i}static _$Eu(t,i){let r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,i=this.constructor.elementProperties;for(let r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:z).toAttribute(i,r.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,i){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let s=r.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:z;this._$Em=n,this[n]=a.fromAttribute(i,s.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,i,r){if(t!==void 0){let n=this.constructor,s=this[t];if(r??(r=n.getPropertyOptions(t)),!((r.hasChanged??ce)(s,i)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:n,wrapped:s},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??i??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),n===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,s]of r){let{wrapped:a}=s,o=this[n];a!==!0||this._$AL.has(n)||o===void 0||this.C(n,void 0,s,o)}}let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[W("elementProperties")]=new Map,P[W("finalized")]=new Map,lr?.({ReactiveElement:P}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.0");var Z=globalThis,fe=Z.trustedTypes,ot=fe?fe.createPolicy("lit-html",{createHTML:e=>e}):void 0,pt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+C,ur=`<${dt}>`,L=document,J=()=>L.createComment(""),Y=e=>e===null||typeof e!="object"&&typeof e!="function",Ne=Array.isArray,cr=e=>Ne(e)||typeof e?.[Symbol.iterator]=="function",He=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,lt=/>/g,O=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,ct=/"/g,mt=/^(?:script|style|textarea|title)$/i,Oe=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),b=Oe(1),ii=Oe(2),ni=Oe(3),k=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),ft=new WeakMap,R=L.createTreeWalker(L,129);function gt(e,t){if(!Ne(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}var fr=(e,t)=>{let i=e.length-1,r=[],n,s=t===2?"<svg>":t===3?"<math>":"",a=q;for(let o=0;o<i;o++){let l=e[o],u,h,c=-1,f=0;for(;f<l.length&&(a.lastIndex=f,h=a.exec(l),h!==null);)f=a.lastIndex,a===q?h[1]==="!--"?a=ht:h[1]!==void 0?a=lt:h[2]!==void 0?(mt.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=O):h[3]!==void 0&&(a=O):a===O?h[0]===">"?(a=n??q,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?O:h[3]==='"'?ct:ut):a===ct||a===ut?a=O:a===ht||a===lt?a=q:(a=O,n=void 0);let v=a===O&&e[o+1].startsWith("/>")?" ":"";s+=a===q?l+ur:c>=0?(r.push(u),l.slice(0,c)+pt+l.slice(c)+C+v):l+C+(c===-2?o:v)}return[gt(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Q=class e{constructor({strings:t,_$litType$:i},r){let n;this.parts=[];let s=0,a=0,o=t.length-1,l=this.parts,[u,h]=fr(t,i);if(this.el=e.createElement(u,r),R.currentNode=this.el.content,i===2||i===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=R.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(let c of n.getAttributeNames())if(c.endsWith(pt)){let f=h[a++],v=n.getAttribute(c).split(C),_=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:_[2],strings:v,ctor:_[1]==="."?$e:_[1]==="?"?Ce:_[1]==="@"?Be:F}),n.removeAttribute(c)}else c.startsWith(C)&&(l.push({type:6,index:s}),n.removeAttribute(c));if(mt.test(n.tagName)){let c=n.textContent.split(C),f=c.length-1;if(f>0){n.textContent=fe?fe.emptyScript:"";for(let v=0;v<f;v++)n.append(c[v],J()),R.nextNode(),l.push({type:2,index:++s});n.append(c[f],J())}}}else if(n.nodeType===8)if(n.data===dt)l.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(C,c+1))!==-1;)l.push({type:7,index:s}),c+=C.length-1}s++}}static createElement(t,i){let r=L.createElement("template");return r.innerHTML=t,r}};function G(e,t,i=e,r){if(t===k)return t;let n=r!==void 0?i._$Co?.[r]:i._$Cl,s=Y(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=n:i._$Cl=n),n!==void 0&&(t=G(e,n._$AS(e,t.values),n,r)),t}var Pe=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:i},parts:r}=this._$AD,n=(t?.creationScope??L).importNode(i,!0);R.currentNode=n;let s=R.nextNode(),a=0,o=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new K(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Ie(s,this,t)),this._$AV.push(u),l=r[++o]}a!==l?.index&&(s=R.nextNode(),a++)}return R.currentNode=L,n}p(t){let i=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},K=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,n){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),Y(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){let{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Q.createElement(gt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(i);else{let s=new Pe(n,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=ft.get(t.strings);return i===void 0&&ft.set(t.strings,i=new Q(t)),i}k(t){Ne(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,r,n=0;for(let s of t)n===i.length?i.push(r=new e(this.O(J()),this.O(J()),this,this.options)):r=i[n],r._$AI(s),n++;n<i.length&&(this._$AR(r&&r._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},F=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,n,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(t,i=this,r,n){let s=this.strings,a=!1;if(s===void 0)t=G(this,t,i,0),a=!Y(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{let o=t,l,u;for(t=s[0],l=0;l<s.length-1;l++)u=G(this,o[r+l],i,l),u===k&&(u=this._$AH[l]),a||(a=!Y(u)||u!==this._$AH[l]),u===x?t=x:t!==x&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}a&&!n&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$e=class extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},Ce=class extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},Be=class extends F{constructor(t,i,r,n,s){super(t,i,r,n,s),this.type=5}_$AI(t,i=this){if((t=G(this,t,i,0)??x)===k)return;let r=this._$AH,n=t===x&&r!==x||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==x&&(r===x||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ie=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};var pr=Z.litHtmlPolyfillSupport;pr?.(Q,K),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.0");var vt=(e,t,i)=>{let r=i?.renderBefore??t,n=r._$litPart$;if(n===void 0){let s=i?.renderBefore??null;r._$litPart$=n=new K(t.insertBefore(J(),s),s,void 0,i??{})}return n._$AI(e),n};var ee=globalThis,B=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;let t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};B._$litElement$=!0,B.finalized=!0,ee.litElementHydrateSupport?.({LitElement:B});var dr=ee.litElementPolyfillSupport;dr?.({LitElement:B});(ee.litElementVersions??(ee.litElementVersions=[])).push("4.2.0");var mr={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:ce},gr=(e=mr,t,i)=>{let{kind:r,metadata:n}=i,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),r==="accessor"){let{name:a}=i;return{set(o){let l=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,l,e)},init(o){return o!==void 0&&this.C(a,void 0,e,o),o}}}if(r==="setter"){let{name:a}=i;return function(o){let l=this[a];t.call(this,o),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function te(e){return(t,i)=>typeof i=="object"?gr(e,t,i):((r,n,s)=>{let a=n.hasOwnProperty(s);return n.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,i)}function A(e){return te({...e,state:!0,attribute:!1})}var Re={};tr(Re,{common:()=>vr,default:()=>xr,intervals:()=>yr,panel:()=>br});var vr={loading:"Loading...",none:"None"},yr={day:"day",days:"Days",week:"week",weeks:"Weeks",month:"month",months:"Months"},br={cards:{new:{title:"Create New Task",fields:{title:{heading:"Task Title"},interval_value:{heading:"Interval"},interval_type:{heading:"Interval Type"},last_performed:{heading:"Last Performed",helper:"Optional \u2014 leave blank to use today"},tag:{heading:"Tag",helper:"Optional"},icon:{heading:"Icon",helper:"Optional"}},actions:{add_task:"Add Task"},alerts:{required:"Please fill all fields",error:"Error adding task. See console for details."}},current:{title:"Current Tasks",no_items:"No tasks found.",every:"every",last:"Last",next:"Next Due",actions:{complete:"Complete",edit:"Edit",remove:"Remove"},confirm_remove:"Are you sure you want to remove this task?"}},dialog:{edit_task:{title:"Edit Task",fields:{interval_value:{heading:"Interval"},interval_type:{heading:"Interval Type"},last_performed:{heading:"Last Performed",helper:"Optional \u2014 leave blank to use today"},icon:{heading:"Icon"}},actions:{cancel:"Cancel",save:"Save"}}}},xr={common:vr,intervals:yr,panel:br};var Le=function(e,t){return Le=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n])},Le(e,t)};function re(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Le(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}var m=function(){return m=Object.assign||function(t){for(var i,r=1,n=arguments.length;r<n;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},m.apply(this,arguments)};function me(e,t,i){if(i||arguments.length===2)for(var r=0,n=t.length,s;r<n;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var d;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(d||(d={}));var y;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(y||(y={}));var D;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(D||(D={}));function ke(e){return e.type===y.literal}function yt(e){return e.type===y.argument}function ge(e){return e.type===y.number}function ve(e){return e.type===y.date}function ye(e){return e.type===y.time}function be(e){return e.type===y.select}function xe(e){return e.type===y.plural}function bt(e){return e.type===y.pound}function _e(e){return e.type===y.tag}function Ee(e){return!!(e&&typeof e=="object"&&e.type===D.number)}function ie(e){return!!(e&&typeof e=="object"&&e.type===D.dateTime)}var De=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;var _r=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function xt(e){var t={};return e.replace(_r,function(i){var r=i.length;switch(i[0]){case"G":t.era=r===4?"long":r===5?"narrow":"short";break;case"y":t.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=r===4?"short":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var _t=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function At(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(_t).filter(function(f){return f.length>0}),i=[],r=0,n=t;r<n.length;r++){var s=n[r],a=s.split("/");if(a.length===0)throw new Error("Invalid number skeleton");for(var o=a[0],l=a.slice(1),u=0,h=l;u<h.length;u++){var c=h[u];if(c.length===0)throw new Error("Invalid number skeleton")}i.push({stem:o,options:l})}return i}function Er(e){return e.replace(/^(.*?)-/,"")}var Et=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,wt=/^(@+)?(\+|#+)?[rs]?$/g,Tr=/(\*)(0+)|(#+)(0+)|(0+)/g,Ht=/^(0+)$/;function Tt(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(wt,function(i,r,n){return typeof n!="string"?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):n==="+"?t.minimumSignificantDigits=r.length:r[0]==="#"?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+(typeof n=="string"?n.length:0)),""}),t}function Pt(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Sr(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var i=e.slice(0,2);if(i==="+!"?(t.signDisplay="always",e=e.slice(2)):i==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!Ht.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function St(e){var t={},i=Pt(e);return i||t}function $t(e){for(var t={},i=0,r=e;i<r.length;i++){var n=r[i];switch(n.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=n.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Er(n.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=m(m(m({},t),{notation:"scientific"}),n.options.reduce(function(l,u){return m(m({},l),St(u))},{}));continue;case"engineering":t=m(m(m({},t),{notation:"engineering"}),n.options.reduce(function(l,u){return m(m({},l),St(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(n.options[0]);continue;case"integer-width":if(n.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");n.options[0].replace(Tr,function(l,u,h,c,f,v){if(u)t.minimumIntegerDigits=h.length;else{if(c&&f)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Ht.test(n.stem)){t.minimumIntegerDigits=n.stem.length;continue}if(Et.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(Et,function(l,u,h,c,f,v){return h==="*"?t.minimumFractionDigits=u.length:c&&c[0]==="#"?t.maximumFractionDigits=c.length:f&&v?(t.minimumFractionDigits=f.length,t.maximumFractionDigits=f.length+v.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var s=n.options[0];s==="w"?t=m(m({},t),{trailingZeroDisplay:"stripIfInteger"}):s&&(t=m(m({},t),Tt(s)));continue}if(wt.test(n.stem)){t=m(m({},t),Tt(n.stem));continue}var a=Pt(n.stem);a&&(t=m(m({},t),a));var o=Sr(n.stem);o&&(t=m(m({},t),o))}return t}var ne={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function Ct(e,t){for(var i="",r=0;r<e.length;r++){var n=e.charAt(r);if(n==="j"){for(var s=0;r+1<e.length&&e.charAt(r+1)===n;)s++,r++;var a=1+(s&1),o=s<2?1:3+(s>>1),l="a",u=Ar(t);for((u=="H"||u=="k")&&(o=0);o-- >0;)i+=l;for(;a-- >0;)i=u+i}else n==="J"?i+="H":i+=n}return i}function Ar(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var i=e.language,r;i!=="root"&&(r=e.maximize().region);var n=ne[r||""]||ne[i||""]||ne["".concat(i,"-001")]||ne["001"];return n[0]}var Me,wr=new RegExp("^".concat(De.source,"*")),Hr=new RegExp("".concat(De.source,"*$"));function g(e,t){return{start:e,end:t}}var Pr=!!String.prototype.startsWith,$r=!!String.fromCodePoint,Cr=!!Object.fromEntries,Br=!!String.prototype.codePointAt,Ir=!!String.prototype.trimStart,Nr=!!String.prototype.trimEnd,Or=!!Number.isSafeInteger,Rr=Or?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ge=!0;try{Bt=Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Ge=((Me=Bt.exec("a"))===null||Me===void 0?void 0:Me[0])==="a"}catch{Ge=!1}var Bt,It=Pr?function(t,i,r){return t.startsWith(i,r)}:function(t,i,r){return t.slice(r,r+i.length)===i},Fe=$r?String.fromCodePoint:function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r="",n=t.length,s=0,a;n>s;){if(a=t[s++],a>1114111)throw RangeError(a+" is not a valid code point");r+=a<65536?String.fromCharCode(a):String.fromCharCode(((a-=65536)>>10)+55296,a%1024+56320)}return r},Nt=Cr?Object.fromEntries:function(t){for(var i={},r=0,n=t;r<n.length;r++){var s=n[r],a=s[0],o=s[1];i[a]=o}return i},Ot=Br?function(t,i){return t.codePointAt(i)}:function(t,i){var r=t.length;if(!(i<0||i>=r)){var n=t.charCodeAt(i),s;return n<55296||n>56319||i+1===r||(s=t.charCodeAt(i+1))<56320||s>57343?n:(n-55296<<10)+(s-56320)+65536}},Lr=Ir?function(t){return t.trimStart()}:function(t){return t.replace(wr,"")},kr=Nr?function(t){return t.trimEnd()}:function(t){return t.replace(Hr,"")};function Rt(e,t){return new RegExp(e,t)}var je;Ge?(Ue=Rt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),je=function(t,i){var r;Ue.lastIndex=i;var n=Ue.exec(t);return(r=n[1])!==null&&r!==void 0?r:""}):je=function(t,i){for(var r=[];;){var n=Ot(t,i);if(n===void 0||kt(n)||Ur(n))break;r.push(n),i+=n>=65536?2:1}return Fe.apply(void 0,r)};var Ue,Lt=function(){function e(t,i){i===void 0&&(i={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!i.ignoreTag,this.locale=i.locale,this.requiresOtherClause=!!i.requiresOtherClause,this.shouldParseSkeletons=!!i.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,i,r){for(var n=[];!this.isEOF();){var s=this.char();if(s===123){var a=this.parseArgument(t,r);if(a.err)return a;n.push(a.val)}else{if(s===125&&t>0)break;if(s===35&&(i==="plural"||i==="selectordinal")){var o=this.clonePosition();this.bump(),n.push({type:y.pound,location:g(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(d.UNMATCHED_CLOSING_TAG,g(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Ve(this.peek()||0)){var a=this.parseTag(t,i);if(a.err)return a;n.push(a.val)}else{var a=this.parseLiteral(t,i);if(a.err)return a;n.push(a.val)}}}return{val:n,err:null}},e.prototype.parseTag=function(t,i){var r=this.clonePosition();this.bump();var n=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:y.literal,value:"<".concat(n,"/>"),location:g(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(t+1,i,!0);if(s.err)return s;var a=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ve(this.char()))return this.error(d.INVALID_TAG,g(o,this.clonePosition()));var l=this.clonePosition(),u=this.parseTagName();return n!==u?this.error(d.UNMATCHED_CLOSING_TAG,g(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:y.tag,value:n,children:a,location:g(r,this.clonePosition())},err:null}:this.error(d.INVALID_TAG,g(o,this.clonePosition())))}else return this.error(d.UNCLOSED_TAG,g(r,this.clonePosition()))}else return this.error(d.INVALID_TAG,g(r,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Mr(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,i){for(var r=this.clonePosition(),n="";;){var s=this.tryParseQuote(i);if(s){n+=s;continue}var a=this.tryParseUnquoted(t,i);if(a){n+=a;continue}var o=this.tryParseLeftAngleBracket();if(o){n+=o;continue}break}var l=g(r,this.clonePosition());return{val:{type:y.literal,value:n,location:l},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Dr(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var i=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)i.push(39),this.bump();else{this.bump();break}else i.push(r);this.bump()}return Fe.apply(void 0,i)},e.prototype.tryParseUnquoted=function(t,i){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(i==="plural"||i==="selectordinal")||r===125&&t>0?null:(this.bump(),Fe(r))},e.prototype.parseArgument=function(t,i){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE,g(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(d.EMPTY_ARGUMENT,g(r,this.clonePosition()));var n=this.parseIdentifierIfPossible().value;if(!n)return this.error(d.MALFORMED_ARGUMENT,g(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE,g(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:y.argument,value:n,location:g(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE,g(r,this.clonePosition())):this.parseArgumentOptions(t,i,n,r);default:return this.error(d.MALFORMED_ARGUMENT,g(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),i=this.offset(),r=je(this.message,i),n=i+r.length;this.bumpTo(n);var s=this.clonePosition(),a=g(t,s);return{value:r,location:a}},e.prototype.parseArgumentOptions=function(t,i,r,n){var s,a=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(d.EXPECT_ARGUMENT_TYPE,g(a,l));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),c=this.parseSimpleArgStyleIfPossible();if(c.err)return c;var f=kr(c.val);if(f.length===0)return this.error(d.EXPECT_ARGUMENT_STYLE,g(this.clonePosition(),this.clonePosition()));var v=g(h,this.clonePosition());u={style:f,styleLocation:v}}var _=this.tryParseArgumentClose(n);if(_.err)return _;var w=g(n,this.clonePosition());if(u&&It(u?.style,"::",0)){var I=Lr(u.style.slice(2));if(o==="number"){var c=this.parseNumberSkeletonFromString(I,u.styleLocation);return c.err?c:{val:{type:y.number,value:r,location:w,style:c.val},err:null}}else{if(I.length===0)return this.error(d.EXPECT_DATE_TIME_SKELETON,w);var j=I;this.locale&&(j=Ct(I,this.locale));var f={type:D.dateTime,pattern:j,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?xt(j):{}},U=o==="date"?y.date:y.time;return{val:{type:U,value:r,location:w,style:f},err:null}}}return{val:{type:o==="number"?y.number:o==="date"?y.date:y.time,value:r,location:w,style:(s=u?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var H=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(d.EXPECT_SELECT_ARGUMENT_OPTIONS,g(H,m({},H)));this.bumpSpace();var V=this.parseIdentifierIfPossible(),N=0;if(o!=="select"&&V.value==="offset"){if(!this.bumpIf(":"))return this.error(d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,g(this.clonePosition(),this.clonePosition()));this.bumpSpace();var c=this.tryParseDecimalInteger(d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,d.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(c.err)return c;this.bumpSpace(),V=this.parseIdentifierIfPossible(),N=c.val}var he=this.tryParsePluralOrSelectOptions(t,o,i,V);if(he.err)return he;var _=this.tryParseArgumentClose(n);if(_.err)return _;var et=g(n,this.clonePosition());return o==="select"?{val:{type:y.select,value:r,options:Nt(he.val),location:et},err:null}:{val:{type:y.plural,value:r,options:Nt(he.val),offset:N,pluralType:o==="plural"?"cardinal":"ordinal",location:et},err:null}}default:return this.error(d.INVALID_ARGUMENT_TYPE,g(a,l))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(d.EXPECT_ARGUMENT_CLOSING_BRACE,g(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,i=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var n=this.clonePosition();if(!this.bumpUntil("'"))return this.error(d.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,g(n,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(i.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(i.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,i){var r=[];try{r=At(t)}catch{return this.error(d.INVALID_NUMBER_SKELETON,i)}return{val:{type:D.number,tokens:r,location:i,parsedOptions:this.shouldParseSkeletons?$t(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,i,r,n){for(var s,a=!1,o=[],l=new Set,u=n.value,h=n.location;;){if(u.length===0){var c=this.clonePosition();if(i!=="select"&&this.bumpIf("=")){var f=this.tryParseDecimalInteger(d.EXPECT_PLURAL_ARGUMENT_SELECTOR,d.INVALID_PLURAL_ARGUMENT_SELECTOR);if(f.err)return f;h=g(c,this.clonePosition()),u=this.message.slice(c.offset,this.offset())}else break}if(l.has(u))return this.error(i==="select"?d.DUPLICATE_SELECT_ARGUMENT_SELECTOR:d.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);u==="other"&&(a=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(i==="select"?d.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:d.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,g(this.clonePosition(),this.clonePosition()));var _=this.parseMessage(t+1,i,r);if(_.err)return _;var w=this.tryParseArgumentClose(v);if(w.err)return w;o.push([u,{value:_.val,location:g(v,this.clonePosition())}]),l.add(u),this.bumpSpace(),s=this.parseIdentifierIfPossible(),u=s.value,h=s.location}return o.length===0?this.error(i==="select"?d.EXPECT_SELECT_ARGUMENT_SELECTOR:d.EXPECT_PLURAL_ARGUMENT_SELECTOR,g(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(d.MISSING_OTHER_CLAUSE,g(this.clonePosition(),this.clonePosition())):{val:o,err:null}},e.prototype.tryParseDecimalInteger=function(t,i){var r=1,n=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var s=!1,a=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,a=a*10+(o-48),this.bump();else break}var l=g(n,this.clonePosition());return s?(a*=r,Rr(a)?{val:a,err:null}:this.error(i,l)):this.error(t,l)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var i=Ot(this.message,t);if(i===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return i},e.prototype.error=function(t,i){return{val:null,err:{kind:t,message:this.message,location:i}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(It(this.message,t,this.offset())){for(var i=0;i<t.length;i++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var i=this.offset(),r=this.message.indexOf(t,i);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var i=this.offset();if(i===t)break;if(i>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&kt(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),i=this.offset(),r=this.message.charCodeAt(i+(t>=65536?2:1));return r??null},e}();function Ve(e){return e>=97&&e<=122||e>=65&&e<=90}function Dr(e){return Ve(e)||e===47}function Mr(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function kt(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Ur(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Xe(e){e.forEach(function(t){if(delete t.location,be(t)||xe(t))for(var i in t.options)delete t.options[i].location,Xe(t.options[i].value);else ge(t)&&Ee(t.style)||(ve(t)||ye(t))&&ie(t.style)?delete t.style.location:_e(t)&&Xe(t.children)})}function Dt(e,t){t===void 0&&(t={}),t=m({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var i=new Lt(e,t).parse();if(i.err){var r=SyntaxError(d[i.err.kind]);throw r.location=i.err.location,r.originalMessage=i.err.message,r}return t?.captureLocation||Xe(i.val),i.val}function se(e,t){var i=t&&t.cache?t.cache:Wr,r=t&&t.serializer?t.serializer:Xr,n=t&&t.strategy?t.strategy:Fr;return n(e,{cache:i,serializer:r})}function Gr(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Mt(e,t,i,r){var n=Gr(r)?r:i(r),s=t.get(n);return typeof s>"u"&&(s=e.call(this,r),t.set(n,s)),s}function Ut(e,t,i){var r=Array.prototype.slice.call(arguments,3),n=i(r),s=t.get(n);return typeof s>"u"&&(s=e.apply(this,r),t.set(n,s)),s}function We(e,t,i,r,n){return i.bind(t,e,r,n)}function Fr(e,t){var i=e.length===1?Mt:Ut;return We(e,this,i,t.cache.create(),t.serializer)}function jr(e,t){return We(e,this,Ut,t.cache.create(),t.serializer)}function Vr(e,t){return We(e,this,Mt,t.cache.create(),t.serializer)}var Xr=function(){return JSON.stringify(arguments)};function ze(){this.cache=Object.create(null)}ze.prototype.get=function(e){return this.cache[e]};ze.prototype.set=function(e,t){this.cache[e]=t};var Wr={create:function(){return new ze}},Te={variadic:jr,monadic:Vr};var M;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(M||(M={}));var ae=function(e){re(t,e);function t(i,r,n){var s=e.call(this,i)||this;return s.code=r,s.originalMessage=n,s}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error);var qe=function(e){re(t,e);function t(i,r,n,s){return e.call(this,'Invalid values for "'.concat(i,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),M.INVALID_VALUE,s)||this}return t}(ae);var Gt=function(e){re(t,e);function t(i,r,n){return e.call(this,'Value for "'.concat(i,'" must be of type ').concat(r),M.INVALID_VALUE,n)||this}return t}(ae);var Ft=function(e){re(t,e);function t(i,r){return e.call(this,'The intl string context variable "'.concat(i,'" was not provided to the string "').concat(r,'"'),M.MISSING_VALUE,r)||this}return t}(ae);var E;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(E||(E={}));function zr(e){return e.length<2?e:e.reduce(function(t,i){var r=t[t.length-1];return!r||r.type!==E.literal||i.type!==E.literal?t.push(i):r.value+=i.value,t},[])}function qr(e){return typeof e=="function"}function oe(e,t,i,r,n,s,a){if(e.length===1&&ke(e[0]))return[{type:E.literal,value:e[0].value}];for(var o=[],l=0,u=e;l<u.length;l++){var h=u[l];if(ke(h)){o.push({type:E.literal,value:h.value});continue}if(bt(h)){typeof s=="number"&&o.push({type:E.literal,value:i.getNumberFormat(t).format(s)});continue}var c=h.value;if(!(n&&c in n))throw new Ft(c,a);var f=n[c];if(yt(h)){(!f||typeof f=="string"||typeof f=="number")&&(f=typeof f=="string"||typeof f=="number"?String(f):""),o.push({type:typeof f=="string"?E.literal:E.object,value:f});continue}if(ve(h)){var v=typeof h.style=="string"?r.date[h.style]:ie(h.style)?h.style.parsedOptions:void 0;o.push({type:E.literal,value:i.getDateTimeFormat(t,v).format(f)});continue}if(ye(h)){var v=typeof h.style=="string"?r.time[h.style]:ie(h.style)?h.style.parsedOptions:r.time.medium;o.push({type:E.literal,value:i.getDateTimeFormat(t,v).format(f)});continue}if(ge(h)){var v=typeof h.style=="string"?r.number[h.style]:Ee(h.style)?h.style.parsedOptions:void 0;v&&v.scale&&(f=f*(v.scale||1)),o.push({type:E.literal,value:i.getNumberFormat(t,v).format(f)});continue}if(_e(h)){var _=h.children,w=h.value,I=n[w];if(!qr(I))throw new Gt(w,"function",a);var j=oe(_,t,i,r,n,s),U=I(j.map(function(N){return N.value}));Array.isArray(U)||(U=[U]),o.push.apply(o,U.map(function(N){return{type:typeof N=="string"?E.literal:E.object,value:N}}))}if(be(h)){var H=h.options[f]||h.options.other;if(!H)throw new qe(h.value,f,Object.keys(h.options),a);o.push.apply(o,oe(H.value,t,i,r,n));continue}if(xe(h)){var H=h.options["=".concat(f)];if(!H){if(!Intl.PluralRules)throw new ae(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,M.MISSING_INTL_API,a);var V=i.getPluralRules(t,{type:h.pluralType}).select(f-(h.offset||0));H=h.options[V]||h.options.other}if(!H)throw new qe(h.value,f,Object.keys(h.options),a);o.push.apply(o,oe(H.value,t,i,r,n,f-(h.offset||0)));continue}}return zr(o)}function Zr(e,t){return t?m(m(m({},e||{}),t||{}),Object.keys(e).reduce(function(i,r){return i[r]=m(m({},e[r]),t[r]||{}),i},{})):e}function Jr(e,t){return t?Object.keys(e).reduce(function(i,r){return i[r]=Zr(e[r],t[r]),i},m({},e)):e}function Ze(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,i){e[t]=i}}}}}function Yr(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:se(function(){for(var t,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new((t=Intl.NumberFormat).bind.apply(t,me([void 0],i,!1)))},{cache:Ze(e.number),strategy:Te.variadic}),getDateTimeFormat:se(function(){for(var t,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new((t=Intl.DateTimeFormat).bind.apply(t,me([void 0],i,!1)))},{cache:Ze(e.dateTime),strategy:Te.variadic}),getPluralRules:se(function(){for(var t,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new((t=Intl.PluralRules).bind.apply(t,me([void 0],i,!1)))},{cache:Ze(e.pluralRules),strategy:Te.variadic})}}var jt=function(){function e(t,i,r,n){var s=this;if(i===void 0&&(i=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(a){var o=s.formatToParts(a);if(o.length===1)return o[0].value;var l=o.reduce(function(u,h){return!u.length||h.type!==E.literal||typeof u[u.length-1]!="string"?u.push(h.value):u[u.length-1]+=h.value,u},[]);return l.length<=1?l[0]||"":l},this.formatToParts=function(a){return oe(s.ast,s.locales,s.formatters,s.formats,a,void 0,s.message)},this.resolvedOptions=function(){return{locale:s.resolvedLocale.toString()}},this.getAst=function(){return s.ast},this.locales=i,this.resolvedLocale=e.resolveLocale(i),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:n?.ignoreTag,locale:this.resolvedLocale})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Jr(e.formats,r),this.formatters=n&&n.formatters||Yr(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){var i=Intl.NumberFormat.supportedLocalesOf(t);return i.length>0?new Intl.Locale(i[0]):new Intl.Locale(typeof t=="string"?t:t[0])},e.__parse=Dt,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();var Vt=jt;var Je={en:Re};function p(e,t,...i){let r=t.replace(/['"]+/g,"");var n;try{n=e.split(".").reduce((a,o)=>a[o],Je[r])}catch{n=e.split(".").reduce((o,l)=>o[l],Je.en)}if(n===void 0&&(n=e.split(".").reduce((a,o)=>a[o],Je.en)),!i.length)return n;let s={};for(let a=0;a<i.length;a+=2){let o=i[a];o=o.replace(/^{([^}]+)?}$/,"$1"),s[o]=i[a+1]}try{return new Vt(n,t).format(s)}catch(a){return"Translation "+a}}var Xt="1.4.2";var Wt=Ae`
    :host {
        color: var(--primary-text-color);
        background: var(--lovelace-background, var(--primary-background-color));
    }

    .header {
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color, white);
        border-bottom: var(--app-header-border-bottom, none);
    }

    .toolbar {
        height: var(--header-height);
        display: flex;
        align-items: center;
        font-size: 20px;
        padding: 0 16px;
        font-weight: 400;
        box-sizing: border-box;
    }

    .main-title {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
    }

    .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
    }

    .view {
        height: calc(100vh - 40px);
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
    }

    .view > ha-card {
        width: 880px;
        max-width: 880px;
    }

    .view > ha-card:last-child {
        margin-bottom: 20px;
    }

    ha-card {
        display: block;
        padding: 16px;
    }

    .form-row {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
    }

    .form-field,
    ha-textfield,
    ha-select,
    ha-icon-picker {
        min-width: 265px;
    }

    .filler {
        flex-grow: 1;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    @media (max-width: 600px) {
        .form-row {
            flex-direction: column; /* Stack fields vertically */
        }

        .form-field {
            width: 100%; /* Full width */
        }

        ha-textfield,
        ha-select,
        ha-icon-picker {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .task-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .task-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        gap: 1rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--divider-color);
    }

    .task-header {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .task-content {
        flex: 1;
    }

    .task-actions {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .due-soon {
        color: var(--error-color, red);
        font-weight: bold;
    }

    .warning {
        --mdc-theme-primary: var(--error-color);
        color: var(--primary-text-color);
    }

    ha-dialog .form-field {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
    }

    ha-dialog .secondary {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
    }
`;var Ye=["days","weeks","months"];function Qe(e){return{days:p("intervals.days",e),weeks:p("intervals.weeks",e),months:p("intervals.months",e)}}var zt=e=>e.connection.sendMessagePromise({type:"tag/list"}),Ke=e=>e.callWS({type:"home_maintenance/get_tasks"}),qt=(e,t)=>e.callWS({type:"home_maintenance/get_task",task_id:t}),Zt=(e,t)=>e.callWS({type:"home_maintenance/add_task",...t}),Jt=(e,t)=>e.callWS({type:"home_maintenance/remove_task",task_id:t}),Yt=(e,t)=>e.callWS({type:"home_maintenance/complete_task",task_id:t}),Qt=(e,t)=>e.callWS({type:"home_maintenance/update_task",...t}),Kt=e=>e.callWS({type:"home_maintenance/get_config"});var T=class extends B{constructor(){super(...arguments);this.tags=null;this.tasks=[];this.config=null;this.title="";this.intervalValue="";this.intervalType="days";this.lastPerformed="";this.tagId=" ";this.icon="";this.editingTask=null}async loadData(){this.tags=await zt(this.hass),this.tasks=await Ke(this.hass),this.config=await Kt(this.hass)}async resetForm(){this.title="",this.intervalValue="",this.intervalType="days",this.lastPerformed="",this.tagId=" ",this.icon="",this.tasks=await Ke(this.hass)}computeISODate(i){let r;if(i){let[n,s,a]=i.split("T")[0].split("-"),o=Number(n),l=Number(s),u=Number(a);if(!isNaN(o)&&!isNaN(l)&&!isNaN(u)){let h=new Date(o,l-1,u);h.setHours(0,0,0,0),r=h.toISOString()}else{alert("Invalid date entered.");let h=new Date;h.setHours(0,0,0,0),r=h.toISOString()}}else{let n=new Date;n.setHours(0,0,0,0),r=n.toISOString()}return r}connectedCallback(){super.connectedCallback(),this.loadData()}renderTagSelect(){return this.hass?b`
            <div class="form-field">
                <ha-select
                label="${p("panel.cards.new.fields.tag.heading",this.hass.language)}"
                floatLabel
                helper="${p("panel.cards.new.fields.tag.helper",this.hass.language)}"
                helperPersistent
                .value=${this.tagId||" "}
                @change=${i=>this.tagId=i.target.value||""}
                fixedMenuPosition
                naturalMenuWidth
                >
                <mwc-list-item value=" ">${p("common.none",this.hass.language)}</mwc-list-item>
                ${this.tags?this.tags.map(i=>b`
                    <mwc-list-item value=${i.id}>${i.name||i.id}</mwc-list-item>
                    `):b`<mwc-list-item disabled>${p("common.loading",this.hass.language)}</mwc-list-item>`}
                </ha-select>
            </div>
        `:b``}render(){return this.hass?!this.tasks||!this.tags?b`<p>${p("common.loading",this.hass.language)}</p>`:b`
            <div class="header">
                <div class="toolbar">
                    <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
                    <div class="main-title">
                        ${this.config?.options.sidebar_title}
                    </div>
                    <div class="version">
                        v${Xt}
                    </div>
                </div>
            </div>

            <div class="view">
                <ha-card header="${p("panel.cards.new.title",this.hass.language)}">
                    <div class="card-content">${this.renderForm()}</div>
                </ha-card>

                <div class="break"></div>

                <ha-card header="${p("panel.cards.current.title",this.hass.language)}">
                    <div class="card-content">
                        <ul id="task-list" class="task-list">${this.renderTasks()}</ul>
                    </div>
                </ha-card>
            </div>

            <ha-form
                style="display: none"
                .hass=${this.hass}
                .data=${{dummy:""}}
                .schema=${[{name:"dummy",selector:{date:{}}}]}
            ></ha-form>

            ${this.renderEditDialog()}
        `:b``}renderForm(){if(!this.hass)return b``;let i=Qe(this.hass.language);return b`
            <div class="form-row">
                <div class="form-field">
                    <ha-textfield
                        label="${p("panel.cards.new.fields.title.heading",this.hass.language)}"
                        .value=${this.title}
                        @input=${r=>this.title=r.target.value}
                    />
                </div>

                <div class="form-field">
                    <ha-textfield
                        label="${p("panel.cards.new.fields.interval_value.heading",this.hass.language)}"
                        type="number"
                        min="1"
                        .value=${String(this.intervalValue)}
                        @input=${r=>this.intervalValue=parseInt(r.target.value)}
                    />
                </div>

                <div class="form-field">
                    <ha-select
                        label="${p("panel.cards.new.fields.interval_type.heading",this.hass.language)}"
                        .value=${this.intervalType}
                        @change=${r=>this.intervalType=r.target.value}
                        fixedMenuPosition
                        naturalMenuWidth
                    >
                    ${Ye.map(r=>b`
                        <mwc-list-item .value=${r}>
                            ${i[r]}
                        </mwc-list-item>
                    `)}
                    </ha-select>
                </div>

                <div class="form-field">
                    <ha-date-input
                        label="${p("panel.cards.new.fields.last_performed.heading",this.hass.language)}"
                        helper="${p("panel.cards.new.fields.last_performed.helper",this.hass.language)}"
                        .locale=${this.hass.locale}
                        .value=${this.lastPerformed}
                        @value-changed=${r=>this.lastPerformed=r.target.value}
                    >
                </div>

                ${this.renderTagSelect?.()??null}

                <div class="form-field">
                    <ha-icon-picker
                        label="${p("panel.cards.new.fields.icon.heading",this.hass.language)}"
                        helper="${p("panel.cards.new.fields.icon.helper",this.hass.language)}"
                        helperPersistent
                        .value=${this.icon}
                        @value-changed=${r=>this.icon=r.detail.value}
                    ></ha-icon-picker>
                </div>

                <div class="form-field">
                    <mwc-button @click=${this._handleAddTaskClick}>${p("panel.cards.new.actions.add_task",this.hass.language)}</mwc-button>
                </div>

                <div class="filler"></div>
            </div>
        `}renderTasks(){if(!this.hass)return b``;if(!this.tasks||this.tasks.length===0)return b`<li>No tasks found.</li>`;let i=new Date;return this.tasks.map(r=>{if(!this.hass)return b``;let n=new Date(this.computeISODate(r.last_performed)),s=new Date(n),a=r.interval_value,o=r.interval_type,l=r.interval_type;switch(l){case"days":s.setDate(s.getDate()+a),a===1&&(o=p("intervals.day",this.hass.language));break;case"weeks":s.setDate(s.getDate()+a*7),a===1&&(o=p("intervals.week",this.hass.language));break;case"months":s.setMonth(s.getMonth()+a),a===1&&(o=p("intervals.month",this.hass.language));break;default:throw new Error(`Unsupported interval type: ${l}`)}let u=s<=i,h=s.toLocaleDateString(),c=n.toLocaleDateString(),f=r.icon;return b`
                <li class="task-item">
                    <div class="task-content">
                        <div class="task-header">
                            <ha-icon icon="${f}" class="task-icon"></ha-icon>
                            <strong>${r.title}</strong> — ${p("panel.cards.current.every",this.hass.language)} ${r.interval_value} ${o}
                        </div>
                        <div>${p("panel.cards.current.last",this.hass.language)}: ${c}</div>
                        <div>
                            ${p("panel.cards.current.next",this.hass.language)}:
                            <span class=${u?"due-soon":""}>${h}</span>
                        </div>
                    </div>
                    <div class="task-actions">
                        <mwc-button @click=${this._handleCompleteTaskClick.bind(this,r.id)}>
                            <ha-icon icon="mdi:check-circle-outline"></ha-icon> ${p("panel.cards.current.actions.complete",this.hass.language)}
                        </mwc-button>
                        <mwc-button @click=${this._handleOpenEditDialogClick.bind(this,r.id)}>
                            <ha-icon icon="mdi:pencil-outline"></ha-icon> ${p("panel.cards.current.actions.edit",this.hass.language)}
                        </mwc-button>
                        <mwc-button class="warning" @click=${this._handleRemoveTaskClick.bind(this,r.id)}>
                            <ha-icon icon="mdi:trash-can-outline"></ha-icon> ${p("panel.cards.current.actions.remove",this.hass.language)}
                        </mwc-button>
                    </div>
                </li>
            `})}renderEditDialog(){if(!this.hass)return b``;if(!this.editingTask)return b``;let i=Qe(this.hass.language);return b`
            <ha-dialog
                open
                heading="${p("panel.dialog.edit_task.title",this.hass.language)}: ${this.editingTask.title}"
                @closed=${this._handleDialogClosed}
            >
                <div class="form-field">
                    <ha-textfield
                        label="${p("panel.dialog.edit_task.fields.interval_value.heading",this.hass.language)}"
                        type="number"
                        .value=${String(this.editingTask.interval_value)}
                        @input=${r=>{let n=parseInt(r.target.value);isNaN(n)||(this.editingTask.interval_value=n)}}
                    ></ha-textfield>
                </div>

                <div class="form-field">
                    <ha-select
                        .value=${this.editingTask.interval_type}
                        @selected=${r=>{r.stopPropagation(),this.editingTask.interval_type=r.target.value}}
                        label="${p("panel.dialog.edit_task.fields.interval_type.heading",this.hass.language)}"
                    >
                    ${Ye.map(r=>b`
                        <mwc-list-item .value=${r}>
                            ${i[r]}
                        </mwc-list-item>
                    `)}
                    </ha-select>
                </div>

                <div class="form-field">
                    <ha-date-input
                        label="${p("panel.dialog.edit_task.fields.last_performed.heading",this.hass.language)}"
                        helper="${p("panel.dialog.edit_task.fields.last_performed.helper",this.hass.language)}"
                        .locale=${this.hass.locale}
                        .value=${this.editingTask.last_performed.split("T")[0]}
                        @value-changed=${r=>this.editingTask.last_performed=r.target.value}
                    >
                </div>

                <div class="form-field">
                    <ha-icon-picker
                        label="${p("panel.dialog.edit_task.fields.icon.heading",this.hass.language)}"
                        helper="${p("panel.dialog.edit_task.fields.icon.helper",this.hass.language)}"
                        helperpersistent
                        .value=${this.editingTask.icon}
                        @value-changed=${r=>this.editingTask.icon=r.detail.value}
                    ></ha-icon-picker>
                </div>

                <mwc-button slot="secondaryAction" @click=${()=>this.editingTask=null}>
                    ${p("panel.dialog.edit_task.actions.cancel",this.hass.language)}
                </mwc-button>
                <mwc-button slot="primaryAction" @click=${this._handleSaveEditClick}>
                    ${p("panel.dialog.edit_task.actions.save",this.hass.language)}
                </mwc-button>
            </ha-dialog>
        `}async _handleAddTaskClick(){if(!this.title.trim()||!this.intervalValue||!this.intervalType){let r=p("panel.cards.new.alerts.required",this.hass.language);alert(r);return}let i={title:this.title.trim(),interval_value:this.intervalValue,interval_type:this.intervalType,last_performed:this.computeISODate(this.lastPerformed)};this.tagId&&this.tagId.trim()!==""&&(i.tag_id=this.tagId),this.icon&&this.icon.trim()!==""?i.icon=this.icon:i.icon="mdi:calendar-check";try{await Zt(this.hass,i),await this.resetForm()}catch(r){console.error("Failed to add task:",r);let n=p("panel.cards.new.alerts.error",this.hass.language);alert(n)}}async _handleCompleteTaskClick(i){try{await Yt(this.hass,i),await this.loadData()}catch(r){console.error("Failed to complete task:",r)}}async _handleOpenEditDialogClick(i){try{let r=await qt(this.hass,i);this.editingTask=r,await this.updateComplete}catch(r){console.error("Failed to fetch task for edit:",r)}}async _handleSaveEditClick(){if(!this.editingTask)return;let i=this.computeISODate(this.editingTask.last_performed);if(!i)return;let r="mdi:calendar-check";this.editingTask.icon&&this.editingTask.icon.trim()!==""&&(r=this.editingTask.icon);try{await Qt(this.hass,{task_id:this.editingTask.id,updates:{interval_value:Number(this.editingTask.interval_value),interval_type:this.editingTask.interval_type,last_performed:i,icon:r}}),this.editingTask=null,await this.loadData()}catch(n){console.error("Failed to update task:",n)}}async _handleRemoveTaskClick(i){let r=p("panel.cards.current.confirm_remove",this.hass.language);if(confirm(r))try{await Jt(this.hass,i),await this.loadData()}catch(n){console.error("Failed to remove task:",n)}}_handleDialogClosed(i){let r=i.detail?.action;(r==="close"||r==="cancel")&&(this.editingTask=null)}};T.styles=Wt,S([te()],T.prototype,"hass",2),S([te()],T.prototype,"narrow",2),S([A()],T.prototype,"tags",2),S([A()],T.prototype,"tasks",2),S([A()],T.prototype,"config",2),S([A()],T.prototype,"title",2),S([A()],T.prototype,"intervalValue",2),S([A()],T.prototype,"intervalType",2),S([A()],T.prototype,"lastPerformed",2),S([A()],T.prototype,"tagId",2),S([A()],T.prototype,"icon",2),S([A()],T.prototype,"editingTask",2);customElements.define("home-maintenance-panel",T);export{T as HomeMaintenancePanel};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
