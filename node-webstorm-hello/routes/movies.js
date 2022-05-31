
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const db = require('../database');
const Movie = require('../models/movie')

// Consider a resource called --> Movies

// CRUD Operations
// --------------------------------------
// 1. Get all movies
router.get('/movies', async (req, res) => {
    // 1. find all movies from DB
    let result = await Movie.find();

    res.setHeader('content-type', 'application/json');
    if (result.length === 0) {
        return res.status(200).send(JSON.stringify({'message': 'no movies yet!'}));
    }

    // return as a response
    res.status(200).send(result);
});

// 2. Get a specific movie
router.get('/movies/:id', async (req, res) => {
    // extract id from the incoming request
    const id = req.params?.id;
    // lookup a record against that id
    let result = await Movie.find({_id: id});
    // if not found return a 404 error message
    res.setHeader('content-type', 'application/json');
    if (result.length === 0) {
        return res.status(404).send(JSON.stringify({'message': 'The movie you are looking for is not there!'}));
    }
    // else we return the record/movie
    res.status(200).send(JSON.stringify(result));
});

// 3. Create/Add a new movie
router.post('/movies', async (req, res) => {
    // extract data from the body of incoming request
    const data = req.body;
    // we can validate the data
    const {error, value} = validateMovie(data);
    // if error return a 400 error message
    res.setHeader('content-type', 'application/json');
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // create an instance of Movie
    let movie = new Movie({
        name: data.name,
        genre: data.genre,
        year: data.year
    });
    // save this to the DB
    const result = await movie.save();
    // else we return the added record/movie
    res.status(200).send(result);
});

// 4. Update a movie information
router.put('/movies/:id', async (req, res) => {
    // extract id from the incoming request
    const id = req.params?.id;
    // lookup a record against that id
    let result = await Movie.findById(id);
    // if not found return a 404 error message
    res.setHeader('content-type', 'application/json');
    if (!result) {
        return res.status(404).send(JSON.stringify({'message': 'The movie you are looking for is not there!'}));
    }
    /// extract data from the body of incoming request
    const data = req.body;
    // we can validate the data
    const {error, value} = validateMovie(data);
    // if error return a 400 error message
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    // if no errors then we can update the record/movie
    result.name = data.name;
    result.genre = data.genre;
    result.year = data.year;

    let updated = await result.save();

    res.status(200).send(updated);
});

// 5. Delete a movie
router.delete('/movies/:id', async (req, res) => {
    // extract id from the incoming request
    const id = req.params?.id;
    // lookup a record against that id
    let result = await Movie.findById(id);
    // if not found return a 404 error message
    res.setHeader('content-type', 'application/json');
    if (!result) {
        return res.status(404).send(JSON.stringify({'message': 'The movie you are looking for is not there!'}));
    }
    // else delete the record/movie
    const deleted = result.delete();

    res.status(200).send(result);
});


function validateMovie(movie) {
    const movieSchema = Joi.object({
        name: Joi.string().min(4).required(),
        year: Joi.number().required(),
        genre: Joi.array().required()
    });
    return movieSchema.validate(movie);
}

module.exports = router;
