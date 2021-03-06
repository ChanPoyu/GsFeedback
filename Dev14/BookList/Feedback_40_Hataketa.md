# 良かった点
- なんとバーコードをスキャンできるとは、すばらしいです。
- サードパーティのAPIをうまく活用としているところは本当にすごいです。山崎先生が言った通りに、今のアプリケーションの開発では全てゼロからは無理です。レゴのように、いろんなパーツを揃えて組み合わせて欲しいものを作ります。
- PHPは色々と便利ですね。サーバーサイドアプリケーションの構築とAPIの活用ができれば、だいたい70％のサービスが作れちゃいます。どんどんコードを書きましょう！
- コードが綺麗です。バーコードAPIの部分はオブジェクト指向の書き方も活用されましたので、読みやすいです。

# 気になった点
- ファイルの階層構造はあってなかったですね。`/gs_code/bercodereader/<filename>`という相対パスでいろんファイルを指定していましたが、それは読み込まれませんでした。例えば、`index.php`と`scan.php`は同じ階層においてますので、`index.php`で`scan.php`を指定する際に、`./scan.php`と書くべきです。提出の時にファイルの階層構造が乱されたのか、もしくはそもそも絶対パスで指定しようとしているのか、少し気になりました。絶対パスと相対パスについては[こちらの記事](https://techacademy.jp/magazine/5801)を参考にしてください。
- デザイン面の話ですが、バーコードが読み込まれた後、何かしらの表示もしくはリダイレクトをしないとそれが正しく読み込まれているかどうか、ユーザーがわかりません。コンソールを見るといろんなログがありましたが、正直一見何がなんなのか、わかりませんでした。読み込まれた後、パッとみて意味がわかる何かを表示するというロジックを組み込まないと、デバッグも難しくなります。ここをブラッシュアップできれば、もっと完成度が高かったと思います！
- 課題の中で、データベースらしくファイルがなかったですね。今度からデータベースをエクスポートしていただければ、うまくデータベースと連携した機能が動作するかどうか確認できますので、よろしくお願いいたします。[phpmyadmin](https://www.dbonline.jp/phpmyadmin/export-import/index1.html)にデーターベースをエクスポートする機能がありますので、使ってみってください。

# その他
- 高精度の画像認識はなかなか難しいですね。タダで提供しているライブラリだったら、パラメータチューニングしない限り、おそらく非常に使いづらいでしょう。エンタープライズ向けの画像認識サービスは高いです。。。個人では扱いづらいと思います。そしてモデルそれぞれ得意不得意がありますので、適したモデルを適応しないととても扱いづらいと思います。`QuaggaJS`はどんな画像認識API使っているのか気になりますね。

- ちなみに、今後も画像認識を活用したサービスを作りたい場合は、いくつか使えるサービスの選択肢があります。[こちらのコレクション](https://rapidapi.com/collection/top-image-recognition-apis)の中から選んでいじってみていただければと思います。
