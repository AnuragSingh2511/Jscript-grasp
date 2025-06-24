// const userEmail = "anurag@email.com"
// const userEmail = "" // will run else -> Don't have user email
const userEmail = [] // Got user email

if (userEmail) {
    //  console.log("Got user email");     
} else {
    // console.log("Don't have user email");    
}

//falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length == 0){  //to check empty array
//     console.log("Array is empty");    
// }

// if(Object.keys(emptyObj).length === 0){ //to check empty object
//     console.log("Object is empty");    
// }

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20  // 10 (whatever first gets printed after null)

// console.log(val1);

//Ternary Operator

// condition ? true: 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// less than 80 -> condn ? True case : False case


