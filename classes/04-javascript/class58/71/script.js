// ADD METHODS TO AN OBJECT

// create an empty obj and add props and methods later
// var car = {}

// add some properties
// car.color = "black"
// car.year = 2024

// Adding Methods After Object Creation
// add method start to car
// car.start = function () {
//     console.log("The car has started.")
// }

// How to Call a Method ?
// car.start()

// create obj with props and methods
// var car = {
//     color: 'black',
//     year: 2024,
//     start: function () {
//         console.log("The car has started.")
//     }
// }

// car.start()

// method with return
// var car = {
//     color: 'black',
//     year: 2024,
//     start: function () {
//         return "The car has started."
//     }
// }

// console.log(car.start())
// var returnedString = car.start()
// console.log(returnedString)

// this KEYWORD INSIDE METHODS
// var car = {
//     color: "red",
//     model: "Toyota",
//     year: 2020,
//     start: function () {
//         console.log("Starting the " + this.model);
//     }
// }

// call start method
// car.start()

// BENEFITS OF METHODS

// bundle related functionalities
// var car = {
//     color: "red",
//     model: "Toyota",
//     year: 2020,
//     start: function () {
//         console.log("Starting the " + this.model);
//     },
//     stop: function () {
//         console.log("The car has stopped!")
//     }
// }

// Practical Example: A Person Object
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
//     celebrateBirthday: function () {
//         this.age += 1;
//         console.log("Happy Birthday! You are now " + this.age + " years old.");
//     }
// };

// console.log(person.getFullName()) //output: John Doe
// person.celebrateBirthday() //output: Happy Birthday! You are now 31 years old.