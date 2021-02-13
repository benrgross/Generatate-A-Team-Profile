// =========== Dependencies ============
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const htmlTemplate = require("./src/htmlTemplate");
const fs = require("fs");

// Array to hold objects created from prompts to be rendered to html page 
let teamMembers = [];

// rendering function, feeds teamMembers data to template html writes html file once prompts are finished 
const renderTeam = () => {
  fs.writeFile("./dist/yourTeam.html", htmlTemplate(teamMembers), (err) =>
    err
      ? console.log(error)
      : console.log("Making yourTeam.html! Get the file in the dist folder!")
  );
};

// beggining of inquirer proomts get the team name and calls next prompt
const getEmployee = () => {
  inquirer
    .prompt([
      {
        message: "Welcome to Team Builder! What is your team name?",
        name: "teamName",
      },
    ])
    // defines team name and pushes to array 
    .then(function (response) {
      teamName = response.teamName;
      teamMembers.push(teamName);
      getManager();
    });
};

// get input for the manager 
const getManager = () => {
  inquirer
    .prompt([
      {
        message: "What is the managers name?",
        name: "name",
        default: "John",
      },
      {
        message: "What is the managers email?",
        name: "email",
      },
      {
        message: "What is the managers office number?",
        name: "officeNumber",
      },
    ])
    // creates manager with input data and pushes to teamMembers array
    .then(function (response) {
      const name = response.name;
      const id = 1;
      const email = response.email;
      const officeNumber = response.officeNumber;
      employeeInfo = new Manager(name, id, email, officeNumber);
      teamMembers.push(employeeInfo);
      chooseEmployee();
    });
};

// prompt to choose the next employee or render the html page 
const chooseEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Choose which type of team member you would like to create: Engineer, Intern or Finish Building Team. ",
        choices: ["Engineer", "Intern", "Finish Building Team"],
        name: "chooseType",
      },
    ])
    // switch case to handle choice 
    .then(function (response) {
      switch (response.chooseType) {
        case "Engineer":
          getEngineer();
          break;
        case "Intern":
          getIntern();
          break;
        case "Finish Building Team":
          renderTeam();
          break;
      }
    });
};

// prompts for engineer data 
const getEngineer = () => {
  inquirer
    .prompt([
      {
        message: "What is the engineer's name?",
        name: "name",
        default: "Quincy",
      },
      {
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        message: "What is the engineers GitHub username?",
        name: "gitHub",
      },
    ])
    // creates engineer with input data an pushes it to the teamMembers array 
    .then(function (response) {
      const name = response.name;
      const id = teamMembers.length + 1;
      const email = response.email;
      const gitHub = response.gitHub;
      employeeInfo = new Engineer(name, id, email, gitHub);
      teamMembers.push(employeeInfo);
      chooseEmployee();
    });
};

// gets the data for an intern
const getIntern = () => {
  inquirer
    .prompt([
      {
        message: "What is the intern's name?",
        name: "name",
        default: "Boris",
      },
      {
        message: "What is the intern's email?",
        name: "email",
      },
      {
        message: "What school does the interns attend?",
        name: "school",
      },
    ])
    // creates an intern with input data and pushes to teamMembers array 
    .then(function (response) {
      const name = response.name;
      const id = teamMembers.length + 1;
      const email = response.email;
      const school = response.school;
      employeeInfo = new Intern(name, id, email, school);
      teamMembers.push(employeeInfo);
      chooseEmployee();
    });
};

getEmployee();
