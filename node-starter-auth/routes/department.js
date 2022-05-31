const {Department} = require('../models/department');
const mongoose = require('../db/connection');
const express = require('express');

const router = express.Router();

// Fetch All Departments
router.get('/', async (req, res) => {
    let departments = await Department.find();
    res.status(200).send(departments);
});

// Fetch Department by id
router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let department = await Department.findOne({id});
    res.status(200).send(department);
});

// Create new Department
router.post('/', async (req, res) => {
    let department = new Department({
        deptName: req.body.name,
        description: req.body.description,
        subDepartment: req.body.subDepartment
    });

    let dbResponse = await department.save();

    res.status(201).send(dbResponse);

});

// Update a Department
router.put('/:id', async (req, res) => {

});


// Delete a Department
router.delete('/:id', (req, res) => {

});


module.exports = router;

