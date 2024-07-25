<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

if (!isset($_SESSION['loggedin'])) {
    header('Location: login.php');
    exit;
}

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

$sql = "SELECT * FROM characters";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Submissions</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>View Submissions</h1>
        <?php
        if ($result->num_rows > 0) {
            echo "<table><tr><th>ID</th><th>Discord Tag</th><th>Name</th><th>Birthdate</th><th>Pronouns</th><th>Pronouns Other</th><th>Appearance</th><th>Character Picture</th><th>Job</th><th>Background</th><th>Ambitions</th><th>Motivations</th><th>Personality</th><th>Strengths</th><th>Weaknesses</th><th>Hobbies</th><th>Abilities</th><th>Friends</th><th>Enemies</th><th>Relationships Impact</th><th>Views USRF</th><th>Views Alumni</th><th>Views Bandit</th><th>Views Resistance</th><th>Created At</th></tr>";
            while($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row["id"]. "</td><td>" . $row["discord_tag"]. "</td><td>" . $row["name"]. "</td><td>" . $row["birthdate"]. "</td><td>" . $row["pronouns"]. "</td><td>" . $row["pronouns_other"]. "</td><td>" . $row["appearance"]. "</td><td>" . $row["character_picture"]. "</td><td>" . $row["job"]. "</td><td>" . $row["background"]. "</td><td>" . $row["ambitions"]. "</td><td>" . $row["motivations"]. "</td><td>" . $row["personality"]. "</td><td>" . $row["strengths"]. "</td><td>" . $row["weaknesses"]. "</td><td>" . $row["hobbies"]. "</td><td>" . $row["abilities"]. "</td><td>" . $row["friends"]. "</td><td>" . $row["enemies"]. "</td><td>" . $row["relationships_impact"]. "</td><td>" . $row["views_usrf"]. "</td><td>" . $row["views_alumni"]. "</td><td>" . $row["views_bandit"]. "</td><td>" . $row["views_resistance"]. "</td><td>" . $row["created_at"]. "</td></tr>";
            }
            echo "</table>";
        } else {
            echo "<p>No submissions found.</p>";
        }

        $conn->close();
        ?>
    </div>
</body>
</html>