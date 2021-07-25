//Game values
let min=1, 
    max=10,
    winningNum= getRandomNum(min, max),
    guessesLeft = 3;
//UI vars
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum= document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
//assign UI min and max
minNum.textContent= min;
maxNum.textContent = max;
//Listen for guess
guessBtn.addEventListener('click', function(){
    if (guessBtn.value== 'Submit') {
            const userGuess =guessInput.value;
        if(userGuess >0 && userGuess <11){ //find whether input in the right area
            if(userGuess == winningNum){ //find whether user correct
                setMessage('Play Again',`You won correct number was ${winningNum}.`,'',true,'green');
            } else { //not correct
                if(guessesLeft==0){ //game over
                    setMessage('Play Again',`Game over the correct answer was ${winningNum}.`,'',true,'red');
                    guessInput.style.borderColor = 'grey';
                    winningNum=getRandomNum(min,max);
                }else { //message
                    setMessage('Submit', `Incorrect you have left only ${guessesLeft} guesses left.`, '', false,'red');
                    guessesLeft--;
                }
            }
        }else { 
            setMessage('Submit',`Please enter a number between ${min} and ${max}.`,'',false,'red');
            guessInput.style.borderColor= 'grey';
        }
    }else if (guessBtn.value == 'Play Again') { //Play Again
        setMessage('Submit','','',false,'grey');
        guessesLeft = 3;
        winningNum = getRandomNum(min,max);
    }
});
function setMessage(btnValue,msg,guessInputVal,guessInputState,color){
    guessBtn.value = btnValue;
    message.textContent = msg;
    guessInput.value=guessInputVal;
    guessInput.disabled=guessInputState;
    message.style.color =color;
    guessInput.style.borderColor= color;
}
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min)+1);
}