// CHAPTER-30: Controlling the length of decimals

// sales tax example
// const itemPrice = 1750.765;
// const salesTaxPercent = 0.02; //2%
// const salesTaxAmount = itemPrice * salesTaxPercent;
// console.log({ salesTaxAmount });

// let totalPrice = itemPrice + salesTaxAmount;
// totalPrice = totalPrice.toFixed(0);
// console.log({ itemPrice, salesTaxAmount, totalPrice });

// inter marks percentage
// const totalMarks = 1100;
// const obtainedMarks = 653;

// const percentage = ((obtainedMarks / totalMarks) * 100).toFixed();
// console.log(percentage);

// problem
// console.log(1.555.toFixed(2))

// fixing the above problem (jugaar)
// let num = 1.555;

// let str = num.toString();

// if (str.charAt(str.length - 1) === "5") {
//   str = str.slice(0, str.length - 1) + "6";
// }

// console.log({ str });
// num = Number(str);
// num = num.toFixed(2);
// console.log({ num });

// mini imtihan
// console.log("################", str.length - 1);
// console.log(">>>>>>>", str.charAt(str.length - 1));
// console.log(">>>>>>>>", str.slice(0, str.length - 1));
