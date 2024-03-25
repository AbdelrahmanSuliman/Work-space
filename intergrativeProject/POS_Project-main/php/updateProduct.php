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

    $conn = getDBConnection();

    $stmt = $conn->prepare("UPDATE products
                            SET name = '$name', price = '$price', quantity = '$quantity'
                            WHERE product_id = '$product_id'");

    $stmt->execute();

    $stmt->close();
    $conn->close();

?>
    