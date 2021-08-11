'use strict'

const {Router} = require('express');
const getpicControlller = require('../controllers/getpic');

const router = Router();

//PETICIONES
router.get('/', getpicControlller.home);

module.exports = router;