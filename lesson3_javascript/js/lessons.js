console.log('Initiating lessons');
debugger;
/*
    var
        has global scope
        no explicit or strict datatype rather, data type is inferred on the go
        this behavior makes JavaScript a Loosely Typed Language in contrast to C++,
        C#, JAVA etc. which are strictly type languages
*/

var x = 10;

{
    // the curly braces denote a block scope
    // currently, since 'x' is declared/initialzied outside any curly braces therefore,
    // is accessible everywhere due to its inherent global scope.
    console.log('Original Value', x);
    x = 20;
    console.log('Chnaged inside scope', x);
    // This behaviour creates alot of problem as you might change values accidently which 
    // have global scope
}


/*
    let
        has restricted scope
        but if declared outside of any block then they have global scope as well
        were introduced in 2015 with ES6 standard
*/

let y = 5;

{
    // no we are in different scope than thot of 'y'
    // let's see if it accessible
    console.log(y);
    // output is: 5

    // Now, if declare 'z' here then and try to access it outside the block then ... ?
    let z = 100;
}

// console.log(z);
//output is: ReferenceError: z is not defined

/*
    const
        acts as a constant which is not allowed to be changed if it is of type "number or string"
        if declared outside of any block then they have global scope
        were introduced in 2015 with ES6 standard

        However, one can change properties of a constant object, arrays etc. 
*/

const author = 'Mohsin';
// author = 'Zafar' //Error: Assignment to constant variable
const sampleArray = [1, 2, 3, 4, 5];
const sampleObject = {firstName: 'Raza', lastName: 'Samar'};

{
    console.log(author);
    console.log(sampleArray);
    sampleArray[2] = 10;
    console.log(sampleArray);
    console.log(sampleObject);
    sampleObject.lastName = 'Hassan';
    console.log(sampleObject);

}


// Declarations Allowed/Not Allowed

/*
var c1 = 2;       // Allowed

let c1 = 3;       // Not allowed : Identifier 'c1' has already been declared

{
  var c1 = 4;   // Allowed
  let c1 = 5   // Not allowed
}

// -------------------------------
let c2 = 2;       // Allowed
var c2 = 3;       // Not allowed

{
  let c2 = 4;   // Allowed
  var c2 = 5;   // Not allowed
}
// -------------------------------
let c3 = 2;       // Allowed

{
  let c3 = 3;   // Allowed
}

{
  let c3 = 4;   // Allowed
}
*/

/*
// -------------------------------
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}
// -------------------------------
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed
// -------------------------------
{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}
// -------------------------------
const x = 2;       // Allowed
{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/

/*
// -------------------------------
// Hoisting not allowed for let and const
c4 = 'Defined After';
console.log(c4); //ReferenceError: Cannot access 'c4' before initialization
let c4; 

c5 = 'Defined After';
console.log(c5); 
const c5; //SyntaxError: Missing initializer in const declaration

c6 = 'Defined After';
console.log(c6); 
var c6; //Allowed and runs perfectly
*/

function performComputation(){
  // some computation
  return true;
}

let val = -3;

result = (val > 0) && (performComputation());


let c = 'ABC';      // String
let d = 123;        // Number
let e = 100.112;    // Number
let f = true  ;     // Boolean
let g;              // Undefined

let sArray = [1, 2, 3, 4, 5];                           // Object
let sObject = {firstName: 'Raza', lastName: 'Samar'};   // Object


// Types of Function Declaration
// Arrow Notation - introduced in ES6
let sfunc = () => {                                     
    console.log('sample');
}

function sfunc2() {
    console.log('sample');
}

let sfunc3 = function(){
    console.log('sample');
}

// sfunc3();
(sfu = () => {
  console.log('nameless');
}());

// document.onload
debugger;
// With Args and Default Values
function sfunc4(dval=4) {
    console.log(dval);
}
sfunc4();

function argsFu() {
    // Every Function has a default argument called "arguments"
    console.log(arguments); // Output is: ['one', 'two']
}
argsFu(['one', 'two'], 'omar', 'musa');

// By value and By Reference

let sob = {firstName: 'Raza', lastName: 'Samar'};   // Object
let v1 = 10, v2 = 20;
function argsFuChange(a, b, ob){
    a = 20;
    b = 30;
    ob.lastName = 'Hassan';
}

// v1 and v2 will be passed to the function as "values"
// but sob will be passed to the function as "reference"
argsFuChange(v1, v2, sob);
console.log(v1); // No change
console.log(v2); // No change
console.log(sob); // last name changed

debugger;
// Self Invocation of Functions
// this means that the function will be called automatically
// as soon as the scripts compiles
(
    function () {
        console.log('self invocation');
    }()
);


/*
    Use of: call
    
    In the examples below we shall use the keyword "this"
    Like other Object Oriented Languages "this" points to 
    or refers to an owner which may be an object, function, window etc.
*/

let animal = {
    kind: 'generic',
    sound: '______',
    speak: function () {
      return this.kind + ' says ' + this.sound ;
    }
  }

