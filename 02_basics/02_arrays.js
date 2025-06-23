const marvel_heroes = ["thor","Ironman", "spiderman"]
const dc_heroes = ["superman", "peacemaker", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); //peacemaker

// const allHeros = marvel_heroes.concat(dc_heroes) //concat gives us a new array
// console.log(allHeros);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread -> kaanch ka glass

// console.log(all_new_heroes); //mostly use spread instead of concat

const another_array = [1, 2, 3, [ 4, 5, 6], 7,[ 6, 7, [ 4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag"))
console.log(Array.from({name: "Anurag"})) //interesting case for interviews ->o/p: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
