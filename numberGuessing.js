
(function () {
    let guessNumber = document.querySelector("#guesses")
    let button = document.querySelector(".btn")
    let previousGuess = document.querySelector(".justlast")
    let remaining = document.querySelector(".remaining")
    let suggest = document.querySelector(".suggetion")
    let result = document.querySelector(".result")
    let i = 0;
    let num = 0;
    let action = 10;

    let randomNum = Math.floor(1 + Math.random() * 99);
    // console.log(randomNum);


    button.addEventListener("click", function (e) {
        // alert(action);
        num++;
        if (guessNumber.value != "" && (action--) > 0) {
            remainingGuess();
            lastGuesses();
            guessingNumber();
            guessNumber.value = "";
        }

        if (action == 0) {
            gameResult();
        }

    })

    result.addEventListener("click",function(){
        window.location.reload();
    })


    function gameResult() {
        result.innerHTML = "Game over! number was " + randomNum;
    }


    function remainingGuess() {

        // num -= 1;
        remaining.innerHTML = (10 - (++i));

    }


    function lastGuesses() {
        previousGuess.innerHTML += guessNumber.value + " ";
    }

    
    function guessingNumber() {
        if (guessNumber.value == randomNum) {
            suggest.innerHTML = "you guessed corectly! in "+num+" attempt";
            result.innerHTML = "Start new game!";
        }
        else if (guessNumber.value > randomNum)
            suggest.innerHTML = "Too High! Try Again";
        else if (guessNumber.value < randomNum)
            suggest.innerHTML = "Too Low! Try Again";
    }


})();
