//Imports necessary dependancies
const fs = require("fs");
const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs/promises");
const Shape = require("./lib/shapes");
const { Circle, Triangle, Square } = require("./lib/shapes");
//Inquirer prompt
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to 3 letters to put in your logo",
      name: "text",
    },
    {
      type: "input",
      message: "What color would you like the text to be?",
      name: "tcolor",
    },
    {
      type: "input",
      message: "What shape do you want your logo to be?",
      name: "shapeType",
    },
    {
      type: "input",
      message: "What color would you like for your logo?",
      name: "scolor",
    },
  ])
  //Takes the response from the inquirer prompt, deconstructs it, then passes the values to a function in shapes.js
  .then((response) => {
    const { text, tcolor, shapeType, scolor } = response;
    let shapeToLower = shapeType.toLowerCase();
    let logoShape = "";

    if (shapeToLower === "circle") {
      logoShape = new Circle(scolor, text, tcolor).render();
    } else if (shapeToLower === "square") {
      logoShape = new Square(scolor, text, tcolor).render();
    } else if (shapeToLower === "triangle") {
      logoShape = new Triangle(scolor, text, tcolor).render();
    } else {
      console.log("Invalid shape: Please enter either square, circle or triangle");
    }

    const logoCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n' + "  " + logoShape + "\n\n</svg>";
    const fileName = "./svgs/" + text + ".svg";

    fs.writeFile(fileName, logoCode, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
