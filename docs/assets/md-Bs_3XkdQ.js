import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bpa4hz7b.js";import{o as p,c as o,k as l,e as i,B as s,l as e,m as k,q as g,s as y,A as h}from"./modules/vue-B94B7V6J.js";import{_ as A}from"./default-b0m56UWc.js";import{u as B,f as c}from"./slidev/context-DV-y_y6P.js";import"./modules/unplugin-icons-aI5n-4mI.js";import"./index-DfJMBkQj.js";import"./modules/shiki-BpXW-QtO.js";const E={__name:"slides.md__slidev_45",setup(D){const{$slidev:u,$nav:C,$clicksContext:n,$clicks:m,$page:f,$renderContext:x,$frontmatter:r}=B();return n.setup(),(v,t)=>{const a=d;return p(),o(A,g(y(h(c)(h(r),44))),{default:l(()=>[t[2]||(t[2]=i("h3",null,"FlutterHooks: useMemoized",-1)),t[3]||(t[3]=i("p",null,[i("code",null,"useMemoized"),s("は値をキャッシュして、何度も同じ計算をすることを防ぐことができます。"),i("br"),s(" アルゴリズムをかじったことがある人は聞き覚えがあるかもしれませんが、いわゆる"),i("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},"メモ化"),s("です。"),i("br"),s(" 第一引数に関数、第二引数に一時保持するためのKeyを渡します。Keyが変われば再計算されます。"),i("br"),s(" 第二引数に"),i("code",null,"const []"),s("のようなものを渡すと2度と再計算されません。")],-1)),e(a,k({},{ranges:[]}),{default:l(()=>t[0]||(t[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-dart"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"class"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," SampleWidget"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," extends"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," HookWidget"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," SampleWidget"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"({"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"super"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"key})"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  @override")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  Widget"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," build"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"BuildContext"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," context) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," expensiveCalculation "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useMemoized"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(() "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," expensiveCalculation"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," const"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," [])"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(expensiveCalculation"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"toString"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"())"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1)])),_:1},16),t[4]||(t[4]=i("p",null,[s("使用している画面そのものが破棄されるとメモ化された値も破棄されるので、アプリで"),i("span",{style:{"text-decoration-line":"underline","text-decoration-color":"red"}},"永続化されるわけではない"),s("ことに注意してください。")],-1)),t[5]||(t[5]=i("p",null,[i("code",null,"FromState"),s("の"),i("code",null,"GlobalKey"),s("を作成するなどにも使用されており、汎用性は高いです。")],-1)),e(a,k({},{ranges:[]}),{default:l(()=>t[1]||(t[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-dart"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," formKey "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useMemoized"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"GlobalKey"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"FormState"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," const"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," [])"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")])])],-1)])),_:1},16)]),_:1},16)}}},W=E;export{W as default};
