// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345677777777777777777777n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
   console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive->String,boolean,number etc.), Heap (Non-Primitive->Arrays,Objects,Functions)

let myYoutubeName = "anuragcanCode"
let anotherName = myYoutubeName
anotherName = "roshancanCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anu@google.com"

console.log(userOne.email);
console.log(userTwo.email);



