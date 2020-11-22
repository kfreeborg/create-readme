const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    message: "What is your GitHub username? (Required)",
    name: 'username',
    default: 'kfreeborg',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "What is your email? (Required)",
    name: 'email',
    default: 'kelsey.freeborg@gmail.com',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "What is the name of your GitHub repository? (Required)",
    name: 'repo',
    default: 'Github Repo',
    validate: repoNameInput => {
      if (repoNameInput) {
        return true;
      } else {
        console.log('Please enter your repoName!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "What is the title of your project? (Required)",
    name: 'title',
    default: 'Project Title',
    validate: titleNameInput => {
      if (titleNameInput) {
        return true;
      } else {
        console.log('Please enter your titleName!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "Write a description for your project. (Required)",
    name: 'description',
    default: 'Project Description',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: 'installation'
  },
  {
    type: 'input',
    message: "If applicable, provide instructions and examples of your project in use for the Usage section.",
    name: 'usage',
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
  },
  {
    type: 'input',
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: 'contributing'
  },
  {
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Your README.md file has been generated!")
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
    const response = generateMarkdown(answers);
    writeToFile("./README.md", response);
  })
}

// function call to initialize program
init();
