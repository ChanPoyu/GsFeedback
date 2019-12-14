# よかった点
> email認証を最初に入れた点。
- Firebaseの認証認可機能を導入してみたのはすごくいいですね。僕も最近業務で自前の認証認可の仕組みを作っていますので、Firebaseのありがたさをつくづく感じました。

> 0回目から3回目までで学んだことを全部使ってみました。
>それと右側のペインにリストを登録（ローカルストレージを利用）して、その登録されたリストをダブルクリックするとチャットテキス>トとして利用できるようにしました。また、登録したリストはクリックして1行ずつ消せるようになっています（がバグあり）。
- これは本当に素晴らしいですね。テンプレートとして、いろんな文章を保存しとくという発想は本当に面白いですね！そして実装できたのも本当に凄いと思います。プログラミングは割と練習が大事ですね。学んだことを生かし続けられれば、今後のプロダクト開発にも絶対役に立つと思います。

# さらによくするために
> ローカルストレージとFirebaseの共存を目指したのですが、どうもFirebaseからローカルストレージに何かを送り込んでくるようで、ローカルストレージを思ったようにコントロールすることが出来ませんでした。JavaScriptでFirebaseが書き込んでくるローカルストレージの内容を消す処理を色々なところに入れ込んでいますが、時々ローカルストレージの順番が勝手にかわったりして、インデックスで狙い打ったつもりが違うローカルストレージのデータを持ってきてしまう（消してしまう）など思ったようにならない事象が多数発生してしまうのを直すことが出来ませんでした・・・

- なるほどです。ちょっと苦労したようですね。実は上記のことはローカルストレージを少し工夫したら、相当楽になります。下記のように実装してみれば、他のlocalStorageの値に影響されなくなります。

```js
// 決められたlocalStorageのkey
const chatAppKey = "chat-app-local-storage";

// 現在localStorageにあるkeyを全て取得
let existKeyList = [];
for (let i = 0; i < localStorage.length; i ++>){
  existKeyList.push(localStorage.key(i));
}

// 決められたキーは現在localStorageにあるかどうかを判断
// ない場合は初期化する
let keyListIncludesChatAppKey = existKeyList.includes(chatAppKey);
if(!keyListIncludesChatAppKey){
  localStorage.setItem(chatAppKey, "{}");
}

// localStorageから既存のテンプレートを取得して、objectにパースする
let textTemplates = JSON.parse(localStorage.getItem(chatAppKey));

// templateのobjectでfor loop回して,listに表示させる
for(let k in textTemplates){
  let html = `<tr><th>${k}</th><td>${textTemplates[k]}</td></tr>`;
  $("#list").append(html);
}
```

- 細かいですが、インデントの揃え方は少しおかしかったです。具体的にはfirebaseConfigがコードの中で下記のようになりましたが、
```js
var firebaseConfig = {
apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};
```
実際はこのように書いた方が習慣的にかかれています。
```js
var firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};
```

# その他のアドバイス
- 多分自分以外もチューターの皆さんがインデントが揃えていないとうるさく言っています。ではなぜ、インデントを揃えることは大事なのでしょうか？単純にコードが読みやすくなるからです。コードが読みやすくなったら、チュータのためだけではなくて、ご自身のためにもなります。例えば後ほどコードを振り返って見たい、既存のコードをコピーして使用したいとなったときに、閉じかっこの位置がよくわからなかったり、もしくはどっかで文法エラーが起きたりする可能性は多々あります。なので、なるべき今後でも作業しやすくするために、最初から綺麗に書けば、苦労せずに作業できるようになります。この辺は「コードの可読性」というキーワードで調べていただければわかると思います。

