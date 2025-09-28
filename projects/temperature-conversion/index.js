const tocelsius = document.getElementById("F-C")
const tofarenheight = document.getElementById("C-F")
const convert = document.getElementById("Process")
const input = document.getElementById("input")
let output

convert.onclick = function(){
    if(input.value == 0){
        document.getElementById("output").textContent = "Please Enter A Valid Number"
    }
    else {
        if(tofarenheight.checked){
            output = (input.value * 9/5) + 32
            document.getElementById("output").textContent = output.toFixed(2) + "°F"
        }
        else if(tocelsius.checked){
            output = (input.value - 32) * 5/9
            document.getElementById("output").textContent = output.toFixed(2) + "°C"
        }
        else{
            document.getElementById("output").textContent = "Please Select A Unit"
        }
    }
}