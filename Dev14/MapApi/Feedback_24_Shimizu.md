# 良かった点
- アイディアが非常に良かったですね。チェック入れるだけで、地理情報と結びつけることができれば非常に便利ですね。でもこれはストーカ対策がなければ、プライバシー性で問題起こりそうですねw。

# 気になった点
- 同じidのdivタグが二つありましたね。それで、チャックボックスがうまく表示できませんでした。
- mayMapのサイズ指定にtypoがあって、それでうまくサイズ指定できませんでした。`stype="width:500px height:200px;"`を`style="width:100%; height:60%;"`に書き換えれば、地図とチェックボックスが正常に表示されます。

# その他のアドバイス
- 下記のコードでチェック入れた病院の全件取得ができました！ご確認ください！
    ```js
    $("input").on("change", function () {
        $("input:checked").each(function () {
            const key = $(this).parent().next().text();
            console.log(key);
        });
    });
    ```
    まずチェックボックスの変化を`.on("change")`で監視、変化があれば、中身のコールバック関数でチェックされたものを全て取得します。