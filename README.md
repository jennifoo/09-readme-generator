
# Unit 09 Node.js and ES6+: README Generator

## Description

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

This project consists of creating a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer) while applying automatic formatting. The application will be invoked with the following command:

```
node index.js
```

### Screenshot of the Readme Generator on Node:

<img src="./images/readme-program.png" alt="Readme Generator in action with node">

### See a demo of my Readme Generator at any of the 2 video links:

* [Vimeo Link:](https://vimeo.com/452335805) – choose highest quality setting
* [Link to Video on Github:](https://github.com/jennifoo/09-readme-generator/blob/master/8-26-2020_Readme_Generator_sm.mov)
* You may also view a prototype of the generated Readme [here:](https://github.com/jennifoo/09-readme-generator/tree/master/Readme%20Prototype)

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Minimum Application Requirements

* Meets [Submission Requirements](#submission-requirements) in the following section.

* Functional application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes the following sections:

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.
