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

    $product_id = $_POST['product_id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $admin_id = $_POST['admin_id'];

    $conn = getDBConnection();

    $stmt = $conn->prepare("INSERT INTO products 
                            VALUES ('$product_id', '$name', '$price', '$quantity', '$admin_id')");

    $stmt->execute();

    $stmt->close();
    $conn->close();

?>
    