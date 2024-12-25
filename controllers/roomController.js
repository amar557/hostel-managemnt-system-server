const Room = require('../models/Room');

exports.createRoom = async (req, res) => {
    const { hostelId } = req.params;
    const room = new Room({ ...req.body, hostel: hostelId });
    await room.save();
    res.status(201).send('Room created successfully.');
};

exports.getAllRooms = async (req, res) => {
    const { hostelId } = req.params;
    const rooms = await Room.find({ hostel: hostelId });
    res.status(200).json(rooms);
};

exports.getRoomDetails = async (req, res) => {
    const { roomId } = req.params;
    const room = await Room.findById(roomId).populate('hostel');
    res.status(200).json(room);
};
