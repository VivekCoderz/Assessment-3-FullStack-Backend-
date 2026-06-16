
// 1.
// function greetUser(name,callback){
//     console.log(`Hello ${name}`)
//     callback(name)
// }

// greetUser("Vivek",(name)=>{
//     console.log(`Welcome ${name}`)
// })

// 2.
// function add(a,b){
//     return a+b
// }
// function mult(a,b){
//     return a*b
// }
// function divide(a,b){
//     return a/b
// }
// function sub(a,b){
//     return a-b
// }

// function calculate(a,b,callback){
//     return callback(a,b);
// }

// const result = calculate(2,3,add)
// console.log(result);


// 3.
// function add(a,b){
//     return a+b
// }
// function mult(a,b){
//     return a*b
// }
// function divide(a,b){
//     return a/b
// }
// function sub(a,b){
//     return a-b
// }

// function calculate(a,b,callback){
//     return callback(a,b);
// }

// const result = calculate(2,3,add)
// console.log(result);

// 4.
// const student = {
//     name : "Vivek",
//     rollno : 21
// }
// function processStudent(student, callback){
//     callback(student)
// }
// processStudent(student,(stu)=>{
//     console.log(student)
// })

// Q5: downloadFile(callback)
// function downloadFile(callback) {
//     console.log("File downloading...");

//     setTimeout(() => {
//         console.log("File downloaded");
//         callback();
//     }, 2000);
// }

// downloadFile(() => {
//     console.log("Download complete callback executed");
// });


// // Q6: registerUser(callback)
// function registerUser(callback) {
//     console.log("User registering...");

//     setTimeout(() => {
//         console.log("User registered successfully");
//         callback();
//     }, 2000);
// }

// registerUser(() => {
//     console.log("Welcome email sent");
// });


// // Q7: placeOrder(callback)
// function placeOrder(callback) {
//     console.log("Order placing...");

//     setTimeout(() => {
//         console.log("Order placed successfully");
//         callback();
//     }, 2000);
// }

// placeOrder(() => {
//     console.log("Invoice generated");
// });


// // Q8: fetchUser(callback)
// function fetchUser(callback) {
//     console.log("Fetching user...");

//     setTimeout(() => {
//         const user = {
//             id: 1,
//             name: "Vivek",
//             email: "vivek@gmail.com"
//         };

//         callback(user);
//     }, 3000);
// }

// fetchUser((user) => {
//     console.log("User Data:", user);
// });


// // Q9: Callback-based OTP verification
// function verifyOTP(otp, callback) {
//     console.log("Verifying OTP...");

//     setTimeout(() => {
//         const correctOTP = "1234";

//         if (otp === correctOTP) {
//             callback("OTP verified successfully");
//         } else {
//             callback("Invalid OTP");
//         }
//     }, 2000);
// }

// verifyOTP("1234", (message) => {
//     console.log(message);
// });


// // Q10: Callback-based login system
// function login(username, password, callback) {
//     console.log("Checking login details...");

//     setTimeout(() => {
//         const correctUsername = "vivek";
//         const correctPassword = "12345";

//         if (username === correctUsername && password === correctPassword) {
//             callback("Login successful");
//         } else {
//             callback("Invalid username or password");
//         }
//     }, 2000);
// }

// login("vivek", "12345", (message) => {
//     console.log(message);
// });


// Q11.
// A
// C
// B

// Q12.
// 2
// 1

// Q13.
// Start
// End
// Timeout

// Q14.
// let count = 5;
// function countdown() {
//     if (count > 0) {
//         console.log(count);
//         count--;
//         setTimeout(countdown, 1000);
//     } else {
//         console.log("Boom!");
//     }
// }
// countdown();

// Q15.
// let time = 10;
// const timer = setInterval(function() {
//     console.log("Bomb explodes in: " + time + " sec");
//     time--;
//     if (time < 0) {
//         clearInterval(timer);
//         console.log("BOOM!");
//     }
// }, 1000);

// Q16.
// const name = prompt("Enter your name:");
// console.log("Please wait...");
// setTimeout(function() {
//     console.log("Hello " + name + "! Good to see you.");
// }, 2000);

// Q17.
// function sendNotification(msg, delay) {
//     setTimeout(function() {
//         console.log("Notification: " + msg);
//     }, delay);
// }
// sendNotification("Your order is confirmed!", 2000);
// sendNotification("Your item has been shipped!", 5000);

// Q18.
// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", function() {
//     console.log("Button clicked!");
//     btn.disabled = true;
//     setTimeout(function() {
//         btn.disabled = false;
//         console.log("Button re-enabled.");
//     }, 3000);
// });

