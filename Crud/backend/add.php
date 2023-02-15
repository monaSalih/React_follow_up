

<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods:*");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
	include 'conn.php';
		$user_name = $_REQUEST['user_name'];
		$phone = $_REQUEST['phone'];
		$adress = $_REQUEST['adress'];
		
		$sql = "INSERT INTO crudapi(user_name,phone,address) VALUES('$user_name','$phone','$adress');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	

?>

