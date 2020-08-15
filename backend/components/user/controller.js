//define lo que sucede con la lógica de negocio

const store = require('./store')

function authClient(username, password){
    //
    return new Promise((resolve, reject) =>{
        if(!username || !password){
            console.error('userController: authClient: No hay username o password')
            reject('Datos incorrectos')
            return false
        }

        const user = {
          username: username,
          password: password
          // more logic here
        }

        resolve(store.authAndRetrieveClient(user))
    })


}


function authArtist(username, password){
    //
    return new Promise((resolve, reject) =>{
        if(!username || !password){
            console.error('userController: authArtist: No hay username o password')
            reject('Datos incorrectos')
            return false
        }

        resolve(store.authAndRetrieveArtist(username, password))
    })


}


//exportamos las funciones
module.exports = {
    authClient,
    authArtist
}
