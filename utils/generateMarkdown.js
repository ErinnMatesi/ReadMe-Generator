// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  console.log(license);
  if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return ""
  }
};
// use this: https://gist.github.com/qvil/5e3ed56c26d784e51424621119cc4028

//  function that creates the license link in the table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ""
  } else {
    return `* [License](#license)`
  }
};

// function that creates the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ""
  } else {
    return `## License
${renderLicenseBadge(license)}`
  }
}

// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Testing](#testing)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Technologies
-

## Contributions
${data.contributions}

## Testing
${data.test}

${renderLicenseSection(data.license)}

---
### Questions
${data.email}
[${data.github}](https://github.com/${data.github})
`;
};

module.exports = generateMarkdown;
