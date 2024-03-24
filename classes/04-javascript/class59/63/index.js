function Person(name, age, marks, isMarried) {
  (this.naam = name),
    (this.umr = age),
    (this.nukat = marks),
    (this.shadiShuda = isMarried);
  this.write = function () {
    console.log(this.naam + " is writing.");
  };
  this.read = function () {
    console.log(this.naam + " is reading.");
  };
}

const Sania = new Person("Sania", 16, 80, false);
const Zafar = new Person("Zafar Uncle", 67, 57, true);
Sania.write();
Zafar.read();
