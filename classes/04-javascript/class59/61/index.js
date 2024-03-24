// create an object
// const person = {
//   name: "Maryam",
//   age: 18,
//   education: "BSCS",
// };

// ADD A METHOD LATER
// person.write = function () {
//   console.log("Maryam is writing");
// };

// ADD A METHOD RIGHT AWAY
const person = {
  name: "Maryam",
  age: 18,
  education: "BSCS",
  sayMyName: function () {
    console.log("My name is " + this.name);
  },
};

// access a method
person.sayMyName();
