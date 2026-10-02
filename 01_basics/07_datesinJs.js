//date: js me January 1,1970 se sare dateobject jo hum declare krte hain, calculate hote hain


let myDate=new Date()  //aaj ki date aayegi ase
console.log(myDate); //-> 2026-09-22T13:20:44.743Z ase kuch dega jo read bhi nhi hora 
console.log(typeof myDate) // ->object

console.log(myDate.toString())// -> Tue Sep 22 2026 18:51:27 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())// -> Tue Sep 22 2026
console.log(myDate.toISOString()) // -> 2026-09-22T13:23:21.502Z
console.log(myDate.toJSON())// -> 2026-09-22T13:23:21.502Z
 

//koi specific date 

//if date not in string  then 0->jan
let myCreatedDate=new Date(2026,0,23); //(*** 0 se january milega and 12 agar likhenge to next year aajayega
console.log(myCreatedDate.toLocaleString());// 23/1/2026, 12:00:00 am
 
//if date in string then 1->jan
//in yyyy-mm--dd format or in mm-dd-yyyy
let myCreatedDate1=new Date("2026-01-21"); //isme direct 1->january
console.log(myCreatedDate1.toString()); //Wed Jan 21 2026 05:30:00 GMT+0530 (India Standard Time)


// ************TIMESTAMPS**********

let myTimeStamp=Date.now();    //->Ye ----current time----- ka timestamp deta hai — milliseconds mein.
console.log(myTimeStamp); //1790083918544 -->miliseconds hai ye us starting date se 1 jan 1970 se ....isko convert krna pdega 

/* Timestamp ek bada milliseconds wala number hota hai, jise directly date/day/month ke form mein samajhna mushkil hai. 
Isliye hum us timestamp ko Date object mein convert kar sakte hain, aur phir Date ke methods (getDate(), getMonth(), getDay() etc.) 
use karke values nikal sakte hain. */

// function getTime() bhi timestamp deta hai kisi bhi datobject ka 

console.log(myCreatedDate1.getTime()); //1768953600000
// ab isko second me convert krskte hai 
console.log(Date.now()/1000) //but ye decimal me de skta hia value to hum isko floor function ke sth use kr skte hai
console.log(Math.floor(Date.now()/1000)); // 1790084408 ye seconds me hai

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ milisecond se specific dat ,day,month,year

// agar date object ko bina full convert kiye specif date ,day,year ,hour ....cahiye 
let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear());

console.log(newDate.getMonth()+1) // month 0->january aata hai to +1 se exact mil jayega


//agar customize karna hai 

//toLocaleString use krke hota hia kyunki -> iske andr hum object define krte hai , and bhot sare object define kr skte hai
//                              internationalization
//                                     |
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))
