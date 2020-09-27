//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../network/response")


router.get("/fairs/:year", function(request, response){

    controller.getFairFromYear(request.params.year)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error al buscar la feria de ese año")
        })

});

router.get("", function(request, response){

    controller.getExhibitions()
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error al buscar las exhibiciones")
        })

});





module.exports = router  // nos traemos esas rutas y las lleva al router
