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

  /* ── REVELADO DE SECCIONES AL HACER SCROLL ── */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* ── ENLACE ACTIVO EN LA NAVEGACIÓN ── */
  var sections = document.querySelectorAll('section[id], header[class="hero"]');
  var links    = navLinks.querySelectorAll('a');

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          links.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (section) {
      if (section.id) navObserver.observe(section);
    });
  }

});
