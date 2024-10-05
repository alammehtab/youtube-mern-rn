function Car(color, model, year) {
    // properties
    this.color = color;
    this.model = model;
    this.year = year;

    // methods
    this.start = function () {
        console.log(this.model + " is starting...")
    }

    this.printDetails = function () {
        console.log(`Color: ${this.color} Model: ${this.model} Year: ${this.year}`)
    }
}

// objects of Car
var car1 = new Car("red", "Toyota", 2020);
var car2 = new Car("blue", "Honda", 2018)
var myCar = new Car("Silver", "Honda", 2025)

// test start methods
// car1.start()
// car2.start()
// myCar.start()

// test printDetails method
// car1.printDetails()
// car2.printDetails()
// myCar.printDetails()

// ANOTHER EXAMPLE
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function () {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     };
// }

// var person1 = new Person("Alice", 30);
// var person2 = new Person("Bob", 25);
// var moeed = new Person("Moeed", 20);

// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
// moeed.greet()