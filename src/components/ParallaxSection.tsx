import React from 'react';
import { useParallax } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  backgroundImage?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  backgroundImage,
  overlay = false
}) => {
  const offset = useParallax(speed);

  return (
    <section className={cn('relative overflow-hidden', className)}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px)`
          }}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;