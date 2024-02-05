import React, { useEffect, useState } from 'react';
import mainpage_img2 from '../images/mainpage_img2.png'

const ScrollAnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const image = document.getElementById('animatedImage');
      
      // You can adjust the values below based on your specific requirements
      const threshold = windowHeight * 0.7; // Adjust this value to control when the animation triggers

      if (scrollY > 100) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`image-container ${isVisible ? 'visible' : ''}`}>
      <img className='scrollimg' id="animatedImage" src={mainpage_img2} alt="Animated Image" />
    </div>
  );
};

export default ScrollAnimatedImage;
