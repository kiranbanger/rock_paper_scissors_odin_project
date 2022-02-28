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
  
  let resultsDivComputer = document.createElement('div');
  resultsDivComputer.id='computer-div';
  resultsDivComputer.innerHTML = 0;

  
  let resultsDivPlayer = document.createElement('div');
  resultsDivPlayer.id = 'player-div';
  resultsDivPlayer.innerHTML=0;
  
  resultsDiv.append(resultsDivComputer);
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

const rockBtn = document.getElementById('rock-btn');
rockBtn.addEventListener('click', ()=> {playRound(rockBtn.value, computerPlay() )});

const paperBtn = document.getElementById('paper-btn');
paperBtn.addEventListener('click', ()=> {playRound(paperBtn.value, computerPlay() )});

const scissorsBtn = document.getElementById('scissors-btn');
scissorsBtn.addEventListener('click', ()=> {playRound(scissorsBtn.value, computerPlay() )});

document.body.addEventListener('click', initializeResults());//when one of the three buttons is clicked, the initializeResults function should run

//const buttons = document.getElementsByClassName('buttons');
//console.log(buttons);
