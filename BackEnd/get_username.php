<?php 

include("connection.php");

if(isset($_GET["user_id"]) ){
    $user_id = $_GET["user_id"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}

$query = $mysqli->prepare("SELECT username FROM users WHERE user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();

$array = $query->get_result();
$response = [];
while($tweets = $array->fetch_assoc()){
    $response[] = $tweets;
}
echo json_encode($response);