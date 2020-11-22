const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
// const questions = [
//   {
//     type: 'input',
//     message: "What is your GitHub username?",
//     name: 'username',
//     default: 'kfreeborg',
//     validate: answer => {
//       if (answer.length < 1) {
//         return console.log("A valid GitHub username is required.");
//       }
//       return true;
//     }
//   },
//   {
//     type: 'input',
//     message: "What is the name of your GitHub repository?",
//     name: 'repo',
//     default: 'Github Repo',
//     validate: answer => {
//       if (answer.length < 1) {
//         return console.log("A valid GitHub repository is required for a badge.");
//       }
//       return true;
//     }
//   },
//   {
//     type: 'input',
//     message: "What is the title of your project?",
//     name: 'title',
//     default: 'Project Title',
//     validate: answer => {
//       if (answer.length < 1) {
//         return console.log("A valid project title is required.");
//       }
//       return true;
//     }
//   },
//   {
//     type: 'input',
//     message: "Write a description for your project.",
//     name: 'description',
//     default: 'Project Description',
//     validate: answer => {
//       if (answer.length < 1) {
//         return console.log("A valid project description is required.");
//       }
//       return true;
//     }
//   },
//   {
//     type: 'input',
//     message: "If applicable, describe the steps required to install your project for the Installation section.",
//     name: 'installation'
//   },
//   {
//     type: 'input',
//     message: "If applicable, provide instructions and examples of your project in use for the Usage section.",
//     name: 'usage',
//   },
//   {
//     type: 'list',
//     message: "Choose a license for your project.",
//     choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
//     name: 'license'
//   },
//   {
//     type: 'input',
//     message: "If applicable, provide guidelines on how other developers can contribute to your project.",
//     name: 'contributing'
//   },
//   {
//     type: 'input',
//     message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
//     name: 'tests'
//   },
// ];
//title of my project and sections entitled 
//Description, 
//Table of Contents, 
//Installation, 
//Usage, 
//License, 
//Contributing, 
//Tests, and 
//Questions

// const inquirer = require('inquirer');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is your GitHub username?",
      name: 'username',
      default: 'kfreeborg',
      validate: answer => {
        if (answer.length < 1) {
          return console.log("A valid GitHub username is required.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: "What is the name of your GitHub repository?",
      name: 'repo',
      default: 'Github Repo',
      validate: answer => {
        if (answer.length < 1) {
          return console.log("A valid GitHub repository is required for a badge.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: "What is the title of your project?",
      name: 'title',
      default: 'Project Title',
      validate: answer => {
        if (answer.length < 1) {
          return console.log("A valid project title is required.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: "Write a description for your project.",
      name: 'description',
      default: 'Project Description',
      validate: answer => {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
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
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    }
  ]);
};

promptUser().then(answers => console.log(answers));
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// GIVEN a command - line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README