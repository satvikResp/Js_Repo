//call 
//- > call() function ke saath use hota hai — jab hume kisi function ko call karte waqt uska this khud set karna ho.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

// function createUser(username, email, password){
//     SetUsername(username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); //-> called createUser { email: 'chai@fb.com', password: '123' }  username to de hi nhi ra ...
//kya pata usne call kiya hai ya nhi //// called likha ara hai iska mtlb call to kiya hi hai 

function createUser(username, email, password) {
    SetUsername.call(this, username);   // ********************************

    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai) //->called
                  //createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

/*

SetUsername(username) jab likha tha bss ..to ye function apna this use krrha hai and usko set krrha hai value and jab func khatm ho jate hai to vo to uske username hai main jo tha vo to nhi hua set

→ function call ho raha hai ✅
→ but this same object nahi hai ❌

SetUsername.call(this, username) //->createuser ne apna this bhejdiya ki ye wala this use krke set kr

→ function call bhi hoga ✅
→ aur SetUsername ke andar this ko current createUser wale object par set kar dega ✅
 */