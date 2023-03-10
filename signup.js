function register() {
    const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const p = document.getElementById("password");
const p2 = document.getElementById("password2");

if (firstname.value === "") {
        alert("firstname required");
        return;
    }
    if (lastname.value === "") {
        alert("lastname required");
        return;
    }
    if (username.value === "") {
        alert("username required");
        return;
    }
    if (email.value === "") {
        alert("email required");
        return;
    }
    if (address.value === "") {
        alert("address required");
        return;
    }
    if (p.value === "") {
        alert("password required");
        return;
    }
    if (p2.value === "") {
        alert("confirm password");
        return;
    }
    if (p.value != p2.value) {
        alert("password does not match");
    } else {
        alert("Registration Successful");
    }
}
