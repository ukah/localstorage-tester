# localstorage-tester

- [javascript - Chome Extension - QuotaExceededError localStorage - コードログ](https://stackoverflow.com/questions/43142660/chome-extension-quotaexceedederror-localstorage)
- [IE, Edgeにはドメイン全体でもLocalStorageの容量制限がある - Qiita](https://qiita.com/non_cal/items/b8a3779f93a252f0f796)
[Setup | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/step-by-step/01-setup/)

# 最低限
_layoutsにdefault.html<br>
<br>
```
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

index.mdに
```
---
layout: default
title: Home
---
<h1>{{ "Hello World!" | downcase }}</h1>
```

を入れればおｋ

- [JavaScript で URL から JSON を取得する | Delft スタック](https://www.delftstack.com/ja/howto/javascript/get-json-from-url-in-javascript/#jquery-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6-url-%E3%81%8B%E3%82%89-json-%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)