// CHAPTER-17: Arrays:Removing, inserting,and extracting elements

// const animals = ["🐶", "😸", "🐘", "🐄"];

// question from last lectures
// animals.push("🐯");
// let popped = animals.pop();
// animals.push("🐀");
// popped = animals.pop();

// console.log(animals)
// console.log(popped)

// shift, removes 1 element from start of the array
// const animals = ["🐶", "😸", "🐘", "🐄"];
// animals.shift();
// console.log(animals);

// containing the shifted element
// const shiftedElement = animals.shift();
// const dog = animals.shift();
// console.log(dog);

// unshift, adds to the start
// const animals = ["🐶", "😸", "🐘", "🐄"];
// animals.unshift("🐪");
// console.log(animals);

// imtihan (shift,unshift,push,pop)
// const animals = ["🐶", "😸", "🐘", "🐄"];
// animals.push("🐴");
// const shiftedAnimal = animals.shift();
// animals.pop();
// animals.unshift("🐇");

// console.log(animals)
// console.log(shiftedAnimal)

// splice, add-replace-remove
// const animals = ["🐶", "😸", "🐘", "🐄"];

// add 2 animals at index 2 without removing any animal (apni example)
// animals.splice(2, 0, "🐴", "🐪");
// console.log(animals);

// add 2 animals at index 2 by removing 1 animal (apni example)
// const animals = ["🐶", "😸", "🐘", "🐄"];
// animals.splice(2, 1, "🐴", "🐪", "🐇");
// console.log(animals);

// add 2 animals at index 2 by removing 2 animals (apni example)
// animals.splice(2, 2, "🐴", "🐪");
// console.log(animals);

// mdn example
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);
// months.splice(4, 1, "May");
// console.log(months);

// book ki example
// const pets = ["dog", "cat", "fly", "bug", "ox"];

// first argument: 2, kaha elements rakhne hn
// second argument: 2, kitne elements remove karne hn
// or phr kon konse elements add karne hn
// pets.splice(2, 2, "pig", "duck", "emu");
// console.log(pets);

// pop vs splice, return type
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const spliced = pets.splice(2, 1);
// const popped = pets.pop();

// console.log(spliced);
// console.log(popped);

// sawal
// spliced.push("test");
// console.log(spliced);

// sawal
// popped.push("test");
// console.log(popped);

// slice
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const slicedArray = pets.slice(2, 4);

// console.log(pets);
// console.log(slicedArray);

// splice vs slice
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const slicedArray = pets.slice(2, 4);
// const splicedArray = pets.splice(2, 4);

// console.log({ pets, slicedArray });
// console.log({ pets, splicedArray });

// splice: changing the original
// slice: not changing the original
// const animals = ["🐶", "😸", "🐘", "🐄"];
// const spliced = animals.splice(2);
// const sliced = animals.slice(2);

// console.log({ animals, spliced });
// console.log({ animals, sliced });
