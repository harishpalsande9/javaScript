const findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sec = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // if (min > arr[i]) {
    //   min = arr[i];
    // }
    if (max < arr[i] && sec < max) {
      max = arr[i];
      sec = max;
    }
  }
  return sec;
};

console.log(findMinMax([234, 45, 35, 35, 35, 35, 3333333]));

// let arr = [22, 242, 1, 43, 231, 54];

// const minValue = () => {
//   return arr.reduce((pre, cur) => {
//     return pre < cur ? pre : cur;
//   });
// };

// console.log(minValue());
