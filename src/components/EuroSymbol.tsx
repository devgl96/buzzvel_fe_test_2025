interface EuroSymbolProps {
  color?: string;
}

export const EuroSymbol = ({ color = "#E5E7EB" }: EuroSymbolProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 5.30423C17.4428 4.78906 16.2552 4.5 15 4.5C10.5817 4.5 7 8.08172 7 12.5C7 16.9183 10.5817 20.5 15 20.5C16.2552 20.5 17.4428 20.2109 18.5 19.6958"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.5H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14.5H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
