<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "sql113.infinityfree.com";
$username = "if0_36942850";
$password = "LetsgamesDE1203"; // Updated password
$dbname = "if0_36942850_submissions"; // New database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Database connection successful!";
$conn->close();
?>