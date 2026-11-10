let rightRotation = 0;
let leftRotation = 0;
let Front = document.getElementById('itemFront');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');
let item10 = document.getElementById('item10');
let item11 = document.getElementById('item11');

function goLeft() {
    const slider = document.getElementById('slider');
    const rotationIncrement = 360 / 11;

    rightRotation += rotationIncrement;
    console.log(rightRotation);
    slider.style.transform = `perspective(2000px) rotateY(${rightRotation}deg)`;

    const tempId = Front.id;

    Front.setAttribute("id", item2.id);
    item2.setAttribute("id", item3.id);
    item3.setAttribute("id", item4.id);
    item4.setAttribute("id", item5.id);
    item5.setAttribute("id", item6.id);
    item6.setAttribute("id", item7.id);
    item7.setAttribute("id", item8.id);
    item8.setAttribute("id", item9.id);
    item9.setAttribute("id", item10.id);
    item10.setAttribute("id", item11.id);
    item11.setAttribute("id", tempId);

    Front = document.getElementById('itemFront');
    item2 = document.getElementById('item2');
    item3 = document.getElementById('item3');
    item4 = document.getElementById('item4');
    item5 = document.getElementById('item5');
    item6 = document.getElementById('item6');
    item7 = document.getElementById('item7');
    item8 = document.getElementById('item8');
    item9 = document.getElementById('item9');
    item10 = document.getElementById('item10');
    item11 = document.getElementById('item11');
}

function goRight() {
    const slider = document.getElementById('slider');
    const rotationIncrement2 = (360 / 11) * -1;

    rightRotation = rightRotation - (360 / 11);
    console.log(rightRotation);
    slider.style.transform = `perspective(2000px) rotateY(${rightRotation}deg)`;

    const tempId = Front.id;

    Front.setAttribute("id", item11.id);
    item11.setAttribute("id", item10.id);
    item10.setAttribute("id", item9.id);
    item9.setAttribute("id", item8.id);
    item8.setAttribute("id", item7.id);
    item7.setAttribute("id", item6.id);
    item6.setAttribute("id", item5.id);
    item5.setAttribute("id", item4.id);
    item4.setAttribute("id", item3.id);
    item3.setAttribute("id", item2.id);
    item2.setAttribute("id", tempId);

    Front = document.getElementById('itemFront');
    item2 = document.getElementById('item2');
    item3 = document.getElementById('item3');
    item4 = document.getElementById('item4');
    item5 = document.getElementById('item5');
    item6 = document.getElementById('item6');
    item7 = document.getElementById('item7');
    item8 = document.getElementById('item8');
    item9 = document.getElementById('item9');
    item10 = document.getElementById('item10');
    item11 = document.getElementById('item11');
}

document.getElementById('btnRight').onclick = goLeft;
document.getElementById('btnLeft').onclick = goRight;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goLeft();
    if (event.key === 'ArrowRight') goRight();
});