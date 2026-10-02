// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);



//******* comparison btw diff data types  ==> is unpredictable *******

console.log("2" > 1);   //->true
console.log("02" > 1);  //->true
//automaticaly convert ho gye "2" number me

//-----------------is tarah ke ocmparison ko avoid hi krna chaiye--------------------------------


console.log(null > 0);  //->false
/* 
Comparison (>) converts null to a number before comparing.

null is converted to 0.

0 > 0 is false.
*/
console.log(null ==0);  //false
/*
The equality check (==) does not convert null to a number.

null is only equal to undefined in loose equality (==), not to numbers.

So, null == 0 is false.
*/

console.log(null >=0);  //true
/*
The >= comparison also converts null to a number (0).

It becomes 0 >= 0, which is true.
*/

//undefined gives false for all these three operations 
console.log(undefined ==0 );//false
console.log(undefined > 0 );//false
console.log(undefined <0 );//false

//--------------------------------------------------------------------


// ****** Remember  equality check == or === work differently from comparison < or >
/*
    comparison ----> null is converted to 0 and the comparison then is done on 0.........
                ie: null>=0     ==>    0>=0     ==>    true

    equality   -----> null ko 0 mein convert nahin krta hai   
    
    
    ****************************
    null == undefined   // true
    null == 0           // false
    *****************************
*/

// === is called strct check

console.log("2"==2); //gives true
console.log("2"=== 2);//gives false kyunki ye datatype bhi check krta hai

