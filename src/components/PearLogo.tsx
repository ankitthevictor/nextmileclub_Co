import React from 'react';

interface PearLogoProps {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const PearLogo: React.FC<PearLogoProps> = ({ size = 'md', onClick, className = '' }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div
      id="brand-logo-container"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group transition-opacity hover:opacity-85 ${className}`}
    >
      {/* Handcrafted organic pear SVG with subtle yellow-green gradient and stem/leaf */}
      <div className={`relative flex items-center justify-center shrink-0 ${isSmall ? 'w-5 h-6' : isLarge ? 'w-8 h-9' : 'w-6 h-7'}`}>
        <svg
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        >
          {/* Stem */}
          <path
            d="M12 5.5C12 3.5 13.2 2 14.5 1.5"
            stroke="#5c5030"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Small green leaf */}
          <path
            d="M13.2 2.8C14.8 1.8 17 2.2 17.5 3.2C16.2 3.8 14.5 3.5 13.2 2.8Z"
            fill="#7b8e5c"
          />
          {/* Pear body with organic taper */}
          <path
            d="M12 5.5C8.8 5.5 8 9 7.2 12C6.2 15.5 4 17.2 4 20.8C4 24.6 7.6 27 12 27C16.4 27 20 24.6 20 20.8C20 17.2 17.8 15.5 16.8 12C16 9 15.2 5.5 12 5.5Z"
            fill="url(#pearGradient)"
            stroke="#999343"
            strokeWidth="0.8"
          />
          {/* Subtle natural shading */}
          <path
            d="M8.5 14C7.8 16.5 6.5 18 6.5 21C6.5 24 9 25.5 12 25.5"
            stroke="#b5ad3e"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="pearGradient" x1="6" y1="4" x2="18" y2="27" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dbe878" />
              <stop offset="0.45" stopColor="#c7d95b" />
              <stop offset="0.85" stopColor="#9fb83e" />
              <stop offset="1" stopColor="#819c2c" />
            </linearGradient>
          </defs>
        </svg>
        {/* Subtle Pear branding text next to fruit if desired */}
        <span className="sr-only">Pear</span>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight text-[#1a1c1b] leading-none ${
            isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'
          }`}
        >
          Next Mile Club
        </span>
      </div>
    </div>
  );
};
