# 良かった点
- `botUI`というライブラリを使った実装は面白いですね。これで簡単にJavaScriptでチャットボットを作ることができるのは確かに便利です。
- Firebaseにデータのやり取りの実装ができて良かったです。今後プロダクトを開発されるときに、いろんなサービスの組み合わせで開発した方が捗りますので、どんどんいろんなサービスの使い方について調べていただければと思います。

# 気になった点

下記のコードでFirebaseにデータを登録しようとしているところは確認できました！
```js
function send(){
    const D= new Date();
    const y=D.getFullYear();
    const m=D.getMonth()+1; //月はゼロから始まる
    const d=D.getDate(); 
    const ymd = y+"年"+m+"月"+d+"日";
    const ob = {
        memo:$("res.value").val(), //ここで値の取得ができない！！
        time:ymd,
    };
    newPostRef.push(ob);
};
```

できなかった理由をまとめますと、`$("res.value").val()`で値を取ろうとしているのが間違っています。`res.value`だけでメッサー寺が撮れるはずです。もう一つ気になったところは、関数としてFirebaseの処理をラッピングしているのはいいが、関数を実行しないと処理が行われません。上記2点をを反映したコードは

```js
function send(message){
    const D = new Date();
    const y = D.getFullYear();
    const m = D.getMonth() + 1;
    const d = D.getDate(); 
    const ymd = y + "年" + m + "月" + d + "日";
    const ob = {
        memo: message,
        time: ymd
    };
    newPostRef.push(ob);
};

send(res.value);
```
になります。また質問があれば、聞いていただければと思います！

# その他のアドバイス
- G'sの授業のペースはすごく早くて、正直初心者向けじゃないと思います。（笑）でも実現したいことがあれば、ぜひこの困難を突破してほしいというのは僕らのスタンスです。プログラミングの基礎である「変数」、「関数」などの概念は一回授業を聞いただけではおそらく活用しにくいと思いますので、復習と練習は大事です！また、「ここはふわっとしているな」と思ったときに、講師またはチュー他の方々に聞いていただければ嬉しいです！

- [Progate](https://prog-8.com/)というプラットフォームはプログラミングの基礎的な概念をわかりやすく説明していただけますので、お手すきの際にチェックしていただければと思います。あと、英語に抵抗がなければ[Mimo](https://getmimo.com/)というアプリ（有料）もオススメです！非常に丁寧にプログラミングの基礎的な概念を説明していただけます！