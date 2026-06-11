import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './Loader.css';

gsap.registerPlugin(CustomEase);

interface LoaderProps {
  name?: string;
  subtitle?: string;
  onTransitionStart?: () => void;
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({
  name = 'E-CELL',
  subtitle = 'ENTREPRENEURSHIP CELL',
  onTransitionStart,
  onComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameChars = Array.from(name);

  const onTransitionStartRef = useRef(onTransitionStart);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onTransitionStartRef.current = onTransitionStart;
    onCompleteRef.current = onComplete;
  }, [onTransitionStart, onComplete]);

  useEffect(() => {
    // Prevent scrolling during opening animation
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Create custom eases
    CustomEase.create('colorAndOpacityEase', '0.26, 0.16, 0.1, 1');
    CustomEase.create('transformEase', '0.43, 0.05, 0.17, 1');

    let ctx: gsap.Context;
    let timer1: number;
    let timer2: number;
    let timer3: number;

    const handleLoad = () => {
      ctx = gsap.context(() => {
        // Set explicit initial states to avoid reading uninitialized CSS values
        gsap.set('.openning-name', { opacity: 0, scaleX: 1 });
        gsap.set('.openning-portfolio', { opacity: 0, scaleX: 0.1 });
        gsap.set('.openning-num', { opacity: 0 });
        gsap.set('.openning-name-block', { yPercent: 150 });
        gsap.set('.openning-bg-circle-color-container', { scale: 1, rotate: 0 });
        gsap.set('.openning-bg-circle', { scale: 1 });
        gsap.set('.openning-circle', { scale: 0, opacity: 1 });
        
        gsap.set('.openning-circle-line-01', { y: 0, opacity: 1 });
        gsap.set('.openning-circle-line-02', { y: 0, opacity: 1 });
        
        gsap.set('.openning-num-first', { y: 0 });
        gsap.set('.openning-num-second', { y: 0, opacity: 1 });
        gsap.set('.openning-num-third', { y: 0, opacity: 1 });
        gsap.set('.openning-num-forth', { y: 0, opacity: 0 });
        gsap.set('.openning-num-five', { y: 0, opacity: 0 });
        gsap.set('.openning-percent', { y: 0 });

        // Set name container opacity to 1 immediately when load starts
        gsap.set('.openning-name', { opacity: 1 });
        
        // Initial fade-in of the number container
        timer1 = window.setTimeout(() => {
          gsap.set('.openning-num', { opacity: 1.0 });
        }, 280);

        // Roll first column of numbers (0 -> 1)
        gsap.to('.openning-num-first', {
          duration: 0.28,
          delay: 3.44,
          ease: 'transformEase',
          y: -72,
        });

        // Roll second column of numbers (0 -> 9)
        gsap.to('.openning-num-second', {
          duration: 2.98,
          delay: 0.58,
          ease: 'transformEase',
          y: -648,
        });

        // Roll third column of numbers (0 -> 9)
        gsap.to('.openning-num-third', {
          duration: 2.98,
          delay: 0.58,
          ease: 'transformEase',
          y: -1368,
        });

        // Shifting elements offscreen when hitting 100%
        gsap.to('.openning-num-first', {
          duration: 1.18,
          delay: 3.98,
          ease: 'transformEase',
          y: -144,
        });
        gsap.to('.openning-num-forth', {
          duration: 1.18,
          delay: 4.08,
          ease: 'transformEase',
          y: -72,
        });
        gsap.to('.openning-num-five', {
          duration: 1.18,
          delay: 4.18,
          ease: 'transformEase',
          y: -72,
        });
        gsap.to('.openning-percent', {
          duration: 1.18,
          delay: 4.28,
          ease: 'transformEase',
          y: -72,
        });

        // Name characters stagger slide up
        gsap.to('.openning-name-block', {
          duration: 0.78,
          delay: 4.08,
          ease: 'transformEase',
          stagger: {
            each: 0.04,
          },
          yPercent: 0,
        });

        // Compress name horizontally and fade out
        gsap.to('.openning-name', {
          duration: 0.58,
          delay: 5.38,
          ease: 'transformEase',
          scaleX: 0.2,
          onComplete: () => {
            gsap.to('.openning-name', {
              duration: 0.28,
              ease: 'colorAndOpacityEase',
              opacity: 0,
            });
            gsap.to('.openning-portfolio', {
              duration: 0.28,
              ease: 'colorAndOpacityEase',
              opacity: 1,
            });
          },
        });

        // Expand portfolio subtitle
        gsap.to('.openning-portfolio', {
          duration: 0.78,
          delay: 5.98,
          ease: 'transformEase',
          scaleX: 1.0,
        });

        // Vertical line top shooting down
        gsap.to('.openning-circle-line-01', {
          duration: 0.18,
          delay: 3.48,
          ease: 'transformEase',
          y: window.innerHeight / 2 + 43,
          onComplete: () => {
            gsap.to('.openning-num-second', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 0,
            });
            gsap.to('.openning-num-third', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 0,
            });
            gsap.to('.openning-circle-line-01', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 0,
            });
            gsap.to('.openning-num-forth', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 1,
            });
            gsap.to('.openning-num-five', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 1,
            });
          },
        });

