var isAnagram = function (s, t) {
  let a = s.split("").sort();
  let b = t.split("").sort();

  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

let str1 = "sfsfsfs";
let str2 = "sfsfsfs";
console.log(isAnagram(str1, str2));
