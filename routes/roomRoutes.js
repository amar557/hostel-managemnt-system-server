const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/:hostelId', roomController.createRoom);
router.get('/:hostelId', roomController.getAllRooms);
router.get('/details/:roomId', roomController.getRoomDetails);

module.exports = router;
