/*
console.log("------------------------------------ MAP FUNCTION ----------------------------------------");

// use of map function always works on all elements of that array and returns a new array

//--------------------------- Use of Map function using callback function ----------------------------------------------

let arr1 = [4, 6, 2, 8, 3, 9];

function double(x) {
    return x * 2;
}

let output1 = arr1.map(double);
console.log("The double of arr1 elements are using map with callback function : ", output1);

//-------------------------------- Use of Map function using inline function -----------------------------------------

let output2 = arr1.map(
    function double(x) {
        return x * 2;
    }
);
console.log("The double of arr1 elements are using map with HOF : ", output2);

//-------------------------------- Use of Map function using anonymous function -----------------------------------------

let output3 = arr1.map(
    function (x) {
        return x * 2;
    }
);
console.log("The double of arr1 elements are using map with anonymous function  : ", output3);

//----------------------------- Use of Map function using arrow function --------------------------------------------

// For block body syntax (i.e. with {}), the return statement is required
let output4 = arr1.map((x) => {
    return x * 2;
});
console.log("The double of arr1 elements using arrow function :", output4);


// For single expression (i.e. without {}), return is implicit
let output5 = arr1.map((x) => x * 2);
console.log("The double of arr1 elements using arrow function with single expression :", output5);

//-------------------------------------------------------------------------

let arr6 = [2, 3, 4, 5, 6, 7, 8];

// Parentheses are optional when there is only one parameter
let result = arr6.map(n => n ** 2);
console.log("The actual arr6 elements are : ", arr6);   // Actual array remains intact
console.log("The array when its all element are squared :", result);

//---------------------- 2 parameter use of map function ---------------------------------------------------

let subj = ['Html', "CSS", `Javascript`, "React"];
let indexedSub1 = subj.map(
    (sub, index) => { return `Subject Id : ${index + 1}, Subject : ${sub}` }    // return of array of strings
);
console.log("SubjectId and their Ids : ", indexedSub1);

let indexedSub2 = subj.map(
    (sub, index) => ({ SubjectId: (index + 1), Subject: (sub) })   // return of array of objects
);
console.log("SubjectId and subject : ", indexedSub2);

//---------------------- 3 parameter use of map function ---------------------------------------------------

let IndSubWithArray = subj.map(
    (subject, index, arr) => {
        return `Id : ${index}, Subject : ${subject}, From : ${arr}`;
    }
);
console.log(IndSubWithArray);

//----------------------- Chaining of map function --------------------------------------------------

let arrr = [1, 3, 2, 4, 6, 5];
let chainedMap = arrr.map(x => x * 2).map(x => x + 3);
console.log(chainedMap);

//----------------------- use of map function with condition --------------------------------------------------

let arry = [1, 3, 2, 4, 6, 5];

let cubeEvenZeroOdd = arry.map((x, ind) => {
    if (x % 2 === 0) {
        x = x ** 3;
    } else {
        x = x * 0;
    }
    return `${arry[ind]} : ${x}`;
});
console.log(cubeEvenZeroOdd);

let sqrEven = arry.map((x) => {
    x = x % 2 === 0 ? x ** 2 : x;
    return x;
});
console.log(sqrEven);

let sqrEvencubeOdd = arry.map(x => x % 2 === 0 ? x ** 2 : x ** 3);
console.log(sqrEvencubeOdd);

//----------------------- Use of map function on array of Objects --------------------------------------------------

let allusers = [
    { name: "Raja", age: 25 },
    { name: "Vicky", age: 30 },
];

let usernames = allusers.map(person => person.name);
console.log("user names are : ", usernames);

let usersage = allusers.map(person => person.age);
console.log("users ages are : ", usersage);

//----------------------- Objects destructuring ---------------
let userNamesOnly = allusers.map(({ name }) => name);
console.log(userNamesOnly);

let userAgeOnly = allusers.map(({ age }) => age);
console.log(userAgeOnly);

let userNameAge = allusers.map(({ name, age }) => `${name} is ${age} years old`);
console.log(userNameAge);

//----------------------- Objects value transformation -----------

let smallCaseUserName = allusers.map(person => person.name.toLowerCase());
console.log("small case user names are : ", smallCaseUserName);

let usermailid = allusers.map(person => person.name + "@gamil.in");
console.log("user mail ids are : ", usermailid);

//----------------------- Objects key transformation ------------------

let newUser = allusers.map((user) => {
    return {
        username: user.name,
        userage: user.age,
    }
});
console.log(newUser);
*/

// ------------- reduce() function use -----------------------

