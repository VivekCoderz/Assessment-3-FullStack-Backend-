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



