// El principio de responsabilidad única es el termino que especifica que una función solo debe hacer lo que se esperaría que haga

(() => {
  //Aplicar el principio de responsabilidad única
  //Priorizar la composición frente a la herencia!
  //Esto es mucho más fácil de mantener, comprender y entender

  type Gender = "M" | "F";

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  interface UserSettingsProps extends PersonProps, UserProps, SettingsProps {}

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

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
      birthday,
      gender,
      name,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birthday, gender, name });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

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
