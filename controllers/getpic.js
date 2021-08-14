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
        console.log(req.body)
        const image = new PicModel();
        image.title = req.body.title;
        image.description = req.body.description;
        image.image = req.file.filename;
        image.path = '/img/uploads/' + req.file.filename;
        res.status(200).send({message: image});
    },
    delete: function(req, res){
        res.status(200).render('delete');
    }
}

module.exports = controller;