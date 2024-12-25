// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

// Initialize app and middleware
const app = express();
app.use(express.json());
app.use(cors());
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hostel_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const userRoutes = require('./routes/userRoutes');
const hostelRoutes = require('./routes/hostelRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/users', userRoutes);
app.use('/hostels', hostelRoutes);
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
