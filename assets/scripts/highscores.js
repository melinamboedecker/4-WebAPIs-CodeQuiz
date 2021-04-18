var listofscores = document.getElementById("listofscores");
var allScores = JSON.parse(localStorage.getItem("allScores")) || [];

console.log(allScores);

allScores.map(score => {
    console.log(score);
});

listofscores.innerHTML = allScores.map(score => {
    return `<li class="high-score">${score.initials}-${score.score}</li>`;
}).join("");


// listofscores.innerHTML = 
//     allScores
//         .map(score => {
//             return <li class="high-scores">${score.initials}-${score.score}</li>
//         })
//         .join("");



// var userScore = JSON.parse(localStorage.getItem("allScores"));
// console.log(userScore);

// li.textContent = userScore.initials + " - " + userScore.score;
// console.log(li);



// orderedList.appendChild(li);



