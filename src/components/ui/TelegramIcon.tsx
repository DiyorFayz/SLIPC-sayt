import React from 'react';

interface TelegramIconProps {
  className?: string;
}

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className = 'w-4 h-4 shrink-0' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Official Telegram Blue Circle */}
      <circle cx="12" cy="12" r="12" fill="#24A1DE" />
      {/* Official Telegram Paper Airplane Icon */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.384 5.922a1.077 1.077 0 0 0-1.12-.132L3.633 11.233a1.076 1.076 0 0 0 .048 1.996l3.66 1.144 1.417 4.298a1.077 1.077 0 0 0 1.768.423l2.257-2.193 4.198 3.093a1.076 1.076 0 0 0 1.69-.607l2.87-12.443a1.078 1.078 0 0 0-1.157-1.023zm-8.887 8.358 6.643-5.834c.16-.14.286-.027.142.1l-5.632 5.08-.258 2.876-.895-2.222z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
