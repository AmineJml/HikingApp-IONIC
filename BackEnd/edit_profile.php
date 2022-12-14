<?php

include("connection.php");
//username can be changed
$data = json_decode(file_get_contents('php://input', true));

if($data->user_id && $data->username  && $data->fname  && $data->lname  && $data->password  ){
    $user_id = $data->user_id;
    $username = $data->username;
    $fname = $data->fname;
    $lname = $data->lname;
    $password = $data->password;
}
else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return; 
}


$query = $mysqli->prepare("Select * from users WHERE username = ?");
$query->bind_param("s", $username);
$query->execute();

$array = $query->get_result();

$response = [];
$response_success = [];

while($accounts = $array->fetch_assoc()){
    $users[] = $accounts;
}

if($users){ //if list is not empty
    $response["success"] = "user_already_exit";
    echo json_encode($response);
}

else{
    $query = $mysqli->prepare("UPDATE users SET username=?, fname=? , lname=?, password=? WHERE user_id=?");
    $query->bind_param("ssssi", $username, $fname, $lname, $password, $user_id);
    $query->execute();
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
}




