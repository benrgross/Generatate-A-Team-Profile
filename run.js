// =========== Dependencies ============
const inquirer = require("inquirer");
const jest = require("jest");

const Employee = require("../Employee");
const Manager = require("./objects/Manager");
const Intern = require("../Intern");
const Engineer = require("../Engineer");

//======= Functions ========
// ------ get the answers from inquier after --> push to array
// ------ wait till the user is done then render array to html

// ====== User Interaction =====

// -------------------- Inquirer questions ---------------------
// -- first question: specify team member  -- choice
// ------- need to figure out how to rerun this till user chooses generate html
// ------------------ call back functions within inquirer?
// -- switch case for each person ?
