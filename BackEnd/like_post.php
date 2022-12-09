<?php

include("connection.php");

if(isset($_POST["user_id"]) && $_POST["user_id"] != "" && isset($_POST["post_id"]) && $_POST["post_id"] != "" && isset($_POST["like_status"]) && $_POST["like_status"] != "" ){
    $User_id = $_POST["user_id"];
    $post_id = $_POST["post_id"];
    $like_status = $_POST["like_status"];


}else{
     $response = [];
     $response["success"] = false;   
     echo json_encode($response);
     return; 
 }

    $query = $mysqli->prepare("INSERT INTO likes( User_id, Image_id, Is_liked) VALUES ( ?, ?, ?)");
    $query->bind_param("iio", $User_id, $Image_id, $like_status);
    $query->execute();

    $response["succes"] = "success";
    echo json_encode($response);
 



