const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Person', Schema);