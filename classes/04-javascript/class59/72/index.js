// function Car(color, model, year) {
//     this.color = color;
//     this.model = model;
//     this.year = year;
// }

// address your confusion with names
// function Car(c, m, y) {
//     this.color = c;
//     this.model = m;
//     this.year = y;
// }

// create new objects using constructor function
// var car1 = new Car("Silver", "Honda", 2024)
// var car2 = new Car("red", "Toyota", 2020);
// console.table([car1, car2])
// console.log(car1, car2)

// ADD METHODS TO CONTSTRUCTOR
// function Car(c, m, y) {
//     this.color = c;
//     this.model = m;
//     this.year = y;
//     this.start = function () {
//         console.log(this.model + " has started");
//     };
// }

// TESTING CONTSTUCTOR METHOD
// var car1 = new Car("Black", "BMW", 2018)
// var car2 = new Car("Silver", "Honda", 2024)
// var car3 = new Car("red", "Toyota", 2020);
// console.log(car1)
// car1.start()
// car2.start()
// car3.start()

// ANOTHER REAL-WORLD EXAMPLE (PERSON)
// function Person(firstName, lastName, a) {
//     this.fn = firstName;
//     this.ln = lastName;
//     this.age = a;
//     this.printFullName = function () {
//         console.log(`${firstName} ${lastName}`)
//     }
// }

// var ali = new Person("Ali", "Muhammad", 45)
// var bilal = new Person("Bilal", "Ahmed", 15)
// var danyal = new Person("Danyal", "Akram", 32)
// console.log(ali, bilal, danyal)
// ali.printFullName()
// bilal.printFullName()
// danyal.printFullName()