const BasketballIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* outer circle */}
      <circle cx="12" cy="12" r="9" />
      {/* vertical curved seams */}
      <path d="M12 3a18 18 0 0 0 0 18" />
      <path d="M12 3a18 18 0 0 1 0 18" />
      {/* top & bottom arc seams */}
      <path d="M3.5 8a14 14 0 0 0 17 0" />
      <path d="M3.5 16a14 14 0 0 1 17 0" />
    </svg>
  );
  
  export default BasketballIcon;