console.log(animal.speak()); // Output: generic says ______

let dog = {
    kind: 'husky',
    sound: 'whuff'
} 
console.log(animal.speak.call(dog)); // Output: husky says whuff
// What we have done is we called function from one object
// with reference to the other


/*
    function closure:
        A closure is the combination of a function bundled together (enclosed) 
        with references to its surrounding state (the lexical environment). 
        In other words, a closure gives you access to an outer function’s scope 
        from an inner function. In JavaScript, closures are created every time 
        a function is created, at function creation time.

    Reference:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      // alert(name); // use variable declared in the parent function
    }
    displayName();
  }
init();


function makeAdder(x) {
    return function(y) {
      return x + y;
    };
}
  
var add5 = makeAdder(5); 
// Here, x has been assigned the value of 5
// and after that another function has been returned
// now add5 has reference to function(y){return x+y};
var add10 = makeAdder(10);
// Here, x has been assigned the value of 10
// and after that another function has been returned
// now add5 has reference to function(y){return x+y};

console.log(add5(2));  // 7
// Since, add5 now points to function(y){return x+y};
// therefore, giving 2 as an argument will set y=2
// previously, x was definced as 5, so x+y = 5+2 = 7
console.log(add10(2)); // 12
// Since, add10 now points to function(y){return x+y};
// therefore, giving 2 as an argument will set y=2
// previously, x was definced as 10, so x+y = 10+2 = 2


/*
  Use of: For Loops

    Conventional Syntax:

      for (statement 1; statement 2; statement 3) {
        // code block to be executed
      }
    
      statement 1: initialization
      statement 2: condition
      statement 3: increment/decrement
*/
let text = '';
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
console.log(text);

/*
  Use of: For Loops

    for in - loop syntax:

      for (key in object) {
        //code
      }
      
      for (index in array) {
        //code
      }
*/

for (key in sObject){
  console.log(sObject[key]);
}

for (i in sArray){
  console.log(sArray[i]);
}

/*
  Use of: For loops

    forEach loop:
      - this loop is used to iterate over arrays
      - it is function attached with every array and
      - we can provide a "callback function" which has three
      - arguments to iterate over the array
      - the arguments are;
        1. item value
        2. item index
        3. array itself

*/

let s2array = ['John', 'Harvey', 'Oliver'];
s2array.forEach(iterator);

function iterator(value, index, array){
  let text = `Index: ${index} \t Value: ${value}`;
  // `` are called backticks and usage of ` ${}` is called template leteral
  // because we are using placeholders for actual values
  // which are replaced dynamically
  console.log(text);
}

/*
  Use of: For loops

    for of loop:
      - this loop is used to iterate over iterable objects
      - like arrays, strings, NodeLists, HTMLCollections etc. 
      
    for (variable of iterable) {
        //code
      }
*/

let s3array = [1, 2, 'Alpha', 'Beta'];

for (let x of s3array){
  console.log(x);
}

let s4string = 'A sample String';

for (let x of s4string){
  console.log(x);
}


/*
  Use of: Regular Expressions

    The base of regular expressions come from 
    theory of automata or compiler construction.

    The main idea is to do pattern matching for strings
    so that an input string may be validated. This helps 
    us avoid any errors that may occur due to invalid strings.

    This is mostly done dynamically when a user inputs some 
    values in form elements and before an HTTP request is made
    to the server.
*/

// Assume an input from an HTML textfield
let inputs = ['38403-1234567-0',
              '38403-1234567-0 ',
              '38403-1234567-0 12345-1234567-0',
              'AB403-1234567-0'
            ]
// To validate a CNIC of the form xxxxx-xxxxxxx-x
// we use regex. Here 'x' can be number from 0-9

let regEx = /^(([0-9]{5})(-)([0-9]{7})(-)([0-9]{1})){1}$/;

for (inp of inputs){
  if (regEx.test(inp) === true){
    console.log(`String: ${inp} is match for the pattern`);
  } else {
    console.log(`String: ${inp} is not a match for the pattern`);
  }
}

/*
  Objects vs. JSON (JavaScript Object Notation)

    Essentially everything in JS is an object and the primitive
    datatypes such as string, number, boolean can be made objects
    by using 'new' keyword. 

    Each JS object can have properties and methods but JSON is only a
    key/value pair iterable.

    More at: https://stackoverflow.com/questions/8294088/javascript-object-vs-json
*/
let jsObj = {
  name: 'Mohsin Zafar',
  age: 25,
  saySomething: function(){
    console.log(this.name + ' is ' + this.age + ' years old.')
  }
}
// See the difference b/w keys in both declarations
// JSON has quotes on keys but object properties don't have quotes
// Also JSON can't have functions
let jsJSON = {
  'name': 'Mohsin Zafar',
  'age': 25,
}

jsObj.saySomething();
console.log(JSON.stringify(jsObj)); // will remove the function decalartion
console.log(jsJSON);

