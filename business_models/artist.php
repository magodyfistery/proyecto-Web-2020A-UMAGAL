<?php
require_once 'user.php';
require_once 'response.php';
// require_once '../messages.php';

class Artist extends User{


    private $artistic_name;  // varchar(20)


    public function __construct($username, $password, $name, $date_of_birth, $artistic_name) {
      parent::__construct($username, $password, $name, $date_of_birth);
      $this->artistic_name = $artistic_name;
    }

    /**
     *
     * @return
    */
    public static function authAndRetrieveUser($connection, $username, $password) {

        try {

            $sql = "SELECT `user`.name, `user`.`date_of_birth`, `artist`.`artistic_name`";
            $sql .= "FROM `user`, `artist` WHERE `artist`.`username_user` = '$username' AND `user`.`password`='$password' AND `user`.`username`=`artist`.`username_user`";


            $stmt = $connection->prepare($sql);

            if(!$stmt){
                return new Response(Message::CODE_SERVER_ERROR, Message::MESSAGE_CODE_SERVER_ERROR, null, null, "Ocurrió un error al preparar la consulta sql: $sql");
            }

            $success = $stmt->execute();
            if($success){

              $user = $stmt->fetch(PDO::FETCH_ASSOC);



              if($user){
                return new Response(Message::CODE_VALID_CREDENTIALS, Message::MESSAGE_CODE_VALID_CREDENTIALS, null, $user, null);

              }else{
                return new Response(Message::CODE_INVALID_CREDENTIALS, Message::MESSAGE_CODE_INVALID_CREDENTIALS, null, null, null);

              }
            }else{
              return new Response(Message::CODE_SERVER_ERROR, Message::MESSAGE_CODE_SERVER_ERROR, "execute not success", null, "Error al ejecutar el sql: $sql");
            }


        } catch (Exception $e) {
          return new Response(Message::CODE_SERVER_ERROR, Message::MESSAGE_CODE_SERVER_ERROR, "Exception in class", null, $e->getMessage());
        }

    }

    public function toArray(){
      $user = parent::toArray();
      array_push($user, ["artistic_name" => $this->artistic_name]);
      return $user;
    }


}
