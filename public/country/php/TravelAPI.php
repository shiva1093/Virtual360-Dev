<?php
/**
 * Created by PhpStorm.
 * User: sivarajendran
 * Date: 22.01.18
 * Time: 00:51
 */

$data = $_POST['city'];
$appId = ''; // Replace with your APPID
$travelLink = "https://api.sygictravelapi.com/1.0/en/places/list?parents=".$data."&level=poi&limit=5";
$ch = curl_init();
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'x-api-key: '.$appId)
);

curl_setopt($ch, CURLOPT_URL, $travelLink);
// Execute
$result = curl_exec($ch);

echo $result;

