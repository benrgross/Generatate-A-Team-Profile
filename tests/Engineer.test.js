const Engineer = require("../objects/Engineer");

describe("Engineer", () => {
  describe("Initialize", () => {
    it("should have a name, id, email and GitHub", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      expect("name" in engineer).toEqual(true);
      expect(engineer.name).toEqual("Jim");
      expect("email" in engineer).toEqual(true);
      expect(engineer.email).toEqual("jim@gmail.com");
      expect("gitHub" in engineer).toEqual(true);
      expect(engineer.name).not.toEqual(undefined);
      expect(engineer.email).not.toEqual(undefined);
      expect(engineer.gitHub).not.toEqual(undefined);
      expect(engineer.id).toBeGreaterThanOrEqual(1);
      expect(engineer.id).toEqual(1);
    });
  });
  describe("getRole", () => {
    it("should return the string equal to its tile", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      title = engineer.getRole();

      expect(title).toEqual(engineer.title);
    });
  });
  describe("getName", () => {
    it("should return the string equal to its tile", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      name = engineer.getName();

      expect(name).toEqual(engineer.name);
      expect(name).toEqual("Jim");
    });
  });
  describe("getEmail", () => {
    it("should return the string equal to its tile", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      email = engineer.getEmail();

      expect(email).toEqual(engineer.email);
      expect(email).toEqual("jim@gmail.com");
    });
  });
  describe("getId", () => {
    it("should return the string equal to its tile", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      id = engineer.getId();

      expect(id).toEqual(engineer.id);
      expect(id).toEqual(1);
    });
  });
  describe("getGitHub", () => {
    it("should return the string equal to its tile", () => {
      const engineer = new Engineer("Jim", 1, "jim@gmail.com", "jimGitHub");

      gitHub = engineer.getGitHub();

      expect(gitHub).toEqual(engineer.gitHub);
      expect(gitHub).toEqual("jimGitHub");
    });
  });
});
