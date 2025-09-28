const lowerletters = 'abcdefghijklmnopqrstuvwxyz';
const upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const buttongenerate = document.getElementById("generate");
const output = document.getElementById("h1");
let includelowerletters;
let includeupperletters;
let includenumbers;
function generatepassword(length, includelowerletters, includeupperletters, includenumbers){

    let allowedchars = '';
    let password_output = '';
    allowedchars += includelowerletters == true ? lowerletters : '';
    allowedchars += includeupperletters == true ? upperletters : '';
    allowedchars += includenumbers == true ? numbers : '';
    if(allowedchars === ''){
        return '(At least one character set must be included)'
    }
    if(length <= 0){
        return '(Length must be greater than 0)'
    }
    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length)
        password_output += allowedchars[randomindex]    
    }
    return password_output
}

buttongenerate.onclick = function password(){
    const lowerletterscheckbox = document.getElementById("lowerletters")
    const upperletterscheckbox = document.getElementById("upperletters")
    const numberscheckbox = document.getElementById("numbers")
    const length = document.getElementById('length').value;
    if(lowerletterscheckbox.checked){
        includelowerletters = true;
    }
    else{
        includelowerletters = false;
    }
    if(upperletterscheckbox.checked){
        includeupperletters = true;
    }
    else{
        includeupperletters = false;
    }
    if(numberscheckbox.checked){
        includenumbers = true;
    }
    else{
        includenumbers = false;
    }
    output.textContent = generatepassword(length, includelowerletters, includeupperletters, includenumbers) 
}



