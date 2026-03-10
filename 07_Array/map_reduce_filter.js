console.log("------------------------------------ MAP FUNCTION ----------------------------------------");

// use of map function always works on all elements of that array and returns a new array

//--------------------------- Use of Map function using callback function ----------------------------------------------

let arr1 = [4, 6, 2, 8, 3, 9];

function double(x) {
    return x * 2;
}

let output1 = arr1.map(double);
console.log("The double of arr1 elements are using map with callback function : ", output1);

//-------------------------------- Use of Map function using inline function -----------------------------------------

let output2 = arr1.map(
    function double(x) {
        return x * 2;
    }
);
console.log("The double of arr1 elements are using map with HOF : ", output2);

//-------------------------------- Use of Map function using anonymous function -----------------------------------------

let output3 = arr1.map(
    function (x) {
        return x * 2;
    }
);
console.log("The double of arr1 elements are using map with anonymous function  : ", output3);

//----------------------------- Use of Map function using arrow function --------------------------------------------

// For block body syntax (i.e. with {}), the return statement is required
let output4 = arr1.map((x) => {
    return x * 2;
});
console.log("The double of arr1 elements using arrow function :", output4);


// For single expression (i.e. without {}), return is implicit
let output5 = arr1.map((x) => x * 2);
console.log("The double of arr1 elements using arrow function with single expression :", output5);

//-------------------------------------------------------------------------

let arr6 = [2, 3, 4, 5, 6, 7, 8];

// Parentheses are optional when there is only one parameter
let result = arr6.map(n => n ** 2);
console.log("The actual arr6 elements are : ", arr6);   // Actual array remains intact
console.log("The array when its all element are squared :", result);

//---------------------- 2 parameter use of map function ---------------------------------------------------

let subj = ['Html', "CSS", `Javascript`, "React"];
let indexedSub1 = subj.map(
    (sub, index) => { return `Subject Id : ${index + 1}, Subject : ${sub}` }    // return of array of strings
);
console.log("SubjectId and their Ids : ", indexedSub1);

let indexedSub2 = subj.map(
    (sub, index) => ({ SubjectId: (index + 1), Subject: (sub) })   // return of array of objects
);
console.log("SubjectId and subject : ", indexedSub2);

//---------------------- 3 parameter use of map function ---------------------------------------------------

let IndSubWithArray = subj.map(
    (subject, index, arr) => {
        return `Id : ${index}, Subject : ${subject}, From : ${arr}`;
    }
);
console.log(IndSubWithArray);

//----------------------- Chaining of map function --------------------------------------------------

let arrr = [1, 3, 2, 4, 6, 5];
let chainedMap = arrr.map(x => x * 2).map(x => x + 3);
console.log(chainedMap);

//----------------------- use of map function with condition --------------------------------------------------

let arry = [1, 3, 2, 4, 6, 5];

let cubeEvenZeroOdd = arry.map((x, ind) => {
    if (x % 2 === 0) {
        x = x ** 3;
    } else {
        x = x * 0;
    }
    return `${arry[ind]} : ${x}`;
});
console.log(cubeEvenZeroOdd);

let sqrEven = arry.map((x) => {
    x = x % 2 === 0 ? x ** 2 : x;
    return x;
});
console.log(sqrEven);

let sqrEvencubeOdd = arry.map(x => x % 2 === 0 ? x ** 2 : x ** 3);
console.log(sqrEvencubeOdd);

//----------------------- Use of map function on array of Objects --------------------------------------------------

let allusers = [
    { name: "Raja", age: 25 },
    { name: "Vicky", age: 30 },
];

let usernames = allusers.map(person => person.name);
console.log("user names are : ", usernames);

let usersage = allusers.map(person => person.age);
console.log("users ages are : ", usersage);

//----------------------- Objects destructuring ---------------
let userNamesOnly = allusers.map(({ name }) => name);
console.log(userNamesOnly);

let userAgeOnly = allusers.map(({ age }) => age);
console.log(userAgeOnly);

let userNameAge = allusers.map(({ name, age }) => `${name} is ${age} years old`);
console.log(userNameAge);

//----------------------- Objects value transformation -----------

let smallCaseUserName = allusers.map(person => person.name.toLowerCase());
console.log("small case user names are : ", smallCaseUserName);

let usermailid = allusers.map(person => person.name + "@gamil.in");
console.log("user mail ids are : ", usermailid);

//----------------------- Objects key transformation ------------------

let newUser = allusers.map((user) => {
    return {
        username: user.name,
        userage: user.age,
    }
});
console.log(newUser);
