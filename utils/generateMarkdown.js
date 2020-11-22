// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![project image](./imgs/ination.png)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [Tests](#tests)
   
  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me:

  Github: [https://github.com/${data.username}](https://github.com/${data.username})
  Email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
