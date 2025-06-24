// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);    
// }

(function chai(){
    console.log(`DB connected`);    
})(); //semicolon is needed 

( (name) => {
   console.log(`DB connected 2 ${name}`);   
})('anu')
// chai()