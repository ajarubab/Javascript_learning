console.log("JavaScript loops");

console.log("***************************** Javascript For Loop *********************************************");

for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = `, 2 * i);
}

//------------------------------------------------------------------

let boys = ["ram", "sam", 'sky', 'ron', 'Xiu'];
let output = "";
for (let j = 0; j < boys.length; j++) {
    output += boys[j] + " ";
}

console.log(output);

console.log("***************************** Javascript For-In Loop *********************************************");

let Person = {
    person_name: "Raja",
    person_age: 30,
    person_salary: 200000.834

}
for (let details in Person) {
    console.log(details + " : " + Person[details]);
}

//------------------------------------------------------------------

let decoration_stuff = [
    {
        item_name: "Orchid flower",
        item_count: 10,
        item_value: 8000
    },
    {
        item_name: "Rubber baloon",
        item_count: 100,
        item_value: 200
    },
    {
        item_name: "fancy lights",
        item_count: 15,
        item_value: 1200
    },
    {
        item_name: "Paper ribbon",
        item_count: 20,
        item_value: 500
    }
]

for (let item of decoration_stuff) {
    console.log(`${item.item_count} ${item.item_name} will cost you ${item.item_value} rupees.`);
}


console.log("***************************** Javascript For-In Loop *********************************************");

let colour = ["Red", "Blue", 'green', `black`, "White"]
for (let clr of colour) {
    console.log(clr);
}

//------------------------------------------------------------------

let fruit = "Pineapple"
for (let char of fruit) {
    console.log(char);
}

console.log("***************************** Javascript while Loop *********************************************");

let i = 1;
while (i <= 10) {
    console.log(5 * i);
    i++;
}

console.log("***************************** Javascript do-while Loop *********************************************");

let j = 1;
do {
    console.log(7 * j);
    j++;
} while (j <= 10)

//------------------------------------------------------------------
let pwd = ""
let correctpass = "1122"

do {
    pwd = prompt("Enter your PIN");
} while (pwd !== correctpass);
console.log("Right password, Access granted.");
