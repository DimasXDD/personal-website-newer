let slideNum = 1;

function showSlide(n){
    let slides = document.getElementsByClassName("slides");

    if(n > slides.length) {n = 1};
    if(n < 1) {n = slides.length};
    for(let i; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
}

function plusSlideNum(){
    slideNum = slideNum++;
}

function minusSlideNum(){
    slideNum = slideNum--;
}

//короче вот в чём суть дела, 2 последние функции вызываются но хер в них работает 1 функция, её я вычленил от туда
//теперь хз чё делать что бы 1 функция работала, придумай чё то лол