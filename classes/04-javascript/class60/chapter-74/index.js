// prototype attached to an array, we seen earlier but haven't discussed in detail
// var numbers = [1, 2, 3]
// console.log(numbers)

// let's create an object
// var person = {
//     name: 'ali',
//     age: 28
// }
// Every JavaScript object has a prototype
// console.log(person)

// EXAMPLE OF PROTOTYPE/PROTOTYPE IN ACTION

// constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// create person object using Person constructor function
// var ali = new Person("Ali", 28)

// if we try to access salary (which doesn't exist on person) we get undefined
// console.log(ali.salary)

// let's add salary to person using prototype
// Person.prototype.salary = 50000

// let's add isEligible on person
// Person.prototype.isEligible = true
// console.log(ali.isEligible)

// Adding a method to the prototype
// Person.prototype.greet = function () {
//     console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
// };

// let's create two objects/persons
// var person1 = new Person("Alice", 30);
// var person2 = new Person("Bob", 25);
// var person3 = new Person("Ali", 55);
// var person4 = new Person("Bilal", 41);
// var person5 = new Person("Danyal", 15);

// let's call greet method on each person
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
// person3.greet()
// person4.greet()
// person5.greet()

// ADDING METHODS TO JS'S BUILT-IN OBJECTS
// Array.prototype.first = function () {
//     return this[0];
// };

// Array.prototype.dusra = function () {
//     return this[1]
// }

// var numbers = [1, 2, 3, 4];
// var friends = ["Danyal", "Ali", "Sohrab"]

// test first method
// console.log(numbers.first()); // output: 1
// console.log(friends.first()); // Output: Danyal

// test dusra method
// console.log(numbers.dusra())
// console.log(friends.dusra())