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
    $email = $_POST['email'];
    $password = $_POST['password'];


    $conn = getDBConnection();

    $stmt = $conn->prepare("INSERT INTO admins (username, email, password) 
                            VALUES ('$username', '$email', '$password')");

    $stmt->execute();

    $stmt->close();
    $conn->close();

?>
    