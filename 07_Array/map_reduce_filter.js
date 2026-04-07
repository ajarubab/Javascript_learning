/*
// ***************** MAP *****************

//------- using callback function -------

let arr = [4, 6, 2, 8, 3, 9];

function double(x) {
  return x * 2;
}

let output1 = arr.map(double);
console.log("The double of arr elements are using map with callback function : ", output1);

//------- using inline function -------

let output2 = arr.map(
  function double(x) {
    return x * 2;
  }
);
console.log("The double of arr elements are using map with HOF : ", output2);

//------- using anonymous function -------

let output3 = arr.map(
  function (x) {
    return x * 2;
  }
);
console.log("The double of arr elements are using map with anonymous function  : ", output3);

//------- using arrow function -------

// For block body syntax (i.e. with {}), the return statement is required
let output4 = arr.map((x) => {
  return x * 2;
});
console.log("The double of arr elements using arrow function :", output4);


// For single expression (i.e. without {}), return is implicit
let output5 = arr.map((x) => x * 2);
console.log("The double of arr elements using arrow function with single expression :", output5);

// Parentheses are optional when there is only one parameter
let result = arr.map(n => n ** 2);
console.log("The actual arr elements are : ", arr);   // Actual array remains intact
console.log("The array when its all element are squared :", result);

//------- 2 parameter use of map function -------

let subj = ['Html', "CSS", `Javascript`, "React"];
let indexedSub1 = subj.map(
  (sub, index) => { return `Subject Id : ${index + 1}, Subject : ${sub}` }    // return of array of strings
);
console.log("SubjectId and their Ids : ", indexedSub1);

let indexedSub2 = subj.map(
  (sub, index) => ({ SubjectId: (index + 1), Subject: (sub) })   // return of array of objects
);
console.log("SubjectId and subject : ", indexedSub2);

//------- 3 parameter use of map function -------

let IndSubWithArray = subj.map(
  (subject, index, arr) => {
    return `Id : ${index}, Subject : ${subject}, From : ${arr}`;
  }
);
console.log(IndSubWithArray);

//------- Chaining of map function -------

let chainedMap = arr.map(x => x * 2).map(x => x + 3);
console.log(chainedMap);

//------- use of map function with condition -------

let cubeEvenZeroOdd = arr.map((x, ind) => {
  if (x % 2 === 0) {
    x = x ** 3;
  } else {
    x = x * 0;
  }
  return `${arr[ind]} : ${x}`;
});
console.log(cubeEvenZeroOdd);

let sqrEven = arr.map((x) => {
  x = x % 2 === 0 ? x ** 2 : x;
  return x;
});
console.log(sqrEven);

let sqrEvencubeOdd = arr.map(x => x % 2 === 0 ? x ** 2 : x ** 3);
console.log(sqrEvencubeOdd);


// ***************** REDUCE *****************

/**

syntax :

array.reduce((accumulator, currentValue) => {
 return updatedValue;
}, initialValue);

*/


