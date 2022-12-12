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


$query = $mysqli->prepare("SELECT comment FROM comments WHERE post_id = ?");
$query->bind_param("i", $post_id);
$query->execute();

$array = $query->get_result();
$response = [];
while($comments = $array->fetch_assoc()){
    $response[] = $comments;
}

if(!$response ){ //list is empty
    $response["success"] = "no_comments_for_this_post";   
}

echo json_encode($response);