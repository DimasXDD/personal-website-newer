var nameIndex = 0;

function nameChange(){
    if(nameIndex > 1){nameIndex = 0};
    var namePool = ["Дима Сиднев 🙂", "Дима Сиднев 🙃"];
    const websiteName = document.getElementById("website-name");

    websiteName.innerHTML = namePool[nameIndex];
    nameIndex++;
};
setInterval(nameChange, 2000);


window.onload = function(){
    var date = new Date();
    var clock = document.getElementById("clock");
    var month;

    function monthsConverter(month){
        switch(date.getMonth()){
            case 0: month = "Января"; 
            return month;
            case 1: month = "Февраля";
            return month;
            case 2: month = "Марта";
            return month;
            case 3: month = "Апреля";
            return month;
            case 4: month = "Мая";
            return month;
            case 5: month = "Июня";
            return month;
            case 6: month = "Июля";
            return month;
            case 7: month = "Августа";
            return month;
            case 8: month = "Сентября";
            return month;
            case 9: month = "Октября";
            return month;
            case 10: month = "Ноября";
            return month;
            case 11: month = "Декабря";
            return month;
        }
    }

    clock.innerHTML =date.getDate() +" "+ monthsConverter(month);
};

window.onscroll = function stickyNav() {
    var navbar = document.getElementById("navbar");

    if(window.pageYOffset >= navbar.offsetTop){
        navbar.classList.add("nav-sticky");
    } else{
        navbar.classList.remove("nav-sticky");
    };

}

const DimaSidnev = document.getElementById("DimaSidnev");
DimaSidnev.onclick = function audioEasterEgg1(){
    var audio = document.getElementById("mireska-has-arrived");
    audio.play();
}


//этот ивент я хочу поподробнее расписать, так как он кажется мне сложным (не я его придумал)
//он отвечает за смену бекграунда на скролл
window.addEventListener("scroll", () => {
    const [red, green, blue] = [141, 153, 174]; //цвет стартового бг
    const background = document.getElementsByClassName("background-color"); //ахтунг! когда ты ищешь по классам, переменная становится по сути списком, так что не забывай индексы

    const y = 1 + (window.scrollY || window.pageYOffset) / 300;
    var [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
    
    //проверка что цвет не слишком далеко уезжал
    if(r<43){r=43};
    if(g<45){g=45};
    if(b<66){b=66};

    background[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`; //как тут 
});