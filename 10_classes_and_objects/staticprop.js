class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);        
    }

    static createId(){
        return `123`
    }
}

const anurag = new User("anurag")
// console.log(anurag.createId())

class Teacher extends User{
    constructor(username, email){
          super(username)
          this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone);
console.log(iphone.createId());

