//toda la lógica de almacenamiento
const ModelExhibition = require('../../business_models/exhibition')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED

function getFairFromYear(filter){

    return new Promise((resolve, reject) =>{

        ModelExhibition.find(filter)
            .then((fairs) => {

                // console.log("Fairs: ", fairs)

                resolve({status: 1, data: fairs,  msg: "Ferias obtenidas a partir del año indicado"})  // status 1= todo correcto


            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

function getAllValidYears(){

    return new Promise((resolve, reject) =>{

        ModelExhibition.find()
            .then((fairs) => {
                console.log("Fairs: ", fairs.length)
                var years = []
                for(var i=0; i< fairs.length; i++){
                  const year = fairs[i].date.substring(0,4)
                  console.log(year)
                  if(!years.includes(year)){
                    years.push(year)
                  }
                }
                resolve({status: 1, data: years.sort().reverse(),  msg: "Años consultados"})  // status 1= todo correcto
            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}

function getExhibitions(){
    return new Promise((resolve, reject) =>{

        ModelExhibition.find()
            .then((fairs) => {

                console.log("Fairs: ", fairs.length)

                var years = []

                for(var i=0; i< fairs.length; i++){
                  const year = fairs[i].date.substring(0,4)
                  console.log(year)
                  if(!years.includes(year)){
                    years.push(year)
                  }
                }

                resolve({status: 1, data: years.sort().reverse(),  msg: "Años consultados"})  // status 1= todo correcto


            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}



function deleteFairByName(fair){

    return new Promise((resolve, reject) =>{

      console.log(fair)


        ModelExhibition.deleteOne(fair)
            .then((result) => {

                // console.log("Cliente consultado: ", client)
                console.log(result)

                if(result.deletedCount == 0){
                  resolve("No se encontró el elemento a eliminar ")
                }else{
                  resolve({status: 1, data:[fair],  msg: "Se eliminó correctamente"})  // status 1= todo correcto
                }

            })
            .catch(e=>{
                console.log(e)
                resolve(messagesWellKnowed.MESSAGE_ERROR_DB)  //no existe
            })

    })
}


function addFair(fair){

  console.log(fair)

  const myfair = new ModelExhibition(fair)
  return myfair.save()


}

function updateFair(fair){

  return new Promise((resolve, reject) => {

        ModelExhibition.findOne({name: fair.name})
        .then((found) =>{
            found.date = fair.date;
            found.description = fair.description;
            found.artists = fair.artists;
            found.url_principal_img = fair.url_principal_img;
            const newFair = found.save();
            resolve({status: 1, data:[newFair],  msg: "Se actualizó correctamente"})  // status 1= todo correcto

            })
        })
        .catch(e => {
            reject(e);
        })

}




module.exports = {
    getFairFromYear,
    deleteFairByName,
    addFair,
    updateFair,
    getAllValidYears,
    getExhibitions
}
