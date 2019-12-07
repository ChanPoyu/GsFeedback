# 良かった点
- レスポンシブはよくできています。
- iframeの使い方ご自身で調べられたのでしょうか？サザエさんのエンディングを入れたのは非常にいいアイディアだと思います。授業だけでは紹介しきれないhtmlとcssの書き方まだまだたくさんあると思います。興味があれば、色々使ってみるのは面白いかもしれませんね。

# 気になった点
- インデントは揃ってないです。コードの可読性について気をつけましょう。
- 使われてないcssファイルがcssフォルダーにあります。そして使ってるcssファイルとイメージファイルがhtmlと同じ階層にあるのは少し気になります。ファイルの置き方は今後作業量が多くなることにつれて、扱いやすさがかなり変わってきます。しっかり、意味のある管理の仕方にしましょう。

# その他のアドバイス
- `sample.css`をhtmlと同じ階層においたのは読み込めないからでしょうか。javascriptは[相対パス](https://techacademy.jp/magazine/5801)を指定できるので、下記のように指定すれば読み込めます。
```html
<link rel="stylesheet" href="./css/sample.css">
```