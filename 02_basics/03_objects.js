/*Objects banane ke common tareeke:
1) Object Literal
2) Object.create()

Singleton:
→ ek design pattern
→ ensure karta hai ki sirf ek instance/object ho

                        const user = Object.create(null);
                        user.name = "Satvik";
                        user.age = 22;

Object.create() ≠ automatically Singleton
*/
//object literals -----isse singleton nhi mutiple instances ban jate hai

const jsUser={
    name:"Satvik", // it stores in key : value  pair
    //ye jo key me 'name' hai ye ek string hai but hame ye '' inke andr likhne ki zrurat nhi ... khud hi smjh jata hai js ki ye string hai
    "fullName":"satvik gautam", //isko jsUser.fullname se access hi nhi kr skte dusre method hi use krna pdega
    age:21,
    location:"Hamirpur",
    email:"satvik5@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// objects ko access kese krna hai :
console.log(jsUser.name) //->Satvik
console.log(jsUser["name"]) // ->Satvik

// ***** symbol ko object me kese declare and print karein ****** interview question....aur  ase poochenge ek symbol lo ,usko object ki key me add kro and print krke dikhao 

const mySym=Symbol("key1")

// ase nhi kr skte ----------------------------
const jsUser1={
    name:"Satvik",
    age:25,
    mySym:"mykey1"       
}
console.log(jsUser1['mySym']) // iski ouput to mykey1 hi hai butttttt ye symbol ki tarah yahan use nhi hora ,
console.log( typeof jsUser1['mySym']) // ->string

// ==> mtlb ye symbol ki trh use hi nhi horha hai .....

//to kese karein : [mySym]:"mykey1" --------------square brackets me declare krna pdega

//----------------------------------------------------------------------------------
//values objects ke keys ki kese change krein 

jsUser1.name="SatvikGautam"

//values change nhi ho kbhi bhi uske liye hum freeze use krte hai 

Object.freeze(jsUser1)
//ab agar change krenge to nhi hoga
jsUser1.name="Satvik"

console.log(jsUser1); // { name: 'SatvikGautam', age: 25, mySym: 'mykey1' }
//satvikgautam ka satvik nhi bana


