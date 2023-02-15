<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 $hostName = "localhost";
 $userName = "root";
 $password = "";
 $dbName = "crud";
 $conn= new mysqli($hostName,$userName,$password,$dbName);
 if($conn){
    // echo "connected";
 }else{
    echo "not connected";
 }

  ?>
