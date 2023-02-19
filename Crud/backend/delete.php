<?php
header("Access-Control-Allow-Origin: *");
	
require_once 'conn.php';

		if(isset($_REQUEST['id'])){
            $id = $_REQUEST['id'];
            $sql = "DELETE FROM `crudapi` WHERE id='$id';";
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