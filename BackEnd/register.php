<?php

include("connection.php");

if(isset($_POST["fname"]) && $_POST["fname"] != "" && isset($_POST["lname"]) && $_POST["lname"] != "" && isset($_POST["username"]) && $_POST["username"] != ""&& isset($_POST["password"]) && $_POST["password"] != "" ){
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $username = $_POST["username"];
    $password = $_POST["password"];
}else{
    falseResponse();
    return;
}

$query = $mysqli->prepare("Select * from users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();

$array = $query->get_result();

$response = [];
$response_success = [];

while($accounts = $array->fetch_assoc()){
    $users[] = $accounts;
}

if($users){ //if list is not empty
    $response["success"] = "user_already_exit";
    echo json_encode($response);
}

else{

    $query = $mysqli->prepare("INSERT INTO users( fname, lname, username, password) VALUES ( ?, ?, ?, ?)");
    $query->bind_param("ssss", $fname, $lname, $username, $password);
    $query->execute();
    $response["success"] = true;
    echo json_encode($response);
}
