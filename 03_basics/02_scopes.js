
let a = 300

if (true) {
  let a = 20;
  const b = 30;  
  // console.log("INNER:",a);
  
}

// console.log(a);
// console.log(b);
// console.log(c); //only c will get printed..thats why we dont use var

function one(){
    const username = "anurag"

    function two(){
         const website = "youtube"
         console.log(username);         
    }
    // console.log(website);

    // two()
    
}

// one()





//++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++

// addone(5)
function addone(num){
  return num + 1
}


addTwo(5)
const addTwo = function(num){
   return num + 2
}

