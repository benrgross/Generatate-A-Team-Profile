// =========== Dependencies ============
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const htmlTemplate = require("./src/htmlTemplate");
const fs = require("fs");
// const jest = require("jest");

let teamMembers = [];

//======= Functions ========
const renderTeam = () => {
  fs.writeFile("./dist/yourTeam.html", htmlTemplate(teamMembers), (err) =>
    err
      ? console.log(error)
      : console.log("Making yourTeam.html! Get the file in the dist folder!")
  );
};

const getEmployee = () => {
  inquirer
    .prompt([
      {
        message: "Welcome to Team Builder! What is your team name?",
        name: "teamName",
      },
    ])
    .then(function (response) {
      teamName = response.teamName;
      teamMembers.push(teamName);
      getManager();
    });
};

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
