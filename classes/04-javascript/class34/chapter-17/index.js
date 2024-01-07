// CHAPTER-17: Arrays:Removing, inserting,and extracting elements

// const animals = ["🐶", "😸", "🐘", "🐄"];

// animals.push("🐯");
// let popped = animals.pop();
// animals.push("🐀");
// popped = animals.pop();

// shift, remove from start
// animals.shift();

// containing the shifted element
// const shiftedElement = animals.shift();

// unshift, add to the start
// animals.unshift("🐪");

// imtihan (shifted,unshift,push,pop)
// const animals = ["🐶", "😸", "🐘", "🐄"];
// animals.push("🐴");
// const shiftedAnimal = animals.shift();
// animals.pop();
// animals.unshift("🐇");
// console.log({ animals, shiftedAnimal });

// splice, add-replace-remove
// const animals = ["🐶", "😸", "🐘", "🐄"];

// add 2 animals at index 2 without removing any animal (apni example)
// animals.splice(2, 0, "🐴", "🐪");

// add 2 animals at index 2 by removing 1 animal (apni example)
// animals.splice(2, 1, "🐴", "🐪", "🐇");
// console.log({ animals });

// add 2 animals at index 2 by removing 2 animals (apni example)
// animals.splice(2, 2, "🐴", "🐪");
// console.log({ animals });

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
// console.log({ pets });

// negative indexing in splice and slice
// const fruits = ["mango", "banana", "orange"];
// console.log(fruits.slice(-3, -1));

// pop vs splice, return type
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const spliced = pets.splice(2, 1);
// const popped = pets.pop();

// console.log({ spliced });
// console.log({ popped });

// sawal
// spliced.push("test");
// console.log({ spliced });

// sawal
// popped.push("test");
// console.log({ popped });

// slice
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const slicedArray = pets.slice(2, 4);

// console.log({ pets, slicedArray });

// splice vs slice
// const pets = ["dog", "cat", "fly", "bug", "ox"];
// const slicedArray = pets.slice(2, 4);
// const splicedArray = pets.splice(2, 2, "bee", "duck");

// console.log({ pets, slicedArray });
// console.log({ pets, splicedArray });

// splice: changing the original
// slice: not changing the original
// const animals = ["🐶", "😸", "🐘", "🐄"];
// const spliced = animals.splice(2);
// const sliced = animals.slice(2);

// console.log({ animals, spliced });
// console.log({ animals, sliced });

// pass by value and pass by ref
// const fruits = ["mango", "banana", "orange"];
// const fruitsCopy = fruits;

// fruitsCopy.push("guava");

// console.log({ fruits, fruitsCopy });
