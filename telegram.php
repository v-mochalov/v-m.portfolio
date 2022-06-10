<?php

/* https://api.telegram.org/bot5346944790:AAGRQ1lDwryc9z4cX8LTjGjdFmQBTaxjPwY/getUpdates,
 где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_telegram'];
$token = '5346944790:AAGRQ1lDwryc9z4cX8LTjGjdFmQBTaxjPwY';
$chat_id = '-623964129';
$arr = [
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
];

foreach ($arr as $key => $value) {
    $txt .= '<b>' . $key . '</b> ' . $value . '%0A';
}

$sendToTelegram = fopen(
    "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}",
    'r'
);

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo 'Error';
}
?>
