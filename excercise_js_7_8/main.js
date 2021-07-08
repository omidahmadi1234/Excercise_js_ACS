const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const alert = document.getElementById("message");

checkPassword.addEventListener('keyup', function() {
    // Votre code ici

    if (document.getElementById('password').value ==
        document.getElementById('check-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementsById('message').innerHTML = "the password is good";
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = "this password is not good";

    }







})