// --- Lightbox ---
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.innerHTML = '<span id="close">&times;</span><img src="" alt="Imagen ampliada">';
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('close');

// Abrir imagen en lightbox
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Cerrar con la X
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

// Cerrar clicando fuera de la imagen
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// --- Scroll animations ---
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// --- Mobile menu ---
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// --- Carousel automático ---
let carousel = document.getElementById('carousel');
let scrollAmount = 0;

function autoScroll() {
  if (carousel) {
    scrollAmount += 1;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}

setInterval(autoScroll, 50);
