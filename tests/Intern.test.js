const Intern = require("../objects/Intern");

describe("Intern", () => {
  describe("Initialize", () => {
    it("should have a name, id, email and GitHub", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      expect("name" in intern).toEqual(true);
      expect(intern.name).toEqual("Jim");
      expect("email" in intern).toEqual(true);
      expect(intern.email).toEqual("jim@gmail.com");
      expect("school" in intern).toEqual(true);
      expect(intern.name).not.toEqual(undefined);
      expect(intern.email).not.toEqual(undefined);
      expect(intern.school).not.toEqual(undefined);
      expect(intern.id).toBeGreaterThanOrEqual(1);
      expect(intern.id).toEqual(1);
    });
  });
  describe("getRole", () => {
    it("should return the string equal to its tile", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      title = intern.getRole();

      expect(title).toEqual(intern.title);
    });
  });
  describe("getName", () => {
    it("should return the string equal to its tile", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      name = intern.getName();

      expect(name).toEqual(intern.name);
      expect(name).toEqual("Jim");
    });
  });
  describe("getEmail", () => {
    it("should return the string equal to its tile", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      email = intern.getEmail();

      expect(email).toEqual(intern.email);
      expect(email).toEqual("jim@gmail.com");
    });
  });
  describe("getId", () => {
    it("should return the string equal to its tile", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      id = intern.getId();

      expect(id).toEqual(intern.id);
      expect(id).toEqual(1);
    });
  });
  describe("getSchool", () => {
    it("should return the string equal to its tile", () => {
      const intern = new Intern("Jim", 1, "jim@gmail.com", "UCSC");

      school = intern.getSchool();

      expect(school).toEqual(intern.school);
      expect(school).toEqual("UCSC");
    });
  });
});
