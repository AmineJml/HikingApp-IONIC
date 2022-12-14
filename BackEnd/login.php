<?php

include("connection.php");

$data = json_decode(file_get_contents('php://input', true));

if($data->username && $data->password  ){
    $username = $data->username;
    $password = $data->password;
}else{
     $response = [];
     $response["success"] = "z";   
     echo json_encode($response);
     return; 
 }


$query = $mysqli->prepare("Select * from users WHERE username = ? && password=?");
$query->bind_param("ss", $username, $password);
$query->execute();

$array = $query->get_result();
$response = [];
while($credentials = $array->fetch_assoc()){
    $response[] = $credentials;
}
if(!$response ){ //list is empty
    $response["success"] = "User_does_not_exist";        
}
else{
    $response["success"] = "true";   

}
echo json_encode($response);

