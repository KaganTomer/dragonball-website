const dropdown_content = document.querySelector(".content");
const btnMenu = document.getElementById("btnMenu");
let counter = 0;
btnMenu.onclick = function () {
    if (counter % 2 == 0) {
        dropdown_content.style.display = `block`;
        console.log(counter)
    }
    else {
        dropdown_content.style.display = `none`;
        console.log(counter)
    } 
    counter++;
}