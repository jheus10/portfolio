import React, { useState } from 'react';
export default function CopyEmail() {
    const [emailText, setEmailText] = useState('lavillajheus10@gmail.com');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lavillajheus10@gmail.com');
    setEmailText('Email copied.');
  };

  const handleMouseOut = () => {
    setEmailText('lavillajheus10@gmail.com');
  };

  return (
    <div>
    
      <a
        className="gmail"
        data-text={emailText}
        onClick={handleCopyEmail}
        onMouseOut={handleMouseOut}
      >
        <svg
          width="28"
          height="30"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 7.76804V21.1609C24 21.9209 23.4594 22.5002 22.75 22.5002H21.5V10.3455L14 16.1178L6.5 10.3455V22.5002H5.25C4.54062 22.5002 4 21.9209 4 21.1609V7.76804C4 7.38769 4.13375 7.05286 4.35813 6.81581C4.47498 6.69054 4.61416 6.59172 4.76737 6.52523C4.92059 6.45874 5.08471 6.42593 5.25 6.42876H5.66688L14 12.9022L22.3331 6.42876H22.75C23.105 6.42876 23.4175 6.57206 23.6419 6.81581C23.8662 7.05286 24 7.38769 24 7.76804Z"
            fill="#6885A5"
          />
        </svg>
      </a>
    
  </div>
  )
}
