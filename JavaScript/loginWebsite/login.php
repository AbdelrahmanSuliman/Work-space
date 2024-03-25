<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = ""; // Password for MySQL (if set)
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$loginUsername = $_POST['loginUsername'];
$loginPassword = $_POST['loginPassword'];

// Prepare SQL statement
$sql = "SELECT * FROM users WHERE username='$loginUsername'";
$result = $conn->query($sql);

// Check if user exists
if ($result->num_rows > 0) {
    // Verify password
    $row = $result->fetch_assoc();
    if (password_verify($loginPassword, $row['password'])) {
        echo "Login successful! Welcome, " . $row['username'];
    } else {
        echo "Incorrect password";
    }
} else {
    echo "User not found";
}

// Close database connection
$conn->close();
?>

