<?php 

include("connection.php");

$query = $mysqli->prepare("Select image_URL, description, user_id, post_id, title from posts  ");
$query->execute();
    //select all users normally
$array = $query->get_result();

$responses = [];


while($accounts = $array->fetch_assoc()){
    $responses[] = $accounts; //array of the blocks by user1
}

echo json_encode($responses);




