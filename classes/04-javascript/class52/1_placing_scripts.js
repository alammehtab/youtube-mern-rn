function sayHi() {
  console.log("Hi from sayHi");
}

function sayHiAgain() {
  sayBye();
  console.log("hi from sayHiAgain");
  sayHi();
}

function sayBye() {
  console.log("bye");
}

console.log("hellohello");
sayHiAgain();
