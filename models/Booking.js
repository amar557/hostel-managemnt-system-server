const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    father_name: String,
    address: String,
    contact_number: String,
    number_of_seats: Number,
    payment_screenshot: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
