import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getTransformClass = () => {
    if (!isIntersecting) {
      switch (direction) {
        case 'up': return 'translate-y-8 opacity-0';
        case 'down': return '-translate-y-8 opacity-0';
        case 'left': return 'translate-x-8 opacity-0';
        case 'right': return '-translate-x-8 opacity-0';
        case 'fade': return 'opacity-0';
        default: return 'translate-y-8 opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;