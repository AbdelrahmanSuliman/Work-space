document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'register.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert('Error: ' + xhr.status);
            }
        }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert('Error: ' + xhr.status);
            }
        }
    };
    xhr.send('loginUsername=' + encodeURIComponent(loginUsername) + '&loginPassword=' + encodeURIComponent(loginPassword));
});
