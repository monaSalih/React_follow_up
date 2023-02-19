<?php
header("Access-Control-Allow-Origin: *");
	
include 'conn.php';
$user_name = isset($_REQUEST['user_name'])?$_REQUEST['user_name']:"";
		$phone = isset($_REQUEST['phone'])?$_REQUEST['phone']:"";
		$address = isset($_REQUEST['address'])?$_REQUEST['address']:"";
		$id = isset($_REQUEST['id'])?$_REQUEST['id']:"";

        if($address!=""&&$phone!=""&& $user_name!=""){
            $sql = "UPDATE crudapi SET user_name='$user_name', phone='$phone' ,address='$address' WHERE id='$id';";
            $res = mysqli_query($conn, $sql);
            if($res){
                echo "Success!";
            }
            else{
                echo "Error!";
            }
            $conn->close();
        }else{
            echo "data sent wrong";
        }


// mysqli_query($conn,$sql);
?>