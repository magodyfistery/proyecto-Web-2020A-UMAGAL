 <?php

    require_once "../params.php";
    require_once '../../../business_models/client.php';
    require_once '../../../business_models/artist.php';

    $context = $_SERVER['PHP_SELF'];

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){

      $json_input = json_decode(file_get_contents('php://input') , true);
      //var_export($json_input);
      $username = $json_input['username'];
      $password = $json_input['password'];
      $type = $json_input['type'];

      $validation = areValidData([$username, $password, $type]);

      if(!$validation["correct"]){
          writeLog(Log::ERROR_INVALID_DATA, $validation["detail"], $context);
          exit();
      }
      $database = new Database();
      $connection = $database->getConnection($DATABASE_NAME);

      if($connection == null){
          writeLog(Log::ERROR_DATABASE_CONNECTION, $database->error, $context);
          echo json_encode((new Response(Message::$CODE_SERVER_ERROR, Message::$MESSAGE_CODE_SERVER_ERROR, "Error in the server", null, "Error connecting to Database"))->toArray());
          exit();
      }

      if($type == "public"){
        $response = Client::authAndRetrieveUser($connection, $username, $password);
      }
      else if($type == "artist"){
        $response = Artist::authAndRetrieveUser($connection, $username, $password);
      }


      if($response->error != null){
          writeLog(Log::ERROR_INTERN, $respuesta->error, $context);
          $response->error = "Intern Error";  // delete specific details of error
      }


      echo json_encode($response->toArray());
      $database = null;

    }else{
        if($_SERVER['REQUEST_METHOD'] != "OPTIONS")
            writeLog(Log::ERROR_REQUEST_REJECTED, "Request made: ".$_SERVER['REQUEST_METHOD'], $context);
        echo $MSG_DENIED_ACCESS;
    }



?>
