class User {
    constructor(email, password){
       this.email = email,
       this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
    //    this._password = value.toUpperCase()
       this._password = value
    }
}

const anurag = new User("anu@google.com" , "abc")
// console.log(anurag.password);
console.log(anurag.email);
