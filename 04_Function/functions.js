/** 
console.log("*************************************************");

function fun1(){
    console.log("Function one here")
}
fun1()

//--------------------------------------------------

function fun2(){
    return "Hello fun2 message here";
}
console.log(fun2());

console.log("*************************************************");

function fun3(name){
    return `hi this is ${name}`;
}

console.log(fun3("ram"));
console.log(fun3("shyam"));

//--------------------------------------------------

function fun4(a,b){
    a=a*b;
    b = a - b;
    return {a, b};
}

console.log(fun4(4,6));

console.log("*************************************************");

// Named Function Expression

let fact = function factorial(n){
    if(n===0) return 1;
    return n * factorial(n-1);
}

console.log(`Factorial of 5 = `,fact(5))

//--------------------------------------------------

let res = function(country){
    return `I love ${country}`;
}

console.log(res("India"));

console.log("*************************************************");

// Arrow function

const greet = () => "Welcome to arrow function section";    // No parameter arrow function
console.log(greet())

const cube = dig => `Cube of ${dig} is ${dig*dig*dig}`  // for single parameter function
console.log(cube(3));

const mul_res = (num1, num2) => {return num1*num2};     // for function having more than one parameter
console.log(mul_res(25,4));

console.log("*************************************************");

// IIFE ( immediately Invoked Function Expression) used for scope isolation

(function(){
    console.log("IIFE Execution done.")
})();

console.log("*************************************************");

// Callback Function

function test(cbf){
    console.log("Start");
    cbf();
}

test(function(){
    console.log("End");
});

//--------------------------------

function teacher(student){
    student();
}

teacher(function(){
    console.log("Present Ma'am");
});

//-----------------------------------

function sayHello(cbfn){
    cbfn();
}

sayHello(()=>console.log("Hello world"));

//-----------------------------------

function sayHi(clb_fn){
    return clb_fn();
}

sayHi(()=>console.log("Hi world"));

//-----------------------------------

function sayYo(clbk_fn){
    return clbk_fn();
}

let new_res = sayYo(()=>`Yo Yo Honey Singh`);
console.log(new_res);

//-----------------------------------

function abhivadan(name, cb_fn){
    cb_fn(name);
}

abhivadan("Ram", function(n){
    console.log("Jai Shree",n);
});

//-----------------------------------

function namaste(person, clbf){
    return clbf(person);
}

let namah = namaste("Krishna", (p1) => `jai shree ${p1}`);
console.log(namah);

//-----------------------------------

function color(a,b,op){
    return op(a,b);
}

let output = color(2,4,(x,y) => x+y);
console.log(output);

console.log("*************************************************");

// HOF without callback( Hogher Order Function ) : Either takes function as Argumaent or return a function

function multiplier(factor){
    return function(num){
        return num * factor;
    };
}

let dbl = multiplier(2);
console.log(dbl(5));

//--------------------------------------------------------

// HOF with callback
// HOF due to : operationn as an argument
// Callback due to : (x,y) => x - y

function operate(a, b, operation){
    return operation(a, b);
}

let result = operate(5, 2, (x,y) => x - y);
console.log(result);


console.log("*************************************************");

// Anonymous function [ mostly used in callbacks ]

setTimeout(function(){
    console.log("i am anonymous")
}, 3000);                           // 3000 means 3 seconds

*/


console.log("******************* IIFE + HOF + Callback Hell ******************************");

(function () {
    function login(username, password, callback_fun) {

        setTimeout(() => {
            console.log("Usernme : ")

            setTimeout(() => {
                console.log(username)

                setTimeout(() => {
                    console.log("Password : ")

                    setTimeout(() => {
                        console.log(password)

                        setTimeout(() => {
                            console.log("Validating....")

                            setTimeout(() => {
                                let areCorrectCred;
                                if (username === "Raja" && password === 112233) {
                                    areCorrectCred = true;
                                } else {
                                    areCorrectCred = false;
                                }
                                callback_fun(areCorrectCred);
                            }, 3000);
                        }, 1000);
                    }, 3000);
                }, 1000);
            }, 3000);
        }, 1000);
    }
    login("Raja", 112233, (okCred) => {
        if (okCred) {
            console.log("Login Sucessfull");
        } else {
            console.log("Login failed, Wrong Credentials");
        }
    })
})();
