const marvelHeroes=["IronMan","SpiderMan","Hulk"]
const dcHeroes=["SuperMan","Flash","BatMan"]


marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); //-->[ 'IronMan', 'SpiderMan', 'Hulk', [ 'SuperMan', 'Flash', 'BatMan' ] ]
// Push stores the array inside it instead of elements and to access it we have to use console.log(marvelHeroes[3][1])
marvelHeroes.pop()

// Dono ke elements ek hi array me store krne ke liye = we use concat method

// **** concat method jo hai ek nayi array return krta hai 
const allHeroes=marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // -->[ 'IronMan', 'SpiderMan', 'Hulk', 'SuperMan', 'Flash', 'BatMan' ]

//------------------------------------------------------------------------------------------------------

/*          other way to do this -->spread operator  ****
            Despite push and concat we should use spread operator.
*/
const allNewHeroes=[...marvelHeroes,...dcHeroes]
console.log(allNewHeroes); // -->[ 'IronMan', 'SpiderMan', 'Hulk', 'SuperMan', 'Flash', 'BatMan' ]

//------------------------------------------------------------------------------------------------------

//ek array ke andar array aur us array ke andr bhi array
const anotherArray=[1,2,3,[4,5,6],7,[8,[9,10]]]

//ab isko kese handle karein ====>flat function ka use krke

//flat function ==>returns a new array ,jisme sare sub array ke elements ko vo ek hi array me dalke deta hai...
//iski hum ek depth set kr skte hain mtlb kitni array ki andar ki arrays ko vo ek single me convert krega
//agar infinity likhenge depth me to sari hi ho jayegi uske andr ki ek single me
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray)  
/* output
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

//------------------------------------------------------------------------------------------------------
// **** Array.from

//********  jab bhi data scraping krrhe hai alag alag website se to alag data format me aata hai jese nodelist ya object ya string
//isko convert kese krenge array me ==>Array.from(data) ka use krke

 //---------------------------------------------
    // **** Array.is
    //iska kaam hai check karna ki koi value array hai ya nhi 
    console.log(Array.isArray("Satvik")) //->false ye ek array nhi hai
//----------------------------------------------

console.log(Array.from("Satvik")); //=>[ 'S', 'a', 't', 'v', 'i', 'k' ]

console.log(Array.from({name :"Satvik"})) // -->[] empty array
// isko convert nhi kr paraha hai ye array me...kyunki ye iterable nhi hai ...
// agar normal object ki array banani hai to object ke method use krne pdenge
// for example :- Object.keys(), Object.values(), ya Object.entries() use karte hain.

//------------------------------------------------------------------------------------------------------

// **** Array.of
//iska ka kaam given values ko ek naya array banana hai.
let score1=100
let score2=200
let score3=300


console.log(Array.of(score1,score2,score3)); //->[ 100, 200, 300 ]

//------------------------------------------------------------------------------------------------------
console.log(Array.of(marvelHeroes,dcHeroes));

/*[
  [ 'IronMan', 'SpiderMan', 'Hulk' ],
  [ 'SuperMan', 'Flash', 'BatMan' ]
] */