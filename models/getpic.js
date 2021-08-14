'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PicModel = Schema({
    image: {type: String},
    title: {type: String},
    description: {type: String},
    path: {type: String},
    created_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('picmodel', PicModel);