/*
// ------- reduce function returns single value -------

let arr1 = [12, 23, 34, 45, 56, 27, 38, 54, 27, 11, 32];

let sum = arr1.reduce((total, num) => total + num, 0);

console.log("Elements of arr7 are : ", arr1);
console.log("The sum of all elements of arr1 is : ", sum);


let max = arr1.reduce(
  (acc, cur) => {
    return cur > acc ? cur : acc;
  }, // if initialValue not given , index 0 element value is treated as initial value automatically
);
console.log("Max value in arr7 is : ", max);

let min = arr1.reduce((acc, cur) => {
  return cur < acc ? cur : acc;
}, arr1[0]);
console.log("Minimum value in arr7 is : ", min);

//------- Array transformation ( reduce as Map ) -------

let res2 = arr1.reduce((acc, dig) => {
  acc.push(dig * dig);
  // acc.push({ num: dig, sqr: dig ** 2 });
  return acc;
}, []);

console.log("Actual Array Element : ", arr1);
console.log("Actual Array Elements Squares : ", res2);

//------- Array transformation ( reduce as Filter ) -------

let res3 = arr1.reduce((acc, cur) => {
  // if(cur % 2 === 0){
  //     acc.push(cur);
  // }
  cur % 2 === 0 && acc.push(cur);
  return acc;
}, []);

console.log(res3);

// ---------- use of reduceRight() -------------

let revArr1 = arr1.reduceRight((acc, num) => {
  acc.push(num);
  return acc;
}, []);
console.log("Reversed Array is : ", revArr1);

//-------  [Array -> object transformation] -------

let obj = arr1.reduce((acc, num) => {
  acc[num] = num * num;
  return acc;
}, {}); // in object type, the elements gets sorted in ascending order automatically
console.log("Number and Squares are : ", obj);

//------- separating even and odd elements -------

let evenOdd = arr1.reduce(
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

//------- flatten the elements of nested array -------

let arr2 = [[1, 2], [9, 8], [3, 4, 5], [7], 6];
let singleArr = arr2.reduce((acc, dig) => {
  return acc.concat(dig);
}, []);

console.log(singleArr);

//------- getting frequency of elements -------

let digArr = [
  3, 7, 1, 4, 9, 3, 0, 7, 1, 2, 9, 1, 6, 4, 3,
  8, 2, 5, 7, 2, 4, 9, 3, 0, 7, 5, 2, 9, 3,
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

//------- removing duplicate value from the array -------

let uniqueDigits = digArr.reduce((acc, dig) => {
  if (!acc.includes(dig)) {
    acc.push(dig);
  }
  return acc;
}, []);
console.log("Unique value are : ", uniqueDigits);


// ***************** FILTER *****************

let evenNum = arr1.filter((n) => n % 2 == 0);
console.log("Even digit from arr1 are :", evenNum);

let moreThanFive = arr1.filter((n) => n > 5);
console.log("Digits greater then 5 in arr1 are :", moreThanFive);

let fromFourToEight = arr1.filter((n) => n >= 4 && n <= 8);
console.log("Digits from 4 to 8 in arr1 are :", fromFourToEight);

let divisibleByThree = arr1.filter((n) => n % 3 == 0);
console.log("Digits divisible by 3 in arr1 are :", divisibleByThree);

let removeFive = arr1.filter((n) => !(n == 5));
console.log("Removing digit5 from arr1 are :", removeFive);

let removeMultipleOfThree = arr1.filter((n) => !(n % 3 == 0));
console.log(
  "Removing digits divisible by 3 in arr1 are :",
  removeMultipleOfThree,
);

let removeThreeToSeven = arr1.filter((n) => !(n >= 3 && n <= 7));
console.log("Removing digits from 3 to 7 in arr1 are :", removeThreeToSeven);

let digSqrLessThan50 = arr1.filter((n) => n * n < 50);
console.log(
  "Digits having square less than 50 in arr1 are :",
  digSqrLessThan50,
);

let primeNum = arr1.filter((n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
});
console.log("Prime numbers in arr1 are :", primeNum);

let evenIndexDigits = arr1.filter((n, i) => i % 2 === 0);
console.log("Digits at even Index in arr1 are :", evenIndexDigits);

let arr3 = [5, 2, 3, 1, 5, 2, 3, 7, 6, 8, 9, 2, 5, 3, 7, 4, 1, 6];
let uniqueArr3 = arr3.filter((curr, ind, arr) => arr.indexOf(curr) === ind);
console.log(uniqueArr3);

let arr4 = [0, 1, false, 2, "", 3, null];
let clean = arr4.filter(Boolean);
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

// ***************** FILTER + MAP *****************

// (1). Double Even Number

let ans1 = arr1
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2);
console.log("Double of Even elements ony are : ", ans1);

// (2). Square value of Elements which are > 10

let ans2 = arr1
  .filter((n) => n > 10)
  .map((n) => n * n);
console.log("Squered value of elements greater than 10 are :", ans2);

// (3). Cube of Odd values Elements

let ans3 = arr1
  .filter(n => n % 2 !== 0)
  .map(n => n * n * n);
console.log("The cube of odd valued elements are :", ans3);

let names = [
  "aman", "rohit", "alex", "john", "ankit", "sara",
  "mohan", "ajay", "vikas", "arjun", "xavier"
];

// (4). Capitalise all names Starting with alphabet "a"

let ans4 = names
  .filter(n => n.startsWith("a"))
  .map(n => n.toUpperCase());
console.log("Fltered Names :", ans4);

// (5). Reverse the name having length > 4

let ans5 = names
  .filter(n => n.length > 4)
  .map(n => n.split("").reverse()
    .join(""));
console.log("Customized names:", ans5);

// ***************** FILTER + REDUCE *****************

// (17.) Count numbers > 10

let ans17 = arr1
  .filter(n => n > 10)
  .reduce(count => count + 1, 0);
console.log(`There are ${ans17} numbers which are more than 10.`);

// (18.) Sum of only even numbers

let ans18 = arr1
  .filter(n => n % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Sum of even numbers only are :", ans18);

// (19.) Get Max number which is greater than 10

let ans19 = arr1
  .filter(n => n > 10)
  .reduce((acc, num) => acc > num ? acc : num, 0);
console.log("The Highest number which is greater than 10 is : ", ans19);

// (20). Get the sum of squares of even numbers

let ans20 = arr1
  .filter(n => n % 2 === 0)
  .reduce((sum, num) => sum + num * num, 0);
console.log("The sum of squares of even numbers of arr1 is: ", ans20);

// (22). Get the sum of numbers between 5-20

let ans21 = arr1
  .filter(n => (n >= 5 && n <= 20))
  .reduce((sum, num) => sum + num, 0);
console.log("The sum of numbers between from 5 to 20 of arr1 is :", ans21);

// (22). Get the average of odd numbers

let odds = arr1.filter(n => n % 2 !== 0);
let ans22 = odds.reduce((acc, sum) => acc + sum, 0) / odds.length;
console.log("The average of odd numbers is:", ans22);

let answ22 = arr1
  .filter(n => n % 2 !== 0)
  .reduce((acc, n, i, arr) => acc + n / arr.length, 0);
console.log("The average of odd numbers is:", answ22);

// (23). Get the sum of all numbers excluding smallest one

let smallestNum = arr1.reduce((acc, num) => acc < num ? acc : num);
console.log("The minimum number in the arr1 is : ", smallestNum);
let ans23 = arr1
  .filter(n => n !== smallestNum)
  .reduce((s, n) => s + n, 0);
console.log("Sum of all number except minimim one is : ", ans23);

// (24). Get the prime numbers

let primes = arr1
  .filter(
    n => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    }
  );

let primeCount = primes.reduce(n => n + 1, 0);
let ans24 = primes.reduce((pro, n) => pro * n, 1);
console.log("Prime number are : ", primes);
console.log("Total prime number count are : ", primeCount);
console.log("Total prime number product is : ", ans24);

// (25). Sum of all unique values

let arr5 = [
  5, 12, 7, 5, 20, 12, 3, 7, 25, 30,
  2, 8, 3, 15, 18, 20, 25, 2, 9, 10,
  15, 6, 8, 14, 6, 11, 9, 4, 10, 14
];

let uniques = [... new Set(arr5)].filter(n => true);
let ans25 = uniques.reduce((s, n) => s + n, 0);
console.log("All unique values is :", uniques);
console.log("Sum of all unique values is :", ans25);

// ***************** MAP + REDUCE *****************

// (26). Sum of Squares

let ans26 = arr1
  .map(n => n * n)
  .reduce((s, n) => s + n, 0);
console.log("The Sum of squares of values are :", ans26);

// (27). Concatenate as String

let ans27 = arr1
  .map(n => n.toString())
  .reduce((a, s) => a + ", " + s, "");
console.log("Concatenated values are :", ans27);

// (28). Sum of even numbers

let ans28 = arr1
  .map(n => n % 2 === 0 ? n : 0)
  .reduce((s, n) => s + n, 0);
console.log("Sum of even numbers : ", ans28);

// (29). Weighted sum of all elements

let ans29 = arr1
  .map((n, i) => n * i)
  .reduce((s, n) => s + n, 0);
console.log("Answer", ans29);

// (30). Sum of all elements individual digits

let ans30 = arr1
  .map(n => n.toString().split('').map(Number))
  .reduce((s, arr) => s + arr.reduce((a, b) => a + b, 0), 0);
console.log("Sum of all elements individual digits is : ", ans30);

// ***************** FILTER + MAP + REDUCE *****************

let arr6 = [12, 5, 8, 20, 3, 15, 7, 30, 2, 25, 18];

// ------- find the sum of sqaure of even numbers -------

let ans36 = arr6
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((acc, sum) => acc + sum, 0);
console.log(ans36);

// ------- find the sum of double of the numbers > 10 -------

let ans37 = arr6
  .filter(n => n > 10)
  .map(n => n * 2)
  .reduce((acc, sum) => acc + sum, 0);
console.log(ans37);

// ------- find the string of odd the numbers -------

let ans38 = arr6
  .filter(n => n % 2 !== 0)
  .map(n => n.toString())
  .reduce((acc, num) => acc + "_" + num);
console.log(ans38);

// ------- get the count of even squared number which are less than 100 -------

let ans39 = arr6
  .filter(n => n % 2 === 0)
  .map(n => n * n).filter(n => n < 100)
  .reduce((acc) => acc + 1, 0);
console.log(ans39);

//------- Get the Sum of all digits of odd numbers -------

let ans40 = arr6
  .filter(n => n % 2 !== 0)
  .map(n => n.toString().split('').map(Number))
  .reduce((a, c) => a + c.reduce((b, sum) => b + sum, 0), 0);

console.log(ans40);

let ans41 = arr6
  .filter(n => n % 2 !== 0)
  .map(n => n.toString().split('').map(Number))
  .map(digits => digits.reduce((a, b) => a + b, 0))
  .reduce((sum, n) => sum + n, 0);

console.log(ans41);


console.log("---------------- Operation on ARRAY of OBJECTS --------------------");

let rawData = [
  { name: "Vikas", age: 35, salary: 80000, city: "Delhi", role: "Manager", experience: 10, department: "Management", joiningYear: 2015, skills: ["Strategy"], rating: 4.0 },
  { name: "Ram", age: 25, salary: 50000, city: "Delhi", role: "Developer", experience: 3, department: "IT", joiningYear: 2021, skills: ["JS", "React"], rating: 4.2 },
  { name: "Shyam", age: 17, salary: 20000, city: "Noida", role: "Intern", experience: 0, department: "IT", joiningYear: 2024, skills: ["HTML"], rating: 3.5 },
  { name: "Aman", age: 30, salary: 70000, city: "Gurgaon", role: "Manager", experience: 7, department: "Management", joiningYear: 2018, skills: ["Leadership", "Excel"], rating: 4.7 },
  { name: "Riya", age: 22, salary: 40000, city: "Delhi", role: "Designer", experience: 2, department: "Design", joiningYear: 2022, skills: ["Figma", "UI"], rating: 4.1 },
  { name: "Karan", age: 19, salary: 30000, city: "Faridabad", role: "Support", experience: 1, department: "Support", joiningYear: 2023, skills: ["Communication"], rating: 3.8 },
  { name: "Neha", age: 28, salary: 60000, city: "Noida", role: "Developer", experience: 5, department: "IT", joiningYear: 2020, skills: ["JS", "Node"], rating: 4.5 },
  { name: "Vikas", age: 35, salary: 80000, city: "Delhi", role: "Manager", experience: 10, department: "Management", joiningYear: 2015, skills: ["Strategy"], rating: 4.0 },
  { name: "Pooja", age: 24, salary: 45000, city: "Gurgaon", role: "HR", experience: 3, department: "HR", joiningYear: 2021, skills: ["Recruitment"], rating: 4.3 },
  { name: "Sonal", age: 18, salary: 25000, city: "Noida", role: "Intern", experience: 1, department: "IT", joiningYear: 2023, skills: ["HTML", "CSS"], rating: 3.6 },
  { name: "Arjun", age: 21, salary: 52000, city: "Delhi", role: "Developer", experience: 2, department: "IT", joiningYear: 2022, skills: ["JS", "CSS"], rating: 4.0 },
  { name: "Sonal", age: 18, salary: 25000, city: "Noida", role: "Intern", experience: 1, department: "IT", joiningYear: 2023, skills: ["HTML", "CSS"], rating: 3.6 },
  { name: "Aman", age: 30, salary: 70000, city: "Gurgaon", role: "Manager", experience: 7, department: "Management", joiningYear: 2018, skills: ["Leadership", "Excel"], rating: 4.7 }
];


let people = Array.from(
  new Set(rawData.map(p => JSON.stringify(p)))
).map(p => JSON.parse(p));

console.log(people);
console.table(people, ['name', 'department', 'salary']);

// ***************** MAP *****************

let usernames = people.map(person => person.name);
console.log("user names are : ", usernames);

let usersage = people.map(person => person.age);
console.log("users ages are : ", usersage);

//----------------------- Objects destructuring ---------------

let userNamesOnly = people.map(({ name }) => name);
console.log(userNamesOnly);

let userAgeOnly = people.map(({ age }) => age);
console.log(userAgeOnly);

let userNameAge = people.map(({ name, age }) => `${name} is ${age} years old`);
console.log(userNameAge);

//----------------------- Objects value transformation -----------

let smallCaseUserName = people.map(person => person.name.toLowerCase());
console.log("small case user names are : ", smallCaseUserName);

let usermailid = people.map(person => person.name + "@gamil.in");
console.log("user mail ids are : ", usermailid);

//----------------------- Objects key transformation ------------------

let newUser = people.map((user) => {
  return {
    username: user.name,
    userage: user.age,
  }
});
console.log(newUser);

// ***************** FILTER *****************

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

// ***************** REDUCE *****************

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

// -------------- Nested Array Flattening ------------

let nestedArr = [1, [2, [3, [4]]]];

function flatten(nestedArr) {
  return nestedArr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log("Flattened Array is : ", flatten(nestedArr));


// ***************** FILTER + MAP *****************

let unikNames = people
  .map(p => p.name)
  .filter((nm, i, a) => a.indexOf(nm) === i);
console.log("Unique Names are : ", unikNames);

// --- All developer name --------------------
let ans42 = people.filter(p => p.role === "Developer").map(p => p.name);
console.log("The developer are : ", ans42);

// --- Name department and salary of people having salary more than 50k -------------------

let ans44 = people
  .filter(p => p.salary > 50000)
  .map(p => ({ Name: p.name, department: p.department, Salary: p.salary }));
console.log(ans44);

// (6). Get the user names of IT developer guys

let ans6 = people
  .filter(u => u.department == "IT" && u.role == "Developer")
  .map(u => u.name);
console.log(ans6);

// (7). Get the user names having ratings > 4.3

let ans7 = people
  .filter(u => u.rating > 4.3)
  .map(u => u.name);
console.log(" User having ratings more than 4.3 are: ", ans7);

// (8). Get the user names who joined after 2021

let ans8 = people
  .filter(u => u.joiningYear > 2021)
  .map(u => u.name);
console.log("People who joined after 2021 are :", ans8);

// (9). Reward bonus 10000 who's experince is more than 3 years

let ans9 = people
  .filter(u => u.experience > 3)
  .map(u => u.salary + 10000);
console.log("Salary of people after 10000 reward for more than 3 year experience :", ans9);

// (10). User name and all Skills having JS skill

let ans10 = people
  .filter(u => u.skills.includes("JS"))
  .map(u => ({ Name: u.name, Skills: u.skills }));
console.log("people having JS skill are : ", ans10);

// (11.) Increase the salary of people except interns by 20%

let ans11 = people
  .filter(u => u.role !== "Intern")
  .map(u => ({ name: u.name, role: u.role, salary: u.salary * 1.2 }));
console.log(ans11);

// (12.) Add a key level: "Junior" id experience is < 3 years

let ans12 = people
  .filter(u => u.experience < 3)
  .map(u => ({ ...u, level: "Junior" }));
console.log("Junior people are:", ans12);

// (13.) Join the Skills to show as single string as String of Developers 

let ans13 = people
  .filter(u => u.role === "Developer")
  .map(u => ({
    name: u.name,
    skills: u.skills.join(", ")
  }));
console.log("Output:", ans13);

// (14.) Full summary strirng of username and role having age < 25 and rating > 4

let ans14 = people
  .filter(u => (u.age < 25 && u.rating > 4))
  .map(u => `${u.name} (${u.role}) - ${u.rating}`);
console.log("Result : ", ans14);

// (15.) Fetch name. department and Skills of the people having more than one skills

let ans15 = people
  .filter(u => (u.skills.length > 1))
  .map(u => ({ Name: u.name, Department: u.department, Skills: u.skills }));
console.log("The Output is:", ans15);

// (16.) List the name and salary of all people who are not Interns or Support

let ans16 = people
  .filter(u => (u.role !== "Intern" && u.role !== "Support"))
  .map(u => `${u.name} : ${u.salary}`);
console.log("The Result is:", ans16);

// ------- use of flatmap() ------------------

let myarr = ["hello world", "hi there"];

let words = myarr.flatMap(str => str.split(" "));
console.log("My Array using flatmap is : ", words);

// ***************** FILTER + REDUCE *****************

// --- Toal IT people count -------------------

let ans43 = people.filter(p => p.department === "IT").reduce(acc => acc + 1, 0);
console.log("Total IT Employee : ", ans43);

// Total salary combined of developers

let totalDevSal = people
  .filter(p => p.role === "Developer")
  .reduce((total, p) => total + p.salary, 0);
console.log("The total salary of the developers are : ", totalDevSal);

// Get the Count of total Interns

let totalInternCount = people
  .filter(p => p.role === "Intern")
  .reduce(c => c + 1, 0);
console.log("Total Interns are :", totalInternCount);

// Highest salary person among developers

let mpd = people
  .filter(p => p.role === "Developer")
  .reduce((max, p) => p.salary > max.salary ? p : max);
console.log("Max paid dev is : ", { naam: mpd.name, salary: mpd.salary });

// get the sum of all people having skill of JS and experience more than 2 years
let res1 = people
  .filter(u => u.skills.includes("JS") && u.experience > 2)
  .reduce((sum, p) => sum + p.salary, 0);
console.log("Output : ", res1);

// get the count of all non IT people

let myresult2 = people
  .filter(u => u.department !== "IT")
  .reduce(c => c + 1, 0);
console.log("There are", myresult2, "NON-IT people.");

// Get the name and salary only as OBJECT of IT department people

let myresult3 = people
  .filter(p => p.department === "IT")
  .reduce((acc, p) => {
    acc[p.name] = p.salary
    return acc;
  }, {});
console.log("Name and Salary of IT department people are : ", myresult3);

// Get the name and experience OBJECT of people having salary more than 50k

let res4 = people
  .filter(p => p.salary > 50000)
  .reduce((acc, p) => {
    acc[p.name] = { Exp: p.experience, Sal: p.salary }
    return acc;
  }, {});
console.log("Name, experience and Salary of people having sal > 50k :", res4);


// Get the name and experience ARRAY of people having salary more than 50k

let res5 = people
  .filter(p => p.salary > 50000)
  .reduce((acc, p) => {
    acc.push({ name: p.name, exp: p.experience, Sal: p.salary })
    return acc
  }, []);
console.log("Name, experience and Salary of people having sal > 50k :", res5);

// Get the list of Delhi people acc to grouped by their role as OBJECT

let res6 = people
  .filter(p => p.city === "Delhi")
  .reduce((acc, p) => {
    (acc[p.role] = acc[p.role] || []).push(p.name);
    return acc;
  }, {});
console.log("Delhi people according to their role are :", res6);

// Get the list of people departmentwise who have joined after 2021

let res7 = people
  .filter(p => p.joiningYear > 2021)
  .reduce((acc, p) => {
    (acc[p.department] = acc[p.department] || [])
      .push({ name: p.name, age: p.age, sal: p.salary });
    return acc;
  }, {});
console.log("Department waise people who joined after 2021 :", res7);

// Get the list of people departmentwise who have joined after 2021

let res8 = people
  .filter(p => p.rating > 4)
  .reduce((acc, p) => {
    acc[p.role] = (acc[p.role] || 0) + 1;
    return acc;
  }, {});
console.log("Role wise count who have rating > 4 are :", res8);

// ***************** MAP + REDUCE *****************

// (31). Average Age

let ans31 = people
  .map(p => p.age)
  .reduce((acc, sum, _, arr) => acc + sum / arr.length, 0);
console.log("Average age of IT persons :", ans31);

// (32). Max Salary in Company

let ans32 = people
  .map(p => p.salary)
  .reduce((acc, max) => max > acc ? max : acc, 0);
console.log("Max Salary is :", ans32);

// (33). Get all Unique Skills in One Array

let arr33 = people
  .map(p => p.skills)
  .reduce(
    (acc, skills) => {
      skills.forEach(
        skill => {
          if (!acc.includes(skill)) acc.push(skill);
        });
      return acc;
    }, []);
console.log("All Unique Skills in an array is :", arr33);


// ----------- Structure by Map and Object by Reduce --------------------

let exp = people
  .map(p => (({ key: p.name, value: p.city })))
  .reduce((acc, person) => {
    acc[person.key] = person.value;
    return acc;
  }, {});
console.log("The Name and City are : ", exp);

let exp2 = people.map(p => [p.name, p.salary])
  .reduce((acc, [name, salary]) => {
    acc[name] = salary;
    return acc;
  }, {});
console.log("Name and Sal : ", exp2);

// (34). Total Salary per city

let ans34 = people
  .map(p => ({ sheher: p.city, vetan: p.salary }))
  .reduce((acc, p) => {
    acc[p.sheher] = (acc[p.sheher] || 0) + p.vetan;
    return acc;
  }, {});
console.log("Total Salary Fund per city is : ", ans34);

// -------- get the sum of salary * experience of each department of each city ----

let ans35 = people
  .map(p => ({ city: p.city, dpt: p.department, sal: p.salary, exp: p.experience }))
  .reduce((acc, { city, dpt, exp, sal }) => {
    if (!acc[city]) acc[city] = {};
    acc[city][dpt] = (acc[city][dpt] || 0) + exp * sal;
    return acc;
  }, {});
console.log(ans35);

// ***************** FILTER + MAP + REDUCE *****************

// --------- sum of salary of all developers -----------

let ans45 = people
  .filter(p => p.role === "Developer")
  .map(p => p.salary)
  .reduce((sum, sal) => sum + sal, 0);
console.log("Sum of Salaries of all developers : ", ans45);

// ***************** ANONYMOUS *****************

// --------- unique skills of peoples -------------

let uniqueSkills = people
  .flatMap(p => p.skills)
  .filter((skill, i, arr) => arr.indexOf(skill) === i);
console.log(uniqueSkills);

*/
/**

alert("This is Basic area alert");

let age = prompt("What's your age dear ?");
console.log(age);

console.time('res in');
alert("click 2 cont")
console.timeEnd('res in');

*/

