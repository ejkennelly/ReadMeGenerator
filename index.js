const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);


// badge URL https://img.shields.io/badge/license-MIT-ff69b4
//github profile link 
//email address 
//create array that links to corresponding sections
// const tableOfContents = ["Description", "Installation", "Usage", "Contributing", "Tests"]
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
        }
    ])
}
function generateMarkdown(answers) {
    return `
# ${answers.title} 
## DESCRIPTION
${answers.description}
## TABLE OF CONTENTS
* [Installation](#installation)
* [Usage](#usage)
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
![license](https://img.shields.io/badge/license-${answers.license}-ff69b4)`;
  }
  

async function init() {
    console.log("hi")
    try {
      const answers = await userInput();
  
      const readme = generateMarkdown(answers);
  
      writeFile("README.md", readme);
  
      console.log("Successfully wrote to readme.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();

