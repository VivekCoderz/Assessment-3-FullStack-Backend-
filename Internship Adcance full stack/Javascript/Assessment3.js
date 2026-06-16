// 1. 
// const student = {
//     name : "Vivek",
//     age : 21,
//     city : "Panipat"
// }
// console.log(student);

// // 2. 
// console.log(student.name);

// // 3.
// student.greet = function (){
//     console.log(`Hello I am ${this.name}`)
// }
// student.greet()

// // 4.
// student.isAdult = function (){
//     if(this.age>=18) console.log("Adult")
//     else console.log("Not Adult")
// }
// student.isAdult()

// 5.
// for(let i in student){
//     console.log(i)
// }

//  6.
// for(let i in student){
//     console.log(student[i])
// }

// 7.
// console.log("email" in student)

// // 8.
// student.course = "MERN"; 

// // 9.
// delete student.age
// console.log(student)

// 10.
// const obj = {...student}

// // 11.
// const student = {
//     name : "Vivek",
//     age : 21,
//     city : "Panipat",
//     ShowName : function (){
//         console.log(this.name)
//     }
// }
// student.ShowName()

// // 12.
// const obj = {
//     name : "Vivek",
//     upper : function(){
//         console.log(this.name.toUpperCase())
//     }
// }
// obj.upper()

// // 13.
// const Bank = {
//     money : 0,
//     withdraw : function(value){
//         if(money<=0) console.log("No Money")
//         else money-=value;
//     },
//     deposit : function(value){
//         money+=value;
//     }
// }

// Bank.deposit(1000)
// Bank.withdraw(400)

// // 14.
// "Ram"

// // 15.
// "Ram"

// 16.
// function Student(name,age){
//     this.name = name
//     this.age = age
// }
// const s1 = new Student("Vivek",21)
// console.log(s1)

// 17.
// s1 = new student("Vivek",21)
// s2 = new student("Tripti",20)
// s3 = new student("Lovely",19)

// 18.
// student.prototype.greet = function(){
//     console.log("Hello ",this.name)
// }

// // 19.
// "Ram"

// // 20.
// function Car(brand,price){
//     this.brand = brand
//     this.price = price
// }

// const c1 = Car("Maruti",200000)

// 21.
// function Student(name,age){
//     this.name = name
//     this.age = age
// }

// Student.prototype.greet = function(){
//     console.log("Hello",this.name)
// }

// const s1 = new Student("Vivek",21)
// s1.greet()

// // 22.
// console.log(s1.__proto__===student.prototype)

// 23.
//  Student.prototype.isAdult = function(){
//     if(this.age>=18)
//         console.log(this.name,"is adult")
//     else
//         console.log(this.name,"is not adult")
// }

// 24.
// Hi

// 25.
// Student.prototype.course = "MERN";

// 26.
// console.log(s1.hasOwnProperty("course")) false

// 27.
// console.log("course" in u1); true

// 28.
// arr → Array.prototype → Object.prototype → null

// 29.
// const animal = {
//     eat() {
//         console.log("Animal eating...");
//     }
// };


// 30.
// const dog = Object.create(animal);

// dog.eat(); // Animal speaking...

// 31.
// dog.bark = function () {
//     console.log("Barking...");
// };

// dog.bark();  

// 32.
// Eating

// 33.
// class Student{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// 34.
// Student.prototype.greet = function () {
//     console.log(`Hello ${this.name}`);
// };

// 35.
// Student.prototype.isAdult = function () {
//     return this.age >= 18;
// };

// 36.
// const s1 = new Student("Vivek", 21);
// const s2 = new Student("Tripti", 20);
// const s3 = new Student("Lovely", 19);

// console.log(s1);
// console.log(s2);
// console.log(s3);

// 37.
//  const animal = {
//      eat() {
//          console.log("Animal eating...");
//     }
// // };

// 38.
// class Dog extends Animal {
// }

// 39.

// Dog.prototype.bark = function () {
//         console.log(`${this.name} is barking`);
// }

// 40.
// const d = new Dog();

// d.eat();    Eating...
// d.bark();   Barking...
