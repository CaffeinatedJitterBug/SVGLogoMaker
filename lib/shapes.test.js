const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  test("should generate a circle", () => {
    const shapes = new Circle("blue", "abg", "red");
    expect(shapes.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill=${shapes.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapes.textColor}>$</text>`
    );
  });
});

describe("Square", () => {
    test("should generate a square", () => {
        const shapes = new Square("blue", "abg", "red");
        expect(shapes.render()).toEqual(
          `<circle cx="150" cy="100" r="80" fill=${shapes.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapes.textColor}>$</text>`
        );
      });
});

describe("Triangle", () => {
    test("should generate a triangle", () => {
      const shapes = new Triangle("blue", "abg", "red");
      expect(shapes.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill=${shapes.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapes.textColor}>$</text>`
      );
    });
  });
