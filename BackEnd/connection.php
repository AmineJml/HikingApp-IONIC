<?php

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "hikingdb";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

