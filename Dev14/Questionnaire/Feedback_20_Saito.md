# 良かった点
- 良いチャレンジされましたね。javascriptの役割はダイナミックな見た目を作ることです。そしてPHPは裏側のビジネスロジック、データーベースの操作をする役割を務めます。いわゆるフロントエンドとバックエンドの分け方ですね。

# 気になった点
- `XMLHttpRequest()`を使ったcsv読み込み操作がありましたが、うまく動作できませんでしたね。上記で言った通りに、データの読み込みや書き込みなどはフロントではなくて、バックエンドに任せるべきです。もしバックエンドはJavascript(Node.js)にした場合はソースコードをフロントで読み込むという方法ではなく、APIの形式でサービスを提供すべきです。最初フロントエンドとバックエンドの役割がまだはっきり理解していないときに起こしやすいミスですね。

# その他のアドバイス
- phpの良さは、サーバーでデータをさばいた後、処理した結果をそのままhtmlの形式でクライアントサイド返します。なので、見た目を生成するのに、javascriptより早くできて、そして環境にも依存しないです。しかし、phpで見た目の変化が複雑なwebページを作るのには向いていないです。PHPはどちらかというと裏側の処理をするために特化した言語です。簡単なまとめですが、[こちらの記事](https://www.sejuku.net/blog/4064)を読んでみてください。

- 個人的な感想ですが、PHPはオーソドックスなWEBサービスを作るのに長けていますが、言語自体は進化していないです。最近のWEBアプリケーション開発は[SPA(Single Page Application)](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)というのが主流になりつつあります。フロントエンドのコードと、バックエンドのコードを完全分離し、保守性と拡張性の高いアプリケーションを構築することができます。そして、コーディングはフロントエンドがメインですので、dynamicに見た目を作るのに向いています。