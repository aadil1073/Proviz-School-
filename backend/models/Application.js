const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    statement: { type: String, required: true },
    submissionTime: { type: Date, default: Date.now } 
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
