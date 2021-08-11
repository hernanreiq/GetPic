'use strict'

const express =  require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');

const app = express();

// ARCHIVO DE RUTAS
var getpic_routes = require('./routes/getpic');

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES (Procesan información antes de llegar a las rutas)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) // Entender los datos enviados por los formularios
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'))

//RUTAS
app.use('/', getpic_routes);

//EXPORTAR
module.exports = app;