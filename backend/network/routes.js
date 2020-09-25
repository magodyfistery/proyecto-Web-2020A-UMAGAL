const express = require('express')
const user = require('../components/user/network')
const exhibition = require('../components/exhibition/network')
const contact = require('../components/contact/network')


const routes = function (server) {
    server.use("/api/user", user)  //todas las llamadas a message lo maneja message
    server.use("/api/exhibition", exhibition)
    server.use("/api/contact", contact)

}

//cada ves que llame a message va a llamar al componente de message por lo que se puede quitar eso de la primera parte de get y post -> /message qued como /
module.exports = routes
