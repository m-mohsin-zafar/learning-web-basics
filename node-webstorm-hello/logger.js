
const url = 'http://www.xyz.com/api/v1/log';

function log(message) {
    console.log(message)
    // Send a POST request to server at the specified URL
}

module.exports.log = log;
