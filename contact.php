<?php

    $to = "contacto@centerx.com.ar";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Contacto.";

    $fields = array();
    $fields{"name"} = "Nombre";
    $fields{"email"} = "Email";
    $fields{"message"} = "Mensaje";

    $body = "Mensaje:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>