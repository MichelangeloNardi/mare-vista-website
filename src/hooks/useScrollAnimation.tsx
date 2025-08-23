import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check visibility of elements with scroll-reveal class
      const elements = document.querySelectorAll('[data-scroll-reveal]');
      const newVisibility: Record<string, boolean> = {};
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementId = element.getAttribute('data-scroll-reveal') || '';
        const threshold = window.innerHeight * 0.1; // Trigger when 10% visible
        
        newVisibility[elementId] = rect.top < window.innerHeight - threshold && rect.bottom > threshold;
      });
      
      setIsVisible(prev => ({ ...prev, ...newVisibility }));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isVisible };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};