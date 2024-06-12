new WOW().init()

const box = document.getElementsByClassName('faq__item-box');

for(i = 0; i < box.length; i++){
    box[i].addEventListener('click' , function (){
        this.classList.toggle('active')
    })
}




let open = document.getElementById('openBtn');
let close = document.getElementById('closeBtn');
let list = document.querySelector('.nav__list');

open.addEventListener('click', () => {
    list.classList.add('active');
});


close.addEventListener('click', () => {
    list.classList.remove('active');
});
