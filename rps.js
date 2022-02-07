// function that generates the computer's choice
function computerPlay(){
  // return either rock, paper, or scissors
  choices = ['paper', 'rock', 'scissors']
  return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase()
  //console.log('PlayerSelection ' + playerSelection + ', computerSelection ' + computerSelection)
  let winner;
  
  if( (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper')){
	  winner = 'computer'
  } else {
	  winner = 'player' // 'ties' go to the player
  }
  return winner
}

function game(){
  let i = 0
  let winnerArray = [];
  
  while(i < 5){
    user_input = window.prompt('Enter your choice - rock, paper, or scissors', 'paper')
    result = playRound(user_input,computerPlay())
    winnerArray.push(result)
    i++
  }
  
  computerWins = winnerArray.filter(x => x == 'computer').length  // winner is the string that appears at least 3 times
  
  if(computerWins >= 3){
	  console.log('The computer is the winner')
  } else {console.log('The player is the winner.')}
}

game()