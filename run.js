// =========== Dependencies ============
const inquirer = require("inquirer");
const Employee = require("./objects/Employee");
const Engineer = require("./objects/Engineer");
const Manager = require("./objects/Manager");
const Intern = require("./objects/Intern");
// const jest = require("jest");

let teamArray = [];

//======= Functions ========
// ------ get the answers from inquier after --> push to array

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
      teamArray.push(teamName);
      console.log(teamArray);
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
      teamArray.push(employeeInfo);
      console.log(teamArray);
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
      const id = teamArray.length + 1;
      const email = response.email;
      const gitHub = response.gitHub;
      employeeInfo = new Engineer(name, id, email, gitHub);
      teamArray.push(employeeInfo);
      console.log(teamArray);
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
      const id = teamArray.length + 1;
      const email = response.email;
      const school = response.school;
      employeeInfo = new Intern(name, id, email, school);
      teamArray.push(employeeInfo);
      console.log(teamArray);
      chooseEmployee();
    });
};

const renderTeam = () => {
  console.log("hello");
  console.log(teamArray);
};

// ------ wait till the user is done then render array to html

// ====== User Interaction =====

// -------------------- Inquirer questions ---------------------
// -- first question: specify team member  -- choice
// ------- need to figure out how to rerun this till user chooses generate html
// ------------------ call back functions within inquirer?
// -- switch case for each person ?
getEmployee();
