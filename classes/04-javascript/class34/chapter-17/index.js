// CHAPTER-17: Arrays:Removing, inserting,and extracting elements

// var animals = ["🐶", "😸", "🐘", "🐄"];

// question from last lectures
// animals.push("🐯");
// let popped = animals.pop();
// animals.push("🐀");
// popped = animals.pop();

// console.log(animals)
// console.log(popped)

// shift, removes 1 element from start of the array
// var animals = ["🐶", "😸", "🐘", "🐄"];
// animals.shift();
// console.log(animals);

// containing the shifted element
// var shiftedElement = animals.shift();
// var dog = animals.shift();
// console.log(dog);

// unshift, adds to the start
// var animals = ["🐶", "😸", "🐘", "🐄"];
// animals.unshift("🐪");
// console.log(animals);

// imtihan (shift,unshift,push,pop)
// var animals = ["🐶", "😸", "🐘", "🐄"];
// animals.push("🐴");
// var shiftedAnimal = animals.shift();
// animals.pop();
// animals.unshift("🐇");

// console.log(animals)
// console.log(shiftedAnimal)

// splice, add-replace-remove
// var animals = ["🐶", "😸", "🐘", "🐄"];

// add 2 animals at index 2 without removing any animal (apni example)
// animals.splice(2, 0, "🐴", "🐪");
// console.log(animals);

// add 2 animals at index 2 by removing 1 animal (apni example)
// var animals = ["🐶", "😸", "🐘", "🐄"];
// animals.splice(2, 1, "🐴", "🐪", "🐇");
// console.log(animals);

// add 2 animals at index 2 by removing 2 animals (apni example)
// animals.splice(2, 2, "🐴", "🐪");
// console.log(animals);

// mdn example
// var months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);
// months.splice(4, 1, "May");
// console.log(months);

// book ki example
// var pets = ["dog", "cat", "fly", "bug", "ox"];

// first argument: 2, kaha elements rakhne hn
// second argument: 2, kitne elements remove karne hn
// or phr kon konse elements add karne hn
// pets.splice(2, 2, "pig", "duck", "emu");
// console.log(pets);

// pop vs splice, return type
// var pets = ["dog", "cat", "fly", "bug", "ox"];
// var spliced = pets.splice(2, 1);
// var popped = pets.pop();

// console.log(spliced);
// console.log(popped);

// sawal
// spliced.push("test");
// console.log(spliced);

// sawal
// popped.push("test");
// console.log(popped);

// slice
// var pets = ["dog", "cat", "fly", "bug", "ox"];
// var slicedArray = pets.slice(2, 4);

// console.log(pets);
// console.log(slicedArray);

// splice vs slice
// var pets = ["dog", "cat", "fly", "bug", "ox"];
// var slicedArray = pets.slice(2, 4);
// var splicedArray = pets.splice(2, 4);

// console.log({ pets, slicedArray });
// console.log({ pets, splicedArray });

// splice: changing the original
// slice: not changing the original
// var animals = ["🐶", "😸", "🐘", "🐄"];
// var spliced = animals.splice(2);
// var sliced = animals.slice(2);

// console.log({ animals, spliced });
// console.log({ animals, sliced });
