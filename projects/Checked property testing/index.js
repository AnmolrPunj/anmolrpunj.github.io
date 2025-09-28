const cb1 = document.getElementById("cb1")
const rd1 = document.getElementById("rd1")
const rd2 = document.getElementById("rd2")
const rd3 = document.getElementById("rd3")
const submit1 = document.getElementById("submit1")
const output = document.getElementById("output")
const output1 = document.getElementById("output1")

submit1.onclick = function(){
    if(rd1.checked){
        output1.textContent = 'You are in highschool!'
    }
    else if(rd2.checked){
        output1.textContent = 'You are in university!'
    }
    else if(rd3.checked){
        output1.textContent = 'You are in primary school!'
    }
    else{
        output1.textContent = 'Please select an option of what school you are in!'
    }
}