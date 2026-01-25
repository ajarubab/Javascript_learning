console.log("Data type conversion");

// String to Number

let numword = "26451";
console.log("the value of numword ", numword, "and its type is", typeof numword);
let new_numword = Number(numword);
console.log("the value of new_numword ", new_numword, "and its type is", typeof new_numword);

console.log("-------x----------x----------x----------x--------------");

// conversion of alphanumeric input to number type results NaN as value and number as type

let numwordstr = "26451xyz";
console.log("the value of numwordstr ", numwordstr, "and its type is", typeof numwordstr);

let new_numwordstr = Number(numwordstr);    // Nan = Not a number as value but NUmber as type
console.log("the value of new_numwordstr ", new_numwordstr, "and its type is", typeof new_numwordstr);

// we use parseInt() function onto alphanumeric input to fetch its number type output

let new_numwordstr_prs = parseInt(numwordstr); // fetches number digits from left to right and return value till first non-numerical value
console.log("the value of new_numwordstr_prs ", new_numwordstr_prs, "and its type is", typeof new_numwordstr_prs);

console.log("------------x------x------------x---------x-------------");

/*
    conversion of true to number results 1 as value and number as type
    conversion of false to number results 0 as value and number as type
*/

let boolVar = true;
// let boolVar = false;
console.log("the value of boolVar ", boolVar, "and its type is", typeof boolVar);
let boolVar_to_num = Number(boolVar);
console.log("the value of boolVar_to_num ", boolVar_to_num, "and its type is", typeof boolVar_to_num);

console.log("----------------------------------------------------");

// null to Number results value of 0 and type number

let num = null;
console.log("The value of num is", num, "and it type is", typeof num)
let null_to_num = Number(null)
console.log("The value of null_to_num is", null_to_num, "and it type is", typeof null_to_num)

console.log("----------------------------------------------------");

// undefined to Number results value of NaN and type number 

let num1 = undefined;
console.log("The value of num1 is", num1, "and it type is", typeof num1)
let ud_to_num = Number(num1)
console.log("The value of ud_to_num is", ud_to_num, "and it type is", typeof ud_to_num)

console.log("****************************************************************************************");

// number 0 to Boolean results false
// number 1 or any other number to Boolean results true

let num3 = 0;
// let num3 = 1;
console.log("The value of num3 is", num3, "and it type is", typeof num3)
let num3_to_bool = Boolean(num3)
console.log("The value of num3_to_bool is", num3_to_bool, "and it type is", typeof num3_to_bool)

console.log("----------------------------------------------------");

// String to boolean

/*
    CONCLUSION :
        only the empty string having value [""] or [''] 
        on conversion to Boolean gives false otherwise 
        all values inside the quotes results true
*/

// let str1 = "";
let str1 = '0';
console.log("The value of str1 is", str1, "and it type is", typeof str1)
let str_to_bool = Boolean(str1)
console.log("The value of str_to_bool is", str_to_bool, "and it type is", typeof str_to_bool)

/*
    CONCLUSION : 
        Boolean() string ka matlab nahi padhta, 
        sirf empty vs non-empty check karta hai,
*/
console.log("-----------------xxxxxx-----------------------------------");

// null, undefined or NaN to Boolean conversion results value of false and type boolean

// let null_or_ud_val = null;
// let null_or_ud_val = NaN;
let null_or_ud_val = undefined;
console.log("The value of null_or_ud_val is", null_or_ud_val, "and it type is", typeof null_or_ud_val)
let null_or_ud_val_to_bool = Boolean(null_or_ud_val)
console.log("The value of null_or_ud_val_to_bool is ", null_or_ud_val_to_bool, "and it type is", typeof null_or_ud_val_to_bool)

console.log("------------xxxxxxx----------------------------------------");

// BigInt to Boolean results true for all values except 0n (which gives false)

let mybigint = 123n;
console.log("The value of mybigint is", mybigint, "and it type is", typeof mybigint)
let mybigint_to_bool = Boolean(mybigint)    // true
console.log("The value of mybigint_to_bool is", mybigint_to_bool, "and it type is", typeof mybigint_to_bool)

console.log("****************************************************************************************");

// Number to String results digits as value and string as type

let mynumstr = 123;
console.log("The value of mynumstr is", mynumstr, "and it type is", typeof mynumstr)
let mystr = String(mynumstr)
console.log("The value of mystr is", mystr, "and it type is", typeof mystr)


// null to String results null as value and string as type

let my_null_str = null;
console.log("The value of my_null_str is", my_null_str, "and it type is", typeof my_null_str)
let mystr1 = String(my_null_str)
console.log("The value of mystr1 is", mystr1, "and it type is", typeof mystr1)


// undefined to String results undefined as value and string as type

let my_ud_str = undefined;
console.log("The value of my_ud_str is", my_ud_str, "and it type is", typeof my_ud_str)
let mystr2 = String(my_ud_str)
console.log("The value of mystr2 is", mystr2, "and it type is", typeof mystr2)


// boolean to String results true/false as values and String as type

// let my_bool_str = true;
let my_bool_str = false;
console.log("The value of my_bool_str is", my_bool_str, "and it type is", typeof my_bool_str)
let mystr3 = String(my_bool_str)
console.log("The value of mystr3 is", mystr3, "and it type is", typeof mystr3)

// Bigint to String results digits as value and string as type

let thebigint = 723n;
console.log("The value of thebigint is", thebigint, "and it type is", typeof thebigint)
let thebigint_to_str = String(thebigint)    // true
console.log("The value of thebigint_to_str is", thebigint_to_str, "and it type is", typeof thebigint_to_str)

console.log("****************************************************************************************");

// Digited-String to Bigint result digits with n appended as value and bigint as type

let digStr = "27461"
console.log("the value of digStr ", digStr, "and its type is", typeof digStr);
let digStr_to_bigint = BigInt(digStr);    //27461n
console.log("the value of digStr_to_bigint ", digStr_to_bigint, "and its type is", typeof digStr_to_bigint);

console.log("----------------------------------------------------");

// Number to Bigint

let the_numdig = 5436;
console.log("the value of the_numdig ", the_numdig, "and its type is", typeof the_numdig);
let dig_to_bigint = BigInt(the_numdig);    // 5436n
console.log("the value of dig_to_bigint ", dig_to_bigint, "and its type is", typeof dig_to_bigint);

console.log("----------------------------------------------------");
/*
    BigInt conversion rules:
        ❌ null, undefined, boolean → TypeError
        ❌ floating number → TypeError
        ❌ invalid string → SyntaxError
*/
console.log("****************************************************************************************");

// NaN = Not a Number

let my_random_str = "iudfh231312";
console.log("the value of my_random_str", my_random_str, "and its type is", typeof my_random_str);
let my_NaN_parsed = parseInt(my_random_str);
console.log("the value of my_NaN_parsed ", my_NaN_parsed, "and its type is", typeof my_NaN_parsed);

let my_fn2 = "123.342";
console.log("the value of my_fn2 ", my_fn2, "and its type is", typeof my_fn2);
let my_fn2_parsed = parseInt(my_fn2);
console.log("the value of my_fn2_parsed ", my_fn2_parsed, "and its type is", typeof my_fn2_parsed);

let my_fn3 = "12xy36.342";  // fetches digits either till first decimal or first non numerical value
console.log("the value of my_fn3 ", my_fn3, "and its type is", typeof my_fn3);
let my_fn3_parsed = parseInt(my_fn3);
console.log("the value of my_fn3_parsed ", my_fn3_parsed, "and its type is", typeof my_fn3_parsed);

console.log(NaN === NaN);   // false
console.log(undefined == null);   // true