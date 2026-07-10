console.log("*********************** Object Basics ***********************");

// Object ek non-primitive data type hai jo key-value pairs ke form me data store karta hai.

let student = {
    // Primitive Data Types
    name: "Raja",                  // String
    age: 24,                       // Number
    isPlaced: false,                // Boolean
    city: null,                    // Null
    mobile: undefined,             // Undefined
    salary: 9007199254740999n,     // BigInt
    id: Symbol("studentId"),       // Symbol

    // Reference Data Types
    skills: ["HTML", "CSS", "JavaScript"],   // Array

    address: {
        town: "Saran",                  // Nested Object
        state: "Bihar",
        country: "India"
    },

    greet: function () {           // Function (Method)
        console.log("Hello, I am Raja");
    },

    jsr() {
        return "Jai Siya Ram";
    },

    joiningDate: new Date("2025-01-10"),     // Date Object
    today: new Date(),     // Date Object

    subjects: new Set(["Java", "Python", "JavaScript"]), // Set

    marks: new Map([               // Map
        ["Java", 90],
        ["Python", 95]
    ])
};

console.log("Type of Student : ", typeof (student));
console.log("The name of student is :", student.name);
console.log("The age of", student.name, "is : ", student.age);
console.log("The Best Skill of", student.name, "is : ", student.skills[2]);
console.log("The town of", student.name, "is : ", student.address.town);
console.log(student.id);

console.log(typeof student.skills);
console.log(typeof student.address);
console.log(typeof student.greet);
console.log(typeof student.joiningDate);
console.log(typeof student.subjects);
console.log(typeof student.marks);
console.log(typeof student.id);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// when function is not returning any value, default returned value becomes undefined 
console.log("His Intro says ", student.greet());
console.log("His said that :", student["greet"]());

// when function is returning any value
student.jsr();
console.log("He Chants : ", student.jsr());
console.log("He always says :", student["jsr"]());

// bracket Notation variable value access

console.log("The state of", student.name, "is : ", student["address"]["state"]);

let placedOrNot = "isPlaced";
console.log("Is", student.name, "having any Placement : ", student[placedOrNot]);

console.log("Joining Date :", student.joiningDate);
console.log("Aaj ki tareekh hai :", student["today"]);

console.log("Joining Year :", student.joiningDate.getFullYear());
console.log("Joining Year :", student["joiningDate"].getFullYear());
console.log("This Year is:", student.today.getFullYear());
console.log("Aaj ka saal hai :", student["today"].getFullYear());

console.log(student["today"].getMonth());

console.log(student.subjects);
console.log(student.subjects.size);
console.log(student.subjects.has("Java"));
console.log(student.subjects.has("Php"));

for (let s of student.subjects) {
    console.log(s);
}

let arr = [...student.subjects];    // converting into array
console.log(arr[1]);


console.log(student.marks);
console.log(student.marks.size);
console.log(student.marks.has("Java"));
console.log(student.marks.get("Java"));

for (let res of student.marks) {
    console.log(res);
}

for (let k of student.marks.keys()) {
    console.log(k);
}

for (let val of student.marks.values()) {
    console.log(val);
}

let empObj = {};
console.log(typeof (empObj));

let anotherObj = {
    100: "Hundred",
    true: true,
    123n: "Bigint"
}

console.log(anotherObj.true);

// console.log(anotherObj.100); 
// console.log(anotherObj.123n);

// Uper ke 2 console statement me javaScript parser confuse ho jata hai. Usse lagta hai decimal number likha ja raha hai ,isliye Syntax Error.
// Numeric property ke liye hamesha bracket notation use karo.

console.log(anotherObj["100"]);

console.log(anotherObj["123n"]);    // undefined
//123n key BigInt ke roop me store nahi hoti. JavaScript usse string "123" me convert kar deta hai.
// Except Symbol, every object key is internally converted into a string.
console.log(anotherObj["123"]);

let obj = {
    b: 2,
    a: 1,
    c: 3
};

console.log(obj);

let naam = "Shri krishna";
let kaam = "Gaay chrana";

let gopa = {
    name: naam,
    job: kaam,
    "pura naam": "krishna vasudev chandra",
    class: "6th",
    function: "Raksha",
    return: true
}

console.log(gopa.name, "sabki", gopa.job, "karte hai.");
console.log(gopa.name, "ka pura naam", gopa["pura naam"], "hai.");
console.log(gopa.class, "class me padte hue sabki", gopa.function, "krte the ye baat ekdm", gopa.return, "hai.");

// Objects are mutable

gopa.class = "3rd";
console.log(gopa.class, "class me padte hue sabki", gopa.function, "krte the ye baat ekdm", gopa.return, "hai.");

// Even if an object is declared with const, its PROPERTIES ONLY can still be modified.
const gopi = {
    naam: "Radha"
}
console.log(gopa["pura naam"], "ki aatma hai shri", gopi.naam, ".");

gopi.naam = "Radha Rani";
console.log(gopa["pura naam"], "ki aatma hai hmari", gopi.naam, ".");

// Different objects always have different references even if have same variable key nme or value name, they are not equal.

let a = {
    x: 10
};

let b = {
    x: 10
};

console.log(a == b);
console.log(a === b);