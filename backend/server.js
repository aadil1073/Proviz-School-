require('dotenv').config();  // To load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB", err));

// Routes
app.use('/api/applications', applicationRoutes);  // Application form routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
