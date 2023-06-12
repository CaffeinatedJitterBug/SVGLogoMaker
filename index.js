//Imports inquirer and shapes.js
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js')
//Inquirer prompt
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 letters to put in your logo',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?',
            name: 'tcolor'
        },
        {
            type: 'input',
            message: 'What shape do you want your logo to be?',
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color would you like for your logo?',
            name: 'scolor'
        },
    ])
    //Takes the response from the inquirer prompt, deconstructs it, then passes the values to a function in shapes.js
    .then((response) => {
        const {text, tcolor, shape, scolor} = response;

        if (shape.toLowerCase === 'circle') {
            shapes.Circle.render(scolor, text, tcolor);
        } else if (shape.toLowerCase === 'square') {
            shapes.Square.render(scolor, text, tcolor);
        } else if (shape.toLowerCase === 'triangle') {
            shapes.Triangle.render(scolor, text, tcolor);
        }
    })