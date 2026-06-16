// 1. 20
// 2. ReferenceError
// 3. Create a nested function structure of 4 levels and print variables from all parent scopes.
// function A(){
//     let a = 1;
//     function B(){
//         let b = 2;
//         function C(){
//             let c = 3;
//             function D(){
//                 let d = 4;
//                 console.log(a)
//                 console.log(b)
//                 console.log(c)
//                 console.log(d)
//             }
//             D()
//         }
//         C()
//     }
//     B()
// }
// A()

// 4. Write a function that returns another function and demonstrates lexical scope. 
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//     }
//     return inner
// }

// let result = outer()
// result()

// 5. undifined

// 6. Create a function where a child function can access grandparent variables. 

// function outer(){
//     let count = 0;
//     function inner(){
//         console.log(count)
//     }
//     inner()
// }
// outer()

// 7. "Mohan"

// 8. Create a 3-level nested function and access all variables inside the innermost function.

// function A(){
//     let a = 1;
//     function B(){
//         let b = 2;
//         function C(){
//             let c = 3;
//             console.log(a)
//             console.log(b)
//             console.log(c)
//         }
//         C()
//     }
//     B()
// }
// A()

// 9. Can a parent access a child variable? Demonstrate using code.
// function parent() {
//     function child() {
//         let childVar = "I am Child";
//         return childVar;
//     }

//     const value = child();
//     console.log(value);
// }

// parent();

// 10. Create a private variable using lexical scope. 

function counter() {
  let count = 0; // Private Variable

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// 11. 
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// 12. 
function reverseCounter() {
  let count = 10;

  return function () {
    console.log(count);
    count--;
  };
}

const decrement = reverseCounter();

decrement(); // 10
decrement(); // 9
decrement(); // 8



//<-----IIFE---->
//ques21
// (function fntn(){
//     console.log("Welcome to JS")
// })()

//ques22
// (function fntn(a,b){
//     console.log(a*b)

// })(2,3);

//ques23
// (()=>{
// console.log("hello arrow function")
// })()


//ques24
// const counter = (function () {
//     let count = 0; // private variable

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         },
//         getCount: function () {
//             return count;
//         }
//     };
// })();

// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1

// console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined
//ques25
// const CounterModule = (function () {
//     let count = 0; // private variable

//     return {
//         increment: function () {
//             count++;
//             console.log("Count:", count);
//         },

//         decrement: function () {
//             count--;
//             console.log("Count:", count);
//         },

//         reset: function () {
//             count = 0;
//             console.log("Count reset to:", count);
//         }
//     };
// })();

// // Usage
// CounterModule.increment(); // Count: 1
// CounterModule.increment(); // Count: 2
// CounterModule.decrement(); // Count: 1
// CounterModule.reset();     // Count reset to: 0

// 26. 
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b
}

function calculate(a,b,operation){
    return operation(a,b)
}

const result = calculate(2,4,add)
console.log(result)

// 27.
function repeat(times, callback) {
  for (let i = 1; i <= times; i++) {
    callback();
  }
}

function sayHello() {
  console.log("Hello");
}

repeat(5, sayHello);

// 28.
function logger(level) {
  return function (message) {
    console.log(`[${level}] ${message}`);
  };
}

const infoLogger = logger("INFO");

infoLogger("User Logged In");

// 29.

function timer(callback) {
  const start = Date.now();

  callback();

  const end = Date.now();
  console.log(`Execution Time: ${end - start} ms`);
}

function greet() {
  console.log("Hello World");
}

timer(greet);

// 30. Create a function wrapper that counts how many times another function was called.

function callCounter(fn) {
  let count = 0;

  return function () {
    count++;
    console.log(`Called ${count} times`);
    fn();
  };
}

function greet() {
  console.log("Hello");
}

const countedGreet = callCounter(greet);

countedGreet();
countedGreet();
countedGreet();





// 31. 
// const users = [ 
//     {name:"Ram",age:25}, 
//     {name:"Mohan",age:30}, 
//     {name:"Amit",age:22} 
// ]; 
// const list = users.map((ele)=>ele.name)
// console.log(list)

// 32. 
// let arr = [1,2,3,4,5] ;
// let result = arr.map((ele)=>ele*ele)
// console.log(result)

// 33. 
// let arr = [ 
//     {name:"Laptop"}, 
//     {name:"Mouse"}, 
//     {name:"Keyboard"} 
// ]
// const result = arr.map(ele=>ele.name)
// console.log(result)

// 34. 
// let arr = [1,2,3,4,5,6];
// const result = arr.filter(ele=>ele%2==0)
// console.log(result)

// 35. 
// const users = [ 
//     {name:"Ram",age:25}, 
//     {name:"Mohan",age:30}, 
//     {name:"Amit",age:22} 
// ]; 

// const result = users.filter(ele=>ele.age>25)
// console.log(result);

// 36. 
// let arr = [
//     {name:"Laptop",price:3000}, 
//     {name:"Mouse",price : 200}, 
//     {name:"Keyboard",price : 1000   }  
// ] 

// const result = arr.filter(ele=>ele.price>1000)
// console.log(result)

// 37. 
// let arr = [10,20,30,40]
// const sum = arr.reduce((acc,ele)=>ele+acc,0)
// console.log(sum)

// 38. 
// let arr = [5,12,3,45,2] 
// const max = arr.reduce((acc,ele)=>acc>ele?acc:ele,arr[0])
// console.log(max)

// 39. 
// let arr = ["JavaScript","React","Node"]
// const total = arr.reduce((acc,ele)=>acc+ele.length,0)
// console.log(total)

// // 40. 
// const orders = [ 
//    { 
//        id:1, 
//        amount:5000, 
//        status:"completed" 
//    }, 
//    { 
//        id:2, 
//        amount:2000, 
//        status:"pending" 
//    }, 
//    { 
//        id:3, 
//        amount:7000, 
//        status:"completed" 
//    }, 
//    { 
//        id:4, 
//        amount:1000, 
//        status:"completed" 
//    } 
// ]; 

// // 1. Completed Orders 
// const co = orders.filter(ele=>ele.status=="completed")
// console.log(co)

// // 2. Total Revenue 

// const revanue = orders.reduce((acc,ele)=>ele.amount+acc,0)
// console.log(revanue);

// const average = revanue/orders.length
// console.log(average);

// const max = orders.reduce((acc,ele)=>acc>ele.amount?acc:ele.amount,arr[0].amount)
// console.log(max)

// const result = orders.map(ele=>ele.id)
// console.log(result);



