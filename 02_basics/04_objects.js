
// const tinderUser=new Object() -->constructor se object creation

const tinderUser={} // object literal

tinderUser.id="123abc"
tinderUser.name='sattu'
tinderUser.isLoggedIn=false

console.log(tinderUser); // ->{ id: '123abc', name: 'sattu', isLoggedIn: false }

const regularUser={
    email:"some12@gmail.com",
    fullname:{
        userfullname:{
        firstname:"satvik",
        lastname:"gautam"
        }
       
    }
}

//kese acess karenge
console.log(regularUser.fullname);// → { userfullname: { firstname: 'satvik', lastname: 'gautam' } }
console.log(regularUser.fullname.userfullname);  // → { firstname: 'satvik', lastname: 'gautam' }
//-------optional chaining   '?'    -------
console.log(regularUser.fullname?.userfullname); //option chaining .... ye jo ? question mark use hua hai ye agar fullname nhi hoga to handle krega usko 
//error nhi dega uski jagah undefined de dega ...aur agar present hai to normally work krega noraml access krne ki tarah

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//****** object ko merge ya combine krna  ******

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

/*
const obj3={obj1,obj2}
ase vhi array wali dikkat gyo jisme array ke andr array but yhan object ke andr object
console.log(obj3) //-> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

*/

//----------Object.assign-----------

// ObjectAssign ka use krke ek hi object me store kr skte hai 
// syntax : const obj3=Object.assign(target,source)
const obj3=Object.assign(obj1,obj2); //yahan pe obj1 me store hore hai pehle obj2 
console.log(obj3) //->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//********  ase obj1 modify bhi ho jata hai jab usko target banate ho.

console.log(obj1) //->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//so to avoid this ==>// hum ek empty object me bhi dal skte hai ==> object.assign({},obj1,obj2)

const obj4={1:"a",2:"b"}
const obj5={3:"a",4:"b"}

const obj6=Object.assign({},obj4,obj5);// here empty object me dono dal jayenge and khud koi modify nhi honge

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------- but ye bhi use kam hi hota hai iski jgah we use ********** spread operator***********----------------------------------
const obj7={...obj4,...obj5}
console.log(obj7) //->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//-----------------------------------------------------------------------------------------------------------------------

//jab database se values aati hai to array of objects me ayenge

const users=[
{
    id:1,
    email:"abc@gmail.com"
},
{
    id:2,
    email:"bcd@gmail.com"
},
{
    id:3,
    email:"cde@gmail.com"
}
]
//ab agar koi specifc acces krna hai to 
console.log(users[1].email) //->bcd@gmail.com

//--------------------------------------------------------------------------------------------------------------------------------

//agar kisi object ki sari keys ya sari values chaiye

console.log(tinderUser); //->{ id: '123abc', name: 'sattu', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //sari keys ko array me dalke dediye 
//->[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//sari values
//->[ '123abc', 'sattu', false ]
console.log(Object.entries(tinderUser)) //har ek key value ko array me bana degi and array ke andr hi store krke degi
//-> [ [ 'id', '123abc' ], [ 'name', 'sattu' ], [ 'isLoggedIn', false] ]


// hasOwnProperty ==>Check karta hai ki koi property/key directly us object ke andar hai ya nahi.
console.log(tinderUser.hasOwnProperty("name"));//->true


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Destructuring of objects

const course={
   coursename:"javascript",
   price:"999",
   courseInstructor:"Satvik"
}
//ab kbhi bhi in values ko use krna hai 
// ase course.courseInstructor  ..... dot (.) lagake use krna pdta hai
//but agar bhot baar krna hai to clean nhi lgta hai 

// so other way is:   const{keys}:object name
const {courseInstructor}=course  //cousreInstructor ko extract krliya and ab isko bina course.courseInstructor likhe use kr skte hai
console.log(courseInstructor); //->satvik


// ek alag name bhi de skte hai hum is courseInstructor ko
const {courseInstructor:instructor}=course
console.log(instructor);// ->satvik


// ----------------------------------------------------
//API ->returns values in json format
//JSON (JavaScript Object Notation) ek data format hai jo data ko store/transfer karne ke liye use hota hai. APIs mein bahut commonly use hota hai.
// ye object jesa dikhta hai ....but iska naam  nhi hota hai and iski keys strings hoti hai
// {
//     "name":"satvik",
//     "coursename":"javascript",
//     "price":"free";
// }