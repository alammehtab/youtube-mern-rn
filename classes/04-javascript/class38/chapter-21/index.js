// CHAPTER-21: CHANGING CASE
// lowercase:
// hello world

// uppercase:
// HELLO WORLD

// toLowerCase()
// const city = "peshawar";
// console.log(city);

// using second variable
// let city = "PESHAWAR";
// const smallCity = city.toLowerCase();
// console.log(city);
// console.log(smallCity);

// without using second variable
// console.log(city.toLowerCase());
// city = city.toLowerCase();
// console.log(city);

// zaroori nhi ha k all uppercase ho, mix b hosakte hn
// const city = "KaRachi";
// console.log(city.toLowerCase());

// toUpperCase()
// let city = "karachi";

// using second variable
// const capitalizedCity = city.toUpperCase();
// console.log(city);
// console.log(capitalizedCity);

// without using second variable
// console.log(city.toUpperCase());
// city = city.toUpperCase();
// console.log(city);

// zaroori nhi ha k all lowercase ho, mix b hosakte hn
// const city = "peShaWar";
// console.log(city.toUpperCase());

// REAL WORLD EXAMPLE
// latptop scheme
const eligibleUniversities = [
  "sarhad",
  "iqra",
  "islamia",
  "city",
  "ims",
  "cecos",
  "nust",
  "agriculture",
];
const studentUniversity = prompt("Please enter your university name");
let isEligible = false;

for (
  let universityIndex = 0;
  universityIndex < eligibleUniversities.length;
  universityIndex++
) {
  if (
    studentUniversity.toLowerCase() === eligibleUniversities[universityIndex]
  ) {
    isEligible = true;
    console.log("Eligible");
    break;
  }
}

if (!isEligible) {
  console.log("Not Eligible");
}
