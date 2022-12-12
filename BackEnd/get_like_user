<?php 

include("connection.php");

if(isset($_POST["post_id"]) && $_POST["post_id"] != "" && isset($_POST["user_id"]) && $_POST["user_id"] != "" ){
    $post_id = $_GET["post_id"];
    $user_id = $_GET["user_id"];

}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}


$query = $mysqli->prepare("SELECT is_liked FROM likes WHERE post_id = ? && user_id = ?");
$query->bind_param("ii", $post_id, $user_id);
$query->execute();

$array = $query->get_result();
if(!$array[0]){
    $response["success"] = "not_liked";   
}
else{
    $response["success"] = "is_liked";   
}
echo json_encode($response);