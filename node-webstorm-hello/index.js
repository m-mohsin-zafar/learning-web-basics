
// Imports
const express = require('express');
const movies = require('./routes/movies');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize Express App
const app = express();
// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
// app.use(function (req, res, next) {
//     // something
//     next();
// })
app.use('/api/v1/', movies);

const PORT = process.env.PORT || 3000;

// Default Route
app.get('/', (req, res)=> {
    res.status(200).send('Server up and Running...');
})


// Start a listener
app.listen(PORT, () => console.log('Server ready'))
