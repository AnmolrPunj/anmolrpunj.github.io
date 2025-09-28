let form = document.getElementById("main-3")
let submit = document.getElementById('submit')
function deleteform(){
    setTimeout(() => {
        form.remove();
        const heading = document.createElement("h2");
        heading.textContent = "Submitted";
        heading.id = "heading-1";
        document.body.append(heading);
    }, 1000);
}

submit.onclick = deleteform;