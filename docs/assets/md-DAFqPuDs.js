import{o as s,c as a,k as i,e,B as t,q as c,s as d,A as n}from"./modules/vue-B94B7V6J.js";import{_ as u}from"./default-b0m56UWc.js";import{u as p,f as x}from"./slidev/context-DV-y_y6P.js";import"./index-DfJMBkQj.js";import"./modules/shiki-BpXW-QtO.js";const f={__name:"slides.md__slidev_43",setup(m){const{$slidev:_,$nav:k,$clicksContext:l,$clicks:y,$page:b,$renderContext:g,$frontmatter:r}=p();return l.setup(),($,o)=>(s(),a(u,c(d(n(x)(n(r),42))),{default:i(()=>o[0]||(o[0]=[e("h3",null,"FlutterHooksの使いどころ",-1),e("p",null,[t("わざわざHooksを使用しなくても全部プロバイダーで管理すればと思うかもしれませんが、"),e("br"),t(" Riverpodはあくまで"),e("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[e("code",null,"Widget"),t("間の共通の状態を管理するために設計されています")]),t("。"),e("br"),t(" 画面ひとつで完結してロジックも持たないような状態までプロバイダーで管理しようとすると、グローバルに定義しなければならない縛りがある以上、管理が複雑になっていきます。"),e("br"),t(" さらに、別の"),e("code",null,"Widget"),t("から状態を変更されると困るのであれば、管理がより一層厳しくなります。 "),e("span",{style:{"font-size":"0.8em",opacity:"0.8"}},[e("br"),t(" 例えば、とあるパスワード入力欄でパスワードの表示・非表示の切り替えや、"),e("code",null,"TextEditingController"),t("などのController系、アニメーションの制御など、どうやっても1画面で完結するような状態の管理はRiverpodには向いていません。"),e("br")])],-1),e("p",null,[t("もちろん、何でもかんでもHooksで記述するのも、それはそれで管理が難しくなるので控えましょう。"),e("br"),t(" どちらを積極的に使用するか（しないか）は、各プロジェクトの方針に従うようにしてください。")],-1),e("p",null,[t("また、Hooksには単純に変数の管理のために使用する"),e("code",null,"useState"),t("の他に、"),e("code",null,"useEffect"),t("や"),e("code",null,"useMemoized"),t("などが存在します。"),e("br"),t(" 全てのuse系は紹介できませんので、詳細は"),e("a",{href:"https://pub.dev/packages/flutter_hooks#existing-hooks",target:"_blank"},"FlutterHooksの公式"),t("を参照してください。")],-1),e("p",null,[t("ここでは頻繁に見かける"),e("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[e("code",null,"useState")]),t("・"),e("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[e("code",null,"useMemoized")]),t("・"),e("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[e("code",null,"useTextEditingController")]),t("・"),e("span",{style:{"text-decoration-line":"underline","text-decoration-color":"cyan"}},[e("code",null,"useEffect")]),t("を紹介していきます。")],-1)])),_:1},16))}},B=f;export{B as default};
