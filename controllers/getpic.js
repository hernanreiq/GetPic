'use strict'

const PicModel = require('../models/getpic');

var controller = {
    home: function(req, res){
        res.status(200).render('index');
    }
}

module.exports = controller;