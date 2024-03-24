// object we created in the last class
// const basicPlan = {
//   name: "Basic Plan",
//   price: "$5",
//   space: 100,
//   data: "100 GB",
//   pages: 10,
//   activated: false,
//   areas: ["Peshawar", "Lahore", "Karachi"],
// };

// properties
const person = {};

// ADD PROPERTY

// using dot notation
person.name = "Ali";
person.age = 20;
person.subjects = ["computer science", "Mathematics", "Physics"];

// using bracket notation
person["nationality"] = "pakistani";

// DELETE A PROPERTY

// using dot notation
// delete person.subjects;

// using bracket notation
// delete person["age"];

// CHECK THE EXISTANCE OF A PROPERTY
const doesNameExist = "name " in person;
