# よかった点
- 課題提出お疲れ様です。食料品管理のアプリケーションは非常に面白い発想です！機能が上手くいけなかったのは少し残念でしたが、もうちょっと頑張ればできますので、次も自信を持って取り組んでください！


# 気になった点
- 下記のコードは動かなかったですね。原因はspan要素には`.val()`というメソッドでは中身が取れないからです。これを解決すれば、今回のアプリは動くと思います。span要素の中身は`.text()`でとれるはずです。

- インデントが揃っていないところはたくさんありましたね。jsの場合はインデント揃えなくてもプログラムは動作しますが（例えば、pythonは動かない）、コードは読みにくいという理由でエンジニアとしての評価が低くなります。プロダクト開発の観点でも、読みにくいコードをかくと、後ほど保守が大変なことになります。入門の段階で綺麗にかく習慣をつけましょう。

- コードの中で、下記のような書き方は何回か現れました。この記述方法はClosureというデザインパターンで、無断にデータやオブジェクトをアクセスされないように、セキュリティ性を高める方法です。これは何回も実行する必要はないと思います。
```javascript
(function() {/* your code */}());
```
- 課題のコードを読んだところ、同じようなパターは何回か現れたことに気づきました。同じパターンの場合は関数を使って共通化しておけば、コードは非常にすっきするようになります。

- **レスポンスデザイン**をhtmlとcssベタ書きで作ろうとすれば、非常に手間がかかります。`<meta name="viewport" content="width=device-width">`だけでは変化しないと思います（笑）。この辺のやり方も調査してみてください！

# その他のアドバイス
- [読みやすいコード](https://qiita.com/nekoneko-wanwan/items/ace9464da1b35c7ec4d6)の例について
- [Closureについて](https://qiita.com/takeharu/items/4975031faf6f7baf077a)