const { deckBuilding } = require("./deck");
const { mixing , distributingCards , pick1stCard } = require("./gameFunctions");
const { getRandomArbitrary , imgCreator } = require("./function");

let deck  = deckBuilding();
let mixedDeck = mixing(deck);
let distributedCards = distributingCards(mixedDeck , 2);
let cardToStart = pick1stCard(distributedCards[0]);

console.log(deck);
