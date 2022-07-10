<?php require_once $_SERVER['DOCUMENT_ROOT'] . '/mix.php' ?>

<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$result = str_replace('.php', '', end($link_array));
$path = "/assets/css/$result.css"
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="<?= mix($path) ?>">
    <title>HELLO</title>

    <script>
        function createScript(src) {
            let s = document.createElement('script');
            s.defer = true;
            s.src = src;
            document.body.appendChild(s);
        }
    </script>
</head>
<body>
