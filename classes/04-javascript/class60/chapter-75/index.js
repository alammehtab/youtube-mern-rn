// HOW TO CHECK PROPERTIES IN AN OBJECT

//Method 1: Using the in Operator
// var car = {
//     make: "Toyota",
//     model: "Corolla"
// };
// console.log("make" in car)
// console.log("color" in car)

// using a variable
// var colorExist = "color" in car;
// console.log(colorExist)

// Method 2: Using the hasOwnProperty() Method
// var car = {
//     make: "Toyota",
//     model: "Corolla"
// };
// console.log(car.hasOwnProperty("make"))
// console.log(car.hasOwnProperty("color"))

// Method 3: Using typeof to Check for Methods
// example function and its type using typeof operator (just to clarify stuff)
// function test() {
// }
// console.log(typeof test)

// var car = {
//     make: "Toyota",
//     model: "Corolla",
//     start: function () {
//         console.log("Car is starting");
//     }
// };

// console.log(typeof car.start === 'function')
// console.log(typeof car.stop === 'function')

// Method 4: Using undefined Check
// var person = {
//     name: "John",
//     age: 30
// };

// if (person.age === undefined) {
//     alert("Age doesn't exist on person 😔")
// } else {
//     alert("Hurrah! Age exists on person 😆")
// }

// DIFFERENCE BETWEEN in AND hasOwnProperty()

var car = {
    make: "Toyota",
    model: "Corolla"
};

// console.log("toString" in car) //toString exists in prototype
// console.log(car.hasOwnProperty("toString")) // toString exists on object itself