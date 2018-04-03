(() => {
  console.log("Starship Troopers!!!");

  let playScreen = document.querySelector('.startScreen'),
  	  playButton = document.querySelector('#start'),
      content = document.querySelector('#gameplayArea'),
      imagePaths = ["images/cardFront.png",
                    "images/cardFront2.png",
                    "images/cardFront3.png",
                    "images/cardFront4.png",
                    "images/cardFront5.png"
                    ],
      list = document.createElement("ul");



//function to reveal game play after clicking "play" on start screen
function beginGame(){
	playScreen.classList.add('showPiece');
}


//shuffle cards
var i = imagePaths.length, j, temp;

while(--i >= 0){
    j = Math.floor(Math.random() * (i+1)); // Get random number ranging between 0 and i
    temp = imagePaths[j];
    imagePaths[j] = imagePaths[i];
    imagePaths[i] = temp;

console.log(imagePaths);

    list.innerHTML += `<li><section class="container"><div class="card">
             <img src="images/cardBack.png" class="front">
             <img src="${imagePaths[i]}" alt="card" class="back">
             </div></section></li>`
  }
  content.appendChild(list);



let cards = Array.from(document.querySelectorAll('.card'));

//timer
var sec = 0; function pad ( val ) { return val > 9 ? val : "0" + val; } setInterval( function(){
   document.getElementById("seconds").innerHTML=pad(++sec%60);
   document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10)); }, 1000);

//flip card
function flipCard(){
	this.classList.add('flipped');
}

//flip card back over
function removeFlip(){

	this.classList.remove('flipped');
}




// //begin Game
// function openGame(){
//   beginGame();
//   shuffle(imagePaths);
// }

playButton.addEventListener('click', beginGame);
//cards.addEventListener('click', flipCard);
cards.forEach(card=>card.addEventListener('click', flipCard));
console.log(cards);

})();
