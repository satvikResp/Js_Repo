//string ko single / double paranthesis donno me hi declare karskte hai js me
const name="satvik"
const anyNumber=92
/*
console.log(name+anyNumber+"value");
ye outdated hai ......prefer not to use this
*/


//use this instead -->string interpolation

console.log(`Hello my name is ${name} and my random Number is ${anyNumber}`);
//we can use function here to like ${name.toUpperCase()} 

// other way to declare string
const gameName=new String("satvikg") //this store chars in key value pair like this 0 :"s" 1: "a"....so on and we get many methods  like endswith ,concat..... 
console.log(gameName[0]) // s 

/* **** Prototype : Har object ka ek prototype object hota hai, aur us prototype mein kuch properties/methods ho sakte hain.
    __proto__ =>Us prototype ko access karne ka ek way hai
    __proto__.toUpperCase() ==>ase hum method bhi use kr skte hai 
    without using proto hum method ko direct access kr skte hai
*/


/*string methods :


# charAt(index) 
# indexOf('char')
# substring(starting_index,number_of_char_to_take) ----- yahn pe suppose substring(0,4) kiya hamne satvik ke liye to hume sirf satv hi milega ...4-1 tk hi milega
# slice -->same kaam hai substring ki trh but ye negative index pe bhi kaam krta hai 
example-
*/
const str = "JavaScript";

console.log(str.slice(-6));       // "Script"
/*
negative index me ye peeche se count krta hai 
Wherease agar substring me -ve likha eg: substring(-8,4) ---=> to ye simply 0 se shuru kr dega
*/


//# trim ---> str.trim()   => ye extra spaces remove krdeta hai side se 

const stringfortrim="   spacespacespace    "
console.log(stringfortrim);//    spacespacespace    
console.log(stringfortrim.trim());//spacespacespace


// #Replace  
const toReplaceString="satvik5555"
console.log(toReplaceString.replace('5555','gautam')) //->satvikgautam

//# includes   ->returns true or false if present or not
let checkstr="myjavascript"
console.log(checkstr.includes("java"))//->true

//split string ko array me divide krdega based on a specifc word 
let toSplitstring="satvik-gautam-21"
console.log(toSplitstring.split('-')) //-> [ 'satvik', 'gautam', '21' ]
console.log(toSplitstring.split('-',1)) // ye limit hai sirf 1 hi word ko array banayega ==>[ 'satvik' ]