
let username;
document.getElementById("submit1").onclick = function(){
    username = document.getElementById("input1").value;
    console.log(username)
    document.getElementById("header1").textContent = `Hello ${username}`
}