const { default: test } = require("node:test");
const addFive = require("./addFive");

test("return the num plus 5", () => {
  expect(addFive(2)).toBe(7);
});
