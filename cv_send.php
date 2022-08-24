<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if($_SERVER["REQUEST_METHOD"] == "POST")
{
  $to_email = "giorgi.kartvelishvili@ozorix.com";
  $requestPayload = file_get_contents("php://input");
  $object = json_decode($requestPayload);

	//Sanitize input data using PHP filter_var().
	$user_email     = filter_var($object->mail, FILTER_SANITIZE_EMAIL);
	$subject        = filter_var($object->title, FILTER_SANITIZE_STRING);

	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
  if(empty($object->attachments)) {
		$output = json_encode(array('type'=>'error', 'text' => 'Please upload a valid file!'));
		die($output);
  }

  $boundary      = "PHP-mixed-".md5(time());
  $boundWithPre  = "\n--".$boundary;

  $headers   = "From: $from";
  $headers  .= "\nReply-To: $from";
  $headers  .= "\nContent-Type: multipart/mixed; boundary=\"".$boundary."\"";

  $message   = $boundWithPre;

  foreach($object->attachments as $file) {
    $fileAttachment = trim($file->fileName);
    $from           = $fromMail;
    $pathInfo       = pathinfo($fileAttachment);
    $attchmentName  = "attachment".((isset($pathInfo['extension'])) ? ".".$pathInfo['extension'] : "");

    $attachment    = chunk_split(base64_encode(file_get_contents($file->tempName)));
    $boundary      = "PHP-mixed-".md5(time());
    $boundWithPre  = "\n--".$boundary;

    $headers   = "From: $from";
    $headers  .= "\nReply-To: $from";
    $headers  .= "\nContent-Type: multipart/mixed; boundary=\"".$boundary."\"";

    $message   = $boundWithPre;
    $message  .= "\n Content-Type: text/plain; charset=UTF-8\n";
    $message  .= "\n $mailMessage";

    $message .= $boundWithPre;
    $message .= "\nContent-Type: application/octet-stream; name=\"".$attchmentName."\"";
    $message .= "\nContent-Transfer-Encoding: base64\n";
    $message .= "\nContent-Disposition: attachment\n";
    $message .= $attachment;
    $message .= $boundWithPre."--";

    var_dump($_FILES);

    return mail($to_email, $subject, $message, $headers);
  }
}

?>
