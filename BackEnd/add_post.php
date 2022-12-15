<?php

include("connection.php");

$data = json_decode(file_get_contents('php://input', true));

if($data->user_id && $data->image_URL  && $data->description  && $data->title ){
    $user_id = $data->user_id;
    $image_URL = $data->image_URL;
    $description = $data->description;
    $title = $data->title;
    
}else{
    $response = [];
    $response["success"] = "false";   
    echo json_encode($response);
    return;  
}


$query = $mysqli->prepare("INSERT INTO posts(image_URL, user_id, description, title) VALUES(?, ?, ?, ?)");
$query->bind_param("siss",$image_URL, $user_id, $description, $title);
$query->execute();

$response = [];
$response["success"] = "true";
echo json_encode($response);



