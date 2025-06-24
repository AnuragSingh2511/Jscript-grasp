// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);    
}

const greetings  = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);    
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);

// for (const key of map) {
//     console.log(key);    
// }  // We can't use for-in loop in map
for (const [key, value] of map) {
    console.log(key, ':-', value);    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) { //myObject is not iterable
   console.log(key, ':-', value);
      
}