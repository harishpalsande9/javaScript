// let funName = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let numString = arr[i].replace(/[^0-9]/g, "");
//     if (numString.length > 0) {
//       sum += parseInt(numString);
//     }
//   }
//   return sum;
// };

// console.log(funName(["sdf12j", "s12df"]));

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(10)(20)(20)());
