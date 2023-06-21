console.log("-----------------------------");
// OBJECT METHODS
// I CAN ADD FUNCTIONS TO OBJECTS
// just some random test data for the object
const jay1 = {
  firstName: "jay",
  lastName: "rietzke",
  birthYear: 1776,
  job: "software develper",
  friends: ["mike", "pete", "steve"],
  hasDriversLicense: true,
  //uncomment function below for lines 389 and 390
  // calcAge: function (birthYear) {
  //   return 2040 - birthYear;
  // },

  // const calcAge = function (birthYear) {
  //   return 2040 - birthYear;
  // };
  // console.log(calcAge);
  // any function expression that is attached to an object is called a method

  // function declarations do not work such as:
  // function calcAge(birthYear) {
  //   return 2040 - birthYear;
  // }
  // console.log(calcAge);

  // console.log(jay1);
  // console.log(jay1.calcAge(2000)); //as dot notation
  // console.log(jay1["calcAge"](2000)); //as bracket notation

  //A better way to access is below
  // the 'this' keyword is very useful, to avoid rewriting arguments/perameters. this is DRY principle
  calcAge: function () {
    console.log(this);
    return 2023 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jay1.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jay1.calcAge()); //as dot notation
// console.log(jay1["calcAge"](2000)); //as bracket notation

// another way to do it:
// calcAge: function () {
//   this.age = 2040 - this.birthYear;
//   return this.age; // dont' have to return actually
// }
// console.log(jay1.age);

// testing challenge, make it say this:
// " jay is a nn-year old FSWD, and he has a/no driver's license" // line 40 to 43 and 58.
console.log(jay1.getSummary());
// to test the 'a/no', change the boolean in line 369 in the object from true to false and vice/versa
