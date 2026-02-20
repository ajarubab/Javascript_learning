console.log("************************ Global Scope of variable ***********************");

let a = 20;

function a_inside_function() {
    console.log("value of a inside function body :", a);
}

a_inside_function();
console.log("value of a outside function body :", a);

console.log("*********************** Local/Functional Scope of variable ***********************");

function b_inside_function() {
    let b = 10;
    console.log("value of b inside function body :", b);
    var bb = 100;
    console.log("value of bb inside function body :", bb);
    const bbb = 1000;
    console.log("value of bbb inside function body :", bbb);
}

b_inside_function();

// console.log("value of b outside function body :",b);    // Uncaught ReferenceError: b is not defined
// console.log("value of bb outside function body :",bb);    // Uncaught ReferenceError: bb is not defined
// console.log("value of bbb outside function body :",bbb);    // Uncaught ReferenceError: bbb is not defined

console.log("*********************** Block Scope of variable ***********************");

// Block scope variable [ i.e. within {} only] but NOT APPLICABLE ON VAR

if (true) {
    let c = 10;
    console.log("value of c inside block body :", c);
    var d = 40;
    console.log("value of d inside block body :", d);
    const e = 50;
    console.log("value of e inside block body :", e);
}
// console.log("value of c outside block body :",c);         // Uncaught ReferenceError: b is not defined
console.log("value of d outside block body :", d);
// console.log("value of e outside block body :",e);        // Uncaught ReferenceError: b is not defined

console.log("*********************** Shadowing of variable ***********************");

let x = 100;

function test() {
    let x = 80;
    console.log("Value of x inside the function bode : ", x); // hides the outer x value and shows inner x value
}

test();
console.log("value of x outside the function body : ", x);

console.log("*********************** Lexical Scope of variable ***********************");

function outerFun() {
    let my_name = "Raja";

    function innerFun() {
        console.log("value of my name inside inner function : ", my_name);   // inner function can access the value of outer fun varibale
    }

    innerFun();
}
outerFun();