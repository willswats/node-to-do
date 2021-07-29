// Enable and disable mobile menu
const mobileMenu = document.querySelector('#mobile-menu')
const navMenu = document.querySelector('#nav-menu')
const activateMobileMenu = () => {
    mobileMenu.classList.toggle('cross')
    navMenu.classList.toggle('drop-down')
}
mobileMenu.addEventListener('click', activateMobileMenu)
