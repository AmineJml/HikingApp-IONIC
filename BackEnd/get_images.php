<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include("connection.php");

if(isset($_GET["User_id"]) ){
    $User_id = $_GET["User_id"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return;  
}
// we need to select the  image_URL and at the same time dont show the images where this user is blocked
/*
    1- select all the users who blocked the logged in user and add them to an array
    2- select all images Where user_id is different then the ones in the array
*/

$query = $mysqli->prepare("Select User1_id from blocks WHERE User2_id = ?");
$query->bind_param("i", $User_id);
$query->execute();

$array = $query->get_result();
$blocks = [];


while($accounts = $array->fetch_assoc()){
    $blocks[] = $accounts["User1_id"]; //array of the blocks by user1
}

$str =  implode(",",$blocks);


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

