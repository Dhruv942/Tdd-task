function add(numbers) {
  if (numbers == "") return 0;
  let nums = numbers.replace(/\n/g, ",").split(",").map(Number);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

module.exports = { add };
