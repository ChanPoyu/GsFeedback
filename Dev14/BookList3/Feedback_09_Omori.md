# 良かった点
---
> 先週は動かなかったのですが、今週は動くようになりました。
- 動いてよかったですね。株情報を登録実装とユーザーログインの実装両方できましたので、これで最低限な課題をクリアしたと思います！

# 気になった点
---
- 画面の間の連結が作ってないです！ソースコードが見れますので、動作確認はできますが、アプリケーションとしての完成度はちょっと低かったです。具体的な例として、`login.php`にアクセスすると、ログインのページが表示されますが、そもそもアカウントを持ってないので、ログインしようがないです。なので、`アカウントがお持ちでない場合はこちら`的なリンクやボタンがあれば親切です（コード一行だけです）。同様に、`index.php`に他のページに飛べるリンクをつけていただければ、さらに完成度が高くなります。

# その他
---
- 先週のフィードバックにもあったように、日付のinputタグをdate型で設定すれば、日付を選択できるようになりますので、キーボードで入力する手間が減ります。
- セッションやクッキーは非常に実用的なものなので、ここも今後活用していただければと思います！
- ユーザーを区別したり、ログインを実装したりする機能をさらに一歩を踏み込むために、認証認可について調べてみていただければと思います。認証というのは、本人であるかどうかを確認するプロセスです。現実世界の場合は、銀行に身分証明証を提示するなどがこのプロセスに当てはまります。WEBアプリケーションの場合はidとpasswordを認証サーバーに提示して身分認証を行います。それに対して、認可というのはその権利がある証明です。現実世界の場合は、展示会を一時退場の時に、手の甲に押しているすスタンプなどが認可になります。WEBサービスの場合は、cookiesやsession idなどがよく使われています。この概念は非常に実用的ですので、覚えておくと役にたつと思います。さらに詳しくは[この記事](https://dev.classmethod.jp/security/authentication-and-authorization/)を参考にしてください！


