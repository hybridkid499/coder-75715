// Función para animar al hacer scroll
export function animarAlScroll() {
    const animatedElements = document.querySelectorAll('.slide-up');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  