<?php

include("connection.php");

if(isset($_POST["user_id"]) && $_POST["user_id"] != "" && isset($_POST["post_id"]) && $_POST["post_id"] != "" && isset($_POST["comment"]) && $_POST["comment"] != ""){
    $user_id = $_POST["user_id"];
    $post_id = $_POST["post_id"];
    $commment = $_POST["comment"];


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



