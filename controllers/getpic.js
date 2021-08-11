'use strict'

const PicModel = require('../models/getpic');

var controller = {
    home: function(req, res){
        res.status(200).render('index');
    },
    upload: function(req, res){
        res.status(200).render('upload');
    },
    imageUploaded: function(req, res){
        res.status(200).send({message: "Imagen subida", image: req.file});
    }
}

module.exports = controller;