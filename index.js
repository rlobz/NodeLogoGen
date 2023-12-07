const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => {
            if (input.length <= 3) {
                return true;
            } else {
                return 'Please enter no more than three characters.';
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):'
    }
])

.then(answers => {
    const safeName = answers.text.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `logo-${safeName}.svg`;
    const shapeMap = {
        circle: new Circle(answers.shapeColor),
        triangle: new Triangle(answers.shapeColor),
        square: new Square(answers.shapeColor)
    };

    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeMap[answers.shape].render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

    fs.writeFileSync(`./examples/${filename}`, svgContent);
    console.log(`Generated ${filename}`);
})

.catch(error => {
    console.error('An error occurred:', error);
});