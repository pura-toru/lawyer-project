const controller = require('../controllers/user.js')
const express = require('express');
const router = express.Router();


router.post('/', controller.register);
router.post('/', controller.login);

module.exports = router;