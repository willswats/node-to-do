// Enable and disable mobile menu
const mobileMenu = document.querySelector('#mobile-menu')
const navMenu = document.querySelector('#nav-menu')
const activateMobileMenu = () => {
    mobileMenu.classList.toggle('cross')
    navMenu.classList.toggle('drop-down')
}
mobileMenu.addEventListener('click', activateMobileMenu)

const deleteAccountForm = document.querySelector('#delete-account-form')
deleteAccountForm.addEventListener('submit', (event) => {
    if (!confirm("Are you sure you want to delete your account?")) {
        event.preventDefault();
    }
});

const logoutAnchor = document.querySelector('#logout-anchor')
logoutAnchor.addEventListener('click', (event) => {
    if (!confirm("Are you sure you want to logout?")) {
        event.preventDefault();
    }
});

const flashSuccess = document.getElementsByClassName('flash-success')
const flashError = document.getElementsByClassName('flash-error')
const crossSuccess = document.getElementsByClassName('cross-success')
const crossError = document.getElementsByClassName('cross-error')
for (let i = 0, crossSuccessLength = crossSuccess.length; i < crossSuccessLength; i++) {
    crossSuccess[i].addEventListener("click", function () {
        flashSuccess[i].classList.add('fade')
        flashSuccess[i].addEventListener('transitionend', () => {
            flashSuccess[i].classList.add('hide')
        })
    })
    setTimeout(() => {
        flashSuccess[i].classList.add('fade')
        flashSuccess[i].addEventListener('transitionend', () => {
            flashSuccess[i].classList.add('hide')
        })
    }, 5000)
}

for (let i = 0, crossErrorLength = crossError.length; i < crossErrorLength; i++) {
    crossError[i].addEventListener("click", function () {
        flashError[i].classList.add('fade')
        flashError[i].addEventListener('transitionend', () => {
            flashError[i].classList.add('hide')
        })
    })
}
