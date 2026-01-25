console.log("Difference between stack and heap memory");
/*
NOTE:
     In JavaScript, primitives are copied by value,
     while objects and arrays are copied by reference.
*/

//Example of primitive data types uses Stack memory

let a = 10;
let b = a;

console.log("value of b :", b);

b = 20;

console.log("value of a :", a);
console.log("value of b :", b);
/*
    CONCLUSION:
        Primitive data types store the actual value.
        When assigned to another variable, a copy of the value is created.
        Changes in one variable do not affect the other.
        This behavior is known as "pass by value" and is typically managed via stack memory. 
*/

// Example of reference data type uses Heap memory

let arr1 = [12, 23, 34, 45]
let arr2 = arr1

console.log("value of arr1 :", arr1) // [12,23,34,45]
console.log("value of arr2 :", arr2) // [12,23,34,45]

arr2[1] = 100;

console.log("value of arr1 :", arr1) // [ 12, 100, 34, 45 ]
console.log("value of arr2 :", arr2) // [ 12, 100, 34, 45 ]

/*
    CONCLUSION:
        Reference data types store the address (reference) to the data.
        When assigned to another variable, both variables point to the same memory location.
        Changes made through one reference affect the original data.
        This behavior is known as "pass by reference" and data is stored in heap memory.
*/