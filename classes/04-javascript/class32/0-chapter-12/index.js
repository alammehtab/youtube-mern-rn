// CHAPTER-12 IF ELSE STATEMENT

// PROGRAM: BARISH: HUM NE CHAPTER10 ME YE KIA
// badal ha to barish, nahi to nahi
// var badal = true;

// agr badal ho
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// }

// agar badal na ho
// if (!badal) {
//   alert("No chance of rain in Peshawar!");
// }

// USING IF-ELSE
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// } else {
//   alert("No chance of rain in Peshawar!");
// }

// PRACTICE PROGRAMS

// 1 BARISH
// var badalHain = prompt("Badal hain k nahi?")
// if (badalHain === "hain") {
//     console.log("Barish hogi")
// }

// if (badalHain === "nahi") {
//     console.log("Barish nahi hogi")
// }


//2 BRT CARD BALANCE

// var brtCardBalance = +prompt("Enter your card balance please")
// if(brtCardBalance >= 50){
//     alert(`RAZA CHI ZU`)
// }

// if(brtCardBalance < 50){
//     alert(`TAKHTA TASHPARIA?`)
// }

// 3.BURGER LENA HAI
//  var burgerPrice = 500;
//  var jebMePaise = +prompt("ketne paise haiN jeb me?")

//  if (jebMePaise >= burgerPrice) {
//     console.log (`Le lo Burger Bhai`)
//  }
//  else{
//     console.log("chal nikal")
//  }

// 4: ODD/EVEN

// var number = +prompt("Enter a number")

// if (number % 2 === 0) {
//     console.log("The number is Even")
// }
// else{
//     console.log("The number is Odd")
// }



// 5.TOTAL BILL

// var mangoPrice = +prompt("Enter price of mango")
// var bananaPrice = +prompt("Enter the price of banana")

// var totalBill = mangoPrice + bananaPrice;
// console.log(`Total Bill is: ${totalBill}`)


// 6. TRAFFIC LIGHTS SYSTEM

// var trafficLightColor = prompt("Enter the color")

// if(trafficLightColor === "red"){
//     alert("STOP!")
// }
// else if(trafficLightColor === "yellow){
//     alert("Get ready!")
// }
// else if(trafficLightColor === "Green"){
//     alert("Go now!")
// }
// else{
//     alert("Invalid data")
// }

// 7. DISCOUNT

// var noOfItems = +prompt("Kitni chize li ap ne?")
// var discount;

// if(noOfItems >= 10){
//     discount = 20
// }else if(noOfItems >= 5 ) {
//    discount = 10
// }else if(noOfItems < 5){
//     discount = 0
// }

// console.log(`YOU GOT ${discount}% DISCOUNT`)


// 8. ATM
// var bankBalance = 10000;
// var amountToWithdraw = +prompt("KENTNE PAISE NIKALNE HAIN?")

// if (bankBalance >= amountToWithdraw){
//     console.log(`LELO APNE PAISE`)
// }else{
//     console.log(`Account me itne paise nahi hain.`)
// }
