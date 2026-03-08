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