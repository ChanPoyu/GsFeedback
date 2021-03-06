# よかった点
- 課題提出お疲れ様でした。チューターの詹です。今後ともよろしくお願いいたします。
- コード非常にきれいで読みやすいです。ぜひ、きれいな書き方に保ってください！
- switch文、object、関数まで応用できて素晴らしいと思います！
- 全体的に程よいコメントが書かれていて、意図がしっかり伝わってきます。

# さらによくするために
> ・勝ち負けの判定をオブジェクトに持たせて `switch (obj[yourHand][rivalHand])`にしたがそれでよいのか？
> → 自分の手と相手の手で無限にif文作ると長くなりそうだったのでこうしました。他にいい案があれば知りたい
- おっしゃる通りに、コードをわかりやすく書いた文に、少し冗長になっているような気がします。ジャンケンのロジックを数行だけでもかける方法は実際存在しています。こちらの[記事](https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869)を参考にしてみてください。グー、チョキ、パーを代表する数字を持たせて、勝敗の判断は非常に規則的なので、自分と相手の数字を足し算すれば、勝敗がわかります。このロジックを実装すれば、シンプルにかけます。

ただ、実際にコーディングするときに、読みやすさ、シンプル、実行効率さなどの折衷が必要になってくると思います。例えば、上記の記事のアルゴリズムがわからない人がコードを読むと、『なんじゃこりゃ』ってなりかねません。もし、少しトリッキーな処理をするときに、ちゃんとコメントやドキュメントにロジックを解説するのが定石です。

> ・HTMLの構成、liタグの使い所などがあってるかわからない
li要素は確かに、同じような構成のものが何度も出現する可能性があれば、この要素にするのは正しいです。今回の処理は特に違和感を感じていませんので、OKです。

# その他のアドバイス
- オブジェクトの中身を見れば、`g`、`c`、`p`などの略語がありましたね。今回の課題はジャンケンなので、これはそれぞれグーチョキパーでしょうとすぐにわかりましたが、ちゃんとした名前で命名した方をオススメします。理由としてはコードの保守性と可読性が高くなるからです。実際にアプリケーション開発の時に、コードが数万行になることはよくあることです。数万行のコードの中で、全て略語で書かれていたら、それはおそらく非常にわかりにくいコードになります。そして、後ほどデバッグもしくは振り返ってみる時、なんの処理をやろうとするかわからなくなる可能性も非常に高いです。なので、コードはちゃんとパッとみて、どんな処理、そして、どんな情報を保持しているか、わかるように書いた方がオススメします。ぜひ、意識してやってみてください。


>・ポインタが`$('xxx').children('yyy').`みたいに長くなる。もっといいクラス名の付け方がありそうだけれどお手本が知りたい
これはセレクターのことでしょうか？もし、何度も使うセレクターがあれば、先に変数に入れちゃって、少しはスッキリすると思います。ただ、上記に言った通りに、コードは可読性は重要ですので、そして、コードをみた感じでは、特に長くなりすぎたところはないかと思いますので、これは全然問題ないと思います。
