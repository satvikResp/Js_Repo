//var me scope ki dikkt hai 
var a=100;
if (true){
   
    var a=99;
}
console.log(a)//->99

//let ache se handle krta hai scope 
let b=200; //global scope
if(true){ //block scope
    let b=199;
    console.log(b); //->199   
}
console.log(b);//->200

//nested scope -->child function can access parent ke variables

function one(){
    const username="satvik"
    function two(){
        const website="leetcode"
        console.log(username)
    }
//    console.log(website) website andr hai ase acces nhi kr skte 
    two() // ye execute hoga and username print kiya
}
one() //-->satvik
 

// ++++++++++++++++++++++++++ interesting +++++++++++++++++

//normal func
function addone(num){
    return num+1
}
console.log(addone(5)) //->6

const addtwo=function(num){ //its called an Expression ...... variable ne function hold kiya hai 
    return num+2
}
console.log(addtwo(5)) //->7


//********** 
//normal function ko banane se phle call kr skte hai =====>hoisting ki vjah se
console.log(addthree(5))//->8

function addthree(num){
    return num+3
}

//but Expression ko nhi kr skte ase -->error dega.....