function checkForm() {
    console.log("validateForm function is called");
    let res = true;
    res = IdNumberValid() && res;
    res = firstNameValid() && res;
    res = lastNameValid() && res;
    res = usernameValid() && res;
    res = emailValid() && res;
    res = passValid() && res;
    res = passConfirmValid() && res;
    res = birthValid() && res;
    res = phoneValid() && res;
    res = cityValid() && res;
    res = genderValid() && res;
    res = raceValid() && res;
    console.log("Validation result:", res);
    return res;
}
let password = "";
function IdNumberValid() {
    console.log("ID number checked");
    let input1i = document.getElementById("IdNumber");
    let input1 = document.getElementById("IdNumber").value;
    let msg1 = document.getElementById("IdNumberMsg");

    let numbersOnly = /^[0-9]+$/;
    if (input1.length == 0) {
        msg1.innerHTML = "You must fill out this field!";
        input1i.style.border = "2px solid red";
        return false;
    }  
    else if (!numbersOnly.test(input1)) {
        msg1.innerHTML = "Must contain numbers only!";
        input1i.style.border = "2px solid red";
        return false;
    }
    else if (input1.length != 9) {
        msg1.innerHTML = "An ID must be 9 numbers!";
        input1i.style.border = "2px solid red";
        return false;
    }

    input1i.style.border = "none";
    msg1.innerHTML = "";
    return true;
}
function firstNameValid() {
    console.log("first name name checked");
    let input2i = document.getElementById("firstName");
    let input2 = document.getElementById("firstName").value;
    let msg2 = document.getElementById("firstnameMsg");

    let lettersOnly = /^[A-Za-z]+$/;
    if (input2.length == 0) {
        msg2.innerHTML = "You must fill out this field!";
        input2i.style.border = "2px solid red";
        return false;
    }
    else if (!lettersOnly.test(input2)) {
        msg2.innerHTML = "Must be only english letters!";
        input2i.style.border = "2px solid red";
        return false;
    }
    else if (input2.length < 2) {
        msg2.innerHTML = "Must be at least 2 letters!";
        input2i.style.border = "2px solid red";
        return false;
    }
    else if (input2.length > 20) {
        msg2.innerHTML = "Cannot be over 20 letters!";
        input2i.style.border = "2px solid red";
        return false;
    }  

    input2i.style.border = "none";
    msg2.innerHTML = "";
    return true;
}
function lastNameValid() {
    console.log("last name name checked");
    let input3i = document.getElementById("lastName");
    let input3 = document.getElementById("lastName").value;
    let msg3 = document.getElementById("lastnameMsg");

    let lettersOnly = /^[A-Za-z]+$/;
    if (input3.length == 0) {
        input3i.style.border = "2px solid red";
        msg3.innerHTML = "You must fill out this field!";
        return false;
    }
    else if (!lettersOnly.test(input3)) {
        msg3.innerHTML = "Must be only english letters!";
        input3i.style.border = "2px solid red";
        return false;
    }
    else if (input3.length < 2) {
        msg3.innerHTML = "Must be at least 2 letters!";
        input3i.style.border = "2px solid red";
        return false;
    }
    else if (input3.length > 20) {
        msg3.innerHTML = "Cannot be over 20 letters!";
        input3i.style.border = "2px solid red";
        return false;
    }
    

    input3i.style.border = "none";
    msg3.innerHTML = "";
    return true;
}
function usernameValid() {
    console.log("username checked");
    let input4i = document.getElementById("username");
    let input4 = document.getElementById("username").value;
    let msg4 = document.getElementById("usernameMsg");

    let englishLettersOnly = /^[A-Za-z]+$/;
    if (input4.length == 0) {
        msg4.innerHTML = "You must fill out this field!";
        input4i.style.border = "2px solid red";
        return false;
    }
    else if (!englishLettersOnly.test(input4)) {
        msg4.innerHTML = "A name can only contain English letters!";
        input4i.style.border = "2px solid red";
        return false;
    }
    else if (input4.length < 3) {
        msg4.innerHTML = "Username must be at least 3 characters!";
        input4i.style.border = "2px solid red";
        return false;
    }
    else if (input4.length > 20) {
        msg4.innerHTML = "Cannot be over 20 characters!";
        input4i.style.border = "2px solid red";
        return false;
    }

    input4i.style.border = "none";
    msg4.innerHTML = "";
    return true;
}
function emailValid() {
    console.log("email checked");
    let input5i = document.getElementById("email");
    let input5 = document.getElementById("email").value;
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
    let input6i = document.getElementById("password");
    let input6 = document.getElementById("password").value;
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
function passConfirmValid() {
    console.log("password confirmed checked");
    let input7i = document.getElementById("password2");
    let input7 = document.getElementById("password2").value;
    let msg7 = document.getElementById("passconfirmMsg");

    if (input7.length == 0) {
        msg7.innerHTML = "You must fill out this field!";
        input7i.style.border = "2px solid red";
        return false;
    }
    else if (input7 != password) {
        msg7.innerHTML = "The passwords do not match";
        input7i.style.border = "2px solid red";
        return false;
    }

    input7i.style.border = "none";
    msg7.innerHTML = "";
    return true;
}
function birthValid() {
    console.log("birthdate checked");
    let input8i = document.getElementById("birthdate");
    let input8 = document.getElementById("birthdate").value;
    let msg8 = document.getElementById("birthdateMsg");

    if (!input8) {
        msg8.innerHTML = "You must fill out this field!";
        input8i.style.border = "2px solid red";
        return false;
    }

    input8i.style.border = "none";
    msg8.innerHTML = "";
    return true;
}

function phoneValid() {
    console.log("phone checked");
    let input9i = document.getElementById("phoneNumber");
    let input9 = document.getElementById("phoneNumber").value;
    let msg9 = document.getElementById("phoneMsg");

    let phoneDigits = /^0(5[0-9])-\d{7}$/;
    let cleanedInput = input9.replace(/-/g, '');
    if (input9.length == 0) {
        msg9.innerHTML = "You must fill out this field!";
        input9i.style.border = "2px solid red";
        return false;
    }
    else if (cleanedInput.length !== 10 || !phoneDigits.test(input9)) {
        msg9.innerHTML = "Please enter a valid phone number.";
        input9i.style.border = "2px solid red";
        return false;
    }

    input9i.style.border = "none";
    msg9.innerHTML = "";
    return true;
}
function cityValid() {
    console.log("city checked");
    let input10i = document.getElementById("city");
    let input10 = document.getElementById("city").value;
    let msg10 = document.getElementById("cityMsg");

    if (!input10 || input10 === "null") {
        msg10.innerHTML = "You must select a city!";
        input10i.style.border = "2px solid red";
        return false;
    }

    input10i.style.border = "none";
    msg10.innerHTML = "";
    return true;
}
function genderValid() {
    console.log("gender checked");
    let inputs = document.getElementsByName("gender"); // Returns a NodeList
    let msg11 = document.getElementById("genderMsg");

    // Loop through the radio buttons to check if any are selected
    let selected = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            selected = true;
            break; // Exit the loop as soon as one is checked
        }
    }
    console.log(selected);
    // If no radio button is selected, display the message and return false
    if (!selected) {
        msg11.innerHTML = "You must select a gender!";
        return false;
    }

    // If a gender is selected, clear the message and return true
    msg11.innerHTML = "";
    return true;
}
function raceValid() {
    console.log("race checked");
    let input12i = document.getElementById("race");
    let input12 = document.getElementById("race").value;
    let msg12 = document.getElementById("raceMsg");

    if (!input12) {
        msg12.innerHTML = "You must select a race!";
        input12i.style.border = "2px solid red";
        return false;
    }

    input12i.style.border = "none";
    msg12.innerHTML = "";
    return true;
}
function clearAll() {
    document.getElementById("IdNumber").style.border = "none";
    document.getElementById("IdNumberMsg").innerHTML = "";
    document.getElementById("firstName").style.border = "none";
    document.getElementById("firstnameMsg").innerHTML = "";
    document.getElementById("lastName").style.border = "none";
    document.getElementById("lastnameMsg").innerHTML = "";
    document.getElementById("username").style.border = "none";
    document.getElementById("usernameMsg").innerHTML = "";
    document.getElementById("email").style.border = "none";
    document.getElementById("emailMsg").innerHTML = "";
    document.getElementById("password").style.border = "none";
    document.getElementById("passMsg").innerHTML = "";
    document.getElementById("password2").style.border = "none";
    document.getElementById("passconfirmMsg").innerHTML = "";
    document.getElementById("birthdate").style.border = "none";
    document.getElementById("birthdateMsg").innerHTML = "";
    document.getElementById("phoneNumber").style.border = "none";
    document.getElementById("phoneMsg").innerHTML = "";
    document.getElementById("city").style.border = "none";
    document.getElementById("cityMsg").innerHTML = "";
    document.getElementById("genderMsg").innerHTML = "";
    document.getElementById("race").style.border = "none";
    document.getElementById("raceMsg").innerHTML = "";

}