# よかった点
> 最終的に自分がつくりたいものに必須なMap機能があったので、これを機にまず最終的な完成系（見た目）をつくってみました
- 早い段階でご自身が作りたいものに結び付けられるのはよかったですね。もっとブラッシュアップしていきましょう！

> とりあえず、今回はMapにピンを打って、そこをクリックするとポップアップが出て、そこにある「チラシを見る」ボタンをクリックすると、チラシがモーダルで表示されること。及び左上の住所検索で表示されるMapの位置を変えられるようにしたかったです。とはいえ結局モーダルがうまく実装できませんでした。。そしてモーダルに時間を取られ、結局（おそらく結構簡単そうな）もう一つの自分の課題だった住所検索機能の作りこみもできていません。完成系の外枠イメージは今回作成できたので、今後はこの中に機能（サービス）を入れ込んでいって、世界中の紙媒体（チラシ）を検索できるサイトをつくっていこうと思います！
- なるほどですね。開発あるあるですが、本質じゃない部分に時間取られることは割と多いです。今回は課題なので、周りに影響は出ないですが、ステークホルダーの多いサービスを遅延するわけには行かないですね。学習の段階で失敗しまくって、それが必ずプロダクト開発のためになると思います。頑張って下さい！

# さらによくするために
- `<a><\a>` タグの中にまた `<input></input>`を入れるのは一般的ですかね？両方バッティングしていてうまく動作していない挙動しているような気がします。`<a></a>`タグの一般的な使い方として、別のページに飛ばすときに使われています。なので、同じページにとどまる場合は`<input type="button"></input>`で十分だと思います。というわけで、`google.maps.InfoWindow()`のコンテントを下記のように変更してみて下さい！
```js
infoWindow[i] = new google.maps.InfoWindow({
  content: `
  <div class="content">
    <span>${markerData[i]['name']}</span>
    <input type="button" value="チラシを見る" class="js-modal-open" onClick="handleFunc()"/>
  </div>
  <div class="modal js-modal">
    <div class="modal__bg js-modal-close"></div>
    <div class="modal__content">
      <p>
        ここにモーダルウィンドウで表示したいコンテンツを入れます。モーダルウィンドウを閉じる場合は下の「閉じる」をクリックするか、背景の黒い部分をクリックしても閉じることができます。
      </p>
      <span class="js-modal-close" href="">閉じる</span>
    </div>
  </div>
  `
});
```
  ちょっとスタイリングが崩れるかもしれませんが、試してみて下さい！そして、こういうhtmlのテンプレを作るときに、バッククォーテーションを使った方が読みやすくなります。

- `google.maps.infoWindow`の中身はうまくクリックイベントとバインディングできないようですね。こっちもいろいろ試してみましたが、inputTagのなかにonClickの属性を追加するといけました。試してみて下さい！下記はサンプルです。

```js
infoWindow[i] = new google.maps.InfoWindow({
  content: `
  <div class="content">
    <input type="button" onClick="handleFunc()"/>
  </div>
  `
});

const handleFunc = function() {
  console.log("this is a handle function");
}
```

# その他のアドバイス
- 普通にインデントが気になります。例えば、オブジェクトの配列の揃え方が、下記のようになっています。
```js
var markerData = [ // マーカーを立てる場所名・緯度・経度
  {
       name: '筑波山（東の筑波、西の富士）',
       lat: 36.2253757,
        lng: 140.10749250000003,
 }, {
        name: '間宮林蔵記念館',
     lat: 35.940321,
        lng: 140.03347400000007
 }, {
        name: '科学万博記念公園',
     lat: 36.0641543,
      lng: 140.07310200000006
 }, {
        name: 'JAXA筑波宇宙センター',
        lat: 36.0655824,
        lng: 140.12810650000006
 }, {
        name: 'アサヒビール茨城工場',
     lat: 35.9514811,
     lng: 139.96783040000003
 }, {
        name: 'キリンビール取手工場',
       lat: 35.905651,
     lng: 140.07357000000002
 }
];
```
  ここでパッとみて問題２つあります。
  1. 揃え方にルールはない。
  2. 揃え方が一般的ではない。
  
  正しく揃えるには下記のコードをさんこうにしてきださい。
```js
var markerData = [ 
  {
    name: '筑波山（東の筑波、西の富士）',
    lat: 36.2253757,
    lng: 140.10749250000003
  }, 
  {
    name: '間宮林蔵記念館',
    lat: 35.940321,
    lng: 140.03347400000007
  }, 
  {
    name: '科学万博記念公園',
    lat: 36.0641543,
    lng: 140.07310200000006
  }, 
  {
    name: 'JAXA筑波宇宙センター',
    lat: 36.0655824,
    lng: 140.12810650000006
  }, 
  {
    name: 'アサヒビール茨城工場',
    lat: 35.9514811,
    lng: 139.96783040000003
  }, 
  {
    name: 'キリンビール取手工場',
    lat: 35.905651,
    lng: 140.07357000000002
  }
];
```
  またいちいち肉眼で確認したくなければ、vscodeのフォーマッターやインデントの可視化の拡張機能入れてみていただければと思います。この辺も調査をしてみて下さい！[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)とか[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)は個人的にお勧めです！