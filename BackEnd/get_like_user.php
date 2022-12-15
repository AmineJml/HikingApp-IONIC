<?php 

include("connection.php");

if(isset($_GET["post_id"]) && $_GET["post_id"] != "" && isset($_GET["user_id"]) && $_GET["user_id"] != "" ){
    $post_id = $_GET["post_id"];
    $user_id = $_GET["user_id"];

}else{
    $response = [];
    $response["success"] = "false";   
    echo json_encode($response);
    return;  
}


$query = $mysqli->prepare("SELECT is_liked FROM likes WHERE post_id = ? && user_id = ?");
$query->bind_param("ii", $post_id, $user_id);
$query->execute();

$array = $query->get_result();
$response = [];


while($like = $array->fetch_assoc()){
    $responses[] = $accounts; //array of the blocks by user1
}

echo json_encode($response); 

// if(!$response){
//     $response["success"] = "not_liked";  
// }
// else{
//     echo json_encode($array); 
// }