/*
// ************* SORT *********************

let arr1 = [12, 23, 34, 45, 56, 27, 38, 54, 27, 11, 32];
console.log("Actual arr1 before sorting: ", arr1);
let sort1 = arr1.sort((a, b) => a - b);  // changes the value of actual array
console.log("Ascending order sorting method 1: ", sort1);
console.log("Actual arr1 after sorting 1: ", arr1);
console.log("------------------------------------------");

let arr2 = [33, 27, 38, 54, 11, 32, 12, 23, 34, 45, 56];
console.log("Actual arr2 before sorting: ", arr2);
let sort_1 = [...arr2].sort((a, b) => a - b);  // does not change the value of actual array
console.log("Ascending order sorting method 2: ", sort_1);
console.log("Actual arr2 after sorting: ", arr2);
console.log("------------------------------------------");

let arr3 = [54, 11, 32, 33, 27, 38, 12, 23, 34, 45, 56];
console.log("Actual arr3 before sorting: ", arr3);
let sort2 = arr3.sort((a, b) => b - a);
console.log("Descending order sorting method 1: ", sort2);
console.log("Actual arr3 after sorting: ", arr3);
console.log("------------------------------------------");

let arr4 = [33, 38, 54, 12, 23, 34, 45, 56, 27, 11, 32];
console.log("Actual arr4 before sorting: ", arr4);
let sort_2 = [...arr4].sort((a, b) => b - a);
console.log("Descending order sorting method 2: ", sort_2);
console.log("Actual arr4 after sorting: ", arr4);
console.log("------------------------------------------");

// ----- Evens first Odds later / Odds first even later sorting in ascending or descending order 
let evenOdd = [...arr4].sort((a, b) => {

  // ------ for even first odd later
  // if(a%2 === 0 && b%2 !== 0) return -1;
  // if(a%2 !== 0 && b%2 === 0) return 1;

  // ------ for odd first even later
  if (a % 2 === 0 && b % 2 !== 0) return 1;
  if (a % 2 !== 0 && b % 2 === 0) return -1;

  // return a-b;   // ascending order
  return b - a;   // descending order
});
console.log("Even and Odd with Ascending and Descending :", evenOdd);

// ------ sort the array closest or farthest wrt a number --------
let closestTo30 = [...arr4].sort((a, b) => Math.abs(a - 30) - Math.abs(b - 30));
console.log("The Closest to farthest numbers wrt 30 are : ", closestTo30);

let farthestTo30 = [...arr4].sort((a, b) => Math.abs(b - 30) - Math.abs(a - 30));
console.log("The Farthest to Closest numbers wrt 30 are : ", farthestTo30);

// ---------- remove the repated digits and sort the unique digits in descending order
repeatativeElementArray = [2, 5, 3, 7, 1, 9, 3, 0, 4, 7, 0, 2, 7, 4];
let uniqueSorted = [...new Set(repeatativeElementArray)].sort((a, b) => b - a);
console.log("Unique digits in descending order are :", uniqueSorted);


let people = [
  { name: "Ram", age: 25, salary: 60000, city: "Delhi", role: "Developer", experience: 3, department: "IT", joiningYear: 2021, skills: ["JS", "React"], rating: 4.2 },
  { name: "Shyam", age: 23, salary: 25000, city: "Noida", role: "Intern", experience: 0, department: "IT", joiningYear: 2024, skills: ["HTML"], rating: 3.5 },
  { name: "Riya", age: 22, salary: 40000, city: "Delhi", role: "Designer", experience: 2, department: "Design", joiningYear: 2022, skills: ["Figma", "UI"], rating: 4.1 },
  { name: "Karan", age: 19, salary: 30000, city: "Faridabad", role: "Support", experience: 1, department: "Support", joiningYear: 2023, skills: ["Communication"], rating: 3.8 },
  { name: "Arjun", age: 24, salary: 52000, city: "Delhi", role: "Developer", experience: 2, department: "IT", joiningYear: 2022, skills: ["JS", "CSS"], rating: 4.0 },
  { name: "Neha", age: 28, salary: 60000, city: "Noida", role: "Developer", experience: 5, department: "IT", joiningYear: 2020, skills: ["JS", "Node", "React"], rating: 4.5 },
  { name: "Vikas", age: 35, salary: 80000, city: "Delhi", role: "Manager", experience: 10, department: "Management", joiningYear: 2015, skills: ["Strategy"], rating: 4.0 },
  { name: "Pooja", age: 24, salary: 45000, city: "Gurgaon", role: "HR", experience: 3, department: "HR", joiningYear: 2021, skills: ["Recruitment"], rating: 4.3 },
  { name: "Sonal", age: 21, salary: 25000, city: "Noida", role: "Intern", experience: 1, department: "IT", joiningYear: 2023, skills: ["HTML", "CSS"], rating: 3.6 },
  { name: "Aman", age: 30, salary: 70000, city: "Gurgaon", role: "Manager", experience: 7, department: "Management", joiningYear: 2018, skills: ["Leadership", "Excel"], rating: 4.7 }
];

// -------- Salary Ascending/Descending ----------

let people_sort_1 = [...people].sort(
  (a, b) => a.salary - b.salary
);
console.log("Sorted salaray wise people low to high", people_sort_1);

let people_sort_2 = [...people].sort(
  (a, b) => b.salary - a.salary
);
console.log("Sorted salaray wise people high to low", people_sort_2);

//---------- sorting of oldest to youngest people ------

let people_sort_3 = [...people].sort(
  (a, b) => b.age - a.age
);
console.log("Sorted age-wise people old to young : ", people_sort_3);

//---------- sorting of people according to their alphabetical order of name ------

let people_sort_4 = [...people].sort(
  (a, b) => a.name.localeCompare(b.name)
);
console.log("people acc to alphabetical order of names : ", people_sort_4);

// sorting based on more than one parameter

let people_sort_5 = [...people].sort(
  (a, b) => {
    if (a.salary !== b.salary) return a.salary - b.salary;
    return a.age - b.age;
  }
);
console.log("If salary is same, less age person sort first", people_sort_5);

// sorting based on City

let people_sort_6 = [...people].sort(
  (a, b) => a.city.localeCompare(b.city)
);
console.log("Department wise sorting : ", people_sort_6);

// sorting based on City + Salary

let people_sort_7 = [...people].sort(
  (a, b) => {
    if (a.city !== b.city) return a.city.localeCompare(b.city);
    return a.salary - b.salary;
  }
);
console.log("City same than salary wise sorting : ", people_sort_7);


// ----- Show all delhi people in the begining of the array --------

let people_sort_8 = [...people].sort((a, b) => {
  if (a.city === "Delhi") return -1;
  if (b.city === "Delhi") return 1;
  return 0;
});
console.log("Making all delhi people appear First in the array sorting : ", people_sort_8);

// ----- Show all developer of delhi in the begining of the array --------

let people_sort_9 = [...people].sort((a, b) => {
  if (a.role === "Developer" && a.city === "Delhi") return -1;
  if (b.role === "Developer" && b.city === "Delhi") return 1;
  return 0;
});
console.log("Making all delhi developer appear First in the array sorting : ", people_sort_9);

// ---------- person having salary closest to 50k --------------------

let people_sort_10 = [...people].sort(
  (a, b) =>
    Math.abs(a.salary - 50000) - Math.abs(b.salary - 50000)
);
console.log(people_sort_10);

// -------------- Most Skill count person ------------

let people_sort_11 = [...people].sort((a, b) => a.skills.length - b.skills.length);
console.log("Most skilled person : ", people_sort_11);

// -------- developers first with high rating and experience --------

let people_sort_12 = [...people].sort((a, b) => {
  if (a.role === "Developer" && b.role !== "Developer") return -1;
  if (a.role !== "Developer" && b.role === "Developer") return 1;

  if (a.rating !== b.rating) return b.rating - a.rating;
  return b.experience - a.experience;
}
);
console.log(people_sort_12);

// ----------- sort the people priority wise -------------

let priority = {
  "Manager": 1,
  "HR": 2,
  "Developer": 3,
  "Designer": 4,
  "Support": 5,
  "Intern": 6
}

let people_sort_13 = [...people].sort((a, b) => {
  return (priority[a.role] || 99) - (priority[b.role] || 99)
});
console.log(people_sort_13);

//------ sorting same role person also salarywise while maintaining priority ------

let people_sort_14 = [...people].sort((a, b) => {
  let p1 = priority[a.role] || 99;
  let p2 = priority[b.role] || 99;
  if (p1 !== p2) return p1 - p2;
  return a.age - b.age;

});
console.log(people_sort_14);

*/

