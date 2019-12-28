# よかった点
> 画像挿入機能追加、フィルター機能追加
- はい、上記の機能の実装を確認できました！ここまで実装できるのは素晴らしいです！もうだいぶjavascriptを慣れたようですね。

- いろんなコメントを丁寧に書かれていろのはありがたいです。程よいコメント書くことによって、コードの可読性が上がり、思考の整理にもなりますので、是非続けて下さい！

# さらによくするために
- スコープが適切かどうかを考えましょう！まず、プログラミングにおけるスコープとは、変数の影響範囲のことを指します。そして原則として、スコープを閉じることができれば、閉じた方が良いとされています。例えば、コードの中に下記の書き方がありました.
```js
function canvasDraw() {
    // canvas内の要素をクリアする
    ctx.clearRect(0, 0,can.width, can.height);

    // Canvas上に画像を表示
    var img = new Image();
    img.src = uploadImgSrc;
    img.onload = function() {
    ctx.drawImage(img, 0, 0,can.width*(can.height/can.width), can.height);
    }
}
```
もちろん提出されたコードの中では問題なく動きます。しかし、この関数を全く別の環境で再利用しようとすれば、それがバグります。なぜかというと、uploadImgSrcというのは定義されてないからです。（厳密にはctxも）じゃあ、どうすればいいかといえば、引数で渡せば大丈夫です。改良したコードは下記になります。
```js
function canvasDraw(uploadImgSrc, ctx) {
    // canvas内の要素をクリアする
    ctx.clearRect(0, 0,can.width, can.height);

    // Canvas上に画像を表示
    var img = new Image();
    img.src = uploadImgSrc;
    img.onload = function() {
    ctx.drawImage(img, 0, 0,can.width*(can.height/can.width), can.height);
    }
}
```
下記のコードであれば、ロジックだけ存在していますので、疎結合できます。原則として、疎結合できるほどいいプログラムとされます。なぜかというと、保守画しやすいからです。いろんな変数やオブジェクトに依存してしまうと、コードの修正がしにくくなりますので、今後も是非意識してコーディングしてみて下さい！
- 地味にインデント揃えてないところありますね。インデントの揃え方についていろいろ流派があると思いますが、原則的には[この記事](https://qiita.com/pipi_taro/items/21da1ccc0171df85d053)を参考にしていただければと思います。またいちいち肉眼で確認したくなければ、vscodeの拡張機能入れるのはお勧めです。この辺も調査をしてみて下さい！[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)とか[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)は個人的にお勧めです！

# その他のアドバイス
特になしです。