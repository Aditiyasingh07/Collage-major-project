<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$pincode= $_POST['pincode'];
$category= $_POST['cat'];
$address= $_POST['address'];
$to = "scrapwallha@gmail.com";
$subject = "Mail From ScrapWallha";
$txt ="Name = ". $name . "\r\nEmail = " . $email . "\r\nPhone = " . $phone . "\r\nPincode = " .$pincode . "\r\nCategory = " .$cat . "\r\nAddress = " .$address;
$headers = "From: adisingh20012110@gmail.com" . "\r\n" .
"CC: adisingh20012110@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank.html");
?>