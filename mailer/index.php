<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['title']) && empty($_POST['mail']))  die();



if ($_POST){
	
$name = $_POST['name']; 
$subject = $_POST['subject'];
$from = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['text'];


http_response_code(200);

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                cd                // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'testowaniephpmailer@gmail.com';                 // SMTP username
$mail->Password = 'testowaniephpmailer93';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->isHTML(true); 
$mail->addAddress('testowaniephpmailer@gmail.com');
$mail->setFrom($from,$name); // Add a recipient
$mail->addReplyTo($from,$phone);
$mail->Subject = $subject;
$mail->Body = $message;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
}

?>