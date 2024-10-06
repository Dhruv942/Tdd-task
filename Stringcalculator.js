function add(numbers) {
  if (numbers == "") return 0;
  let nums = numbers.split(",").map(Number);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 1000) {
      sum += nums[i];
    }
  }

  return sum;
}

module.exports = { add };
