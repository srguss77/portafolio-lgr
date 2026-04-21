/* ============================================================
   Luis Gustavo Ramírez — Portafolio Personal
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── MENÚ HAMBURGUESA (móvil) ── */
  var menuBtn   = document.getElementById('menu-btn');
  var navLinks  = document.getElementById('nav-links');

  // Abrir / cerrar el menú al hacer click en el botón
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Cerrar el menú al hacer click en cualquier enlace
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Cerrar el menú al hacer click fuera de él
  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

});
