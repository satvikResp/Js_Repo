//Immediately Invoked function Expressions (IIFE)
//ase function use hote hai ase cases me: ie:jese hi application start ho database se connection start ho jaye

/* All in All
IIFE ka use hai :
    Function banaya
    Immediately chala diya
    Uske variables function ke scope mein rahe
    Function ka kaam khatam → scope bhi practically inaccessible
 */
/* 
example:

(function () {
    var username = "Satvik";
    var age = 22;

    console.log(username);
})();

Ab:

Global Scope
│
└── kuch bhi add nahi hua

IIFE Scope
├── username
└── age

Bahar:

console.log(username);

❌ nahi milega.
****** dekhle var tak nhi milra bahr to let const to khan hi milega ********
*/

//how to write IIFE     ()()   ...... isme jo second () hai ye immediate execution karvate hai arrow function ki tarah ..vese hi IIFE ki bhi krvate hai 
(function chai(){
    console.log(`DB Connected`)
})();  // ye ; semi colon lagana jruri hai -->ye statement ko clearly end karta hai
// ASI (Automatic Semicolon Insertion) ki wajah se JavaScript kabhi-kabhi dono ko expected way mein separate nahi karta hai to safe side rehne ke liye

// so agar do IIFE ek sath likehnege to error aa skta hai.....so semi colon lgana chaiye


//IIFE arrow function se bhi bn skta hai
(()=>{
    console.log("arrow function DB connected ")
})();

// how to pass argument in arrow function IIFE

((name) => {
    console.log(`arrow function DB connected for ${name}`);
})('satvik');