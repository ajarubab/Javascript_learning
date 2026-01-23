console.log("Hello JS learner");

// variables in Javascript

// ES5 type variable  [ it allows re-declarations ]

var a;              // declaration of variable a
a = 10;             // initialisation of variable a
console.log("value of a initially : ", a);
a = 11;             // Re-initialisation of variable a with other value
console.log("value of a after re-initialisation with other value : ", a);
var a = 12;             // Re-declaration and initialisation of variable a
console.log("value of a after re-declaration and initialisation with other value : ", a);

//-------------------------------------------------------------------------------------------------
// ES6 type variable [ redeclaration of same variable allowed only in different scopes ]
//-------------------------------------------------------------------------------------------------

let b;          // declaration of variable b
b = 13;         // initialisation of variable b

console.log("Outside {} value of b : ", b);

// let b = 13;     // Declaration and initialisation of variable b causes ERROR beacouse it is already declared in same scope 

//-------------------------------------------------------------------------------------------------

// Making redeclaration of asame container variable possible with change of scope as folllows:
{
    let b = 14;
    console.log("Inside {} value of b : ", b);
}

//-------------------------------------------------------------------------------------------------

let c = 15;     // Declaration and initialisation of variable c
console.log("value of c initially : ", c);
c = 25;         // re-assigning other value is legal
console.log("value of c after value change : ", c);

//-------------------------------------------------------------------------------------------------


// const d;    // const must initialised immediately during the declaration 
//                  and its value can't be changed in same scope

const d = 20;
console.log("value of d outside {}: ", d);

{
    const d = 23;
    console.log("value of d inside {}: ", d);
}