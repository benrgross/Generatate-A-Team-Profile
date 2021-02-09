const Employee = require("../objects/Employee");

describe("Employee", () => {
  describe("Initialize", () => {
    it("should have a name id and email", () => {
      const employee = new Employee("Jim", 1, "jim@gmail.com");

      expect("name" in employee).toEqual(true);
      expect(employee.name).toEqual("Jim");
      expect("email" in employee).toEqual(true);
      expect(employee.email).toEqual("jim@gmail.com");
      expect(employee.name).not.toEqual(undefined);
      expect(employee.email).not.toEqual(undefined);
      expect(employee.id).toBeGreaterThanOrEqual(1);
      expect(employee.id).toEqual(1);
    });
  });
  describe("getRole", () => {
    it("should return the string equal to its tile", () => {
      const employee = new Employee("Jim", 1, "jim@gmail.com");

      title = employee.getRole();

      expect(title).toEqual(employee.title);
    });
  });
  describe("getName", () => {
    it("should return the string equal to its tile", () => {
      const employee = new Employee("Jim", 1, "jim@gmail.com");

      name = employee.getName();

      expect(name).toEqual(employee.name);
      expect(name).toEqual("Jim");
    });
  });
  describe("getEmail", () => {
    it("should return the string equal to its email", () => {
      const employee = new Employee("Jim", 1, "jim@gmail.com");

      email = employee.getEmail();

      expect(email).toEqual(employee.email);
      expect(email).toEqual("jim@gmail.com");
    });
  });
  describe("getId", () => {
    it("should return the string equal to its tile", () => {
      const employee = new Employee("Jim", 1, "jim@gmail.com");

      id = employee.getId();

      expect(id).toEqual(employee.id);
      expect(id).toEqual(1);
    });
  });
});
