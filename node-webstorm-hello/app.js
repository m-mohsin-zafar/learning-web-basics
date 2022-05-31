// Entry Point

// Module Imports
const logger = require('./logger');
const Scientific = require('./scientific');
const fs = require('fs');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');
const http = require('http');
const mongoose = require('mongoose')
const db = require('./database');
const UserModel = require('./models/user');
const express = require('express')

/*
const sciFuncs = new Scientific();

sciFuncs.logarithm();
sciFuncs.cubeRoot();
*/

/*
// Sample usage of filesystem module
let fileContent = '';
fs.readFile('./dummy.txt', (err, data) => {
    if (err){
        console.log(err.message);
    }
    else if (data){
        fileContent = data.toString();
        console.log(fileContent);
    }
})

// Sample usage of OS Module
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());

// Sample usage of path module.
console.log(path.parse(__filename));
let newPath = path.join(path.parse(__filename).dir, 'data/images');
console.log(newPath);
*/

/*
// Sample Usage of EventEmitter
const emitter = new EventEmitter();

// 1. Event listener
emitter.on('Logging Message', ()=>{
    console.log('Event Captured ...');
})

// 2. Emit Event
emitter.emit('Logging Message');
*/

/*
// Scientific Class Event Emitter
const sciFuncs = new Scientific();
sciFuncs.on('sci-cal', () => {
    console.log('A scientific calculation was performed ...');
})


sciFuncs.logarithm();
sciFuncs.cubeRoot();
 */

// Sample Usage of http Module
/*
const hostname = '127.0.0.1';
const port = 3000;  // For deployments we use 8080 or 80443

const server = http.createServer((req, res) => {

    if (req.url === '/something'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Nothing!\n')
    }
    if ((req.url === '/') && (req.method === 'GET')){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World!\n')
    }
    if ((req.url === '/') && (req.method === 'POST')){
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(JSON.parse(data));
        })
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('POST Successful\n')
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`)
})
*/


// Creating a User
// let user = new UserModel({
//     fname: 'Jane',
//     lname: 'Doe',
//     email: 'def@xyz.com'
// });

/*
user.save().then(
    (doc) => {
        console.log(doc);
    }
).catch(
    (err) => {
        console.log(err);
    }
).finally(() => {
        mongoose.disconnect().then(() => {
            console.log('Connection Closed ...!');
        }).catch((err) => {
            console.log(err);
        });
    }
)
*/

/*
UserModel
    .find({
        fname: 'Jane'   // search query
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    }).finally(() => {
        mongoose.disconnect().then(() => {
            console.log('Connection Closed ...!');
        }).catch((err) => {
            console.log(err);
        });
    }
)
 */

function getAllUsers() {
    return UserModel.find()
}



const app = express()

app.get('/users', (req, res) => {
    getAllUsers().then((doc) => {
        res.send(JSON.stringify(doc));
    }).catch(err => {
        res.send(JSON.stringify(err));
    })

})

app.listen(3000, () => console.log('Server ready'))
