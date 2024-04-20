function checkPassword() {
  try {
    let pass = document.getElementById("password").value;
    if (pass.length < 8) {
      throw "Please enter at least 8 characters.";
    }
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
    let numberSomewhere = false;
    for (let i = 0; i < pass.length; i++) {
      if (isNaN(pass(i, i + 1)) === false) {
        numberSomewhere = true;
        break;
      }
    }
    if (numberSomewhere === false) {
      throw "Include at least 1 number.";
    }
  } catch (err) {
    alert(err);
  }
}
