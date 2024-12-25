const Hostel = require('../models/Hostel');

exports.createHostel = async (req, res) => {
    const hostel = new Hostel(req.body);
    await hostel.save();
    res.status(201).send('Hostel created successfully.');
};

exports.getAllHostels = async (req, res) => {
    const hostels = await Hostel.find();
    res.status(200).json(hostels);
};
