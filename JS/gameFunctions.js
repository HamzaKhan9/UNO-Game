const { getRandomArbitrary , imgCreator } = require("./function");

module.exports.mixing = function(deck) { 
    let deckShrinklength = deck.length;
    let mixedDeck = [];
    let cardsToMix = deck.slice();
    for(i=0 ; i<deck.length ; i++){
        let randomNum = getRandomArbitrary(0,deckShrinklength);
        mixedDeck.push(cardsToMix.splice(randomNum,1)[0]);
        deckShrinklength--;
    }
    return mixedDeck;
}

module.exports.distributingCards = function(mixedDeck , noOfPlayers){
    let player1 = [] , player2 = [] , player3 =[] , player4 = [];
    for(i=0 ; i<7 ; i++){
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

module.exports.pick1stCard = function(mixedDeck){
    let pickedCard = mixedDeck.shift();

    if(pickedCard.CardType === "NORMAL"){

        return pickedCard;
    }
     else{
        mixedDeck.unshift(pickedCard);
        mixedDeck = mixing(mixedDeck);
        return pick1stCard(mixedDeck);
    }
}
















 // //GAME PROCESS AFTER DISTRIBUTING CARDS
// // function gameProcess() {
// //     //while(player1.length != 0 || player2.length != 0 ){
// //         //PLAYER 1 TURN
// //         console.log(player1);
// //         let player1pick = 4;
// //         switch(player1pick){
// //             case 0: 
// //                 player1.splice(0,1);
// //                 break;
// //             case 1: 
// //                 player1.splice(1,1);
// //                 break;
// //             case 2: 
// //                 player1.splice(2,1);
// //                 break;
// //             case 3: 
// //                 player1.splice(3,1);
// //                 break;
// //             case 4: 
// //                 player1.splice(4,1);
// //                 break;
// //             case 5: 
// //                 player1.splice(5,1);
// //                 break;
// //             case 6: 
// //                 player1.splice(6,1);
// //                 break;
// //         }
// //         console.log(player1);
// //    //}
// // }