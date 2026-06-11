
// 1. Create a variable using const and store your college name. Print it.
const collageName = "Geeta University"


// 2. Create a variable using let and update its value three times. 
let a = 3;
a = 4;
a = 6;
a = 30;

// 3. Create a block using {} and show that a variable declared with let cannot be accessed 
// outside it. 
{
    let b = 2;
}
console.log(b)   // ReferenceError: b is not defined


// 4. Write a program to swap two numbers using array destructuring.

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);


// 5. Create an arrow function that returns the cube of a number. 
const cube = num => num*num*num;
cube(3)


// 6. Create an arrow function to check whether a number is even or odd.
const check = num => {
    if(num%2==0) console.log("even")
    else console.log("odd")
}
check(4)

// 7. Create an arrow function that finds the maximum of three numbers. 
const maxValue = (a,b,c) => {
    if(a>b && a>c) return a;
    else if(b>c && b>a) return b;
    return c;
}
maxValue(2,3,5)

`
8. Given an array: 
const nums = [10, 20, 30, 40, 50]; 
Use destructuring to get first, second and remaining values.`
let arr = [1,2,4,3,35,34,3]
let [ist,sec,...rem] = arr


// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you 
// are 25 years old." using template literals.
const greeting(name,age){
    return `Hello ${name}, you are ${age} years old.`
}
greeting("Vivek",21)

// 10. Generate the following URL dynamically: "/api/users/101" using template literals.
function api(port){
    return `/api/users/${port}`
}
const PORT = 101;

// 11. Create an object and destructure all properties: 
// JavaScript
// const student = { 
// name: "Ram", 
// age: 25, 
// course: "MERN" 
// }; 

 const student = { 
    name: "Ram", 
    age: 25, 
    course: "MERN" 
}; 

const {name ,age,course} = student
console.log(name,age,course)

// 12. Rename course to technology while destructuring.
const {name ,age,course : technology} = student
console.log(technology);

// 13. Create a function with a default parameter: createUser(name, role="Student")
function createUser(name="User", role="Student"){
    return `Hello ${name}`
}
createUser("Vivek")

// 14. Create a calculator function where the operation defaults to "add". 

function calculator(a,b,operation = "add"){
    if(operation="add") return a+b;
    else if(operation="sub") return a-b;
    else if(operation="mult") return a*b;
    else if(operation="div") return a/b;
}

calculator(2,3)

// 15. Create a function that receives unlimited numbers and returns their sum using the Rest 
// Operator. 

const sum = (...arr) => {
    return arr.reduce((acc,ele)=>acc+ele,0)
}
sum(2,32,32,2)

// 16. Create a function that receives unlimited numbers and returns the largest number.
const largest = (...arr) => {
    return Math.max(arr)
}
largest(2,32,32,2)


// 17. Merge two arrays using the Spread Operator: 
const frontend = ["HTML", "CSS"]; 
const backend = ["Node", "Express"]; 
const result = [...frontend,...backend]


// 18. Copy an array using the Spread Operator and add one extra value. 

const arr1 = [23,23,23,2,3]
const result = [...arr1,2]

// 19. Copy an object and update only the email property. 

const student = { 
    name: "Vivek", 
    age: 25, 
    course: "MERN" ,
    email : "vivek@gmail.com"
}; 

const updateObj = {
    ...student,
    email : "vivekgarg@gmail.com"
}
console.log(student.email)

// 20. Create a product object and create a new object with an added discount field using 
// the Spread Operator.

const student = { 
    name: "Vivek", 
    age: 25, 
    course: "MERN" ,
    email : "vivek@gmail.com"
}; 

const updateObj = {
    ...student,
    discount : 232
}
console.log(updateObj.discount)

`21. Use map() and an arrow function to return only names from the given array: 
JavaScript
const users = [ 
{ name: "Ram", age: 25 }, 
{ name: "Mohan", age: 30 }, 
{ name: "Amit", age: 22 } 
]; `


const users = [ 
{ name: "Ram", age: 25 }, 
{ name: "Mohan", age: 30 }, 
{ name: "Amit", age: 22 } 
]; 

const fnx = (arr) => {
    return arr.map((ele)=>ele.name)
}
console.log(fnx(users))

// 22. Use filter() to get users whose age is greater than 24. 
const users = [ 
{ name: "Ram", age: 25 }, 
{ name: "Mohan", age: 30 }, 
{ name: "Amit", age: 22 } 
]; 

const fnx = (arr) => {
    return arr.filter((ele)=>ele.age>24)
}
console.log(fnx(users))

// 23. Use reduce() to calculate the total age of all users. 
const users = [ 
{ name: "Ram", age: 25 }, 
{ name: "Mohan", age: 30 }, 
{ name: "Amit", age: 22 } 
]; 

const fnx = (arr) => {
    return arr.reduce((acc,ele)=>acc+ele.age,0)
}
console.log(fnx(users))

// 24. Create a function createInvoice(customerName, amount) and return a formatted 
// string using template literals. 

function createInvoice(customerName, amount){
    return `Hello ${customerName}, Your total amount is `
}
createInvoice("Vivek",1000)


// 25. Mini Challenge 
// Given the student object: 
// const student = { 
// name: "Ram", 
// marks: [80, 90, 70, 85] 
// }; 
// Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the 
// total marks and average, then print: 

const student = {
  name: "Ram",
  marks: [80, 90, 70, 85]
};

const { name, marks } = student;

// Spread
const copiedMarks = [...marks];

// Rest Parameters + Arrow Function
const getTotal = (...nums) =>
  nums.reduce((sum, num) => sum + num, 0);

const total = getTotal(...copiedMarks);
const average = total / copiedMarks.length;

console.log(`Student: ${name}
Total: ${total}
Average: ${average}`);





