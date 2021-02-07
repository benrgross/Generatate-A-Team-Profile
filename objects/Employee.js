// -----------class constructor employee ---------
// -- name
// -- id
// -- email - opens to default main with address in new email
// -- getName()
// -- getId()
// -- getEmail()
// -- getRole() -- returns Employee

class Employee {
  constructor(name, id, email) {
    this.title = "Employee";
    this.name;
    this.id;
    this.email;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.title;
  }
}
module.exports = Employee;
