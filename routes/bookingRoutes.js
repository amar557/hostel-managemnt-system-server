const express = require('express');
const router = express.Router();
const multer = require('multer');
const bookingController = require('../controllers/bookingController');

const upload = multer({ dest: 'uploads/' });

router.post('/book', upload.single('payment_screenshot'), bookingController.bookSeats);

module.exports = router;
