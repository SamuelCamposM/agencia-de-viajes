const Testimonial = require('../models/testimoniales')
const Viaje = require('../models/Viajes');
exports.queryHome =  async (req, res) => {
    const viajes = await Viaje.find().limit(3)
    const testimoniales = await Testimonial.find().limit(3)
    res.render('index', {
        clase: 'home',
        viajes,
        testimoniales
    })
}