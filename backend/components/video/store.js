//toda la lógica de almacenamiento
const ModelArtist = require('../../business_models/artist')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED

function getVideos(){

    return new Promise((resolve, reject) =>{

        ModelArtist.find({})
            .then((artists) => {

                // console.log("Fairs: ", fairs)

                resolve({status: 1, data: artists,  msg: "Ferias consultadas"})  // status 1= todo correcto


            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

module.exports = {
    getVideos
}
