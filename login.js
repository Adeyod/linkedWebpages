const user = "adeyod";
const a = "1234";

function login() {

const form = document.getElementById("form");
const username = document.getElementById("username");
const p = document.getElementById("password");

    if (username.value === "") {
        alert("username required");
        return;
    }
    if (p.value === "") {
        alert("password required");
        return;
    }

    if (username.value.toLowerCase() != user.toLowerCase()) {
        alert("Invalid Username or Password");
        return;
    }
    if (p.value < 6) {
        alert("password too short");
    } else {
        alert("Login Successful");
    }
}