<?php

$recepient = "kitpesua2022@gmail.com";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта KitPes_SHOP";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>