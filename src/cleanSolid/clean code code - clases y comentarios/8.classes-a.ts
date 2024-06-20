// El principio de responsabilidad única es el termino que especifica que una función solo debe hacer lo que se esperaría que haga

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

  // esta clase esta violando el principio de responsabilidad única porque esta clase tiene mas de una responsabilidad y hace muchas cosas. Es myu difícil mantener esta clase y saber para alguien que no la escribió que hace.
  // algo que se procura evitar es manejar de manera abstract con herencia, porque se puede caer en el problema de tener clases muy grandes y con muchas responsabilidades
  // aplicar el principio de responsabilidad unica en herencia es casi imposible de hacer.
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
