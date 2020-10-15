const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const octokit=require("@octokit/core")

const writeFileAsync = util.promisify(fs.writeFile);


// const licenses = []
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
            type: "checkbox",
            message: "Licensing",
            name: "license",
            choices: await octokit.request('GET /licenses')
        },
        console.log("checkbox")
    ])
}
userInput();
// function generateHTML(answers){
//     const
// }