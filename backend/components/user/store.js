//toda la lógica de almacenamiento
const ModelClient = require('../../business_models/client')
const ModelArtist = require('../../business_models/artist')
const ModelAdmin = require('../../business_models/admin')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED

function authAndRetrieveClient(user){

    return new Promise((resolve, reject) =>{


        ModelClient.findOne(user)
            .then((client) => {

                // console.log("Cliente consultado: ", client)

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

                // console.log("Artista consultado: ", artist)

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


function authAndRetrieveAdmin(username, password){

    return new Promise((resolve, reject) =>{

        let filter = {username: username, password: password}

        ModelAdmin.findOne(filter)
            .then((admin) => {

                // console.log("Artista consultado: ", artist)

                if(admin == null){
                  resolve(messagesWellKnowed.MESSAGE_INVALID_CREDENTIALS)
                }else{
                  resolve({status: 1, data:[admin],  msg: "Credenciales correctas"})  // status 1= todo correcto
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
    authAndRetrieveArtist,
    authAndRetrieveAdmin
}
