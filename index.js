var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter github username"
    },
    {
      type: "input",
      name: "email",
      message: "Enter email"
    },
    {
      type: "input",
      name: "title",
      message: "Enter project title"
    },
    {
      type: "input",
      name: "description",
      message: "Enter description"
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions"
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information"
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributing information"
    },
    {
      type: "input",
      name: "tests",
      message: "Enter testing information"
    },
    {
      type: "list",
      message: "Choose license for this project",
      name: "license",
      choices: [
        "Apache 2",
        "Option 2"
      ]
    }
]).then(function(data){

  let { username, email, title, description, installation, usage, contributing, tests, license } = data;

  // let h2Array = [ description, installation, usage, contributing, tests ]
  // let h2ArrayFormat = h2Array.map( (h2) => `## ${h2}`)

  if (license === "Apache 2"){
    var licenseBadge = `<img src="https://img.shields.io/badge/license-Apache%202-blue" alt="license badge">`
    console.log(licenseBadge);
  }
  username = `https://github.com/${username}`
  email = `[GitHub](${email})`

  let ticks = "```"
const content =`

# ${title}

## Description

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#installation)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This project is protect under the following license: ${license}

${licenseBadge}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions you may email me at: ${email}. You can also checkout my GitHub Profile at: ${username}.

`
fs.writeFile("README.md", content, function (err){
  if (err) throw err;
  console.log("Sucess!");
})

});
