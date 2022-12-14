<?php

include("connection.php");

$data = json_decode(file_get_contents('php://input', true));

if($data->user_id && $data->image_URL  && $data->description  ){
    $user_id = $data->user_id;
    $image_URL = $data->image_URL;
    $description = $data->description;

    
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



