const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =myNumbers.map( (num) => num + 10 )
// const newNums =myNumbers.map( (num) => {return num + 10} )

//Chaining
const newNums = myNumbers
                       .map((num) => num * 10 ) // 10,20...100
                       .map( (num) => num + 1)  // 11,21...101
                       .filter( (num) => num >= 40)
console.log(newNums);
