const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const quizContent = document.getElementById("quizContent");
const Question = document.getElementById("Question");
const btnStart = document.getElementById("btnStart");
const btnNext = document.getElementById("btnNext");
const outOf = document.getElementById("outOf");
const resultH1 = document.getElementById("resultH1");
const resultMessage = document.getElementById("resultMessage");
const resultBoxBehind = document.getElementById("resultBoxBehind");
const ToStart = document.getElementById("ToStart");
const GokuPoseThink = document.getElementById("GokuPoseThink");
let QuesList = 1;
let correct = 0;
let correctImage = null;

image1.addEventListener("click", handleClick);
image2.addEventListener("click", handleClick);
image3.addEventListener("click", handleClick);
image4.addEventListener("click", handleClick);

function handleClick(event) {
    if (event.target === correctImage) {
        correct++;
    }
    QuesList++;
    loadNextQuestion();
}

btnStart.onclick = function() {
    btnStart.style.display = `none`;
    GokuPoseThink.style.display = `none`;
    ToStart.style.display = `none`;
    if (QuesList < 6) {
        loadNextQuestion();
    } 
    if (QuesList == 6) {
        // End of quiz, show result
        Question.style.display = `none`;
        outOf.style.display = `none`;
        quizContent.style.display = `none`;
        resultBoxBehind.style.display = `block`;
        resultH1.style.display = `flex`;
        resultH1.textContent = `You got ${correct}/5 questions right!`;
        resultMessage.style.display = `flex`;
        if (correct == 5)
            resultMessage.textContent = `You are the STRONGEST!!`;
        else if (correct == 4)
            resultMessage.textContent = `You are smarter than Goku!`;
        else if (correct == 3)
            resultMessage.textContent = `Not too bad...`;
        else if (correct == 2)
            resultMessage.textContent = `You should rewatch the show!`;
        else if (correct == 1)
            resultMessage.textContent = `Did you even pay attention while watching the show?!`;
        else if (correct == 0)
            resultMessage.textContent = `Did you even watch the show?!`;
        console.log(correct);
    }
};

