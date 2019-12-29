# よかった点
> ドラック&ドロップを出来るようになりたかったので、ネットの落ちている情報をベースに書いてみました。正月なので福笑いっぽいものが作りたかったのですが、想像以上に気持ち悪い出来になってしまったので、反省してます笑　自分で描画したものをドラッグ&ドロップ出来るようにして、アンパンマンとか作れるようになりたいです。
- 素晴らしい実装でした！お正月の雰囲気満点ですね！

> ソースやwidth,heightを先に書いておいて、その情報を使ってimgオブジェクトを作る事で、パーツの追加をし易くしました。
- Imageのオブジェクトを直接生成せずに、変数でその画像情報を持つのはいい書き方ですね。でも命名をもっと分かりやすい命名にした方がいいと思います。`array`という命名だと、なんの配列がわからないので、わかりやすく`imageConfigs`とか英語の複数形にした方が可読性がもっと上がります！

# さらによくするために
- ちょっとだけインデント揃え方がよくないところがありました。具体的には下記のコードです。
```js
for (let i = 1; i <= images.length - 1; i++) { //顔を固定したいので対象外にする
// 当たり判定（ドラッグした位置が画像の範囲内に収まっているか）
if (
    posX >= images[i].posX &&
    posX <= (images[i].posX + images[i].width) &&
    posY >= images[i].posY &&
    posY <= (images[i].posY + images[i].height)
) {
  dragTarget = i;
  isDragging = true;
  break;
}
}
```
forループの中で、一個インデントを下げるべきです。そして複数の条件で横長になっているので、改行して書くのはいいですが、最初の条件の前にも改行した方が良いかと。ちょっと一般的の揃え方に直すと下記のようになります。
```js
for (let i = 1; i <= images.length - 1; i++) { 
    //顔を固定したいので対象外にする
    // 当たり判定（ドラッグした位置が画像の範囲内に収まっているか）
    if (
        posX >= images[i].posX &&
        posX <= (images[i].posX + images[i].width) &&
        posY >= images[i].posY &&
        posY <= (images[i].posY + images[i].height)
    ) {
        dragTarget = i;
        isDragging = true;
        break;
    }
}
```

- 2箇所forループを無駄に回しているようなところありました。
```js
for (let i = 1; i <= images.length - 1; i++) { //顔を固定したいので対象外にする
    // 当たり判定（ドラッグした位置が画像の範囲内に収まっているか）
    if (
        posX >= images[i].posX &&
        posX <= (images[i].posX + images[i].width) &&
        posY >= images[i].posY &&
        posY <= (images[i].posY + images[i].height)
    ) {
        dragTarget = i;
        isDragging = true;
        break;
    }
}
```
上記のコードは全ての画像を回して、位置に当てはまる物をターゲットとして、インデックスを保存というロジックですが、実は`array.find()`をうまく活用すれば、ネストの浅いスッキリした各型にできます。
```js
dragTarget = images.find(img => 
    !img.src.includes("face") &&
    img.posX <= posX && posX <= img.posX + img.width  &&
    img.posY <= posY && posY <= img.posY + img.height
);
isDragging = true;
```
簡単にいうとcallback関数の中身が、trueになる初めての要素を返すメソッドです。気になれば、[ドキュメント](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)等を読んでいただければと思います。そして、dragTargetにインデックスではなく、その要素自体を格納することによって、`[i]`を書かなくても操作できます。

2箇所目のちょっと微妙なforループは下記になります。
```js
for (let i in images) {
    if (i == dragTarget) {
        // マウスが画像の中央に来るようにする
        x = posX - images[i].width / 2;
        y = posY - images[i].height / 2;

        // ドラッグが終了した時の情報を記憶
        images[i].posX = x;
        images[i].posY = y;
    } else {
        x = images[i].posX;
        y = images[i].posY;
    }
    w = images[i].width;
    h = images[i].height;

    // 画像を描画
    context.drawImage(images[i], x, y, w, h);
}
```
こちらはforeachと一箇所目のdragTargetと合わせて下記のようにかけます。
```js
images.forEach(img => { 
    if (img != dragTarget){ 
        context.drawImage(img, img.posX, img.posY, img.width, img.height);
    } 
});

let x = posX - dragTarget.width / 2;
let y = posY - dragTarget.height / 2;
let w = dragTarget.width;
let h = dragTarget.height;
dragTarget.posX = x;
dragTarget.posY = y;
context.drawImage(dragTarget, x, y, w, h);
```
いかがでしょうか、ネストはかなり浅くなったと思います。これでコードの可読性が上がると思いますので、是非参考にしてみて下さい！

# その他のアドバイス
> mousedown、mouseupとかのイベントでフラグを切り分けたりする事が難しいのと、全体的にロジックを考えるのが難しかったです。コーディングに入る前のとっかかり、というかどこから手を付けたら良いか、まだ慣れてない感じです。
- んん、なるほどです。つまりやりたいことがありますが、それをコードに落とし込むことは難しく感じるというところですね。正直、プロのエンジニアでも、これが簡単にできるわけでもないです。実装することはかなり、経験と問題解決能力が問われます。色んな実装コードを見て、ようやく全体像が掴めるようになります。でも、最初の一歩はどのようにすればいいかと言えば、一個だけアドバイスあります。それはやりたいことを分解することです。例えば、今回の例だと、福笑いを作りたいです。では、福笑いの中に、どんな要素があって、それぞれの要素はどのような動作をするのかと、考えれば、少しはスムーズにコードに落とし込むことができるのではないかと思います。でも、やはり色なソースコードを参考して、自分も実装してみて、だんだん実装方法がわかってくると思います！諦めずに頑張って下さい！
