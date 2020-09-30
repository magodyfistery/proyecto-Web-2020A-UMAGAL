const mongoose = require('mongoose')
const Schema = mongoose.Schema; //una de las clases que más se van a utilizar

const mongoDBTablesNames = require("../parameters").mongoDBTablesNames

const mySchema = new Schema({

  name: {
      type: String,
      required: true,
  },
  date: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
  },
  url_principal_img: {
      type: String,
      required: true,
  },
  is_fair: {
      type: Boolean,
      required: true,
  },
  artists: {
      type: Array,
      required: true,
  }


});


const model = mongoose.model(mongoDBTablesNames.exhibition, mySchema)  //tabla, esquema

module.exports = model
