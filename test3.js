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

document.getElementById("FirstDiv").addEventListener("click", () => {
  alert("FirstDiv clicked");
});

document.getElementById("secondDiv").addEventListener("click", () => {
  alert("second clicked");
});
