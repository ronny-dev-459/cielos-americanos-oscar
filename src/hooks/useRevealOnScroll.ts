import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRevealOnScroll = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Primero, resetear todas las clases reveal al montar
    const resetRevealElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        el.classList.remove('revealed');
      });
    };

    resetRevealElements();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]); // Re-ejecutar cuando cambie la ruta
};
