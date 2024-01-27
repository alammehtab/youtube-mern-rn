// CHAPTER-24: Finding a character at a location
// const institute = "saylani mass it training";
// console.log(institute.charAt(14));

// if u want to access the space
// const mohalla = "saylani mass it training";
// console.log(mohalla.charAt(7));

// example we've done already in last class
const text = "hurrah!";

for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === "!") {
    console.log("Exclamation point found!");
    break;
  }
}
