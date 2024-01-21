// CHAPTER-21: CHANGING CASE
// lowercase:
// hello world

// uppercase:
// HELLO WORLD

// const city = "peshawar";
// const city = "peShaWar";
// console.log(city.toUpperCase());

// const city = "PESHAWAR";
// const city = "PeshaWar";
// console.log(city.toLowerCase());

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
