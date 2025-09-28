const dicenumber = document.getElementById("numberofdice")
const numberofsides = document.getElementById("numberofsides")
const output = document.getElementById("outcomes")
let values = []
function rolling(){
    if(dicenumber.value <= 0){
        output.textContent = "Number must be greater than 0"
    }
    else if(numberofsides.value < 6){
        output.textContent = "Dice must have at least 6 sides"
    }
    else{
        let values = []
        let outputcontent = ""
        for(let i = 1; i <= Number(dicenumber.value); i ++){
            let dice = Math.floor(Math.random() * Number(numberofsides.value) + 1)
            values.push(dice);
        }
        console.log(values)
        for(let g = 0; g < values.length; g+= 1){
            outputcontent = outputcontent + values[g] + ", "
        }
        outputcontent = outputcontent.slice(0, -2);
        output.textContent = "Dice: " + outputcontent 
    }  
}

