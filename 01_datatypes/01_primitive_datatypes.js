console.log("Primitive data types");

// Primitive data types STACK memory me store hoti hai

// String

let nm = "Raja";
console.log("The value of nm is :", nm, "and it's type is : ", typeof (nm));

let naam = 'Rajat';
console.log("The value of naam is :", naam, "and it's type is : ", typeof (naam));

let rd1 = "1234";
console.log("The value of rd1 is :", rd1, "and it's type is : ", typeof (rd1));

let rd2 = '453';
console.log("The value of rd2 is :", rd2, "and it's type is : ", typeof (rd2));

let rd3 = "-1234";
console.log("The value of rd3 is :", rd3, "and it's type is : ", typeof (rd3));

let rd4 = '-453';
console.log("The value of rd4 is :", rd4, "and it's type is : ", typeof (rd4));

let rd5 = "1234.345";
console.log("The value of rd5 is :", rd5, "and it's type is : ", typeof (rd5));

let rd6 = '4523.3456';
console.log("The value of rd6 is :", rd6, "and it's type is : ", typeof (rd6));

let rd7 = "-1234.345";
console.log("The value of rd7 is :", rd7, "and it's type is : ", typeof (rd7));

let rd8 = '-524.115';
console.log("The value of rd8 is :", rd8, "and it's type is : ", typeof (rd8));

let rb1 = 'true';
console.log("The value of rb1 is :", rb1, "and it's type is : ", typeof (rb1));

let rb2 = 'false';
console.log("The value of rb2 is :", rb2, "and it's type is : ", typeof (rb2));

let rb3 = "true";
console.log("The value of rb3 is :", rb3, "and it's type is : ", typeof (rb3));

let rb4 = "false";
console.log("The value of rb4 is :", rb4, "and it's type is : ", typeof (rb4));


// Number

console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991

let age = 28;           // positive number
console.log("The value of age is :", age, " and it's type is : ", typeof (age));

let nn = -80;           // negative number
console.log("The value of nn is :", nn, " and it's type is : ", typeof (nn));

let pdn = 28.3765;      // positive decimal number
console.log("The value of pdn is :", pdn, " and it's type is : ", typeof (pdn));

let ndn = -88.6535;     // negative decimal number
console.log("The value of ndn is :", ndn, " and it's type is : ", typeof (ndn));


// Boolean [ true / false]

let happy = true;
console.log("is he happy : ", happy, "and the type of happy is : ", typeof (happy))

let angry = false;
console.log("is he angry : ", angry, "and the type of angry is : ", typeof (angry))

// null  [intentional absence of value] 

let null_var = null;
console.log("value of null_var : ", null_var);              // null
console.log("the type of null_var is : ", typeof (null_var)); // object [ a 25+ year old bug in JavaScript that can’t be fixed now]

// undefined [the type of every uninitialized variable]

let abc;
console.log("value of abc var : ", abc, "and the type of abc var is : ", typeof (abc))

// Bigint [ number ke last me n and 9007199254740991 ke baad use hota h]

let bn = 2n;
console.log("value of bn : ", bn, "and the type of bn is : ", typeof (bn))

// Symbol [ used to create unique object property keys.]

let sym = Symbol("skjbcas658587");
console.log("value of sym : ", sym, "and the type of sym is : ", typeof (sym))

// -----------------------------MISCELLANEOUS---------------------------------------------------------

let a = 9007199254740992;
let b = 9007199254740993;

console.log(a == b);      // true  --> ❌ which should not be equal valuewise.
console.log(a === b);      // true  --> ❌ which should not be equal valuewise.


// [5n + 2 -->> ❌ Error] ( mixing bigint with number type not allowed)

console.log(5 === 5n); // false ❌ (different types)
console.log(5 == 5n);  // true ✅ (same numeric value)

console.log(Symbol() === Symbol()); // false --> shows the unique keys generated are not same even typewise
