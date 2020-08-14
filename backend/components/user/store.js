//toda la lógica de almacenamiento
const ModelClient = require('../../business_models/client')
const ModelArtist = require('../../business_models/artist')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED

function authAndRetrieveClient(username, password){

    return new Promise((resolve, reject) =>{

        let filter = {username: username, password: password}

        ModelClient.findOne(filter)
            .then((client) => {

                console.log("Cliente consultado: ", client)

                if(client == null){
                  resolve(messagesWellKnowed.MESSAGE_INVALID_CREDENTIALS)
                }else{
                  resolve({status: 1, data:[client],  msg: "Credenciales correctas"})  // status 1= todo correcto
                }

            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}


function authAndRetrieveArtist(username, password){

    return new Promise((resolve, reject) =>{

        let filter = {username: username, password: password}

        ModelArtist.findOne(filter)
            .then((artist) => {

                console.log("Artista consultado: ", artist)

                if(artist == null){
                  resolve(messagesWellKnowed.MESSAGE_INVALID_CREDENTIALS)
                }else{
                  resolve({status: 1, data:[artist],  msg: "Credenciales correctas"})  // status 1= todo correcto
                }

            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

module.exports = {
    authAndRetrieveClient,
    authAndRetrieveArtist
}
