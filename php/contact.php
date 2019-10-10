<?php

  if (isset($_POST['submit'])) {
    $mailTo = 'Jidaniel1234@gmail.com';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: ".$emailFrom;
    $txt = "An email has come in from ".$name." (".$emailFrom.", ".$phone.").\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
  }
?>
