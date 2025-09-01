const DMLogo = ({ className = "w-10 h-10" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={className}>
      <defs>
        <linearGradient id="dmGradient" x1="0" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path d="M30 20 H60 Q90 20 90 50 Q90 80 60 80 H30 Z" fill="url(#dmGradient)" />
      <path d="M110 80 V20 L130 50 L150 20 V80 Z" fill="url(#dmGradient)" />
    </svg>
  );
  
  export default DMLogo;