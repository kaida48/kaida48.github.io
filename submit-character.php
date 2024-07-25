<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "sql113.infinityfree.com"; // Replace with your FreeHosting MySQL server
$username = "if0_36942850"; // Replace with your FreeHosting MySQL username
$password = "piKLLcoqRY4aIPV"; // Replace with your FreeHosting MySQL password
$dbname = "if0_36942850_projectphoenix"; // Replace with your FreeHosting MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO characters (discord_tag, name, birthdate, pronouns, pronouns_other, appearance, character_picture, job, background, ambitions, motivations, personality, strengths, weaknesses, hobbies, abilities, friends, enemies, relationships_impact, views_usrf, views_alumni, views_bandit, views_resistance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssssssssssssssss", $discord_tag, $name, $birthdate, $pronouns, $pronouns_other, $appearance, $character_picture, $job, $background, $ambitions, $motivations, $personality, $strengths, $weaknesses, $hobbies, $abilities, $friends, $enemies, $relationships_impact, $views_usrf, $views_alumni, $views_bandit, $views_resistance);

// Set parameters and execute
$discord_tag = $_POST['discord_tag'];
$name = $_POST['name'];
$birthdate = $_POST['birthdate'];
$pronouns = $_POST['pronouns'];
$pronouns_other = $_POST['pronouns_other'];
$appearance = $_POST['appearance'];
$character_picture = ""; // Handle file upload separately
$job = $_POST['job'];
$background = $_POST['background'];
$ambitions = $_POST['ambitions'];
$motivations = $_POST['motivations'];
$personality = $_POST['personality'];
$strengths = $_POST['strengths'];
$weaknesses = $_POST['weaknesses'];
$hobbies = $_POST['hobbies'];
$abilities = $_POST['abilities'];
$friends = $_POST['friends'];
$enemies = $_POST['enemies'];
$relationships_impact = $_POST['relationships_impact'];
$views_usrf = $_POST['views_usrf'];
$views_alumni = $_POST['views_alumni'];
$views_bandit = $_POST['views_bandit'];
$views_resistance = $_POST['views_resistance'];

// Handle file upload
if (isset($_FILES['character_picture']) && $_FILES['character_picture']['error'] == 0) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["character_picture"]["name"]);
    if (move_uploaded_file($_FILES["character_picture"]["tmp_name"], $target_file)) {
        $character_picture = $target_file;
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>