<?php

# require_once "../../business_models/log.php";

function writeLog($title, $description, $context){

    $MAX_FILE_SIZE_KB = 102400;

    $datetime = explode(" ", date("Y/m/d h:i:sa"));
    $date = $datetime[0];
    $time = $datetime[1];
    $ip = getUserIpAddr();

    $log = new Log($date, $time, $ip, $context, $title, str_replace("\n", " ", $description));

    if(file_exists("logs.txt")){
        $filesize = filesize("logs.txt"); // bytes
        $filesize = round($filesize / 1024, 2); // KB with 2 digit

        if($filesize == 0 || $filesize > $MAX_FILE_SIZE_KB)  //luego de 100 MB se reinicia
        {
            $myfile = fopen("logs.txt", "w");
            fwrite($myfile, $log->toRaw());
            fclose($myfile);
        }else{
            $myfile = fopen("logs.txt", "a");
            fwrite($myfile, "\n".Log::SEPARATOR_LOG."\n".$log->toRaw());
            fclose($myfile);
        }
    }else{
        $myfile = fopen("logs.txt", "w");
        fwrite($myfile, $log->toRaw());
        fclose($myfile);
    }


}

function readMyFile($file_name){
    if(file_exists($file_name)){
        $file = file_get_contents($file_name);
        return $file;
    }
    return null;
}

function readAllCookies(){
    echo "<br>Cookies almacenadas<br>";
    foreach ($_COOKIE as $key=>$val)
    {
        echo '<br>Cookie:'.$key.' Value:'.$val."<br>\n";
    }
}


function setACookie($cookie_name, $cookie_value, $days_expiration){
    setcookie($cookie_name, $cookie_value, time() + (86400 * $days_expiration), "/");
}

function deleteACookie($cookie_name){
    setcookie($cookie_name, "", time() - 3600, "/");
}

function detectInyection($phrase){
  $banned_words = ['drop', 'delete', 'create', 'update', 'database', ';', 'select'];  // provisional

  for($j=0; $j<count($banned_words); $j++){
      $banned_word = $banned_words[$j];

      if (strpos($phrase, $banned_word) !== false) {
          return true;
      }
  }

  return false;

}


function areValidData($data_array){

    $validation = ["correct" => true, "detail" => "correct data"];

    for($i=0; $i < count($data_array); $i++){
        $data = $data_array[$i];

        if(gettype($data) == "NULL"){
            $validation["correct"] = false;
            $validation["detail"] =  "At least one null data was sent at position: $i of array";
            break;
        }else if(gettype($data) == 'string'){
            $phrase  = strtolower($data);

            if(detectInyection($phrase)){
              $validation["correct"] = false;
              $validation["detail"] =  "Posibility of SQL Inyection with the following text: $phrase";
              break;
            }


        }


    }

    return $validation;

}

function is_in_array($array, $key){
    $within_array = false;
    foreach( $array as $k=>$v ){

        if($k == $key ){
            $within_array = true;
            break;
        }
    }
    return $within_array;
}


function getUserIpAddr(){
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function serverError($sql, $conexion, $context){
    writeLog("Eror de servidor", "No se pudo ejecutar: " . $sql . ", detalle: " . $conexion->error, $context);
}
