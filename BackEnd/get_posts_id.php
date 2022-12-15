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

$query = $mysqli->prepare("SELECT image_URL, description, user_id, title FROM posts WHERE user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();

$array = $query->get_result();
$response = [];
while($posts = $array->fetch_assoc()){
    $response[] = $posts;
}

if(!$response ){ //list is empty
    $response["success"] = "no_posts_by_this_user";   
}

echo json_encode($response);