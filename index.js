// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the application name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Tell me about your application',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do I use the application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the guidelines for contributing to the application?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What are the test instructions for the application?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What type of license will you use?',
        name: 'license',
        choices: ['Apache', 'BSD', 'MIT', 'Mozilla', 'none'],
        default: 'MIT'
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((data) => {
    const generateContent = generateMarkdown(data);
    fs.writeFile('./utils/ReadMe.md', generateContent, (error) => 
        error ? console.log(err) : console.log('Created ReadMe.md')
    )
});
};

// Function call to initialize app
init();


