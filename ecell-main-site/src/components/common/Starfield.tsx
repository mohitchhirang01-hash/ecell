import React, { useEffect, useRef } from 'react';
import './Starfield.css';

interface StarfieldProps {
  starCount?: number;
}

export const Starfield: React.FC<StarfieldProps> = ({ starCount = 80 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize stars (speed lines)
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 20,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.35 + 0.05,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and move stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(241, 159, 17, ${star.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y);
        ctx.stroke();

        // Move star leftwards
        star.x -= star.speed;

        // Reset star if it drifts off the left side
        if (star.x < 0) {
          star.x = width + star.length;
          star.y = Math.random() * height;
          star.speed = Math.random() * 2 + 0.5;
          star.opacity = Math.random() * 0.35 + 0.05;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount]);

  return <canvas ref={canvasRef} className="global-starfield" />;
};

export default Starfield;
