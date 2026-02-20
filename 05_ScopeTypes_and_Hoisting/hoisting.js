console.log("*********************** Hoisting of var ***********************");

var a = 10;
console.log("var a :", a);

console.log("var b :", b);
var b = 20;

/**
    Behind the scene :

    var b;           // hoisted
    console.log(b);  // undefined
    b = 20;

 */
console.log("*********************** Hoisting of const ***********************");

const c = 30;
console.log("const c : ", c);

// console.log("const d : ",d); // Uncaught ReferenceError: Cannot access 'd' before initialization
const d = 40;

/**
    const hoist hota hai lekin Temporal Dead Zone (TDZ) me rehta hai
    isliye initialization se pehle ascess nahi kr skte
*/

console.log("*********************** Hoisting of let ***********************");

let e = 50;
console.log("let e : ", e);

// console.log("let f : ",f);  //Uncaught ReferenceError: Cannot access 'f' before initialization
let f = 60;

console.log("*********************** Hoisting inside Block ***********************");

if (true) {
    var x1 = 100;
}
console.log(" var x1 hoisting inside if block : ", x1);

{
    let x2 = 200;
}
// console.log(" let x2 hoisting inside block : ",x2); // Uncaught ReferenceError: x2 is not defined

{
    const x3 = 300;
}
// console.log(" const x3 hoisting inside block : ",x3);   // Uncaught ReferenceError: x3 is not defined


console.log("*********************** Hoisting of a Function ***********************");

function greet() {
    console.log("Hello all");
}
greet();

greet_again();
function greet_again() {
    console.log("Hello all again");
}

console.log("*********************** Hoisting of a Function Expression ***********************");


var sayHello = function greetFunEx() {
    console.log("Hello FunEx var");
}
sayHello();
// greetFunEx();   // Uncaught ReferenceError: greetFunEx is not defined, Example below of factorial :

var factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);     // fact function is calling inside the function body working properly
};

console.log(factorial(5)); // 120



// sayHi();    //Uncaught TypeError: sayHi is not a function
var sayHi = function greetFunEx_again() {
    console.log("Hello FunEx again");
}



// var greetFunEx_again;  // undefined
// greetFunEx_again();    // undefined is not a function ❌


/**
let sayHello = function greetFunEx(){
    console.log("Hello FunEx let");
}
sayHello();

sayHi();    //Uncaught ReferenceError: Cannot access 'sayHi' before initialization
let sayHi = function greetFunEx_again(){
    console.log("Hello FunEx again");
}
*/

/**
const sayHello = function greetFunEx(){
    console.log("Hello FunEx const");
}
sayHello();

sayHi();    //Uncaught ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function greetFunEx_again(){
    console.log("Hello FunEx again");
}
*/

console.log("*********************** Hoisting of a Arrow Function ***********************");

/**
let hello = () => {
    console.log("Hello AF let")
}
hello();

// namaste();  // Uncaught ReferenceError: Cannot access 'namaste' before initialization
let namaste = () => {
    console.log("Namaste")
}
*/


var hello = () => {
    console.log("Hello AF var")
}
hello();

// namaste();  // Uncaught TypeError: namaste is not a function
var namaste = () => {
    console.log("Namaste")
}


/**
const hello = () => {
    console.log("Hello AF const")
}
hello();

namaste();  // Uncaught ReferenceError: Cannot access 'namaste' before initialization
const namaste = () => {
    console.log("Namaste")
}
*/

console.log("*********************** Hoisting of class ***********************");

class Person1 { }
new Person1();

// new Person2();  // Uncaught ReferenceError: Cannot access 'Person2' before initialization
class Person2 { }

console.log("*********************** Hoisting inside Function Scope ***********************");

var x = 10;

function test() {
    console.log(x); // undefimed
    var x = 20;
}

test();

/**
    Reason:

    function test(){
    var x;          // hoisted
    console.log(x); // undefined
    x = 20;
}

*/

console.log("*********************** Global Object Behavior ***********************");

/**
    var global object ka property ban jata hai, 
    lekin let aur const sirf global scope me rehte hain— window pe attach nahi hote.
*/
var m = 20;
console.log("value of var m with window.m : ", window.m);    // 20

let n = 40;
console.log("value of let n with window.n : ", window.n);    // undedfined

const p = 60;
console.log("value of const p with window.p : ", window.p);  // undedfined