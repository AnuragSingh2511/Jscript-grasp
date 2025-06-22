const name = "Anurag"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anurag-hc') // hitesh-hc , anurag


// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4) // prints till index 3 ..
console.log(newString); 

const anotherString = gameName.slice(-8,4) // we can take negative values in this,in substring it ignores the negative value and starts from zero

// Length + (negative index) = (index) -> .slice(1,4) -> (length=9 and -8 -> index=1)
console.log(anotherString); 

const newStringOne = "   anurag   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anurag.com/anurag%25singh"

console.log(url.replace('%25','-'));
console.log(url.includes('raj')); //checks the word is there?

console.log(gameName.split('-'));







