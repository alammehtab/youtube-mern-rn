// Chapter-26: Rounding Numbers

// module we're gonna talk about
// Math
// console.log(Math.PI);

// methods we're gonna talk about
// round() -> it rounds a number to the nearest integer.
// ceil() -> it rounds a number UP to the nearest integer.
// floor() -> it rounds a number DOWN to the nearest integer.

// var percentage = 73.56;
// console.log(Math.round(percentage));

// ROUND
// var a = Math.round(2.6);
// console.log(a);
// var b = Math.round(2.5);
// console.log(b);
// var c = Math.round(2.49);
// console.log(c);

// Negative numbers , such as -1, -2, -3, etc., are considered "DOWN" values and tend to round down. When rounding negative numbers, the rounding is done downwards, which means negative numbers are rounded down.
// var d = Math.round(-2.6);
// console.log(d);

// POSITIVE NUMBER: point k bad 5 ya 5 se bara ho to round up karega
// NEGATIVE NUMBER: point k bad 5 ya 5 se kam ho to round up karega
// var e = Math.round(-2.5);
// console.log(e);
// var f = Math.round(-2.49);
// console.log(f);

// CEIL (5 ya 5 se bare wali bat nhi h yaha)
// console.log(Math.ceil(1.4));
// var a = Math.ceil(0.6);
// console.log(a);
// var b = Math.ceil(0.4);
// console.log(b);
// var c = Math.ceil(5);
// console.log(c);
// var d = Math.ceil(5.1);
// console.log(d);
// var e = Math.ceil(-5.1);
// console.log(e);
// var f = Math.ceil(-5.9);
// console.log(f);

// FLOOR
// console.log(Math.floor(1.6));
// var a = Math.floor(0.6);
// console.log(a);
// var b = Math.floor(0.4);
// console.log(b);
// var c = Math.floor(5);
// console.log(c);
// var d = Math.floor(5.1);
// console.log(d);
// var e = Math.floor(-5.1);
// console.log(e);
// var f = Math.floor(-5.9);
// console.log(f);