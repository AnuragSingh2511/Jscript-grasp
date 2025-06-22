const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //->100.00 (Highly used ->ecommerce application)

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); //23.9

const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3)); //124

const otherNumber3 = 1123.8966
// console.log(otherNumber2.toPrecision(3)); //1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000 (US standard)

const hundreds2 = 1000000
// console.log(hundreds2.toLocaleString('en-IN')); //10,00,000 (India standard)

//+++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5 ..if 4.4 -> 4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

// console.log(Math.random()); //Highly Used, used in Rock Paper Scissors 
// console.log((Math.random()*10) + 1); //value can be zero also..thats why 0*10 = 0 ..so we add + 1
// console.log(Math.floor(Math.random()*10) + 1);

//min max condition
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min); //In this way....value will lie between 10 and 20 range




