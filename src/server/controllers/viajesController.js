const Viaje = require('../models/Viajes');
exports.mostrarViajes =  async (req, res) => {
    const viajes = await Viaje.find()
    res.render('viajes', {
        pagina: "Proximos viajes",
        viajes: viajes
    })
}

exports.mostrarViaje  =  async (req, res) => {
    const viaje = await Viaje.findOne({ _id: req.params.id })
    res.render('viaje', {
        viaje
    })
}