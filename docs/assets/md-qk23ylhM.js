import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bpa4hz7b.js";import{_ as p}from"./CodeCaption-DFFHgjya.js";import{o as A,c as g,k as h,e as i,B as s,l as a,m as y,q as B,s as D,A as t}from"./modules/vue-B94B7V6J.js";import{_ as E}from"./default-b0m56UWc.js";import{u as C,f as o}from"./slidev/context-DV-y_y6P.js";import"./modules/unplugin-icons-aI5n-4mI.js";import"./index-DfJMBkQj.js";import"./modules/shiki-BpXW-QtO.js";const u={__name:"slides.md__slidev_21",setup(c){const{$slidev:f,$nav:m,$clicksContext:l,$clicks:_,$page:v,$renderContext:$,$frontmatter:e}=C();return l.setup(),(x,k)=>{const n=p,r=d;return A(),g(E,B(D(t(o)(t(e),20))),{default:h(()=>[k[2]||(k[2]=i("h3",null,"プロバイダーの種類：FutureProvider (AsyncValueについて)",-1)),k[3]||(k[3]=i("p",null,[s("初期化して"),i("code",null,"isLoading"),s("が"),i("code",null,"true"),s("となっても前回の値は保持されています。"),i("br"),s(" これは、前回取得できていた値や発生していたエラーを表示しつつ、新しい値を取得中であることを表すためです。")],-1)),k[4]||(k[4]=i("p",null,[i("code",null,"Widget"),s("側で、受け取った"),i("code",null,"AsyncValue"),s("を先述の6状態で分岐させて書くには以下のように記述します。")],-1)),a(n,null,{default:h(()=>k[0]||(k[0]=[s("switch式による分岐の例：毎回全て書く必要はなく、適宜省略して書いてください")])),_:1}),a(r,y({},{ranges:[]}),{default:h(()=>k[1]||(k[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-dart"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"Widget"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," build"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"BuildContext"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," context"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," WidgetRef"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ref) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," asyncVal "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ref"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"watch"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(sampleProvider)"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," switch"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(asyncVal) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    AsyncData"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"String"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," isLoading"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," false"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},") "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"(value)"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    AsyncData"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"String"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," isLoading"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},") "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'has "),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$value"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},", but isLoading'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    AsyncError"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"String"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," error"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," isLoading"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," false"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},") "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$error"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    AsyncError"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"String"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," error"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," isLoading"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," hasValue"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," false"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},") "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'has "),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$error"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},", but isLoading'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    AsyncError"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"<"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"String"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},">("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," error"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," hasValue"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," :final"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," value"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," isLoading"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," true"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},") "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," Text"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'has "),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$error"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," & "),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"$value"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},", but isLoading'"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    _ "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"=>"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," const"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," CircularProgressIndicator"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // その他")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1)])),_:1},16),k[5]||(k[5]=i("div",{style:{"font-size":"0.9em",opacity:"0.8"}},[i("p",null,[s("dartのswitch式については"),i("a",{href:"https://dart.dev/language/branches",target:"_blank"},"こちら"),s("を参照してください。多少癖がある書き方なので、慣れるまで時間がかかるかもしれません。"),i("br"),i("code",null,"AsyncValue"),s("を扱う上では頻繁に使用するものなので習得できることが望ましいです。")])],-1))]),_:1},16)}}},W=u;export{W as default};