// Q19.
// function redirectTo(url, delay) {
//     console.log("Redirecting to " + url + " in " + delay/1000 + " seconds...");
//     setTimeout(function() {
//         console.log("Redirected to " + url);
//         // window.location.href = url;
//     }, delay);
// }
// redirectTo("https://google.com", 3000);

// Q20.
// function wait(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
// }
// wait(2, function() {
//     console.log("2 seconds passed!");
// });

// Q21.
// function login(callback) {
//     setTimeout(() => { console.log("Login successful"); callback(); }, 1000);
// }
// function getUser(callback) {
//     setTimeout(() => { console.log("User fetched"); callback(); }, 1000);
// }
// function getOrders(callback) {
//     setTimeout(() => { console.log("Orders fetched"); callback(); }, 1000);
// }
// function showOrders() {
//     console.log("Orders displayed!");
// }
// login(function() {
//     getUser(function() {
//         getOrders(function() {
//             showOrders();
//         });
//     });
// });

// Q22.
// level1(function() {
//     level2(function() {
//         level3(function() {
//             level4(function() {
//                 level5(function() {
//                     console.log("All 5 levels done!");
//                 });
//             });
//         });
//     });
// });
// function level1(cb) { setTimeout(() => { console.log("Level 1"); cb(); }, 500); }
// function level2(cb) { setTimeout(() => { console.log("Level 2"); cb(); }, 500); }
// function level3(cb) { setTimeout(() => { console.log("Level 3"); cb(); }, 500); }
// function level4(cb) { setTimeout(() => { console.log("Level 4"); cb(); }, 500); }
// function level5(cb) { setTimeout(() => { console.log("Level 5"); cb(); }, 500); }

// Q23.
// function placeOrder(cb) { setTimeout(() => { console.log("Order placed"); cb(); }, 1000); }
// function cook(cb) { setTimeout(() => { console.log("Food cooked"); cb(); }, 1000); }
// function pack(cb) { setTimeout(() => { console.log("Food packed"); cb(); }, 1000); }
// function deliver(cb) { setTimeout(() => { console.log("Food delivered!"); cb(); }, 1000); }
// placeOrder(function() {
//     cook(function() {
//         pack(function() {
//             deliver(function() {
//                 console.log("Enjoy your meal!");
//             });
//         });
//     });
// });

// Q24.
// function register(cb) { setTimeout(() => { console.log("Patient registered"); cb(); }, 500); }
// function seeDoctor(cb) { setTimeout(() => { console.log("Doctor consulted"); cb(); }, 500); }
// function runTest(cb) { setTimeout(() => { console.log("Test done"); cb(); }, 500); }
// function giveMedicine(cb) { setTimeout(() => { console.log("Medicine given"); cb(); }, 500); }
// register(function() {
//     seeDoctor(function() {
//         runTest(function() {
//             giveMedicine(function() {
//                 console.log("Patient discharged!");
//             });
//         });
//     });
// });

// Q25.
// function fillForm(cb) { setTimeout(() => { console.log("Form filled"); cb(); }, 500); }
// function verify(cb) { setTimeout(() => { console.log("Verified"); cb(); }, 500); }
// function payment(cb) { setTimeout(() => { console.log("Payment done"); cb(); }, 500); }
// function admission(cb) { setTimeout(() => { console.log("Admission confirmed"); cb(); }, 500); }
// fillForm(function() {
//     verify(function() {
//         payment(function() {
//             admission(function() {
//                 console.log("Welcome to college!");
//             });
//         });
//     });
// });

// Q26.
// function signup(cb) { setTimeout(() => { console.log("Signed up"); cb(); }, 500); }
// function verifyEmail(cb) { setTimeout(() => { console.log("Email verified"); cb(); }, 500); }
// function loginUser(cb) { setTimeout(() => { console.log("Logged in"); cb(); }, 500); }
// function dashboard(cb) { setTimeout(() => { console.log("Dashboard loaded"); cb(); }, 500); }
// signup(function() {
//     verifyEmail(function() {
//         loginUser(function() {
//             dashboard(function() {
//                 console.log("All done!");
//             });
//         });
//     });
// });

// Q27.
// function step(name, cb) {
//     const delay = Math.floor(Math.random() * 2000) + 500;
//     setTimeout(() => { console.log(name + " done in " + delay + "ms"); cb(); }, delay);
// }
// step("Step 1", function() {
//     step("Step 2", function() {
//         step("Step 3", function() {
//             console.log("All random steps done!");
//         });
//     });
// });

// Q28.
// function fetchWeather(city, cb) {
//     setTimeout(() => {
//         const weather = { city: city, temp: "32°C", condition: "Sunny" };
//         cb(weather);
//     }, 2000);
// }
// fetchWeather("Delhi", function(data) {
//     console.log(data.city + ":", data.temp, "-", data.condition);
// });

