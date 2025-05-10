document.addEventListener('DOMContentLoaded', function() {
    // Menú responsivo
    const btn = document.querySelector('.menu-hamburger');
    const nav = document.querySelector('.menu');
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  
    // Acordeón (efectos.html)
    document.querySelectorAll('.acordeon-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        document.querySelectorAll('.acordeon-contenido').forEach(c => c.style.maxHeight = null);
        if (!content.style.maxHeight) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  
    // Formulario de contacto (sobre-mi.html)
    const form = document.querySelector('#contacto');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por ponerte en contacto.');
        form.reset();
      });
    }
  });
  