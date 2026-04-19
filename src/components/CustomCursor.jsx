import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverable = (e) => {
      const target = e.target;
      if (target.matches('a, button, [role="button"], input, [class*="hover"]')) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleHoverable);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleHoverable);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.5 }}
    />
  );
}
