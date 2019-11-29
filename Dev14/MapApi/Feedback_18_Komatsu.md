# 良かった点
- 小松さん、課題提出お疲れ様でした。非常に面白そうな試みでした。テキストやオーディオ、動画などに地理情報と結びつける新しい情報プラットフォームの構築ができそうですね！

# 気になった点
- マップに「音声入力の文字」を表示するまではまだイメージできましたが、「Audio」と「Movie」を表示するというのはイマイチわかりませんでした。また具体的なイメージを教えていただきたいです。
- 使われていないコードは多すぎです。機能しないコードはコメントアウトしたり、もしくは削除した方（*個人的にはこっち派*）がいいです。理由として、コードが見やすくなるのと、バグ修正がしやすくなるからです。

# その他のアドバイス
- 音声入力の文字が表示されかった理由として、コードの順序、変数の[スコープ](https://www.sejuku.net/blog/23264)などの理由があります。音声入力のテキストを地図に表示するために、『地図のインスタンスを生成する』 → 『音声入力インスタンスを生成する』 → 『音声入力のテキストをマップに表示する』という手順で表示できます。実際下記のコードで音声入力のテキストを表示することに成功しました。
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AhLS655wibl1cjIXe1bGmBVI9i_S5Eq8xhaRh0DDE8LO5Xak5dMD4S_Ul2mR5APf' async defer></script>
        <script src="js/BmapQuery.js"></script>
        <title>ONGAKU</title>
        <style>html,body{height:100%;}body{padding:0;margin:0;}h1{padding:0;margin:0;font-size:50%;}</style>
    </head>
    <body>
    <h1 style="text-align: center">Realtime Record Tracking</h1>
    <div id="myMap" style='width:100%;height:50%;'></div>
    <div id ="result_div"></div>
    <script>
        let map;
        let lat = 47.6149;
        let lon = -122.1941;

        function GetMap() {
        map = new Bmap("#myMap");
        map.startMap(lat, lon, "birdseye", 10);
        }
        const resultDiv = document.querySelector("#result_div");
        let voice = new webkitSpeechRecognition();
        
        voice.lang ='ja-JP';//en 言語設定
        voice.interimResults = true;
        voice.continuous = true;
        voice.start();

        voice.onresult = (event) => {
        let interimTranscript = ''; //文字起こしで暫定の灰色の認識文字
        let finalTranscript = ''; //文字起こしで確定した黒の認識文字
        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
            finalTranscript += transcript;
            map.onInfobox(lat, lon, finalTranscript);
            } else {
            interimTranscript = transcript;
            }
        }
        resultDiv.innerHTML = finalTranscript + '<i style = "color:#b4b4b4;">' + interimTranscript + '</i>';
        }
    </script>
    </body>
    </html>
    ```
- Map Clearボタンについて
    > *『Map Clear』ボタンが機能しない。*

    コードの中身と動作はい一致したはずです。もし他の意図があって実現できなかったら、もう少し具体的に教えていただければ幸いです。

- 地図にAudioやMovieを表示したい時には、Infoboxを活用してください！
    > *①Audio、Movieをリアルタイムで地図にプロットして、アクセスした方が音と映像を聴けて観られるようにしたかったです。*

    こちらはストリーミングにしたいということでしょうか？それであれば、ストリーニングの作り方について調べてみたほうがいいですね。確かにvedioとaudioタグで動画や音源の再生できるはずです。まずはこちらから着手してみてください！

    - vedioタグに関する[参考記事](https://www.plusdesign.co.jp/blog/?p=8213)
    - ストリーミングの[参考記事](https://ygoto3.com/posts/streaming-technology-basics-for-frontend-engineers/)


- 情報収集に関して
    > 児玉さんが卒業制作企画講義で、Twitterで情報収集されていると仰っていました。情報収集のためにフォローされているアカウントを教えてください。よろしくお願いいたします。

    すみませんが、これは個人によってまちまちですので、なんとも言えません。
    ただし、情報収集の方向性について下記二点があると考えられます。
    1. ビジネス視点の情報収集
    「業界にどんな課題があるのか？」、「新しい取り組みはなんなのか」について情報収集します。例えば、小松さんの場合は音楽や著作権に対して興味がありますので、Spotify、Apple Musicの公式Twitterをフォローするなり、業界で発言権の強い人の公式SNSをフォローすれば、いろんな最新情報が入ってきます。
    
    2. 技術視点の情報収集
    最新の技術を生かしてプロダクトを作る場合は、Qiita、Githubなどコミュニティで情報を漁ります。また、すでに興味のある技術があれば、まず触ってみたり、公式ドキュメント読んだり、公式プレスリリースを読めば情報がたくさん収集できます。私の場合は、ブロックチェーン特にEthereumに興味がありますので、最新の公式ドキュメントもしくは新しい技術規格について研究したりします。