var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }

  return 1;
};

console.log(searchInsert([13, 234, 24, 2353, 4, 3], 5555));
