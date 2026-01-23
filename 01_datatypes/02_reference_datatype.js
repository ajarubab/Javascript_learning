console.log("Reference datas type here")

// Reference data types HEAP memory me store hoti hai

// Object [ anything in {} is an object ]

let person = {
    naam: "Rajat",
    age: 28,
    city: "New Delhi",
    salary: 98765.321
}

console.log("The name of person is", person.naam,
    "who is ", person.age, "old and lives in",
    person.city, "earns ", person.salary, "per month.");

console.log("Content of person : ", person);
console.log("Type of person : ", typeof (person));
console.log("Type of naam : ", typeof (person.naam));
console.log("Type of age : ", typeof (person.age));
console.log("Type of city : ", typeof (person.city));
console.log("Type of salary : ", typeof (person.salary));


// Array

let arr1 = [
    undefined,
    11,
    "ram",
    true,
    3n,
    'goa',
    null,
    -25.79,
    {
        place: "Bhangarh",
        fare: 455.25,
        country: 'India',
        haunted: true,
    },
    ["Apple", 'mango', null, -25, 400.58, false, undefined]
]
console.log("The content of arr1 is :", arr1);
console.log("The type of arr1 is :", typeof (arr1));
console.log("The total elements in arr1 are :", arr1.length);
console.log("The type of ", arr1[0], " is :", typeof (arr1[0]));
console.log("The type of ", arr1[1], " is :", typeof (arr1[1]));
console.log("The type of ", arr1[2], " is :", typeof (arr1[2]));
console.log("The type of ", arr1[3], " is :", typeof (arr1[3]));
console.log("The type of ", arr1[4], " is :", typeof (arr1[4]));
console.log("The type of ", arr1[5], " is :", typeof (arr1[5]));
console.log("The type of ", arr1[6], " is :", typeof (arr1[6]));
console.log("The type of ", arr1[7], " is :", typeof (arr1[7]));
console.log("The type of ", arr1[8], " is :", typeof (arr1[8]));
console.log("The type of ", arr1[8].place, " is :", typeof (arr1[8].place));
console.log("The type of ", arr1[8].fare, " is :", typeof (arr1[8].fare));
console.log("The type of ", arr1[8].haunted, " is :", typeof (arr1[8].haunted));
console.log("The type of ", arr1[9], " is :", typeof (arr1[9]));
console.log("The type of ", arr1[9][3], " is :", typeof (arr1[9][3]));

console.log("-------------------------------------------")

arr1.forEach(
    (item, index) => {
        console.log(`Index : ${index}`, "| element value :", item, "| Type :", typeof item);
    }
);

console.log("-------------------------------------------")

// Function

function greet() {
    console.log("Jai hind, jai bharat");
}

console.log(greet); // returns whole funtion block
console.log("Type of greet : ", typeof greet);   // function
console.log(greet());   // returns output
console.log("Type of greet() : ", typeof greet()); // returns output type

function sum() {
    return 56 + 12;
}

console.log(sum);   // returns whole funtion block
console.log("Type of sum : ", typeof sum);   // function
console.log(sum());     // returns output
console.log("Type of greet() : ", typeof sum()); // returns output type