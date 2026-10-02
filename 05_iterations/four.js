const coding=['js','ruby','java','python','cpp']
//For Each does NOT return a value
const returnValue=coding.forEach(function(item){
    return item
})

console.log(returnValue)//->undefined

//more methods

//Filter operation -> ye return kr skta hai values

// 
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4) or const newNums=myNums.filter((num)=>(num>4))

const newNums=myNums.filter(function(num){
    return num>4
})

// agar  { } scope use krte hia to return keyword use krna padta hai otherwise implicit return ho jata hai () ye use krke ya nhi bhi krke
console.log(newNums); //->[ 5, 6, 7, 8, 9, 10 ]

//doing the same check using for each loop

// const newarr=myNums.forEach(function(num){
//     if(num>4){
//         return num
//     }
     
// })
// console.log(newarr)  //->undfined

//filter on books

//q return book where genre is history
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks =books.filter((num)=>num.genre==='History')
console.log(userBooks)

// published after 2000

 userBooks=books.filter((num)=>num.publish>=2000)
 console.log(userBooks)