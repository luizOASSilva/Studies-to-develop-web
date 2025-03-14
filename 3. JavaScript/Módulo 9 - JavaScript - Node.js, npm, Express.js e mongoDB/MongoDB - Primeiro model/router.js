const express = require('express');
const router = express.Router();
const { home } = require('./src/controllers/homeController');

router.get('/', home);

module.exports = router;