        // Vertical line bottom shooting up
        gsap.to('.openning-circle-line-02', {
          duration: 0.18,
          delay: 3.48,
          ease: 'transformEase',
          y: -window.innerHeight / 2 - 43,
          onComplete: () => {
            gsap.to('.openning-circle-line-02', {
              duration: 0.08,
              ease: 'power1.in',
              opacity: 0,
            });
          },
        });

        // Middle outline circle ripple
        gsap.to('.openning-circle', {
          duration: 0.78,
          delay: 3.62,
          ease: 'expo.out',
          opacity: 0,
          scale: 1,
        });

        // Decorative colored background circles shrink & rotate
        gsap.to('.openning-bg-circle-color-container', {
          duration: 1.88,
          delay: 3.38,
          ease: 'transformEase',
          scale: 0,
          rotate: 240,
          stagger: {
            each: 0.09,
          },
        });

        // Main background circle shrink and trigger finished callback
        gsap.to('.openning-bg-circle', {
          duration: 1.98,
          delay: 3.58,
          ease: 'transformEase',
          scale: 0,
          onComplete: () => {
            // Keep displaying subtitle/loader element for final transitions
            timer2 = window.setTimeout(() => {
              if (onTransitionStartRef.current) {
                onTransitionStartRef.current();
              }
            }, 1680);

            timer3 = window.setTimeout(() => {
              document.body.style.overflow = originalStyle;
              if (onCompleteRef.current) {
                onCompleteRef.current();
              }
            }, 2480);
          },
        });
      }, containerRef);
    };

    // Trigger handleLoad based on load status
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = originalStyle;
      if (ctx) {
        ctx.revert();
      }
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);
    };
  }, []);

  return (
    <div ref={containerRef} className="openning">
      <div className="openning-bg-circle-container">
        <div className="openning-bg-circle">
          <span className="openning-bg-circle-element"></span>
        </div>
      </div>
      
      {Array.from({ length: 9 }).map((_, idx) => {
        const indexStr = String(idx + 1).padStart(2, '0');
        return (
          <div key={idx} className="openning-bg-circle-color-container">
            <div className={`openning-bg-circle-color-${indexStr}`}></div>
          </div>
        );
      })}

      <div className="openning-num">
        <span className="openning-num-first">
          0<br />1
        </span>
        <span className="openning-num-second">
          0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
        </span>
        <span className="openning-num-third">
          0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
          0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
        </span>
        <span className="openning-num-forth">
          0
        </span>
        <span className="openning-num-five">
          0
        </span>
        <span className="openning-percent">%</span>
      </div>

      <div className="openning-name">
        {nameChars.map((char, idx) => (
          <span
            key={idx}
            className="openning-name-block"
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      <div className="openning-portfolio">
        {subtitle}
      </div>

      <div className="openning-circle-line-01"></div>
      <div className="openning-circle-line-02"></div>
      <div className="openning-circle"></div>
    </div>
  );
};
