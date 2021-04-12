var startQuizBtn = document.querySelector("#start-quiz-button");
var intro = document.querySelector("#intro");
var timerElement = document.querySelector("#timer");
var timerCount;

var allQuestions = [
    {
        question: "Which of the following IS NOT a data type?",
        answers: {
            1: 'boolean',
            2: 'string',
            3: 'object',
            4: 'method'
        },
        correctAnswer: '4'
    },
    {
        question: "How many argumennts does the setInterval() function take?",
        answers: {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'none'
        },
        correctAnswer: '2'
    }
]


function init() {
    console.log("init");
}

function startQuiz() {
    if (intro.style.display === "none") {
        intro.style.display = "block";
    } else {
        intro.style.display = "none";
    }
    timerCount = 75;
    startTimer()
    startQuestions();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            calcScore();
        }
    }, 1000);
}

function startQuestions(){
    console.log("questiontime");
}

function calcScore() {
    console.log("YAY")
}


init();

startQuizBtn.addEventListener("click", startQuiz);