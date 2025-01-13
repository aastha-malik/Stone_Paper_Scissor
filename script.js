let userScore = 0;
let comptScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const compt_score = document.querySelector("#bot-score");

const drawGame = () => {
    console.log("DRAW GAME")
    msg.innerHTML = "DRAW!! Play Again";
    msg.style.background = "rgb(4, 5, 54)";

}

const comtChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];

}
const showWinner = (userWin) => {
    if (userWin){
        console.log("You Win!");
        userScore++;
        user_score.innerHTML = userScore;
        msg.innerHTML = "You Win!";
        msg.style.background = "green";
    }else{
        console.log("Computer Win");
        comptScore++;
        compt_score.innerHTML = comptScore;
        msg.innerHTML = "Computer Win!";
        msg.style.background = "red";

    }
};

const playGame  = (userChoice) => {
    console.log("userChoice = ", userChoice);
    // generate compt game
    const comptChoice = comtChoice();
    console.log("comptChoice = ", comptChoice );

    if (userChoice === comptChoice) {
        // Draw game
        drawGame()
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = comptChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            // scissor, rock
            userWin = comptChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            // rock , paper
            userWin = comptChoice === "rock" ? false: true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
