//define lo que sucede con la lógica de negocio

const store = require('./store')

function getFairs(){
    //
    return new Promise((resolve, reject) =>{


        const filter = {
          is_fair: true
        }

        resolve(store.getFairFromYear(filter))
    })


}

function getFairFromYear(year){
    //
    return new Promise((resolve, reject) =>{
        if(!year){
            console.error('exhibitionController: getFairFromYear: No hay año')
            reject('Datos incorrectos')
            return false
        }

        const filter = {
          date: {'$regex': '.*'+year+'.*'},
          is_fair: true
        }

        resolve(store.getFairFromYear(filter))
    })


}

function getExhibitions(){
    return new Promise((resolve, reject) =>{
        resolve(store.getExhibitions())
    })
}
function deleteFair(name){
    //
    return new Promise((resolve, reject) =>{
        if(!name){
            console.error('userController: deleteFair: No hay name')
            reject('Datos incorrectos')
            return false
        }

        const filter = {
          name: name,
          is_fair: true
        }


        resolve(store.deleteFairByName(filter))
    })


}


function addFair(name, date, description, artists, url_principal_img){
    //
    return new Promise((resolve, reject) =>{
        if(!name || !url_principal_img){
            console.error('userController: deleteFair: No hay name url_principal_img')
            reject('Datos incorrectos')
            return false
        }

        const filter = {
          name: name,
          date: date,
          description: description,
          url_principal_img: url_principal_img,
          is_fair: true,
          artists: artists.split(",")
        }


        resolve(store.addFair(filter))
    })


}


function updateFair(name, date, description, artists, url_principal_img){
    //
    return new Promise((resolve, reject) =>{
        if(!name || !url_principal_img){
            console.error('userController: updateFair: No hay name')
            reject('Datos incorrectos')
            return false
        }
        console.log(artists)

        const filter = {
          name: name,
          date: date,
          description: description,
          artists: artists,
          is_fair: true,
          url_principal_img: url_principal_img

        }


        resolve(store.updateFair(filter))
    })


}


function getValidYears(){
  return new Promise((resolve, reject) =>{
      resolve(store.getAllValidYears())
  })
}

//exportamos las funciones
module.exports = {
    getFairFromYear,
    deleteFair,
    addFair,
    updateFair,
    getFairs,
    getValidYears,
    getExhibitions
}
