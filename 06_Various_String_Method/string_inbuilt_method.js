console.log("**************************************************************");

//------- String Length ---------

let myname = "Rajat";
console.log("The length oy myname variable is : ", myname.length);

let the_name = "Rajat Kumar";
console.log("The length oy the_name variable is : ", the_name.length);   // space is also get counted

let lorem_ipsum = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
console.log("The length oy my_name variable is : ", lorem_ipsum.length);

//------- Uppercase and lowercase ---------

let myname_lower = "raja kumar prasad";
console.log("The capital letter of var myname_lower will be : ", myname_lower.toUpperCase());

let myname_upper = "RAJA KUMAR PRASAD";
console.log("The lowercase myname_upper will be : ", myname_lower.toLowerCase());

// toLocaleUpperCase and toLocaleLowerCase Language specific hote hai and multilanguage apps me hi use hote h
let myname_1 = "raja kumar prasad";
console.log("The capital letter of var myname_1 will be : ", myname_lower.toLocaleUpperCase());

let myname_2 = "RAJA KUMAR PRASAD";
console.log("The lowercase myname_2 will be : ", myname_lower.toLocaleLowerCase());

//------------------------------------------ Indexing ----------------------------------------------

let str = "Dharmendra Singh";

console.log("Index 0 of str contains the character : ", str[0]);
console.log("Index 1 of str contains the character : ", str[1]);
console.log("Index 2 of str contains the character : ", str.charAt(2));
console.log("Index 3 of str contains the character : ", str.charAt(3));

console.log("The index of S in str variable value is : ", str.indexOf("S"));
console.log("The index of S in str variable value is : ", str.indexOf("s")); // is not found, it retrns -1

let lorem_ipsum_text = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
console.log("The index of 'commonly' in lorem_ipsum_text is : ", lorem_ipsum_text.indexOf("commonly"));
console.log("The index of 'and' in lorem_ipsum_text is : ", lorem_ipsum_text.indexOf("and"));    // it always return index of first match
console.log("The LAST index of 'and' in lorem_ipsum_text is : ", lorem_ipsum_text.lastIndexOf("and"));    // it always return index of last match

//------- includes(), startsWith() and endsWith() ---------

let naam = "Rajat";
naam.includes("t") ? console.log("The t is present in the naam.") : console.log("The t is not present in the naam.");
naam.includes("y") ? console.log("The y is present in the naam.") : console.log("The y is not present in the naam.");

let lorem_text = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
let res = lorem_text.includes("industries") ? "It have industries." : "It don't have industries.";
console.log(res);

console.log("Does lorem_text starts with the word lorem : ", lorem_text.startsWith("lorem"));
console.log("Does lorem_text starts with the word Lorem : ", lorem_text.startsWith("Lorem"));

console.log("Does lorem_text ends with the word 'mockups' : ", lorem_text.endsWith("mockups"));
console.log("Does lorem_text ends with the word 'mockups.' : ", lorem_text.endsWith("mockups."));

//------------------------------------ trim, slice, substring --------------------------------------

let str1 = "        hello.          ";
console.log("the untrimmed str1 is : ", str1);
console.log("the trimmed str1 is : ", str1.trim()); // trim removes all whitespaces around the word

let str2 = "Raja is a good person But he is not so hardworking.";
let indexOfBut = str2.indexOf("But");
let indexOfGood = str2.indexOf("good");
let indexOfNot = str2.indexOf("not");
let lastCharIndex = str2.length;

// with slice and substrinf functions the start index is inclusive, end index is exclusive

console.log("The sentence before 'But' using slice : ", str2.slice(0, indexOfBut));
console.log("The Sentence before 'But' using substring : ", str2.substring(0, indexOfBut));

console.log("The sentence from 'But' to end of the sentence using slice function : ", str2.slice(indexOfBut, lastCharIndex));
console.log("The sentence from 'But' to end of the sentence using substring function : ", str2.substring(indexOfBut, lastCharIndex));

console.log("The Substring from the word 'good' to the word  'not' using substring function : ", str2.substring(indexOfGood, indexOfNot));
console.log("The Substring from the word 'good' to the word  'not' using slice function : ", str2.slice(indexOfGood, indexOfNot));

let str3 = "JavaScript";    // J-0, a-1, v-2, a-3, S-4, c-5, r-6, i = 7, p = 8, t = 9
// J = (-10), a = (-9), v = (-8), a = (-7), S = (-6), c = (-5), r = (-4), i = (-3), p = (-2), t = (-1)

console.log(str3.slice(1));
console.log(str3.substring(1));
console.log(str3.slice(-6));    // last se 6 characters leta hai
console.log(str3.slice(-10, -6));
console.log(str3.substring(-6));    // negative index ko 0 maan leta hai

console.log(str3.slice(6, 2));       // start index > end index, isliye empty string deta hai
console.log(str3.slice(-6, -10));    // start index > end index, isliye empty string deta hai
console.log(str3.substring(6, 2));   // even if start index > end index, it swap internally i.e (6,2) -> (2,6)

//------------------------------------ replace(), replaceAll() --------------------------------------

let mera_naam = "Raja kumar prasad";

console.log("mera naam hai : ", mera_naam);
console.log("mera naam after replacing Raja to Vicky: ", mera_naam.replace("Raja", "Vicky"));

let paragraph = "I like coding because I like challenges and like solving problems. Sometimes I like working alone, but I like teamwork and like learning ideas like creativity."
console.log(" replacing all like to love : ", paragraph.replaceAll("like", "love"))


//------------------------------------ split(), concat() --------------------------------------

let para1 = "Morning brings calm skies, gentle winds over fields, soft light through windows, quiet thoughts in minds, hopeful plans for tomorrow ahead.";
splited_para_Array = para1.split(", ");
console.log(splited_para_Array);


let firstName = "Vicky ";
let middleName = "Kumar ";
let lasstName = "Prasad";
console.log("Fullname : ", (firstName.concat(middleName)).concat(lasstName));




