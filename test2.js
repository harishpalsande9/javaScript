// (function () {
//   console.log("Hello");
// })();

// function fun1(fun2) {
//   fun2();
// }

// fun1(() => console.log("Hello"));

// let Obj = {
//   name: "Harish",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// Obj.getName();

// (function () {
//   console.log("Hello");
// })();

// (function () {
//   console.log("Hello");
// })();

// let text = "The best things in life are free";
// let pattern = / /;
// let result = pattern.test(text);
// console.log(result);

// let text = "The best things in life are free";
// let result = /e/.exec(text);
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6];

// let data = arr.reduce((a, b) => a + b);
// console.log(data);

// function add(a) {
//   return function (b) {
//     return console.log(a + b);
//   };
// }

// add(3)(4);

// Closures

// let a = 10;
// function fun1() {
//   let b = 20;
//   function fun2() {
//     console.log(a);
//     console.log(b);
//   }
//   fun2();
// }

// fun1();

// NaN => Not a number
// null =>  value null , null data type object

// console.log(typeof null);

// function
// function fun1(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }

// // callback function
// function fun2() {
//   console.log("I am callback function");
// }

// // passing function as an argument
// fun1("Peter", fun2);

// const fun1 = (name, callBack) => {
//   console.log("Hi" + " " + name);
//   callBack();
// };

// const fun2 = () => {
//   console.log("I am callback function");
// };

// fun1("harish", fun2);

// function memoizedAddTo256() {
//   var cache = {};

//   return function (num) {
//     if (num in cache) {
//       console.log("cached value");
//       return cache[num];
//     } else {
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   };
// }
// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20); // Normal return
// memoizedFunc(20); // Cached return

// const fun2 = (...input) => {
//   console.log(input);
// };

// fun2(234, 234, 234, 234, 2);

// 36. In JavaScript, how many different methods can you make an object?

// let Obj = {
//   name: "Object1",
// };

// let obj2 = new Object();
//39. What are generator functions?