// -------------------------------------------------------------------------
// Advance Concepts
// -------------------------------------------------------------------------


/*
  Use of: spread operator / rest operator

    introduced with ES6, the spread operator allows for the 
    spread of values of an iterable object

    spread and rest operator both are represented by -> ...

    Rest syntax looks exactly like spread syntax. 
    In a way, rest syntax is the opposite of spread syntax.
    Spread syntax "expands" an array into its elements, 
    while rest syntax collects multiple elements and 
    "condenses" them into a single element.

*/

let i1 = [1, 2, 3, 4];
let i2 = ['A', 'B', 'C', 'D'];
// Assume we wanted to combine both arrays
// 1. Solution using .concat method
console.log(i1.concat(i2))
// 2. Using spread operator
console.log([...i1, ...i2])

function samForSpread(name, height, weight){
  text = `Name: ${name}\nHeight: ${height}\nWeight: ${weight}`;
  console.log(text);
}

let i3 = ['Bloom', 80, 65];
samForSpread(...i3);

function samForRest(...anyNumOfArgs){
  let sumOfSquares = 0;
  sumOfSquares = anyNumOfArgs.reduce((acc, currVal) =>{
    return acc + (currVal**2) ;
  }, 0);
  return sumOfSquares;
}
// You can observe we can pass any number of arguments 
// and they are handled as an
// array rather than individual elements
console.log(samForRest(2, 3, 4));
console.log(samForRest(2, 3, 4, 5, 6));
console.log(samForRest(20, 4, 5, 9, 11, 13));


/*
  Use of: Function Callbacks

    A callback function is a function passed 
    into another function as an argument, 
    which is then invoked inside the outer 
    function to complete some kind of routine or action.

    Mostly used in Asynchronous Programming, the idea
    is to handle something or a response automatically
    whenever a result is computed/recieved. In this way
    we don't need to wait for a time period or block 
    execution of code.
*/

function calSumOfSqrt(vals){
  let acc = 0;
  for (v of vals){
    acc += Math.sqrt(v);
  }
  return acc;
}

function disp(res){
  console.log(`The callback function got ${res} as the Result`);
}

function funcA(vals, refFuncB, refFuncC){
  let sumOfSqrt = refFuncB(vals);
  refFuncC(sumOfSqrt);
}

funcA([2,4,6,8], calSumOfSqrt, disp);

/*
  Functions as Blueprints/Objects

    Before ES6, functions were used as objects or blueprints 
    which in other object oriented languages are called classes.

    This way of declaring blueprint is called 
    "object constructor function"
*/

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.introduce = ()=>{
    return 'I am ' + this.firstName + ' ' + this.lastName;
  }
}

Person.prototype.salary = function(basicSalary){
  return basicSalary + 150*1000;
}

function Engineer(first, last, age, eye, field) {
  // Inheriting from Person 
  Person.call(this, first, last, age, eye)
  // Property explicit to Engineer
  this.field = field;
}

Engineer.prototype = Object.create(Person.prototype);
Object.defineProperty(Engineer.prototype, 'constructor', {
  value: Engineer,
  enumerable: false,
  writable: true });

// Let's make function an object using "new" keyword;
let p1 = new Person(
  'Tahir',
  'Imran',
  28,
  'blue'
)
console.log(p1)



/*
  Classes:
    Introduced with JavaScript ES6. Now the old practice of writing
    function prototypes and constructor functions can be avoided
    with an approach that is synonymous to all object oriented languages
*/
class Mammal {
  constructor(kind, height, weight) {
    this._kind = kind;
    this._height = height;
    this._weight = weight;
  };
  get Kind() {
    return this._kind;
  };
  set Kind(kind) {
    this.kind = kind;
  };
  example(){
    return 'nothing here!'
  }
  static something = 'Stat'
  static statFunc (){
    return 'Static Function!'
  }
}

class Human extends Mammal {
  constructor(height, weight, complexion, nationality){
    super('Human', height, weight);
    this._complexion = complexion;
    this._nationality = nationality;
  }
  subClassExample (){
    return 'something concrete here!'
  }
}

let mam = new Mammal();
let hum = new Human('180', '75', 'brown', 'pakistani');

const btn = document.querySelector('#demobtn');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

// Script to stop Google Colab Runtime from disconnecting

// var startClickConnect = function startClickConnect(){
//   var clickConnect = function clickConnect(){
//       console.log("Connnect Clicked - Start");
//       document.querySelector
//       ("#top-toolbar > colab-connect-button")
//       .shadowRoot
//       .querySelector("#connect")
//       .click();
//       console.log("Connnect Clicked - End"); 
//   };

//   var intervalId = setInterval(clickConnect, 60000);

//   var stopClickConnectHandler = function stopClickConnect() {
//       console.log("Connnect Clicked Stopped - Start");
//       clearInterval(intervalId);
//       console.log("Connnect Clicked Stopped - End");
//   };

//   return stopClickConnectHandler;
// };

// var stopClickConnect = startClickConnect();

