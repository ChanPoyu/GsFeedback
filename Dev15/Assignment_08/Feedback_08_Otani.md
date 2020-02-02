# よかった点
> 色々試してみました。（課題のブックマークからかけ離れてしまいました。）
- 時間と努力を注ぎ込んだことは一見でわかりました！

# さらによくするために
> select.phpでセレクトボックスの値を表示する時、数字だけじゃわからないので言葉で表示しようとしたら、if文で分岐させることしかうまくいかず、無駄に長いコードになってしまいました。もっとスッキリ書く方法ありますか？（family_select.phpはさらに長くてメンテするのも大変です）

なるほどですね。確かに重複が多くて、コードに無駄があるような気がします。まず気になったのは、表示のコードには家事の種類だけが他と違いますので、条件分岐で書くとしても、全てを表示するhtml全て分岐に入れる必要がないような気がします。

```php
// こちらのコードより
if(condition == 1){
  $view .= "<p>same content</p>";
  $view .= "<p>content1</p>";
  $view .= "<p>same content</p>";
}else if(condition == 2){
  $view .= "<p>same content</p>";
  $view .= "<p>content2</p>";
  $view .= "<p>same content</p>";
}

// こっちのコードの方がスッキリします。
$content = "";
if(condition == 1){
  $content == "content 1";
}else if(condition == 2){
  $content = "content 2";
}

$view .= "<p>same content</p>";
$view .= "<p>".$content."</p>";
$view .= "<p>same content</p>";
```

もしくは、テーブルをデザインする段階に日本語の家事の種類の文字列を保存しといた方がいいと思います。これの方がコードが一番スッキリになります。

```php
while($result=$stmt->fetch(PDO::FETCH_ASSOC)){
  $view .="<tr><td>".$result["id"]."</td><td>".$result["name"]."</td><td>";
  $view .= result["description"]; // descriptionというカラムに「洗濯干す」、「食器洗う」など保存する
  $view .="</td><td>".$result["counter"]."</td><td>".$result["memo"]."</td><td>星".$result["rating"]."つ</td><td>";
  $view .='<a href="user_koshin.php?id='.$result["id"].'">';
  $view .="更新</a>";
  $view .="</td><td>";
  $view .='<a href="delete.php?id='.$result["id"].'&name='.$result["name"].'">';
  $view .="削除</a>";
  $view .="</td></tr>";
}
```


# その他のアドバイス
- 上記のでアドバイスした家事の種類データを保存するテーブルの設計についてですが、リレーショナルテーブルという設計を使った方がいいです。つまり、テーブルとテーブルの間に関連性をつけて、参照できるようにする設計です。

**kaji_timer_table**
|id|name|type|counter|memo|rating|indate|fami_rating|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|1|`Otani`|1|'00:00:01'|''|3|'2020-01-26 20:28:48'|NULL|
|2|`Otani`|3|'00:00:12'|''|4|'2020-01-26 20:29:40'|NULL|
|3|`Otani`|2|'00:02:03'|''|1|'2020-01-26 20:35:33'|NULL|

**kaji_type_table**
|kaji_type_number|kaji_description|
|:---:|:---:|
|1|'洗濯干す'|
|2|'食器洗う'|
|3|'風呂掃除'|

表示用のデータを取ってくる時に、`kaji_timer_table`のtypeの値を`kaji_type_table`からのidに対照すれば、日本語の記述を取って来れますので、条件分岐で書かなくても大丈夫です。そして、一気にこの二つのデータを取ってくるために、JOIN文を書けばできます。書き方はググってみてください！
