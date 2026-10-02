//    let randomNum=Math.floor(Math.random()*100)+1;
        let randomNum=11
   const form=document.querySelector('.form').addEventListener('submit',function(e){
        console.log(e.target)
        e.preventDefault();
        let val=parseInt(document.querySelector('#guessField').value)
        console.log(val)
        if(val===randomNum){
            numMatched(val)
            return
        }
        else if(val<1 || val>100|| isNaN(val)){   //not a number ko hum ase check nhi krskte hai : NaN===NaN bhi hume false deta hai to sirf fucntion isNaN hi use kr skte hai
            invalidEntry();
        }
        else{
        previousGuesses(val)
        remaining()
        }
    },false)

    let prevG=[]

    function previousGuesses(number){
        if(prevG.length<10)
        prevG.push(number)
        else {
            endGame()
            return
        }

        let showprev=document.querySelector('.guesses')
        showprev.innerHTML = `<span>${prevG}</span>`
        console.log(prevG)
        notMatched(number)
    }

    function endGame(){
        document.querySelector('#guessField').disabled = true; //→ input me kuch nahi likh sakoge
        document.querySelector('#subt').disabled = true; //→ Submit button click nahi hoga

    }   

    function invalidEntry(){
       alert(`Enter A Valid Number`)
    }

    function remaining(){
        let remainingaccess=document.querySelector('.lastResult')
        if(remainingaccess.innerText-1>0)
            remainingaccess.innerText=remainingaccess.innerText-1
        else{
            endGame()
            return
        }
    }

    function numMatched(num){
        let winArea=document.querySelector('#guess')
        winArea.innerText=`The Number was ${num}. Congratulations! You Win!`
        endGame()
        return
    }

    function notMatched(num){
        let messageArea=document.querySelector(`#guess`)
        
        if(Math.abs(randomNum-num)>20)
            messageArea.innerHTML=`<span> Guess a number </span> <p> Your Guess is Too Far </p>`
        else if(Math.abs(randomNum-num)>=10)
            messageArea.innerHTML=`<span> Guess a number </span> <p> Your Guess is Far </p>`
        else 
            messageArea.innerHTML=`<span> Guess a number </span> <p> Your Guess is Close </p>`
    }
    document.querySelector('#newGame').addEventListener('click', resetGame);
    function resetGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    prevG = [];

    document.querySelector('#guessField').disabled = false;
    document.querySelector('#subt').disabled = false;

    document.querySelector('#guessField').value = "";
    document.querySelector('.guesses').innerText = "";
    document.querySelector('.lastResult').innerText = "10";
    document.querySelector('#guess').innerText = "Guess a number";
    document.querySelector('.lowOrHi').innerText = "";
}