/*

let arr1 = [];
console.log("The length of arr1 is : ", arr1.length);
console.log("The type of arr1 is : ", typeof (arr1)); //JavaScript me Array actually Object hi hai

isArray = Array.isArray(arr1) ? "arr1 is an array" : "arr1 is not an array";
console.log(isArray);

let arr2 = [11, 22, 33, 44, 55, 66, 77];
let arr3 = ["ram", 'sita', `radha`, true, -14.22, null, 12, undefined, arr2, [11, "ramesh", false]];

console.log("The length of arr2 is : ", arr2.length);
console.log("The type of arr2 is : ", typeof (arr2));
console.log("The 3rd element of arr2 is : ", arr2[2]);
console.log("The type of 3rd element of arr2 is : ", typeof (arr2[2]));

console.log("The type of arr3 is : ", typeof (arr3));
console.log("The length of arr3 is : ", arr3.length);
console.log("The 3rd element of arr3 is : ", arr3[2]);
console.log("The 3rd element of arr3 is : ", typeof (arr3[2]));
console.log("The 10th element of arr3 is : ", arr3[9]);
console.log("The 10th element of arr3 is : ", typeof (arr3[9]));

isArray = Array.isArray(arr3[9]) ? "arr3[9] element is an array" : "arr3[9] element is not an array";
console.log(isArray);
isArray = Array.isArray(arr3[7]) ? "arr3[7] element is an array" : "arr3[7] element is not an array";
console.log(isArray);

//------ Insertion of element at the beginning i.e. at index 0 [ PUSH ]  -----------------------

arr2.unshift(88);
console.log("the length of arr2 after adding 88 at the begining :", arr2.length);
console.log("the array arr2 after adding 88 at the begining :", arr2);

arr4 = ["jai", 'shree', `Ram`, 1001];
arr2.unshift(arr4);
console.log("the length of arr2 after adding arr4 at the begining :", arr2.length);
console.log("the array arr2 after adding arr4 at the begining :", arr2);

//------ Removal of element at the beginning i.e. from index 0 [ PUSH ]  -----------------------

arr2.shift();
console.log("the length of arr2 after removing 1st element from the begining :", arr2.length);
console.log("the array arr2 after removing arr4 at the begining :", arr2);

arr2.shift();
console.log("the length of arr2 after removing 1st element from the begining :", arr2.length);
console.log("the array arr2 after removing arr4 at the begining :", arr2);

//------ Insertion of element at the End [ PUSH ]  -----------------------

arr2.push(88);
console.log("the length of arr2 after adding 88 at the end :", arr2.length);
console.log("the array arr2 after adding 88 at the end :", arr2);

arr5 = ["jai", 'shree', `Ram`, 1001, true];
arr2.push(arr5);
console.log("the length of arr2 after adding arr4 at the end :", arr2.length);
console.log("the array arr2 after adding arr4 at the end :", arr2);

//------ Removal of element from End [ POP ]  -----------------------

arr2.pop();
console.log("the length of arr2 after removing last element from the End :", arr2.length);
console.log("the array arr2 after removing arr4 at the begining :", arr2);

arr2.pop();
console.log("the length of arr2 after removing last element from the End :", arr2.length);
console.log("the array arr2 after removing arr4 at the begining :", arr2);

*/

let arr = [2, 4, 6, 8];

let res1 = arr.every(n => n % 2 === 0);
console.log(res1);

let res2 = arr.some(n => n > 14);
console.log(res2);

let res3 = arr.find(n => n > 4);
console.log(res3);

let res4 = arr.findIndex(n => n > 6);
console.log(res4);

let res5 = arr.findLast(n => n > 6);
console.log(res5);

let res6 = arr.findLastIndex(n => n < 5);
console.log(res6);

let arr6 = [1, [2, [3, [4]]]];
console.log("Flat : ", arr6.flat(Infinity));

let arr7 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
console.log("slice : ", arr7.slice(2, 5));    // index 2 se 4 tak

let arr8 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
console.log("Splice : ", arr8.splice(2, 5));  // returns index 2 se leke agle 5 element

let arr9 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
console.log("To Splice : ", arr9.toSpliced(2, 4));  // removes index 2 se 4 elements

let arr10 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
console.log("At : ", arr10.at(0));
console.log("At : ", arr10.at(1));
console.log("At : ", arr10.at(-1));
console.log("At : ", arr10.at(-2));

console.log(new Array(5).fill("A"));
console.log(new Array(10).fill(5,2,7));
console.log(arr10.fill(100,1,4));
console.log(Array.from("APPLE"));

let arr11 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
for (let [i, v] of arr11.entries()) {
    console.log(i, v);
}

console.log("Key/Index : ");
let arr12 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
for (let key of arr12.keys()) {
    console.log(key);
}

console.log("Values : ");
let arr13 = [2, 5, 1, 8, 7, 4, 9, 6, 3];
for (let val of arr13.values()) {
    console.log(val);
}

let sorted = arr13.toSorted((a, b) => a - b);
console.log("The sorted elements : ", sorted);

let rev = arr13.toReversed();
console.log("toReversed function : ", rev);
console.log("reverse function : ",arr13.reverse());

console.log("Includes : ",arr13.includes(12));
console.log("Includes : ",arr13.includes(2));
console.log("Index of element 9 : ",arr13.indexOf(9));
console.log("Index of last 9 : ",arr13.lastIndexOf(9));
console.log("Join : ",arr13.join(" - "));


let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr14.with(2, 100);
console.log("With : ", newArr);
let newArr1 = arr14.with(5, 100);
console.log("With : ", newArr1);

console.log("concat : ",arr13.concat(arr14));

// copyWithin() original array ko modify karta hai.
let arr15 = [3, 6, 9, 4, 7, 8, 1, 5, 2];
console.log("Copywithin 1 arg : ",arr15.copyWithin(3)); // Copy elements from index 0 to end and overwrite starting from index 3
let arr16 = [3, 6, 9, 4, 7, 8, 1, 5, 2];
console.log("Copywithin 2 arg: ",arr16.copyWithin(2,4)); // Copy elements from index 4 to end and overwrite starting from index 2
let arr17 = [3, 6, 9, 4, 7, 8, 1, 5, 2];
console.log("Copywithin 3 arg : ",arr17.copyWithin(3,4,7)); // Copy elements from index 4 to 6 and overwrite starting from index 3

