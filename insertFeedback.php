<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vishwacon1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if(isset($_POST['btn_submit'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$stmt = $conn->prepare("INSERT INTO feedback(Name,Email,Message) VALUES (?,?,?)");
	$stmt->bind_param("sss",$name,$email,$message);
	$stmt->execute();
	$stmt->close();
	$conn->close();
	header("Location: contactUs.html");
}
?>
