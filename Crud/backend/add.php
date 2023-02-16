

<?php 

header("Access-Control-Allow-Origin: *");

	include 'conn.php';
	$user_name = isset($_REQUEST['user_name'])?$_REQUEST['user_name']:"";
	$phone = isset($_REQUEST['phone'])?$_REQUEST['phone']:"";
	$address = isset($_REQUEST['address'])?$_REQUEST['address']:"";

	if($address!=""&&$phone!=""&& $user_name!=""){
		$sql = "INSERT INTO crudapi(user_name,address,phone) VALUES('$user_name','$address','$phone');";
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

	

?>

