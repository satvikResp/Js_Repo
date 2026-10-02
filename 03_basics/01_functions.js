//Functions
//syntax ==> function function_name(){
//                        //code
//                                    }

//call the function ==> function_name();

function addTwoNum(number1,number2){ //datatype likhne ki zrurat nhi hai js me function ke parameters me
    console.log(number1+number2);
}

addTwoNum(3,4);//=> 7
addTwoNum(3,"4") //=>34
addTwoNum(3,'a')//=>3a
addTwoNum(3,null)//3


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("satvik"));//->satvik just logged in
//*** 
console.log(loginUserMessage()) //-> undefined just logged in


//default value in parameter
function NewloginUserMessage(username="sattu"){
    return `${username} just logged in`
}
console.log(NewloginUserMessage()) //->sattu loggin in
//but if we pass a value =>sattu overwrite ho jayega
console.log(NewloginUserMessage("satvik")) //->satvik logged in

//------------------------------------------------------------------------------------------------------------
//How to pass multiple values to a function ======Rest operator (...)
// jaba pata nhi ho kitne arguments aane walon ho jese kisi shopping cart me
function calculateCartPrice(num1,num2){
    return num1+num2
}
console.log(calculateCartPrice(400,500))
//ye do ke liye to chal gya but ab agar do se jyada hote to kaise hota

function NewCalculateCartPrice(...num1){ //rest operator --> saari values ko ek array me daldeta hai and then hum us array ko access krke calculate kr skte hai
    return num1
}
console.log(NewCalculateCartPrice(400,500,800,300)) //-> [ 400, 500, 800, 300 ]

/* 
function NewCalculateCartPrice(val1,val2,...num1){ //rest operator --> saari values ko ek array me daldeta hai and then hum us array ko access krke calculate kr skte hai
    return num1
}
console.log(NewCalculateCartPrice(400,500,800,300)) //->[800,300]
isme phli value val1 me and dursi val2 me gyi and baaki sari num1 me
*/


// object ko function me kese pass krte hai ==>


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
const user={
    username:"satvik",
    age:21
}
handleObject(user); //-> username is satvik and age is 21

//direct bnake bhi object pass krskte hai
handleObject({
    username:"sattu",
    age:25
}) //->username is sattu and age is 25


//----------------function with array-----------------------------
const newarray=[200,400,100,600]
function returnSecondValue(array){
    return array[1]
}
console.log(returnSecondValue(newarray)) //->400