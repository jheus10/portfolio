import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

export default function ArrowBounce() {
  const arrowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(arrowBounce, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const arrowBounce = () => {
    const arrow = $(arrowRef.current);

    if (arrow.hasClass('lift')) {
      arrow.removeClass('lift');
    } else {
      arrow.addClass('lift');
    }
  };

  return (
    <div>
         <a href="#about-me"
      className="arrow" ref={arrowRef}
        ><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.944 23.9953L24 38.9393L9.05599 23.9953L10.8047 22.2154L21.4697 32.8803L22.75 34.1607V32.35V8.75L25.25 8.75V32.35V34.1607L26.5303 32.8803L37.1953 22.2154L38.944 23.9953Z" fill="#6885A5" stroke="#060714" strokeWidth="1.5"/>
        </svg>
        
      </a>
      
    </div>
  );
}
