
  console.log("Starship Troopers!!!");

  let playScreen = document.querySelector('.startScreen'),
  	  playButton = document.querySelector('#start'),
      content = document.querySelector('#gameplayArea'),
      imagePaths = ['images/cardFront.png',
                    'images/cardFront2.png',
                    'images/cardFront3.png',
                    'images/cardFront4.png',
                    'images/cardFront5.png',
                    'images/cardFront.png',
                    'images/cardFront2.png',
                    'images/cardFront3.png',
                    'images/cardFront4.png',
                    'images/cardFront5.png'
                    ],
      list = document.createElement("ul"),
      flip = [],
      len = flip.length;

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
    //add each index to the cards list
    list.innerHTML += `<li><section class="container"><div class="card" data-card="${i}">
             <img src="images/cardBack.png" class="front">
             <img src="${imagePaths[i]}" alt="card" class="back">
             </div></section></li>`
  }
  //add list to content section
  content.appendChild(list);

//create array of cards
let cards = Array.from(document.querySelectorAll('.card'));


//timer
var sec = 0; function pad ( val ) { return val > 9 ? val : "0" + val; } setInterval( function(){
   document.getElementById("seconds").innerHTML=pad(++sec%60);
   document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10)); }, 1000);

//flip card
function flipCard(){
  this.classList.add('flipped');
  flip.push(this);//create array of flipped cards
}

//flip card back over
function removeFlip(){
  this.classList.remove('flipped');
}

//   function match(card1, card2){
//     if(len===2){
//       if(card1.src === card2.src){
//       flip = [];
//       return;
//     }else{
//       card1.classList.remove('flipped');
//       card2.classList.remove('flipped');
//       flip=[];
//     }
//   }else{ return; }
// }

  function match(){
  if(flip.length===2){
    var card1 = Array.from(document.querySelectorAll('.flipped images.src'));
    if(card1[0]===card1[1]){
      flip=[];
    }else{
      card1[0].classList.remove('flipped');
      card1[1].classList.remove('flipped');
      card1=[];
    }
    }
  }


playButton.addEventListener('click', beginGame);
//cards.addEventListener('click', flipCard);
cards.forEach(card=>card.addEventListener('click', flipCard));
// cards.forEach(card=>card.addEventListener('transitionend', match(flip[0], flip[1])));