/**


// syntax :


array.reduce((accumulator, currentValue) => {
 return updatedValue;
}, initialValue);

//------------------------------ REDUCE ---------------------------------

// -------- reduce function returns single value --------------------------

let arr7 = [12, 23, 34, 45, 56, 27, 38, 54, 27, 11, 32];

let sum = arr7.reduce((total, num) => total + num, 0);

console.log("Elements of arr7 are : ", arr7);
console.log("The sum of all elements of arr7 is : ", sum);

//-----------------------------------------------------

let max = arr7.reduce(
  (acc, cur) => {
    return cur > acc ? cur : acc;
  }, // if initialValue not given , index 0 element value is treated as initial value automatically
);
console.log("Max value in arr7 is : ", max);

let min = arr7.reduce((acc, cur) => {
  return cur < acc ? cur : acc;
}, arr7[0]);
console.log("Minimum value in arr7 is : ", min);

//--------- Array transformation ( reduce as Map ) ----------------

let arr9 = [7, 8, 5, 2, 3, 6, 9, 4];

let res2 = arr9.reduce((acc, dig) => {
  acc.push(dig * dig);
  // acc.push({ num: dig, sqr: dig ** 2 });
  return acc;
}, []);

console.log("Actual Array Element : ", arr9);
console.log("Actual Array Elements Squares : ", res2);

//---------- Array transformation ( reduce as Filter ) --------------

let res3 = arr9.reduce((acc, cur) => {
  // if(cur % 2 === 0){
  //     acc.push(cur);
  // }
  cur % 2 === 0 && acc.push(cur);
  return acc;
}, []);

console.log(res3);

//------------------------ flatten the elements of nested array --------

let arr10 = [[1, 2], [9, 8], [3, 4, 5], [7], 6];
let singleArr = arr10.reduce((acc, dig) => {
  return acc.concat(dig);
}, []);

console.log(singleArr);

//----------------------  [Array -> object transformation] ----------------------------------

let nums = [6, 3, 9, 4, 8, 5, 7];
let obj = nums.reduce((acc, num) => {
  acc[num] = num * num;
  return acc;
}, {}); // in object type, the elements gets sorted in ascending order automatically
console.log("Number and Squares are : ", obj);

//------------------------ getting frequency of elements -----------------------------

let digArr = [
  3, 7, 1, 4, 9, 3, 0, 7, 1, 2, 9, 1, 6, 4, 3, 8, 2, 5, 7, 2, 4, 9, 3, 0, 7, 5,
  2, 9, 3,
];

let digFreq = digArr.reduce((acc, dig) => {
  acc[dig] ? acc[dig]++ : (acc[dig] = 1);
  return acc;
}, {});
console.log("Array digits and their frequencies : ", digFreq);

let digFreq1 = digArr.reduce((acc, dig) => {
  acc[dig] = (acc[dig] || 0) + 1;
  return acc;
}, {});
console.log("Array digits and their frequencies : ", digFreq1);

let digFreq2 = digArr.reduce(
  (acc, dig) => ((acc[dig] = (acc[dig] || 0) + 1), acc),
  {},
);
console.log("Array digits and their frequencies : ", digFreq2);

//------------------------ removing duplicate value from the array ---------

let uniqueDigits = digArr.reduce((acc, dig) => {
  if (!acc.includes(dig)) {
    acc.push(dig);
  }
  return acc;
}, []);
console.log("Unique value are : ", uniqueDigits);

//------------------------ separating even and odd elements ---------

let evenOdd = arr9.reduce(
  (acc, dig) => {
    dig % 2 === 0 ? acc.even.push(dig) : acc.odd.push(dig);
    return acc;
  },
  {
    even: [],
    odd: [],
  },
);

console.log(evenOdd);

//------------------------ Groupby using reduce -----------------------------

let people = [
  { name: "Raja", age: 25, city: "Delhi", dept: "IT", salary: 90000 },
  { name: "Vicky", age: 30, city: "Mumbai", dept: "HR", salary: 70000 },
  { name: "Aman", age: 25, city: "Delhi", dept: "Finance", salary: 55000 },
  { name: "Neha", age: 28, city: "Pune", dept: "IT", salary: 85000 },
  { name: "Rahul", age: 30, city: "Delhi", dept: "IT", salary: 50000 },
  { name: "Priya", age: 25, city: "Mumbai", dept: "HR", salary: 62000 },
  { name: "Saurabh", age: 28, city: "Pune", dept: "Finance", salary: 48000 },
  { name: "Kiran", age: 27, city: "Delhi", dept: "IT", salary: 52000 },
  { name: "Anjali", age: 30, city: "Mumbai", dept: "Finance", salary: 68000 },
  { name: "Deepak", age: 27, city: "Delhi", dept: "HR", salary: 74000 },
];

//------------ Lookup Operation using reduce ------------------

let peopleByName = people.reduce((acc, p) => {
  acc[p.name] = p;
  return acc;
}, {});

console.log("Lookup operation using reduce ", peopleByName["Raja"]);
console.log("Lookup operation using reduce ", peopleByName["Neha"]);

//------------ Highest salary Person ------------------

let highestSalPerson = people.reduce((acc, p) => {
  p.salary > acc.salary && p;
  return acc;
});
console.log("Details of highest salary person is : ", highestSalPerson);

//------------ total salary of all people ------------------

let totalFund = people.reduce((acc, p) => {
  return acc + p.salary;
}, 0);
console.log("Total Salary : ", totalFund);

//------------ total fund to each Department ------------

let totalFundToDepartment = people.reduce((acc, p) => {
  acc[p.dept] = (acc[p.dept] || 0) + p.salary;
  return acc;
}, {});
console.log("Fund by Dept : ", totalFundToDepartment);

//------------ Fitering people having salary less than 60k ----------

let salWisePeople = people.reduce((acc, p) => {
  if (p.salary < 60000) {
    acc.push(p);
  }
  return acc;
}, []);
console.log("people having salaray less than 60k : ", salWisePeople);

//------------ count of people of each Department ----------

let countByDepartment = people.reduce((acc, p) => {
  acc[p.dept] = (acc[p.dept] || 0) + 1;
  return acc;
}, {});
console.log("Count by Dept : ", countByDepartment);

//------------ Getting all Names ------------------

let allPeopleName = people.reduce((acc, p) => {
  acc.push(p.name);
  return acc;
}, []);
console.log("Names of all people : ", allPeopleName);

//------------ grouping of peopel age wise ------------------

let sameAgePeople = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person);
  return acc;
}, {});
console.log("Group by Age : ", sameAgePeople);

//------------ city wise people names ------------------

let grpByCity = people.reduce((acc, p) => {
  (acc[p.city] = acc[p.city] || []).push(p.name);
  return acc;
}, {});
console.log("Group by City : ", grpByCity);

//------------ Getting all details of Delhi people Only -------

let delhiCityPeople = people.reduce((acc, p) => {
  if (p.city === "Delhi") {
    acc.push(p);
  }
  return acc;
}, []);
console.log("people living in Delhi : ", delhiCityPeople);

//------------ Fitering Department wise Highest salary people ------------------

let top3SalPersonDept = people.reduce((acc, p) => {
  if (!acc[p.dept] || acc[p.dept].salary < p.salary) {
    acc[p.dept] = p;
  }
  return acc;
}, {});
console.log(
  "Details of Highest salary person of each department : ",
  top3SalPersonDept,
);

//------------ Name and salary of Highest salary person of each City ------------------

let top3NamesCityWise = people.reduce((acc, p) => {
  if (!acc[p.city] || acc[p.city].salary < p.salary) {
    acc[p.city] = { name: p.name, salary: p.salary };
  }
  return acc;
}, {});
console.log(
  "Name and salary of Highest salary person of each City : ",
  top3NamesCityWise,
);

//------------ Department wise average fund ------------------

let avgByDepartment = people.reduce((acc, p) => {
  acc[p.dept] = acc[p.dept] || { total_fund: 0, total_person: 0, avg_fund: 0 };

  acc[p.dept].total_fund += p.salary;
  acc[p.dept].total_person++;
  acc[p.dept].avg_fund = acc[p.dept].total_fund / acc[p.dept].total_person;

  return acc;
}, {});
console.log("Group by Average Expance of each Department : ", avgByDepartment);

//------------ Categorising people according to their Age range ------------------

let grpByAgeRange = people.reduce((acc, p) => {
  let key;

  if (p.age <= 25) {
    key = "25 or Below";
  } else if (p.age > 25 && p.age <= 27) {
    key = "26-27";
  } else {
    key = "28-30+";
  }

  acc[key] = acc[key] || [];
  acc[key].push(p);

  return acc;
}, {});
console.log("people according to their Age range : ", grpByAgeRange);

//------------ Categorising people according to their Salary range------------------

let grpBySalRange = people.reduce((acc, p) => {
  let key;

  if (p.salary <= 60000) {
    key = "Junior";
  } else if (p.salary > 60001 && p.salary <= 80000) {
    key = "Senior";
  } else {
    key = "Super Senior";
  }

  acc[key] = acc[key] || [];
  acc[key].push({ name: p.name, salary: p.salary });

  return acc;
}, {});
console.log("people Satus according to their Salary range : ", grpBySalRange);

*/

