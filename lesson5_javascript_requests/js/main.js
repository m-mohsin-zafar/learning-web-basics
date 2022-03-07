import {
    parseForm
} from './parse_form.js';

console.log('Entered - main.js');

var btn = document.querySelector('#subformbtn');
var getdemobtn = document.querySelector('#getbtn');
var postdemobtn = document.querySelector('#postbtn');

function getConfirmation() {
    debugger;
    let formEl = document.getElementById('pizzaorderform').elements;
    let data = parseForm(formEl);
    console.log(data);
};

function getData() {
    /*
    // 1. XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // 2. Setup the Request
    xhr.open('GET', 'https://reqres.in/api/users');
    // 3. Setting up a response type to expect/parse
    xhr.responseType = 'json';
    // 4. Setting up a callback
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
        let output_el = document.getElementById('preformattedtext');
        var text = ''
        for (let x of data.data) {
            text += x.first_name + '\n'
        }
        output_el.innerText = text;
    };
    // 5. Make the Request
    xhr.send();
    */

    // Let's change into ...
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
}

function sendData(param) {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in'
            // password: 'pistol2'
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
}

async function getData2(){

    try {
        const response = await sendHttpRequest('GET', 'http://127.0.0.1:5000/api/v1/books')
        console.log(response)    
    } catch (err) {
        console.log(err)
    }
    
}

btn.addEventListener('click', getConfirmation);
getdemobtn.addEventListener('click', getData2);
postdemobtn.addEventListener('click', sendData);

function sendHttpRequest(method, url, data) {
    // Make a promise object
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        // callback; we need it because we don't know when we shall get a result
        xhr.onload = setTimeout(() => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
            // resolve(xhr.response);
        }, 16000);

        xhr.onerror = () => {
            reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
}

console.log('Exited - main.js');


// Function Callbacks
// We pass a function as an argument in another function
// function A --- function B
// We can pass function A as an argument to function B
// Function is essentially an object

// 129 -> 116 -> a=11, b=5, func=multiply() as a reference, dis=disp()

function sum(a, b, func, dis){
    let res = a + b;  // res=16
    func(res, dis);  //res=16, dis=disp(), to line 125
}

function disp(val){ //val=80
    console.log(val);
}
// val = 16, func = disp()
function multiply(val, func){
    func(val * 5);  // disp(16 * 5 = 80), to line 121
}

sum(11, 5, multiply, disp);

// function vehicle (name, model){
//     this.name = name;
//     this.model = model;
// }

class vehicle{
    constructor(model, name){
        this._model = model;
        this._name = name;
    }
    get Model(){
        return this._model;
    }
    set Model(model){
        this._model = model;
    }
    greetings(){
        return 'Hellow World!'
    }
}

class Bike extends vehicle{
    constructor(model, name){
        super(model, name)
    }
}


let vh1 = new Bike('Toyota', '2021');
console.log(vh1);