const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CD6SALkV.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CG_sFyD6.js","assets/modules/unplugin-icons-DmJw5o3U.js","assets/modules/vue-FURrN97m.js","assets/modules/shiki-DUnWAZqI.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-BFD-LZ2k.js","assets/index-BRSB-Ac2.js","assets/index-791oFO4M.css","assets/DrawingPreview-kNeKGKH9.css","assets/slidev/useWakeLock-L2miGKFR.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-V6UU8wyP.js","assets/slidev/context-CKaQpQVt.js","assets/useWakeLock-BSuHm0QO.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,Q as E,o,c as u,A as e,b as f,e as n,f as N,i as C,g as r,a0 as R,E as M,k as h,B as P,a1 as $,V as k,l as m,F as z,x as D,v as A,h as L,q as W}from"../modules/vue-FURrN97m.js";import{h as b,l as B,L as H,M as x,N as w,O as I,P as O,s as V,Q as T,B as S,R as U,S as F}from"../index-BRSB-Ac2.js";import{b as G,G as Q,c as j,u as q,r as K,a as X,S as Y,_ as J,o as Z}from"./useWakeLock-L2miGKFR.js";import{u as ee,b as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BFD-LZ2k.js";import{A as oe}from"../modules/unplugin-icons-DmJw5o3U.js";import"../modules/shiki-DUnWAZqI.js";import"./IconButton.vue_vue_type_script_setup_true_lang-V6UU8wyP.js";import"./context-CKaQpQVt.js";const se="/flutter_tutorial/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:i}){const a=p,l=E(a,"modelValue",i);function d(){l.value=!1}return(_,s)=>(o(),u(R,null,[e(l)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):r("",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ie=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:i}){const l=E(p,"modelValue",i),d=M(()=>typeof b.info=="string");return(_,s)=>(o(),u(le,{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ne,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,re)):r("",!0),s[1]||(s[1]=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(p){const{isEmbedded:i}=B(),a=!b.drawings.presenterOnly&&!i.value,t=k();a&&H(()=>import("./DrawingControls-CD6SALkV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const l=k(),d=k();return(_,s)=>(o(),f(z,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):r("",!0),m(G),m(Q),l.value?(o(),u(e(l),{key:1})):r("",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=c=>$(x)?x.value=c:null)},null,8,["modelValue"])):r("",!0),e(b).info?(o(),u(ie,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):r("",!0),m(j)],64))}}),de=v({__name:"PrintStyle",setup(p){function i(a,{slots:t}){if(t.default)return A("style",t.default())}return(a,t)=>(o(),u(i,null,{default:h(()=>[P(" @page { size: "+D(e(I))+"px "+D(e(O))+"px; margin: 0px; } ",1)]),_:1}))}}),ce={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=v({__name:"PresenterMouse",setup(p){return(i,a)=>{const t=oe;return e(V).cursor?(o(),f("div",ce,[m(t,{class:"absolute stroke-white dark:stroke-black",style:L({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):r("",!0)}}}),be=v({__name:"play",setup(p){const{next:i,prev:a,isPrintMode:t}=B(),{isDrawing:l}=ee(),d=W();function _(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?i():a())}q(d),K(),X();const s=M(()=>T.value||S.value),c=k();return(y,g)=>(o(),f(z,null,[e(t)?(o(),u(de,{key:0})):r("",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:h(()=>[m(Y,{"render-context":"slide"}),m(me)]),controls:h(()=>[e(t)?r("",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[m(J,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):r("",!0)],2),e(t)?r("",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=n("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};
