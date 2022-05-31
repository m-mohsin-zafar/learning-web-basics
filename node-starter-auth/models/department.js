const mongoose = require('../db/connection');

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 128,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 512,
    },
    subDepartment: [{
        type: String
    }]
});

const Department = mongoose.model('Department', departmentSchema);

exports.Department = Department;
