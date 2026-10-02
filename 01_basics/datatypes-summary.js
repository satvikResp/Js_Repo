/*JavaScript is a dynamically types language 
 This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
 You can assign different types of values to a variable during its lifetime.
 
 example:

 let x = 10; // x is now a number
 x = "Hello"; // x is now a string


*/


/*
Types of DataTypes -- Primitive 
                      Non Primitive                
*/


// Primitive  -- 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


//Non-Primitive also called Reference type -- 3 types : Arrays, Objects, Functions



//symbnol use   
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); //-->false


//bigInt use
const bigNumber = 345452452355553222n

//arrays  ,objects,functions
const heroes=["IronMan","Hulk","SpiderMan"];

let myObj={
    name:"Peter",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}


//when we use typeof Operator to fund the datatype we get 
/*
    Type of Val                    Result
    Undefined                      undefined
**** Null                          object  *****  
    Boolean                        boolean
    Number                         Number
    String                         String
    Arrays                         Object
    Funciton                       Function
    Object                         Object 
*/

/*
lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory
*/




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* datatypes are based on memory allocation
 Two types of memory :Stack  (Primitive) ,Heap (Non Primitive)
 -->   Whenever stack memory use hoti hai ,to jo bhi variable define kiya hia uski copy hume milti hai 
 -->   Whereas in heap meomory we get the reference of the variable,(changes made will affect the original value)
*/ 