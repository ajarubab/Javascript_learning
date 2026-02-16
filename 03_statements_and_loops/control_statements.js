
console.log("***************************** Javascript IF-Else statement *********************************");

let person_age = 17;
if (person_age < 18) {
    console.log("Not eligible to vote.");
} else {
    console.log("Eligible to vote.")
}

//---------------------- Ternary operator -----------------

let age = 20;
output = (age < 20) ? "Not an adult." : "An Adult";
console.log(output);

//---------------------- Nested Ternary operator -----------------

let my_num = 55;
result = (my_num > 55)
    ? "More than 55" :
    (my_num < 55)
        ? "Less than 55"
        : "Equal to 55";
console.log(result);

console.log("******************* Javascript IF-Elseif-Else statement ******************************");

let flower = "Juhi";
if (flower == 'Rose') {
    console.log("It is a rose.");
} else if (flower === 'lotus') {
    console.log("It is a lotus.");
} else if (flower === 'Juhi') {
    console.log("It is a Juhi.");
} else {
    console.log("It is some other flower.")
}


console.log("********************* Javascript Switch statement ***************************");

let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("You are not on Earth.")
}

