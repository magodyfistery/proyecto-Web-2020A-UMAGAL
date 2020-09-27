//recibe la petición http y enviarla al controlador, todo lo que salga de aqui no le corresponde
const express = require('express');  //librería express


const controller = require('./controller')

const router = express.Router();  //permite separar cabeceras, métodos, por url, etc

const res = require("../../network/response")


router.get("/get_valid_years", function(request, response){

  console.log(request.body)

  controller.getValidYears()

        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
          console.log(e)
            res.error(request, response, "Información inválida", 400, "Error al actualizar la feria")
        })

});

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





router.get("/fairs", function(request, response){

    controller.getFairs()
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
            res.error(request, response, "Información inválida", 400, "Error al buscar la feria de ese año")
        })

});

router.post("/fairs/delete", function(request, response){

    controller.deleteFair(request.body.name)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {

            res.error(request, response, "Información inválida", 400, "Error al buscar la feria de ese año")
        })

});

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post("/upload_image", upload.single("file"), function(request, response){

  const filename = request.file.filename;
  const path = request.file. path;
  // Call your database method here with filename and path
  res.success(request, response, {status: 1, data:["http://localhost:3000/" +path],  msg: filename}, 201)

});

router.post("/fairs/add", function(request, response){


    controller.addFair(request.body.name, request.body.date, request.body.description, request.body.artists, request.body.url_principal_img)
        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
          console.log(e)
            res.error(request, response, "Información inválida", 400, "Error al agregar la feria")
        })

});

router.post("/fairs/update", function(request, response){

  console.log(request.body)

  controller.updateFair(request.body.name, request.body.date, request.body.description, request.body.artists, request.body.url_principal_img)

        .then((server_response) =>{
            res.success(request, response, server_response, 201)  //mejor manera de contestar, parametriza todo esto

        })
        .catch(e => {
          console.log(e)
            res.error(request, response, "Información inválida", 400, "Error al actualizar la feria")
        })

});








module.exports = router  // nos traemos esas rutas y las lleva al router
