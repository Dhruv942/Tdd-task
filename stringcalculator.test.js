const { add } = require("./Stringcalculator");
test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3);
});
