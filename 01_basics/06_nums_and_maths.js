const score=400
console.log(score)// 400

const balance = new Number(10099)
console.log(balance);// [Number: 100]

console.log(balance.toString().length); //->3


//toFixed() number ko fixed number of decimal places tak format karta hai.yaphir bol skte hia decimal ke baad kitne digits chaiye
let num = 12.34567;
console.log(num.toFixed(2)); //->12.35

//toPrecision() Total kitne significant digits chahiye
let n = 123.4567;
n.toPrecision(4);   // "123.5"

//tolocalestring() local formatting karta hai, jaise commas/currency/date style.
const hundreds = 1000000
console.log(hundreds.toLocaleString()); //10,00,000  
//let hundreds.toLocaleString("en-IN");

// ****************  Maths  **************

console.log(Math); // Object [Math] {}  matlb ye object hia jisme bahot sari PROPERTIES hai
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); // .5 tak pichla digit and 0.6 ke baad se agla digit   //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8)); // 8


//Math Random 

console.log(Math.random()); //hamesha koi bhi random value dega 0 and 1 ke beech me 

//agar ek specific range me chaiye value

console.log(Math.random()*10 ) //ab values 0 se 10 ke beech milegi but 0 abhhi bhi aaskti hai agar 0.04*10 kiya to phir bhi 0 hi aya 
//------------------------------
//so to get between 1 to 10
console.log((Math.random()*10) + 1); //ab chahe 0 hi aaye usme 1 add hone ke baad, 0 nhi mil skti kbhi 
console.log(Math.floor(Math.random()*10) + 1); //to get non decimal values
//-------------------------------

//ek specific range ke beech me chaiye to ase kro
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)