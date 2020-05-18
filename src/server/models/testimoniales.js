const mongoose = require('mongoose');
const { Schema } = mongoose

const Testimonial = new Schema({
    nombre:String,
    correo:String,
    mensaje:String

})

module.exports = mongoose.model('testimonial', Testimonial)