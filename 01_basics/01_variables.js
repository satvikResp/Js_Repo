
const account_id=14232
let account_email="satvik5@gamil.com"
var account_password="12345" // prefer not to use var because of issues in block and fucntional scope
account_City="Jaipur"
// |-> bina type declare kiye reserve kr rhe hai space variable 
// |->prefer not to use it too


/*
const -> value cant be changed
let -> allows values to be changed
var ->some are allowed 
*/

//CONST ->

// account_id=2    // not allowed

account_email="sgsg@55.com"
account_password="99999"
account_City="Mumbai"


//table ki form pe print krne ke liye
console.table([account_email,account_id,account_password])

/*  var is an old way of variable declaration
var is not used now because of :- 1> its confusing scope behaviour
example:  ------if ke andar banaya hua x bahar bhi accessible hai.-------
-----------------------
if (true) {
    var x = 10;
}
console.log(x);
-----------------------
Output: 10

2> var ko same naam se dobara declare kar sakte ho
-------------------------
var age = 20;
var age = 25;
console.log(age);
-------------------------
Output: 25

Ye accidental bugs create kar sakta hai.

*/

let account_State
console.log(account_State)   // -->returns undefined (matlab value define nhi hui hai abhi)

                             
