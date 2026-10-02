//Promise -> it is an object that represents eventual completion or failure of an asynchonous operation and its value
//Promises have 3 state : Pending , Fulfilled , Rejected
//promises are object in js

//syntax : const promiseOne=new Promise() 

//promise ko hum create and consume kr skte hai
//creation
    //promise apne andr ek callback leta hai 
    const promiseOne=new Promise(function(resolve,reject){ //ye ek function leta hai jiske do part hote hai resolve and reject
        //kya kya async task kr skte hai:
        //db call,crytography,network etc

        setTimeout(function(){
            console.log('Async task is complete');
            resolve() //resolve Promise ko fulfilled state mein le jaata hai,
            //and phir Fulfilled hone par .then() ka callback execute hota hai.
        },1000)
    })

//how to consume a promise
    //promise ka naam likhne ke baad hum use krte hai .then (iska seedha connection hai resolve ke sath)
    // .then and reoslve ka  connection establish krne ke liye resolve() likhna pdega uper promise me
    promiseOne.then(function(){
        console.log("promise consumed");
    })

// o/p -> Async task is complete   //bina .then and resolve ko connect kiye sirf yhi milta
//     ->promise consumed          //connect krne pe dono milenege


//other way to do this

    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Async task 2');
            resolve()
        },1000)
    }).then(function(){
       console.log('Async 2 resolved');  
    })

//network se koi aya data ko kese pass krein

    const promiseThree=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username:"chai",email:"chai@example.com"})
        },1000)
    })

    promiseThree.then(function(userData){
        console.log(userData);
        
    })

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//resolve errors when using Promises in JavaScript
    const promiseFour=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=true;
            if(!error){
                resolve({username:"satvik",password:"1234"})
            }
            else{
                reject('Something went wrong')
            }
        },1000)
    })
    /*
    const username=promiseFour.then(function(user){
        console.log(user);
        return user.username;
    })
     ***username mein direct username nahi aata, ek Promise aata hai, kyunki .then() bhi ek new Promise return karta hai.

       isme promise jese hi resolve hua ye { username: 'chai', email: 'chai@example.com' } print hogya but jab username ko print krne ka try kiya to error agya
       isko avoid kne ke liye hum chaining me catch ka use kr skte hai 
    */

    //corect way

    //chaining
    const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username;
    }).then((username)=>{  // ye wale then ke parameter me uper wale then ki return value aayegi
        console.log(username)
    }).catch(function(error){ //// .catch() se chain me aane wale rejection/error ko handle kar sakte hain.
        console.log(error);
    })
    // output ->something went wrong
    //aur agar error false set hoga to name print ho jayega 

//finally 
    /*
        bahut saare situations honge jab hum finally use karenge
        abhi upar then aur catch use karke
        resolved promise ya error ko handle kar liya

        lekin kabhi hume aisa code chalana hota hai
        jo Promise resolve ho ya reject, dono cases mein execute ho.
        uske liye finally() use hota hai.

        finally kisi fixed time ke liye nahi hota.
        Ye Promise ko settle hone ke baad{resolved/rejected =setteled} execute hota hai,
        chahe settle hone mein kitna bhi time lage.
    */
        const promiseFive=new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=false;
            if(!error){
                resolve({username:"satvik",password:"1234"})
            }
            else{
                reject('Something went wrong')
            }
        },1000)
    })
        //finally to humesha execute hoga hi hoga
        //Promise resolve ho ya reject, dono cases mein jo code chalana hai, woh finally() mein likhte hain.
    const username1=promiseFive.then((user)=>{
    console.log(user);
    return user.username;
    }).then((username)=>{  
        console.log(username)
    }).catch(function(error){ 
        console.log(error);
    }).finally(()=>console.log("the promise is either resolved or rejected"))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

    const promiseSix=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
         }
        else{
            reject('js went wrong')
        }
        },1000)
    })
    //Async Await
    //ab ye consume krne ke liye or we can say is promis ko handle krne ke liye we can use .then or async await ka bhi 
    //zaroori nhi .then hi use krna ho /async await bhi kr skte use
