"use client";
import { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = ({ scroll }) => {
      // Show button when scroll position is greater than 300px
      setIsVisible(scroll > 300);
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
  }, [lenis]);

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        transition: 'all 0.3s ease',
        opacity: isVisible ? '1' : '0',
        visibility: isVisible ? 'visible' : 'hidden',
        transform: `translateY(${isVisible ? '0' : '20px'})`
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        e.target.style.transform = 'scale(1)';
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop; 