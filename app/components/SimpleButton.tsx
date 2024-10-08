"use client";
import React from "react";

interface SimpleButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional className for additional styling
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md 
        transition 
        w-full 
        flex 
        items-center 
        justify-center 
        gap-2 
        p-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default SimpleButton;
