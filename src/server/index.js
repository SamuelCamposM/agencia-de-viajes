//importando express 
const dotenv = require('dotenv')
dotenv.config({ path: 'variables.env' })
const express = require('express')
const routes = require('./routes/routes')
const path = require('path')
const configs = require('./config/index')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require("./config/database")

//configurar express
const app = express()

//habilitar motor de plantillas

app.set('view engine', 'pug')
//añadir las vistas 
app.set('views', path.join(__dirname, './views'))


//cargar una carpeta statica llamada public
app.use(express.static(path.join(__dirname, '../public')));

//validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')]

//creamos la variable para el sitioWeb
app.locals.titulo = config.nombreSitio

//muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date().getFullYear()
    app.locals.FechaActual = fecha
    app.locals.ruta = req.path
    console.log(req.path)
    return next();
})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
//cargar las rutas
app.use('/', routes)
//puerto y host  para la app
app.set('host', process.env.HOST || '0.0.0.0')

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'),app.get('host'), () => {
    console.log(`server is listening at ${app.get('port')} ${app.get('host')}`)
})
