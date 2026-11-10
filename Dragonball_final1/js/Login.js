function checkForm() {
    console.log("validateForm function is called");
    let res = true;

    res = emailValid() && res;
    res = passValid() && res;
  
    console.log("Validation result:", res);
    return res;
}
function emailValid() {
    console.log("email checked");
    let input5i = document.getElementById("inEmail");
    let input5 = document.getElementById("inEmail").value;
    let msg5 = document.getElementById("emailMsg");
    let countofshtroodel = 0;

    if (input5.length === 0) {
        msg5.innerHTML = "You must fill out this field!";
        input5i.style.border = "2px solid red";
        return false;
    }
    const firstCharRegex = /^[a-zA-Z0-9]/;
    if (!firstCharRegex.test(input5)) {
        msg5.innerHTML = "Invalid first character!";
        input5i.style.border = "2px solid red";
        return false;
    }
    else if (input5.indexOf('@') === -1) {
        msg5.innerHTML = "An email must contain @";
        input5i.style.border = "2px solid red";
        return false;
    }
    else if (input5.indexOf('.') === -1) {
        msg5.innerHTML = "Must contain at least one '.'!";
        input5i.style.border = "2px solid red";
        return false;
    }
    else if (input5.indexOf('@') === 0) {
        msg5.innerHTML = "Username is missing!";
        input5i.style.border = "2px solid red";
        return false;
    }
    else if (input5.includes('..')) {
        msg5.innerHTML = "Cannot contain consecutive dots!";
        input5i.style.border = "2px solid red";
        return false;
    }
    else if (input5.lastIndexOf('.') < input5.indexOf('@') || input5.slice(input5.lastIndexOf('.')).length < 3 || input5.slice(input5.lastIndexOf('.')).length > 5) {
        msg5.innerHTML = "Must contain a valid domain!";
        input5i.style.border = "2px solid red";
        return false;
    }
    const atIndex = input5.indexOf('@');
    const lastDotIndex = input5.lastIndexOf('.');
    const domainPart = input5.substring(atIndex + 1, lastDotIndex);
    if (!/[a-zA-Z]/.test(domainPart)) {
        msg5.innerHTML = "Letter between @ and domain!";
        input5i.style.border = "2px solid red";
        return false;
    }
    for (let i = 0; i < input5.length; i++) {
        if (input5[i] == '@') {
            countofshtroodel++;
        }
    }
    if (countofshtroodel > 1) {
        msg5.innerHTML = "Must contain only one '@'!";
        input5i.style.border = "2px solid red";
        return false;
    }

    input5i.style.border = "none";
    msg5.innerHTML = "";
    return true;
}
function passValid() {
    console.log("password checked");
    let input6i = document.getElementById("inPassword");
    let input6 = document.getElementById("inPassword").value;
    let msg6 = document.getElementById("passMsg");
    password = input6;

    let reg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let capital = /[A-Z]/;
    let englishLettersOnly = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    let containsnumbers = /\d/;

    if (input6.length == 0) {
        msg6.innerHTML = "You must fill out this field!";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (input6.length < 7) {
        msg6.innerHTML = "Must be at least 8 characters";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (!capital.test(input6)) {
        msg6.innerHTML = "Must contain a capital letter";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (!containsnumbers.test(input6)) {
        msg6.innerHTML = "Must have a number!";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (!reg.test(input6)) {
        msg6.innerHTML = "Must contain a special character";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (input6.includes(" ")) {
        msg6.innerHTML = "Cannot conatain spaces";
        input6i.style.border = "2px solid red";
        return false;
    }
    else if (!englishLettersOnly.test(input6)) {
        msg6.innerHTML = "A name can only contain English letters!";
        input6i.style.border = "2px solid red";
        return false;
    }

    input6i.style.border = "none";
    msg6.innerHTML = "";
    return true;
}
function clearAll() {
    document.getElementById("inEmail").style.border = "none";
    document.getElementById("emailMsg").innerHTML = "";
    document.getElementById("inPassword").style.border = "none";
    document.getElementById("passMsg").innerHTML = "";
}