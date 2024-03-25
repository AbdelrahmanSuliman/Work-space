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
    $admin_id = $_POST['admin_id'];

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $conn = getDBConnection();

    $stmt = $conn->prepare("INSERT INTO employee (username, password, admin_id) 
                            VALUES ('$username', '$hashed_password', '$admin_id'");

    $stmt->execute();

    $stmt->close();
    $conn->close();

?>
    