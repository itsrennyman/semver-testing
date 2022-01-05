const { sayHello, add } = require("./index");

it("should say hello", () => {
  expect(sayHello("John")).toBe("Hello John");
});

it("should sum two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
