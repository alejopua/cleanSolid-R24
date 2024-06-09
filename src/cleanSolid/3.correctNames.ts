// --> ARRAYS

// Bad
const fruit = ["apple", "banana", "orange", "kiwi"];

// Regular
const fruitList = ["apple", "banana", "orange", "kiwi"];

// Good
const fruits = ["apple", "banana", "orange", "kiwi"];

// Better
const fruitNames = ["apple", "banana", "orange", "kiwi"];

// --> BOOLENAS

// Bad
const opened = true;
const write = false;
const frui = true;
const active = false;
const noValues = true;
const notEmpty = false;

// better
const isOpen = true;
const canWrite = false;
const isFruit = true;
const isActive = false;
const hasValues = true;
const isEmpty = false;

// --> NUMBERS

// Bad
const nFruit = 3;
const nCars = 5;

// Better
const minFruit = 1;
const maxFruit = 3;
const totalFruits = 3;
const totalOfCars = 5;

// --> FUNCTIONS

// Bad
createUseeIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();

//Better
createUser();
updateUser();
sendEmail();

// Examples

(() => {
  const temperatureCelsiusList = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const usersEmails = users.map((user) => user.email);

  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime;

  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(sides: number) {
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
