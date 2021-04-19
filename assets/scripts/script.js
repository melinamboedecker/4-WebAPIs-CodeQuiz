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

var par = document.createElement("p");
var startQuizBtn = document.createElement("button")


var score = 0;
var initials = document.getElementById("initials");


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
        question: 'What does the JavaScript "this" keyword refer to?',
        answers: ['The DOM', 'The current element', 'The next function', 'The object it belongs to'],
        correctAnswer: 'The object it belongs to'
    },
    {
        question: "Which is the correct syntax for JSON data?",
        answers: ['Data is in a string', 'Always use  the $ symbol', 'Data is in name/value pairs', 'Data is in an array'],
        correctAnswer: 'Data is in name/value pairs'
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

function init() {
    timerText.style.display = "none";
    headerElement.textContent = "Coding Quiz Challenge";
    headerElement.setAttribute("style", "font-weight:bold; font-size:180%");
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

//set up timer for quiz
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

//kicks off quiz with first question
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
                bottomP.setAttribute("style", "border-top: 2px dotted #666666; color: #666666");
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

//function for second through last question
function nextQuestion() {
    console.log('nextquestion');
    counter = counter + 1;
    console.log(counter);
    //stops quiz when questions have all been presented or there is no remaining time left
    if (counter >= allQuestions.length) {
        timerCount = 0;
    } else {
        //proceeds to show next question
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
        //add answer buttons
        for (var a = 0; a < answerButtons.length; a++) {
            answerButtons[a].addEventListener("click", function (event) {
                console.log(this.textContent);
                //increase score if correct answer chosen
                if (this.textContent === allQuestions[counter].correctAnswer) {
                    bottomP.textContent = "Correct!"
                    bottomP.setAttribute("style", "border-top: 2px dotted #666666; color: #666666");
                    score = score + 10;
                    setTimeout(function(){
                        bottomP.textContent = "";
                        bottomP.setAttribute("style", "border-top:none");
                    }, 2000); 
                //decrease remaining time if incorect answer chosen
                } else {
                    timerCount = timerCount - 10;
                    bottomP.textContent = "Incorrect";
                    bottomP.setAttribute("style", "border-top: 2px dotted #666666; color: #666666");
                    setTimeout(function(){
                        bottomP.textContent = "";
                        bottomP.setAttribute("style", "border-top:none");
                    }, 2000); 
                }
                console.log(score);
                //remove answer buttons prior to next question 
                for (var r = 0; r < answerButtons.length; r++) {
                    var remove = document.querySelector(".ansbutton-section");
                    remove.parentElement.removeChild(remove);
                }
                nextQuestion();
            })

        };
    }
}

//end of quiz, displays users final score and gives place to enter user initials
function calcScore() {
    headerElement.textContent = "All Done!";
    buttonContainer.style.display = "none";
    timerText.style.display = "none";
    timerElement.style.display = "none";
    initialsElement.style.display = "flex";
    console.log(score);
    topP.style.display = "flex";
    topP.textContent = "Your final score is " + score;
    console.log(initials);
    submitButton.addEventListener("click", function(event) {
        console.log(this.textContent);
        
        var allScores;



        console.log(localStorage.getItem("allScores"));
        //sets to empty array if nothing currently in local storage
         if (localStorage.getItem("allScores") === null) {
             allScores = [];
         }
        //if data in local storage, retrieves it, puts into object
         else {
             allScores = JSON.parse(localStorage.getItem("allScores"));
             console.log(allScores)};
        //puts new data into allScores 
        function saveAllScores (event) {
            event.preventDefault(event);

            var userScore = {
            score: score,
            initials: initials.value
            };

            allScores.push(userScore);
            //sorts user scores from highest to lowest
            allScores.sort( (a, b) => {
                return b.score - a.score;
            });
            //puts allScores back into string and into local storage
            localStorage.setItem("allScores", JSON.stringify(allScores));
            console.log(allScores);
        }
        saveAllScores(event);
        //sends user to highscores page
        location.href = "highscores.html";
    });
}




init();


startQuizBtn.addEventListener("click", startQuiz);