// ********** SORT + MAP ************

let arr1 = [34, 23, 12, 45, 56, 27, 38, 54, 27, 11, 32, 56];
let uniqueArr = [... new Set(arr1)];
console.log("Initial Array is :", arr1);
console.log("Unique array is :", uniqueArr);

// --------- sort the numbers then double them -----------
let sm_01 = [...uniqueArr]
  .sort((a, b) => b - a)
  .map(n => n * 2);
console.log(uniqueArr);
console.log("sort in descending order than double each :", sm_01);

// -------- sort and lable even/odd ---------

let sm_02 = [...uniqueArr]
  .sort((a, b) => a - b)
  .map(n => ({
    Num: n,
    Type: n % 2 === 0 ? "Even" : "Odd"
  }));
console.log("Evens and Odds :", sm_02);

// ---------- conditional maping and then sorting -------------

let sm_03 = [...uniqueArr]
  .map(n => n < 30 ? n ** 3 : n ** 2)
  .sort((a, b) => a - b);
console.log("cubes of < 30 and squares of > 30, then sorting : ", sm_03);

// ---------- Sort + gap  + next ----------

let sm_04 = [...uniqueArr]
  .sort((a, b) => a - b)
  .map((n, i, arr) => ({
    current: n,
    previous: arr[i - 1] ?? null,
    next: arr[i + 1] ?? null,
    gap: arr[i + 1] - n || null
  }));
console.log("Current previous Next and Gap : ", sm_04);

// ------- Sort + cummulative sum ------

let sortedArr = [...uniqueArr]
  .sort((a, b) => a - b);
console.log("Sorted : ", sortedArr);
let sum = 0;
let sm_05 = sortedArr.map((n) => {
  sum += n;
  return sum;
});
console.log(sm_05);

// ------ is Non repeating true/false -------------

let sm_06 = arr1
  .sort((a, b) => a - b)
  .map((num, i, arr) => ({
    value: num,
    isNonRepeating: num !== arr[i - 1]
  }));
console.log(sm_06);

// -------- sorting + normalisation ( feature scaling ) -----

let sorted = [...uniqueArr].sort((a, b) => a - b);
let min = sorted[0];
let max = sorted[sorted.length - 1];
let sm_07 = sorted.map(num => ((num - min) / (max - min)));
console.log(sm_07);

// ---------- sort  + range labling ------

let sm_08 = [...uniqueArr]
  .sort((a, b) => a - b)
  .map(n => ({
    value: n,
    group: n < 20 ? "Low" : n < 40 ? "Medium" : "High"
  }));
console.log(sm_08);

