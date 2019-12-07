# 良かった点
- 課題の提出お疲れ様でした。とりあえず最低限のデータベースの扱い方についてできたようですね。データベースは今後のプロダクト開発においても非常に重要なツールになると思いますので、今のうちに慣れといたほうがいいですね。また何かご質問があればぜひ聞いてください。

# 気になった点
- 課題の中で、データベースらしくファイルがなかったですね。今度からデータベースをエクスポートしていただければ、うまくデータベースと連携した機能が動作するかどうか確認できますので、よろしくお願いいたします。[phpmyadmin](https://www.dbonline.jp/phpmyadmin/export-import/index1.html)にデーターベースをエクスポートする機能がありますので、使ってみってください。

- うまく表示できなかったのは下記のコードでしょうか？
```php
<?php
    //1.  DB接続します
    include("funcs.php");
    $pdo = db_conn();

    //２．データ登録SQL作成
    $stmt = $pdo->prepare("SELECT * FROM gs_bm_table");
    $status = $stmt->execute();

    //３．データ表示
    $view="";
    if($status==false) {
        sql_error();
    }else{
        while( $r = $stmt->fetch(PDO::FETCH_ASSOC)){ 
            $view .= $r["<td>"."id"."</td>"].$r["<td>"."bookname"."</td>"].$r["<td>"."bookurl"."</td>"].$r["<td>"."comment"."</td>"].$r["<td>"."indate"."</td>"]."<br>";
        }
    }
?>
```
いくつか気づいた問題点をお伝えします。
1. `$r["<td>"."id"."</td>"]`という書き方ではデータを取り出せません。`$r`は連想配列型（JavascriptのObjectと似てます）なので、要素を取り出す時には`$r["id"]`に書かないといけません。`.`は文字列をくっつけるオペレータなので、上記の書き方だと`$r["<td>id</td>"]`になります。これはうまくレンダリングできませんね。
2. コードの順序に問題があります。`<?=$view?>`がコードの41行にあるのに、データの読み込みの操作は46からでした。なので、`$view`はまだ空の状態なので、どう頑張っても表示されません。上記のコードを上に持っていきますと、問題が解決されます。
3. 非常に細かいところですが、インデントちゃんと揃えましょう。いちいち肉眼で確認するのはとても非効率的だと思いますので、[これらのツール](https://www.facebook.com/groups/gsdev14/permalink/1313908078770023/)を活用してください。

# その他
> 正常に動作しなかった時のエラーの確認が難しかったです。
そうですね。確かに何もかも500番台で帰ってくるのは少し困ります。デバッグのスキルとして、一つすぐ使えるものをお伝えします。例えば、500番台が帰ってくると、サーバーエラーだとわかりますので、まず文法チェックしてみてください。文法が間違っていない場合は、まず全てをコメントアウトして、一行ずつエラーが起きるかどうかを検証していくことで、どこでエラーが起きているかまず特定できます。そのあとドキュメントやネット記事を調べて正しい書き方を見つければ、問題解決できるでしょう。