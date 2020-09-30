//toda la lógica de almacenamiento
const ModelContact = require('../../business_models/contact')
const messagesWellKnowed = require("../../parameters").MESSAGES_WELL_KNOWED


function addContactRequest(request){
  return new ModelContact(request).save()
}


module.exports = {
    addContactRequest
}
