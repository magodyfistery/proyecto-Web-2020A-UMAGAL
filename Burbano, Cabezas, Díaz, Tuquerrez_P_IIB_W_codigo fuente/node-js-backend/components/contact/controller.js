//define lo que sucede con la lógica de negocio

const store = require('./store')


function addContactRequest(name, email, contact_phone){
    //
    return new Promise((resolve, reject) =>{
        if(!name || !email || !contact_phone){
            console.error('contactController: addContactRequest: No hay nombre, correo o telefono de contacto')
            reject('Datos incorrectos')
            return false
        }

        const request = {
          name: name,
          email: email,
          contact_phone: contact_phone,
          status: 0 // sin atender
          // more logic here
        }

        resolve(store.addContactRequest(request))
    })


}



//exportamos las funciones
module.exports = {
    addContactRequest
}
