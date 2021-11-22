//BUILDING THE NORMAL DECK
function deckBuilding() {
  const cardsDeck = [];
  for (let i = 0; i < 10; i++) {
    cardsDeck.push({
      CardColor: "BLUE",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Blue_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "RED",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Red_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "GREEN",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Green_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "YELLOW",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Yellow_${i}.jpg`,
    });
  }
  for (let i = 1; i < 10; i++) {
    cardsDeck.push({
      CardColor: "BLUE",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Blue_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "RED",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Red_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "GREEN",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Green_${i}.jpg`,
    });
    cardsDeck.push({
      CardColor: "YELLOW",
      CardType: "NORMAL",
      CardName: i,
      ImgURL: `./assets/UNO CARDS/Yellow_${i}.jpg`,
    });
  }
  for (let i = 0; i < 2; i++) {
    cardsDeck.push({
      CardColor: "BLUE",
      CardType: "SPECIAL",
      CardName: "SKIP",
      ImgURL: `./assets/UNO CARDS/Blue_Skip.jpg`,
    });
    cardsDeck.push({
      CardColor: "RED",
      CardType: "SPECIAL",
      CardName: "SKIP",
      ImgURL: `./assets/UNO CARDS/Red_Skip.jpg`,
    });
    cardsDeck.push({
      CardColor: "GREEN",
      CardType: "SPECIAL",
      CardName: "SKIP",
      ImgURL: `./assets/UNO CARDS/Green_Skip.jpg`,
    });
    cardsDeck.push({
      CardColor: "YELLOW",
      CardType: "SPECIAL",
      CardName: "SKIP",
      ImgURL: `./assets/UNO CARDS/Yellow_Skip.jpg`,
    });
    cardsDeck.push({
      CardColor: "BLUE",
      CardType: "SPECIAL",
      CardName: "REVERSE",
      ImgURL: `./assets/UNO CARDS/Blue_Reverse.jpg`,
    });
    cardsDeck.push({
      CardColor: "RED",
      CardType: "SPECIAL",
      CardName: "REVERSE",
      ImgURL: `./assets/UNO CARDS/Red_Reverse.jpg`,
    });
    cardsDeck.push({
      CardColor: "GREEN",
      CardType: "SPECIAL",
      CardName: "REVERSE",
      ImgURL: `./assets/UNO CARDS/Green_Reverse.jpg`,
    });
    cardsDeck.push({
      CardColor: "YELLOW",
      CardType: "SPECIAL",
      CardName: "REVERSE",
      ImgURL: `./assets/UNO CARDS/Yellow_Reverse.jpg`,
    });
    cardsDeck.push({
      CardColor: "BLUE",
      CardType: "SPECIAL",
      CardName: "DRAW TWO",
      ImgURL: `./assets/UNO CARDS/Blue_Draw_2.jpg`,
    });
    cardsDeck.push({
      CardColor: "RED",
      CardType: "SPECIAL",
      CardName: "DRAW TWO",
      ImgURL: `./assets/UNO CARDS/Red_Draw_2.jpg`,
    });
    cardsDeck.push({
      CardColor: "GREEN",
      CardType: "SPECIAL",
      CardName: "DRAW TWO",
      ImgURL: `./assets/UNO CARDS/Green_Draw_2.jpg`,
    });
    cardsDeck.push({
      CardColor: "YELLOW",
      CardType: "SPECIAL",
      CardName: "DRAW TWO",
      ImgURL: `./assets/UNO CARDS/Yellow_Draw_2.jpg`,
    });
  }
  for (let i = 0; i < 4; i++) {
    cardsDeck.push({
      CardColor: "BLACK",
      CardType: "SPECIAL",
      CardName: "WILD",
      ImgURL: `./assets/UNO CARDS/Wild.jpg`,
    });
    cardsDeck.push({
      CardColor: "BLACK",
      CardType: "SPECIAL",
      CardName: "WILD DRAW FOUR",
      ImgURL: `./assets/UNO CARDS/Wild_Draw_4.jpg`,
    });
  }
  return cardsDeck;
}

//MIXING THE DECK
function mixing(deck) {
  let deckShrinklength = deck.length;
  let mixedDeck = [];
  let cardsToMix = deck.slice();
  for (let i = 0; i < deck.length; i++) {
    let randomNum = Math.random() * (deckShrinklength - 0) + 0;
    mixedDeck.push(cardsToMix.splice(randomNum, 1)[0]);
    deckShrinklength--;
  }
  return mixedDeck;
}

