<?php
// filepath: C:\xampp\htdocs\submit.php
$servername = "localhost";
$username = "root";
$password = ""; // default XAMPP password is empty
$dbname = "my_sqlpage"; // use your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$user_password = $_POST['password'];

// Hash the password
$hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

// Insert into table (id auto-increments)
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "Record saved!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>