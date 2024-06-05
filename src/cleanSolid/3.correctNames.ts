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
