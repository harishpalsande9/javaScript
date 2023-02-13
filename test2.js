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

let a = 10;
function fun1() {
  let b = 20;
  function fun2() {
    console.log(a);
    console.log(b);
  }
  fun2();
}



fun1();
