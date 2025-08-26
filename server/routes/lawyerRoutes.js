const express = require('express');
const router = express.Router();
const controller = require('../controllers/lawyerController.js') 

router.get('/', controller.getLawyers);
router.get('/:id', controller.getLawyerById);
router.post('/', controller.createLawyer);

module.exports = router;
