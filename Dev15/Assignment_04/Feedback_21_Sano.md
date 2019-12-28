# よかった点
> どんどんついていけなくなってる気がしますが、自分なりに楽しく学べている気がします。
- ご提出お疲れ様でした。プログラミングの初心者だとついていくのは大変でしょう。年末年始にお時間があれば、授業のサンプルコードを復習するなり、もしくは小規模のプリジェクトを作ってみたりするのは良さそうですね。

# さらによくするために
- canvasの良さはcssで作りにくいアニメーションやデザインを実現するための便利なツールです。後簡単なブラウザゲームとかも作れます。ご興味があれば是非canvasを活用した実装例を調べてみて下さい！

- インデントを揃えた方がいいと思います。下記のコードを
```js
function sample() {

var canvas = document.getElementById('sample1');
if (canvas.getContext) {

var context = canvas.getContext('2d');

context.fillRect(20,40,100,100);


context.strokeStyle = 'rgb(00,00,255)'; 
context.fillStyle = 'rgb(255,00,00)'; 


context.strokeRect(200,30,100,50);


context.arc(150,75,60,Math.PI*1,Math.PI*2,true);
context.fill();

}
}
```
このように揃えた方が一般的です。（可読性は非常に大事です！）
```js
function sample() {
    var canvas = document.getElementById('sample1');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.fillRect(20,40,100,100);
        context.strokeStyle = 'rgb(00,00,255)'; 
        context.fillStyle = 'rgb(255,00,00)'; 
        context.strokeRect(200,30,100,50);
        context.arc(150,75,60,Math.PI*1,Math.PI*2,true);
        context.fill();
    }
}
```

# その他のアドバイス
- vscodeをご利用されているなら、インデントを揃えるツールはいくつかあります。例えば、[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)というのが人気があります。 後カッコを抜けたりすることで、文法エラーを起こすことは時々あるので、[Bracket Pait Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)という拡張機能を入れれば、かっこがペアで色分けされますので、見やすくなります！
