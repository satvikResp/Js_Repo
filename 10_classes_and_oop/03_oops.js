//object literal ke mtlb literally ek object hota hai 

//this keyword : context provide krta hai 
const user={   //this is an object literal
    username:"satvik",   // }-|
    loginCount:8,        // } ye tteno properties hai 
    signedIn:true,       // }-|

    getUserDetails:function(){      //this is a method
        console.log("got user details")
    //    console.log(`username is ${username}`); //->gives an error // ->kyunki yhan pe function ko pta nhi hai konsa username print krna hai ..hume batana pdega ki bahr se varibale le and uske liye this.username likhna pdega
        console.log(`username is ${this.username}`);
        console.log(this)  //current context print krega ..jo bhi memory me rkha gya hai ya object me hai  -->{ username: 'satvik', loginCOunt: 8, signedIn: true, getUserDetails: [Function: getUserDetails]}
    }
}


console.log(user); //sb kuch print krdega  { username: 'satvik', loginCOunt: 8, signedIn: true, getUserDetails: [Function: getUserDetails]}

console.log(user.username);  //->satvik 

console.log(user.getUserDetails()) 
/* output : got user details
            username is satvik
        *** undefined ****
*/

//how to create user2 object 
    //ek tareeka to ye hai ki  pura object phirse bnao value do uske variables ko..
    //har baar repeat krna possible nhi jese ek database me users ki detail dalre hai vese cases me
    //dusra tareeka hai constructor or constructor function kause krna

//--------------------------------------------------------------------

//Constructor Function 
// ye hame allow karta hai ek hi object literal se multiple instance banane me//multiple naye object banane me

//+++++ jab constructor function ke sath hum new use krenge to naya object bnega

//suppose ek function bnaya
function User(username,loginCount,isLoggedIn){ //yhan user ek  function hai jisko hum new ke sath use krenge and isliye ye constructor function bola jayega
    this.username=username;  
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this  //->ye return krke ab koi bhi is same context ko access kr skta hai
    //and ye return this implicitly define hota hi hai likhne ki zruraty nhi 
}

    // const userone=User("sattu",15,true);
    // const usertwo=User("gautam",18,true);
    // console.log(userone)
    // console.log(usertwo)
//ye overwrite bhi ho gya hai 
// to jese ye hai yhan kya hora hai ki is function me this ki vjah se ye global object ko refer krrhe hai and uski properties ki trh treat hue and vhin pe likhe gye hain ...and do baar kya to overwrite bhi hogye

//object create krna hai to new use krna pdega

    const user1 = new User("sattu", 15,true);
    const user2=new User("gautam",11,false)
    console.log(user1) //->User { username: 'sattu', loginCount: 15, isLoggedIn: true }
    console.log(user2) //->User { username: 'gautam', loginCount: 11, isLoggedIn: false }

//4 setp process that occour after using new keywrord
    /*
    1. jese hi new use krenge ek empty object create hota hai
    2. constructor function call hota hai 
    3. jitni bhi arguments hoti hai vo sari this keyword wale variable me aajati hai 
    4. object is ready
     */