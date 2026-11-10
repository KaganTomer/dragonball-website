function allSelected() {
    let res = true;
    res = q1() && res;
    res = q2() && res;
    res = q3() && res;
    res = q4() && res;
    res = q5() && res;
    res = q6() && res;
    res = q7() && res;

    console.log(res);
    if (!res) {
        alert("Please answer all questions");
    }
    else {
        console.log("results should show");
        let quizform = document.getElementById("quizform");
        quizform.style.display = "none";

        let resultsDiv = document.getElementById("resultsDiv");
        resultsDiv.style.display = "block";
        let result = document.getElementById("results");
        result.innerHTML = `${count} / 6`;
    }


    return false;
}
function retake() {
    let quizform = document.getElementById("quizform");
    quizform.style.display = "block";

    let resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.style.display = "none";
}
function resetAll() {
    document.getElementById("q1Text").style.color = "black";
    document.getElementById("q2Text").style.color = "black";
    document.getElementById("q3Text").style.color = "black";
    document.getElementById("q4Text").style.color = "black";
    document.getElementById("q5Text").style.color = "black";
    document.getElementById("q6Text").style.color = "black";
}
let count = 0;
function q1() {
    const radios = document.getElementsByName('ques1');
    const text = document.getElementById("q1Text");
    for (let radio of radios) {
        if (radio.checked) {
            if (radio.value == "zeno") {
                count++;
                text.style.color = "#0ecc6d";
                return true;
            }
            text.style.color = "red";
            return true;
        }
    }
    return false;
}
function q2() {
    const radios = document.getElementsByName('ques2');
    const text = document.getElementById("q2Text");
    for (let radio of radios) {
        if (radio.checked) {
            if (radio.value == "mui") {
                count++;
                text.style.color = "#0ecc6d";
                return true;
            }
            text.style.color = "red";
            return true;
        }
    }
    return false;
}
function q3() {
    const radios = document.getElementsByName('ques3');
    const text = document.getElementById("q3Text");
    for (let radio of radios) {
        if (radio.checked) {
            if (radio.value == "beerus") {
                count++;
                text.style.color = "#0ecc6d";
                return true;
            }
            text.style.color = "red";
            return true;
        }
    }
    return false;
}
function q4() {
    const checkboxes = document.getElementsByName('ques4');
    const goku = document.getElementById('goku_check');
    const frieza = document.getElementById('frieza');
    const nappa = document.getElementById('nappa');
    const vegeta = document.getElementById('vegeta');
    const text = document.getElementById("q4Text");

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            if (goku.checked && nappa.checked && vegeta.checked && !frieza.checked) {
                count++;
                text.style.color = "#0ecc6d";
                return true;
            }
            text.style.color = "red";
            return true;
        }
    }
    return false;
}
function q5() {
    const checkboxes = document.getElementsByName('ques5');
    const yamcha = document.getElementById('yamcha');
    const beerus = document.getElementById('beerus3');
    const kingkai = document.getElementById('kingkai');
    const piccolo = document.getElementById('piccolo');
    const text = document.getElementById("q5Text");

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            if (beerus.checked && kingkai.checked && !yamcha.checked && !piccolo.checked) {
                count++;
                text.style.color = "#0ecc6d";
                return true;
            }
            text.style.color = "red";
            return true;
        }
    }
    return false;
}
function q6() {
    const select = document.getElementById('mangaSelect');
    const text = document.getElementById("q6Text");

    if (select.value !== 'null') {
        if (select.value == 'AkiraToriama') {
            count++;
            text.style.color = "#0ecc6d";
            return true;
        }
        text.style.color = "red";
        return true;
    }
    return false;
}
function q7() {
    const input = document.getElementById('thoughts');
    if (input.value.length != 0) {
        return true;
    }
    return false;
}