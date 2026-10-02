//this ->current context  {this ek reference/context hai jo situation ke according different cheez ko refer kar sakta hai.}
const user = {
    username: "satvik",
    money: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //->satvik welcome to website
        console.log(this); //-> sare key values print krdega
        /*{
            username: 'satvik',
            money: 999,
            welcomeMessage: [Function: welcomeMessage]
        } */
    }

}
//user.WelcomeMessage()
user["welcomeMessage"]()  //call lagyai function ko ...ye andr wali chijein print krega


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//node enivronment me ya phir global ke andr current context empty hota hai // browser me window object return krega
console.log(this) //->{} 


function chai(){ 
    //  console.log(this); // yhan current context ne nodejs ka global object return kiya 
    //because function ke andar this global ko refer kar raha hai whereas function ke bahar this current module ko refer karta hai.
    let username="satvik"
    console.log(this.username); //-> undefined     because yahan pe this abhi bhi global ko refer krrha hai but usme username naam ki koi property nhi thi 
}
chai()

// --------------- Arrow function ka apna this nahi hota. -----------------------------------

const newchai =()=>{
    let username="satvik"
    console.log(this); //--> {}
}
newchai() 

/* 
Normal function: → apna this context ke according leta hai.


Lekin arrow function: apna this nahi banata.
                      Bahar wale this ko use karta hai. 

Aur humari Node.js file mein bahar:

console.log(this);

→ {}

Isliye arrow function ke andar bhi:     arrow function
                                            ↓
                                        apna this nahi
                                            ↓
                                        bahar ka this
                                            ↓
                                           {}                   
*/

//Normal function → apna this ho sakta hai
//Arrow function → apna this nahi hota, outer this use karta hai.



//Arrow function
//syntax   () => {}
const addtwo=(num1 ,num2)=>{
      return num1+num2
}
console.log(addtwo(1,2)) //3 

//implicit return 
// syntax : ()=>() 
// return likhni ki zrurat nhi hoti isme
const addthree=(num1,num2,num3) =>(num1+num2+num3)
console.log(addthree(3,4,5))//->12

//********* object ko return krne ke liye () use krna hi pdega implicit me bhi*********

