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
    }

});


const model = mongoose.model(mongoDBTablesNames.admin, mySchema)  //tabla, esquema

module.exports = model
