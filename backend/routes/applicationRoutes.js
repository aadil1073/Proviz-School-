const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Route to get all applications
router.get('/', async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (err) {
        res.status(400).json({ message: "Error fetching applications" });
    }
});

// Route to create a new application
router.post('/', async (req, res) => {
    const { name, phoneNumber, email, statement } = req.body;

    try {
        const newApplication = new Application({
            name,
            phoneNumber,
            email,
            statement,
            submissionTime: new Date() 
        });
        await newApplication.save();
        res.status(201).json({ message: "Application submitted successfully" });
    } catch (err) {
        res.status(400).json({ message: "Error submitting application", error: err });
    }
});

module.exports = router;
