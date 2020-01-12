# よかった点
- 今まで学んだものを組み合わせようしているところは素晴らしいですね！今回の課題のAPIの活用もかなり作り込んでいて、すごいです。

# さらによくするために
> 認証→Firebaseにデータ格納→GoogleMapAPI上にマーカーで表現（できませんでしたが）
- マーカーがうまく表現できなかった理由はおそらくgeocodeのcallback関数にあると思います。このcallback関数のなかに
```js
map = new google.maps.Map(document.getElementById("sample"), {
  center: results[0].geometry.location, // 地図の中心を指定
  zoom: 16, // 地図のズームを指定
  mapTypeId: google.maps.MapTypeId.ROADMAP
});
```
  というロジックが存在しています。このロジックはsampleという要素に、`results[0].geometry.locationmap`を中心としてマップの表示を設定するロジックになります。なので、forループで地点を回していくと、地図が毎回新しい地点を中心に、新しく表示されることになります。なので、最終的にはピンは一個しか立てられてない状態になります。このバグを取り除くために、上記のロジックをforループのそとで実行すればいけます。是非試してみて下さい！


# その他のアドバイス
> Firebaseからデータを読み取る際に、JSの配列に格納するやり方がことわかりませんでした。どのように対応するかご教示いただけると幸いです。
- そうですね。配列にデータを追加する方法は元データの状態とどのように管理したいかによりますが、この質問はオブジェクトの配列を作ることなのでしょうか？そうであれば、まず一個からの配列を宣言しといて、そして`newPostRef.on("child_added", function(data) { });`のなかでpushすればできるはずです。コードは下記のようになります。
```js
let arr = [];

newPostRef.on("child_added", function(data) {
  arr.push(data);
});
```