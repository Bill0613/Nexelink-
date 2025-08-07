const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
