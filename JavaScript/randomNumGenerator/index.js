//Dice

const button = document.getElementById("roll");
const label1= document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let randomnum1;
let randomnum2;
let randomnum3;

button.onclick = function()
{
    randomnum1 = Math.floor(Math.random() * 6) + 1;
    randomnum2 = Math.floor(Math.random() * 6) + 1;
    randomnum3 = Math.floor(Math.random() * 6) + 1;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
}




