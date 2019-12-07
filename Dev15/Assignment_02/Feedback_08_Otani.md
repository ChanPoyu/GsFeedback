# よかった点
- お疲れ様です。チューターの詹です。これからもよろしくお願いいたします。

>localStorageのvalueに入力した全ての値を押し込みましたが、その時に「,」で区切って保存して後から配列としてそのままテーブルの各セルに流し込むことができるようにしました。行番号を連続する番号で取りましたが、新規で入力した時と保存したのを読み込んだ時で番号にズレができるのでそれを解消するのに四苦八苦しました。
- こちらの実装ができてなかなか凄かったですね。localStorageに保存したい情報を固定の文字列（この場合はseperatorと言います）を挟んで保存すれば、取り出すときにsplitして配列に変換するのは、まさに標準的なやり方です！これから、javascriptのなかのobjectなどを学習しますので、これでもっと色んな情報を規則正しく扱うことができますので、ご興味があれば是非調べてみてください。

# さらによくするために
- 変数の宣言に`var`や`let`が抜けてました。書く習慣をつけましょう。
- 文字列のなかに変数の与を挟む書き方について、
```js
"文字" + 変数 + "文字"
```
という書き方は間違いではないですが、もっとスッキリした書き方あります。
```js 
`文字${変数}文字`
```
これは`+`が全てなくなって、わかりやすくなると思います。是非使ってみてください！

# その他のアドバイス
> 変数を宣言する場所、方法がまだ分からず苦戦しました。

お疲れ様でした。慣れない時は本当に苦戦しますよね。私も最近新しい言語書き始めて、なかなか慣れなくて、苦戦することは多いです。でも最後解決できたら本当に気持ちいいですね！余談はさておき、変数の宣言について、順序と影響範囲は最も重要なポイントです。変数が未定義のまま使おうとすれば、何を参照すればいいかわからないので変数を使うことができません。なので、必ず使用する前に、宣言しなければいけません。そして、基本的には`{}`の中で宣言される変数は、その影響範囲は`{}`内だけです。詳しく知りたいなら、[javascriptの変数スコープ](https://www.sejuku.net/blog/23264)について調べてみてください。

> １行削除の時localStorageの値は消せましたが`<table>`に表示した方が消せませんでした。localStorageに保存したものを読み込んだ時に順番がバラバラなのを整列できませんでした。１行変更の機能を作ることができませんでした。

そうですね。コードの中身を確認したところ、下記のコードでバグがありました。
```js
$("#list tr:nth-child(a)").remove();
```

このコードの問題として、selectorの書き方にあります。aというのは上記の書き方であれば、aは`"a"`という文字列として認識されますので、消したい行番号としては認識されません。書き方としては下記のようにすればいいでしょう。
```js
$("#list tr:nth-child(" + a + ")").remove();
```
もしくは、下記のように書けばもっと見やすくなります。

```js
$(`#list tr:nth-child(${a})`).remove();
```