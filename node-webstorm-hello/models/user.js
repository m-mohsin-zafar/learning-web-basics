const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String
})

module.exports = mongoose.model('User', userSchema)
