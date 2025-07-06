<!-- 📄 contact-form-handler.php -->
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "your-email@domain.com";
  $subject = "New Contact Form Message";
  $body = "From: $name\nEmail: $email\n\nMessage:\n$message";

  if(mail($to, $subject, $body)){
    echo "Message sent successfully!";
  } else {
    echo "Something went wrong. Try again.";
  }
}
?>
