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

console.log("Start");

setTimeout(() => {
  console.log("midlle");
}, 5000);

let first = new Promise((resolve, reject) => {
  let a = 10;

  if (a === 10) {
    resolve("Scucess");
  } else {
    reject("Failed");
  }
});

first.then((ele) => console.log(ele)).catch((err) => console.log(err));

Promise.all([first, second])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log("End");
