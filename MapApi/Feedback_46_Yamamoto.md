# 良かった点
- 課題提出お疲れ様でした。時間がないのは辛いですね。APIの使い方が理解できましたでしょうか？bingMapだけではなく、yahoo天気のAPIも使ってみましたね。`$.getJSON(url)`はjQueryのなかで用意されているHTTPリクエストを活用した非同期通信関数です。うまく活用できれば、アプリケーション開発のイメージがもっと明確になります！

# 気になった点
- 特にないですが、非同期通信はcallback関数以外、async/await構文を活用すれば、コードがさらに綺麗になります。詳細は下記で確認してみてください。

# その他のアドバイス
- [HTTP通信について](https://viral-community.com/other-it/http-1873/)
- 山本さんのコードをasync/await構文に変えれば下記となります
    ```js
    async function mapsInit(position) {
        const map = new Bmap("#myMap");
        
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        map.startMap(lat,lon,"aerial",15);
        let pin = map.pin(lat,lon, "#ff0000");

        var weatherData = await getWeather(lat, lon);
        console.log(weatherData);
    };

    async function getWeather (lat, lon) {
        const appid = "dj00aiZpPXR4TVBHVk1maEs2SyZzPWNvbnN1bWVyc2VjcmV0Jng9YjM-";
        const url = "http://weather.olp.yahooapis.jp/v1/place?callback=?&coordinates=";
        
        var weatherData = await $.getJSON(url + lon + "," + lat + "&output=jsonp&appid=" + appid);
        const d = weatherData.Feature[0].Property.WeatherList.Weather[0].Date;
        const r0 = weatherData.Feature[0].Property.WeatherList.Weather[0].Rainfall;
        $("#date").html("時点：" + d);
        $("#rain0").html("降水強度予測値：今現在=" + r0 + "(mm/h)");
        return weatherData;
    }
    ```

    関数にasyncというキーワードをかき、関数の中身にawaitがついてる指令があるときに、結果が帰ってくるまで待ちます。これによって、通信時間によるレンダリングのタイミングズレなどを防ぐことができます。詳細は[こちらの記事](https://qiita.com/soarflat/items/1a9613e023200bbebcb3)を参考にしてみてください！
