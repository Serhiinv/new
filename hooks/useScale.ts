import { useState, useEffect } from "react";

const BASE_WIDTH = 375;
const BASE_HEIGHT = 630; // 812-browser ui = 630

export function useScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth <= 600) {
        const scaleX = windowWidth / BASE_WIDTH;
        const scaleY = windowHeight / BASE_HEIGHT;
        setScale(Math.min(scaleX, scaleY));
      } else if (windowWidth <= 1140) {
        const scaleX = windowWidth / BASE_WIDTH;
        const scaleY = (windowHeight / BASE_HEIGHT) * 1.1;
        setScale(Math.min(scaleX, scaleY));
      } else {
        setScale(1);
      }
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  return scale;
}

