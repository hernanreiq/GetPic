'use strict'

const PicModel = require('../models/getpic');
const path = require('path');
const {unlink} = require('fs-extra');

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
    viewProfile: async function(req, res){
        const {id} = req.params;
        const image = await PicModel.findById(id);
        res.render('profile', {image});
    },
    delete: async function(req, res){
        const { id } = req.params;
        const image = await PicModel.findByIdAndRemove(id);
        await unlink(path.resolve('./public' + image.path));
        res.redirect('/');
    }
}

module.exports = controller;