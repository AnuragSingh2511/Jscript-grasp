// let myName = "anurag  "
// let chai = "chai  "

// console.log(myName.truelength);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`anurag is present in all objects`);    
}

Array.prototype.heyHitesh = function(){
    console.log(`Anurag says hello`);    
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()             
// heroPower.heyHitesh()        

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiaurCode   "

String.prototype.truelength = function(){
    console.log(`${this}`);   
    console.log(`True length is: ${this.trim().length}`);    
}

anotherUsername.truelength()
"anurag".truelength()
"iceTea".truelength()