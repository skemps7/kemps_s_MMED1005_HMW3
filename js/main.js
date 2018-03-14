(() => {
  console.log("Starship Troopers!!!");

  let playScreen = document.querySelector('.startScreen'),
  	  playButton = document.querySelector('#start'),
  	  //cards = document.querySelector('.card');
  	  cards = Array.from(document.querySelectorAll('.card'));


//function to reveal game play after clicking "play" on start screen
function beginGame(){
	playScreen.classList.add('showPiece');
}

//flip card
function flipCard(){
	this.classList.add('flipped');
}

//flip card back over
function removeFlip(){
	
	this.classList.remove('flipped');
}


playButton.addEventListener('click', beginGame);
//cards.addEventListener('click', flipCard);
cards.forEach(card=>card.addEventListener('click', flipCard));


})();
