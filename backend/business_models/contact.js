const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mongoDBTablesNames = require("../parameters").mongoDBTablesNames

const mySchema = new Schema({

  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
  },
  contact_phone: {
      type: String,
      required: true,
  },
  status: {
      type: Number,
      required: true,
  }

});


const model = mongoose.model(mongoDBTablesNames.contact, mySchema)  //tabla, esquema

module.exports = model
