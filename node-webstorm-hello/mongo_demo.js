const mongoose = require('mongoose');

// 1. Connect to a DB
mongoose.connect('mongodb://localhost:27017/moviestore')
    .then(() => {
        console.log('DB Connected')
    })
    .catch((err) => {
        console.log('DB Not Connected')
    })

// 2. Create Schema for a Movie
const movieSchema = new mongoose.Schema({
    name: String,
    genre: [String],
    year: Number
})

// 3. Generate a Model from this Schema
const Movie = mongoose.model('Movie', movieSchema);

// 4. Create an object as per the defined schema
let movie = new Movie({
    name: 'Harry Potter and the Deathly Hallows Part 1',
    genre: ['magic', 'fantasy', 'thriller'],
    year: 2013
});

// 5. SAVE it to DB
async function createMovie(movie){
    const result = await movie.save();
    console.log(result);
}

createMovie(movie);

// Alternate Implementation
// movie.save()
//     .then((doc) =>{
//         console.log(doc);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
