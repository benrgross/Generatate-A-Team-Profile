const Manager = require("../objects/Manager");

describe("Manager", () => {
  describe("Initialize", () => {
    it("should have a name, id, email and officeNumber", () => {
      const manager = new Manager("Jim", 1, "jim@gmail.com", 3);

      expect("name" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
      expect(manager.name).not.toEqual(undefined);
      expect(manager.email).not.toEqual(undefined);
      expect(manager.officeNumber).not.toEqual(undefined);
      expect(manager.id).toBeGreaterThanOrEqual(1);
    });
  });
  describe("getRole", () => {
    it("should return the string equal to its tile", () => {
      const manager = new Manager();

      title = manager.getRole();

      expect(title).toEqual(manager.title);
    });
  });
  describe("getName", () => {
    it("should return the string equal to its tile", () => {
      const manager = new Manager("Jim", 1, "jim@gmail.com", 3);

      name = manager.getName();

      expect(name).toEqual(manager.name);
      expect(name).toEqual("Jim");
    });
  });
  describe("getEmail", () => {
    it("should return the string equal to its tile", () => {
      const manager = new Manager("Jim", 1, "jim@gmail.com", 3);

      email = manager.getEmail();

      expect(email).toEqual(manager.email);
      expect(email).toEqual("jim@gmail.com");
    });
  });
  describe("getId", () => {
    it("should return the string equal to its tile", () => {
      const manager = new Manager("Jim", 1, "jim@gmail.com", 3);

      id = manager.getId();

      expect(id).toEqual(manager.id);
      expect(id).toEqual(1);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the string equal to its tile", () => {
      const manager = new Manager("Jim", 1, "jim@gmail.com", 3);

      officeNumber = manager.getOfficeNumber();

      expect(officeNumber).toEqual(manager.officeNumber);
      expect(officeNumber).toEqual(3);
    });
  });
});
