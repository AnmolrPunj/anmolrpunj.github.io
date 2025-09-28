let count = 0;
document.getElementById("Increase").onclick = function(){
    number = document.getElementById("Counter").value
    count = count + 1
    number = count 
    document.getElementById("Counter").textContent = number
}

document.getElementById("Reset").onclick = function(){
    number = document.getElementById("Counter").value
    number = Number(number)
    count = 0
    number = count
    document.getElementById("Counter").textContent = String(number)
}


document.getElementById("Dec").onclick = function(){
    number = document.getElementById("Counter").value
    count = count - 1
    number = count 
    document.getElementById("Counter").textContent = number
}
