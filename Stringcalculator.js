function add(numbers) {
  if (numbers == "") return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbers = numbers.slice(4);
  }

  numbers = numbers.replace(/\n/g, delimiter);

  let nums = numbers.split(delimiter).map(Number);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

module.exports = { add };
