//object

//js me har ek chij object hi hoti hai 
//array bhi ,string bhi ...object hi hai
//->this is called prototypal inheritence
//=> so array , string ,function etc ->inka prototype jo hai vo object hai ya refernce object ko hi krte hai and object ka protoype -> null hai

function multipleBy5(num){
    return num*5
}
//function ko call to multipleBy5(10) ase kr skte hain

multipleBy5.power = 2 //pr agar kuch ase likhenge to yhan to . use hua and .(dot) to object ke liye use hota hai 

console.log(multipleBy5(5)); //->25
console.log(multipleBy5.power); //->2   ==> ye 2 khan se aaya ..ye jo uper store kiya tha bahi vo hai ye ==> ye imply krti hai ki function bhi object hi hai 
//-> so in conclusion har chij  ko hum object ki tarah bhi behave krva skte hai {apni to functionality usme rhegi hi but object ki bhi aajayegi}
console.log(multipleBy5.prototype);//->{}  --> by default js me kuch context set hote hai and unme se prototype ka context is user method ka this hai


//-------------------------------------------
//this keyword -> current context deta hai 
function createUser(username, score){
    this.username = username
    this.score = score
}

//prototype me method khud bhi bana skte hai 

    //kuch ase : 
createUser.prototype.increment = function(){
    this.score++  //this context dera hai ...ki jisne bhi call kiya hai usko badha 
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
// ab jesee normal prototype ke method ko likhte time ye access krte time hume jarurat nhi hoti hai na prototype likhne ki 
// vese hi abhi bhi bina like access krenge hum in method ko bina kisi dikkt ke
chai.printMe() //->price is 25


