//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../network/response")


router.post("/auth_client", function(request, response){

    //por la promesa
    controller.authClient(request.body.username, request.body.password)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error en el logueado")

        })

});


router.post("/auth_artist", function(request, response){

    //por la promesa
    controller.authArtist(request.body.username, request.body.password)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error en el logueado")

        })

});

router.post("/auth_admin", function(request, response){


    //por la promesa
    controller.authAdmin(request.body.username, request.body.password)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error en el logueado")

        })

});

module.exports = router  // nos traemos esas rutas y las lleva al router
