<?php

class Log {
    public $date;
    public $time;
    public $ip;
    public $context;
    public $title;
    public $description;

    const SEPARATOR_LOG = "#SEPARADOR_LOG#";
    const SEPARATOR_INTERN = "#SEPARADOR_INTERNO#";

    //titulos
    const ERROR_INTERN = "Error de ejecución";
    const ERROR_REQUEST_REJECTED = "Petición rechazada";
    const ERROR_DATABASE_CONNECTION = "Error al conectar a la base de datos";
    const ERROR_INVALID_DATA = "Datos inválidos";
    const ERROR_DUPLICATED_DATA = "Dato duplicado";


    public function __construct($date, $time, $ip, $context, $title, $description){
        $this->date = $date;
        $this->time = $time;
        $this->ip = $ip;
        $this->context = $context;
        $this->title = $title;
        $this->description = $description;
    }

    public function toRaw(){
        return $this->date.self::SEPARATOR_INTERN.
               $this->time.self::SEPARATOR_INTERN.
               $this->ip.self::SEPARATOR_INTERN.
               $this->context.self::SEPARATOR_INTERN.
               $this->title.self::SEPARATOR_INTERN.
               $this->description;
    }

    public static function convertRawToLog($rawString){

        $split = explode(self::SEPARATOR_INTERN, $rawString);

        $index = 0;

        $date = $split[$index++];
        $time = $split[$index++];
        $ip = $split[$index++];
        $context = $split[$index++];
        $title = $split[$index++];
        $description = $split[$index];


        return new Log($date, $time, $ip, $context, $title, $description);
    }

    public function __toArray(){
        return [
            "date" => $this->date,
            "time" => $this->time,
            "ip" => $this->ip,
            "context" => $this->context,
            "title" => $this->title,
            "description" => $this->description
            ];
    }


}
