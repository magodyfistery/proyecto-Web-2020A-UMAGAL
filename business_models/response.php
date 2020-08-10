<?php

class Response {

  public $id_message;  // int
	public $server_message;  // string
	public $metadata;  // string
	public $data;  // JSON/ARRAY
	public $error;  // string, this error shouldn't be show to user



  public function __construct($id_message, $server_message, $metadata, $data, $error) {

     $this->id_message = $id_message;
     $this->server_message = $server_message;
     $this->metadata = $metadata;
     $this->data = $data;
     $this->error = $error;


  }


  public function __toString() {
      return  "ID_MESSAGE: ".$this->id_message.", ".
              "SERVER_MESSAGE: ".$this->server_message.", ".
              "METADATA: ".$this->metadata.", ".
              "data: ".$this->data.", ".
              "error: ".$this->error;
  }

  public function toArray(){
      return ["ID_MESSAGE" => $this->id_message,
              "SERVER_MESSAGE" => $this->server_message,
              "METADATA" => $this->metadata,
              "data" => $this->data,
              "error" => $this->error];
  }
}



?>
