const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

router.post('/', hostelController.createHostel);
router.get('/', hostelController.getAllHostels);

module.exports = router;
