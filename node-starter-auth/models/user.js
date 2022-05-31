const Joi = require('joi');
const mongoose = require('../db/connection');

// 1. Create User Schema i.e. the fields that shall be stored in db
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
});

// 2. Create Model using the schema.
const User = mongoose.model('User', userSchema);

// 3. Some code for validations
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(64).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    })

    return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;
