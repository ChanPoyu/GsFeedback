# 良かった点
---
> レシピのメモができる物を作りました。色々なサイトのコピーだったり、単に思いつきで作ったもののメモだったりを一つで管理できるような物が欲しかったからです。
- ここまで再現できるのはすごいです！普通にどこにありそうなサービスです。すごくphpとデータベースを使いこなしています。

> 管理者(loginemail: ayano@test.jp loginpass: ayano)の人はレシピの投稿数推移も見られるようにしました。少し難しかったです。あとは人のレシピをコピーして、でもそれを自分なりに編集して保存できるようにしました。少し時間があったのでレシピ一覧ではページネーションもやってみました。
- 権限によって使い分けられる実装までできたのは素晴らしいです。ここまで実装できれば、あとはアイディアが固まったら作ればいいですね。頑張ってください！

# 気になった点
---
- `recommand.php`の中のロジックは少し気になります。このページにアクセスすると、ランダムにオススメのレシピを3つ表示する機能が実装されていると思いますが、SQLを2回実行するのと全権取得は効率が悪くなる恐れがあります。まず、SQLを一回だけ実行するには下記のように書けます。
```php
$sql = "SELECT * FROM recipe";
$stmt = $pdo->prepare($sql);
$status = $stmt->execute();
$recipes = [];
if($status==false){
    sql_error();
} else {
  while($recipe = $stmt->fetch(PDO::FETCH_ASSOC)){
    array_push($recipes, $recipe);
  }
}

$keys = array_rand($recipes, 3);

foreach($keys as $key){
  $view .= '<div class="col-md-4"><h3>';
  $view .= $recipes[$key]["title"];
  $view .= '</h3><p>';
  $view .= $recipes[$key]["season"];
  $view .= '</p><p>';
  $view .= $recipes[$key]["ingredient1"].','.$recipes[$key]["ingredient2"].','.$recipes[$key]["ingredient3"];
  $view .= '</p>';
  $view .= '<p><a class="btn btn-secondary" href="../recipe/showrecipe.php?id='.$recipes[$key]["id"].'" role="button">View details &raquo;</a></p>';
  $view .= '</div>';
}
```
`$recipes`に取得したデータを突っ込めば、二回取得する必要がないです。そして、`array_rand()`という関数は引数となる配列の長さを基準に、指定した数のインデックスを配列で返す関数ですので、以上のロジックを使えば、元々のコードより効率的に実行できます。

さらにロジックをすっきりするために、SQL文でランダム取得すれば良いのです。
```php
$pdo = db_conn();
// ここでランダム３件取得
$sql = "SELECT * FROM recipe ORDER BY RAND() LIMIT 3";
$stmt = $pdo->prepare($sql);
$status = $stmt->execute();
$recipes = [];

//3. SQL実行時にエラーがある場合STOP
if($status==false){
    sql_error();
} else {
  while($recipe = $stmt->fetch(PDO::FETCH_ASSOC)){
    array_push($recipes, $recipe);
  }
}

foreach($recipes as $recipe){
  $view .= '<div class="col-md-4"><h3>';
  $view .= $recipe["title"];
  $view .= '</h3><p>';
  $view .= $recipe["season"];
  $view .= '</p><p>';
  $view .= $recipe["ingredient1"].','.$recipe["ingredient2"].','.$recipe["ingredient3"];
  $view .= '</p>';
  $view .= '<p><a class="btn btn-secondary" href="../recipe/showrecipe.php?id='.$recipe["id"].'" role="button">View details &raquo;</a></p>';
  $view .= '</div>';
}
```
ロジックがすっきり以外のメリットとして、例えば、レシピのデータベースが1000万レコードがあるもしくはたくさんのユーザーが同時に動かす時に、全件取得の処理は非常に負荷がかかります。（負荷はインフラの課金に反映されます）アプリケーションのロジックを考える時の原則として、リソースを最小限でロジックを実行できるように組んだ方がいいと覚えていただければと思います。詳しくはここで列挙しませんが、いくつか重複しているロジックをレビューの時に見つけましたので、また時間のある時に自力で直してみてください！


# その他
---
- この４週間の授業を通じてSQLの基礎的な書き方などは習得されたと思います！しかし、これは全てではありません。プロダクトがある程度形ができたとして、簡単な理屈ですが、その運用コストが収益より高ければ損します。そのコストを削減する第一歩として、効率的なコードを書く工夫というのができます。（正直エンジニア志望じゃなかったら、この辺はプロのエンジニアと組んだ方が手っ取り早いです）でもこの短期間ないで、ここまでコードかけたのは本当に凄いと思います。頑張って続けてやってください！質問があれば随時受け付けます。

