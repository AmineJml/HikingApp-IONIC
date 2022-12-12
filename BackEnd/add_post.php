<?php

include("connection.php");

if(isset($_POST["user_id"]) && $_POST["user_id"] != "" && isset($_POST["image_URL"]) && $_POST["image_URL"] != ""  && isset($_POST["description"]) && $_POST["description"] != "" ){
    $user_id = $_POST["user_id"];
    $image_URL = $_POST["image_URL"];
    $description = $_POST["description"];

}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}


$query = $mysqli->prepare("INSERT INTO Images(image_URL, user_id, description) VALUES(?, ?, ?)");
$query->bind_param("sis",$image_URL, $user_id, $description);
$query->execute();

$response = [];
$response["success"] = "true";
echo json_encode($response);



