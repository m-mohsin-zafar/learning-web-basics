const mongoose = require('mongoose');

// Schema Definition
const movieSchema = new mongoose.Schema({
    name: String,
    genre: [String],
    year: Number
})

// Export a Model for this Schema
module.exports = mongoose.model('Movie', movieSchema);
