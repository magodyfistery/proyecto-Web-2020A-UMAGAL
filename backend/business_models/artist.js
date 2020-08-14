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
    artistic_name: {
        type: String,
        required: true,
    },
    videos: {
        type: Array,
        required: true,
    },
    photos_gallery: {
        type: Array,
        required: true,
    },
    styles: {
        type: Array,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }


});


const model = mongoose.model(mongoDBTablesNames.artist, mySchema)  //tabla, esquema

module.exports = model
