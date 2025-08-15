import{c as G,r as $,j as e,L as Q,u as V,B as I,a as ee,g as te}from"./index-DDcDn_Dl.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],re=G("moon",ne);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ie=G("sun",ae);function se({title:r="HANISH"}){const[t,l]=$.useState("");return $.useEffect(()=>{const n=()=>{const s=new Date,o=s.toLocaleDateString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"}),w=s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});l(`${o}  ${w}`)};n();const k=setInterval(n,6e4);return()=>clearInterval(k)},[]),e.jsxs("header",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-wide",children:e.jsx(Q,{to:"/",children:r})}),e.jsxs("p",{className:"mt-1 text-xs font-mono opacity-70",children:[t," EST"]})]})}function oe({items:r,align:t="center"}){const l=t==="left"?"items-start text-left":"items-center text-center";return e.jsx("nav",{"aria-label":"primary",className:`mt-8 space-y-2 ${l}`,children:r.map(n=>e.jsx("a",{href:n.href,className:`block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                     hover:bg-foreground hover:text-background`,children:n.label},n.href))})}function le(){const{theme:r,setTheme:t}=V(),l=()=>{t(r==="dark"?"light":"dark")};return e.jsxs(I,{variant:"outline",size:"icon",onClick:l,children:[e.jsx(ie,{className:"h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"}),e.jsx(re,{className:"absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}function ce(r){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})}function ue(r){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...r,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"M3 7l9 6 9-6"})]})}function me({githubUrl:r="https://github.com/mistahanish",contactUrl:t="mailto:me@hanishv.com"}){return e.jsxs("div",{className:"mt-8 flex items-center justify-center gap-3",children:[e.jsx(le,{}),e.jsx(I,{asChild:!0,variant:"outline",size:"icon",className:"font-mono",title:"GitHub",children:e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx(ce,{className:"h-[1.2rem] w-[1.2rem]"})})}),e.jsx(I,{asChild:!0,variant:"outline",size:"icon",className:"font-mono",title:"Email",children:e.jsx("a",{href:t,"aria-label":"Email",children:e.jsx(ue,{className:"h-[1.2rem] w-[1.2rem]"})})})]})}var b={},B;function de(){if(B)return b;B=1;function r(s){if(typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=s,document.head.appendChild(o),s}Object.defineProperty(b,"__esModule",{value:!0});var t=ee();function l(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var n=l(t);r(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const k=t.forwardRef(function({style:o={},className:w="",autoFill:d=!1,play:f=!0,pauseOnHover:N=!1,pauseOnClick:E=!1,direction:a="left",speed:p=50,delay:L=0,loop:M=0,gradient:W=!1,gradientColor:_="white",gradientWidth:g=200,onFinish:P,onCycleComplete:O,onMount:A,children:v},U){const[S,X]=t.useState(0),[y,Y]=t.useState(0),[j,T]=t.useState(1),[q,Z]=t.useState(!1),K=t.useRef(null),c=U||K,h=t.useRef(null),x=t.useCallback(()=>{if(h.current&&c.current){const i=c.current.getBoundingClientRect(),R=h.current.getBoundingClientRect();let u=i.width,m=R.width;(a==="up"||a==="down")&&(u=i.height,m=R.height),T(d&&u&&m&&m<u?Math.ceil(u/m):1),X(u),Y(m)}},[d,c,a]);t.useEffect(()=>{if(q&&(x(),h.current&&c.current)){const i=new ResizeObserver(()=>x());return i.observe(c.current),i.observe(h.current),()=>{i&&i.disconnect()}}},[x,c,q]),t.useEffect(()=>{x()},[x,v]),t.useEffect(()=>{Z(!0)},[]),t.useEffect(()=>{typeof A=="function"&&A()},[]);const z=t.useMemo(()=>d?y*j/p:y<S?S/p:y/p,[d,S,y,j,p]),F=t.useMemo(()=>Object.assign(Object.assign({},o),{"--pause-on-hover":!f||N?"paused":"running","--pause-on-click":!f||N&&!E||E?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[o,f,N,E,a]),J=t.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof g=="number"?`${g}px`:g}),[_,g]),D=t.useMemo(()=>({"--play":f?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${z}s`,"--delay":`${L}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":d?"auto":"100%"}),[f,a,z,L,M,d]),C=t.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),H=t.useCallback(i=>[...Array(Number.isFinite(i)&&i>=0?i:0)].map((R,u)=>n.default.createElement(t.Fragment,{key:u},t.Children.map(v,m=>n.default.createElement("div",{style:C,className:"rfm-child"},m)))),[C,v]);return q?n.default.createElement("div",{ref:c,style:F,className:"rfm-marquee-container "+w},W&&n.default.createElement("div",{style:J,className:"rfm-overlay"}),n.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:O,onAnimationEnd:P},n.default.createElement("div",{className:"rfm-initial-child-container",ref:h},t.Children.map(v,i=>n.default.createElement("div",{style:C,className:"rfm-child"},i))),H(j-1)),n.default.createElement("div",{className:"rfm-marquee",style:D},H(j))):null});return b.default=k,b}var fe=de();const he=te(fe);function xe(){return e.jsx("div",{className:"pb-8",children:e.jsx(he,{children:e.jsx("span",{className:"text-md",children:"✠❃✠ LISTENING: CITY POP CLASSICS / シティポップクラシックス ✠❃✠✠❃✠ PLAYING: ELDEN RING / エルデンリング ✠❃✠✠❃✠ READING: THE ISLAND OF DR. MOREAU / ドクター・モローの島 ✠❃✠"})})})}const pe=[{href:"/projects",label:"☾⋆⁺₊ projects ₊⁺⋆☽"},{href:"/experience",label:"✦༓ experience ༓✦"},{href:"/about",label:"⟅ about me ⟆"},{href:"/gallery",label:"༺ gallery ༻"},{href:"/Hanish.pdf",label:"『✣ resume ✣』"}];function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(xe,{}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:e.jsx("img",{src:"/thinker.png",alt:"Thinker",style:{maxWidth:"45%",height:"auto"}})}),e.jsx(se,{title:"HANISH"}),e.jsx(oe,{items:pe}),e.jsx(me,{githubUrl:"https://github.com/mistahanish",contactUrl:"mailto:me@hanishv.com"})]})}export{ve as default};
