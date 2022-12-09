<?php 

include("connection.php");

$query = $mysqli->prepare("Select image_URL from images WHERE User_id NOT IN (?) ");
$query->bind_param("s", $str );
$query->execute();
    //select all users normally
$array = $query->get_result();

$responses = [];


while($accounts = $array->fetch_assoc()){
    $responses[] = $accounts; //array of the blocks by user1
}

echo json_encode($responses);


//select all users normally without blocks

// $query = $mysqli->prepare("Select User_id, Image_URL, Image_id from images ");
// $query->execute();
// $array = $query->get_result();
// $response = [];
// while($images = $array->fetch_assoc()){
//     $response[] = $images;
// }
// echo json_encode($response);

