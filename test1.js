// // // // // // Var and Let , const

// // // // // // Var => we can acess globle variable
// // // // // // let => we can acess local variable
// // // // // // var is function scoped and let is block scoped

// // // // // // var we can redclare and redifine
// // // // // // let we cant do redfine

// // // // // var a = 10;

// // // // // function myFunction1() {
// // // // //   let b = 20;
// // // // //   console.log(a);
// // // // //   console.log(b);
// // // // // }

// // // // // console.log(a);
// // // // // // console.log(b);

// // // // // myFunction1();

// // // // // // Hosting
// // // // // // we can declare functions variable in top of the page

// // // // let arr1 = [12, 24, 25, 53, 24, 224, 24, 467, 467, 578, 234, 124, 123];
// // // // let arr2 = ["sagar", "om", "shubham", "vijay"];

// // // // let arrObj = [
// // // //   { id: 1, name: "harish", age: 25 },
// // // //   { id: 2, name: "sagar", age: 12 },
// // // //   { id: 3, name: "om", age: 41 },
// // // //   { id: 4, name: "shubham", age: 30 },
// // // // ];

// // // // // arr1.forEach((x) => {
// // // // //   console.log(x);
// // // // // });

// // // // // arr2.forEach((x) => {
// // // // //   console.log(x);
// // // // // });

// // // // // arrObj.forEach((x) => {
// // // // //   console.log(x);
// // // // // });

// // // // // Map is used to to create an new array

// // // // //  arr1.map((x) => console.log(x * 2));

// // // // // arr1.map((x) => console.log(x));

// // // // // arrObj.map((currentValue, index, arr) => console.log(currentValue, index, arr));

// // // // // //The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for ...

// // // // // arrObj = arrObj.filter((ele) => ele.age > 29);

// // // // // console.log(arrObj);

// // // // arr1 =

// // // const euros = [10, 12, 13, 14];

// // // const sum = euros.reduce((total, amount) =>
// // //   console.log(total, amount, "sum ", total + amount)
// // // );

// // // console.log(sum);

// // let students = [
// //   {
// //     name: "Rama",
// //     batch: 9,
// //     likesIcecream: true,
// //   },
// //   {
// //     name: "Irfan",
// //     batch: 8,
// //     likesIcecream: false,
// //   },
// //   {
// //     name: "Swapneel",
// //     batch: 7,
// //     likesIcecream: false,
// //   },
// //   {
// //     name: "Sampath",
// //     batch: 8,
// //     likesIcecream: true,
// //   },
// //   {
// //     name: "Vishwanath",
// //     batch: 9,
// //     likesIcecream: true,
// //   },
// // ];

// // let data = students.filter((ele) => ele.likesIcecream === true);

// // console.log(data);

// let Obj = {
//   name: "Student",
//   age: 20,
//   clg: "sgm",
// };

// console.log(Obj.name);

// const { name } = Obj;

// console.log(name);

// console.log(Obj["age"]);

// let x = [1, 2, 3];
// let y = [4, ...x, 5, 6];

// console.log(y);

// null, undefined,   undeclare

// let a = null;
// let b;
// console.log(c);



