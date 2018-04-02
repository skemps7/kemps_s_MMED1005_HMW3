(() => {
  console.log("Starship Troopers!!!");

  let playScreen = document.querySelector('.startScreen'),
  	  playButton = document.querySelector('#start'),
  	  //cards = document.querySelector('.card');

      content = document.querySelector('#gameplayArea'),
      imagePaths = ["images/cardFront.png",
                    "images/cardFront2.png",
                    "images/cardFront3.png",
                    "images/cardFront4.png",
                    "images/cardFront5.png"
                    ],
      list = document.createElement("ul");

console.log(imagePaths[0]);

 //run for loop to fill with <li> items
  for(var i=0; i<imagePaths.length; i++) {
    console.log(i);
    let random=Math.floor(Math.random()*i+1);

  //here we use innerHTML to write in images, using the values in the array
    list.innerHTML += `<li><section class="container"><div class="card">
             <img src="images/cardBack.png" class="front">
             <img src="${imagePaths[random]}" alt="card" class="back">
             </div></section></li>`
  
  //now that ul is filled with li and images append it to content div
  content.appendChild(list);
}

let cards = Array.from(document.querySelectorAll('.card'));





//function to reveal game play after clicking "play" on start screen
function beginGame(){
	playScreen.classList.add('showPiece');
}

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

//shuffle cards
// function shuffle (array) {
//   var i = 0
//     , j = 0
//     , temp = null
//     , cards = array

//   for (i = array.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1))
//     temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }



//begin Game
// function openGame(){
//   beginGame();
//   shuffle(cards);
// }

playButton.addEventListener('click', beginGame);
//cards.addEventListener('click', flipCard);
cards.forEach(card=>card.addEventListener('click', flipCard));
console.log(cards);

})();
