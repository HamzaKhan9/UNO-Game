const cardsDeck = [];
for(let i=0 ; i<10 ; i++){
    cardsDeck.push({CardColor: "BLUE", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Blue_${i}.jpg`});
    cardsDeck.push({CardColor: "RED" , CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Red_${i}.jpg`});
    cardsDeck.push({CardColor: "GREEN", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Green_${i}.jpg`});
    cardsDeck.push({CardColor: "YELLOW", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Yellow_${i}.jpg`});
};
for(let i=1 ; i<10 ; i++){
    cardsDeck.push({CardColor: "BLUE", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Blue_${i}.jpg`});
    cardsDeck.push({CardColor: "RED" , CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Red_${i}.jpg`});
    cardsDeck.push({CardColor: "GREEN", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Green_${i}.jpg`});
    cardsDeck.push({CardColor: "YELLOW", CardType: "NORMAL", CardName: i , ImgURL: `./assets/UNO CARDS/Yellow_${i}.jpg`});
};
for(let i=0 ; i<2 ; i++){
    cardsDeck.push({CardColor: "BLUE", CardType: "SPECIAL" , CardName: "SKIP" , ImgURL: `./assets/UNO CARDS/Blue_Skip.jpg`});
    cardsDeck.push({CardColor: "RED", CardType: "SPECIAL" , CardName: "SKIP" , ImgURL: `./assets/UNO CARDS/Red_Skip.jpg`});
    cardsDeck.push({CardColor: "GREEN", CardType: "SPECIAL" , CardName: "SKIP" , ImgURL: `./assets/UNO CARDS/Green_Skip.jpg`});
    cardsDeck.push({CardColor: "YELLOW", CardType: "SPECIAL" , CardName: "SKIP" , ImgURL: `./assets/UNO CARDS/Yellow_Skip.jpg`});
    cardsDeck.push({CardColor: "BLUE", CardType: "SPECIAL" , CardName: "REVERSE" , ImgURL: `./assets/UNO CARDS/Blue_Reverse.jpg`});
    cardsDeck.push({CardColor: "RED", CardType: "SPECIAL" , CardName: "REVERSE" , ImgURL: `./assets/UNO CARDS/Red_Reverse.jpg`});
    cardsDeck.push({CardColor: "GREEN", CardType: "SPECIAL" , CardName: "REVERSE" , ImgURL: `./assets/UNO CARDS/Green_Reverse.jpg`});
    cardsDeck.push({CardColor: "YELLOW", CardType: "SPECIAL" , CardName: "REVERSE" , ImgURL: `./assets/UNO CARDS/Yellow_Reverse.jpg`});
    cardsDeck.push({CardColor: "BLUE", CardType: "SPECIAL" , CardName: "DRAW TWO" , ImgURL: `./assets/UNO CARDS/Blue_Draw_2.jpg`});
    cardsDeck.push({CardColor: "RED", CardType: "SPECIAL" , CardName: "DRAW TWO" , ImgURL: `./assets/UNO CARDS/Red_Draw_2.jpg`});
    cardsDeck.push({CardColor: "GREEN", CardType: "SPECIAL" , CardName: "DRAW TWO" , ImgURL: `./assets/UNO CARDS/Green_Draw_2.jpg`});
    cardsDeck.push({CardColor: "YELLOW", CardType: "SPECIAL" , CardName: "DRAW TWO" , ImgURL: `./assets/UNO CARDS/Yellow_Draw_2.jpg`}); 
};
for(let i=0 ; i < 4 ; i++){
    cardsDeck.push({CardColor: "BLACK" , CardType: "SPECIAL" , CardName: "WILD" , ImgURL: `./assets/UNO CARDS/Wild.jpg`});
    cardsDeck.push({CardColor: "BLACK" , CardType: "SPECIAL" , CardName: "WILD DRAW FOUR" , ImgURL: `./assets/UNO CARDS/Wild_Draw_4.jpg`});
};
const backside = {
    CardColor: "NULL",
    CardType: "NULL",
    CardName: "BACK SIDE",
    ImgURL: "./assets/UNO CARDS/UNO-Back_1.png"
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function startingImages(id , card){
    let img = document.createElement("img");
    let place = document.getElementById(id);
    img.setAttribute('src', card.ImgURL);
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    if(place) place.appendChild(img);
}

function revealPlayerImages(playerName){
    if(playerName===1){
        for(let i =0 ; i <= 6 ; i++){
            document.getElementById(`no${i}Player${playerName}`).children[0].src = cardsOfPlayer1[i].ImgURL;
        }
    }
    if(playerName===2){
        for(let i =0 ; i <= 6 ; i++){
            document.getElementById(`no${i}Player${playerName}`).children[0].src = cardsOfPlayer2[i].ImgURL;
        }
    }
}

function currentCardImage(card){
    let place = document.getElementById("mainPlayArea").children[0];
    console.log(place);
    place.src = card.ImgURL;
}

function mixing(deck) { 
    let deckShrinklength = deck.length;
    let mixedDeck = [];
    let cardsToMix = deck.slice();
    for(let i=0 ; i<deck.length ; i++){
        let randomNum = getRandomArbitrary(0,deckShrinklength);
        mixedDeck.push(cardsToMix.splice(randomNum,1)[0]);
        deckShrinklength--;
    }
    return mixedDeck;
}

function distributingCards(mixedDeck , noOfPlayers){
    let player1 = [] , player2 = [] , player3 =[] , player4 = [];
    for(let i=0 ; i<7 ; i++){
        if(noOfPlayers===2){
            player1.push(mixedDeck.shift());
            player2.push(mixedDeck.shift());
        }
        if(noOfPlayers===3){
            player1.push(mixedDeck.shift());
            player2.push(mixedDeck.shift());
            player3.push(mixedDeck.shift());
        }
        if(noOfPlayers===4){
            player1.push(mixedDeck.shift());
            player2.push(mixedDeck.shift());
            player3.push(mixedDeck.shift());
            player4.push(mixedDeck.shift());
        }
    }
    if(noOfPlayers===2){
        return [mixedDeck , player1 , player2];}
        if(noOfPlayers===3){
            return [mixedDeck , player1 , player2 , player3];}
            if(noOfPlayers===4){
                return [mixedDeck , player1 , player2 , player3 , player4];}
}

function pick1stCard(mixedDeck){
    let pickedCard = mixedDeck.shift();
    
    if(pickedCard.CardType === "NORMAL"){
        
        return [mixedDeck , pickedCard];
    }
    else{
         mixedDeck.unshift(pickedCard);
         mixedDeck = mixing(mixedDeck);
         return pick1stCard(mixedDeck);
        }
    }

function removePlayerCard(index , playerName){
    cardsOfPlayer1.splice(index,1)
    console.log(cardsOfPlayer1);
    changePlayerImage(index , playerName)
}

function changePlayerImage(index , playerName){
    let parent = document.getElementById("player1Cards").children[index];
    console.log('document.getElementById("player1Cards").children: ', document.getElementById("player1Cards").children);

    console.log('parent: ', parent);
    console.log('index2: ', index);
    parent.remove();
}

function clickOnCard(playerName , card){
        if((playerName==='1')&&(currentTurn === 1)){
            if((card.CardColor===currentCard.CardColor)||(card.CardName===currentCard.CardName)||(card.CardColor==="BLACK")){
                let index = cardsOfPlayer1.findIndex((el)=> el.CardColor===card.CardColor && el.CardName===card.CardName);
                console.log('index: ', index);
                removePlayerCard(index,playerName);
                currentCard = card;
                currentCardImage(currentCard);
            }
        }
        else if(playerName==='2'&&(currentTurn === 2)){
            //console.log(playerName);
            if((card.CardColor===currentCard.CardColor)||(card.CardName===currentCard.CardName)||(card.CardColor==="BLACK"))
                currentCard = card;
                console.log('currentCard: ', currentCard);
                currentCardImage(currentCard);
        }
}


let mixedDeck = mixing(cardsDeck);
let distributedCards = distributingCards(mixedDeck , 2);
let cardsOfPlayer1 = distributedCards[1];
let cardsOfPlayer2 = distributedCards[2];
let returnedCards = pick1stCard(distributedCards[0]);
let remainingDeck = returnedCards[0];
let currentCard = returnedCards[1];
let currentTurn = null; 


for(let i =0 ; i <= 7 ; i++){
    startingImages(`no${i}Player1` , backside);
    startingImages(`no${i}Player2` , backside);
    if(i == 0) startingImages("mainPlayArea" , currentCard);
    if(i == 0) startingImages("RemainingDeckArea" , backside);
}

    
document.getElementById('player1Button').addEventListener('click' , ()=>{
        currentTurn = 1;
        revealPlayerImages(1);});
        document.getElementById('player2Button').addEventListener('click' , ()=>{revealPlayerImages(2)
            currentTurn = 2;
        });
        
eventListenerOnCards("player1Cards",cardsOfPlayer1);


function eventListenerOnCards(id,card){
    for(let i = 0 ; i < 7 ; i++){
        document.getElementById(`no${i}Player1`).addEventListener("click", ()=>{
        let playerName = id.charAt(id.length-6);
        console.log(playerName);
        console.log(card[i]);
        
        clickOnCard(playerName,{...card[i]});
        })
    }
    console.log("KUCH BHI");
    document.getElementById("RemainingDeckArea").children[0].addEventListener("click", ()=>{
        console.log(remainingDeck);
        clickOnCard(remainingDeck);
    })
}