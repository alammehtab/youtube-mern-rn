// CREATE EMPTY OBJECT
// var car = {}
// console.log(car)

// ADD PROPERTIES TO AN OBJECT

// let's create an emtpy object
// var car = {}

// car.color = "red" // using dot notation
// car["owner"] = "Danyal" // using bracket notation
// car.price = 2000000 // we'll stick to dot notation
// console.log(car)

// ACCESS OBJECT PROPERTIES

// var car = {
//     color: "red",
//     year: 2022,
//     owner: "Ali",
//     price: 1515151
// }

// console.log(car.color) // using dot notation
// console.log(car["price"]) // bracket notation

// CHANGE PROPERTY VALUE

// var car = {
//     color: "red",
//     year: 2022,
//     owner: "Ali",
//     price: 1515151
// }

// car.owner = "Bilal" // dot notation
// car["color"] = "black" // bracket notation

// console.log(car)

// DELETE A PROPERTY
// var car = {
//     color: "red",
//     year: 2022,
//     owner: "Ali",
//     price: 1515151
// }

// delete car.price
// console.log(car)

// CHECK PROPERTY EXISTANCE
var car = {
    color: "red",
    year: 2022,
    owner: "Ali",
    price: 1515151
}

// console.log("owner" in car) // owner exists in car
console.log("tyres" in car) // tyres property doesn't exist in car