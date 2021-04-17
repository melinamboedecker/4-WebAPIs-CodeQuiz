var headerElement = document.querySelector("#header-element");
var topP = document.querySelector("#top-p");
var buttonContainer = document.querySelector("#buttons");
var bottomP = document.querySelector("#bottom-p");
var timerElement = document.querySelector("#timer");
var timerText = document.querySelector("#timer-text");
var timerCount;
var header = document.querySelector("header");
var answerButtons

//create elements
var h1El = document.createElement("h1");
var par = document.createElement("p");
var startQuizBtn = document.createElement("button")

//create button elements for answers
// var answerBtn0 = document.querySelector("#answerbutton0");
// var answerBtn1 = document.querySelector("#answerbutton1");
// var answerBtn2 = document.querySelector("#answerbutton2");
// var answerBtn3 = document.querySelector("#answerbutton3");

var score = 0;


// var test = document.createElement("p");
// topP.appendChild(test);
// test.textContent = "testing this element";
// test.className = "testclass";
// var t = document.querySelector(".testclass");
//t.parentElement.removeChild(t);


var allQuestions = [
    {
        question: "Which of the following IS NOT a data type?",
        answers: ['boolean', 'string', 'object', 'method'],
        correctAnswer: 'method'
    },
    {
        question: "How many argumennts does the setInterval() function take?",
        answers: ['one', 'two', 'three', 'none'],
        correctAnswer: 'two'
    },
    {
        question: "Which of the following data types is NOT a primitive data type?",
        answers: ['Object', 'String', 'BigInt', 'Number'],
        correctAnswer: 'Object'
    }
]

var totalQuestions = allQuestions.length;

console.log(totalQuestions);

var counter = 0;

var questionOrder = [];
for (var i = 0; i < allQuestions.length; i++) {
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



function init() {
    timerText.style.display = "none";
    h1El.textContent = "Coding Quiz Challenge";
    headerElement.appendChild(h1El);
    par.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will remove ten seconds from your remaining time!";
    topP.appendChild(par);
    startQuizBtn.textContent = "Start Quiz";
    buttonContainer.appendChild(startQuizBtn);
}

function startQuiz() {
    timerText.style.display = "flex";
    timerCount = 75;
    startTimer()
    startQuestions();
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount < 1) {
            clearInterval(timer);
            calcScore();
        }
    }, 1000);
}

function startQuestions(event) {
    topP.style.display = "none";
    startQuizBtn.style.display = "none";

    console.log(allQuestions);
    headerElement.textContent = allQuestions[counter].question;
    console.log(allQuestions[counter].answers);

    for (var i = 0; i < allQuestions[counter].answers.length; i++) {
        var temp = document.createElement("section");
        temp.className = "ansbutton-section";
        temp.textContent = allQuestions[counter].answers[i];
        buttonContainer.appendChild(temp);
        answerButtons = document.querySelectorAll(".ansbutton-section");
    }

    console.log(answerButtons.length);
    console.log(answerButtons);
    for (var a = 0; a < answerButtons.length; a++) {
        answerButtons[a].addEventListener("click", function (event) {
            console.log(this.textContent);
            if (this.textContent === allQuestions[counter].correctAnswer) {
                bottomP.textContent = "Correct!";
                bottomP.setAttribute("style", "border-top: 2px solid black");
                score = score + 10;
                setTimeout(function(){
                    bottomP.textContent = "";
                    bottomP.setAttribute("style", "border-top:none");
                }, 2000); 

            } else {
                timerCount = timerCount - 10;
                bottomP.textContent = 'Incorrect';
                bottomP.setAttribute("style", "border-top: 2px solid black");
                setTimeout(function(){
                    bottomP.textContent = "";
                    bottomP.setAttribute("style", "border-top:none");
                }, 2000); 
            }
            console.log(score);

            console.log(answerButtons.length);
            for (var r = 0; r < answerButtons.length; r++) {
                var remove = document.querySelector(".ansbutton-section");
                remove.parentElement.removeChild(remove);
            }



            nextQuestion();
        })

    };

}

function nextQuestion() {
    console.log('nextquestion');
    counter = counter + 1;
    console.log(counter);
    if (counter >= allQuestions.length) {
        calcScore();
        timerCount = 0;
    } else {
        headerElement.textContent = allQuestions[counter].question;
        for (var i = 0; i < allQuestions[counter].answers.length; i++) {
            var temp = document.createElement("section");
            temp.className = "ansbutton-section";
            temp.textContent = allQuestions[counter].answers[i];
            buttonContainer.appendChild(temp);
            answerButtons = document.querySelectorAll(".ansbutton-section");
        }

        console.log(answerButtons.length);
        console.log(answerButtons);
        for (var a = 0; a < answerButtons.length; a++) {
            answerButtons[a].addEventListener("click", function (event) {
                console.log(this.textContent);
                if (this.textContent === allQuestions[counter].correctAnswer) {
                    bottomP.textContent = "Correct!"
                    bottomP.setAttribute("style", "border-top: 2px solid black");
                    score = score + 10;
                    setTimeout(function(){
                        bottomP.textContent = "";
                        bottomP.setAttribute("style", "border-top:none");
                    }, 2000); 
                } else {
                    timerCount = timerCount - 10;
                    bottomP.textContent = "Incorrect";
                    bottomP.setAttribute("style", "border-top: 2px solid black");
                    setTimeout(function(){
                        bottomP.textContent = "";
                        bottomP.setAttribute("style", "border-top:none");
                    }, 2000); 
                }
                console.log(score);

                for (var r = 0; r < answerButtons.length; r++) {
                    var remove = document.querySelector(".ansbutton-section");
                    remove.parentElement.removeChild(remove);
                }
                nextQuestion();
            })

        };
    }
}

function calcScore() {
    console.log("YAY");
    console.log(score);
    //put initials and score into local memory
    headerElement.style.display = "none";
}

function highScores() {
    header.style.display = "none";
}

function demoQuiz() {
    console.log("demo");
    var counter = 0;
    topP.style.display = "none";
    startQuizBtn.style.display = "none";
    //var answerButtons = document.querySelector("button");

    console.log(allQuestions);
    headerElement.textContent = allQuestions[counter].question;
    console.log(allQuestions[counter].answers);

    for (var i = 0; i < allQuestions[counter].answers.length; i++) {
        var temp = document.createElement("button");
        temp.className = "ansbutton";
        temp.textContent = allQuestions[counter].answers[i];
        buttonContainer.appendChild(temp);
    }
    var answerButtons = document.querySelector(".ansbutton");
    answerButtons.addEventListener("click", function (event) {
        alert(this.id);
    });
}



init();


startQuizBtn.addEventListener("click", startQuiz);



