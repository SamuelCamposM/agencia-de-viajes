const Testimonial = require('../models/testimoniales')
exports.mostrarTestimoniales =   async (req, res) => {
    const testimoniales = await Testimonial.find()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}
exports.agregarTestimonial = async (req, res) => {
    let { nombre, correo, mensaje } = req.body

    let errores = []

    if (!nombre) {
        errores.push({ 'mensaje': 'agrega tu nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agregar tu correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'agrega tu Agregar tu mensaje' })
    }

    if (errores.length !== 0) {
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        //almacenarlo en la base de datos
        const testimonial = await new Testimonial()
        testimonial.nombre = nombre,
            testimonial.correo = correo,
            testimonial.mensaje = mensaje;
        const datos = await testimonial.save()
        console.log(datos)
        res.redirect('/testimoniales')
    }
}