<?php
session_start();

// DATABASE CONNECTION
$conn = mysqli_connect("localhost", "root", "", "armani_cars");

if (!$conn) {
    die("Database connection failed");
}

// ------------------- SIGNUP ----------------------
if (isset($_POST['signup'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $check = mysqli_query($conn, "SELECT * FROM admins WHERE email='$email'");
    if (mysqli_num_rows($check) > 0) {
        echo "<script>alert('Email already exists'); window.location='admin_signup.html';</script>";
        exit();
    }

    mysqli_query($conn, "INSERT INTO admins(name,email,password) VALUES('$name','$email','$pass')");
    echo "<script>alert('Account created successfully'); window.location='admin_login.html';</script>";
    exit();
}

// ------------------- LOGIN ----------------------
if (isset($_POST['login'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = mysqli_query($conn, "SELECT * FROM admins WHERE email='$email'");
    
    if (mysqli_num_rows($query) == 1) {
        $row = mysqli_fetch_assoc($query);

        if (password_verify($password, $row['password'])) {
            $_SESSION['admin_id'] = $row['id'];
            $_SESSION['admin_name'] = $row['name'];

            header("Location: admin_dashboard.php");
            exit();
        }
    }

    echo "<script>alert('Incorrect email or password'); window.location='admin_login.html';</script>";
    exit();
}
?>
