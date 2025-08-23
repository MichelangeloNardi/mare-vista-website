import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const scrollY = useScrollAnimation();
  
  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;