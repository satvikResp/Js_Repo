// FOR OF  loop


const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

//Maps

const mymap=new Map()
mymap.set('IN',"India")
mymap.set("USA","Sunited States of America")
mymap.set('FR',"France")

console.log(mymap); //->sari key - value pair print krdega map ki

//loop on a map
//hame destructure krna padta hai map ko : ase [key,value] likhni padti hai bracket me .    otherwise vo fully print krdeta hai sare key value pair 
for(const [k,v] of mymap){
    console.log(k); // IN , USA < FR 
}
for(const [key,value] of mymap){
    console.log(value); // India united States of America France
}
for(const key of mymap){
    console.log(key); 
    /*[ 'IN', 'India' ]
    [ 'USA', 'Sunited States of America' ]
   [ 'FR', 'France' ] */
}

//object pe loop

const myObject={
    game1:"nfs",
    game2:'spiderman',
    game3:'rdr',
    game4:'gta 5'
}
// *********** nahi hota iterate ye ase for loop se *************
// for(const[key ,value] of myObject){
//     console.log(key,':-',value);  
// } 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  FOR IN LOOP 
// ***************object iterate hote hai for in loop se ****************

for(const key in myObject){
    console.log(key) // -> isse saari keys aajayengi
}

for(const key in myObject){
    console.log(`${key} is ${myObject[key]} `)
}
/* output :
game1 is nfs 
game2 is spiderman 
game3 is rdr 
game4 is gta 5  */


//for in loop used on array

let heroes=["ironman","spiderman","hulk","thor","captain"]
for(const key in heroes ){
    console.log(key)  //-> 0 1 2 3 4
}
//ye index dera hai iske ///ya we can say ++++++ FOR IN LOOP key deta hai ++++++

//agar heroes array ke values chaiye 
for(const key in heroes ){
    console.log(heroes[key])  //-> ironman spiderman hulk thor captain
}


//*** map ke liye for in loop nhi chlega ****
for(const key in mymap){
    console.log(key); // prints nothing
//this doesnt work because map are not iterable
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  FOR EACH loop --> ye ek prototype property hai 
//syntax => array_name.forEach(function (iterator){})   //ye iterator pe har ek value aayegi or we can say parameter me har ek value aayegi
//also is function ka naam nhi dete hai 

heroes=["ironman","spiderman","hulk","thor","captain"]
heroes.forEach(function (hero){
    console.log(hero); //=->//heroes print kredega
    
}) 

//for each in arrow fucntion
    // heroes.forEach((hero)=>{
    //     console.log(hero);
        
    // })

// sirf value hi nhi hum index and puri array bhi print krvaskte hai for in se

heroes.forEach(function(hero,index,array){
    console.log(hero,index,array);
})
/*ironman 0 [ 'ironman', 'spiderman', 'hulk', 'thor', 'captain' ]
 spiderman 1 [ 'ironman', 'spiderman', 'hulk', 'thor', 'captain' ].... */


//+++++++++++++++ array of object iteration ++++++++++++++
const programmingLang=[
    {
        langName:"javascript",
        langFIleName:"js"
    },
    {
        langName:"java",
        langFIleName:"java"
    },
    {
        langName:"python",
        langFIleName:"py"
    }
]
programmingLang.forEach(function(item){
    console.log(item.langName); //-> javascript ,java ,python
})


/*
| Loop        | Kahan use?              | Kya milta hai?             |
| ----------- | ----------------------- | -------------------------- |
| `for...of`  | Array, String, Map, Set | **values**                 |
| `for...in`  | Object, Array           | **keys / indexes**         |
| `forEach()` | Mainly Array ,          | **values + index + array** |
              and array of objects bhi

*/