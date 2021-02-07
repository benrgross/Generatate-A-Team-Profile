Employee = require("./Employee");

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
    return this.gutHub;
  }
}

module.exports = Engineer;
