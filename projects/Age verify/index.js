const input = document.getElementById("age");
const submit = document.getElementById("submit");
const output = document.getElementById("output")
submit.onclick = function(){
    if(input.value >= 13 && input.value < 115){
        output.textContent = "You are old enough to enter this site!" 
    }
    else if(input.value < 0){
        output.textContent = "Your age must be greater than 0" 
    }
    else if(input.value < 13){
        output.textContent = "You are not old enough to enter this site! You must be 13 years or older!" 
    }
    else if(input.value > 115){
        output.textContent = "Your age must be less than 115" 
    }
}