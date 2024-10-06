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
