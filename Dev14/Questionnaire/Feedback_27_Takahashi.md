# 良かった点
- 素晴らしいアプリケーションです。PHPでheaderとfooterはこんな風にコンポーネント化できるのは初めて知りました（すみません、全然PHP書いてないです）。
- 機能ごとにファイルを分けましたね。非常に綺麗で読みやすいコードです。さすがです。
- Bootstrapなども活用できて、見た目を楽々で整えることができましたね。

# 気になった点
- index.phpがなかったですね。今回の授業はMAMPというサーバー管理ツールでApacheサーバーを立ち上げてますので、デフォルトの設定として、最初は`index.html`を開こうとし、なければ`index.php`を開く設定になっています。この二つのファイルがなければ、自分でパス指定しない限り何も表示されないです。なので、必ずつけるようにするか、デフォルトのパスを変えるかでこの問題を解決してください。

# その他のアドバイス
>・jsは出し分けは動いたものの、その他思ったように全く動かず、「php javascript mamp」で動かない関連のワードをいくつか見たものの、理由わからず、実装を断念しました（具体的には最初の登録フォームのボタンをdisabledにして、金額にchangeイベントで発火するリスナーを入れて＋金額ならdisabledを外すみたいなものを作ろうとしましたがconsolelogさえ実行されず）

個人的な経験に基づいたアドバイスですが、Javascriptは見た目をダイナミックにするために使い、PHPとかのサーバーサイドはデータベースとのやり取りや、ビジネスロジックの実行などを処理するために使います。なので、PHPでとってきたデータをJavascriptにわたし、それを画面に表示することができます。具体的な例はPHP二回めの講義スライドにありますので、ご参考ください。

- 話したことあるかどうか忘れましたが、PHPに入って初めてサーバーの概念を習いますので、まだ少し混乱しているかもしれませんが、やはり、アプリケーションを開発する上で一番重要なのは「構造に対する理解」だと思います。コードがどれ程うまくかけても、それを組み合わせる知識がなければ、いいアプリケーションは作れません。LEGOのようなもんですよね。最初はオーソドックスな組み合わせを真似して作って、ある程度真髄をわかってきたあと初めて色んなアプリを作ることができる。アプリケーションを構築する上で最も基礎的な考え方については[こちらの記事](https://qiita.com/tamago3keran/items/f470593926458b7ef52a)を参考にしてください！





