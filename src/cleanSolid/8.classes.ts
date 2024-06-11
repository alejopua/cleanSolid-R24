(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, name, gender, birthday);
    }
  }

  // const firtsPerson = new Person("Diana", "F", new Date("1994-11-14"));
  // console.log({ firtsPerson });

  const firtsUserSettings = new UserSettings(
    "desktop/projectBank",
    "/module1",
    "diana@gmail.com",
    "accountant",
    "Diana",
    "F",
    new Date("1994-11-14")
  );
  console.log({ firtsUserSettings });
})();
