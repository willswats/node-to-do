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
