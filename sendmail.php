<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('cukden53@gmail.com', 'Ден Цук');

$mail->addAddress('zpdeni10@gmail.com');  

$mail->Subject = 'Привіт! Прийміть заявкую';

$body = '<h1>Заявка на купівлю корму!</h1>';

if (trim(!empty($_POST['name']))) {
   $body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['tel']))) {
   $body .= '<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
}

$mail->Body = $body;    

// Проверяем отравленность сообщения
if (!$mail->send()) {
    $message = 'Помилка';
} else {
    $message = 'Дані відправлені!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>