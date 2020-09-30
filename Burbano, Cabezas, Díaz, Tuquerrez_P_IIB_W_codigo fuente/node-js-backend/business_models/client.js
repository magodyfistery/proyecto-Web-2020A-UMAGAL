const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mongoDBTablesNames = require("../parameters").mongoDBTablesNames

const mySchema = new Schema({

  username: {
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true,
  },
  name: {
      type: String,
      required: true,
  },
  date_of_birth: {
      type: String,
      required: true,
  },
  address: {
      type: String,
      required: true,
  },
  contact_phone: {
      type: String,
      required: true,
  },
  role: {
      type: String,
      required: false,
  }


});


const model = mongoose.model(mongoDBTablesNames.client, mySchema)  //tabla, esquema

module.exports = model
