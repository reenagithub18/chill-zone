import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
};

// Animation wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};