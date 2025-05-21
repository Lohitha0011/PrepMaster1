const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
    title: { type: String, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('Stat', StatSchema);