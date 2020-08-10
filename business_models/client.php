<?php
require_once 'user.php';
require_once 'response.php';
// require_once '../messages.php';

class Client extends User{


    private $address;  // varchar(64)
    private $contact_phone;  // varchar(10)


    public function __construct($username, $password, $name, $date_of_birth, $address, $contact_phone) {
      parent::__construct($username, $password, $name, $date_of_birth);
      $this->address = $address;
      $this->contact_phone = $contact_phone;
    }

    /**
     *
     * @return
    */
    public static function authAndRetrieveUser($connection, $username, $password) {

        try {

            $sql = "SELECT `user`.name, `user`.`date_of_birth`, `client`.`address`, `client`.`contact_phone`";
            $sql .= "FROM `user`, `client` WHERE `client`.`username_user` = '$username' AND `user`.`password`='$password' AND `user`.`username`=`client`.`username_user`";


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
      array_push($user, ["address" => $this->address, "contact_phone" => $this->contact_phone]);
      return $user;
    }


}
