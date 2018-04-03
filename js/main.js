
  console.log("Starship Troopers!!!");

  let playScreen = document.querySelector('.startScreen'),
  	  playButton = document.querySelector('#start'),
      content = document.querySelector('#gameplayArea'),
      imagePaths = ["images/cardFront.png",
                    "images/cardFront2.png",
                    "images/cardFront3.png",
                    "images/cardFront4.png",
                    "images/cardFront5.png",
                    "images/cardFront.png",
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


//flip card back over
function removeFlip(){
  this.classList.remove('flipped');
}

//flip card
function flipCard(){
	this.classList.add('flipped');
}

  let flip = Array.from(document.querySelectorAll('img .flipped'));
  flip.push('.flipped');
  var len = flip.length;

  function match(){
      if(flip[0].src != flip[1].src){
      removeFlip(flip[0]);
      removeFlip(flip[1]);
      enable();
      flip = [];
    }
  }

function check(len){
  if(len===2){
    match();
  }
}

check(len);



// function matches(flip){
//   if(flip[0].src != flip[1].src){
//    removeFlip();
//    flip = [];
// }
// }

// matches(flip[0],flip[1]);


playButton.addEventListener('click', beginGame);
//cards.addEventListener('click', flipCard);
cards.forEach(card=>card.addEventListener('click', flipCard));



