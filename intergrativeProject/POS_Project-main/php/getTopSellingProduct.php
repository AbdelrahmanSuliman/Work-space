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
 
     $conn = getDBConnection();

     $admin_id = $_POST['admin_id'];

     $sql = 
     $result = $conn->query($sql);
?>