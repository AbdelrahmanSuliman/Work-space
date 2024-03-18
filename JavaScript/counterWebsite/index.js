//COUNTER

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBrn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = () => {count++;
    countLabel.textContent = count;}

decreaseBtn.onclick = () => {count--
    countLabel.textContent = count;}

resetBrn.onclick = () => { count = 0;
    countLabel.textContent = 0;}