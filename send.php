<?php
require 'PHPMailer/class.phpmailer.php';

if(isset($_POST['send']))
{
      $file_name = $_FILES['file']['name'];
      $file_tmp =$_FILES['file']['tmp_name'];
      
        $abc=microtime();
        $path="upload/$abc".$file_name;
        move_uploaded_file($file_tmp,$path);
         
         
            $name=$_POST['name'];
            $email=$_POST['email'];
            $msg=$_POST['message'];
            $subject=$_POST['subject'];
    
            $mail = new PHPMailer(true); 

        	$mail->IsSMTP();                           
        	$mail->SMTPAuth   = false;                 
        	$mail->Port       = 25;                    
        	$mail->Host       = "localhost"; 
        	$mail->Username   = "Your Username";   
        	$mail->Password   = "Password";            
        
        	$mail->IsSendmail();  
        
        	$mail->From       = "Email From";
        	$mail->FromName   = "yourphpguru.com";
        
        	$mail->AddAddress($email);
            $mail->Subject  = $subject;
        	$mail->WordWrap   = 80; 
        
            $mail->MsgHTML($msg);
        	$mail->IsHTML(true); 
            $mail->AddAttachment($path,$file_name);
         
         
            if(!$mail->Send())
            {
                   echo "Mail Not Sent";
            }
            else
            {
               	echo '<script language="javascript">';
    	        echo 'alert("Thank You Contacting Us We Will Response You As Early Possible")';
    	        echo '</script>';
         
            } 
        	
}        	    
        