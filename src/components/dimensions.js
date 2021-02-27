import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window ? window : null;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
   
    if (window) window.addEventListener('resize', handleResize);
    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}