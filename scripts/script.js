var headerElement = document.querySelector("#header-element");
var topP = document.querySelector("#top-p");
var buttonContainer = document.querySelector("#buttons");
var bottomP = document.querySelector("#bottom-p");
var timerElement = document.querySelector("#timer");
var timerCount;
var header = document.querySelector("header");


//create elements
var h1El = document.createElement("h1");
var par = document.createElement("p");
var startQuizBtn = document.createElement("button")

//create button elements for answers
// var answerBtn1 = document.createElement("button");
// var answerBtn2 = document.createElement("button");
// var answerBtn3 = document.createElement("button");
// var answerBtn4 = document.createElement("button");

 





var allQuestions = [
    {
        question: "Which of the following IS NOT a data type?",
        answers: ['boolean', 'string','object', 'method'],
        correctAnswer: 3
    },
    {
        question: "How many argumennts does the setInterval() function take?",
        answers: ['one', 'two','three', 'none'],
        correctAnswer: 1
    },
    {
        question: "Which of the following data types is NOT a primitive data type?",
        answers: ['Object', 'String', 'BigInt', 'Number'],
        correctAnswer: 0
    }
]

var totalQuestions = allQuestions.length;

console.log(totalQuestions);

var questionOrder = [];
    for (var i=0; i < allQuestions.length; i++) {
        questionOrder.push(i);
    }
    
    console.log(questionOrder);
    console.log(questionOrder.length);

// function shuffle(arraytoShuffle) {
//     let counter = arraytoShuffle.length;
//     let temporary;
//     let index;

//     while (counter > 0) {
//         index = Math.floor(Math.random()*counter);
//         counter --
//         temporary = arraytoShuffle[counter];
//         arraytoShuffle[counter] = arraytoShuffle[index];
//         arraytoShuffle[index] = temporary;
//     } 
//     return arraytoShuffle;
// }

// shuffle(questionOrder);

// console.log(questionOrder);
// console.log(questionOrder.length);



function init () {
    h1El.textContent = "Coding Quiz Challenge";
    headerElement.appendChild(h1El);
    par.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will remove ten seconds from your remaining time!";
    topP.appendChild(par);
    startQuizBtn.textContent = "Start Quiz";
    buttonContainer.appendChild(startQuizBtn);
}

function startQuiz() {
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

function startQuestions() {
    topP.style.display = "none";
    startQuizBtn.style.display = "none";

    
    
    

    h1El.textContent = allQuestions[0].question;
    headerElement.appendChild(h1El);

    buttonContainer.appendChild(answerBtn1);
    buttonContainer.appendChild(answerBtn2);
    buttonContainer.appendChild(answerBtn3);
    buttonContainer.appendChild(answerBtn4);

    answerBtn1.textContent = allQuestions[0].answers[0];
    answerBtn2.textContent = allQuestions[0].answers[1];
    answerBtn3.textContent = allQuestions[0].answers[2];
    answerBtn4.textContent = allQuestions[0].answers[3];

    answerBtn1.setAttribute("style", "text-align: left");
    answerBtn2.setAttribute("style", "text-align: left");
    answerBtn3.setAttribute("style", "text-align: left");
    answerBtn4.setAttribute("style", "text-align: left");

    answerBtn1.addEventListener("click", checkAnswer);
    answerBtn2.addEventListener("click", checkAnswer);
    answerBtn3.addEventListener("click", checkAnswer);
    answerBtn4.addEventListener("click", checkAnswer);

}

function checkAnswer() {
    console.log("checking answer");
}

function calcScore() {
    console.log("YAY") 
}

function highScores() {
    header.style.display = "none";
}

function seeIfClicks () {
    console.log('it clicked');
}


function demoQuiz() {
    console.log("demo");
    var counter = 0;
    topP.style.display = "none";
    startQuizBtn.style.display = "none";
    var answerButtons = document.querySelector("button");

    console.log(allQuestions);
    headerElement.textContent = allQuestions[counter].question;

    for (var i = 0; i < allQuestions[counter].answers.length; i++) {
        var temp = document.createElement("button");
        temp.textContent = allQuestions[counter].answers[i];
        buttonContainer.appendChild(temp);
    }
    answerButtons.addEventListener("click", seeIfClicks());
}



init();


startQuizBtn.addEventListener("click", demoQuiz);





//if (intro.style.display === "none") {
//    intro.style.display = "block";
//} else {
//    intro.style.display = "none";
//}