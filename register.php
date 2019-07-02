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
	$firstname = $_POST['fname'];
	$lastname = $_POST['lname'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$college = $_POST['college'];
	$year = $_POST['year'];
	$researchTopic = $_POST['topic']; 

	$file = rand(1000,100000)."-".$_FILES['pdf']['name'];
	$ext = pathinfo($_FILES['pdf']['name'], PATHINFO_EXTENSION);
	$ext = strtolower($ext);
    $file_loc = $_FILES['pdf']['tmp_name'];
 	$file_size = $_FILES['pdf']['size'];
 	$file_type = $_FILES['pdf']['type'];
 	$folder="uploads/";
 	$new_file_name = strtolower($file);
 	$final_file=str_replace(' ','-',$new_file_name);
 	
 	
 	if($ext == "pdf"){
	 	if(move_uploaded_file($file_loc,$folder.$final_file)){
			$stmt = $conn->prepare("INSERT INTO registered(FirstName,LastName,Email,Mobile,College,Year,ResearchTopic,File) VALUES (?, ?, ?,?,?,?,?,?)");
		$stmt->bind_param("ssssssss",$firstname,$lastname,$email,$mobile,$college,$year,$researchTopic,$final_file);
		$stmt->execute();
		$stmt->close();
		$conn->close();
		header("Location: registration.html");
		}
 	}
}


?>
