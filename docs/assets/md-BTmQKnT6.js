import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bpa4hz7b.js";import{_ as p}from"./CodeCaption-DFFHgjya.js";import{o as A,c as g,k as a,e as i,B as s,l as h,m as y,q as B,s as D,A as l}from"./modules/vue-B94B7V6J.js";import{_ as o}from"./default-b0m56UWc.js";import{u as E,f as C}from"./slidev/context-DV-y_y6P.js";import"./modules/unplugin-icons-aI5n-4mI.js";import"./index-DfJMBkQj.js";import"./modules/shiki-BpXW-QtO.js";const c={__name:"slides.md__slidev_17",setup(u){const{$slidev:m,$nav:f,$clicksContext:t,$clicks:_,$page:v,$renderContext:F,$frontmatter:e}=E();return t.setup(),(x,k)=>{const n=p,r=d;return A(),g(o,B(D(l(C)(l(e),16))),{default:a(()=>[k[2]||(k[2]=i("h3",null,"プロバイダーの種類：FutureProvider",-1)),k[3]||(k[3]=i("p",null,[s("次に紹介するのは"),i("code",null,"FutureProvider"),s("です。これまでのプロバイダーだけでは非同期処理を行うのが難しいです。"),i("br"),s(" この"),i("code",null,"FutureProvider"),s("は"),i("code",null,"Provider"),s("のFuture版で、"),i("br"),s(" 非同期的に値を取得するため、"),i("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[i("code",null,"AsyncValue<T>")]),s("として値を提供するプロバイダーです。")],-1)),h(n,null,{default:a(()=>k[0]||(k[0]=[s("FutureProviderの基本のサンプルコード")])),_:1}),h(r,y({},{ranges:[]}),{default:a(()=>k[1]||(k[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-dart"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," sampleProvider "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," FutureProvider"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"int"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">((ref) "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"async"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  await"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Future"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"delayed"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Duration"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(seconds"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"))"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 非同期処理を待ってから初期値を返す")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"})"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"class"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," SampleWidget"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," extends"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," ConsumerWidget"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," SampleWidget"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"({"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"super"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"key})"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  @override")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  Widget"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," build"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"BuildContext"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," context"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," WidgetRef"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ref) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," asyncVal "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ref"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"watch"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(sampleProvider)"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," switch"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," (asyncVal) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      AsyncData"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"int"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," value) "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$value"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      AsyncError"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"int"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," error) "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$error"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"      _ "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," CircularProgressIndicator"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    }"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1)])),_:1},16)]),_:1},16)}}},S=c;export{S as default};
