// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
   name: "Anurag",
   "full name": "Roshan",
   [mySym]: "mykey1",
   age: 23,
   location: "Bengaluru",
   email: "anurag@google.com",
   isLoggedIn: false,
   lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // Jsuser.full name will not work in this case
// console.log(JsUser[mySym]) 

JsUser.email = "anurag2511@google.com"
// Object.freeze(JsUser)
JsUser.email = "anurag@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
  console.log("Hello JS User")
}
JsUser.greetingTwo = function() {
  console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



