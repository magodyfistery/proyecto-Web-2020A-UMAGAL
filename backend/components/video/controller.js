//define lo que sucede con la lógica de negocio

const store = require('./store')

function getVideos(){
    return new Promise((resolve, reject) =>{
        resolve(store.getVideos())
    })
}

//exportamos las funciones
module.exports = {
    getVideos
}
