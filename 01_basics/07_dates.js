//Dates

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//Interview Question
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025, 0, 25) //months start from 0 in Jscript ..0->Jan
// console.log(myCreatedDate.toDateString()); //try .to extras also

let myCreatedDate = new Date("06-22-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //in milliseconds
// console.log(myCreatedDate.getTime());

//Interview Question -> time in seconds
console.log(Math.floor(Date.now()/1000)); //to avoid decimals

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay()); //Sunday -> 0 .. Saturday -> 6

//` ${newDate.getDay()} and the time `

newDate.toLocaleString('default', { //Object define
    weekday: "long"
    // timezone: 
})




  

