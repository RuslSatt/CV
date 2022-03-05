// --------------- menu burger ----------- //
const menuActive = document.querySelector('.menu-header__menu');
const menuIcon = document.querySelector('.menu-header__icon');

menuIcon.addEventListener ('click', function (e) {
   menuActive.classList.toggle ('active');
   menuIcon.classList.toggle ('icon-active');
})

