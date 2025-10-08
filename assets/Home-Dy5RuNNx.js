import{c as G,r as H,j as e,L as P,u as ee,B as I,a as te,g as ne}from"./index-CjsvniRI.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],ae=G("moon",re);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ie=G("sun",se);function oe({title:r="HANISH"}){const[t,l]=H.useState("");return H.useEffect(()=>{const a=()=>{const n=new Date,o=n.toLocaleDateString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit"}),h=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});l(`${o}  ${h}`)};a();const f=setInterval(a,6e4);return()=>clearInterval(f)},[]),e.jsxs("header",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-wide",children:e.jsx(P,{to:"/",children:r})}),e.jsxs("p",{className:"mt-1 text-xs font-mono opacity-70",children:[t," EST"]})]})}let $=0;function le({items:r,align:t="center"}){const l=()=>{$+=1;const n=$%2===1?"/sounds/straycat1.mp3":"/sounds/straycat2.mp3",o=new Audio(n);o.volume=.5,o.play().catch(h=>console.log("Audio play failed:",h))},a=t==="left"?"items-start text-left":"items-center text-center",f=n=>n.startsWith("http")||n.startsWith("mailto:")||n.endsWith(".pdf");return e.jsx("nav",{"aria-label":"primary",className:`mt-8 space-y-2 ${a}`,children:r.map(n=>f(n.href)?e.jsx("a",{href:n.href,target:n.href.endsWith(".pdf")?"_blank":void 0,rel:"noopener noreferrer",onMouseDown:l,className:`block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                         hover:bg-foreground hover:text-background`,children:n.label},n.href):e.jsx(P,{to:n.href,onMouseDown:l,className:`block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                       hover:bg-foreground hover:text-background`,children:n.label},n.href))})}function ce(){const{theme:r,setTheme:t}=ee(),l=()=>{t(r==="dark"?"light":"dark")};return e.jsxs(I,{variant:"outline",size:"icon",onClick:l,children:[e.jsx(ie,{className:"h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"}),e.jsx(ae,{className:"absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}function ue(r){return e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...r,children:e.jsx("path",{fill:"currentColor",d:"M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"})})}function de(r){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...r,children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"M3 7l9 6 9-6"})]})}function me({githubUrl:r="https://github.com/mistahanish",contactUrl:t="mailto:me@hanishv.com"}){return e.jsxs("div",{className:"mt-8 flex items-center justify-center gap-3",children:[e.jsx(ce,{}),e.jsx(I,{asChild:!0,variant:"outline",size:"icon",className:"font-mono",title:"GitHub",children:e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:e.jsx(ue,{className:"h-[1.2rem] w-[1.2rem]"})})}),e.jsx(I,{asChild:!0,variant:"outline",size:"icon",className:"font-mono",title:"Email",children:e.jsx("a",{href:t,"aria-label":"Email",children:e.jsx(de,{className:"h-[1.2rem] w-[1.2rem]"})})})]})}var w={},B;function fe(){if(B)return w;B=1;function r(n){if(typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=n,document.head.appendChild(o),n}Object.defineProperty(w,"__esModule",{value:!0});var t=te();function l(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var a=l(t);r(`.rfm-marquee-container {
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
}`);const f=t.forwardRef(function({style:o={},className:h="",autoFill:m=!1,play:x=!0,pauseOnHover:N=!1,pauseOnClick:E=!1,direction:s="left",speed:v=50,delay:L=0,loop:M=0,gradient:O=!1,gradientColor:A="white",gradientWidth:y=200,onFinish:U,onCycleComplete:X,onMount:_,children:b},Y){const[S,Z]=t.useState(0),[j,F]=t.useState(0),[k,T]=t.useState(1),[C,K]=t.useState(!1),J=t.useRef(null),c=Y||J,p=t.useRef(null),g=t.useCallback(()=>{if(p.current&&c.current){const i=c.current.getBoundingClientRect(),R=p.current.getBoundingClientRect();let u=i.width,d=R.width;(s==="up"||s==="down")&&(u=i.height,d=R.height),T(m&&u&&d&&d<u?Math.ceil(u/d):1),Z(u),F(d)}},[m,c,s]);t.useEffect(()=>{if(C&&(g(),p.current&&c.current)){const i=new ResizeObserver(()=>g());return i.observe(c.current),i.observe(p.current),()=>{i&&i.disconnect()}}},[g,c,C]),t.useEffect(()=>{g()},[g,b]),t.useEffect(()=>{K(!0)},[]),t.useEffect(()=>{typeof _=="function"&&_()},[]);const D=t.useMemo(()=>m?j*k/v:j<S?S/v:j/v,[m,S,j,k,v]),Q=t.useMemo(()=>Object.assign(Object.assign({},o),{"--pause-on-hover":!x||N?"paused":"running","--pause-on-click":!x||N&&!E||E?"paused":"running","--width":s==="up"||s==="down"?"100vh":"100%","--transform":s==="up"?"rotate(-90deg)":s==="down"?"rotate(90deg)":"none"}),[o,x,N,E,s]),V=t.useMemo(()=>({"--gradient-color":A,"--gradient-width":typeof y=="number"?`${y}px`:y}),[A,y]),z=t.useMemo(()=>({"--play":x?"running":"paused","--direction":s==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${L}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":m?"auto":"100%"}),[x,s,D,L,M,m]),q=t.useMemo(()=>({"--transform":s==="up"?"rotate(90deg)":s==="down"?"rotate(-90deg)":"none"}),[s]),W=t.useCallback(i=>[...Array(Number.isFinite(i)&&i>=0?i:0)].map((R,u)=>a.default.createElement(t.Fragment,{key:u},t.Children.map(b,d=>a.default.createElement("div",{style:q,className:"rfm-child"},d)))),[q,b]);return C?a.default.createElement("div",{ref:c,style:Q,className:"rfm-marquee-container "+h},O&&a.default.createElement("div",{style:V,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:X,onAnimationEnd:U},a.default.createElement("div",{className:"rfm-initial-child-container",ref:p},t.Children.map(b,i=>a.default.createElement("div",{style:q,className:"rfm-child"},i))),W(k-1)),a.default.createElement("div",{className:"rfm-marquee",style:z},W(k))):null});return w.default=f,w}var he=fe();const xe=ne(he);function pe(){return e.jsx("div",{className:"pb-8",children:e.jsx(xe,{children:e.jsx("span",{className:"text-md",children:"✠❃✠ LISTENING: CITY POP CLASSICS / シティポップクラシックス ✠❃✠✠❃✠ PLAYING: ELDEN RING / エルデンリング ✠❃✠✠❃✠ READING: THE ISLAND OF DR. MOREAU / ドクター・モローの島 ✠❃✠"})})})}const ge=[{href:"/projects",label:"☾⋆⁺₊ projects ₊⁺⋆☽"},{href:"/experience",label:"✦༓ experience ༓✦"},{href:"/about",label:"⟅ about me ⟆"},{href:"/gallery",label:"༺ gallery ༻"},{href:"/Hanish.pdf",label:"『✣ resume ✣』"}];function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:e.jsx("img",{src:"/thinker.png",alt:"Thinker",style:{maxWidth:"45%",height:"auto"}})}),e.jsx(oe,{title:"HANISH"}),e.jsx(le,{items:ge}),e.jsx(me,{githubUrl:"https://github.com/mistahanish",contactUrl:"mailto:me@hanishv.com"})]})}export{ye as default};
