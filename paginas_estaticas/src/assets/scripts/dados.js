var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');
var elDiceThree       = document.getElementById('dice3');


elComeOut.onclick   = function () {rollDice();};

function rollDice() {


  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var diceThree   = Math.floor((Math.random() * 6) + 1);
 
  console.log(diceOne + ' ' + diceTwo);

  for (let i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (let k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  }

  for (var j = 1; j <= 6; j++) {
    elDiceThree.classList.remove('show-' + j);
    if (diceThree === j) {
      elDiceThree.classList.add('show-' + j);
    }
  }
  setTimeout(rollDice(), 1000);
}