// Q29.
// function addToCart(cb) { setTimeout(() => { console.log("Added to cart"); cb(); }, 500); }
// function checkout(cb) { setTimeout(() => { console.log("Checkout done"); cb(); }, 500); }
// function makePayment(cb) { setTimeout(() => { console.log("Payment success"); cb(); }, 500); }
// function confirmOrder(cb) { setTimeout(() => { console.log("Order confirmed"); cb(); }, 500); }
// addToCart(function() {
//     checkout(function() {
//         makePayment(function() {
//             confirmOrder(function() {
//                 console.log("Happy shopping!");
//             });
//         });
//     });
// });

// Q30.
// function selectMovie(cb) { setTimeout(() => { console.log("Movie selected"); cb(); }, 500); }
// function selectSeat(cb) { setTimeout(() => { console.log("Seat selected"); cb(); }, 500); }
// function payTicket(cb) { setTimeout(() => { console.log("Payment done"); cb(); }, 500); }
// function getTicket(cb) { setTimeout(() => { console.log("Ticket booked!"); cb(); }, 500); }
// selectMovie(function() {
//     selectSeat(function() {
//         payTicket(function() {
//             getTicket(function() {
//                 console.log("Enjoy the movie!");
//             });
//         });
//     });
// });

// Q31.
// function startClock() {
//     setInterval(function() {
//         const now = new Date();
//         console.log(now.toLocaleTimeString());
//     }, 1000);
// }
// startClock();

// Q32.
// let seconds = 0;
// let timer = null;
// function start() {
//     if (!timer) timer = setInterval(() => { seconds++; console.log(seconds + "s"); }, 1000);
// }
// function pause() {
//     clearInterval(timer);
//     timer = null;
// }
// function reset() {
//     clearInterval(timer);
//     timer = null;
//     seconds = 0;
//     console.log("Reset!");
// }

// Q33.
// const lights = ["Red", "Yellow", "Green"];
// let i = 0;
// setInterval(function() {
//     console.log(lights[i % 3]);
//     i++;
// }, 2000);

// Q34.
// const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
// let current = 0;
// setInterval(function() {
//     current = (current + 1) % images.length;
//     console.log("Showing:", images[current]);
//     // document.getElementById("slider").src = images[current];
// }, 3000);

// Q35.
// const text = "Hello World";
// let i = 0;
// const timer = setInterval(function() {
//     process.stdout.write(text[i]);
//     i++;
//     if (i >= text.length) {
//         clearInterval(timer);
//         console.log();
//     }
// }, 200);

// Q36.
// A
// D
// C
// B

// Q37.
// Two
// One

// Q38.
// Start
// End
// Timeout
// (for loop blocks call stack, but setTimeout still runs AFTER all sync code finishes)

// Q39.
// const callStack = [];
// const webAPI = [];
// const callbackQueue = [];
// function visualize(label, fn) {
//     callStack.push(label);
//     render();
//     fn(() => {
//         callStack.pop();
//         webAPI.push(label);
//         render();
//         setTimeout(() => {
//             webAPI.splice(webAPI.indexOf(label), 1);
//             callbackQueue.push(label);
//             render();
//             setTimeout(() => {
//                 callbackQueue.splice(callbackQueue.indexOf(label), 1);
//                 callStack.push(label + " callback");
//                 render();
//                 setTimeout(() => { callStack.pop(); render(); }, 500);
//             }, 500);
//         }, 1000);
//     });
// }
// function render() {
//     document.getElementById("stack").textContent = "Call Stack: " + JSON.stringify(callStack);
//     document.getElementById("webapi").textContent = "Web API: " + JSON.stringify(webAPI);
//     document.getElementById("queue").textContent = "Callback Queue: " + JSON.stringify(callbackQueue);
// }

// Q40. Mini Async Task Manager
// class TaskManager {
//     constructor() {
//         this.tasks = [];
//         this.running = false;
//     }
//     add(name, delay) {
//         this.tasks.push({ name, delay });
//         console.log("Task added:", name);
//         if (!this.running) this.run();
//     }
//     run() {
//         if (this.tasks.length === 0) {
//             this.running = false;
//             console.log("All tasks done!");
//             return;
//         }
//         this.running = true;
//         const task = this.tasks.shift();
//         console.log("Running:", task.name);
//         setTimeout(() => {
//             console.log("Completed:", task.name);
//             this.run();
//         }, task.delay);
//     }
// }
// const manager = new TaskManager();
// manager.add("Login", 1000);
// manager.add("Fetch Data", 1500);
// manager.add("Show Dashboard", 500);
