//define lo que sucede con la lógica de negocio

const store = require('./store')

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



//exportamos las funciones
module.exports = {
    getFairFromYear
}
