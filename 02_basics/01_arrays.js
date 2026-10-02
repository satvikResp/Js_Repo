//array ->collection of multiple items in a single variable
//resizeable ,can contain mix of different datatypes , 0 based indexing
//Shallow copy mein outer level ka reference alag hota hai, lekin nested object/array ka reference same hota hai.
/*

Array ki ... ya slice() se bani copy shallow copy hoti hai → outer array alag, but nested arrays/objects ke references same.

arr2 = arr1
→ copy nahi, same reference
-------------------------------------
arr1 ──→ [1,2,3] ←── arr2

Isliye:

arr2[0] = 100;
console.log(arr1); // [100, 2, 3]
-----------------------------------
arr2 = [...arr1]
→ shallow copy

arr2 = arr1.slice()
→ shallow copy
*/
const myArr=[0,1,2,3,4,5]

// myArr.push(6)
// console.log(myArr); // 0 1 2 3 4 5 6 
// myArr.pop() //remove the last value
// console.log(myArr)


// unshift --> array ke start me insert krta hai 
myArr.unshift(0);
console.log(myArr) // 0 0 1 2 3 4 5 

//unshift sari arrays ki value ko shift krta hai ...to ye timeconsuming hai and computer pe load dalta hai

//shift -->array ka pehla element remove krta hai and baki elements ko peeche shift krta hai ...~timeconsuming and load 
myArr.shift()
console.log(myArr) //--> 0 1 2 3 4 5

/* methods of array
includes(value)  // return true or false
indexof(value)  //jab koi value exist nhi krti to -1 
*/
console.log(myArr.includes(5))  //--> true
console.log(myArr.indexOf(99))  //--> -1


//join  method ==> adds all the elemnts of array into a string
const newArr= myArr.join() 
console.log(typeof newArr) // --->string 


// ******************************slice and splice



console.log("A",myArr); //ye og array hai starting me before slice and splice
//A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3); //*** 3 include nhi krega value 1 and 2 hi sirf 
console.log(myn1); //slice lagaya --> [ 1, 2 ]


console.log("B ", myArr); //ye og array hai 
//B  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3) // **** 1 2 3 teeno include krega
console.log(myn2); // splice lagaya --> [ 1, 2, 3 ]

// ----***----but ye portion 1 2 3 hi nikal gya hai ab og array se

console.log("C", myArr); // C [ 0, 4, 5 ]



/* 
structuredClone → deep copy
let arr2 = structuredClone(arr1);
*/