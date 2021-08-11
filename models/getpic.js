'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PicModel = Schema({
    image: String,
    title: String,
    description: String
});

module.exports = mongoose.model('picmodel', PicModel);