const express = require('express')
const router = express.Router()
const nosotrosController = require('../controllers/nosotrosController')
const homeController  = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')
//use responde todos los verbos http
router.get('/',homeController.queryHome)
router.get('/nosotros',nosotrosController.infoNosotros)
router.get('/viajes',viajesController.mostrarViajes)
router.get('/viajes/:id',viajesController.mostrarViaje)
router.get('/testimoniales',testimonialesController.mostrarTestimoniales)
router.post('/testimoniales', testimonialesController.agregarTestimonial)

module.exports = router;