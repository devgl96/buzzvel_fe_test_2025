import { twMerge } from "tailwind-merge";

interface LeftArrowProps {
  className?: string;
}

export const LeftArrow = ({ className }: LeftArrowProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("cursor-pointer hover:fill-[#0F172C]", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.341 8.90901C33.2197 9.78769 33.2197 11.2123 32.341 12.091L20.432 24L32.341 35.909C33.2197 36.7877 33.2197 38.2123 32.341 39.091C31.4623 39.9697 30.0377 39.9697 29.159 39.091L15.659 25.591C14.7803 24.7123 14.7803 23.2877 15.659 22.409L29.159 8.90901C30.0377 8.03033 31.4623 8.03033 32.341 8.90901Z"
      />
    </svg>
  );
};
