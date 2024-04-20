// without try catch
// function greetTheWorld() {
//   let greeting = "Hello world!";
//   aler(greeting);
// }

// using try catch
function greetTheWorld() {
  try {
    let greeting = "Hello world!";
    aler(greeting);
  } catch (error) {
    // alert(error);
    alert("Sorry! It's not you.It's us!");
  }
}
greetTheWorld();
