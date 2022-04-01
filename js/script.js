var carousel = document.getElementById("text");
var up = document.getElementById("arrowUp");
var down = document.getElementById("arrowDwn");

var wordPool = ["Text", "Yo", "Wtf"];
var i = 0;

up.onclick = function(){
    i++;
    if(i > (wordPool.length - 1)){i = 0};
    carousel.innerHTML = String(wordPool[i]);
};

down.onclick = function(){
    i--;
    if(i < 0){i = (wordPool.length - 1)};
    carousel.innerHTML = String(wordPool[i]);
}