console.log("------------------ FILTER FUNCTION -------------------------");

let arr11 = [9, 6, 2, 10, 3, 8, 4, 1, 5, 7];

let evenNum = arr11.filter((n) => n % 2 == 0);
console.log("Even digit from arr11 are :", evenNum);

let moreThanFive = arr11.filter((n) => n > 5);
console.log("Digits greater then 5 in arr11 are :", moreThanFive);

let fromFourToEight = arr11.filter((n) => n >= 4 && n <= 8);
console.log("Digits from 4 to 8 in arr11 are :", fromFourToEight);

let divisibleByThree = arr11.filter((n) => n % 3 == 0);
console.log("Digits divisible by 3 in arr11 are :", divisibleByThree);

let removeFive = arr11.filter((n) => !(n == 5));
console.log("Removing digit5 from arr11 are :", removeFive);

let removeMultipleOfThree = arr11.filter((n) => !(n % 3 == 0));
console.log(
  "Removing digits divisible by 3 in arr11 are :",
  removeMultipleOfThree,
);

let removeThreeToSeven = arr11.filter((n) => !(n >= 3 && n <= 7));
console.log("Removing digits from 3 to 7 in arr11 are :", removeThreeToSeven);

let digSqrLessThan50 = arr11.filter((n) => n * n < 50);
console.log(
  "Digits having square less than 50 in arr11 are :",
  digSqrLessThan50,
);

