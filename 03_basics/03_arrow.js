const user = {
    username: "anurag",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // but in browser it will show Window [5:37:42]

// function chai() {
//     let username = "anurag"
//     console.log(this.username); //o/p -> undefined, for functions,we aint able to use this..for object we are able to use it    
// }

const chai = () => {
    let username = "anurag"
    // console.log(this.username); //undefined    
    console.log(this);     // {}
}

// chai()


// const addTwo = (num1, num2) => {
// return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //Implicit return
// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ({username: "anurag"})


console.log(addTwo(3,4));

// const myArray = [2,4,5,7,8]

// myArray.forEach()
