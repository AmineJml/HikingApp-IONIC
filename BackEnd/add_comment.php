<?php

include("connection.php");
$data = json_decode(file_get_contents('php://input', true));

if($data->user_id && $data->post_id  && $data->commment ){
    $user_id = $data->user_id;
    $post_id = $data->post_id;
    $commment = $data->commment;

}else{
     $response = [];
     $response["success"] = false;   
     echo json_encode($response);
     return; 
 }

$query = $mysqli->prepare("INSERT INTO comments(user_id, post_id, comment) VALUES(?, ?, ?)");
$query->bind_param("iis",$user_id, $post_id, $commment);
$query->execute();

$array = $query->get_result();

$response = [];
$response["success"] = "success";
echo json_encode($response);



