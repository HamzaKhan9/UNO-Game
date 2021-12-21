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
function distributingCards(mixedDeck) {
  let player1 = [],
    player2 = [];
  for (let i = 0; i < 7; i++) {
    player1.push(mixedDeck.shift());
    player2.push(mixedDeck.shift());
  }
  return [mixedDeck, player1, player2];
}
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
function startingScreen() {
  turnSwitchEffect();
  let player1InnerHtml = "";
  let player2InnerHtml = "";
  let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
  let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/>`;
  for (let i = 0; i < player1Cards.length; i++) {
    player1InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    player2InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
  }
  document.getElementById("player1Cards").innerHTML = player1InnerHtml;
  document.getElementById("player2Cards").innerHTML = player2InnerHtml;
  document.getElementById("RemainingDeckArea").innerHTML =
    remainingDeckInnerHtml;
  document.getElementById("mainPlayArea").innerHTML = playAreaInnerHtml;
  let currentColor = document.querySelector(":root");
  currentColor.style.setProperty("--currentcolor", currentCard.CardColor);
}
function minusCard(player, cardOfPlayer) {
  let playerCards = "";
  if (player === 1) {
    playerCards = player1Cards;
  } else if (player === 2) {
    playerCards = player2Cards;
  }
  let index = playerCards.findIndex(
    (el) =>
      el.CardColor === cardOfPlayer.CardColor &&
      el.CardName === cardOfPlayer.CardName
  );
  playerCards.splice(index, 1);
}
function addCard(player, noOfCards) {
  let playerCards = "";
  if (player === 1) {
    playerCards = player1Cards;
  } else if (player === 2) {
    playerCards = player2Cards;
  }
  for (i = 0; i < noOfCards; i++) {
    let remainingDeckCard = remainingDeck.shift();
    playerCards.push(remainingDeckCard);
  }
}
function turnSwitchEffect() {
  let player1Turn = document.getElementById("player1Cards");
  let player2Turn = document.getElementById("player2Cards");
  let audio = document.getElementById("turnSwitch");
  if (currentTurn === 1) {
    player1Turn.style.borderImageSlice = "1";
    player2Turn.style.borderImageSlice = "0";
    if (sound === "On") {
      audio.play();
    }
  } else if (currentTurn === 2) {
    player2Turn.style.borderImageSlice = "1";
    player1Turn.style.borderImageSlice = "0";
    if (sound === "On") {
      audio.play();
    }
  }
}
function clickOnCard(playerTurn, cardOfPlayer) {
  if (playerTurn === 1) {
    let checker = conditionCheck(cardOfPlayer);
    if (checker[0] === true) {
      currentCard = cardOfPlayer;
      minusCard(playerTurn, cardOfPlayer);
      if (checker[1] === "SKIP") {
        currentTurn = 1;
        revealPlayerCards(1);
      } else if (checker[1] === "DRAW TWO") {
        addCard(2, 2);
        currentTurn = 2;
        revealPlayerCards(null);
      } else if (checker[1] === "WILD") {
        document.getElementById("colorModal").style.display = "unset";
        currentTurn = 2;
        revealPlayerCards(null);
      } else if (checker[1] === "WILD DRAW FOUR") {
        addCard(2, 4);
        document.getElementById("colorModal").style.display = "unset";
        currentTurn = 1;
        revealPlayerCards(1);
      } else {
        currentTurn = 2;
        revealPlayerCards(null);
      }
    } else if (checker === "remainingDeck") {
      addCard(playerTurn, 1);
      const card = player1Cards[player1Cards.length - 1];
      const res = conditionCheck(card);
      if (res === "remainingDeck" || res[0] === false) {
        currentTurn = 2;
        revealPlayerCards(null);
      } else {
        currentTurn = 1;
        revealPlayerCards(1);
      }
    }
  }

  if (playerTurn === 2) {
    let checker = conditionCheck(cardOfPlayer);
    if (checker[0] === true) {
      currentCard = cardOfPlayer;
      minusCard(playerTurn, cardOfPlayer);
      if (checker[1] === "SKIP") {
        currentTurn = 2;
        revealPlayerCards(2);
      } else if (checker[1] === "DRAW TWO") {
        addCard(1, 2);
        currentTurn = 1;
        revealPlayerCards(null);
      } else if (checker[1] === "WILD") {
        document.getElementById("colorModal").style.display = "unset";
        currentTurn = 1;
        revealPlayerCards(null);
      } else if (checker[1] === "WILD DRAW FOUR") {
        addCard(1, 4);
        document.getElementById("colorModal").style.display = "unset";
        currentTurn = 2;
        revealPlayerCards(2);
      } else {
        currentTurn = 1;
        revealPlayerCards(null);
      }
    } else if (checker === "remainingDeck") {
      addCard(playerTurn, 1);
      const card = player2Cards[player2Cards.length - 1];
      const res = conditionCheck(card);
      if (res === "remainingDeck" || res[0] === false) {
        currentTurn = 1;
        revealPlayerCards(null);
      } else {
        currentTurn = 2;
        revealPlayerCards(2);
      }
    }
  }
}
function revealPlayerCards(playerTurn) {
  if (playerTurn === null) {
    console.log(scoreLimit);
    if (player1Cards.length === 0 || player2Cards.length === 0) {
      player1Score = player1Score + countScore(player2Cards);
      player2Score = player2Score + countScore(player1Cards);
      if (player1Score >= scoreLimit || player2Score >= scoreLimit) {
        document.getElementById("gameoverContainer").style.display = "unset";
        if (player1Score >= scoreLimit) {
          document.getElementById("winningPlayer").innerHTML = "PLAYER 1 WINS";
        } else {
          document.getElementById("winningPlayer").innerHTML = "PLAYER 2 WINS";
        }
      } else {
        let player1ScoreInnerHtml = "";
        let player2ScoreInnerHtml = "";
        player1ScoreInnerHtml += `${player1Score}`;
        player2ScoreInnerHtml += `${player2Score}`;
        document.getElementById("player1Score").innerHTML =
          player1ScoreInnerHtml;
        document.getElementById("player2Score").innerHTML =
          player2ScoreInnerHtml;
        document.getElementById("scoreContainer").style.display = "unset";
      }
    }
    turnSwitchEffect();
    let player1InnerHtml = "";
    let player2InnerHtml = "";
    let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
    let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/>`;
    for (let i = 0; i < player1Cards.length; i++) {
      player1InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < player2Cards.length; i++) {
      player2InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    }
    document.getElementById("player1Cards").innerHTML = player1InnerHtml;
    document.getElementById("player2Cards").innerHTML = player2InnerHtml;
    document.getElementById("RemainingDeckArea").innerHTML =
      remainingDeckInnerHtml;
    document.getElementById("mainPlayArea").innerHTML = playAreaInnerHtml;
    let currentColor = document.querySelector(":root");
    currentColor.style.setProperty("--currentcolor", currentCard.CardColor);
  }
  if (playerTurn === 1) {
    let player1InnerHtml = "";
    let player2InnerHtml = "";
    let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
    let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle" onclick="clickOnCard(${playerTurn},0)" onmouseover="this.style.boxShadow='0 0 20px #999999'" onmouseleave="this.style.boxShadow='0 0 0'"/>`;
    for (let i = 0; i < player2Cards.length; i++) {
      player2InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < player1Cards.length; i++) {
      player1InnerHtml += `<div id="no${i}Player1" onclick="clickOnCard(${playerTurn} , player1Cards[${i}])"><img src="${player1Cards[i].ImgURL}" class= "cardsstyle" onmouseover="this.style.boxShadow='0 0 20px #999999'" onmouseleave="this.style.boxShadow='0 0 0'"/></div>`;
    }
    document.getElementById("player1Cards").innerHTML = player1InnerHtml;
    document.getElementById("player2Cards").innerHTML = player2InnerHtml;
    document.getElementById("RemainingDeckArea").innerHTML =
      remainingDeckInnerHtml;
    document.getElementById("mainPlayArea").innerHTML = playAreaInnerHtml;
  }
  if (playerTurn === 2) {
    let player1InnerHtml = "";
    let player2InnerHtml = "";
    let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
    let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle" onclick="clickOnCard(${playerTurn},0)" onmouseover="this.style.boxShadow='0 0 20px #999999'" onmouseleave="this.style.boxShadow='0 0 0'"/>`;
    for (let i = 0; i < player1Cards.length; i++) {
      player1InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" onclick="clickOnCard(${playerTurn},remainingDeck)" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < player2Cards.length; i++) {
      player2InnerHtml += `<div id="no${i}Player2" onclick="clickOnCard(${playerTurn} , player2Cards[${i}])"><img src="${player2Cards[i].ImgURL}" class= "cardsstyle" onmouseover="this.style.boxShadow='0 0 20px #999999'" onmouseleave="this.style.boxShadow='0 0 0'"/></div>`;
    }
    document.getElementById("player1Cards").innerHTML = player1InnerHtml;
    document.getElementById("player2Cards").innerHTML = player2InnerHtml;
    document.getElementById("RemainingDeckArea").innerHTML =
      remainingDeckInnerHtml;
    document.getElementById("mainPlayArea").innerHTML = playAreaInnerHtml;
  }
}
function conditionCheck(card) {
  if (
    card.CardColor === currentCard.CardColor ||
    card.CardName === currentCard.CardName ||
    card.CardColor === "BLACK"
  ) {
    if (card.CardName === "SKIP" || card.CardName === "REVERSE") {
      return [true, "SKIP"];
    } else if (card.CardName === "DRAW TWO") {
      return [true, "DRAW TWO"];
    } else if (card.CardName === "WILD") {
      return [true, "WILD"];
    } else if (card.CardName === "WILD DRAW FOUR") {
      return [true, "WILD DRAW FOUR"];
    } else {
      return [true];
    }
  } else if (card === 0) {
    return "remainingDeck";
  }
  return [false];
}
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
}
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
function newRound() {
  document.getElementById("scoreContainer").style.display = "none";
  newGame();
}
function newGame() {
  mixedDeck = mixing(cardsDeck);
  distributedCards = distributingCards(mixedDeck);
  player1Cards = distributedCards[1];
  player2Cards = distributedCards[2];
  remainingDeck = distributedCards[0];
  currentCardPick = cardToStart(remainingDeck);
  currentCard = currentCardPick[1];
  remainingDeck = currentCardPick[0];
  scoring = localStorage.getItem("scoring");
  sound = localStorage.getItem("sound");
  scoreLimit = localStorage.getItem("ScoreLimit");
  scoreLimit = JSON.parse(scoreLimit);
  document.getElementById("startGame").style.display = "none";
  startingScreen();
  document.getElementById("player1Button").addEventListener("click", () => {
    if (currentTurn === 1) {
      revealPlayerCards(1);
    }
  });
  document.getElementById("player2Button").addEventListener("click", () => {
    if (currentTurn === 2) {
      revealPlayerCards(2);
    }
  });
}

const cardsDeck = deckBuilding();
let mixedDeck;
let distributedCards;
let player1Cards;
let player2Cards;
let remainingDeck;
let currentCardPick;
let currentCard;
let currentTurn;
let scoreLimit;
let player1Score = 0;
let player2Score = 0;
let scoring = "On";
let sound = "On";
let randomNum = Math.floor(Math.random() * (3 - 1) + 1);
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
if (currentTurn === 1) {
  tossWinner = "PLAYER 1";
} else if (currentTurn === 2) {
  tossWinner = "PLAYER 2";
}
document.getElementById("toss").innerHTML = `${tossWinner} WON THE TOSS`;