/*
    async function consumePromiseSix(){
        const response=await promiseSix
        console.log(response)
    }

    consumePromiseSix() //->error:false me koi dikkt nhi hogi
*/
    // agar error true hai to Promise reject hoga.
    // await rejected Promise par error throw karta hai.
    // isliye try-catch ka use karke us error ko handle kar sakte hain.

    async function consumePromiseSix() {
        try {
            const response = await promiseSix;
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }   
    consumePromiseSix();  //->js went wrong

//--------------------------------------------------------------

       fetch('https://api.github.com/users/hiteshchoudhary')
       .then((response)=>{
        return response.json()
       })
       .then((jsondata)=>{
        console.log(jsondata)
       })
       .catch((error)=>console.log(error))

//ab sbse phle fetch wala kaam hoga and vhi print hoga ...uper wale  promises iske baad print honge 

//Aesa isliye hai kyunki fetch me jo bhi kaam hoga vo microtask queue /priority qeueue me chle jate hai and this microtask queue ki priority sabse high hai to uska task call stack me sabse uper chle jate hai and sabse pehle execute ho jate hai 
//whereas setTimeout wale task jis task queue me jate hai unki priority is microtask queue se kam hai to vo badd me execute honge 

//fetch ka internal mechanism do part me divided hai .1 ek part me varibales /memory me data reserve krne ke liye hota hai . 2 dusra node ya phir web browser me jata hai newtwork request krne
//jo array reserve krta hai usme pvt varibales/array hote hai onfullfiled and onrejection ....on fullfilled me netwrok request se agar koi response aata hai to vo isme aata hai and onrejection me error ate hai network request ke

// jese http 404 ya 202 kuch bhi jo hote hia ye sare responses hai and catch me nhi fetch me jate hain ya phir onfullfilled me jate hai 

//ye jo data hai vo initaly empty hota hai and jab network request fire hoke onfullfiled ye rejection me jate hai and ab ye function data ke variable ki value ko fullfill krte hai and phir ye global memory me jata hai 

/* BETTER WORDING
       // fetch() network request start karta hai aur ek Promise return karta hai.

        // Jab fetch ka Promise fulfill hota hai,
        // uske .then() callbacks microtask queue mein schedule hote hain.

        // Microtask queue ko callback/task queue (jaise setTimeout) se
        // higher priority milti hai.

        // pending microtasks ko pehle execute kiya jata hai,
        // Isliye jab call stack empty hota hai,
         phir task/callback queue ke tasks jaise setTimeout execute hote hain.
            */

/*// Fetch API
// fetch() network request start karta hai aur ek Promise return karta hai.

// fetch() ke andar network request ka actual kaam
// browser ya Node.js ke environment ke networking mechanisms handle karte hain.

// fetch() ka Promise initially Pending state mein hota hai.
// Network request complete hone ke baad Promise Fulfilled ya Rejected hota hai.

// Agar network request successfully complete hoti hai,
// to Promise Fulfilled hota hai aur response .then() mein milta hai.

// Agar fetch request fail hoti hai,
// to Promise Rejected hota hai aur error .catch() mein handle hota hai.

// IMPORTANT:
// HTTP 404, 500 jaise responses bhi response hote hain.
// Ye normally fetch() Promise ko reject nahi karte.
// fetch() unhe Fulfilled Promise ke through Response object ke roop mein deta hai.

// .catch() generally tab execute hota hai jab fetch() Promise reject ho,
// jaise network failure.

// ------------------------------------------------------------

// Event Loop / Queues

// fetch() ka network request khud Microtask Queue mein nahi jata.
// Network request browser/Node.js ke networking system dwara handle hoti hai.

// Jab fetch() ka Promise settle hota hai,
// uske .then() / .catch() callbacks Microtask Queue mein schedule hote hain.

// Microtask Queue ko Task/Callback Queue se higher priority milti hai.

// Isliye jab Call Stack empty hota hai,
// pehle pending Microtasks execute hote hain,
// uske baad Task/Callback Queue ke tasks jaise setTimeout ke callbacks execute hote hain.
 */