const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

function userInput(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Description of project",
            name: "description"
        },
        {
            type: "input",
            message: "Installation instructions",
            name: "install"
        },
        {
            type: "input",
            message: "Usage Information",
            name: "usageInfo"
        },
        {
            type: "input",
            message: "Contribution Guidelines",
            name: "contrib"
        },
        {
            type: "input",
            message: "Test Instructions",
            name: "test"

        },
        {
            type: "list",
            message: "Licensing",
            name: "license",
            choices: ["MIT", "Apache", "GPL", "Affero GPL"]
        },
        {
            type: "input",
            message: "Github username: ",
            name: "github"
        },
        {
            type: "input",
            message: "Contact email address:",
            name: "email"
        }
    ])
}
function generateMarkdown(answers) {
    return `
# ${answers.title} 
## Description
${answers.description}
## Table of Contents
* [Installation Instructions](#installation)
* [Usage Info](#usage)
* [Contribution Guidelines](#contributing)
* [Test Instructions](#tests)
* [Questions](#questions)

## Installation
${answers.install}

## Usage 
${answers.usageInfo}

## Contributing
${answers.contrib}

## Tests
${answers.test}

## License
${answers.license}
![license](https://img.shields.io/badge/license-${answers.license}-ff69b4)

## Questions
[Link to my Github](https://github.com/${answers.github})

Contact email address if you have additional questions: ${answers.email}

`;
  }
  

async function init() {
    console.log("hi")
    try {
      const answers = await userInput();
  
      const readme = generateMarkdown(answers);
  
      writeFile("README2.md", readme);
  
      console.log("Successfully wrote to readme.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();

