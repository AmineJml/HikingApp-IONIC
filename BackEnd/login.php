<?php

include("connection.php");

if(isset($_POST["User_id"]) && $_POST["User_id"] != "" && isset($_POST["Image_URL"]) && $_POST["Image_URL"] != "" ){
    $User_id = $_POST["User_id"];
    $Image_URL = $_POST["Image_URL"];

}else{
     falseResponse();
     return; 
 }

$query = $mysqli->prepare("INSERT INTO Images(Image_URL, User_id) VALUES(?, ?)");
$query->bind_param("si",$Image_URL, $User_id);
$query->execute();

$response = [];
$response["success"] = "true";
echo json_encode($response);



