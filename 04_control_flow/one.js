const isLoggedIn = true
const temperature = 41

if(temperature === 41){

}
else {

}

// if( 2 == "2"){
//     console.log("executed");     // executed
// }
// if( 2 === "2"){
//     console.log("executed");    // blank
// }


// <, >, <=, >=, ==, !=, ===

// const score = 200

// if ( score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);    
// }

// console.log(`User power,${power}`);   //can't access power -> local scope

//basic if else examples

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy the course");    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");    
}