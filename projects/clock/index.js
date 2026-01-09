function time(){
    const today = new Date();
    let hours = String(today.getHours()).padStart(2, "0")
    let minutes = String(today.getMinutes()).padStart(2, "0")
    let seconds = String(today.getSeconds()).padStart(2, "0")
    let txt = hours + ':' + minutes + ':' + seconds
    document.getElementById('clock').textContent = txt
}

function tick() {
    time();
    setTimeout(tick, 500);
}

tick();