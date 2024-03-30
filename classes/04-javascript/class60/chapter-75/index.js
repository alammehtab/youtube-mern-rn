// Chapter-75: Objects: Checking for properties and methods

function Student(name, age, contact) {
  (this.name = name),
    (this.age = age),
    (this.contact = contact),
    (this.passOut = true);
  this.sayStudentName = function () {
    console.log(this.name);
  };
}

const Nimra = new Student("Nimra", 20, "0914109091401");
// check prop on obj
// const doesNameExist = "name" in Nimra;

// GET ALL PROPERTIES OF AN OBJ
// function getAllProps() {
//   let props = [];

//   for (let singleProperty in Nimra) {
//     props.push(singleProperty);
//   }

//   console.log(props);
// }

// getAllProps();

// hasOwnProperty
Student.prototype.marks = 99;
for (let singleProperty in Nimra) {
  if (Nimra.hasOwnProperty(singleProperty)) {
    console.log(singleProperty);
  }
}
