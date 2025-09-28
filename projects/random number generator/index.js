document.getElementById("button").onclick = function(){
    let generate = Math.random() * 6 + 1;
    count = Math.floor(generate)
    document.getElementById("Number").textContent = "You rolled a " + count
}

