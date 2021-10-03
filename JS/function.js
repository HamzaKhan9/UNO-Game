module.exports.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports.imgCreator = function(id , card){
    let img = document.createElement("img");
    img.src = card.ImgURL;
    let src = document.getElementById(id);
    src.appendChild(img);
}
