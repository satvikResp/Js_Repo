const clock=document.querySelector('#clock')

let date=new Date();
console.log(date.toLocaleTimeString()); //-> ye ase dega current time ->4:19:58 PM
//but ye display bhi hojayega but hume chiaye ki har second jo chnage ho vo dikhe hume

//to hume kuch ase krne hai ki baar baar ye newDate() function call hota rhe fixed time me 

//to use this we use setInterval()
//syntax=> setInterval(function(){},1000)   //->this 1000 is in milisecond  so its 1 second right now

//to ab hum ye new date ko isme likh denge aur vo har second chlta rhega

setInterval(function(){
    let date =new Date();
    clock.innerText=date.toLocaleTimeString();
},1000);



