<?php
//database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Hash password (for security)
$hashed_password = password_hash($password//, PASSWORD_DEFAULT);

// Prepare SQL statement
$sql = "INSERT INTO registered (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "User registered successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close database connection
$conn->close();
?>
