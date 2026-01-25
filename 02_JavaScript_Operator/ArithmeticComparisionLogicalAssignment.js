console.log("Arithmetic operator");

let a = 20;
let b = 10;

console.log(a, "+", b, "=", a + b);
console.log(a, "-", b, "=", a - b);
console.log(a, "*", b, "=", a * b);
console.log(a, "/", b, "=", a / b);
console.log(a, "%", b, "=", a % b);
console.log(a, "% 6", a % 6);
console.log(a, "** 3 =", a ** 3);

console.log("value on a++ =", a++);
console.log("value just after a++ =", a);
console.log("value on b++ =", b++);
console.log("value just after b-- =", b);
console.log("value on --a =", --a);
console.log("value on --b =", --b);

console.log("-------------------Logical operator----------------");

let x = true;
let y = false;

console.log("x : ", x, "| y : ", y);
console.log("Logical AND of x and y : ", x && y);
console.log("Logical OR of x and y : ", x || y);
console.log("Logical NOT of x : ", !x);

let carry_passport_of_india = true;
let says_bharat_mata_ki_jai = false;

if (carry_passport_of_india && says_bharat_mata_ki_jai) {
    console.log("Real Indian");
} else if (!carry_passport_of_india && says_bharat_mata_ki_jai) {
    console.log("Aspiring Indian");
} else if (carry_passport_of_india && !says_bharat_mata_ki_jai) {
    console.log("False Indian");
}

let have_indian_voter_id_card = false;
let age = 20;

if (have_indian_voter_id_card || age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible to vote");
}

console.log("------------- comparision operator -------------");

let m = "10";
let n = 10;

console.log("m == n",(m == n));
console.log("m != n",(m != n));
console.log("m === n",(m === n));
console.log("m !== n",(m !== n));
console.log("m < n",(m < n));
console.log("m <= n",(m <= n));
console.log("m > n",(m > n));
console.log("m >= n",(m >= n));

console.log("------------- Assignment operator -------------");

let num = 40;

console.log(" num = ",num);
console.log(" num +=5 ",num +=5 );
console.log(" num -=5 ",num -=5 );
console.log(" num *=5 ",num *=5 );
console.log(" num /=5 ",num /=5 );
console.log(" num %=6 ",num %=6 );
console.log(" num **=2 ",num **=2 );