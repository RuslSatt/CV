// --------------- menu burger ----------- //
const menuActive = document.querySelector('.menu-header__menu');
const menuIcon = document.querySelector('.menu-header__icon');
const menuLink = document.querySelectorAll('.menu-header__link');
menuIcon.addEventListener ('click', function (e) {
   menuActive.classList.toggle ('active');
   menuIcon.classList.toggle ('icon-active');
})

menuLink.forEach (menu => {
   menu.addEventListener ('click', function (e) {
      if (menuActive.classList.contains('active')) {
         menuActive.classList.remove ('active');
         menuIcon.classList.remove ('icon-active');
      }
   })
})



const projects = document.querySelector('.projects__row');

// ---------- projects --------------- //
function showDescription (e) {
   if (e.target.closest('.projects__link-description')) {
      let dataValue = e.target.dataset.back;
      const subtitle = document.querySelectorAll('.projects__subtitle');
      subtitle.forEach (sub => {
         const dataBack = sub.dataset.back;
         if (dataValue == dataBack) {
            sub.classList.toggle('active-projects');
         } else {
            sub.classList.remove('active-projects');
         }
      })
      
   }
}

projects.addEventListener ('click', showDescription);


window.addEventListener('click', function (e) {
   const targetClick = e.target;
   if (!targetClick.closest ('.projects__link-description')) {
      const backProjects = document.querySelectorAll('.projects__subtitle');
      backProjects.forEach (back => {
         back.classList.remove ('active-projects');
      })
   }
})

// ----------------- arrow ----------------- //
const arrow = document.querySelector('.arrow');

arrow.addEventListener ('click', function (e) {
   window.scrollTo (0, 0);
})