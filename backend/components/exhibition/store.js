//toda la lógica de almacenamiento
const ModelExhibition = require('../../business_models/exhibition')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED

function getFairFromYear(filter){

    return new Promise((resolve, reject) =>{

        ModelExhibition.find(filter)
            .then((fairs) => {

                // console.log("Fairs: ", fairs)

                resolve({status: 1, data: fairs,  msg: "Ferias consultadas"})  // status 1= todo correcto


            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

function getExhibitions(){
    return new Promise((resolve, reject) =>{

        ModelExhibition.find({is_fair : false})
            .then((exhibitions) => {

                resolve({status: 1, data: exhibitions,  msg: "Exhibiciones consultadas"})  // status 1= todo correcto


            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

module.exports = {
    getFairFromYear,
    getExhibitions
}
