# よかった点
> ブロック崩し自体のロジックはほぼ https://developer.mozilla.org/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript  を参考にしたのですが、ここからボールをオブジェクト化 &いろいろな処理を関数化したり、音を付けたり、ライフをハートで表したりする点を工夫しました。
- やはり、canvasはゲームですね！他のコードを参考するのは全然OKです。それに加えて自分のオリジナルティの部分を追加できるのはグッドです！そして、コードを写経するのはいいですが、勉強になるために是非チェックしてもらいたいポイントについてを伝えしますと、
    1. 使ったことのない関数、文法など（公式ドキュメントも調べれればベター）
    2. 命名規則
    3. 関数などの切り出し方

    上記の三点はい

# さらによくするために
- やはりバグが残っていますね。一番気になるのは`finishgame()`の後にどんな動作もないので、alertは無限に出てきます。下記のように直せば、このバグも解消されるはずです。試してみて下さい！

# その他のアドバイス
> 全消しした時、scoreをカウントアップ+最後のブロックを消してからおめでとうメッセージを表示したかったのですが、できませんでした。。非同期処理？とかそのあたりを調べてみたのですがよくわかりませんでした。
- 非同期処理とは、（非同期の）処理がまだ終わらないうちに、他の処理の平行を許すというwebアプリケーションをスムーズにするための書き方です。非同期のより時間さを解消するために、promiseオブジェクトが利用されています。promiseを扱う文法にはcallback関数は代表的で、もっとモダン的文法だと、`method(arg).then().cath();`、`async/await`などがあります。上記の話は調べられている時すでにお分かりだと思いますが、今回の問題はどこにあるでしょうか？
ゲームロジックの中にかなり重要な概念の一つはAnimationフレームという概念です。つまりアプリケーションのステータスを使用して画面を更新する頻度のことです。
コードを見た感じだと、アニメーションフレームは`requestAnimationFrame(draw)`という関数で実現されています。`draw()`という関数は画面描画をするメイン関数なので、`draw()`のなかに`requestAnimationFrame(draw)`を入れると、これは一つのループになります。`draw()`がさらに`draw()`を呼びますので、これで毎回ゲームのステータスを判断して、相応な描画を行います。じゃあ問題になっている勝利のメッセージはなぜ出ないのか、それは`requestAnimationFrame(draw)`が呼ばれた後に`if()`文で判断しているからです。
Before
```js
requestAnimationFrame(draw);
if (score == brickRowCount * brickColumnCount) {
    finishGame('You Win, Congratulations!!');
};
```
After
```js
if (score == brickRowCount * brickColumnCount) {
    finishGame('You Win, Congratulations!!');
};
requestAnimationFrame(draw);
```
因みに、おっしゃった非同期関数は今回はcallback関数でハンドリングしています。`requestAnimationFrame`のドキュメントを調べると、引数はcallback関数になっています。つまり、`requestAnimationFrame`自体は非同期関数になっていて、そのcallback関数は`draw()`になります。

