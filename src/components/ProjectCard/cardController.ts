export function initializeCard(cardInner: Element) {
  const viewModelBtn = cardInner.querySelector('[data-view-model]');
  const viewFrontBtn = cardInner.querySelector('[data-view-front]');
  
  // Carousel functionality
  let currentSlide = 0;
  const slides = cardInner.querySelectorAll('[data-carousel-slide]');
  const prevBtn = cardInner.querySelector('[data-carousel-prev]');
  const nextBtn = cardInner.querySelector('[data-carousel-next]');
  
  const showSlide = (index: number) => {
    slides.forEach((slide, i) => {
      (slide as HTMLElement).style.opacity = i === index ? '1' : '0';
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  // Auto-advance carousel
  const interval = setInterval(nextSlide, 5000);

  // Event listeners
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    clearInterval(interval);
    prevSlide();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    clearInterval(interval);
    nextSlide();
  });

  // Flip card functionality
  viewModelBtn?.addEventListener('click', () => {
    cardInner.classList.add('rotate-y-180');
    startAutoReturn();
  });

  viewFrontBtn?.addEventListener('click', () => {
    cardInner.classList.remove('rotate-y-180');
  });

  // Auto-return to description after 30 seconds
  let flipTimeout: number;
  const startAutoReturn = () => {
    clearTimeout(flipTimeout);
    flipTimeout = setTimeout(() => {
      cardInner.classList.remove('rotate-y-180');
    }, 30000);
  };
}