//Hosting
// a = 10;
// // b = 20;
// sayHello();
// arrowFunction();
// console.log(a);
// var a;
// // let b;

// function sayHello() {
//   console.log("sayHello");
// }

// const arrowFunction = () => {
//   console.log("arrowFunction");
// };

// /*
// Hosting we can declare functions variables at a top of the page

// */

//event bubbling in javascript

// document.getElementById("FirstDiv").addEventListener("click", () => {
//   alert("FirstDiv clicked");
// });

// document.getElementById("secondDiv").addEventListener("click", () => {
//   alert("second clicked");
// });

//Event Loop

// console.log("Start");

// setTimeout(() => {
//   console.log("midlle");
// }, 5000);

// let first = new Promise((resolve, reject) => {
//   let a = 10;

//   if (a === 10) {
//     resolve("Scucess");
//   } else {
//     reject("Failed");
//   }
// });

// first.then((ele) => console.log(ele)).catch((err) => console.log(err));

// Promise.all([first, second])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// console.log("End");

// x = 23; // Gives reference error

// let x;

// function anotherRandomFunc() {
//   message = "Hello"; // Throws a reference error

//   let message;
// }
// anotherRandomFunc();

// Destructuring

// 1) Object Destructuring
// 2) Array Destructuring

// let obj = {
//   name: "harish",
//   age: 25,
// };

// const { name } = obj;

// // console.log(name);

// let arr = [123, 325, 24, 123, 325, 24, 123];

// let first = arr[0];
// console.log(first);

//call back

// const fun1 = () => {
//   console.log("first function");
// };

// const fun2 = (name, callBack) => {
//   console.log("second function", name);
//   callBack();
// };

// fun2("haris", fun1);
