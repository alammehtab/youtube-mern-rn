// CHAPTER-7: MATH EXPRESSIONS

// ELIMINATING AMBIGUITY IN MATH EXPRESSIONS
// you remember from your school
// BODMAS -> 'Brackets, Order, Division, Multiplication, Addition, Subtraction
// in js bodmas is called operator precedence (operator priority which is a bit change from bodmas)
// like + and -, and * and / have same precedence, we follow order then

// EXERCISES
// console.log(2 - 1 * 8);
// 2 - 1 * 8
// 2 - 8
// -6

// console.log(1 + 2 * 3 + 7);
// 1 + 6 + 7
// 7 + 7
// 14

// console.log(1 + 2 * (3 + 7));
// 1 + 2 * 10
// 1 + 20
// 21

// console.log(5 * 5 - 30 / (3 + 7));
// 5 * 5 - 30 / 10
// 25 - 30 / 10
// 25 - 3
// 22

// console.log(5 * 5 - 3 / 3 + 7);
// 25 - 3 / 3 + 7
// 25 - 1 + 7
// 24 + 7
// 31

// console.log(2 * 4 * 4 + 2);
//  8 * 4 + 2
// 32 + 2
// 34

// console.log(2 * 4 % 4 + 2);