/* MENU SHOW*/
const showMenu = (toggleId, navId) => {
    
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav ){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }

};

showMenu('nav-toggle','nav-menu')



/* REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


/* SCROLL REVEAL ANIMATION */
const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/* SCROLL HOME*/

sr.reveal('.home__scroll',{delay:200})
sr.reveal('.home__img',{origin:'right', delay:400})
/* SCROLL ABOUT*/
sr.reveal('.aboutme__section',{delay:400})
sr.reveal('.text',{delay:200})
sr.reveal('.about__social-icon',{delay:400, interval: 200})
/* SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__name',{distance:'20px', delay:50, interval: 100})
sr.reveal('.skills__img',{delay:400})
/*SCROLL PROTFOLIO*/
sr.reveal('.portfolio__img',{interval:200})
/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle',{})
sr.reveal('.contact__text',{interval:200})
sr.reveal('.contact__input',{delay:400})
sr.reveal('.contact__button',{delay:600})

/*HOME TEXT ANIMATION*/
const text = baffle('.home__title');
text.set({
    characters: '.░▒/▒ ░▒▓█ ▒▒▓ ░▒▓▓ ██░██ ▒█▓ ▒<█▓█ ▓██/▓ ▓▓>',
    
    speed: 200
   
});
text.start();
text.reveal(4000);

/*HOME TEXT SUBTITLE ANIMATION*/
const sub = baffle('.home__quote');
sub.set({
    characters: '.░▒/▒ ░▒▓█ ▒▒▓ ░▒▓▓ ██░██ ▒█▓ ▒<█▓█ ▓██/▓ ▓▓>',
     
    speed: 200
   
});
sub.start();
sub.reveal(5000);

/* contact form*/
/* console.log('it works') 

$(document).ready(function(){
    $('.contact__button').click(function(event) {
        event.preventDefault()
        console.log('clicked button')
    
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div>Subject is valid</div>')
        }else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length >= 10){
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }


    })
})
*/