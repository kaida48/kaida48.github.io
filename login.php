<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $password = $_POST['password'];
    if ($password == '{tW_9pGB~SN(tBws') { // Replace with your desired password
        $_SESSION['loggedin'] = true;
        header('Location: view-submissions.php');
        exit;
    } else {
        $error = "Incorrect password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form method="POST" action="">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
        <?php if (isset($error)) { echo "<p>$error</p>"; } ?>
    </div>
</body>
</html>