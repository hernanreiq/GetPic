'use strict'

const PicModel = require('../models/getpic');

var controller = {
    home: async function(req, res){
        const images = await PicModel.find();
        res.render('index', {images});
    },
    upload: function(req, res){
        res.status(200).render('upload');
    },
    imageUploaded: async function (req, res){
        const image = new PicModel();
        image.title = req.body.title;
        image.description = req.body.description;
        image.image = req.file.filename;
        image.path = '/img/uploads/' + req.file.filename;
        await image.save();
        res.status(200).send({message: image});
    },
    delete: function(req, res){
        res.status(200).render('delete');
    }
}

module.exports = controller;