let arr = [1, 24, 24, 21, 13, 45, 23, 67, 45, 23];
let sortArray = arr.sort();
let result = [];
const showDuplicate = () => {
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i + 1] == sortArray[i]) {
      result.push(sortArray[i]);
    }
  }
};
showDuplicate();
console.log(result);

var removeArr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(removeArr) {
  return removeArr.filter((item, index) => removeArr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
