// Chapter-74: Objects: Prototypes
function Student(name, age, contact, passOut) {
  (this.name = name), (this.age = age), (this.contact = contact);
}

Student.prototype.calculateTotalMarks = function (marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  console.log(sum);
};

Student.prototype.passOut = true;

const Ali = new Student("Ali", 24, "111515151");
const Bilal = new Student("Bilal", 24, "111515151");
const hahahha = new Student("Binish", 18, "90185109519");
hahahha.passOut = false;

console.log(hahahha.passOut);
