# 良かった点
- localStorageにデータを保存するロジックができてよかったと思います。
- jQueryでlist要素をlist型ぽく扱えるコードはすごくいいですね。こっちも勉強になりました！
- インデントなどを意識しながらコードを書いているのはすごくいい習慣です。引き続きき読みやすいコードを書いていきましょう。

# 気になった点
- プロダクト開発する場合はlocalStorageにある全ての要素をアクセスすることはしない方がいいと思います。なぜなら、localStorageはブラウザにデータを保持する機能なので、他のサイトも使ったりします。このサイトだけのデータを保持させたい場合は、何かしらの方法でユニークなキーを生成し、データを構造体にし、また`JSON.stringify()`を通せば、いろんなデータを保持することができます。

# その他のアドバイス
- localStorageはブラウザにデータをkey-valueペアで保存する昨日ですが、他にもsessionStorageという機能があったりします。[Sessionの概念](https://qiita.com/Rudiments/items/dc151adb5269177c7330)を知っておきますと、WEB開発に役立ちます！
- プログラミングを慣れるまでは少し労力がかかりますね。諦めずに続けていけば上手くなると思います。頑張ってください！