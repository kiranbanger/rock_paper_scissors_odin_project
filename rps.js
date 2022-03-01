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
	
  let displayDiv = document.createElement('div');
  displayDiv.className = 'display';
  
  let displayComputerDiv = document.createElement('div');
  displayComputerDiv.id = 'computer-display-div';
  displayComputerDiv.textContent = 'Computer: ';
  
  displayDiv.append(displayComputerDiv);
  
  let resultsDivComputer = document.createElement('div');
  resultsDivComputer.id='computer-div';
  resultsDivComputer.innerHTML = 0;
  
  resultsDiv.append(resultsDivComputer);

  let displayPlayerDiv = document.createElement('div');
  displayPlayerDiv.id = 'player-display-div';
  displayPlayerDiv.textContent = 'Player: ';
  
  let resultsDivPlayer = document.createElement('div');
  resultsDivPlayer.id = 'player-div';
  resultsDivPlayer.innerHTML=0;
  
  displayDiv.append(displayPlayerDiv);
  
  resultsDiv.append(displayDiv);
  resultsDiv.append(resultsDivPlayer);
  
  document.querySelector('body').append(resultsDiv);  
  
  return
}

function updateResults(winner){
    document.querySelector(`#${winner}-div`).innerHTML = Number(document.querySelector(`#${winner}-div`).innerHTML)+1;
	
	return
}

function isGameOver(){
  let scores = document.querySelector('.results').children;
  
  if(Number(scores[0].innerHTML)===5 || Number(scores[1].innerHTML)===5){
	displayResults(scores);
	return true
  }
  return false
}

function displayResults(scores){
  console.log(scores);
  let winner = (Number(scores[0].innerHTML) === 5) ? 'computer':'player' ;
  
  let finalResultsDiv = document.createElement('div');
  finalResultsDiv.innerHTML=  `The ${winner} wins!`;
  document.querySelector('body').append(finalResultsDiv);
  
  return
}

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(b => console.log(b));

buttons.forEach(button => button.addEventListener('click', () =>
  {
    playRound(button.value, computerPlay())
  }))
  
document.body.addEventListener('mouseup', initializeResults());//when one of the three buttons is clicked, the initializeResults function should run