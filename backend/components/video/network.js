//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../network/response")

router.get("/", function(request, response){

    controller.getVideos()
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error al buscar la feria de ese año hihi")
        })

});

module.exports = router  // nos traemos esas rutas y las lleva al router
