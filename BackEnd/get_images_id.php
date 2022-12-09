<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include("connection.php");

if(isset($_GET["user_id"]) ){
    $user_id = $_GET["user_id"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}

$query = $mysqli->prepare("SELECT Image_URL FROM images WHERE user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();

$array = $query->get_result();
$response = [];
while($tweets = $array->fetch_assoc()){
    $response[] = $tweets;
}

if(!$response ){ //list is empty
    $response["success"] = "no_tweets_by_this_user";   
}

echo json_encode($response);