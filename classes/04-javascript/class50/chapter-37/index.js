// Chapter-37: Functions: Passing data back from them

// START KIA YAHA SE

// function statement
// function greet() {
//   console.log("kese hn ap?");
// }

// function call
// greet();
// greet();

// DATA PASS KIA, VERSATILE BANA DIA
// function greet(msg) {
//   console.log(msg);
// }

// greet("kese hn ap?");
// greet("hello, how are you?");

// FUNCTION SE DATA WAPS KESE LE?

// simple example
// function calculateSum(num1, num2) {
//   //   alert(num1 + num2);
//   let sum = 0;
//   sum = num1 + num2;
//   return sum;
// }

// const total = calculateSum(10, 2);
// console.log(total);

// complex example: calculate matric percentage

// formula: obtainedMarks / totalMarks * 100

function calculateObtainedMarks(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    // sum = sum + marks[i];
    sum += marks[i];
  }

  return sum;
}

const obtainedMarks = calculateObtainedMarks([95, 67, 87, 59, 90]);
const totalMarks = 500;
// const matricPercentage = (obtainedMarks / totalMarks) * 100;

// fix to 1 decimal value
const matricPercentage = ((obtainedMarks / totalMarks) * 100).toFixed(1);

console.log(matricPercentage);
