# Generate A Team Profile

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

This Team Profile Generator allows to the user to generate a beautifully designed webpage with organized cards for each individual employee of types: Manager, Engineer and Intern. When the program is run in the terminal it prompt the user for first, their team name, and then, the manager of the team. When the user inputs the managers data, they are subsequently prompted with a list of choices; to add an Intern, Engineer or finish building the team. When the user chooses either of the employee types it adds that employee and info to an individual card. Upon choosing "finish building team," The input information gets rendered to an HTML file, available to the user for deployment.

NodeJs is used to host the inquirer package functions and FS was integrated to write the HTML file upon fulfillment of promises to the inquirer function. This project employs object oriented programing to store the data in child elements of a parent class constructors. The application also utilizes a test driven approach. The Jest npm package is employed to test the constructor classes in order to ensure that they perform as desired.

## Installation

Download the repo and run "npm i" and subsequently "node index" in the node terminal. Follow the inquirer prompts.

## Usage

![alt-text](/Gif/Team-Profile.gif)

Upon running the application, answer the prompts as desired. After creating a manager, choose between creating more employees or finishing your team. As many employees as one would like can be added to webpage. Upon choosing "finish building team," the yourHTML will be rendered and ready for use in the dist folder. Copy and use as desired.

## Tests

Tests were run with the npm package "jest." to run tests open the terminal in any of the test.js files and run "npm run test." test results will follow.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

_Any questions can be directed at the info below:_

GitHub: @benrgross

email: benrgross@gmail.com
