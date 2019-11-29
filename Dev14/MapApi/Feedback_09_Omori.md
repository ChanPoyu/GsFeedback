# 良かった点
- 定期的に位置情報を取得して記録して行くというのが面白いですね。ジョギングアプリとかで使えそうですね。

# 気になった点
- インデントが揃えていないところがいくつかありました。
- 下記のコードでピンを消そうとしていましたが、うまく動作していなかったですね。
    ```js
    $("pin1").on("click",function(){
        map.pinLayerClear(pin1);
    });
    ```
    修正するためには、まずピンをさす関数を`map.pinLayer()`から`map.pin()`に置き換える必要があります。map要素はcanvasで描画しているため、ピンの近くを押すと、そのピンが消されるロジックを書けば、消すことは不可能ではないですが、やや複雑になります。Bing mapオブジェクトの中に何かしらの便利関数があるかどうか探してみるのもありです。

# その他のアドバイス
以下はご質問に対する答えはこちらになります。
- ①はすでに上記でお答えしました。不明点があればまた聞いてください！
- ②について。`map.infoboxHtml()`を活用すればできます。htmlのテンプレートをinputタグと送信ボタンを入れれば、できるはずです。例えば
    ```js
    var infoboxTemplate = `
        <div>
            <input type="text" placeholder="input text message">
            <input type="file">
            <input type="submit">
        </div>
    `;

    map.infoboxHtml(infoboxTemplate);
    ```

    そしてcssとonclickの関数を作れば完成です。
- ③pinをさすときに、そのlat、lonを配列の保持させるという方法があります。