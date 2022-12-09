<?php

include("connection.php");
//username can be changed
//fname, lname, password
if(isset($_POST["user_id"]) && $_POST["user_id"] != "" && isset($_POST[""]) && $_POST["username"] != "" && isset($_POST["fname"]) && $_POST["fname"] != "" && isset($_POST["lname"]) && $_POST["lname"] != "" && isset($_POST["password"]) && $_POST["password"] != ""  ){
    $user_id = $_POST["user_id"];
    $username = $_POST["username"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $password = $_POST["password"];
}
else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
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
    $query = $mysqli->prepare("UPDATE users SET username=?, fname=? , lname=?, password=? WHERE user_id=?");
    $query->bind_param("ssssi", $username, $fname, $lname, $password, $user_id);
    $query->execute();
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
}




