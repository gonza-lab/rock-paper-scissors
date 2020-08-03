function changeScoreBoard(id) {
  const score = document.getElementById(id);
  score.textContent = parseInt(score.textContent) + 1;
}

function getRandomInt(maxNum) {
  return Math.floor(Math.random() * Math.floor(maxNum));
}

function changeVisible(player, img) {
  const rock = document.getElementById(`img-rock-${player}`);
  const paper = document.getElementById(`img-paper-${player}`);
  const scissor = document.getElementById(`img-scissor-${player}`);

  if (img == "rock") {
    rock.classList.value = "visible";
    paper.classList.value = "non-visible";
    scissor.classList.value = "non-visible";
  } else if (img == "paper") {
    rock.classList.value = "non-visible";
    paper.classList.value = "visible";
    scissor.classList.value = "non-visible";
  } else {
    rock.classList.value = "non-visible";
    paper.classList.value = "non-visible";
    scissor.classList.value = "visible";
  }

  console.log(rock.classList.value, paper.classList.value, scissor.classList.value);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else if (playerSelection == computerSelection) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function computerPlay() {
  let computerSelection = getRandomInt(3);

  if (computerSelection == 0) {
    computerSelection = "rock";
  } else if (computerSelection == 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let electionPlayer = event.target.id.substring(4);
    changeVisible("player", electionPlayer);

    let electionIA = computerPlay();
    changeVisible("ia", electionIA);

    let winner = playRound(electionPlayer, electionIA);

    if (winner == "Player") {
      changeScoreBoard("winsPlayer");
    } else if (winner == "Computer") {
      changeScoreBoard("winsIA");
    } else {
      changeScoreBoard("ties");
    }

    changeScoreBoard("round");
  });
});
