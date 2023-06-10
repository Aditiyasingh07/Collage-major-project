<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$pincode= $_POST['pincode'];
$category= $_POST['cat'];
$address= $_POST['address']
$to = "scrapwallha@gmail.com";
$subject = "Mail From ScrapWallha";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone =" . $phone . "\r\n Pincode =" .$pincode . "\r\n Category=" .$category . "\r\n Address=" .$address;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank.html");
?>