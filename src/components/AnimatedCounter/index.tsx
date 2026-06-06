"use client";
import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number; // duration in ms
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad (slows down as it approaches target)
      const easedProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration]);

  return <>{count.toLocaleString()}</>;
};

export default AnimatedCounter;
