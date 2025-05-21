const emojis = ['🌸','🌷','💮','🌼','🌺'];

const createFlower = () => {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (Math.random() * 5 + 5) + 's';
  flower.style.fontSize = (Math.random() * 24 + 16) + 'px';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
};

setInterval(createFlower, 500);

// Prezentacja
const presentation = document.getElementById('presentation');
const slides = presentation.querySelectorAll('.slide');
const button = document.querySelector('.presentation-btn');

let currentSlide = 0;

button.addEventListener('click', () => {
  presentation.classList.add('show');
  currentSlide = 0;
  showSlide(currentSlide);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    closePresentation();
  } else {
    showSlide(currentSlide);
  }
}

function closePresentation() {
  presentation.classList.remove('show');
  currentSlide = 0;
  showSlide(currentSlide);
}

window.nextSlide = nextSlide;
window.closePresentation = closePresentation;
