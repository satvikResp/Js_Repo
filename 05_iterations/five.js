//MAP ->map() ka basic kaam hai: array ke har element par koi operation karo aur usse ek NEW array banao.
const myNum=[1,2,3,4,5,6,7,8,9,10]

//har number ke andr 10 add kro 

const newNum=myNum.map((num)=>num*10)
console.log(newNum) // -->10 20 30 ....100

// map vs filter:
//map() → har element ko transform/change karta hai
//filter() → decide karta hai element rakhna hai ya nahi


//chaining

const newNums=myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(newNums); //--> 41 51 ...101


//REDUCE   reduce() poore array ko process karke ek single value banata hai.

//syntax = arr.reduce(function(accumulator,it){acc+it},intitalvalue)   intitalvalue jo phli baar ad hogi accumumulator me and uske baad kabhi use nhi hogi 
//       = arr.reduce((acc,it)=>acc+it,0)
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval                                   // *** return → next iteration ka accumulator update karta hai aur last returned value = reduce ka final result.
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(priceToPay); //->22996
