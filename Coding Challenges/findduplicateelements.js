const findDuplicates = (arr) => {
  let arr1 = arr.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr[i + 1]) {
      return arr1[i];
    }
  }
};

// console.log(findDuplicates([3423, 245, 25, 2, 52, 352, 3, 5253, 52, 2]));

let arr = [24, 24, 1, 24, 63, 63, 35, 53, 311, , 24, 24, 45];

let filterArry = arr.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(filterArry);
