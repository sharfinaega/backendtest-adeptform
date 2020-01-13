const threeSum = nums => {
  let len = nums.length;
  if (len < 3) return [];
  nums.sort(function(a, b) {
    return a - b;
  });
  if (nums[0] > 0 || nums[0] + nums[1] + nums[2] > 0) return [];
  if (len === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) return [nums];
    else return [];
  }
  //console.log(nums);
  let result = [];
  let checker = "";
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      //since the array is sorted, we only need to start from
      //the last index that where value was found, since
      //nums[k] has to be a lower number.
      for (let start = len - 1, k = start; k > i, k > j; ) {
        let triplet = [nums[i], nums[j], nums[k]];
        let tripletString = "/" + nums[i] + " " + nums[j] + " " + nums[k] + "/";
        if (nums[i] + nums[j] === -nums[k] && !checker.includes(tripletString)) {
          result.push(triplet);
          checker += tripletString;
          start--;
          k = start;
        } else {
          k--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([1, 2, 4, 0, -1, -3, -6, -1]));
