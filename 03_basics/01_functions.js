function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G");    
}

// sayMyName() // -> sayMyName ->Reference...sayMyName() -> execute

function addTwoNumbers (numbers1, numbers2) {
   console.log(numbers1 + numbers2);   
}

// addTwoNumbers() // -> NaN
// addTwoNumbers(3,4)  // -> 7
// addTwoNumbers(3, "4")  // -> 34
// addTwoNumbers(3, "a")  // -> 3a
// addTwoNumbers(3, null)  // -> 3
// const result = addTwoNumbers(3, 5)  
// console.log("Result: ", result); 
//o/p:   8
//       Result: undefined

function addTwoNumbers2 (numbers1, numbers2) {
//    let result2 = numbers1 + numbers2
//    return result2   

return numbers1 + numbers2
}

// const result2 = addTwoNumbers2(3, 5)  
// console.log("Result: ", result2);

function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return        
    }
   return `${username} just logged in`
}

// console.log(loginUserMessage("anurag"))
// console.log(loginUserMessage()) //will show undefined

function calculatorCartPrice (val1, val2, ...num1){
   return num1
}
// console.log(calculatorCartPrice(200, 300, 400,500))

const user = {
    username: "anurag",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);    
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 199
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] //getArray is generic
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue( [100,300,500,1000] )); //300

