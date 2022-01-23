let hamburger_icon = document.querySelector('.hamburger');
let nav_text = document.querySelector('.nav-text');
let nav_bar = document.querySelector('.nav-bar');
let closer = document.querySelector('.closer');
let nav_helper = document.querySelector('.nav_hide')
let card_expander = document.querySelectorAll('.card')


hamburger_icon.addEventListener('click', ()=>{
    nav_text.classList.toggle('open')
    hamburger_icon.classList.toggle('closed')
    nav_bar.classList.toggle('open')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('closed')
    nav_helper.classList.toggle('on')
})

closer.addEventListener('click' ,()=>{
    hamburger_icon.classList.toggle('closed')
    closer.classList.toggle('open')
    nav_bar.classList.toggle('open')
    nav_text.classList.toggle('open')
    nav_bar.classList.toggle('closed')
    nav_helper.classList.toggle('on')

})



card_expander.forEach((card)=>{
    card.addEventListener('click', () => {
        card.classList.toggle() // transform 
    })
})


