const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.title = "Engineer";
    this.gitHub = gitHub;
  }
  getRole() {
    return this.title;
  }
  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;

const employee = new Employee();
console.log(employee.gitHub);
