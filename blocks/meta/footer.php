<footer class="footer">
    footer
</footer>


<?php
$link = $_SERVER['PHP_SELF'];
$link_array = explode('/', $link);
$result = str_replace('.php', '', end($link_array));
$path = "/assets/js/$result.js"
?>

<script src="<?= mix($path) ?>"></script>

</body>
</html>
