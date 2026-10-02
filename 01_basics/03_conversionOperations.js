let score="33"
console.log(typeof score);  // -->string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); //-->number

//------------------------------------

let score1="33aaa"
console.log(typeof score);  // -->string

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1); //-->number
console.log(valueInNumber1); //-->NaN (not a number) **************************************


//--------------------------------


let score3=null
console.log(typeof score3);  //->object
let valueInNumber3=Number(score3)
console.log(valueInNumber3); //     -----------> 0
console.log(typeof valueInNumber3); //-->number


//------------------------

let score4=undefined
console.log(typeof score4);  //->undefined
let valueInNumber4=Number(score4)
console.log(valueInNumber4); //     -----------> NaN
console.log(typeof valueInNumber4); //-->number


/*
"33" =>33
"33abc" => NaN               but its type is number
true=1
false=1
"satvik"=>NaN
*/


//-----------------------------boolean------------------------
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //-->true


let isLoggedIn1=""
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1) //-->false


let isLoggedIn2="satvik"
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2) //-->true


/*
1 => true 
0 => false

""=>false
"anything"=>true
*/

//number to string ho jata hai convert!!!!!
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//  ******************************operations************************

let value=3
let negValue=-value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);             //2 rasie to power 3 
// console.log(2/2);
// console.log(2%2);
 

let str1="hello"
let str2=" satvik"
let str3=str1+str2;
console.log(str3)

console.log("1" + 2)  //-->12
console.log(1 + "2"); //-->12
//**********************************
console.log("1" +2 +2); //->122    because 1(String) +2 (number) = 12(string) ---- 12(string)+2(number)=122(string)
console.log(1+2+"2"); //->32       because 1(number) +2(number) =3 (number) ------- 3(number) +2(string) =32(string)



console.log(true)  //->true
console.log(+true)  //->1     because true is boolean and its type is being convertied as we are incrementing it so we get 1
//console.log(true+) //error


console.log(+""); //0 because + yhan pe unary plus hai (sirf ek operand), to ye plus right side ki value ko number me convert krta hai and as "" converted to number is 0 ....we get 0

//-----------------------------postifx and prefix increment------------------
/*
postfix
let x = 3;
const y = x++;
// x is 4; y is 3


prefix
let x = 3;
const y = ++x;
// x is 4; y is 4


*/


