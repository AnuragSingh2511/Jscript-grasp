// const tinderUser = new Object() -> singleton object
const tinderUser = {} //empty object declare -> non singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Shreya"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "",
    fullname: {
        userfullname: {
            firstname: "anurag",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1 , obj2 } // same problem like arrays
// const obj3 = Object.assign({}, obj1, obj2,obj4) // {} recommended -> because source gets stored in this empty parameter target

const obj3 = {...obj1, ...obj2, ...obj4} //use spread..90% we'll use this syntax
// console.log(obj3);

//Values coming from the database

const users = [ // -> Array of objects
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); //true..


