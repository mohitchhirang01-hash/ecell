import React, { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animateBy?: 'words' | 'chars';
  triggerOnMount?: boolean;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1,
  animateBy = 'words',
  triggerOnMount = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  const words = useMemo(() => text.split(' '), [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.blur-item');

    const animationConfig = {
      opacity: 1,
      filter: 'blur(0px)',
      duration: duration,
      stagger: animateBy === 'chars' ? 0.015 : 0.03,
      ease: 'power2.out',
    };

    let ctx: gsap.Context;

    ctx = gsap.context(() => {
      if (triggerOnMount) {
        gsap.fromTo(
          items,
          { opacity: 0, filter: 'blur(10px)' },
          { ...animationConfig, delay: delay }
        );
      } else {
        gsap.fromTo(
          items,
          { opacity: 0, filter: 'blur(10px)' },
          {
            ...animationConfig,
            delay: delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, triggerOnMount, animateBy, words]);

  return (
    <span ref={containerRef} className={`${className} inline`}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span className="inline-block whitespace-nowrap">
            {animateBy === 'chars' ? (
              word.split('').map((char, charIndex) => (
                <span key={charIndex} className="blur-item inline-block">
                  {char}
                </span>
              ))
            ) : (
              <span className="blur-item inline-block">{word}</span>
            )}
          </span>
          {wordIndex < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};
export default BlurText;
