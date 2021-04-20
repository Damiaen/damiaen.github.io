<?php
// set the default timezone to use and set date variable
$recvDate = date('l jS \of F Y h:i:s A');

// an email address that will be in the From field of the email.
$from = 'ceh-minor-ethical-hacking@damiaentoussaint.nl';

// an email address that will receive the email with the output of the form
$sendTo = 'account-security-team-ceh@damiaentoussaint.nl';

// Get client ip adress
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

// All of the data that we want to have, we define here
$browser = $_SERVER['HTTP_USER_AGENT'];

// subject of the email
$subject = 'WhiteHatReport: Someone entered WebPage!';

$emailText = "Someone clicked on the web URL: \n\nClient Data: \n\tSender Browser: $browser\n\tSender IP: $ip\n\tLogin at: $recvDate";

// All the neccessary headers for the email.
$headers = array('Content-Type: text/plain; charset="UTF-8";',
   'From: ' . $from,
   'Reply-To: ' . $from,
   'Return-Path: ' . $from,
);

// After completing mail building send mail
mail($sendTo, $subject, $emailText, implode("\n", $headers));
?>