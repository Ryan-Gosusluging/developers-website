//Плавные анимации для элементов
const elements = document.querySelectorAll('._elementsAnimation');

if (elements.length > 0) {
    window.addEventListener('scroll', animationDuringScrolling);
    function animationDuringScrolling() {
        for (let i = 0; i < elements.length; i++) {
            const animElement = elements[i];
            const animElementHeight = animElement.offsetHeight;
            const animElementOffset = offset(animElement).top;
            const start = 4;

            let animElementDot = window.innerHeight - animElementHeight / start;
            if (animElementHeight > window.innerHeight) {
                animElementDot = window.innerHeight - window.innerHeight / start;
            }
            
            if ((pageYOffset > animElementOffset - animElementDot) && pageYOffset < (animElementOffset + animElementHeight)) {
                animElement.classList.add('_workingAnim');
            } else {
                if(!animElement.classList.contains("_noHiding")){
                    animElement.classList.remove('_workingAnim');
                }
            }
        }
    }
    function offset(item) {
            const rect = item.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animationDuringScrolling();
    }, 400);
}

//Кнопка "Наверх" при достижении определенного места на сайте
const goTopButt = document.querySelector(".go-top");
goTopButt.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);
function trackScroll(){
    const offsetik = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offsetik > coords){
        goTopButt.classList.add("go-top--show");
    }
    else{
        goTopButt.classList.remove("go-top--show");
    }
}
function goTop(){
    if(window.pageYOffset > 0){
        window.scrollBy(0,-35);
        setTimeout(goTop, 0);
    }
}

//При нажатии на кнопку "Написать мне" происходит скроллинг до блока заполнения формы
const scrollButton = document.querySelector('.write_me');
const targetBlock = document.querySelector('.last-block');

// Добавляем обработчик события на кнопку
scrollButton.addEventListener('click', () => {
  // Вычисляем координаты блока относительно окна браузера
  const targetBlockPosition = targetBlock.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: targetBlockPosition,
    behavior: 'smooth' // Добавляем плавную анимацию прокрутки
  });
});

// Перезагрузка сайта при нажатии на логотип сайта
document.querySelector('.header_logo').addEventListener('click', function() {
    location.reload();
});

// Изменение темы сайта
document.querySelector('.themes').addEventListener('change',(event) =>{
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('dark', 'light', 'summer');
        document.documentElement.classList.add(event.target.value);
        }
});
    
// Изменение размера шрифта на сайте
document.querySelector('.buttons').addEventListener('click',(event) =>{
    if (event.target.nodeName === 'BUTTON'){
        document.documentElement.classList.remove('reset', 'increaseSize1', 'increaseSize2');
        document.documentElement.classList.add(event.target.value);
    }
});

// Показать/скрыть определенные изображения на сайте
function myImg(){
    let elem1 = document.getElementById('img_1');
    let style1 = getComputedStyle(elem1);
    if(style1.display === "none"){
        document.getElementById('img_1').style.display = "block";
    }
    else if (style1.display !== "none"){
        document.getElementById('img_1').style.display = "none";
    }
    let elem2 = document.getElementById('img_2');
    let style2 = getComputedStyle(elem2);
    if(style2.display === "none"){
        document.getElementById('img_2').style.display = "block";
    }
    else if (style2.display !== "none"){
        document.getElementById('img_2').style.display = "none";
    }
    let elem3 = document.getElementById('img_3');
    let style3 = getComputedStyle(elem3);
    if(style3.display === "none"){
        document.getElementById('img_3').style.display = "block";
    }
    else if (style3.display !== "none"){
        document.getElementById('img_3').style.display = "none";
    }
}

//Появление меню при нажатии на кнопку
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open");
    })
})

//Появление настроек сайта при нажатии на "шестеренку"
document.getElementById("settings-button").addEventListener("click", function() {
    document.querySelector(".settings").classList.toggle("open");
})