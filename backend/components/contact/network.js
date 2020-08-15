//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../network/response")



router.post("/request", function(request, response){

    controller.addContactRequest(request.body.name, request.body.email, request.body.contact_phone)
        .then((server_response) =>{
          // server_response no es un arreglo por defecto al guardar solo se devuelve un JSON

            res.success(request, response, {status: 1, data: [server_response],  msg: "Se ha enviado una petición de contacto de forma exitosa"}, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error crear una solicitud de contacto")
        })

});




module.exports = router  // nos traemos esas rutas y las lleva al router
