//Предостережение для будущего меня, ЭТОТ КОД УЖАСЕН, ОН ПИЗДЕЦ, Я НЕ ЗНАЮ КАК ЕГО СТРУКТУРИРОВАТЬ
//так что смотри на комменты, их я точно удалять не буду

var nameIndex = 0;
var isLoaded = false;
var bruhs = 10;

function easterEggPopup(){
    //доделать это говно
    const popup = document.getElementsByClassName("easter-egg-popup");
    const header = document.getElementsByClassName("easter-egg-popup-h3");
    const text = document.getElementsByClassName("easter-egg-popup-p");
    const smText = document.getElementsByClassName("easter-egg-popup-p-small");
    const body = document.getElementsByTagName("body");
    const button = document.getElementsByClassName("easter-egg-popup-btn");

    if(bruhs == 0){
        popup[0].style.display = "none";
        body[0].style.overflow = "visible";
        console.log("иди нахуй"); //Xd делал для теста, пожалуй оставлю навсегда, кто вообще в консоль смотрит?
        return;
    }

    popup[0].style.display = "flex";
    body[0].style.overflow = "hidden";

    header[0].innerHTML = "Вау! Пасхалка!";
    text[0].innerHTML = "Якорь мне в бухту!<br>Не знаю зачем, но я захотел сделать... эту... кнопку...";

    button[0].onclick = function audioEasterEgg(){
        var audio = document.getElementById("bruh-momento");
        if(bruhs > 0){
            audio.play();
            bruhs = bruhs -1;
            smText[0].innerHTML = "Осталось нажатий: " +bruhs;
        } else{
            popup[0].style.display = "none";
            body[0].style.overflow = "visible";
        }
    }
}

function nameChange(){ //смена имени странички, просто прикольно
    if(nameIndex > 1){nameIndex = 0};
    var namePool = ["Дима Сиднев 🙂", "Дима Сиднев 🙃"];
    const websiteName = document.getElementById("website-name");

    websiteName.innerHTML = namePool[nameIndex];
    nameIndex++;
};
setInterval(nameChange, 2000);


window.onload = function(){

    function getTime(){
        var date = new Date();
        const Day = document.getElementById("day");
        const Month = document.getElementById("month");
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
    
        Day.innerHTML = date.getDate();
        Month.innerHTML = monthsConverter(month);
    }
    getTime();

    function loadingScreen(){ //эта функция кажется тупой на первый взгляд, но это мой костыль
        window.scrollTo(0, 1); //тк у меня есть другие функции которые работают от скролла, эта их триггерит
        window.scrollTo(0, 0); //что бы не было видно того, чего видно быть не должно

        var loader = document.getElementsByClassName("loader");
        loader[0].style.animation = "fade-out 3.5s"; //это в будущем возможно может послужить ошибкой, будь аккуратен
    }
    loadingScreen();

    setTimeout(() => { //3 секунды задержка до удаления
        var body = document.getElementsByTagName("body");
        var loader = document.getElementsByClassName("loader"); //отчистка от загрузочного экрана

        loader[0].remove();
        body[0].style.overflow = 'visible'; //шоб скроллбар появился
    }, 3000);
    isLoaded = true;
};

window.onscroll = function(){
    function stickyNav(){ //липкий навбар к верху экрана
        var navbar = document.getElementById("navbar");

        if(window.pageYOffset >= navbar.offsetTop){
            navbar.classList.add("nav-sticky");
        } else{
            navbar.classList.remove("nav-sticky");
        };
    };
    stickyNav();
    while(isLoaded != true){
        window.scrollTo(0,0);
    };
}

const DimaSidnev = document.getElementById("DimaSidnev"); //пасхалочка
DimaSidnev.onclick = function audioEasterEgg1(){
    var audio = document.getElementById("mireska-has-arrived");
    audio.play();
}

const inViewport = (entries, observer) => { //что бы анимации проигрывались при виде, лучше ничего тут не трогай
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting); //эта часть отвечает за проигрывание анимации ТОЛЬКО 1 РАЗ ЗА ПОЯВЛЕНИЕ НА ЭКРАНЕ
        if (entry.intersectionRatio > 0) { //забавный факт, я взял этот код со стэковерфлоу, он не подошёл, ещё поменял чутка местами, выдало ошибку
          observer.unobserve(entry.target); //удалил к хуям функцию, которая тут была и всё заработало
        }; //о дивный мир it, я люблю тебя!
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};
  
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });