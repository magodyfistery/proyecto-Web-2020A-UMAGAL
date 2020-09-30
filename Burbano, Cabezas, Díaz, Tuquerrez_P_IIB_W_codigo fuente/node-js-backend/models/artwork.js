'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var ProjectSchema=Schema({
    name: String,
    description: String,
    username: String,//category
    id_artist:String,//langs
    year:Number,
    image:String
});
//mongoose tima el 1er parametro lo pone en minusculas y en plural
//projects guanda en la bdd
module.exports=mongoose.model('Artworks',ProjectSchema);