const Booking = require('../models/Booking');

exports.bookSeats = async (req, res) => {
    const { hostel, room, father_name, address, contact_number, number_of_seats } = req.body;
    const payment_screenshot = req.file.path;
    const booking = new Booking({
        hostel,
        room,
        father_name,
        address,
        contact_number,
        number_of_seats,
        payment_screenshot,
    });
    await booking.save();
    res.status(201).send('Room seat booked successfully.');
};
