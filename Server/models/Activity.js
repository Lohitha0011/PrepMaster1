const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    timestamp: { type: String, required: true },
});

module.exports = mongoose.model('Activity', ActivitySchema);