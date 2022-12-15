<?php 

include("connection.php");

if(isset($_GET["post_id"]) ){
    $post_id = $_GET["post_id"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}
       
$query = $mysqli->prepare("SELECT image_URL, description, user_id, title FROM posts WHERE post_id = ?");
$query->bind_param("i", $post_id);
$query->execute();

$array = $query->get_result();
$response = [];
while($posts = $array->fetch_assoc()){
    $response[] = $posts;
}

if(!$response ){ //list is empty
    $response["success"] = "no_post_with_this_id";   
}

echo json_encode($response);