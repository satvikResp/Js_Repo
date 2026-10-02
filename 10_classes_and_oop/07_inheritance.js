//classes 
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
//super keyword  ->Parent class ke constructor ko call karo aur bracket me ( ) likhi hui  argument bhejo.
class Teacher extends User{
    constructor(username, email, password){
        super(username)  //Yahan super parent class ko refer karta hai, specifically parent ke constructor/methods ko access karne ke liye. 
        // super() parent class ke constructor ko call karta hai.
        // super(username) parent constructor ko username pass karta hai.
        // Parent constructor this.username set karta hai.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);