
let a = 300

if (true) {
  let a = 20;
  const b = 30;
  
  console.log("INNER:",a);
  
}

console.log(a);
// console.log(b);
// console.log(c); //only c will get printed..thats why we dont use var

