'use client'

import { useEffect, useState } from 'react';
import styles from './index.module.scss'; // Assuming you are using CSS modules

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Check if the user is at the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight - 50) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to the bottom
    }
  };

  return (
    <div
      className={`${styles.scrollArrow} ${isAtBottom ? styles.up : ''}`}
      onClick={handleClick}
    ></div>
  );
};

export default ScrollArrow;

