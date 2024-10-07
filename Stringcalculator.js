function add(numbers) {
  if (numbers == "") return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbers = numbers.slice(4);
  }

  numbers = numbers.replace(/\n/g, delimiter);

  let nums = numbers.split(delimiter).map(Number);
  checkForNegativeNumbers(nums);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 1000) {
      sum += nums[i];
    }
  }

  return sum;
}
function checkForNegativeNumbers(nums) {
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }
}

module.exports = { add };
