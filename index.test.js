const { sayHello, add2 } = require("./index");

it("should say hello", () => {
  expect(sayHello("John")).toBe("Hello! Nice to meet you John");
});

it("should sum two numbers", () => {
  expect(add2(1, 2)).toBe(3);
});
