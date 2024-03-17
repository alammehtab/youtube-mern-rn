// CHAPTER-30: Controlling the length of decimals

// METHOD WE'RE LOOKING AT
// toFixed(lengthOfDecimals)

// GENERAL EXAMPLES
// const testNumber = 45.1284;
// console.log(testNumber.toFixed());

// SALES TAX EXAMPLE
// const itemPrice = 1750.765;
// const salesTax = 0.02;
// const salesTaxAmount = itemPrice * salesTax;
// console.log({ salesTaxAmount });

// let totalPrice = itemPrice + salesTaxAmount;
// console.log(totalPrice);

// limiting the length of decimals
// console.log(totalPrice);
// totalPrice = totalPrice.toFixed(2);
// console.log(totalPrice);
// console.log({ itemPrice, salesTaxAmount, totalPrice });

// SCHOOL MARKS PERCENTAGE EXAMPLE
// const totalMarks = 1100;
// const obtainedMarks = 953;

// before limiting the length
// const percentage = (obtainedMarks / totalMarks) * 100;
// console.log(percentage);

// after limiting the length
// const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);
// console.log(percentage);

// PROBLEM
// console.log((1.555).toFixed(2));

// fixing the above problem (jugaar)
let num = 1.555;

let str = num.toString();
// console.log(str);

// console.log(str.charAt(str.length - 1));

if (str.charAt(str.length - 1) === "5") {
  str = str.slice(0, str.length - 1) + "6";
}

// console.log(str);
num = Number(str);
num = num.toFixed(2);
console.log(num);
