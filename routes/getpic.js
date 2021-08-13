'use strict'

const {Router} = require('express');
const getpicControlller = require('../controllers/getpic');

const router = Router();

//PETICIONES
router.get('/', getpicControlller.home);
router.get('/upload', getpicControlller.upload);
router.post('/upload', getpicControlller.imageUploaded);
router.get('/delete', getpicControlller.delete);

module.exports = router;