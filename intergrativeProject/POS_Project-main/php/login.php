<?php  
    define('DB_HOST', 'localhost:3307');
    define('DB_USER', 'root');
    define('DB_PASS', '');
    define('DB_NAME', 'pos');

    
    function getDBConnection() {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn->connect_error) {
            die('Connection failed: ' . $conn->connect_error);
        }
        return $conn;
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = getDBConnection();

    $sql = "SELECT * FROM employee WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "Login successful! Welcome, " . $row['username'];
        } else {
            echo "Incorrect password";
        }
    } else {
        $result = $conn->query("SELECT username, password FROM admins WHERE username = '$username'");
        if($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                echo "Login successful! Welcome, " . $row['username'];
            } else {
                echo "Incorrect password";
            }
        } else {
            echo "User not found";
        }
    }

    $conn->close();
?>
    