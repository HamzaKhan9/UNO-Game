module.exports.deckBuilding = function(deckBuilding){
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
        cardsDeck.push({CardColor: "NULL" , CardType: "SPECIAL" , CardName: "WILD" , ImgURL: `./assets/UNO CARDS/Wild.jpg`});
        cardsDeck.push({CardColor: "NULL" , CardType: "SPECIAL" , CardName: "WILD DRAW FOUR" , ImgURL: `./assets/UNO CARDS/Wild_Draw_4.jpg`});
    };
}
