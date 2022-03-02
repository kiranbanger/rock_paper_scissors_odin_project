function computerPlay(){
	
  choices = ['paper', 'rock', 'scissors']
  return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){	

  if(isGameOver()){return};
  
  let winner;
  
  if( (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper')){
	  winner = 'computer'
  } else if(playerSelection === computerSelection) {
	  return;
  } else {
	  winner = 'player' 
  }
  
  updateResults(winner);
  isGameOver();
  
  return winner
}

function initializeResults(){
  let resultsDiv = document.createElement('div');
  resultsDiv.className = 'results';
  
  competitorArr = ['computer','player'];
  
  competitorArr.forEach(competitor =>{
    let competitorDiv = document.createElement('div');
	competitorDiv.className = competitor;
	
	let displayCompetitorDiv = document.createElement('div');
	displayCompetitorDiv.className = 'display';
	
	let textDisplay = `${competitor} Score: `;
	displayCompetitorDiv.textContent = textDisplay[0].toUpperCase() + textDisplay.substring(1);
	
	let scoreCompetitorDiv = document.createElement('div');
	scoreCompetitorDiv.className = 'score';
	scoreCompetitorDiv.textContent = 0;
	
	competitorDiv.append(displayCompetitorDiv);
	competitorDiv.append(scoreCompetitorDiv);
	
	resultsDiv.append(competitorDiv);
  })
  
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
  let winner = (Number(scores[0].innerHTML) === 5) ? 'computer':'player' ;
  
  if(!(document.querySelector('#final-results'))){
    let finalResultsDiv = document.createElement('div');
    finalResultsDiv.id = 'final-results';
    finalResultsDiv.innerHTML=  `The ${winner} wins!`;
    document.querySelector('body').append(finalResultsDiv);
  }

  return
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => button.addEventListener('click', () =>
  {
    if(!(document.querySelector('.results'))){
	  initializeResults();
	}
	
    playRound(button.value, computerPlay())
  }))
  