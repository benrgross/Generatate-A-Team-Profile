
class Employee {
  constructor(name, id, email) {
    this.title = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    let randomNumber = Math.floor(Math.random() * 90 + 10);
    randomNumber = this.id;
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
