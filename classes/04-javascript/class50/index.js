// Chapter-37: Functions: Passing data back from them

// hm ne start kia tha
// function greet() {
//   console.log("kese hn ap?");
// }
// greet();

// data pass kia, versatile bana dia
// function greet(msg) {
//   console.log(msg);
// }

// greet("kese hn ap?");
// greet("hello, how are you?");

// function se data return krwarhe, getting data back

// function areaOfRectange(length, width) {
//   return length * width;
// }

// const area = areaOfRectange(10, 5);

// console.log("Area of rectangle is: ", area);

// calculate totalPrice
// function calculateTotalPrice(itemQuantity, itemPrice) {
//   let total = itemQuantity * itemPrice;

//   return total;
// }

// const totalPrice = calculateTotalPrice(2, 15);
// console.log(totalPrice);

// calculate total price of multiple items

// const numberOfItems = 2;
// let totalBill = 0;

// function calculateItemCost(quantity, price) {
//   return quantity * price;
// }

// for (let i = 1; i <= numberOfItems; i++) {
//   const q = +prompt(`Enter quantity of item ${i}: `);
//   const p = +prompt(`Enter price of item ${i}: `);

//   totalBill = totalBill + calculateItemCost(q, p);
// }

// console.log(totalBill);

// 2-330

const numberOfItems = +prompt("Kitni cheeze kharidi bhai?");
let totalBill = 0;

function calculateItemTotalAmount(quantity, price) {
  const total = quantity * price;
  return total;
}

for (let i = 1; i <= numberOfItems; i++) {
  const q = +prompt(`Enter quantity of item ${i}`);
  const p = +prompt(`Enter price of item ${i}`);

  totalBill = totalBill + calculateItemTotalAmount(q, p);
}

console.log({ totalBill });
