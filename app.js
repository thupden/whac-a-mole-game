
const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const start = document.querySelector("#start");
const quitGame = document.querySelector("#quit");
const audio = document.querySelector("#back-audio");
const gameOverAudio = document.querySelector("#game-over");
const close = document.querySelector("#close");
const home = document.querySelector(("#home"));
const finalScore = document.querySelector("#final-score");

/*variables*/
let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;
let countDownTimerId = null;

/*Random square*/
function randomSquare(){
    square.forEach(square => {
        square.classList.remove("mole");
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    //assign the id of the randomosition to hitPostion for laer use
    hitPosition = randomPosition.id;
}

/*Count score */
square.forEach(square => {
    square.addEventListener("mouseup", () => {
        if(square.id === hitPosition)
        {   
            console.log(result);
            result = result + 1;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

/*Move mole*/
function moveMole(){
    timerId = setInterval(randomSquare, 900);
}

/*Time count*/
function countDown()
{
    currentTime--;
    timeLeft.textContent = currentTime;
    console.log(currentTime);
    if(currentTime === 0)
    {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        hitPosition = null;
        audio.pause();
        gameOverAudio.play();
        const outPut = document.querySelector("#modal-score");
        outPut.textContent = result;
        finalScore.style.display = "block";
        /*alert("GAME OVER! Your final score is" + result);*/
        timeLeft.textContent = 30;
        score.textContent = 0;
        result = 0;
        currentTime = 30;
        square.forEach(square => {
            square.classList.remove("mole");
        })
    }
}

/*Start game*/
start.addEventListener("click", () => {
    audio.play();
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    moveMole();
    countDownTimerId = setInterval(countDown, 1000);
});

/*quit game*/
quitGame.addEventListener("click", () => {
    location.reload();
})
home.addEventListener("click", ()=>{
    location.reload();
})
close.addEventListener("click", () =>
{
    location.reload();
})