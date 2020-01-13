function threeSum(nums) {
  nums = nums.sort(function(a, b) {
    return a - b;
    // console.log(a - b);
  });

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (j > 0 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (k > 0 && nums[k] === nums[k - 1]) continue;

        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}

console.log(threeSum([1, 2, 4, 0, -1, -3, -6, -1]));