//DISTRIBUTING CARDS FROM THE MIXED DECK
function distributingCards(mixedDeck) {
  let computer = [],
    player = [];
  for (let i = 0; i < 7; i++) {
    computer.push(mixedDeck.shift());
    player.push(mixedDeck.shift());
  }
  return [mixedDeck, computer, player];
}
//PICK 1 CARD FROM THE MIXED DECK TO START THE PLAY
function cardToStart(mixedDeck) {
  let pickedCard = mixedDeck.shift();
  if (pickedCard.CardType === "NORMAL") {
    return [mixedDeck, pickedCard];
  } else {
    mixedDeck.unshift(pickedCard);
    mixedDeck = mixing(mixedDeck);
    return cardToStart(mixedDeck);
  }
}
//MINUS CARD FROM A PLAYER's CARDS
function minusCard(player, cardOfPlayer) {
  let Cards = "";
  if (player === 0) {
    Cards = computerCards;
  } else Cards = playerCards;

  let index = Cards.findIndex(
    (el) =>
      el.CardColor === cardOfPlayer.CardColor &&
      el.CardName === cardOfPlayer.CardName
  );
  Cards.splice(index, 1);
}
//ADD CARD TO A PLAYER's CARDS
function addCard(player, noOfCards) {
  let Cards = "";
  if (player === 0) {
    Cards = computerCards;
  } else Cards = playerCards;

  for (i = 0; i < noOfCards; i++) {
    let remainingDeckCard = remainingDeck.shift();
    Cards.push(remainingDeckCard);
  }
}
//SELECTION FROM COMPUTER THAT WHICH CARD TO TAKE FROM HIS DECK
function computerSelection() {
  let computerSelectedCard;
  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].CardName === "WILD DRAW FOUR") {
      computerSelectedCard = computerCards[i];
      console.log("computerSelectedCard: ", computerSelectedCard);
      return gameLogic(computerSelectedCard);
    }
  }
  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].CardName === "WILD") {
      computerSelectedCard = computerCards[i];
      console.log("computerSelectedCard: ", computerSelectedCard);
      return gameLogic(computerSelectedCard);
    }
  }
  if (currentCard.CardType === "SPECIAL") {
    for (let i = 0; i < computerCards.length; i++) {
      if (computerCards[i].CardName === currentCard.CardName) {
        computerSelectedCard = computerCards[i];
        console.log("computerSelectedCard: ", computerSelectedCard);
        return gameLogic(computerSelectedCard);
      }
    }
  }
  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].CardColor === currentCard.CardColor) {
      computerSelectedCard = computerCards[i];
      console.log("computerSelectedCard: ", computerSelectedCard);
      return gameLogic(computerSelectedCard);
    }
  }
  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].CardName === currentCard.CardName) {
      computerSelectedCard = computerCards[i];
      console.log("computerSelectedCard: ", computerSelectedCard);
      return gameLogic(computerSelectedCard);
    }
  }
  addCard(currentTurn, 1);
  console.log("COMPUTER HAD PICKED THE CARD");
  const card = computerCards[computerCards.length - 1];
  if (
    card.CardColor === currentCard.CardColor ||
    card.CardName === currentCard.CardName ||
    card.CardColor === "BLACK"
  ) {
    computerSelectedCard = card;
    return gameLogic(computerSelectedCard);
  } else {
    currentTurn = 1;
    renderScreen();
  }
}
//FINDING THE MAXIMUM nos OF CARD PRESENT IN COMPUTER's DECK
function MaximumColor() {
  let noOfRed = (noOfBlue = noOfGreen = noOfYellow = 0);
  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].CardColor === "RED") noOfRed++;
    else if (computerCards[i].CardColor === "BLUE") noOfBlue++;
    else if (computerCards[i].CardColor === "GREEN") noOfGreen++;
    else if (computerCards[i].CardColor === "YELLOW") noOfYellow++;
  }
  if (noOfRed > noOfBlue && noOfRed > noOfGreen && noOfRed > noOfYellow)
    return "RED";
  else if (noOfBlue > noOfRed && noOfBlue > noOfGreen && noOfBlue > noOfYellow)
    return "BLUE";
  else if (
    noOfGreen > noOfRed &&
    noOfGreen > noOfBlue &&
    noOfGreen > noOfYellow
  )
    return "GREEN";
  else if (
    noOfYellow > noOfRed &&
    noOfYellow > noOfGreen &&
    noOfYellow > noOfBlue
  )
    return "YELLOW";
  else if (noOfRed === noOfBlue) return "RED";
  else if (noOfRed === noOfGreen) return "RED";
  else if (noOfRed === noOfYellow) return "RED";
  else if (noOfBlue === noOfGreen) return "BLUE";
  else if (noOfBlue === noOfYellow) return "BLUE";
  else if (noOfGreen === noOfYellow) return "YELLOW";
}
//COLOR SELECTION BY PLAYER
function clickOnColor(color) {
  let currentColor = document.querySelector(":root");
  if (color === "red") {
    currentCard.CardColor = "RED";
    currentColor.style.setProperty("--currentcolor", "red");
    document.getElementById("colorModal").style.display = "none";
  } else if (color === "blue") {
    currentCard.CardColor = "BLUE";
    currentColor.style.setProperty("--currentcolor", "blue");
    document.getElementById("colorModal").style.display = "none";
  } else if (color === "green") {
    currentCard.CardColor = "GREEN";
    currentColor.style.setProperty("--currentcolor", "green");
    document.getElementById("colorModal").style.display = "none";
  } else {
    currentCard.CardColor = "YELLOW";
    currentColor.style.setProperty("--currentcolor", "yellow");
    document.getElementById("colorModal").style.display = "none";
  }
  currentTurn = 0;
  renderScreen();
}
//GAMELOGIC OF THE WHOLE GAME TO WHAT TO DO WITH THE PICKED CARD
function gameLogic(selectedCard) {
  let opponent;
  if (currentTurn === 0) {
    opponent = 1;
  } else opponent = 0;
  if (selectedCard.CardName === "WILD DRAW FOUR") {
    addCard(opponent, 4);
    minusCard(currentTurn, selectedCard);
    currentCard = selectedCard;
    if (currentTurn === 0) {
      currentCard.CardColor = MaximumColor();
      currentTurn = opponent;
      renderScreen();
    } else {
      document.getElementById("colorModal").style.display = "unset";
    }
    renderScreen();
  } else if (selectedCard.CardName === "WILD") {
    minusCard(currentTurn, selectedCard);
    currentCard = selectedCard;
    if (currentTurn === 0) {
      currentCard.CardColor = MaximumColor();
      currentTurn = opponent;
      renderScreen();
    } else {
      document.getElementById("colorModal").style.display = "unset";
    }
  } else if (
    selectedCard.CardName === "SKIP" ||
    selectedCard.CardName === "REVERSE"
  ) {
    minusCard(currentTurn, selectedCard);
    currentCard = selectedCard;
    renderScreen();
  } else if (selectedCard.CardName === "DRAW TWO") {
    addCard(opponent, 2);
    minusCard(currentTurn, selectedCard);
    currentCard = selectedCard;
    currentTurn = opponent;
    renderScreen();
  } else if (selectedCard.CardType === "NORMAL") {
    minusCard(currentTurn, selectedCard);
    currentCard = selectedCard;
    currentTurn = opponent;
    renderScreen();
  } else {
    currentTurn = 0;
    return false;
  }
}
//CONDITION CHECK WHEN PLAYER CLICKS HIS CARD
function clickOnCard(cardClicked) {
  if (currentTurn === 1) {
    if (
      cardClicked.CardColor === currentCard.CardColor ||
      cardClicked.CardName === currentCard.CardName ||
      cardClicked.CardColor === "BLACK"
    ) {
      gameLogic(cardClicked);
    } else if (cardClicked === "remainingDeck") {
      addCard(currentTurn, 1);
      const card = playerCards[playerCards.length - 1];
      console.log(card);
      if (
        card.CardColor === currentCard.CardColor ||
        card.CardName === currentCard.CardName ||
        card.CardColor === "BLACK"
      ) {
        renderScreen(false);
      } else {
        currentTurn = 0;
        renderScreen();
      }
    }
  }
}
//COUNTING OF SCORE OF THE WINNING PLAYER
function countScore(arr) {
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].CardType === "SPECIAL") {
      if (arr[i].CardColor === "BLACK") {
        score += 50;
      } else score += 20;
    } else if (arr[i].CardType === "NORMAL") {
      score += arr[i].CardName;
    }
  }
  return score;
}
//AFTER COMPLETION OF A ROUND
function roundOver() {
  computerScore = computerScore + countScore(playerCards);
  playerScore = playerScore + countScore(computerCards);
  if (scoring === "On") {
    if (computerScore >= scoreLimit || playerScore >= scoreLimit) {
      document.getElementById("gameoverContainer").style.display = "unset";
      if (computerScore >= scoreLimit) {
        computerScore = 0;
        document.getElementById("winningImage").src = "./assets/lost.gif";
        document.getElementById("winningImage").style.width = "17vw";
        document.getElementById("winningPlayer").innerHTML = "COMPUTER WINS";
        document.getElementById("gameOverButton").innerHTML = "PLAY AGAIN";
      } else if (playerScore >= scoreLimit) {
        playerScore = 0;
        document.getElementById("winningPlayer").innerHTML = "YOU WIN";
      }
    } else {
      let computerScoreInnerHtml = "";
      let playerScoreInnerHtml = "";
      computerScoreInnerHtml += computerScore;
      playerScoreInnerHtml += playerScore;
      document.getElementById("computerScore").innerHTML =
        computerScoreInnerHtml;
      document.getElementById("playerScore").innerHTML = playerScoreInnerHtml;
      document.getElementById("scoreContainer").style.display = "unset";
    }
  } else if (scoring === "Off") {
    document.getElementById("gameoverContainer").style.display = "unset";
    if (computerCards.length === 0) {
      computerScore = 0;
      document.getElementById("winningImage").src = "./assets/lost.gif";
      document.getElementById("winningImage").style.width = "17vw";
      document.getElementById("winningPlayer").innerHTML = "COMPUTER WINS";
    } else if (playerCards.length === 0) {
      playerScore = 0;
      document.getElementById("winningPlayer").innerHTML = "YOU WIN";
    }
  }
}
//AFTER A TURN CHANGE
function turnSwitchEffect() {
  let computerTurn = document.getElementById("computerCards");
  let playerTurn = document.getElementById("playerCards");
  let audio = document.getElementById("turnSwitch");
  if (sound === "On") {
    audio.load();
  }
  if (currentTurn === 0) {
    computerTurn.style.borderImageSlice = "1";
    playerTurn.style.borderImageSlice = "0";
    if (sound === "On") {
      audio.play();
    }
  } else if (currentTurn === 1) {
    playerTurn.style.borderImageSlice = "1";
    computerTurn.style.borderImageSlice = "0";
    if (sound === "On") {
      audio.play();
    }
  }
}
//RENDERING SCREEN
function renderScreen(deckClickable = true) {
  console.log("current Card: ", currentCard);
  console.log("currentTurn: ", currentTurn);
  if (computerCards.length === 0 || playerCards.length === 0) {
    roundOver();
  } else {
    let computerInnerHtml = "";
    let playerInnerHtml = "";
    let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
    let remainingDeckInnerHtml = `<div onclick=${
      deckClickable ? "clickOnCard('remainingDeck')" : ""
    }><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    for (let i = 0; i < computerCards.length; i++) {
      computerInnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < playerCards.length; i++) {
      playerInnerHtml += `<div id="no${i}Player" onclick="clickOnCard(playerCards[${i}])"><img src="${playerCards[i].ImgURL}" class= "cardsstyle" onmouseover="this.style.boxShadow='0 0 20px #999999'" onmouseleave="this.style.boxShadow='0 0 0'"/></div>`;
    }
    document.getElementById("computerCards").innerHTML = computerInnerHtml;
    document.getElementById("playerCards").innerHTML = playerInnerHtml;
    document.getElementById("RemainingDeckArea").innerHTML =
      remainingDeckInnerHtml;
    document.getElementById("mainPlayArea").innerHTML = playAreaInnerHtml;
    let currentColor = document.querySelector(":root");
    currentColor.style.setProperty("--currentcolor", currentCard.CardColor);

    turnSwitchEffect();
    if (currentTurn === 0) {
      setTimeout(computerSelection, 1700);
    }
  }
}
//AFTER A ROUND COMPLETES
function newRound() {
  document.getElementById("scoreContainer").style.display = "none";
  newGame();
}
//STARTING THE NEW GAME
function newGame() {
  mixedDeck = mixing(cardsDeck);
  distributedCards = distributingCards(mixedDeck);
  computerCards = distributedCards[1];
  console.log("computerCards: ", computerCards);
  playerCards = distributedCards[2];
  console.log("playerCards: ", playerCards);
  remainingDeck = distributedCards[0];
  currentCardPick = cardToStart(remainingDeck);
  currentCard = currentCardPick[1];
  remainingDeck = currentCardPick[0];
  scoring = localStorage.getItem("scoring");
  sound = localStorage.getItem("sound");
  scoreLimit = localStorage.getItem("ScoreLimit");
  scoreLimit = JSON.parse(scoreLimit);
  document.getElementById("startGame").style.display = "none";
  renderScreen();
}
const cardsDeck = deckBuilding();
let mixedDeck;
let distributedCards;
let computerCards;
let playerCards;
let remainingDeck;
let currentCardPick;
let currentCard;
let currentTurn = 0;
let scoreLimit;
let computerScore = 0;
let playerScore = 0;
let scoring = "On";
let sound = "On";
let randomNum = Math.floor(Math.random() * (2 - 0) + 0);
currentTurn = randomNum;
document.documentElement.style.setProperty(
  "--theme-bg-color",
  localStorage.getItem("backgroundColor")
);
document.documentElement.style.setProperty(
  "--theme-box-color",
  localStorage.getItem("boxColor")
);
document.documentElement.style.setProperty(
  "--theme-buttons-color",
  localStorage.getItem("buttonColor")
);
let tossWinner;
if (currentTurn === 0) {
  tossWinner = "COMPUTER";
} else if (currentTurn === 1) {
  tossWinner = "YOU";
}
document.getElementById("toss").innerHTML = `${tossWinner} WON THE TOSS`;
