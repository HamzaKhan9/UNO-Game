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
    console.log(checker);
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
  }
  if (playerTurn === 1) {
    let player1InnerHtml = "";
    let player2InnerHtml = "";
    let playAreaInnerHtml = `<img src="${currentCard.ImgURL}" class= "cardsstyle"/>`;
    let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle" onclick="clickOnCard(${playerTurn},0)" />`;
    for (let i = 0; i < player2Cards.length; i++) {
      player2InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < player1Cards.length; i++) {
      let id = `no${i}Player1`;
      player1InnerHtml += `<div id="no${i}Player1" onclick="clickOnCard(${playerTurn} , player1Cards[${i}])"><img src="${player1Cards[i].ImgURL}" class= "cardsstyle"/></div>`;
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
    let remainingDeckInnerHtml = `<img src="./assets/UNO CARDS/UNO-Back_1.png" class= "cardsstyle" onclick="clickOnCard(${playerTurn},0)"/>`;
    for (let i = 0; i < player1Cards.length; i++) {
      player1InnerHtml += `<div><img src="./assets/UNO CARDS/UNO-Back_1.png" onclick="clickOnCard(${playerTurn},remainingDeck)" class= "cardsstyle"/></div>`;
    }
    for (let i = 0; i < player2Cards.length; i++) {
      let id = `no${i}Player2`;
      player2InnerHtml += `<div id="no${i}Player2" onclick="clickOnCard(${playerTurn} , player2Cards[${i}])"><img src="${player2Cards[i].ImgURL}" class= "cardsstyle"/></div>`;
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
    console.log({ currentCard, card });
    if (card.CardName === "SKIP" || card.CardName === "REVERSE") {
      return [true, "SKIP"];
    } else if (card.CardName === "DRAW TWO") {
      return [true, "DRAW TWO"];
    } else if (card.CardName === "WILD") {
      console.log("card.CardName: ", card.CardName);

      return [true, "WILD"];
    } else if (card.CardName === "WILD DRAW FOUR") {
      console.log("card.CardName: ", card.CardName);

      return [true, "WILD DRAW FOUR"];
    } else {
      return [true];
    }
  } else if (card === 0) {
    return "remainingDeck";
  }
  return [false];
}
function clickOnColor(color, currentTurn) {
  if (color === "red") {
    console.log("HI");
    currentCard.CardColor = "RED";
    document.getElementById("colorModal").style.display = "none";
  } else if (color === "blue") {
    currentCard.CardColor = "BLUE";
    document.getElementById("colorModal").style.display = "none";
  } else if (color === "green") {
    currentCard.CardColor = "GREEN";
    document.getElementById("colorModal").style.display = "none";
  } else {
    currentCard.CardColor = "YELLOW";
    document.getElementById("colorModal").style.display = "none";
  }
}
const cardsDeck = deckBuilding();
let mixedDeck = mixing(cardsDeck);
let distributedCards = distributingCards(mixedDeck);
let player1Cards = distributedCards[1];
let player2Cards = distributedCards[2];
let remainingDeck = distributedCards[0];
let currentCardPick = cardToStart(remainingDeck);
let currentCard = currentCardPick[1];
remainingDeck = currentCardPick[0];
startingScreen();
let currentTurn = 1;
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
