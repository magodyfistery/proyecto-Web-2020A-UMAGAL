const express = require('express');  //librería express
const app = express();
const server = require('http');
const bodyParser = require("body-parser");
const db = require('./db');
const router = require('./network/routes');//require('./components/message/network')  //recolecta con export
const config = require("./config");
var cors = require('cors')
const ModelArtist = require('./business_models/artist')
db(config.dbUrl)

app.use(cors())  // DEBUG SOLAMENTE, en producción amoldar a rutas específicas
app.use(bodyParser.json());


router(app)

//servir estáticos
app.use(config.publicRoute, express.static('static'));


app.get("/", function(req, res){

  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(req.body)
  res.send({status:1, data:[], msg:"Hola!, " + ip +  " te saludo desde el servidor"})

})

app.get("/api/exhibition", function(req, res){
    ModelArtist.find({})
    .then((exhibitions) => {

        // console.log("Fairs: ", fairs)
        //res.send({status:1, data: exhibitions, msg:"Hola!, te saludo desde el servidor"})
        res.success(req, res, resolve({status: 1, data: exhibitions,  msg: "Ferias consultadas"}), 201)  //mejor manera de contestar, parametriza todo esto
    })
    .catch(e=>{
        console.log(e)
        resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
    })
})
/*
app.get("/api/videos", function(req, res){
  ModelArtist.find({})
  .then((exhibitions) => {

      // console.log("Fairs: ", fairs)
      //res.send({status:1, data: exhibitions, msg:"Hola!, te saludo desde el servidor"})
      res.success(req, res, resolve({status: 1, data: exhibitions,  msg: "Ferias consultadas"}), 201)  //mejor manera de contestar, parametriza todo esto

      //resolve({status: 1, data: exhibitions,  msg: "Ferias consultadas"})  // status 1= todo correcto


  })
  .catch(e=>{
      console.log(e)
      resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
  })
})
*/
app.listen(config.port, function(){
    console.log("La aplicación está escuchando en " + config.host + ":" + config.port);
});


