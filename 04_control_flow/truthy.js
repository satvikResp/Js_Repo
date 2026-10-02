// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values : "0", 'false', " ", [], {}, function(){}

// Array empty hai kese check krein
let userEmail=[]
if(userEmail.length===0){
console.log("Array is empty");
}

//object empty hai kese check krein

const emptyObj={}
if (Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}

// false==0  ->true
// false == '' ->true
// 0== '' ->true

//Nullish Coalescing Operator (??) :null undefined
// meaning : Agar left side ki value null ya undefined hai, tab right side wali value use karo.
let val1;
val1=5 ?? 10
console.log(val1); //->5

val1= null?? 10
console.log(val1); //->10

val1= undefined?? 10
console.log(val1); //->10

val1= null ?? 10 ?? 15
console.log(val1); //->10     //phli not null/undefined value ati hai 

//Ternary Operators
//syntax : condition ? true :false

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("greater than 80");

