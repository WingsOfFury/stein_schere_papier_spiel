function getRandomComputerResult() {
  const options = ["Stein", "Papier", "Schere"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Stein" && computer === "Schere") ||
    (player === "Schere" && computer === "Papier") ||
    (player === "Papier" && computer === "Stein")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Spieler gewinnt! ${userOption} schlägt ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Unentschieden! Beide wählten ${userOption}`;
  } else {
    computerScore++;
    return `Computer hat gewonnen! ${computerResult} schlägt ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } hat das Spiel gewonnen!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "hidden";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Stein");
});

paperBtn.addEventListener("click", function () {
  showResults("Papier");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Schere");
});
