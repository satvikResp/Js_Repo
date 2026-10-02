//prototype

let myName="satvik     "
console.log(myName.length) //-> ye dega 11

//ab mujhe ek ase method banana hai jisse ye extra spaces caculate na ho aur exact word ki length aaye
//ovbiously inbuilt trim ka use kr skte hai hum 
//but khud banayenge prototype se kese:

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength() //call krrhe hitesh ke liye
"iceTea".trueLength() // icetea ke liye
 

//agar hume ek naya function banana hai na jo har object access krpaye vo kese krenge
// => to hum constructor ke prototype me method add karte hain.
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//is heroPower me kya koi ase method availiable hai : heroPower.satvik()
//isko kese add kr skte hai
Object.prototype.Satvik=function(){
    console.log("satvik is present in heropower")
}

heroPower.Satvik(); //->satvik is present in heropower
//working:
//aur iski working ase hai ki use kisi ek specific object me jab vo function nhi mila tb vo prototype check krega and use krega

// and jese ki array bhi objec thi hota hai 
//to hum is method ko array ke liye bhi use kr skte hai

myHeros.Satvik(); //->satvik is present in heropower

// ********* agar sirf array me hi denge ek method to vo object ko nhi accessible hoga ********

// inheritance

    const User = {
        name: "chai",
        email: "chai@google.com"
    }

    const Teacher = {
        makeVideo: true
    }

    const TeachingSupport = {
        isAvailable: false
    }

    const TASupport = {
        makeAssignment: 'JS assignment',
        fullTime: true,
        __proto__: TeachingSupport
    }

    Teacher.__proto__ = User  //ye hai inheritence

//ye old approach hai 

    //modern approach
    Object.setPrototypeOf(TeachingSupport, Teacher)


