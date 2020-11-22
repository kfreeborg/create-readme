// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License](https://img.shields.io/badge/License-${data.license.replace(' ', '')}-blue.svg)](https://opensource.org/licenses/${data.license.replace(' ', '')})

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
  For questions, contact me at [${data.email}](${data.email})

  Github: [https://github.com/${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
