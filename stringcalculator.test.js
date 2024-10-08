const { add } = require("./Stringcalculator");

test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3);
});

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});
test("handles more than two numbers '1,2,3,4,5' should return 15", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});
test("handles new lines between numbers '1\\n2,3' should return 6", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("single number returns the number", () => {
  expect(add("2")).toBe(2);
});
test("custom delimiter returns sum of numbers", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("negative numbers throw an error", () => {
  expect(() => add("1,-2,23")).toThrow("negative numbers not allowed: -2");
});

test(" multiple negative numbers throw an error", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});

test("ingore number bigger than 1000 ", () => {
  expect(add("1,1001,1002,5")).toBe(6);
});
