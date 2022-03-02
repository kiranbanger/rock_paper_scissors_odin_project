function computerPlay(){
	
  choices = ['paper', 'rock', 'scissors']
  return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){	

  if(isGameOver()){return};
  
  console.log('PlayerSelection: ' + playerSelection + ', computerSelection: ' + computerSelection)
  let winner;
  
  if( (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper')){
	  winner = 'computer'
  } else if(playerSelection === computerSelection) {
	  return;
  } else {
	  winner = 'player' 
  }
  
  updateResults(winner);
  
  return winner
}

function initializeResults(){
  let resultsDiv = document.createElement('div');
  resultsDiv.className = 'results';
	
  let computerDiv = document.createElement('div');
  computerDiv.className = 'computer';
  
  let displayComputerDiv = document.createElement('div');
  displayComputerDiv.className = 'display';
  displayComputerDiv.textContent = 'Computer Score: ';

  let scoreComputerDiv = document.createElement('div');
  scoreComputerDiv.className = 'score';
  scoreComputerDiv.textContent = 0;
  
  computerDiv.append(displayComputerDiv);
  computerDiv.append(scoreComputerDiv);
  
  resultsDiv.append(computerDiv);
  
  let playerDiv = document.createElement('div');
  playerDiv.className = 'player';
  
  let displayPlayerDiv = document.createElement('div');
  displayPlayerDiv.className = 'display';
  displayPlayerDiv.textContent = 'Player Score: ';

  let scorePlayerDiv = document.createElement('div');
  scorePlayerDiv.className = 'score';
  scorePlayerDiv.textContent = 0;
  
  playerDiv.append(displayPlayerDiv);
  playerDiv.append(scorePlayerDiv);
  
  resultsDiv.append(playerDiv);
  
  document.querySelector('body').append(resultsDiv);  
  
  return
}

function updateResults(winner){
    document.querySelector(`.${winner} .score`).textContent = Number(document.querySelector(`.${winner} .score`).textContent)+1;
	
	return
}

function isGameOver(){
  let scores = document.querySelectorAll('.results .score');
  
  if(Number(scores[0].textContent)===5 || Number(scores[1].textContent)===5){
	displayResults(scores);
	return true
  }
  return false
}

function displayResults(scores){
  console.log(scores);
  let winner = (Number(scores[0].innerHTML) === 5) ? 'computer':'player' ;
  
  let finalResultsDiv = document.createElement('div');
  finalResultsDiv.id = 'final-results';
  finalResultsDiv.innerHTML=  `The ${winner} wins!`;
  document.querySelector('body').append(finalResultsDiv);
  
  return
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => button.addEventListener('click', () =>
  {
    playRound(button.value, computerPlay())
  }))
  
document.body.addEventListener('click', initializeResults());//when one of the three buttons is clicked, the initializeResults function should run