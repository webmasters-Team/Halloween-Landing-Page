const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Changing Background Header */

const scrollHeader = () => {
    const header = document.getElementById('header');

    window.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header');

}

window.addEventListener('scroll', scrollHeader);

/* Scrooling through sections with active links */

// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () => {
//     const scrollY = window.scrollY

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//          sectionTop = current.offsetTop - 58,
//          sectionId = current.getAttribute('id'),
//          sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')   

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             sectionClass.classList.add('active-link')
//         }else{
//             sectionClass.classList.remove('active-link')
//         }
            
//     })
// }

/* Showing Scroll Up */

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* Scroll Reveal */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-data, .footer-content, .footer-logo, .footer-description`)
sr.reveal(`.home-tree1`, {origin: 'left', delay: 800})
sr.reveal(`.home-tree2`, {origin: 'right', delay: 800})
sr.reveal(`.home-img`, {delay: 800})
sr.reveal(`.category-card, .items-card`, {interval: 100})
sr.reveal(`.about-img, .about-data, .footer-tree2`, {origin: 'left'})
sr.reveal(`.party-images, .party-data, .footer-tree1`, {origin: 'right'})