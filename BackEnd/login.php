<?php

include("connection.php");

if(isset($_POST["user_id"]) && $_POST["user_id"] != "" && isset($_POST["image_URL"]) && $_POST["image_URL"] != "" ){
    $user_id = $_POST["user_id"];
    $image_URL = $_POST["image_URL"];

}else{
     falseResponse();
     return; 
 }

$query = $mysqli->prepare("INSERT INTO Images(image_URL, user_id) VALUES(?, ?)");
$query->bind_param("si",$image_URL, $user_id);
$query->execute();

$response = [];
$response["success"] = "true";
echo json_encode($response);