let primeNum = arr11.filter((n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
});
console.log("Prime numbers in arr11 are :", primeNum);

let evenIndexDigits = arr11.filter((n, i) => i % 2 === 0);
console.log("Digits at even Index in arr11 are :", evenIndexDigits);

let arr12 = [5, 2, 3, 1, 5, 2, 3, 7, 6, 8, 9, 2, 5, 3, 7, 4, 1, 6];
let uniqueArr12 = arr12.filter((curr, ind, arr) => arr.indexOf(curr) === ind);
console.log(uniqueArr12);

let arr = [0, 1, false, 2, "", 3, null];
let clean = arr.filter(Boolean);
console.log("Cleaned arr : ", clean);

let fruits = ["apple", "banana", "mango", "grape", "orange", "avacado"];

let aStartFruit = fruits.filter((fr) => fr.startsWith("a"));
console.log(aStartFruit);
let eEndFruit = fruits.filter((fr) => fr.endsWith("e"));
console.log(eEndFruit);
let anIncludingFruit = fruits.filter((fr) => fr.includes("an"));
console.log(anIncludingFruit);
let longFruit = fruits.filter((fr) => fr.length > 5);
console.log(longFruit);

let people = [
  { name: "Kiran", age: 27, city: "Delhi", dept: "IT", salary: 52000 },
  { name: "Raja", age: 25, city: "Delhi", dept: "IT", salary: 90000 },
  { name: "Vicky", age: 30, city: "Mumbai", dept: "HR", salary: 70000 },
  { name: "Aman", age: 25, city: "Delhi", dept: "Finance", salary: 55000 },
  { name: "Neha", age: 28, city: "Pune", dept: "IT", salary: 85000 },
  { name: "Rahul", age: 30, city: "Delhi", dept: "IT", salary: 50000 },
  { name: "Priya", age: 25, city: "Mumbai", dept: "HR", salary: 62000 },
  { name: "Saurabh", age: 28, city: "Pune", dept: "Finance", salary: 48000 },
  { name: "Kiran", age: 27, city: "Delhi", dept: "IT", salary: 52000 },
  { name: "Anjali", age: 30, city: "Mumbai", dept: "Finance", salary: 68000 },
  { name: "Deepak", age: 27, city: "Delhi", dept: "HR", salary: 74000 },
  { name: "Rahul", age: 30, city: "Delhi", dept: "IT", salary: 50000 },
];

let unikObj = people.filter(
  (p, i, a) => a.findIndex((x) => x.name === p.name) === i,
);
console.log("Unique Objects are : ", unikObj);

let aInName = people.filter((nm) => !nm.name.toLowerCase().includes("a"));
console.log(aInName);

let delhiPeople = people.filter((person) => person.city === "Delhi");
console.log(delhiPeople);

let aboveAgeTwentySeven = people.filter((person) => person.age > 27);
console.log(aboveAgeTwentySeven);

let salaryAbove60k = people.filter((person) => person.salary > 60000);
console.log(salaryAbove60k);

let itGuys = people.filter((person) => person.dept === "IT");
console.log(itGuys);

let delhiPersonAbove55k = people.filter(
  (person) => person.city === "Delhi" && person.salary > 55000,
);
console.log(delhiPersonAbove55k);
