var isPalindrome = function (s) {
  let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  let left = 0,
    right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
};

let str = " aeadea adad wrwsr st";
let rep = str.replace(/[^0-9a-z]/g, " ");

console.log(rep);
console.log(isPalindrome(str));
