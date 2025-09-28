const minimum = 1
const maximum = 100
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum 

let running = true
let guess
let Count
Count = 0

document.getElementById("answer").textContent = answer
while(running == true){
    while(Count < 4){
        guess = window.prompt("Enter a number between 1 and 100")
        Count++
        guess = Number(guess)
        if(isNaN(guess)){
            window.alert("Not a valid input please enter a number between 1 and 100");
        }
        else if (guess > maximum || guess < minimum){
            window.alert("Not a valid input please enter a number between 1 and 100");
        }
        if(guess > answer && Count < 3){
            window.alert("Your guess is greater than the answer");
            
        }
        else if(guess < answer && Count < 3){
            window.alert("Your guess is smaller than the answer");  
        }
        else if(guess == answer){
            window.alert("You win you selected " + String(guess) + " and the correct answer was " + String(answer) + " reload the page to play again!")
        }
        else if(guess != answer && Count >= 3){
            window.alert("You lose the correct answer was " + String(answer) + " reload the page to play again!")
            running = false
            break
        }
    }
}
