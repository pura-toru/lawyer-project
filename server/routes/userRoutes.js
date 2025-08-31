const controller = require('../controllers/user.js')
const express = require('express');
const router = express.Router();


router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;