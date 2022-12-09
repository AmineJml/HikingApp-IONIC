<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include("connection.php");

if(isset($_GET["post_id"]) ){
    $post_id = $_GET["post_id"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}


$query = $mysqli->prepare("SELECT user_id FROM likes WHERE post_id = ? && is_liked = 1");
$query->bind_param("i", $post_id);
$query->execute();

$response = [];
$array = $query->get_result();
$like_count  =0;
while($Likes = $array->fetch_assoc()){
    $like_count = $like_count + 1;
}


$response["success"] = true;

echo json_encode($like_count);