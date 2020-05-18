const mongoose = require('mongoose');
const { Schema } = mongoose

const Viaje = new Schema({
    titulo:String,
    precio:String,
    FechaIda:Date,
    FechaVuelta:Date,
    imagen:String,
    disponibles:String,
    descripcion:String
})





module.exports = mongoose.model('viaje', Viaje)