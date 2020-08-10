<?php

abstract class User{
  protected $username;  // varchar(20)
  protected $password;  // varchar(64) - SHA-256 encryption
  protected $name;  // varchar(50)
  protected $date_of_birth;  // string of date

public function __construct($username, $password, $name, $date_of_birth) {
  $this->username = $username;
  $this->password = $password;
  $this->name = $name;
  $this->date_of_birth = $date_of_birth;
}

public function toArray(){
    return ["username" => $this->username,
            "password" => $this->password,
            "name" => $this->name,
            "date_of_birth" => $this->date_of_birth];
}

}
 ?>
