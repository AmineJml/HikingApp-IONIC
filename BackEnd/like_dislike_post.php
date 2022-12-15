<?php

include("connection.php");

$data = json_decode(file_get_contents('php://input', true));

if($data->user_id && $data->post_id  && $data->is_liked  ){
    $user_id = $data->user_id;
    $post_id = $data->post_id;
    $is_liked = $data->is_liked;
}else{
     $response = [];
     $response["success"] = false;   
     echo json_encode($response);
     return; 
 }

$query = $mysqli->prepare("UPDATE likes SET is_liked=? WHERE user_id=?, post_id=?");
$query->bind_param("iii", $user_id, $post_id, $is_liked);
$query->execute();

$response = [];
$response["response"] = "true";

echo json_encode($response);
    
    



 



