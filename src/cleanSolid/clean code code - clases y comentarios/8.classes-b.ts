// El principio de responsabilidad única es el termino que especifica que una función solo debe hacer lo que se esperaría que haga

(() => {
  // no aplicar el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthday, gender, name }: PersonProps) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ birthday, email, gender, name, role }: UserProps) {
      super({ birthday, name, gender });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  // esta clase esta violando el principio de responsabilidad única porque esta clase tiene mas de una responsabilidad y hace muchas cosas. Es myu difícil mantener esta clase y saber para alguien que no la escribió que hace.
  // algo que se procura evitar es manejar de manera abstract con herencia, porque se puede caer en el problema de tener clases muy grandes y con muchas responsabilidades
  // aplicar el principio de responsabilidad unica en herencia es casi imposible de hacer.
  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthday,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthday, email, gender, name, role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // const firtsPerson = new Person("Diana", "F", new Date("1994-11-14"));
  // console.log({ firtsPerson });

  const firtsUserSettings = new UserSettings({
    birthday: new Date("1994-11-14"),
    email: "diana@gmail.com",
    gender: "F",
    lastOpenFolder: "/desktop",
    name: "Diana",
    role: "accountant",
    workingDirectory: "/usr/desktop",
  });
  console.log({ firtsUserSettings });
})();
