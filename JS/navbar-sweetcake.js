/* 
  NAVBAR OVERLAY JAVASCRIPT - SWEET CAKE
  Agregá este script antes del cierre </body> en tu HTML
*/

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
   const navOverlay = document.getElementById('navOverlay');
  const navMenu = document.getElementById('navMenu');
  const navClose = document.getElementById('navClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;

  // Abrir menú
  function openMenu() {
    navOverlay.classList.add('active');
    navMenu.classList.add('active');
    menuToggle.classList.add('active');
    body.style.overflow = 'hidden';
  }

  // Cerrar menú
  function closeMenu() {
    navOverlay.classList.remove('active');
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    body.style.overflow = '';
  }

  // Event listeners
  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (navClose) navClose.addEventListener('click', closeMenu);
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  // Cerrar al hacer click en un link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });
})
