var headerElement = document.querySelector("#header-element");
var topP = document.querySelector("#top-p");
var buttonContainer = document.querySelector("#buttons");
var bottomP = document.querySelector("#bottom-p");
var timerElement = document.querySelector("#timer");
var timerText = document.querySelector("#timer-text");
var timerCount;
var header = document.querySelector("header");
var answerButtons
var initialsElement = document.querySelector("#submit-initials");
var submitButton = document.querySelector("#submit-btn");

//create elements
//var h1El = document.createElement("h1");
var par = document.createElement("p");
var startQuizBtn = document.createElement("button")
//var initialsForm = document.createElement("form");

var score = 0;
var initials = document.getElementById("initials");

//for local storage
//var storedScore = localStorage.getItem("store");
//var storedInitials = localStorage.getItem("initials");

//var userScore = [];

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
    headerElement.textContent = "Coding Quiz Challenge";
    headerElement.setAttribute("style", "font-weight:bold; font-size:180%");
    //headerElement.appendChild(h1El);
    par.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will remove ten seconds from your remaining time!";
    topP.appendChild(par);
    startQuizBtn.textContent = "Start Quiz";
    buttonContainer.appendChild(startQuizBtn);
    initialsElement.style.display = "none"
}

function startQuiz() {
    timerText.style.display = "flex";
    timerCount = 75;
    startTimer()
    startQuestions();
    headerElement.setAttribute("style", "font-weight:normal; font-size:13s0%");
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
                bottomP.setAttribute("style", "border-top: 2px dotted #666666; color: #666666");
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
    headerElement.textContent = "All Done!";
    timerText.style.display = "none";
    timerElement.style.display = "none";
    initialsElement.style.display = "flex";
    console.log(score);
    topP.style.display = "flex";
    topP.textContent = "Your final score is " + score;
    //localStorage.setItem("userscore", userScore);
    //userScore = {};
    //userScore.push(score);
    //console.log("HERE IS THE "+userScore);
    //var initialsForm = document.createElement("form");
    //initialsForm.className = "initials-form";
    //initialsForm.textContent = "Initials";
    //bottomP.appendChild(initialsForm);
    //initials = initials.value.trim();
    console.log(initials);
    submitButton.addEventListener("click", function(event) {
        console.log(this.textContent);
        
        var allScores;

        console.log(localStorage.getItem("allScores"));

         if (localStorage.getItem("allScores") === null) {
             allScores = [];
         }
        
         else {
             allScores = JSON.parse(localStorage.getItem("allScores"));
             console.log(allScores)};
        
        function saveAllScores (event) {
            event.preventDefault(event);

            var userScore = {
            score: score,
            initials: initials.value
            };

            allScores.push(userScore);
            allScores.sort( (a, b) => {
                return b.score - a.score;
            });

            localStorage.setItem("allScores", JSON.stringify(allScores));
            console.log(allScores);
        }
        saveAllScores(event);
        
        location.href = "highscores.html";
    });
    

    //answerButtons = document.querySelectorAll(".ansbutton-section");

    //put initials and score into local memory
}


// function highScores() {
//     header.style.display = "none";
// }


init();


startQuizBtn.addEventListener("click", startQuiz);



