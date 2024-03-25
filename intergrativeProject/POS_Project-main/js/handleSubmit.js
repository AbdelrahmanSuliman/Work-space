const signUpFrom = document.getElementById("SignUp");

signUpFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signEmail").value;
  const password = document.getElementById("signPassword").value;
  const username = document.getElementById("signUser").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/signup.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      } else {
        alert("Error: " + xhr.status);
      }
    }
  };
  xhr.send(
    "username=" +
      encodeURIComponent(username) +
      "&email=" +
      encodeURIComponent(email) +
      "&password=" +
      encodeURIComponent(password)
  );
});

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("logPassword").value;
  const username = document.getElementById("logUser").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/login.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      } else {
        alert("Error: " + xhr.status);
      }
    }
  };
  xhr.send(
    "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password)
  );
});
