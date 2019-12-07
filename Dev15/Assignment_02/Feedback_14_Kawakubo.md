# よかった点
- お疲れ様です。チューターの詹です。これからもよろしくお願いいたします。

- これは。。大作ですね！自分の青春時代を思い出します！

> localstrageでガチャで獲得した選手を記録できるようにした。対戦画面、ガチャ画面、キャラ画面で音声を流れるようにした。
- 私も最初javascriptを習うときにRPGゲームを作ってみましたw。画面遷移する際に、変数の中身がリフレッシュされて困って調べたら、localStorageで簡易的なデータベースとして使えることがわかりました。まさにこの使い方です。

# さらによくするために
- 今回htmlコードはかなり長くなりましたね。実はこういう場合はhtmlコードはファイルで分けた方がいいと思います。後ほどの振り返りやデバッグの効率が格段に上がります。
- [DS_STORE](https://ogohnohito.hatenablog.jp/entry/20090531/p1)というファイルが入ってました。これはアプリケーションと関係ないファイルですので、ソースコードを公開するもしくは誰かに渡す際に、消しといた方がいいと思います。

# その他のアドバイス
- 今回はかなりの大作ですので、ソースコードが長くなっていましたね。こういう状態なると、おそらく後ほど機能の修正したい、もしくは振り返りをしたいときに、すごく苦痛になると思います。ソースコードをきれいに管理するためには、「分けること」を大事にした方がいいです。例えば、機能別で分けて（ゲームロジック、画面変換で分ける）、もしくは固定するデータの切り出し（今回の場合は、キャラクターネームやチームチームなどいろいろあります）、こうした方が、絶対管理しやすくなります。是非参考にしてみてください！