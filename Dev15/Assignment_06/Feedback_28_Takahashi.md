# よかった点
> 集計できるように、変更を加えているうちにすさまじいエラーの数々に襲われて、時間内でなおしきれなかったので、泣く泣く最初の基本の形に戻しました。一旦提出して、引き続き取り組みます。
- お疲れ様でした。課題の取り組みはなかなか大変そうでしたね。phpに入った途端、文法だけではなくて、ファイルの置き場所なり、デバッグの方法など全て変わりましたので、慣れるのに少し時間かかるかもしれませんね。とりあえず授業のサンプルコードに少し変化を加えても、基礎の勉強にはなると思いますので、諦めずに頑張って下さい！

# さらによくするために
- コードの中でコメントアウトされている部分に文法ミスをしているところがありましたが、エラーってあっち起因ではないですかね？例えば、`read.php`の24~26行に
```php
if($error == 0) {
    echo '<dl>';
    echo '<dt>性別：</dt><dd>' . $gendername . '</dd>';  
```
このif文の中に閉じカッコがなかったです。こういう初歩時なミスを防ぐために、コーディングする時にいい習慣をつけた方がいいと思います。例えば、インデックスを一行書いたら必ず揃えるとか、まあやり方いくらでもあると思います。そのほかにも、vscodeの拡張機能を使えば、初歩的なミスを減らすことも可能です！例えば、ペアになるカッコに同じ色にする[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)や自動整形ツールの[prettier](https://prettier.io/)などがあります。タイピングすることは全てではないので、是非ツールをいろいろ活用して見て下さい！


# その他のアドバイス
- エラー多発しているとお伺いしましたので、一応エラー起きた時の対処法をアドバイスすると、
  1. エラーメッセージちゃんと読み取る。これで大体の問題が解決されるはずです。
  2. エラーメッセージがわからない場合はぐぐる。見たことのないケースやレアケース、もしくは環境起因のエラーが起きるかもしれません。こういう時は調べる力が重要になってきます。
  3. 上記2つともできなかったら、人に聞く。fbグループに質問投げるのは恥ずかしかったら、個人チャットでチューターに聞くことももちろん大丈夫ですので、人のリソースを活用することも大事です。

  正直デバッグは経験によって、一発で解決できる人もいれば、何時間探してもわからない人もいます。なので、時間を無駄にしないように、エラーが起きて例えば一時間経っても解決できなかったら、質問を投げることにした方がいいともいます。次も頑張って課題をこなして下さい！