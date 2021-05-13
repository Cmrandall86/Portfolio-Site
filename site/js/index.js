let hamburger_icon = document.querySelector('.hamburger');
let nav_text = document.querySelector('.nav-text');
let nav_bar = document.querySelector('.nav-bar');
let closer = document.querySelector('.closer')

hamburger_icon.addEventListener('click', ()=>{
    nav_text.classList.toggle('open')
    hamburger_icon.classList.toggle('closed')
    nav_bar.classList.toggle('open')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('closed')


})

closer.addEventListener('click' ,()=>{
    hamburger_icon.classList.toggle('closed')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('open')
    nav_text.classList.toggle('open')
    nav_bar.classList.toggle('closed')


})

