// create an object
const Ali = {
  name: "Ali",
  age: 25,
  marks: 89,
  isMarried: false,
};

const Bilal = {
  name: "Bilal",
  age: 25,
  marks: 89,
  isMarried: false,
};

// CONSTRUCTORS
// to avoid the repetion of creating a separate/ brand-new object for every person
function Person(name, age, marks, isMarried) {
  (this.naam = name),
    (this.umr = age),
    (this.nukat = marks),
    (this.shadiShuda = isMarried);
}

const danyal = new Person("Danyal", 19, 56, false);
const faisal = new Person("Faisal", 29, 99, true);

console.log(danyal, faisal);
