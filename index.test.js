const { sayHello } = require("./index");

it("should say hello", () => {
  expect(sayHello("John")).toBe("Hello John");
});