function loadNextQuestion() {
    if (QuesList > 6) return; // Stop if the quiz is done

    if (QuesList == 6) {
        btnStart.style.left = '33%';
        btnStart.style.top = '65%';
        btnStart.textContent = `Results`;
        btnStart.style.display = `block`;
    }

    console.log(QuesList);
    let random = Math.floor(Math.random() * (16 - 1) + 1);
    if (QuesList <= 5)
        outOf.textContent = `${QuesList}/5`;
    Question.style.display = `flex`;
    outOf.style.display = `block`;
    quizContent.style.display = `flex`;
    if (QuesList <= 5) {
        switch(random) {
            case 1:
                Question.textContent = "Who is the strongest out of the ones below?";
                image1.src = '/images/quiz/VegetaSjjBlue.png';
                image2.src = '/images/quiz/frieza_base.png';
                image3.src = '/images/quiz/Zeno.png';
                image4.src = '/images/quiz/GokuMUI.png';
                correctImage = image3;
                break;
            case 2:
                Question.textContent = "what is Goku’s strongest form?";
                image1.src = '/images/quiz/GokuSjj2.png';
                image2.src = '/images/quiz/GokuSjj_3.png';
                image3.src = '/images/quiz/GokuMUI.png';
                image4.src = '/images/quiz/gokuTrueUi.png';
                correctImage = image3;
                break;
            case 3:
                Question.textContent = "What is Gohan’s strongest form?";
                image1.src = '/images/quiz/GohanUltimate.png';
                image2.src = '/images/quiz/GohanBeast.png';
                image3.src = '/images/quiz/GohanSSJ2.png';
                image4.src = '/images/quiz/GohanSSJ1.png';
                correctImage = image2;
                break;
            case 4:
                Question.textContent = "Who is the strongest angel?";
                image1.src = '/images/quiz/GrandPriest.png';
                image2.src = '/images/quiz/Whis.png';
                image3.src = '/images/quiz/Vados.png';
                image4.src = '/images/quiz/Merus.png';
                correctImage = image1;
                break;
            case 5:
                Question.textContent = "How many dragon balls are there?";
                image1.src = '/images/quiz/dragonball4.png';
                image2.src = '/images/quiz/dragonball5.png';
                image3.src = '/images/quiz/dragonball2.png';
                image4.src = '/images/quiz/dragonball7.png';
                correctImage = image4;
                break;
            case 6:
                Question.textContent = "Who is universe 7 god of destruction?";
                image1.src = '/images/quiz/LordBeerus.png';
                image2.src = '/images/quiz/Champa.png';
                image3.src = '/images/quiz/LordClown.png';
                image4.src = '/images/quiz/Whis.png';
                correctImage = image1;
                break;
            case 7:
                Question.textContent = `At the start of Dragon-Ball, what dragon-ball did Goku possess?`;
                image1.src = '/images/quiz/dragonball4.png';
                image2.src = '/images/quiz/dragonball1.png';
                image3.src = '/images/quiz/dragonball3.png';
                image4.src = '/images/quiz/dragonball5.png';
                correctImage = image1;
                break;
            case 8:
                Question.textContent = "Who was Goku’s first master?";
                image1.src = '/images/quiz/Roshi.png';
                image2.src = '/images/quiz/GrandpaGoku.png';
                image3.src = '/images/quiz/popo.png';
                image4.src = '/images/quiz/KingKai.png';
                correctImage = image2;
                break;
            case 9:
                Question.textContent = "Who is considered to be Goku’s rival?";
                image1.src = '/images/quiz/Vegeta2.png';
                image2.src = '/images/quiz/Whis.png';
                image3.src = '/images/quiz/LordBeerus.png';
                image4.src = '/images/quiz/GohanUltimate.png';
                correctImage = image1;
                break;
            case 10:
                Question.textContent = "What is Vegeta’s strongest form?";
                image1.src = '/images/quiz/Vegeta2.png';
                image2.src = '/images/quiz/VegetaSjjBlue.png';
                image3.src = '/images/quiz/VegetaSSJGOD.png';
                image4.src = '/images/quiz/VegetaUltraEgo.png';
                correctImage = image4;
                break;
            case 11:
                Question.textContent = "Who destroyed planet Vegeta?";
                image1.src = '/images/quiz/frieza_base.png';
                image2.src = '/images/quiz/LordBeerus.png';
                image3.src = '/images/quiz/VegetaSSJGOD.png';
                image4.src = '/images/quiz/Champa.png';
                correctImage = image1;
                break;
            case 12:
                Question.textContent = "Who taught Goku Instant Transmission?";
                image1.src = '/images/quiz/KingKai.png';
                image2.src = '/images/quiz/GrandPriest.png';
                image3.src = '/images/quiz/Yardrat.png';
                image4.src = '/images/quiz/Whis.png';
                correctImage = image3;
                break;
            case 13:
                Question.textContent = "Who taught Goku the Kaioken technique?";
                image1.src = '/images/quiz/KingKai.png';
                image2.src = '/images/quiz/Whis.png';
                image3.src = '/images/quiz/LordBeerus.png';
                image4.src = '/images/quiz/Roshi.png';
                correctImage = image4;
                break;
            case 14:
                Question.textContent = "Who is Goku’s father?";
                image1.src = '/images/quiz/Raditz1.png';
                image2.src = '/images/quiz/KingVegeta.png';
                image3.src = '/images/quiz/Bardock.png';
                image4.src = '/images/quiz/Nappa.png';
                correctImage = image3;
                break;
            case 15:
                Question.textContent = "Which form did Gohan use to defeat Cell?";
                image1.src = '/images/quiz/GohanSSJ1.png';
                image2.src = '/images/quiz/GohanSSJ2.png';
                image3.src = '/images/quiz/GohanBeast.png';
                image4.src = '/images/quiz/GohanUltimate.png';
                correctImage = image2;
                break;
            case 16:
                Question.textContent = "Who is Goku’s first child?";
                image1.src = '/images/quiz/Trunks1.png';
                image2.src = '/images/quiz/Pan.png';
                image3.src = '/images/quiz/kidGohanBaby.png';
                image4.src = '/images/quiz/Goten.png';
                correctImage = image3;
                break;
        
        }
    }
}

