// 1st way : my way
// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');

// function bmiCalculate(h, w) {
//     let hInMeter = h / 100;
//     let calculation = w / (hInMeter ** 2);
//     return calculation;
// }

// const calculatebtn = document.querySelector("button");
// const display = document.querySelector("#results");

// calculatebtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let h_value=height.value
//     let w_value=weight.value
//     let ans = bmiCalculate(h_value, w_value);

//     display.innerText = ans;
// });


//2nd way:optimized and prefered

const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault() //default action roko : prevents ->submit hone ke baad value show hogi and quickly refresh hojayega page 

    // height ki value li -> string me milti hai aase to parse kiya int me 
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
//ye height and weight is event ke andr likhein hai because agar bahr likhenge to vhan empty value bhi aaskti hai ..but submit jab hoga form tb to jyada chances hai ki user ne dono value bhar di hongi tbhi submit kiya hoga

    const result=document.querySelector('#results')
    if(height<0 || isNaN(height)){ //isNan(height) ye tareeka hai check krne ka If something is NaN .... kyunki Nan===NaN false deta hai weirdly
        result.innerText=`Please enter a valid height ${height}`;
    }
    else if(weight<0 || isNaN(weight)){ //isNan(height) ye tareeka hai check krne ka If something is NaN .... kyunki Nan===NaN false deta hai weirdly
        result.innerText=`Please enter a valid weight ${weight}`;
    }
    else{
        let heightInMeter = height / 100;
        let bmi = weight / (heightInMeter ** 2);
        result.innerText = bmi.toFixed(2);
    }
})