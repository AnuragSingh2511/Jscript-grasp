class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)        
    }
}

const chai = new Teacher("chai" , "chai@teacher", "123")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masala Chai")

masalaChai.logMe()

// console.log(chai === masalaChai); //false
// console.log(chai === Teacher); //false
// console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
