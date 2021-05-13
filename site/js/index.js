let hamburger_icon = document.querySelector('.hamburger');
let nav_text = document.querySelector('.nav-text');
let nav_bar = document.querySelector('.nav-bar');
let closer = document.querySelector('.closer');
// let page_nav_bar = document.querySelector('.page-nav-bar')
// let page_hamburger = document.querySelector('.page-hamburger');
// let page_closer = document.querySelector('.page-closer');

hamburger_icon.addEventListener('click', ()=>{
    nav_text.classList.toggle('open')
    hamburger_icon.classList.toggle('closed')
    nav_bar.classList.toggle('open')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('closed')
    // page_nav_bar.classList.toggle('closed')
})

closer.addEventListener('click' ,()=>{
    hamburger_icon.classList.toggle('closed')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('open')
    nav_text.classList.toggle('open')
    nav_bar.classList.toggle('closed')
})

// page_hamburger.addEventListener('click', ()=>{
//     nav_text.classList.toggle('open')
//     page_hamburger.classList.toggle('closed')
//     page_nav_bar.classList.toggle('open')
//     page-closer.classList.toggle('open')
//     nav_bar.classList.toggle('closed')
// })

// page_closer.addEventListener('click' ,()=>{
//     page_hamburger.classList.toggle('closed')
//     page-closer.classList.toggle('open')
//     page_nav_bar.classList.toggle('open')
//     nav_text.classList.toggle('open')
//     nav_bar.classList.toggle('closed')
// })