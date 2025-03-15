const express = require('express');
const router = express.Router();
const homeController = require('./src/assets/controllers/homeController')

router.get('/', homeController.home);

module.exports = router;
