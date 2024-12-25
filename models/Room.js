const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' },
    name_or_number: String,
    number_of_beds: Number,
    number_of_occupied_beds: Number,
    rent_per_head: Number,
});

module.exports = mongoose.model('Room', roomSchema);
