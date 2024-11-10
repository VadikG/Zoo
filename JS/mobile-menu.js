const burgerBtn = document.querySelector('.burger-menu_btn');
const closeBtn = document.querySelector('.mobile-menu_close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});


