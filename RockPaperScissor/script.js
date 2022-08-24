function getComputerChoice() {
  const choices = document.querySelectorAll('.rpsButton')
  let randomSelection = Math.floor(Math.random()*choices.length)
  
  return `${choices[randomSelection].value}`
}

function getResult(playerChoice, computerChoice) {

  let score 

  if(playerChoice === computerChoice) {
    score = 0
  }else if(playerChoice === 'Rock' && computerChoice === 'Scissos'){
    score = 1
  }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
  }else{
    score = -1
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  switch(score){
    case '-1' : result.innerText = `You Lose!`
    break;
    case '-0' : result.innerText = `It's a draw`
    break;
    case '1' : result.innerText = `You Win!!`
    break;
  }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} VS 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value,computerChoice)
  showResult(score,playerChoice.value,computerChoice)
}


function playGame() {
  const choices = document.querySelectorAll('.rpsButton')
 choices.forEach(button => {
    button.onclick = () => onClickRPS(button)
  })
 let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}
function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}
playGame()
