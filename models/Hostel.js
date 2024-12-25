const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number_of_bedrooms: Number,
    number_of_beds: Number,
    number_of_occupied_beds: Number,
    number_of_irons: Number,
    number_of_washrooms: Number,
    address: String,
});

module.exports = mongoose.model('Hostel', hostelSchema);
